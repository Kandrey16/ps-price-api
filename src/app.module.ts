import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { ParcerModule } from './parcer/parcer.module';
import { LoggerModule } from './logger/logger.module';
import { GamesModule } from './games/games.module';
import { GamePsPlusService } from './games/game-ps-plus.service';
import { GameEditionService } from './games/game-edition.service';
import { GameRegionService } from './games/game-region.service';
import { ImportModule } from './import/import.module';

@Module({
  imports: [PrismaModule, ParcerModule, LoggerModule, GamesModule, ImportModule],
  controllers: [AppController],
  providers: [
    AppService,
    GamePsPlusService,
    GameEditionService,
    GameRegionService,
  ],
})
export class AppModule {}
