import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { IGame } from '../dto/game.interface';

@Injectable()
export class GameRepository {
  constructor(private prisma: PrismaService) {}

  async findAll() {
    // Получаем данные из базы с нужными select
    return this.prisma.game.findMany({
      select: {
        id: true,
        slug: true,
        title: true,
        rating: true,

        GameLanguageSupport: {
          select: {
            languageType: true,
            language: {
              select: {
                code: true,
                name: true,
              },
            },
          },
        },

        GameEdition: {
          where: {
            name: 'Standard',
          },
          take: 1,
          select: {
            name: true,
            GameVersion: {
              where: {
                platform: 'PS5',
              },
              take: 1,
              select: {
                platform: true,
                GameVersionRegion: {
                  where: {
                    region: { code: 'tr' }, // ← ОБЯЗАТЕЛЬНО
                  },
                  take: 1,
                  select: {
                    Price: {
                      orderBy: {
                        recordedAt: 'desc',
                      },
                      take: 1,
                      select: {
                        price: true,
                        originalPrice: true,
                        currency: true,
                        hasDiscount: true,
                        discountPercent: true,
                      },
                    },
                  },
                },
              },
            },
          },
        },

        GameImage: {
          select: {
            url: true,
            type: true,
          },
        },

        PsPlus: true, // если нужно оставить информацию о PS Plus
      },
    });
  }

  async upsert(game: IGame, tx?: Prisma.TransactionClient) {
    const client = tx ?? this.prisma;
    return client.game.upsert({
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
