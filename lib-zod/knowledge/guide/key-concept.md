# Key Concept

## ภาพรวม

Zod เป็น TypeScript-first schema validation library ที่ช่วยให้คุณสามารถ:
- กำหนด schemas สำหรับ validate data
- ใช้ TypeScript type inference อัตโนมัติ
- Validate data ที่ runtime
- สร้าง composable schemas ที่ reusable

## Core Concepts

### 1. Schema

Schema คือ definition ของ data structure ที่ต้องการ validate:

```typescript
import { z } from "zod";

// Primitive schemas
const stringSchema = z.string();
const numberSchema = z.number();
const booleanSchema = z.boolean();

// Complex schemas
const userSchema = z.object({
  username: z.string(),
  age: z.number(),
  email: z.string().email(),
});
```

### 2. Type Inference

Zod สามารถ infer TypeScript types จาก schemas อัตโนมัติ:

```typescript
import { z } from "zod";

const userSchema = z.object({
  username: z.string(),
  age: z.number(),
});

// Infer type from schema
type User = z.infer<typeof userSchema>;
// type User = { username: string; age: number; }
```

### 3. Parsing

Parsing คือการ validate และ transform data ตาม schema:

```typescript
import { z } from "zod";

const userSchema = z.object({
  username: z.string(),
  age: z.number(),
});

// Parse - throws error if invalid
const user = userSchema.parse({ username: "john", age: 30 });
// => { username: "john", age: 30 }

// SafeParse - returns result object
const result = userSchema.safeParse({ username: "john" });
if (!result.success) {
  console.log(result.error);
}
```

### 4. Validation

Validation คือการตรวจสอบว่า data ตรงกับ schema หรือไม่:

```typescript
import { z } from "zod";

const emailSchema = z.string().email();

emailSchema.parse("test@example.com"); // ✅
emailSchema.parse("invalid"); // ❌ throws ZodError
```

### 5. Coercion

Coercion คือการ transform data types อัตโนมัติ:

```typescript
import { z } from "zod";

const numberSchema = z.coerce.number();

numberSchema.parse("123"); // => 123 (string to number)
numberSchema.parse(123);   // => 123
```

### 6. Refinement

Refinement คือการเพิ่ม custom validation logic:

```typescript
import { z } from "zod";

const passwordSchema = z.string()
  .min(8)
  .refine((val) => /[A-Z]/.test(val), {
    message: "Must contain uppercase letter",
  });
```

### 7. Transformation

Transformation คือการ modify data หลังจาก validation:

```typescript
import { z } from "zod";

const emailSchema = z.string().transform((val) => val.toLowerCase());

emailSchema.parse("TEST@EXAMPLE.COM"); // => "test@example.com"
```

## Schema Types

| Type | Method | Description |
|------|--------|-------------|
| String | `z.string()` | String validation |
| Number | `z.number()` | Number validation |
| Boolean | `z.boolean()` | Boolean validation |
| Date | `z.date()` | Date validation |
| Array | `z.array(T)` | Array of type T |
| Object | `z.object({})` | Object with properties |
| Union | `z.union([A, B])` | One of multiple types |
| Literal | `z.literal("value")` | Exact value match |
| Enum | `z.enum([...])` | Enum values |
| Optional | `z.optional(T)` | Optional field |
| Nullable | `z.nullable(T)` | Nullable field |
| Default | `z.default(T)` | Default value |

## Common Methods

| Method | Description |
|--------|-------------|
| `.parse(data)` | Parse and throw if invalid |
| `.safeParse(data)` | Parse and return result |
| `.optional()` | Make field optional |
| `.nullable()` | Make field nullable |
| `.default(value)` | Set default value |
| `.refine(fn)` | Add custom validation |
| `.transform(fn)` | Transform data |
| `.pipe(schema)` | Chain transformations |
