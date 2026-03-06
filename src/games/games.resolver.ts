import { Args, Query, Resolver } from '@nestjs/graphql';
import { Game } from './model/game.model';
import { GameFilterInput } from './dto/game-filter.dto';
import { GameQueryService } from './services/gameQuery.service';

@Resolver(() => Game)
export class GamesResolver {
  constructor(private readonly gamesService: GameQueryService) {}

  @Query(() => [Game])
  games(@Args('filter', { nullable: true }) filter?: GameFilterInput) {
    return this.gamesService.findAll(filter);
  }

  @Query(() => Game, { nullable: true })
  game(@Args('slug', { type: () => String }) slug: string) {
    return this.gamesService.findOne(slug);
  }
}
