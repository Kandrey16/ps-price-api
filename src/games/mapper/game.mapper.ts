import { Injectable } from '@nestjs/common';

@Injectable()
export class GameMapper {
  constructor() {}

  toListItem(game) {
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
  }
}
