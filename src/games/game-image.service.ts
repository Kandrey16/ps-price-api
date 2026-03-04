import { Injectable } from '@nestjs/common';
import { ImageType, Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class GameImageService {
  constructor(private readonly prisma: PrismaService) {}

  saveImage(
    tx: Prisma.TransactionClient,
    url: string,
    gameId: string,
    type: ImageType,
  ) {
    if (!url) return;

    return tx.gameImage.upsert({
      where: { url_gameId: { url, gameId } },
      update: { type },
      create: { url, type, gameId },
    });
  }
}
