import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Region } from './region.model';
import { Price } from './price.model';

@ObjectType()
export class GameVersionRegion {
  @Field(() => Int)
  id: number;

  @Field({ nullable: true })
  storeUrl?: string;

  @Field()
  isAvailable: boolean;

  @Field({ nullable: true })
  lastChecked?: Date;

  @Field(() => Region)
  region: Region;

  @Field(() => [Price])
  Price: Price[];

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;
}
