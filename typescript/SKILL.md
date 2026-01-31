# TypeScript Best Practices

## When to Apply

This skill should be applied to any TypeScript project to ensure code quality, maintainability, and performance. It covers configuration, type safety, build optimizations, and runtime validation.

- When setting up a new TypeScript project.
- When working within a monorepo.
- When aiming to improve build times.
- When handling data from external sources.

## Rule Categories by Priority

| Priority | Category | Impact | Prefix |
| :--- | :--- | :--- | :--- |
| 1 | tsconfig | `CRITICAL` | `ts-config-` |
| 2 | Type Safety | `CRITICAL` | `ts-type-` |
| 3 | Runtime Validation | `HIGH` | `ts-runtime-` |
| 4 | Build-time Optimization | `MEDIUM` | `ts-build-` |

## Quick Reference

### 1. tsconfig (`CRITICAL`)

- `ts-config-project-references` - Use Project References (`references`) for better dependency management.
- `ts-config-compiler-options` - Enable strict compiler options to catch errors early.
- `ts-config-structure` - Organize `tsconfig` files for different environments.
- `ts-config-include-exclude` - Explicitly define which files to include and exclude.
- `ts-config-monorepo` - Configure each package in a monorepo as a composite project.

### 2. Type Safety (`CRITICAL`)

- `ts-type-safety-avoid-any` - Avoid using the `any` type.
- `ts-type-safety-type-guards` - Use type guards for safe type narrowing.

### 3. Runtime Validation (`HIGH`)

- `ts-runtime-validation-zod` - Validate data at runtime using schema libraries like Zod.

### 4. Build-time Optimization (`MEDIUM`)

- `ts-build-time-incremental` - Enable incremental builds to speed up compilation.
- `ts-build-time-transpilers` - Use modern, faster transpilers like `esbuild` or `swc`.

## How to Use

Each rule is detailed in a separate file within the `rules/` directory. These files provide the rationale, good and bad practices, and code examples.

- [`./rules/ts-config-project-references.md`](./rules/ts-config-project-references.md)
- [`./rules/ts-type-safety-avoid-any.md`](./rules/ts-type-safety-avoid-any.md)