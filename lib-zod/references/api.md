# API

## Purpose

Complete API reference for Zod schema methods and utilities.

## Core Methods

### parse / safeParse

| Method | Signature | Description |
|--------|-----------|-------------|
| `parse` | `(data: unknown) => T` | Parse with error throwing |
| `safeParse` | `(data: unknown) => SafeParseReturnType` | Non-throwing parse |
| `parseAsync` | `(data: unknown) => Promise<T>` | Async parsing |
| `safeParseAsync` | `(data: unknown) => Promise<SafeParseReturnType>` | Async safe parse |

### Schema Creation

| Method | Signature | Description |
|--------|-----------|-------------|
| `z.object()` | `(shape) => ZodObject` | Create object schema |
| `z.array()` | `(element) => ZodArray` | Create array schema |
| `z.union()` | `([...schemas]) => ZodUnion` | Union types |
| `z.enum()` | `([values]) => ZodEnum` | Enum schema |
| `z.discriminatedUnion()` | `(key, [...schemas]) => ZodDiscriminatedUnion` | Discriminated union |
| `z.tuple()` | `([...schemas]) => ZodTuple` | Fixed-length tuple |
| `z.record()` | `(key, value) => ZodRecord` | Record type |
| `z.map()` | `(key, value) => ZodMap` | Map type |
| `z.set()` | `(element) => ZodSet` | Set type |

### Primitives

| Method | Signature | Description |
|--------|-----------|-------------|
| `z.string()` | `() => ZodString` | String type |
| `z.number()` | `() => ZodNumber` | Number type |
| `z.bigint()` | `() => ZodBigInt` | BigInt type |
| `z.boolean()` | `() => ZodBoolean` | Boolean type |
| `z.date()` | `() => ZodDate` | Date type |
| `z.symbol()` | `() => ZodSymbol` | Symbol type |
| `z.undefined()` | `() => ZodUndefined` | Undefined type |
| `z.null()` | `() => ZodNull` | Null type |
| `z.void()` | `() => ZodVoid` | Void type |
| `z.any()` | `() => ZodAny` | Any type |
| `z.unknown()` | `() => ZodUnknown` | Unknown type |
| `z.never()` | `() => ZodNever` | Never type |

### Special Types

| Method | Signature | Description |
|--------|-----------|-------------|
| `z.literal()` | `(value) => ZodLiteral` | Literal type |
| `z.optional()` | `(schema) => ZodOptional` | Optional wrapper |
| `z.nullable()` | `(schema) => ZodNullable` | Nullable wrapper |
| `z.file()` | `() => ZodFile` | File type |
| `z.nan()` | `() => ZodNaN` | NaN type |
| `z.instanceof()` | `(cls) => ZodInstanceof` | Class instance |
| `z.templateLiteral()` | `([...parts]) => ZodTemplateLiteral` | Template literal |

### String Formats

| Method | Signature | Description |
|--------|-----------|-------------|
| `z.email()` | `() => ZodString` | Email validation |
| `z.uuid()` | `() => ZodString` | UUID validation |
| `z.uuidv4()` | `() => ZodString` | UUIDv4 only |
| `z.url()` | `() => ZodString` | URL validation |
| `z.httpUrl()` | `() => ZodString` | HTTP/HTTPS URL |
| `z.hostname()` | `() => ZodString` | Hostname validation |
| `z.e164()` | `() => ZodString` | E.164 phone |
| `z.emoji()` | `() => ZodString` | Emoji validation |
| `z.base64()` | `() => ZodString` | Base64 encoding |
| `z.hex()` | `() => ZodString` | Hexadecimal |
| `z.jwt()` | `() => ZodString` | JWT validation |
| `z.nanoid()` | `() => ZodString` | Nano ID |
| `z.cuid()` | `() => ZodString` | CUID |
| `z.cuid2()` | `() => ZodString` | CUID2 |
| `z.ulid()` | `() => ZodString` | ULID |
| `z.ipv4()` | `() => ZodString` | IPv4 address |
| `z.ipv6()` | `() => ZodString` | IPv6 address |
| `z.mac()` | `() => ZodString` | MAC address |
| `z.iso.date()` | `() => ZodString` | ISO date |
| `z.iso.time()` | `() => ZodString` | ISO time |
| `z.iso.datetime()` | `() => ZodString` | ISO datetime |
| `z.iso.duration()` | `() => ZodString` | ISO duration |
| `z.hash()` | `(algorithm) => ZodString` | Hash validation |

### Coercion

| Method | Signature | Description |
|--------|-----------|-------------|
| `z.coerce.string()` | `() => ZodString` | To string |
| `z.coerce.number()` | `() => ZodNumber` | To number |
| `z.coerce.boolean()` | `() => ZodBoolean` | To boolean |
| `z.coerce.bigint()` | `() => ZodBigInt` | To bigint |

### Transformation

| Method | Signature | Description |
|--------|-----------|-------------|
| `z.transform()` | `(fn) => ZodEffects` | Create transform |
| `z.preprocess()` | `(fn, schema) => ZodEffects` | Preprocess then validate |
| `z.codec()` | `(input, output, codec) => ZodCodec` | Bidirectional codec |
| `z.decode()` | `(codec, value) => unknown` | Decode value |
| `z.encode()` | `(codec, value) => unknown` | Encode value |

## ZodString Methods

| Method | Signature | Description |
|--------|-----------|-------------|
| `.min()` | `(length, opts?) => ZodString` | Minimum length |
| `.max()` | `(length, opts?) => ZodString` | Maximum length |
| `.length()` | `(length) => ZodString` | Exact length |
| `.regex()` | `(regex, opts?) => ZodString` | Match regex |
| `.includes()` | `(str, opts?) => ZodString` | Contains |
| `.startsWith()` | `(str) => ZodString` | Starts with |
| `.endsWith()` | `(str) => ZodString` | Ends with |
| `.trim()` | `() => ZodString` | Trim whitespace |
| `.toLowerCase()` | `() => ZodString` | To lowercase |
| `.toUpperCase()` | `() => ZodString` | To uppercase |
| `.normalize()` | `() => ZodString` | Unicode normalize |
| `.pipe()` | `(schema) => ZodEffects` | Pipe to schema |
| `.check()` | `(schema) => ZodCheck` | Check against schema |

## ZodNumber Methods

| Method | Signature | Description |
|--------|-----------|-------------|
| `.min()` | `(value) => ZodNumber` | Minimum value |
| `.max()` | `(value) => ZodNumber` | Maximum value |
| `.gt()` | `(value) => ZodNumber` | Greater than |
| `.gte()` | `(value) => ZodNumber` | Greater or equal |
| `.lt()` | `(value) => ZodNumber` | Less than |
| `.lte()` | `(value) => ZodNumber` | Less or equal |
| `.positive()` | `() => ZodNumber` | Greater than 0 |
| `.negative()` | `() => ZodNumber` | Less than 0 |
| `.nonnegative()` | `() => ZodNumber` | >= 0 |
| `.nonpositive()` | `() => ZodNumber` | <= 0 |
| `.multipleOf()` | `(value) => ZodNumber` | Divisible by |
| `.int()` | `() => ZodNumber` | Integer only |
| `.int32()` | `() => ZodNumber` | 32-bit integer |

## ZodObject Methods

| Method | Signature | Description |
|--------|-----------|-------------|
| `.extend()` | `(shape) => ZodObject` | Add fields |
| `.safeExtend()` | `(shape) => ZodObject` | Safe extend |
| `.pick()` | `(keys) => ZodObject` | Pick fields |
| `.omit()` | `(keys) => ZodObject` | Omit fields |
| `.partial()` | `() => ZodObject` | All optional |
| `.required()` | `() => ZodObject` | All required |
| `.merge()` | `(schema) => ZodObject` | Merge schemas |
| `.keyof()` | `() => ZodEnum` | Enum from keys |
| `.catchall()` | `(schema) => ZodObject` | Validate extras |

## ZodArray Methods

| Method | Signature | Description |
|--------|-----------|-------------|
| `.min()` | `(length) => ZodArray` | Min items |
| `.max()` | `(length) => ZodArray` | Max items |
| `.length()` | `(length) => ZodArray` | Exact length |
| `.nonempty()` | `() => ZodArray` | At least 1 |

## ZodEnum Methods

| Method | Signature | Description |
|--------|-----------|-------------|
| `.enum` | `Property` | Enum object |
| `.extract()` | `([values]) => ZodEnum` | Extract values |
| `.exclude()` | `([values]) => ZodEnum` | Exclude values |

## Validation Methods

| Method | Signature | Description |
|--------|-----------|-------------|
| `.refine()` | `(fn, opts?) => ZodEffects` | Sync refinement |
| `.superRefine()` | `(fn) => ZodEffects` | Low-level refinement |
| `.transform()` | `(fn) => ZodEffects` | Transform value |

## Utility Methods

| Method | Signature | Description |
|--------|-----------|-------------|
| `.optional()` | `() => ZodOptional` | Make optional |
| `.nullable()` | `() => ZodNullable` | Make nullable |
| `.nullish()` | `() => ZodOptional<ZodNullable>` | Optional + nullable |
| `.default()` | `(value) => ZodDefault` | Set default |
| `.prefault()` | `(value) => ZodDefault` | Pre-parse default |
| `.catch()` | `(value) => ZodCatch` | Fallback on error |
| `.describe()` | `(text) => this` | Add description |
| `.meta()` | `(obj) => this` | Add metadata (v4) |
| `.brand()` | `() => ZodBranded` | Add brand type |

## Type Utilities

| Method | Signature | Description |
|--------|-----------|-------------|
| `z.infer<>` | `<typeof Schema>` | Infer output type |
| `z.input<>` | `<typeof Schema>` | Infer input type |
| `z.output<>` | `<typeof Schema>` | Infer output type |

## Error Utilities

| Method | Signature | Description |
|--------|-----------|-------------|
| `z.setErrorMap()` | `(map) => void` | Set global error map |
| `z.getErrorMap()` | `() => ZodErrorMap` | Get current error map |

## JSON Schema

| Method | Signature | Description |
|--------|-----------|-------------|
| `.toJSONSchema()` | `() => object` | Convert to JSON Schema |
| `z.toJSONSchema()` | `(schema, opts?) => object` | Static converter |

## Object Variants

| Method | Signature | Description |
|--------|-----------|-------------|
| `z.object()` | `(shape) => ZodObject` | Standard object |
| `z.strictObject()` | `(shape) => ZodObject` | No extra keys |
| `z.looseObject()` | `(shape) => ZodObject` | Extra keys pass through |
| `z.partialRecord()` | `(key, value) => ZodRecord` | Partial record keys |