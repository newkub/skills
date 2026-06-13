# Configuration - WXT

## wxt.config.ts

### Basic Config

```typescript
import { defineConfig } from 'wxt'

export default defineConfig({
  outDir: '.output',
  entrypointsDir: 'entrypoints',
})
```

### Browser Config

```typescript
export default defineConfig({
  browser: 'chromium',
  target: ['chrome', 'firefox'],
})
```

### Manifest Config

```typescript
export default defineConfig({
  manifest: {
    name: 'My Extension',
    version: '1.0.0',
    description: 'A web extension',
    permissions: ['storage', 'tabs'],
    host_permissions: ['<all_urls>'],
  }
})
```

## Configuration Options

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `outDir` | `string` | `.output` | Output directory |
| `entrypointsDir` | `string` | `entrypoints` | Entrypoint directory |
| `browser` | `string` | `chromium` | Default browser |
| `target` | `string[]` | `[browser]` | Target browsers |
| `manifest` | `Manifest` | `auto` | Manifest config |
| `vite` | `ViteConfigFn` | - | Vite config |
| `hooks` | `WxtHooks` | `{}` | Build hooks |

## Environment Variables

| Variable | Description |
|----------|-------------|
| `WXT_TARGETS` | Comma-separated targets |
| `WXT_OUT_DIR` | Output directory |
| `WXT_ENTRYPOINTS_DIR` | Entrypoints directory |

## TypeScript Config

```json
{
  "compilerOptions": {
    "module": "ES2022",
    "moduleResolution": "bundler",
    "target": "ES2022",
    "strict": true
  }
}
```

## Vite Config

```typescript
export default defineConfig({
  vite: () => ({
    build: {
      rollupOptions: {
        output: {
          manualChunks: {
            vendor: ['react']
          }
        }
      }
    }
  })
})
```