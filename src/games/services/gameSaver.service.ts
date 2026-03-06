import { Injectable } from '@nestjs/common';
import { PsPlusType } from '@prisma/client';
import { GameSupportSyncerService } from './Game/gameLanguageSyncer.service';
import { GameRegionService } from './Game/gameRegion.service';
import { LoggerService } from 'src/logger/logger.service';
import * as fs from 'fs/promises';
import { GameRepository } from '../repository/game.repository';
import { GameEditionRepository } from '../repository/gameEdition.repository';
import { GameImageRepository } from '../repository/gameImage.repository';
import { GamePsPlusRepository } from '../repository/gamePsPlus.repository';
import { TransactionService } from 'src/prisma/unitOfWork/transaction.service';
import { IGame } from '../dto/game.interface';

@Injectable()
export class GameSaverService {
  constructor(
    private readonly logger: LoggerService,
    private readonly txService: TransactionService,
    private readonly gameSupport: GameSupportSyncerService,
    private readonly gameRegion: GameRegionService,

    private readonly gameRepo: GameRepository,
    private readonly editionRepo: GameEditionRepository,
    private readonly imageRepo: GameImageRepository,
    private readonly psPlusRepo: GamePsPlusRepository,
  ) {}

  async importFromFile(filePath: string) {
    this.logger.info('Import started from file', { filePath });
    const raw = await fs.readFile(filePath, 'utf-8');
    const games = JSON.parse(raw);

    for (const game of games) {
      await this.saveGame(game);
    }

    this.logger.info('Import finished', {
      filePath,
      gamesCount: games.length,
    });
  }

  async saveGame(game: IGame) {
    return this.txService.withTransaction(async (tx) => {
      await this.logger.safeStep('game', game, () =>
        this.gameRepo.upsert(game, tx),
      );

      await this.logger.safeStep('imageIcon', game, () =>
        this.imageRepo.saveIcon(game, tx),
      );

      await this.logger.safeStep('imageMain', game, () =>
        this.imageRepo.saveMain(game, tx),
      );

      await this.logger.safeStep('Language', game, () =>
        this.gameSupport.syncLanguages(game, tx),
      );

      if (game.hasPsPlus === true) {
        await this.psPlusRepo.checkPsPlus(game, PsPlusType.EXTRA, tx);
      }

      await this.logger.safeStep('Edition', game, () =>
        this.editionRepo.upsert(game, tx),
      );

      await this.logger.safeStep('Region', game, () =>
        this.gameRegion.getOrCreate(game, tx),
      );
    });
  }
}
