import { Module } from '@nestjs/common';
import { ParcerService } from './parcer.service';
import { ParcerController } from './parcer.controller';
import { PuppeteerModule } from './puppeteer/puppeteer.module';
import { SourcesModule } from './sources/sources.module';
import { PsDealsSource } from './sources/ps_deals/ps_deals.source';
import { PsStoreSource } from './sources/ps_store/ps_store.source';
import { GamesModule } from 'src/games/games.module';

@Module({
  imports: [PuppeteerModule, SourcesModule, GamesModule],
  controllers: [ParcerController],
  providers: [ParcerService, PsDealsSource, PsStoreSource],
  exports: [ParcerService],
})
export class ParcerModule {}
