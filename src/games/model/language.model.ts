import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Language {
  @Field(() => Int)
  id: number;

  @Field()
  code: string;

  @Field()
  name: string;
}

@ObjectType()
export class GameLanguageSupport {
  @Field(() => Int)
  id: number;

  @Field()
  languageType?: string;

  @Field(() => Language)
  language: Language;

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;
}
