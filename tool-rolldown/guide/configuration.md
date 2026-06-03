# Configuration

## Purpose

แนะนำการตั้งค่า configuration สำหรับ Rolldown เพื่อให้เหมาะกับโปรเจกต์ของคุณ

## Scope

- Config File
- Input Options
- Output Options
- Tree-shaking
- Plugins

## Config File

### rolldown.config.js

```javascript
import { defineConfig } from 'rolldown'

export default defineConfig({
  // Configuration
})
```

### TypeScript Config

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

## Input Options

### Single Entry

```javascript
export default defineConfig({
  input: 'src/index.ts',
})
```

### Multiple Entries

```javascript
export default defineConfig({
  input: {
    main: 'src/main.ts',
    util: 'src/util.ts',
    components: 'src/components/index.ts',
  },
})
```

### With Options

```javascript
export default defineConfig({
  input: {
    main: {
      name: 'main',
      import: 'src/main.ts',
    },
  },
})
```

## Output Options

### Basic Output

```javascript
export default defineConfig({
  input: 'src/index.ts',
  output: {
    dir: 'dist',
    format: 'esm',
  },
})
```

### Output Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `dir` | string | - | Output directory |
| `file` | string | - | Single output file |
| `format` | string | `esm` | Output format |
| `name` | string | - | IIFE/UMD name |
| `sourcemap` | boolean | `false` | Generate sourcemap |
| `minify` | boolean | `false` | Minify output |
| `globals` | object | `{}` | UMD globals |

### Formats

```javascript
output: {
  format: 'esm',   // ES Modules
  format: 'cjs',   // CommonJS
  format: 'iife',  // Immediately Invoked Function Expression
  format: 'umd',   // Universal Module Definition
}
```

### Sourcemap

```javascript
output: {
  sourcemap: true,       // linked
  sourcemap: 'inline',   // inline
  sourcemap: 'hidden',   // hidden
  sourcemap: 'linked',   // linked
}
```

## Tree-shaking Options

### Enable/Disable

```javascript
export default defineConfig({
  treeshake: true,  // enable (default)
  treeshake: false, // disable
})
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

| Option | Values | Description |
|--------|--------|-------------|
| `moduleSideEffects` | `'all'` \| `'no-external'` \| `false` | Side effects handling |
| `treeshakeLiterals` | boolean | Tree-shake literal values |
| `treeshakeClassStaticBlocks` | boolean | Tree-shake class static blocks |

## Plugins

### Add Plugins

```javascript
import { defineConfig } from 'rolldown'
import commonjs from '@rolldown/plugin-commonjs'
import nodeResolve from '@rolldown/plugin-node-resolve'
import terser from '@rolldown/plugin-terser'

export default defineConfig({
  input: 'src/index.ts',
  output: {
    dir: 'dist',
    format: 'esm',
  },
  plugins: [
    nodeResolve(),
    commonjs(),
    terser(),
  ],
})
```

### Plugin Order

```javascript
plugins: [
  nodeResolve(),  // 1. Resolve modules
  commonjs(),     // 2. Convert CJS
  babel(),        // 3. Transform
  terser(),       // 4. Minify
]
```

## External Dependencies

```javascript
export default defineConfig({
  external: ['react', 'react-dom', 'lodash'],
})
```

### Function-based External

```javascript
export default defineConfig({
  external: (id) => {
    return id.startsWith('react') || id.startsWith('@mui')
  },
})
```

## Code Splitting

### Manual Chunks

```javascript
export default defineConfig({
  input: 'src/index.ts',
  output: {
    dir: 'dist',
    manualChunks: {
      vendor: ['react', 'react-dom'],
      utils: ['lodash', 'ramda'],
    },
  },
})
```

### Dynamic Import

```typescript
// Automatic code splitting
const lazyModule = await import('./lazy')
```

## Watch Mode

### CLI

```bash
rolldown --watch --config rolldown.config.js
```

### Config

```javascript
export default defineConfig({
  watch: {
    include: 'src/**',
    exclude: 'node_modules/**',
  },
})
```

## TypeScript

### tsconfig

```javascript
export default defineConfig({
  tsconfig: './tsconfig.json',
})
```

### Custom Options

```javascript
export default defineConfig({
  tsconfig: {
    target: 'es2020',
    module: 'esnext',
    strict: true,
  },
})
```

## Summary

| Category | Options |
|----------|---------|
| **Input** | `input: string \| object` |
| **Output** | `dir`, `format`, `sourcemap`, `minify` |
| **Tree-shaking** | `treeshake: boolean \| object` |
| **Plugins** | `plugins: Plugin[]` |
| **External** | `external: string[] \| function` |
| **Splitting** | `manualChunks: object` |