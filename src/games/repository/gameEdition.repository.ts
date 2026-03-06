import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { IGame } from '../dto/game.interface';

@Injectable()
export class GameEditionRepository {
  constructor(private prisma: PrismaService) {}

  async upsert(game: IGame, tx?: Prisma.TransactionClient) {
    const client = tx ?? this.prisma;
    return client.gameEdition.upsert({
      where: {
        name_gameId: {
          gameId: game.id,
          name: 'Standard',
        },
      },
      update: {},
      create: {
        gameId: game.id,
        name: 'Standard',
      },
    });
  }
}
