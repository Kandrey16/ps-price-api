import { Body, Controller, Get, Post } from '@nestjs/common';
import { GameQueryService } from './services/gameQuery.service';
import { GameSaverService } from './services/gameSaver.service';
import { IGame } from './dto/game.interface';

@Controller('games')
export class GamesController {
  constructor(
    private readonly gameQueryService: GameQueryService,
    private readonly gameSaverService: GameSaverService,
  ) {}

  @Post()
  save(@Body() game: IGame) {
    return this.gameSaverService.saveGame(game);
  }

  @Get()
  findAll() {
    return this.gameQueryService.findAll();
  }
}
