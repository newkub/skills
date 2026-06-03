# How It Works

## Purpose

อธิบายการทำงานภายในของ Rolldown เพื่อให้เข้าใจกลไกและ flow การทำงาน

## Scope

- Build Pipeline
- Module Resolution
- Tree-shaking
- Code Splitting
- Plugin System

## Build Pipeline

```
+------------------+     +------------------+     +------------------+
|  Input Files     | --> |  Plugin Pipeline | --> |  Rolldown Core   |
|  (src/*.ts)      |     |  (transform)     |     |  (bundle +       |
+------------------+     +------------------+     |   optimize)      |
                                                  +------------------+
                                                          |
                        +------------------+     +------------------+
                        |  Output          | <-- |  Tree-shake      |
                        |  (dist/)         |     |  Code Split     |
                        +------------------+     +------------------+
```

### Build Steps

| Step | Description | Output |
|------|-------------|--------|
| **1. Parse** | Parse input files to AST | oxc AST |
| **2. Resolve** | Resolve imports and dependencies | Module graph |
| **3. Transform** | Run plugins to transform code | Transformed AST |
| **4. Bundle** | Combine modules into chunks | Bundle chunks |
| **5. Generate** | Generate output format | ESM/CJS/IIFE/UMD |

## Module Resolution

```
src/index.ts
├── src/hello.ts
│   └── src/utils.ts
└── node_modules/lodash
```

### Resolution Algorithm

1. **Relative imports** → resolve from current file
2. **Bare imports** → resolve from node_modules
3. **Extensions** → try `.ts`, `.js`, `.tsx`, `.jsx`

### Resolution Order

```
index.ts
  ├── ./hello         → src/hello.ts
  │     └── ./utils   → src/utils.ts
  └── lodash          → node_modules/lodash
```

## Tree-shaking

### How Tree-shaking Works

```typescript
// src/math.ts
export function add(a: number, b: number) {
  return a + b
}

export function multiply(a: number, b: number) {
  return a * b
}

// src/index.ts
import { add } from './math'

console.log(add(1, 2))
// multiply ถูก tree-shake ออก
```

### Tree-shake Options

```javascript
export default defineConfig({
  treeshake: {
    moduleSideEffects: 'no-external',
    treeshakeLiterals: true,
    treeshakeClassStaticBlocks: true,
  },
})
```

| Option | Description |
|--------|-------------|
| `moduleSideEffects` | Side effects handling |
| `treeshakeLiterals` | Tree-shake literal values |
| `treeshakeClassStaticBlocks` | Tree-shake static blocks |

### Lazy Barrel Optimization

```typescript
// src/index.ts
export { a } from './a'
export { b } from './b'
export { c } from './c'

// ใช้เฉพาะ a
import { a } from './index'
// b, c ถูก tree-shake
```

## Code Splitting

### Automatic Splitting

```typescript
// Dynamic import
const lazyModule = await import('./lazy')
```

### Manual Splitting

```javascript
export default defineConfig({
  output: {
    manualChunks: {
      vendor: ['react', 'react-dom'],
      utils: ['lodash', 'ramda'],
    },
  },
})
```

### Output

```
dist/
├── index.js
├── vendor.js      (react, react-dom)
└── utils.js       (lodash, ramda)
```

## Plugin System

### Plugin Lifecycle

```
load → transform → resolveId → transformAst → renderChunk → generateBundle
```

### Plugin Example

```typescript
import { type Plugin } from 'rolldown'

const myPlugin: Plugin = {
  name: 'my-plugin',
  
  resolveId(id) {
    if (id === 'virtual:module') {
      return { id: '\0virtual:module' }
    }
    return null
  },
  
  load(id) {
    if (id === '\0virtual:module') {
      return 'export const value = 42'
    }
  },
  
  transform(code, id) {
    // Transform code
    return { code, map: null }
  },
}
```

### Official Plugins

| Plugin | Package | Purpose |
|--------|---------|---------|
| CommonJS | `@rolldown/plugin-commonjs` | CJS → ESM |
| Node Resolve | `@rolldown/plugin-node-resolve` | node_modules |
| Terser | `@rolldown/plugin-terser` | Minification |
| Babel | `@rolldown/plugin-babel` | Transpilation |

## Output Formats

### ESM (Default)

```javascript
// dist/index.mjs
export function hello() { }
```

### CommonJS

```javascript
// dist/index.cjs
'use strict'
exports.hello = function() { }
```

### IIFE

```javascript
// dist/bundle.js
(function() {
  'use strict'
  window.hello = function() { }
})()
```

### UMD

```javascript
// dist/bundle.js
(function(root, factory) {
  if (typeof module === 'object')
    module.exports = factory()
  else
    root.myModule = factory()
})(this, function() { })
```

## Summary

| Mechanism | Description |
|-----------|-------------|
| **Build Pipeline** | Parse → Resolve → Transform → Bundle → Generate |
| **Module Resolution** | Relative → Bare → Extensions |
| **Tree-shaking** | Remove dead code, lazy barrel |
| **Code Splitting** | Auto + manual chunks |
| **Plugin System** | Hooks: load, transform, resolveId |
| **Output Formats** | ESM, CJS, IIFE, UMD |