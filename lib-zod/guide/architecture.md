# Architecture

## Purpose

อธิบายสถาปัตยกรรมภายในของ Zod library

## Scope

- Core Classes (ZodType, ZodError)
- Schema Hierarchy
- Parsing Pipeline
- Type System Integration
- Extensibility Points

## Core Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                      Zod Namespace                          │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│   z.object()     ──>  ZodObject                             │
│   z.string()     ──>  ZodString                             │
│   z.number()     ──>  ZodNumber                             │
│   z.array()      ──>  ZodArray                              │
│   z.union()      ──>  ZodUnion                              │
│   z.enum()       ──>  ZodEnum                               │
│   ...                                                      │
│                                                             │
│   Base: ZodType<T, O, D>                                   │
│         ├── T = output type                                 │
│         ├── O = input type (for coercion)                   │
│         └── D = def (internal data)                        │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

## Class Hierarchy

```
                    ZodType
                       │
        ┌──────────────┼──────────────┐
        │              │              │
   ZodOptional    ZodNullable    ZodEffects
        │              │              │
        └──────────────┼──────────────┘
                       │
        ┌──────────────┼──────────────┐
        │              │              │
   ZodString       ZodNumber      ZodBoolean
        │              │              │
        └──────────────┼──────────────┘
                       │
        ┌──────────────┼──────────────┐
        │              │              │
   ZodObject       ZodArray       ZodUnion
        │              │              │
        │         ZodTuple       ZodDiscriminatedUnion
        │              │
        │         ZodRecord
        │              │
        │         ZodMap
        │              │
        │         ZodSet
        │
   ZodLazy ──────────────────────────> Recursive schemas
```

## ZodType Core Interface

```typescript
abstract class ZodType<T, O = T, D = unknown> {
  // Parse input with type coercion
  parse(data: unknown, params?: Partial<ParseParams>): T;

  // Safe parse returns result object
  safeParse(data: unknown, params?: Partial<ParseParams>): SafeParseReturnType<T>;

  // Async variants
  parseAsync(data: unknown): Promise<T>;
  safeParseAsync(data: unknown): Promise<SafeParseReturnType<T>>;

  // Type inference
  static create(): ZodType;
  static createDefault(): ZodType;

  // Schema metadata
  description?: string;

  // Internal methods
  _parse(input: ParseInput): ParseOutput<T>;

  // Utility methods
  optional(): ZodOptional<this>;
  nullable(): ZodNullable<this>;
  nullish(): ZodNullable<ZodOptional<this>>;
  default(def: DefaultValue): ZodDefault<this>;
  catch(def: CatchValue): ZodCatch<this>;
  refine(check: Refinement<T>, error?: string): ZodEffects<this>;
  transform<U>(fn: TransformFn<T, U>): ZodEffects<this, U>;
  pipe<U>(schema: ZodType<U>): ZodEffects<this, U>;
}
```

## Parsing Pipeline

```
┌─────────────────────────────────────────────────────────────┐
│                        Input                                │
│                    (unknown type)                           │
└─────────────────────────────────────────────────────────────┘
                           │
                           ▼
┌─────────────────────────────────────────────────────────────┐
│                    _parse(input)                            │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│   1. Transform input (preprocess/coerce)                   │
│   2. Run validation checks                                  │
│   3. Apply refinements                                      │
│   4. Execute transforms                                     │
│   5. Handle defaults/catch                                  │
│                                                             │
└─────────────────────────────────────────────────────────────┘
                           │
              ┌────────────┴────────────┐
              │                         │
              ▼                         ▼
    ┌──────────────────┐       ┌──────────────────┐
    │   ParseSuccess    │       │   ParseFailure   │
    │   { data: T }     │       │   { error }      │
    └──────────────────┘       └──────────────────┘
```

## ZodError Structure

```typescript
class ZodError extends Error {
  issues: ZodIssue[];

  // Flatten errors by field
  flatten(): {
    formErrors: string[];
    fieldErrors: Record<string, string[]>;
  };

  // Group issues by path
  formErrors: string[];
  errors: ZodIssue[];
}

interface ZodIssue {
  code: string;           // "invalid_type" | "invalid_string" | ...
  path: (string | number)[];
  message: string;
  // ... additional context based on code
}
```

## Type System Integration

### Type Inference Flow

```typescript
// Schema definition
const UserSchema = z.object({
  name: z.string(),
  age: z.number().optional(),
});

// TypeScript automatically infers:
type User = z.infer<typeof UserSchema>;
// => { name: string; age?: number }

// Input type (before defaults/coercion)
type UserInput = z.input<typeof UserSchema>;

// Output type (after transforms/defaults)
type UserOutput = z.output<typeof UserSchema>;
```

### Type Mapping

```
   z.infer<T>
       │
       ▼
   TypeScript Type
       │
       ├── InferSelect ──> Database queries
       ├── InferInsert ──> Database mutations
       └── InferUpdate ──> Partial updates
```

## Extensibility Points

### Custom Schemas with refinements

```typescript
// Create reusable refinement
function isStrongPassword(schema: z.ZodString) {
  return schema.refine(
    (pwd) => /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/.test(pwd),
    { message: "Password must contain uppercase, lowercase, and number" }
  );
}

// Usage
const PasswordSchema = isStrongPassword(z.string().min(8));
```

### Custom Transform Schemas

```typescript
// Create transform that trims and lowercases
const trimmedLowercase = z.transform((val: unknown) => {
  if (typeof val !== "string") throw new Error("Not a string");
  return val.trim().toLowerCase();
});

// Pipe to validation
const UsernameSchema = z.string()
  .pipe(trimmedLowercase)
  .pipe(z.string().min(3).max(20));
```

### Custom Error Maps

```typescript
// Global error customization
z.setErrorMap((issue, ctx) => {
  if (issue.code === "too_small") {
    return { message: `${issue.path.join(".")} is too small` };
  }
  return { message: ctx.defaultError };
});
```

## Performance Characteristics

| Operation | Complexity | Notes |
|-----------|------------|-------|
| `parse()` | O(n) | Linear in data size |
| `safeParse()` | O(n) | Same as parse |
| `.refine()` | O(1) to O(n) | Depends on refinement |
| `.transform()` | O(1) to O(n) | Depends on transform |
| Type inference | O(1) | Compile-time only |

## Memory Model

```
┌─────────────────────────────────────────────────────────────┐
│                    Schema Instance                           │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│   ZodObject                                                 │
│   ├── _def: { shape: {...}, description?: string }          │
│   ├── _parse: function (inherited)                          │
│   └── methods: .pick(), .omit(), .extend(), etc.            │
│                                                             │
│   Note: Schemas are immutable                               │
│         Methods return new instances                        │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

## Summary

| Component | Purpose |
|-----------|---------|
| **ZodType** | Base class for all schemas |
| **ZodError** | Structured validation errors |
| **safeParse** | Non-throwing parsing |
| **Type inference** | Compile-time type safety |
| **Immutable API** | No side effects |
| **Chainable methods** | Declarative schema building |