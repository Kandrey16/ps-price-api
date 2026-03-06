import { Injectable } from '@nestjs/common';
import { GameRepository } from '../repository/game.repository';
import { GameMapper } from '../mapper/game.mapper';
import { IGame } from '../dto/game.interface';
import { GameFilterInput } from '../dto/game-filter.dto';

@Injectable()
export class GameQueryService {
  constructor(
    private readonly gameRepo: GameRepository,
    private readonly gameMapper: GameMapper,
  ) {}

  async findAll(filter: GameFilterInput) {
    const rawGames = await this.gameRepo.findAll(filter);
    return rawGames.map((game) => this.gameMapper.toListItem(game));
  }

  async findOne(slug: string) {
    return this.gameRepo.findOne(slug);
  }

  async upsert(game: IGame) {
    return this.gameRepo.upsert(game);
  }
}
