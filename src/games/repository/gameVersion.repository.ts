import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

export class GameVersionRepository {
  constructor(private prisma: PrismaService) {}

  async upsert(sku, edition, game, tx?: Prisma.TransactionClient) {
    const client = tx ?? this.prisma;
    return client.gameVersion.upsert({
      where: {
        editionId_platform: {
          editionId: edition.id,
          platform: game.platform,
        },
      },
      update: {},
      create: {
        SKU: sku,
        editionId: edition.id,
        platform: game.platform,
      },
    });
  }
}
