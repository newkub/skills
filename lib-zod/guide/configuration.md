# Configuration

## Purpose

คู่มือการตั้งค่า Zod schemas สำหรับ validation, error messages, coercion และ customization

## Scope

- Custom error messages
- Error maps
- Coercion configuration
- Default values
- Schema metadata
- JSON Schema options

## Custom Error Messages

### Per-Scheme Error

```typescript
const schema = z.string().min(5, {
  message: "String must be at least 5 characters",
});
```

### Global Error Map

```typescript
const customErrorMap: z.ZodErrorMap = (issue, ctx) => {
  switch (issue.code) {
    case "too_small":
      return { message: `Too short! Minimum is ${issue.minimum}` };
    case "too_big":
      return { message: `Too long! Maximum is ${issue.maximum}` };
    case "invalid_string":
      return { message: `Invalid format for ${issue.validation}` };
    case "custom":
      return { message: issue.message || "Custom error" };
    default:
      return { message: ctx.defaultError };
  }
};

z.setErrorMap(customErrorMap);
```

### Issue-Specific Error

```typescript
const schema = z.object({
  email: z.string().email({
    message: "Please enter a valid email address",
  }),
  age: z.number().min(18, {
    message: "You must be at least 18 years old",
  }),
  name: z.string().min(2, {
    message: "Name must be at least 2 characters",
  }),
});
```

## Error Map Function

```typescript
const myErrorMap: z.ZodErrorMap = (issue, ctx) => {
  switch (issue.code) {
    case z.ZodErrorCode.too_small:
      if (issue.type === "string") {
        return { message: `String is too short. Minimum ${issue.minimum}` };
      }
      return { message: "Value is too small" };
    case z.ZodErrorCode.too_big:
      return { message: "Value is too big" };
    case z.ZodErrorCode.invalid_string:
      return { message: `Invalid ${issue.validation}` };
    case z.ZodErrorCode.custom:
      return { message: `Custom error: ${issue.message}` };
    default:
      return { message: ctx.defaultError };
  }
};

z.setErrorMap(myErrorMap);
```

## Coercion Configuration

### String Coercion

```typescript
const schema = z.coerce.string();
schema.parse(42);     // => "42"
schema.parse(true);   // => "true"
schema.parse(null);   // => "null"
```

### Number Coercion

```typescript
const schema = z.coerce.number();
schema.parse("42");   // => 42
schema.parse(true);   // => 1
schema.parse(false);  // => 0
```

### Boolean Coercion

```typescript
const schema = z.coerce.boolean();
schema.parse("true");   // => true
schema.parse("0");      // => false
schema.parse(1);        // => true
```

### With Generic Type

```typescript
// Input type ชัดเจนขึ้น
const schema = z.coerce.number<number>();
type Input = z.input<typeof schema>; // => number
```

## Default Values

### Static Default

```typescript
const schema = z.object({
  name: z.string(),
  role: z.string().default("user"),
});

schema.parse({ name: "John" });
// => { name: "John", role: "user" }
```

### Function Default (re-evaluated)

```typescript
const schema = z.object({
  createdAt: z.date().default(() => new Date()),
  id: z.string().default(() => crypto.randomUUID()),
});
```

### Prefault (Pre-parse Default)

```typescript
// Default แต่ยังผ่าน validation
const schema = z.string().trim().toUpperCase().prefault("  tuna  ");
schema.parse(undefined);
// => "TUNA"
```

## Catch Values

### Static Catch

```typescript
const schema = z.number().catch(0);
schema.parse("invalid"); // => 0
```

### Function Catch

```typescript
const schema = z.number().catch(() => {
  console.warn("Validation failed, using default");
  return -1;
});
```

## Schema Metadata (Zod v4)

```typescript
const schema = z.object({
  id: z.string().meta({
    description: "Unique identifier",
    example: "123e4567-e89b-12d3-a456-426614174000",
  }),
});

// Access metadata
const meta = schema.shape.id.meta;
// { description: "Unique identifier", example: "..." }
```

## JSON Schema Options

### Basic Conversion

```typescript
const schema = z.object({
  name: z.string(),
  age: z.number(),
});

const jsonSchema = schema.toJSONSchema();
// => JSON Schema object
```

### With Options

```typescript
const jsonSchema = z.toJSONSchema(schema, {
  target: "draft-7",        // or "draft-6", "draft-4"
  strict: true,              // Required fields only
  definitions: {},          // Add definitions
});
```

## Type Inference Configuration

```typescript
// Infer output type (default)
type User = z.infer<typeof UserSchema>;

// Infer input type (before transforms/defaults)
type UserInput = z.input<typeof UserSchema>;

// Infer output type (after transforms/defaults)
type UserOutput = z.output<typeof UserSchema>;
```

## Custom String Formats

```typescript
const slugSchema = z.stringFormat("slug", (val) => {
  return /^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(val);
});

slugSchema.parse("my-slug"); // => "my-slug"
slugSchema.parse("Invalid Slug"); // => throws
```

## Environment Variable Schema

```typescript
const envSchema = z.object({
  NODE_ENV: z.enum(["development", "production", "test"]).default("development"),
  PORT: z.coerce.number().default(3000),
  DATABASE_URL: z.string().url(),
  API_KEY: z.string().min(32),
});

const env = envSchema.parse(process.env);
```

## Summary

| Configuration | Method | Use Case |
|---------------|--------|----------|
| Error message | `.min(val, { message })` | Custom validation messages |
| Error map | `z.setErrorMap()` | Global error handling |
| Coercion | `z.coerce.*` | Transform before validation |
| Default | `.default(value)` | Fallback for undefined |
| Prefault | `.prefault(value)` | Parse before defaults |
| Catch | `.catch(value)` | Fallback on error |
| Metadata | `.meta({...})` | Schema documentation (v4) |
| JSON Schema | `.toJSONSchema()` | Export schema definitions |