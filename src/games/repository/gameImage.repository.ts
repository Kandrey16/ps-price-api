import { Injectable } from '@nestjs/common';
import { ImageType, Prisma } from '@prisma/client';
import { IGame } from 'src/parcer/dto/game.interface';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class GameImageRepository {
  constructor(private prisma: PrismaService) {}

  async saveImage(
    url: string,
    game: IGame,
    type: ImageType,
    tx?: Prisma.TransactionClient,
  ) {
    if (!url) return;
    const gameId = game.id;
    const client = tx ?? this.prisma;
    return client.gameImage.upsert({
      where: { url_gameId: { url, gameId } },
      update: { type },
      create: { url, type, gameId },
    });
  }

  async saveIcon(game: IGame, tx?: Prisma.TransactionClient) {
    const url = game.image;
    if (!url) return;
    const gameId = game.id;
    const client = tx ?? this.prisma;
    return client.gameImage.upsert({
      where: { url_gameId: { url, gameId } },
      update: { type: ImageType.ICON },
      create: { url, type: ImageType.ICON, gameId },
    });
  }

  async saveMain(game: IGame, tx?: Prisma.TransactionClient) {
    const url = game.originalImage;
    if (!url) return;
    const gameId = game.id;
    const client = tx ?? this.prisma;
    return client.gameImage.upsert({
      where: { url_gameId: { url, gameId } },
      update: { type: ImageType.MAIN },
      create: { url, type: ImageType.MAIN, gameId },
    });
  }
}
