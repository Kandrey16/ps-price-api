
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
  getRuntime,
  skip
} = require('./runtime/index-browser.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 5.22.0
 * Query Engine version: 605197351a3c8bdd595af2d2a9bc3025bca48ea2
 */
Prisma.prismaVersion = {
  client: "5.22.0",
  engine: "605197351a3c8bdd595af2d2a9bc3025bca48ea2"
}

Prisma.PrismaClientKnownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientKnownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientUnknownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientRustPanicError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientRustPanicError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientInitializationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientInitializationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientValidationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientValidationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.NotFoundError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`NotFoundError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`sqltag is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.empty = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`empty is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.join = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`join is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.raw = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`raw is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.getExtensionContext is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.defineExtension = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.defineExtension is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}



/**
 * Enums
 */

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.GameScalarFieldEnum = {
  id: 'id',
  psnId: 'psnId',
  slug: 'slug',
  title: 'title',
  fullUrl: 'fullUrl',
  rating: 'rating',
  genre: 'genre',
  publisher: 'publisher',
  isFreeToPlay: 'isFreeToPlay',
  releaseDate: 'releaseDate',
  releaseStatus: 'releaseStatus',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.LanguageScalarFieldEnum = {
  id: 'id',
  code: 'code',
  name: 'name'
};

exports.Prisma.GameLanguageSupportScalarFieldEnum = {
  id: 'id',
  gameId: 'gameId',
  languageId: 'languageId',
  languageType: 'languageType',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.GameImageScalarFieldEnum = {
  id: 'id',
  url: 'url',
  type: 'type',
  gameId: 'gameId'
};

exports.Prisma.PsPlusScalarFieldEnum = {
  id: 'id',
  gameId: 'gameId',
  type: 'type'
};

exports.Prisma.GameEditionScalarFieldEnum = {
  id: 'id',
  name: 'name',
  gameId: 'gameId'
};

exports.Prisma.RegionScalarFieldEnum = {
  id: 'id',
  code: 'code',
  name: 'name',
  currency: 'currency'
};

exports.Prisma.GameVersionScalarFieldEnum = {
  SKU: 'SKU',
  gameId: 'gameId',
  editionId: 'editionId',
  platform: 'platform',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.GameRegionScalarFieldEnum = {
  id: 'id',
  regionId: 'regionId',
  gameId: 'gameId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.GameVersionRegionScalarFieldEnum = {
  id: 'id',
  SKU: 'SKU',
  gameRegionId: 'gameRegionId',
  storeUrl: 'storeUrl',
  isAvailable: 'isAvailable',
  lastChecked: 'lastChecked',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.PriceScalarFieldEnum = {
  id: 'id',
  gameVersionRegionId: 'gameVersionRegionId',
  price: 'price',
  originalPrice: 'originalPrice',
  currency: 'currency',
  type: 'type',
  hasDiscount: 'hasDiscount',
  discountPercent: 'discountPercent',
  discountStart: 'discountStart',
  discountFinish: 'discountFinish',
  recordedAt: 'recordedAt',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.PriceHistoryScalarFieldEnum = {
  id: 'id',
  gameVersionRegionId: 'gameVersionRegionId',
  price: 'price',
  originalPrice: 'originalPrice',
  currency: 'currency',
  type: 'type',
  recordedAt: 'recordedAt'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.QueryMode = {
  default: 'default',
  insensitive: 'insensitive'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};
exports.ReleaseStatus = exports.$Enums.ReleaseStatus = {
  RELEASED: 'RELEASED',
  PREORDER: 'PREORDER',
  COMING_SOON: 'COMING_SOON'
};

exports.LanguageType = exports.$Enums.LanguageType = {
  INTERFACE: 'INTERFACE',
  VOICE: 'VOICE',
  SUBTITLE: 'SUBTITLE'
};

exports.ImageType = exports.$Enums.ImageType = {
  SCREENSHOT: 'SCREENSHOT',
  MAIN: 'MAIN',
  BACKGROUND: 'BACKGROUND',
  COVER: 'COVER',
  ARTBOOK: 'ARTBOOK',
  ICON: 'ICON',
  TRAILER: 'TRAILER'
};

exports.PsPlusType = exports.$Enums.PsPlusType = {
  ESSENTIAL: 'ESSENTIAL',
  EXTRA: 'EXTRA',
  PREMIUM: 'PREMIUM'
};

exports.Platform = exports.$Enums.Platform = {
  PS4: 'PS4',
  PS5: 'PS5',
  PS4_PS5: 'PS4_PS5',
  VR: 'VR',
  VR2: 'VR2'
};

exports.PriceType = exports.$Enums.PriceType = {
  BASE: 'BASE',
  DISCOUNT: 'DISCOUNT',
  PS_PLUS: 'PS_PLUS'
};

exports.Prisma.ModelName = {
  Game: 'Game',
  Language: 'Language',
  GameLanguageSupport: 'GameLanguageSupport',
  GameImage: 'GameImage',
  PsPlus: 'PsPlus',
  GameEdition: 'GameEdition',
  Region: 'Region',
  GameVersion: 'GameVersion',
  GameRegion: 'GameRegion',
  GameVersionRegion: 'GameVersionRegion',
  Price: 'Price',
  PriceHistory: 'PriceHistory'
};

/**
 * This is a stub Prisma Client that will error at runtime if called.
 */
class PrismaClient {
  constructor() {
    return new Proxy(this, {
      get(target, prop) {
        let message
        const runtime = getRuntime()
        if (runtime.isEdge) {
          message = `PrismaClient is not configured to run in ${runtime.prettyName}. In order to run Prisma Client on edge runtime, either:
- Use Prisma Accelerate: https://pris.ly/d/accelerate
- Use Driver Adapters: https://pris.ly/d/driver-adapters
`;
        } else {
          message = 'PrismaClient is unable to run in this browser environment, or has been bundled for the browser (running in `' + runtime.prettyName + '`).'
        }
        
        message += `
If this is unexpected, please open an issue: https://pris.ly/prisma-prisma-bug-report`

        throw new Error(message)
      }
    })
  }
}

exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
