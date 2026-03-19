---
name: zod
description: TypeScript-first schema validation with static type inference. Use for runtime validation, API contracts, form validation, and type-safe parsing.
goal: Use Zod following best practices
outcome: Type-safe validation with excellent developer experience
---

# Zod Library

## When to Use

Use this library when:

- Validating API request/response data
- Creating type-safe forms
- Parsing and validating external data
- Need runtime type checking with TypeScript
- Building domain models with validation
- Validating configuration and environment variables

## Quick Start

1. Install: `npm install zod`
2. Define schema with `z.object()`, `z.string()`, etc.
3. Parse data with `.parse()` or `.safeParse()`
4. Infer TypeScript type with `z.infer<typeof Schema>`

## Summary Table

| Category | File | Purpose | Condition |
|---|---|---|---|
| **Knowledge** | [Core Concepts](knowledge/core-concept.md) | Schema fundamentals | Understanding the basics |
| **Knowledge** | [Best Practices](knowledge/best-practices.md) | Validation patterns | Building schemas |
| **Rules** | [Setup](rules/1-setup.md) | Installation and imports | New project setup |
| **Rules** | [Primitives](rules/2-primitives.md) | Strings, numbers, booleans | Basic types |
| **Rules** | [Objects](rules/3-objects.md) | Object schemas | Complex types |
| **Rules** | [Arrays](rules/4-arrays.md) | Array validation | Collections |
| **Rules** | [Unions](rules/5-unions.md) | Union, intersection types | Advanced types |
| **Rules** | [Error Handling](rules/6-error-handling.md) | Parse and safeParse | Validation errors |
| **Rules** | [Type Inference](rules/7-type-inference.md) | z.infer and TypeScript | Type generation |

## Core Features

- **TypeScript First**: Full type inference from schemas
- **Composable**: Build complex schemas from simple ones
- **Errors**: Detailed, human-readable error messages
- **No Dependencies**: Lightweight and self-contained
- **Coercion**: Automatic type coercion support
- **Transforms**: Transform data during parsing

## Quick Reference

```bash
# Install
npm install zod

# Basic schema
import { z } from 'zod'

const UserSchema = z.object({
  name: z.string().min(1),
  age: z.number().positive(),
})

// Type inference
type User = z.infer<typeof UserSchema>

// Parsing
const user = UserSchema.parse(data)
const result = UserSchema.safeParse(data)
```

## Verification

1. Check Zod installation
2. Verify schema definitions
3. Test parsing and validation
4. Validate error messages
5. Check type inference
6. Ensure safeParse behavior

## References

- [Zod Documentation](https://zod.dev/)
- [GitHub Repository](https://github.com/colinhacks/zod)
