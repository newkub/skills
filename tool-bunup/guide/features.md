# All Features

## Core Features

### 1. Build Formats

```bash
# ESM only
bunx bunup --format esm

# ESM and CJS
bunx bunup --format esm,cjs

# With IIFE
bunx bunup --format esm,cjs,iife
```

### 2. TypeScript Declarations

```bash
# Generate .d.ts files
bunx bunup --dts

# Declaration splitting
bunx bunup --dts --dts-split

# Skip declaration
bunx bunup --no-dts
```

### 3. CSS Support

```bash
# CSS import
bunx bunup --css

# CSS Modules
bunx bunup --css-modules

# PostCSS
bunx bunup --postcss
```

### 4. Optimization

```bash
# Minify
bunx bunup --minify

# Tree shaking
bunx bunup --treeshake

# Source maps
bunx bunup --sourcemap
```

## CLI Options

| Option | Short | Description |
|--------|-------|-------------|
| `--entry` | `-e` | Entry point file |
| `--format` | `-f` | Output formats |
| `--outdir` | `-o` | Output directory |
| `--dts` | `-d` | Generate declarations |
| `--minify` | `-m` | Minify output |
| `--watch` | `-w` | Watch mode |
| `--external` | `-x` | External packages |
| `--help` | `-h` | Show help |

## Build Targets

| Target | Description |
|--------|-------------|
| browser | Browser environment |
| node | Node.js environment |
| neutral | Environment-agnostic |
| esnext | ESNext features |

## Advanced Features

### 1. Conditional Exports

```json
{
  "exports": {
    ".": {
      "import": "./dist/index.js",
      "require": "./dist/index.cjs",
      "types": "./dist/index.d.ts"
    }
  }
}
```

### 2. Multiple Entry Points

```bash
bunx bunup --entry ./src/index.ts --entry ./src/utils.ts
```

### 3. Bundle Analysis

```bash
bunx bunup --analyze
```

## Performance

| Feature | Impact |
|---------|--------|
| Native bundler | ⚡ 10x faster |
| Parallel builds | ⚡ 2x faster |
| Incremental builds | ⚡ 5x faster |

## Configuration

### bunup.config.ts

```typescript
import { defineConfig } from 'bunup';

export default defineConfig({
  entry: './src/index.ts',
  formats: ['esm', 'cjs'],
  dts: true,
  minify: true,
  target: 'browser',
  external: ['react', 'react-dom'],
});
```

## Environment Variables

| Variable | Description |
|----------|-------------|
| `BUNUP_ENTRY` | Entry point override |
| `BUNUP_OUTDIR` | Output directory override |
| `BUNUP_FORMAT` | Format override |