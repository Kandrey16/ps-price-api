import { Injectable } from '@nestjs/common';
import { ImageType, PsPlusType } from '@prisma/client';
import { IGame } from 'src/parcer/dto/game.interface';
import { PrismaService } from 'src/prisma/prisma.service';
import { GameSupportService } from './game-support.service';
import { GameImageService } from './game-image.service';
import { GameEditionService } from './game-edition.service';
import { GamePsPlusService } from './game-ps-plus.service';
import { GameRegionService } from './game-region.service';
import { GamePersistence } from './game.persistence';
import { LoggerService } from 'src/logger/logger.service';
import * as fs from 'fs/promises';

@Injectable()
export class GamesService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly logger: LoggerService,

    private readonly gameImage: GameImageService,
    private readonly gameSupport: GameSupportService,
    private readonly gameEdition: GameEditionService,
    private readonly gamePsPlus: GamePsPlusService,
    private readonly gameRegion: GameRegionService,
    private readonly gamePersistence: GamePersistence,
  ) {}

  async findAll() {
    // Получаем данные из базы с нужными select
    const games = await this.prisma.game.findMany({
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

    // Трансформируем языки и структуру результата
    return games.map((game) => {
      const edition = game.GameEdition[0];
      const version = edition?.GameVersion[0];
      const region = version?.GameVersionRegion[0];
      const price = region?.Price[0];

      const subtitles = [];
      const voices = [];

      for (const ls of game.GameLanguageSupport) {
        const lang = {
          code: ls.language?.code ?? null,
          name: ls.language?.name ?? null,
        };

        if (ls.languageType === 'SUBTITLE') subtitles.push(lang);
        if (ls.languageType === 'VOICE') voices.push(lang);
      }

      return {
        id: game.id,
        slug: game.slug,
        title: game.title,
        rating: game.rating,

        price: price.price ?? null,
        originalPrice: price.originalPrice ?? null,
        currency: price?.currency ?? null,
        hasDiscount: price?.hasDiscount ?? false,
        discountPercent: price?.discountPercent ?? 0,

        platform: version?.platform ?? null,

        languages: {
          subtitles,
          voices,
        },

        editions: game.GameEdition.map((e) => e.name),

        images: game.GameImage.map((img) => ({
          url: img.url,
          type: img.type,
        })),

        psPlus: game.PsPlus,
      };
    });
  }

  async importFromFile(filePath: string) {
    this.logger.info('Import started from file', { filePath });
    const raw = await fs.readFile(filePath, 'utf-8');
    const games = JSON.parse(raw);

    for (const game of games) {
      await this.saveGame(game);
    }

    this.logger.info('Import finished', {
      filePath,
      gamesCount: games.length,
    });
  }

  async saveGame(game: IGame) {
    return this.prisma.$transaction(async (tx) => {
      const dbGame = await this.logger.safeStep('game', game, () =>
        this.gamePersistence.upsertGame(tx, game),
      );

      if (!dbGame) return;

      const gameId = dbGame.id;

      await this.logger.safeStep('imageIcon', game, () =>
        this.gameImage.saveImage(tx, game.image, gameId, ImageType.ICON),
      );

      await this.logger.safeStep('imageMain', game, () =>
        this.gameImage.saveImage(
          tx,
          game.originalImage,
          gameId,
          ImageType.MAIN,
        ),
      );
      await this.logger.safeStep('Language', game, () =>
        this.gameSupport.syncLanguages(tx, game, gameId),
      );

      if (game.hasPsPlus === true) {
        this.gamePsPlus.checkPsPlus(tx, gameId, PsPlusType.EXTRA);
      }

      await this.logger.safeStep('Edition', game, () =>
        this.gameEdition.getOrCreate(tx, game, gameId),
      );

      await this.logger.safeStep('Region', game, () =>
        this.gameRegion.getOrCreate(tx, game, gameId),
      );
    });
  }
}
