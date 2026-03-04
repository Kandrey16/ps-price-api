import { normalizeImageSize } from 'src/parcer/normalizers/image.normalizer';
import { normalizePlatform } from 'src/parcer/normalizers/platform.normalizer';
import { parsePriceSimple } from 'src/parcer/normalizers/price.normalizer';

export function extractPsDealsRaw() {
  return Array.from(document.querySelectorAll('a.game-collection-item-link'))
    .map((link) => {
      const anchor = link as HTMLAnchorElement;
      const href = link.getAttribute('href');
      const match = href?.match(/^\/([^/]+)\/game\/(\d+)\/(.+)$/);
      if (!match) return null;

      const [, region, regionGameId, slug] = match;

      return {
        slug,
        region,
        regionGameId: regionGameId,
        fullUrl: anchor.href,
        title: link
          .querySelector('.game-collection-item-details-title')
          ?.textContent.trim(),
        priceText:
          link
            .querySelector('.game-collection-item-price-discount')
            ?.textContent.trim() ||
          link
            .querySelector('.game-collection-item-price:not(.strikethrough)')
            ?.textContent.trim() ||
          null,
        oldPriceText:
          link
            .querySelector('.game-collection-item-price.strikethrough')
            ?.textContent.trim() || null,
        psPlusPriceText:
          link
            .querySelector('.game-collection-item-price-bonus')
            ?.textContent.trim() || null,
        discount: link
          .querySelector('.game-collection-item-discount')
          ?.textContent.replace('%', '')
          .replace('-', '')
          .trim(),

        psPlusRequired: link.querySelector('.game-collection-item-price-bonus'),

        platform: link
          .querySelector('.game-collection-item-top-platform')
          ?.textContent.trim(),
        rating:
          link
            .querySelector('.game-collection-item-metascore')
            ?.textContent.trim() || null,
        image:
          link
            .querySelector('.game-collection-item-image')
            ?.getAttribute('data-src') ||
          link
            .querySelector('.game-collection-item-image')
            ?.getAttribute('src') ||
          null,
      };
    })
    .filter(Boolean);
}

export function normalizePsDeals(raw) {
  return raw.map((game) => ({
    slug: game.slug,
    region: game.region,
    regionId: Number(game.regionGameId),
    fullUrl: game.fullUrl,
    title: game.title,
    price: parsePriceSimple(game.priceText).amount,
    originalPrice: parsePriceSimple(game.oldPriceText).amount,
    currency: parsePriceSimple(game.priceText).currency,
    psPlusPrice: parsePriceSimple(game.psPlusPriceText).amount,
    hasDiscount: Boolean(game.discount),
    discountPercent: game.discount ? Number(game.discount) : null,
    psPlusRequired: Boolean(game.psPlusRequired),
    platform: normalizePlatform(game.platform),
    rating: Number(game.rating),
    image: normalizeImageSize(game.image),
  }));
}

