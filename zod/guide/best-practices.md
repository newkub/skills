# Best Practices

## ภาพรวม

Best practices สำหรับการใช้งาน Zod ใน production

## Schema Organization

### Separate Schema Files

```typescript
// schemas/user.ts
import { z } from "zod";

export const userSchema = z.object({
  id: z.string().uuid(),
  username: z.string().min(3).max(20),
  email: z.string().email(),
  createdAt: z.date(),
});

export type User = z.infer<typeof userSchema>;
```

### Reuse Schemas

```typescript
import { z } from "zod";

const baseSchema = z.object({
  id: z.string().uuid(),
  createdAt: z.date(),
});

const userSchema = baseSchema.extend({
  username: z.string(),
  email: z.string().email(),
});
```

### Schema Composition

```typescript
import { z } from "zod";

const passwordSchema = z.string()
  .min(8)
  .regex(/[A-Z]/, "Must contain uppercase")
  .regex(/[0-9]/, "Must contain number");

const userSchema = z.object({
  username: z.string().min(3),
  password: passwordSchema,
});
```

## Error Handling

### Use safeParse for User Input

```typescript
import { z } from "zod";

const schema = z.object({
  email: z.string().email(),
});

function handleFormSubmit(data: unknown) {
  const result = schema.safeParse(data);

  if (!result.success) {
    // Return formatted errors to user
    return { errors: result.error.flatten() };
  }

  // Process valid data
  return { data: result.data };
}
```

### Custom Error Messages

```typescript
import { z } from "zod";

const schema = z.object({
  email: z.string().email("Invalid email format"),
  password: z.string().min(8, "Password must be at least 8 characters"),
});
```

### Error Formatting

```typescript
import { z } from "zod";

function formatErrors(error: z.ZodError) {
  return error.errors.map((err) => ({
    field: err.path.join("."),
    message: err.message,
  }));
}
```

## Validation

### Validate Early

```typescript
import { z } from "zod";

const schema = z.object({
  email: z.string().email(),
});

// Validate at API boundary
app.post("/users", (req, res) => {
  const user = schema.parse(req.body);
  // user is guaranteed to be valid
});
```

### Use Coercion for API Input

```typescript
import { z } from "zod";

const schema = z.object({
  age: z.coerce.number(), // Convert string to number
  active: z.coerce.boolean(), // Convert string to boolean
});
```

### Strict Mode for Sensitive Data

```typescript
import { z } from "zod";

const schema = z.object({
  username: z.string(),
}).strict() // Reject unknown fields
```

## Type Safety

### Always Infer Types

```typescript
import { z } from "zod";

const schema = z.object({
  name: z.string(),
});

// ✅ Good - inferred type
type Data = z.infer<typeof schema>;

// ❌ Bad - manual type
type Data = { name: string };
```

### Use Input/Output Types

```typescript
import { z } from "zod";

const schema = z.string().transform((val) => val.toUpperCase());

type Input = z.input<typeof schema>;  // string
type Output = z.output<typeof schema>; // string (uppercase)
```

## Performance

### Cache Schemas

```typescript
import { z } from "zod";

// ✅ Good - defined once
const schema = z.object({ name: z.string() });

function validate(data: unknown) {
  return schema.parse(data);
}

// ❌ Bad - recreated every time
function validate(data: unknown) {
  const schema = z.object({ name: z.string() });
  return schema.parse(data);
}
```

### Use Lazy for Recursive Schemas

```typescript
import { z } from "zod";

const categorySchema = z.object({
  name: z.string(),
  subcategories: z.array(z.lazy(() => categorySchema)),
});
```

## Testing

### Test Validation Logic

```typescript
import { z } from "zod";
import { describe, it, expect } from "vitest";

const schema = z.string().email();

describe("email validation", () => {
  it("validates correct emails", () => {
    expect(() => schema.parse("test@example.com")).not.toThrow();
  });

  it("rejects invalid emails", () => {
    expect(() => schema.parse("invalid")).toThrow();
  });
});
```

### Test Type Inference

```typescript
import { z } from "zod";
import { expectTypeOf } from "vitest";

const schema = z.object({ name: z.string() });

type User = z.infer<typeof schema>;

expectTypeOf<User>().toEqualTypeOf<{ name: string }>();
```

## Security

### Sanitize User Input

```typescript
import { z } from "zod";

const schema = z.object({
  username: z.string().transform((val) => val.trim()),
  email: z.string().email().transform((val) => val.toLowerCase()),
});
```

### Validate Before Processing

```typescript
import { z } from "zod";

const schema = z.object({
  query: z.string().max(100),
});

function search(data: unknown) {
  const { query } = schema.parse(data);
  // query is guaranteed to be safe
  return database.search(query);
}
```

## Documentation

### Document Schemas

```typescript
import { z } from "zod";

/**
 * User schema for API validation
 * @example
 * const user = userSchema.parse({
 *   username: "john",
 *   email: "john@example.com",
 * });
 */
export const userSchema = z.object({
  username: z.string().min(3).max(20),
  email: z.string().email(),
});
```

### Use JSDoc for Types

```typescript
import { z } from "zod";

const userSchema = z.object({
  username: z.string(),
});

/**
 * User data type
 */
export type User = z.infer<typeof userSchema>;
```
