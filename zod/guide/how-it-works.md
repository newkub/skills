# How It Works

## ภาพรวม

Zod ใช้ parsing pipeline ที่ประกอบด้วยหลายขั้นตอนเพื่อ validate และ transform data

## Parsing Pipeline

```
Input Data
    ↓
1. Type Check
    ↓
2. Validation
    ↓
3. Transformation
    ↓
4. Output Data
```

### 1. Type Check

ตรวจสอบว่า input เป็น type ที่ถูกต้องหรือไม่:

```typescript
import { z } from "zod";

const stringSchema = z.string();

stringSchema.parse("hello"); // ✅
stringSchema.parse(123);    // ❌ ZodError: Expected string, received number
```

### 2. Validation

ตรวจสอบ constraints เช่น length, format, range:

```typescript
import { z } from "zod";

const emailSchema = z.string().email().min(5);

emailSchema.parse("test@example.com"); // ✅
emailSchema.parse("ab@c");             // ❌ ZodError: Invalid email
```

### 3. Transformation

แปลง data หลังจากผ่าน validation:

```typescript
import { z } from "zod";

const trimmedSchema = z.string().transform((val) => val.trim());

trimmedSchema.parse("  hello  "); // => "hello"
```

## Error Handling

### ZodError Structure

```typescript
import { z } from "zod";

const schema = z.object({
  username: z.string().min(3),
  age: z.number().min(18),
});

const result = schema.safeParse({ username: "ab", age: 15 });

if (!result.success) {
  console.log(result.error.errors);
  // [
  //   { path: ["username"], message: "String must contain at least 3 character(s)" },
  //   { path: ["age"], message: "Number must be greater than or equal to 18" }
  // ]
}
```

### Error Formatting

```typescript
import { z } from "zod";

const schema = z.object({
  username: z.string().min(3),
});

try {
  schema.parse({ username: "ab" });
} catch (error) {
  if (error instanceof z.ZodError) {
    console.log(error.format());
    // {
    //   username: {
    //     _errors: ["String must contain at least 3 character(s)"]
    //   }
    // }
  }
}
```

## Type Inference

### Static Type Inference

```typescript
import { z } from "zod";

const schema = z.object({
  name: z.string(),
  age: z.number(),
});

type Schema = z.infer<typeof schema>;
// type Schema = { name: string; age: number; }
```

### Input/Output Types

```typescript
import { z } from "zod";

const schema = z.string().transform((val) => val.length);

type Input = z.input<typeof schema>;  // string
type Output = z.output<typeof schema>; // number
```

## Schema Composition

### Extend

```typescript
import { z } from "zod";

const baseSchema = z.object({
  id: z.string(),
  createdAt: z.date(),
});

const userSchema = baseSchema.extend({
  username: z.string(),
  email: z.string().email(),
});
```

### Merge

```typescript
import { z } from "zod";

const schema1 = z.object({ a: z.string() });
const schema2 = z.object({ b: z.number() });

const merged = schema1.merge(schema2);
// => { a: string; b: number; }
```

### Pick/Omit

```typescript
import { z } from "zod";

const schema = z.object({
  id: z.string(),
  name: z.string(),
  password: z.string(),
});

const publicSchema = schema.pick({ id: true, name: true });
const safeSchema = schema.omit({ password: true });
```

## Performance

### Lazy Evaluation

```typescript
import { z } from "zod";

// Lazy schema - only evaluated when needed
const lazySchema = z.lazy(() => z.array(z.string()));
```

### Caching

Zod caches type inference และ validation results อัตโนมัติ:

```typescript
import { z } from "zod";

const schema = z.object({ name: z.string() });

// Type inference is cached
type Type = z.infer<typeof schema>;
```

## Memory

Zod schemas ไม่ใช้ memory มากเนื่องจาก:
- Schemas เป็น immutable
- Type inference ถูก cache
- Validation ไม่เก็บ intermediate results
