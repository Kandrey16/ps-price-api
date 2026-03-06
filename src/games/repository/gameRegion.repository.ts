import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { IGame } from '../dto/game.interface';

export class GameRegionRepository {
  constructor(private prisma: PrismaService) {}

  async findByCode(code: string) {
    return this.prisma.region.findUnique({
      where: { code: code },
    });
  }

  async upsertVersionRegion(
    sku: string,
    region,
    game: IGame,
    tx?: Prisma.TransactionClient,
  ) {
    const client = tx ?? this.prisma;
    return client.gameVersionRegion.upsert({
      where: {
        SKU_regionId: {
          SKU: sku,
          regionId: region.id,
        },
      },
      update: {},
      create: {
        SKU: sku,
        regionId: region.id,
        storeUrl: game.fullUrl,
      },
    });
  }
}
