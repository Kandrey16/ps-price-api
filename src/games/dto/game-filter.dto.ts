import { Field, InputType, Int } from '@nestjs/graphql';

@InputType()
export class GameFilterInput {
  @Field({ nullable: true })
  platform?: string; // ps4 | ps5

  @Field({ nullable: true })
  region?: string; // ru | tr | us

  @Field(() => Int, { nullable: true })
  minPrice?: number;

  @Field(() => Int, { nullable: true })
  maxPrice?: number;

  @Field({ nullable: true })
  languageCode?: string; // en | ru

  @Field(() => Int, { nullable: true })
  minRating?: number;
}
