import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { IGame } from 'src/parcer/dto/game.interface';
import { normalizePlatform } from 'src/parcer/normalizers/platform.normalizer';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class GameEditionService {
  constructor(private readonly prisma: PrismaService) {}

  async getOrCreate(tx: Prisma.TransactionClient, game: IGame, gameId: string) {
    const platform = normalizePlatform(game.platform);
    const sku = String(game.regionId);

    const edition = await tx.gameEdition.upsert({
      where: {
        name_gameId: {
          gameId: gameId,
          name: 'Standard',
        },
      },
      update: {},
      create: {
        gameId: gameId,
        name: 'Standard',
      },
    });
    const version = await tx.gameVersion.upsert({
      where: {
        editionId_platform: {
          editionId: edition.id,
          platform,
        },
      },
      update: {},
      create: {
        SKU: sku,
        editionId: edition.id,
        platform,
      },
    });

    return {
      edition,
      version,
    };
  }
}
// getOrCreateEdition(gameId: string) {
//   return this.prisma.gameEdition.upsert({
//     where: {
//       name_gameId: {
//         gameId: gameId,
//         name: 'Standard',
//       },
//     },
//     update: {},
//     create: {
//       gameId: gameId,
//       name: 'Standard',
//     },
//   });
// }

// getOrCreateVersion(editionId: number, game: IGame) {
//   const platform = normalizePlatform(game.platform);
//   return this.prisma.gameVersion.upsert({
//     where: {
//       editionId_platform: {
//         editionId: editionId,
//         platform,
//       },
//     },
//     update: {},
//     create: {
//       SKU: game.regionId,
//       editionId: editionId,
//       platform,
//     },
//   });
// }
