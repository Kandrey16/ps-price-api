import { Injectable } from '@nestjs/common';
import { LANGUAGE_NAME_TO_CODE } from 'src/utils/language_to_code';
import { GameLanguageRepository } from '../../repository/gameLanguage.repository';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { IGame } from 'src/games/dto/game.interface';

@Injectable()
export class GameSupportSyncerService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly languageRepo: GameLanguageRepository,
  ) {}

  async syncLanguages(game: IGame, tx?: Prisma.TransactionClient) {
    const client = tx ?? this.prisma;
    const gameId = game.id;

    const languages = await this.languageRepo.findMany();
    const codeToId = new Map(languages.map((l) => [l.code, l.id]));

    const rows = [
      ...this.map(game.voices, 'VOICE', gameId, codeToId),
      ...this.map(game.subtitles, 'SUBTITLE', gameId, codeToId),
    ];

    await this.languageRepo.createMany(rows, client);
  }

  private map(
    list: string[],
    type: 'VOICE' | 'SUBTITLE',
    gameId: string,
    map: Map<string, number>,
  ) {
    return (list ?? [])
      .map((name) => {
        const code = LANGUAGE_NAME_TO_CODE[name];
        const id = code ? map.get(code) : null;
        if (!id) return null;

        return { gameId, languageId: id, languageType: type };
      })
      .filter(Boolean);
  }
}
