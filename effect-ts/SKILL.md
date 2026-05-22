---
name: effect-ts
description: Powerful TypeScript library for building complex, synchronous and asynchronous programs. Use for functional programming with effect system, structured concurrency, and type-safe error handling.
goal: Use Effect-TS following best practices
outcome: Robust, type-safe, and composable programs with functional programming
---

# Effect-TS Library

## When to Use

Use this library when:

- Building complex asynchronous workflows
- Need structured concurrency and fiber-based parallelism
- Want type-safe error handling without try/catch
- Building composable, testable programs
- Need resource management with scopes
- Want functional programming patterns in TypeScript

## Quick Start

1. Install: `npm install effect`
2. Create Effects with `Effect.succeed`, `Effect.fail`
3. Use `pipe` or `gen` for composition
4. Run with `Effect.runPromise`

## Summary Table

| Category | File | Purpose | Condition |
|---|---|---|---|
| **Knowledge** | [Core Concepts](knowledge/core-concept.md) | Effect system fundamentals | Understanding the basics |
| **Knowledge** | [Best Practices](knowledge/best-practices.md) | Functional patterns | Building with Effect |
| **Rules** | [Setup](rules/1-setup.md) | Installation and imports | New project setup |
| **Rules** | [Effects](rules/2-effects.md) | Creating and composing | Core concepts |
| **Rules** | [Error Handling](rules/3-error-handling.md) | Typed errors and catchAll | Error management |
| **Rules** | [Concurrency](rules/4-concurrency.md) | Fibers, parallelism, racing | Async operations |
| **Rules** | [Resources](rules/5-resources.md) | Scope, acquireRelease | Resource management |
| **Rules** | [Services](rules/6-services.md) | Context and layers | Dependency injection |
| **Rules** | [Testing](rules/7-testing.md) | TestClock, test layers | Effect testing |

## Core Features

- **Effect System**: Explicit tracking of effects (async, errors)
- **Structured Concurrency**: Fiber-based parallelism with proper cleanup
- **Type-Safe Errors**: Errors as values, not exceptions
- **Resource Safety**: Automatic resource cleanup with scopes
- **Composability**: Powerful combinators for building programs
- **Observability**: Built-in logging, metrics, tracing

## Quick Reference

```bash
# Install
npm install effect

# Basic Effect
import { Effect } from 'effect'

const program = Effect.succeed(42)
  .pipe(Effect.map(x => x * 2))

// Run
Effect.runPromise(program) // 84

// With error handling
const program = Effect.gen(function* () {
  const user = yield* fetchUser(id)
  yield* Effect.log(`Fetched ${user.name}`)
  return user
})
```

## Verification

1. Check Effect installation
2. Verify Effect composition
3. Test error handling
4. Validate concurrency
5. Check resource safety
6. Ensure observability features work

## References

- [Effect Documentation](https://effect.website/)
- [Effect GitHub](https://github.com/Effect-TS/effect)
- [Effect Examples](https://github.com/Effect-TS/examples)
