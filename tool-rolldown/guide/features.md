# Features

## Purpose

รายการฟีเจอร์ทั้งหมดของ Rolldown ที่ให้ความเร็วสูงและความเข้ากันได้กับ Rollup

## Core Features

### 1. Rust-based Performance

Rolldown เขียนด้วย Rust ให้ความเร็วในการ bundle:

| Metric | Rolldown | Rollup | esbuild |
|--------|----------|--------|---------|
| Build Speed | ~10x faster | 1x | ~10x faster |
| Memory Usage | Low | Medium | Low |
| Parallelization | Native | Limited | Native |

### 2. Rollup-compatible API

ใช้ API เดียวกับ Rollup ทำให้ย้ายได้ง่าย:

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

Loose mode tree-shaking ที่ aggressive:

```javascript
export default defineConfig({
  treeshake: {
    moduleSideEffects: 'no-external',
    treeshakeLiterals: true,
  },
})
```

### 4. Code Splitting

Automatic และ manual code splitting:

```javascript
// Manual chunks
export default defineConfig({
  input: 'src/index.ts',
  output: {
    dir: 'dist',
    manualChunks: {
      vendor: ['react', 'react-dom'],
    },
  },
})
```

```javascript
// Dynamic import -> auto split
const module = await import('./lazy.js')
```

### 5. Plugin System

รองรับ Rollup plugins ผ่าน compatibility layer:

| Plugin | Package |
|--------|---------|
| CommonJS | `@rolldown/plugin-commonjs` |
| Node Resolve | `@rolldown/plugin-node-resolve` |
| Terser | `@rolldown/plugin-terrer` |
| Babel | `@rolldown/plugin-babel` |

## Output Formats

| Format | Extension | Use Case |
|--------|-----------|----------|
| `esm` | `.mjs` | Modern browsers, ES modules |
| `cjs` | `.cjs` | Node.js, CommonJS |
| `iife` | `.js` | Browser global, standalone |
| `umd` | `.js` | Universal (AMD + CommonJS + Global) |

## Advanced Features

### 1. Lazy Barrel Optimization

Optimize barrel exports โดยอัตโนมัติ:

```typescript
// index.ts - barrel file
export { a } from './a'
export { b } from './b'
export { c } from './c'

// ใช้เฉพาะ a
import { a } from './index'

// Rolldown tree-shakes b, c โดยอัตโนมัติ
```

### 2. Native MagicString

ใช้ Native Rust implementation สำหรับ:

- Fast source map generation
- Accurate code transformations
- Minimal memory overhead

### 3. Multiple Entry Points

```javascript
export default defineConfig({
  input: {
    main: 'src/main.ts',
    util: 'src/util.ts',
    components: 'src/components/index.ts',
  },
  output: {
    dir: 'dist',
    format: 'esm',
  },
})
```

### 4. External Dependencies

```javascript
export default defineConfig({
  external: ['react', 'react-dom', 'lodash'],
})
```

### 5. Sourcemap

```javascript
export default defineConfig({
  output: {
    sourcemap: true, // or 'linked', 'inline', 'hidden'
  },
})
```

### 6. Minification

```javascript
export default defineConfig({
  output: {
    minify: true,
  },
})
```

## Compatibility

### Rollup Compatibility

| Feature | Support |
|---------|---------|
| `input` | ✅ |
| `output` | ✅ |
| `plugins` | ✅ |
| `treeshake` | ✅ |
| `watch` | ✅ |
| `onwarn` | ✅ |
| `external` | ✅ |

### Vite Integration

Rolldown เป็น default bundler สำหรับ Vite production builds:

```javascript
// vite.config.js
export default defineConfig({
  build: {
    rolldownOptions: {
      // Rolldown specific options
    },
  },
})
```

## Summary

| Category | Features |
|----------|----------|
| **Performance** | Rust-based, parallel processing |
| **Compatibility** | Rollup API, Vite integration |
| **Bundle** | Tree-shaking, code splitting, lazy barrel |
| **Output** | ESM, CJS, IIFE, UMD |
| **Plugins** | CommonJS, node-resolve, terser, babel |