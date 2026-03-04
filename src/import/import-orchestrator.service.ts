import { Injectable } from '@nestjs/common';
import { GamesService } from 'src/games/games.service';
import { LoggerService } from 'src/logger/logger.service';
import { ParcerService } from 'src/parcer/parcer.service';

@Injectable()
export class ImportOrchestratorService {
  constructor(
    private readonly logger: LoggerService,
    private readonly parser: ParcerService,
    private readonly games: GamesService,
  ) {}

  async parseAndImportPsDeals() {
    this.logger.info('Import started');

    const { file, count } = await this.parser.parsePsDeals();

    await this.games.importFromFile(file);

    this.logger.info('Import finished', { file, count });
  }
}
