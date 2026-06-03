# Configuration

## Configuration File

### bunup.config.ts (Recommended)

```typescript
import { defineConfig } from 'bunup';

export default defineConfig({
  entry: './src/index.ts',
  formats: ['esm', 'cjs'],
  dts: true,
  minify: false,
  target: 'neutral',
  outdir: './dist',
});
```

### Alternative: bunup.config.js

```javascript
/** @type {import('bunup').Config} */
export default {
  entry: './src/index.ts',
  formats: ['esm', 'cjs'],
  dts: true,
};
```

## Configuration Options

### Entry

```typescript
// Single entry
entry: './src/index.ts'

// Multiple entries
entry: {
  index: './src/index.ts',
  utils: './src/utils.ts',
}
```

### Formats

```typescript
formats: ['esm']
formats: ['esm', 'cjs']
formats: ['esm', 'cjs', 'iife']
```

### Output

```typescript
// Output directory
outdir: './dist'

// Overwrite existing
outdir: './dist'
clean: true
```

### TypeScript

```typescript
// Generate .d.ts
dts: true

// Declaration splitting
dts: true
dtsSplit: true

// Skip dts
dts: false
```

### Optimization

```typescript
// Minify
minify: true

// Source maps
sourcemap: true

// Tree shaking
treeshake: true

// Target
target: 'browser'
target: 'node'
target: 'neutral'
```

### External Dependencies

```typescript
// External packages
external: ['react', 'react-dom']

// Auto-detect peerDeps
external: 'peerDeps'
```

## Environment Configuration

### Development

```typescript
// bunup.config.dev.ts
export default defineConfig({
  minify: false,
  sourcemap: true,
  watch: true,
});
```

### Production

```typescript
// bunup.config.prod.ts
export default defineConfig({
  minify: true,
  sourcemap: false,
  treeshake: true,
});
```

## Workspace Configuration

### Single Package

```typescript
export default defineConfig({
  entry: './src/index.ts',
});
```

### Monorepo

```typescript
export default defineConfig({
  workspace: {
    packages: ['packages/*'],
  },
});
```

## TypeScript Configuration

### tsconfig.json

```json
{
  "compilerOptions": {
    "target": "ESNext",
    "module": "ESNext",
    "declaration": true,
    "declarationMap": true,
    "outDir": "./dist",
    "strict": true
  }
}
```

## Programmatic API

### Basic Usage

```typescript
import { build } from 'bunup';

await build({
  entry: './src/index.ts',
  formats: ['esm', 'cjs'],
});
```

### Advanced Usage

```typescript
import { build } from 'bunup';

await build({
  entry: './src/index.ts',
  formats: ['esm'],
  dts: true,
  minify: true,
  external: ['react'],
  onProgress: (progress) => {
    console.log(`${progress}% complete`);
  },
});
```

## Environment Variables

| Variable | Description | Default |
|----------|-------------|---------|
| `BUNUP_ENTRY` | Entry point | Config value |
| `BUNUP_OUTDIR` | Output directory | Config value |
| `BUNUP_FORMAT` | Output formats | Config value |
| `BUNUP_TARGET` | Build target | Config value |