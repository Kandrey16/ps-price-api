import { Module } from '@nestjs/common';
import { GamesService } from './games.service';
import { GamesController } from './games.controller';
import { GameImageService } from './game-image.service';
import { GameSupportService } from './game-support.service';
import { GameEditionService } from './game-edition.service';
import { GamePsPlusService } from './game-ps-plus.service';
import { GameRegionService } from './game-region.service';
import { GamePersistence } from './game.persistence';

@Module({
  controllers: [GamesController],
  providers: [
    GamesService,
    GameImageService,
    GameSupportService,
    GameEditionService,
    GamePsPlusService,
    GameRegionService,
    GamePersistence,
  ],
  exports: [GamesService],
})
export class GamesModule {}
