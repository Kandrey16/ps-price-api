import { Injectable } from '@nestjs/common';
import { GameSaverService } from 'src/games/services/gameSaver.service';
import { LoggerService } from 'src/logger/logger.service';
import { ParcerService } from 'src/parcer/parcer.service';

@Injectable()
export class ImportOrchestratorService {
  constructor(
    private readonly logger: LoggerService,
    private readonly parser: ParcerService,
    private readonly gameSaver: GameSaverService,
  ) {}

  async parseAndImportPsDeals() {
    this.logger.info('Import started');

    const { file, count } = await this.parser.parsePsDeals();

    await this.gameSaver.importFromFile(file);

    this.logger.info('Import finished', { file, count });
  }
}
