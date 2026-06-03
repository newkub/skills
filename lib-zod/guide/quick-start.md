# Quick Start

## Purpose

คู่มือเริ่มต้นใช้งาน Zod อย่างรวดเร็ว

## Scope

- Basic schema creation
- Parsing data
- Error handling
- Type inference
- Common patterns

## Step 1: Install Zod

```bash
npm install zod
```

## Step 2: Create Schema

```typescript
import * as z from "zod";

// Define a schema
const UserSchema = z.object({
  name: z.string().min(2),
  email: z.email(),
  age: z.number().min(0).optional(),
});
```

## Step 3: Parse Data

### Using safeParse (Recommended)

```typescript
const result = UserSchema.safeParse({
  name: "John",
  email: "john@example.com",
});

if (result.success) {
  console.log(result.data);
  // => { name: "John", email: "john@example.com", age: undefined }
} else {
  console.log(result.error.issues);
  // => validation errors
}
```

### Using parse (Throws on Error)

```typescript
try {
  const user = UserSchema.parse({
    name: "John",
    email: "john@example.com",
  });
  console.log(user);
} catch (error) {
  if (error instanceof z.ZodError) {
    console.log(error.issues);
  }
}
```

## Step 4: Get TypeScript Type

```typescript
type User = z.infer<typeof UserSchema>;

// User = {
//   name: string;
//   email: string;
//   age?: number;
// }
```

## Common Patterns

### Form Validation

```typescript
const ContactFormSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.email("Invalid email address"),
  message: z.string().min(10).max(1000),
});

// In your form handler
const result = ContactFormSchema.safeParse(formData);

if (!result.success) {
  // Return errors to form
  return { errors: result.error.flatten() };
}

// Process valid data
await sendEmail(result.data);
```

### API Request Validation

```typescript
const CreateUserSchema = z.object({
  name: z.string().min(2),
  email: z.email(),
  role: z.enum(["admin", "user"]).default("user"),
});

// In API route
app.post("/users", async (req, res) => {
  const result = CreateUserSchema.safeParse(req.body);

  if (!result.success) {
    return res.status(400).json({ errors: result.error.flatten() });
  }

  const user = await db.users.create(result.data);
  return res.status(201).json(user);
});
```

### Environment Variables

```typescript
const EnvSchema = z.object({
  DATABASE_URL: z.string().url(),
  PORT: z.coerce.number().default(3000),
  NODE_ENV: z.enum(["development", "production"]).default("development"),
});

const env = EnvSchema.parse(process.env);
```

### Configuration Schema

```typescript
const ConfigSchema = z.object({
  api: z.object({
    url: z.string().url(),
    timeout: z.number().default(5000),
    retries: z.number().min(0).max(3).default(3),
  }),
  features: z.object({
    darkMode: z.boolean().default(false),
    beta: z.boolean().default(false),
  }),
});

type Config = z.infer<typeof ConfigSchema>;
```

## Async Validation

```typescript
const uniqueEmailSchema = z.object({
  email: z.string().email().refine(async (email) => {
    const exists = await db.users.findUnique({ where: { email } });
    return !exists;
  }, { message: "Email already in use" }),
});

// Must use parseAsync
const result = await uniqueEmailSchema.parseAsync({
  email: "john@example.com",
});
```

## Coercion

```typescript
// Convert form data types
const FormDataSchema = z.object({
  age: z.coerce.number(),
  active: z.coerce.boolean(),
  count: z.coerce.number(),
});

FormDataSchema.parse({
  age: "25",        // string → number
  active: "true",   // string → boolean
  count: 100,       // stays number
});
```

## Error Formatting

```typescript
const result = schema.safeParse(data);

if (!result.success) {
  // Flatten all errors
  const errors = result.error.flatten();
  // { formErrors: [...], fieldErrors: { email: [...], name: [...] } }

  // Or get issues array
  const issues = result.error.issues;
  // [{ code: "...", path: [...], message: "..." }]
}
```

## Next Steps

- [Features](./features.md) - ดู features ทั้งหมด
- [Key Concept](./key-concept.md) - เข้าใจ concepts เพิ่มเติม
- [How It Works](./how-it-works.md) - เข้าใจการทำงานภายใน
- [Best Practices](./best-practices.md) - best practices สำหรับ production