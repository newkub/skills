# Zod API Reference

## Core Methods

### parse()
Parses and validates data. Throws on error.

```typescript
const data = schema.parse(input)
```

### safeParse()
Parses and validates data. Returns result object.

```typescript
const result = schema.safeParse(input)
if (result.success) {
  console.log(result.data)
} else {
  console.log(result.error)
}
```

### infer()
Infers TypeScript type from schema.

```typescript
type User = z.infer<typeof UserSchema>
```

## Common Methods

### .transform()
Transforms data during parsing.

```typescript
z.string().transform((val) => val.toUpperCase())
```

### .refine()
Custom validation logic.

```typescript
z.string().refine((val) => val.length > 5, {
  message: "Must be longer than 5 characters",
})
```

### .superRefine()
Advanced custom validation with context.

```typescript
z.object({
  password: z.string(),
  confirmPassword: z.string(),
}).superRefine((data, ctx) => {
  if (data.password !== data.confirmPassword) {
    ctx.addIssue({
      code: z.ZodIssueCode.custom,
      message: "Passwords don't match",
    })
  }
})
```

## Utility Types

### z.infer()
Infer TypeScript type from schema.

### z.input()
Extract input type of schema.

### z.output()
Extract output type of schema.
