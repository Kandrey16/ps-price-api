import { Module } from '@nestjs/common';
import { GameQueryService } from './services/gameQuery.service';
import { GamesController } from './games.controller';
import { GameSupportSyncerService } from './services/Game/gameLanguageSyncer.service';
import { GameEditionService } from './services/Game/gameEdition.service';
import { GameRegionService } from './services/Game/gameRegion.service';
import { GameMapper } from './mapper/game.mapper';
import { GameRepository } from './repository/game.repository';
import { GameEditionRepository } from './repository/gameEdition.repository';
import { GameLanguageRepository } from './repository/gameLanguage.repository';
import { GamePriceRepository } from './repository/gamePrice.repository';
import { GameVersionRepository } from './repository/gameVersion.repository';
import { GameImageRepository } from './repository/gameImage.repository';
import { GameRegionRepository } from './repository/gameRegion.repository';
import { GamePsPlusRepository } from './repository/gamePsPlus.repository';
import { GameSaverService } from './services/gameSaver.service';
import { GamesResolver } from './games.resolver';

@Module({
  controllers: [GamesController],
  providers: [
    GamesResolver,
    GameRepository,
    GameVersionRepository,
    GameEditionRepository,
    GameLanguageRepository,
    GamePriceRepository,
    GameImageRepository,
    GameRegionRepository,
    GamePsPlusRepository,

    GameQueryService,
    GameSaverService,
    GameEditionService,
    GameRegionService,
    GameSupportSyncerService,

    GameMapper,
  ],
  exports: [GameQueryService, GameSaverService],
})
export class GamesModule {}
