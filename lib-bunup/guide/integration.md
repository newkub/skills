# Integration

การรวม Bunup กับเครื่องมืออื่นๆ

## Framework Integration

### React

```typescript
// bunup.config.ts
import { defineConfig } from "bunup";

export default defineConfig({
  entry: "src/index.ts",
  format: ["esm", "cjs"],
  jsx: {
    runtime: "automatic",
    importSource: "react",
  },
  external: ["react", "react-dom"],
});
```

### Preact

```typescript
export default defineConfig({
  jsx: {
    runtime: "automatic",
    importSource: "preact",
  },
  external: ["preact", "preact/hooks"],
});
```

### Solid.js

```typescript
export default defineConfig({
  jsx: {
    runtime: "automatic",
    importSource: "solid-js",
    factory: "solid-js/h",
    fragment: "solid-js/Fragment",
  },
});
```

## Tool Integration

### Biome

```json
// biome.json
{
  "$schema": "https://biomejs.dev/schemas/1.9.0/schema.json",
  "organizeImports": {
    "enabled": true
  },
  "linter": {
    "enabled": true,
    "rules": {
      "recommended": true
    }
  }
}
```

```json
// package.json
{
  "scripts": {
    "lint": "biome check .",
    "lint:fix": "biome check --write ."
  }
}
```

### Vitest

```typescript
// vitest.config.ts
import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    environment: "node",
    globals: true,
  },
});
```

### TypeScript

```json
// tsconfig.json
{
  "compilerOptions": {
    "target": "ES2022",
    "module": "ESNext",
    "moduleResolution": "bundler",
    "declaration": true,
    "isolatedDeclarations": true,
    "strict": true,
    "skipLibCheck": true
  }
}
```

## CI/CD Integration

### GitHub Actions

```yaml
# .github/workflows/ci.yml
name: CI

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      
      - name: Setup Bun
        uses: oven-sh/setup-bun@v2
        with:
          bun-version: latest
      
      - name: Install dependencies
        run: bun install
      
      - name: Type check
        run: bun run type-check
      
      - name: Lint
        run: bun run lint
      
      - name: Test
        run: bun run test
      
      - name: Build
        run: bun run build
```

### Release Workflow

```yaml
# .github/workflows/release.yml
name: Release

on:
  push:
    tags:
      - "v*"

jobs:
  release:
    runs-on: ubuntu-latest
    permissions:
      contents: write
    steps:
      - uses: actions/checkout@v4
      - uses: oven-sh/setup-bun@v2
      
      - name: Build and Publish
        run: bun run build && bun publish --access public
        env:
          NODE_AUTH_TOKEN: ${{ secrets.NPM_TOKEN }}
```

## Monorepo Integration

### Turborepo

```json
// packages/my-lib/package.json
{
  "name": "@my-org/my-lib",
  "main": "./dist/index.js",
  "module": "./dist/index.js",
  "types": "./dist/index.d.ts",
  "exports": {
    ".": {
      "import": "./dist/index.js",
      "types": "./dist/index.d.ts"
    }
  }
}
```

### pnpm Workspaces

```yaml
# pnpm-workspace.yaml
packages:
  - "packages/*"
```

## Editor Integration

### VS Code

```json
// .vscode/settings.json
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "biome.biome",
  "[typescript]": {
    "editor.defaultFormatter": "biome.biome"
  }
}
```

### Neovim

```lua
-- ~/.config/nvim/lua/plugins/bunup.lua
return {
  "williamboman/mason.nvim",
  config = function()
    require("mason").setup()
    require("mason-lspconfig").setup({
      ensure_installed = { "tsserver" },
    })
  end,
}
```

## Pre-commit Hooks

```json
// package.json
{
  "simple-git-hooks": {
    "pre-commit": "bun run lint && bun run type-check"
  }
}
```

## Debugging

### Source Maps

```sh
# Generate linked source maps
bunup --sourcemap linked

# Generate inline source maps
bunup --sourcemap
```

### Verbose Output

```sh
# Disable silent mode
bunup --no-silent

# Or explicitly
bunup -q  # quiet mode
```

## Testing Built Output

```typescript
// test/build.test.ts
import { expect, test } from "vitest";
import { greet } from "../dist/index.js";

test("greet function works", () => {
  expect(greet("World")).toBe("Hello, World!");
});
```