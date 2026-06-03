# Integration

## Purpose

แนะนำการ integrate tsdown กับ tools และ environments อื่นๆ

## Scope

- Vite
- Rollup
- Unplugin
- Monorepo
- CI/CD

## Vite Integration

### With Vite Plugin

```bash
npm install -D @vitejs/plugin-react
```

```typescript
// tsdown.config.ts
import { defineConfig } from 'tsdown'
import react from '@vitejs/plugin-react'

export default defineConfig({
  entry: ['./src/index.ts'],
  plugins: [react() as any],
})
```

### Type Fix for Vite Plugins

```typescript
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [
    vue() as any,  // Fix type compatibility
  ],
})
```

### Note on Vite Plugins

Not all Vite plugins are compatible. Plugins that rely on Vite internals may not work.

## Rollup Integration

### Use Rollup Plugins

```bash
npm install -D rollup-plugin-terser
```

```typescript
// tsdown.config.ts
import { defineConfig } from 'tsdown'
import terser from 'rollup-plugin-terser'

export default defineConfig({
  entry: ['./src/index.ts'],
  plugins: [
    terser() as any,
  ],
})
```

### Common Rollup Plugins

| Plugin | Purpose | Type Fix |
|--------|---------|----------|
| `rollup-plugin-terser` | Minification | `as any` |
| `rollup-plugin-swc` | SWC transform | `as any` |
| `@rollup/plugin-node-resolve` | Module resolution | Usually works |

### Type Compatibility

```typescript
// All Rollup plugins may need type fix
export default defineConfig({
  plugins: [
    someRollupPlugin() as any,
  ],
})
```

## Unplugin Integration

### Vue Components

```bash
npm install -D unplugin-vue-components
```

```typescript
// tsdown.config.ts
import { defineConfig } from 'tsdown'
import Components from 'unplugin-vue-components/vite'

export default defineConfig({
  entry: ['./src/index.ts'],
  plugins: [Components()],
})
```

### Other Unplugin Plugins

| Plugin | Use Case |
|--------|----------|
| `unplugin-vue-components` | Auto-import Vue components |
| `unplugin-auto-import` | Auto-import imports |
| `unplugin-icons` | Icon auto-import |
| `unplugin-md` | Markdown as components |

### Unplugin-vue for React

```bash
npm install -D unplugin-vue-for-react
```

## Monorepo Integration

### Workspace Structure

```
monorepo/
├── packages/
│   ├── utils/
│   │   ├── src/index.ts
│   │   └── tsdown.config.ts
│   └── ui/
│       ├── src/index.ts
│       └── tsdown.config.ts
├── dist/
│   ├── utils/
│   └── ui/
└── package.json
```

### Shared Config

```typescript
// packages/utils/tsdown.config.ts
import { defineConfig } from 'tsdown'

export default defineConfig({
  entry: ['./src/index.ts'],
  outDir: '../../dist/utils',
  external: ['react', '@monorepo/shared'],
})
```

### Build All Packages

```bash
# Build single package
npm run build --workspace=packages/utils

# Build all
npm run build --workspaces
```

### Package.json Setup

```json
{
  "workspaces": ["packages/*"],
  "scripts": {
    "build": "npm run build --workspaces",
    "build:utils": "npm run build --workspace=packages/utils"
  }
}
```

## CI/CD Integration

### GitHub Actions

```yaml
# .github/workflows/build.yml
name: Build

on: [push, pull_request]

jobs:
  build:
    runs-on: ubuntu-latest
    strategy:
      matrix:
        node: ['22']

    steps:
      - uses: actions/checkout@v4
      
      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: ${{ matrix.node }}
      
      - name: Install dependencies
        run: npm ci
      
      - name: Build
        run: npm run build
      
      - name: Upload artifacts
        uses: actions/upload-artifact@v4
        with:
          name: dist
          path: dist/
```

### GitLab CI

```yaml
# .gitlab-ci.yml
build:
  image: node:22
  script:
    - npm ci
    - npm run build
  artifacts:
    paths:
      - dist/
```

### Travis CI

```yaml
# .travis.yml
language: node_js
node_js:
  - '22'
script:
  - npm ci
  - npm run build
```

## TypeScript Project References

### tsconfig.json

```json
{
  "compilerOptions": {
    "composite": true,
    "declaration": true,
    "declarationMap": true
  }
}
```

### With tsdown

```typescript
// tsdown.config.ts
export default defineConfig({
  entry: ['./src/index.ts'],
  dts: true,
})
```

## ESLint Integration

### Install

```bash
npm install -D eslint
```

### Config

```json
{
  "scripts": {
    "lint": "eslint src"
  }
}
```

### Prettier Integration

```bash
npm install -D prettier
```

```json
{
  "scripts": {
    "format": "prettier --write ."
  }
}
```

## Summary

| Integration | Setup |
|-------------|-------|
| **Vite** | `plugin() as any` |
| **Rollup** | `plugin() as any` |
| **Unplugin** | Native support |
| **Monorepo** | Separate configs |
| **CI/CD** | Node.js 22+ |