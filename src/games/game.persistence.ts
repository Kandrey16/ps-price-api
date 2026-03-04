import { Injectable } from '@nestjs/common';
import { ImageType, Prisma } from '@prisma/client';
import { IGame } from 'src/parcer/dto/game.interface';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class GamePersistence {
  constructor(private readonly prisma: PrismaService) {}

  upsertGame(tx: Prisma.TransactionClient, game: IGame) {
    return tx.game.upsert({
      where: { slug: game.slug },
      update: {
        rating: game.rating,
        genre: game.genre,
        publisher: game.publisher,
      },
      create: {
        slug: game.slug,
        title: game.title,
        rating: game.rating,
      },
    });
  }
}
