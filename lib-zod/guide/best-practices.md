# Best Practices

## Purpose

แนวทางปฏิบัติที่ดีที่สุดสำหรับการใช้งาน Zod ใน production

## Scope

- Schema organization
- Error handling
- Performance
- Type safety
- Testing

## Schema Organization

### Centralize Schemas

```typescript
// src/schemas/index.ts
export * from "./user";
export * from "./post";
export * from "./common";

// src/schemas/user.ts
import { z } from "zod";

export const UserSchema = z.object({
  id: z.string().uuid(),
  name: z.string().min(2),
  email: z.email(),
  role: z.enum(["admin", "user"]),
  createdAt: z.date(),
});

export const CreateUserSchema = UserSchema.omit({ id: true, createdAt: true });
export const UpdateUserSchema = UserSchema.partial().omit({ id: true });
```

### Separate Input/Output Schemas

```typescript
// Input (from client/API)
export const CreatePostInputSchema = z.object({
  title: z.string().min(1).max(200),
  content: z.string().min(1),
  tags: z.array(z.string()).max(5),
});

// Output (with defaults)
export const PostSchema = z.object({
  id: z.string().uuid(),
  title: z.string(),
  content: z.string(),
  tags: z.array(z.string()),
  slug: z.string(),
  views: z.number().default(0),
  publishedAt: z.date().optional(),
  createdAt: z.date(),
  updatedAt: z.date(),
});
```

## Error Handling

### Always Use safeParse

```typescript
// ❌ Bad - throws on error
const user = UserSchema.parse(data);

// ✅ Good - returns result object
const result = UserSchema.safeParse(data);
if (!result.success) {
  return { errors: result.error.flatten() };
}
return result.data;
```

### Create Reusable Error Handlers

```typescript
import { z } from "zod";

export function validateSchema<T extends z.ZodSchema>(
  schema: T,
  data: unknown
) {
  const result = schema.safeParse(data);

  if (!result.success) {
    return {
      success: false as const,
      error: result.error.flatten(),
    };
  }

  return {
    success: true as const,
    data: result.data,
  };
}

// Usage
const { success, data, error } = validateSchema(UserSchema, req.body);
```

### Custom Error Messages

```typescript
const schema = z.object({
  email: z.string().email({
    message: "Please enter a valid email address",
  }),
  password: z.string()
    .min(8, { message: "Password must be at least 8 characters" })
    .regex(/[A-Z]/, { message: "Password must contain at least one uppercase letter" })
    .regex(/[0-9]/, { message: "Password must contain at least one number" }),
});
```

## Performance

### Lazy Schema for Recursive Types

```typescript
// ❌ Bad - potential circular reference
const CommentSchema = z.object({
  id: z.string(),
  text: z.string(),
  replies: z.array(CommentSchema), // Error!
});

// ✅ Good - use lazy
const CommentSchema: z.ZodType<Comment> = z.lazy(() =>
  z.object({
    id: z.string(),
    text: z.string(),
    replies: z.array(CommentSchema),
  })
);
```

### Use Coercion Early

```typescript
// ❌ Bad - multiple parse attempts
const result = MySchema.safeParse({
  age: Number(req.body.age),
  active: req.body.active === "true",
});

// ✅ Good - use coercion
const FormSchema = z.object({
  age: z.coerce.number(),
  active: z.coerce.boolean(),
});
const result = FormSchema.safeParse(req.body);
```

### Avoid Unnecessary Refinements

```typescript
// ❌ Bad - refine is slower
const schema = z.string().refine(
  (val) => val.length > 0,
  { message: "Required" }
);

// ✅ Good - use built-in methods
const schema = z.string().min(1, { message: "Required" });
```

## Type Safety

### Enable Strict Mode

```json
// tsconfig.json
{
  "compilerOptions": {
    "strict": true,
    "noUncheckedIndexedAccess": true
  }
}
```

### Never Use `any`

```typescript
// ❌ Bad
const data: any = response;

// ✅ Good
const data = response as z.infer<typeof ResponseSchema>;
```

### Use Type Inference

```typescript
// ❌ Bad - duplicate type
interface User {
  name: string;
  email: string;
}
const UserSchema = z.object({ name: z.string(), email: z.string() });

// ✅ Good - infer from schema
const UserSchema = z.object({ name: z.string(), email: z.string() });
type User = z.infer<typeof UserSchema>;
```

## Testing

### Unit Test Schemas

```typescript
import { z } from "zod";
import { describe, it, expect } from "vitest";

describe("UserSchema", () => {
  it("should accept valid user", () => {
    const result = UserSchema.safeParse({
      id: "123e4567-e89b-12d3-a456-426614174000",
      name: "John Doe",
      email: "john@example.com",
      role: "user",
    });
    expect(result.success).toBe(true);
  });

  it("should reject invalid email", () => {
    const result = UserSchema.safeParse({
      id: "123e4567-e89b-12d3-a456-426614174000",
      name: "John Doe",
      email: "not-an-email",
      role: "user",
    });
    expect(result.success).toBe(false);
    expect(result.error?.issues[0].path).toEqual(["email"]);
  });

  it("should apply default values", () => {
    const result = CreateUserSchema.safeParse({
      name: "John",
      email: "john@example.com",
    });
    expect(result.success && result.data.role).toBe("user");
  });
});
```

### Test Edge Cases

```typescript
describe("StringSchema", () => {
  it("should handle empty string", () => {
    const result = z.string().min(1).safeParse("");
    expect(result.success).toBe(false);
  });

  it("should handle whitespace only", () => {
    const result = z.string().trim().min(1).safeParse("   ");
    expect(result.success).toBe(true);
  });

  it("should handle unicode", () => {
    const result = z.string().min(1).safeParse("สวัสดี");
    expect(result.success).toBe(true);
  });
});
```

## Security

### Validate All External Input

```typescript
// ❌ Bad - trust external input
const user = db.getUser(req.params.id);

// ✅ Good - validate first
const idResult = z.string().uuid().safeParse(req.params.id);
if (!idResult.success) {
  return res.status(400).json({ error: "Invalid ID" });
}
const user = db.getUser(idResult.data);
```

### Sanitize Before Validation

```typescript
const UserInputSchema = z.object({
  name: z.string().trim().min(1).max(100),
  bio: z.string().trim().max(500).optional(),
});

// Trim before validate
const result = UserInputSchema.safeParse({
  name: `  ${req.body.name}  `,
  bio: req.body.bio,
});
```

## Common Pitfalls

| Pitfall | Solution |
|---------|----------|
| Using `.parse()` in production | Use `.safeParse()` |
| Not enabling `strict` mode | Enable in tsconfig.json |
| Duplicate type definitions | Use `z.infer<>` |
| Unsafe `any` types | Use schema inference |
| Not handling errors | Always check `.success` |
| Over-complex refinements | Use built-in methods first |