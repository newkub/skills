# Key Concept

## Purpose

แนวคิดหลักและหลักการทำงานของ Rolldown ที่ทำให้เป็น fast JavaScript bundler

## What is Rolldown?

Rolldown เป็น JavaScript bundler ที่เขียนด้วย Rust ใช้ Rollup-compatible API ให้ความเร็วสูงและรองรับ tree-shaking, code splitting, และ plugin system

## Core Concepts

### 1. Rust-based

เขียนด้วย Rust ทำให้ได้ประสิทธิภาพสูง:

| Aspect | Benefit |
|--------|---------|
| **Speed** | ~10x faster than JavaScript bundlers |
| **Memory** | Lower memory footprint |
| **Parallelization** | Native multi-threading |

### 2. Rollup-compatible API

API เข้ากันได้กับ Rollup ทำให้ย้ายง่าย:

```javascript
import { defineConfig } from 'rolldown'

export default defineConfig({
  input: 'src/index.ts',
  output: {
    dir: 'dist',
    format: 'esm',
  },
})
```

### 3. Tree-shaking

Loose mode tree-shaking เพื่อลบ dead code:

```javascript
// ใช้เฉพาะ foo
import { foo } from './utils'
// bar ถูก tree-shake ออก
```

### 4. Code Splitting

แบ่ง bundle อัตโนมัติหรือ manual:

```javascript
// Automatic - dynamic import
const module = await import('./lazy.js')

// Manual - manualChunks
export default defineConfig({
  output: {
    manualChunks: {
      vendor: ['react', 'react-dom'],
    },
  },
})
```

### 5. Plugin System

รองรับ Rollup plugins:

| Plugin | Purpose |
|--------|---------|
| `@rolldown/plugin-commonjs` | CommonJS support |
| `@rolldown/plugin-node-resolve` | node_modules resolution |
| `@rolldown/plugin-terser` | Minification |
| `@rolldown/plugin-babel` | Babel transpilation |

## When to Use

### Use Rolldown When:

| Scenario | Reason |
|----------|--------|
| **Need Speed** | Rust-based performance |
| **Migrating from Rollup** | Same API |
| **Vite Production** | Default bundler for Vite |
| **Large Projects** | Fast incremental builds |
| **Library Development** | Tree-shaking + multiple formats |

### Consider Alternatives When:

| Scenario | Alternative |
|----------|-------------|
| **Simple builds** | esbuild, tsc |
| **Webpack compatibility** | webpack, vite |
| **Legacy browser** | Browserify, parcel |

## Architecture

```
┌─────────────────────────────────────────────────────┐
│                    Rolldown                         │
├─────────────────────────────────────────────────────┤
│  Input                                              │
│  ├── Entry files                                    │
│  ├── Configuration                                 │
│  └── Plugins                                       │
├─────────────────────────────────────────────────────┤
│  Processing                                        │
│  ├── Module Resolution                             │
│  ├── AST Parsing (oxc)                             │
│  ├── Tree-shaking                                  │
│  └── Code transformation                           │
├─────────────────────────────────────────────────────┤
│  Output                                            │
│  ├── ESM                                           │
│  ├── CJS                                           │
│  ├── IIFE                                          │
│  └── UMD                                           │
└─────────────────────────────────────────────────────┘
```

## Key Differences from Rollup

| Feature | Rolldown | Rollup |
|---------|----------|--------|
| **Language** | Rust | JavaScript |
| **Speed** | ~10x faster | Slower |
| **Parallelization** | Native | Limited |
| **Tree-shaking** | Aggressive | Conservative |
| **API** | Rollup-compatible | Native |
| **Plugins** | Rollup plugins | Rollup plugins |

## Summary

| Concept | Description |
|---------|-------------|
| **Rust-based** | High performance, native speed |
| **Rollup API** | Easy migration from Rollup |
| **Tree-shaking** | Remove unused code |
| **Code Splitting** | Split bundles for lazy loading |
| **Plugin System** | Extend with Rollup plugins |