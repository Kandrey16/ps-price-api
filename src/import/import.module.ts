import { Module } from '@nestjs/common';
import { ImportOrchestratorService } from './import-orchestrator.service';
import { ImportController } from './import.controller';
import { GamesModule } from 'src/games/games.module';
import { ParcerModule } from 'src/parcer/parcer.module';

@Module({
  imports: [GamesModule, ParcerModule],
  controllers: [ImportController],
  providers: [ImportOrchestratorService],
  exports: [ImportOrchestratorService],
})
export class ImportModule {}
