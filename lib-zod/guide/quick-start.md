# Quick Start

## ภาพรวม

เริ่มต้นใช้งาน Zod ใน 5 นาที

## Step 1: Installation

```bash
bun add zod
```

## Step 2: Create First Schema

```typescript
import { z } from "zod";

// Define a simple schema
const userSchema = z.object({
  username: z.string(),
  age: z.number(),
});
```

## Step 3: Validate Data

```typescript
import { z } from "zod";

const userSchema = z.object({
  username: z.string(),
  age: z.number(),
});

// Parse - throws if invalid
const user = userSchema.parse({
  username: "john",
  age: 30,
});
console.log(user); // { username: "john", age: 30 }
```

## Step 4: Handle Errors

```typescript
import { z } from "zod";

const userSchema = z.object({
  username: z.string(),
  age: z.number(),
});

const result = userSchema.safeParse({
  username: "john",
  age: "invalid", // Wrong type
});

if (!result.success) {
  console.log(result.error.errors);
  // [{ path: ["age"], message: "Expected number, received string" }]
}
```

## Step 5: Infer TypeScript Types

```typescript
import { z } from "zod";

const userSchema = z.object({
  username: z.string(),
  age: z.number(),
});

// Infer type from schema
type User = z.infer<typeof userSchema>;
// type User = { username: string; age: number; }

const user: User = {
  username: "john",
  age: 30,
};
```

## Complete Example

```typescript
import { z } from "zod";

// Define schema
const userSchema = z.object({
  username: z.string().min(3).max(20),
  email: z.string().email(),
  age: z.number().min(18).max(120),
});

// Infer type
type User = z.infer<typeof userSchema>;

// Validate function
function validateUser(data: unknown): User {
  return userSchema.parse(data);
}

// Usage
const validUser = validateUser({
  username: "john",
  email: "john@example.com",
  age: 30,
});

console.log(validUser);
```

## Common Patterns

### Optional Fields

```typescript
import { z } from "zod";

const schema = z.object({
  name: z.string(),
  nickname: z.string().optional(),
});
```

### Default Values

```typescript
import { z } from "zod";

const schema = z.object({
  name: z.string(),
  role: z.string().default("user"),
});
```

### Nested Objects

```typescript
import { z } from "zod";

const schema = z.object({
  user: z.object({
    name: z.string(),
    email: z.string().email(),
  }),
});
```

### Arrays

```typescript
import { z } from "zod";

const schema = z.object({
  tags: z.array(z.string()),
});
```

## Next Steps

- ดู `best-practices.md` สำหรับ best practices
- ดู `integration.md` สำหรับ integration กับ frameworks
- ดู `features.md` สำหรับ features ทั้งหมด
