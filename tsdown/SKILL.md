---
name: tsdown
description: Bundle TypeScript and JavaScript libraries with blazing-fast speed powered by Rolldown. Use when building libraries, generating type declarations, or migrating from tsup.
---

# tsdown

Blazing-fast bundler for TypeScript/JavaScript libraries powered by Rolldown and Oxc.

## When to Use

- Building TypeScript/JavaScript libraries for npm
- Generating TypeScript declaration files (.d.ts)
- Bundling for multiple formats (ESM, CJS, IIFE, UMD)
- Optimizing bundles with tree shaking and minification
- Migrating from tsup with minimal changes

## Summary Table

| Category | File | Purpose |
|---|---|---|
| **Guide** | [Getting Started](guide/getting-started.md) | Installation, first bundle, CLI basics |
| **Guide** | [Configuration](guide/configuration.md) | Config file formats, options |
| **Reference** | [Build Options](reference/build-options.md) | Entry points, formats, outputs |
| **Reference** | [Dependencies](reference/dependencies.md) | Bundle strategies, externalization |
| **Examples** | [Basic Library](examples/basic-library.md) | Simple library configuration |

## Quick Start

```bash
# Install
pnpm add -D tsdown

# Basic usage
npx tsdown

# With config
npx tsdown --config tsdown.config.ts

# Watch mode
npx tsdown --watch
```

## Basic Configuration

```ts
import { defineConfig } from 'tsdown'

export default defineConfig({
  entry: ['./src/index.ts'],
  format: ['esm', 'cjs'],
  dts: true,
  clean: true,
})
```

## Best Practices

1. Always generate type declarations: `{ dts: true }`
2. Externalize dependencies: `{ deps: { neverBundle: [/^react/] } }`
3. Use tree shaking: `{ treeshake: true }`
4. Enable minification for production: `{ minify: true }`

## References

- [tsdown Documentation](https://tsdown.dev)
- [GitHub Repository](https://github.com/rolldown/tsdown)
- [Rolldown](https://rolldown.rs)
