import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class PsPlus {
  @Field(() => ID)
  id: string;

  @Field()
  type: string;
}
