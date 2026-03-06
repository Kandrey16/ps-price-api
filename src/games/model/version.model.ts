import { Field, ID, Int, ObjectType } from '@nestjs/graphql';
import { GameVersionRegion } from './versionRegion.model';

@ObjectType()
export class GameEdition {
  @Field(() => Int)
  id: number;

  @Field()
  name: string;

  @Field(() => [GameVersion])
  GameVersion: GameVersion[];
}

@ObjectType()
export class GameVersion {
  @Field(() => ID)
  SKU: string;

  @Field()
  platform: string;

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;

  @Field(() => [GameVersionRegion])
  GameVersionRegion: GameVersionRegion[];
}
