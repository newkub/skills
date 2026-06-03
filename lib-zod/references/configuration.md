# Configuration

## Purpose

Configuration options for Zod schemas and global settings.

## TypeScript Setup

```json
{
  "compilerOptions": {
    "strict": true,
    "target": "ES2022",
    "module": "ESNext",
    "moduleResolution": "Bundler",
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true
  }
}
```

## Error Map Configuration

### Custom Error Map

```typescript
const customErrorMap: z.ZodErrorMap = (issue, ctx) => {
  switch (issue.code) {
    case "too_small":
      return { message: `Too short! Minimum: ${issue.minimum}` };
    case "too_big":
      return { message: `Too big! Maximum: ${issue.maximum}` };
    case "invalid_string":
      return { message: `Invalid ${issue.validation}` };
    case "custom":
      return { message: issue.message || "Error" };
    default:
      return { message: ctx.defaultError };
  }
};

z.setErrorMap(customErrorMap);
```

### Reset to Default

```typescript
z.setErrorMap(z.defaultErrorMap);
```

## Schema Configuration

### Custom Error Messages

```typescript
const schema = z.string().min(5, { message: "Too short" });
const schema = z.number().min(0, { message: "Must be positive" });
const schema = z.email({ message: "Invalid email" });
```

### Default Values

```typescript
const schema = z.object({
  name: z.string(),
  role: z.string().default("user"),
  createdAt: z.date().default(() => new Date()),
});
```

### Prefault (Pre-parse Default)

```typescript
// Parses default through validation
const schema = z.string().trim().toUpperCase().prefault("  test  ");
schema.parse(undefined); // => "TEST"
```

### Catch Values

```typescript
const schema = z.number().catch(0);
schema.parse("invalid"); // => 0

const schema = z.number().catch(() => {
  console.warn("Error");
  return -1;
});
```

## Coercion Configuration

### String Coercion

```typescript
const schema = z.coerce.string();
schema.parse(42);   // => "42"
schema.parse(true); // => "true"
```

### Number Coercion

```typescript
const schema = z.coerce.number();
schema.parse("42");   // => 42
schema.parse(true);   // => 1
```

### Boolean Coercion

```typescript
const schema = z.coerce.boolean();
schema.parse("true"); // => true
schema.parse("0");     // => false
```

### Typed Coercion

```typescript
const schema = z.coerce.number<number>();
type Input = z.input<typeof schema>; // => number
```

## JSON Schema Configuration

### Basic Export

```typescript
const jsonSchema = schema.toJSONSchema();
```

### With Options

```typescript
const jsonSchema = z.toJSONSchema(schema, {
  target: "draft-7",
  strict: true,
  definitions: { CustomType: otherSchema.toJSONSchema() },
});
```

## Metadata (Zod v4)

```typescript
const schema = z.object({
  name: z.string().meta({
    description: "User's full name",
    example: "John Doe",
  }),
});
```

## Environment Variables Schema

```typescript
const envSchema = z.object({
  NODE_ENV: z.enum(["development", "production", "test"])
    .default("development"),
  PORT: z.coerce.number().default(3000),
  DATABASE_URL: z.string().url(),
  API_KEY: z.string().min(32),
});

const env = envSchema.parse(process.env);
```

## Type Inference Configuration

```typescript
// Output type
type User = z.infer<typeof UserSchema>;

// Input type (before transforms)
type UserInput = z.input<typeof UserSchema>;

// Output type (after transforms)
type UserOutput = z.output<typeof UserSchema>;
```

## Global Settings

| Setting | Method | Description |
|---------|--------|-------------|
| Error map | `z.setErrorMap(fn)` | Global error formatting |
| Default error | `z.defaultErrorMap` | Reset to default |

## Package.json Dependencies

```json
{
  "dependencies": {
    "zod": "^4.0.0"
  }
}
```