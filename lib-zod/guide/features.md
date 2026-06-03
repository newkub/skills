# All Features

## Core Features

### Primitives

| Schema | Description | Example |
|--------|-------------|---------|
| `z.string()` | String type | `z.string().min(1).max(255)` |
| `z.number()` | Number type | `z.number().min(0).max(100)` |
| `z.boolean()` | Boolean type | `z.boolean()` |
| `z.bigint()` | BigInt type | `z.bigint().positive()` |
| `z.date()` | Date type | `z.date().min(new Date())` |
| `z.symbol()` | Symbol type | `z.symbol()` |
| `z.undefined()` | Undefined type | `z.undefined()` |
| `z.null()` | Null type | `z.null()` |
| `z.void()` | Void type (alias of undefined) | `z.void()` |
| `z.any()` | Any type | `z.any()` |
| `z.unknown()` | Unknown type | `z.unknown()` |
| `z.never()` | Never type | `z.never()` |

### Literals

| Schema | Description | Example |
|--------|-------------|---------|
| `z.literal("value")` | String literal | `z.literal("admin")` |
| `z.literal(42)` | Number literal | `z.literal(42)` |
| `z.literal(true)` | Boolean literal | `z.literal(true)` |

### String Validations

| Method | Description | Example |
|--------|-------------|---------|
| `.min(length)` | Minimum length | `z.string().min(1)` |
| `.max(length)` | Maximum length | `z.string().max(255)` |
| `.length(length)` | Exact length | `z.string().length(10)` |
| `.regex(regex)` | Match regex | `z.string().regex(/^[a-z]+$/)` |
| `.startsWith(text)` | Start with | `z.string().startsWith("foo")` |
| `.endsWith(text)` | End with | `z.string().endsWith(".com")` |
| `.includes(text)` | Contains | `z.string().includes("@")` |
| `.trim()` | Trim whitespace | `z.string().trim()` |
| `.toLowerCase()` | To lowercase | `z.string().toLowerCase()` |
| `.toUpperCase()` | To uppercase | `z.string().toUpperCase()` |

### String Formats

| Schema | Description | Example |
|--------|-------------|---------|
| `z.email()` | Email validation | `z.email()` |
| `z.uuid()` | UUID validation | `z.uuid()` |
| `z.url()` | URL validation | `z.url()` |
| `z.httpUrl()` | HTTP/HTTPS URL | `z.httpUrl()` |
| `z.hostname()` | Hostname validation | `z.hostname()` |
| `z.e164()` | E.164 phone number | `z.e164()` |
| `z.emoji()` | Emoji validation | `z.emoji()` |
| `z.base64()` | Base64 encoding | `z.base64()` |
| `z.hex()` | Hexadecimal | `z.hex()` |
| `z.jwt()` | JWT validation | `z.jwt()` |
| `z.nanoid()` | Nano ID | `z.nanoid()` |
| `z.cuid()` | CUID | `z.cuid()` |
| `z.cuid2()` | CUID2 | `z.cuid2()` |
| `z.ulid()` | ULID | `z.ulid()` |
| `z.ipv4()` | IPv4 address | `z.ipv4()` |
| `z.ipv6()` | IPv6 address | `z.ipv6()` |
| `z.mac()` | MAC address | `z.mac()` |
| `z.iso.date()` | ISO date | `z.iso.date()` |
| `z.iso.time()` | ISO time | `z.iso.time()` |
| `z.iso.datetime()` | ISO datetime | `z.iso.datetime()` |
| `z.iso.duration()` | ISO duration | `z.iso.duration()` |
| `z.hash("sha256")` | Cryptographic hash | `z.hash("sha256")` |

### Number Validations

| Method | Description | Example |
|--------|-------------|---------|
| `.min(value)` | Minimum value | `z.number().min(0)` |
| `.max(value)` | Maximum value | `z.number().max(100)` |
| `.gt(value)` | Greater than | `z.number().gt(0)` |
| `.gte(value)` | Greater than or equal | `z.number().gte(18)` |
| `.lt(value)` | Less than | `z.number().lt(100)` |
| `.lte(value)` | Less than or equal | `z.number().lte(65)` |
| `.positive()` | Greater than 0 | `z.number().positive()` |
| `.nonnegative()` | Greater than or equal 0 | `z.number().nonnegative()` |
| `.negative()` | Less than 0 | `z.number().negative()` |
| `.nonpositive()` | Less than or equal 0 | `z.number().nonpositive()` |
| `.multipleOf(value)` | Divisible by | `z.number().multipleOf(5)` |
| `.int()` | Integer only | `z.number().int()` |
| `.int32()` | 32-bit integer | `z.number().int32()` |

## Advanced Features

### Objects

| Method | Description | Example |
|--------|-------------|---------|
| `z.object({...})` | Define object | `z.object({ name: z.string() })` |
| `z.strictObject({...})` | Strict (no extra keys) | `z.strictObject({ id: z.string() })` |
| `z.looseObject({...})` | Loose (extra keys pass through) | `z.looseObject({ name: z.string() })` |
| `.extend({...})` | Add fields | `schema.extend({ age: z.number() })` |
| `.safeExtend({...})` | Safe extend | `schema.safeExtend({ name: z.string().min(1) })` |
| `.pick({...})` | Pick fields | `schema.pick({ name: true })` |
| `.omit({...})` | Omit fields | `schema.omit({ id: true })` |
| `.partial()` | Make all optional | `schema.partial()` |
| `.required()` | Make all required | `schema.required()` |
| `.catchall(schema)` | Validate extra keys | `schema.catchall(z.string())` |
| `.keyof()` | Create enum from keys | `schema.keyof()` |

### Arrays

| Method | Description | Example |
|--------|-------------|---------|
| `z.array(schema)` | Define array | `z.array(z.string())` |
| `.min(length)` | Minimum items | `z.array(z.string()).min(1)` |
| `.max(length)` | Maximum items | `z.array(z.string()).max(10)` |
| `.length(length)` | Exact length | `z.array(z.string()).length(5)` |

### Tuples

| Method | Description | Example |
|--------|-------------|---------|
| `z.tuple([...])` | Fixed-length array | `z.tuple([z.string(), z.number()])` |
| `z.tuple([...], rest)` | With rest arguments | `z.tuple([z.string()], z.number())` |

### Unions

| Method | Description | Example |
|--------|-------------|---------|
| `z.union([...])` | Union types | `z.union([z.string(), z.number()])` |
| `z.discriminatedUnion("key", [...])` | Discriminated union | `z.discriminatedUnion("type", [...])` |
| `z.xor([...])` | Exclusive union | `z.xor([z.object({a: z.string()}), z.object({b: z.number()})])` |

### Enums

| Method | Description | Example |
|--------|-------------|---------|
| `z.enum(["a", "b"])` | String enum | `z.enum(["admin", "user"])` |
| `.enum` | Get enum object | `schema.enum` |
| `.exclude([...])` | Exclude values | `schema.exclude(["admin"])` |
| `.extract([...])` | Extract values | `schema.extract(["admin"])` |

### Records & Maps

| Method | Description | Example |
|--------|-------------|---------|
| `z.record(keySchema, valueSchema)` | Record type | `z.record(z.string(), z.number())` |
| `z.partialRecord(keySchema, valueSchema)` | Partial record | `z.partialRecord(z.string(), z.string())` |
| `z.looseRecord(keySchema, valueSchema)` | Loose record | `z.looseRecord(z.string(), z.string())` |
| `z.map(keySchema, valueSchema)` | Map type | `z.map(z.string(), z.number())` |

### Sets

| Method | Description | Example |
|--------|-------------|---------|
| `z.set(schema)` | Set type | `z.set(z.number())` |
| `.min(size)` | Minimum size | `z.set(z.number()).min(1)` |
| `.max(size)` | Maximum size | `z.set(z.number()).max(10)` |
| `.size(size)` | Exact size | `z.set(z.number()).size(3)` |

## Validation & Transformation

### Refinements

| Method | Description | Example |
|--------|-------------|---------|
| `.refine(fn, options)` | Sync refinement | `z.string().refine(val => val.length > 0)` |
| `.superRefine(fn)` | Low-level refinement | Custom error codes |
| `.check(schema)` | Check against schema | `z.string().check(z.property("length", z.number().min(5)))` |

### Transforms

| Method | Description | Example |
|--------|-------------|---------|
| `.transform(fn)` | Transform value | `z.string().transform(s => s.trim())` |
| `z.transform(fn)` | Create transform | `z.transform(val => String(val))` |
| `.pipe(schema)` | Pipe to another schema | `z.string().pipe(z.transform(...))` |
| `z.preprocess(fn, schema)` | Preprocess then validate | `z.preprocess(val => Number(val), z.number())` |

### Coercion

| Method | Description | Example |
|--------|-------------|---------|
| `z.coerce.string()` | To string | `z.coerce.string()` |
| `z.coerce.number()` | To number | `z.coerce.number()` |
| `z.coerce.boolean()` | To boolean | `z.coerce.boolean()` |
| `z.coerce.bigint()` | To bigint | `z.coerce.bigint()` |

### Defaults & Catch

| Method | Description | Example |
|--------|-------------|---------|
| `.default(value)` | Set default | `z.string().default("unknown")` |
| `.prefault(value)` | Pre-parse default | `z.string().prefault("  ") ` |
| `.catch(value)` | Fallback on error | `z.number().catch(0)` |

### Optionals & Nullables

| Method | Description | Example |
|--------|-------------|---------|
| `.optional()` | Allow undefined | `z.string().optional()` |
| `.nullable()` | Allow null | `z.string().nullable()` |
| `.nullish()` | Allow null or undefined | `z.string().nullish()` |
| `z.optional(schema)` | Wrap as optional | `z.optional(z.string())` |
| `z.nullable(schema)` | Wrap as nullable | `z.nullable(z.string())` |

## Special Types

### Files

| Method | Description | Example |
|--------|-------------|---------|
| `z.file()` | File instance | `z.file()` |
| `.min(bytes)` | Minimum size | `z.file().min(1024)` |
| `.max(bytes)` | Maximum size | `z.file().max(1024 * 1024)` |
| `.mime(types)` | MIME type filter | `z.file().mime("image/png")` |

### Template Literals

| Method | Description | Example |
|--------|-------------|---------|
| `z.templateLiteral([...])` | Template literal type | `z.templateLiteral([z.string(), "px"])` |

### Custom Formats

| Method | Description | Example |
|--------|-------------|---------|
| `z.stringFormat("name", fn)` | Custom format | `z.stringFormat("slug", /^[a-z]+$/)` |

## Codecs (Zod v4)

| Method | Description | Example |
|--------|-------------|---------|
| `z.codec(inputSchema, outputSchema, { decode, encode })` | Bidirectional codec | `z.codec(z.string(), z.date(), { decode, encode })` |
| `z.decode(codec, value)` | Decode value | `z.decode(codec, "2024-01-01")` |
| `z.encode(codec, value)` | Encode value | `z.encode(codec, new Date())` |
| `z.invertCodec(codec)` | Swap input/output | `z.invertCodec(codec)` |

### Built-in Codecs

| Codec | Description |
|-------|-------------|
| `z.codecs.stringToNumber` | String to number |
| `z.codecs.stringToInt` | String to integer |
| `z.codecs.isoDatetimeToDate` | ISO string to Date |
| `z.codecs.jsonCodec` | JSON string to object |
| `z.codecs.stringToURL` | String to URL |
| `z.codecs.stringToBoolean` | String to boolean |

## Utility Schemas

| Schema | Description |
|--------|-------------|
| `z.stringbool()` | Parse "boolish" strings to boolean |
| `z.instanceof(Class)` | Validate class instance |
| `z.nan()` | Validate NaN |
| `z.never()` | Never passes validation |
| `z.lazy(fn)` | Recursive/lazy schema |

## JSON Schema

| Method | Description | Example |
|--------|-------------|---------|
| `.toJSONSchema()` | Convert to JSON Schema | `schema.toJSONSchema()` |
| `z.toJSONSchema(schema)` | Static method | `z.toJSONSchema(schema)` |