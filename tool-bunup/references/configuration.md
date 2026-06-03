# configuration

## index.md

# Configuration Reference

## Configuration File (bunup.config.ts)

```typescript
import { defineConfig } from 'bunup';

export default defineConfig({
  // Entry point(s)
  entry: './src/index.ts',

  // Output formats
  formats: ['esm', 'cjs'],

  // Output directory
  outdir: './dist',

  // TypeScript declarations
  dts: true,
  dtsSplit: false,

  // Optimization
  minify: false,
  treeshake: true,
  sourcemap: false,

  // Build target
  target: 'neutral',

  // External dependencies
  external: [],

  // Other options
  clean: true,
  name: 'my-library',
});
```

## Configuration Options

### Entry

| Type | Description | Example |
|------|-------------|---------|
| string | Single entry | `'./src/index.ts'` |
| string[] | Multiple entries | `['./src/index.ts', './src/utils.ts']` |
| Record | Named entries | `{ index: './src/index.ts', utils: './src/utils.ts' }` |

### Formats

| Value | Description |
|-------|-------------|
| `esm` | ECMAScript Modules |
| `cjs` | CommonJS |
| `iife` | Immediately Invoked Function Expression |

### Target

| Value | Description |
|-------|-------------|
| `browser` | Browser environment |
| `node` | Node.js environment |
| `neutral` | Environment-agnostic |

### Dts Options

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `dts` | boolean | `true` | Generate .d.ts files |
| `dtsSplit` | boolean | `false` | Split declaration files |
| `dtsRoot` | string | `'.'` | Root for declaration paths |

### Optimization

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `minify` | boolean | `false` | Minify output |
| `treeshake` | boolean | `true` | Remove unused code |
| `sourcemap` | boolean | `false` | Generate source maps |

### External

| Type | Description |
|------|-------------|
| string[] | List of package names |
| `'peerDeps'` | Auto-detect from peerDependencies |
| `'all'` | Externalize all imports |

## Environment Variables

| Variable | Type | Description |
|----------|------|-------------|
| `BUNUP_ENTRY` | string | Override entry point |
| `BUNUP_OUTDIR` | string | Override output directory |
| `BUNUP_FORMAT` | string | Override formats |
| `BUNUP_TARGET` | string | Override target |
| `BUNUP_DTS` | boolean | Override dts setting |

## Config File Location

| Location | Priority |
|----------|----------|
| `bunup.config.ts` | 1 (highest) |
| `bunup.config.js` | 2 |
| `bunup.config.mjs` | 3 |
| `bunup.config.cjs` | 4 |

## TypeScript Configuration

### tsconfig.json

```json
{
  "compilerOptions": {
    "target": "ESNext",
    "module": "ESNext",
    "declaration": true,
    "declarationMap": true,
    "outDir": "./dist"
  }
}
```

## Schema Reference

```typescript
interface BunupConfig {
  entry?: string | string[] | Record<string, string>;
  formats?: ('esm' | 'cjs' | 'iife')[];
  outdir?: string;
  dts?: boolean;
  dtsSplit?: boolean;
  dtsRoot?: string;
  minify?: boolean;
  treeshake?: boolean;
  sourcemap?: boolean;
  target?: 'browser' | 'node' | 'neutral';
  external?: string[] | 'peerDeps' | 'all';
  clean?: boolean;
  name?: string;
}
```

---

