# Configuration

## ภาพรวม

ตั้งค่า Zod schemas และ error handling

## Schema Configuration

### Strict Mode

```typescript
import { z } from "zod";

const schema = z.object({
  name: z.string(),
}).strict()

schema.parse({ name: "test", extra: "field" }); // ❌ Error
```

### Passthrough Mode

```typescript
import { z } from "zod";

const schema = z.object({
  name: z.string(),
}).passthrough()

schema.parse({ name: "test", extra: "field" }); // ✅ Keeps extra field
```

### Strip Mode

```typescript
import { z } from "zod";

const schema = z.object({
  name: z.string(),
}).strip()

schema.parse({ name: "test", extra: "field" }); // ✅ Removes extra field
```

## Error Configuration

### Custom Error Messages

```typescript
import { z } from "zod";

const schema = z.string().min(5, {
  message: "Must be at least 5 characters",
})
```

### Error Map

```typescript
import { z } from "zod";

const customErrorMap: z.ZodErrorMap = (issue, ctx) => {
  if (issue.code === z.ZodIssueCode.invalid_string) {
    if (issue.validation === "email") {
      return { message: "Invalid email format" };
    }
  }
  return { message: ctx.defaultError };
};

z.setErrorMap(customErrorMap);
```

### Issue Codes

| Code | Description |
|------|-------------|
| `invalid_type` | Type mismatch |
| `invalid_literal` | Literal value mismatch |
| `custom` | Custom validation failed |
| `invalid_string` | String validation failed |
| `too_small` | Value too small |
| `too_big` | Value too big |
| `invalid_union` | Union validation failed |

## Coercion Configuration

### Global Coercion

```typescript
import { z } from "zod";

const schema = z.coerce.number()
```

### Selective Coercion

```typescript
import { z } from "zod";

const schema = z.object({
  age: z.coerce.number(),
  name: z.string(), // No coercion
})
```

## TypeScript Configuration

### Strict Mode

```json
{
  "compilerOptions": {
    "strict": true
  }
}
```

### Path Mapping

```json
{
  "compilerOptions": {
    "paths": {
      "@/*": ["./src/*"]
    }
  }
}
```

## Environment Variables

```typescript
import { z } from "zod";

const envSchema = z.object({
  DATABASE_URL: z.string().url(),
  API_KEY: z.string().min(32),
  PORT: z.coerce.number().default(3000),
})

const env = envSchema.parse(process.env)
```

## Default Values

```typescript
import { z } from "zod";

const schema = z.object({
  name: z.string().default("Anonymous"),
  age: z.number().default(0),
  active: z.boolean().default(true),
})
```

## Optional vs Nullable

```typescript
import { z } from "zod";

// Optional - undefined allowed
const optionalSchema = z.string().optional()

// Nullable - null allowed
const nullableSchema = z.string().nullable()

// Nullish - both allowed
const nullishSchema = z.string().nullish()
```
