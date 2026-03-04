import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  /* ------------------ REGIONS ------------------ */

  const REGIONS = [
    /* ---------------- Europe ---------------- */

    {
      code: 'tr',
      name: 'Turkey',
      currency: 'TRY',
      storeCode: 'tr-store',
      psLocale: 'en-tr',
    },
    {
      code: 'pl',
      name: 'Poland',
      currency: 'PLN',
      storeCode: 'pl-store',
      psLocale: 'en-pl',
    },
    {
      code: 'de',
      name: 'Germany',
      currency: 'EUR',
      storeCode: 'de-store',
      psLocale: 'en-de',
    },
    {
      code: 'fr',
      name: 'France',
      currency: 'EUR',
      storeCode: 'fr-store',
      psLocale: 'en-fr',
    },
    {
      code: 'it',
      name: 'Italy',
      currency: 'EUR',
      storeCode: 'it-store',
      psLocale: 'en-it',
    },
    {
      code: 'es',
      name: 'Spain',
      currency: 'EUR',
      storeCode: 'es-store',
      psLocale: 'en-es',
    },
    {
      code: 'pt',
      name: 'Portugal',
      currency: 'EUR',
      storeCode: 'pt-store',
      psLocale: 'en-pt',
    },
    {
      code: 'nl',
      name: 'Netherlands',
      currency: 'EUR',
      storeCode: 'nl-store',
      psLocale: 'en-nl',
    },
    {
      code: 'be',
      name: 'Belgium',
      currency: 'EUR',
      storeCode: 'be-store',
      psLocale: 'en-be',
    },
    {
      code: 'at',
      name: 'Austria',
      currency: 'EUR',
      storeCode: 'at-store',
      psLocale: 'en-at',
    },
    {
      code: 'ch',
      name: 'Switzerland',
      currency: 'CHF',
      storeCode: 'ch-store',
      psLocale: 'en-ch',
    },
    {
      code: 'cz',
      name: 'Czech Republic',
      currency: 'CZK',
      storeCode: 'cz-store',
      psLocale: 'en-cz',
    },
    {
      code: 'sk',
      name: 'Slovakia',
      currency: 'EUR',
      storeCode: 'sk-store',
      psLocale: 'en-sk',
    },
    {
      code: 'hu',
      name: 'Hungary',
      currency: 'HUF',
      storeCode: 'hu-store',
      psLocale: 'en-hu',
    },
    {
      code: 'ro',
      name: 'Romania',
      currency: 'RON',
      storeCode: 'ro-store',
      psLocale: 'en-ro',
    },
    {
      code: 'bg',
      name: 'Bulgaria',
      currency: 'BGN',
      storeCode: 'bg-store',
      psLocale: 'en-bg',
    },
    {
      code: 'gr',
      name: 'Greece',
      currency: 'EUR',
      storeCode: 'gr-store',
      psLocale: 'en-gr',
    },
    {
      code: 'dk',
      name: 'Denmark',
      currency: 'DKK',
      storeCode: 'dk-store',
      psLocale: 'en-dk',
    },
    {
      code: 'fi',
      name: 'Finland',
      currency: 'EUR',
      storeCode: 'fi-store',
      psLocale: 'en-fi',
    },
    {
      code: 'se',
      name: 'Sweden',
      currency: 'SEK',
      storeCode: 'se-store',
      psLocale: 'en-se',
    },
    {
      code: 'no',
      name: 'Norway',
      currency: 'NOK',
      storeCode: 'no-store',
      psLocale: 'en-no',
    },
    {
      code: 'uk',
      name: 'United Kingdom',
      currency: 'GBP',
      storeCode: 'uk-store',
      psLocale: 'en-gb',
    },
    {
      code: 'ua',
      name: 'Ukraine',
      currency: 'UAH',
      storeCode: 'ua-store',
      psLocale: 'en-ua',
    },

    /* ---------------- Americas ---------------- */

    {
      code: 'us',
      name: 'United States',
      currency: 'USD',
      storeCode: 'us-store',
      psLocale: 'en-us',
    },
    {
      code: 'ca',
      name: 'Canada',
      currency: 'CAD',
      storeCode: 'ca-store',
      psLocale: 'en-ca',
    },
    {
      code: 'mx',
      name: 'Mexico',
      currency: 'MXN',
      storeCode: 'mx-store',
      psLocale: 'en-mx',
    },
    {
      code: 'br',
      name: 'Brazil',
      currency: 'BRL',
      storeCode: 'br-store',
      psLocale: 'en-br', 
    },
    { 
      code: 'ar',
      name: 'Argentina',
      currency: 'ARS',
      storeCode: 'ar-store',
      psLocale: 'en-ar',
    },

    /* ---------------- Asia ---------------- */

    {
      code: 'jp',
      name: 'Japan',
      currency: 'JPY',
      storeCode: 'jp-store',
      psLocale: 'en-jp',
    },
    {
      code: 'kr',
      name: 'South Korea',
      currency: 'KRW',
      storeCode: 'kr-store',
      psLocale: 'en-kr',
    },
    {
      code: 'cn',
      name: 'China',
      currency: 'CNY',
      storeCode: 'cn-store',
      psLocale: 'en-cn',
    },
    {
      code: 'hk',
      name: 'Hong Kong',
      currency: 'HKD',
      storeCode: 'hk-store',
      psLocale: 'en-hk',
    },
    {
      code: 'tw',
      name: 'Taiwan',
      currency: 'TWD',
      storeCode: 'tw-store',
      psLocale: 'en-tw',
    },

    /* ---------------- Middle East ---------------- */

    {
      code: 'ae',
      name: 'United Arab Emirates',
      currency: 'AED',
      storeCode: 'ae-store',
      psLocale: 'en-ae',
    },
    {
      code: 'sa',
      name: 'Saudi Arabia',
      currency: 'SAR',
      storeCode: 'sa-store',
      psLocale: 'en-sa',
    },

    /* ---------------- Oceania ---------------- */

    {
      code: 'au',
      name: 'Australia',
      currency: 'AUD',
      storeCode: 'au-store',
      psLocale: 'en-au',
    },
    {
      code: 'nz',
      name: 'New Zealand',
      currency: 'NZD',
      storeCode: 'nz-store',
      psLocale: 'en-nz',
    },

    /* ---------------- Africa ---------------- */

    {
      code: 'za',
      name: 'South Africa',
      currency: 'ZAR',
      storeCode: 'za-store',
      psLocale: 'en-za',
    },
  ];

  await prisma.region.createMany({
    data: REGIONS.map(({ code, name, currency }) => ({
      code,
      name,
      currency,
    })),
    skipDuplicates: true,
  });

  /* ------------------ LANGUAGES ------------------ */

  await prisma.language.createMany({
    data: REGIONS.map(({ code, name }) => ({
      code,
      name,
    })),
    skipDuplicates: true,
  });

  /* ------------------ DEFAULT EDITION ------------------ */

  // ⚠️ Обычно создаётся динамически, но можно засеять
  // если хочешь иметь "Standard" всегда
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
