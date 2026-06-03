# Configuration

## Purpose

แนะนำการตั้งค่า tsdown ด้วย tsdown.config.ts

## Scope

- Config File Structure
- Entry Options
- Output Options
- Plugin Configuration
- DTS Options

## Config File Structure

### Basic Config

```typescript
// tsdown.config.ts
import { defineConfig } from 'tsdown'

export default defineConfig({
  // Configuration
})
```

### Config File Naming

| Pattern | Description |
|---------|-------------|
| `tsdown.config.ts` | Default config |
| `tsdown.config.mts` | ESM config |
| `--config custom.ts` | Custom config |

## Entry Options

### Single Entry

```typescript
export default defineConfig({
  entry: './src/index.ts',
})
```

### Multiple Entries

```typescript
export default defineConfig({
  entry: [
    './src/index.ts',
    './src/utils.ts',
    './src/helpers.ts',
  ],
})
```

### Entry Options

| Option | Type | Description |
|--------|------|-------------|
| `entry` | `string \| string[]` | Entry file(s) |
| `treeshake` | `boolean` | Enable tree-shaking |

## Output Options

### Basic Output

```typescript
export default defineConfig({
  entry: './src/index.ts',
  outDir: 'dist',
})
```

### Output Structure

```
dist/
├── index.mjs
├── index.cjs
└── index.d.ts
```

### Custom Formats

```typescript
export default defineConfig({
  entry: './src/index.ts',
  format: ['esm', 'cjs'],
})
```

### Format Options

| Format | Extension | Description |
|--------|-----------|-------------|
| `esm` | `.mjs` | ES Module |
| `cjs` | `.cjs` | CommonJS |
| `iife` | `.iife.js` | Immediately Invoked |
| `umd` | `.umd.js` | Universal Module Definition |

## Plugin Configuration

### Add Plugins

```typescript
import { defineConfig } from 'tsdown'
import SomePlugin from 'some-plugin'

export default defineConfig({
  plugins: [SomePlugin()],
})
```

### Multiple Plugins

```typescript
export default defineConfig({
  plugins: [
    PluginA(),
    PluginB(),
    PluginC(),
  ],
})
```

### Type Compatibility

หาก plugin มี type errors:

```typescript
import SomeRollupPlugin from 'some-rollup-plugin'

export default defineConfig({
  plugins: [SomeRollupPlugin() as any],
})
```

## DTS Options

### Enable DTS

```typescript
export default defineConfig({
  dts: true,
})
```

### DTS with Options

```typescript
export default defineConfig({
  dts: {
    sourcemap: true,
  },
})
```

### DTS Options

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `sourcemap` | `boolean` | `false` | Generate .d.ts.map |
| `rollup` | `object` | - | rolldown-plugin-dts options |

## External Dependencies

### Mark External

```typescript
export default defineConfig({
  external: ['react', 'react-dom'],
})
```

### Auto External

Packages ที่ไม่อยู่ใน project จะเป็น external อัตโนมัติ

## Tree-shaking

### Enable

```typescript
export default defineConfig({
  treeshake: true,  // Default: true
})
```

### Disable

```typescript
export default defineConfig({
  treeshake: false,
})
```

## Source Maps

### Enable

```typescript
export default defineConfig({
  sourcemap: true,
})
```

### Options

```typescript
export default defineConfig({
  sourcemap: {
    inline: false,
    obj: true,
  },
})
```

## Complete Example

```typescript
// tsdown.config.ts
import { defineConfig } from 'tsdown'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  // Entry points
  entry: ['./src/index.ts'],
  
  // Output
  outDir: 'dist',
  format: ['esm', 'cjs'],
  
  // Plugins
  plugins: [vue() as any],
  
  // Declaration
  dts: {
    sourcemap: true,
  },
  
  // Options
  treeshake: true,
  sourcemap: true,
  external: ['vue'],
})
```

## Summary

| Option | Description |
|--------|-------------|
| `entry` | Input files |
| `outDir` | Output directory |
| `format` | Output formats |
| `plugins` | Bundler plugins |
| `dts` | Declaration generation |
| `external` | External dependencies |
| `treeshake` | Dead code elimination |
| `sourcemap` | Source map generation |