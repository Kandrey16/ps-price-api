import { Injectable } from '@nestjs/common';
import { Prisma, PsPlusType } from '@prisma/client';
import { IGame } from 'src/parcer/dto/game.interface';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class GamePsPlusService {
  constructor(private readonly prisma: PrismaService) {}

  checkPsPlus(tx: Prisma.TransactionClient, gameId: string, type: PsPlusType) {
      tx.psPlus.upsert({
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
