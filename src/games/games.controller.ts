import { Body, Controller, Get, Post } from '@nestjs/common';
import { GamesService } from './games.service';
import { IGame } from 'src/parcer/dto/game.interface';

@Controller('games')
export class GamesController {
  constructor(private readonly gamesService: GamesService) {}

  @Post()
  save(@Body() game: IGame) {
    return this.gamesService.saveGame(game);
  }

  @Get()
  findAll() {
    return this.gamesService.findAll();
  }
}
