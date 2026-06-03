# Best Practices

## Purpose

แนวทางปฏิบัติที่ดีในการใช้งาน Rolldown เพื่อให้ได้ประสิทธิภาพและความปลอดภัยที่ดีที่สุด

## Scope

- Performance
- Security
- Code Quality
- Common Pitfalls

## Performance

### 1. Tree-shaking

เปิดใช้งาน tree-shaking อัตโนมัติ (default):

```javascript
export default defineConfig({
  treeshake: true, // default
})
```

### 2. Code Splitting

ใช้ dynamic imports สำหรับ code splitting:

```javascript
// แบ่ง chunk อัตโนมัติ
const module = await import('./lazy-module.js')
```

### 3. Lazy Barrel Optimization

Rolldown รองรับ lazy barrel optimization โดยอัตโนมัติ:

```typescript
// src/
//   index.ts    <- ใช้ index.ts เป็น barrel
//   utils.ts
//   helpers.ts

// index.ts
export { foo } from './foo'
export { bar } from './bar'

// ใช้เฉพาะ foo
import { foo } from './index' // tree-shake ลบ bar
```

### 4. Output Format

เลือก format ที่เหมาะสมกับ target:

| Target | Format | Reason |
|--------|--------|--------|
| Modern browsers | `esm` | Native ESM support |
| Node.js | `cjs` | CommonJS support |
| Library | `esm` + `cjs` | Maximum compatibility |
| IIFE bundle | `iife` | Self-executing |

## Security

### 1. External Dependencies

ใช้ `external` สำหรับ dependencies ที่ไม่ต้องการ bundle:

```javascript
export default defineConfig({
  external: ['react', 'react-dom'],
})
```

### 2. Input Validation

ตรวจสอบ entry point ก่อน bundle:

```javascript
import path from 'node:path'

export default defineConfig({
  input: path.resolve('./src/index.ts'),
})
```

### 3. Plugin Security

เลือก plugins ที่น่าเชื่อถือและมีการอัพเดท:

```javascript
// ใช้ official plugins
import commonjs from '@rolldown/plugin-commonjs'
import nodeResolve from '@rolldown/plugin-node-resolve'
```

## Code Quality

### 1. TypeScript Configuration

ใช้ `tsconfig` ใน config:

```javascript
export default defineConfig({
  input: 'src/index.ts',
  tsconfig: './tsconfig.json',
})
```

### 2. Source Maps

เปิด source maps สำหรับ debugging:

```javascript
export default defineConfig({
  output: {
    sourcemap: true,
  },
})
```

### 3. Source Map Format

```javascript
export default defineConfig({
  output: {
    sourcemap: 'hidden', // 'linked', 'inline', 'hidden', true
  },
})
```

### 4. Minification

```javascript
export default defineConfig({
  output: {
    minify: true,
  },
})
```

## Common Pitfalls

### 1. CommonJS Modules

ใช้ plugin สำหรับ CommonJS:

```javascript
import commonjs from '@rolldown/plugin-commonjs'

export default defineConfig({
  plugins: [commonjs()],
})
```

### 2. Node Modules Resolution

ใช้ node-resolve plugin:

```javascript
import nodeResolve from '@rolldown/plugin-node-resolve'

export default defineConfig({
  plugins: [nodeResolve()],
})
```

### 3. Multiple Entry Points

กำหนด entry points ที่ชัดเจน:

```javascript
export default defineConfig({
  input: {
    main: 'src/main.ts',
    util: 'src/util.ts',
  },
  output: {
    dir: 'dist',
  },
})
```

### 4. Watching Files

ใช้ `--watch` สำหรับ development:

```bash
rolldown --watch --config rolldown.config.js
```

## Summary

| Category | Best Practice |
|----------|---------------|
| **Performance** | tree-shake, code splitting, lazy barrel |
| **Security** | external deps, input validation, trusted plugins |
| **Code Quality** | tsconfig, sourcemap, minification |
| **Pitfalls** | CJS plugins, node-resolve, multiple entries |