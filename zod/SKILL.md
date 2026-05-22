---
name: zod
description: TypeScript-first schema validation with static type inference. Use for runtime validation, API contracts, form validation, and type-safe parsing.
---

# Zod Library

TypeScript-first validation library with static type inference.

## When to Use

- Validating API request/response data
- Creating type-safe forms
- Parsing and validating external data
- Runtime type checking with TypeScript
- Building domain models with validation
- Validating configuration and environment variables

## Summary Table

| Category | File | Purpose |
|---|---|---|
| **Guide** | [Getting Started](guide/getting-started.md) | Installation, basic usage, type inference |
| **Guide** | [Primitives](guide/primitives.md) | String, number, boolean, optional, nullable |
| **Reference** | [API Reference](reference/api.md) | Core methods, transforms, refinements |
| **Examples** | [Basic Validation](examples/basic-validation.md) | Object, nested, array, union validation |

## Quick Start

```bash
npm install zod
```

```typescript
import { z } from 'zod'

const UserSchema = z.object({
  name: z.string().min(1),
  age: z.number().positive(),
})

// Parse with validation
const user = UserSchema.parse({ name: "John", age: 30 })

// Safe parse (no throw)
const result = UserSchema.safeParse({ name: "John", age: -1 })
if (!result.success) {
  console.error(result.error)
}

// Type inference
type User = z.infer<typeof UserSchema>
```

## Core Features

- **TypeScript First**: Full type inference from schemas
- **Composable**: Build complex schemas from simple ones
- **Errors**: Detailed, human-readable error messages
- **No Dependencies**: Lightweight (2kb gzipped)
- **Immutable API**: Methods return new instances
- **JSON Schema**: Built-in conversion support

## References

- [Zod Documentation](https://zod.dev/)
- [GitHub Repository](https://github.com/colinhacks/zod)
