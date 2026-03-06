import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { ParcerModule } from './parcer/parcer.module';
import { LoggerModule } from './logger/logger.module';
import { GamesModule } from './games/games.module';
import { ImportModule } from './import/import.module';

@Module({
  imports: [
    PrismaModule,
    ParcerModule,
    LoggerModule,
    GamesModule,
    ImportModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
