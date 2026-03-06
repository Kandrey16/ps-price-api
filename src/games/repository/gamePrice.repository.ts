import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { resolvePriceType } from 'src/utils/resolvePriceType';
import { IGame } from '../dto/game.interface';

@Injectable()
export class GamePriceRepository {
  constructor(private readonly prisma: PrismaService) {}

  async upsert(game: IGame, gameVersionRegion, tx?: Prisma.TransactionClient) {
    const client = tx ?? this.prisma;
    return client.price.upsert({
      where: {
        gameVersionRegionId: gameVersionRegion.id,
      },
      update: {
        price: game.price,
        originalPrice: game.originalPrice,
        psPlusPrice: game.psPlusPrice,
        currency: game.currency,
        type: resolvePriceType(game),
        hasDiscount: game.hasDiscount,
        discountPercent: game.discountPercent,
        recordedAt: new Date(),
      },
      create: {
        gameVersionRegionId: gameVersionRegion.id,
        price: game.price,
        originalPrice: game.originalPrice,
        psPlusPrice: game.psPlusPrice,
        currency: game.currency,
        type: resolvePriceType(game),
        hasDiscount: game.hasDiscount,
        discountPercent: game.discountPercent,
      },
    });
  }
}
