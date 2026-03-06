import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class GameImage {
  @Field(() => Int)
  id: number;

  @Field({ nullable: true })
  url?: string;

  @Field()
  type: string;
}
