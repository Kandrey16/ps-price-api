import { PriceType } from '@prisma/client';
import { IGame } from 'src/games/dto/game.interface';

export function resolvePriceType(game: IGame): PriceType {
  if (game.psPlusPrice !== null) return PriceType.PS_PLUS;
  if (game.hasDiscount === true) return PriceType.DISCOUNT;
  return PriceType.BASE;
}
