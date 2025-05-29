
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
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model UserProfile
 * 
 */
export type UserProfile = $Result.DefaultSelection<Prisma.$UserProfilePayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  USER: 'USER',
  ADMIN: 'ADMIN'
};

export type Role = (typeof Role)[keyof typeof Role]


export const PersonalityType: {
  INTROVERT: 'INTROVERT',
  EXTROVERT: 'EXTROVERT',
  AMBIVERT: 'AMBIVERT'
};

export type PersonalityType = (typeof PersonalityType)[keyof typeof PersonalityType]


export const Temperament: {
  SANGUINE: 'SANGUINE',
  CHOLERIC: 'CHOLERIC',
  PHLEGMATIC: 'PHLEGMATIC',
  MELANCHOLIC: 'MELANCHOLIC'
};

export type Temperament = (typeof Temperament)[keyof typeof Temperament]


export const Attitude: {
  POSITIVE: 'POSITIVE',
  NEGATIVE: 'NEGATIVE',
  NEUTRAL: 'NEUTRAL'
};

export type Attitude = (typeof Attitude)[keyof typeof Attitude]


export const AccommodationType: {
  SHORT_TERM: 'SHORT_TERM',
  LONG_TERM: 'LONG_TERM'
};

export type AccommodationType = (typeof AccommodationType)[keyof typeof AccommodationType]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

export type PersonalityType = $Enums.PersonalityType

export const PersonalityType: typeof $Enums.PersonalityType

export type Temperament = $Enums.Temperament

export const Temperament: typeof $Enums.Temperament

export type Attitude = $Enums.Attitude

export const Attitude: typeof $Enums.Attitude

export type AccommodationType = $Enums.AccommodationType

export const AccommodationType: typeof $Enums.AccommodationType

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
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
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

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


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userProfile`: Exposes CRUD operations for the **UserProfile** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserProfiles
    * const userProfiles = await prisma.userProfile.findMany()
    * ```
    */
  get userProfile(): Prisma.UserProfileDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
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
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
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
    User: 'User',
    UserProfile: 'UserProfile'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "userProfile"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      UserProfile: {
        payload: Prisma.$UserProfilePayload<ExtArgs>
        fields: Prisma.UserProfileFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserProfileFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProfilePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserProfileFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProfilePayload>
          }
          findFirst: {
            args: Prisma.UserProfileFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProfilePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserProfileFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProfilePayload>
          }
          findMany: {
            args: Prisma.UserProfileFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProfilePayload>[]
          }
          create: {
            args: Prisma.UserProfileCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProfilePayload>
          }
          createMany: {
            args: Prisma.UserProfileCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserProfileCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProfilePayload>[]
          }
          delete: {
            args: Prisma.UserProfileDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProfilePayload>
          }
          update: {
            args: Prisma.UserProfileUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProfilePayload>
          }
          deleteMany: {
            args: Prisma.UserProfileDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserProfileUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserProfileUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProfilePayload>[]
          }
          upsert: {
            args: Prisma.UserProfileUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProfilePayload>
          }
          aggregate: {
            args: Prisma.UserProfileAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserProfile>
          }
          groupBy: {
            args: Prisma.UserProfileGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserProfileGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserProfileCountArgs<ExtArgs>
            result: $Utils.Optional<UserProfileCountAggregateOutputType> | number
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
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    userProfile?: UserProfileOmit
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
    | 'updateManyAndReturn'
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
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    UserProfile: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    UserProfile?: boolean | UserCountOutputTypeCountUserProfileArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountUserProfileArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserProfileWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    fullName: string | null
    email: string | null
    password: string | null
    role: $Enums.Role | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    fullName: string | null
    email: string | null
    password: string | null
    role: $Enums.Role | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    fullName: number
    email: number
    password: number
    role: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    fullName?: true
    email?: true
    password?: true
    role?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    fullName?: true
    email?: true
    password?: true
    role?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    fullName?: true
    email?: true
    password?: true
    role?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    fullName: string
    email: string
    password: string
    role: $Enums.Role
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fullName?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    UserProfile?: boolean | User$UserProfileArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fullName?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fullName?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    fullName?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "fullName" | "email" | "password" | "role" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    UserProfile?: boolean | User$UserProfileArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      UserProfile: Prisma.$UserProfilePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      fullName: string
      email: string
      password: string
      role: $Enums.Role
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    UserProfile<T extends User$UserProfileArgs<ExtArgs> = {}>(args?: Subset<T, User$UserProfileArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly fullName: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'Role'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.UserProfile
   */
  export type User$UserProfileArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfile
     */
    omit?: UserProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProfileInclude<ExtArgs> | null
    where?: UserProfileWhereInput
    orderBy?: UserProfileOrderByWithRelationInput | UserProfileOrderByWithRelationInput[]
    cursor?: UserProfileWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserProfileScalarFieldEnum | UserProfileScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model UserProfile
   */

  export type AggregateUserProfile = {
    _count: UserProfileCountAggregateOutputType | null
    _avg: UserProfileAvgAggregateOutputType | null
    _sum: UserProfileSumAggregateOutputType | null
    _min: UserProfileMinAggregateOutputType | null
    _max: UserProfileMaxAggregateOutputType | null
  }

  export type UserProfileAvgAggregateOutputType = {
    graduationYear: number | null
    opennessLevel: number | null
    tidinessLevel: number | null
    physicalActivity: number | null
  }

  export type UserProfileSumAggregateOutputType = {
    graduationYear: number | null
    opennessLevel: number | null
    tidinessLevel: number | null
    physicalActivity: number | null
  }

  export type UserProfileMinAggregateOutputType = {
    id: string | null
    userId: string | null
    university: string | null
    faculty: string | null
    major: string | null
    graduationYear: number | null
    personalityType: $Enums.PersonalityType | null
    temperament: $Enums.Temperament | null
    opennessLevel: number | null
    religiousViews: string | null
    politicalViews: string | null
    tidinessLevel: number | null
    alcoholAttitude: $Enums.Attitude | null
    smokingAttitude: $Enums.Attitude | null
    accommodationType: $Enums.AccommodationType | null
    primaryGoal: string | null
    roommateExpectations: string | null
    favoriteMusic: string | null
    favoriteMovies: string | null
    readingPreferences: string | null
    boardGames: boolean | null
    travelInterest: boolean | null
    artInterest: boolean | null
    physicalActivity: number | null
    favoriteSports: string | null
    gymRegularly: boolean | null
    isEarlyBird: boolean | null
    scheduleType: string | null
    staysHomeOften: boolean | null
    hasPets: boolean | null
    petAttitude: string | null
    cooksAtHome: boolean | null
    sharesDuties: boolean | null
    usesHomeAppliances: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserProfileMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    university: string | null
    faculty: string | null
    major: string | null
    graduationYear: number | null
    personalityType: $Enums.PersonalityType | null
    temperament: $Enums.Temperament | null
    opennessLevel: number | null
    religiousViews: string | null
    politicalViews: string | null
    tidinessLevel: number | null
    alcoholAttitude: $Enums.Attitude | null
    smokingAttitude: $Enums.Attitude | null
    accommodationType: $Enums.AccommodationType | null
    primaryGoal: string | null
    roommateExpectations: string | null
    favoriteMusic: string | null
    favoriteMovies: string | null
    readingPreferences: string | null
    boardGames: boolean | null
    travelInterest: boolean | null
    artInterest: boolean | null
    physicalActivity: number | null
    favoriteSports: string | null
    gymRegularly: boolean | null
    isEarlyBird: boolean | null
    scheduleType: string | null
    staysHomeOften: boolean | null
    hasPets: boolean | null
    petAttitude: string | null
    cooksAtHome: boolean | null
    sharesDuties: boolean | null
    usesHomeAppliances: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserProfileCountAggregateOutputType = {
    id: number
    userId: number
    university: number
    faculty: number
    major: number
    graduationYear: number
    personalityType: number
    temperament: number
    opennessLevel: number
    religiousViews: number
    politicalViews: number
    tidinessLevel: number
    alcoholAttitude: number
    smokingAttitude: number
    accommodationType: number
    primaryGoal: number
    roommateExpectations: number
    hobbies: number
    favoriteMusic: number
    favoriteMovies: number
    readingPreferences: number
    boardGames: number
    travelInterest: number
    artInterest: number
    physicalActivity: number
    favoriteSports: number
    gymRegularly: number
    isEarlyBird: number
    scheduleType: number
    staysHomeOften: number
    hasPets: number
    petAttitude: number
    cooksAtHome: number
    sharesDuties: number
    usesHomeAppliances: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserProfileAvgAggregateInputType = {
    graduationYear?: true
    opennessLevel?: true
    tidinessLevel?: true
    physicalActivity?: true
  }

  export type UserProfileSumAggregateInputType = {
    graduationYear?: true
    opennessLevel?: true
    tidinessLevel?: true
    physicalActivity?: true
  }

  export type UserProfileMinAggregateInputType = {
    id?: true
    userId?: true
    university?: true
    faculty?: true
    major?: true
    graduationYear?: true
    personalityType?: true
    temperament?: true
    opennessLevel?: true
    religiousViews?: true
    politicalViews?: true
    tidinessLevel?: true
    alcoholAttitude?: true
    smokingAttitude?: true
    accommodationType?: true
    primaryGoal?: true
    roommateExpectations?: true
    favoriteMusic?: true
    favoriteMovies?: true
    readingPreferences?: true
    boardGames?: true
    travelInterest?: true
    artInterest?: true
    physicalActivity?: true
    favoriteSports?: true
    gymRegularly?: true
    isEarlyBird?: true
    scheduleType?: true
    staysHomeOften?: true
    hasPets?: true
    petAttitude?: true
    cooksAtHome?: true
    sharesDuties?: true
    usesHomeAppliances?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserProfileMaxAggregateInputType = {
    id?: true
    userId?: true
    university?: true
    faculty?: true
    major?: true
    graduationYear?: true
    personalityType?: true
    temperament?: true
    opennessLevel?: true
    religiousViews?: true
    politicalViews?: true
    tidinessLevel?: true
    alcoholAttitude?: true
    smokingAttitude?: true
    accommodationType?: true
    primaryGoal?: true
    roommateExpectations?: true
    favoriteMusic?: true
    favoriteMovies?: true
    readingPreferences?: true
    boardGames?: true
    travelInterest?: true
    artInterest?: true
    physicalActivity?: true
    favoriteSports?: true
    gymRegularly?: true
    isEarlyBird?: true
    scheduleType?: true
    staysHomeOften?: true
    hasPets?: true
    petAttitude?: true
    cooksAtHome?: true
    sharesDuties?: true
    usesHomeAppliances?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserProfileCountAggregateInputType = {
    id?: true
    userId?: true
    university?: true
    faculty?: true
    major?: true
    graduationYear?: true
    personalityType?: true
    temperament?: true
    opennessLevel?: true
    religiousViews?: true
    politicalViews?: true
    tidinessLevel?: true
    alcoholAttitude?: true
    smokingAttitude?: true
    accommodationType?: true
    primaryGoal?: true
    roommateExpectations?: true
    hobbies?: true
    favoriteMusic?: true
    favoriteMovies?: true
    readingPreferences?: true
    boardGames?: true
    travelInterest?: true
    artInterest?: true
    physicalActivity?: true
    favoriteSports?: true
    gymRegularly?: true
    isEarlyBird?: true
    scheduleType?: true
    staysHomeOften?: true
    hasPets?: true
    petAttitude?: true
    cooksAtHome?: true
    sharesDuties?: true
    usesHomeAppliances?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserProfileAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserProfile to aggregate.
     */
    where?: UserProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserProfiles to fetch.
     */
    orderBy?: UserProfileOrderByWithRelationInput | UserProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserProfiles
    **/
    _count?: true | UserProfileCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserProfileAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserProfileSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserProfileMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserProfileMaxAggregateInputType
  }

  export type GetUserProfileAggregateType<T extends UserProfileAggregateArgs> = {
        [P in keyof T & keyof AggregateUserProfile]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserProfile[P]>
      : GetScalarType<T[P], AggregateUserProfile[P]>
  }




  export type UserProfileGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserProfileWhereInput
    orderBy?: UserProfileOrderByWithAggregationInput | UserProfileOrderByWithAggregationInput[]
    by: UserProfileScalarFieldEnum[] | UserProfileScalarFieldEnum
    having?: UserProfileScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserProfileCountAggregateInputType | true
    _avg?: UserProfileAvgAggregateInputType
    _sum?: UserProfileSumAggregateInputType
    _min?: UserProfileMinAggregateInputType
    _max?: UserProfileMaxAggregateInputType
  }

  export type UserProfileGroupByOutputType = {
    id: string
    userId: string
    university: string | null
    faculty: string | null
    major: string | null
    graduationYear: number | null
    personalityType: $Enums.PersonalityType | null
    temperament: $Enums.Temperament | null
    opennessLevel: number | null
    religiousViews: string | null
    politicalViews: string | null
    tidinessLevel: number | null
    alcoholAttitude: $Enums.Attitude | null
    smokingAttitude: $Enums.Attitude | null
    accommodationType: $Enums.AccommodationType | null
    primaryGoal: string | null
    roommateExpectations: string | null
    hobbies: string[]
    favoriteMusic: string | null
    favoriteMovies: string | null
    readingPreferences: string | null
    boardGames: boolean | null
    travelInterest: boolean | null
    artInterest: boolean | null
    physicalActivity: number | null
    favoriteSports: string | null
    gymRegularly: boolean | null
    isEarlyBird: boolean | null
    scheduleType: string | null
    staysHomeOften: boolean | null
    hasPets: boolean | null
    petAttitude: string | null
    cooksAtHome: boolean | null
    sharesDuties: boolean | null
    usesHomeAppliances: boolean | null
    createdAt: Date
    updatedAt: Date
    _count: UserProfileCountAggregateOutputType | null
    _avg: UserProfileAvgAggregateOutputType | null
    _sum: UserProfileSumAggregateOutputType | null
    _min: UserProfileMinAggregateOutputType | null
    _max: UserProfileMaxAggregateOutputType | null
  }

  type GetUserProfileGroupByPayload<T extends UserProfileGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserProfileGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserProfileGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserProfileGroupByOutputType[P]>
            : GetScalarType<T[P], UserProfileGroupByOutputType[P]>
        }
      >
    >


  export type UserProfileSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    university?: boolean
    faculty?: boolean
    major?: boolean
    graduationYear?: boolean
    personalityType?: boolean
    temperament?: boolean
    opennessLevel?: boolean
    religiousViews?: boolean
    politicalViews?: boolean
    tidinessLevel?: boolean
    alcoholAttitude?: boolean
    smokingAttitude?: boolean
    accommodationType?: boolean
    primaryGoal?: boolean
    roommateExpectations?: boolean
    hobbies?: boolean
    favoriteMusic?: boolean
    favoriteMovies?: boolean
    readingPreferences?: boolean
    boardGames?: boolean
    travelInterest?: boolean
    artInterest?: boolean
    physicalActivity?: boolean
    favoriteSports?: boolean
    gymRegularly?: boolean
    isEarlyBird?: boolean
    scheduleType?: boolean
    staysHomeOften?: boolean
    hasPets?: boolean
    petAttitude?: boolean
    cooksAtHome?: boolean
    sharesDuties?: boolean
    usesHomeAppliances?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userProfile"]>

  export type UserProfileSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    university?: boolean
    faculty?: boolean
    major?: boolean
    graduationYear?: boolean
    personalityType?: boolean
    temperament?: boolean
    opennessLevel?: boolean
    religiousViews?: boolean
    politicalViews?: boolean
    tidinessLevel?: boolean
    alcoholAttitude?: boolean
    smokingAttitude?: boolean
    accommodationType?: boolean
    primaryGoal?: boolean
    roommateExpectations?: boolean
    hobbies?: boolean
    favoriteMusic?: boolean
    favoriteMovies?: boolean
    readingPreferences?: boolean
    boardGames?: boolean
    travelInterest?: boolean
    artInterest?: boolean
    physicalActivity?: boolean
    favoriteSports?: boolean
    gymRegularly?: boolean
    isEarlyBird?: boolean
    scheduleType?: boolean
    staysHomeOften?: boolean
    hasPets?: boolean
    petAttitude?: boolean
    cooksAtHome?: boolean
    sharesDuties?: boolean
    usesHomeAppliances?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userProfile"]>

  export type UserProfileSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    university?: boolean
    faculty?: boolean
    major?: boolean
    graduationYear?: boolean
    personalityType?: boolean
    temperament?: boolean
    opennessLevel?: boolean
    religiousViews?: boolean
    politicalViews?: boolean
    tidinessLevel?: boolean
    alcoholAttitude?: boolean
    smokingAttitude?: boolean
    accommodationType?: boolean
    primaryGoal?: boolean
    roommateExpectations?: boolean
    hobbies?: boolean
    favoriteMusic?: boolean
    favoriteMovies?: boolean
    readingPreferences?: boolean
    boardGames?: boolean
    travelInterest?: boolean
    artInterest?: boolean
    physicalActivity?: boolean
    favoriteSports?: boolean
    gymRegularly?: boolean
    isEarlyBird?: boolean
    scheduleType?: boolean
    staysHomeOften?: boolean
    hasPets?: boolean
    petAttitude?: boolean
    cooksAtHome?: boolean
    sharesDuties?: boolean
    usesHomeAppliances?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userProfile"]>

  export type UserProfileSelectScalar = {
    id?: boolean
    userId?: boolean
    university?: boolean
    faculty?: boolean
    major?: boolean
    graduationYear?: boolean
    personalityType?: boolean
    temperament?: boolean
    opennessLevel?: boolean
    religiousViews?: boolean
    politicalViews?: boolean
    tidinessLevel?: boolean
    alcoholAttitude?: boolean
    smokingAttitude?: boolean
    accommodationType?: boolean
    primaryGoal?: boolean
    roommateExpectations?: boolean
    hobbies?: boolean
    favoriteMusic?: boolean
    favoriteMovies?: boolean
    readingPreferences?: boolean
    boardGames?: boolean
    travelInterest?: boolean
    artInterest?: boolean
    physicalActivity?: boolean
    favoriteSports?: boolean
    gymRegularly?: boolean
    isEarlyBird?: boolean
    scheduleType?: boolean
    staysHomeOften?: boolean
    hasPets?: boolean
    petAttitude?: boolean
    cooksAtHome?: boolean
    sharesDuties?: boolean
    usesHomeAppliances?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserProfileOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "university" | "faculty" | "major" | "graduationYear" | "personalityType" | "temperament" | "opennessLevel" | "religiousViews" | "politicalViews" | "tidinessLevel" | "alcoholAttitude" | "smokingAttitude" | "accommodationType" | "primaryGoal" | "roommateExpectations" | "hobbies" | "favoriteMusic" | "favoriteMovies" | "readingPreferences" | "boardGames" | "travelInterest" | "artInterest" | "physicalActivity" | "favoriteSports" | "gymRegularly" | "isEarlyBird" | "scheduleType" | "staysHomeOften" | "hasPets" | "petAttitude" | "cooksAtHome" | "sharesDuties" | "usesHomeAppliances" | "createdAt" | "updatedAt", ExtArgs["result"]["userProfile"]>
  export type UserProfileInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type UserProfileIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type UserProfileIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $UserProfilePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserProfile"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      university: string | null
      faculty: string | null
      major: string | null
      graduationYear: number | null
      personalityType: $Enums.PersonalityType | null
      temperament: $Enums.Temperament | null
      opennessLevel: number | null
      religiousViews: string | null
      politicalViews: string | null
      tidinessLevel: number | null
      alcoholAttitude: $Enums.Attitude | null
      smokingAttitude: $Enums.Attitude | null
      accommodationType: $Enums.AccommodationType | null
      primaryGoal: string | null
      roommateExpectations: string | null
      hobbies: string[]
      favoriteMusic: string | null
      favoriteMovies: string | null
      readingPreferences: string | null
      boardGames: boolean | null
      travelInterest: boolean | null
      artInterest: boolean | null
      physicalActivity: number | null
      favoriteSports: string | null
      gymRegularly: boolean | null
      isEarlyBird: boolean | null
      scheduleType: string | null
      staysHomeOften: boolean | null
      hasPets: boolean | null
      petAttitude: string | null
      cooksAtHome: boolean | null
      sharesDuties: boolean | null
      usesHomeAppliances: boolean | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["userProfile"]>
    composites: {}
  }

  type UserProfileGetPayload<S extends boolean | null | undefined | UserProfileDefaultArgs> = $Result.GetResult<Prisma.$UserProfilePayload, S>

  type UserProfileCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserProfileFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserProfileCountAggregateInputType | true
    }

  export interface UserProfileDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserProfile'], meta: { name: 'UserProfile' } }
    /**
     * Find zero or one UserProfile that matches the filter.
     * @param {UserProfileFindUniqueArgs} args - Arguments to find a UserProfile
     * @example
     * // Get one UserProfile
     * const userProfile = await prisma.userProfile.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserProfileFindUniqueArgs>(args: SelectSubset<T, UserProfileFindUniqueArgs<ExtArgs>>): Prisma__UserProfileClient<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserProfile that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserProfileFindUniqueOrThrowArgs} args - Arguments to find a UserProfile
     * @example
     * // Get one UserProfile
     * const userProfile = await prisma.userProfile.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserProfileFindUniqueOrThrowArgs>(args: SelectSubset<T, UserProfileFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserProfileClient<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserProfile that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserProfileFindFirstArgs} args - Arguments to find a UserProfile
     * @example
     * // Get one UserProfile
     * const userProfile = await prisma.userProfile.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserProfileFindFirstArgs>(args?: SelectSubset<T, UserProfileFindFirstArgs<ExtArgs>>): Prisma__UserProfileClient<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserProfile that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserProfileFindFirstOrThrowArgs} args - Arguments to find a UserProfile
     * @example
     * // Get one UserProfile
     * const userProfile = await prisma.userProfile.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserProfileFindFirstOrThrowArgs>(args?: SelectSubset<T, UserProfileFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserProfileClient<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserProfiles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserProfileFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserProfiles
     * const userProfiles = await prisma.userProfile.findMany()
     * 
     * // Get first 10 UserProfiles
     * const userProfiles = await prisma.userProfile.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userProfileWithIdOnly = await prisma.userProfile.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserProfileFindManyArgs>(args?: SelectSubset<T, UserProfileFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserProfile.
     * @param {UserProfileCreateArgs} args - Arguments to create a UserProfile.
     * @example
     * // Create one UserProfile
     * const UserProfile = await prisma.userProfile.create({
     *   data: {
     *     // ... data to create a UserProfile
     *   }
     * })
     * 
     */
    create<T extends UserProfileCreateArgs>(args: SelectSubset<T, UserProfileCreateArgs<ExtArgs>>): Prisma__UserProfileClient<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserProfiles.
     * @param {UserProfileCreateManyArgs} args - Arguments to create many UserProfiles.
     * @example
     * // Create many UserProfiles
     * const userProfile = await prisma.userProfile.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserProfileCreateManyArgs>(args?: SelectSubset<T, UserProfileCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserProfiles and returns the data saved in the database.
     * @param {UserProfileCreateManyAndReturnArgs} args - Arguments to create many UserProfiles.
     * @example
     * // Create many UserProfiles
     * const userProfile = await prisma.userProfile.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserProfiles and only return the `id`
     * const userProfileWithIdOnly = await prisma.userProfile.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserProfileCreateManyAndReturnArgs>(args?: SelectSubset<T, UserProfileCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UserProfile.
     * @param {UserProfileDeleteArgs} args - Arguments to delete one UserProfile.
     * @example
     * // Delete one UserProfile
     * const UserProfile = await prisma.userProfile.delete({
     *   where: {
     *     // ... filter to delete one UserProfile
     *   }
     * })
     * 
     */
    delete<T extends UserProfileDeleteArgs>(args: SelectSubset<T, UserProfileDeleteArgs<ExtArgs>>): Prisma__UserProfileClient<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserProfile.
     * @param {UserProfileUpdateArgs} args - Arguments to update one UserProfile.
     * @example
     * // Update one UserProfile
     * const userProfile = await prisma.userProfile.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserProfileUpdateArgs>(args: SelectSubset<T, UserProfileUpdateArgs<ExtArgs>>): Prisma__UserProfileClient<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserProfiles.
     * @param {UserProfileDeleteManyArgs} args - Arguments to filter UserProfiles to delete.
     * @example
     * // Delete a few UserProfiles
     * const { count } = await prisma.userProfile.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserProfileDeleteManyArgs>(args?: SelectSubset<T, UserProfileDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserProfiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserProfileUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserProfiles
     * const userProfile = await prisma.userProfile.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserProfileUpdateManyArgs>(args: SelectSubset<T, UserProfileUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserProfiles and returns the data updated in the database.
     * @param {UserProfileUpdateManyAndReturnArgs} args - Arguments to update many UserProfiles.
     * @example
     * // Update many UserProfiles
     * const userProfile = await prisma.userProfile.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UserProfiles and only return the `id`
     * const userProfileWithIdOnly = await prisma.userProfile.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserProfileUpdateManyAndReturnArgs>(args: SelectSubset<T, UserProfileUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UserProfile.
     * @param {UserProfileUpsertArgs} args - Arguments to update or create a UserProfile.
     * @example
     * // Update or create a UserProfile
     * const userProfile = await prisma.userProfile.upsert({
     *   create: {
     *     // ... data to create a UserProfile
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserProfile we want to update
     *   }
     * })
     */
    upsert<T extends UserProfileUpsertArgs>(args: SelectSubset<T, UserProfileUpsertArgs<ExtArgs>>): Prisma__UserProfileClient<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserProfiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserProfileCountArgs} args - Arguments to filter UserProfiles to count.
     * @example
     * // Count the number of UserProfiles
     * const count = await prisma.userProfile.count({
     *   where: {
     *     // ... the filter for the UserProfiles we want to count
     *   }
     * })
    **/
    count<T extends UserProfileCountArgs>(
      args?: Subset<T, UserProfileCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserProfileCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserProfile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserProfileAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserProfileAggregateArgs>(args: Subset<T, UserProfileAggregateArgs>): Prisma.PrismaPromise<GetUserProfileAggregateType<T>>

    /**
     * Group by UserProfile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserProfileGroupByArgs} args - Group by arguments.
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
      T extends UserProfileGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserProfileGroupByArgs['orderBy'] }
        : { orderBy?: UserProfileGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserProfileGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserProfileGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserProfile model
   */
  readonly fields: UserProfileFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserProfile.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserProfileClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the UserProfile model
   */
  interface UserProfileFieldRefs {
    readonly id: FieldRef<"UserProfile", 'String'>
    readonly userId: FieldRef<"UserProfile", 'String'>
    readonly university: FieldRef<"UserProfile", 'String'>
    readonly faculty: FieldRef<"UserProfile", 'String'>
    readonly major: FieldRef<"UserProfile", 'String'>
    readonly graduationYear: FieldRef<"UserProfile", 'Int'>
    readonly personalityType: FieldRef<"UserProfile", 'PersonalityType'>
    readonly temperament: FieldRef<"UserProfile", 'Temperament'>
    readonly opennessLevel: FieldRef<"UserProfile", 'Int'>
    readonly religiousViews: FieldRef<"UserProfile", 'String'>
    readonly politicalViews: FieldRef<"UserProfile", 'String'>
    readonly tidinessLevel: FieldRef<"UserProfile", 'Int'>
    readonly alcoholAttitude: FieldRef<"UserProfile", 'Attitude'>
    readonly smokingAttitude: FieldRef<"UserProfile", 'Attitude'>
    readonly accommodationType: FieldRef<"UserProfile", 'AccommodationType'>
    readonly primaryGoal: FieldRef<"UserProfile", 'String'>
    readonly roommateExpectations: FieldRef<"UserProfile", 'String'>
    readonly hobbies: FieldRef<"UserProfile", 'String[]'>
    readonly favoriteMusic: FieldRef<"UserProfile", 'String'>
    readonly favoriteMovies: FieldRef<"UserProfile", 'String'>
    readonly readingPreferences: FieldRef<"UserProfile", 'String'>
    readonly boardGames: FieldRef<"UserProfile", 'Boolean'>
    readonly travelInterest: FieldRef<"UserProfile", 'Boolean'>
    readonly artInterest: FieldRef<"UserProfile", 'Boolean'>
    readonly physicalActivity: FieldRef<"UserProfile", 'Int'>
    readonly favoriteSports: FieldRef<"UserProfile", 'String'>
    readonly gymRegularly: FieldRef<"UserProfile", 'Boolean'>
    readonly isEarlyBird: FieldRef<"UserProfile", 'Boolean'>
    readonly scheduleType: FieldRef<"UserProfile", 'String'>
    readonly staysHomeOften: FieldRef<"UserProfile", 'Boolean'>
    readonly hasPets: FieldRef<"UserProfile", 'Boolean'>
    readonly petAttitude: FieldRef<"UserProfile", 'String'>
    readonly cooksAtHome: FieldRef<"UserProfile", 'Boolean'>
    readonly sharesDuties: FieldRef<"UserProfile", 'Boolean'>
    readonly usesHomeAppliances: FieldRef<"UserProfile", 'Boolean'>
    readonly createdAt: FieldRef<"UserProfile", 'DateTime'>
    readonly updatedAt: FieldRef<"UserProfile", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * UserProfile findUnique
   */
  export type UserProfileFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfile
     */
    omit?: UserProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProfileInclude<ExtArgs> | null
    /**
     * Filter, which UserProfile to fetch.
     */
    where: UserProfileWhereUniqueInput
  }

  /**
   * UserProfile findUniqueOrThrow
   */
  export type UserProfileFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfile
     */
    omit?: UserProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProfileInclude<ExtArgs> | null
    /**
     * Filter, which UserProfile to fetch.
     */
    where: UserProfileWhereUniqueInput
  }

  /**
   * UserProfile findFirst
   */
  export type UserProfileFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfile
     */
    omit?: UserProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProfileInclude<ExtArgs> | null
    /**
     * Filter, which UserProfile to fetch.
     */
    where?: UserProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserProfiles to fetch.
     */
    orderBy?: UserProfileOrderByWithRelationInput | UserProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserProfiles.
     */
    cursor?: UserProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserProfiles.
     */
    distinct?: UserProfileScalarFieldEnum | UserProfileScalarFieldEnum[]
  }

  /**
   * UserProfile findFirstOrThrow
   */
  export type UserProfileFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfile
     */
    omit?: UserProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProfileInclude<ExtArgs> | null
    /**
     * Filter, which UserProfile to fetch.
     */
    where?: UserProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserProfiles to fetch.
     */
    orderBy?: UserProfileOrderByWithRelationInput | UserProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserProfiles.
     */
    cursor?: UserProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserProfiles.
     */
    distinct?: UserProfileScalarFieldEnum | UserProfileScalarFieldEnum[]
  }

  /**
   * UserProfile findMany
   */
  export type UserProfileFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfile
     */
    omit?: UserProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProfileInclude<ExtArgs> | null
    /**
     * Filter, which UserProfiles to fetch.
     */
    where?: UserProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserProfiles to fetch.
     */
    orderBy?: UserProfileOrderByWithRelationInput | UserProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserProfiles.
     */
    cursor?: UserProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserProfiles.
     */
    skip?: number
    distinct?: UserProfileScalarFieldEnum | UserProfileScalarFieldEnum[]
  }

  /**
   * UserProfile create
   */
  export type UserProfileCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfile
     */
    omit?: UserProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProfileInclude<ExtArgs> | null
    /**
     * The data needed to create a UserProfile.
     */
    data: XOR<UserProfileCreateInput, UserProfileUncheckedCreateInput>
  }

  /**
   * UserProfile createMany
   */
  export type UserProfileCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserProfiles.
     */
    data: UserProfileCreateManyInput | UserProfileCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserProfile createManyAndReturn
   */
  export type UserProfileCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfile
     */
    omit?: UserProfileOmit<ExtArgs> | null
    /**
     * The data used to create many UserProfiles.
     */
    data: UserProfileCreateManyInput | UserProfileCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProfileIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserProfile update
   */
  export type UserProfileUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfile
     */
    omit?: UserProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProfileInclude<ExtArgs> | null
    /**
     * The data needed to update a UserProfile.
     */
    data: XOR<UserProfileUpdateInput, UserProfileUncheckedUpdateInput>
    /**
     * Choose, which UserProfile to update.
     */
    where: UserProfileWhereUniqueInput
  }

  /**
   * UserProfile updateMany
   */
  export type UserProfileUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserProfiles.
     */
    data: XOR<UserProfileUpdateManyMutationInput, UserProfileUncheckedUpdateManyInput>
    /**
     * Filter which UserProfiles to update
     */
    where?: UserProfileWhereInput
    /**
     * Limit how many UserProfiles to update.
     */
    limit?: number
  }

  /**
   * UserProfile updateManyAndReturn
   */
  export type UserProfileUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfile
     */
    omit?: UserProfileOmit<ExtArgs> | null
    /**
     * The data used to update UserProfiles.
     */
    data: XOR<UserProfileUpdateManyMutationInput, UserProfileUncheckedUpdateManyInput>
    /**
     * Filter which UserProfiles to update
     */
    where?: UserProfileWhereInput
    /**
     * Limit how many UserProfiles to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProfileIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserProfile upsert
   */
  export type UserProfileUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfile
     */
    omit?: UserProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProfileInclude<ExtArgs> | null
    /**
     * The filter to search for the UserProfile to update in case it exists.
     */
    where: UserProfileWhereUniqueInput
    /**
     * In case the UserProfile found by the `where` argument doesn't exist, create a new UserProfile with this data.
     */
    create: XOR<UserProfileCreateInput, UserProfileUncheckedCreateInput>
    /**
     * In case the UserProfile was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserProfileUpdateInput, UserProfileUncheckedUpdateInput>
  }

  /**
   * UserProfile delete
   */
  export type UserProfileDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfile
     */
    omit?: UserProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProfileInclude<ExtArgs> | null
    /**
     * Filter which UserProfile to delete.
     */
    where: UserProfileWhereUniqueInput
  }

  /**
   * UserProfile deleteMany
   */
  export type UserProfileDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserProfiles to delete
     */
    where?: UserProfileWhereInput
    /**
     * Limit how many UserProfiles to delete.
     */
    limit?: number
  }

  /**
   * UserProfile without action
   */
  export type UserProfileDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfile
     */
    omit?: UserProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProfileInclude<ExtArgs> | null
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


  export const UserScalarFieldEnum: {
    id: 'id',
    fullName: 'fullName',
    email: 'email',
    password: 'password',
    role: 'role',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const UserProfileScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    university: 'university',
    faculty: 'faculty',
    major: 'major',
    graduationYear: 'graduationYear',
    personalityType: 'personalityType',
    temperament: 'temperament',
    opennessLevel: 'opennessLevel',
    religiousViews: 'religiousViews',
    politicalViews: 'politicalViews',
    tidinessLevel: 'tidinessLevel',
    alcoholAttitude: 'alcoholAttitude',
    smokingAttitude: 'smokingAttitude',
    accommodationType: 'accommodationType',
    primaryGoal: 'primaryGoal',
    roommateExpectations: 'roommateExpectations',
    hobbies: 'hobbies',
    favoriteMusic: 'favoriteMusic',
    favoriteMovies: 'favoriteMovies',
    readingPreferences: 'readingPreferences',
    boardGames: 'boardGames',
    travelInterest: 'travelInterest',
    artInterest: 'artInterest',
    physicalActivity: 'physicalActivity',
    favoriteSports: 'favoriteSports',
    gymRegularly: 'gymRegularly',
    isEarlyBird: 'isEarlyBird',
    scheduleType: 'scheduleType',
    staysHomeOften: 'staysHomeOften',
    hasPets: 'hasPets',
    petAttitude: 'petAttitude',
    cooksAtHome: 'cooksAtHome',
    sharesDuties: 'sharesDuties',
    usesHomeAppliances: 'usesHomeAppliances',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserProfileScalarFieldEnum = (typeof UserProfileScalarFieldEnum)[keyof typeof UserProfileScalarFieldEnum]


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
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'PersonalityType'
   */
  export type EnumPersonalityTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PersonalityType'>
    


  /**
   * Reference to a field of type 'PersonalityType[]'
   */
  export type ListEnumPersonalityTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PersonalityType[]'>
    


  /**
   * Reference to a field of type 'Temperament'
   */
  export type EnumTemperamentFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Temperament'>
    


  /**
   * Reference to a field of type 'Temperament[]'
   */
  export type ListEnumTemperamentFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Temperament[]'>
    


  /**
   * Reference to a field of type 'Attitude'
   */
  export type EnumAttitudeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Attitude'>
    


  /**
   * Reference to a field of type 'Attitude[]'
   */
  export type ListEnumAttitudeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Attitude[]'>
    


  /**
   * Reference to a field of type 'AccommodationType'
   */
  export type EnumAccommodationTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AccommodationType'>
    


  /**
   * Reference to a field of type 'AccommodationType[]'
   */
  export type ListEnumAccommodationTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AccommodationType[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


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


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    fullName?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    UserProfile?: UserProfileListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    fullName?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    UserProfile?: UserProfileOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    fullName?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    UserProfile?: UserProfileListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    fullName?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    fullName?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    role?: EnumRoleWithAggregatesFilter<"User"> | $Enums.Role
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type UserProfileWhereInput = {
    AND?: UserProfileWhereInput | UserProfileWhereInput[]
    OR?: UserProfileWhereInput[]
    NOT?: UserProfileWhereInput | UserProfileWhereInput[]
    id?: StringFilter<"UserProfile"> | string
    userId?: StringFilter<"UserProfile"> | string
    university?: StringNullableFilter<"UserProfile"> | string | null
    faculty?: StringNullableFilter<"UserProfile"> | string | null
    major?: StringNullableFilter<"UserProfile"> | string | null
    graduationYear?: IntNullableFilter<"UserProfile"> | number | null
    personalityType?: EnumPersonalityTypeNullableFilter<"UserProfile"> | $Enums.PersonalityType | null
    temperament?: EnumTemperamentNullableFilter<"UserProfile"> | $Enums.Temperament | null
    opennessLevel?: IntNullableFilter<"UserProfile"> | number | null
    religiousViews?: StringNullableFilter<"UserProfile"> | string | null
    politicalViews?: StringNullableFilter<"UserProfile"> | string | null
    tidinessLevel?: IntNullableFilter<"UserProfile"> | number | null
    alcoholAttitude?: EnumAttitudeNullableFilter<"UserProfile"> | $Enums.Attitude | null
    smokingAttitude?: EnumAttitudeNullableFilter<"UserProfile"> | $Enums.Attitude | null
    accommodationType?: EnumAccommodationTypeNullableFilter<"UserProfile"> | $Enums.AccommodationType | null
    primaryGoal?: StringNullableFilter<"UserProfile"> | string | null
    roommateExpectations?: StringNullableFilter<"UserProfile"> | string | null
    hobbies?: StringNullableListFilter<"UserProfile">
    favoriteMusic?: StringNullableFilter<"UserProfile"> | string | null
    favoriteMovies?: StringNullableFilter<"UserProfile"> | string | null
    readingPreferences?: StringNullableFilter<"UserProfile"> | string | null
    boardGames?: BoolNullableFilter<"UserProfile"> | boolean | null
    travelInterest?: BoolNullableFilter<"UserProfile"> | boolean | null
    artInterest?: BoolNullableFilter<"UserProfile"> | boolean | null
    physicalActivity?: IntNullableFilter<"UserProfile"> | number | null
    favoriteSports?: StringNullableFilter<"UserProfile"> | string | null
    gymRegularly?: BoolNullableFilter<"UserProfile"> | boolean | null
    isEarlyBird?: BoolNullableFilter<"UserProfile"> | boolean | null
    scheduleType?: StringNullableFilter<"UserProfile"> | string | null
    staysHomeOften?: BoolNullableFilter<"UserProfile"> | boolean | null
    hasPets?: BoolNullableFilter<"UserProfile"> | boolean | null
    petAttitude?: StringNullableFilter<"UserProfile"> | string | null
    cooksAtHome?: BoolNullableFilter<"UserProfile"> | boolean | null
    sharesDuties?: BoolNullableFilter<"UserProfile"> | boolean | null
    usesHomeAppliances?: BoolNullableFilter<"UserProfile"> | boolean | null
    createdAt?: DateTimeFilter<"UserProfile"> | Date | string
    updatedAt?: DateTimeFilter<"UserProfile"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type UserProfileOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    university?: SortOrderInput | SortOrder
    faculty?: SortOrderInput | SortOrder
    major?: SortOrderInput | SortOrder
    graduationYear?: SortOrderInput | SortOrder
    personalityType?: SortOrderInput | SortOrder
    temperament?: SortOrderInput | SortOrder
    opennessLevel?: SortOrderInput | SortOrder
    religiousViews?: SortOrderInput | SortOrder
    politicalViews?: SortOrderInput | SortOrder
    tidinessLevel?: SortOrderInput | SortOrder
    alcoholAttitude?: SortOrderInput | SortOrder
    smokingAttitude?: SortOrderInput | SortOrder
    accommodationType?: SortOrderInput | SortOrder
    primaryGoal?: SortOrderInput | SortOrder
    roommateExpectations?: SortOrderInput | SortOrder
    hobbies?: SortOrder
    favoriteMusic?: SortOrderInput | SortOrder
    favoriteMovies?: SortOrderInput | SortOrder
    readingPreferences?: SortOrderInput | SortOrder
    boardGames?: SortOrderInput | SortOrder
    travelInterest?: SortOrderInput | SortOrder
    artInterest?: SortOrderInput | SortOrder
    physicalActivity?: SortOrderInput | SortOrder
    favoriteSports?: SortOrderInput | SortOrder
    gymRegularly?: SortOrderInput | SortOrder
    isEarlyBird?: SortOrderInput | SortOrder
    scheduleType?: SortOrderInput | SortOrder
    staysHomeOften?: SortOrderInput | SortOrder
    hasPets?: SortOrderInput | SortOrder
    petAttitude?: SortOrderInput | SortOrder
    cooksAtHome?: SortOrderInput | SortOrder
    sharesDuties?: SortOrderInput | SortOrder
    usesHomeAppliances?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type UserProfileWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId?: string
    AND?: UserProfileWhereInput | UserProfileWhereInput[]
    OR?: UserProfileWhereInput[]
    NOT?: UserProfileWhereInput | UserProfileWhereInput[]
    university?: StringNullableFilter<"UserProfile"> | string | null
    faculty?: StringNullableFilter<"UserProfile"> | string | null
    major?: StringNullableFilter<"UserProfile"> | string | null
    graduationYear?: IntNullableFilter<"UserProfile"> | number | null
    personalityType?: EnumPersonalityTypeNullableFilter<"UserProfile"> | $Enums.PersonalityType | null
    temperament?: EnumTemperamentNullableFilter<"UserProfile"> | $Enums.Temperament | null
    opennessLevel?: IntNullableFilter<"UserProfile"> | number | null
    religiousViews?: StringNullableFilter<"UserProfile"> | string | null
    politicalViews?: StringNullableFilter<"UserProfile"> | string | null
    tidinessLevel?: IntNullableFilter<"UserProfile"> | number | null
    alcoholAttitude?: EnumAttitudeNullableFilter<"UserProfile"> | $Enums.Attitude | null
    smokingAttitude?: EnumAttitudeNullableFilter<"UserProfile"> | $Enums.Attitude | null
    accommodationType?: EnumAccommodationTypeNullableFilter<"UserProfile"> | $Enums.AccommodationType | null
    primaryGoal?: StringNullableFilter<"UserProfile"> | string | null
    roommateExpectations?: StringNullableFilter<"UserProfile"> | string | null
    hobbies?: StringNullableListFilter<"UserProfile">
    favoriteMusic?: StringNullableFilter<"UserProfile"> | string | null
    favoriteMovies?: StringNullableFilter<"UserProfile"> | string | null
    readingPreferences?: StringNullableFilter<"UserProfile"> | string | null
    boardGames?: BoolNullableFilter<"UserProfile"> | boolean | null
    travelInterest?: BoolNullableFilter<"UserProfile"> | boolean | null
    artInterest?: BoolNullableFilter<"UserProfile"> | boolean | null
    physicalActivity?: IntNullableFilter<"UserProfile"> | number | null
    favoriteSports?: StringNullableFilter<"UserProfile"> | string | null
    gymRegularly?: BoolNullableFilter<"UserProfile"> | boolean | null
    isEarlyBird?: BoolNullableFilter<"UserProfile"> | boolean | null
    scheduleType?: StringNullableFilter<"UserProfile"> | string | null
    staysHomeOften?: BoolNullableFilter<"UserProfile"> | boolean | null
    hasPets?: BoolNullableFilter<"UserProfile"> | boolean | null
    petAttitude?: StringNullableFilter<"UserProfile"> | string | null
    cooksAtHome?: BoolNullableFilter<"UserProfile"> | boolean | null
    sharesDuties?: BoolNullableFilter<"UserProfile"> | boolean | null
    usesHomeAppliances?: BoolNullableFilter<"UserProfile"> | boolean | null
    createdAt?: DateTimeFilter<"UserProfile"> | Date | string
    updatedAt?: DateTimeFilter<"UserProfile"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "userId">

  export type UserProfileOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    university?: SortOrderInput | SortOrder
    faculty?: SortOrderInput | SortOrder
    major?: SortOrderInput | SortOrder
    graduationYear?: SortOrderInput | SortOrder
    personalityType?: SortOrderInput | SortOrder
    temperament?: SortOrderInput | SortOrder
    opennessLevel?: SortOrderInput | SortOrder
    religiousViews?: SortOrderInput | SortOrder
    politicalViews?: SortOrderInput | SortOrder
    tidinessLevel?: SortOrderInput | SortOrder
    alcoholAttitude?: SortOrderInput | SortOrder
    smokingAttitude?: SortOrderInput | SortOrder
    accommodationType?: SortOrderInput | SortOrder
    primaryGoal?: SortOrderInput | SortOrder
    roommateExpectations?: SortOrderInput | SortOrder
    hobbies?: SortOrder
    favoriteMusic?: SortOrderInput | SortOrder
    favoriteMovies?: SortOrderInput | SortOrder
    readingPreferences?: SortOrderInput | SortOrder
    boardGames?: SortOrderInput | SortOrder
    travelInterest?: SortOrderInput | SortOrder
    artInterest?: SortOrderInput | SortOrder
    physicalActivity?: SortOrderInput | SortOrder
    favoriteSports?: SortOrderInput | SortOrder
    gymRegularly?: SortOrderInput | SortOrder
    isEarlyBird?: SortOrderInput | SortOrder
    scheduleType?: SortOrderInput | SortOrder
    staysHomeOften?: SortOrderInput | SortOrder
    hasPets?: SortOrderInput | SortOrder
    petAttitude?: SortOrderInput | SortOrder
    cooksAtHome?: SortOrderInput | SortOrder
    sharesDuties?: SortOrderInput | SortOrder
    usesHomeAppliances?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserProfileCountOrderByAggregateInput
    _avg?: UserProfileAvgOrderByAggregateInput
    _max?: UserProfileMaxOrderByAggregateInput
    _min?: UserProfileMinOrderByAggregateInput
    _sum?: UserProfileSumOrderByAggregateInput
  }

  export type UserProfileScalarWhereWithAggregatesInput = {
    AND?: UserProfileScalarWhereWithAggregatesInput | UserProfileScalarWhereWithAggregatesInput[]
    OR?: UserProfileScalarWhereWithAggregatesInput[]
    NOT?: UserProfileScalarWhereWithAggregatesInput | UserProfileScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"UserProfile"> | string
    userId?: StringWithAggregatesFilter<"UserProfile"> | string
    university?: StringNullableWithAggregatesFilter<"UserProfile"> | string | null
    faculty?: StringNullableWithAggregatesFilter<"UserProfile"> | string | null
    major?: StringNullableWithAggregatesFilter<"UserProfile"> | string | null
    graduationYear?: IntNullableWithAggregatesFilter<"UserProfile"> | number | null
    personalityType?: EnumPersonalityTypeNullableWithAggregatesFilter<"UserProfile"> | $Enums.PersonalityType | null
    temperament?: EnumTemperamentNullableWithAggregatesFilter<"UserProfile"> | $Enums.Temperament | null
    opennessLevel?: IntNullableWithAggregatesFilter<"UserProfile"> | number | null
    religiousViews?: StringNullableWithAggregatesFilter<"UserProfile"> | string | null
    politicalViews?: StringNullableWithAggregatesFilter<"UserProfile"> | string | null
    tidinessLevel?: IntNullableWithAggregatesFilter<"UserProfile"> | number | null
    alcoholAttitude?: EnumAttitudeNullableWithAggregatesFilter<"UserProfile"> | $Enums.Attitude | null
    smokingAttitude?: EnumAttitudeNullableWithAggregatesFilter<"UserProfile"> | $Enums.Attitude | null
    accommodationType?: EnumAccommodationTypeNullableWithAggregatesFilter<"UserProfile"> | $Enums.AccommodationType | null
    primaryGoal?: StringNullableWithAggregatesFilter<"UserProfile"> | string | null
    roommateExpectations?: StringNullableWithAggregatesFilter<"UserProfile"> | string | null
    hobbies?: StringNullableListFilter<"UserProfile">
    favoriteMusic?: StringNullableWithAggregatesFilter<"UserProfile"> | string | null
    favoriteMovies?: StringNullableWithAggregatesFilter<"UserProfile"> | string | null
    readingPreferences?: StringNullableWithAggregatesFilter<"UserProfile"> | string | null
    boardGames?: BoolNullableWithAggregatesFilter<"UserProfile"> | boolean | null
    travelInterest?: BoolNullableWithAggregatesFilter<"UserProfile"> | boolean | null
    artInterest?: BoolNullableWithAggregatesFilter<"UserProfile"> | boolean | null
    physicalActivity?: IntNullableWithAggregatesFilter<"UserProfile"> | number | null
    favoriteSports?: StringNullableWithAggregatesFilter<"UserProfile"> | string | null
    gymRegularly?: BoolNullableWithAggregatesFilter<"UserProfile"> | boolean | null
    isEarlyBird?: BoolNullableWithAggregatesFilter<"UserProfile"> | boolean | null
    scheduleType?: StringNullableWithAggregatesFilter<"UserProfile"> | string | null
    staysHomeOften?: BoolNullableWithAggregatesFilter<"UserProfile"> | boolean | null
    hasPets?: BoolNullableWithAggregatesFilter<"UserProfile"> | boolean | null
    petAttitude?: StringNullableWithAggregatesFilter<"UserProfile"> | string | null
    cooksAtHome?: BoolNullableWithAggregatesFilter<"UserProfile"> | boolean | null
    sharesDuties?: BoolNullableWithAggregatesFilter<"UserProfile"> | boolean | null
    usesHomeAppliances?: BoolNullableWithAggregatesFilter<"UserProfile"> | boolean | null
    createdAt?: DateTimeWithAggregatesFilter<"UserProfile"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"UserProfile"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    fullName: string
    email: string
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    UserProfile?: UserProfileCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    fullName: string
    email: string
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    UserProfile?: UserProfileUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    UserProfile?: UserProfileUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    UserProfile?: UserProfileUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    fullName: string
    email: string
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserProfileCreateInput = {
    id?: string
    university?: string | null
    faculty?: string | null
    major?: string | null
    graduationYear?: number | null
    personalityType?: $Enums.PersonalityType | null
    temperament?: $Enums.Temperament | null
    opennessLevel?: number | null
    religiousViews?: string | null
    politicalViews?: string | null
    tidinessLevel?: number | null
    alcoholAttitude?: $Enums.Attitude | null
    smokingAttitude?: $Enums.Attitude | null
    accommodationType?: $Enums.AccommodationType | null
    primaryGoal?: string | null
    roommateExpectations?: string | null
    hobbies?: UserProfileCreatehobbiesInput | string[]
    favoriteMusic?: string | null
    favoriteMovies?: string | null
    readingPreferences?: string | null
    boardGames?: boolean | null
    travelInterest?: boolean | null
    artInterest?: boolean | null
    physicalActivity?: number | null
    favoriteSports?: string | null
    gymRegularly?: boolean | null
    isEarlyBird?: boolean | null
    scheduleType?: string | null
    staysHomeOften?: boolean | null
    hasPets?: boolean | null
    petAttitude?: string | null
    cooksAtHome?: boolean | null
    sharesDuties?: boolean | null
    usesHomeAppliances?: boolean | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutUserProfileInput
  }

  export type UserProfileUncheckedCreateInput = {
    id?: string
    userId: string
    university?: string | null
    faculty?: string | null
    major?: string | null
    graduationYear?: number | null
    personalityType?: $Enums.PersonalityType | null
    temperament?: $Enums.Temperament | null
    opennessLevel?: number | null
    religiousViews?: string | null
    politicalViews?: string | null
    tidinessLevel?: number | null
    alcoholAttitude?: $Enums.Attitude | null
    smokingAttitude?: $Enums.Attitude | null
    accommodationType?: $Enums.AccommodationType | null
    primaryGoal?: string | null
    roommateExpectations?: string | null
    hobbies?: UserProfileCreatehobbiesInput | string[]
    favoriteMusic?: string | null
    favoriteMovies?: string | null
    readingPreferences?: string | null
    boardGames?: boolean | null
    travelInterest?: boolean | null
    artInterest?: boolean | null
    physicalActivity?: number | null
    favoriteSports?: string | null
    gymRegularly?: boolean | null
    isEarlyBird?: boolean | null
    scheduleType?: string | null
    staysHomeOften?: boolean | null
    hasPets?: boolean | null
    petAttitude?: string | null
    cooksAtHome?: boolean | null
    sharesDuties?: boolean | null
    usesHomeAppliances?: boolean | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserProfileUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    university?: NullableStringFieldUpdateOperationsInput | string | null
    faculty?: NullableStringFieldUpdateOperationsInput | string | null
    major?: NullableStringFieldUpdateOperationsInput | string | null
    graduationYear?: NullableIntFieldUpdateOperationsInput | number | null
    personalityType?: NullableEnumPersonalityTypeFieldUpdateOperationsInput | $Enums.PersonalityType | null
    temperament?: NullableEnumTemperamentFieldUpdateOperationsInput | $Enums.Temperament | null
    opennessLevel?: NullableIntFieldUpdateOperationsInput | number | null
    religiousViews?: NullableStringFieldUpdateOperationsInput | string | null
    politicalViews?: NullableStringFieldUpdateOperationsInput | string | null
    tidinessLevel?: NullableIntFieldUpdateOperationsInput | number | null
    alcoholAttitude?: NullableEnumAttitudeFieldUpdateOperationsInput | $Enums.Attitude | null
    smokingAttitude?: NullableEnumAttitudeFieldUpdateOperationsInput | $Enums.Attitude | null
    accommodationType?: NullableEnumAccommodationTypeFieldUpdateOperationsInput | $Enums.AccommodationType | null
    primaryGoal?: NullableStringFieldUpdateOperationsInput | string | null
    roommateExpectations?: NullableStringFieldUpdateOperationsInput | string | null
    hobbies?: UserProfileUpdatehobbiesInput | string[]
    favoriteMusic?: NullableStringFieldUpdateOperationsInput | string | null
    favoriteMovies?: NullableStringFieldUpdateOperationsInput | string | null
    readingPreferences?: NullableStringFieldUpdateOperationsInput | string | null
    boardGames?: NullableBoolFieldUpdateOperationsInput | boolean | null
    travelInterest?: NullableBoolFieldUpdateOperationsInput | boolean | null
    artInterest?: NullableBoolFieldUpdateOperationsInput | boolean | null
    physicalActivity?: NullableIntFieldUpdateOperationsInput | number | null
    favoriteSports?: NullableStringFieldUpdateOperationsInput | string | null
    gymRegularly?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isEarlyBird?: NullableBoolFieldUpdateOperationsInput | boolean | null
    scheduleType?: NullableStringFieldUpdateOperationsInput | string | null
    staysHomeOften?: NullableBoolFieldUpdateOperationsInput | boolean | null
    hasPets?: NullableBoolFieldUpdateOperationsInput | boolean | null
    petAttitude?: NullableStringFieldUpdateOperationsInput | string | null
    cooksAtHome?: NullableBoolFieldUpdateOperationsInput | boolean | null
    sharesDuties?: NullableBoolFieldUpdateOperationsInput | boolean | null
    usesHomeAppliances?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutUserProfileNestedInput
  }

  export type UserProfileUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    university?: NullableStringFieldUpdateOperationsInput | string | null
    faculty?: NullableStringFieldUpdateOperationsInput | string | null
    major?: NullableStringFieldUpdateOperationsInput | string | null
    graduationYear?: NullableIntFieldUpdateOperationsInput | number | null
    personalityType?: NullableEnumPersonalityTypeFieldUpdateOperationsInput | $Enums.PersonalityType | null
    temperament?: NullableEnumTemperamentFieldUpdateOperationsInput | $Enums.Temperament | null
    opennessLevel?: NullableIntFieldUpdateOperationsInput | number | null
    religiousViews?: NullableStringFieldUpdateOperationsInput | string | null
    politicalViews?: NullableStringFieldUpdateOperationsInput | string | null
    tidinessLevel?: NullableIntFieldUpdateOperationsInput | number | null
    alcoholAttitude?: NullableEnumAttitudeFieldUpdateOperationsInput | $Enums.Attitude | null
    smokingAttitude?: NullableEnumAttitudeFieldUpdateOperationsInput | $Enums.Attitude | null
    accommodationType?: NullableEnumAccommodationTypeFieldUpdateOperationsInput | $Enums.AccommodationType | null
    primaryGoal?: NullableStringFieldUpdateOperationsInput | string | null
    roommateExpectations?: NullableStringFieldUpdateOperationsInput | string | null
    hobbies?: UserProfileUpdatehobbiesInput | string[]
    favoriteMusic?: NullableStringFieldUpdateOperationsInput | string | null
    favoriteMovies?: NullableStringFieldUpdateOperationsInput | string | null
    readingPreferences?: NullableStringFieldUpdateOperationsInput | string | null
    boardGames?: NullableBoolFieldUpdateOperationsInput | boolean | null
    travelInterest?: NullableBoolFieldUpdateOperationsInput | boolean | null
    artInterest?: NullableBoolFieldUpdateOperationsInput | boolean | null
    physicalActivity?: NullableIntFieldUpdateOperationsInput | number | null
    favoriteSports?: NullableStringFieldUpdateOperationsInput | string | null
    gymRegularly?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isEarlyBird?: NullableBoolFieldUpdateOperationsInput | boolean | null
    scheduleType?: NullableStringFieldUpdateOperationsInput | string | null
    staysHomeOften?: NullableBoolFieldUpdateOperationsInput | boolean | null
    hasPets?: NullableBoolFieldUpdateOperationsInput | boolean | null
    petAttitude?: NullableStringFieldUpdateOperationsInput | string | null
    cooksAtHome?: NullableBoolFieldUpdateOperationsInput | boolean | null
    sharesDuties?: NullableBoolFieldUpdateOperationsInput | boolean | null
    usesHomeAppliances?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserProfileCreateManyInput = {
    id?: string
    userId: string
    university?: string | null
    faculty?: string | null
    major?: string | null
    graduationYear?: number | null
    personalityType?: $Enums.PersonalityType | null
    temperament?: $Enums.Temperament | null
    opennessLevel?: number | null
    religiousViews?: string | null
    politicalViews?: string | null
    tidinessLevel?: number | null
    alcoholAttitude?: $Enums.Attitude | null
    smokingAttitude?: $Enums.Attitude | null
    accommodationType?: $Enums.AccommodationType | null
    primaryGoal?: string | null
    roommateExpectations?: string | null
    hobbies?: UserProfileCreatehobbiesInput | string[]
    favoriteMusic?: string | null
    favoriteMovies?: string | null
    readingPreferences?: string | null
    boardGames?: boolean | null
    travelInterest?: boolean | null
    artInterest?: boolean | null
    physicalActivity?: number | null
    favoriteSports?: string | null
    gymRegularly?: boolean | null
    isEarlyBird?: boolean | null
    scheduleType?: string | null
    staysHomeOften?: boolean | null
    hasPets?: boolean | null
    petAttitude?: string | null
    cooksAtHome?: boolean | null
    sharesDuties?: boolean | null
    usesHomeAppliances?: boolean | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserProfileUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    university?: NullableStringFieldUpdateOperationsInput | string | null
    faculty?: NullableStringFieldUpdateOperationsInput | string | null
    major?: NullableStringFieldUpdateOperationsInput | string | null
    graduationYear?: NullableIntFieldUpdateOperationsInput | number | null
    personalityType?: NullableEnumPersonalityTypeFieldUpdateOperationsInput | $Enums.PersonalityType | null
    temperament?: NullableEnumTemperamentFieldUpdateOperationsInput | $Enums.Temperament | null
    opennessLevel?: NullableIntFieldUpdateOperationsInput | number | null
    religiousViews?: NullableStringFieldUpdateOperationsInput | string | null
    politicalViews?: NullableStringFieldUpdateOperationsInput | string | null
    tidinessLevel?: NullableIntFieldUpdateOperationsInput | number | null
    alcoholAttitude?: NullableEnumAttitudeFieldUpdateOperationsInput | $Enums.Attitude | null
    smokingAttitude?: NullableEnumAttitudeFieldUpdateOperationsInput | $Enums.Attitude | null
    accommodationType?: NullableEnumAccommodationTypeFieldUpdateOperationsInput | $Enums.AccommodationType | null
    primaryGoal?: NullableStringFieldUpdateOperationsInput | string | null
    roommateExpectations?: NullableStringFieldUpdateOperationsInput | string | null
    hobbies?: UserProfileUpdatehobbiesInput | string[]
    favoriteMusic?: NullableStringFieldUpdateOperationsInput | string | null
    favoriteMovies?: NullableStringFieldUpdateOperationsInput | string | null
    readingPreferences?: NullableStringFieldUpdateOperationsInput | string | null
    boardGames?: NullableBoolFieldUpdateOperationsInput | boolean | null
    travelInterest?: NullableBoolFieldUpdateOperationsInput | boolean | null
    artInterest?: NullableBoolFieldUpdateOperationsInput | boolean | null
    physicalActivity?: NullableIntFieldUpdateOperationsInput | number | null
    favoriteSports?: NullableStringFieldUpdateOperationsInput | string | null
    gymRegularly?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isEarlyBird?: NullableBoolFieldUpdateOperationsInput | boolean | null
    scheduleType?: NullableStringFieldUpdateOperationsInput | string | null
    staysHomeOften?: NullableBoolFieldUpdateOperationsInput | boolean | null
    hasPets?: NullableBoolFieldUpdateOperationsInput | boolean | null
    petAttitude?: NullableStringFieldUpdateOperationsInput | string | null
    cooksAtHome?: NullableBoolFieldUpdateOperationsInput | boolean | null
    sharesDuties?: NullableBoolFieldUpdateOperationsInput | boolean | null
    usesHomeAppliances?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserProfileUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    university?: NullableStringFieldUpdateOperationsInput | string | null
    faculty?: NullableStringFieldUpdateOperationsInput | string | null
    major?: NullableStringFieldUpdateOperationsInput | string | null
    graduationYear?: NullableIntFieldUpdateOperationsInput | number | null
    personalityType?: NullableEnumPersonalityTypeFieldUpdateOperationsInput | $Enums.PersonalityType | null
    temperament?: NullableEnumTemperamentFieldUpdateOperationsInput | $Enums.Temperament | null
    opennessLevel?: NullableIntFieldUpdateOperationsInput | number | null
    religiousViews?: NullableStringFieldUpdateOperationsInput | string | null
    politicalViews?: NullableStringFieldUpdateOperationsInput | string | null
    tidinessLevel?: NullableIntFieldUpdateOperationsInput | number | null
    alcoholAttitude?: NullableEnumAttitudeFieldUpdateOperationsInput | $Enums.Attitude | null
    smokingAttitude?: NullableEnumAttitudeFieldUpdateOperationsInput | $Enums.Attitude | null
    accommodationType?: NullableEnumAccommodationTypeFieldUpdateOperationsInput | $Enums.AccommodationType | null
    primaryGoal?: NullableStringFieldUpdateOperationsInput | string | null
    roommateExpectations?: NullableStringFieldUpdateOperationsInput | string | null
    hobbies?: UserProfileUpdatehobbiesInput | string[]
    favoriteMusic?: NullableStringFieldUpdateOperationsInput | string | null
    favoriteMovies?: NullableStringFieldUpdateOperationsInput | string | null
    readingPreferences?: NullableStringFieldUpdateOperationsInput | string | null
    boardGames?: NullableBoolFieldUpdateOperationsInput | boolean | null
    travelInterest?: NullableBoolFieldUpdateOperationsInput | boolean | null
    artInterest?: NullableBoolFieldUpdateOperationsInput | boolean | null
    physicalActivity?: NullableIntFieldUpdateOperationsInput | number | null
    favoriteSports?: NullableStringFieldUpdateOperationsInput | string | null
    gymRegularly?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isEarlyBird?: NullableBoolFieldUpdateOperationsInput | boolean | null
    scheduleType?: NullableStringFieldUpdateOperationsInput | string | null
    staysHomeOften?: NullableBoolFieldUpdateOperationsInput | boolean | null
    hasPets?: NullableBoolFieldUpdateOperationsInput | boolean | null
    petAttitude?: NullableStringFieldUpdateOperationsInput | string | null
    cooksAtHome?: NullableBoolFieldUpdateOperationsInput | boolean | null
    sharesDuties?: NullableBoolFieldUpdateOperationsInput | boolean | null
    usesHomeAppliances?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
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

  export type UserProfileListRelationFilter = {
    every?: UserProfileWhereInput
    some?: UserProfileWhereInput
    none?: UserProfileWhereInput
  }

  export type UserProfileOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    fullName?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    fullName?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    fullName?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
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

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
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

  export type EnumPersonalityTypeNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.PersonalityType | EnumPersonalityTypeFieldRefInput<$PrismaModel> | null
    in?: $Enums.PersonalityType[] | ListEnumPersonalityTypeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.PersonalityType[] | ListEnumPersonalityTypeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumPersonalityTypeNullableFilter<$PrismaModel> | $Enums.PersonalityType | null
  }

  export type EnumTemperamentNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.Temperament | EnumTemperamentFieldRefInput<$PrismaModel> | null
    in?: $Enums.Temperament[] | ListEnumTemperamentFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Temperament[] | ListEnumTemperamentFieldRefInput<$PrismaModel> | null
    not?: NestedEnumTemperamentNullableFilter<$PrismaModel> | $Enums.Temperament | null
  }

  export type EnumAttitudeNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.Attitude | EnumAttitudeFieldRefInput<$PrismaModel> | null
    in?: $Enums.Attitude[] | ListEnumAttitudeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Attitude[] | ListEnumAttitudeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumAttitudeNullableFilter<$PrismaModel> | $Enums.Attitude | null
  }

  export type EnumAccommodationTypeNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.AccommodationType | EnumAccommodationTypeFieldRefInput<$PrismaModel> | null
    in?: $Enums.AccommodationType[] | ListEnumAccommodationTypeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.AccommodationType[] | ListEnumAccommodationTypeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumAccommodationTypeNullableFilter<$PrismaModel> | $Enums.AccommodationType | null
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type BoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type UserProfileCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    university?: SortOrder
    faculty?: SortOrder
    major?: SortOrder
    graduationYear?: SortOrder
    personalityType?: SortOrder
    temperament?: SortOrder
    opennessLevel?: SortOrder
    religiousViews?: SortOrder
    politicalViews?: SortOrder
    tidinessLevel?: SortOrder
    alcoholAttitude?: SortOrder
    smokingAttitude?: SortOrder
    accommodationType?: SortOrder
    primaryGoal?: SortOrder
    roommateExpectations?: SortOrder
    hobbies?: SortOrder
    favoriteMusic?: SortOrder
    favoriteMovies?: SortOrder
    readingPreferences?: SortOrder
    boardGames?: SortOrder
    travelInterest?: SortOrder
    artInterest?: SortOrder
    physicalActivity?: SortOrder
    favoriteSports?: SortOrder
    gymRegularly?: SortOrder
    isEarlyBird?: SortOrder
    scheduleType?: SortOrder
    staysHomeOften?: SortOrder
    hasPets?: SortOrder
    petAttitude?: SortOrder
    cooksAtHome?: SortOrder
    sharesDuties?: SortOrder
    usesHomeAppliances?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserProfileAvgOrderByAggregateInput = {
    graduationYear?: SortOrder
    opennessLevel?: SortOrder
    tidinessLevel?: SortOrder
    physicalActivity?: SortOrder
  }

  export type UserProfileMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    university?: SortOrder
    faculty?: SortOrder
    major?: SortOrder
    graduationYear?: SortOrder
    personalityType?: SortOrder
    temperament?: SortOrder
    opennessLevel?: SortOrder
    religiousViews?: SortOrder
    politicalViews?: SortOrder
    tidinessLevel?: SortOrder
    alcoholAttitude?: SortOrder
    smokingAttitude?: SortOrder
    accommodationType?: SortOrder
    primaryGoal?: SortOrder
    roommateExpectations?: SortOrder
    favoriteMusic?: SortOrder
    favoriteMovies?: SortOrder
    readingPreferences?: SortOrder
    boardGames?: SortOrder
    travelInterest?: SortOrder
    artInterest?: SortOrder
    physicalActivity?: SortOrder
    favoriteSports?: SortOrder
    gymRegularly?: SortOrder
    isEarlyBird?: SortOrder
    scheduleType?: SortOrder
    staysHomeOften?: SortOrder
    hasPets?: SortOrder
    petAttitude?: SortOrder
    cooksAtHome?: SortOrder
    sharesDuties?: SortOrder
    usesHomeAppliances?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserProfileMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    university?: SortOrder
    faculty?: SortOrder
    major?: SortOrder
    graduationYear?: SortOrder
    personalityType?: SortOrder
    temperament?: SortOrder
    opennessLevel?: SortOrder
    religiousViews?: SortOrder
    politicalViews?: SortOrder
    tidinessLevel?: SortOrder
    alcoholAttitude?: SortOrder
    smokingAttitude?: SortOrder
    accommodationType?: SortOrder
    primaryGoal?: SortOrder
    roommateExpectations?: SortOrder
    favoriteMusic?: SortOrder
    favoriteMovies?: SortOrder
    readingPreferences?: SortOrder
    boardGames?: SortOrder
    travelInterest?: SortOrder
    artInterest?: SortOrder
    physicalActivity?: SortOrder
    favoriteSports?: SortOrder
    gymRegularly?: SortOrder
    isEarlyBird?: SortOrder
    scheduleType?: SortOrder
    staysHomeOften?: SortOrder
    hasPets?: SortOrder
    petAttitude?: SortOrder
    cooksAtHome?: SortOrder
    sharesDuties?: SortOrder
    usesHomeAppliances?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserProfileSumOrderByAggregateInput = {
    graduationYear?: SortOrder
    opennessLevel?: SortOrder
    tidinessLevel?: SortOrder
    physicalActivity?: SortOrder
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

  export type EnumPersonalityTypeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PersonalityType | EnumPersonalityTypeFieldRefInput<$PrismaModel> | null
    in?: $Enums.PersonalityType[] | ListEnumPersonalityTypeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.PersonalityType[] | ListEnumPersonalityTypeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumPersonalityTypeNullableWithAggregatesFilter<$PrismaModel> | $Enums.PersonalityType | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumPersonalityTypeNullableFilter<$PrismaModel>
    _max?: NestedEnumPersonalityTypeNullableFilter<$PrismaModel>
  }

  export type EnumTemperamentNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Temperament | EnumTemperamentFieldRefInput<$PrismaModel> | null
    in?: $Enums.Temperament[] | ListEnumTemperamentFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Temperament[] | ListEnumTemperamentFieldRefInput<$PrismaModel> | null
    not?: NestedEnumTemperamentNullableWithAggregatesFilter<$PrismaModel> | $Enums.Temperament | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumTemperamentNullableFilter<$PrismaModel>
    _max?: NestedEnumTemperamentNullableFilter<$PrismaModel>
  }

  export type EnumAttitudeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Attitude | EnumAttitudeFieldRefInput<$PrismaModel> | null
    in?: $Enums.Attitude[] | ListEnumAttitudeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Attitude[] | ListEnumAttitudeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumAttitudeNullableWithAggregatesFilter<$PrismaModel> | $Enums.Attitude | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumAttitudeNullableFilter<$PrismaModel>
    _max?: NestedEnumAttitudeNullableFilter<$PrismaModel>
  }

  export type EnumAccommodationTypeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AccommodationType | EnumAccommodationTypeFieldRefInput<$PrismaModel> | null
    in?: $Enums.AccommodationType[] | ListEnumAccommodationTypeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.AccommodationType[] | ListEnumAccommodationTypeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumAccommodationTypeNullableWithAggregatesFilter<$PrismaModel> | $Enums.AccommodationType | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumAccommodationTypeNullableFilter<$PrismaModel>
    _max?: NestedEnumAccommodationTypeNullableFilter<$PrismaModel>
  }

  export type BoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type UserProfileCreateNestedManyWithoutUserInput = {
    create?: XOR<UserProfileCreateWithoutUserInput, UserProfileUncheckedCreateWithoutUserInput> | UserProfileCreateWithoutUserInput[] | UserProfileUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserProfileCreateOrConnectWithoutUserInput | UserProfileCreateOrConnectWithoutUserInput[]
    createMany?: UserProfileCreateManyUserInputEnvelope
    connect?: UserProfileWhereUniqueInput | UserProfileWhereUniqueInput[]
  }

  export type UserProfileUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<UserProfileCreateWithoutUserInput, UserProfileUncheckedCreateWithoutUserInput> | UserProfileCreateWithoutUserInput[] | UserProfileUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserProfileCreateOrConnectWithoutUserInput | UserProfileCreateOrConnectWithoutUserInput[]
    createMany?: UserProfileCreateManyUserInputEnvelope
    connect?: UserProfileWhereUniqueInput | UserProfileWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type UserProfileUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserProfileCreateWithoutUserInput, UserProfileUncheckedCreateWithoutUserInput> | UserProfileCreateWithoutUserInput[] | UserProfileUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserProfileCreateOrConnectWithoutUserInput | UserProfileCreateOrConnectWithoutUserInput[]
    upsert?: UserProfileUpsertWithWhereUniqueWithoutUserInput | UserProfileUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserProfileCreateManyUserInputEnvelope
    set?: UserProfileWhereUniqueInput | UserProfileWhereUniqueInput[]
    disconnect?: UserProfileWhereUniqueInput | UserProfileWhereUniqueInput[]
    delete?: UserProfileWhereUniqueInput | UserProfileWhereUniqueInput[]
    connect?: UserProfileWhereUniqueInput | UserProfileWhereUniqueInput[]
    update?: UserProfileUpdateWithWhereUniqueWithoutUserInput | UserProfileUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserProfileUpdateManyWithWhereWithoutUserInput | UserProfileUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserProfileScalarWhereInput | UserProfileScalarWhereInput[]
  }

  export type UserProfileUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserProfileCreateWithoutUserInput, UserProfileUncheckedCreateWithoutUserInput> | UserProfileCreateWithoutUserInput[] | UserProfileUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserProfileCreateOrConnectWithoutUserInput | UserProfileCreateOrConnectWithoutUserInput[]
    upsert?: UserProfileUpsertWithWhereUniqueWithoutUserInput | UserProfileUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserProfileCreateManyUserInputEnvelope
    set?: UserProfileWhereUniqueInput | UserProfileWhereUniqueInput[]
    disconnect?: UserProfileWhereUniqueInput | UserProfileWhereUniqueInput[]
    delete?: UserProfileWhereUniqueInput | UserProfileWhereUniqueInput[]
    connect?: UserProfileWhereUniqueInput | UserProfileWhereUniqueInput[]
    update?: UserProfileUpdateWithWhereUniqueWithoutUserInput | UserProfileUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserProfileUpdateManyWithWhereWithoutUserInput | UserProfileUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserProfileScalarWhereInput | UserProfileScalarWhereInput[]
  }

  export type UserProfileCreatehobbiesInput = {
    set: string[]
  }

  export type UserCreateNestedOneWithoutUserProfileInput = {
    create?: XOR<UserCreateWithoutUserProfileInput, UserUncheckedCreateWithoutUserProfileInput>
    connectOrCreate?: UserCreateOrConnectWithoutUserProfileInput
    connect?: UserWhereUniqueInput
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

  export type NullableEnumPersonalityTypeFieldUpdateOperationsInput = {
    set?: $Enums.PersonalityType | null
  }

  export type NullableEnumTemperamentFieldUpdateOperationsInput = {
    set?: $Enums.Temperament | null
  }

  export type NullableEnumAttitudeFieldUpdateOperationsInput = {
    set?: $Enums.Attitude | null
  }

  export type NullableEnumAccommodationTypeFieldUpdateOperationsInput = {
    set?: $Enums.AccommodationType | null
  }

  export type UserProfileUpdatehobbiesInput = {
    set?: string[]
    push?: string | string[]
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
  }

  export type UserUpdateOneRequiredWithoutUserProfileNestedInput = {
    create?: XOR<UserCreateWithoutUserProfileInput, UserUncheckedCreateWithoutUserProfileInput>
    connectOrCreate?: UserCreateOrConnectWithoutUserProfileInput
    upsert?: UserUpsertWithoutUserProfileInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutUserProfileInput, UserUpdateWithoutUserProfileInput>, UserUncheckedUpdateWithoutUserProfileInput>
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

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
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

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
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

  export type NestedEnumPersonalityTypeNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.PersonalityType | EnumPersonalityTypeFieldRefInput<$PrismaModel> | null
    in?: $Enums.PersonalityType[] | ListEnumPersonalityTypeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.PersonalityType[] | ListEnumPersonalityTypeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumPersonalityTypeNullableFilter<$PrismaModel> | $Enums.PersonalityType | null
  }

  export type NestedEnumTemperamentNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.Temperament | EnumTemperamentFieldRefInput<$PrismaModel> | null
    in?: $Enums.Temperament[] | ListEnumTemperamentFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Temperament[] | ListEnumTemperamentFieldRefInput<$PrismaModel> | null
    not?: NestedEnumTemperamentNullableFilter<$PrismaModel> | $Enums.Temperament | null
  }

  export type NestedEnumAttitudeNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.Attitude | EnumAttitudeFieldRefInput<$PrismaModel> | null
    in?: $Enums.Attitude[] | ListEnumAttitudeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Attitude[] | ListEnumAttitudeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumAttitudeNullableFilter<$PrismaModel> | $Enums.Attitude | null
  }

  export type NestedEnumAccommodationTypeNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.AccommodationType | EnumAccommodationTypeFieldRefInput<$PrismaModel> | null
    in?: $Enums.AccommodationType[] | ListEnumAccommodationTypeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.AccommodationType[] | ListEnumAccommodationTypeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumAccommodationTypeNullableFilter<$PrismaModel> | $Enums.AccommodationType | null
  }

  export type NestedBoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
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

  export type NestedEnumPersonalityTypeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PersonalityType | EnumPersonalityTypeFieldRefInput<$PrismaModel> | null
    in?: $Enums.PersonalityType[] | ListEnumPersonalityTypeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.PersonalityType[] | ListEnumPersonalityTypeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumPersonalityTypeNullableWithAggregatesFilter<$PrismaModel> | $Enums.PersonalityType | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumPersonalityTypeNullableFilter<$PrismaModel>
    _max?: NestedEnumPersonalityTypeNullableFilter<$PrismaModel>
  }

  export type NestedEnumTemperamentNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Temperament | EnumTemperamentFieldRefInput<$PrismaModel> | null
    in?: $Enums.Temperament[] | ListEnumTemperamentFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Temperament[] | ListEnumTemperamentFieldRefInput<$PrismaModel> | null
    not?: NestedEnumTemperamentNullableWithAggregatesFilter<$PrismaModel> | $Enums.Temperament | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumTemperamentNullableFilter<$PrismaModel>
    _max?: NestedEnumTemperamentNullableFilter<$PrismaModel>
  }

  export type NestedEnumAttitudeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Attitude | EnumAttitudeFieldRefInput<$PrismaModel> | null
    in?: $Enums.Attitude[] | ListEnumAttitudeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Attitude[] | ListEnumAttitudeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumAttitudeNullableWithAggregatesFilter<$PrismaModel> | $Enums.Attitude | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumAttitudeNullableFilter<$PrismaModel>
    _max?: NestedEnumAttitudeNullableFilter<$PrismaModel>
  }

  export type NestedEnumAccommodationTypeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AccommodationType | EnumAccommodationTypeFieldRefInput<$PrismaModel> | null
    in?: $Enums.AccommodationType[] | ListEnumAccommodationTypeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.AccommodationType[] | ListEnumAccommodationTypeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumAccommodationTypeNullableWithAggregatesFilter<$PrismaModel> | $Enums.AccommodationType | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumAccommodationTypeNullableFilter<$PrismaModel>
    _max?: NestedEnumAccommodationTypeNullableFilter<$PrismaModel>
  }

  export type NestedBoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type UserProfileCreateWithoutUserInput = {
    id?: string
    university?: string | null
    faculty?: string | null
    major?: string | null
    graduationYear?: number | null
    personalityType?: $Enums.PersonalityType | null
    temperament?: $Enums.Temperament | null
    opennessLevel?: number | null
    religiousViews?: string | null
    politicalViews?: string | null
    tidinessLevel?: number | null
    alcoholAttitude?: $Enums.Attitude | null
    smokingAttitude?: $Enums.Attitude | null
    accommodationType?: $Enums.AccommodationType | null
    primaryGoal?: string | null
    roommateExpectations?: string | null
    hobbies?: UserProfileCreatehobbiesInput | string[]
    favoriteMusic?: string | null
    favoriteMovies?: string | null
    readingPreferences?: string | null
    boardGames?: boolean | null
    travelInterest?: boolean | null
    artInterest?: boolean | null
    physicalActivity?: number | null
    favoriteSports?: string | null
    gymRegularly?: boolean | null
    isEarlyBird?: boolean | null
    scheduleType?: string | null
    staysHomeOften?: boolean | null
    hasPets?: boolean | null
    petAttitude?: string | null
    cooksAtHome?: boolean | null
    sharesDuties?: boolean | null
    usesHomeAppliances?: boolean | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserProfileUncheckedCreateWithoutUserInput = {
    id?: string
    university?: string | null
    faculty?: string | null
    major?: string | null
    graduationYear?: number | null
    personalityType?: $Enums.PersonalityType | null
    temperament?: $Enums.Temperament | null
    opennessLevel?: number | null
    religiousViews?: string | null
    politicalViews?: string | null
    tidinessLevel?: number | null
    alcoholAttitude?: $Enums.Attitude | null
    smokingAttitude?: $Enums.Attitude | null
    accommodationType?: $Enums.AccommodationType | null
    primaryGoal?: string | null
    roommateExpectations?: string | null
    hobbies?: UserProfileCreatehobbiesInput | string[]
    favoriteMusic?: string | null
    favoriteMovies?: string | null
    readingPreferences?: string | null
    boardGames?: boolean | null
    travelInterest?: boolean | null
    artInterest?: boolean | null
    physicalActivity?: number | null
    favoriteSports?: string | null
    gymRegularly?: boolean | null
    isEarlyBird?: boolean | null
    scheduleType?: string | null
    staysHomeOften?: boolean | null
    hasPets?: boolean | null
    petAttitude?: string | null
    cooksAtHome?: boolean | null
    sharesDuties?: boolean | null
    usesHomeAppliances?: boolean | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserProfileCreateOrConnectWithoutUserInput = {
    where: UserProfileWhereUniqueInput
    create: XOR<UserProfileCreateWithoutUserInput, UserProfileUncheckedCreateWithoutUserInput>
  }

  export type UserProfileCreateManyUserInputEnvelope = {
    data: UserProfileCreateManyUserInput | UserProfileCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type UserProfileUpsertWithWhereUniqueWithoutUserInput = {
    where: UserProfileWhereUniqueInput
    update: XOR<UserProfileUpdateWithoutUserInput, UserProfileUncheckedUpdateWithoutUserInput>
    create: XOR<UserProfileCreateWithoutUserInput, UserProfileUncheckedCreateWithoutUserInput>
  }

  export type UserProfileUpdateWithWhereUniqueWithoutUserInput = {
    where: UserProfileWhereUniqueInput
    data: XOR<UserProfileUpdateWithoutUserInput, UserProfileUncheckedUpdateWithoutUserInput>
  }

  export type UserProfileUpdateManyWithWhereWithoutUserInput = {
    where: UserProfileScalarWhereInput
    data: XOR<UserProfileUpdateManyMutationInput, UserProfileUncheckedUpdateManyWithoutUserInput>
  }

  export type UserProfileScalarWhereInput = {
    AND?: UserProfileScalarWhereInput | UserProfileScalarWhereInput[]
    OR?: UserProfileScalarWhereInput[]
    NOT?: UserProfileScalarWhereInput | UserProfileScalarWhereInput[]
    id?: StringFilter<"UserProfile"> | string
    userId?: StringFilter<"UserProfile"> | string
    university?: StringNullableFilter<"UserProfile"> | string | null
    faculty?: StringNullableFilter<"UserProfile"> | string | null
    major?: StringNullableFilter<"UserProfile"> | string | null
    graduationYear?: IntNullableFilter<"UserProfile"> | number | null
    personalityType?: EnumPersonalityTypeNullableFilter<"UserProfile"> | $Enums.PersonalityType | null
    temperament?: EnumTemperamentNullableFilter<"UserProfile"> | $Enums.Temperament | null
    opennessLevel?: IntNullableFilter<"UserProfile"> | number | null
    religiousViews?: StringNullableFilter<"UserProfile"> | string | null
    politicalViews?: StringNullableFilter<"UserProfile"> | string | null
    tidinessLevel?: IntNullableFilter<"UserProfile"> | number | null
    alcoholAttitude?: EnumAttitudeNullableFilter<"UserProfile"> | $Enums.Attitude | null
    smokingAttitude?: EnumAttitudeNullableFilter<"UserProfile"> | $Enums.Attitude | null
    accommodationType?: EnumAccommodationTypeNullableFilter<"UserProfile"> | $Enums.AccommodationType | null
    primaryGoal?: StringNullableFilter<"UserProfile"> | string | null
    roommateExpectations?: StringNullableFilter<"UserProfile"> | string | null
    hobbies?: StringNullableListFilter<"UserProfile">
    favoriteMusic?: StringNullableFilter<"UserProfile"> | string | null
    favoriteMovies?: StringNullableFilter<"UserProfile"> | string | null
    readingPreferences?: StringNullableFilter<"UserProfile"> | string | null
    boardGames?: BoolNullableFilter<"UserProfile"> | boolean | null
    travelInterest?: BoolNullableFilter<"UserProfile"> | boolean | null
    artInterest?: BoolNullableFilter<"UserProfile"> | boolean | null
    physicalActivity?: IntNullableFilter<"UserProfile"> | number | null
    favoriteSports?: StringNullableFilter<"UserProfile"> | string | null
    gymRegularly?: BoolNullableFilter<"UserProfile"> | boolean | null
    isEarlyBird?: BoolNullableFilter<"UserProfile"> | boolean | null
    scheduleType?: StringNullableFilter<"UserProfile"> | string | null
    staysHomeOften?: BoolNullableFilter<"UserProfile"> | boolean | null
    hasPets?: BoolNullableFilter<"UserProfile"> | boolean | null
    petAttitude?: StringNullableFilter<"UserProfile"> | string | null
    cooksAtHome?: BoolNullableFilter<"UserProfile"> | boolean | null
    sharesDuties?: BoolNullableFilter<"UserProfile"> | boolean | null
    usesHomeAppliances?: BoolNullableFilter<"UserProfile"> | boolean | null
    createdAt?: DateTimeFilter<"UserProfile"> | Date | string
    updatedAt?: DateTimeFilter<"UserProfile"> | Date | string
  }

  export type UserCreateWithoutUserProfileInput = {
    id?: string
    fullName: string
    email: string
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUncheckedCreateWithoutUserProfileInput = {
    id?: string
    fullName: string
    email: string
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserCreateOrConnectWithoutUserProfileInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutUserProfileInput, UserUncheckedCreateWithoutUserProfileInput>
  }

  export type UserUpsertWithoutUserProfileInput = {
    update: XOR<UserUpdateWithoutUserProfileInput, UserUncheckedUpdateWithoutUserProfileInput>
    create: XOR<UserCreateWithoutUserProfileInput, UserUncheckedCreateWithoutUserProfileInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutUserProfileInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutUserProfileInput, UserUncheckedUpdateWithoutUserProfileInput>
  }

  export type UserUpdateWithoutUserProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateWithoutUserProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserProfileCreateManyUserInput = {
    id?: string
    university?: string | null
    faculty?: string | null
    major?: string | null
    graduationYear?: number | null
    personalityType?: $Enums.PersonalityType | null
    temperament?: $Enums.Temperament | null
    opennessLevel?: number | null
    religiousViews?: string | null
    politicalViews?: string | null
    tidinessLevel?: number | null
    alcoholAttitude?: $Enums.Attitude | null
    smokingAttitude?: $Enums.Attitude | null
    accommodationType?: $Enums.AccommodationType | null
    primaryGoal?: string | null
    roommateExpectations?: string | null
    hobbies?: UserProfileCreatehobbiesInput | string[]
    favoriteMusic?: string | null
    favoriteMovies?: string | null
    readingPreferences?: string | null
    boardGames?: boolean | null
    travelInterest?: boolean | null
    artInterest?: boolean | null
    physicalActivity?: number | null
    favoriteSports?: string | null
    gymRegularly?: boolean | null
    isEarlyBird?: boolean | null
    scheduleType?: string | null
    staysHomeOften?: boolean | null
    hasPets?: boolean | null
    petAttitude?: string | null
    cooksAtHome?: boolean | null
    sharesDuties?: boolean | null
    usesHomeAppliances?: boolean | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserProfileUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    university?: NullableStringFieldUpdateOperationsInput | string | null
    faculty?: NullableStringFieldUpdateOperationsInput | string | null
    major?: NullableStringFieldUpdateOperationsInput | string | null
    graduationYear?: NullableIntFieldUpdateOperationsInput | number | null
    personalityType?: NullableEnumPersonalityTypeFieldUpdateOperationsInput | $Enums.PersonalityType | null
    temperament?: NullableEnumTemperamentFieldUpdateOperationsInput | $Enums.Temperament | null
    opennessLevel?: NullableIntFieldUpdateOperationsInput | number | null
    religiousViews?: NullableStringFieldUpdateOperationsInput | string | null
    politicalViews?: NullableStringFieldUpdateOperationsInput | string | null
    tidinessLevel?: NullableIntFieldUpdateOperationsInput | number | null
    alcoholAttitude?: NullableEnumAttitudeFieldUpdateOperationsInput | $Enums.Attitude | null
    smokingAttitude?: NullableEnumAttitudeFieldUpdateOperationsInput | $Enums.Attitude | null
    accommodationType?: NullableEnumAccommodationTypeFieldUpdateOperationsInput | $Enums.AccommodationType | null
    primaryGoal?: NullableStringFieldUpdateOperationsInput | string | null
    roommateExpectations?: NullableStringFieldUpdateOperationsInput | string | null
    hobbies?: UserProfileUpdatehobbiesInput | string[]
    favoriteMusic?: NullableStringFieldUpdateOperationsInput | string | null
    favoriteMovies?: NullableStringFieldUpdateOperationsInput | string | null
    readingPreferences?: NullableStringFieldUpdateOperationsInput | string | null
    boardGames?: NullableBoolFieldUpdateOperationsInput | boolean | null
    travelInterest?: NullableBoolFieldUpdateOperationsInput | boolean | null
    artInterest?: NullableBoolFieldUpdateOperationsInput | boolean | null
    physicalActivity?: NullableIntFieldUpdateOperationsInput | number | null
    favoriteSports?: NullableStringFieldUpdateOperationsInput | string | null
    gymRegularly?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isEarlyBird?: NullableBoolFieldUpdateOperationsInput | boolean | null
    scheduleType?: NullableStringFieldUpdateOperationsInput | string | null
    staysHomeOften?: NullableBoolFieldUpdateOperationsInput | boolean | null
    hasPets?: NullableBoolFieldUpdateOperationsInput | boolean | null
    petAttitude?: NullableStringFieldUpdateOperationsInput | string | null
    cooksAtHome?: NullableBoolFieldUpdateOperationsInput | boolean | null
    sharesDuties?: NullableBoolFieldUpdateOperationsInput | boolean | null
    usesHomeAppliances?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserProfileUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    university?: NullableStringFieldUpdateOperationsInput | string | null
    faculty?: NullableStringFieldUpdateOperationsInput | string | null
    major?: NullableStringFieldUpdateOperationsInput | string | null
    graduationYear?: NullableIntFieldUpdateOperationsInput | number | null
    personalityType?: NullableEnumPersonalityTypeFieldUpdateOperationsInput | $Enums.PersonalityType | null
    temperament?: NullableEnumTemperamentFieldUpdateOperationsInput | $Enums.Temperament | null
    opennessLevel?: NullableIntFieldUpdateOperationsInput | number | null
    religiousViews?: NullableStringFieldUpdateOperationsInput | string | null
    politicalViews?: NullableStringFieldUpdateOperationsInput | string | null
    tidinessLevel?: NullableIntFieldUpdateOperationsInput | number | null
    alcoholAttitude?: NullableEnumAttitudeFieldUpdateOperationsInput | $Enums.Attitude | null
    smokingAttitude?: NullableEnumAttitudeFieldUpdateOperationsInput | $Enums.Attitude | null
    accommodationType?: NullableEnumAccommodationTypeFieldUpdateOperationsInput | $Enums.AccommodationType | null
    primaryGoal?: NullableStringFieldUpdateOperationsInput | string | null
    roommateExpectations?: NullableStringFieldUpdateOperationsInput | string | null
    hobbies?: UserProfileUpdatehobbiesInput | string[]
    favoriteMusic?: NullableStringFieldUpdateOperationsInput | string | null
    favoriteMovies?: NullableStringFieldUpdateOperationsInput | string | null
    readingPreferences?: NullableStringFieldUpdateOperationsInput | string | null
    boardGames?: NullableBoolFieldUpdateOperationsInput | boolean | null
    travelInterest?: NullableBoolFieldUpdateOperationsInput | boolean | null
    artInterest?: NullableBoolFieldUpdateOperationsInput | boolean | null
    physicalActivity?: NullableIntFieldUpdateOperationsInput | number | null
    favoriteSports?: NullableStringFieldUpdateOperationsInput | string | null
    gymRegularly?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isEarlyBird?: NullableBoolFieldUpdateOperationsInput | boolean | null
    scheduleType?: NullableStringFieldUpdateOperationsInput | string | null
    staysHomeOften?: NullableBoolFieldUpdateOperationsInput | boolean | null
    hasPets?: NullableBoolFieldUpdateOperationsInput | boolean | null
    petAttitude?: NullableStringFieldUpdateOperationsInput | string | null
    cooksAtHome?: NullableBoolFieldUpdateOperationsInput | boolean | null
    sharesDuties?: NullableBoolFieldUpdateOperationsInput | boolean | null
    usesHomeAppliances?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserProfileUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    university?: NullableStringFieldUpdateOperationsInput | string | null
    faculty?: NullableStringFieldUpdateOperationsInput | string | null
    major?: NullableStringFieldUpdateOperationsInput | string | null
    graduationYear?: NullableIntFieldUpdateOperationsInput | number | null
    personalityType?: NullableEnumPersonalityTypeFieldUpdateOperationsInput | $Enums.PersonalityType | null
    temperament?: NullableEnumTemperamentFieldUpdateOperationsInput | $Enums.Temperament | null
    opennessLevel?: NullableIntFieldUpdateOperationsInput | number | null
    religiousViews?: NullableStringFieldUpdateOperationsInput | string | null
    politicalViews?: NullableStringFieldUpdateOperationsInput | string | null
    tidinessLevel?: NullableIntFieldUpdateOperationsInput | number | null
    alcoholAttitude?: NullableEnumAttitudeFieldUpdateOperationsInput | $Enums.Attitude | null
    smokingAttitude?: NullableEnumAttitudeFieldUpdateOperationsInput | $Enums.Attitude | null
    accommodationType?: NullableEnumAccommodationTypeFieldUpdateOperationsInput | $Enums.AccommodationType | null
    primaryGoal?: NullableStringFieldUpdateOperationsInput | string | null
    roommateExpectations?: NullableStringFieldUpdateOperationsInput | string | null
    hobbies?: UserProfileUpdatehobbiesInput | string[]
    favoriteMusic?: NullableStringFieldUpdateOperationsInput | string | null
    favoriteMovies?: NullableStringFieldUpdateOperationsInput | string | null
    readingPreferences?: NullableStringFieldUpdateOperationsInput | string | null
    boardGames?: NullableBoolFieldUpdateOperationsInput | boolean | null
    travelInterest?: NullableBoolFieldUpdateOperationsInput | boolean | null
    artInterest?: NullableBoolFieldUpdateOperationsInput | boolean | null
    physicalActivity?: NullableIntFieldUpdateOperationsInput | number | null
    favoriteSports?: NullableStringFieldUpdateOperationsInput | string | null
    gymRegularly?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isEarlyBird?: NullableBoolFieldUpdateOperationsInput | boolean | null
    scheduleType?: NullableStringFieldUpdateOperationsInput | string | null
    staysHomeOften?: NullableBoolFieldUpdateOperationsInput | boolean | null
    hasPets?: NullableBoolFieldUpdateOperationsInput | boolean | null
    petAttitude?: NullableStringFieldUpdateOperationsInput | string | null
    cooksAtHome?: NullableBoolFieldUpdateOperationsInput | boolean | null
    sharesDuties?: NullableBoolFieldUpdateOperationsInput | boolean | null
    usesHomeAppliances?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



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