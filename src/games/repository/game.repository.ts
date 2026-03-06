import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { IGame } from '../dto/game.interface';
import { GameFilterInput } from '../dto/game-filter.dto';

@Injectable()
export class GameRepository {
  constructor(private prisma: PrismaService) {}

  async findAll(filter?: GameFilterInput) {
    return await this.prisma.game.findMany({
      where: {
        ...(filter?.minRating && {
          rating: { gte: filter.minRating },
        }),

        ...(filter?.languageCode && {
          GameLanguageSupport: {
            some: {
              language: {
                code: filter.languageCode,
              },
            },
          },
        }),

        ...(filter?.platform && {
          GameEdition: {
            some: {
              GameVersion: {
                some: {
                  platform: filter.platform,
                },
              },
            },
          },
        }),

        ...(filter?.region && {
          GameEdition: {
            some: {
              GameVersion: {
                some: {
                  GameVersionRegion: {
                    some: {
                      region: {
                        code: filter.region,
                      },
                    },
                  },
                },
              },
            },
          },
        }),

        ...(filter?.minPrice || filter?.maxPrice
          ? {
              GameEdition: {
                some: {
                  GameVersion: {
                    some: {
                      GameVersionRegion: {
                        some: {
                          Price: {
                            some: {
                              ...(filter.minPrice && {
                                price: { gte: filter.minPrice },
                              }),
                              ...(filter.maxPrice && {
                                price: { lte: filter.maxPrice },
                              }),
                            },
                          },
                        },
                      },
                    },
                  },
                },
              },
            }
          : {}),
      },

      include: {
        GameImage: true,
        GameEdition: {
          include: {
            GameVersion: {
              include: {
                GameVersionRegion: {
                  include: {
                    region: true,
                    Price: true,
                  },
                },
              },
            },
          },
        },
        PsPlus: true,
        GameLanguageSupport: {
          include: {
            language: true,
          },
        },
      },
    });
  }

  async findOne(slug: string) {
    return await this.prisma.game.findUnique({
      where: { slug },
      include: {
        GameImage: true,
        GameEdition: {
          include: {
            GameVersion: {
              include: {
                GameVersionRegion: {
                  include: {
                    region: true,
                    Price: true,
                  },
                },
              },
            },
          },
        },
        PsPlus: true,
        GameLanguageSupport: {
          include: {
            language: true,
          },
        },
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
