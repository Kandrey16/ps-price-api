import { Injectable } from '@nestjs/common';
import { GameRepository } from '../repository/game.repository';
import { GameMapper } from '../mapper/game.mapper';
import { IGame } from '../dto/game.interface';

@Injectable()
export class GameQueryService {
  constructor(
    private readonly gameRepo: GameRepository,
    private readonly gameMapper: GameMapper,
  ) {}

  async findAll() {
    const rawGames = await this.gameRepo.findAll();
    return rawGames.map((game) => this.gameMapper.toListItem(game));
  }

  async upsert(game: IGame) {
    return this.gameRepo.upsert(game);
  }
}
