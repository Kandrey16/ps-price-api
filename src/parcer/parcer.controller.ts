import { Controller, Get } from '@nestjs/common';
import { ParcerService } from './parcer.service';

@Controller('parcer')
export class ParcerController {
  constructor(
    private readonly parcerService: ParcerService,
  ) {}

  @Get('ps_deals')
  async parseDeals() {
    return this.parcerService.parsePsDeals();
  }
}
