import { Injectable } from '@nestjs/common';
import { normalizePlatform } from 'src/parcer/normalizers/platform.normalizer';
import { GameEditionRepository } from '../../repository/gameEdition.repository';
import { GameVersionRepository } from '../../repository/gameVersion.repository';
import { IGame } from 'src/games/dto/game.interface';

@Injectable()
export class GameEditionService {
  constructor(
    private readonly gameEditionRepo: GameEditionRepository,
    private readonly gameVersionRepo: GameVersionRepository,
  ) {}

  async getOrCreate(game: IGame) {
    const platform = normalizePlatform(game.platform);
    const sku = String(game.regionId);

    const edition = this.gameEditionRepo.upsert(game);
    const version = this.gameVersionRepo.upsert(sku, platform, game);

    return {
      edition,
      version,
    };
  }
}
