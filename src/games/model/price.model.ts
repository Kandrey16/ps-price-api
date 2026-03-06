import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Price {
  @Field(() => Int)
  id: number;

  @Field(() => Number)
  price: number;

  @Field(() => Number, { nullable: true })
  originalPrice?: number;

  @Field(() => Number, { nullable: true })
  psPlusPrice?: number;

  @Field()
  currency: string;

  @Field()
  type: string;

  @Field()
  hasDiscount: boolean;

  @Field(() => Int, { nullable: true })
  discountPercent?: number;

  @Field({ nullable: true })
  discountStart?: Date;

  @Field({ nullable: true })
  discountFinish?: Date;

  @Field()
  recordedAt: Date;
}
