import { Global, Module } from '@nestjs/common';
import { LoggerService } from './logger.service';
import { LoggerController } from './logger.controller';
import { WinstonModule } from 'nest-winston';

@Global()
@Module({
  imports: [WinstonModule.forRoot(LoggerService.getWinstonConfig())],
  controllers: [LoggerController],
  providers: [LoggerService],
  exports: [LoggerService],
})
export class LoggerModule {}
