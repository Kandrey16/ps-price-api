import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { IGame } from 'src/parcer/dto/game.interface';
import { PrismaService } from 'src/prisma/prisma.service';
import { LANGUAGE_NAME_TO_CODE } from 'src/utils/language_to_code'

@Injectable()
export class GameSupportService {
  constructor(private readonly prisma: PrismaService) {}

  async syncLanguages(tx: Prisma.TransactionClient, game: IGame, gameId: string) {
    const languages = await tx.language.findMany();
    const codeToId = new Map(languages.map((l) => [l.code, l.id]));

    const rows = [
      ...this.map(game.voices, 'VOICE', gameId, codeToId),
      ...this.map(game.subtitles, 'SUBTITLE', gameId, codeToId),
    ];

    await tx.gameLanguageSupport.createMany({
      data: rows,
      skipDuplicates: true,
    });
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
