# Features

## ภาพรวม

Zod มี features ครบถ้วนสำหรับ schema validation และ transformation

## Primitive Types

### String

```typescript
import { z } from "zod";

z.string()
z.string().min(5)
z.string().max(100)
z.string().length(10)
z.string().email()
z.string().url()
z.string().uuid()
z.string().regex(/^[a-z]+$/)
z.string().includes("search")
z.string().startsWith("prefix")
z.string().endsWith("suffix")
z.string().trim()
z.string().toLowerCase()
z.string().toUpperCase()
```

### Number

```typescript
import { z } from "zod";

z.number()
z.number().min(0)
z.number().max(100)
z.number().positive()
z.number().negative()
z.number().int()
z.number().finite()
z.number().multipleOf(5)
```

### Boolean

```typescript
import { z } from "zod";

z.boolean()
```

### Date

```typescript
import { z } from "zod";

z.date()
z.date().min(new Date("2020-01-01"))
z.date().max(new Date())
```

## Complex Types

### Object

```typescript
import { z } from "zod";

z.object({
  name: z.string(),
  age: z.number(),
})

// Optional fields
z.object({
  name: z.string(),
  age: z.number().optional(),
})

// Default values
z.object({
  name: z.string(),
  age: z.number().default(18),
})

// Strict mode - reject unknown keys
z.object({
  name: z.string(),
}).strict()

// Passthrough - keep unknown keys
z.object({
  name: z.string(),
}).passthrough()
```

### Array

```typescript
import { z } from "zod";

z.array(z.string())
z.array(z.string()).min(1)
z.array(z.string()).max(10)
z.array(z.string()).length(5)
z.array(z.string()).nonempty()
```

### Tuple

```typescript
import { z } from "zod";

z.tuple([z.string(), z.number()])
// => [string, number]
```

### Union

```typescript
import { z } from "zod";

z.union([z.string(), z.number()])
// => string | number

// Discriminated union
z.discriminatedUnion("type", [
  z.object({ type: z.literal("a"), value: z.string() }),
  z.object({ type: z.literal("b"), value: z.number() }),
])
```

### Intersection

```typescript
import { z } from "zod";

z.intersection(
  z.object({ a: z.string() }),
  z.object({ b: z.number() })
)
// => { a: string; b: number; }
```

### Literal

```typescript
import { z } from "zod";

z.literal("hello")
z.literal(123)
z.literal(true)
```

### Enum

```typescript
import { z } from "zod";

z.enum(["apple", "banana", "orange"])
```

### Native Enums

```typescript
import { z } from "zod";

enum Fruits {
  Apple = "apple",
  Banana = "banana",
}

z.nativeEnum(Fruits)
```

## Modifiers

### Optional

```typescript
import { z } from "zod";

z.string().optional()
// => string | undefined
```

### Nullable

```typescript
import { z } from "zod";

z.string().nullable()
// => string | null
```

### Nullish

```typescript
import { z } from "zod";

z.string().nullish()
// => string | null | undefined
```

### Default

```typescript
import { z } from "zod";

z.string().default("hello")
```

## Transformations

### Transform

```typescript
import { z } from "zod";

z.string().transform((val) => val.toUpperCase())
z.string().transform((val) => parseInt(val, 10))
```

### Coerce

```typescript
import { z } from "zod";

z.coerce.number()  // string → number
z.coerce.boolean() // truthy → true
z.coerce.date()    // string → Date
z.coerce.bigint()  // string → bigint
```

### Pipe

```typescript
import { z } from "zod";

z.string()
  .transform((val) => val.trim())
  .pipe(z.string().min(1))
```

## Refinements

### Custom Validation

```typescript
import { z } from "zod";

z.string().refine((val) => val.length > 0, {
  message: "Cannot be empty",
})
```

### SuperRefine

```typescript
import { z } from "zod";

z.object({
  password: z.string(),
  confirmPassword: z.string(),
}).superRefine((data, ctx) => {
  if (data.password !== data.confirmPassword) {
    ctx.addIssue({
      code: z.ZodIssueCode.custom,
      message: "Passwords don't match",
      path: ["confirmPassword"],
    });
  }
})
```

## Advanced

### Recursive

```typescript
import { z } from "zod";

const categorySchema = z.object({
  name: z.string(),
  subcategories: z.array(z.lazy(() => categorySchema)),
})
```

### Brand

```typescript
import { z } from "zod";

const userIdSchema = z.string().brand("UserId");

type UserId = z.infer<typeof userIdSchema>;
// => string & { __brand: "UserId" }
```

### Readonly

```typescript
import { z } from "zod";

z.object({ name: z.string() }).readonly()
// => { readonly name: string; }
```

### Catchall

```typescript
import { z } from "zod";

z.object({ name: z.string() }).catchall(z.unknown())
// => { name: string; [x: string]: unknown; }
```

## Error Customization

### Custom Error Messages

```typescript
import { z } from "zod";

z.string().min(5, { message: "Must be at least 5 characters" })
```

### Error Maps

```typescript
import { z } from "zod";

const customErrorMap: z.ZodErrorMap = (issue, ctx) => {
  if (issue.code === z.ZodIssueCode.invalid_type) {
    return { message: "Invalid type provided" };
  }
  return { message: ctx.defaultError };
};

z.setErrorMap(customErrorMap);
```
