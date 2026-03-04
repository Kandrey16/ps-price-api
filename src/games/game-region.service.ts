import { Injectable } from '@nestjs/common';
import { PriceType, Prisma } from '@prisma/client';
import { IGame } from 'src/parcer/dto/game.interface';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class GameRegionService {
  constructor(private readonly prisma: PrismaService) {}

  async getOrCreate(tx: Prisma.TransactionClient, game: IGame, gameId: string) {
    const regionCode = game.region.replace(/-store$/i, '').toLowerCase();
    const strRegion = String(game.regionId);

    const region = await tx.region.findUnique({
      where: { code: regionCode },
    });

    if (!region) throw new Error(`Unknown region ${game.region}`);

    const gameVersionRegion = await tx.gameVersionRegion.upsert({
      where: {
        SKU_regionId: {
          SKU: strRegion,
          regionId: region.id,
        },
      },
      update: {},
      create: {
        SKU: strRegion,
        regionId: region.id,
        storeUrl: game.fullUrl,
      },
    });

    const gamePrice = await tx.price.upsert({
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

    return {
      gameVersionRegion,
      gamePrice,
    };

    function resolvePriceType(game: IGame): PriceType {
      if (game.psPlusPrice !== null) return PriceType.PS_PLUS;
      if (game.hasDiscount === true) return PriceType.DISCOUNT;
      return PriceType.BASE;
    }
  }
}
