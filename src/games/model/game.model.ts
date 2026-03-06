import { Field, ID, Int, ObjectType } from '@nestjs/graphql';
import { GameImage } from './image.model';
import { GameLanguageSupport } from './language.model';
import { PsPlus } from './psPlus.model';
import { GameEdition } from './version.model';

@ObjectType()
export class Game {
  @Field(() => ID)
  id: string;

  @Field()
  slug: string;

  @Field()
  title: string;

  @Field(() => Int, { nullable: true })
  rating?: number;

  @Field({ nullable: true })
  genre?: string;

  @Field({ nullable: true })
  publisher?: string;

  @Field({ nullable: true })
  isFreeToPlay?: boolean;

  @Field({ nullable: true })
  releaseDate?: Date;

  @Field()
  releaseStatus: string;

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;

  @Field(() => [GameLanguageSupport], { nullable: true })
  GameLanguageSupport?: GameLanguageSupport[];

  @Field(() => [GameImage], { nullable: true })
  GameImage?: GameImage[];

  @Field(() => [PsPlus], { nullable: true })
  PsPlus?: PsPlus[];

  @Field(() => [GameEdition], { nullable: true })
  GameEdition?: GameEdition[];
}
