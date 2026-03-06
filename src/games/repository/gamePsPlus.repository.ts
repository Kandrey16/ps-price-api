import { Prisma, PsPlusType } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { IGame } from '../dto/game.interface';

export class GamePsPlusRepository {
  constructor(private prisma: PrismaService) {}

  async checkPsPlus(
    game: IGame,
    type: PsPlusType,
    tx?: Prisma.TransactionClient,
  ) {
    const gameId = game.id;
    const client = tx ?? this.prisma;
    return client.psPlus.upsert({
      where: {
        gameId_type: {
          gameId: gameId,
          type,
        },
      },
      update: {},
      create: {
        gameId: gameId,
        type,
      },
    });
  }
}
