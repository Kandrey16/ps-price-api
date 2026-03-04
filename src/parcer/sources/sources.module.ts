import { Module } from '@nestjs/common';
import { PsDealsSource } from './ps_deals/ps_deals.source';
import { PsStoreSource } from './ps_store/ps_store.source';

@Module({
  providers: [PsDealsSource, PsStoreSource],
  exports: [PsDealsSource, PsStoreSource],
})
export class SourcesModule {}
