
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Game
 * 
 */
export type Game = $Result.DefaultSelection<Prisma.$GamePayload>
/**
 * Model Language
 * 
 */
export type Language = $Result.DefaultSelection<Prisma.$LanguagePayload>
/**
 * Model GameLanguageSupport
 * 
 */
export type GameLanguageSupport = $Result.DefaultSelection<Prisma.$GameLanguageSupportPayload>
/**
 * Model GameImage
 * 
 */
export type GameImage = $Result.DefaultSelection<Prisma.$GameImagePayload>
/**
 * Model PsPlus
 * 
 */
export type PsPlus = $Result.DefaultSelection<Prisma.$PsPlusPayload>
/**
 * Model GameEdition
 * 
 */
export type GameEdition = $Result.DefaultSelection<Prisma.$GameEditionPayload>
/**
 * Model Region
 * 
 */
export type Region = $Result.DefaultSelection<Prisma.$RegionPayload>
/**
 * Model GameVersion
 * 
 */
export type GameVersion = $Result.DefaultSelection<Prisma.$GameVersionPayload>
/**
 * Model GameRegion
 * 
 */
export type GameRegion = $Result.DefaultSelection<Prisma.$GameRegionPayload>
/**
 * Model GameVersionRegion
 * 
 */
export type GameVersionRegion = $Result.DefaultSelection<Prisma.$GameVersionRegionPayload>
/**
 * Model Price
 * 
 */
export type Price = $Result.DefaultSelection<Prisma.$PricePayload>
/**
 * Model PriceHistory
 * 
 */
export type PriceHistory = $Result.DefaultSelection<Prisma.$PriceHistoryPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const ReleaseStatus: {
  RELEASED: 'RELEASED',
  PREORDER: 'PREORDER',
  COMING_SOON: 'COMING_SOON'
};

export type ReleaseStatus = (typeof ReleaseStatus)[keyof typeof ReleaseStatus]


export const LanguageType: {
  INTERFACE: 'INTERFACE',
  VOICE: 'VOICE',
  SUBTITLE: 'SUBTITLE'
};

export type LanguageType = (typeof LanguageType)[keyof typeof LanguageType]


export const ImageType: {
  SCREENSHOT: 'SCREENSHOT',
  MAIN: 'MAIN',
  BACKGROUND: 'BACKGROUND',
  COVER: 'COVER',
  ARTBOOK: 'ARTBOOK',
  ICON: 'ICON',
  TRAILER: 'TRAILER'
};

export type ImageType = (typeof ImageType)[keyof typeof ImageType]


export const PsPlusType: {
  ESSENTIAL: 'ESSENTIAL',
  EXTRA: 'EXTRA',
  PREMIUM: 'PREMIUM'
};

export type PsPlusType = (typeof PsPlusType)[keyof typeof PsPlusType]


export const Platform: {
  PS4: 'PS4',
  PS5: 'PS5',
  PS4_PS5: 'PS4_PS5',
  VR: 'VR',
  VR2: 'VR2'
};

export type Platform = (typeof Platform)[keyof typeof Platform]


export const PriceType: {
  BASE: 'BASE',
  DISCOUNT: 'DISCOUNT',
  PS_PLUS: 'PS_PLUS'
};

export type PriceType = (typeof PriceType)[keyof typeof PriceType]

}

export type ReleaseStatus = $Enums.ReleaseStatus

export const ReleaseStatus: typeof $Enums.ReleaseStatus

export type LanguageType = $Enums.LanguageType

export const LanguageType: typeof $Enums.LanguageType

export type ImageType = $Enums.ImageType

export const ImageType: typeof $Enums.ImageType

export type PsPlusType = $Enums.PsPlusType

export const PsPlusType: typeof $Enums.PsPlusType

export type Platform = $Enums.Platform

export const Platform: typeof $Enums.Platform

export type PriceType = $Enums.PriceType

export const PriceType: typeof $Enums.PriceType

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Games
 * const games = await prisma.game.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Games
   * const games = await prisma.game.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.game`: Exposes CRUD operations for the **Game** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Games
    * const games = await prisma.game.findMany()
    * ```
    */
  get game(): Prisma.GameDelegate<ExtArgs>;

  /**
   * `prisma.language`: Exposes CRUD operations for the **Language** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Languages
    * const languages = await prisma.language.findMany()
    * ```
    */
  get language(): Prisma.LanguageDelegate<ExtArgs>;

  /**
   * `prisma.gameLanguageSupport`: Exposes CRUD operations for the **GameLanguageSupport** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more GameLanguageSupports
    * const gameLanguageSupports = await prisma.gameLanguageSupport.findMany()
    * ```
    */
  get gameLanguageSupport(): Prisma.GameLanguageSupportDelegate<ExtArgs>;

  /**
   * `prisma.gameImage`: Exposes CRUD operations for the **GameImage** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more GameImages
    * const gameImages = await prisma.gameImage.findMany()
    * ```
    */
  get gameImage(): Prisma.GameImageDelegate<ExtArgs>;

  /**
   * `prisma.psPlus`: Exposes CRUD operations for the **PsPlus** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PsPluses
    * const psPluses = await prisma.psPlus.findMany()
    * ```
    */
  get psPlus(): Prisma.PsPlusDelegate<ExtArgs>;

  /**
   * `prisma.gameEdition`: Exposes CRUD operations for the **GameEdition** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more GameEditions
    * const gameEditions = await prisma.gameEdition.findMany()
    * ```
    */
  get gameEdition(): Prisma.GameEditionDelegate<ExtArgs>;

  /**
   * `prisma.region`: Exposes CRUD operations for the **Region** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Regions
    * const regions = await prisma.region.findMany()
    * ```
    */
  get region(): Prisma.RegionDelegate<ExtArgs>;

  /**
   * `prisma.gameVersion`: Exposes CRUD operations for the **GameVersion** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more GameVersions
    * const gameVersions = await prisma.gameVersion.findMany()
    * ```
    */
  get gameVersion(): Prisma.GameVersionDelegate<ExtArgs>;

  /**
   * `prisma.gameRegion`: Exposes CRUD operations for the **GameRegion** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more GameRegions
    * const gameRegions = await prisma.gameRegion.findMany()
    * ```
    */
  get gameRegion(): Prisma.GameRegionDelegate<ExtArgs>;

  /**
   * `prisma.gameVersionRegion`: Exposes CRUD operations for the **GameVersionRegion** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more GameVersionRegions
    * const gameVersionRegions = await prisma.gameVersionRegion.findMany()
    * ```
    */
  get gameVersionRegion(): Prisma.GameVersionRegionDelegate<ExtArgs>;

  /**
   * `prisma.price`: Exposes CRUD operations for the **Price** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Prices
    * const prices = await prisma.price.findMany()
    * ```
    */
  get price(): Prisma.PriceDelegate<ExtArgs>;

  /**
   * `prisma.priceHistory`: Exposes CRUD operations for the **PriceHistory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PriceHistories
    * const priceHistories = await prisma.priceHistory.findMany()
    * ```
    */
  get priceHistory(): Prisma.PriceHistoryDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.22.0
   * Query Engine version: 605197351a3c8bdd595af2d2a9bc3025bca48ea2
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
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

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "game" | "language" | "gameLanguageSupport" | "gameImage" | "psPlus" | "gameEdition" | "region" | "gameVersion" | "gameRegion" | "gameVersionRegion" | "price" | "priceHistory"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Game: {
        payload: Prisma.$GamePayload<ExtArgs>
        fields: Prisma.GameFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GameFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GamePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GameFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GamePayload>
          }
          findFirst: {
            args: Prisma.GameFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GamePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GameFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GamePayload>
          }
          findMany: {
            args: Prisma.GameFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GamePayload>[]
          }
          create: {
            args: Prisma.GameCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GamePayload>
          }
          createMany: {
            args: Prisma.GameCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.GameCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GamePayload>[]
          }
          delete: {
            args: Prisma.GameDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GamePayload>
          }
          update: {
            args: Prisma.GameUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GamePayload>
          }
          deleteMany: {
            args: Prisma.GameDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GameUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.GameUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GamePayload>
          }
          aggregate: {
            args: Prisma.GameAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGame>
          }
          groupBy: {
            args: Prisma.GameGroupByArgs<ExtArgs>
            result: $Utils.Optional<GameGroupByOutputType>[]
          }
          count: {
            args: Prisma.GameCountArgs<ExtArgs>
            result: $Utils.Optional<GameCountAggregateOutputType> | number
          }
        }
      }
      Language: {
        payload: Prisma.$LanguagePayload<ExtArgs>
        fields: Prisma.LanguageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LanguageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LanguagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LanguageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LanguagePayload>
          }
          findFirst: {
            args: Prisma.LanguageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LanguagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LanguageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LanguagePayload>
          }
          findMany: {
            args: Prisma.LanguageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LanguagePayload>[]
          }
          create: {
            args: Prisma.LanguageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LanguagePayload>
          }
          createMany: {
            args: Prisma.LanguageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LanguageCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LanguagePayload>[]
          }
          delete: {
            args: Prisma.LanguageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LanguagePayload>
          }
          update: {
            args: Prisma.LanguageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LanguagePayload>
          }
          deleteMany: {
            args: Prisma.LanguageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LanguageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.LanguageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LanguagePayload>
          }
          aggregate: {
            args: Prisma.LanguageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLanguage>
          }
          groupBy: {
            args: Prisma.LanguageGroupByArgs<ExtArgs>
            result: $Utils.Optional<LanguageGroupByOutputType>[]
          }
          count: {
            args: Prisma.LanguageCountArgs<ExtArgs>
            result: $Utils.Optional<LanguageCountAggregateOutputType> | number
          }
        }
      }
      GameLanguageSupport: {
        payload: Prisma.$GameLanguageSupportPayload<ExtArgs>
        fields: Prisma.GameLanguageSupportFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GameLanguageSupportFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameLanguageSupportPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GameLanguageSupportFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameLanguageSupportPayload>
          }
          findFirst: {
            args: Prisma.GameLanguageSupportFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameLanguageSupportPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GameLanguageSupportFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameLanguageSupportPayload>
          }
          findMany: {
            args: Prisma.GameLanguageSupportFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameLanguageSupportPayload>[]
          }
          create: {
            args: Prisma.GameLanguageSupportCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameLanguageSupportPayload>
          }
          createMany: {
            args: Prisma.GameLanguageSupportCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.GameLanguageSupportCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameLanguageSupportPayload>[]
          }
          delete: {
            args: Prisma.GameLanguageSupportDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameLanguageSupportPayload>
          }
          update: {
            args: Prisma.GameLanguageSupportUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameLanguageSupportPayload>
          }
          deleteMany: {
            args: Prisma.GameLanguageSupportDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GameLanguageSupportUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.GameLanguageSupportUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameLanguageSupportPayload>
          }
          aggregate: {
            args: Prisma.GameLanguageSupportAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGameLanguageSupport>
          }
          groupBy: {
            args: Prisma.GameLanguageSupportGroupByArgs<ExtArgs>
            result: $Utils.Optional<GameLanguageSupportGroupByOutputType>[]
          }
          count: {
            args: Prisma.GameLanguageSupportCountArgs<ExtArgs>
            result: $Utils.Optional<GameLanguageSupportCountAggregateOutputType> | number
          }
        }
      }
      GameImage: {
        payload: Prisma.$GameImagePayload<ExtArgs>
        fields: Prisma.GameImageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GameImageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameImagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GameImageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameImagePayload>
          }
          findFirst: {
            args: Prisma.GameImageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameImagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GameImageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameImagePayload>
          }
          findMany: {
            args: Prisma.GameImageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameImagePayload>[]
          }
          create: {
            args: Prisma.GameImageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameImagePayload>
          }
          createMany: {
            args: Prisma.GameImageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.GameImageCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameImagePayload>[]
          }
          delete: {
            args: Prisma.GameImageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameImagePayload>
          }
          update: {
            args: Prisma.GameImageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameImagePayload>
          }
          deleteMany: {
            args: Prisma.GameImageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GameImageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.GameImageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameImagePayload>
          }
          aggregate: {
            args: Prisma.GameImageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGameImage>
          }
          groupBy: {
            args: Prisma.GameImageGroupByArgs<ExtArgs>
            result: $Utils.Optional<GameImageGroupByOutputType>[]
          }
          count: {
            args: Prisma.GameImageCountArgs<ExtArgs>
            result: $Utils.Optional<GameImageCountAggregateOutputType> | number
          }
        }
      }
      PsPlus: {
        payload: Prisma.$PsPlusPayload<ExtArgs>
        fields: Prisma.PsPlusFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PsPlusFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PsPlusPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PsPlusFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PsPlusPayload>
          }
          findFirst: {
            args: Prisma.PsPlusFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PsPlusPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PsPlusFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PsPlusPayload>
          }
          findMany: {
            args: Prisma.PsPlusFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PsPlusPayload>[]
          }
          create: {
            args: Prisma.PsPlusCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PsPlusPayload>
          }
          createMany: {
            args: Prisma.PsPlusCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PsPlusCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PsPlusPayload>[]
          }
          delete: {
            args: Prisma.PsPlusDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PsPlusPayload>
          }
          update: {
            args: Prisma.PsPlusUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PsPlusPayload>
          }
          deleteMany: {
            args: Prisma.PsPlusDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PsPlusUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PsPlusUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PsPlusPayload>
          }
          aggregate: {
            args: Prisma.PsPlusAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePsPlus>
          }
          groupBy: {
            args: Prisma.PsPlusGroupByArgs<ExtArgs>
            result: $Utils.Optional<PsPlusGroupByOutputType>[]
          }
          count: {
            args: Prisma.PsPlusCountArgs<ExtArgs>
            result: $Utils.Optional<PsPlusCountAggregateOutputType> | number
          }
        }
      }
      GameEdition: {
        payload: Prisma.$GameEditionPayload<ExtArgs>
        fields: Prisma.GameEditionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GameEditionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameEditionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GameEditionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameEditionPayload>
          }
          findFirst: {
            args: Prisma.GameEditionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameEditionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GameEditionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameEditionPayload>
          }
          findMany: {
            args: Prisma.GameEditionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameEditionPayload>[]
          }
          create: {
            args: Prisma.GameEditionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameEditionPayload>
          }
          createMany: {
            args: Prisma.GameEditionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.GameEditionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameEditionPayload>[]
          }
          delete: {
            args: Prisma.GameEditionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameEditionPayload>
          }
          update: {
            args: Prisma.GameEditionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameEditionPayload>
          }
          deleteMany: {
            args: Prisma.GameEditionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GameEditionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.GameEditionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameEditionPayload>
          }
          aggregate: {
            args: Prisma.GameEditionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGameEdition>
          }
          groupBy: {
            args: Prisma.GameEditionGroupByArgs<ExtArgs>
            result: $Utils.Optional<GameEditionGroupByOutputType>[]
          }
          count: {
            args: Prisma.GameEditionCountArgs<ExtArgs>
            result: $Utils.Optional<GameEditionCountAggregateOutputType> | number
          }
        }
      }
      Region: {
        payload: Prisma.$RegionPayload<ExtArgs>
        fields: Prisma.RegionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RegionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RegionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegionPayload>
          }
          findFirst: {
            args: Prisma.RegionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RegionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegionPayload>
          }
          findMany: {
            args: Prisma.RegionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegionPayload>[]
          }
          create: {
            args: Prisma.RegionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegionPayload>
          }
          createMany: {
            args: Prisma.RegionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RegionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegionPayload>[]
          }
          delete: {
            args: Prisma.RegionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegionPayload>
          }
          update: {
            args: Prisma.RegionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegionPayload>
          }
          deleteMany: {
            args: Prisma.RegionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RegionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.RegionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegionPayload>
          }
          aggregate: {
            args: Prisma.RegionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRegion>
          }
          groupBy: {
            args: Prisma.RegionGroupByArgs<ExtArgs>
            result: $Utils.Optional<RegionGroupByOutputType>[]
          }
          count: {
            args: Prisma.RegionCountArgs<ExtArgs>
            result: $Utils.Optional<RegionCountAggregateOutputType> | number
          }
        }
      }
      GameVersion: {
        payload: Prisma.$GameVersionPayload<ExtArgs>
        fields: Prisma.GameVersionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GameVersionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameVersionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GameVersionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameVersionPayload>
          }
          findFirst: {
            args: Prisma.GameVersionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameVersionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GameVersionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameVersionPayload>
          }
          findMany: {
            args: Prisma.GameVersionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameVersionPayload>[]
          }
          create: {
            args: Prisma.GameVersionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameVersionPayload>
          }
          createMany: {
            args: Prisma.GameVersionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.GameVersionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameVersionPayload>[]
          }
          delete: {
            args: Prisma.GameVersionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameVersionPayload>
          }
          update: {
            args: Prisma.GameVersionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameVersionPayload>
          }
          deleteMany: {
            args: Prisma.GameVersionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GameVersionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.GameVersionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameVersionPayload>
          }
          aggregate: {
            args: Prisma.GameVersionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGameVersion>
          }
          groupBy: {
            args: Prisma.GameVersionGroupByArgs<ExtArgs>
            result: $Utils.Optional<GameVersionGroupByOutputType>[]
          }
          count: {
            args: Prisma.GameVersionCountArgs<ExtArgs>
            result: $Utils.Optional<GameVersionCountAggregateOutputType> | number
          }
        }
      }
      GameRegion: {
        payload: Prisma.$GameRegionPayload<ExtArgs>
        fields: Prisma.GameRegionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GameRegionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameRegionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GameRegionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameRegionPayload>
          }
          findFirst: {
            args: Prisma.GameRegionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameRegionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GameRegionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameRegionPayload>
          }
          findMany: {
            args: Prisma.GameRegionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameRegionPayload>[]
          }
          create: {
            args: Prisma.GameRegionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameRegionPayload>
          }
          createMany: {
            args: Prisma.GameRegionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.GameRegionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameRegionPayload>[]
          }
          delete: {
            args: Prisma.GameRegionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameRegionPayload>
          }
          update: {
            args: Prisma.GameRegionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameRegionPayload>
          }
          deleteMany: {
            args: Prisma.GameRegionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GameRegionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.GameRegionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameRegionPayload>
          }
          aggregate: {
            args: Prisma.GameRegionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGameRegion>
          }
          groupBy: {
            args: Prisma.GameRegionGroupByArgs<ExtArgs>
            result: $Utils.Optional<GameRegionGroupByOutputType>[]
          }
          count: {
            args: Prisma.GameRegionCountArgs<ExtArgs>
            result: $Utils.Optional<GameRegionCountAggregateOutputType> | number
          }
        }
      }
      GameVersionRegion: {
        payload: Prisma.$GameVersionRegionPayload<ExtArgs>
        fields: Prisma.GameVersionRegionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GameVersionRegionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameVersionRegionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GameVersionRegionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameVersionRegionPayload>
          }
          findFirst: {
            args: Prisma.GameVersionRegionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameVersionRegionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GameVersionRegionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameVersionRegionPayload>
          }
          findMany: {
            args: Prisma.GameVersionRegionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameVersionRegionPayload>[]
          }
          create: {
            args: Prisma.GameVersionRegionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameVersionRegionPayload>
          }
          createMany: {
            args: Prisma.GameVersionRegionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.GameVersionRegionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameVersionRegionPayload>[]
          }
          delete: {
            args: Prisma.GameVersionRegionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameVersionRegionPayload>
          }
          update: {
            args: Prisma.GameVersionRegionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameVersionRegionPayload>
          }
          deleteMany: {
            args: Prisma.GameVersionRegionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GameVersionRegionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.GameVersionRegionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameVersionRegionPayload>
          }
          aggregate: {
            args: Prisma.GameVersionRegionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGameVersionRegion>
          }
          groupBy: {
            args: Prisma.GameVersionRegionGroupByArgs<ExtArgs>
            result: $Utils.Optional<GameVersionRegionGroupByOutputType>[]
          }
          count: {
            args: Prisma.GameVersionRegionCountArgs<ExtArgs>
            result: $Utils.Optional<GameVersionRegionCountAggregateOutputType> | number
          }
        }
      }
      Price: {
        payload: Prisma.$PricePayload<ExtArgs>
        fields: Prisma.PriceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PriceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PricePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PriceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PricePayload>
          }
          findFirst: {
            args: Prisma.PriceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PricePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PriceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PricePayload>
          }
          findMany: {
            args: Prisma.PriceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PricePayload>[]
          }
          create: {
            args: Prisma.PriceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PricePayload>
          }
          createMany: {
            args: Prisma.PriceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PriceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PricePayload>[]
          }
          delete: {
            args: Prisma.PriceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PricePayload>
          }
          update: {
            args: Prisma.PriceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PricePayload>
          }
          deleteMany: {
            args: Prisma.PriceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PriceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PriceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PricePayload>
          }
          aggregate: {
            args: Prisma.PriceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePrice>
          }
          groupBy: {
            args: Prisma.PriceGroupByArgs<ExtArgs>
            result: $Utils.Optional<PriceGroupByOutputType>[]
          }
          count: {
            args: Prisma.PriceCountArgs<ExtArgs>
            result: $Utils.Optional<PriceCountAggregateOutputType> | number
          }
        }
      }
      PriceHistory: {
        payload: Prisma.$PriceHistoryPayload<ExtArgs>
        fields: Prisma.PriceHistoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PriceHistoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PriceHistoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PriceHistoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PriceHistoryPayload>
          }
          findFirst: {
            args: Prisma.PriceHistoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PriceHistoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PriceHistoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PriceHistoryPayload>
          }
          findMany: {
            args: Prisma.PriceHistoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PriceHistoryPayload>[]
          }
          create: {
            args: Prisma.PriceHistoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PriceHistoryPayload>
          }
          createMany: {
            args: Prisma.PriceHistoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PriceHistoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PriceHistoryPayload>[]
          }
          delete: {
            args: Prisma.PriceHistoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PriceHistoryPayload>
          }
          update: {
            args: Prisma.PriceHistoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PriceHistoryPayload>
          }
          deleteMany: {
            args: Prisma.PriceHistoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PriceHistoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PriceHistoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PriceHistoryPayload>
          }
          aggregate: {
            args: Prisma.PriceHistoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePriceHistory>
          }
          groupBy: {
            args: Prisma.PriceHistoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<PriceHistoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.PriceHistoryCountArgs<ExtArgs>
            result: $Utils.Optional<PriceHistoryCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
  }


  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type GameCountOutputType
   */

  export type GameCountOutputType = {
    GameLanguageSupport: number
    GameImage: number
    PsPlus: number
    GameEdition: number
    GameVersion: number
    GameRegion: number
  }

  export type GameCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    GameLanguageSupport?: boolean | GameCountOutputTypeCountGameLanguageSupportArgs
    GameImage?: boolean | GameCountOutputTypeCountGameImageArgs
    PsPlus?: boolean | GameCountOutputTypeCountPsPlusArgs
    GameEdition?: boolean | GameCountOutputTypeCountGameEditionArgs
    GameVersion?: boolean | GameCountOutputTypeCountGameVersionArgs
    GameRegion?: boolean | GameCountOutputTypeCountGameRegionArgs
  }

  // Custom InputTypes
  /**
   * GameCountOutputType without action
   */
  export type GameCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameCountOutputType
     */
    select?: GameCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * GameCountOutputType without action
   */
  export type GameCountOutputTypeCountGameLanguageSupportArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GameLanguageSupportWhereInput
  }

  /**
   * GameCountOutputType without action
   */
  export type GameCountOutputTypeCountGameImageArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GameImageWhereInput
  }

  /**
   * GameCountOutputType without action
   */
  export type GameCountOutputTypeCountPsPlusArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PsPlusWhereInput
  }

  /**
   * GameCountOutputType without action
   */
  export type GameCountOutputTypeCountGameEditionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GameEditionWhereInput
  }

  /**
   * GameCountOutputType without action
   */
  export type GameCountOutputTypeCountGameVersionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GameVersionWhereInput
  }

  /**
   * GameCountOutputType without action
   */
  export type GameCountOutputTypeCountGameRegionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GameRegionWhereInput
  }


  /**
   * Count Type LanguageCountOutputType
   */

  export type LanguageCountOutputType = {
    GameLanguageSupport: number
  }

  export type LanguageCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    GameLanguageSupport?: boolean | LanguageCountOutputTypeCountGameLanguageSupportArgs
  }

  // Custom InputTypes
  /**
   * LanguageCountOutputType without action
   */
  export type LanguageCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LanguageCountOutputType
     */
    select?: LanguageCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * LanguageCountOutputType without action
   */
  export type LanguageCountOutputTypeCountGameLanguageSupportArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GameLanguageSupportWhereInput
  }


  /**
   * Count Type GameEditionCountOutputType
   */

  export type GameEditionCountOutputType = {
    GameVersion: number
  }

  export type GameEditionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    GameVersion?: boolean | GameEditionCountOutputTypeCountGameVersionArgs
  }

  // Custom InputTypes
  /**
   * GameEditionCountOutputType without action
   */
  export type GameEditionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameEditionCountOutputType
     */
    select?: GameEditionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * GameEditionCountOutputType without action
   */
  export type GameEditionCountOutputTypeCountGameVersionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GameVersionWhereInput
  }


  /**
   * Count Type RegionCountOutputType
   */

  export type RegionCountOutputType = {
    GameRegion: number
  }

  export type RegionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    GameRegion?: boolean | RegionCountOutputTypeCountGameRegionArgs
  }

  // Custom InputTypes
  /**
   * RegionCountOutputType without action
   */
  export type RegionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegionCountOutputType
     */
    select?: RegionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RegionCountOutputType without action
   */
  export type RegionCountOutputTypeCountGameRegionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GameRegionWhereInput
  }


  /**
   * Count Type GameVersionCountOutputType
   */

  export type GameVersionCountOutputType = {
    GameVersionRegion: number
  }

  export type GameVersionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    GameVersionRegion?: boolean | GameVersionCountOutputTypeCountGameVersionRegionArgs
  }

  // Custom InputTypes
  /**
   * GameVersionCountOutputType without action
   */
  export type GameVersionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameVersionCountOutputType
     */
    select?: GameVersionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * GameVersionCountOutputType without action
   */
  export type GameVersionCountOutputTypeCountGameVersionRegionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GameVersionRegionWhereInput
  }


  /**
   * Count Type GameRegionCountOutputType
   */

  export type GameRegionCountOutputType = {
    versionRegions: number
  }

  export type GameRegionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    versionRegions?: boolean | GameRegionCountOutputTypeCountVersionRegionsArgs
  }

  // Custom InputTypes
  /**
   * GameRegionCountOutputType without action
   */
  export type GameRegionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameRegionCountOutputType
     */
    select?: GameRegionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * GameRegionCountOutputType without action
   */
  export type GameRegionCountOutputTypeCountVersionRegionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GameVersionRegionWhereInput
  }


  /**
   * Count Type GameVersionRegionCountOutputType
   */

  export type GameVersionRegionCountOutputType = {
    Price: number
    PriceHistory: number
  }

  export type GameVersionRegionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Price?: boolean | GameVersionRegionCountOutputTypeCountPriceArgs
    PriceHistory?: boolean | GameVersionRegionCountOutputTypeCountPriceHistoryArgs
  }

  // Custom InputTypes
  /**
   * GameVersionRegionCountOutputType without action
   */
  export type GameVersionRegionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameVersionRegionCountOutputType
     */
    select?: GameVersionRegionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * GameVersionRegionCountOutputType without action
   */
  export type GameVersionRegionCountOutputTypeCountPriceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PriceWhereInput
  }

  /**
   * GameVersionRegionCountOutputType without action
   */
  export type GameVersionRegionCountOutputTypeCountPriceHistoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PriceHistoryWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Game
   */

  export type AggregateGame = {
    _count: GameCountAggregateOutputType | null
    _avg: GameAvgAggregateOutputType | null
    _sum: GameSumAggregateOutputType | null
    _min: GameMinAggregateOutputType | null
    _max: GameMaxAggregateOutputType | null
  }

  export type GameAvgAggregateOutputType = {
    rating: number | null
  }

  export type GameSumAggregateOutputType = {
    rating: number | null
  }

  export type GameMinAggregateOutputType = {
    id: string | null
    psnId: string | null
    slug: string | null
    title: string | null
    fullUrl: string | null
    rating: number | null
    genre: string | null
    publisher: string | null
    isFreeToPlay: boolean | null
    releaseDate: Date | null
    releaseStatus: $Enums.ReleaseStatus | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type GameMaxAggregateOutputType = {
    id: string | null
    psnId: string | null
    slug: string | null
    title: string | null
    fullUrl: string | null
    rating: number | null
    genre: string | null
    publisher: string | null
    isFreeToPlay: boolean | null
    releaseDate: Date | null
    releaseStatus: $Enums.ReleaseStatus | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type GameCountAggregateOutputType = {
    id: number
    psnId: number
    slug: number
    title: number
    fullUrl: number
    rating: number
    genre: number
    publisher: number
    isFreeToPlay: number
    releaseDate: number
    releaseStatus: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type GameAvgAggregateInputType = {
    rating?: true
  }

  export type GameSumAggregateInputType = {
    rating?: true
  }

  export type GameMinAggregateInputType = {
    id?: true
    psnId?: true
    slug?: true
    title?: true
    fullUrl?: true
    rating?: true
    genre?: true
    publisher?: true
    isFreeToPlay?: true
    releaseDate?: true
    releaseStatus?: true
    createdAt?: true
    updatedAt?: true
  }

  export type GameMaxAggregateInputType = {
    id?: true
    psnId?: true
    slug?: true
    title?: true
    fullUrl?: true
    rating?: true
    genre?: true
    publisher?: true
    isFreeToPlay?: true
    releaseDate?: true
    releaseStatus?: true
    createdAt?: true
    updatedAt?: true
  }

  export type GameCountAggregateInputType = {
    id?: true
    psnId?: true
    slug?: true
    title?: true
    fullUrl?: true
    rating?: true
    genre?: true
    publisher?: true
    isFreeToPlay?: true
    releaseDate?: true
    releaseStatus?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type GameAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Game to aggregate.
     */
    where?: GameWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Games to fetch.
     */
    orderBy?: GameOrderByWithRelationInput | GameOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GameWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Games from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Games.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Games
    **/
    _count?: true | GameCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GameAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GameSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GameMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GameMaxAggregateInputType
  }

  export type GetGameAggregateType<T extends GameAggregateArgs> = {
        [P in keyof T & keyof AggregateGame]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGame[P]>
      : GetScalarType<T[P], AggregateGame[P]>
  }




  export type GameGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GameWhereInput
    orderBy?: GameOrderByWithAggregationInput | GameOrderByWithAggregationInput[]
    by: GameScalarFieldEnum[] | GameScalarFieldEnum
    having?: GameScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GameCountAggregateInputType | true
    _avg?: GameAvgAggregateInputType
    _sum?: GameSumAggregateInputType
    _min?: GameMinAggregateInputType
    _max?: GameMaxAggregateInputType
  }

  export type GameGroupByOutputType = {
    id: string
    psnId: string
    slug: string | null
    title: string
    fullUrl: string | null
    rating: number | null
    genre: string | null
    publisher: string | null
    isFreeToPlay: boolean | null
    releaseDate: Date | null
    releaseStatus: $Enums.ReleaseStatus
    createdAt: Date
    updatedAt: Date
    _count: GameCountAggregateOutputType | null
    _avg: GameAvgAggregateOutputType | null
    _sum: GameSumAggregateOutputType | null
    _min: GameMinAggregateOutputType | null
    _max: GameMaxAggregateOutputType | null
  }

  type GetGameGroupByPayload<T extends GameGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GameGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GameGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GameGroupByOutputType[P]>
            : GetScalarType<T[P], GameGroupByOutputType[P]>
        }
      >
    >


  export type GameSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    psnId?: boolean
    slug?: boolean
    title?: boolean
    fullUrl?: boolean
    rating?: boolean
    genre?: boolean
    publisher?: boolean
    isFreeToPlay?: boolean
    releaseDate?: boolean
    releaseStatus?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    GameLanguageSupport?: boolean | Game$GameLanguageSupportArgs<ExtArgs>
    GameImage?: boolean | Game$GameImageArgs<ExtArgs>
    PsPlus?: boolean | Game$PsPlusArgs<ExtArgs>
    GameEdition?: boolean | Game$GameEditionArgs<ExtArgs>
    GameVersion?: boolean | Game$GameVersionArgs<ExtArgs>
    GameRegion?: boolean | Game$GameRegionArgs<ExtArgs>
    _count?: boolean | GameCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["game"]>

  export type GameSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    psnId?: boolean
    slug?: boolean
    title?: boolean
    fullUrl?: boolean
    rating?: boolean
    genre?: boolean
    publisher?: boolean
    isFreeToPlay?: boolean
    releaseDate?: boolean
    releaseStatus?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["game"]>

  export type GameSelectScalar = {
    id?: boolean
    psnId?: boolean
    slug?: boolean
    title?: boolean
    fullUrl?: boolean
    rating?: boolean
    genre?: boolean
    publisher?: boolean
    isFreeToPlay?: boolean
    releaseDate?: boolean
    releaseStatus?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type GameInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    GameLanguageSupport?: boolean | Game$GameLanguageSupportArgs<ExtArgs>
    GameImage?: boolean | Game$GameImageArgs<ExtArgs>
    PsPlus?: boolean | Game$PsPlusArgs<ExtArgs>
    GameEdition?: boolean | Game$GameEditionArgs<ExtArgs>
    GameVersion?: boolean | Game$GameVersionArgs<ExtArgs>
    GameRegion?: boolean | Game$GameRegionArgs<ExtArgs>
    _count?: boolean | GameCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type GameIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $GamePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Game"
    objects: {
      GameLanguageSupport: Prisma.$GameLanguageSupportPayload<ExtArgs>[]
      GameImage: Prisma.$GameImagePayload<ExtArgs>[]
      PsPlus: Prisma.$PsPlusPayload<ExtArgs>[]
      GameEdition: Prisma.$GameEditionPayload<ExtArgs>[]
      GameVersion: Prisma.$GameVersionPayload<ExtArgs>[]
      GameRegion: Prisma.$GameRegionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      psnId: string
      slug: string | null
      title: string
      fullUrl: string | null
      rating: number | null
      genre: string | null
      publisher: string | null
      isFreeToPlay: boolean | null
      releaseDate: Date | null
      releaseStatus: $Enums.ReleaseStatus
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["game"]>
    composites: {}
  }

  type GameGetPayload<S extends boolean | null | undefined | GameDefaultArgs> = $Result.GetResult<Prisma.$GamePayload, S>

  type GameCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<GameFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: GameCountAggregateInputType | true
    }

  export interface GameDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Game'], meta: { name: 'Game' } }
    /**
     * Find zero or one Game that matches the filter.
     * @param {GameFindUniqueArgs} args - Arguments to find a Game
     * @example
     * // Get one Game
     * const game = await prisma.game.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GameFindUniqueArgs>(args: SelectSubset<T, GameFindUniqueArgs<ExtArgs>>): Prisma__GameClient<$Result.GetResult<Prisma.$GamePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Game that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {GameFindUniqueOrThrowArgs} args - Arguments to find a Game
     * @example
     * // Get one Game
     * const game = await prisma.game.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GameFindUniqueOrThrowArgs>(args: SelectSubset<T, GameFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GameClient<$Result.GetResult<Prisma.$GamePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Game that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameFindFirstArgs} args - Arguments to find a Game
     * @example
     * // Get one Game
     * const game = await prisma.game.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GameFindFirstArgs>(args?: SelectSubset<T, GameFindFirstArgs<ExtArgs>>): Prisma__GameClient<$Result.GetResult<Prisma.$GamePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Game that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameFindFirstOrThrowArgs} args - Arguments to find a Game
     * @example
     * // Get one Game
     * const game = await prisma.game.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GameFindFirstOrThrowArgs>(args?: SelectSubset<T, GameFindFirstOrThrowArgs<ExtArgs>>): Prisma__GameClient<$Result.GetResult<Prisma.$GamePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Games that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Games
     * const games = await prisma.game.findMany()
     * 
     * // Get first 10 Games
     * const games = await prisma.game.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const gameWithIdOnly = await prisma.game.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends GameFindManyArgs>(args?: SelectSubset<T, GameFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GamePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Game.
     * @param {GameCreateArgs} args - Arguments to create a Game.
     * @example
     * // Create one Game
     * const Game = await prisma.game.create({
     *   data: {
     *     // ... data to create a Game
     *   }
     * })
     * 
     */
    create<T extends GameCreateArgs>(args: SelectSubset<T, GameCreateArgs<ExtArgs>>): Prisma__GameClient<$Result.GetResult<Prisma.$GamePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Games.
     * @param {GameCreateManyArgs} args - Arguments to create many Games.
     * @example
     * // Create many Games
     * const game = await prisma.game.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GameCreateManyArgs>(args?: SelectSubset<T, GameCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Games and returns the data saved in the database.
     * @param {GameCreateManyAndReturnArgs} args - Arguments to create many Games.
     * @example
     * // Create many Games
     * const game = await prisma.game.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Games and only return the `id`
     * const gameWithIdOnly = await prisma.game.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends GameCreateManyAndReturnArgs>(args?: SelectSubset<T, GameCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GamePayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Game.
     * @param {GameDeleteArgs} args - Arguments to delete one Game.
     * @example
     * // Delete one Game
     * const Game = await prisma.game.delete({
     *   where: {
     *     // ... filter to delete one Game
     *   }
     * })
     * 
     */
    delete<T extends GameDeleteArgs>(args: SelectSubset<T, GameDeleteArgs<ExtArgs>>): Prisma__GameClient<$Result.GetResult<Prisma.$GamePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Game.
     * @param {GameUpdateArgs} args - Arguments to update one Game.
     * @example
     * // Update one Game
     * const game = await prisma.game.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GameUpdateArgs>(args: SelectSubset<T, GameUpdateArgs<ExtArgs>>): Prisma__GameClient<$Result.GetResult<Prisma.$GamePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Games.
     * @param {GameDeleteManyArgs} args - Arguments to filter Games to delete.
     * @example
     * // Delete a few Games
     * const { count } = await prisma.game.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GameDeleteManyArgs>(args?: SelectSubset<T, GameDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Games.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Games
     * const game = await prisma.game.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GameUpdateManyArgs>(args: SelectSubset<T, GameUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Game.
     * @param {GameUpsertArgs} args - Arguments to update or create a Game.
     * @example
     * // Update or create a Game
     * const game = await prisma.game.upsert({
     *   create: {
     *     // ... data to create a Game
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Game we want to update
     *   }
     * })
     */
    upsert<T extends GameUpsertArgs>(args: SelectSubset<T, GameUpsertArgs<ExtArgs>>): Prisma__GameClient<$Result.GetResult<Prisma.$GamePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Games.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameCountArgs} args - Arguments to filter Games to count.
     * @example
     * // Count the number of Games
     * const count = await prisma.game.count({
     *   where: {
     *     // ... the filter for the Games we want to count
     *   }
     * })
    **/
    count<T extends GameCountArgs>(
      args?: Subset<T, GameCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GameCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Game.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends GameAggregateArgs>(args: Subset<T, GameAggregateArgs>): Prisma.PrismaPromise<GetGameAggregateType<T>>

    /**
     * Group by Game.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends GameGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GameGroupByArgs['orderBy'] }
        : { orderBy?: GameGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, GameGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGameGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Game model
   */
  readonly fields: GameFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Game.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GameClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    GameLanguageSupport<T extends Game$GameLanguageSupportArgs<ExtArgs> = {}>(args?: Subset<T, Game$GameLanguageSupportArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GameLanguageSupportPayload<ExtArgs>, T, "findMany"> | Null>
    GameImage<T extends Game$GameImageArgs<ExtArgs> = {}>(args?: Subset<T, Game$GameImageArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GameImagePayload<ExtArgs>, T, "findMany"> | Null>
    PsPlus<T extends Game$PsPlusArgs<ExtArgs> = {}>(args?: Subset<T, Game$PsPlusArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PsPlusPayload<ExtArgs>, T, "findMany"> | Null>
    GameEdition<T extends Game$GameEditionArgs<ExtArgs> = {}>(args?: Subset<T, Game$GameEditionArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GameEditionPayload<ExtArgs>, T, "findMany"> | Null>
    GameVersion<T extends Game$GameVersionArgs<ExtArgs> = {}>(args?: Subset<T, Game$GameVersionArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GameVersionPayload<ExtArgs>, T, "findMany"> | Null>
    GameRegion<T extends Game$GameRegionArgs<ExtArgs> = {}>(args?: Subset<T, Game$GameRegionArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GameRegionPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Game model
   */ 
  interface GameFieldRefs {
    readonly id: FieldRef<"Game", 'String'>
    readonly psnId: FieldRef<"Game", 'String'>
    readonly slug: FieldRef<"Game", 'String'>
    readonly title: FieldRef<"Game", 'String'>
    readonly fullUrl: FieldRef<"Game", 'String'>
    readonly rating: FieldRef<"Game", 'Int'>
    readonly genre: FieldRef<"Game", 'String'>
    readonly publisher: FieldRef<"Game", 'String'>
    readonly isFreeToPlay: FieldRef<"Game", 'Boolean'>
    readonly releaseDate: FieldRef<"Game", 'DateTime'>
    readonly releaseStatus: FieldRef<"Game", 'ReleaseStatus'>
    readonly createdAt: FieldRef<"Game", 'DateTime'>
    readonly updatedAt: FieldRef<"Game", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Game findUnique
   */
  export type GameFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Game
     */
    select?: GameSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameInclude<ExtArgs> | null
    /**
     * Filter, which Game to fetch.
     */
    where: GameWhereUniqueInput
  }

  /**
   * Game findUniqueOrThrow
   */
  export type GameFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Game
     */
    select?: GameSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameInclude<ExtArgs> | null
    /**
     * Filter, which Game to fetch.
     */
    where: GameWhereUniqueInput
  }

  /**
   * Game findFirst
   */
  export type GameFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Game
     */
    select?: GameSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameInclude<ExtArgs> | null
    /**
     * Filter, which Game to fetch.
     */
    where?: GameWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Games to fetch.
     */
    orderBy?: GameOrderByWithRelationInput | GameOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Games.
     */
    cursor?: GameWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Games from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Games.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Games.
     */
    distinct?: GameScalarFieldEnum | GameScalarFieldEnum[]
  }

  /**
   * Game findFirstOrThrow
   */
  export type GameFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Game
     */
    select?: GameSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameInclude<ExtArgs> | null
    /**
     * Filter, which Game to fetch.
     */
    where?: GameWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Games to fetch.
     */
    orderBy?: GameOrderByWithRelationInput | GameOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Games.
     */
    cursor?: GameWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Games from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Games.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Games.
     */
    distinct?: GameScalarFieldEnum | GameScalarFieldEnum[]
  }

  /**
   * Game findMany
   */
  export type GameFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Game
     */
    select?: GameSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameInclude<ExtArgs> | null
    /**
     * Filter, which Games to fetch.
     */
    where?: GameWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Games to fetch.
     */
    orderBy?: GameOrderByWithRelationInput | GameOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Games.
     */
    cursor?: GameWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Games from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Games.
     */
    skip?: number
    distinct?: GameScalarFieldEnum | GameScalarFieldEnum[]
  }

  /**
   * Game create
   */
  export type GameCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Game
     */
    select?: GameSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameInclude<ExtArgs> | null
    /**
     * The data needed to create a Game.
     */
    data: XOR<GameCreateInput, GameUncheckedCreateInput>
  }

  /**
   * Game createMany
   */
  export type GameCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Games.
     */
    data: GameCreateManyInput | GameCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Game createManyAndReturn
   */
  export type GameCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Game
     */
    select?: GameSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Games.
     */
    data: GameCreateManyInput | GameCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Game update
   */
  export type GameUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Game
     */
    select?: GameSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameInclude<ExtArgs> | null
    /**
     * The data needed to update a Game.
     */
    data: XOR<GameUpdateInput, GameUncheckedUpdateInput>
    /**
     * Choose, which Game to update.
     */
    where: GameWhereUniqueInput
  }

  /**
   * Game updateMany
   */
  export type GameUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Games.
     */
    data: XOR<GameUpdateManyMutationInput, GameUncheckedUpdateManyInput>
    /**
     * Filter which Games to update
     */
    where?: GameWhereInput
  }

  /**
   * Game upsert
   */
  export type GameUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Game
     */
    select?: GameSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameInclude<ExtArgs> | null
    /**
     * The filter to search for the Game to update in case it exists.
     */
    where: GameWhereUniqueInput
    /**
     * In case the Game found by the `where` argument doesn't exist, create a new Game with this data.
     */
    create: XOR<GameCreateInput, GameUncheckedCreateInput>
    /**
     * In case the Game was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GameUpdateInput, GameUncheckedUpdateInput>
  }

  /**
   * Game delete
   */
  export type GameDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Game
     */
    select?: GameSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameInclude<ExtArgs> | null
    /**
     * Filter which Game to delete.
     */
    where: GameWhereUniqueInput
  }

  /**
   * Game deleteMany
   */
  export type GameDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Games to delete
     */
    where?: GameWhereInput
  }

  /**
   * Game.GameLanguageSupport
   */
  export type Game$GameLanguageSupportArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameLanguageSupport
     */
    select?: GameLanguageSupportSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameLanguageSupportInclude<ExtArgs> | null
    where?: GameLanguageSupportWhereInput
    orderBy?: GameLanguageSupportOrderByWithRelationInput | GameLanguageSupportOrderByWithRelationInput[]
    cursor?: GameLanguageSupportWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GameLanguageSupportScalarFieldEnum | GameLanguageSupportScalarFieldEnum[]
  }

  /**
   * Game.GameImage
   */
  export type Game$GameImageArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameImage
     */
    select?: GameImageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameImageInclude<ExtArgs> | null
    where?: GameImageWhereInput
    orderBy?: GameImageOrderByWithRelationInput | GameImageOrderByWithRelationInput[]
    cursor?: GameImageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GameImageScalarFieldEnum | GameImageScalarFieldEnum[]
  }

  /**
   * Game.PsPlus
   */
  export type Game$PsPlusArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PsPlus
     */
    select?: PsPlusSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PsPlusInclude<ExtArgs> | null
    where?: PsPlusWhereInput
    orderBy?: PsPlusOrderByWithRelationInput | PsPlusOrderByWithRelationInput[]
    cursor?: PsPlusWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PsPlusScalarFieldEnum | PsPlusScalarFieldEnum[]
  }

  /**
   * Game.GameEdition
   */
  export type Game$GameEditionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameEdition
     */
    select?: GameEditionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameEditionInclude<ExtArgs> | null
    where?: GameEditionWhereInput
    orderBy?: GameEditionOrderByWithRelationInput | GameEditionOrderByWithRelationInput[]
    cursor?: GameEditionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GameEditionScalarFieldEnum | GameEditionScalarFieldEnum[]
  }

  /**
   * Game.GameVersion
   */
  export type Game$GameVersionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameVersion
     */
    select?: GameVersionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameVersionInclude<ExtArgs> | null
    where?: GameVersionWhereInput
    orderBy?: GameVersionOrderByWithRelationInput | GameVersionOrderByWithRelationInput[]
    cursor?: GameVersionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GameVersionScalarFieldEnum | GameVersionScalarFieldEnum[]
  }

  /**
   * Game.GameRegion
   */
  export type Game$GameRegionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameRegion
     */
    select?: GameRegionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameRegionInclude<ExtArgs> | null
    where?: GameRegionWhereInput
    orderBy?: GameRegionOrderByWithRelationInput | GameRegionOrderByWithRelationInput[]
    cursor?: GameRegionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GameRegionScalarFieldEnum | GameRegionScalarFieldEnum[]
  }

  /**
   * Game without action
   */
  export type GameDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Game
     */
    select?: GameSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameInclude<ExtArgs> | null
  }


  /**
   * Model Language
   */

  export type AggregateLanguage = {
    _count: LanguageCountAggregateOutputType | null
    _avg: LanguageAvgAggregateOutputType | null
    _sum: LanguageSumAggregateOutputType | null
    _min: LanguageMinAggregateOutputType | null
    _max: LanguageMaxAggregateOutputType | null
  }

  export type LanguageAvgAggregateOutputType = {
    id: number | null
  }

  export type LanguageSumAggregateOutputType = {
    id: number | null
  }

  export type LanguageMinAggregateOutputType = {
    id: number | null
    code: string | null
    name: string | null
  }

  export type LanguageMaxAggregateOutputType = {
    id: number | null
    code: string | null
    name: string | null
  }

  export type LanguageCountAggregateOutputType = {
    id: number
    code: number
    name: number
    _all: number
  }


  export type LanguageAvgAggregateInputType = {
    id?: true
  }

  export type LanguageSumAggregateInputType = {
    id?: true
  }

  export type LanguageMinAggregateInputType = {
    id?: true
    code?: true
    name?: true
  }

  export type LanguageMaxAggregateInputType = {
    id?: true
    code?: true
    name?: true
  }

  export type LanguageCountAggregateInputType = {
    id?: true
    code?: true
    name?: true
    _all?: true
  }

  export type LanguageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Language to aggregate.
     */
    where?: LanguageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Languages to fetch.
     */
    orderBy?: LanguageOrderByWithRelationInput | LanguageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LanguageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Languages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Languages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Languages
    **/
    _count?: true | LanguageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LanguageAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LanguageSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LanguageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LanguageMaxAggregateInputType
  }

  export type GetLanguageAggregateType<T extends LanguageAggregateArgs> = {
        [P in keyof T & keyof AggregateLanguage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLanguage[P]>
      : GetScalarType<T[P], AggregateLanguage[P]>
  }




  export type LanguageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LanguageWhereInput
    orderBy?: LanguageOrderByWithAggregationInput | LanguageOrderByWithAggregationInput[]
    by: LanguageScalarFieldEnum[] | LanguageScalarFieldEnum
    having?: LanguageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LanguageCountAggregateInputType | true
    _avg?: LanguageAvgAggregateInputType
    _sum?: LanguageSumAggregateInputType
    _min?: LanguageMinAggregateInputType
    _max?: LanguageMaxAggregateInputType
  }

  export type LanguageGroupByOutputType = {
    id: number
    code: string
    name: string
    _count: LanguageCountAggregateOutputType | null
    _avg: LanguageAvgAggregateOutputType | null
    _sum: LanguageSumAggregateOutputType | null
    _min: LanguageMinAggregateOutputType | null
    _max: LanguageMaxAggregateOutputType | null
  }

  type GetLanguageGroupByPayload<T extends LanguageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LanguageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LanguageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LanguageGroupByOutputType[P]>
            : GetScalarType<T[P], LanguageGroupByOutputType[P]>
        }
      >
    >


  export type LanguageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    name?: boolean
    GameLanguageSupport?: boolean | Language$GameLanguageSupportArgs<ExtArgs>
    _count?: boolean | LanguageCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["language"]>

  export type LanguageSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    name?: boolean
  }, ExtArgs["result"]["language"]>

  export type LanguageSelectScalar = {
    id?: boolean
    code?: boolean
    name?: boolean
  }

  export type LanguageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    GameLanguageSupport?: boolean | Language$GameLanguageSupportArgs<ExtArgs>
    _count?: boolean | LanguageCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type LanguageIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $LanguagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Language"
    objects: {
      GameLanguageSupport: Prisma.$GameLanguageSupportPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      code: string
      name: string
    }, ExtArgs["result"]["language"]>
    composites: {}
  }

  type LanguageGetPayload<S extends boolean | null | undefined | LanguageDefaultArgs> = $Result.GetResult<Prisma.$LanguagePayload, S>

  type LanguageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<LanguageFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: LanguageCountAggregateInputType | true
    }

  export interface LanguageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Language'], meta: { name: 'Language' } }
    /**
     * Find zero or one Language that matches the filter.
     * @param {LanguageFindUniqueArgs} args - Arguments to find a Language
     * @example
     * // Get one Language
     * const language = await prisma.language.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LanguageFindUniqueArgs>(args: SelectSubset<T, LanguageFindUniqueArgs<ExtArgs>>): Prisma__LanguageClient<$Result.GetResult<Prisma.$LanguagePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Language that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {LanguageFindUniqueOrThrowArgs} args - Arguments to find a Language
     * @example
     * // Get one Language
     * const language = await prisma.language.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LanguageFindUniqueOrThrowArgs>(args: SelectSubset<T, LanguageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LanguageClient<$Result.GetResult<Prisma.$LanguagePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Language that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LanguageFindFirstArgs} args - Arguments to find a Language
     * @example
     * // Get one Language
     * const language = await prisma.language.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LanguageFindFirstArgs>(args?: SelectSubset<T, LanguageFindFirstArgs<ExtArgs>>): Prisma__LanguageClient<$Result.GetResult<Prisma.$LanguagePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Language that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LanguageFindFirstOrThrowArgs} args - Arguments to find a Language
     * @example
     * // Get one Language
     * const language = await prisma.language.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LanguageFindFirstOrThrowArgs>(args?: SelectSubset<T, LanguageFindFirstOrThrowArgs<ExtArgs>>): Prisma__LanguageClient<$Result.GetResult<Prisma.$LanguagePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Languages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LanguageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Languages
     * const languages = await prisma.language.findMany()
     * 
     * // Get first 10 Languages
     * const languages = await prisma.language.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const languageWithIdOnly = await prisma.language.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LanguageFindManyArgs>(args?: SelectSubset<T, LanguageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LanguagePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Language.
     * @param {LanguageCreateArgs} args - Arguments to create a Language.
     * @example
     * // Create one Language
     * const Language = await prisma.language.create({
     *   data: {
     *     // ... data to create a Language
     *   }
     * })
     * 
     */
    create<T extends LanguageCreateArgs>(args: SelectSubset<T, LanguageCreateArgs<ExtArgs>>): Prisma__LanguageClient<$Result.GetResult<Prisma.$LanguagePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Languages.
     * @param {LanguageCreateManyArgs} args - Arguments to create many Languages.
     * @example
     * // Create many Languages
     * const language = await prisma.language.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LanguageCreateManyArgs>(args?: SelectSubset<T, LanguageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Languages and returns the data saved in the database.
     * @param {LanguageCreateManyAndReturnArgs} args - Arguments to create many Languages.
     * @example
     * // Create many Languages
     * const language = await prisma.language.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Languages and only return the `id`
     * const languageWithIdOnly = await prisma.language.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LanguageCreateManyAndReturnArgs>(args?: SelectSubset<T, LanguageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LanguagePayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Language.
     * @param {LanguageDeleteArgs} args - Arguments to delete one Language.
     * @example
     * // Delete one Language
     * const Language = await prisma.language.delete({
     *   where: {
     *     // ... filter to delete one Language
     *   }
     * })
     * 
     */
    delete<T extends LanguageDeleteArgs>(args: SelectSubset<T, LanguageDeleteArgs<ExtArgs>>): Prisma__LanguageClient<$Result.GetResult<Prisma.$LanguagePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Language.
     * @param {LanguageUpdateArgs} args - Arguments to update one Language.
     * @example
     * // Update one Language
     * const language = await prisma.language.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LanguageUpdateArgs>(args: SelectSubset<T, LanguageUpdateArgs<ExtArgs>>): Prisma__LanguageClient<$Result.GetResult<Prisma.$LanguagePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Languages.
     * @param {LanguageDeleteManyArgs} args - Arguments to filter Languages to delete.
     * @example
     * // Delete a few Languages
     * const { count } = await prisma.language.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LanguageDeleteManyArgs>(args?: SelectSubset<T, LanguageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Languages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LanguageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Languages
     * const language = await prisma.language.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LanguageUpdateManyArgs>(args: SelectSubset<T, LanguageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Language.
     * @param {LanguageUpsertArgs} args - Arguments to update or create a Language.
     * @example
     * // Update or create a Language
     * const language = await prisma.language.upsert({
     *   create: {
     *     // ... data to create a Language
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Language we want to update
     *   }
     * })
     */
    upsert<T extends LanguageUpsertArgs>(args: SelectSubset<T, LanguageUpsertArgs<ExtArgs>>): Prisma__LanguageClient<$Result.GetResult<Prisma.$LanguagePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Languages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LanguageCountArgs} args - Arguments to filter Languages to count.
     * @example
     * // Count the number of Languages
     * const count = await prisma.language.count({
     *   where: {
     *     // ... the filter for the Languages we want to count
     *   }
     * })
    **/
    count<T extends LanguageCountArgs>(
      args?: Subset<T, LanguageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LanguageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Language.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LanguageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends LanguageAggregateArgs>(args: Subset<T, LanguageAggregateArgs>): Prisma.PrismaPromise<GetLanguageAggregateType<T>>

    /**
     * Group by Language.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LanguageGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends LanguageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LanguageGroupByArgs['orderBy'] }
        : { orderBy?: LanguageGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, LanguageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLanguageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Language model
   */
  readonly fields: LanguageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Language.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LanguageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    GameLanguageSupport<T extends Language$GameLanguageSupportArgs<ExtArgs> = {}>(args?: Subset<T, Language$GameLanguageSupportArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GameLanguageSupportPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Language model
   */ 
  interface LanguageFieldRefs {
    readonly id: FieldRef<"Language", 'Int'>
    readonly code: FieldRef<"Language", 'String'>
    readonly name: FieldRef<"Language", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Language findUnique
   */
  export type LanguageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Language
     */
    select?: LanguageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LanguageInclude<ExtArgs> | null
    /**
     * Filter, which Language to fetch.
     */
    where: LanguageWhereUniqueInput
  }

  /**
   * Language findUniqueOrThrow
   */
  export type LanguageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Language
     */
    select?: LanguageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LanguageInclude<ExtArgs> | null
    /**
     * Filter, which Language to fetch.
     */
    where: LanguageWhereUniqueInput
  }

  /**
   * Language findFirst
   */
  export type LanguageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Language
     */
    select?: LanguageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LanguageInclude<ExtArgs> | null
    /**
     * Filter, which Language to fetch.
     */
    where?: LanguageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Languages to fetch.
     */
    orderBy?: LanguageOrderByWithRelationInput | LanguageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Languages.
     */
    cursor?: LanguageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Languages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Languages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Languages.
     */
    distinct?: LanguageScalarFieldEnum | LanguageScalarFieldEnum[]
  }

  /**
   * Language findFirstOrThrow
   */
  export type LanguageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Language
     */
    select?: LanguageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LanguageInclude<ExtArgs> | null
    /**
     * Filter, which Language to fetch.
     */
    where?: LanguageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Languages to fetch.
     */
    orderBy?: LanguageOrderByWithRelationInput | LanguageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Languages.
     */
    cursor?: LanguageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Languages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Languages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Languages.
     */
    distinct?: LanguageScalarFieldEnum | LanguageScalarFieldEnum[]
  }

  /**
   * Language findMany
   */
  export type LanguageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Language
     */
    select?: LanguageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LanguageInclude<ExtArgs> | null
    /**
     * Filter, which Languages to fetch.
     */
    where?: LanguageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Languages to fetch.
     */
    orderBy?: LanguageOrderByWithRelationInput | LanguageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Languages.
     */
    cursor?: LanguageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Languages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Languages.
     */
    skip?: number
    distinct?: LanguageScalarFieldEnum | LanguageScalarFieldEnum[]
  }

  /**
   * Language create
   */
  export type LanguageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Language
     */
    select?: LanguageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LanguageInclude<ExtArgs> | null
    /**
     * The data needed to create a Language.
     */
    data: XOR<LanguageCreateInput, LanguageUncheckedCreateInput>
  }

  /**
   * Language createMany
   */
  export type LanguageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Languages.
     */
    data: LanguageCreateManyInput | LanguageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Language createManyAndReturn
   */
  export type LanguageCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Language
     */
    select?: LanguageSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Languages.
     */
    data: LanguageCreateManyInput | LanguageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Language update
   */
  export type LanguageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Language
     */
    select?: LanguageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LanguageInclude<ExtArgs> | null
    /**
     * The data needed to update a Language.
     */
    data: XOR<LanguageUpdateInput, LanguageUncheckedUpdateInput>
    /**
     * Choose, which Language to update.
     */
    where: LanguageWhereUniqueInput
  }

  /**
   * Language updateMany
   */
  export type LanguageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Languages.
     */
    data: XOR<LanguageUpdateManyMutationInput, LanguageUncheckedUpdateManyInput>
    /**
     * Filter which Languages to update
     */
    where?: LanguageWhereInput
  }

  /**
   * Language upsert
   */
  export type LanguageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Language
     */
    select?: LanguageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LanguageInclude<ExtArgs> | null
    /**
     * The filter to search for the Language to update in case it exists.
     */
    where: LanguageWhereUniqueInput
    /**
     * In case the Language found by the `where` argument doesn't exist, create a new Language with this data.
     */
    create: XOR<LanguageCreateInput, LanguageUncheckedCreateInput>
    /**
     * In case the Language was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LanguageUpdateInput, LanguageUncheckedUpdateInput>
  }

  /**
   * Language delete
   */
  export type LanguageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Language
     */
    select?: LanguageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LanguageInclude<ExtArgs> | null
    /**
     * Filter which Language to delete.
     */
    where: LanguageWhereUniqueInput
  }

  /**
   * Language deleteMany
   */
  export type LanguageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Languages to delete
     */
    where?: LanguageWhereInput
  }

  /**
   * Language.GameLanguageSupport
   */
  export type Language$GameLanguageSupportArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameLanguageSupport
     */
    select?: GameLanguageSupportSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameLanguageSupportInclude<ExtArgs> | null
    where?: GameLanguageSupportWhereInput
    orderBy?: GameLanguageSupportOrderByWithRelationInput | GameLanguageSupportOrderByWithRelationInput[]
    cursor?: GameLanguageSupportWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GameLanguageSupportScalarFieldEnum | GameLanguageSupportScalarFieldEnum[]
  }

  /**
   * Language without action
   */
  export type LanguageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Language
     */
    select?: LanguageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LanguageInclude<ExtArgs> | null
  }


  /**
   * Model GameLanguageSupport
   */

  export type AggregateGameLanguageSupport = {
    _count: GameLanguageSupportCountAggregateOutputType | null
    _avg: GameLanguageSupportAvgAggregateOutputType | null
    _sum: GameLanguageSupportSumAggregateOutputType | null
    _min: GameLanguageSupportMinAggregateOutputType | null
    _max: GameLanguageSupportMaxAggregateOutputType | null
  }

  export type GameLanguageSupportAvgAggregateOutputType = {
    id: number | null
    languageId: number | null
  }

  export type GameLanguageSupportSumAggregateOutputType = {
    id: number | null
    languageId: number | null
  }

  export type GameLanguageSupportMinAggregateOutputType = {
    id: number | null
    gameId: string | null
    languageId: number | null
    languageType: $Enums.LanguageType | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type GameLanguageSupportMaxAggregateOutputType = {
    id: number | null
    gameId: string | null
    languageId: number | null
    languageType: $Enums.LanguageType | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type GameLanguageSupportCountAggregateOutputType = {
    id: number
    gameId: number
    languageId: number
    languageType: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type GameLanguageSupportAvgAggregateInputType = {
    id?: true
    languageId?: true
  }

  export type GameLanguageSupportSumAggregateInputType = {
    id?: true
    languageId?: true
  }

  export type GameLanguageSupportMinAggregateInputType = {
    id?: true
    gameId?: true
    languageId?: true
    languageType?: true
    createdAt?: true
    updatedAt?: true
  }

  export type GameLanguageSupportMaxAggregateInputType = {
    id?: true
    gameId?: true
    languageId?: true
    languageType?: true
    createdAt?: true
    updatedAt?: true
  }

  export type GameLanguageSupportCountAggregateInputType = {
    id?: true
    gameId?: true
    languageId?: true
    languageType?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type GameLanguageSupportAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GameLanguageSupport to aggregate.
     */
    where?: GameLanguageSupportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GameLanguageSupports to fetch.
     */
    orderBy?: GameLanguageSupportOrderByWithRelationInput | GameLanguageSupportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GameLanguageSupportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GameLanguageSupports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GameLanguageSupports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned GameLanguageSupports
    **/
    _count?: true | GameLanguageSupportCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GameLanguageSupportAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GameLanguageSupportSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GameLanguageSupportMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GameLanguageSupportMaxAggregateInputType
  }

  export type GetGameLanguageSupportAggregateType<T extends GameLanguageSupportAggregateArgs> = {
        [P in keyof T & keyof AggregateGameLanguageSupport]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGameLanguageSupport[P]>
      : GetScalarType<T[P], AggregateGameLanguageSupport[P]>
  }




  export type GameLanguageSupportGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GameLanguageSupportWhereInput
    orderBy?: GameLanguageSupportOrderByWithAggregationInput | GameLanguageSupportOrderByWithAggregationInput[]
    by: GameLanguageSupportScalarFieldEnum[] | GameLanguageSupportScalarFieldEnum
    having?: GameLanguageSupportScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GameLanguageSupportCountAggregateInputType | true
    _avg?: GameLanguageSupportAvgAggregateInputType
    _sum?: GameLanguageSupportSumAggregateInputType
    _min?: GameLanguageSupportMinAggregateInputType
    _max?: GameLanguageSupportMaxAggregateInputType
  }

  export type GameLanguageSupportGroupByOutputType = {
    id: number
    gameId: string
    languageId: number
    languageType: $Enums.LanguageType
    createdAt: Date
    updatedAt: Date
    _count: GameLanguageSupportCountAggregateOutputType | null
    _avg: GameLanguageSupportAvgAggregateOutputType | null
    _sum: GameLanguageSupportSumAggregateOutputType | null
    _min: GameLanguageSupportMinAggregateOutputType | null
    _max: GameLanguageSupportMaxAggregateOutputType | null
  }

  type GetGameLanguageSupportGroupByPayload<T extends GameLanguageSupportGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GameLanguageSupportGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GameLanguageSupportGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GameLanguageSupportGroupByOutputType[P]>
            : GetScalarType<T[P], GameLanguageSupportGroupByOutputType[P]>
        }
      >
    >


  export type GameLanguageSupportSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    gameId?: boolean
    languageId?: boolean
    languageType?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    game?: boolean | GameDefaultArgs<ExtArgs>
    language?: boolean | LanguageDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["gameLanguageSupport"]>

  export type GameLanguageSupportSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    gameId?: boolean
    languageId?: boolean
    languageType?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    game?: boolean | GameDefaultArgs<ExtArgs>
    language?: boolean | LanguageDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["gameLanguageSupport"]>

  export type GameLanguageSupportSelectScalar = {
    id?: boolean
    gameId?: boolean
    languageId?: boolean
    languageType?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type GameLanguageSupportInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    game?: boolean | GameDefaultArgs<ExtArgs>
    language?: boolean | LanguageDefaultArgs<ExtArgs>
  }
  export type GameLanguageSupportIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    game?: boolean | GameDefaultArgs<ExtArgs>
    language?: boolean | LanguageDefaultArgs<ExtArgs>
  }

  export type $GameLanguageSupportPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "GameLanguageSupport"
    objects: {
      game: Prisma.$GamePayload<ExtArgs>
      language: Prisma.$LanguagePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      gameId: string
      languageId: number
      languageType: $Enums.LanguageType
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["gameLanguageSupport"]>
    composites: {}
  }

  type GameLanguageSupportGetPayload<S extends boolean | null | undefined | GameLanguageSupportDefaultArgs> = $Result.GetResult<Prisma.$GameLanguageSupportPayload, S>

  type GameLanguageSupportCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<GameLanguageSupportFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: GameLanguageSupportCountAggregateInputType | true
    }

  export interface GameLanguageSupportDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['GameLanguageSupport'], meta: { name: 'GameLanguageSupport' } }
    /**
     * Find zero or one GameLanguageSupport that matches the filter.
     * @param {GameLanguageSupportFindUniqueArgs} args - Arguments to find a GameLanguageSupport
     * @example
     * // Get one GameLanguageSupport
     * const gameLanguageSupport = await prisma.gameLanguageSupport.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GameLanguageSupportFindUniqueArgs>(args: SelectSubset<T, GameLanguageSupportFindUniqueArgs<ExtArgs>>): Prisma__GameLanguageSupportClient<$Result.GetResult<Prisma.$GameLanguageSupportPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one GameLanguageSupport that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {GameLanguageSupportFindUniqueOrThrowArgs} args - Arguments to find a GameLanguageSupport
     * @example
     * // Get one GameLanguageSupport
     * const gameLanguageSupport = await prisma.gameLanguageSupport.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GameLanguageSupportFindUniqueOrThrowArgs>(args: SelectSubset<T, GameLanguageSupportFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GameLanguageSupportClient<$Result.GetResult<Prisma.$GameLanguageSupportPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first GameLanguageSupport that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameLanguageSupportFindFirstArgs} args - Arguments to find a GameLanguageSupport
     * @example
     * // Get one GameLanguageSupport
     * const gameLanguageSupport = await prisma.gameLanguageSupport.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GameLanguageSupportFindFirstArgs>(args?: SelectSubset<T, GameLanguageSupportFindFirstArgs<ExtArgs>>): Prisma__GameLanguageSupportClient<$Result.GetResult<Prisma.$GameLanguageSupportPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first GameLanguageSupport that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameLanguageSupportFindFirstOrThrowArgs} args - Arguments to find a GameLanguageSupport
     * @example
     * // Get one GameLanguageSupport
     * const gameLanguageSupport = await prisma.gameLanguageSupport.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GameLanguageSupportFindFirstOrThrowArgs>(args?: SelectSubset<T, GameLanguageSupportFindFirstOrThrowArgs<ExtArgs>>): Prisma__GameLanguageSupportClient<$Result.GetResult<Prisma.$GameLanguageSupportPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more GameLanguageSupports that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameLanguageSupportFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all GameLanguageSupports
     * const gameLanguageSupports = await prisma.gameLanguageSupport.findMany()
     * 
     * // Get first 10 GameLanguageSupports
     * const gameLanguageSupports = await prisma.gameLanguageSupport.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const gameLanguageSupportWithIdOnly = await prisma.gameLanguageSupport.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends GameLanguageSupportFindManyArgs>(args?: SelectSubset<T, GameLanguageSupportFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GameLanguageSupportPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a GameLanguageSupport.
     * @param {GameLanguageSupportCreateArgs} args - Arguments to create a GameLanguageSupport.
     * @example
     * // Create one GameLanguageSupport
     * const GameLanguageSupport = await prisma.gameLanguageSupport.create({
     *   data: {
     *     // ... data to create a GameLanguageSupport
     *   }
     * })
     * 
     */
    create<T extends GameLanguageSupportCreateArgs>(args: SelectSubset<T, GameLanguageSupportCreateArgs<ExtArgs>>): Prisma__GameLanguageSupportClient<$Result.GetResult<Prisma.$GameLanguageSupportPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many GameLanguageSupports.
     * @param {GameLanguageSupportCreateManyArgs} args - Arguments to create many GameLanguageSupports.
     * @example
     * // Create many GameLanguageSupports
     * const gameLanguageSupport = await prisma.gameLanguageSupport.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GameLanguageSupportCreateManyArgs>(args?: SelectSubset<T, GameLanguageSupportCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many GameLanguageSupports and returns the data saved in the database.
     * @param {GameLanguageSupportCreateManyAndReturnArgs} args - Arguments to create many GameLanguageSupports.
     * @example
     * // Create many GameLanguageSupports
     * const gameLanguageSupport = await prisma.gameLanguageSupport.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many GameLanguageSupports and only return the `id`
     * const gameLanguageSupportWithIdOnly = await prisma.gameLanguageSupport.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends GameLanguageSupportCreateManyAndReturnArgs>(args?: SelectSubset<T, GameLanguageSupportCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GameLanguageSupportPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a GameLanguageSupport.
     * @param {GameLanguageSupportDeleteArgs} args - Arguments to delete one GameLanguageSupport.
     * @example
     * // Delete one GameLanguageSupport
     * const GameLanguageSupport = await prisma.gameLanguageSupport.delete({
     *   where: {
     *     // ... filter to delete one GameLanguageSupport
     *   }
     * })
     * 
     */
    delete<T extends GameLanguageSupportDeleteArgs>(args: SelectSubset<T, GameLanguageSupportDeleteArgs<ExtArgs>>): Prisma__GameLanguageSupportClient<$Result.GetResult<Prisma.$GameLanguageSupportPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one GameLanguageSupport.
     * @param {GameLanguageSupportUpdateArgs} args - Arguments to update one GameLanguageSupport.
     * @example
     * // Update one GameLanguageSupport
     * const gameLanguageSupport = await prisma.gameLanguageSupport.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GameLanguageSupportUpdateArgs>(args: SelectSubset<T, GameLanguageSupportUpdateArgs<ExtArgs>>): Prisma__GameLanguageSupportClient<$Result.GetResult<Prisma.$GameLanguageSupportPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more GameLanguageSupports.
     * @param {GameLanguageSupportDeleteManyArgs} args - Arguments to filter GameLanguageSupports to delete.
     * @example
     * // Delete a few GameLanguageSupports
     * const { count } = await prisma.gameLanguageSupport.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GameLanguageSupportDeleteManyArgs>(args?: SelectSubset<T, GameLanguageSupportDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GameLanguageSupports.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameLanguageSupportUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many GameLanguageSupports
     * const gameLanguageSupport = await prisma.gameLanguageSupport.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GameLanguageSupportUpdateManyArgs>(args: SelectSubset<T, GameLanguageSupportUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one GameLanguageSupport.
     * @param {GameLanguageSupportUpsertArgs} args - Arguments to update or create a GameLanguageSupport.
     * @example
     * // Update or create a GameLanguageSupport
     * const gameLanguageSupport = await prisma.gameLanguageSupport.upsert({
     *   create: {
     *     // ... data to create a GameLanguageSupport
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the GameLanguageSupport we want to update
     *   }
     * })
     */
    upsert<T extends GameLanguageSupportUpsertArgs>(args: SelectSubset<T, GameLanguageSupportUpsertArgs<ExtArgs>>): Prisma__GameLanguageSupportClient<$Result.GetResult<Prisma.$GameLanguageSupportPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of GameLanguageSupports.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameLanguageSupportCountArgs} args - Arguments to filter GameLanguageSupports to count.
     * @example
     * // Count the number of GameLanguageSupports
     * const count = await prisma.gameLanguageSupport.count({
     *   where: {
     *     // ... the filter for the GameLanguageSupports we want to count
     *   }
     * })
    **/
    count<T extends GameLanguageSupportCountArgs>(
      args?: Subset<T, GameLanguageSupportCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GameLanguageSupportCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a GameLanguageSupport.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameLanguageSupportAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends GameLanguageSupportAggregateArgs>(args: Subset<T, GameLanguageSupportAggregateArgs>): Prisma.PrismaPromise<GetGameLanguageSupportAggregateType<T>>

    /**
     * Group by GameLanguageSupport.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameLanguageSupportGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends GameLanguageSupportGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GameLanguageSupportGroupByArgs['orderBy'] }
        : { orderBy?: GameLanguageSupportGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, GameLanguageSupportGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGameLanguageSupportGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the GameLanguageSupport model
   */
  readonly fields: GameLanguageSupportFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for GameLanguageSupport.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GameLanguageSupportClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    game<T extends GameDefaultArgs<ExtArgs> = {}>(args?: Subset<T, GameDefaultArgs<ExtArgs>>): Prisma__GameClient<$Result.GetResult<Prisma.$GamePayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    language<T extends LanguageDefaultArgs<ExtArgs> = {}>(args?: Subset<T, LanguageDefaultArgs<ExtArgs>>): Prisma__LanguageClient<$Result.GetResult<Prisma.$LanguagePayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the GameLanguageSupport model
   */ 
  interface GameLanguageSupportFieldRefs {
    readonly id: FieldRef<"GameLanguageSupport", 'Int'>
    readonly gameId: FieldRef<"GameLanguageSupport", 'String'>
    readonly languageId: FieldRef<"GameLanguageSupport", 'Int'>
    readonly languageType: FieldRef<"GameLanguageSupport", 'LanguageType'>
    readonly createdAt: FieldRef<"GameLanguageSupport", 'DateTime'>
    readonly updatedAt: FieldRef<"GameLanguageSupport", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * GameLanguageSupport findUnique
   */
  export type GameLanguageSupportFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameLanguageSupport
     */
    select?: GameLanguageSupportSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameLanguageSupportInclude<ExtArgs> | null
    /**
     * Filter, which GameLanguageSupport to fetch.
     */
    where: GameLanguageSupportWhereUniqueInput
  }

  /**
   * GameLanguageSupport findUniqueOrThrow
   */
  export type GameLanguageSupportFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameLanguageSupport
     */
    select?: GameLanguageSupportSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameLanguageSupportInclude<ExtArgs> | null
    /**
     * Filter, which GameLanguageSupport to fetch.
     */
    where: GameLanguageSupportWhereUniqueInput
  }

  /**
   * GameLanguageSupport findFirst
   */
  export type GameLanguageSupportFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameLanguageSupport
     */
    select?: GameLanguageSupportSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameLanguageSupportInclude<ExtArgs> | null
    /**
     * Filter, which GameLanguageSupport to fetch.
     */
    where?: GameLanguageSupportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GameLanguageSupports to fetch.
     */
    orderBy?: GameLanguageSupportOrderByWithRelationInput | GameLanguageSupportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GameLanguageSupports.
     */
    cursor?: GameLanguageSupportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GameLanguageSupports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GameLanguageSupports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GameLanguageSupports.
     */
    distinct?: GameLanguageSupportScalarFieldEnum | GameLanguageSupportScalarFieldEnum[]
  }

  /**
   * GameLanguageSupport findFirstOrThrow
   */
  export type GameLanguageSupportFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameLanguageSupport
     */
    select?: GameLanguageSupportSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameLanguageSupportInclude<ExtArgs> | null
    /**
     * Filter, which GameLanguageSupport to fetch.
     */
    where?: GameLanguageSupportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GameLanguageSupports to fetch.
     */
    orderBy?: GameLanguageSupportOrderByWithRelationInput | GameLanguageSupportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GameLanguageSupports.
     */
    cursor?: GameLanguageSupportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GameLanguageSupports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GameLanguageSupports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GameLanguageSupports.
     */
    distinct?: GameLanguageSupportScalarFieldEnum | GameLanguageSupportScalarFieldEnum[]
  }

  /**
   * GameLanguageSupport findMany
   */
  export type GameLanguageSupportFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameLanguageSupport
     */
    select?: GameLanguageSupportSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameLanguageSupportInclude<ExtArgs> | null
    /**
     * Filter, which GameLanguageSupports to fetch.
     */
    where?: GameLanguageSupportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GameLanguageSupports to fetch.
     */
    orderBy?: GameLanguageSupportOrderByWithRelationInput | GameLanguageSupportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing GameLanguageSupports.
     */
    cursor?: GameLanguageSupportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GameLanguageSupports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GameLanguageSupports.
     */
    skip?: number
    distinct?: GameLanguageSupportScalarFieldEnum | GameLanguageSupportScalarFieldEnum[]
  }

  /**
   * GameLanguageSupport create
   */
  export type GameLanguageSupportCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameLanguageSupport
     */
    select?: GameLanguageSupportSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameLanguageSupportInclude<ExtArgs> | null
    /**
     * The data needed to create a GameLanguageSupport.
     */
    data: XOR<GameLanguageSupportCreateInput, GameLanguageSupportUncheckedCreateInput>
  }

  /**
   * GameLanguageSupport createMany
   */
  export type GameLanguageSupportCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many GameLanguageSupports.
     */
    data: GameLanguageSupportCreateManyInput | GameLanguageSupportCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * GameLanguageSupport createManyAndReturn
   */
  export type GameLanguageSupportCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameLanguageSupport
     */
    select?: GameLanguageSupportSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many GameLanguageSupports.
     */
    data: GameLanguageSupportCreateManyInput | GameLanguageSupportCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameLanguageSupportIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * GameLanguageSupport update
   */
  export type GameLanguageSupportUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameLanguageSupport
     */
    select?: GameLanguageSupportSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameLanguageSupportInclude<ExtArgs> | null
    /**
     * The data needed to update a GameLanguageSupport.
     */
    data: XOR<GameLanguageSupportUpdateInput, GameLanguageSupportUncheckedUpdateInput>
    /**
     * Choose, which GameLanguageSupport to update.
     */
    where: GameLanguageSupportWhereUniqueInput
  }

  /**
   * GameLanguageSupport updateMany
   */
  export type GameLanguageSupportUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update GameLanguageSupports.
     */
    data: XOR<GameLanguageSupportUpdateManyMutationInput, GameLanguageSupportUncheckedUpdateManyInput>
    /**
     * Filter which GameLanguageSupports to update
     */
    where?: GameLanguageSupportWhereInput
  }

  /**
   * GameLanguageSupport upsert
   */
  export type GameLanguageSupportUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameLanguageSupport
     */
    select?: GameLanguageSupportSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameLanguageSupportInclude<ExtArgs> | null
    /**
     * The filter to search for the GameLanguageSupport to update in case it exists.
     */
    where: GameLanguageSupportWhereUniqueInput
    /**
     * In case the GameLanguageSupport found by the `where` argument doesn't exist, create a new GameLanguageSupport with this data.
     */
    create: XOR<GameLanguageSupportCreateInput, GameLanguageSupportUncheckedCreateInput>
    /**
     * In case the GameLanguageSupport was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GameLanguageSupportUpdateInput, GameLanguageSupportUncheckedUpdateInput>
  }

  /**
   * GameLanguageSupport delete
   */
  export type GameLanguageSupportDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameLanguageSupport
     */
    select?: GameLanguageSupportSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameLanguageSupportInclude<ExtArgs> | null
    /**
     * Filter which GameLanguageSupport to delete.
     */
    where: GameLanguageSupportWhereUniqueInput
  }

  /**
   * GameLanguageSupport deleteMany
   */
  export type GameLanguageSupportDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GameLanguageSupports to delete
     */
    where?: GameLanguageSupportWhereInput
  }

  /**
   * GameLanguageSupport without action
   */
  export type GameLanguageSupportDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameLanguageSupport
     */
    select?: GameLanguageSupportSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameLanguageSupportInclude<ExtArgs> | null
  }


  /**
   * Model GameImage
   */

  export type AggregateGameImage = {
    _count: GameImageCountAggregateOutputType | null
    _avg: GameImageAvgAggregateOutputType | null
    _sum: GameImageSumAggregateOutputType | null
    _min: GameImageMinAggregateOutputType | null
    _max: GameImageMaxAggregateOutputType | null
  }

  export type GameImageAvgAggregateOutputType = {
    id: number | null
  }

  export type GameImageSumAggregateOutputType = {
    id: number | null
  }

  export type GameImageMinAggregateOutputType = {
    id: number | null
    url: string | null
    type: $Enums.ImageType | null
    gameId: string | null
  }

  export type GameImageMaxAggregateOutputType = {
    id: number | null
    url: string | null
    type: $Enums.ImageType | null
    gameId: string | null
  }

  export type GameImageCountAggregateOutputType = {
    id: number
    url: number
    type: number
    gameId: number
    _all: number
  }


  export type GameImageAvgAggregateInputType = {
    id?: true
  }

  export type GameImageSumAggregateInputType = {
    id?: true
  }

  export type GameImageMinAggregateInputType = {
    id?: true
    url?: true
    type?: true
    gameId?: true
  }

  export type GameImageMaxAggregateInputType = {
    id?: true
    url?: true
    type?: true
    gameId?: true
  }

  export type GameImageCountAggregateInputType = {
    id?: true
    url?: true
    type?: true
    gameId?: true
    _all?: true
  }

  export type GameImageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GameImage to aggregate.
     */
    where?: GameImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GameImages to fetch.
     */
    orderBy?: GameImageOrderByWithRelationInput | GameImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GameImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GameImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GameImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned GameImages
    **/
    _count?: true | GameImageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GameImageAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GameImageSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GameImageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GameImageMaxAggregateInputType
  }

  export type GetGameImageAggregateType<T extends GameImageAggregateArgs> = {
        [P in keyof T & keyof AggregateGameImage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGameImage[P]>
      : GetScalarType<T[P], AggregateGameImage[P]>
  }




  export type GameImageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GameImageWhereInput
    orderBy?: GameImageOrderByWithAggregationInput | GameImageOrderByWithAggregationInput[]
    by: GameImageScalarFieldEnum[] | GameImageScalarFieldEnum
    having?: GameImageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GameImageCountAggregateInputType | true
    _avg?: GameImageAvgAggregateInputType
    _sum?: GameImageSumAggregateInputType
    _min?: GameImageMinAggregateInputType
    _max?: GameImageMaxAggregateInputType
  }

  export type GameImageGroupByOutputType = {
    id: number
    url: string | null
    type: $Enums.ImageType
    gameId: string
    _count: GameImageCountAggregateOutputType | null
    _avg: GameImageAvgAggregateOutputType | null
    _sum: GameImageSumAggregateOutputType | null
    _min: GameImageMinAggregateOutputType | null
    _max: GameImageMaxAggregateOutputType | null
  }

  type GetGameImageGroupByPayload<T extends GameImageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GameImageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GameImageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GameImageGroupByOutputType[P]>
            : GetScalarType<T[P], GameImageGroupByOutputType[P]>
        }
      >
    >


  export type GameImageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    url?: boolean
    type?: boolean
    gameId?: boolean
    game?: boolean | GameDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["gameImage"]>

  export type GameImageSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    url?: boolean
    type?: boolean
    gameId?: boolean
    game?: boolean | GameDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["gameImage"]>

  export type GameImageSelectScalar = {
    id?: boolean
    url?: boolean
    type?: boolean
    gameId?: boolean
  }

  export type GameImageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    game?: boolean | GameDefaultArgs<ExtArgs>
  }
  export type GameImageIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    game?: boolean | GameDefaultArgs<ExtArgs>
  }

  export type $GameImagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "GameImage"
    objects: {
      game: Prisma.$GamePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      url: string | null
      type: $Enums.ImageType
      gameId: string
    }, ExtArgs["result"]["gameImage"]>
    composites: {}
  }

  type GameImageGetPayload<S extends boolean | null | undefined | GameImageDefaultArgs> = $Result.GetResult<Prisma.$GameImagePayload, S>

  type GameImageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<GameImageFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: GameImageCountAggregateInputType | true
    }

  export interface GameImageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['GameImage'], meta: { name: 'GameImage' } }
    /**
     * Find zero or one GameImage that matches the filter.
     * @param {GameImageFindUniqueArgs} args - Arguments to find a GameImage
     * @example
     * // Get one GameImage
     * const gameImage = await prisma.gameImage.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GameImageFindUniqueArgs>(args: SelectSubset<T, GameImageFindUniqueArgs<ExtArgs>>): Prisma__GameImageClient<$Result.GetResult<Prisma.$GameImagePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one GameImage that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {GameImageFindUniqueOrThrowArgs} args - Arguments to find a GameImage
     * @example
     * // Get one GameImage
     * const gameImage = await prisma.gameImage.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GameImageFindUniqueOrThrowArgs>(args: SelectSubset<T, GameImageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GameImageClient<$Result.GetResult<Prisma.$GameImagePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first GameImage that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameImageFindFirstArgs} args - Arguments to find a GameImage
     * @example
     * // Get one GameImage
     * const gameImage = await prisma.gameImage.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GameImageFindFirstArgs>(args?: SelectSubset<T, GameImageFindFirstArgs<ExtArgs>>): Prisma__GameImageClient<$Result.GetResult<Prisma.$GameImagePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first GameImage that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameImageFindFirstOrThrowArgs} args - Arguments to find a GameImage
     * @example
     * // Get one GameImage
     * const gameImage = await prisma.gameImage.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GameImageFindFirstOrThrowArgs>(args?: SelectSubset<T, GameImageFindFirstOrThrowArgs<ExtArgs>>): Prisma__GameImageClient<$Result.GetResult<Prisma.$GameImagePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more GameImages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameImageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all GameImages
     * const gameImages = await prisma.gameImage.findMany()
     * 
     * // Get first 10 GameImages
     * const gameImages = await prisma.gameImage.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const gameImageWithIdOnly = await prisma.gameImage.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends GameImageFindManyArgs>(args?: SelectSubset<T, GameImageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GameImagePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a GameImage.
     * @param {GameImageCreateArgs} args - Arguments to create a GameImage.
     * @example
     * // Create one GameImage
     * const GameImage = await prisma.gameImage.create({
     *   data: {
     *     // ... data to create a GameImage
     *   }
     * })
     * 
     */
    create<T extends GameImageCreateArgs>(args: SelectSubset<T, GameImageCreateArgs<ExtArgs>>): Prisma__GameImageClient<$Result.GetResult<Prisma.$GameImagePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many GameImages.
     * @param {GameImageCreateManyArgs} args - Arguments to create many GameImages.
     * @example
     * // Create many GameImages
     * const gameImage = await prisma.gameImage.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GameImageCreateManyArgs>(args?: SelectSubset<T, GameImageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many GameImages and returns the data saved in the database.
     * @param {GameImageCreateManyAndReturnArgs} args - Arguments to create many GameImages.
     * @example
     * // Create many GameImages
     * const gameImage = await prisma.gameImage.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many GameImages and only return the `id`
     * const gameImageWithIdOnly = await prisma.gameImage.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends GameImageCreateManyAndReturnArgs>(args?: SelectSubset<T, GameImageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GameImagePayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a GameImage.
     * @param {GameImageDeleteArgs} args - Arguments to delete one GameImage.
     * @example
     * // Delete one GameImage
     * const GameImage = await prisma.gameImage.delete({
     *   where: {
     *     // ... filter to delete one GameImage
     *   }
     * })
     * 
     */
    delete<T extends GameImageDeleteArgs>(args: SelectSubset<T, GameImageDeleteArgs<ExtArgs>>): Prisma__GameImageClient<$Result.GetResult<Prisma.$GameImagePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one GameImage.
     * @param {GameImageUpdateArgs} args - Arguments to update one GameImage.
     * @example
     * // Update one GameImage
     * const gameImage = await prisma.gameImage.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GameImageUpdateArgs>(args: SelectSubset<T, GameImageUpdateArgs<ExtArgs>>): Prisma__GameImageClient<$Result.GetResult<Prisma.$GameImagePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more GameImages.
     * @param {GameImageDeleteManyArgs} args - Arguments to filter GameImages to delete.
     * @example
     * // Delete a few GameImages
     * const { count } = await prisma.gameImage.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GameImageDeleteManyArgs>(args?: SelectSubset<T, GameImageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GameImages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameImageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many GameImages
     * const gameImage = await prisma.gameImage.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GameImageUpdateManyArgs>(args: SelectSubset<T, GameImageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one GameImage.
     * @param {GameImageUpsertArgs} args - Arguments to update or create a GameImage.
     * @example
     * // Update or create a GameImage
     * const gameImage = await prisma.gameImage.upsert({
     *   create: {
     *     // ... data to create a GameImage
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the GameImage we want to update
     *   }
     * })
     */
    upsert<T extends GameImageUpsertArgs>(args: SelectSubset<T, GameImageUpsertArgs<ExtArgs>>): Prisma__GameImageClient<$Result.GetResult<Prisma.$GameImagePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of GameImages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameImageCountArgs} args - Arguments to filter GameImages to count.
     * @example
     * // Count the number of GameImages
     * const count = await prisma.gameImage.count({
     *   where: {
     *     // ... the filter for the GameImages we want to count
     *   }
     * })
    **/
    count<T extends GameImageCountArgs>(
      args?: Subset<T, GameImageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GameImageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a GameImage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameImageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends GameImageAggregateArgs>(args: Subset<T, GameImageAggregateArgs>): Prisma.PrismaPromise<GetGameImageAggregateType<T>>

    /**
     * Group by GameImage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameImageGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends GameImageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GameImageGroupByArgs['orderBy'] }
        : { orderBy?: GameImageGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, GameImageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGameImageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the GameImage model
   */
  readonly fields: GameImageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for GameImage.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GameImageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    game<T extends GameDefaultArgs<ExtArgs> = {}>(args?: Subset<T, GameDefaultArgs<ExtArgs>>): Prisma__GameClient<$Result.GetResult<Prisma.$GamePayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the GameImage model
   */ 
  interface GameImageFieldRefs {
    readonly id: FieldRef<"GameImage", 'Int'>
    readonly url: FieldRef<"GameImage", 'String'>
    readonly type: FieldRef<"GameImage", 'ImageType'>
    readonly gameId: FieldRef<"GameImage", 'String'>
  }
    

  // Custom InputTypes
  /**
   * GameImage findUnique
   */
  export type GameImageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameImage
     */
    select?: GameImageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameImageInclude<ExtArgs> | null
    /**
     * Filter, which GameImage to fetch.
     */
    where: GameImageWhereUniqueInput
  }

  /**
   * GameImage findUniqueOrThrow
   */
  export type GameImageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameImage
     */
    select?: GameImageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameImageInclude<ExtArgs> | null
    /**
     * Filter, which GameImage to fetch.
     */
    where: GameImageWhereUniqueInput
  }

  /**
   * GameImage findFirst
   */
  export type GameImageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameImage
     */
    select?: GameImageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameImageInclude<ExtArgs> | null
    /**
     * Filter, which GameImage to fetch.
     */
    where?: GameImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GameImages to fetch.
     */
    orderBy?: GameImageOrderByWithRelationInput | GameImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GameImages.
     */
    cursor?: GameImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GameImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GameImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GameImages.
     */
    distinct?: GameImageScalarFieldEnum | GameImageScalarFieldEnum[]
  }

  /**
   * GameImage findFirstOrThrow
   */
  export type GameImageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameImage
     */
    select?: GameImageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameImageInclude<ExtArgs> | null
    /**
     * Filter, which GameImage to fetch.
     */
    where?: GameImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GameImages to fetch.
     */
    orderBy?: GameImageOrderByWithRelationInput | GameImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GameImages.
     */
    cursor?: GameImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GameImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GameImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GameImages.
     */
    distinct?: GameImageScalarFieldEnum | GameImageScalarFieldEnum[]
  }

  /**
   * GameImage findMany
   */
  export type GameImageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameImage
     */
    select?: GameImageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameImageInclude<ExtArgs> | null
    /**
     * Filter, which GameImages to fetch.
     */
    where?: GameImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GameImages to fetch.
     */
    orderBy?: GameImageOrderByWithRelationInput | GameImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing GameImages.
     */
    cursor?: GameImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GameImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GameImages.
     */
    skip?: number
    distinct?: GameImageScalarFieldEnum | GameImageScalarFieldEnum[]
  }

  /**
   * GameImage create
   */
  export type GameImageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameImage
     */
    select?: GameImageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameImageInclude<ExtArgs> | null
    /**
     * The data needed to create a GameImage.
     */
    data: XOR<GameImageCreateInput, GameImageUncheckedCreateInput>
  }

  /**
   * GameImage createMany
   */
  export type GameImageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many GameImages.
     */
    data: GameImageCreateManyInput | GameImageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * GameImage createManyAndReturn
   */
  export type GameImageCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameImage
     */
    select?: GameImageSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many GameImages.
     */
    data: GameImageCreateManyInput | GameImageCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameImageIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * GameImage update
   */
  export type GameImageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameImage
     */
    select?: GameImageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameImageInclude<ExtArgs> | null
    /**
     * The data needed to update a GameImage.
     */
    data: XOR<GameImageUpdateInput, GameImageUncheckedUpdateInput>
    /**
     * Choose, which GameImage to update.
     */
    where: GameImageWhereUniqueInput
  }

  /**
   * GameImage updateMany
   */
  export type GameImageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update GameImages.
     */
    data: XOR<GameImageUpdateManyMutationInput, GameImageUncheckedUpdateManyInput>
    /**
     * Filter which GameImages to update
     */
    where?: GameImageWhereInput
  }

  /**
   * GameImage upsert
   */
  export type GameImageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameImage
     */
    select?: GameImageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameImageInclude<ExtArgs> | null
    /**
     * The filter to search for the GameImage to update in case it exists.
     */
    where: GameImageWhereUniqueInput
    /**
     * In case the GameImage found by the `where` argument doesn't exist, create a new GameImage with this data.
     */
    create: XOR<GameImageCreateInput, GameImageUncheckedCreateInput>
    /**
     * In case the GameImage was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GameImageUpdateInput, GameImageUncheckedUpdateInput>
  }

  /**
   * GameImage delete
   */
  export type GameImageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameImage
     */
    select?: GameImageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameImageInclude<ExtArgs> | null
    /**
     * Filter which GameImage to delete.
     */
    where: GameImageWhereUniqueInput
  }

  /**
   * GameImage deleteMany
   */
  export type GameImageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GameImages to delete
     */
    where?: GameImageWhereInput
  }

  /**
   * GameImage without action
   */
  export type GameImageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameImage
     */
    select?: GameImageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameImageInclude<ExtArgs> | null
  }


  /**
   * Model PsPlus
   */

  export type AggregatePsPlus = {
    _count: PsPlusCountAggregateOutputType | null
    _min: PsPlusMinAggregateOutputType | null
    _max: PsPlusMaxAggregateOutputType | null
  }

  export type PsPlusMinAggregateOutputType = {
    id: string | null
    gameId: string | null
    type: $Enums.PsPlusType | null
  }

  export type PsPlusMaxAggregateOutputType = {
    id: string | null
    gameId: string | null
    type: $Enums.PsPlusType | null
  }

  export type PsPlusCountAggregateOutputType = {
    id: number
    gameId: number
    type: number
    _all: number
  }


  export type PsPlusMinAggregateInputType = {
    id?: true
    gameId?: true
    type?: true
  }

  export type PsPlusMaxAggregateInputType = {
    id?: true
    gameId?: true
    type?: true
  }

  export type PsPlusCountAggregateInputType = {
    id?: true
    gameId?: true
    type?: true
    _all?: true
  }

  export type PsPlusAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PsPlus to aggregate.
     */
    where?: PsPlusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PsPluses to fetch.
     */
    orderBy?: PsPlusOrderByWithRelationInput | PsPlusOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PsPlusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PsPluses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PsPluses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PsPluses
    **/
    _count?: true | PsPlusCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PsPlusMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PsPlusMaxAggregateInputType
  }

  export type GetPsPlusAggregateType<T extends PsPlusAggregateArgs> = {
        [P in keyof T & keyof AggregatePsPlus]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePsPlus[P]>
      : GetScalarType<T[P], AggregatePsPlus[P]>
  }




  export type PsPlusGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PsPlusWhereInput
    orderBy?: PsPlusOrderByWithAggregationInput | PsPlusOrderByWithAggregationInput[]
    by: PsPlusScalarFieldEnum[] | PsPlusScalarFieldEnum
    having?: PsPlusScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PsPlusCountAggregateInputType | true
    _min?: PsPlusMinAggregateInputType
    _max?: PsPlusMaxAggregateInputType
  }

  export type PsPlusGroupByOutputType = {
    id: string
    gameId: string
    type: $Enums.PsPlusType
    _count: PsPlusCountAggregateOutputType | null
    _min: PsPlusMinAggregateOutputType | null
    _max: PsPlusMaxAggregateOutputType | null
  }

  type GetPsPlusGroupByPayload<T extends PsPlusGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PsPlusGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PsPlusGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PsPlusGroupByOutputType[P]>
            : GetScalarType<T[P], PsPlusGroupByOutputType[P]>
        }
      >
    >


  export type PsPlusSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    gameId?: boolean
    type?: boolean
    game?: boolean | GameDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["psPlus"]>

  export type PsPlusSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    gameId?: boolean
    type?: boolean
    game?: boolean | GameDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["psPlus"]>

  export type PsPlusSelectScalar = {
    id?: boolean
    gameId?: boolean
    type?: boolean
  }

  export type PsPlusInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    game?: boolean | GameDefaultArgs<ExtArgs>
  }
  export type PsPlusIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    game?: boolean | GameDefaultArgs<ExtArgs>
  }

  export type $PsPlusPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PsPlus"
    objects: {
      game: Prisma.$GamePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      gameId: string
      type: $Enums.PsPlusType
    }, ExtArgs["result"]["psPlus"]>
    composites: {}
  }

  type PsPlusGetPayload<S extends boolean | null | undefined | PsPlusDefaultArgs> = $Result.GetResult<Prisma.$PsPlusPayload, S>

  type PsPlusCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<PsPlusFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: PsPlusCountAggregateInputType | true
    }

  export interface PsPlusDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PsPlus'], meta: { name: 'PsPlus' } }
    /**
     * Find zero or one PsPlus that matches the filter.
     * @param {PsPlusFindUniqueArgs} args - Arguments to find a PsPlus
     * @example
     * // Get one PsPlus
     * const psPlus = await prisma.psPlus.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PsPlusFindUniqueArgs>(args: SelectSubset<T, PsPlusFindUniqueArgs<ExtArgs>>): Prisma__PsPlusClient<$Result.GetResult<Prisma.$PsPlusPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one PsPlus that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {PsPlusFindUniqueOrThrowArgs} args - Arguments to find a PsPlus
     * @example
     * // Get one PsPlus
     * const psPlus = await prisma.psPlus.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PsPlusFindUniqueOrThrowArgs>(args: SelectSubset<T, PsPlusFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PsPlusClient<$Result.GetResult<Prisma.$PsPlusPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first PsPlus that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PsPlusFindFirstArgs} args - Arguments to find a PsPlus
     * @example
     * // Get one PsPlus
     * const psPlus = await prisma.psPlus.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PsPlusFindFirstArgs>(args?: SelectSubset<T, PsPlusFindFirstArgs<ExtArgs>>): Prisma__PsPlusClient<$Result.GetResult<Prisma.$PsPlusPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first PsPlus that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PsPlusFindFirstOrThrowArgs} args - Arguments to find a PsPlus
     * @example
     * // Get one PsPlus
     * const psPlus = await prisma.psPlus.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PsPlusFindFirstOrThrowArgs>(args?: SelectSubset<T, PsPlusFindFirstOrThrowArgs<ExtArgs>>): Prisma__PsPlusClient<$Result.GetResult<Prisma.$PsPlusPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more PsPluses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PsPlusFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PsPluses
     * const psPluses = await prisma.psPlus.findMany()
     * 
     * // Get first 10 PsPluses
     * const psPluses = await prisma.psPlus.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const psPlusWithIdOnly = await prisma.psPlus.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PsPlusFindManyArgs>(args?: SelectSubset<T, PsPlusFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PsPlusPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a PsPlus.
     * @param {PsPlusCreateArgs} args - Arguments to create a PsPlus.
     * @example
     * // Create one PsPlus
     * const PsPlus = await prisma.psPlus.create({
     *   data: {
     *     // ... data to create a PsPlus
     *   }
     * })
     * 
     */
    create<T extends PsPlusCreateArgs>(args: SelectSubset<T, PsPlusCreateArgs<ExtArgs>>): Prisma__PsPlusClient<$Result.GetResult<Prisma.$PsPlusPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many PsPluses.
     * @param {PsPlusCreateManyArgs} args - Arguments to create many PsPluses.
     * @example
     * // Create many PsPluses
     * const psPlus = await prisma.psPlus.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PsPlusCreateManyArgs>(args?: SelectSubset<T, PsPlusCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PsPluses and returns the data saved in the database.
     * @param {PsPlusCreateManyAndReturnArgs} args - Arguments to create many PsPluses.
     * @example
     * // Create many PsPluses
     * const psPlus = await prisma.psPlus.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PsPluses and only return the `id`
     * const psPlusWithIdOnly = await prisma.psPlus.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PsPlusCreateManyAndReturnArgs>(args?: SelectSubset<T, PsPlusCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PsPlusPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a PsPlus.
     * @param {PsPlusDeleteArgs} args - Arguments to delete one PsPlus.
     * @example
     * // Delete one PsPlus
     * const PsPlus = await prisma.psPlus.delete({
     *   where: {
     *     // ... filter to delete one PsPlus
     *   }
     * })
     * 
     */
    delete<T extends PsPlusDeleteArgs>(args: SelectSubset<T, PsPlusDeleteArgs<ExtArgs>>): Prisma__PsPlusClient<$Result.GetResult<Prisma.$PsPlusPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one PsPlus.
     * @param {PsPlusUpdateArgs} args - Arguments to update one PsPlus.
     * @example
     * // Update one PsPlus
     * const psPlus = await prisma.psPlus.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PsPlusUpdateArgs>(args: SelectSubset<T, PsPlusUpdateArgs<ExtArgs>>): Prisma__PsPlusClient<$Result.GetResult<Prisma.$PsPlusPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more PsPluses.
     * @param {PsPlusDeleteManyArgs} args - Arguments to filter PsPluses to delete.
     * @example
     * // Delete a few PsPluses
     * const { count } = await prisma.psPlus.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PsPlusDeleteManyArgs>(args?: SelectSubset<T, PsPlusDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PsPluses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PsPlusUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PsPluses
     * const psPlus = await prisma.psPlus.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PsPlusUpdateManyArgs>(args: SelectSubset<T, PsPlusUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one PsPlus.
     * @param {PsPlusUpsertArgs} args - Arguments to update or create a PsPlus.
     * @example
     * // Update or create a PsPlus
     * const psPlus = await prisma.psPlus.upsert({
     *   create: {
     *     // ... data to create a PsPlus
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PsPlus we want to update
     *   }
     * })
     */
    upsert<T extends PsPlusUpsertArgs>(args: SelectSubset<T, PsPlusUpsertArgs<ExtArgs>>): Prisma__PsPlusClient<$Result.GetResult<Prisma.$PsPlusPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of PsPluses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PsPlusCountArgs} args - Arguments to filter PsPluses to count.
     * @example
     * // Count the number of PsPluses
     * const count = await prisma.psPlus.count({
     *   where: {
     *     // ... the filter for the PsPluses we want to count
     *   }
     * })
    **/
    count<T extends PsPlusCountArgs>(
      args?: Subset<T, PsPlusCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PsPlusCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PsPlus.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PsPlusAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PsPlusAggregateArgs>(args: Subset<T, PsPlusAggregateArgs>): Prisma.PrismaPromise<GetPsPlusAggregateType<T>>

    /**
     * Group by PsPlus.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PsPlusGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PsPlusGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PsPlusGroupByArgs['orderBy'] }
        : { orderBy?: PsPlusGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PsPlusGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPsPlusGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PsPlus model
   */
  readonly fields: PsPlusFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PsPlus.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PsPlusClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    game<T extends GameDefaultArgs<ExtArgs> = {}>(args?: Subset<T, GameDefaultArgs<ExtArgs>>): Prisma__GameClient<$Result.GetResult<Prisma.$GamePayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PsPlus model
   */ 
  interface PsPlusFieldRefs {
    readonly id: FieldRef<"PsPlus", 'String'>
    readonly gameId: FieldRef<"PsPlus", 'String'>
    readonly type: FieldRef<"PsPlus", 'PsPlusType'>
  }
    

  // Custom InputTypes
  /**
   * PsPlus findUnique
   */
  export type PsPlusFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PsPlus
     */
    select?: PsPlusSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PsPlusInclude<ExtArgs> | null
    /**
     * Filter, which PsPlus to fetch.
     */
    where: PsPlusWhereUniqueInput
  }

  /**
   * PsPlus findUniqueOrThrow
   */
  export type PsPlusFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PsPlus
     */
    select?: PsPlusSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PsPlusInclude<ExtArgs> | null
    /**
     * Filter, which PsPlus to fetch.
     */
    where: PsPlusWhereUniqueInput
  }

  /**
   * PsPlus findFirst
   */
  export type PsPlusFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PsPlus
     */
    select?: PsPlusSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PsPlusInclude<ExtArgs> | null
    /**
     * Filter, which PsPlus to fetch.
     */
    where?: PsPlusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PsPluses to fetch.
     */
    orderBy?: PsPlusOrderByWithRelationInput | PsPlusOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PsPluses.
     */
    cursor?: PsPlusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PsPluses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PsPluses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PsPluses.
     */
    distinct?: PsPlusScalarFieldEnum | PsPlusScalarFieldEnum[]
  }

  /**
   * PsPlus findFirstOrThrow
   */
  export type PsPlusFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PsPlus
     */
    select?: PsPlusSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PsPlusInclude<ExtArgs> | null
    /**
     * Filter, which PsPlus to fetch.
     */
    where?: PsPlusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PsPluses to fetch.
     */
    orderBy?: PsPlusOrderByWithRelationInput | PsPlusOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PsPluses.
     */
    cursor?: PsPlusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PsPluses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PsPluses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PsPluses.
     */
    distinct?: PsPlusScalarFieldEnum | PsPlusScalarFieldEnum[]
  }

  /**
   * PsPlus findMany
   */
  export type PsPlusFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PsPlus
     */
    select?: PsPlusSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PsPlusInclude<ExtArgs> | null
    /**
     * Filter, which PsPluses to fetch.
     */
    where?: PsPlusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PsPluses to fetch.
     */
    orderBy?: PsPlusOrderByWithRelationInput | PsPlusOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PsPluses.
     */
    cursor?: PsPlusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PsPluses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PsPluses.
     */
    skip?: number
    distinct?: PsPlusScalarFieldEnum | PsPlusScalarFieldEnum[]
  }

  /**
   * PsPlus create
   */
  export type PsPlusCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PsPlus
     */
    select?: PsPlusSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PsPlusInclude<ExtArgs> | null
    /**
     * The data needed to create a PsPlus.
     */
    data: XOR<PsPlusCreateInput, PsPlusUncheckedCreateInput>
  }

  /**
   * PsPlus createMany
   */
  export type PsPlusCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PsPluses.
     */
    data: PsPlusCreateManyInput | PsPlusCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PsPlus createManyAndReturn
   */
  export type PsPlusCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PsPlus
     */
    select?: PsPlusSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many PsPluses.
     */
    data: PsPlusCreateManyInput | PsPlusCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PsPlusIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PsPlus update
   */
  export type PsPlusUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PsPlus
     */
    select?: PsPlusSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PsPlusInclude<ExtArgs> | null
    /**
     * The data needed to update a PsPlus.
     */
    data: XOR<PsPlusUpdateInput, PsPlusUncheckedUpdateInput>
    /**
     * Choose, which PsPlus to update.
     */
    where: PsPlusWhereUniqueInput
  }

  /**
   * PsPlus updateMany
   */
  export type PsPlusUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PsPluses.
     */
    data: XOR<PsPlusUpdateManyMutationInput, PsPlusUncheckedUpdateManyInput>
    /**
     * Filter which PsPluses to update
     */
    where?: PsPlusWhereInput
  }

  /**
   * PsPlus upsert
   */
  export type PsPlusUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PsPlus
     */
    select?: PsPlusSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PsPlusInclude<ExtArgs> | null
    /**
     * The filter to search for the PsPlus to update in case it exists.
     */
    where: PsPlusWhereUniqueInput
    /**
     * In case the PsPlus found by the `where` argument doesn't exist, create a new PsPlus with this data.
     */
    create: XOR<PsPlusCreateInput, PsPlusUncheckedCreateInput>
    /**
     * In case the PsPlus was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PsPlusUpdateInput, PsPlusUncheckedUpdateInput>
  }

  /**
   * PsPlus delete
   */
  export type PsPlusDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PsPlus
     */
    select?: PsPlusSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PsPlusInclude<ExtArgs> | null
    /**
     * Filter which PsPlus to delete.
     */
    where: PsPlusWhereUniqueInput
  }

  /**
   * PsPlus deleteMany
   */
  export type PsPlusDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PsPluses to delete
     */
    where?: PsPlusWhereInput
  }

  /**
   * PsPlus without action
   */
  export type PsPlusDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PsPlus
     */
    select?: PsPlusSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PsPlusInclude<ExtArgs> | null
  }


  /**
   * Model GameEdition
   */

  export type AggregateGameEdition = {
    _count: GameEditionCountAggregateOutputType | null
    _avg: GameEditionAvgAggregateOutputType | null
    _sum: GameEditionSumAggregateOutputType | null
    _min: GameEditionMinAggregateOutputType | null
    _max: GameEditionMaxAggregateOutputType | null
  }

  export type GameEditionAvgAggregateOutputType = {
    id: number | null
  }

  export type GameEditionSumAggregateOutputType = {
    id: number | null
  }

  export type GameEditionMinAggregateOutputType = {
    id: number | null
    name: string | null
    gameId: string | null
  }

  export type GameEditionMaxAggregateOutputType = {
    id: number | null
    name: string | null
    gameId: string | null
  }

  export type GameEditionCountAggregateOutputType = {
    id: number
    name: number
    gameId: number
    _all: number
  }


  export type GameEditionAvgAggregateInputType = {
    id?: true
  }

  export type GameEditionSumAggregateInputType = {
    id?: true
  }

  export type GameEditionMinAggregateInputType = {
    id?: true
    name?: true
    gameId?: true
  }

  export type GameEditionMaxAggregateInputType = {
    id?: true
    name?: true
    gameId?: true
  }

  export type GameEditionCountAggregateInputType = {
    id?: true
    name?: true
    gameId?: true
    _all?: true
  }

  export type GameEditionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GameEdition to aggregate.
     */
    where?: GameEditionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GameEditions to fetch.
     */
    orderBy?: GameEditionOrderByWithRelationInput | GameEditionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GameEditionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GameEditions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GameEditions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned GameEditions
    **/
    _count?: true | GameEditionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GameEditionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GameEditionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GameEditionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GameEditionMaxAggregateInputType
  }

  export type GetGameEditionAggregateType<T extends GameEditionAggregateArgs> = {
        [P in keyof T & keyof AggregateGameEdition]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGameEdition[P]>
      : GetScalarType<T[P], AggregateGameEdition[P]>
  }




  export type GameEditionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GameEditionWhereInput
    orderBy?: GameEditionOrderByWithAggregationInput | GameEditionOrderByWithAggregationInput[]
    by: GameEditionScalarFieldEnum[] | GameEditionScalarFieldEnum
    having?: GameEditionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GameEditionCountAggregateInputType | true
    _avg?: GameEditionAvgAggregateInputType
    _sum?: GameEditionSumAggregateInputType
    _min?: GameEditionMinAggregateInputType
    _max?: GameEditionMaxAggregateInputType
  }

  export type GameEditionGroupByOutputType = {
    id: number
    name: string
    gameId: string
    _count: GameEditionCountAggregateOutputType | null
    _avg: GameEditionAvgAggregateOutputType | null
    _sum: GameEditionSumAggregateOutputType | null
    _min: GameEditionMinAggregateOutputType | null
    _max: GameEditionMaxAggregateOutputType | null
  }

  type GetGameEditionGroupByPayload<T extends GameEditionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GameEditionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GameEditionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GameEditionGroupByOutputType[P]>
            : GetScalarType<T[P], GameEditionGroupByOutputType[P]>
        }
      >
    >


  export type GameEditionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    gameId?: boolean
    game?: boolean | GameDefaultArgs<ExtArgs>
    GameVersion?: boolean | GameEdition$GameVersionArgs<ExtArgs>
    _count?: boolean | GameEditionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["gameEdition"]>

  export type GameEditionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    gameId?: boolean
    game?: boolean | GameDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["gameEdition"]>

  export type GameEditionSelectScalar = {
    id?: boolean
    name?: boolean
    gameId?: boolean
  }

  export type GameEditionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    game?: boolean | GameDefaultArgs<ExtArgs>
    GameVersion?: boolean | GameEdition$GameVersionArgs<ExtArgs>
    _count?: boolean | GameEditionCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type GameEditionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    game?: boolean | GameDefaultArgs<ExtArgs>
  }

  export type $GameEditionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "GameEdition"
    objects: {
      game: Prisma.$GamePayload<ExtArgs>
      GameVersion: Prisma.$GameVersionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      gameId: string
    }, ExtArgs["result"]["gameEdition"]>
    composites: {}
  }

  type GameEditionGetPayload<S extends boolean | null | undefined | GameEditionDefaultArgs> = $Result.GetResult<Prisma.$GameEditionPayload, S>

  type GameEditionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<GameEditionFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: GameEditionCountAggregateInputType | true
    }

  export interface GameEditionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['GameEdition'], meta: { name: 'GameEdition' } }
    /**
     * Find zero or one GameEdition that matches the filter.
     * @param {GameEditionFindUniqueArgs} args - Arguments to find a GameEdition
     * @example
     * // Get one GameEdition
     * const gameEdition = await prisma.gameEdition.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GameEditionFindUniqueArgs>(args: SelectSubset<T, GameEditionFindUniqueArgs<ExtArgs>>): Prisma__GameEditionClient<$Result.GetResult<Prisma.$GameEditionPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one GameEdition that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {GameEditionFindUniqueOrThrowArgs} args - Arguments to find a GameEdition
     * @example
     * // Get one GameEdition
     * const gameEdition = await prisma.gameEdition.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GameEditionFindUniqueOrThrowArgs>(args: SelectSubset<T, GameEditionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GameEditionClient<$Result.GetResult<Prisma.$GameEditionPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first GameEdition that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameEditionFindFirstArgs} args - Arguments to find a GameEdition
     * @example
     * // Get one GameEdition
     * const gameEdition = await prisma.gameEdition.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GameEditionFindFirstArgs>(args?: SelectSubset<T, GameEditionFindFirstArgs<ExtArgs>>): Prisma__GameEditionClient<$Result.GetResult<Prisma.$GameEditionPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first GameEdition that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameEditionFindFirstOrThrowArgs} args - Arguments to find a GameEdition
     * @example
     * // Get one GameEdition
     * const gameEdition = await prisma.gameEdition.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GameEditionFindFirstOrThrowArgs>(args?: SelectSubset<T, GameEditionFindFirstOrThrowArgs<ExtArgs>>): Prisma__GameEditionClient<$Result.GetResult<Prisma.$GameEditionPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more GameEditions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameEditionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all GameEditions
     * const gameEditions = await prisma.gameEdition.findMany()
     * 
     * // Get first 10 GameEditions
     * const gameEditions = await prisma.gameEdition.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const gameEditionWithIdOnly = await prisma.gameEdition.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends GameEditionFindManyArgs>(args?: SelectSubset<T, GameEditionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GameEditionPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a GameEdition.
     * @param {GameEditionCreateArgs} args - Arguments to create a GameEdition.
     * @example
     * // Create one GameEdition
     * const GameEdition = await prisma.gameEdition.create({
     *   data: {
     *     // ... data to create a GameEdition
     *   }
     * })
     * 
     */
    create<T extends GameEditionCreateArgs>(args: SelectSubset<T, GameEditionCreateArgs<ExtArgs>>): Prisma__GameEditionClient<$Result.GetResult<Prisma.$GameEditionPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many GameEditions.
     * @param {GameEditionCreateManyArgs} args - Arguments to create many GameEditions.
     * @example
     * // Create many GameEditions
     * const gameEdition = await prisma.gameEdition.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GameEditionCreateManyArgs>(args?: SelectSubset<T, GameEditionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many GameEditions and returns the data saved in the database.
     * @param {GameEditionCreateManyAndReturnArgs} args - Arguments to create many GameEditions.
     * @example
     * // Create many GameEditions
     * const gameEdition = await prisma.gameEdition.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many GameEditions and only return the `id`
     * const gameEditionWithIdOnly = await prisma.gameEdition.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends GameEditionCreateManyAndReturnArgs>(args?: SelectSubset<T, GameEditionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GameEditionPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a GameEdition.
     * @param {GameEditionDeleteArgs} args - Arguments to delete one GameEdition.
     * @example
     * // Delete one GameEdition
     * const GameEdition = await prisma.gameEdition.delete({
     *   where: {
     *     // ... filter to delete one GameEdition
     *   }
     * })
     * 
     */
    delete<T extends GameEditionDeleteArgs>(args: SelectSubset<T, GameEditionDeleteArgs<ExtArgs>>): Prisma__GameEditionClient<$Result.GetResult<Prisma.$GameEditionPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one GameEdition.
     * @param {GameEditionUpdateArgs} args - Arguments to update one GameEdition.
     * @example
     * // Update one GameEdition
     * const gameEdition = await prisma.gameEdition.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GameEditionUpdateArgs>(args: SelectSubset<T, GameEditionUpdateArgs<ExtArgs>>): Prisma__GameEditionClient<$Result.GetResult<Prisma.$GameEditionPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more GameEditions.
     * @param {GameEditionDeleteManyArgs} args - Arguments to filter GameEditions to delete.
     * @example
     * // Delete a few GameEditions
     * const { count } = await prisma.gameEdition.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GameEditionDeleteManyArgs>(args?: SelectSubset<T, GameEditionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GameEditions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameEditionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many GameEditions
     * const gameEdition = await prisma.gameEdition.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GameEditionUpdateManyArgs>(args: SelectSubset<T, GameEditionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one GameEdition.
     * @param {GameEditionUpsertArgs} args - Arguments to update or create a GameEdition.
     * @example
     * // Update or create a GameEdition
     * const gameEdition = await prisma.gameEdition.upsert({
     *   create: {
     *     // ... data to create a GameEdition
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the GameEdition we want to update
     *   }
     * })
     */
    upsert<T extends GameEditionUpsertArgs>(args: SelectSubset<T, GameEditionUpsertArgs<ExtArgs>>): Prisma__GameEditionClient<$Result.GetResult<Prisma.$GameEditionPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of GameEditions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameEditionCountArgs} args - Arguments to filter GameEditions to count.
     * @example
     * // Count the number of GameEditions
     * const count = await prisma.gameEdition.count({
     *   where: {
     *     // ... the filter for the GameEditions we want to count
     *   }
     * })
    **/
    count<T extends GameEditionCountArgs>(
      args?: Subset<T, GameEditionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GameEditionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a GameEdition.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameEditionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends GameEditionAggregateArgs>(args: Subset<T, GameEditionAggregateArgs>): Prisma.PrismaPromise<GetGameEditionAggregateType<T>>

    /**
     * Group by GameEdition.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameEditionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends GameEditionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GameEditionGroupByArgs['orderBy'] }
        : { orderBy?: GameEditionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, GameEditionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGameEditionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the GameEdition model
   */
  readonly fields: GameEditionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for GameEdition.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GameEditionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    game<T extends GameDefaultArgs<ExtArgs> = {}>(args?: Subset<T, GameDefaultArgs<ExtArgs>>): Prisma__GameClient<$Result.GetResult<Prisma.$GamePayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    GameVersion<T extends GameEdition$GameVersionArgs<ExtArgs> = {}>(args?: Subset<T, GameEdition$GameVersionArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GameVersionPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the GameEdition model
   */ 
  interface GameEditionFieldRefs {
    readonly id: FieldRef<"GameEdition", 'Int'>
    readonly name: FieldRef<"GameEdition", 'String'>
    readonly gameId: FieldRef<"GameEdition", 'String'>
  }
    

  // Custom InputTypes
  /**
   * GameEdition findUnique
   */
  export type GameEditionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameEdition
     */
    select?: GameEditionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameEditionInclude<ExtArgs> | null
    /**
     * Filter, which GameEdition to fetch.
     */
    where: GameEditionWhereUniqueInput
  }

  /**
   * GameEdition findUniqueOrThrow
   */
  export type GameEditionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameEdition
     */
    select?: GameEditionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameEditionInclude<ExtArgs> | null
    /**
     * Filter, which GameEdition to fetch.
     */
    where: GameEditionWhereUniqueInput
  }

  /**
   * GameEdition findFirst
   */
  export type GameEditionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameEdition
     */
    select?: GameEditionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameEditionInclude<ExtArgs> | null
    /**
     * Filter, which GameEdition to fetch.
     */
    where?: GameEditionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GameEditions to fetch.
     */
    orderBy?: GameEditionOrderByWithRelationInput | GameEditionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GameEditions.
     */
    cursor?: GameEditionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GameEditions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GameEditions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GameEditions.
     */
    distinct?: GameEditionScalarFieldEnum | GameEditionScalarFieldEnum[]
  }

  /**
   * GameEdition findFirstOrThrow
   */
  export type GameEditionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameEdition
     */
    select?: GameEditionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameEditionInclude<ExtArgs> | null
    /**
     * Filter, which GameEdition to fetch.
     */
    where?: GameEditionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GameEditions to fetch.
     */
    orderBy?: GameEditionOrderByWithRelationInput | GameEditionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GameEditions.
     */
    cursor?: GameEditionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GameEditions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GameEditions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GameEditions.
     */
    distinct?: GameEditionScalarFieldEnum | GameEditionScalarFieldEnum[]
  }

  /**
   * GameEdition findMany
   */
  export type GameEditionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameEdition
     */
    select?: GameEditionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameEditionInclude<ExtArgs> | null
    /**
     * Filter, which GameEditions to fetch.
     */
    where?: GameEditionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GameEditions to fetch.
     */
    orderBy?: GameEditionOrderByWithRelationInput | GameEditionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing GameEditions.
     */
    cursor?: GameEditionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GameEditions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GameEditions.
     */
    skip?: number
    distinct?: GameEditionScalarFieldEnum | GameEditionScalarFieldEnum[]
  }

  /**
   * GameEdition create
   */
  export type GameEditionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameEdition
     */
    select?: GameEditionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameEditionInclude<ExtArgs> | null
    /**
     * The data needed to create a GameEdition.
     */
    data: XOR<GameEditionCreateInput, GameEditionUncheckedCreateInput>
  }

  /**
   * GameEdition createMany
   */
  export type GameEditionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many GameEditions.
     */
    data: GameEditionCreateManyInput | GameEditionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * GameEdition createManyAndReturn
   */
  export type GameEditionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameEdition
     */
    select?: GameEditionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many GameEditions.
     */
    data: GameEditionCreateManyInput | GameEditionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameEditionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * GameEdition update
   */
  export type GameEditionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameEdition
     */
    select?: GameEditionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameEditionInclude<ExtArgs> | null
    /**
     * The data needed to update a GameEdition.
     */
    data: XOR<GameEditionUpdateInput, GameEditionUncheckedUpdateInput>
    /**
     * Choose, which GameEdition to update.
     */
    where: GameEditionWhereUniqueInput
  }

  /**
   * GameEdition updateMany
   */
  export type GameEditionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update GameEditions.
     */
    data: XOR<GameEditionUpdateManyMutationInput, GameEditionUncheckedUpdateManyInput>
    /**
     * Filter which GameEditions to update
     */
    where?: GameEditionWhereInput
  }

  /**
   * GameEdition upsert
   */
  export type GameEditionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameEdition
     */
    select?: GameEditionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameEditionInclude<ExtArgs> | null
    /**
     * The filter to search for the GameEdition to update in case it exists.
     */
    where: GameEditionWhereUniqueInput
    /**
     * In case the GameEdition found by the `where` argument doesn't exist, create a new GameEdition with this data.
     */
    create: XOR<GameEditionCreateInput, GameEditionUncheckedCreateInput>
    /**
     * In case the GameEdition was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GameEditionUpdateInput, GameEditionUncheckedUpdateInput>
  }

  /**
   * GameEdition delete
   */
  export type GameEditionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameEdition
     */
    select?: GameEditionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameEditionInclude<ExtArgs> | null
    /**
     * Filter which GameEdition to delete.
     */
    where: GameEditionWhereUniqueInput
  }

  /**
   * GameEdition deleteMany
   */
  export type GameEditionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GameEditions to delete
     */
    where?: GameEditionWhereInput
  }

  /**
   * GameEdition.GameVersion
   */
  export type GameEdition$GameVersionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameVersion
     */
    select?: GameVersionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameVersionInclude<ExtArgs> | null
    where?: GameVersionWhereInput
    orderBy?: GameVersionOrderByWithRelationInput | GameVersionOrderByWithRelationInput[]
    cursor?: GameVersionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GameVersionScalarFieldEnum | GameVersionScalarFieldEnum[]
  }

  /**
   * GameEdition without action
   */
  export type GameEditionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameEdition
     */
    select?: GameEditionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameEditionInclude<ExtArgs> | null
  }


  /**
   * Model Region
   */

  export type AggregateRegion = {
    _count: RegionCountAggregateOutputType | null
    _avg: RegionAvgAggregateOutputType | null
    _sum: RegionSumAggregateOutputType | null
    _min: RegionMinAggregateOutputType | null
    _max: RegionMaxAggregateOutputType | null
  }

  export type RegionAvgAggregateOutputType = {
    id: number | null
  }

  export type RegionSumAggregateOutputType = {
    id: number | null
  }

  export type RegionMinAggregateOutputType = {
    id: number | null
    code: string | null
    name: string | null
    currency: string | null
  }

  export type RegionMaxAggregateOutputType = {
    id: number | null
    code: string | null
    name: string | null
    currency: string | null
  }

  export type RegionCountAggregateOutputType = {
    id: number
    code: number
    name: number
    currency: number
    _all: number
  }


  export type RegionAvgAggregateInputType = {
    id?: true
  }

  export type RegionSumAggregateInputType = {
    id?: true
  }

  export type RegionMinAggregateInputType = {
    id?: true
    code?: true
    name?: true
    currency?: true
  }

  export type RegionMaxAggregateInputType = {
    id?: true
    code?: true
    name?: true
    currency?: true
  }

  export type RegionCountAggregateInputType = {
    id?: true
    code?: true
    name?: true
    currency?: true
    _all?: true
  }

  export type RegionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Region to aggregate.
     */
    where?: RegionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Regions to fetch.
     */
    orderBy?: RegionOrderByWithRelationInput | RegionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RegionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Regions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Regions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Regions
    **/
    _count?: true | RegionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RegionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RegionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RegionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RegionMaxAggregateInputType
  }

  export type GetRegionAggregateType<T extends RegionAggregateArgs> = {
        [P in keyof T & keyof AggregateRegion]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRegion[P]>
      : GetScalarType<T[P], AggregateRegion[P]>
  }




  export type RegionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RegionWhereInput
    orderBy?: RegionOrderByWithAggregationInput | RegionOrderByWithAggregationInput[]
    by: RegionScalarFieldEnum[] | RegionScalarFieldEnum
    having?: RegionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RegionCountAggregateInputType | true
    _avg?: RegionAvgAggregateInputType
    _sum?: RegionSumAggregateInputType
    _min?: RegionMinAggregateInputType
    _max?: RegionMaxAggregateInputType
  }

  export type RegionGroupByOutputType = {
    id: number
    code: string
    name: string
    currency: string
    _count: RegionCountAggregateOutputType | null
    _avg: RegionAvgAggregateOutputType | null
    _sum: RegionSumAggregateOutputType | null
    _min: RegionMinAggregateOutputType | null
    _max: RegionMaxAggregateOutputType | null
  }

  type GetRegionGroupByPayload<T extends RegionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RegionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RegionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RegionGroupByOutputType[P]>
            : GetScalarType<T[P], RegionGroupByOutputType[P]>
        }
      >
    >


  export type RegionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    name?: boolean
    currency?: boolean
    GameRegion?: boolean | Region$GameRegionArgs<ExtArgs>
    _count?: boolean | RegionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["region"]>

  export type RegionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    name?: boolean
    currency?: boolean
  }, ExtArgs["result"]["region"]>

  export type RegionSelectScalar = {
    id?: boolean
    code?: boolean
    name?: boolean
    currency?: boolean
  }

  export type RegionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    GameRegion?: boolean | Region$GameRegionArgs<ExtArgs>
    _count?: boolean | RegionCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type RegionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $RegionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Region"
    objects: {
      GameRegion: Prisma.$GameRegionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      code: string
      name: string
      currency: string
    }, ExtArgs["result"]["region"]>
    composites: {}
  }

  type RegionGetPayload<S extends boolean | null | undefined | RegionDefaultArgs> = $Result.GetResult<Prisma.$RegionPayload, S>

  type RegionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<RegionFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: RegionCountAggregateInputType | true
    }

  export interface RegionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Region'], meta: { name: 'Region' } }
    /**
     * Find zero or one Region that matches the filter.
     * @param {RegionFindUniqueArgs} args - Arguments to find a Region
     * @example
     * // Get one Region
     * const region = await prisma.region.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RegionFindUniqueArgs>(args: SelectSubset<T, RegionFindUniqueArgs<ExtArgs>>): Prisma__RegionClient<$Result.GetResult<Prisma.$RegionPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Region that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {RegionFindUniqueOrThrowArgs} args - Arguments to find a Region
     * @example
     * // Get one Region
     * const region = await prisma.region.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RegionFindUniqueOrThrowArgs>(args: SelectSubset<T, RegionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RegionClient<$Result.GetResult<Prisma.$RegionPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Region that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegionFindFirstArgs} args - Arguments to find a Region
     * @example
     * // Get one Region
     * const region = await prisma.region.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RegionFindFirstArgs>(args?: SelectSubset<T, RegionFindFirstArgs<ExtArgs>>): Prisma__RegionClient<$Result.GetResult<Prisma.$RegionPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Region that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegionFindFirstOrThrowArgs} args - Arguments to find a Region
     * @example
     * // Get one Region
     * const region = await prisma.region.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RegionFindFirstOrThrowArgs>(args?: SelectSubset<T, RegionFindFirstOrThrowArgs<ExtArgs>>): Prisma__RegionClient<$Result.GetResult<Prisma.$RegionPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Regions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Regions
     * const regions = await prisma.region.findMany()
     * 
     * // Get first 10 Regions
     * const regions = await prisma.region.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const regionWithIdOnly = await prisma.region.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RegionFindManyArgs>(args?: SelectSubset<T, RegionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RegionPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Region.
     * @param {RegionCreateArgs} args - Arguments to create a Region.
     * @example
     * // Create one Region
     * const Region = await prisma.region.create({
     *   data: {
     *     // ... data to create a Region
     *   }
     * })
     * 
     */
    create<T extends RegionCreateArgs>(args: SelectSubset<T, RegionCreateArgs<ExtArgs>>): Prisma__RegionClient<$Result.GetResult<Prisma.$RegionPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Regions.
     * @param {RegionCreateManyArgs} args - Arguments to create many Regions.
     * @example
     * // Create many Regions
     * const region = await prisma.region.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RegionCreateManyArgs>(args?: SelectSubset<T, RegionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Regions and returns the data saved in the database.
     * @param {RegionCreateManyAndReturnArgs} args - Arguments to create many Regions.
     * @example
     * // Create many Regions
     * const region = await prisma.region.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Regions and only return the `id`
     * const regionWithIdOnly = await prisma.region.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RegionCreateManyAndReturnArgs>(args?: SelectSubset<T, RegionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RegionPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Region.
     * @param {RegionDeleteArgs} args - Arguments to delete one Region.
     * @example
     * // Delete one Region
     * const Region = await prisma.region.delete({
     *   where: {
     *     // ... filter to delete one Region
     *   }
     * })
     * 
     */
    delete<T extends RegionDeleteArgs>(args: SelectSubset<T, RegionDeleteArgs<ExtArgs>>): Prisma__RegionClient<$Result.GetResult<Prisma.$RegionPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Region.
     * @param {RegionUpdateArgs} args - Arguments to update one Region.
     * @example
     * // Update one Region
     * const region = await prisma.region.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RegionUpdateArgs>(args: SelectSubset<T, RegionUpdateArgs<ExtArgs>>): Prisma__RegionClient<$Result.GetResult<Prisma.$RegionPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Regions.
     * @param {RegionDeleteManyArgs} args - Arguments to filter Regions to delete.
     * @example
     * // Delete a few Regions
     * const { count } = await prisma.region.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RegionDeleteManyArgs>(args?: SelectSubset<T, RegionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Regions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Regions
     * const region = await prisma.region.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RegionUpdateManyArgs>(args: SelectSubset<T, RegionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Region.
     * @param {RegionUpsertArgs} args - Arguments to update or create a Region.
     * @example
     * // Update or create a Region
     * const region = await prisma.region.upsert({
     *   create: {
     *     // ... data to create a Region
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Region we want to update
     *   }
     * })
     */
    upsert<T extends RegionUpsertArgs>(args: SelectSubset<T, RegionUpsertArgs<ExtArgs>>): Prisma__RegionClient<$Result.GetResult<Prisma.$RegionPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Regions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegionCountArgs} args - Arguments to filter Regions to count.
     * @example
     * // Count the number of Regions
     * const count = await prisma.region.count({
     *   where: {
     *     // ... the filter for the Regions we want to count
     *   }
     * })
    **/
    count<T extends RegionCountArgs>(
      args?: Subset<T, RegionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RegionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Region.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RegionAggregateArgs>(args: Subset<T, RegionAggregateArgs>): Prisma.PrismaPromise<GetRegionAggregateType<T>>

    /**
     * Group by Region.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RegionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RegionGroupByArgs['orderBy'] }
        : { orderBy?: RegionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RegionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRegionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Region model
   */
  readonly fields: RegionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Region.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RegionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    GameRegion<T extends Region$GameRegionArgs<ExtArgs> = {}>(args?: Subset<T, Region$GameRegionArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GameRegionPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Region model
   */ 
  interface RegionFieldRefs {
    readonly id: FieldRef<"Region", 'Int'>
    readonly code: FieldRef<"Region", 'String'>
    readonly name: FieldRef<"Region", 'String'>
    readonly currency: FieldRef<"Region", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Region findUnique
   */
  export type RegionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Region
     */
    select?: RegionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegionInclude<ExtArgs> | null
    /**
     * Filter, which Region to fetch.
     */
    where: RegionWhereUniqueInput
  }

  /**
   * Region findUniqueOrThrow
   */
  export type RegionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Region
     */
    select?: RegionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegionInclude<ExtArgs> | null
    /**
     * Filter, which Region to fetch.
     */
    where: RegionWhereUniqueInput
  }

  /**
   * Region findFirst
   */
  export type RegionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Region
     */
    select?: RegionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegionInclude<ExtArgs> | null
    /**
     * Filter, which Region to fetch.
     */
    where?: RegionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Regions to fetch.
     */
    orderBy?: RegionOrderByWithRelationInput | RegionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Regions.
     */
    cursor?: RegionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Regions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Regions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Regions.
     */
    distinct?: RegionScalarFieldEnum | RegionScalarFieldEnum[]
  }

  /**
   * Region findFirstOrThrow
   */
  export type RegionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Region
     */
    select?: RegionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegionInclude<ExtArgs> | null
    /**
     * Filter, which Region to fetch.
     */
    where?: RegionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Regions to fetch.
     */
    orderBy?: RegionOrderByWithRelationInput | RegionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Regions.
     */
    cursor?: RegionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Regions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Regions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Regions.
     */
    distinct?: RegionScalarFieldEnum | RegionScalarFieldEnum[]
  }

  /**
   * Region findMany
   */
  export type RegionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Region
     */
    select?: RegionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegionInclude<ExtArgs> | null
    /**
     * Filter, which Regions to fetch.
     */
    where?: RegionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Regions to fetch.
     */
    orderBy?: RegionOrderByWithRelationInput | RegionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Regions.
     */
    cursor?: RegionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Regions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Regions.
     */
    skip?: number
    distinct?: RegionScalarFieldEnum | RegionScalarFieldEnum[]
  }

  /**
   * Region create
   */
  export type RegionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Region
     */
    select?: RegionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegionInclude<ExtArgs> | null
    /**
     * The data needed to create a Region.
     */
    data: XOR<RegionCreateInput, RegionUncheckedCreateInput>
  }

  /**
   * Region createMany
   */
  export type RegionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Regions.
     */
    data: RegionCreateManyInput | RegionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Region createManyAndReturn
   */
  export type RegionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Region
     */
    select?: RegionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Regions.
     */
    data: RegionCreateManyInput | RegionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Region update
   */
  export type RegionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Region
     */
    select?: RegionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegionInclude<ExtArgs> | null
    /**
     * The data needed to update a Region.
     */
    data: XOR<RegionUpdateInput, RegionUncheckedUpdateInput>
    /**
     * Choose, which Region to update.
     */
    where: RegionWhereUniqueInput
  }

  /**
   * Region updateMany
   */
  export type RegionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Regions.
     */
    data: XOR<RegionUpdateManyMutationInput, RegionUncheckedUpdateManyInput>
    /**
     * Filter which Regions to update
     */
    where?: RegionWhereInput
  }

  /**
   * Region upsert
   */
  export type RegionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Region
     */
    select?: RegionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegionInclude<ExtArgs> | null
    /**
     * The filter to search for the Region to update in case it exists.
     */
    where: RegionWhereUniqueInput
    /**
     * In case the Region found by the `where` argument doesn't exist, create a new Region with this data.
     */
    create: XOR<RegionCreateInput, RegionUncheckedCreateInput>
    /**
     * In case the Region was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RegionUpdateInput, RegionUncheckedUpdateInput>
  }

  /**
   * Region delete
   */
  export type RegionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Region
     */
    select?: RegionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegionInclude<ExtArgs> | null
    /**
     * Filter which Region to delete.
     */
    where: RegionWhereUniqueInput
  }

  /**
   * Region deleteMany
   */
  export type RegionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Regions to delete
     */
    where?: RegionWhereInput
  }

  /**
   * Region.GameRegion
   */
  export type Region$GameRegionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameRegion
     */
    select?: GameRegionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameRegionInclude<ExtArgs> | null
    where?: GameRegionWhereInput
    orderBy?: GameRegionOrderByWithRelationInput | GameRegionOrderByWithRelationInput[]
    cursor?: GameRegionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GameRegionScalarFieldEnum | GameRegionScalarFieldEnum[]
  }

  /**
   * Region without action
   */
  export type RegionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Region
     */
    select?: RegionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegionInclude<ExtArgs> | null
  }


  /**
   * Model GameVersion
   */

  export type AggregateGameVersion = {
    _count: GameVersionCountAggregateOutputType | null
    _avg: GameVersionAvgAggregateOutputType | null
    _sum: GameVersionSumAggregateOutputType | null
    _min: GameVersionMinAggregateOutputType | null
    _max: GameVersionMaxAggregateOutputType | null
  }

  export type GameVersionAvgAggregateOutputType = {
    editionId: number | null
  }

  export type GameVersionSumAggregateOutputType = {
    editionId: number | null
  }

  export type GameVersionMinAggregateOutputType = {
    SKU: string | null
    gameId: string | null
    editionId: number | null
    platform: $Enums.Platform | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type GameVersionMaxAggregateOutputType = {
    SKU: string | null
    gameId: string | null
    editionId: number | null
    platform: $Enums.Platform | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type GameVersionCountAggregateOutputType = {
    SKU: number
    gameId: number
    editionId: number
    platform: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type GameVersionAvgAggregateInputType = {
    editionId?: true
  }

  export type GameVersionSumAggregateInputType = {
    editionId?: true
  }

  export type GameVersionMinAggregateInputType = {
    SKU?: true
    gameId?: true
    editionId?: true
    platform?: true
    createdAt?: true
    updatedAt?: true
  }

  export type GameVersionMaxAggregateInputType = {
    SKU?: true
    gameId?: true
    editionId?: true
    platform?: true
    createdAt?: true
    updatedAt?: true
  }

  export type GameVersionCountAggregateInputType = {
    SKU?: true
    gameId?: true
    editionId?: true
    platform?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type GameVersionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GameVersion to aggregate.
     */
    where?: GameVersionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GameVersions to fetch.
     */
    orderBy?: GameVersionOrderByWithRelationInput | GameVersionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GameVersionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GameVersions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GameVersions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned GameVersions
    **/
    _count?: true | GameVersionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GameVersionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GameVersionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GameVersionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GameVersionMaxAggregateInputType
  }

  export type GetGameVersionAggregateType<T extends GameVersionAggregateArgs> = {
        [P in keyof T & keyof AggregateGameVersion]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGameVersion[P]>
      : GetScalarType<T[P], AggregateGameVersion[P]>
  }




  export type GameVersionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GameVersionWhereInput
    orderBy?: GameVersionOrderByWithAggregationInput | GameVersionOrderByWithAggregationInput[]
    by: GameVersionScalarFieldEnum[] | GameVersionScalarFieldEnum
    having?: GameVersionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GameVersionCountAggregateInputType | true
    _avg?: GameVersionAvgAggregateInputType
    _sum?: GameVersionSumAggregateInputType
    _min?: GameVersionMinAggregateInputType
    _max?: GameVersionMaxAggregateInputType
  }

  export type GameVersionGroupByOutputType = {
    SKU: string
    gameId: string
    editionId: number
    platform: $Enums.Platform
    createdAt: Date
    updatedAt: Date
    _count: GameVersionCountAggregateOutputType | null
    _avg: GameVersionAvgAggregateOutputType | null
    _sum: GameVersionSumAggregateOutputType | null
    _min: GameVersionMinAggregateOutputType | null
    _max: GameVersionMaxAggregateOutputType | null
  }

  type GetGameVersionGroupByPayload<T extends GameVersionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GameVersionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GameVersionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GameVersionGroupByOutputType[P]>
            : GetScalarType<T[P], GameVersionGroupByOutputType[P]>
        }
      >
    >


  export type GameVersionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    SKU?: boolean
    gameId?: boolean
    editionId?: boolean
    platform?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    game?: boolean | GameDefaultArgs<ExtArgs>
    edition?: boolean | GameEditionDefaultArgs<ExtArgs>
    GameVersionRegion?: boolean | GameVersion$GameVersionRegionArgs<ExtArgs>
    _count?: boolean | GameVersionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["gameVersion"]>

  export type GameVersionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    SKU?: boolean
    gameId?: boolean
    editionId?: boolean
    platform?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    game?: boolean | GameDefaultArgs<ExtArgs>
    edition?: boolean | GameEditionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["gameVersion"]>

  export type GameVersionSelectScalar = {
    SKU?: boolean
    gameId?: boolean
    editionId?: boolean
    platform?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type GameVersionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    game?: boolean | GameDefaultArgs<ExtArgs>
    edition?: boolean | GameEditionDefaultArgs<ExtArgs>
    GameVersionRegion?: boolean | GameVersion$GameVersionRegionArgs<ExtArgs>
    _count?: boolean | GameVersionCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type GameVersionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    game?: boolean | GameDefaultArgs<ExtArgs>
    edition?: boolean | GameEditionDefaultArgs<ExtArgs>
  }

  export type $GameVersionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "GameVersion"
    objects: {
      game: Prisma.$GamePayload<ExtArgs>
      edition: Prisma.$GameEditionPayload<ExtArgs>
      GameVersionRegion: Prisma.$GameVersionRegionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      SKU: string
      gameId: string
      editionId: number
      platform: $Enums.Platform
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["gameVersion"]>
    composites: {}
  }

  type GameVersionGetPayload<S extends boolean | null | undefined | GameVersionDefaultArgs> = $Result.GetResult<Prisma.$GameVersionPayload, S>

  type GameVersionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<GameVersionFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: GameVersionCountAggregateInputType | true
    }

  export interface GameVersionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['GameVersion'], meta: { name: 'GameVersion' } }
    /**
     * Find zero or one GameVersion that matches the filter.
     * @param {GameVersionFindUniqueArgs} args - Arguments to find a GameVersion
     * @example
     * // Get one GameVersion
     * const gameVersion = await prisma.gameVersion.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GameVersionFindUniqueArgs>(args: SelectSubset<T, GameVersionFindUniqueArgs<ExtArgs>>): Prisma__GameVersionClient<$Result.GetResult<Prisma.$GameVersionPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one GameVersion that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {GameVersionFindUniqueOrThrowArgs} args - Arguments to find a GameVersion
     * @example
     * // Get one GameVersion
     * const gameVersion = await prisma.gameVersion.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GameVersionFindUniqueOrThrowArgs>(args: SelectSubset<T, GameVersionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GameVersionClient<$Result.GetResult<Prisma.$GameVersionPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first GameVersion that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameVersionFindFirstArgs} args - Arguments to find a GameVersion
     * @example
     * // Get one GameVersion
     * const gameVersion = await prisma.gameVersion.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GameVersionFindFirstArgs>(args?: SelectSubset<T, GameVersionFindFirstArgs<ExtArgs>>): Prisma__GameVersionClient<$Result.GetResult<Prisma.$GameVersionPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first GameVersion that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameVersionFindFirstOrThrowArgs} args - Arguments to find a GameVersion
     * @example
     * // Get one GameVersion
     * const gameVersion = await prisma.gameVersion.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GameVersionFindFirstOrThrowArgs>(args?: SelectSubset<T, GameVersionFindFirstOrThrowArgs<ExtArgs>>): Prisma__GameVersionClient<$Result.GetResult<Prisma.$GameVersionPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more GameVersions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameVersionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all GameVersions
     * const gameVersions = await prisma.gameVersion.findMany()
     * 
     * // Get first 10 GameVersions
     * const gameVersions = await prisma.gameVersion.findMany({ take: 10 })
     * 
     * // Only select the `SKU`
     * const gameVersionWithSKUOnly = await prisma.gameVersion.findMany({ select: { SKU: true } })
     * 
     */
    findMany<T extends GameVersionFindManyArgs>(args?: SelectSubset<T, GameVersionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GameVersionPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a GameVersion.
     * @param {GameVersionCreateArgs} args - Arguments to create a GameVersion.
     * @example
     * // Create one GameVersion
     * const GameVersion = await prisma.gameVersion.create({
     *   data: {
     *     // ... data to create a GameVersion
     *   }
     * })
     * 
     */
    create<T extends GameVersionCreateArgs>(args: SelectSubset<T, GameVersionCreateArgs<ExtArgs>>): Prisma__GameVersionClient<$Result.GetResult<Prisma.$GameVersionPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many GameVersions.
     * @param {GameVersionCreateManyArgs} args - Arguments to create many GameVersions.
     * @example
     * // Create many GameVersions
     * const gameVersion = await prisma.gameVersion.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GameVersionCreateManyArgs>(args?: SelectSubset<T, GameVersionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many GameVersions and returns the data saved in the database.
     * @param {GameVersionCreateManyAndReturnArgs} args - Arguments to create many GameVersions.
     * @example
     * // Create many GameVersions
     * const gameVersion = await prisma.gameVersion.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many GameVersions and only return the `SKU`
     * const gameVersionWithSKUOnly = await prisma.gameVersion.createManyAndReturn({ 
     *   select: { SKU: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends GameVersionCreateManyAndReturnArgs>(args?: SelectSubset<T, GameVersionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GameVersionPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a GameVersion.
     * @param {GameVersionDeleteArgs} args - Arguments to delete one GameVersion.
     * @example
     * // Delete one GameVersion
     * const GameVersion = await prisma.gameVersion.delete({
     *   where: {
     *     // ... filter to delete one GameVersion
     *   }
     * })
     * 
     */
    delete<T extends GameVersionDeleteArgs>(args: SelectSubset<T, GameVersionDeleteArgs<ExtArgs>>): Prisma__GameVersionClient<$Result.GetResult<Prisma.$GameVersionPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one GameVersion.
     * @param {GameVersionUpdateArgs} args - Arguments to update one GameVersion.
     * @example
     * // Update one GameVersion
     * const gameVersion = await prisma.gameVersion.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GameVersionUpdateArgs>(args: SelectSubset<T, GameVersionUpdateArgs<ExtArgs>>): Prisma__GameVersionClient<$Result.GetResult<Prisma.$GameVersionPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more GameVersions.
     * @param {GameVersionDeleteManyArgs} args - Arguments to filter GameVersions to delete.
     * @example
     * // Delete a few GameVersions
     * const { count } = await prisma.gameVersion.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GameVersionDeleteManyArgs>(args?: SelectSubset<T, GameVersionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GameVersions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameVersionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many GameVersions
     * const gameVersion = await prisma.gameVersion.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GameVersionUpdateManyArgs>(args: SelectSubset<T, GameVersionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one GameVersion.
     * @param {GameVersionUpsertArgs} args - Arguments to update or create a GameVersion.
     * @example
     * // Update or create a GameVersion
     * const gameVersion = await prisma.gameVersion.upsert({
     *   create: {
     *     // ... data to create a GameVersion
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the GameVersion we want to update
     *   }
     * })
     */
    upsert<T extends GameVersionUpsertArgs>(args: SelectSubset<T, GameVersionUpsertArgs<ExtArgs>>): Prisma__GameVersionClient<$Result.GetResult<Prisma.$GameVersionPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of GameVersions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameVersionCountArgs} args - Arguments to filter GameVersions to count.
     * @example
     * // Count the number of GameVersions
     * const count = await prisma.gameVersion.count({
     *   where: {
     *     // ... the filter for the GameVersions we want to count
     *   }
     * })
    **/
    count<T extends GameVersionCountArgs>(
      args?: Subset<T, GameVersionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GameVersionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a GameVersion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameVersionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends GameVersionAggregateArgs>(args: Subset<T, GameVersionAggregateArgs>): Prisma.PrismaPromise<GetGameVersionAggregateType<T>>

    /**
     * Group by GameVersion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameVersionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends GameVersionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GameVersionGroupByArgs['orderBy'] }
        : { orderBy?: GameVersionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, GameVersionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGameVersionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the GameVersion model
   */
  readonly fields: GameVersionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for GameVersion.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GameVersionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    game<T extends GameDefaultArgs<ExtArgs> = {}>(args?: Subset<T, GameDefaultArgs<ExtArgs>>): Prisma__GameClient<$Result.GetResult<Prisma.$GamePayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    edition<T extends GameEditionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, GameEditionDefaultArgs<ExtArgs>>): Prisma__GameEditionClient<$Result.GetResult<Prisma.$GameEditionPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    GameVersionRegion<T extends GameVersion$GameVersionRegionArgs<ExtArgs> = {}>(args?: Subset<T, GameVersion$GameVersionRegionArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GameVersionRegionPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the GameVersion model
   */ 
  interface GameVersionFieldRefs {
    readonly SKU: FieldRef<"GameVersion", 'String'>
    readonly gameId: FieldRef<"GameVersion", 'String'>
    readonly editionId: FieldRef<"GameVersion", 'Int'>
    readonly platform: FieldRef<"GameVersion", 'Platform'>
    readonly createdAt: FieldRef<"GameVersion", 'DateTime'>
    readonly updatedAt: FieldRef<"GameVersion", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * GameVersion findUnique
   */
  export type GameVersionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameVersion
     */
    select?: GameVersionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameVersionInclude<ExtArgs> | null
    /**
     * Filter, which GameVersion to fetch.
     */
    where: GameVersionWhereUniqueInput
  }

  /**
   * GameVersion findUniqueOrThrow
   */
  export type GameVersionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameVersion
     */
    select?: GameVersionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameVersionInclude<ExtArgs> | null
    /**
     * Filter, which GameVersion to fetch.
     */
    where: GameVersionWhereUniqueInput
  }

  /**
   * GameVersion findFirst
   */
  export type GameVersionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameVersion
     */
    select?: GameVersionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameVersionInclude<ExtArgs> | null
    /**
     * Filter, which GameVersion to fetch.
     */
    where?: GameVersionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GameVersions to fetch.
     */
    orderBy?: GameVersionOrderByWithRelationInput | GameVersionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GameVersions.
     */
    cursor?: GameVersionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GameVersions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GameVersions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GameVersions.
     */
    distinct?: GameVersionScalarFieldEnum | GameVersionScalarFieldEnum[]
  }

  /**
   * GameVersion findFirstOrThrow
   */
  export type GameVersionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameVersion
     */
    select?: GameVersionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameVersionInclude<ExtArgs> | null
    /**
     * Filter, which GameVersion to fetch.
     */
    where?: GameVersionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GameVersions to fetch.
     */
    orderBy?: GameVersionOrderByWithRelationInput | GameVersionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GameVersions.
     */
    cursor?: GameVersionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GameVersions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GameVersions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GameVersions.
     */
    distinct?: GameVersionScalarFieldEnum | GameVersionScalarFieldEnum[]
  }

  /**
   * GameVersion findMany
   */
  export type GameVersionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameVersion
     */
    select?: GameVersionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameVersionInclude<ExtArgs> | null
    /**
     * Filter, which GameVersions to fetch.
     */
    where?: GameVersionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GameVersions to fetch.
     */
    orderBy?: GameVersionOrderByWithRelationInput | GameVersionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing GameVersions.
     */
    cursor?: GameVersionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GameVersions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GameVersions.
     */
    skip?: number
    distinct?: GameVersionScalarFieldEnum | GameVersionScalarFieldEnum[]
  }

  /**
   * GameVersion create
   */
  export type GameVersionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameVersion
     */
    select?: GameVersionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameVersionInclude<ExtArgs> | null
    /**
     * The data needed to create a GameVersion.
     */
    data: XOR<GameVersionCreateInput, GameVersionUncheckedCreateInput>
  }

  /**
   * GameVersion createMany
   */
  export type GameVersionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many GameVersions.
     */
    data: GameVersionCreateManyInput | GameVersionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * GameVersion createManyAndReturn
   */
  export type GameVersionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameVersion
     */
    select?: GameVersionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many GameVersions.
     */
    data: GameVersionCreateManyInput | GameVersionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameVersionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * GameVersion update
   */
  export type GameVersionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameVersion
     */
    select?: GameVersionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameVersionInclude<ExtArgs> | null
    /**
     * The data needed to update a GameVersion.
     */
    data: XOR<GameVersionUpdateInput, GameVersionUncheckedUpdateInput>
    /**
     * Choose, which GameVersion to update.
     */
    where: GameVersionWhereUniqueInput
  }

  /**
   * GameVersion updateMany
   */
  export type GameVersionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update GameVersions.
     */
    data: XOR<GameVersionUpdateManyMutationInput, GameVersionUncheckedUpdateManyInput>
    /**
     * Filter which GameVersions to update
     */
    where?: GameVersionWhereInput
  }

  /**
   * GameVersion upsert
   */
  export type GameVersionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameVersion
     */
    select?: GameVersionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameVersionInclude<ExtArgs> | null
    /**
     * The filter to search for the GameVersion to update in case it exists.
     */
    where: GameVersionWhereUniqueInput
    /**
     * In case the GameVersion found by the `where` argument doesn't exist, create a new GameVersion with this data.
     */
    create: XOR<GameVersionCreateInput, GameVersionUncheckedCreateInput>
    /**
     * In case the GameVersion was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GameVersionUpdateInput, GameVersionUncheckedUpdateInput>
  }

  /**
   * GameVersion delete
   */
  export type GameVersionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameVersion
     */
    select?: GameVersionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameVersionInclude<ExtArgs> | null
    /**
     * Filter which GameVersion to delete.
     */
    where: GameVersionWhereUniqueInput
  }

  /**
   * GameVersion deleteMany
   */
  export type GameVersionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GameVersions to delete
     */
    where?: GameVersionWhereInput
  }

  /**
   * GameVersion.GameVersionRegion
   */
  export type GameVersion$GameVersionRegionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameVersionRegion
     */
    select?: GameVersionRegionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameVersionRegionInclude<ExtArgs> | null
    where?: GameVersionRegionWhereInput
    orderBy?: GameVersionRegionOrderByWithRelationInput | GameVersionRegionOrderByWithRelationInput[]
    cursor?: GameVersionRegionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GameVersionRegionScalarFieldEnum | GameVersionRegionScalarFieldEnum[]
  }

  /**
   * GameVersion without action
   */
  export type GameVersionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameVersion
     */
    select?: GameVersionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameVersionInclude<ExtArgs> | null
  }


  /**
   * Model GameRegion
   */

  export type AggregateGameRegion = {
    _count: GameRegionCountAggregateOutputType | null
    _avg: GameRegionAvgAggregateOutputType | null
    _sum: GameRegionSumAggregateOutputType | null
    _min: GameRegionMinAggregateOutputType | null
    _max: GameRegionMaxAggregateOutputType | null
  }

  export type GameRegionAvgAggregateOutputType = {
    id: number | null
    regionId: number | null
  }

  export type GameRegionSumAggregateOutputType = {
    id: number | null
    regionId: number | null
  }

  export type GameRegionMinAggregateOutputType = {
    id: number | null
    regionId: number | null
    gameId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type GameRegionMaxAggregateOutputType = {
    id: number | null
    regionId: number | null
    gameId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type GameRegionCountAggregateOutputType = {
    id: number
    regionId: number
    gameId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type GameRegionAvgAggregateInputType = {
    id?: true
    regionId?: true
  }

  export type GameRegionSumAggregateInputType = {
    id?: true
    regionId?: true
  }

  export type GameRegionMinAggregateInputType = {
    id?: true
    regionId?: true
    gameId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type GameRegionMaxAggregateInputType = {
    id?: true
    regionId?: true
    gameId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type GameRegionCountAggregateInputType = {
    id?: true
    regionId?: true
    gameId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type GameRegionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GameRegion to aggregate.
     */
    where?: GameRegionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GameRegions to fetch.
     */
    orderBy?: GameRegionOrderByWithRelationInput | GameRegionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GameRegionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GameRegions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GameRegions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned GameRegions
    **/
    _count?: true | GameRegionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GameRegionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GameRegionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GameRegionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GameRegionMaxAggregateInputType
  }

  export type GetGameRegionAggregateType<T extends GameRegionAggregateArgs> = {
        [P in keyof T & keyof AggregateGameRegion]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGameRegion[P]>
      : GetScalarType<T[P], AggregateGameRegion[P]>
  }




  export type GameRegionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GameRegionWhereInput
    orderBy?: GameRegionOrderByWithAggregationInput | GameRegionOrderByWithAggregationInput[]
    by: GameRegionScalarFieldEnum[] | GameRegionScalarFieldEnum
    having?: GameRegionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GameRegionCountAggregateInputType | true
    _avg?: GameRegionAvgAggregateInputType
    _sum?: GameRegionSumAggregateInputType
    _min?: GameRegionMinAggregateInputType
    _max?: GameRegionMaxAggregateInputType
  }

  export type GameRegionGroupByOutputType = {
    id: number
    regionId: number
    gameId: string
    createdAt: Date
    updatedAt: Date
    _count: GameRegionCountAggregateOutputType | null
    _avg: GameRegionAvgAggregateOutputType | null
    _sum: GameRegionSumAggregateOutputType | null
    _min: GameRegionMinAggregateOutputType | null
    _max: GameRegionMaxAggregateOutputType | null
  }

  type GetGameRegionGroupByPayload<T extends GameRegionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GameRegionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GameRegionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GameRegionGroupByOutputType[P]>
            : GetScalarType<T[P], GameRegionGroupByOutputType[P]>
        }
      >
    >


  export type GameRegionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    regionId?: boolean
    gameId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    game?: boolean | GameDefaultArgs<ExtArgs>
    region?: boolean | RegionDefaultArgs<ExtArgs>
    versionRegions?: boolean | GameRegion$versionRegionsArgs<ExtArgs>
    _count?: boolean | GameRegionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["gameRegion"]>

  export type GameRegionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    regionId?: boolean
    gameId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    game?: boolean | GameDefaultArgs<ExtArgs>
    region?: boolean | RegionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["gameRegion"]>

  export type GameRegionSelectScalar = {
    id?: boolean
    regionId?: boolean
    gameId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type GameRegionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    game?: boolean | GameDefaultArgs<ExtArgs>
    region?: boolean | RegionDefaultArgs<ExtArgs>
    versionRegions?: boolean | GameRegion$versionRegionsArgs<ExtArgs>
    _count?: boolean | GameRegionCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type GameRegionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    game?: boolean | GameDefaultArgs<ExtArgs>
    region?: boolean | RegionDefaultArgs<ExtArgs>
  }

  export type $GameRegionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "GameRegion"
    objects: {
      game: Prisma.$GamePayload<ExtArgs>
      region: Prisma.$RegionPayload<ExtArgs>
      versionRegions: Prisma.$GameVersionRegionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      regionId: number
      gameId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["gameRegion"]>
    composites: {}
  }

  type GameRegionGetPayload<S extends boolean | null | undefined | GameRegionDefaultArgs> = $Result.GetResult<Prisma.$GameRegionPayload, S>

  type GameRegionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<GameRegionFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: GameRegionCountAggregateInputType | true
    }

  export interface GameRegionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['GameRegion'], meta: { name: 'GameRegion' } }
    /**
     * Find zero or one GameRegion that matches the filter.
     * @param {GameRegionFindUniqueArgs} args - Arguments to find a GameRegion
     * @example
     * // Get one GameRegion
     * const gameRegion = await prisma.gameRegion.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GameRegionFindUniqueArgs>(args: SelectSubset<T, GameRegionFindUniqueArgs<ExtArgs>>): Prisma__GameRegionClient<$Result.GetResult<Prisma.$GameRegionPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one GameRegion that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {GameRegionFindUniqueOrThrowArgs} args - Arguments to find a GameRegion
     * @example
     * // Get one GameRegion
     * const gameRegion = await prisma.gameRegion.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GameRegionFindUniqueOrThrowArgs>(args: SelectSubset<T, GameRegionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GameRegionClient<$Result.GetResult<Prisma.$GameRegionPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first GameRegion that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameRegionFindFirstArgs} args - Arguments to find a GameRegion
     * @example
     * // Get one GameRegion
     * const gameRegion = await prisma.gameRegion.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GameRegionFindFirstArgs>(args?: SelectSubset<T, GameRegionFindFirstArgs<ExtArgs>>): Prisma__GameRegionClient<$Result.GetResult<Prisma.$GameRegionPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first GameRegion that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameRegionFindFirstOrThrowArgs} args - Arguments to find a GameRegion
     * @example
     * // Get one GameRegion
     * const gameRegion = await prisma.gameRegion.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GameRegionFindFirstOrThrowArgs>(args?: SelectSubset<T, GameRegionFindFirstOrThrowArgs<ExtArgs>>): Prisma__GameRegionClient<$Result.GetResult<Prisma.$GameRegionPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more GameRegions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameRegionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all GameRegions
     * const gameRegions = await prisma.gameRegion.findMany()
     * 
     * // Get first 10 GameRegions
     * const gameRegions = await prisma.gameRegion.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const gameRegionWithIdOnly = await prisma.gameRegion.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends GameRegionFindManyArgs>(args?: SelectSubset<T, GameRegionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GameRegionPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a GameRegion.
     * @param {GameRegionCreateArgs} args - Arguments to create a GameRegion.
     * @example
     * // Create one GameRegion
     * const GameRegion = await prisma.gameRegion.create({
     *   data: {
     *     // ... data to create a GameRegion
     *   }
     * })
     * 
     */
    create<T extends GameRegionCreateArgs>(args: SelectSubset<T, GameRegionCreateArgs<ExtArgs>>): Prisma__GameRegionClient<$Result.GetResult<Prisma.$GameRegionPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many GameRegions.
     * @param {GameRegionCreateManyArgs} args - Arguments to create many GameRegions.
     * @example
     * // Create many GameRegions
     * const gameRegion = await prisma.gameRegion.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GameRegionCreateManyArgs>(args?: SelectSubset<T, GameRegionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many GameRegions and returns the data saved in the database.
     * @param {GameRegionCreateManyAndReturnArgs} args - Arguments to create many GameRegions.
     * @example
     * // Create many GameRegions
     * const gameRegion = await prisma.gameRegion.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many GameRegions and only return the `id`
     * const gameRegionWithIdOnly = await prisma.gameRegion.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends GameRegionCreateManyAndReturnArgs>(args?: SelectSubset<T, GameRegionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GameRegionPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a GameRegion.
     * @param {GameRegionDeleteArgs} args - Arguments to delete one GameRegion.
     * @example
     * // Delete one GameRegion
     * const GameRegion = await prisma.gameRegion.delete({
     *   where: {
     *     // ... filter to delete one GameRegion
     *   }
     * })
     * 
     */
    delete<T extends GameRegionDeleteArgs>(args: SelectSubset<T, GameRegionDeleteArgs<ExtArgs>>): Prisma__GameRegionClient<$Result.GetResult<Prisma.$GameRegionPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one GameRegion.
     * @param {GameRegionUpdateArgs} args - Arguments to update one GameRegion.
     * @example
     * // Update one GameRegion
     * const gameRegion = await prisma.gameRegion.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GameRegionUpdateArgs>(args: SelectSubset<T, GameRegionUpdateArgs<ExtArgs>>): Prisma__GameRegionClient<$Result.GetResult<Prisma.$GameRegionPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more GameRegions.
     * @param {GameRegionDeleteManyArgs} args - Arguments to filter GameRegions to delete.
     * @example
     * // Delete a few GameRegions
     * const { count } = await prisma.gameRegion.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GameRegionDeleteManyArgs>(args?: SelectSubset<T, GameRegionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GameRegions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameRegionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many GameRegions
     * const gameRegion = await prisma.gameRegion.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GameRegionUpdateManyArgs>(args: SelectSubset<T, GameRegionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one GameRegion.
     * @param {GameRegionUpsertArgs} args - Arguments to update or create a GameRegion.
     * @example
     * // Update or create a GameRegion
     * const gameRegion = await prisma.gameRegion.upsert({
     *   create: {
     *     // ... data to create a GameRegion
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the GameRegion we want to update
     *   }
     * })
     */
    upsert<T extends GameRegionUpsertArgs>(args: SelectSubset<T, GameRegionUpsertArgs<ExtArgs>>): Prisma__GameRegionClient<$Result.GetResult<Prisma.$GameRegionPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of GameRegions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameRegionCountArgs} args - Arguments to filter GameRegions to count.
     * @example
     * // Count the number of GameRegions
     * const count = await prisma.gameRegion.count({
     *   where: {
     *     // ... the filter for the GameRegions we want to count
     *   }
     * })
    **/
    count<T extends GameRegionCountArgs>(
      args?: Subset<T, GameRegionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GameRegionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a GameRegion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameRegionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends GameRegionAggregateArgs>(args: Subset<T, GameRegionAggregateArgs>): Prisma.PrismaPromise<GetGameRegionAggregateType<T>>

    /**
     * Group by GameRegion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameRegionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends GameRegionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GameRegionGroupByArgs['orderBy'] }
        : { orderBy?: GameRegionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, GameRegionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGameRegionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the GameRegion model
   */
  readonly fields: GameRegionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for GameRegion.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GameRegionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    game<T extends GameDefaultArgs<ExtArgs> = {}>(args?: Subset<T, GameDefaultArgs<ExtArgs>>): Prisma__GameClient<$Result.GetResult<Prisma.$GamePayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    region<T extends RegionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RegionDefaultArgs<ExtArgs>>): Prisma__RegionClient<$Result.GetResult<Prisma.$RegionPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    versionRegions<T extends GameRegion$versionRegionsArgs<ExtArgs> = {}>(args?: Subset<T, GameRegion$versionRegionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GameVersionRegionPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the GameRegion model
   */ 
  interface GameRegionFieldRefs {
    readonly id: FieldRef<"GameRegion", 'Int'>
    readonly regionId: FieldRef<"GameRegion", 'Int'>
    readonly gameId: FieldRef<"GameRegion", 'String'>
    readonly createdAt: FieldRef<"GameRegion", 'DateTime'>
    readonly updatedAt: FieldRef<"GameRegion", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * GameRegion findUnique
   */
  export type GameRegionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameRegion
     */
    select?: GameRegionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameRegionInclude<ExtArgs> | null
    /**
     * Filter, which GameRegion to fetch.
     */
    where: GameRegionWhereUniqueInput
  }

  /**
   * GameRegion findUniqueOrThrow
   */
  export type GameRegionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameRegion
     */
    select?: GameRegionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameRegionInclude<ExtArgs> | null
    /**
     * Filter, which GameRegion to fetch.
     */
    where: GameRegionWhereUniqueInput
  }

  /**
   * GameRegion findFirst
   */
  export type GameRegionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameRegion
     */
    select?: GameRegionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameRegionInclude<ExtArgs> | null
    /**
     * Filter, which GameRegion to fetch.
     */
    where?: GameRegionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GameRegions to fetch.
     */
    orderBy?: GameRegionOrderByWithRelationInput | GameRegionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GameRegions.
     */
    cursor?: GameRegionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GameRegions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GameRegions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GameRegions.
     */
    distinct?: GameRegionScalarFieldEnum | GameRegionScalarFieldEnum[]
  }

  /**
   * GameRegion findFirstOrThrow
   */
  export type GameRegionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameRegion
     */
    select?: GameRegionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameRegionInclude<ExtArgs> | null
    /**
     * Filter, which GameRegion to fetch.
     */
    where?: GameRegionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GameRegions to fetch.
     */
    orderBy?: GameRegionOrderByWithRelationInput | GameRegionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GameRegions.
     */
    cursor?: GameRegionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GameRegions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GameRegions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GameRegions.
     */
    distinct?: GameRegionScalarFieldEnum | GameRegionScalarFieldEnum[]
  }

  /**
   * GameRegion findMany
   */
  export type GameRegionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameRegion
     */
    select?: GameRegionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameRegionInclude<ExtArgs> | null
    /**
     * Filter, which GameRegions to fetch.
     */
    where?: GameRegionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GameRegions to fetch.
     */
    orderBy?: GameRegionOrderByWithRelationInput | GameRegionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing GameRegions.
     */
    cursor?: GameRegionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GameRegions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GameRegions.
     */
    skip?: number
    distinct?: GameRegionScalarFieldEnum | GameRegionScalarFieldEnum[]
  }

  /**
   * GameRegion create
   */
  export type GameRegionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameRegion
     */
    select?: GameRegionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameRegionInclude<ExtArgs> | null
    /**
     * The data needed to create a GameRegion.
     */
    data: XOR<GameRegionCreateInput, GameRegionUncheckedCreateInput>
  }

  /**
   * GameRegion createMany
   */
  export type GameRegionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many GameRegions.
     */
    data: GameRegionCreateManyInput | GameRegionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * GameRegion createManyAndReturn
   */
  export type GameRegionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameRegion
     */
    select?: GameRegionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many GameRegions.
     */
    data: GameRegionCreateManyInput | GameRegionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameRegionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * GameRegion update
   */
  export type GameRegionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameRegion
     */
    select?: GameRegionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameRegionInclude<ExtArgs> | null
    /**
     * The data needed to update a GameRegion.
     */
    data: XOR<GameRegionUpdateInput, GameRegionUncheckedUpdateInput>
    /**
     * Choose, which GameRegion to update.
     */
    where: GameRegionWhereUniqueInput
  }

  /**
   * GameRegion updateMany
   */
  export type GameRegionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update GameRegions.
     */
    data: XOR<GameRegionUpdateManyMutationInput, GameRegionUncheckedUpdateManyInput>
    /**
     * Filter which GameRegions to update
     */
    where?: GameRegionWhereInput
  }

  /**
   * GameRegion upsert
   */
  export type GameRegionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameRegion
     */
    select?: GameRegionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameRegionInclude<ExtArgs> | null
    /**
     * The filter to search for the GameRegion to update in case it exists.
     */
    where: GameRegionWhereUniqueInput
    /**
     * In case the GameRegion found by the `where` argument doesn't exist, create a new GameRegion with this data.
     */
    create: XOR<GameRegionCreateInput, GameRegionUncheckedCreateInput>
    /**
     * In case the GameRegion was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GameRegionUpdateInput, GameRegionUncheckedUpdateInput>
  }

  /**
   * GameRegion delete
   */
  export type GameRegionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameRegion
     */
    select?: GameRegionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameRegionInclude<ExtArgs> | null
    /**
     * Filter which GameRegion to delete.
     */
    where: GameRegionWhereUniqueInput
  }

  /**
   * GameRegion deleteMany
   */
  export type GameRegionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GameRegions to delete
     */
    where?: GameRegionWhereInput
  }

  /**
   * GameRegion.versionRegions
   */
  export type GameRegion$versionRegionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameVersionRegion
     */
    select?: GameVersionRegionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameVersionRegionInclude<ExtArgs> | null
    where?: GameVersionRegionWhereInput
    orderBy?: GameVersionRegionOrderByWithRelationInput | GameVersionRegionOrderByWithRelationInput[]
    cursor?: GameVersionRegionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GameVersionRegionScalarFieldEnum | GameVersionRegionScalarFieldEnum[]
  }

  /**
   * GameRegion without action
   */
  export type GameRegionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameRegion
     */
    select?: GameRegionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameRegionInclude<ExtArgs> | null
  }


  /**
   * Model GameVersionRegion
   */

  export type AggregateGameVersionRegion = {
    _count: GameVersionRegionCountAggregateOutputType | null
    _avg: GameVersionRegionAvgAggregateOutputType | null
    _sum: GameVersionRegionSumAggregateOutputType | null
    _min: GameVersionRegionMinAggregateOutputType | null
    _max: GameVersionRegionMaxAggregateOutputType | null
  }

  export type GameVersionRegionAvgAggregateOutputType = {
    id: number | null
    gameRegionId: number | null
  }

  export type GameVersionRegionSumAggregateOutputType = {
    id: number | null
    gameRegionId: number | null
  }

  export type GameVersionRegionMinAggregateOutputType = {
    id: number | null
    SKU: string | null
    gameRegionId: number | null
    storeUrl: string | null
    isAvailable: boolean | null
    lastChecked: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type GameVersionRegionMaxAggregateOutputType = {
    id: number | null
    SKU: string | null
    gameRegionId: number | null
    storeUrl: string | null
    isAvailable: boolean | null
    lastChecked: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type GameVersionRegionCountAggregateOutputType = {
    id: number
    SKU: number
    gameRegionId: number
    storeUrl: number
    isAvailable: number
    lastChecked: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type GameVersionRegionAvgAggregateInputType = {
    id?: true
    gameRegionId?: true
  }

  export type GameVersionRegionSumAggregateInputType = {
    id?: true
    gameRegionId?: true
  }

  export type GameVersionRegionMinAggregateInputType = {
    id?: true
    SKU?: true
    gameRegionId?: true
    storeUrl?: true
    isAvailable?: true
    lastChecked?: true
    createdAt?: true
    updatedAt?: true
  }

  export type GameVersionRegionMaxAggregateInputType = {
    id?: true
    SKU?: true
    gameRegionId?: true
    storeUrl?: true
    isAvailable?: true
    lastChecked?: true
    createdAt?: true
    updatedAt?: true
  }

  export type GameVersionRegionCountAggregateInputType = {
    id?: true
    SKU?: true
    gameRegionId?: true
    storeUrl?: true
    isAvailable?: true
    lastChecked?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type GameVersionRegionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GameVersionRegion to aggregate.
     */
    where?: GameVersionRegionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GameVersionRegions to fetch.
     */
    orderBy?: GameVersionRegionOrderByWithRelationInput | GameVersionRegionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GameVersionRegionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GameVersionRegions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GameVersionRegions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned GameVersionRegions
    **/
    _count?: true | GameVersionRegionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GameVersionRegionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GameVersionRegionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GameVersionRegionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GameVersionRegionMaxAggregateInputType
  }

  export type GetGameVersionRegionAggregateType<T extends GameVersionRegionAggregateArgs> = {
        [P in keyof T & keyof AggregateGameVersionRegion]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGameVersionRegion[P]>
      : GetScalarType<T[P], AggregateGameVersionRegion[P]>
  }




  export type GameVersionRegionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GameVersionRegionWhereInput
    orderBy?: GameVersionRegionOrderByWithAggregationInput | GameVersionRegionOrderByWithAggregationInput[]
    by: GameVersionRegionScalarFieldEnum[] | GameVersionRegionScalarFieldEnum
    having?: GameVersionRegionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GameVersionRegionCountAggregateInputType | true
    _avg?: GameVersionRegionAvgAggregateInputType
    _sum?: GameVersionRegionSumAggregateInputType
    _min?: GameVersionRegionMinAggregateInputType
    _max?: GameVersionRegionMaxAggregateInputType
  }

  export type GameVersionRegionGroupByOutputType = {
    id: number
    SKU: string
    gameRegionId: number
    storeUrl: string | null
    isAvailable: boolean
    lastChecked: Date | null
    createdAt: Date
    updatedAt: Date
    _count: GameVersionRegionCountAggregateOutputType | null
    _avg: GameVersionRegionAvgAggregateOutputType | null
    _sum: GameVersionRegionSumAggregateOutputType | null
    _min: GameVersionRegionMinAggregateOutputType | null
    _max: GameVersionRegionMaxAggregateOutputType | null
  }

  type GetGameVersionRegionGroupByPayload<T extends GameVersionRegionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GameVersionRegionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GameVersionRegionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GameVersionRegionGroupByOutputType[P]>
            : GetScalarType<T[P], GameVersionRegionGroupByOutputType[P]>
        }
      >
    >


  export type GameVersionRegionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    SKU?: boolean
    gameRegionId?: boolean
    storeUrl?: boolean
    isAvailable?: boolean
    lastChecked?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    gameVersion?: boolean | GameVersionDefaultArgs<ExtArgs>
    gameRegion?: boolean | GameRegionDefaultArgs<ExtArgs>
    Price?: boolean | GameVersionRegion$PriceArgs<ExtArgs>
    PriceHistory?: boolean | GameVersionRegion$PriceHistoryArgs<ExtArgs>
    _count?: boolean | GameVersionRegionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["gameVersionRegion"]>

  export type GameVersionRegionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    SKU?: boolean
    gameRegionId?: boolean
    storeUrl?: boolean
    isAvailable?: boolean
    lastChecked?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    gameVersion?: boolean | GameVersionDefaultArgs<ExtArgs>
    gameRegion?: boolean | GameRegionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["gameVersionRegion"]>

  export type GameVersionRegionSelectScalar = {
    id?: boolean
    SKU?: boolean
    gameRegionId?: boolean
    storeUrl?: boolean
    isAvailable?: boolean
    lastChecked?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type GameVersionRegionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    gameVersion?: boolean | GameVersionDefaultArgs<ExtArgs>
    gameRegion?: boolean | GameRegionDefaultArgs<ExtArgs>
    Price?: boolean | GameVersionRegion$PriceArgs<ExtArgs>
    PriceHistory?: boolean | GameVersionRegion$PriceHistoryArgs<ExtArgs>
    _count?: boolean | GameVersionRegionCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type GameVersionRegionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    gameVersion?: boolean | GameVersionDefaultArgs<ExtArgs>
    gameRegion?: boolean | GameRegionDefaultArgs<ExtArgs>
  }

  export type $GameVersionRegionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "GameVersionRegion"
    objects: {
      gameVersion: Prisma.$GameVersionPayload<ExtArgs>
      gameRegion: Prisma.$GameRegionPayload<ExtArgs>
      Price: Prisma.$PricePayload<ExtArgs>[]
      PriceHistory: Prisma.$PriceHistoryPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      SKU: string
      gameRegionId: number
      storeUrl: string | null
      isAvailable: boolean
      lastChecked: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["gameVersionRegion"]>
    composites: {}
  }

  type GameVersionRegionGetPayload<S extends boolean | null | undefined | GameVersionRegionDefaultArgs> = $Result.GetResult<Prisma.$GameVersionRegionPayload, S>

  type GameVersionRegionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<GameVersionRegionFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: GameVersionRegionCountAggregateInputType | true
    }

  export interface GameVersionRegionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['GameVersionRegion'], meta: { name: 'GameVersionRegion' } }
    /**
     * Find zero or one GameVersionRegion that matches the filter.
     * @param {GameVersionRegionFindUniqueArgs} args - Arguments to find a GameVersionRegion
     * @example
     * // Get one GameVersionRegion
     * const gameVersionRegion = await prisma.gameVersionRegion.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GameVersionRegionFindUniqueArgs>(args: SelectSubset<T, GameVersionRegionFindUniqueArgs<ExtArgs>>): Prisma__GameVersionRegionClient<$Result.GetResult<Prisma.$GameVersionRegionPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one GameVersionRegion that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {GameVersionRegionFindUniqueOrThrowArgs} args - Arguments to find a GameVersionRegion
     * @example
     * // Get one GameVersionRegion
     * const gameVersionRegion = await prisma.gameVersionRegion.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GameVersionRegionFindUniqueOrThrowArgs>(args: SelectSubset<T, GameVersionRegionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GameVersionRegionClient<$Result.GetResult<Prisma.$GameVersionRegionPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first GameVersionRegion that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameVersionRegionFindFirstArgs} args - Arguments to find a GameVersionRegion
     * @example
     * // Get one GameVersionRegion
     * const gameVersionRegion = await prisma.gameVersionRegion.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GameVersionRegionFindFirstArgs>(args?: SelectSubset<T, GameVersionRegionFindFirstArgs<ExtArgs>>): Prisma__GameVersionRegionClient<$Result.GetResult<Prisma.$GameVersionRegionPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first GameVersionRegion that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameVersionRegionFindFirstOrThrowArgs} args - Arguments to find a GameVersionRegion
     * @example
     * // Get one GameVersionRegion
     * const gameVersionRegion = await prisma.gameVersionRegion.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GameVersionRegionFindFirstOrThrowArgs>(args?: SelectSubset<T, GameVersionRegionFindFirstOrThrowArgs<ExtArgs>>): Prisma__GameVersionRegionClient<$Result.GetResult<Prisma.$GameVersionRegionPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more GameVersionRegions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameVersionRegionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all GameVersionRegions
     * const gameVersionRegions = await prisma.gameVersionRegion.findMany()
     * 
     * // Get first 10 GameVersionRegions
     * const gameVersionRegions = await prisma.gameVersionRegion.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const gameVersionRegionWithIdOnly = await prisma.gameVersionRegion.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends GameVersionRegionFindManyArgs>(args?: SelectSubset<T, GameVersionRegionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GameVersionRegionPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a GameVersionRegion.
     * @param {GameVersionRegionCreateArgs} args - Arguments to create a GameVersionRegion.
     * @example
     * // Create one GameVersionRegion
     * const GameVersionRegion = await prisma.gameVersionRegion.create({
     *   data: {
     *     // ... data to create a GameVersionRegion
     *   }
     * })
     * 
     */
    create<T extends GameVersionRegionCreateArgs>(args: SelectSubset<T, GameVersionRegionCreateArgs<ExtArgs>>): Prisma__GameVersionRegionClient<$Result.GetResult<Prisma.$GameVersionRegionPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many GameVersionRegions.
     * @param {GameVersionRegionCreateManyArgs} args - Arguments to create many GameVersionRegions.
     * @example
     * // Create many GameVersionRegions
     * const gameVersionRegion = await prisma.gameVersionRegion.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GameVersionRegionCreateManyArgs>(args?: SelectSubset<T, GameVersionRegionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many GameVersionRegions and returns the data saved in the database.
     * @param {GameVersionRegionCreateManyAndReturnArgs} args - Arguments to create many GameVersionRegions.
     * @example
     * // Create many GameVersionRegions
     * const gameVersionRegion = await prisma.gameVersionRegion.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many GameVersionRegions and only return the `id`
     * const gameVersionRegionWithIdOnly = await prisma.gameVersionRegion.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends GameVersionRegionCreateManyAndReturnArgs>(args?: SelectSubset<T, GameVersionRegionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GameVersionRegionPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a GameVersionRegion.
     * @param {GameVersionRegionDeleteArgs} args - Arguments to delete one GameVersionRegion.
     * @example
     * // Delete one GameVersionRegion
     * const GameVersionRegion = await prisma.gameVersionRegion.delete({
     *   where: {
     *     // ... filter to delete one GameVersionRegion
     *   }
     * })
     * 
     */
    delete<T extends GameVersionRegionDeleteArgs>(args: SelectSubset<T, GameVersionRegionDeleteArgs<ExtArgs>>): Prisma__GameVersionRegionClient<$Result.GetResult<Prisma.$GameVersionRegionPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one GameVersionRegion.
     * @param {GameVersionRegionUpdateArgs} args - Arguments to update one GameVersionRegion.
     * @example
     * // Update one GameVersionRegion
     * const gameVersionRegion = await prisma.gameVersionRegion.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GameVersionRegionUpdateArgs>(args: SelectSubset<T, GameVersionRegionUpdateArgs<ExtArgs>>): Prisma__GameVersionRegionClient<$Result.GetResult<Prisma.$GameVersionRegionPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more GameVersionRegions.
     * @param {GameVersionRegionDeleteManyArgs} args - Arguments to filter GameVersionRegions to delete.
     * @example
     * // Delete a few GameVersionRegions
     * const { count } = await prisma.gameVersionRegion.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GameVersionRegionDeleteManyArgs>(args?: SelectSubset<T, GameVersionRegionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GameVersionRegions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameVersionRegionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many GameVersionRegions
     * const gameVersionRegion = await prisma.gameVersionRegion.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GameVersionRegionUpdateManyArgs>(args: SelectSubset<T, GameVersionRegionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one GameVersionRegion.
     * @param {GameVersionRegionUpsertArgs} args - Arguments to update or create a GameVersionRegion.
     * @example
     * // Update or create a GameVersionRegion
     * const gameVersionRegion = await prisma.gameVersionRegion.upsert({
     *   create: {
     *     // ... data to create a GameVersionRegion
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the GameVersionRegion we want to update
     *   }
     * })
     */
    upsert<T extends GameVersionRegionUpsertArgs>(args: SelectSubset<T, GameVersionRegionUpsertArgs<ExtArgs>>): Prisma__GameVersionRegionClient<$Result.GetResult<Prisma.$GameVersionRegionPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of GameVersionRegions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameVersionRegionCountArgs} args - Arguments to filter GameVersionRegions to count.
     * @example
     * // Count the number of GameVersionRegions
     * const count = await prisma.gameVersionRegion.count({
     *   where: {
     *     // ... the filter for the GameVersionRegions we want to count
     *   }
     * })
    **/
    count<T extends GameVersionRegionCountArgs>(
      args?: Subset<T, GameVersionRegionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GameVersionRegionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a GameVersionRegion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameVersionRegionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends GameVersionRegionAggregateArgs>(args: Subset<T, GameVersionRegionAggregateArgs>): Prisma.PrismaPromise<GetGameVersionRegionAggregateType<T>>

    /**
     * Group by GameVersionRegion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameVersionRegionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends GameVersionRegionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GameVersionRegionGroupByArgs['orderBy'] }
        : { orderBy?: GameVersionRegionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, GameVersionRegionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGameVersionRegionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the GameVersionRegion model
   */
  readonly fields: GameVersionRegionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for GameVersionRegion.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GameVersionRegionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    gameVersion<T extends GameVersionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, GameVersionDefaultArgs<ExtArgs>>): Prisma__GameVersionClient<$Result.GetResult<Prisma.$GameVersionPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    gameRegion<T extends GameRegionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, GameRegionDefaultArgs<ExtArgs>>): Prisma__GameRegionClient<$Result.GetResult<Prisma.$GameRegionPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    Price<T extends GameVersionRegion$PriceArgs<ExtArgs> = {}>(args?: Subset<T, GameVersionRegion$PriceArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PricePayload<ExtArgs>, T, "findMany"> | Null>
    PriceHistory<T extends GameVersionRegion$PriceHistoryArgs<ExtArgs> = {}>(args?: Subset<T, GameVersionRegion$PriceHistoryArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PriceHistoryPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the GameVersionRegion model
   */ 
  interface GameVersionRegionFieldRefs {
    readonly id: FieldRef<"GameVersionRegion", 'Int'>
    readonly SKU: FieldRef<"GameVersionRegion", 'String'>
    readonly gameRegionId: FieldRef<"GameVersionRegion", 'Int'>
    readonly storeUrl: FieldRef<"GameVersionRegion", 'String'>
    readonly isAvailable: FieldRef<"GameVersionRegion", 'Boolean'>
    readonly lastChecked: FieldRef<"GameVersionRegion", 'DateTime'>
    readonly createdAt: FieldRef<"GameVersionRegion", 'DateTime'>
    readonly updatedAt: FieldRef<"GameVersionRegion", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * GameVersionRegion findUnique
   */
  export type GameVersionRegionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameVersionRegion
     */
    select?: GameVersionRegionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameVersionRegionInclude<ExtArgs> | null
    /**
     * Filter, which GameVersionRegion to fetch.
     */
    where: GameVersionRegionWhereUniqueInput
  }

  /**
   * GameVersionRegion findUniqueOrThrow
   */
  export type GameVersionRegionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameVersionRegion
     */
    select?: GameVersionRegionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameVersionRegionInclude<ExtArgs> | null
    /**
     * Filter, which GameVersionRegion to fetch.
     */
    where: GameVersionRegionWhereUniqueInput
  }

  /**
   * GameVersionRegion findFirst
   */
  export type GameVersionRegionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameVersionRegion
     */
    select?: GameVersionRegionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameVersionRegionInclude<ExtArgs> | null
    /**
     * Filter, which GameVersionRegion to fetch.
     */
    where?: GameVersionRegionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GameVersionRegions to fetch.
     */
    orderBy?: GameVersionRegionOrderByWithRelationInput | GameVersionRegionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GameVersionRegions.
     */
    cursor?: GameVersionRegionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GameVersionRegions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GameVersionRegions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GameVersionRegions.
     */
    distinct?: GameVersionRegionScalarFieldEnum | GameVersionRegionScalarFieldEnum[]
  }

  /**
   * GameVersionRegion findFirstOrThrow
   */
  export type GameVersionRegionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameVersionRegion
     */
    select?: GameVersionRegionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameVersionRegionInclude<ExtArgs> | null
    /**
     * Filter, which GameVersionRegion to fetch.
     */
    where?: GameVersionRegionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GameVersionRegions to fetch.
     */
    orderBy?: GameVersionRegionOrderByWithRelationInput | GameVersionRegionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GameVersionRegions.
     */
    cursor?: GameVersionRegionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GameVersionRegions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GameVersionRegions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GameVersionRegions.
     */
    distinct?: GameVersionRegionScalarFieldEnum | GameVersionRegionScalarFieldEnum[]
  }

  /**
   * GameVersionRegion findMany
   */
  export type GameVersionRegionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameVersionRegion
     */
    select?: GameVersionRegionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameVersionRegionInclude<ExtArgs> | null
    /**
     * Filter, which GameVersionRegions to fetch.
     */
    where?: GameVersionRegionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GameVersionRegions to fetch.
     */
    orderBy?: GameVersionRegionOrderByWithRelationInput | GameVersionRegionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing GameVersionRegions.
     */
    cursor?: GameVersionRegionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GameVersionRegions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GameVersionRegions.
     */
    skip?: number
    distinct?: GameVersionRegionScalarFieldEnum | GameVersionRegionScalarFieldEnum[]
  }

  /**
   * GameVersionRegion create
   */
  export type GameVersionRegionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameVersionRegion
     */
    select?: GameVersionRegionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameVersionRegionInclude<ExtArgs> | null
    /**
     * The data needed to create a GameVersionRegion.
     */
    data: XOR<GameVersionRegionCreateInput, GameVersionRegionUncheckedCreateInput>
  }

  /**
   * GameVersionRegion createMany
   */
  export type GameVersionRegionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many GameVersionRegions.
     */
    data: GameVersionRegionCreateManyInput | GameVersionRegionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * GameVersionRegion createManyAndReturn
   */
  export type GameVersionRegionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameVersionRegion
     */
    select?: GameVersionRegionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many GameVersionRegions.
     */
    data: GameVersionRegionCreateManyInput | GameVersionRegionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameVersionRegionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * GameVersionRegion update
   */
  export type GameVersionRegionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameVersionRegion
     */
    select?: GameVersionRegionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameVersionRegionInclude<ExtArgs> | null
    /**
     * The data needed to update a GameVersionRegion.
     */
    data: XOR<GameVersionRegionUpdateInput, GameVersionRegionUncheckedUpdateInput>
    /**
     * Choose, which GameVersionRegion to update.
     */
    where: GameVersionRegionWhereUniqueInput
  }

  /**
   * GameVersionRegion updateMany
   */
  export type GameVersionRegionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update GameVersionRegions.
     */
    data: XOR<GameVersionRegionUpdateManyMutationInput, GameVersionRegionUncheckedUpdateManyInput>
    /**
     * Filter which GameVersionRegions to update
     */
    where?: GameVersionRegionWhereInput
  }

  /**
   * GameVersionRegion upsert
   */
  export type GameVersionRegionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameVersionRegion
     */
    select?: GameVersionRegionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameVersionRegionInclude<ExtArgs> | null
    /**
     * The filter to search for the GameVersionRegion to update in case it exists.
     */
    where: GameVersionRegionWhereUniqueInput
    /**
     * In case the GameVersionRegion found by the `where` argument doesn't exist, create a new GameVersionRegion with this data.
     */
    create: XOR<GameVersionRegionCreateInput, GameVersionRegionUncheckedCreateInput>
    /**
     * In case the GameVersionRegion was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GameVersionRegionUpdateInput, GameVersionRegionUncheckedUpdateInput>
  }

  /**
   * GameVersionRegion delete
   */
  export type GameVersionRegionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameVersionRegion
     */
    select?: GameVersionRegionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameVersionRegionInclude<ExtArgs> | null
    /**
     * Filter which GameVersionRegion to delete.
     */
    where: GameVersionRegionWhereUniqueInput
  }

  /**
   * GameVersionRegion deleteMany
   */
  export type GameVersionRegionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GameVersionRegions to delete
     */
    where?: GameVersionRegionWhereInput
  }

  /**
   * GameVersionRegion.Price
   */
  export type GameVersionRegion$PriceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Price
     */
    select?: PriceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PriceInclude<ExtArgs> | null
    where?: PriceWhereInput
    orderBy?: PriceOrderByWithRelationInput | PriceOrderByWithRelationInput[]
    cursor?: PriceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PriceScalarFieldEnum | PriceScalarFieldEnum[]
  }

  /**
   * GameVersionRegion.PriceHistory
   */
  export type GameVersionRegion$PriceHistoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PriceHistory
     */
    select?: PriceHistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PriceHistoryInclude<ExtArgs> | null
    where?: PriceHistoryWhereInput
    orderBy?: PriceHistoryOrderByWithRelationInput | PriceHistoryOrderByWithRelationInput[]
    cursor?: PriceHistoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PriceHistoryScalarFieldEnum | PriceHistoryScalarFieldEnum[]
  }

  /**
   * GameVersionRegion without action
   */
  export type GameVersionRegionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameVersionRegion
     */
    select?: GameVersionRegionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameVersionRegionInclude<ExtArgs> | null
  }


  /**
   * Model Price
   */

  export type AggregatePrice = {
    _count: PriceCountAggregateOutputType | null
    _avg: PriceAvgAggregateOutputType | null
    _sum: PriceSumAggregateOutputType | null
    _min: PriceMinAggregateOutputType | null
    _max: PriceMaxAggregateOutputType | null
  }

  export type PriceAvgAggregateOutputType = {
    id: number | null
    gameVersionRegionId: number | null
    price: Decimal | null
    originalPrice: Decimal | null
    discountPercent: number | null
  }

  export type PriceSumAggregateOutputType = {
    id: number | null
    gameVersionRegionId: number | null
    price: Decimal | null
    originalPrice: Decimal | null
    discountPercent: number | null
  }

  export type PriceMinAggregateOutputType = {
    id: number | null
    gameVersionRegionId: number | null
    price: Decimal | null
    originalPrice: Decimal | null
    currency: string | null
    type: $Enums.PriceType | null
    hasDiscount: boolean | null
    discountPercent: number | null
    discountStart: Date | null
    discountFinish: Date | null
    recordedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PriceMaxAggregateOutputType = {
    id: number | null
    gameVersionRegionId: number | null
    price: Decimal | null
    originalPrice: Decimal | null
    currency: string | null
    type: $Enums.PriceType | null
    hasDiscount: boolean | null
    discountPercent: number | null
    discountStart: Date | null
    discountFinish: Date | null
    recordedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PriceCountAggregateOutputType = {
    id: number
    gameVersionRegionId: number
    price: number
    originalPrice: number
    currency: number
    type: number
    hasDiscount: number
    discountPercent: number
    discountStart: number
    discountFinish: number
    recordedAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PriceAvgAggregateInputType = {
    id?: true
    gameVersionRegionId?: true
    price?: true
    originalPrice?: true
    discountPercent?: true
  }

  export type PriceSumAggregateInputType = {
    id?: true
    gameVersionRegionId?: true
    price?: true
    originalPrice?: true
    discountPercent?: true
  }

  export type PriceMinAggregateInputType = {
    id?: true
    gameVersionRegionId?: true
    price?: true
    originalPrice?: true
    currency?: true
    type?: true
    hasDiscount?: true
    discountPercent?: true
    discountStart?: true
    discountFinish?: true
    recordedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PriceMaxAggregateInputType = {
    id?: true
    gameVersionRegionId?: true
    price?: true
    originalPrice?: true
    currency?: true
    type?: true
    hasDiscount?: true
    discountPercent?: true
    discountStart?: true
    discountFinish?: true
    recordedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PriceCountAggregateInputType = {
    id?: true
    gameVersionRegionId?: true
    price?: true
    originalPrice?: true
    currency?: true
    type?: true
    hasDiscount?: true
    discountPercent?: true
    discountStart?: true
    discountFinish?: true
    recordedAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PriceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Price to aggregate.
     */
    where?: PriceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Prices to fetch.
     */
    orderBy?: PriceOrderByWithRelationInput | PriceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PriceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Prices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Prices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Prices
    **/
    _count?: true | PriceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PriceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PriceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PriceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PriceMaxAggregateInputType
  }

  export type GetPriceAggregateType<T extends PriceAggregateArgs> = {
        [P in keyof T & keyof AggregatePrice]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePrice[P]>
      : GetScalarType<T[P], AggregatePrice[P]>
  }




  export type PriceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PriceWhereInput
    orderBy?: PriceOrderByWithAggregationInput | PriceOrderByWithAggregationInput[]
    by: PriceScalarFieldEnum[] | PriceScalarFieldEnum
    having?: PriceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PriceCountAggregateInputType | true
    _avg?: PriceAvgAggregateInputType
    _sum?: PriceSumAggregateInputType
    _min?: PriceMinAggregateInputType
    _max?: PriceMaxAggregateInputType
  }

  export type PriceGroupByOutputType = {
    id: number
    gameVersionRegionId: number
    price: Decimal
    originalPrice: Decimal | null
    currency: string
    type: $Enums.PriceType
    hasDiscount: boolean
    discountPercent: number | null
    discountStart: Date | null
    discountFinish: Date | null
    recordedAt: Date
    createdAt: Date
    updatedAt: Date
    _count: PriceCountAggregateOutputType | null
    _avg: PriceAvgAggregateOutputType | null
    _sum: PriceSumAggregateOutputType | null
    _min: PriceMinAggregateOutputType | null
    _max: PriceMaxAggregateOutputType | null
  }

  type GetPriceGroupByPayload<T extends PriceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PriceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PriceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PriceGroupByOutputType[P]>
            : GetScalarType<T[P], PriceGroupByOutputType[P]>
        }
      >
    >


  export type PriceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    gameVersionRegionId?: boolean
    price?: boolean
    originalPrice?: boolean
    currency?: boolean
    type?: boolean
    hasDiscount?: boolean
    discountPercent?: boolean
    discountStart?: boolean
    discountFinish?: boolean
    recordedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    gameVersionRegion?: boolean | GameVersionRegionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["price"]>

  export type PriceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    gameVersionRegionId?: boolean
    price?: boolean
    originalPrice?: boolean
    currency?: boolean
    type?: boolean
    hasDiscount?: boolean
    discountPercent?: boolean
    discountStart?: boolean
    discountFinish?: boolean
    recordedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    gameVersionRegion?: boolean | GameVersionRegionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["price"]>

  export type PriceSelectScalar = {
    id?: boolean
    gameVersionRegionId?: boolean
    price?: boolean
    originalPrice?: boolean
    currency?: boolean
    type?: boolean
    hasDiscount?: boolean
    discountPercent?: boolean
    discountStart?: boolean
    discountFinish?: boolean
    recordedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PriceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    gameVersionRegion?: boolean | GameVersionRegionDefaultArgs<ExtArgs>
  }
  export type PriceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    gameVersionRegion?: boolean | GameVersionRegionDefaultArgs<ExtArgs>
  }

  export type $PricePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Price"
    objects: {
      gameVersionRegion: Prisma.$GameVersionRegionPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      gameVersionRegionId: number
      price: Prisma.Decimal
      originalPrice: Prisma.Decimal | null
      currency: string
      type: $Enums.PriceType
      hasDiscount: boolean
      discountPercent: number | null
      discountStart: Date | null
      discountFinish: Date | null
      recordedAt: Date
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["price"]>
    composites: {}
  }

  type PriceGetPayload<S extends boolean | null | undefined | PriceDefaultArgs> = $Result.GetResult<Prisma.$PricePayload, S>

  type PriceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<PriceFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: PriceCountAggregateInputType | true
    }

  export interface PriceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Price'], meta: { name: 'Price' } }
    /**
     * Find zero or one Price that matches the filter.
     * @param {PriceFindUniqueArgs} args - Arguments to find a Price
     * @example
     * // Get one Price
     * const price = await prisma.price.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PriceFindUniqueArgs>(args: SelectSubset<T, PriceFindUniqueArgs<ExtArgs>>): Prisma__PriceClient<$Result.GetResult<Prisma.$PricePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Price that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {PriceFindUniqueOrThrowArgs} args - Arguments to find a Price
     * @example
     * // Get one Price
     * const price = await prisma.price.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PriceFindUniqueOrThrowArgs>(args: SelectSubset<T, PriceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PriceClient<$Result.GetResult<Prisma.$PricePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Price that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PriceFindFirstArgs} args - Arguments to find a Price
     * @example
     * // Get one Price
     * const price = await prisma.price.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PriceFindFirstArgs>(args?: SelectSubset<T, PriceFindFirstArgs<ExtArgs>>): Prisma__PriceClient<$Result.GetResult<Prisma.$PricePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Price that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PriceFindFirstOrThrowArgs} args - Arguments to find a Price
     * @example
     * // Get one Price
     * const price = await prisma.price.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PriceFindFirstOrThrowArgs>(args?: SelectSubset<T, PriceFindFirstOrThrowArgs<ExtArgs>>): Prisma__PriceClient<$Result.GetResult<Prisma.$PricePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Prices that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PriceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Prices
     * const prices = await prisma.price.findMany()
     * 
     * // Get first 10 Prices
     * const prices = await prisma.price.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const priceWithIdOnly = await prisma.price.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PriceFindManyArgs>(args?: SelectSubset<T, PriceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PricePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Price.
     * @param {PriceCreateArgs} args - Arguments to create a Price.
     * @example
     * // Create one Price
     * const Price = await prisma.price.create({
     *   data: {
     *     // ... data to create a Price
     *   }
     * })
     * 
     */
    create<T extends PriceCreateArgs>(args: SelectSubset<T, PriceCreateArgs<ExtArgs>>): Prisma__PriceClient<$Result.GetResult<Prisma.$PricePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Prices.
     * @param {PriceCreateManyArgs} args - Arguments to create many Prices.
     * @example
     * // Create many Prices
     * const price = await prisma.price.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PriceCreateManyArgs>(args?: SelectSubset<T, PriceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Prices and returns the data saved in the database.
     * @param {PriceCreateManyAndReturnArgs} args - Arguments to create many Prices.
     * @example
     * // Create many Prices
     * const price = await prisma.price.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Prices and only return the `id`
     * const priceWithIdOnly = await prisma.price.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PriceCreateManyAndReturnArgs>(args?: SelectSubset<T, PriceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PricePayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Price.
     * @param {PriceDeleteArgs} args - Arguments to delete one Price.
     * @example
     * // Delete one Price
     * const Price = await prisma.price.delete({
     *   where: {
     *     // ... filter to delete one Price
     *   }
     * })
     * 
     */
    delete<T extends PriceDeleteArgs>(args: SelectSubset<T, PriceDeleteArgs<ExtArgs>>): Prisma__PriceClient<$Result.GetResult<Prisma.$PricePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Price.
     * @param {PriceUpdateArgs} args - Arguments to update one Price.
     * @example
     * // Update one Price
     * const price = await prisma.price.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PriceUpdateArgs>(args: SelectSubset<T, PriceUpdateArgs<ExtArgs>>): Prisma__PriceClient<$Result.GetResult<Prisma.$PricePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Prices.
     * @param {PriceDeleteManyArgs} args - Arguments to filter Prices to delete.
     * @example
     * // Delete a few Prices
     * const { count } = await prisma.price.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PriceDeleteManyArgs>(args?: SelectSubset<T, PriceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Prices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PriceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Prices
     * const price = await prisma.price.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PriceUpdateManyArgs>(args: SelectSubset<T, PriceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Price.
     * @param {PriceUpsertArgs} args - Arguments to update or create a Price.
     * @example
     * // Update or create a Price
     * const price = await prisma.price.upsert({
     *   create: {
     *     // ... data to create a Price
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Price we want to update
     *   }
     * })
     */
    upsert<T extends PriceUpsertArgs>(args: SelectSubset<T, PriceUpsertArgs<ExtArgs>>): Prisma__PriceClient<$Result.GetResult<Prisma.$PricePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Prices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PriceCountArgs} args - Arguments to filter Prices to count.
     * @example
     * // Count the number of Prices
     * const count = await prisma.price.count({
     *   where: {
     *     // ... the filter for the Prices we want to count
     *   }
     * })
    **/
    count<T extends PriceCountArgs>(
      args?: Subset<T, PriceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PriceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Price.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PriceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PriceAggregateArgs>(args: Subset<T, PriceAggregateArgs>): Prisma.PrismaPromise<GetPriceAggregateType<T>>

    /**
     * Group by Price.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PriceGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PriceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PriceGroupByArgs['orderBy'] }
        : { orderBy?: PriceGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PriceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPriceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Price model
   */
  readonly fields: PriceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Price.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PriceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    gameVersionRegion<T extends GameVersionRegionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, GameVersionRegionDefaultArgs<ExtArgs>>): Prisma__GameVersionRegionClient<$Result.GetResult<Prisma.$GameVersionRegionPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Price model
   */ 
  interface PriceFieldRefs {
    readonly id: FieldRef<"Price", 'Int'>
    readonly gameVersionRegionId: FieldRef<"Price", 'Int'>
    readonly price: FieldRef<"Price", 'Decimal'>
    readonly originalPrice: FieldRef<"Price", 'Decimal'>
    readonly currency: FieldRef<"Price", 'String'>
    readonly type: FieldRef<"Price", 'PriceType'>
    readonly hasDiscount: FieldRef<"Price", 'Boolean'>
    readonly discountPercent: FieldRef<"Price", 'Int'>
    readonly discountStart: FieldRef<"Price", 'DateTime'>
    readonly discountFinish: FieldRef<"Price", 'DateTime'>
    readonly recordedAt: FieldRef<"Price", 'DateTime'>
    readonly createdAt: FieldRef<"Price", 'DateTime'>
    readonly updatedAt: FieldRef<"Price", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Price findUnique
   */
  export type PriceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Price
     */
    select?: PriceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PriceInclude<ExtArgs> | null
    /**
     * Filter, which Price to fetch.
     */
    where: PriceWhereUniqueInput
  }

  /**
   * Price findUniqueOrThrow
   */
  export type PriceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Price
     */
    select?: PriceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PriceInclude<ExtArgs> | null
    /**
     * Filter, which Price to fetch.
     */
    where: PriceWhereUniqueInput
  }

  /**
   * Price findFirst
   */
  export type PriceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Price
     */
    select?: PriceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PriceInclude<ExtArgs> | null
    /**
     * Filter, which Price to fetch.
     */
    where?: PriceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Prices to fetch.
     */
    orderBy?: PriceOrderByWithRelationInput | PriceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Prices.
     */
    cursor?: PriceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Prices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Prices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Prices.
     */
    distinct?: PriceScalarFieldEnum | PriceScalarFieldEnum[]
  }

  /**
   * Price findFirstOrThrow
   */
  export type PriceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Price
     */
    select?: PriceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PriceInclude<ExtArgs> | null
    /**
     * Filter, which Price to fetch.
     */
    where?: PriceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Prices to fetch.
     */
    orderBy?: PriceOrderByWithRelationInput | PriceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Prices.
     */
    cursor?: PriceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Prices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Prices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Prices.
     */
    distinct?: PriceScalarFieldEnum | PriceScalarFieldEnum[]
  }

  /**
   * Price findMany
   */
  export type PriceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Price
     */
    select?: PriceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PriceInclude<ExtArgs> | null
    /**
     * Filter, which Prices to fetch.
     */
    where?: PriceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Prices to fetch.
     */
    orderBy?: PriceOrderByWithRelationInput | PriceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Prices.
     */
    cursor?: PriceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Prices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Prices.
     */
    skip?: number
    distinct?: PriceScalarFieldEnum | PriceScalarFieldEnum[]
  }

  /**
   * Price create
   */
  export type PriceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Price
     */
    select?: PriceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PriceInclude<ExtArgs> | null
    /**
     * The data needed to create a Price.
     */
    data: XOR<PriceCreateInput, PriceUncheckedCreateInput>
  }

  /**
   * Price createMany
   */
  export type PriceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Prices.
     */
    data: PriceCreateManyInput | PriceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Price createManyAndReturn
   */
  export type PriceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Price
     */
    select?: PriceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Prices.
     */
    data: PriceCreateManyInput | PriceCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PriceIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Price update
   */
  export type PriceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Price
     */
    select?: PriceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PriceInclude<ExtArgs> | null
    /**
     * The data needed to update a Price.
     */
    data: XOR<PriceUpdateInput, PriceUncheckedUpdateInput>
    /**
     * Choose, which Price to update.
     */
    where: PriceWhereUniqueInput
  }

  /**
   * Price updateMany
   */
  export type PriceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Prices.
     */
    data: XOR<PriceUpdateManyMutationInput, PriceUncheckedUpdateManyInput>
    /**
     * Filter which Prices to update
     */
    where?: PriceWhereInput
  }

  /**
   * Price upsert
   */
  export type PriceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Price
     */
    select?: PriceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PriceInclude<ExtArgs> | null
    /**
     * The filter to search for the Price to update in case it exists.
     */
    where: PriceWhereUniqueInput
    /**
     * In case the Price found by the `where` argument doesn't exist, create a new Price with this data.
     */
    create: XOR<PriceCreateInput, PriceUncheckedCreateInput>
    /**
     * In case the Price was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PriceUpdateInput, PriceUncheckedUpdateInput>
  }

  /**
   * Price delete
   */
  export type PriceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Price
     */
    select?: PriceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PriceInclude<ExtArgs> | null
    /**
     * Filter which Price to delete.
     */
    where: PriceWhereUniqueInput
  }

  /**
   * Price deleteMany
   */
  export type PriceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Prices to delete
     */
    where?: PriceWhereInput
  }

  /**
   * Price without action
   */
  export type PriceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Price
     */
    select?: PriceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PriceInclude<ExtArgs> | null
  }


  /**
   * Model PriceHistory
   */

  export type AggregatePriceHistory = {
    _count: PriceHistoryCountAggregateOutputType | null
    _avg: PriceHistoryAvgAggregateOutputType | null
    _sum: PriceHistorySumAggregateOutputType | null
    _min: PriceHistoryMinAggregateOutputType | null
    _max: PriceHistoryMaxAggregateOutputType | null
  }

  export type PriceHistoryAvgAggregateOutputType = {
    id: number | null
    gameVersionRegionId: number | null
    price: Decimal | null
    originalPrice: Decimal | null
  }

  export type PriceHistorySumAggregateOutputType = {
    id: number | null
    gameVersionRegionId: number | null
    price: Decimal | null
    originalPrice: Decimal | null
  }

  export type PriceHistoryMinAggregateOutputType = {
    id: number | null
    gameVersionRegionId: number | null
    price: Decimal | null
    originalPrice: Decimal | null
    currency: string | null
    type: $Enums.PriceType | null
    recordedAt: Date | null
  }

  export type PriceHistoryMaxAggregateOutputType = {
    id: number | null
    gameVersionRegionId: number | null
    price: Decimal | null
    originalPrice: Decimal | null
    currency: string | null
    type: $Enums.PriceType | null
    recordedAt: Date | null
  }

  export type PriceHistoryCountAggregateOutputType = {
    id: number
    gameVersionRegionId: number
    price: number
    originalPrice: number
    currency: number
    type: number
    recordedAt: number
    _all: number
  }


  export type PriceHistoryAvgAggregateInputType = {
    id?: true
    gameVersionRegionId?: true
    price?: true
    originalPrice?: true
  }

  export type PriceHistorySumAggregateInputType = {
    id?: true
    gameVersionRegionId?: true
    price?: true
    originalPrice?: true
  }

  export type PriceHistoryMinAggregateInputType = {
    id?: true
    gameVersionRegionId?: true
    price?: true
    originalPrice?: true
    currency?: true
    type?: true
    recordedAt?: true
  }

  export type PriceHistoryMaxAggregateInputType = {
    id?: true
    gameVersionRegionId?: true
    price?: true
    originalPrice?: true
    currency?: true
    type?: true
    recordedAt?: true
  }

  export type PriceHistoryCountAggregateInputType = {
    id?: true
    gameVersionRegionId?: true
    price?: true
    originalPrice?: true
    currency?: true
    type?: true
    recordedAt?: true
    _all?: true
  }

  export type PriceHistoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PriceHistory to aggregate.
     */
    where?: PriceHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PriceHistories to fetch.
     */
    orderBy?: PriceHistoryOrderByWithRelationInput | PriceHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PriceHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PriceHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PriceHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PriceHistories
    **/
    _count?: true | PriceHistoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PriceHistoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PriceHistorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PriceHistoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PriceHistoryMaxAggregateInputType
  }

  export type GetPriceHistoryAggregateType<T extends PriceHistoryAggregateArgs> = {
        [P in keyof T & keyof AggregatePriceHistory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePriceHistory[P]>
      : GetScalarType<T[P], AggregatePriceHistory[P]>
  }




  export type PriceHistoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PriceHistoryWhereInput
    orderBy?: PriceHistoryOrderByWithAggregationInput | PriceHistoryOrderByWithAggregationInput[]
    by: PriceHistoryScalarFieldEnum[] | PriceHistoryScalarFieldEnum
    having?: PriceHistoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PriceHistoryCountAggregateInputType | true
    _avg?: PriceHistoryAvgAggregateInputType
    _sum?: PriceHistorySumAggregateInputType
    _min?: PriceHistoryMinAggregateInputType
    _max?: PriceHistoryMaxAggregateInputType
  }

  export type PriceHistoryGroupByOutputType = {
    id: number
    gameVersionRegionId: number
    price: Decimal
    originalPrice: Decimal | null
    currency: string
    type: $Enums.PriceType
    recordedAt: Date
    _count: PriceHistoryCountAggregateOutputType | null
    _avg: PriceHistoryAvgAggregateOutputType | null
    _sum: PriceHistorySumAggregateOutputType | null
    _min: PriceHistoryMinAggregateOutputType | null
    _max: PriceHistoryMaxAggregateOutputType | null
  }

  type GetPriceHistoryGroupByPayload<T extends PriceHistoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PriceHistoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PriceHistoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PriceHistoryGroupByOutputType[P]>
            : GetScalarType<T[P], PriceHistoryGroupByOutputType[P]>
        }
      >
    >


  export type PriceHistorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    gameVersionRegionId?: boolean
    price?: boolean
    originalPrice?: boolean
    currency?: boolean
    type?: boolean
    recordedAt?: boolean
    gameVersionRegion?: boolean | GameVersionRegionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["priceHistory"]>

  export type PriceHistorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    gameVersionRegionId?: boolean
    price?: boolean
    originalPrice?: boolean
    currency?: boolean
    type?: boolean
    recordedAt?: boolean
    gameVersionRegion?: boolean | GameVersionRegionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["priceHistory"]>

  export type PriceHistorySelectScalar = {
    id?: boolean
    gameVersionRegionId?: boolean
    price?: boolean
    originalPrice?: boolean
    currency?: boolean
    type?: boolean
    recordedAt?: boolean
  }

  export type PriceHistoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    gameVersionRegion?: boolean | GameVersionRegionDefaultArgs<ExtArgs>
  }
  export type PriceHistoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    gameVersionRegion?: boolean | GameVersionRegionDefaultArgs<ExtArgs>
  }

  export type $PriceHistoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PriceHistory"
    objects: {
      gameVersionRegion: Prisma.$GameVersionRegionPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      gameVersionRegionId: number
      price: Prisma.Decimal
      originalPrice: Prisma.Decimal | null
      currency: string
      type: $Enums.PriceType
      recordedAt: Date
    }, ExtArgs["result"]["priceHistory"]>
    composites: {}
  }

  type PriceHistoryGetPayload<S extends boolean | null | undefined | PriceHistoryDefaultArgs> = $Result.GetResult<Prisma.$PriceHistoryPayload, S>

  type PriceHistoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<PriceHistoryFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: PriceHistoryCountAggregateInputType | true
    }

  export interface PriceHistoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PriceHistory'], meta: { name: 'PriceHistory' } }
    /**
     * Find zero or one PriceHistory that matches the filter.
     * @param {PriceHistoryFindUniqueArgs} args - Arguments to find a PriceHistory
     * @example
     * // Get one PriceHistory
     * const priceHistory = await prisma.priceHistory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PriceHistoryFindUniqueArgs>(args: SelectSubset<T, PriceHistoryFindUniqueArgs<ExtArgs>>): Prisma__PriceHistoryClient<$Result.GetResult<Prisma.$PriceHistoryPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one PriceHistory that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {PriceHistoryFindUniqueOrThrowArgs} args - Arguments to find a PriceHistory
     * @example
     * // Get one PriceHistory
     * const priceHistory = await prisma.priceHistory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PriceHistoryFindUniqueOrThrowArgs>(args: SelectSubset<T, PriceHistoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PriceHistoryClient<$Result.GetResult<Prisma.$PriceHistoryPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first PriceHistory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PriceHistoryFindFirstArgs} args - Arguments to find a PriceHistory
     * @example
     * // Get one PriceHistory
     * const priceHistory = await prisma.priceHistory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PriceHistoryFindFirstArgs>(args?: SelectSubset<T, PriceHistoryFindFirstArgs<ExtArgs>>): Prisma__PriceHistoryClient<$Result.GetResult<Prisma.$PriceHistoryPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first PriceHistory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PriceHistoryFindFirstOrThrowArgs} args - Arguments to find a PriceHistory
     * @example
     * // Get one PriceHistory
     * const priceHistory = await prisma.priceHistory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PriceHistoryFindFirstOrThrowArgs>(args?: SelectSubset<T, PriceHistoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__PriceHistoryClient<$Result.GetResult<Prisma.$PriceHistoryPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more PriceHistories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PriceHistoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PriceHistories
     * const priceHistories = await prisma.priceHistory.findMany()
     * 
     * // Get first 10 PriceHistories
     * const priceHistories = await prisma.priceHistory.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const priceHistoryWithIdOnly = await prisma.priceHistory.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PriceHistoryFindManyArgs>(args?: SelectSubset<T, PriceHistoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PriceHistoryPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a PriceHistory.
     * @param {PriceHistoryCreateArgs} args - Arguments to create a PriceHistory.
     * @example
     * // Create one PriceHistory
     * const PriceHistory = await prisma.priceHistory.create({
     *   data: {
     *     // ... data to create a PriceHistory
     *   }
     * })
     * 
     */
    create<T extends PriceHistoryCreateArgs>(args: SelectSubset<T, PriceHistoryCreateArgs<ExtArgs>>): Prisma__PriceHistoryClient<$Result.GetResult<Prisma.$PriceHistoryPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many PriceHistories.
     * @param {PriceHistoryCreateManyArgs} args - Arguments to create many PriceHistories.
     * @example
     * // Create many PriceHistories
     * const priceHistory = await prisma.priceHistory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PriceHistoryCreateManyArgs>(args?: SelectSubset<T, PriceHistoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PriceHistories and returns the data saved in the database.
     * @param {PriceHistoryCreateManyAndReturnArgs} args - Arguments to create many PriceHistories.
     * @example
     * // Create many PriceHistories
     * const priceHistory = await prisma.priceHistory.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PriceHistories and only return the `id`
     * const priceHistoryWithIdOnly = await prisma.priceHistory.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PriceHistoryCreateManyAndReturnArgs>(args?: SelectSubset<T, PriceHistoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PriceHistoryPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a PriceHistory.
     * @param {PriceHistoryDeleteArgs} args - Arguments to delete one PriceHistory.
     * @example
     * // Delete one PriceHistory
     * const PriceHistory = await prisma.priceHistory.delete({
     *   where: {
     *     // ... filter to delete one PriceHistory
     *   }
     * })
     * 
     */
    delete<T extends PriceHistoryDeleteArgs>(args: SelectSubset<T, PriceHistoryDeleteArgs<ExtArgs>>): Prisma__PriceHistoryClient<$Result.GetResult<Prisma.$PriceHistoryPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one PriceHistory.
     * @param {PriceHistoryUpdateArgs} args - Arguments to update one PriceHistory.
     * @example
     * // Update one PriceHistory
     * const priceHistory = await prisma.priceHistory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PriceHistoryUpdateArgs>(args: SelectSubset<T, PriceHistoryUpdateArgs<ExtArgs>>): Prisma__PriceHistoryClient<$Result.GetResult<Prisma.$PriceHistoryPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more PriceHistories.
     * @param {PriceHistoryDeleteManyArgs} args - Arguments to filter PriceHistories to delete.
     * @example
     * // Delete a few PriceHistories
     * const { count } = await prisma.priceHistory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PriceHistoryDeleteManyArgs>(args?: SelectSubset<T, PriceHistoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PriceHistories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PriceHistoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PriceHistories
     * const priceHistory = await prisma.priceHistory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PriceHistoryUpdateManyArgs>(args: SelectSubset<T, PriceHistoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one PriceHistory.
     * @param {PriceHistoryUpsertArgs} args - Arguments to update or create a PriceHistory.
     * @example
     * // Update or create a PriceHistory
     * const priceHistory = await prisma.priceHistory.upsert({
     *   create: {
     *     // ... data to create a PriceHistory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PriceHistory we want to update
     *   }
     * })
     */
    upsert<T extends PriceHistoryUpsertArgs>(args: SelectSubset<T, PriceHistoryUpsertArgs<ExtArgs>>): Prisma__PriceHistoryClient<$Result.GetResult<Prisma.$PriceHistoryPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of PriceHistories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PriceHistoryCountArgs} args - Arguments to filter PriceHistories to count.
     * @example
     * // Count the number of PriceHistories
     * const count = await prisma.priceHistory.count({
     *   where: {
     *     // ... the filter for the PriceHistories we want to count
     *   }
     * })
    **/
    count<T extends PriceHistoryCountArgs>(
      args?: Subset<T, PriceHistoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PriceHistoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PriceHistory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PriceHistoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PriceHistoryAggregateArgs>(args: Subset<T, PriceHistoryAggregateArgs>): Prisma.PrismaPromise<GetPriceHistoryAggregateType<T>>

    /**
     * Group by PriceHistory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PriceHistoryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PriceHistoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PriceHistoryGroupByArgs['orderBy'] }
        : { orderBy?: PriceHistoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PriceHistoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPriceHistoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PriceHistory model
   */
  readonly fields: PriceHistoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PriceHistory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PriceHistoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    gameVersionRegion<T extends GameVersionRegionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, GameVersionRegionDefaultArgs<ExtArgs>>): Prisma__GameVersionRegionClient<$Result.GetResult<Prisma.$GameVersionRegionPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PriceHistory model
   */ 
  interface PriceHistoryFieldRefs {
    readonly id: FieldRef<"PriceHistory", 'Int'>
    readonly gameVersionRegionId: FieldRef<"PriceHistory", 'Int'>
    readonly price: FieldRef<"PriceHistory", 'Decimal'>
    readonly originalPrice: FieldRef<"PriceHistory", 'Decimal'>
    readonly currency: FieldRef<"PriceHistory", 'String'>
    readonly type: FieldRef<"PriceHistory", 'PriceType'>
    readonly recordedAt: FieldRef<"PriceHistory", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PriceHistory findUnique
   */
  export type PriceHistoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PriceHistory
     */
    select?: PriceHistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PriceHistoryInclude<ExtArgs> | null
    /**
     * Filter, which PriceHistory to fetch.
     */
    where: PriceHistoryWhereUniqueInput
  }

  /**
   * PriceHistory findUniqueOrThrow
   */
  export type PriceHistoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PriceHistory
     */
    select?: PriceHistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PriceHistoryInclude<ExtArgs> | null
    /**
     * Filter, which PriceHistory to fetch.
     */
    where: PriceHistoryWhereUniqueInput
  }

  /**
   * PriceHistory findFirst
   */
  export type PriceHistoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PriceHistory
     */
    select?: PriceHistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PriceHistoryInclude<ExtArgs> | null
    /**
     * Filter, which PriceHistory to fetch.
     */
    where?: PriceHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PriceHistories to fetch.
     */
    orderBy?: PriceHistoryOrderByWithRelationInput | PriceHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PriceHistories.
     */
    cursor?: PriceHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PriceHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PriceHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PriceHistories.
     */
    distinct?: PriceHistoryScalarFieldEnum | PriceHistoryScalarFieldEnum[]
  }

  /**
   * PriceHistory findFirstOrThrow
   */
  export type PriceHistoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PriceHistory
     */
    select?: PriceHistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PriceHistoryInclude<ExtArgs> | null
    /**
     * Filter, which PriceHistory to fetch.
     */
    where?: PriceHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PriceHistories to fetch.
     */
    orderBy?: PriceHistoryOrderByWithRelationInput | PriceHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PriceHistories.
     */
    cursor?: PriceHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PriceHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PriceHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PriceHistories.
     */
    distinct?: PriceHistoryScalarFieldEnum | PriceHistoryScalarFieldEnum[]
  }

  /**
   * PriceHistory findMany
   */
  export type PriceHistoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PriceHistory
     */
    select?: PriceHistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PriceHistoryInclude<ExtArgs> | null
    /**
     * Filter, which PriceHistories to fetch.
     */
    where?: PriceHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PriceHistories to fetch.
     */
    orderBy?: PriceHistoryOrderByWithRelationInput | PriceHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PriceHistories.
     */
    cursor?: PriceHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PriceHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PriceHistories.
     */
    skip?: number
    distinct?: PriceHistoryScalarFieldEnum | PriceHistoryScalarFieldEnum[]
  }

  /**
   * PriceHistory create
   */
  export type PriceHistoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PriceHistory
     */
    select?: PriceHistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PriceHistoryInclude<ExtArgs> | null
    /**
     * The data needed to create a PriceHistory.
     */
    data: XOR<PriceHistoryCreateInput, PriceHistoryUncheckedCreateInput>
  }

  /**
   * PriceHistory createMany
   */
  export type PriceHistoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PriceHistories.
     */
    data: PriceHistoryCreateManyInput | PriceHistoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PriceHistory createManyAndReturn
   */
  export type PriceHistoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PriceHistory
     */
    select?: PriceHistorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many PriceHistories.
     */
    data: PriceHistoryCreateManyInput | PriceHistoryCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PriceHistoryIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PriceHistory update
   */
  export type PriceHistoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PriceHistory
     */
    select?: PriceHistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PriceHistoryInclude<ExtArgs> | null
    /**
     * The data needed to update a PriceHistory.
     */
    data: XOR<PriceHistoryUpdateInput, PriceHistoryUncheckedUpdateInput>
    /**
     * Choose, which PriceHistory to update.
     */
    where: PriceHistoryWhereUniqueInput
  }

  /**
   * PriceHistory updateMany
   */
  export type PriceHistoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PriceHistories.
     */
    data: XOR<PriceHistoryUpdateManyMutationInput, PriceHistoryUncheckedUpdateManyInput>
    /**
     * Filter which PriceHistories to update
     */
    where?: PriceHistoryWhereInput
  }

  /**
   * PriceHistory upsert
   */
  export type PriceHistoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PriceHistory
     */
    select?: PriceHistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PriceHistoryInclude<ExtArgs> | null
    /**
     * The filter to search for the PriceHistory to update in case it exists.
     */
    where: PriceHistoryWhereUniqueInput
    /**
     * In case the PriceHistory found by the `where` argument doesn't exist, create a new PriceHistory with this data.
     */
    create: XOR<PriceHistoryCreateInput, PriceHistoryUncheckedCreateInput>
    /**
     * In case the PriceHistory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PriceHistoryUpdateInput, PriceHistoryUncheckedUpdateInput>
  }

  /**
   * PriceHistory delete
   */
  export type PriceHistoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PriceHistory
     */
    select?: PriceHistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PriceHistoryInclude<ExtArgs> | null
    /**
     * Filter which PriceHistory to delete.
     */
    where: PriceHistoryWhereUniqueInput
  }

  /**
   * PriceHistory deleteMany
   */
  export type PriceHistoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PriceHistories to delete
     */
    where?: PriceHistoryWhereInput
  }

  /**
   * PriceHistory without action
   */
  export type PriceHistoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PriceHistory
     */
    select?: PriceHistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PriceHistoryInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const GameScalarFieldEnum: {
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

  export type GameScalarFieldEnum = (typeof GameScalarFieldEnum)[keyof typeof GameScalarFieldEnum]


  export const LanguageScalarFieldEnum: {
    id: 'id',
    code: 'code',
    name: 'name'
  };

  export type LanguageScalarFieldEnum = (typeof LanguageScalarFieldEnum)[keyof typeof LanguageScalarFieldEnum]


  export const GameLanguageSupportScalarFieldEnum: {
    id: 'id',
    gameId: 'gameId',
    languageId: 'languageId',
    languageType: 'languageType',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type GameLanguageSupportScalarFieldEnum = (typeof GameLanguageSupportScalarFieldEnum)[keyof typeof GameLanguageSupportScalarFieldEnum]


  export const GameImageScalarFieldEnum: {
    id: 'id',
    url: 'url',
    type: 'type',
    gameId: 'gameId'
  };

  export type GameImageScalarFieldEnum = (typeof GameImageScalarFieldEnum)[keyof typeof GameImageScalarFieldEnum]


  export const PsPlusScalarFieldEnum: {
    id: 'id',
    gameId: 'gameId',
    type: 'type'
  };

  export type PsPlusScalarFieldEnum = (typeof PsPlusScalarFieldEnum)[keyof typeof PsPlusScalarFieldEnum]


  export const GameEditionScalarFieldEnum: {
    id: 'id',
    name: 'name',
    gameId: 'gameId'
  };

  export type GameEditionScalarFieldEnum = (typeof GameEditionScalarFieldEnum)[keyof typeof GameEditionScalarFieldEnum]


  export const RegionScalarFieldEnum: {
    id: 'id',
    code: 'code',
    name: 'name',
    currency: 'currency'
  };

  export type RegionScalarFieldEnum = (typeof RegionScalarFieldEnum)[keyof typeof RegionScalarFieldEnum]


  export const GameVersionScalarFieldEnum: {
    SKU: 'SKU',
    gameId: 'gameId',
    editionId: 'editionId',
    platform: 'platform',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type GameVersionScalarFieldEnum = (typeof GameVersionScalarFieldEnum)[keyof typeof GameVersionScalarFieldEnum]


  export const GameRegionScalarFieldEnum: {
    id: 'id',
    regionId: 'regionId',
    gameId: 'gameId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type GameRegionScalarFieldEnum = (typeof GameRegionScalarFieldEnum)[keyof typeof GameRegionScalarFieldEnum]


  export const GameVersionRegionScalarFieldEnum: {
    id: 'id',
    SKU: 'SKU',
    gameRegionId: 'gameRegionId',
    storeUrl: 'storeUrl',
    isAvailable: 'isAvailable',
    lastChecked: 'lastChecked',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type GameVersionRegionScalarFieldEnum = (typeof GameVersionRegionScalarFieldEnum)[keyof typeof GameVersionRegionScalarFieldEnum]


  export const PriceScalarFieldEnum: {
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

  export type PriceScalarFieldEnum = (typeof PriceScalarFieldEnum)[keyof typeof PriceScalarFieldEnum]


  export const PriceHistoryScalarFieldEnum: {
    id: 'id',
    gameVersionRegionId: 'gameVersionRegionId',
    price: 'price',
    originalPrice: 'originalPrice',
    currency: 'currency',
    type: 'type',
    recordedAt: 'recordedAt'
  };

  export type PriceHistoryScalarFieldEnum = (typeof PriceHistoryScalarFieldEnum)[keyof typeof PriceHistoryScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'ReleaseStatus'
   */
  export type EnumReleaseStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ReleaseStatus'>
    


  /**
   * Reference to a field of type 'ReleaseStatus[]'
   */
  export type ListEnumReleaseStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ReleaseStatus[]'>
    


  /**
   * Reference to a field of type 'LanguageType'
   */
  export type EnumLanguageTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'LanguageType'>
    


  /**
   * Reference to a field of type 'LanguageType[]'
   */
  export type ListEnumLanguageTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'LanguageType[]'>
    


  /**
   * Reference to a field of type 'ImageType'
   */
  export type EnumImageTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ImageType'>
    


  /**
   * Reference to a field of type 'ImageType[]'
   */
  export type ListEnumImageTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ImageType[]'>
    


  /**
   * Reference to a field of type 'PsPlusType'
   */
  export type EnumPsPlusTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PsPlusType'>
    


  /**
   * Reference to a field of type 'PsPlusType[]'
   */
  export type ListEnumPsPlusTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PsPlusType[]'>
    


  /**
   * Reference to a field of type 'Platform'
   */
  export type EnumPlatformFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Platform'>
    


  /**
   * Reference to a field of type 'Platform[]'
   */
  export type ListEnumPlatformFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Platform[]'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


  /**
   * Reference to a field of type 'PriceType'
   */
  export type EnumPriceTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PriceType'>
    


  /**
   * Reference to a field of type 'PriceType[]'
   */
  export type ListEnumPriceTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PriceType[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type GameWhereInput = {
    AND?: GameWhereInput | GameWhereInput[]
    OR?: GameWhereInput[]
    NOT?: GameWhereInput | GameWhereInput[]
    id?: StringFilter<"Game"> | string
    psnId?: StringFilter<"Game"> | string
    slug?: StringNullableFilter<"Game"> | string | null
    title?: StringFilter<"Game"> | string
    fullUrl?: StringNullableFilter<"Game"> | string | null
    rating?: IntNullableFilter<"Game"> | number | null
    genre?: StringNullableFilter<"Game"> | string | null
    publisher?: StringNullableFilter<"Game"> | string | null
    isFreeToPlay?: BoolNullableFilter<"Game"> | boolean | null
    releaseDate?: DateTimeNullableFilter<"Game"> | Date | string | null
    releaseStatus?: EnumReleaseStatusFilter<"Game"> | $Enums.ReleaseStatus
    createdAt?: DateTimeFilter<"Game"> | Date | string
    updatedAt?: DateTimeFilter<"Game"> | Date | string
    GameLanguageSupport?: GameLanguageSupportListRelationFilter
    GameImage?: GameImageListRelationFilter
    PsPlus?: PsPlusListRelationFilter
    GameEdition?: GameEditionListRelationFilter
    GameVersion?: GameVersionListRelationFilter
    GameRegion?: GameRegionListRelationFilter
  }

  export type GameOrderByWithRelationInput = {
    id?: SortOrder
    psnId?: SortOrder
    slug?: SortOrderInput | SortOrder
    title?: SortOrder
    fullUrl?: SortOrderInput | SortOrder
    rating?: SortOrderInput | SortOrder
    genre?: SortOrderInput | SortOrder
    publisher?: SortOrderInput | SortOrder
    isFreeToPlay?: SortOrderInput | SortOrder
    releaseDate?: SortOrderInput | SortOrder
    releaseStatus?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    GameLanguageSupport?: GameLanguageSupportOrderByRelationAggregateInput
    GameImage?: GameImageOrderByRelationAggregateInput
    PsPlus?: PsPlusOrderByRelationAggregateInput
    GameEdition?: GameEditionOrderByRelationAggregateInput
    GameVersion?: GameVersionOrderByRelationAggregateInput
    GameRegion?: GameRegionOrderByRelationAggregateInput
  }

  export type GameWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    psnId?: string
    fullUrl?: string
    AND?: GameWhereInput | GameWhereInput[]
    OR?: GameWhereInput[]
    NOT?: GameWhereInput | GameWhereInput[]
    slug?: StringNullableFilter<"Game"> | string | null
    title?: StringFilter<"Game"> | string
    rating?: IntNullableFilter<"Game"> | number | null
    genre?: StringNullableFilter<"Game"> | string | null
    publisher?: StringNullableFilter<"Game"> | string | null
    isFreeToPlay?: BoolNullableFilter<"Game"> | boolean | null
    releaseDate?: DateTimeNullableFilter<"Game"> | Date | string | null
    releaseStatus?: EnumReleaseStatusFilter<"Game"> | $Enums.ReleaseStatus
    createdAt?: DateTimeFilter<"Game"> | Date | string
    updatedAt?: DateTimeFilter<"Game"> | Date | string
    GameLanguageSupport?: GameLanguageSupportListRelationFilter
    GameImage?: GameImageListRelationFilter
    PsPlus?: PsPlusListRelationFilter
    GameEdition?: GameEditionListRelationFilter
    GameVersion?: GameVersionListRelationFilter
    GameRegion?: GameRegionListRelationFilter
  }, "id" | "psnId" | "fullUrl">

  export type GameOrderByWithAggregationInput = {
    id?: SortOrder
    psnId?: SortOrder
    slug?: SortOrderInput | SortOrder
    title?: SortOrder
    fullUrl?: SortOrderInput | SortOrder
    rating?: SortOrderInput | SortOrder
    genre?: SortOrderInput | SortOrder
    publisher?: SortOrderInput | SortOrder
    isFreeToPlay?: SortOrderInput | SortOrder
    releaseDate?: SortOrderInput | SortOrder
    releaseStatus?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: GameCountOrderByAggregateInput
    _avg?: GameAvgOrderByAggregateInput
    _max?: GameMaxOrderByAggregateInput
    _min?: GameMinOrderByAggregateInput
    _sum?: GameSumOrderByAggregateInput
  }

  export type GameScalarWhereWithAggregatesInput = {
    AND?: GameScalarWhereWithAggregatesInput | GameScalarWhereWithAggregatesInput[]
    OR?: GameScalarWhereWithAggregatesInput[]
    NOT?: GameScalarWhereWithAggregatesInput | GameScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Game"> | string
    psnId?: StringWithAggregatesFilter<"Game"> | string
    slug?: StringNullableWithAggregatesFilter<"Game"> | string | null
    title?: StringWithAggregatesFilter<"Game"> | string
    fullUrl?: StringNullableWithAggregatesFilter<"Game"> | string | null
    rating?: IntNullableWithAggregatesFilter<"Game"> | number | null
    genre?: StringNullableWithAggregatesFilter<"Game"> | string | null
    publisher?: StringNullableWithAggregatesFilter<"Game"> | string | null
    isFreeToPlay?: BoolNullableWithAggregatesFilter<"Game"> | boolean | null
    releaseDate?: DateTimeNullableWithAggregatesFilter<"Game"> | Date | string | null
    releaseStatus?: EnumReleaseStatusWithAggregatesFilter<"Game"> | $Enums.ReleaseStatus
    createdAt?: DateTimeWithAggregatesFilter<"Game"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Game"> | Date | string
  }

  export type LanguageWhereInput = {
    AND?: LanguageWhereInput | LanguageWhereInput[]
    OR?: LanguageWhereInput[]
    NOT?: LanguageWhereInput | LanguageWhereInput[]
    id?: IntFilter<"Language"> | number
    code?: StringFilter<"Language"> | string
    name?: StringFilter<"Language"> | string
    GameLanguageSupport?: GameLanguageSupportListRelationFilter
  }

  export type LanguageOrderByWithRelationInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
    GameLanguageSupport?: GameLanguageSupportOrderByRelationAggregateInput
  }

  export type LanguageWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    code?: string
    AND?: LanguageWhereInput | LanguageWhereInput[]
    OR?: LanguageWhereInput[]
    NOT?: LanguageWhereInput | LanguageWhereInput[]
    name?: StringFilter<"Language"> | string
    GameLanguageSupport?: GameLanguageSupportListRelationFilter
  }, "id" | "code">

  export type LanguageOrderByWithAggregationInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
    _count?: LanguageCountOrderByAggregateInput
    _avg?: LanguageAvgOrderByAggregateInput
    _max?: LanguageMaxOrderByAggregateInput
    _min?: LanguageMinOrderByAggregateInput
    _sum?: LanguageSumOrderByAggregateInput
  }

  export type LanguageScalarWhereWithAggregatesInput = {
    AND?: LanguageScalarWhereWithAggregatesInput | LanguageScalarWhereWithAggregatesInput[]
    OR?: LanguageScalarWhereWithAggregatesInput[]
    NOT?: LanguageScalarWhereWithAggregatesInput | LanguageScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Language"> | number
    code?: StringWithAggregatesFilter<"Language"> | string
    name?: StringWithAggregatesFilter<"Language"> | string
  }

  export type GameLanguageSupportWhereInput = {
    AND?: GameLanguageSupportWhereInput | GameLanguageSupportWhereInput[]
    OR?: GameLanguageSupportWhereInput[]
    NOT?: GameLanguageSupportWhereInput | GameLanguageSupportWhereInput[]
    id?: IntFilter<"GameLanguageSupport"> | number
    gameId?: StringFilter<"GameLanguageSupport"> | string
    languageId?: IntFilter<"GameLanguageSupport"> | number
    languageType?: EnumLanguageTypeFilter<"GameLanguageSupport"> | $Enums.LanguageType
    createdAt?: DateTimeFilter<"GameLanguageSupport"> | Date | string
    updatedAt?: DateTimeFilter<"GameLanguageSupport"> | Date | string
    game?: XOR<GameRelationFilter, GameWhereInput>
    language?: XOR<LanguageRelationFilter, LanguageWhereInput>
  }

  export type GameLanguageSupportOrderByWithRelationInput = {
    id?: SortOrder
    gameId?: SortOrder
    languageId?: SortOrder
    languageType?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    game?: GameOrderByWithRelationInput
    language?: LanguageOrderByWithRelationInput
  }

  export type GameLanguageSupportWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    gameId_languageId_languageType?: GameLanguageSupportGameIdLanguageIdLanguageTypeCompoundUniqueInput
    AND?: GameLanguageSupportWhereInput | GameLanguageSupportWhereInput[]
    OR?: GameLanguageSupportWhereInput[]
    NOT?: GameLanguageSupportWhereInput | GameLanguageSupportWhereInput[]
    gameId?: StringFilter<"GameLanguageSupport"> | string
    languageId?: IntFilter<"GameLanguageSupport"> | number
    languageType?: EnumLanguageTypeFilter<"GameLanguageSupport"> | $Enums.LanguageType
    createdAt?: DateTimeFilter<"GameLanguageSupport"> | Date | string
    updatedAt?: DateTimeFilter<"GameLanguageSupport"> | Date | string
    game?: XOR<GameRelationFilter, GameWhereInput>
    language?: XOR<LanguageRelationFilter, LanguageWhereInput>
  }, "id" | "gameId_languageId_languageType">

  export type GameLanguageSupportOrderByWithAggregationInput = {
    id?: SortOrder
    gameId?: SortOrder
    languageId?: SortOrder
    languageType?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: GameLanguageSupportCountOrderByAggregateInput
    _avg?: GameLanguageSupportAvgOrderByAggregateInput
    _max?: GameLanguageSupportMaxOrderByAggregateInput
    _min?: GameLanguageSupportMinOrderByAggregateInput
    _sum?: GameLanguageSupportSumOrderByAggregateInput
  }

  export type GameLanguageSupportScalarWhereWithAggregatesInput = {
    AND?: GameLanguageSupportScalarWhereWithAggregatesInput | GameLanguageSupportScalarWhereWithAggregatesInput[]
    OR?: GameLanguageSupportScalarWhereWithAggregatesInput[]
    NOT?: GameLanguageSupportScalarWhereWithAggregatesInput | GameLanguageSupportScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"GameLanguageSupport"> | number
    gameId?: StringWithAggregatesFilter<"GameLanguageSupport"> | string
    languageId?: IntWithAggregatesFilter<"GameLanguageSupport"> | number
    languageType?: EnumLanguageTypeWithAggregatesFilter<"GameLanguageSupport"> | $Enums.LanguageType
    createdAt?: DateTimeWithAggregatesFilter<"GameLanguageSupport"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"GameLanguageSupport"> | Date | string
  }

  export type GameImageWhereInput = {
    AND?: GameImageWhereInput | GameImageWhereInput[]
    OR?: GameImageWhereInput[]
    NOT?: GameImageWhereInput | GameImageWhereInput[]
    id?: IntFilter<"GameImage"> | number
    url?: StringNullableFilter<"GameImage"> | string | null
    type?: EnumImageTypeFilter<"GameImage"> | $Enums.ImageType
    gameId?: StringFilter<"GameImage"> | string
    game?: XOR<GameRelationFilter, GameWhereInput>
  }

  export type GameImageOrderByWithRelationInput = {
    id?: SortOrder
    url?: SortOrderInput | SortOrder
    type?: SortOrder
    gameId?: SortOrder
    game?: GameOrderByWithRelationInput
  }

  export type GameImageWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: GameImageWhereInput | GameImageWhereInput[]
    OR?: GameImageWhereInput[]
    NOT?: GameImageWhereInput | GameImageWhereInput[]
    url?: StringNullableFilter<"GameImage"> | string | null
    type?: EnumImageTypeFilter<"GameImage"> | $Enums.ImageType
    gameId?: StringFilter<"GameImage"> | string
    game?: XOR<GameRelationFilter, GameWhereInput>
  }, "id">

  export type GameImageOrderByWithAggregationInput = {
    id?: SortOrder
    url?: SortOrderInput | SortOrder
    type?: SortOrder
    gameId?: SortOrder
    _count?: GameImageCountOrderByAggregateInput
    _avg?: GameImageAvgOrderByAggregateInput
    _max?: GameImageMaxOrderByAggregateInput
    _min?: GameImageMinOrderByAggregateInput
    _sum?: GameImageSumOrderByAggregateInput
  }

  export type GameImageScalarWhereWithAggregatesInput = {
    AND?: GameImageScalarWhereWithAggregatesInput | GameImageScalarWhereWithAggregatesInput[]
    OR?: GameImageScalarWhereWithAggregatesInput[]
    NOT?: GameImageScalarWhereWithAggregatesInput | GameImageScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"GameImage"> | number
    url?: StringNullableWithAggregatesFilter<"GameImage"> | string | null
    type?: EnumImageTypeWithAggregatesFilter<"GameImage"> | $Enums.ImageType
    gameId?: StringWithAggregatesFilter<"GameImage"> | string
  }

  export type PsPlusWhereInput = {
    AND?: PsPlusWhereInput | PsPlusWhereInput[]
    OR?: PsPlusWhereInput[]
    NOT?: PsPlusWhereInput | PsPlusWhereInput[]
    id?: StringFilter<"PsPlus"> | string
    gameId?: StringFilter<"PsPlus"> | string
    type?: EnumPsPlusTypeFilter<"PsPlus"> | $Enums.PsPlusType
    game?: XOR<GameRelationFilter, GameWhereInput>
  }

  export type PsPlusOrderByWithRelationInput = {
    id?: SortOrder
    gameId?: SortOrder
    type?: SortOrder
    game?: GameOrderByWithRelationInput
  }

  export type PsPlusWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PsPlusWhereInput | PsPlusWhereInput[]
    OR?: PsPlusWhereInput[]
    NOT?: PsPlusWhereInput | PsPlusWhereInput[]
    gameId?: StringFilter<"PsPlus"> | string
    type?: EnumPsPlusTypeFilter<"PsPlus"> | $Enums.PsPlusType
    game?: XOR<GameRelationFilter, GameWhereInput>
  }, "id">

  export type PsPlusOrderByWithAggregationInput = {
    id?: SortOrder
    gameId?: SortOrder
    type?: SortOrder
    _count?: PsPlusCountOrderByAggregateInput
    _max?: PsPlusMaxOrderByAggregateInput
    _min?: PsPlusMinOrderByAggregateInput
  }

  export type PsPlusScalarWhereWithAggregatesInput = {
    AND?: PsPlusScalarWhereWithAggregatesInput | PsPlusScalarWhereWithAggregatesInput[]
    OR?: PsPlusScalarWhereWithAggregatesInput[]
    NOT?: PsPlusScalarWhereWithAggregatesInput | PsPlusScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PsPlus"> | string
    gameId?: StringWithAggregatesFilter<"PsPlus"> | string
    type?: EnumPsPlusTypeWithAggregatesFilter<"PsPlus"> | $Enums.PsPlusType
  }

  export type GameEditionWhereInput = {
    AND?: GameEditionWhereInput | GameEditionWhereInput[]
    OR?: GameEditionWhereInput[]
    NOT?: GameEditionWhereInput | GameEditionWhereInput[]
    id?: IntFilter<"GameEdition"> | number
    name?: StringFilter<"GameEdition"> | string
    gameId?: StringFilter<"GameEdition"> | string
    game?: XOR<GameRelationFilter, GameWhereInput>
    GameVersion?: GameVersionListRelationFilter
  }

  export type GameEditionOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    gameId?: SortOrder
    game?: GameOrderByWithRelationInput
    GameVersion?: GameVersionOrderByRelationAggregateInput
  }

  export type GameEditionWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: GameEditionWhereInput | GameEditionWhereInput[]
    OR?: GameEditionWhereInput[]
    NOT?: GameEditionWhereInput | GameEditionWhereInput[]
    name?: StringFilter<"GameEdition"> | string
    gameId?: StringFilter<"GameEdition"> | string
    game?: XOR<GameRelationFilter, GameWhereInput>
    GameVersion?: GameVersionListRelationFilter
  }, "id">

  export type GameEditionOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    gameId?: SortOrder
    _count?: GameEditionCountOrderByAggregateInput
    _avg?: GameEditionAvgOrderByAggregateInput
    _max?: GameEditionMaxOrderByAggregateInput
    _min?: GameEditionMinOrderByAggregateInput
    _sum?: GameEditionSumOrderByAggregateInput
  }

  export type GameEditionScalarWhereWithAggregatesInput = {
    AND?: GameEditionScalarWhereWithAggregatesInput | GameEditionScalarWhereWithAggregatesInput[]
    OR?: GameEditionScalarWhereWithAggregatesInput[]
    NOT?: GameEditionScalarWhereWithAggregatesInput | GameEditionScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"GameEdition"> | number
    name?: StringWithAggregatesFilter<"GameEdition"> | string
    gameId?: StringWithAggregatesFilter<"GameEdition"> | string
  }

  export type RegionWhereInput = {
    AND?: RegionWhereInput | RegionWhereInput[]
    OR?: RegionWhereInput[]
    NOT?: RegionWhereInput | RegionWhereInput[]
    id?: IntFilter<"Region"> | number
    code?: StringFilter<"Region"> | string
    name?: StringFilter<"Region"> | string
    currency?: StringFilter<"Region"> | string
    GameRegion?: GameRegionListRelationFilter
  }

  export type RegionOrderByWithRelationInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
    currency?: SortOrder
    GameRegion?: GameRegionOrderByRelationAggregateInput
  }

  export type RegionWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: RegionWhereInput | RegionWhereInput[]
    OR?: RegionWhereInput[]
    NOT?: RegionWhereInput | RegionWhereInput[]
    code?: StringFilter<"Region"> | string
    name?: StringFilter<"Region"> | string
    currency?: StringFilter<"Region"> | string
    GameRegion?: GameRegionListRelationFilter
  }, "id">

  export type RegionOrderByWithAggregationInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
    currency?: SortOrder
    _count?: RegionCountOrderByAggregateInput
    _avg?: RegionAvgOrderByAggregateInput
    _max?: RegionMaxOrderByAggregateInput
    _min?: RegionMinOrderByAggregateInput
    _sum?: RegionSumOrderByAggregateInput
  }

  export type RegionScalarWhereWithAggregatesInput = {
    AND?: RegionScalarWhereWithAggregatesInput | RegionScalarWhereWithAggregatesInput[]
    OR?: RegionScalarWhereWithAggregatesInput[]
    NOT?: RegionScalarWhereWithAggregatesInput | RegionScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Region"> | number
    code?: StringWithAggregatesFilter<"Region"> | string
    name?: StringWithAggregatesFilter<"Region"> | string
    currency?: StringWithAggregatesFilter<"Region"> | string
  }

  export type GameVersionWhereInput = {
    AND?: GameVersionWhereInput | GameVersionWhereInput[]
    OR?: GameVersionWhereInput[]
    NOT?: GameVersionWhereInput | GameVersionWhereInput[]
    SKU?: StringFilter<"GameVersion"> | string
    gameId?: StringFilter<"GameVersion"> | string
    editionId?: IntFilter<"GameVersion"> | number
    platform?: EnumPlatformFilter<"GameVersion"> | $Enums.Platform
    createdAt?: DateTimeFilter<"GameVersion"> | Date | string
    updatedAt?: DateTimeFilter<"GameVersion"> | Date | string
    game?: XOR<GameRelationFilter, GameWhereInput>
    edition?: XOR<GameEditionRelationFilter, GameEditionWhereInput>
    GameVersionRegion?: GameVersionRegionListRelationFilter
  }

  export type GameVersionOrderByWithRelationInput = {
    SKU?: SortOrder
    gameId?: SortOrder
    editionId?: SortOrder
    platform?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    game?: GameOrderByWithRelationInput
    edition?: GameEditionOrderByWithRelationInput
    GameVersionRegion?: GameVersionRegionOrderByRelationAggregateInput
  }

  export type GameVersionWhereUniqueInput = Prisma.AtLeast<{
    SKU?: string
    gameId_editionId_platform?: GameVersionGameIdEditionIdPlatformCompoundUniqueInput
    AND?: GameVersionWhereInput | GameVersionWhereInput[]
    OR?: GameVersionWhereInput[]
    NOT?: GameVersionWhereInput | GameVersionWhereInput[]
    gameId?: StringFilter<"GameVersion"> | string
    editionId?: IntFilter<"GameVersion"> | number
    platform?: EnumPlatformFilter<"GameVersion"> | $Enums.Platform
    createdAt?: DateTimeFilter<"GameVersion"> | Date | string
    updatedAt?: DateTimeFilter<"GameVersion"> | Date | string
    game?: XOR<GameRelationFilter, GameWhereInput>
    edition?: XOR<GameEditionRelationFilter, GameEditionWhereInput>
    GameVersionRegion?: GameVersionRegionListRelationFilter
  }, "SKU" | "gameId_editionId_platform">

  export type GameVersionOrderByWithAggregationInput = {
    SKU?: SortOrder
    gameId?: SortOrder
    editionId?: SortOrder
    platform?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: GameVersionCountOrderByAggregateInput
    _avg?: GameVersionAvgOrderByAggregateInput
    _max?: GameVersionMaxOrderByAggregateInput
    _min?: GameVersionMinOrderByAggregateInput
    _sum?: GameVersionSumOrderByAggregateInput
  }

  export type GameVersionScalarWhereWithAggregatesInput = {
    AND?: GameVersionScalarWhereWithAggregatesInput | GameVersionScalarWhereWithAggregatesInput[]
    OR?: GameVersionScalarWhereWithAggregatesInput[]
    NOT?: GameVersionScalarWhereWithAggregatesInput | GameVersionScalarWhereWithAggregatesInput[]
    SKU?: StringWithAggregatesFilter<"GameVersion"> | string
    gameId?: StringWithAggregatesFilter<"GameVersion"> | string
    editionId?: IntWithAggregatesFilter<"GameVersion"> | number
    platform?: EnumPlatformWithAggregatesFilter<"GameVersion"> | $Enums.Platform
    createdAt?: DateTimeWithAggregatesFilter<"GameVersion"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"GameVersion"> | Date | string
  }

  export type GameRegionWhereInput = {
    AND?: GameRegionWhereInput | GameRegionWhereInput[]
    OR?: GameRegionWhereInput[]
    NOT?: GameRegionWhereInput | GameRegionWhereInput[]
    id?: IntFilter<"GameRegion"> | number
    regionId?: IntFilter<"GameRegion"> | number
    gameId?: StringFilter<"GameRegion"> | string
    createdAt?: DateTimeFilter<"GameRegion"> | Date | string
    updatedAt?: DateTimeFilter<"GameRegion"> | Date | string
    game?: XOR<GameRelationFilter, GameWhereInput>
    region?: XOR<RegionRelationFilter, RegionWhereInput>
    versionRegions?: GameVersionRegionListRelationFilter
  }

  export type GameRegionOrderByWithRelationInput = {
    id?: SortOrder
    regionId?: SortOrder
    gameId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    game?: GameOrderByWithRelationInput
    region?: RegionOrderByWithRelationInput
    versionRegions?: GameVersionRegionOrderByRelationAggregateInput
  }

  export type GameRegionWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    regionId_gameId?: GameRegionRegionIdGameIdCompoundUniqueInput
    AND?: GameRegionWhereInput | GameRegionWhereInput[]
    OR?: GameRegionWhereInput[]
    NOT?: GameRegionWhereInput | GameRegionWhereInput[]
    regionId?: IntFilter<"GameRegion"> | number
    gameId?: StringFilter<"GameRegion"> | string
    createdAt?: DateTimeFilter<"GameRegion"> | Date | string
    updatedAt?: DateTimeFilter<"GameRegion"> | Date | string
    game?: XOR<GameRelationFilter, GameWhereInput>
    region?: XOR<RegionRelationFilter, RegionWhereInput>
    versionRegions?: GameVersionRegionListRelationFilter
  }, "id" | "regionId_gameId">

  export type GameRegionOrderByWithAggregationInput = {
    id?: SortOrder
    regionId?: SortOrder
    gameId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: GameRegionCountOrderByAggregateInput
    _avg?: GameRegionAvgOrderByAggregateInput
    _max?: GameRegionMaxOrderByAggregateInput
    _min?: GameRegionMinOrderByAggregateInput
    _sum?: GameRegionSumOrderByAggregateInput
  }

  export type GameRegionScalarWhereWithAggregatesInput = {
    AND?: GameRegionScalarWhereWithAggregatesInput | GameRegionScalarWhereWithAggregatesInput[]
    OR?: GameRegionScalarWhereWithAggregatesInput[]
    NOT?: GameRegionScalarWhereWithAggregatesInput | GameRegionScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"GameRegion"> | number
    regionId?: IntWithAggregatesFilter<"GameRegion"> | number
    gameId?: StringWithAggregatesFilter<"GameRegion"> | string
    createdAt?: DateTimeWithAggregatesFilter<"GameRegion"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"GameRegion"> | Date | string
  }

  export type GameVersionRegionWhereInput = {
    AND?: GameVersionRegionWhereInput | GameVersionRegionWhereInput[]
    OR?: GameVersionRegionWhereInput[]
    NOT?: GameVersionRegionWhereInput | GameVersionRegionWhereInput[]
    id?: IntFilter<"GameVersionRegion"> | number
    SKU?: StringFilter<"GameVersionRegion"> | string
    gameRegionId?: IntFilter<"GameVersionRegion"> | number
    storeUrl?: StringNullableFilter<"GameVersionRegion"> | string | null
    isAvailable?: BoolFilter<"GameVersionRegion"> | boolean
    lastChecked?: DateTimeNullableFilter<"GameVersionRegion"> | Date | string | null
    createdAt?: DateTimeFilter<"GameVersionRegion"> | Date | string
    updatedAt?: DateTimeFilter<"GameVersionRegion"> | Date | string
    gameVersion?: XOR<GameVersionRelationFilter, GameVersionWhereInput>
    gameRegion?: XOR<GameRegionRelationFilter, GameRegionWhereInput>
    Price?: PriceListRelationFilter
    PriceHistory?: PriceHistoryListRelationFilter
  }

  export type GameVersionRegionOrderByWithRelationInput = {
    id?: SortOrder
    SKU?: SortOrder
    gameRegionId?: SortOrder
    storeUrl?: SortOrderInput | SortOrder
    isAvailable?: SortOrder
    lastChecked?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    gameVersion?: GameVersionOrderByWithRelationInput
    gameRegion?: GameRegionOrderByWithRelationInput
    Price?: PriceOrderByRelationAggregateInput
    PriceHistory?: PriceHistoryOrderByRelationAggregateInput
  }

  export type GameVersionRegionWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    SKU_gameRegionId?: GameVersionRegionSKUGameRegionIdCompoundUniqueInput
    AND?: GameVersionRegionWhereInput | GameVersionRegionWhereInput[]
    OR?: GameVersionRegionWhereInput[]
    NOT?: GameVersionRegionWhereInput | GameVersionRegionWhereInput[]
    SKU?: StringFilter<"GameVersionRegion"> | string
    gameRegionId?: IntFilter<"GameVersionRegion"> | number
    storeUrl?: StringNullableFilter<"GameVersionRegion"> | string | null
    isAvailable?: BoolFilter<"GameVersionRegion"> | boolean
    lastChecked?: DateTimeNullableFilter<"GameVersionRegion"> | Date | string | null
    createdAt?: DateTimeFilter<"GameVersionRegion"> | Date | string
    updatedAt?: DateTimeFilter<"GameVersionRegion"> | Date | string
    gameVersion?: XOR<GameVersionRelationFilter, GameVersionWhereInput>
    gameRegion?: XOR<GameRegionRelationFilter, GameRegionWhereInput>
    Price?: PriceListRelationFilter
    PriceHistory?: PriceHistoryListRelationFilter
  }, "id" | "SKU_gameRegionId">

  export type GameVersionRegionOrderByWithAggregationInput = {
    id?: SortOrder
    SKU?: SortOrder
    gameRegionId?: SortOrder
    storeUrl?: SortOrderInput | SortOrder
    isAvailable?: SortOrder
    lastChecked?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: GameVersionRegionCountOrderByAggregateInput
    _avg?: GameVersionRegionAvgOrderByAggregateInput
    _max?: GameVersionRegionMaxOrderByAggregateInput
    _min?: GameVersionRegionMinOrderByAggregateInput
    _sum?: GameVersionRegionSumOrderByAggregateInput
  }

  export type GameVersionRegionScalarWhereWithAggregatesInput = {
    AND?: GameVersionRegionScalarWhereWithAggregatesInput | GameVersionRegionScalarWhereWithAggregatesInput[]
    OR?: GameVersionRegionScalarWhereWithAggregatesInput[]
    NOT?: GameVersionRegionScalarWhereWithAggregatesInput | GameVersionRegionScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"GameVersionRegion"> | number
    SKU?: StringWithAggregatesFilter<"GameVersionRegion"> | string
    gameRegionId?: IntWithAggregatesFilter<"GameVersionRegion"> | number
    storeUrl?: StringNullableWithAggregatesFilter<"GameVersionRegion"> | string | null
    isAvailable?: BoolWithAggregatesFilter<"GameVersionRegion"> | boolean
    lastChecked?: DateTimeNullableWithAggregatesFilter<"GameVersionRegion"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"GameVersionRegion"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"GameVersionRegion"> | Date | string
  }

  export type PriceWhereInput = {
    AND?: PriceWhereInput | PriceWhereInput[]
    OR?: PriceWhereInput[]
    NOT?: PriceWhereInput | PriceWhereInput[]
    id?: IntFilter<"Price"> | number
    gameVersionRegionId?: IntFilter<"Price"> | number
    price?: DecimalFilter<"Price"> | Decimal | DecimalJsLike | number | string
    originalPrice?: DecimalNullableFilter<"Price"> | Decimal | DecimalJsLike | number | string | null
    currency?: StringFilter<"Price"> | string
    type?: EnumPriceTypeFilter<"Price"> | $Enums.PriceType
    hasDiscount?: BoolFilter<"Price"> | boolean
    discountPercent?: IntNullableFilter<"Price"> | number | null
    discountStart?: DateTimeNullableFilter<"Price"> | Date | string | null
    discountFinish?: DateTimeNullableFilter<"Price"> | Date | string | null
    recordedAt?: DateTimeFilter<"Price"> | Date | string
    createdAt?: DateTimeFilter<"Price"> | Date | string
    updatedAt?: DateTimeFilter<"Price"> | Date | string
    gameVersionRegion?: XOR<GameVersionRegionRelationFilter, GameVersionRegionWhereInput>
  }

  export type PriceOrderByWithRelationInput = {
    id?: SortOrder
    gameVersionRegionId?: SortOrder
    price?: SortOrder
    originalPrice?: SortOrderInput | SortOrder
    currency?: SortOrder
    type?: SortOrder
    hasDiscount?: SortOrder
    discountPercent?: SortOrderInput | SortOrder
    discountStart?: SortOrderInput | SortOrder
    discountFinish?: SortOrderInput | SortOrder
    recordedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    gameVersionRegion?: GameVersionRegionOrderByWithRelationInput
  }

  export type PriceWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PriceWhereInput | PriceWhereInput[]
    OR?: PriceWhereInput[]
    NOT?: PriceWhereInput | PriceWhereInput[]
    gameVersionRegionId?: IntFilter<"Price"> | number
    price?: DecimalFilter<"Price"> | Decimal | DecimalJsLike | number | string
    originalPrice?: DecimalNullableFilter<"Price"> | Decimal | DecimalJsLike | number | string | null
    currency?: StringFilter<"Price"> | string
    type?: EnumPriceTypeFilter<"Price"> | $Enums.PriceType
    hasDiscount?: BoolFilter<"Price"> | boolean
    discountPercent?: IntNullableFilter<"Price"> | number | null
    discountStart?: DateTimeNullableFilter<"Price"> | Date | string | null
    discountFinish?: DateTimeNullableFilter<"Price"> | Date | string | null
    recordedAt?: DateTimeFilter<"Price"> | Date | string
    createdAt?: DateTimeFilter<"Price"> | Date | string
    updatedAt?: DateTimeFilter<"Price"> | Date | string
    gameVersionRegion?: XOR<GameVersionRegionRelationFilter, GameVersionRegionWhereInput>
  }, "id">

  export type PriceOrderByWithAggregationInput = {
    id?: SortOrder
    gameVersionRegionId?: SortOrder
    price?: SortOrder
    originalPrice?: SortOrderInput | SortOrder
    currency?: SortOrder
    type?: SortOrder
    hasDiscount?: SortOrder
    discountPercent?: SortOrderInput | SortOrder
    discountStart?: SortOrderInput | SortOrder
    discountFinish?: SortOrderInput | SortOrder
    recordedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PriceCountOrderByAggregateInput
    _avg?: PriceAvgOrderByAggregateInput
    _max?: PriceMaxOrderByAggregateInput
    _min?: PriceMinOrderByAggregateInput
    _sum?: PriceSumOrderByAggregateInput
  }

  export type PriceScalarWhereWithAggregatesInput = {
    AND?: PriceScalarWhereWithAggregatesInput | PriceScalarWhereWithAggregatesInput[]
    OR?: PriceScalarWhereWithAggregatesInput[]
    NOT?: PriceScalarWhereWithAggregatesInput | PriceScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Price"> | number
    gameVersionRegionId?: IntWithAggregatesFilter<"Price"> | number
    price?: DecimalWithAggregatesFilter<"Price"> | Decimal | DecimalJsLike | number | string
    originalPrice?: DecimalNullableWithAggregatesFilter<"Price"> | Decimal | DecimalJsLike | number | string | null
    currency?: StringWithAggregatesFilter<"Price"> | string
    type?: EnumPriceTypeWithAggregatesFilter<"Price"> | $Enums.PriceType
    hasDiscount?: BoolWithAggregatesFilter<"Price"> | boolean
    discountPercent?: IntNullableWithAggregatesFilter<"Price"> | number | null
    discountStart?: DateTimeNullableWithAggregatesFilter<"Price"> | Date | string | null
    discountFinish?: DateTimeNullableWithAggregatesFilter<"Price"> | Date | string | null
    recordedAt?: DateTimeWithAggregatesFilter<"Price"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"Price"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Price"> | Date | string
  }

  export type PriceHistoryWhereInput = {
    AND?: PriceHistoryWhereInput | PriceHistoryWhereInput[]
    OR?: PriceHistoryWhereInput[]
    NOT?: PriceHistoryWhereInput | PriceHistoryWhereInput[]
    id?: IntFilter<"PriceHistory"> | number
    gameVersionRegionId?: IntFilter<"PriceHistory"> | number
    price?: DecimalFilter<"PriceHistory"> | Decimal | DecimalJsLike | number | string
    originalPrice?: DecimalNullableFilter<"PriceHistory"> | Decimal | DecimalJsLike | number | string | null
    currency?: StringFilter<"PriceHistory"> | string
    type?: EnumPriceTypeFilter<"PriceHistory"> | $Enums.PriceType
    recordedAt?: DateTimeFilter<"PriceHistory"> | Date | string
    gameVersionRegion?: XOR<GameVersionRegionRelationFilter, GameVersionRegionWhereInput>
  }

  export type PriceHistoryOrderByWithRelationInput = {
    id?: SortOrder
    gameVersionRegionId?: SortOrder
    price?: SortOrder
    originalPrice?: SortOrderInput | SortOrder
    currency?: SortOrder
    type?: SortOrder
    recordedAt?: SortOrder
    gameVersionRegion?: GameVersionRegionOrderByWithRelationInput
  }

  export type PriceHistoryWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PriceHistoryWhereInput | PriceHistoryWhereInput[]
    OR?: PriceHistoryWhereInput[]
    NOT?: PriceHistoryWhereInput | PriceHistoryWhereInput[]
    gameVersionRegionId?: IntFilter<"PriceHistory"> | number
    price?: DecimalFilter<"PriceHistory"> | Decimal | DecimalJsLike | number | string
    originalPrice?: DecimalNullableFilter<"PriceHistory"> | Decimal | DecimalJsLike | number | string | null
    currency?: StringFilter<"PriceHistory"> | string
    type?: EnumPriceTypeFilter<"PriceHistory"> | $Enums.PriceType
    recordedAt?: DateTimeFilter<"PriceHistory"> | Date | string
    gameVersionRegion?: XOR<GameVersionRegionRelationFilter, GameVersionRegionWhereInput>
  }, "id">

  export type PriceHistoryOrderByWithAggregationInput = {
    id?: SortOrder
    gameVersionRegionId?: SortOrder
    price?: SortOrder
    originalPrice?: SortOrderInput | SortOrder
    currency?: SortOrder
    type?: SortOrder
    recordedAt?: SortOrder
    _count?: PriceHistoryCountOrderByAggregateInput
    _avg?: PriceHistoryAvgOrderByAggregateInput
    _max?: PriceHistoryMaxOrderByAggregateInput
    _min?: PriceHistoryMinOrderByAggregateInput
    _sum?: PriceHistorySumOrderByAggregateInput
  }

  export type PriceHistoryScalarWhereWithAggregatesInput = {
    AND?: PriceHistoryScalarWhereWithAggregatesInput | PriceHistoryScalarWhereWithAggregatesInput[]
    OR?: PriceHistoryScalarWhereWithAggregatesInput[]
    NOT?: PriceHistoryScalarWhereWithAggregatesInput | PriceHistoryScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"PriceHistory"> | number
    gameVersionRegionId?: IntWithAggregatesFilter<"PriceHistory"> | number
    price?: DecimalWithAggregatesFilter<"PriceHistory"> | Decimal | DecimalJsLike | number | string
    originalPrice?: DecimalNullableWithAggregatesFilter<"PriceHistory"> | Decimal | DecimalJsLike | number | string | null
    currency?: StringWithAggregatesFilter<"PriceHistory"> | string
    type?: EnumPriceTypeWithAggregatesFilter<"PriceHistory"> | $Enums.PriceType
    recordedAt?: DateTimeWithAggregatesFilter<"PriceHistory"> | Date | string
  }

  export type GameCreateInput = {
    id?: string
    psnId: string
    slug?: string | null
    title: string
    fullUrl?: string | null
    rating?: number | null
    genre?: string | null
    publisher?: string | null
    isFreeToPlay?: boolean | null
    releaseDate?: Date | string | null
    releaseStatus?: $Enums.ReleaseStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    GameLanguageSupport?: GameLanguageSupportCreateNestedManyWithoutGameInput
    GameImage?: GameImageCreateNestedManyWithoutGameInput
    PsPlus?: PsPlusCreateNestedManyWithoutGameInput
    GameEdition?: GameEditionCreateNestedManyWithoutGameInput
    GameVersion?: GameVersionCreateNestedManyWithoutGameInput
    GameRegion?: GameRegionCreateNestedManyWithoutGameInput
  }

  export type GameUncheckedCreateInput = {
    id?: string
    psnId: string
    slug?: string | null
    title: string
    fullUrl?: string | null
    rating?: number | null
    genre?: string | null
    publisher?: string | null
    isFreeToPlay?: boolean | null
    releaseDate?: Date | string | null
    releaseStatus?: $Enums.ReleaseStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    GameLanguageSupport?: GameLanguageSupportUncheckedCreateNestedManyWithoutGameInput
    GameImage?: GameImageUncheckedCreateNestedManyWithoutGameInput
    PsPlus?: PsPlusUncheckedCreateNestedManyWithoutGameInput
    GameEdition?: GameEditionUncheckedCreateNestedManyWithoutGameInput
    GameVersion?: GameVersionUncheckedCreateNestedManyWithoutGameInput
    GameRegion?: GameRegionUncheckedCreateNestedManyWithoutGameInput
  }

  export type GameUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    psnId?: StringFieldUpdateOperationsInput | string
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    fullUrl?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    genre?: NullableStringFieldUpdateOperationsInput | string | null
    publisher?: NullableStringFieldUpdateOperationsInput | string | null
    isFreeToPlay?: NullableBoolFieldUpdateOperationsInput | boolean | null
    releaseDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    releaseStatus?: EnumReleaseStatusFieldUpdateOperationsInput | $Enums.ReleaseStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    GameLanguageSupport?: GameLanguageSupportUpdateManyWithoutGameNestedInput
    GameImage?: GameImageUpdateManyWithoutGameNestedInput
    PsPlus?: PsPlusUpdateManyWithoutGameNestedInput
    GameEdition?: GameEditionUpdateManyWithoutGameNestedInput
    GameVersion?: GameVersionUpdateManyWithoutGameNestedInput
    GameRegion?: GameRegionUpdateManyWithoutGameNestedInput
  }

  export type GameUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    psnId?: StringFieldUpdateOperationsInput | string
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    fullUrl?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    genre?: NullableStringFieldUpdateOperationsInput | string | null
    publisher?: NullableStringFieldUpdateOperationsInput | string | null
    isFreeToPlay?: NullableBoolFieldUpdateOperationsInput | boolean | null
    releaseDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    releaseStatus?: EnumReleaseStatusFieldUpdateOperationsInput | $Enums.ReleaseStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    GameLanguageSupport?: GameLanguageSupportUncheckedUpdateManyWithoutGameNestedInput
    GameImage?: GameImageUncheckedUpdateManyWithoutGameNestedInput
    PsPlus?: PsPlusUncheckedUpdateManyWithoutGameNestedInput
    GameEdition?: GameEditionUncheckedUpdateManyWithoutGameNestedInput
    GameVersion?: GameVersionUncheckedUpdateManyWithoutGameNestedInput
    GameRegion?: GameRegionUncheckedUpdateManyWithoutGameNestedInput
  }

  export type GameCreateManyInput = {
    id?: string
    psnId: string
    slug?: string | null
    title: string
    fullUrl?: string | null
    rating?: number | null
    genre?: string | null
    publisher?: string | null
    isFreeToPlay?: boolean | null
    releaseDate?: Date | string | null
    releaseStatus?: $Enums.ReleaseStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GameUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    psnId?: StringFieldUpdateOperationsInput | string
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    fullUrl?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    genre?: NullableStringFieldUpdateOperationsInput | string | null
    publisher?: NullableStringFieldUpdateOperationsInput | string | null
    isFreeToPlay?: NullableBoolFieldUpdateOperationsInput | boolean | null
    releaseDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    releaseStatus?: EnumReleaseStatusFieldUpdateOperationsInput | $Enums.ReleaseStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GameUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    psnId?: StringFieldUpdateOperationsInput | string
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    fullUrl?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    genre?: NullableStringFieldUpdateOperationsInput | string | null
    publisher?: NullableStringFieldUpdateOperationsInput | string | null
    isFreeToPlay?: NullableBoolFieldUpdateOperationsInput | boolean | null
    releaseDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    releaseStatus?: EnumReleaseStatusFieldUpdateOperationsInput | $Enums.ReleaseStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LanguageCreateInput = {
    code: string
    name: string
    GameLanguageSupport?: GameLanguageSupportCreateNestedManyWithoutLanguageInput
  }

  export type LanguageUncheckedCreateInput = {
    id?: number
    code: string
    name: string
    GameLanguageSupport?: GameLanguageSupportUncheckedCreateNestedManyWithoutLanguageInput
  }

  export type LanguageUpdateInput = {
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    GameLanguageSupport?: GameLanguageSupportUpdateManyWithoutLanguageNestedInput
  }

  export type LanguageUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    GameLanguageSupport?: GameLanguageSupportUncheckedUpdateManyWithoutLanguageNestedInput
  }

  export type LanguageCreateManyInput = {
    id?: number
    code: string
    name: string
  }

  export type LanguageUpdateManyMutationInput = {
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type LanguageUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type GameLanguageSupportCreateInput = {
    languageType: $Enums.LanguageType
    createdAt?: Date | string
    updatedAt?: Date | string
    game: GameCreateNestedOneWithoutGameLanguageSupportInput
    language: LanguageCreateNestedOneWithoutGameLanguageSupportInput
  }

  export type GameLanguageSupportUncheckedCreateInput = {
    id?: number
    gameId: string
    languageId: number
    languageType: $Enums.LanguageType
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GameLanguageSupportUpdateInput = {
    languageType?: EnumLanguageTypeFieldUpdateOperationsInput | $Enums.LanguageType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    game?: GameUpdateOneRequiredWithoutGameLanguageSupportNestedInput
    language?: LanguageUpdateOneRequiredWithoutGameLanguageSupportNestedInput
  }

  export type GameLanguageSupportUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    gameId?: StringFieldUpdateOperationsInput | string
    languageId?: IntFieldUpdateOperationsInput | number
    languageType?: EnumLanguageTypeFieldUpdateOperationsInput | $Enums.LanguageType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GameLanguageSupportCreateManyInput = {
    id?: number
    gameId: string
    languageId: number
    languageType: $Enums.LanguageType
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GameLanguageSupportUpdateManyMutationInput = {
    languageType?: EnumLanguageTypeFieldUpdateOperationsInput | $Enums.LanguageType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GameLanguageSupportUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    gameId?: StringFieldUpdateOperationsInput | string
    languageId?: IntFieldUpdateOperationsInput | number
    languageType?: EnumLanguageTypeFieldUpdateOperationsInput | $Enums.LanguageType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GameImageCreateInput = {
    url?: string | null
    type?: $Enums.ImageType
    game: GameCreateNestedOneWithoutGameImageInput
  }

  export type GameImageUncheckedCreateInput = {
    id?: number
    url?: string | null
    type?: $Enums.ImageType
    gameId: string
  }

  export type GameImageUpdateInput = {
    url?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumImageTypeFieldUpdateOperationsInput | $Enums.ImageType
    game?: GameUpdateOneRequiredWithoutGameImageNestedInput
  }

  export type GameImageUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    url?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumImageTypeFieldUpdateOperationsInput | $Enums.ImageType
    gameId?: StringFieldUpdateOperationsInput | string
  }

  export type GameImageCreateManyInput = {
    id?: number
    url?: string | null
    type?: $Enums.ImageType
    gameId: string
  }

  export type GameImageUpdateManyMutationInput = {
    url?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumImageTypeFieldUpdateOperationsInput | $Enums.ImageType
  }

  export type GameImageUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    url?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumImageTypeFieldUpdateOperationsInput | $Enums.ImageType
    gameId?: StringFieldUpdateOperationsInput | string
  }

  export type PsPlusCreateInput = {
    id?: string
    type?: $Enums.PsPlusType
    game: GameCreateNestedOneWithoutPsPlusInput
  }

  export type PsPlusUncheckedCreateInput = {
    id?: string
    gameId: string
    type?: $Enums.PsPlusType
  }

  export type PsPlusUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumPsPlusTypeFieldUpdateOperationsInput | $Enums.PsPlusType
    game?: GameUpdateOneRequiredWithoutPsPlusNestedInput
  }

  export type PsPlusUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    gameId?: StringFieldUpdateOperationsInput | string
    type?: EnumPsPlusTypeFieldUpdateOperationsInput | $Enums.PsPlusType
  }

  export type PsPlusCreateManyInput = {
    id?: string
    gameId: string
    type?: $Enums.PsPlusType
  }

  export type PsPlusUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumPsPlusTypeFieldUpdateOperationsInput | $Enums.PsPlusType
  }

  export type PsPlusUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    gameId?: StringFieldUpdateOperationsInput | string
    type?: EnumPsPlusTypeFieldUpdateOperationsInput | $Enums.PsPlusType
  }

  export type GameEditionCreateInput = {
    name: string
    game: GameCreateNestedOneWithoutGameEditionInput
    GameVersion?: GameVersionCreateNestedManyWithoutEditionInput
  }

  export type GameEditionUncheckedCreateInput = {
    id?: number
    name: string
    gameId: string
    GameVersion?: GameVersionUncheckedCreateNestedManyWithoutEditionInput
  }

  export type GameEditionUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    game?: GameUpdateOneRequiredWithoutGameEditionNestedInput
    GameVersion?: GameVersionUpdateManyWithoutEditionNestedInput
  }

  export type GameEditionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    gameId?: StringFieldUpdateOperationsInput | string
    GameVersion?: GameVersionUncheckedUpdateManyWithoutEditionNestedInput
  }

  export type GameEditionCreateManyInput = {
    id?: number
    name: string
    gameId: string
  }

  export type GameEditionUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type GameEditionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    gameId?: StringFieldUpdateOperationsInput | string
  }

  export type RegionCreateInput = {
    code: string
    name: string
    currency: string
    GameRegion?: GameRegionCreateNestedManyWithoutRegionInput
  }

  export type RegionUncheckedCreateInput = {
    id?: number
    code: string
    name: string
    currency: string
    GameRegion?: GameRegionUncheckedCreateNestedManyWithoutRegionInput
  }

  export type RegionUpdateInput = {
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    currency?: StringFieldUpdateOperationsInput | string
    GameRegion?: GameRegionUpdateManyWithoutRegionNestedInput
  }

  export type RegionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    currency?: StringFieldUpdateOperationsInput | string
    GameRegion?: GameRegionUncheckedUpdateManyWithoutRegionNestedInput
  }

  export type RegionCreateManyInput = {
    id?: number
    code: string
    name: string
    currency: string
  }

  export type RegionUpdateManyMutationInput = {
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    currency?: StringFieldUpdateOperationsInput | string
  }

  export type RegionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    currency?: StringFieldUpdateOperationsInput | string
  }

  export type GameVersionCreateInput = {
    SKU?: string
    platform?: $Enums.Platform
    createdAt?: Date | string
    updatedAt?: Date | string
    game: GameCreateNestedOneWithoutGameVersionInput
    edition: GameEditionCreateNestedOneWithoutGameVersionInput
    GameVersionRegion?: GameVersionRegionCreateNestedManyWithoutGameVersionInput
  }

  export type GameVersionUncheckedCreateInput = {
    SKU?: string
    gameId: string
    editionId: number
    platform?: $Enums.Platform
    createdAt?: Date | string
    updatedAt?: Date | string
    GameVersionRegion?: GameVersionRegionUncheckedCreateNestedManyWithoutGameVersionInput
  }

  export type GameVersionUpdateInput = {
    SKU?: StringFieldUpdateOperationsInput | string
    platform?: EnumPlatformFieldUpdateOperationsInput | $Enums.Platform
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    game?: GameUpdateOneRequiredWithoutGameVersionNestedInput
    edition?: GameEditionUpdateOneRequiredWithoutGameVersionNestedInput
    GameVersionRegion?: GameVersionRegionUpdateManyWithoutGameVersionNestedInput
  }

  export type GameVersionUncheckedUpdateInput = {
    SKU?: StringFieldUpdateOperationsInput | string
    gameId?: StringFieldUpdateOperationsInput | string
    editionId?: IntFieldUpdateOperationsInput | number
    platform?: EnumPlatformFieldUpdateOperationsInput | $Enums.Platform
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    GameVersionRegion?: GameVersionRegionUncheckedUpdateManyWithoutGameVersionNestedInput
  }

  export type GameVersionCreateManyInput = {
    SKU?: string
    gameId: string
    editionId: number
    platform?: $Enums.Platform
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GameVersionUpdateManyMutationInput = {
    SKU?: StringFieldUpdateOperationsInput | string
    platform?: EnumPlatformFieldUpdateOperationsInput | $Enums.Platform
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GameVersionUncheckedUpdateManyInput = {
    SKU?: StringFieldUpdateOperationsInput | string
    gameId?: StringFieldUpdateOperationsInput | string
    editionId?: IntFieldUpdateOperationsInput | number
    platform?: EnumPlatformFieldUpdateOperationsInput | $Enums.Platform
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GameRegionCreateInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    game: GameCreateNestedOneWithoutGameRegionInput
    region: RegionCreateNestedOneWithoutGameRegionInput
    versionRegions?: GameVersionRegionCreateNestedManyWithoutGameRegionInput
  }

  export type GameRegionUncheckedCreateInput = {
    id?: number
    regionId: number
    gameId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    versionRegions?: GameVersionRegionUncheckedCreateNestedManyWithoutGameRegionInput
  }

  export type GameRegionUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    game?: GameUpdateOneRequiredWithoutGameRegionNestedInput
    region?: RegionUpdateOneRequiredWithoutGameRegionNestedInput
    versionRegions?: GameVersionRegionUpdateManyWithoutGameRegionNestedInput
  }

  export type GameRegionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    regionId?: IntFieldUpdateOperationsInput | number
    gameId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    versionRegions?: GameVersionRegionUncheckedUpdateManyWithoutGameRegionNestedInput
  }

  export type GameRegionCreateManyInput = {
    id?: number
    regionId: number
    gameId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GameRegionUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GameRegionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    regionId?: IntFieldUpdateOperationsInput | number
    gameId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GameVersionRegionCreateInput = {
    storeUrl?: string | null
    isAvailable?: boolean
    lastChecked?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    gameVersion: GameVersionCreateNestedOneWithoutGameVersionRegionInput
    gameRegion: GameRegionCreateNestedOneWithoutVersionRegionsInput
    Price?: PriceCreateNestedManyWithoutGameVersionRegionInput
    PriceHistory?: PriceHistoryCreateNestedManyWithoutGameVersionRegionInput
  }

  export type GameVersionRegionUncheckedCreateInput = {
    id?: number
    SKU: string
    gameRegionId: number
    storeUrl?: string | null
    isAvailable?: boolean
    lastChecked?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    Price?: PriceUncheckedCreateNestedManyWithoutGameVersionRegionInput
    PriceHistory?: PriceHistoryUncheckedCreateNestedManyWithoutGameVersionRegionInput
  }

  export type GameVersionRegionUpdateInput = {
    storeUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    lastChecked?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    gameVersion?: GameVersionUpdateOneRequiredWithoutGameVersionRegionNestedInput
    gameRegion?: GameRegionUpdateOneRequiredWithoutVersionRegionsNestedInput
    Price?: PriceUpdateManyWithoutGameVersionRegionNestedInput
    PriceHistory?: PriceHistoryUpdateManyWithoutGameVersionRegionNestedInput
  }

  export type GameVersionRegionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    SKU?: StringFieldUpdateOperationsInput | string
    gameRegionId?: IntFieldUpdateOperationsInput | number
    storeUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    lastChecked?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Price?: PriceUncheckedUpdateManyWithoutGameVersionRegionNestedInput
    PriceHistory?: PriceHistoryUncheckedUpdateManyWithoutGameVersionRegionNestedInput
  }

  export type GameVersionRegionCreateManyInput = {
    id?: number
    SKU: string
    gameRegionId: number
    storeUrl?: string | null
    isAvailable?: boolean
    lastChecked?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GameVersionRegionUpdateManyMutationInput = {
    storeUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    lastChecked?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GameVersionRegionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    SKU?: StringFieldUpdateOperationsInput | string
    gameRegionId?: IntFieldUpdateOperationsInput | number
    storeUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    lastChecked?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PriceCreateInput = {
    price: Decimal | DecimalJsLike | number | string
    originalPrice?: Decimal | DecimalJsLike | number | string | null
    currency: string
    type?: $Enums.PriceType
    hasDiscount?: boolean
    discountPercent?: number | null
    discountStart?: Date | string | null
    discountFinish?: Date | string | null
    recordedAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    gameVersionRegion: GameVersionRegionCreateNestedOneWithoutPriceInput
  }

  export type PriceUncheckedCreateInput = {
    id?: number
    gameVersionRegionId: number
    price: Decimal | DecimalJsLike | number | string
    originalPrice?: Decimal | DecimalJsLike | number | string | null
    currency: string
    type?: $Enums.PriceType
    hasDiscount?: boolean
    discountPercent?: number | null
    discountStart?: Date | string | null
    discountFinish?: Date | string | null
    recordedAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PriceUpdateInput = {
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    originalPrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    currency?: StringFieldUpdateOperationsInput | string
    type?: EnumPriceTypeFieldUpdateOperationsInput | $Enums.PriceType
    hasDiscount?: BoolFieldUpdateOperationsInput | boolean
    discountPercent?: NullableIntFieldUpdateOperationsInput | number | null
    discountStart?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    discountFinish?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    recordedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    gameVersionRegion?: GameVersionRegionUpdateOneRequiredWithoutPriceNestedInput
  }

  export type PriceUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    gameVersionRegionId?: IntFieldUpdateOperationsInput | number
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    originalPrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    currency?: StringFieldUpdateOperationsInput | string
    type?: EnumPriceTypeFieldUpdateOperationsInput | $Enums.PriceType
    hasDiscount?: BoolFieldUpdateOperationsInput | boolean
    discountPercent?: NullableIntFieldUpdateOperationsInput | number | null
    discountStart?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    discountFinish?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    recordedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PriceCreateManyInput = {
    id?: number
    gameVersionRegionId: number
    price: Decimal | DecimalJsLike | number | string
    originalPrice?: Decimal | DecimalJsLike | number | string | null
    currency: string
    type?: $Enums.PriceType
    hasDiscount?: boolean
    discountPercent?: number | null
    discountStart?: Date | string | null
    discountFinish?: Date | string | null
    recordedAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PriceUpdateManyMutationInput = {
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    originalPrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    currency?: StringFieldUpdateOperationsInput | string
    type?: EnumPriceTypeFieldUpdateOperationsInput | $Enums.PriceType
    hasDiscount?: BoolFieldUpdateOperationsInput | boolean
    discountPercent?: NullableIntFieldUpdateOperationsInput | number | null
    discountStart?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    discountFinish?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    recordedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PriceUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    gameVersionRegionId?: IntFieldUpdateOperationsInput | number
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    originalPrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    currency?: StringFieldUpdateOperationsInput | string
    type?: EnumPriceTypeFieldUpdateOperationsInput | $Enums.PriceType
    hasDiscount?: BoolFieldUpdateOperationsInput | boolean
    discountPercent?: NullableIntFieldUpdateOperationsInput | number | null
    discountStart?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    discountFinish?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    recordedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PriceHistoryCreateInput = {
    price: Decimal | DecimalJsLike | number | string
    originalPrice?: Decimal | DecimalJsLike | number | string | null
    currency: string
    type: $Enums.PriceType
    recordedAt?: Date | string
    gameVersionRegion: GameVersionRegionCreateNestedOneWithoutPriceHistoryInput
  }

  export type PriceHistoryUncheckedCreateInput = {
    id?: number
    gameVersionRegionId: number
    price: Decimal | DecimalJsLike | number | string
    originalPrice?: Decimal | DecimalJsLike | number | string | null
    currency: string
    type: $Enums.PriceType
    recordedAt?: Date | string
  }

  export type PriceHistoryUpdateInput = {
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    originalPrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    currency?: StringFieldUpdateOperationsInput | string
    type?: EnumPriceTypeFieldUpdateOperationsInput | $Enums.PriceType
    recordedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    gameVersionRegion?: GameVersionRegionUpdateOneRequiredWithoutPriceHistoryNestedInput
  }

  export type PriceHistoryUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    gameVersionRegionId?: IntFieldUpdateOperationsInput | number
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    originalPrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    currency?: StringFieldUpdateOperationsInput | string
    type?: EnumPriceTypeFieldUpdateOperationsInput | $Enums.PriceType
    recordedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PriceHistoryCreateManyInput = {
    id?: number
    gameVersionRegionId: number
    price: Decimal | DecimalJsLike | number | string
    originalPrice?: Decimal | DecimalJsLike | number | string | null
    currency: string
    type: $Enums.PriceType
    recordedAt?: Date | string
  }

  export type PriceHistoryUpdateManyMutationInput = {
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    originalPrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    currency?: StringFieldUpdateOperationsInput | string
    type?: EnumPriceTypeFieldUpdateOperationsInput | $Enums.PriceType
    recordedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PriceHistoryUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    gameVersionRegionId?: IntFieldUpdateOperationsInput | number
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    originalPrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    currency?: StringFieldUpdateOperationsInput | string
    type?: EnumPriceTypeFieldUpdateOperationsInput | $Enums.PriceType
    recordedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type BoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type EnumReleaseStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ReleaseStatus | EnumReleaseStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ReleaseStatus[] | ListEnumReleaseStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ReleaseStatus[] | ListEnumReleaseStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumReleaseStatusFilter<$PrismaModel> | $Enums.ReleaseStatus
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type GameLanguageSupportListRelationFilter = {
    every?: GameLanguageSupportWhereInput
    some?: GameLanguageSupportWhereInput
    none?: GameLanguageSupportWhereInput
  }

  export type GameImageListRelationFilter = {
    every?: GameImageWhereInput
    some?: GameImageWhereInput
    none?: GameImageWhereInput
  }

  export type PsPlusListRelationFilter = {
    every?: PsPlusWhereInput
    some?: PsPlusWhereInput
    none?: PsPlusWhereInput
  }

  export type GameEditionListRelationFilter = {
    every?: GameEditionWhereInput
    some?: GameEditionWhereInput
    none?: GameEditionWhereInput
  }

  export type GameVersionListRelationFilter = {
    every?: GameVersionWhereInput
    some?: GameVersionWhereInput
    none?: GameVersionWhereInput
  }

  export type GameRegionListRelationFilter = {
    every?: GameRegionWhereInput
    some?: GameRegionWhereInput
    none?: GameRegionWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type GameLanguageSupportOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type GameImageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PsPlusOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type GameEditionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type GameVersionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type GameRegionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type GameCountOrderByAggregateInput = {
    id?: SortOrder
    psnId?: SortOrder
    slug?: SortOrder
    title?: SortOrder
    fullUrl?: SortOrder
    rating?: SortOrder
    genre?: SortOrder
    publisher?: SortOrder
    isFreeToPlay?: SortOrder
    releaseDate?: SortOrder
    releaseStatus?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type GameAvgOrderByAggregateInput = {
    rating?: SortOrder
  }

  export type GameMaxOrderByAggregateInput = {
    id?: SortOrder
    psnId?: SortOrder
    slug?: SortOrder
    title?: SortOrder
    fullUrl?: SortOrder
    rating?: SortOrder
    genre?: SortOrder
    publisher?: SortOrder
    isFreeToPlay?: SortOrder
    releaseDate?: SortOrder
    releaseStatus?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type GameMinOrderByAggregateInput = {
    id?: SortOrder
    psnId?: SortOrder
    slug?: SortOrder
    title?: SortOrder
    fullUrl?: SortOrder
    rating?: SortOrder
    genre?: SortOrder
    publisher?: SortOrder
    isFreeToPlay?: SortOrder
    releaseDate?: SortOrder
    releaseStatus?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type GameSumOrderByAggregateInput = {
    rating?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type BoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type EnumReleaseStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ReleaseStatus | EnumReleaseStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ReleaseStatus[] | ListEnumReleaseStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ReleaseStatus[] | ListEnumReleaseStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumReleaseStatusWithAggregatesFilter<$PrismaModel> | $Enums.ReleaseStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumReleaseStatusFilter<$PrismaModel>
    _max?: NestedEnumReleaseStatusFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type LanguageCountOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
  }

  export type LanguageAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type LanguageMaxOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
  }

  export type LanguageMinOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
  }

  export type LanguageSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type EnumLanguageTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.LanguageType | EnumLanguageTypeFieldRefInput<$PrismaModel>
    in?: $Enums.LanguageType[] | ListEnumLanguageTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.LanguageType[] | ListEnumLanguageTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumLanguageTypeFilter<$PrismaModel> | $Enums.LanguageType
  }

  export type GameRelationFilter = {
    is?: GameWhereInput
    isNot?: GameWhereInput
  }

  export type LanguageRelationFilter = {
    is?: LanguageWhereInput
    isNot?: LanguageWhereInput
  }

  export type GameLanguageSupportGameIdLanguageIdLanguageTypeCompoundUniqueInput = {
    gameId: string
    languageId: number
    languageType: $Enums.LanguageType
  }

  export type GameLanguageSupportCountOrderByAggregateInput = {
    id?: SortOrder
    gameId?: SortOrder
    languageId?: SortOrder
    languageType?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type GameLanguageSupportAvgOrderByAggregateInput = {
    id?: SortOrder
    languageId?: SortOrder
  }

  export type GameLanguageSupportMaxOrderByAggregateInput = {
    id?: SortOrder
    gameId?: SortOrder
    languageId?: SortOrder
    languageType?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type GameLanguageSupportMinOrderByAggregateInput = {
    id?: SortOrder
    gameId?: SortOrder
    languageId?: SortOrder
    languageType?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type GameLanguageSupportSumOrderByAggregateInput = {
    id?: SortOrder
    languageId?: SortOrder
  }

  export type EnumLanguageTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.LanguageType | EnumLanguageTypeFieldRefInput<$PrismaModel>
    in?: $Enums.LanguageType[] | ListEnumLanguageTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.LanguageType[] | ListEnumLanguageTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumLanguageTypeWithAggregatesFilter<$PrismaModel> | $Enums.LanguageType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumLanguageTypeFilter<$PrismaModel>
    _max?: NestedEnumLanguageTypeFilter<$PrismaModel>
  }

  export type EnumImageTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.ImageType | EnumImageTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ImageType[] | ListEnumImageTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ImageType[] | ListEnumImageTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumImageTypeFilter<$PrismaModel> | $Enums.ImageType
  }

  export type GameImageCountOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    type?: SortOrder
    gameId?: SortOrder
  }

  export type GameImageAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type GameImageMaxOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    type?: SortOrder
    gameId?: SortOrder
  }

  export type GameImageMinOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    type?: SortOrder
    gameId?: SortOrder
  }

  export type GameImageSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type EnumImageTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ImageType | EnumImageTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ImageType[] | ListEnumImageTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ImageType[] | ListEnumImageTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumImageTypeWithAggregatesFilter<$PrismaModel> | $Enums.ImageType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumImageTypeFilter<$PrismaModel>
    _max?: NestedEnumImageTypeFilter<$PrismaModel>
  }

  export type EnumPsPlusTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.PsPlusType | EnumPsPlusTypeFieldRefInput<$PrismaModel>
    in?: $Enums.PsPlusType[] | ListEnumPsPlusTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.PsPlusType[] | ListEnumPsPlusTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumPsPlusTypeFilter<$PrismaModel> | $Enums.PsPlusType
  }

  export type PsPlusCountOrderByAggregateInput = {
    id?: SortOrder
    gameId?: SortOrder
    type?: SortOrder
  }

  export type PsPlusMaxOrderByAggregateInput = {
    id?: SortOrder
    gameId?: SortOrder
    type?: SortOrder
  }

  export type PsPlusMinOrderByAggregateInput = {
    id?: SortOrder
    gameId?: SortOrder
    type?: SortOrder
  }

  export type EnumPsPlusTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PsPlusType | EnumPsPlusTypeFieldRefInput<$PrismaModel>
    in?: $Enums.PsPlusType[] | ListEnumPsPlusTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.PsPlusType[] | ListEnumPsPlusTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumPsPlusTypeWithAggregatesFilter<$PrismaModel> | $Enums.PsPlusType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPsPlusTypeFilter<$PrismaModel>
    _max?: NestedEnumPsPlusTypeFilter<$PrismaModel>
  }

  export type GameEditionCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    gameId?: SortOrder
  }

  export type GameEditionAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type GameEditionMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    gameId?: SortOrder
  }

  export type GameEditionMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    gameId?: SortOrder
  }

  export type GameEditionSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type RegionCountOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
    currency?: SortOrder
  }

  export type RegionAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type RegionMaxOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
    currency?: SortOrder
  }

  export type RegionMinOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
    currency?: SortOrder
  }

  export type RegionSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type EnumPlatformFilter<$PrismaModel = never> = {
    equals?: $Enums.Platform | EnumPlatformFieldRefInput<$PrismaModel>
    in?: $Enums.Platform[] | ListEnumPlatformFieldRefInput<$PrismaModel>
    notIn?: $Enums.Platform[] | ListEnumPlatformFieldRefInput<$PrismaModel>
    not?: NestedEnumPlatformFilter<$PrismaModel> | $Enums.Platform
  }

  export type GameEditionRelationFilter = {
    is?: GameEditionWhereInput
    isNot?: GameEditionWhereInput
  }

  export type GameVersionRegionListRelationFilter = {
    every?: GameVersionRegionWhereInput
    some?: GameVersionRegionWhereInput
    none?: GameVersionRegionWhereInput
  }

  export type GameVersionRegionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type GameVersionGameIdEditionIdPlatformCompoundUniqueInput = {
    gameId: string
    editionId: number
    platform: $Enums.Platform
  }

  export type GameVersionCountOrderByAggregateInput = {
    SKU?: SortOrder
    gameId?: SortOrder
    editionId?: SortOrder
    platform?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type GameVersionAvgOrderByAggregateInput = {
    editionId?: SortOrder
  }

  export type GameVersionMaxOrderByAggregateInput = {
    SKU?: SortOrder
    gameId?: SortOrder
    editionId?: SortOrder
    platform?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type GameVersionMinOrderByAggregateInput = {
    SKU?: SortOrder
    gameId?: SortOrder
    editionId?: SortOrder
    platform?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type GameVersionSumOrderByAggregateInput = {
    editionId?: SortOrder
  }

  export type EnumPlatformWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Platform | EnumPlatformFieldRefInput<$PrismaModel>
    in?: $Enums.Platform[] | ListEnumPlatformFieldRefInput<$PrismaModel>
    notIn?: $Enums.Platform[] | ListEnumPlatformFieldRefInput<$PrismaModel>
    not?: NestedEnumPlatformWithAggregatesFilter<$PrismaModel> | $Enums.Platform
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPlatformFilter<$PrismaModel>
    _max?: NestedEnumPlatformFilter<$PrismaModel>
  }

  export type RegionRelationFilter = {
    is?: RegionWhereInput
    isNot?: RegionWhereInput
  }

  export type GameRegionRegionIdGameIdCompoundUniqueInput = {
    regionId: number
    gameId: string
  }

  export type GameRegionCountOrderByAggregateInput = {
    id?: SortOrder
    regionId?: SortOrder
    gameId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type GameRegionAvgOrderByAggregateInput = {
    id?: SortOrder
    regionId?: SortOrder
  }

  export type GameRegionMaxOrderByAggregateInput = {
    id?: SortOrder
    regionId?: SortOrder
    gameId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type GameRegionMinOrderByAggregateInput = {
    id?: SortOrder
    regionId?: SortOrder
    gameId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type GameRegionSumOrderByAggregateInput = {
    id?: SortOrder
    regionId?: SortOrder
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type GameVersionRelationFilter = {
    is?: GameVersionWhereInput
    isNot?: GameVersionWhereInput
  }

  export type GameRegionRelationFilter = {
    is?: GameRegionWhereInput
    isNot?: GameRegionWhereInput
  }

  export type PriceListRelationFilter = {
    every?: PriceWhereInput
    some?: PriceWhereInput
    none?: PriceWhereInput
  }

  export type PriceHistoryListRelationFilter = {
    every?: PriceHistoryWhereInput
    some?: PriceHistoryWhereInput
    none?: PriceHistoryWhereInput
  }

  export type PriceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PriceHistoryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type GameVersionRegionSKUGameRegionIdCompoundUniqueInput = {
    SKU: string
    gameRegionId: number
  }

  export type GameVersionRegionCountOrderByAggregateInput = {
    id?: SortOrder
    SKU?: SortOrder
    gameRegionId?: SortOrder
    storeUrl?: SortOrder
    isAvailable?: SortOrder
    lastChecked?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type GameVersionRegionAvgOrderByAggregateInput = {
    id?: SortOrder
    gameRegionId?: SortOrder
  }

  export type GameVersionRegionMaxOrderByAggregateInput = {
    id?: SortOrder
    SKU?: SortOrder
    gameRegionId?: SortOrder
    storeUrl?: SortOrder
    isAvailable?: SortOrder
    lastChecked?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type GameVersionRegionMinOrderByAggregateInput = {
    id?: SortOrder
    SKU?: SortOrder
    gameRegionId?: SortOrder
    storeUrl?: SortOrder
    isAvailable?: SortOrder
    lastChecked?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type GameVersionRegionSumOrderByAggregateInput = {
    id?: SortOrder
    gameRegionId?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type DecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type EnumPriceTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.PriceType | EnumPriceTypeFieldRefInput<$PrismaModel>
    in?: $Enums.PriceType[] | ListEnumPriceTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.PriceType[] | ListEnumPriceTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumPriceTypeFilter<$PrismaModel> | $Enums.PriceType
  }

  export type GameVersionRegionRelationFilter = {
    is?: GameVersionRegionWhereInput
    isNot?: GameVersionRegionWhereInput
  }

  export type PriceCountOrderByAggregateInput = {
    id?: SortOrder
    gameVersionRegionId?: SortOrder
    price?: SortOrder
    originalPrice?: SortOrder
    currency?: SortOrder
    type?: SortOrder
    hasDiscount?: SortOrder
    discountPercent?: SortOrder
    discountStart?: SortOrder
    discountFinish?: SortOrder
    recordedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PriceAvgOrderByAggregateInput = {
    id?: SortOrder
    gameVersionRegionId?: SortOrder
    price?: SortOrder
    originalPrice?: SortOrder
    discountPercent?: SortOrder
  }

  export type PriceMaxOrderByAggregateInput = {
    id?: SortOrder
    gameVersionRegionId?: SortOrder
    price?: SortOrder
    originalPrice?: SortOrder
    currency?: SortOrder
    type?: SortOrder
    hasDiscount?: SortOrder
    discountPercent?: SortOrder
    discountStart?: SortOrder
    discountFinish?: SortOrder
    recordedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PriceMinOrderByAggregateInput = {
    id?: SortOrder
    gameVersionRegionId?: SortOrder
    price?: SortOrder
    originalPrice?: SortOrder
    currency?: SortOrder
    type?: SortOrder
    hasDiscount?: SortOrder
    discountPercent?: SortOrder
    discountStart?: SortOrder
    discountFinish?: SortOrder
    recordedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PriceSumOrderByAggregateInput = {
    id?: SortOrder
    gameVersionRegionId?: SortOrder
    price?: SortOrder
    originalPrice?: SortOrder
    discountPercent?: SortOrder
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type DecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type EnumPriceTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PriceType | EnumPriceTypeFieldRefInput<$PrismaModel>
    in?: $Enums.PriceType[] | ListEnumPriceTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.PriceType[] | ListEnumPriceTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumPriceTypeWithAggregatesFilter<$PrismaModel> | $Enums.PriceType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPriceTypeFilter<$PrismaModel>
    _max?: NestedEnumPriceTypeFilter<$PrismaModel>
  }

  export type PriceHistoryCountOrderByAggregateInput = {
    id?: SortOrder
    gameVersionRegionId?: SortOrder
    price?: SortOrder
    originalPrice?: SortOrder
    currency?: SortOrder
    type?: SortOrder
    recordedAt?: SortOrder
  }

  export type PriceHistoryAvgOrderByAggregateInput = {
    id?: SortOrder
    gameVersionRegionId?: SortOrder
    price?: SortOrder
    originalPrice?: SortOrder
  }

  export type PriceHistoryMaxOrderByAggregateInput = {
    id?: SortOrder
    gameVersionRegionId?: SortOrder
    price?: SortOrder
    originalPrice?: SortOrder
    currency?: SortOrder
    type?: SortOrder
    recordedAt?: SortOrder
  }

  export type PriceHistoryMinOrderByAggregateInput = {
    id?: SortOrder
    gameVersionRegionId?: SortOrder
    price?: SortOrder
    originalPrice?: SortOrder
    currency?: SortOrder
    type?: SortOrder
    recordedAt?: SortOrder
  }

  export type PriceHistorySumOrderByAggregateInput = {
    id?: SortOrder
    gameVersionRegionId?: SortOrder
    price?: SortOrder
    originalPrice?: SortOrder
  }

  export type GameLanguageSupportCreateNestedManyWithoutGameInput = {
    create?: XOR<GameLanguageSupportCreateWithoutGameInput, GameLanguageSupportUncheckedCreateWithoutGameInput> | GameLanguageSupportCreateWithoutGameInput[] | GameLanguageSupportUncheckedCreateWithoutGameInput[]
    connectOrCreate?: GameLanguageSupportCreateOrConnectWithoutGameInput | GameLanguageSupportCreateOrConnectWithoutGameInput[]
    createMany?: GameLanguageSupportCreateManyGameInputEnvelope
    connect?: GameLanguageSupportWhereUniqueInput | GameLanguageSupportWhereUniqueInput[]
  }

  export type GameImageCreateNestedManyWithoutGameInput = {
    create?: XOR<GameImageCreateWithoutGameInput, GameImageUncheckedCreateWithoutGameInput> | GameImageCreateWithoutGameInput[] | GameImageUncheckedCreateWithoutGameInput[]
    connectOrCreate?: GameImageCreateOrConnectWithoutGameInput | GameImageCreateOrConnectWithoutGameInput[]
    createMany?: GameImageCreateManyGameInputEnvelope
    connect?: GameImageWhereUniqueInput | GameImageWhereUniqueInput[]
  }

  export type PsPlusCreateNestedManyWithoutGameInput = {
    create?: XOR<PsPlusCreateWithoutGameInput, PsPlusUncheckedCreateWithoutGameInput> | PsPlusCreateWithoutGameInput[] | PsPlusUncheckedCreateWithoutGameInput[]
    connectOrCreate?: PsPlusCreateOrConnectWithoutGameInput | PsPlusCreateOrConnectWithoutGameInput[]
    createMany?: PsPlusCreateManyGameInputEnvelope
    connect?: PsPlusWhereUniqueInput | PsPlusWhereUniqueInput[]
  }

  export type GameEditionCreateNestedManyWithoutGameInput = {
    create?: XOR<GameEditionCreateWithoutGameInput, GameEditionUncheckedCreateWithoutGameInput> | GameEditionCreateWithoutGameInput[] | GameEditionUncheckedCreateWithoutGameInput[]
    connectOrCreate?: GameEditionCreateOrConnectWithoutGameInput | GameEditionCreateOrConnectWithoutGameInput[]
    createMany?: GameEditionCreateManyGameInputEnvelope
    connect?: GameEditionWhereUniqueInput | GameEditionWhereUniqueInput[]
  }

  export type GameVersionCreateNestedManyWithoutGameInput = {
    create?: XOR<GameVersionCreateWithoutGameInput, GameVersionUncheckedCreateWithoutGameInput> | GameVersionCreateWithoutGameInput[] | GameVersionUncheckedCreateWithoutGameInput[]
    connectOrCreate?: GameVersionCreateOrConnectWithoutGameInput | GameVersionCreateOrConnectWithoutGameInput[]
    createMany?: GameVersionCreateManyGameInputEnvelope
    connect?: GameVersionWhereUniqueInput | GameVersionWhereUniqueInput[]
  }

  export type GameRegionCreateNestedManyWithoutGameInput = {
    create?: XOR<GameRegionCreateWithoutGameInput, GameRegionUncheckedCreateWithoutGameInput> | GameRegionCreateWithoutGameInput[] | GameRegionUncheckedCreateWithoutGameInput[]
    connectOrCreate?: GameRegionCreateOrConnectWithoutGameInput | GameRegionCreateOrConnectWithoutGameInput[]
    createMany?: GameRegionCreateManyGameInputEnvelope
    connect?: GameRegionWhereUniqueInput | GameRegionWhereUniqueInput[]
  }

  export type GameLanguageSupportUncheckedCreateNestedManyWithoutGameInput = {
    create?: XOR<GameLanguageSupportCreateWithoutGameInput, GameLanguageSupportUncheckedCreateWithoutGameInput> | GameLanguageSupportCreateWithoutGameInput[] | GameLanguageSupportUncheckedCreateWithoutGameInput[]
    connectOrCreate?: GameLanguageSupportCreateOrConnectWithoutGameInput | GameLanguageSupportCreateOrConnectWithoutGameInput[]
    createMany?: GameLanguageSupportCreateManyGameInputEnvelope
    connect?: GameLanguageSupportWhereUniqueInput | GameLanguageSupportWhereUniqueInput[]
  }

  export type GameImageUncheckedCreateNestedManyWithoutGameInput = {
    create?: XOR<GameImageCreateWithoutGameInput, GameImageUncheckedCreateWithoutGameInput> | GameImageCreateWithoutGameInput[] | GameImageUncheckedCreateWithoutGameInput[]
    connectOrCreate?: GameImageCreateOrConnectWithoutGameInput | GameImageCreateOrConnectWithoutGameInput[]
    createMany?: GameImageCreateManyGameInputEnvelope
    connect?: GameImageWhereUniqueInput | GameImageWhereUniqueInput[]
  }

  export type PsPlusUncheckedCreateNestedManyWithoutGameInput = {
    create?: XOR<PsPlusCreateWithoutGameInput, PsPlusUncheckedCreateWithoutGameInput> | PsPlusCreateWithoutGameInput[] | PsPlusUncheckedCreateWithoutGameInput[]
    connectOrCreate?: PsPlusCreateOrConnectWithoutGameInput | PsPlusCreateOrConnectWithoutGameInput[]
    createMany?: PsPlusCreateManyGameInputEnvelope
    connect?: PsPlusWhereUniqueInput | PsPlusWhereUniqueInput[]
  }

  export type GameEditionUncheckedCreateNestedManyWithoutGameInput = {
    create?: XOR<GameEditionCreateWithoutGameInput, GameEditionUncheckedCreateWithoutGameInput> | GameEditionCreateWithoutGameInput[] | GameEditionUncheckedCreateWithoutGameInput[]
    connectOrCreate?: GameEditionCreateOrConnectWithoutGameInput | GameEditionCreateOrConnectWithoutGameInput[]
    createMany?: GameEditionCreateManyGameInputEnvelope
    connect?: GameEditionWhereUniqueInput | GameEditionWhereUniqueInput[]
  }

  export type GameVersionUncheckedCreateNestedManyWithoutGameInput = {
    create?: XOR<GameVersionCreateWithoutGameInput, GameVersionUncheckedCreateWithoutGameInput> | GameVersionCreateWithoutGameInput[] | GameVersionUncheckedCreateWithoutGameInput[]
    connectOrCreate?: GameVersionCreateOrConnectWithoutGameInput | GameVersionCreateOrConnectWithoutGameInput[]
    createMany?: GameVersionCreateManyGameInputEnvelope
    connect?: GameVersionWhereUniqueInput | GameVersionWhereUniqueInput[]
  }

  export type GameRegionUncheckedCreateNestedManyWithoutGameInput = {
    create?: XOR<GameRegionCreateWithoutGameInput, GameRegionUncheckedCreateWithoutGameInput> | GameRegionCreateWithoutGameInput[] | GameRegionUncheckedCreateWithoutGameInput[]
    connectOrCreate?: GameRegionCreateOrConnectWithoutGameInput | GameRegionCreateOrConnectWithoutGameInput[]
    createMany?: GameRegionCreateManyGameInputEnvelope
    connect?: GameRegionWhereUniqueInput | GameRegionWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type EnumReleaseStatusFieldUpdateOperationsInput = {
    set?: $Enums.ReleaseStatus
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type GameLanguageSupportUpdateManyWithoutGameNestedInput = {
    create?: XOR<GameLanguageSupportCreateWithoutGameInput, GameLanguageSupportUncheckedCreateWithoutGameInput> | GameLanguageSupportCreateWithoutGameInput[] | GameLanguageSupportUncheckedCreateWithoutGameInput[]
    connectOrCreate?: GameLanguageSupportCreateOrConnectWithoutGameInput | GameLanguageSupportCreateOrConnectWithoutGameInput[]
    upsert?: GameLanguageSupportUpsertWithWhereUniqueWithoutGameInput | GameLanguageSupportUpsertWithWhereUniqueWithoutGameInput[]
    createMany?: GameLanguageSupportCreateManyGameInputEnvelope
    set?: GameLanguageSupportWhereUniqueInput | GameLanguageSupportWhereUniqueInput[]
    disconnect?: GameLanguageSupportWhereUniqueInput | GameLanguageSupportWhereUniqueInput[]
    delete?: GameLanguageSupportWhereUniqueInput | GameLanguageSupportWhereUniqueInput[]
    connect?: GameLanguageSupportWhereUniqueInput | GameLanguageSupportWhereUniqueInput[]
    update?: GameLanguageSupportUpdateWithWhereUniqueWithoutGameInput | GameLanguageSupportUpdateWithWhereUniqueWithoutGameInput[]
    updateMany?: GameLanguageSupportUpdateManyWithWhereWithoutGameInput | GameLanguageSupportUpdateManyWithWhereWithoutGameInput[]
    deleteMany?: GameLanguageSupportScalarWhereInput | GameLanguageSupportScalarWhereInput[]
  }

  export type GameImageUpdateManyWithoutGameNestedInput = {
    create?: XOR<GameImageCreateWithoutGameInput, GameImageUncheckedCreateWithoutGameInput> | GameImageCreateWithoutGameInput[] | GameImageUncheckedCreateWithoutGameInput[]
    connectOrCreate?: GameImageCreateOrConnectWithoutGameInput | GameImageCreateOrConnectWithoutGameInput[]
    upsert?: GameImageUpsertWithWhereUniqueWithoutGameInput | GameImageUpsertWithWhereUniqueWithoutGameInput[]
    createMany?: GameImageCreateManyGameInputEnvelope
    set?: GameImageWhereUniqueInput | GameImageWhereUniqueInput[]
    disconnect?: GameImageWhereUniqueInput | GameImageWhereUniqueInput[]
    delete?: GameImageWhereUniqueInput | GameImageWhereUniqueInput[]
    connect?: GameImageWhereUniqueInput | GameImageWhereUniqueInput[]
    update?: GameImageUpdateWithWhereUniqueWithoutGameInput | GameImageUpdateWithWhereUniqueWithoutGameInput[]
    updateMany?: GameImageUpdateManyWithWhereWithoutGameInput | GameImageUpdateManyWithWhereWithoutGameInput[]
    deleteMany?: GameImageScalarWhereInput | GameImageScalarWhereInput[]
  }

  export type PsPlusUpdateManyWithoutGameNestedInput = {
    create?: XOR<PsPlusCreateWithoutGameInput, PsPlusUncheckedCreateWithoutGameInput> | PsPlusCreateWithoutGameInput[] | PsPlusUncheckedCreateWithoutGameInput[]
    connectOrCreate?: PsPlusCreateOrConnectWithoutGameInput | PsPlusCreateOrConnectWithoutGameInput[]
    upsert?: PsPlusUpsertWithWhereUniqueWithoutGameInput | PsPlusUpsertWithWhereUniqueWithoutGameInput[]
    createMany?: PsPlusCreateManyGameInputEnvelope
    set?: PsPlusWhereUniqueInput | PsPlusWhereUniqueInput[]
    disconnect?: PsPlusWhereUniqueInput | PsPlusWhereUniqueInput[]
    delete?: PsPlusWhereUniqueInput | PsPlusWhereUniqueInput[]
    connect?: PsPlusWhereUniqueInput | PsPlusWhereUniqueInput[]
    update?: PsPlusUpdateWithWhereUniqueWithoutGameInput | PsPlusUpdateWithWhereUniqueWithoutGameInput[]
    updateMany?: PsPlusUpdateManyWithWhereWithoutGameInput | PsPlusUpdateManyWithWhereWithoutGameInput[]
    deleteMany?: PsPlusScalarWhereInput | PsPlusScalarWhereInput[]
  }

  export type GameEditionUpdateManyWithoutGameNestedInput = {
    create?: XOR<GameEditionCreateWithoutGameInput, GameEditionUncheckedCreateWithoutGameInput> | GameEditionCreateWithoutGameInput[] | GameEditionUncheckedCreateWithoutGameInput[]
    connectOrCreate?: GameEditionCreateOrConnectWithoutGameInput | GameEditionCreateOrConnectWithoutGameInput[]
    upsert?: GameEditionUpsertWithWhereUniqueWithoutGameInput | GameEditionUpsertWithWhereUniqueWithoutGameInput[]
    createMany?: GameEditionCreateManyGameInputEnvelope
    set?: GameEditionWhereUniqueInput | GameEditionWhereUniqueInput[]
    disconnect?: GameEditionWhereUniqueInput | GameEditionWhereUniqueInput[]
    delete?: GameEditionWhereUniqueInput | GameEditionWhereUniqueInput[]
    connect?: GameEditionWhereUniqueInput | GameEditionWhereUniqueInput[]
    update?: GameEditionUpdateWithWhereUniqueWithoutGameInput | GameEditionUpdateWithWhereUniqueWithoutGameInput[]
    updateMany?: GameEditionUpdateManyWithWhereWithoutGameInput | GameEditionUpdateManyWithWhereWithoutGameInput[]
    deleteMany?: GameEditionScalarWhereInput | GameEditionScalarWhereInput[]
  }

  export type GameVersionUpdateManyWithoutGameNestedInput = {
    create?: XOR<GameVersionCreateWithoutGameInput, GameVersionUncheckedCreateWithoutGameInput> | GameVersionCreateWithoutGameInput[] | GameVersionUncheckedCreateWithoutGameInput[]
    connectOrCreate?: GameVersionCreateOrConnectWithoutGameInput | GameVersionCreateOrConnectWithoutGameInput[]
    upsert?: GameVersionUpsertWithWhereUniqueWithoutGameInput | GameVersionUpsertWithWhereUniqueWithoutGameInput[]
    createMany?: GameVersionCreateManyGameInputEnvelope
    set?: GameVersionWhereUniqueInput | GameVersionWhereUniqueInput[]
    disconnect?: GameVersionWhereUniqueInput | GameVersionWhereUniqueInput[]
    delete?: GameVersionWhereUniqueInput | GameVersionWhereUniqueInput[]
    connect?: GameVersionWhereUniqueInput | GameVersionWhereUniqueInput[]
    update?: GameVersionUpdateWithWhereUniqueWithoutGameInput | GameVersionUpdateWithWhereUniqueWithoutGameInput[]
    updateMany?: GameVersionUpdateManyWithWhereWithoutGameInput | GameVersionUpdateManyWithWhereWithoutGameInput[]
    deleteMany?: GameVersionScalarWhereInput | GameVersionScalarWhereInput[]
  }

  export type GameRegionUpdateManyWithoutGameNestedInput = {
    create?: XOR<GameRegionCreateWithoutGameInput, GameRegionUncheckedCreateWithoutGameInput> | GameRegionCreateWithoutGameInput[] | GameRegionUncheckedCreateWithoutGameInput[]
    connectOrCreate?: GameRegionCreateOrConnectWithoutGameInput | GameRegionCreateOrConnectWithoutGameInput[]
    upsert?: GameRegionUpsertWithWhereUniqueWithoutGameInput | GameRegionUpsertWithWhereUniqueWithoutGameInput[]
    createMany?: GameRegionCreateManyGameInputEnvelope
    set?: GameRegionWhereUniqueInput | GameRegionWhereUniqueInput[]
    disconnect?: GameRegionWhereUniqueInput | GameRegionWhereUniqueInput[]
    delete?: GameRegionWhereUniqueInput | GameRegionWhereUniqueInput[]
    connect?: GameRegionWhereUniqueInput | GameRegionWhereUniqueInput[]
    update?: GameRegionUpdateWithWhereUniqueWithoutGameInput | GameRegionUpdateWithWhereUniqueWithoutGameInput[]
    updateMany?: GameRegionUpdateManyWithWhereWithoutGameInput | GameRegionUpdateManyWithWhereWithoutGameInput[]
    deleteMany?: GameRegionScalarWhereInput | GameRegionScalarWhereInput[]
  }

  export type GameLanguageSupportUncheckedUpdateManyWithoutGameNestedInput = {
    create?: XOR<GameLanguageSupportCreateWithoutGameInput, GameLanguageSupportUncheckedCreateWithoutGameInput> | GameLanguageSupportCreateWithoutGameInput[] | GameLanguageSupportUncheckedCreateWithoutGameInput[]
    connectOrCreate?: GameLanguageSupportCreateOrConnectWithoutGameInput | GameLanguageSupportCreateOrConnectWithoutGameInput[]
    upsert?: GameLanguageSupportUpsertWithWhereUniqueWithoutGameInput | GameLanguageSupportUpsertWithWhereUniqueWithoutGameInput[]
    createMany?: GameLanguageSupportCreateManyGameInputEnvelope
    set?: GameLanguageSupportWhereUniqueInput | GameLanguageSupportWhereUniqueInput[]
    disconnect?: GameLanguageSupportWhereUniqueInput | GameLanguageSupportWhereUniqueInput[]
    delete?: GameLanguageSupportWhereUniqueInput | GameLanguageSupportWhereUniqueInput[]
    connect?: GameLanguageSupportWhereUniqueInput | GameLanguageSupportWhereUniqueInput[]
    update?: GameLanguageSupportUpdateWithWhereUniqueWithoutGameInput | GameLanguageSupportUpdateWithWhereUniqueWithoutGameInput[]
    updateMany?: GameLanguageSupportUpdateManyWithWhereWithoutGameInput | GameLanguageSupportUpdateManyWithWhereWithoutGameInput[]
    deleteMany?: GameLanguageSupportScalarWhereInput | GameLanguageSupportScalarWhereInput[]
  }

  export type GameImageUncheckedUpdateManyWithoutGameNestedInput = {
    create?: XOR<GameImageCreateWithoutGameInput, GameImageUncheckedCreateWithoutGameInput> | GameImageCreateWithoutGameInput[] | GameImageUncheckedCreateWithoutGameInput[]
    connectOrCreate?: GameImageCreateOrConnectWithoutGameInput | GameImageCreateOrConnectWithoutGameInput[]
    upsert?: GameImageUpsertWithWhereUniqueWithoutGameInput | GameImageUpsertWithWhereUniqueWithoutGameInput[]
    createMany?: GameImageCreateManyGameInputEnvelope
    set?: GameImageWhereUniqueInput | GameImageWhereUniqueInput[]
    disconnect?: GameImageWhereUniqueInput | GameImageWhereUniqueInput[]
    delete?: GameImageWhereUniqueInput | GameImageWhereUniqueInput[]
    connect?: GameImageWhereUniqueInput | GameImageWhereUniqueInput[]
    update?: GameImageUpdateWithWhereUniqueWithoutGameInput | GameImageUpdateWithWhereUniqueWithoutGameInput[]
    updateMany?: GameImageUpdateManyWithWhereWithoutGameInput | GameImageUpdateManyWithWhereWithoutGameInput[]
    deleteMany?: GameImageScalarWhereInput | GameImageScalarWhereInput[]
  }

  export type PsPlusUncheckedUpdateManyWithoutGameNestedInput = {
    create?: XOR<PsPlusCreateWithoutGameInput, PsPlusUncheckedCreateWithoutGameInput> | PsPlusCreateWithoutGameInput[] | PsPlusUncheckedCreateWithoutGameInput[]
    connectOrCreate?: PsPlusCreateOrConnectWithoutGameInput | PsPlusCreateOrConnectWithoutGameInput[]
    upsert?: PsPlusUpsertWithWhereUniqueWithoutGameInput | PsPlusUpsertWithWhereUniqueWithoutGameInput[]
    createMany?: PsPlusCreateManyGameInputEnvelope
    set?: PsPlusWhereUniqueInput | PsPlusWhereUniqueInput[]
    disconnect?: PsPlusWhereUniqueInput | PsPlusWhereUniqueInput[]
    delete?: PsPlusWhereUniqueInput | PsPlusWhereUniqueInput[]
    connect?: PsPlusWhereUniqueInput | PsPlusWhereUniqueInput[]
    update?: PsPlusUpdateWithWhereUniqueWithoutGameInput | PsPlusUpdateWithWhereUniqueWithoutGameInput[]
    updateMany?: PsPlusUpdateManyWithWhereWithoutGameInput | PsPlusUpdateManyWithWhereWithoutGameInput[]
    deleteMany?: PsPlusScalarWhereInput | PsPlusScalarWhereInput[]
  }

  export type GameEditionUncheckedUpdateManyWithoutGameNestedInput = {
    create?: XOR<GameEditionCreateWithoutGameInput, GameEditionUncheckedCreateWithoutGameInput> | GameEditionCreateWithoutGameInput[] | GameEditionUncheckedCreateWithoutGameInput[]
    connectOrCreate?: GameEditionCreateOrConnectWithoutGameInput | GameEditionCreateOrConnectWithoutGameInput[]
    upsert?: GameEditionUpsertWithWhereUniqueWithoutGameInput | GameEditionUpsertWithWhereUniqueWithoutGameInput[]
    createMany?: GameEditionCreateManyGameInputEnvelope
    set?: GameEditionWhereUniqueInput | GameEditionWhereUniqueInput[]
    disconnect?: GameEditionWhereUniqueInput | GameEditionWhereUniqueInput[]
    delete?: GameEditionWhereUniqueInput | GameEditionWhereUniqueInput[]
    connect?: GameEditionWhereUniqueInput | GameEditionWhereUniqueInput[]
    update?: GameEditionUpdateWithWhereUniqueWithoutGameInput | GameEditionUpdateWithWhereUniqueWithoutGameInput[]
    updateMany?: GameEditionUpdateManyWithWhereWithoutGameInput | GameEditionUpdateManyWithWhereWithoutGameInput[]
    deleteMany?: GameEditionScalarWhereInput | GameEditionScalarWhereInput[]
  }

  export type GameVersionUncheckedUpdateManyWithoutGameNestedInput = {
    create?: XOR<GameVersionCreateWithoutGameInput, GameVersionUncheckedCreateWithoutGameInput> | GameVersionCreateWithoutGameInput[] | GameVersionUncheckedCreateWithoutGameInput[]
    connectOrCreate?: GameVersionCreateOrConnectWithoutGameInput | GameVersionCreateOrConnectWithoutGameInput[]
    upsert?: GameVersionUpsertWithWhereUniqueWithoutGameInput | GameVersionUpsertWithWhereUniqueWithoutGameInput[]
    createMany?: GameVersionCreateManyGameInputEnvelope
    set?: GameVersionWhereUniqueInput | GameVersionWhereUniqueInput[]
    disconnect?: GameVersionWhereUniqueInput | GameVersionWhereUniqueInput[]
    delete?: GameVersionWhereUniqueInput | GameVersionWhereUniqueInput[]
    connect?: GameVersionWhereUniqueInput | GameVersionWhereUniqueInput[]
    update?: GameVersionUpdateWithWhereUniqueWithoutGameInput | GameVersionUpdateWithWhereUniqueWithoutGameInput[]
    updateMany?: GameVersionUpdateManyWithWhereWithoutGameInput | GameVersionUpdateManyWithWhereWithoutGameInput[]
    deleteMany?: GameVersionScalarWhereInput | GameVersionScalarWhereInput[]
  }

  export type GameRegionUncheckedUpdateManyWithoutGameNestedInput = {
    create?: XOR<GameRegionCreateWithoutGameInput, GameRegionUncheckedCreateWithoutGameInput> | GameRegionCreateWithoutGameInput[] | GameRegionUncheckedCreateWithoutGameInput[]
    connectOrCreate?: GameRegionCreateOrConnectWithoutGameInput | GameRegionCreateOrConnectWithoutGameInput[]
    upsert?: GameRegionUpsertWithWhereUniqueWithoutGameInput | GameRegionUpsertWithWhereUniqueWithoutGameInput[]
    createMany?: GameRegionCreateManyGameInputEnvelope
    set?: GameRegionWhereUniqueInput | GameRegionWhereUniqueInput[]
    disconnect?: GameRegionWhereUniqueInput | GameRegionWhereUniqueInput[]
    delete?: GameRegionWhereUniqueInput | GameRegionWhereUniqueInput[]
    connect?: GameRegionWhereUniqueInput | GameRegionWhereUniqueInput[]
    update?: GameRegionUpdateWithWhereUniqueWithoutGameInput | GameRegionUpdateWithWhereUniqueWithoutGameInput[]
    updateMany?: GameRegionUpdateManyWithWhereWithoutGameInput | GameRegionUpdateManyWithWhereWithoutGameInput[]
    deleteMany?: GameRegionScalarWhereInput | GameRegionScalarWhereInput[]
  }

  export type GameLanguageSupportCreateNestedManyWithoutLanguageInput = {
    create?: XOR<GameLanguageSupportCreateWithoutLanguageInput, GameLanguageSupportUncheckedCreateWithoutLanguageInput> | GameLanguageSupportCreateWithoutLanguageInput[] | GameLanguageSupportUncheckedCreateWithoutLanguageInput[]
    connectOrCreate?: GameLanguageSupportCreateOrConnectWithoutLanguageInput | GameLanguageSupportCreateOrConnectWithoutLanguageInput[]
    createMany?: GameLanguageSupportCreateManyLanguageInputEnvelope
    connect?: GameLanguageSupportWhereUniqueInput | GameLanguageSupportWhereUniqueInput[]
  }

  export type GameLanguageSupportUncheckedCreateNestedManyWithoutLanguageInput = {
    create?: XOR<GameLanguageSupportCreateWithoutLanguageInput, GameLanguageSupportUncheckedCreateWithoutLanguageInput> | GameLanguageSupportCreateWithoutLanguageInput[] | GameLanguageSupportUncheckedCreateWithoutLanguageInput[]
    connectOrCreate?: GameLanguageSupportCreateOrConnectWithoutLanguageInput | GameLanguageSupportCreateOrConnectWithoutLanguageInput[]
    createMany?: GameLanguageSupportCreateManyLanguageInputEnvelope
    connect?: GameLanguageSupportWhereUniqueInput | GameLanguageSupportWhereUniqueInput[]
  }

  export type GameLanguageSupportUpdateManyWithoutLanguageNestedInput = {
    create?: XOR<GameLanguageSupportCreateWithoutLanguageInput, GameLanguageSupportUncheckedCreateWithoutLanguageInput> | GameLanguageSupportCreateWithoutLanguageInput[] | GameLanguageSupportUncheckedCreateWithoutLanguageInput[]
    connectOrCreate?: GameLanguageSupportCreateOrConnectWithoutLanguageInput | GameLanguageSupportCreateOrConnectWithoutLanguageInput[]
    upsert?: GameLanguageSupportUpsertWithWhereUniqueWithoutLanguageInput | GameLanguageSupportUpsertWithWhereUniqueWithoutLanguageInput[]
    createMany?: GameLanguageSupportCreateManyLanguageInputEnvelope
    set?: GameLanguageSupportWhereUniqueInput | GameLanguageSupportWhereUniqueInput[]
    disconnect?: GameLanguageSupportWhereUniqueInput | GameLanguageSupportWhereUniqueInput[]
    delete?: GameLanguageSupportWhereUniqueInput | GameLanguageSupportWhereUniqueInput[]
    connect?: GameLanguageSupportWhereUniqueInput | GameLanguageSupportWhereUniqueInput[]
    update?: GameLanguageSupportUpdateWithWhereUniqueWithoutLanguageInput | GameLanguageSupportUpdateWithWhereUniqueWithoutLanguageInput[]
    updateMany?: GameLanguageSupportUpdateManyWithWhereWithoutLanguageInput | GameLanguageSupportUpdateManyWithWhereWithoutLanguageInput[]
    deleteMany?: GameLanguageSupportScalarWhereInput | GameLanguageSupportScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type GameLanguageSupportUncheckedUpdateManyWithoutLanguageNestedInput = {
    create?: XOR<GameLanguageSupportCreateWithoutLanguageInput, GameLanguageSupportUncheckedCreateWithoutLanguageInput> | GameLanguageSupportCreateWithoutLanguageInput[] | GameLanguageSupportUncheckedCreateWithoutLanguageInput[]
    connectOrCreate?: GameLanguageSupportCreateOrConnectWithoutLanguageInput | GameLanguageSupportCreateOrConnectWithoutLanguageInput[]
    upsert?: GameLanguageSupportUpsertWithWhereUniqueWithoutLanguageInput | GameLanguageSupportUpsertWithWhereUniqueWithoutLanguageInput[]
    createMany?: GameLanguageSupportCreateManyLanguageInputEnvelope
    set?: GameLanguageSupportWhereUniqueInput | GameLanguageSupportWhereUniqueInput[]
    disconnect?: GameLanguageSupportWhereUniqueInput | GameLanguageSupportWhereUniqueInput[]
    delete?: GameLanguageSupportWhereUniqueInput | GameLanguageSupportWhereUniqueInput[]
    connect?: GameLanguageSupportWhereUniqueInput | GameLanguageSupportWhereUniqueInput[]
    update?: GameLanguageSupportUpdateWithWhereUniqueWithoutLanguageInput | GameLanguageSupportUpdateWithWhereUniqueWithoutLanguageInput[]
    updateMany?: GameLanguageSupportUpdateManyWithWhereWithoutLanguageInput | GameLanguageSupportUpdateManyWithWhereWithoutLanguageInput[]
    deleteMany?: GameLanguageSupportScalarWhereInput | GameLanguageSupportScalarWhereInput[]
  }

  export type GameCreateNestedOneWithoutGameLanguageSupportInput = {
    create?: XOR<GameCreateWithoutGameLanguageSupportInput, GameUncheckedCreateWithoutGameLanguageSupportInput>
    connectOrCreate?: GameCreateOrConnectWithoutGameLanguageSupportInput
    connect?: GameWhereUniqueInput
  }

  export type LanguageCreateNestedOneWithoutGameLanguageSupportInput = {
    create?: XOR<LanguageCreateWithoutGameLanguageSupportInput, LanguageUncheckedCreateWithoutGameLanguageSupportInput>
    connectOrCreate?: LanguageCreateOrConnectWithoutGameLanguageSupportInput
    connect?: LanguageWhereUniqueInput
  }

  export type EnumLanguageTypeFieldUpdateOperationsInput = {
    set?: $Enums.LanguageType
  }

  export type GameUpdateOneRequiredWithoutGameLanguageSupportNestedInput = {
    create?: XOR<GameCreateWithoutGameLanguageSupportInput, GameUncheckedCreateWithoutGameLanguageSupportInput>
    connectOrCreate?: GameCreateOrConnectWithoutGameLanguageSupportInput
    upsert?: GameUpsertWithoutGameLanguageSupportInput
    connect?: GameWhereUniqueInput
    update?: XOR<XOR<GameUpdateToOneWithWhereWithoutGameLanguageSupportInput, GameUpdateWithoutGameLanguageSupportInput>, GameUncheckedUpdateWithoutGameLanguageSupportInput>
  }

  export type LanguageUpdateOneRequiredWithoutGameLanguageSupportNestedInput = {
    create?: XOR<LanguageCreateWithoutGameLanguageSupportInput, LanguageUncheckedCreateWithoutGameLanguageSupportInput>
    connectOrCreate?: LanguageCreateOrConnectWithoutGameLanguageSupportInput
    upsert?: LanguageUpsertWithoutGameLanguageSupportInput
    connect?: LanguageWhereUniqueInput
    update?: XOR<XOR<LanguageUpdateToOneWithWhereWithoutGameLanguageSupportInput, LanguageUpdateWithoutGameLanguageSupportInput>, LanguageUncheckedUpdateWithoutGameLanguageSupportInput>
  }

  export type GameCreateNestedOneWithoutGameImageInput = {
    create?: XOR<GameCreateWithoutGameImageInput, GameUncheckedCreateWithoutGameImageInput>
    connectOrCreate?: GameCreateOrConnectWithoutGameImageInput
    connect?: GameWhereUniqueInput
  }

  export type EnumImageTypeFieldUpdateOperationsInput = {
    set?: $Enums.ImageType
  }

  export type GameUpdateOneRequiredWithoutGameImageNestedInput = {
    create?: XOR<GameCreateWithoutGameImageInput, GameUncheckedCreateWithoutGameImageInput>
    connectOrCreate?: GameCreateOrConnectWithoutGameImageInput
    upsert?: GameUpsertWithoutGameImageInput
    connect?: GameWhereUniqueInput
    update?: XOR<XOR<GameUpdateToOneWithWhereWithoutGameImageInput, GameUpdateWithoutGameImageInput>, GameUncheckedUpdateWithoutGameImageInput>
  }

  export type GameCreateNestedOneWithoutPsPlusInput = {
    create?: XOR<GameCreateWithoutPsPlusInput, GameUncheckedCreateWithoutPsPlusInput>
    connectOrCreate?: GameCreateOrConnectWithoutPsPlusInput
    connect?: GameWhereUniqueInput
  }

  export type EnumPsPlusTypeFieldUpdateOperationsInput = {
    set?: $Enums.PsPlusType
  }

  export type GameUpdateOneRequiredWithoutPsPlusNestedInput = {
    create?: XOR<GameCreateWithoutPsPlusInput, GameUncheckedCreateWithoutPsPlusInput>
    connectOrCreate?: GameCreateOrConnectWithoutPsPlusInput
    upsert?: GameUpsertWithoutPsPlusInput
    connect?: GameWhereUniqueInput
    update?: XOR<XOR<GameUpdateToOneWithWhereWithoutPsPlusInput, GameUpdateWithoutPsPlusInput>, GameUncheckedUpdateWithoutPsPlusInput>
  }

  export type GameCreateNestedOneWithoutGameEditionInput = {
    create?: XOR<GameCreateWithoutGameEditionInput, GameUncheckedCreateWithoutGameEditionInput>
    connectOrCreate?: GameCreateOrConnectWithoutGameEditionInput
    connect?: GameWhereUniqueInput
  }

  export type GameVersionCreateNestedManyWithoutEditionInput = {
    create?: XOR<GameVersionCreateWithoutEditionInput, GameVersionUncheckedCreateWithoutEditionInput> | GameVersionCreateWithoutEditionInput[] | GameVersionUncheckedCreateWithoutEditionInput[]
    connectOrCreate?: GameVersionCreateOrConnectWithoutEditionInput | GameVersionCreateOrConnectWithoutEditionInput[]
    createMany?: GameVersionCreateManyEditionInputEnvelope
    connect?: GameVersionWhereUniqueInput | GameVersionWhereUniqueInput[]
  }

  export type GameVersionUncheckedCreateNestedManyWithoutEditionInput = {
    create?: XOR<GameVersionCreateWithoutEditionInput, GameVersionUncheckedCreateWithoutEditionInput> | GameVersionCreateWithoutEditionInput[] | GameVersionUncheckedCreateWithoutEditionInput[]
    connectOrCreate?: GameVersionCreateOrConnectWithoutEditionInput | GameVersionCreateOrConnectWithoutEditionInput[]
    createMany?: GameVersionCreateManyEditionInputEnvelope
    connect?: GameVersionWhereUniqueInput | GameVersionWhereUniqueInput[]
  }

  export type GameUpdateOneRequiredWithoutGameEditionNestedInput = {
    create?: XOR<GameCreateWithoutGameEditionInput, GameUncheckedCreateWithoutGameEditionInput>
    connectOrCreate?: GameCreateOrConnectWithoutGameEditionInput
    upsert?: GameUpsertWithoutGameEditionInput
    connect?: GameWhereUniqueInput
    update?: XOR<XOR<GameUpdateToOneWithWhereWithoutGameEditionInput, GameUpdateWithoutGameEditionInput>, GameUncheckedUpdateWithoutGameEditionInput>
  }

  export type GameVersionUpdateManyWithoutEditionNestedInput = {
    create?: XOR<GameVersionCreateWithoutEditionInput, GameVersionUncheckedCreateWithoutEditionInput> | GameVersionCreateWithoutEditionInput[] | GameVersionUncheckedCreateWithoutEditionInput[]
    connectOrCreate?: GameVersionCreateOrConnectWithoutEditionInput | GameVersionCreateOrConnectWithoutEditionInput[]
    upsert?: GameVersionUpsertWithWhereUniqueWithoutEditionInput | GameVersionUpsertWithWhereUniqueWithoutEditionInput[]
    createMany?: GameVersionCreateManyEditionInputEnvelope
    set?: GameVersionWhereUniqueInput | GameVersionWhereUniqueInput[]
    disconnect?: GameVersionWhereUniqueInput | GameVersionWhereUniqueInput[]
    delete?: GameVersionWhereUniqueInput | GameVersionWhereUniqueInput[]
    connect?: GameVersionWhereUniqueInput | GameVersionWhereUniqueInput[]
    update?: GameVersionUpdateWithWhereUniqueWithoutEditionInput | GameVersionUpdateWithWhereUniqueWithoutEditionInput[]
    updateMany?: GameVersionUpdateManyWithWhereWithoutEditionInput | GameVersionUpdateManyWithWhereWithoutEditionInput[]
    deleteMany?: GameVersionScalarWhereInput | GameVersionScalarWhereInput[]
  }

  export type GameVersionUncheckedUpdateManyWithoutEditionNestedInput = {
    create?: XOR<GameVersionCreateWithoutEditionInput, GameVersionUncheckedCreateWithoutEditionInput> | GameVersionCreateWithoutEditionInput[] | GameVersionUncheckedCreateWithoutEditionInput[]
    connectOrCreate?: GameVersionCreateOrConnectWithoutEditionInput | GameVersionCreateOrConnectWithoutEditionInput[]
    upsert?: GameVersionUpsertWithWhereUniqueWithoutEditionInput | GameVersionUpsertWithWhereUniqueWithoutEditionInput[]
    createMany?: GameVersionCreateManyEditionInputEnvelope
    set?: GameVersionWhereUniqueInput | GameVersionWhereUniqueInput[]
    disconnect?: GameVersionWhereUniqueInput | GameVersionWhereUniqueInput[]
    delete?: GameVersionWhereUniqueInput | GameVersionWhereUniqueInput[]
    connect?: GameVersionWhereUniqueInput | GameVersionWhereUniqueInput[]
    update?: GameVersionUpdateWithWhereUniqueWithoutEditionInput | GameVersionUpdateWithWhereUniqueWithoutEditionInput[]
    updateMany?: GameVersionUpdateManyWithWhereWithoutEditionInput | GameVersionUpdateManyWithWhereWithoutEditionInput[]
    deleteMany?: GameVersionScalarWhereInput | GameVersionScalarWhereInput[]
  }

  export type GameRegionCreateNestedManyWithoutRegionInput = {
    create?: XOR<GameRegionCreateWithoutRegionInput, GameRegionUncheckedCreateWithoutRegionInput> | GameRegionCreateWithoutRegionInput[] | GameRegionUncheckedCreateWithoutRegionInput[]
    connectOrCreate?: GameRegionCreateOrConnectWithoutRegionInput | GameRegionCreateOrConnectWithoutRegionInput[]
    createMany?: GameRegionCreateManyRegionInputEnvelope
    connect?: GameRegionWhereUniqueInput | GameRegionWhereUniqueInput[]
  }

  export type GameRegionUncheckedCreateNestedManyWithoutRegionInput = {
    create?: XOR<GameRegionCreateWithoutRegionInput, GameRegionUncheckedCreateWithoutRegionInput> | GameRegionCreateWithoutRegionInput[] | GameRegionUncheckedCreateWithoutRegionInput[]
    connectOrCreate?: GameRegionCreateOrConnectWithoutRegionInput | GameRegionCreateOrConnectWithoutRegionInput[]
    createMany?: GameRegionCreateManyRegionInputEnvelope
    connect?: GameRegionWhereUniqueInput | GameRegionWhereUniqueInput[]
  }

  export type GameRegionUpdateManyWithoutRegionNestedInput = {
    create?: XOR<GameRegionCreateWithoutRegionInput, GameRegionUncheckedCreateWithoutRegionInput> | GameRegionCreateWithoutRegionInput[] | GameRegionUncheckedCreateWithoutRegionInput[]
    connectOrCreate?: GameRegionCreateOrConnectWithoutRegionInput | GameRegionCreateOrConnectWithoutRegionInput[]
    upsert?: GameRegionUpsertWithWhereUniqueWithoutRegionInput | GameRegionUpsertWithWhereUniqueWithoutRegionInput[]
    createMany?: GameRegionCreateManyRegionInputEnvelope
    set?: GameRegionWhereUniqueInput | GameRegionWhereUniqueInput[]
    disconnect?: GameRegionWhereUniqueInput | GameRegionWhereUniqueInput[]
    delete?: GameRegionWhereUniqueInput | GameRegionWhereUniqueInput[]
    connect?: GameRegionWhereUniqueInput | GameRegionWhereUniqueInput[]
    update?: GameRegionUpdateWithWhereUniqueWithoutRegionInput | GameRegionUpdateWithWhereUniqueWithoutRegionInput[]
    updateMany?: GameRegionUpdateManyWithWhereWithoutRegionInput | GameRegionUpdateManyWithWhereWithoutRegionInput[]
    deleteMany?: GameRegionScalarWhereInput | GameRegionScalarWhereInput[]
  }

  export type GameRegionUncheckedUpdateManyWithoutRegionNestedInput = {
    create?: XOR<GameRegionCreateWithoutRegionInput, GameRegionUncheckedCreateWithoutRegionInput> | GameRegionCreateWithoutRegionInput[] | GameRegionUncheckedCreateWithoutRegionInput[]
    connectOrCreate?: GameRegionCreateOrConnectWithoutRegionInput | GameRegionCreateOrConnectWithoutRegionInput[]
    upsert?: GameRegionUpsertWithWhereUniqueWithoutRegionInput | GameRegionUpsertWithWhereUniqueWithoutRegionInput[]
    createMany?: GameRegionCreateManyRegionInputEnvelope
    set?: GameRegionWhereUniqueInput | GameRegionWhereUniqueInput[]
    disconnect?: GameRegionWhereUniqueInput | GameRegionWhereUniqueInput[]
    delete?: GameRegionWhereUniqueInput | GameRegionWhereUniqueInput[]
    connect?: GameRegionWhereUniqueInput | GameRegionWhereUniqueInput[]
    update?: GameRegionUpdateWithWhereUniqueWithoutRegionInput | GameRegionUpdateWithWhereUniqueWithoutRegionInput[]
    updateMany?: GameRegionUpdateManyWithWhereWithoutRegionInput | GameRegionUpdateManyWithWhereWithoutRegionInput[]
    deleteMany?: GameRegionScalarWhereInput | GameRegionScalarWhereInput[]
  }

  export type GameCreateNestedOneWithoutGameVersionInput = {
    create?: XOR<GameCreateWithoutGameVersionInput, GameUncheckedCreateWithoutGameVersionInput>
    connectOrCreate?: GameCreateOrConnectWithoutGameVersionInput
    connect?: GameWhereUniqueInput
  }

  export type GameEditionCreateNestedOneWithoutGameVersionInput = {
    create?: XOR<GameEditionCreateWithoutGameVersionInput, GameEditionUncheckedCreateWithoutGameVersionInput>
    connectOrCreate?: GameEditionCreateOrConnectWithoutGameVersionInput
    connect?: GameEditionWhereUniqueInput
  }

  export type GameVersionRegionCreateNestedManyWithoutGameVersionInput = {
    create?: XOR<GameVersionRegionCreateWithoutGameVersionInput, GameVersionRegionUncheckedCreateWithoutGameVersionInput> | GameVersionRegionCreateWithoutGameVersionInput[] | GameVersionRegionUncheckedCreateWithoutGameVersionInput[]
    connectOrCreate?: GameVersionRegionCreateOrConnectWithoutGameVersionInput | GameVersionRegionCreateOrConnectWithoutGameVersionInput[]
    createMany?: GameVersionRegionCreateManyGameVersionInputEnvelope
    connect?: GameVersionRegionWhereUniqueInput | GameVersionRegionWhereUniqueInput[]
  }

  export type GameVersionRegionUncheckedCreateNestedManyWithoutGameVersionInput = {
    create?: XOR<GameVersionRegionCreateWithoutGameVersionInput, GameVersionRegionUncheckedCreateWithoutGameVersionInput> | GameVersionRegionCreateWithoutGameVersionInput[] | GameVersionRegionUncheckedCreateWithoutGameVersionInput[]
    connectOrCreate?: GameVersionRegionCreateOrConnectWithoutGameVersionInput | GameVersionRegionCreateOrConnectWithoutGameVersionInput[]
    createMany?: GameVersionRegionCreateManyGameVersionInputEnvelope
    connect?: GameVersionRegionWhereUniqueInput | GameVersionRegionWhereUniqueInput[]
  }

  export type EnumPlatformFieldUpdateOperationsInput = {
    set?: $Enums.Platform
  }

  export type GameUpdateOneRequiredWithoutGameVersionNestedInput = {
    create?: XOR<GameCreateWithoutGameVersionInput, GameUncheckedCreateWithoutGameVersionInput>
    connectOrCreate?: GameCreateOrConnectWithoutGameVersionInput
    upsert?: GameUpsertWithoutGameVersionInput
    connect?: GameWhereUniqueInput
    update?: XOR<XOR<GameUpdateToOneWithWhereWithoutGameVersionInput, GameUpdateWithoutGameVersionInput>, GameUncheckedUpdateWithoutGameVersionInput>
  }

  export type GameEditionUpdateOneRequiredWithoutGameVersionNestedInput = {
    create?: XOR<GameEditionCreateWithoutGameVersionInput, GameEditionUncheckedCreateWithoutGameVersionInput>
    connectOrCreate?: GameEditionCreateOrConnectWithoutGameVersionInput
    upsert?: GameEditionUpsertWithoutGameVersionInput
    connect?: GameEditionWhereUniqueInput
    update?: XOR<XOR<GameEditionUpdateToOneWithWhereWithoutGameVersionInput, GameEditionUpdateWithoutGameVersionInput>, GameEditionUncheckedUpdateWithoutGameVersionInput>
  }

  export type GameVersionRegionUpdateManyWithoutGameVersionNestedInput = {
    create?: XOR<GameVersionRegionCreateWithoutGameVersionInput, GameVersionRegionUncheckedCreateWithoutGameVersionInput> | GameVersionRegionCreateWithoutGameVersionInput[] | GameVersionRegionUncheckedCreateWithoutGameVersionInput[]
    connectOrCreate?: GameVersionRegionCreateOrConnectWithoutGameVersionInput | GameVersionRegionCreateOrConnectWithoutGameVersionInput[]
    upsert?: GameVersionRegionUpsertWithWhereUniqueWithoutGameVersionInput | GameVersionRegionUpsertWithWhereUniqueWithoutGameVersionInput[]
    createMany?: GameVersionRegionCreateManyGameVersionInputEnvelope
    set?: GameVersionRegionWhereUniqueInput | GameVersionRegionWhereUniqueInput[]
    disconnect?: GameVersionRegionWhereUniqueInput | GameVersionRegionWhereUniqueInput[]
    delete?: GameVersionRegionWhereUniqueInput | GameVersionRegionWhereUniqueInput[]
    connect?: GameVersionRegionWhereUniqueInput | GameVersionRegionWhereUniqueInput[]
    update?: GameVersionRegionUpdateWithWhereUniqueWithoutGameVersionInput | GameVersionRegionUpdateWithWhereUniqueWithoutGameVersionInput[]
    updateMany?: GameVersionRegionUpdateManyWithWhereWithoutGameVersionInput | GameVersionRegionUpdateManyWithWhereWithoutGameVersionInput[]
    deleteMany?: GameVersionRegionScalarWhereInput | GameVersionRegionScalarWhereInput[]
  }

  export type GameVersionRegionUncheckedUpdateManyWithoutGameVersionNestedInput = {
    create?: XOR<GameVersionRegionCreateWithoutGameVersionInput, GameVersionRegionUncheckedCreateWithoutGameVersionInput> | GameVersionRegionCreateWithoutGameVersionInput[] | GameVersionRegionUncheckedCreateWithoutGameVersionInput[]
    connectOrCreate?: GameVersionRegionCreateOrConnectWithoutGameVersionInput | GameVersionRegionCreateOrConnectWithoutGameVersionInput[]
    upsert?: GameVersionRegionUpsertWithWhereUniqueWithoutGameVersionInput | GameVersionRegionUpsertWithWhereUniqueWithoutGameVersionInput[]
    createMany?: GameVersionRegionCreateManyGameVersionInputEnvelope
    set?: GameVersionRegionWhereUniqueInput | GameVersionRegionWhereUniqueInput[]
    disconnect?: GameVersionRegionWhereUniqueInput | GameVersionRegionWhereUniqueInput[]
    delete?: GameVersionRegionWhereUniqueInput | GameVersionRegionWhereUniqueInput[]
    connect?: GameVersionRegionWhereUniqueInput | GameVersionRegionWhereUniqueInput[]
    update?: GameVersionRegionUpdateWithWhereUniqueWithoutGameVersionInput | GameVersionRegionUpdateWithWhereUniqueWithoutGameVersionInput[]
    updateMany?: GameVersionRegionUpdateManyWithWhereWithoutGameVersionInput | GameVersionRegionUpdateManyWithWhereWithoutGameVersionInput[]
    deleteMany?: GameVersionRegionScalarWhereInput | GameVersionRegionScalarWhereInput[]
  }

  export type GameCreateNestedOneWithoutGameRegionInput = {
    create?: XOR<GameCreateWithoutGameRegionInput, GameUncheckedCreateWithoutGameRegionInput>
    connectOrCreate?: GameCreateOrConnectWithoutGameRegionInput
    connect?: GameWhereUniqueInput
  }

  export type RegionCreateNestedOneWithoutGameRegionInput = {
    create?: XOR<RegionCreateWithoutGameRegionInput, RegionUncheckedCreateWithoutGameRegionInput>
    connectOrCreate?: RegionCreateOrConnectWithoutGameRegionInput
    connect?: RegionWhereUniqueInput
  }

  export type GameVersionRegionCreateNestedManyWithoutGameRegionInput = {
    create?: XOR<GameVersionRegionCreateWithoutGameRegionInput, GameVersionRegionUncheckedCreateWithoutGameRegionInput> | GameVersionRegionCreateWithoutGameRegionInput[] | GameVersionRegionUncheckedCreateWithoutGameRegionInput[]
    connectOrCreate?: GameVersionRegionCreateOrConnectWithoutGameRegionInput | GameVersionRegionCreateOrConnectWithoutGameRegionInput[]
    createMany?: GameVersionRegionCreateManyGameRegionInputEnvelope
    connect?: GameVersionRegionWhereUniqueInput | GameVersionRegionWhereUniqueInput[]
  }

  export type GameVersionRegionUncheckedCreateNestedManyWithoutGameRegionInput = {
    create?: XOR<GameVersionRegionCreateWithoutGameRegionInput, GameVersionRegionUncheckedCreateWithoutGameRegionInput> | GameVersionRegionCreateWithoutGameRegionInput[] | GameVersionRegionUncheckedCreateWithoutGameRegionInput[]
    connectOrCreate?: GameVersionRegionCreateOrConnectWithoutGameRegionInput | GameVersionRegionCreateOrConnectWithoutGameRegionInput[]
    createMany?: GameVersionRegionCreateManyGameRegionInputEnvelope
    connect?: GameVersionRegionWhereUniqueInput | GameVersionRegionWhereUniqueInput[]
  }

  export type GameUpdateOneRequiredWithoutGameRegionNestedInput = {
    create?: XOR<GameCreateWithoutGameRegionInput, GameUncheckedCreateWithoutGameRegionInput>
    connectOrCreate?: GameCreateOrConnectWithoutGameRegionInput
    upsert?: GameUpsertWithoutGameRegionInput
    connect?: GameWhereUniqueInput
    update?: XOR<XOR<GameUpdateToOneWithWhereWithoutGameRegionInput, GameUpdateWithoutGameRegionInput>, GameUncheckedUpdateWithoutGameRegionInput>
  }

  export type RegionUpdateOneRequiredWithoutGameRegionNestedInput = {
    create?: XOR<RegionCreateWithoutGameRegionInput, RegionUncheckedCreateWithoutGameRegionInput>
    connectOrCreate?: RegionCreateOrConnectWithoutGameRegionInput
    upsert?: RegionUpsertWithoutGameRegionInput
    connect?: RegionWhereUniqueInput
    update?: XOR<XOR<RegionUpdateToOneWithWhereWithoutGameRegionInput, RegionUpdateWithoutGameRegionInput>, RegionUncheckedUpdateWithoutGameRegionInput>
  }

  export type GameVersionRegionUpdateManyWithoutGameRegionNestedInput = {
    create?: XOR<GameVersionRegionCreateWithoutGameRegionInput, GameVersionRegionUncheckedCreateWithoutGameRegionInput> | GameVersionRegionCreateWithoutGameRegionInput[] | GameVersionRegionUncheckedCreateWithoutGameRegionInput[]
    connectOrCreate?: GameVersionRegionCreateOrConnectWithoutGameRegionInput | GameVersionRegionCreateOrConnectWithoutGameRegionInput[]
    upsert?: GameVersionRegionUpsertWithWhereUniqueWithoutGameRegionInput | GameVersionRegionUpsertWithWhereUniqueWithoutGameRegionInput[]
    createMany?: GameVersionRegionCreateManyGameRegionInputEnvelope
    set?: GameVersionRegionWhereUniqueInput | GameVersionRegionWhereUniqueInput[]
    disconnect?: GameVersionRegionWhereUniqueInput | GameVersionRegionWhereUniqueInput[]
    delete?: GameVersionRegionWhereUniqueInput | GameVersionRegionWhereUniqueInput[]
    connect?: GameVersionRegionWhereUniqueInput | GameVersionRegionWhereUniqueInput[]
    update?: GameVersionRegionUpdateWithWhereUniqueWithoutGameRegionInput | GameVersionRegionUpdateWithWhereUniqueWithoutGameRegionInput[]
    updateMany?: GameVersionRegionUpdateManyWithWhereWithoutGameRegionInput | GameVersionRegionUpdateManyWithWhereWithoutGameRegionInput[]
    deleteMany?: GameVersionRegionScalarWhereInput | GameVersionRegionScalarWhereInput[]
  }

  export type GameVersionRegionUncheckedUpdateManyWithoutGameRegionNestedInput = {
    create?: XOR<GameVersionRegionCreateWithoutGameRegionInput, GameVersionRegionUncheckedCreateWithoutGameRegionInput> | GameVersionRegionCreateWithoutGameRegionInput[] | GameVersionRegionUncheckedCreateWithoutGameRegionInput[]
    connectOrCreate?: GameVersionRegionCreateOrConnectWithoutGameRegionInput | GameVersionRegionCreateOrConnectWithoutGameRegionInput[]
    upsert?: GameVersionRegionUpsertWithWhereUniqueWithoutGameRegionInput | GameVersionRegionUpsertWithWhereUniqueWithoutGameRegionInput[]
    createMany?: GameVersionRegionCreateManyGameRegionInputEnvelope
    set?: GameVersionRegionWhereUniqueInput | GameVersionRegionWhereUniqueInput[]
    disconnect?: GameVersionRegionWhereUniqueInput | GameVersionRegionWhereUniqueInput[]
    delete?: GameVersionRegionWhereUniqueInput | GameVersionRegionWhereUniqueInput[]
    connect?: GameVersionRegionWhereUniqueInput | GameVersionRegionWhereUniqueInput[]
    update?: GameVersionRegionUpdateWithWhereUniqueWithoutGameRegionInput | GameVersionRegionUpdateWithWhereUniqueWithoutGameRegionInput[]
    updateMany?: GameVersionRegionUpdateManyWithWhereWithoutGameRegionInput | GameVersionRegionUpdateManyWithWhereWithoutGameRegionInput[]
    deleteMany?: GameVersionRegionScalarWhereInput | GameVersionRegionScalarWhereInput[]
  }

  export type GameVersionCreateNestedOneWithoutGameVersionRegionInput = {
    create?: XOR<GameVersionCreateWithoutGameVersionRegionInput, GameVersionUncheckedCreateWithoutGameVersionRegionInput>
    connectOrCreate?: GameVersionCreateOrConnectWithoutGameVersionRegionInput
    connect?: GameVersionWhereUniqueInput
  }

  export type GameRegionCreateNestedOneWithoutVersionRegionsInput = {
    create?: XOR<GameRegionCreateWithoutVersionRegionsInput, GameRegionUncheckedCreateWithoutVersionRegionsInput>
    connectOrCreate?: GameRegionCreateOrConnectWithoutVersionRegionsInput
    connect?: GameRegionWhereUniqueInput
  }

  export type PriceCreateNestedManyWithoutGameVersionRegionInput = {
    create?: XOR<PriceCreateWithoutGameVersionRegionInput, PriceUncheckedCreateWithoutGameVersionRegionInput> | PriceCreateWithoutGameVersionRegionInput[] | PriceUncheckedCreateWithoutGameVersionRegionInput[]
    connectOrCreate?: PriceCreateOrConnectWithoutGameVersionRegionInput | PriceCreateOrConnectWithoutGameVersionRegionInput[]
    createMany?: PriceCreateManyGameVersionRegionInputEnvelope
    connect?: PriceWhereUniqueInput | PriceWhereUniqueInput[]
  }

  export type PriceHistoryCreateNestedManyWithoutGameVersionRegionInput = {
    create?: XOR<PriceHistoryCreateWithoutGameVersionRegionInput, PriceHistoryUncheckedCreateWithoutGameVersionRegionInput> | PriceHistoryCreateWithoutGameVersionRegionInput[] | PriceHistoryUncheckedCreateWithoutGameVersionRegionInput[]
    connectOrCreate?: PriceHistoryCreateOrConnectWithoutGameVersionRegionInput | PriceHistoryCreateOrConnectWithoutGameVersionRegionInput[]
    createMany?: PriceHistoryCreateManyGameVersionRegionInputEnvelope
    connect?: PriceHistoryWhereUniqueInput | PriceHistoryWhereUniqueInput[]
  }

  export type PriceUncheckedCreateNestedManyWithoutGameVersionRegionInput = {
    create?: XOR<PriceCreateWithoutGameVersionRegionInput, PriceUncheckedCreateWithoutGameVersionRegionInput> | PriceCreateWithoutGameVersionRegionInput[] | PriceUncheckedCreateWithoutGameVersionRegionInput[]
    connectOrCreate?: PriceCreateOrConnectWithoutGameVersionRegionInput | PriceCreateOrConnectWithoutGameVersionRegionInput[]
    createMany?: PriceCreateManyGameVersionRegionInputEnvelope
    connect?: PriceWhereUniqueInput | PriceWhereUniqueInput[]
  }

  export type PriceHistoryUncheckedCreateNestedManyWithoutGameVersionRegionInput = {
    create?: XOR<PriceHistoryCreateWithoutGameVersionRegionInput, PriceHistoryUncheckedCreateWithoutGameVersionRegionInput> | PriceHistoryCreateWithoutGameVersionRegionInput[] | PriceHistoryUncheckedCreateWithoutGameVersionRegionInput[]
    connectOrCreate?: PriceHistoryCreateOrConnectWithoutGameVersionRegionInput | PriceHistoryCreateOrConnectWithoutGameVersionRegionInput[]
    createMany?: PriceHistoryCreateManyGameVersionRegionInputEnvelope
    connect?: PriceHistoryWhereUniqueInput | PriceHistoryWhereUniqueInput[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type GameVersionUpdateOneRequiredWithoutGameVersionRegionNestedInput = {
    create?: XOR<GameVersionCreateWithoutGameVersionRegionInput, GameVersionUncheckedCreateWithoutGameVersionRegionInput>
    connectOrCreate?: GameVersionCreateOrConnectWithoutGameVersionRegionInput
    upsert?: GameVersionUpsertWithoutGameVersionRegionInput
    connect?: GameVersionWhereUniqueInput
    update?: XOR<XOR<GameVersionUpdateToOneWithWhereWithoutGameVersionRegionInput, GameVersionUpdateWithoutGameVersionRegionInput>, GameVersionUncheckedUpdateWithoutGameVersionRegionInput>
  }

  export type GameRegionUpdateOneRequiredWithoutVersionRegionsNestedInput = {
    create?: XOR<GameRegionCreateWithoutVersionRegionsInput, GameRegionUncheckedCreateWithoutVersionRegionsInput>
    connectOrCreate?: GameRegionCreateOrConnectWithoutVersionRegionsInput
    upsert?: GameRegionUpsertWithoutVersionRegionsInput
    connect?: GameRegionWhereUniqueInput
    update?: XOR<XOR<GameRegionUpdateToOneWithWhereWithoutVersionRegionsInput, GameRegionUpdateWithoutVersionRegionsInput>, GameRegionUncheckedUpdateWithoutVersionRegionsInput>
  }

  export type PriceUpdateManyWithoutGameVersionRegionNestedInput = {
    create?: XOR<PriceCreateWithoutGameVersionRegionInput, PriceUncheckedCreateWithoutGameVersionRegionInput> | PriceCreateWithoutGameVersionRegionInput[] | PriceUncheckedCreateWithoutGameVersionRegionInput[]
    connectOrCreate?: PriceCreateOrConnectWithoutGameVersionRegionInput | PriceCreateOrConnectWithoutGameVersionRegionInput[]
    upsert?: PriceUpsertWithWhereUniqueWithoutGameVersionRegionInput | PriceUpsertWithWhereUniqueWithoutGameVersionRegionInput[]
    createMany?: PriceCreateManyGameVersionRegionInputEnvelope
    set?: PriceWhereUniqueInput | PriceWhereUniqueInput[]
    disconnect?: PriceWhereUniqueInput | PriceWhereUniqueInput[]
    delete?: PriceWhereUniqueInput | PriceWhereUniqueInput[]
    connect?: PriceWhereUniqueInput | PriceWhereUniqueInput[]
    update?: PriceUpdateWithWhereUniqueWithoutGameVersionRegionInput | PriceUpdateWithWhereUniqueWithoutGameVersionRegionInput[]
    updateMany?: PriceUpdateManyWithWhereWithoutGameVersionRegionInput | PriceUpdateManyWithWhereWithoutGameVersionRegionInput[]
    deleteMany?: PriceScalarWhereInput | PriceScalarWhereInput[]
  }

  export type PriceHistoryUpdateManyWithoutGameVersionRegionNestedInput = {
    create?: XOR<PriceHistoryCreateWithoutGameVersionRegionInput, PriceHistoryUncheckedCreateWithoutGameVersionRegionInput> | PriceHistoryCreateWithoutGameVersionRegionInput[] | PriceHistoryUncheckedCreateWithoutGameVersionRegionInput[]
    connectOrCreate?: PriceHistoryCreateOrConnectWithoutGameVersionRegionInput | PriceHistoryCreateOrConnectWithoutGameVersionRegionInput[]
    upsert?: PriceHistoryUpsertWithWhereUniqueWithoutGameVersionRegionInput | PriceHistoryUpsertWithWhereUniqueWithoutGameVersionRegionInput[]
    createMany?: PriceHistoryCreateManyGameVersionRegionInputEnvelope
    set?: PriceHistoryWhereUniqueInput | PriceHistoryWhereUniqueInput[]
    disconnect?: PriceHistoryWhereUniqueInput | PriceHistoryWhereUniqueInput[]
    delete?: PriceHistoryWhereUniqueInput | PriceHistoryWhereUniqueInput[]
    connect?: PriceHistoryWhereUniqueInput | PriceHistoryWhereUniqueInput[]
    update?: PriceHistoryUpdateWithWhereUniqueWithoutGameVersionRegionInput | PriceHistoryUpdateWithWhereUniqueWithoutGameVersionRegionInput[]
    updateMany?: PriceHistoryUpdateManyWithWhereWithoutGameVersionRegionInput | PriceHistoryUpdateManyWithWhereWithoutGameVersionRegionInput[]
    deleteMany?: PriceHistoryScalarWhereInput | PriceHistoryScalarWhereInput[]
  }

  export type PriceUncheckedUpdateManyWithoutGameVersionRegionNestedInput = {
    create?: XOR<PriceCreateWithoutGameVersionRegionInput, PriceUncheckedCreateWithoutGameVersionRegionInput> | PriceCreateWithoutGameVersionRegionInput[] | PriceUncheckedCreateWithoutGameVersionRegionInput[]
    connectOrCreate?: PriceCreateOrConnectWithoutGameVersionRegionInput | PriceCreateOrConnectWithoutGameVersionRegionInput[]
    upsert?: PriceUpsertWithWhereUniqueWithoutGameVersionRegionInput | PriceUpsertWithWhereUniqueWithoutGameVersionRegionInput[]
    createMany?: PriceCreateManyGameVersionRegionInputEnvelope
    set?: PriceWhereUniqueInput | PriceWhereUniqueInput[]
    disconnect?: PriceWhereUniqueInput | PriceWhereUniqueInput[]
    delete?: PriceWhereUniqueInput | PriceWhereUniqueInput[]
    connect?: PriceWhereUniqueInput | PriceWhereUniqueInput[]
    update?: PriceUpdateWithWhereUniqueWithoutGameVersionRegionInput | PriceUpdateWithWhereUniqueWithoutGameVersionRegionInput[]
    updateMany?: PriceUpdateManyWithWhereWithoutGameVersionRegionInput | PriceUpdateManyWithWhereWithoutGameVersionRegionInput[]
    deleteMany?: PriceScalarWhereInput | PriceScalarWhereInput[]
  }

  export type PriceHistoryUncheckedUpdateManyWithoutGameVersionRegionNestedInput = {
    create?: XOR<PriceHistoryCreateWithoutGameVersionRegionInput, PriceHistoryUncheckedCreateWithoutGameVersionRegionInput> | PriceHistoryCreateWithoutGameVersionRegionInput[] | PriceHistoryUncheckedCreateWithoutGameVersionRegionInput[]
    connectOrCreate?: PriceHistoryCreateOrConnectWithoutGameVersionRegionInput | PriceHistoryCreateOrConnectWithoutGameVersionRegionInput[]
    upsert?: PriceHistoryUpsertWithWhereUniqueWithoutGameVersionRegionInput | PriceHistoryUpsertWithWhereUniqueWithoutGameVersionRegionInput[]
    createMany?: PriceHistoryCreateManyGameVersionRegionInputEnvelope
    set?: PriceHistoryWhereUniqueInput | PriceHistoryWhereUniqueInput[]
    disconnect?: PriceHistoryWhereUniqueInput | PriceHistoryWhereUniqueInput[]
    delete?: PriceHistoryWhereUniqueInput | PriceHistoryWhereUniqueInput[]
    connect?: PriceHistoryWhereUniqueInput | PriceHistoryWhereUniqueInput[]
    update?: PriceHistoryUpdateWithWhereUniqueWithoutGameVersionRegionInput | PriceHistoryUpdateWithWhereUniqueWithoutGameVersionRegionInput[]
    updateMany?: PriceHistoryUpdateManyWithWhereWithoutGameVersionRegionInput | PriceHistoryUpdateManyWithWhereWithoutGameVersionRegionInput[]
    deleteMany?: PriceHistoryScalarWhereInput | PriceHistoryScalarWhereInput[]
  }

  export type GameVersionRegionCreateNestedOneWithoutPriceInput = {
    create?: XOR<GameVersionRegionCreateWithoutPriceInput, GameVersionRegionUncheckedCreateWithoutPriceInput>
    connectOrCreate?: GameVersionRegionCreateOrConnectWithoutPriceInput
    connect?: GameVersionRegionWhereUniqueInput
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type NullableDecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string | null
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type EnumPriceTypeFieldUpdateOperationsInput = {
    set?: $Enums.PriceType
  }

  export type GameVersionRegionUpdateOneRequiredWithoutPriceNestedInput = {
    create?: XOR<GameVersionRegionCreateWithoutPriceInput, GameVersionRegionUncheckedCreateWithoutPriceInput>
    connectOrCreate?: GameVersionRegionCreateOrConnectWithoutPriceInput
    upsert?: GameVersionRegionUpsertWithoutPriceInput
    connect?: GameVersionRegionWhereUniqueInput
    update?: XOR<XOR<GameVersionRegionUpdateToOneWithWhereWithoutPriceInput, GameVersionRegionUpdateWithoutPriceInput>, GameVersionRegionUncheckedUpdateWithoutPriceInput>
  }

  export type GameVersionRegionCreateNestedOneWithoutPriceHistoryInput = {
    create?: XOR<GameVersionRegionCreateWithoutPriceHistoryInput, GameVersionRegionUncheckedCreateWithoutPriceHistoryInput>
    connectOrCreate?: GameVersionRegionCreateOrConnectWithoutPriceHistoryInput
    connect?: GameVersionRegionWhereUniqueInput
  }

  export type GameVersionRegionUpdateOneRequiredWithoutPriceHistoryNestedInput = {
    create?: XOR<GameVersionRegionCreateWithoutPriceHistoryInput, GameVersionRegionUncheckedCreateWithoutPriceHistoryInput>
    connectOrCreate?: GameVersionRegionCreateOrConnectWithoutPriceHistoryInput
    upsert?: GameVersionRegionUpsertWithoutPriceHistoryInput
    connect?: GameVersionRegionWhereUniqueInput
    update?: XOR<XOR<GameVersionRegionUpdateToOneWithWhereWithoutPriceHistoryInput, GameVersionRegionUpdateWithoutPriceHistoryInput>, GameVersionRegionUncheckedUpdateWithoutPriceHistoryInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedEnumReleaseStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ReleaseStatus | EnumReleaseStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ReleaseStatus[] | ListEnumReleaseStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ReleaseStatus[] | ListEnumReleaseStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumReleaseStatusFilter<$PrismaModel> | $Enums.ReleaseStatus
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedEnumReleaseStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ReleaseStatus | EnumReleaseStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ReleaseStatus[] | ListEnumReleaseStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ReleaseStatus[] | ListEnumReleaseStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumReleaseStatusWithAggregatesFilter<$PrismaModel> | $Enums.ReleaseStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumReleaseStatusFilter<$PrismaModel>
    _max?: NestedEnumReleaseStatusFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedEnumLanguageTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.LanguageType | EnumLanguageTypeFieldRefInput<$PrismaModel>
    in?: $Enums.LanguageType[] | ListEnumLanguageTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.LanguageType[] | ListEnumLanguageTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumLanguageTypeFilter<$PrismaModel> | $Enums.LanguageType
  }

  export type NestedEnumLanguageTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.LanguageType | EnumLanguageTypeFieldRefInput<$PrismaModel>
    in?: $Enums.LanguageType[] | ListEnumLanguageTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.LanguageType[] | ListEnumLanguageTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumLanguageTypeWithAggregatesFilter<$PrismaModel> | $Enums.LanguageType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumLanguageTypeFilter<$PrismaModel>
    _max?: NestedEnumLanguageTypeFilter<$PrismaModel>
  }

  export type NestedEnumImageTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.ImageType | EnumImageTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ImageType[] | ListEnumImageTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ImageType[] | ListEnumImageTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumImageTypeFilter<$PrismaModel> | $Enums.ImageType
  }

  export type NestedEnumImageTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ImageType | EnumImageTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ImageType[] | ListEnumImageTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ImageType[] | ListEnumImageTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumImageTypeWithAggregatesFilter<$PrismaModel> | $Enums.ImageType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumImageTypeFilter<$PrismaModel>
    _max?: NestedEnumImageTypeFilter<$PrismaModel>
  }

  export type NestedEnumPsPlusTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.PsPlusType | EnumPsPlusTypeFieldRefInput<$PrismaModel>
    in?: $Enums.PsPlusType[] | ListEnumPsPlusTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.PsPlusType[] | ListEnumPsPlusTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumPsPlusTypeFilter<$PrismaModel> | $Enums.PsPlusType
  }

  export type NestedEnumPsPlusTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PsPlusType | EnumPsPlusTypeFieldRefInput<$PrismaModel>
    in?: $Enums.PsPlusType[] | ListEnumPsPlusTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.PsPlusType[] | ListEnumPsPlusTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumPsPlusTypeWithAggregatesFilter<$PrismaModel> | $Enums.PsPlusType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPsPlusTypeFilter<$PrismaModel>
    _max?: NestedEnumPsPlusTypeFilter<$PrismaModel>
  }

  export type NestedEnumPlatformFilter<$PrismaModel = never> = {
    equals?: $Enums.Platform | EnumPlatformFieldRefInput<$PrismaModel>
    in?: $Enums.Platform[] | ListEnumPlatformFieldRefInput<$PrismaModel>
    notIn?: $Enums.Platform[] | ListEnumPlatformFieldRefInput<$PrismaModel>
    not?: NestedEnumPlatformFilter<$PrismaModel> | $Enums.Platform
  }

  export type NestedEnumPlatformWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Platform | EnumPlatformFieldRefInput<$PrismaModel>
    in?: $Enums.Platform[] | ListEnumPlatformFieldRefInput<$PrismaModel>
    notIn?: $Enums.Platform[] | ListEnumPlatformFieldRefInput<$PrismaModel>
    not?: NestedEnumPlatformWithAggregatesFilter<$PrismaModel> | $Enums.Platform
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPlatformFilter<$PrismaModel>
    _max?: NestedEnumPlatformFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedDecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type NestedEnumPriceTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.PriceType | EnumPriceTypeFieldRefInput<$PrismaModel>
    in?: $Enums.PriceType[] | ListEnumPriceTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.PriceType[] | ListEnumPriceTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumPriceTypeFilter<$PrismaModel> | $Enums.PriceType
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type NestedDecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type NestedEnumPriceTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PriceType | EnumPriceTypeFieldRefInput<$PrismaModel>
    in?: $Enums.PriceType[] | ListEnumPriceTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.PriceType[] | ListEnumPriceTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumPriceTypeWithAggregatesFilter<$PrismaModel> | $Enums.PriceType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPriceTypeFilter<$PrismaModel>
    _max?: NestedEnumPriceTypeFilter<$PrismaModel>
  }

  export type GameLanguageSupportCreateWithoutGameInput = {
    languageType: $Enums.LanguageType
    createdAt?: Date | string
    updatedAt?: Date | string
    language: LanguageCreateNestedOneWithoutGameLanguageSupportInput
  }

  export type GameLanguageSupportUncheckedCreateWithoutGameInput = {
    id?: number
    languageId: number
    languageType: $Enums.LanguageType
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GameLanguageSupportCreateOrConnectWithoutGameInput = {
    where: GameLanguageSupportWhereUniqueInput
    create: XOR<GameLanguageSupportCreateWithoutGameInput, GameLanguageSupportUncheckedCreateWithoutGameInput>
  }

  export type GameLanguageSupportCreateManyGameInputEnvelope = {
    data: GameLanguageSupportCreateManyGameInput | GameLanguageSupportCreateManyGameInput[]
    skipDuplicates?: boolean
  }

  export type GameImageCreateWithoutGameInput = {
    url?: string | null
    type?: $Enums.ImageType
  }

  export type GameImageUncheckedCreateWithoutGameInput = {
    id?: number
    url?: string | null
    type?: $Enums.ImageType
  }

  export type GameImageCreateOrConnectWithoutGameInput = {
    where: GameImageWhereUniqueInput
    create: XOR<GameImageCreateWithoutGameInput, GameImageUncheckedCreateWithoutGameInput>
  }

  export type GameImageCreateManyGameInputEnvelope = {
    data: GameImageCreateManyGameInput | GameImageCreateManyGameInput[]
    skipDuplicates?: boolean
  }

  export type PsPlusCreateWithoutGameInput = {
    id?: string
    type?: $Enums.PsPlusType
  }

  export type PsPlusUncheckedCreateWithoutGameInput = {
    id?: string
    type?: $Enums.PsPlusType
  }

  export type PsPlusCreateOrConnectWithoutGameInput = {
    where: PsPlusWhereUniqueInput
    create: XOR<PsPlusCreateWithoutGameInput, PsPlusUncheckedCreateWithoutGameInput>
  }

  export type PsPlusCreateManyGameInputEnvelope = {
    data: PsPlusCreateManyGameInput | PsPlusCreateManyGameInput[]
    skipDuplicates?: boolean
  }

  export type GameEditionCreateWithoutGameInput = {
    name: string
    GameVersion?: GameVersionCreateNestedManyWithoutEditionInput
  }

  export type GameEditionUncheckedCreateWithoutGameInput = {
    id?: number
    name: string
    GameVersion?: GameVersionUncheckedCreateNestedManyWithoutEditionInput
  }

  export type GameEditionCreateOrConnectWithoutGameInput = {
    where: GameEditionWhereUniqueInput
    create: XOR<GameEditionCreateWithoutGameInput, GameEditionUncheckedCreateWithoutGameInput>
  }

  export type GameEditionCreateManyGameInputEnvelope = {
    data: GameEditionCreateManyGameInput | GameEditionCreateManyGameInput[]
    skipDuplicates?: boolean
  }

  export type GameVersionCreateWithoutGameInput = {
    SKU?: string
    platform?: $Enums.Platform
    createdAt?: Date | string
    updatedAt?: Date | string
    edition: GameEditionCreateNestedOneWithoutGameVersionInput
    GameVersionRegion?: GameVersionRegionCreateNestedManyWithoutGameVersionInput
  }

  export type GameVersionUncheckedCreateWithoutGameInput = {
    SKU?: string
    editionId: number
    platform?: $Enums.Platform
    createdAt?: Date | string
    updatedAt?: Date | string
    GameVersionRegion?: GameVersionRegionUncheckedCreateNestedManyWithoutGameVersionInput
  }

  export type GameVersionCreateOrConnectWithoutGameInput = {
    where: GameVersionWhereUniqueInput
    create: XOR<GameVersionCreateWithoutGameInput, GameVersionUncheckedCreateWithoutGameInput>
  }

  export type GameVersionCreateManyGameInputEnvelope = {
    data: GameVersionCreateManyGameInput | GameVersionCreateManyGameInput[]
    skipDuplicates?: boolean
  }

  export type GameRegionCreateWithoutGameInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    region: RegionCreateNestedOneWithoutGameRegionInput
    versionRegions?: GameVersionRegionCreateNestedManyWithoutGameRegionInput
  }

  export type GameRegionUncheckedCreateWithoutGameInput = {
    id?: number
    regionId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    versionRegions?: GameVersionRegionUncheckedCreateNestedManyWithoutGameRegionInput
  }

  export type GameRegionCreateOrConnectWithoutGameInput = {
    where: GameRegionWhereUniqueInput
    create: XOR<GameRegionCreateWithoutGameInput, GameRegionUncheckedCreateWithoutGameInput>
  }

  export type GameRegionCreateManyGameInputEnvelope = {
    data: GameRegionCreateManyGameInput | GameRegionCreateManyGameInput[]
    skipDuplicates?: boolean
  }

  export type GameLanguageSupportUpsertWithWhereUniqueWithoutGameInput = {
    where: GameLanguageSupportWhereUniqueInput
    update: XOR<GameLanguageSupportUpdateWithoutGameInput, GameLanguageSupportUncheckedUpdateWithoutGameInput>
    create: XOR<GameLanguageSupportCreateWithoutGameInput, GameLanguageSupportUncheckedCreateWithoutGameInput>
  }

  export type GameLanguageSupportUpdateWithWhereUniqueWithoutGameInput = {
    where: GameLanguageSupportWhereUniqueInput
    data: XOR<GameLanguageSupportUpdateWithoutGameInput, GameLanguageSupportUncheckedUpdateWithoutGameInput>
  }

  export type GameLanguageSupportUpdateManyWithWhereWithoutGameInput = {
    where: GameLanguageSupportScalarWhereInput
    data: XOR<GameLanguageSupportUpdateManyMutationInput, GameLanguageSupportUncheckedUpdateManyWithoutGameInput>
  }

  export type GameLanguageSupportScalarWhereInput = {
    AND?: GameLanguageSupportScalarWhereInput | GameLanguageSupportScalarWhereInput[]
    OR?: GameLanguageSupportScalarWhereInput[]
    NOT?: GameLanguageSupportScalarWhereInput | GameLanguageSupportScalarWhereInput[]
    id?: IntFilter<"GameLanguageSupport"> | number
    gameId?: StringFilter<"GameLanguageSupport"> | string
    languageId?: IntFilter<"GameLanguageSupport"> | number
    languageType?: EnumLanguageTypeFilter<"GameLanguageSupport"> | $Enums.LanguageType
    createdAt?: DateTimeFilter<"GameLanguageSupport"> | Date | string
    updatedAt?: DateTimeFilter<"GameLanguageSupport"> | Date | string
  }

  export type GameImageUpsertWithWhereUniqueWithoutGameInput = {
    where: GameImageWhereUniqueInput
    update: XOR<GameImageUpdateWithoutGameInput, GameImageUncheckedUpdateWithoutGameInput>
    create: XOR<GameImageCreateWithoutGameInput, GameImageUncheckedCreateWithoutGameInput>
  }

  export type GameImageUpdateWithWhereUniqueWithoutGameInput = {
    where: GameImageWhereUniqueInput
    data: XOR<GameImageUpdateWithoutGameInput, GameImageUncheckedUpdateWithoutGameInput>
  }

  export type GameImageUpdateManyWithWhereWithoutGameInput = {
    where: GameImageScalarWhereInput
    data: XOR<GameImageUpdateManyMutationInput, GameImageUncheckedUpdateManyWithoutGameInput>
  }

  export type GameImageScalarWhereInput = {
    AND?: GameImageScalarWhereInput | GameImageScalarWhereInput[]
    OR?: GameImageScalarWhereInput[]
    NOT?: GameImageScalarWhereInput | GameImageScalarWhereInput[]
    id?: IntFilter<"GameImage"> | number
    url?: StringNullableFilter<"GameImage"> | string | null
    type?: EnumImageTypeFilter<"GameImage"> | $Enums.ImageType
    gameId?: StringFilter<"GameImage"> | string
  }

  export type PsPlusUpsertWithWhereUniqueWithoutGameInput = {
    where: PsPlusWhereUniqueInput
    update: XOR<PsPlusUpdateWithoutGameInput, PsPlusUncheckedUpdateWithoutGameInput>
    create: XOR<PsPlusCreateWithoutGameInput, PsPlusUncheckedCreateWithoutGameInput>
  }

  export type PsPlusUpdateWithWhereUniqueWithoutGameInput = {
    where: PsPlusWhereUniqueInput
    data: XOR<PsPlusUpdateWithoutGameInput, PsPlusUncheckedUpdateWithoutGameInput>
  }

  export type PsPlusUpdateManyWithWhereWithoutGameInput = {
    where: PsPlusScalarWhereInput
    data: XOR<PsPlusUpdateManyMutationInput, PsPlusUncheckedUpdateManyWithoutGameInput>
  }

  export type PsPlusScalarWhereInput = {
    AND?: PsPlusScalarWhereInput | PsPlusScalarWhereInput[]
    OR?: PsPlusScalarWhereInput[]
    NOT?: PsPlusScalarWhereInput | PsPlusScalarWhereInput[]
    id?: StringFilter<"PsPlus"> | string
    gameId?: StringFilter<"PsPlus"> | string
    type?: EnumPsPlusTypeFilter<"PsPlus"> | $Enums.PsPlusType
  }

  export type GameEditionUpsertWithWhereUniqueWithoutGameInput = {
    where: GameEditionWhereUniqueInput
    update: XOR<GameEditionUpdateWithoutGameInput, GameEditionUncheckedUpdateWithoutGameInput>
    create: XOR<GameEditionCreateWithoutGameInput, GameEditionUncheckedCreateWithoutGameInput>
  }

  export type GameEditionUpdateWithWhereUniqueWithoutGameInput = {
    where: GameEditionWhereUniqueInput
    data: XOR<GameEditionUpdateWithoutGameInput, GameEditionUncheckedUpdateWithoutGameInput>
  }

  export type GameEditionUpdateManyWithWhereWithoutGameInput = {
    where: GameEditionScalarWhereInput
    data: XOR<GameEditionUpdateManyMutationInput, GameEditionUncheckedUpdateManyWithoutGameInput>
  }

  export type GameEditionScalarWhereInput = {
    AND?: GameEditionScalarWhereInput | GameEditionScalarWhereInput[]
    OR?: GameEditionScalarWhereInput[]
    NOT?: GameEditionScalarWhereInput | GameEditionScalarWhereInput[]
    id?: IntFilter<"GameEdition"> | number
    name?: StringFilter<"GameEdition"> | string
    gameId?: StringFilter<"GameEdition"> | string
  }

  export type GameVersionUpsertWithWhereUniqueWithoutGameInput = {
    where: GameVersionWhereUniqueInput
    update: XOR<GameVersionUpdateWithoutGameInput, GameVersionUncheckedUpdateWithoutGameInput>
    create: XOR<GameVersionCreateWithoutGameInput, GameVersionUncheckedCreateWithoutGameInput>
  }

  export type GameVersionUpdateWithWhereUniqueWithoutGameInput = {
    where: GameVersionWhereUniqueInput
    data: XOR<GameVersionUpdateWithoutGameInput, GameVersionUncheckedUpdateWithoutGameInput>
  }

  export type GameVersionUpdateManyWithWhereWithoutGameInput = {
    where: GameVersionScalarWhereInput
    data: XOR<GameVersionUpdateManyMutationInput, GameVersionUncheckedUpdateManyWithoutGameInput>
  }

  export type GameVersionScalarWhereInput = {
    AND?: GameVersionScalarWhereInput | GameVersionScalarWhereInput[]
    OR?: GameVersionScalarWhereInput[]
    NOT?: GameVersionScalarWhereInput | GameVersionScalarWhereInput[]
    SKU?: StringFilter<"GameVersion"> | string
    gameId?: StringFilter<"GameVersion"> | string
    editionId?: IntFilter<"GameVersion"> | number
    platform?: EnumPlatformFilter<"GameVersion"> | $Enums.Platform
    createdAt?: DateTimeFilter<"GameVersion"> | Date | string
    updatedAt?: DateTimeFilter<"GameVersion"> | Date | string
  }

  export type GameRegionUpsertWithWhereUniqueWithoutGameInput = {
    where: GameRegionWhereUniqueInput
    update: XOR<GameRegionUpdateWithoutGameInput, GameRegionUncheckedUpdateWithoutGameInput>
    create: XOR<GameRegionCreateWithoutGameInput, GameRegionUncheckedCreateWithoutGameInput>
  }

  export type GameRegionUpdateWithWhereUniqueWithoutGameInput = {
    where: GameRegionWhereUniqueInput
    data: XOR<GameRegionUpdateWithoutGameInput, GameRegionUncheckedUpdateWithoutGameInput>
  }

  export type GameRegionUpdateManyWithWhereWithoutGameInput = {
    where: GameRegionScalarWhereInput
    data: XOR<GameRegionUpdateManyMutationInput, GameRegionUncheckedUpdateManyWithoutGameInput>
  }

  export type GameRegionScalarWhereInput = {
    AND?: GameRegionScalarWhereInput | GameRegionScalarWhereInput[]
    OR?: GameRegionScalarWhereInput[]
    NOT?: GameRegionScalarWhereInput | GameRegionScalarWhereInput[]
    id?: IntFilter<"GameRegion"> | number
    regionId?: IntFilter<"GameRegion"> | number
    gameId?: StringFilter<"GameRegion"> | string
    createdAt?: DateTimeFilter<"GameRegion"> | Date | string
    updatedAt?: DateTimeFilter<"GameRegion"> | Date | string
  }

  export type GameLanguageSupportCreateWithoutLanguageInput = {
    languageType: $Enums.LanguageType
    createdAt?: Date | string
    updatedAt?: Date | string
    game: GameCreateNestedOneWithoutGameLanguageSupportInput
  }

  export type GameLanguageSupportUncheckedCreateWithoutLanguageInput = {
    id?: number
    gameId: string
    languageType: $Enums.LanguageType
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GameLanguageSupportCreateOrConnectWithoutLanguageInput = {
    where: GameLanguageSupportWhereUniqueInput
    create: XOR<GameLanguageSupportCreateWithoutLanguageInput, GameLanguageSupportUncheckedCreateWithoutLanguageInput>
  }

  export type GameLanguageSupportCreateManyLanguageInputEnvelope = {
    data: GameLanguageSupportCreateManyLanguageInput | GameLanguageSupportCreateManyLanguageInput[]
    skipDuplicates?: boolean
  }

  export type GameLanguageSupportUpsertWithWhereUniqueWithoutLanguageInput = {
    where: GameLanguageSupportWhereUniqueInput
    update: XOR<GameLanguageSupportUpdateWithoutLanguageInput, GameLanguageSupportUncheckedUpdateWithoutLanguageInput>
    create: XOR<GameLanguageSupportCreateWithoutLanguageInput, GameLanguageSupportUncheckedCreateWithoutLanguageInput>
  }

  export type GameLanguageSupportUpdateWithWhereUniqueWithoutLanguageInput = {
    where: GameLanguageSupportWhereUniqueInput
    data: XOR<GameLanguageSupportUpdateWithoutLanguageInput, GameLanguageSupportUncheckedUpdateWithoutLanguageInput>
  }

  export type GameLanguageSupportUpdateManyWithWhereWithoutLanguageInput = {
    where: GameLanguageSupportScalarWhereInput
    data: XOR<GameLanguageSupportUpdateManyMutationInput, GameLanguageSupportUncheckedUpdateManyWithoutLanguageInput>
  }

  export type GameCreateWithoutGameLanguageSupportInput = {
    id?: string
    psnId: string
    slug?: string | null
    title: string
    fullUrl?: string | null
    rating?: number | null
    genre?: string | null
    publisher?: string | null
    isFreeToPlay?: boolean | null
    releaseDate?: Date | string | null
    releaseStatus?: $Enums.ReleaseStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    GameImage?: GameImageCreateNestedManyWithoutGameInput
    PsPlus?: PsPlusCreateNestedManyWithoutGameInput
    GameEdition?: GameEditionCreateNestedManyWithoutGameInput
    GameVersion?: GameVersionCreateNestedManyWithoutGameInput
    GameRegion?: GameRegionCreateNestedManyWithoutGameInput
  }

  export type GameUncheckedCreateWithoutGameLanguageSupportInput = {
    id?: string
    psnId: string
    slug?: string | null
    title: string
    fullUrl?: string | null
    rating?: number | null
    genre?: string | null
    publisher?: string | null
    isFreeToPlay?: boolean | null
    releaseDate?: Date | string | null
    releaseStatus?: $Enums.ReleaseStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    GameImage?: GameImageUncheckedCreateNestedManyWithoutGameInput
    PsPlus?: PsPlusUncheckedCreateNestedManyWithoutGameInput
    GameEdition?: GameEditionUncheckedCreateNestedManyWithoutGameInput
    GameVersion?: GameVersionUncheckedCreateNestedManyWithoutGameInput
    GameRegion?: GameRegionUncheckedCreateNestedManyWithoutGameInput
  }

  export type GameCreateOrConnectWithoutGameLanguageSupportInput = {
    where: GameWhereUniqueInput
    create: XOR<GameCreateWithoutGameLanguageSupportInput, GameUncheckedCreateWithoutGameLanguageSupportInput>
  }

  export type LanguageCreateWithoutGameLanguageSupportInput = {
    code: string
    name: string
  }

  export type LanguageUncheckedCreateWithoutGameLanguageSupportInput = {
    id?: number
    code: string
    name: string
  }

  export type LanguageCreateOrConnectWithoutGameLanguageSupportInput = {
    where: LanguageWhereUniqueInput
    create: XOR<LanguageCreateWithoutGameLanguageSupportInput, LanguageUncheckedCreateWithoutGameLanguageSupportInput>
  }

  export type GameUpsertWithoutGameLanguageSupportInput = {
    update: XOR<GameUpdateWithoutGameLanguageSupportInput, GameUncheckedUpdateWithoutGameLanguageSupportInput>
    create: XOR<GameCreateWithoutGameLanguageSupportInput, GameUncheckedCreateWithoutGameLanguageSupportInput>
    where?: GameWhereInput
  }

  export type GameUpdateToOneWithWhereWithoutGameLanguageSupportInput = {
    where?: GameWhereInput
    data: XOR<GameUpdateWithoutGameLanguageSupportInput, GameUncheckedUpdateWithoutGameLanguageSupportInput>
  }

  export type GameUpdateWithoutGameLanguageSupportInput = {
    id?: StringFieldUpdateOperationsInput | string
    psnId?: StringFieldUpdateOperationsInput | string
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    fullUrl?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    genre?: NullableStringFieldUpdateOperationsInput | string | null
    publisher?: NullableStringFieldUpdateOperationsInput | string | null
    isFreeToPlay?: NullableBoolFieldUpdateOperationsInput | boolean | null
    releaseDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    releaseStatus?: EnumReleaseStatusFieldUpdateOperationsInput | $Enums.ReleaseStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    GameImage?: GameImageUpdateManyWithoutGameNestedInput
    PsPlus?: PsPlusUpdateManyWithoutGameNestedInput
    GameEdition?: GameEditionUpdateManyWithoutGameNestedInput
    GameVersion?: GameVersionUpdateManyWithoutGameNestedInput
    GameRegion?: GameRegionUpdateManyWithoutGameNestedInput
  }

  export type GameUncheckedUpdateWithoutGameLanguageSupportInput = {
    id?: StringFieldUpdateOperationsInput | string
    psnId?: StringFieldUpdateOperationsInput | string
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    fullUrl?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    genre?: NullableStringFieldUpdateOperationsInput | string | null
    publisher?: NullableStringFieldUpdateOperationsInput | string | null
    isFreeToPlay?: NullableBoolFieldUpdateOperationsInput | boolean | null
    releaseDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    releaseStatus?: EnumReleaseStatusFieldUpdateOperationsInput | $Enums.ReleaseStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    GameImage?: GameImageUncheckedUpdateManyWithoutGameNestedInput
    PsPlus?: PsPlusUncheckedUpdateManyWithoutGameNestedInput
    GameEdition?: GameEditionUncheckedUpdateManyWithoutGameNestedInput
    GameVersion?: GameVersionUncheckedUpdateManyWithoutGameNestedInput
    GameRegion?: GameRegionUncheckedUpdateManyWithoutGameNestedInput
  }

  export type LanguageUpsertWithoutGameLanguageSupportInput = {
    update: XOR<LanguageUpdateWithoutGameLanguageSupportInput, LanguageUncheckedUpdateWithoutGameLanguageSupportInput>
    create: XOR<LanguageCreateWithoutGameLanguageSupportInput, LanguageUncheckedCreateWithoutGameLanguageSupportInput>
    where?: LanguageWhereInput
  }

  export type LanguageUpdateToOneWithWhereWithoutGameLanguageSupportInput = {
    where?: LanguageWhereInput
    data: XOR<LanguageUpdateWithoutGameLanguageSupportInput, LanguageUncheckedUpdateWithoutGameLanguageSupportInput>
  }

  export type LanguageUpdateWithoutGameLanguageSupportInput = {
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type LanguageUncheckedUpdateWithoutGameLanguageSupportInput = {
    id?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type GameCreateWithoutGameImageInput = {
    id?: string
    psnId: string
    slug?: string | null
    title: string
    fullUrl?: string | null
    rating?: number | null
    genre?: string | null
    publisher?: string | null
    isFreeToPlay?: boolean | null
    releaseDate?: Date | string | null
    releaseStatus?: $Enums.ReleaseStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    GameLanguageSupport?: GameLanguageSupportCreateNestedManyWithoutGameInput
    PsPlus?: PsPlusCreateNestedManyWithoutGameInput
    GameEdition?: GameEditionCreateNestedManyWithoutGameInput
    GameVersion?: GameVersionCreateNestedManyWithoutGameInput
    GameRegion?: GameRegionCreateNestedManyWithoutGameInput
  }

  export type GameUncheckedCreateWithoutGameImageInput = {
    id?: string
    psnId: string
    slug?: string | null
    title: string
    fullUrl?: string | null
    rating?: number | null
    genre?: string | null
    publisher?: string | null
    isFreeToPlay?: boolean | null
    releaseDate?: Date | string | null
    releaseStatus?: $Enums.ReleaseStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    GameLanguageSupport?: GameLanguageSupportUncheckedCreateNestedManyWithoutGameInput
    PsPlus?: PsPlusUncheckedCreateNestedManyWithoutGameInput
    GameEdition?: GameEditionUncheckedCreateNestedManyWithoutGameInput
    GameVersion?: GameVersionUncheckedCreateNestedManyWithoutGameInput
    GameRegion?: GameRegionUncheckedCreateNestedManyWithoutGameInput
  }

  export type GameCreateOrConnectWithoutGameImageInput = {
    where: GameWhereUniqueInput
    create: XOR<GameCreateWithoutGameImageInput, GameUncheckedCreateWithoutGameImageInput>
  }

  export type GameUpsertWithoutGameImageInput = {
    update: XOR<GameUpdateWithoutGameImageInput, GameUncheckedUpdateWithoutGameImageInput>
    create: XOR<GameCreateWithoutGameImageInput, GameUncheckedCreateWithoutGameImageInput>
    where?: GameWhereInput
  }

  export type GameUpdateToOneWithWhereWithoutGameImageInput = {
    where?: GameWhereInput
    data: XOR<GameUpdateWithoutGameImageInput, GameUncheckedUpdateWithoutGameImageInput>
  }

  export type GameUpdateWithoutGameImageInput = {
    id?: StringFieldUpdateOperationsInput | string
    psnId?: StringFieldUpdateOperationsInput | string
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    fullUrl?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    genre?: NullableStringFieldUpdateOperationsInput | string | null
    publisher?: NullableStringFieldUpdateOperationsInput | string | null
    isFreeToPlay?: NullableBoolFieldUpdateOperationsInput | boolean | null
    releaseDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    releaseStatus?: EnumReleaseStatusFieldUpdateOperationsInput | $Enums.ReleaseStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    GameLanguageSupport?: GameLanguageSupportUpdateManyWithoutGameNestedInput
    PsPlus?: PsPlusUpdateManyWithoutGameNestedInput
    GameEdition?: GameEditionUpdateManyWithoutGameNestedInput
    GameVersion?: GameVersionUpdateManyWithoutGameNestedInput
    GameRegion?: GameRegionUpdateManyWithoutGameNestedInput
  }

  export type GameUncheckedUpdateWithoutGameImageInput = {
    id?: StringFieldUpdateOperationsInput | string
    psnId?: StringFieldUpdateOperationsInput | string
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    fullUrl?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    genre?: NullableStringFieldUpdateOperationsInput | string | null
    publisher?: NullableStringFieldUpdateOperationsInput | string | null
    isFreeToPlay?: NullableBoolFieldUpdateOperationsInput | boolean | null
    releaseDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    releaseStatus?: EnumReleaseStatusFieldUpdateOperationsInput | $Enums.ReleaseStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    GameLanguageSupport?: GameLanguageSupportUncheckedUpdateManyWithoutGameNestedInput
    PsPlus?: PsPlusUncheckedUpdateManyWithoutGameNestedInput
    GameEdition?: GameEditionUncheckedUpdateManyWithoutGameNestedInput
    GameVersion?: GameVersionUncheckedUpdateManyWithoutGameNestedInput
    GameRegion?: GameRegionUncheckedUpdateManyWithoutGameNestedInput
  }

  export type GameCreateWithoutPsPlusInput = {
    id?: string
    psnId: string
    slug?: string | null
    title: string
    fullUrl?: string | null
    rating?: number | null
    genre?: string | null
    publisher?: string | null
    isFreeToPlay?: boolean | null
    releaseDate?: Date | string | null
    releaseStatus?: $Enums.ReleaseStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    GameLanguageSupport?: GameLanguageSupportCreateNestedManyWithoutGameInput
    GameImage?: GameImageCreateNestedManyWithoutGameInput
    GameEdition?: GameEditionCreateNestedManyWithoutGameInput
    GameVersion?: GameVersionCreateNestedManyWithoutGameInput
    GameRegion?: GameRegionCreateNestedManyWithoutGameInput
  }

  export type GameUncheckedCreateWithoutPsPlusInput = {
    id?: string
    psnId: string
    slug?: string | null
    title: string
    fullUrl?: string | null
    rating?: number | null
    genre?: string | null
    publisher?: string | null
    isFreeToPlay?: boolean | null
    releaseDate?: Date | string | null
    releaseStatus?: $Enums.ReleaseStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    GameLanguageSupport?: GameLanguageSupportUncheckedCreateNestedManyWithoutGameInput
    GameImage?: GameImageUncheckedCreateNestedManyWithoutGameInput
    GameEdition?: GameEditionUncheckedCreateNestedManyWithoutGameInput
    GameVersion?: GameVersionUncheckedCreateNestedManyWithoutGameInput
    GameRegion?: GameRegionUncheckedCreateNestedManyWithoutGameInput
  }

  export type GameCreateOrConnectWithoutPsPlusInput = {
    where: GameWhereUniqueInput
    create: XOR<GameCreateWithoutPsPlusInput, GameUncheckedCreateWithoutPsPlusInput>
  }

  export type GameUpsertWithoutPsPlusInput = {
    update: XOR<GameUpdateWithoutPsPlusInput, GameUncheckedUpdateWithoutPsPlusInput>
    create: XOR<GameCreateWithoutPsPlusInput, GameUncheckedCreateWithoutPsPlusInput>
    where?: GameWhereInput
  }

  export type GameUpdateToOneWithWhereWithoutPsPlusInput = {
    where?: GameWhereInput
    data: XOR<GameUpdateWithoutPsPlusInput, GameUncheckedUpdateWithoutPsPlusInput>
  }

  export type GameUpdateWithoutPsPlusInput = {
    id?: StringFieldUpdateOperationsInput | string
    psnId?: StringFieldUpdateOperationsInput | string
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    fullUrl?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    genre?: NullableStringFieldUpdateOperationsInput | string | null
    publisher?: NullableStringFieldUpdateOperationsInput | string | null
    isFreeToPlay?: NullableBoolFieldUpdateOperationsInput | boolean | null
    releaseDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    releaseStatus?: EnumReleaseStatusFieldUpdateOperationsInput | $Enums.ReleaseStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    GameLanguageSupport?: GameLanguageSupportUpdateManyWithoutGameNestedInput
    GameImage?: GameImageUpdateManyWithoutGameNestedInput
    GameEdition?: GameEditionUpdateManyWithoutGameNestedInput
    GameVersion?: GameVersionUpdateManyWithoutGameNestedInput
    GameRegion?: GameRegionUpdateManyWithoutGameNestedInput
  }

  export type GameUncheckedUpdateWithoutPsPlusInput = {
    id?: StringFieldUpdateOperationsInput | string
    psnId?: StringFieldUpdateOperationsInput | string
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    fullUrl?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    genre?: NullableStringFieldUpdateOperationsInput | string | null
    publisher?: NullableStringFieldUpdateOperationsInput | string | null
    isFreeToPlay?: NullableBoolFieldUpdateOperationsInput | boolean | null
    releaseDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    releaseStatus?: EnumReleaseStatusFieldUpdateOperationsInput | $Enums.ReleaseStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    GameLanguageSupport?: GameLanguageSupportUncheckedUpdateManyWithoutGameNestedInput
    GameImage?: GameImageUncheckedUpdateManyWithoutGameNestedInput
    GameEdition?: GameEditionUncheckedUpdateManyWithoutGameNestedInput
    GameVersion?: GameVersionUncheckedUpdateManyWithoutGameNestedInput
    GameRegion?: GameRegionUncheckedUpdateManyWithoutGameNestedInput
  }

  export type GameCreateWithoutGameEditionInput = {
    id?: string
    psnId: string
    slug?: string | null
    title: string
    fullUrl?: string | null
    rating?: number | null
    genre?: string | null
    publisher?: string | null
    isFreeToPlay?: boolean | null
    releaseDate?: Date | string | null
    releaseStatus?: $Enums.ReleaseStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    GameLanguageSupport?: GameLanguageSupportCreateNestedManyWithoutGameInput
    GameImage?: GameImageCreateNestedManyWithoutGameInput
    PsPlus?: PsPlusCreateNestedManyWithoutGameInput
    GameVersion?: GameVersionCreateNestedManyWithoutGameInput
    GameRegion?: GameRegionCreateNestedManyWithoutGameInput
  }

  export type GameUncheckedCreateWithoutGameEditionInput = {
    id?: string
    psnId: string
    slug?: string | null
    title: string
    fullUrl?: string | null
    rating?: number | null
    genre?: string | null
    publisher?: string | null
    isFreeToPlay?: boolean | null
    releaseDate?: Date | string | null
    releaseStatus?: $Enums.ReleaseStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    GameLanguageSupport?: GameLanguageSupportUncheckedCreateNestedManyWithoutGameInput
    GameImage?: GameImageUncheckedCreateNestedManyWithoutGameInput
    PsPlus?: PsPlusUncheckedCreateNestedManyWithoutGameInput
    GameVersion?: GameVersionUncheckedCreateNestedManyWithoutGameInput
    GameRegion?: GameRegionUncheckedCreateNestedManyWithoutGameInput
  }

  export type GameCreateOrConnectWithoutGameEditionInput = {
    where: GameWhereUniqueInput
    create: XOR<GameCreateWithoutGameEditionInput, GameUncheckedCreateWithoutGameEditionInput>
  }

  export type GameVersionCreateWithoutEditionInput = {
    SKU?: string
    platform?: $Enums.Platform
    createdAt?: Date | string
    updatedAt?: Date | string
    game: GameCreateNestedOneWithoutGameVersionInput
    GameVersionRegion?: GameVersionRegionCreateNestedManyWithoutGameVersionInput
  }

  export type GameVersionUncheckedCreateWithoutEditionInput = {
    SKU?: string
    gameId: string
    platform?: $Enums.Platform
    createdAt?: Date | string
    updatedAt?: Date | string
    GameVersionRegion?: GameVersionRegionUncheckedCreateNestedManyWithoutGameVersionInput
  }

  export type GameVersionCreateOrConnectWithoutEditionInput = {
    where: GameVersionWhereUniqueInput
    create: XOR<GameVersionCreateWithoutEditionInput, GameVersionUncheckedCreateWithoutEditionInput>
  }

  export type GameVersionCreateManyEditionInputEnvelope = {
    data: GameVersionCreateManyEditionInput | GameVersionCreateManyEditionInput[]
    skipDuplicates?: boolean
  }

  export type GameUpsertWithoutGameEditionInput = {
    update: XOR<GameUpdateWithoutGameEditionInput, GameUncheckedUpdateWithoutGameEditionInput>
    create: XOR<GameCreateWithoutGameEditionInput, GameUncheckedCreateWithoutGameEditionInput>
    where?: GameWhereInput
  }

  export type GameUpdateToOneWithWhereWithoutGameEditionInput = {
    where?: GameWhereInput
    data: XOR<GameUpdateWithoutGameEditionInput, GameUncheckedUpdateWithoutGameEditionInput>
  }

  export type GameUpdateWithoutGameEditionInput = {
    id?: StringFieldUpdateOperationsInput | string
    psnId?: StringFieldUpdateOperationsInput | string
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    fullUrl?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    genre?: NullableStringFieldUpdateOperationsInput | string | null
    publisher?: NullableStringFieldUpdateOperationsInput | string | null
    isFreeToPlay?: NullableBoolFieldUpdateOperationsInput | boolean | null
    releaseDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    releaseStatus?: EnumReleaseStatusFieldUpdateOperationsInput | $Enums.ReleaseStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    GameLanguageSupport?: GameLanguageSupportUpdateManyWithoutGameNestedInput
    GameImage?: GameImageUpdateManyWithoutGameNestedInput
    PsPlus?: PsPlusUpdateManyWithoutGameNestedInput
    GameVersion?: GameVersionUpdateManyWithoutGameNestedInput
    GameRegion?: GameRegionUpdateManyWithoutGameNestedInput
  }

  export type GameUncheckedUpdateWithoutGameEditionInput = {
    id?: StringFieldUpdateOperationsInput | string
    psnId?: StringFieldUpdateOperationsInput | string
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    fullUrl?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    genre?: NullableStringFieldUpdateOperationsInput | string | null
    publisher?: NullableStringFieldUpdateOperationsInput | string | null
    isFreeToPlay?: NullableBoolFieldUpdateOperationsInput | boolean | null
    releaseDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    releaseStatus?: EnumReleaseStatusFieldUpdateOperationsInput | $Enums.ReleaseStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    GameLanguageSupport?: GameLanguageSupportUncheckedUpdateManyWithoutGameNestedInput
    GameImage?: GameImageUncheckedUpdateManyWithoutGameNestedInput
    PsPlus?: PsPlusUncheckedUpdateManyWithoutGameNestedInput
    GameVersion?: GameVersionUncheckedUpdateManyWithoutGameNestedInput
    GameRegion?: GameRegionUncheckedUpdateManyWithoutGameNestedInput
  }

  export type GameVersionUpsertWithWhereUniqueWithoutEditionInput = {
    where: GameVersionWhereUniqueInput
    update: XOR<GameVersionUpdateWithoutEditionInput, GameVersionUncheckedUpdateWithoutEditionInput>
    create: XOR<GameVersionCreateWithoutEditionInput, GameVersionUncheckedCreateWithoutEditionInput>
  }

  export type GameVersionUpdateWithWhereUniqueWithoutEditionInput = {
    where: GameVersionWhereUniqueInput
    data: XOR<GameVersionUpdateWithoutEditionInput, GameVersionUncheckedUpdateWithoutEditionInput>
  }

  export type GameVersionUpdateManyWithWhereWithoutEditionInput = {
    where: GameVersionScalarWhereInput
    data: XOR<GameVersionUpdateManyMutationInput, GameVersionUncheckedUpdateManyWithoutEditionInput>
  }

  export type GameRegionCreateWithoutRegionInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    game: GameCreateNestedOneWithoutGameRegionInput
    versionRegions?: GameVersionRegionCreateNestedManyWithoutGameRegionInput
  }

  export type GameRegionUncheckedCreateWithoutRegionInput = {
    id?: number
    gameId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    versionRegions?: GameVersionRegionUncheckedCreateNestedManyWithoutGameRegionInput
  }

  export type GameRegionCreateOrConnectWithoutRegionInput = {
    where: GameRegionWhereUniqueInput
    create: XOR<GameRegionCreateWithoutRegionInput, GameRegionUncheckedCreateWithoutRegionInput>
  }

  export type GameRegionCreateManyRegionInputEnvelope = {
    data: GameRegionCreateManyRegionInput | GameRegionCreateManyRegionInput[]
    skipDuplicates?: boolean
  }

  export type GameRegionUpsertWithWhereUniqueWithoutRegionInput = {
    where: GameRegionWhereUniqueInput
    update: XOR<GameRegionUpdateWithoutRegionInput, GameRegionUncheckedUpdateWithoutRegionInput>
    create: XOR<GameRegionCreateWithoutRegionInput, GameRegionUncheckedCreateWithoutRegionInput>
  }

  export type GameRegionUpdateWithWhereUniqueWithoutRegionInput = {
    where: GameRegionWhereUniqueInput
    data: XOR<GameRegionUpdateWithoutRegionInput, GameRegionUncheckedUpdateWithoutRegionInput>
  }

  export type GameRegionUpdateManyWithWhereWithoutRegionInput = {
    where: GameRegionScalarWhereInput
    data: XOR<GameRegionUpdateManyMutationInput, GameRegionUncheckedUpdateManyWithoutRegionInput>
  }

  export type GameCreateWithoutGameVersionInput = {
    id?: string
    psnId: string
    slug?: string | null
    title: string
    fullUrl?: string | null
    rating?: number | null
    genre?: string | null
    publisher?: string | null
    isFreeToPlay?: boolean | null
    releaseDate?: Date | string | null
    releaseStatus?: $Enums.ReleaseStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    GameLanguageSupport?: GameLanguageSupportCreateNestedManyWithoutGameInput
    GameImage?: GameImageCreateNestedManyWithoutGameInput
    PsPlus?: PsPlusCreateNestedManyWithoutGameInput
    GameEdition?: GameEditionCreateNestedManyWithoutGameInput
    GameRegion?: GameRegionCreateNestedManyWithoutGameInput
  }

  export type GameUncheckedCreateWithoutGameVersionInput = {
    id?: string
    psnId: string
    slug?: string | null
    title: string
    fullUrl?: string | null
    rating?: number | null
    genre?: string | null
    publisher?: string | null
    isFreeToPlay?: boolean | null
    releaseDate?: Date | string | null
    releaseStatus?: $Enums.ReleaseStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    GameLanguageSupport?: GameLanguageSupportUncheckedCreateNestedManyWithoutGameInput
    GameImage?: GameImageUncheckedCreateNestedManyWithoutGameInput
    PsPlus?: PsPlusUncheckedCreateNestedManyWithoutGameInput
    GameEdition?: GameEditionUncheckedCreateNestedManyWithoutGameInput
    GameRegion?: GameRegionUncheckedCreateNestedManyWithoutGameInput
  }

  export type GameCreateOrConnectWithoutGameVersionInput = {
    where: GameWhereUniqueInput
    create: XOR<GameCreateWithoutGameVersionInput, GameUncheckedCreateWithoutGameVersionInput>
  }

  export type GameEditionCreateWithoutGameVersionInput = {
    name: string
    game: GameCreateNestedOneWithoutGameEditionInput
  }

  export type GameEditionUncheckedCreateWithoutGameVersionInput = {
    id?: number
    name: string
    gameId: string
  }

  export type GameEditionCreateOrConnectWithoutGameVersionInput = {
    where: GameEditionWhereUniqueInput
    create: XOR<GameEditionCreateWithoutGameVersionInput, GameEditionUncheckedCreateWithoutGameVersionInput>
  }

  export type GameVersionRegionCreateWithoutGameVersionInput = {
    storeUrl?: string | null
    isAvailable?: boolean
    lastChecked?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    gameRegion: GameRegionCreateNestedOneWithoutVersionRegionsInput
    Price?: PriceCreateNestedManyWithoutGameVersionRegionInput
    PriceHistory?: PriceHistoryCreateNestedManyWithoutGameVersionRegionInput
  }

  export type GameVersionRegionUncheckedCreateWithoutGameVersionInput = {
    id?: number
    gameRegionId: number
    storeUrl?: string | null
    isAvailable?: boolean
    lastChecked?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    Price?: PriceUncheckedCreateNestedManyWithoutGameVersionRegionInput
    PriceHistory?: PriceHistoryUncheckedCreateNestedManyWithoutGameVersionRegionInput
  }

  export type GameVersionRegionCreateOrConnectWithoutGameVersionInput = {
    where: GameVersionRegionWhereUniqueInput
    create: XOR<GameVersionRegionCreateWithoutGameVersionInput, GameVersionRegionUncheckedCreateWithoutGameVersionInput>
  }

  export type GameVersionRegionCreateManyGameVersionInputEnvelope = {
    data: GameVersionRegionCreateManyGameVersionInput | GameVersionRegionCreateManyGameVersionInput[]
    skipDuplicates?: boolean
  }

  export type GameUpsertWithoutGameVersionInput = {
    update: XOR<GameUpdateWithoutGameVersionInput, GameUncheckedUpdateWithoutGameVersionInput>
    create: XOR<GameCreateWithoutGameVersionInput, GameUncheckedCreateWithoutGameVersionInput>
    where?: GameWhereInput
  }

  export type GameUpdateToOneWithWhereWithoutGameVersionInput = {
    where?: GameWhereInput
    data: XOR<GameUpdateWithoutGameVersionInput, GameUncheckedUpdateWithoutGameVersionInput>
  }

  export type GameUpdateWithoutGameVersionInput = {
    id?: StringFieldUpdateOperationsInput | string
    psnId?: StringFieldUpdateOperationsInput | string
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    fullUrl?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    genre?: NullableStringFieldUpdateOperationsInput | string | null
    publisher?: NullableStringFieldUpdateOperationsInput | string | null
    isFreeToPlay?: NullableBoolFieldUpdateOperationsInput | boolean | null
    releaseDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    releaseStatus?: EnumReleaseStatusFieldUpdateOperationsInput | $Enums.ReleaseStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    GameLanguageSupport?: GameLanguageSupportUpdateManyWithoutGameNestedInput
    GameImage?: GameImageUpdateManyWithoutGameNestedInput
    PsPlus?: PsPlusUpdateManyWithoutGameNestedInput
    GameEdition?: GameEditionUpdateManyWithoutGameNestedInput
    GameRegion?: GameRegionUpdateManyWithoutGameNestedInput
  }

  export type GameUncheckedUpdateWithoutGameVersionInput = {
    id?: StringFieldUpdateOperationsInput | string
    psnId?: StringFieldUpdateOperationsInput | string
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    fullUrl?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    genre?: NullableStringFieldUpdateOperationsInput | string | null
    publisher?: NullableStringFieldUpdateOperationsInput | string | null
    isFreeToPlay?: NullableBoolFieldUpdateOperationsInput | boolean | null
    releaseDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    releaseStatus?: EnumReleaseStatusFieldUpdateOperationsInput | $Enums.ReleaseStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    GameLanguageSupport?: GameLanguageSupportUncheckedUpdateManyWithoutGameNestedInput
    GameImage?: GameImageUncheckedUpdateManyWithoutGameNestedInput
    PsPlus?: PsPlusUncheckedUpdateManyWithoutGameNestedInput
    GameEdition?: GameEditionUncheckedUpdateManyWithoutGameNestedInput
    GameRegion?: GameRegionUncheckedUpdateManyWithoutGameNestedInput
  }

  export type GameEditionUpsertWithoutGameVersionInput = {
    update: XOR<GameEditionUpdateWithoutGameVersionInput, GameEditionUncheckedUpdateWithoutGameVersionInput>
    create: XOR<GameEditionCreateWithoutGameVersionInput, GameEditionUncheckedCreateWithoutGameVersionInput>
    where?: GameEditionWhereInput
  }

  export type GameEditionUpdateToOneWithWhereWithoutGameVersionInput = {
    where?: GameEditionWhereInput
    data: XOR<GameEditionUpdateWithoutGameVersionInput, GameEditionUncheckedUpdateWithoutGameVersionInput>
  }

  export type GameEditionUpdateWithoutGameVersionInput = {
    name?: StringFieldUpdateOperationsInput | string
    game?: GameUpdateOneRequiredWithoutGameEditionNestedInput
  }

  export type GameEditionUncheckedUpdateWithoutGameVersionInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    gameId?: StringFieldUpdateOperationsInput | string
  }

  export type GameVersionRegionUpsertWithWhereUniqueWithoutGameVersionInput = {
    where: GameVersionRegionWhereUniqueInput
    update: XOR<GameVersionRegionUpdateWithoutGameVersionInput, GameVersionRegionUncheckedUpdateWithoutGameVersionInput>
    create: XOR<GameVersionRegionCreateWithoutGameVersionInput, GameVersionRegionUncheckedCreateWithoutGameVersionInput>
  }

  export type GameVersionRegionUpdateWithWhereUniqueWithoutGameVersionInput = {
    where: GameVersionRegionWhereUniqueInput
    data: XOR<GameVersionRegionUpdateWithoutGameVersionInput, GameVersionRegionUncheckedUpdateWithoutGameVersionInput>
  }

  export type GameVersionRegionUpdateManyWithWhereWithoutGameVersionInput = {
    where: GameVersionRegionScalarWhereInput
    data: XOR<GameVersionRegionUpdateManyMutationInput, GameVersionRegionUncheckedUpdateManyWithoutGameVersionInput>
  }

  export type GameVersionRegionScalarWhereInput = {
    AND?: GameVersionRegionScalarWhereInput | GameVersionRegionScalarWhereInput[]
    OR?: GameVersionRegionScalarWhereInput[]
    NOT?: GameVersionRegionScalarWhereInput | GameVersionRegionScalarWhereInput[]
    id?: IntFilter<"GameVersionRegion"> | number
    SKU?: StringFilter<"GameVersionRegion"> | string
    gameRegionId?: IntFilter<"GameVersionRegion"> | number
    storeUrl?: StringNullableFilter<"GameVersionRegion"> | string | null
    isAvailable?: BoolFilter<"GameVersionRegion"> | boolean
    lastChecked?: DateTimeNullableFilter<"GameVersionRegion"> | Date | string | null
    createdAt?: DateTimeFilter<"GameVersionRegion"> | Date | string
    updatedAt?: DateTimeFilter<"GameVersionRegion"> | Date | string
  }

  export type GameCreateWithoutGameRegionInput = {
    id?: string
    psnId: string
    slug?: string | null
    title: string
    fullUrl?: string | null
    rating?: number | null
    genre?: string | null
    publisher?: string | null
    isFreeToPlay?: boolean | null
    releaseDate?: Date | string | null
    releaseStatus?: $Enums.ReleaseStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    GameLanguageSupport?: GameLanguageSupportCreateNestedManyWithoutGameInput
    GameImage?: GameImageCreateNestedManyWithoutGameInput
    PsPlus?: PsPlusCreateNestedManyWithoutGameInput
    GameEdition?: GameEditionCreateNestedManyWithoutGameInput
    GameVersion?: GameVersionCreateNestedManyWithoutGameInput
  }

  export type GameUncheckedCreateWithoutGameRegionInput = {
    id?: string
    psnId: string
    slug?: string | null
    title: string
    fullUrl?: string | null
    rating?: number | null
    genre?: string | null
    publisher?: string | null
    isFreeToPlay?: boolean | null
    releaseDate?: Date | string | null
    releaseStatus?: $Enums.ReleaseStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    GameLanguageSupport?: GameLanguageSupportUncheckedCreateNestedManyWithoutGameInput
    GameImage?: GameImageUncheckedCreateNestedManyWithoutGameInput
    PsPlus?: PsPlusUncheckedCreateNestedManyWithoutGameInput
    GameEdition?: GameEditionUncheckedCreateNestedManyWithoutGameInput
    GameVersion?: GameVersionUncheckedCreateNestedManyWithoutGameInput
  }

  export type GameCreateOrConnectWithoutGameRegionInput = {
    where: GameWhereUniqueInput
    create: XOR<GameCreateWithoutGameRegionInput, GameUncheckedCreateWithoutGameRegionInput>
  }

  export type RegionCreateWithoutGameRegionInput = {
    code: string
    name: string
    currency: string
  }

  export type RegionUncheckedCreateWithoutGameRegionInput = {
    id?: number
    code: string
    name: string
    currency: string
  }

  export type RegionCreateOrConnectWithoutGameRegionInput = {
    where: RegionWhereUniqueInput
    create: XOR<RegionCreateWithoutGameRegionInput, RegionUncheckedCreateWithoutGameRegionInput>
  }

  export type GameVersionRegionCreateWithoutGameRegionInput = {
    storeUrl?: string | null
    isAvailable?: boolean
    lastChecked?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    gameVersion: GameVersionCreateNestedOneWithoutGameVersionRegionInput
    Price?: PriceCreateNestedManyWithoutGameVersionRegionInput
    PriceHistory?: PriceHistoryCreateNestedManyWithoutGameVersionRegionInput
  }

  export type GameVersionRegionUncheckedCreateWithoutGameRegionInput = {
    id?: number
    SKU: string
    storeUrl?: string | null
    isAvailable?: boolean
    lastChecked?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    Price?: PriceUncheckedCreateNestedManyWithoutGameVersionRegionInput
    PriceHistory?: PriceHistoryUncheckedCreateNestedManyWithoutGameVersionRegionInput
  }

  export type GameVersionRegionCreateOrConnectWithoutGameRegionInput = {
    where: GameVersionRegionWhereUniqueInput
    create: XOR<GameVersionRegionCreateWithoutGameRegionInput, GameVersionRegionUncheckedCreateWithoutGameRegionInput>
  }

  export type GameVersionRegionCreateManyGameRegionInputEnvelope = {
    data: GameVersionRegionCreateManyGameRegionInput | GameVersionRegionCreateManyGameRegionInput[]
    skipDuplicates?: boolean
  }

  export type GameUpsertWithoutGameRegionInput = {
    update: XOR<GameUpdateWithoutGameRegionInput, GameUncheckedUpdateWithoutGameRegionInput>
    create: XOR<GameCreateWithoutGameRegionInput, GameUncheckedCreateWithoutGameRegionInput>
    where?: GameWhereInput
  }

  export type GameUpdateToOneWithWhereWithoutGameRegionInput = {
    where?: GameWhereInput
    data: XOR<GameUpdateWithoutGameRegionInput, GameUncheckedUpdateWithoutGameRegionInput>
  }

  export type GameUpdateWithoutGameRegionInput = {
    id?: StringFieldUpdateOperationsInput | string
    psnId?: StringFieldUpdateOperationsInput | string
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    fullUrl?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    genre?: NullableStringFieldUpdateOperationsInput | string | null
    publisher?: NullableStringFieldUpdateOperationsInput | string | null
    isFreeToPlay?: NullableBoolFieldUpdateOperationsInput | boolean | null
    releaseDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    releaseStatus?: EnumReleaseStatusFieldUpdateOperationsInput | $Enums.ReleaseStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    GameLanguageSupport?: GameLanguageSupportUpdateManyWithoutGameNestedInput
    GameImage?: GameImageUpdateManyWithoutGameNestedInput
    PsPlus?: PsPlusUpdateManyWithoutGameNestedInput
    GameEdition?: GameEditionUpdateManyWithoutGameNestedInput
    GameVersion?: GameVersionUpdateManyWithoutGameNestedInput
  }

  export type GameUncheckedUpdateWithoutGameRegionInput = {
    id?: StringFieldUpdateOperationsInput | string
    psnId?: StringFieldUpdateOperationsInput | string
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    fullUrl?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    genre?: NullableStringFieldUpdateOperationsInput | string | null
    publisher?: NullableStringFieldUpdateOperationsInput | string | null
    isFreeToPlay?: NullableBoolFieldUpdateOperationsInput | boolean | null
    releaseDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    releaseStatus?: EnumReleaseStatusFieldUpdateOperationsInput | $Enums.ReleaseStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    GameLanguageSupport?: GameLanguageSupportUncheckedUpdateManyWithoutGameNestedInput
    GameImage?: GameImageUncheckedUpdateManyWithoutGameNestedInput
    PsPlus?: PsPlusUncheckedUpdateManyWithoutGameNestedInput
    GameEdition?: GameEditionUncheckedUpdateManyWithoutGameNestedInput
    GameVersion?: GameVersionUncheckedUpdateManyWithoutGameNestedInput
  }

  export type RegionUpsertWithoutGameRegionInput = {
    update: XOR<RegionUpdateWithoutGameRegionInput, RegionUncheckedUpdateWithoutGameRegionInput>
    create: XOR<RegionCreateWithoutGameRegionInput, RegionUncheckedCreateWithoutGameRegionInput>
    where?: RegionWhereInput
  }

  export type RegionUpdateToOneWithWhereWithoutGameRegionInput = {
    where?: RegionWhereInput
    data: XOR<RegionUpdateWithoutGameRegionInput, RegionUncheckedUpdateWithoutGameRegionInput>
  }

  export type RegionUpdateWithoutGameRegionInput = {
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    currency?: StringFieldUpdateOperationsInput | string
  }

  export type RegionUncheckedUpdateWithoutGameRegionInput = {
    id?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    currency?: StringFieldUpdateOperationsInput | string
  }

  export type GameVersionRegionUpsertWithWhereUniqueWithoutGameRegionInput = {
    where: GameVersionRegionWhereUniqueInput
    update: XOR<GameVersionRegionUpdateWithoutGameRegionInput, GameVersionRegionUncheckedUpdateWithoutGameRegionInput>
    create: XOR<GameVersionRegionCreateWithoutGameRegionInput, GameVersionRegionUncheckedCreateWithoutGameRegionInput>
  }

  export type GameVersionRegionUpdateWithWhereUniqueWithoutGameRegionInput = {
    where: GameVersionRegionWhereUniqueInput
    data: XOR<GameVersionRegionUpdateWithoutGameRegionInput, GameVersionRegionUncheckedUpdateWithoutGameRegionInput>
  }

  export type GameVersionRegionUpdateManyWithWhereWithoutGameRegionInput = {
    where: GameVersionRegionScalarWhereInput
    data: XOR<GameVersionRegionUpdateManyMutationInput, GameVersionRegionUncheckedUpdateManyWithoutGameRegionInput>
  }

  export type GameVersionCreateWithoutGameVersionRegionInput = {
    SKU?: string
    platform?: $Enums.Platform
    createdAt?: Date | string
    updatedAt?: Date | string
    game: GameCreateNestedOneWithoutGameVersionInput
    edition: GameEditionCreateNestedOneWithoutGameVersionInput
  }

  export type GameVersionUncheckedCreateWithoutGameVersionRegionInput = {
    SKU?: string
    gameId: string
    editionId: number
    platform?: $Enums.Platform
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GameVersionCreateOrConnectWithoutGameVersionRegionInput = {
    where: GameVersionWhereUniqueInput
    create: XOR<GameVersionCreateWithoutGameVersionRegionInput, GameVersionUncheckedCreateWithoutGameVersionRegionInput>
  }

  export type GameRegionCreateWithoutVersionRegionsInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    game: GameCreateNestedOneWithoutGameRegionInput
    region: RegionCreateNestedOneWithoutGameRegionInput
  }

  export type GameRegionUncheckedCreateWithoutVersionRegionsInput = {
    id?: number
    regionId: number
    gameId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GameRegionCreateOrConnectWithoutVersionRegionsInput = {
    where: GameRegionWhereUniqueInput
    create: XOR<GameRegionCreateWithoutVersionRegionsInput, GameRegionUncheckedCreateWithoutVersionRegionsInput>
  }

  export type PriceCreateWithoutGameVersionRegionInput = {
    price: Decimal | DecimalJsLike | number | string
    originalPrice?: Decimal | DecimalJsLike | number | string | null
    currency: string
    type?: $Enums.PriceType
    hasDiscount?: boolean
    discountPercent?: number | null
    discountStart?: Date | string | null
    discountFinish?: Date | string | null
    recordedAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PriceUncheckedCreateWithoutGameVersionRegionInput = {
    id?: number
    price: Decimal | DecimalJsLike | number | string
    originalPrice?: Decimal | DecimalJsLike | number | string | null
    currency: string
    type?: $Enums.PriceType
    hasDiscount?: boolean
    discountPercent?: number | null
    discountStart?: Date | string | null
    discountFinish?: Date | string | null
    recordedAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PriceCreateOrConnectWithoutGameVersionRegionInput = {
    where: PriceWhereUniqueInput
    create: XOR<PriceCreateWithoutGameVersionRegionInput, PriceUncheckedCreateWithoutGameVersionRegionInput>
  }

  export type PriceCreateManyGameVersionRegionInputEnvelope = {
    data: PriceCreateManyGameVersionRegionInput | PriceCreateManyGameVersionRegionInput[]
    skipDuplicates?: boolean
  }

  export type PriceHistoryCreateWithoutGameVersionRegionInput = {
    price: Decimal | DecimalJsLike | number | string
    originalPrice?: Decimal | DecimalJsLike | number | string | null
    currency: string
    type: $Enums.PriceType
    recordedAt?: Date | string
  }

  export type PriceHistoryUncheckedCreateWithoutGameVersionRegionInput = {
    id?: number
    price: Decimal | DecimalJsLike | number | string
    originalPrice?: Decimal | DecimalJsLike | number | string | null
    currency: string
    type: $Enums.PriceType
    recordedAt?: Date | string
  }

  export type PriceHistoryCreateOrConnectWithoutGameVersionRegionInput = {
    where: PriceHistoryWhereUniqueInput
    create: XOR<PriceHistoryCreateWithoutGameVersionRegionInput, PriceHistoryUncheckedCreateWithoutGameVersionRegionInput>
  }

  export type PriceHistoryCreateManyGameVersionRegionInputEnvelope = {
    data: PriceHistoryCreateManyGameVersionRegionInput | PriceHistoryCreateManyGameVersionRegionInput[]
    skipDuplicates?: boolean
  }

  export type GameVersionUpsertWithoutGameVersionRegionInput = {
    update: XOR<GameVersionUpdateWithoutGameVersionRegionInput, GameVersionUncheckedUpdateWithoutGameVersionRegionInput>
    create: XOR<GameVersionCreateWithoutGameVersionRegionInput, GameVersionUncheckedCreateWithoutGameVersionRegionInput>
    where?: GameVersionWhereInput
  }

  export type GameVersionUpdateToOneWithWhereWithoutGameVersionRegionInput = {
    where?: GameVersionWhereInput
    data: XOR<GameVersionUpdateWithoutGameVersionRegionInput, GameVersionUncheckedUpdateWithoutGameVersionRegionInput>
  }

  export type GameVersionUpdateWithoutGameVersionRegionInput = {
    SKU?: StringFieldUpdateOperationsInput | string
    platform?: EnumPlatformFieldUpdateOperationsInput | $Enums.Platform
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    game?: GameUpdateOneRequiredWithoutGameVersionNestedInput
    edition?: GameEditionUpdateOneRequiredWithoutGameVersionNestedInput
  }

  export type GameVersionUncheckedUpdateWithoutGameVersionRegionInput = {
    SKU?: StringFieldUpdateOperationsInput | string
    gameId?: StringFieldUpdateOperationsInput | string
    editionId?: IntFieldUpdateOperationsInput | number
    platform?: EnumPlatformFieldUpdateOperationsInput | $Enums.Platform
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GameRegionUpsertWithoutVersionRegionsInput = {
    update: XOR<GameRegionUpdateWithoutVersionRegionsInput, GameRegionUncheckedUpdateWithoutVersionRegionsInput>
    create: XOR<GameRegionCreateWithoutVersionRegionsInput, GameRegionUncheckedCreateWithoutVersionRegionsInput>
    where?: GameRegionWhereInput
  }

  export type GameRegionUpdateToOneWithWhereWithoutVersionRegionsInput = {
    where?: GameRegionWhereInput
    data: XOR<GameRegionUpdateWithoutVersionRegionsInput, GameRegionUncheckedUpdateWithoutVersionRegionsInput>
  }

  export type GameRegionUpdateWithoutVersionRegionsInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    game?: GameUpdateOneRequiredWithoutGameRegionNestedInput
    region?: RegionUpdateOneRequiredWithoutGameRegionNestedInput
  }

  export type GameRegionUncheckedUpdateWithoutVersionRegionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    regionId?: IntFieldUpdateOperationsInput | number
    gameId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PriceUpsertWithWhereUniqueWithoutGameVersionRegionInput = {
    where: PriceWhereUniqueInput
    update: XOR<PriceUpdateWithoutGameVersionRegionInput, PriceUncheckedUpdateWithoutGameVersionRegionInput>
    create: XOR<PriceCreateWithoutGameVersionRegionInput, PriceUncheckedCreateWithoutGameVersionRegionInput>
  }

  export type PriceUpdateWithWhereUniqueWithoutGameVersionRegionInput = {
    where: PriceWhereUniqueInput
    data: XOR<PriceUpdateWithoutGameVersionRegionInput, PriceUncheckedUpdateWithoutGameVersionRegionInput>
  }

  export type PriceUpdateManyWithWhereWithoutGameVersionRegionInput = {
    where: PriceScalarWhereInput
    data: XOR<PriceUpdateManyMutationInput, PriceUncheckedUpdateManyWithoutGameVersionRegionInput>
  }

  export type PriceScalarWhereInput = {
    AND?: PriceScalarWhereInput | PriceScalarWhereInput[]
    OR?: PriceScalarWhereInput[]
    NOT?: PriceScalarWhereInput | PriceScalarWhereInput[]
    id?: IntFilter<"Price"> | number
    gameVersionRegionId?: IntFilter<"Price"> | number
    price?: DecimalFilter<"Price"> | Decimal | DecimalJsLike | number | string
    originalPrice?: DecimalNullableFilter<"Price"> | Decimal | DecimalJsLike | number | string | null
    currency?: StringFilter<"Price"> | string
    type?: EnumPriceTypeFilter<"Price"> | $Enums.PriceType
    hasDiscount?: BoolFilter<"Price"> | boolean
    discountPercent?: IntNullableFilter<"Price"> | number | null
    discountStart?: DateTimeNullableFilter<"Price"> | Date | string | null
    discountFinish?: DateTimeNullableFilter<"Price"> | Date | string | null
    recordedAt?: DateTimeFilter<"Price"> | Date | string
    createdAt?: DateTimeFilter<"Price"> | Date | string
    updatedAt?: DateTimeFilter<"Price"> | Date | string
  }

  export type PriceHistoryUpsertWithWhereUniqueWithoutGameVersionRegionInput = {
    where: PriceHistoryWhereUniqueInput
    update: XOR<PriceHistoryUpdateWithoutGameVersionRegionInput, PriceHistoryUncheckedUpdateWithoutGameVersionRegionInput>
    create: XOR<PriceHistoryCreateWithoutGameVersionRegionInput, PriceHistoryUncheckedCreateWithoutGameVersionRegionInput>
  }

  export type PriceHistoryUpdateWithWhereUniqueWithoutGameVersionRegionInput = {
    where: PriceHistoryWhereUniqueInput
    data: XOR<PriceHistoryUpdateWithoutGameVersionRegionInput, PriceHistoryUncheckedUpdateWithoutGameVersionRegionInput>
  }

  export type PriceHistoryUpdateManyWithWhereWithoutGameVersionRegionInput = {
    where: PriceHistoryScalarWhereInput
    data: XOR<PriceHistoryUpdateManyMutationInput, PriceHistoryUncheckedUpdateManyWithoutGameVersionRegionInput>
  }

  export type PriceHistoryScalarWhereInput = {
    AND?: PriceHistoryScalarWhereInput | PriceHistoryScalarWhereInput[]
    OR?: PriceHistoryScalarWhereInput[]
    NOT?: PriceHistoryScalarWhereInput | PriceHistoryScalarWhereInput[]
    id?: IntFilter<"PriceHistory"> | number
    gameVersionRegionId?: IntFilter<"PriceHistory"> | number
    price?: DecimalFilter<"PriceHistory"> | Decimal | DecimalJsLike | number | string
    originalPrice?: DecimalNullableFilter<"PriceHistory"> | Decimal | DecimalJsLike | number | string | null
    currency?: StringFilter<"PriceHistory"> | string
    type?: EnumPriceTypeFilter<"PriceHistory"> | $Enums.PriceType
    recordedAt?: DateTimeFilter<"PriceHistory"> | Date | string
  }

  export type GameVersionRegionCreateWithoutPriceInput = {
    storeUrl?: string | null
    isAvailable?: boolean
    lastChecked?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    gameVersion: GameVersionCreateNestedOneWithoutGameVersionRegionInput
    gameRegion: GameRegionCreateNestedOneWithoutVersionRegionsInput
    PriceHistory?: PriceHistoryCreateNestedManyWithoutGameVersionRegionInput
  }

  export type GameVersionRegionUncheckedCreateWithoutPriceInput = {
    id?: number
    SKU: string
    gameRegionId: number
    storeUrl?: string | null
    isAvailable?: boolean
    lastChecked?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    PriceHistory?: PriceHistoryUncheckedCreateNestedManyWithoutGameVersionRegionInput
  }

  export type GameVersionRegionCreateOrConnectWithoutPriceInput = {
    where: GameVersionRegionWhereUniqueInput
    create: XOR<GameVersionRegionCreateWithoutPriceInput, GameVersionRegionUncheckedCreateWithoutPriceInput>
  }

  export type GameVersionRegionUpsertWithoutPriceInput = {
    update: XOR<GameVersionRegionUpdateWithoutPriceInput, GameVersionRegionUncheckedUpdateWithoutPriceInput>
    create: XOR<GameVersionRegionCreateWithoutPriceInput, GameVersionRegionUncheckedCreateWithoutPriceInput>
    where?: GameVersionRegionWhereInput
  }

  export type GameVersionRegionUpdateToOneWithWhereWithoutPriceInput = {
    where?: GameVersionRegionWhereInput
    data: XOR<GameVersionRegionUpdateWithoutPriceInput, GameVersionRegionUncheckedUpdateWithoutPriceInput>
  }

  export type GameVersionRegionUpdateWithoutPriceInput = {
    storeUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    lastChecked?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    gameVersion?: GameVersionUpdateOneRequiredWithoutGameVersionRegionNestedInput
    gameRegion?: GameRegionUpdateOneRequiredWithoutVersionRegionsNestedInput
    PriceHistory?: PriceHistoryUpdateManyWithoutGameVersionRegionNestedInput
  }

  export type GameVersionRegionUncheckedUpdateWithoutPriceInput = {
    id?: IntFieldUpdateOperationsInput | number
    SKU?: StringFieldUpdateOperationsInput | string
    gameRegionId?: IntFieldUpdateOperationsInput | number
    storeUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    lastChecked?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    PriceHistory?: PriceHistoryUncheckedUpdateManyWithoutGameVersionRegionNestedInput
  }

  export type GameVersionRegionCreateWithoutPriceHistoryInput = {
    storeUrl?: string | null
    isAvailable?: boolean
    lastChecked?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    gameVersion: GameVersionCreateNestedOneWithoutGameVersionRegionInput
    gameRegion: GameRegionCreateNestedOneWithoutVersionRegionsInput
    Price?: PriceCreateNestedManyWithoutGameVersionRegionInput
  }

  export type GameVersionRegionUncheckedCreateWithoutPriceHistoryInput = {
    id?: number
    SKU: string
    gameRegionId: number
    storeUrl?: string | null
    isAvailable?: boolean
    lastChecked?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    Price?: PriceUncheckedCreateNestedManyWithoutGameVersionRegionInput
  }

  export type GameVersionRegionCreateOrConnectWithoutPriceHistoryInput = {
    where: GameVersionRegionWhereUniqueInput
    create: XOR<GameVersionRegionCreateWithoutPriceHistoryInput, GameVersionRegionUncheckedCreateWithoutPriceHistoryInput>
  }

  export type GameVersionRegionUpsertWithoutPriceHistoryInput = {
    update: XOR<GameVersionRegionUpdateWithoutPriceHistoryInput, GameVersionRegionUncheckedUpdateWithoutPriceHistoryInput>
    create: XOR<GameVersionRegionCreateWithoutPriceHistoryInput, GameVersionRegionUncheckedCreateWithoutPriceHistoryInput>
    where?: GameVersionRegionWhereInput
  }

  export type GameVersionRegionUpdateToOneWithWhereWithoutPriceHistoryInput = {
    where?: GameVersionRegionWhereInput
    data: XOR<GameVersionRegionUpdateWithoutPriceHistoryInput, GameVersionRegionUncheckedUpdateWithoutPriceHistoryInput>
  }

  export type GameVersionRegionUpdateWithoutPriceHistoryInput = {
    storeUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    lastChecked?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    gameVersion?: GameVersionUpdateOneRequiredWithoutGameVersionRegionNestedInput
    gameRegion?: GameRegionUpdateOneRequiredWithoutVersionRegionsNestedInput
    Price?: PriceUpdateManyWithoutGameVersionRegionNestedInput
  }

  export type GameVersionRegionUncheckedUpdateWithoutPriceHistoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    SKU?: StringFieldUpdateOperationsInput | string
    gameRegionId?: IntFieldUpdateOperationsInput | number
    storeUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    lastChecked?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Price?: PriceUncheckedUpdateManyWithoutGameVersionRegionNestedInput
  }

  export type GameLanguageSupportCreateManyGameInput = {
    id?: number
    languageId: number
    languageType: $Enums.LanguageType
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GameImageCreateManyGameInput = {
    id?: number
    url?: string | null
    type?: $Enums.ImageType
  }

  export type PsPlusCreateManyGameInput = {
    id?: string
    type?: $Enums.PsPlusType
  }

  export type GameEditionCreateManyGameInput = {
    id?: number
    name: string
  }

  export type GameVersionCreateManyGameInput = {
    SKU?: string
    editionId: number
    platform?: $Enums.Platform
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GameRegionCreateManyGameInput = {
    id?: number
    regionId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GameLanguageSupportUpdateWithoutGameInput = {
    languageType?: EnumLanguageTypeFieldUpdateOperationsInput | $Enums.LanguageType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    language?: LanguageUpdateOneRequiredWithoutGameLanguageSupportNestedInput
  }

  export type GameLanguageSupportUncheckedUpdateWithoutGameInput = {
    id?: IntFieldUpdateOperationsInput | number
    languageId?: IntFieldUpdateOperationsInput | number
    languageType?: EnumLanguageTypeFieldUpdateOperationsInput | $Enums.LanguageType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GameLanguageSupportUncheckedUpdateManyWithoutGameInput = {
    id?: IntFieldUpdateOperationsInput | number
    languageId?: IntFieldUpdateOperationsInput | number
    languageType?: EnumLanguageTypeFieldUpdateOperationsInput | $Enums.LanguageType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GameImageUpdateWithoutGameInput = {
    url?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumImageTypeFieldUpdateOperationsInput | $Enums.ImageType
  }

  export type GameImageUncheckedUpdateWithoutGameInput = {
    id?: IntFieldUpdateOperationsInput | number
    url?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumImageTypeFieldUpdateOperationsInput | $Enums.ImageType
  }

  export type GameImageUncheckedUpdateManyWithoutGameInput = {
    id?: IntFieldUpdateOperationsInput | number
    url?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumImageTypeFieldUpdateOperationsInput | $Enums.ImageType
  }

  export type PsPlusUpdateWithoutGameInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumPsPlusTypeFieldUpdateOperationsInput | $Enums.PsPlusType
  }

  export type PsPlusUncheckedUpdateWithoutGameInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumPsPlusTypeFieldUpdateOperationsInput | $Enums.PsPlusType
  }

  export type PsPlusUncheckedUpdateManyWithoutGameInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumPsPlusTypeFieldUpdateOperationsInput | $Enums.PsPlusType
  }

  export type GameEditionUpdateWithoutGameInput = {
    name?: StringFieldUpdateOperationsInput | string
    GameVersion?: GameVersionUpdateManyWithoutEditionNestedInput
  }

  export type GameEditionUncheckedUpdateWithoutGameInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    GameVersion?: GameVersionUncheckedUpdateManyWithoutEditionNestedInput
  }

  export type GameEditionUncheckedUpdateManyWithoutGameInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type GameVersionUpdateWithoutGameInput = {
    SKU?: StringFieldUpdateOperationsInput | string
    platform?: EnumPlatformFieldUpdateOperationsInput | $Enums.Platform
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    edition?: GameEditionUpdateOneRequiredWithoutGameVersionNestedInput
    GameVersionRegion?: GameVersionRegionUpdateManyWithoutGameVersionNestedInput
  }

  export type GameVersionUncheckedUpdateWithoutGameInput = {
    SKU?: StringFieldUpdateOperationsInput | string
    editionId?: IntFieldUpdateOperationsInput | number
    platform?: EnumPlatformFieldUpdateOperationsInput | $Enums.Platform
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    GameVersionRegion?: GameVersionRegionUncheckedUpdateManyWithoutGameVersionNestedInput
  }

  export type GameVersionUncheckedUpdateManyWithoutGameInput = {
    SKU?: StringFieldUpdateOperationsInput | string
    editionId?: IntFieldUpdateOperationsInput | number
    platform?: EnumPlatformFieldUpdateOperationsInput | $Enums.Platform
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GameRegionUpdateWithoutGameInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    region?: RegionUpdateOneRequiredWithoutGameRegionNestedInput
    versionRegions?: GameVersionRegionUpdateManyWithoutGameRegionNestedInput
  }

  export type GameRegionUncheckedUpdateWithoutGameInput = {
    id?: IntFieldUpdateOperationsInput | number
    regionId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    versionRegions?: GameVersionRegionUncheckedUpdateManyWithoutGameRegionNestedInput
  }

  export type GameRegionUncheckedUpdateManyWithoutGameInput = {
    id?: IntFieldUpdateOperationsInput | number
    regionId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GameLanguageSupportCreateManyLanguageInput = {
    id?: number
    gameId: string
    languageType: $Enums.LanguageType
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GameLanguageSupportUpdateWithoutLanguageInput = {
    languageType?: EnumLanguageTypeFieldUpdateOperationsInput | $Enums.LanguageType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    game?: GameUpdateOneRequiredWithoutGameLanguageSupportNestedInput
  }

  export type GameLanguageSupportUncheckedUpdateWithoutLanguageInput = {
    id?: IntFieldUpdateOperationsInput | number
    gameId?: StringFieldUpdateOperationsInput | string
    languageType?: EnumLanguageTypeFieldUpdateOperationsInput | $Enums.LanguageType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GameLanguageSupportUncheckedUpdateManyWithoutLanguageInput = {
    id?: IntFieldUpdateOperationsInput | number
    gameId?: StringFieldUpdateOperationsInput | string
    languageType?: EnumLanguageTypeFieldUpdateOperationsInput | $Enums.LanguageType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GameVersionCreateManyEditionInput = {
    SKU?: string
    gameId: string
    platform?: $Enums.Platform
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GameVersionUpdateWithoutEditionInput = {
    SKU?: StringFieldUpdateOperationsInput | string
    platform?: EnumPlatformFieldUpdateOperationsInput | $Enums.Platform
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    game?: GameUpdateOneRequiredWithoutGameVersionNestedInput
    GameVersionRegion?: GameVersionRegionUpdateManyWithoutGameVersionNestedInput
  }

  export type GameVersionUncheckedUpdateWithoutEditionInput = {
    SKU?: StringFieldUpdateOperationsInput | string
    gameId?: StringFieldUpdateOperationsInput | string
    platform?: EnumPlatformFieldUpdateOperationsInput | $Enums.Platform
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    GameVersionRegion?: GameVersionRegionUncheckedUpdateManyWithoutGameVersionNestedInput
  }

  export type GameVersionUncheckedUpdateManyWithoutEditionInput = {
    SKU?: StringFieldUpdateOperationsInput | string
    gameId?: StringFieldUpdateOperationsInput | string
    platform?: EnumPlatformFieldUpdateOperationsInput | $Enums.Platform
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GameRegionCreateManyRegionInput = {
    id?: number
    gameId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GameRegionUpdateWithoutRegionInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    game?: GameUpdateOneRequiredWithoutGameRegionNestedInput
    versionRegions?: GameVersionRegionUpdateManyWithoutGameRegionNestedInput
  }

  export type GameRegionUncheckedUpdateWithoutRegionInput = {
    id?: IntFieldUpdateOperationsInput | number
    gameId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    versionRegions?: GameVersionRegionUncheckedUpdateManyWithoutGameRegionNestedInput
  }

  export type GameRegionUncheckedUpdateManyWithoutRegionInput = {
    id?: IntFieldUpdateOperationsInput | number
    gameId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GameVersionRegionCreateManyGameVersionInput = {
    id?: number
    gameRegionId: number
    storeUrl?: string | null
    isAvailable?: boolean
    lastChecked?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GameVersionRegionUpdateWithoutGameVersionInput = {
    storeUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    lastChecked?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    gameRegion?: GameRegionUpdateOneRequiredWithoutVersionRegionsNestedInput
    Price?: PriceUpdateManyWithoutGameVersionRegionNestedInput
    PriceHistory?: PriceHistoryUpdateManyWithoutGameVersionRegionNestedInput
  }

  export type GameVersionRegionUncheckedUpdateWithoutGameVersionInput = {
    id?: IntFieldUpdateOperationsInput | number
    gameRegionId?: IntFieldUpdateOperationsInput | number
    storeUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    lastChecked?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Price?: PriceUncheckedUpdateManyWithoutGameVersionRegionNestedInput
    PriceHistory?: PriceHistoryUncheckedUpdateManyWithoutGameVersionRegionNestedInput
  }

  export type GameVersionRegionUncheckedUpdateManyWithoutGameVersionInput = {
    id?: IntFieldUpdateOperationsInput | number
    gameRegionId?: IntFieldUpdateOperationsInput | number
    storeUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    lastChecked?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GameVersionRegionCreateManyGameRegionInput = {
    id?: number
    SKU: string
    storeUrl?: string | null
    isAvailable?: boolean
    lastChecked?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GameVersionRegionUpdateWithoutGameRegionInput = {
    storeUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    lastChecked?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    gameVersion?: GameVersionUpdateOneRequiredWithoutGameVersionRegionNestedInput
    Price?: PriceUpdateManyWithoutGameVersionRegionNestedInput
    PriceHistory?: PriceHistoryUpdateManyWithoutGameVersionRegionNestedInput
  }

  export type GameVersionRegionUncheckedUpdateWithoutGameRegionInput = {
    id?: IntFieldUpdateOperationsInput | number
    SKU?: StringFieldUpdateOperationsInput | string
    storeUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    lastChecked?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Price?: PriceUncheckedUpdateManyWithoutGameVersionRegionNestedInput
    PriceHistory?: PriceHistoryUncheckedUpdateManyWithoutGameVersionRegionNestedInput
  }

  export type GameVersionRegionUncheckedUpdateManyWithoutGameRegionInput = {
    id?: IntFieldUpdateOperationsInput | number
    SKU?: StringFieldUpdateOperationsInput | string
    storeUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    lastChecked?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PriceCreateManyGameVersionRegionInput = {
    id?: number
    price: Decimal | DecimalJsLike | number | string
    originalPrice?: Decimal | DecimalJsLike | number | string | null
    currency: string
    type?: $Enums.PriceType
    hasDiscount?: boolean
    discountPercent?: number | null
    discountStart?: Date | string | null
    discountFinish?: Date | string | null
    recordedAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PriceHistoryCreateManyGameVersionRegionInput = {
    id?: number
    price: Decimal | DecimalJsLike | number | string
    originalPrice?: Decimal | DecimalJsLike | number | string | null
    currency: string
    type: $Enums.PriceType
    recordedAt?: Date | string
  }

  export type PriceUpdateWithoutGameVersionRegionInput = {
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    originalPrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    currency?: StringFieldUpdateOperationsInput | string
    type?: EnumPriceTypeFieldUpdateOperationsInput | $Enums.PriceType
    hasDiscount?: BoolFieldUpdateOperationsInput | boolean
    discountPercent?: NullableIntFieldUpdateOperationsInput | number | null
    discountStart?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    discountFinish?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    recordedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PriceUncheckedUpdateWithoutGameVersionRegionInput = {
    id?: IntFieldUpdateOperationsInput | number
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    originalPrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    currency?: StringFieldUpdateOperationsInput | string
    type?: EnumPriceTypeFieldUpdateOperationsInput | $Enums.PriceType
    hasDiscount?: BoolFieldUpdateOperationsInput | boolean
    discountPercent?: NullableIntFieldUpdateOperationsInput | number | null
    discountStart?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    discountFinish?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    recordedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PriceUncheckedUpdateManyWithoutGameVersionRegionInput = {
    id?: IntFieldUpdateOperationsInput | number
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    originalPrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    currency?: StringFieldUpdateOperationsInput | string
    type?: EnumPriceTypeFieldUpdateOperationsInput | $Enums.PriceType
    hasDiscount?: BoolFieldUpdateOperationsInput | boolean
    discountPercent?: NullableIntFieldUpdateOperationsInput | number | null
    discountStart?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    discountFinish?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    recordedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PriceHistoryUpdateWithoutGameVersionRegionInput = {
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    originalPrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    currency?: StringFieldUpdateOperationsInput | string
    type?: EnumPriceTypeFieldUpdateOperationsInput | $Enums.PriceType
    recordedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PriceHistoryUncheckedUpdateWithoutGameVersionRegionInput = {
    id?: IntFieldUpdateOperationsInput | number
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    originalPrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    currency?: StringFieldUpdateOperationsInput | string
    type?: EnumPriceTypeFieldUpdateOperationsInput | $Enums.PriceType
    recordedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PriceHistoryUncheckedUpdateManyWithoutGameVersionRegionInput = {
    id?: IntFieldUpdateOperationsInput | number
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    originalPrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    currency?: StringFieldUpdateOperationsInput | string
    type?: EnumPriceTypeFieldUpdateOperationsInput | $Enums.PriceType
    recordedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use GameCountOutputTypeDefaultArgs instead
     */
    export type GameCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = GameCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use LanguageCountOutputTypeDefaultArgs instead
     */
    export type LanguageCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = LanguageCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use GameEditionCountOutputTypeDefaultArgs instead
     */
    export type GameEditionCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = GameEditionCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use RegionCountOutputTypeDefaultArgs instead
     */
    export type RegionCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = RegionCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use GameVersionCountOutputTypeDefaultArgs instead
     */
    export type GameVersionCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = GameVersionCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use GameRegionCountOutputTypeDefaultArgs instead
     */
    export type GameRegionCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = GameRegionCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use GameVersionRegionCountOutputTypeDefaultArgs instead
     */
    export type GameVersionRegionCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = GameVersionRegionCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use GameDefaultArgs instead
     */
    export type GameArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = GameDefaultArgs<ExtArgs>
    /**
     * @deprecated Use LanguageDefaultArgs instead
     */
    export type LanguageArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = LanguageDefaultArgs<ExtArgs>
    /**
     * @deprecated Use GameLanguageSupportDefaultArgs instead
     */
    export type GameLanguageSupportArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = GameLanguageSupportDefaultArgs<ExtArgs>
    /**
     * @deprecated Use GameImageDefaultArgs instead
     */
    export type GameImageArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = GameImageDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PsPlusDefaultArgs instead
     */
    export type PsPlusArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PsPlusDefaultArgs<ExtArgs>
    /**
     * @deprecated Use GameEditionDefaultArgs instead
     */
    export type GameEditionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = GameEditionDefaultArgs<ExtArgs>
    /**
     * @deprecated Use RegionDefaultArgs instead
     */
    export type RegionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = RegionDefaultArgs<ExtArgs>
    /**
     * @deprecated Use GameVersionDefaultArgs instead
     */
    export type GameVersionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = GameVersionDefaultArgs<ExtArgs>
    /**
     * @deprecated Use GameRegionDefaultArgs instead
     */
    export type GameRegionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = GameRegionDefaultArgs<ExtArgs>
    /**
     * @deprecated Use GameVersionRegionDefaultArgs instead
     */
    export type GameVersionRegionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = GameVersionRegionDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PriceDefaultArgs instead
     */
    export type PriceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PriceDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PriceHistoryDefaultArgs instead
     */
    export type PriceHistoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PriceHistoryDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}