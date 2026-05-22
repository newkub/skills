---
name: turborepo
description: Turborepo monorepo build system. Use for managing tasks, caching, filtering, and CI optimization in JavaScript/TypeScript monorepos.
---

# Turborepo

Build system for JavaScript/TypeScript monorepos. Turborepo caches task outputs and runs tasks in parallel based on dependency graph.

## When to Use

- Managing monorepos with multiple packages
- Coordinating tasks across projects
- Caching build outputs for faster builds
- Running tasks in parallel with dependency tracking
- Filtering tasks based on changed files

## Summary Table

| Category | File | Purpose |
|---|---|---|
| **Guide** | [Getting Started](guide/getting-started.md) | Installation, setup, basic usage |
| **Guide** | [Configuration](guide/configuration.md) | turbo.json, tasks, dependencies |
| **Guide** | [Caching](guide/caching.md) | How caching works, remote cache |
| **Reference** | [CLI Reference](reference/cli.md) | turbo run commands and flags |
| **Reference** | [Filtering](reference/filtering.md) | --filter, --affected patterns |
| **Examples** | [Monorepo Setup](examples/monorepo.md) | Complete monorepo configuration |

## Quick Start

```bash
# Install Turborepo
npm install -D turbo

# Initialize
npx turbo init

# Run tasks
turbo run build
turbo run build --affected
```

## Important Rules

### Package Tasks Over Root Tasks

**Prefer package tasks over Root Tasks.**

```json
// DO THIS: Scripts in each package
// apps/web/package.json
{ "scripts": { "build": "next build" } }

// turbo.json - register tasks
{
  "tasks": {
    "build": { "dependsOn": ["^build"] }
  }
}

// Root package.json - ONLY delegates
{
  "scripts": {
    "build": "turbo run build"
  }
}
```

### Use `turbo run` in Code

**Always use `turbo run` when the command is written into code:**

```json
// package.json - ALWAYS "turbo run"
{
  "scripts": {
    "build": "turbo run build"
  }
}
```

The shorthand `turbo <task>` is ONLY for one-off terminal commands.

## References

- [Turborepo Documentation](https://turbo.build)
- [GitHub Repository](https://github.com/vercel/turbo)
