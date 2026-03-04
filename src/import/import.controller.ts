import { Controller, Get, Post } from '@nestjs/common';
import { ImportOrchestratorService } from './import-orchestrator.service';

@Controller('import')
export class ImportController {
  constructor(private readonly importService: ImportOrchestratorService) {}

  @Get('ps_deals')
  async runImport() {
    return this.importService.parseAndImportPsDeals();
  }
}
