# Configuration - WXT

## Basic Configuration

สร้างไฟล์ `wxt.config.ts` ที่ root ของ project:

```typescript
import { defineConfig } from 'wxt'

export default defineConfig({
  // Project settings
  outDir: '.output',
  entrypointsDir: 'entrypoints',
  
  // Browser settings
  browser: 'chromium',
  target: ['chrome', 'firefox'],
})
```

## Full Configuration Options

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `outDir` | `string` | `.output` | Output directory |
| `entrypointsDir` | `string` | `entrypoints` | Entrypoint directory |
| `browser` | `string` | `chromium` | Default browser |
| `target` | `string[]` | `[browser]` | Target browsers |
| `manifest` | `Manifest` | `auto` | Manifest configuration |
| `vite` | `ViteConfigFn` | - | Vite config override |
| `hooks` | `WxtHooks` | `{}` | Build hooks |

## Manifest Configuration

```typescript
export default defineConfig({
  manifest: {
    name: 'My Extension',
    version: '1.0.0',
    description: 'A web extension',
    permissions: ['storage', 'tabs'],
    host_permissions: ['<all_urls>'],
    action: {
      default_icon: {
        '16': 'icon-16.png',
        '48': 'icon-48.png',
      }
    }
  }
})
```

## Vite Configuration

```typescript
export default defineConfig({
  vite: (config) => ({
    ...config,
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

## Environment Variables

```bash
WXT_TARGETS=chrome,firefox
WXT_OUT_DIR=.output
WXT_ENTRYPOINTS_DIR=entrypoints
```

## Multiple Configurations

```typescript
// wxt.config.ts
import { defineConfig } from 'wxt'

export default defineConfig({
  // Base config
})

// wxt.config.ts for Firefox-specific
export default defineConfig({
  browser: 'firefox',
  manifest: {
    browser_specific_settings: {
      gecko: {
        id: 'my-extension@example.com'
      }
    }
  }
})
```

## TypeScript Configuration

```json
// tsconfig.json
{
  "compilerOptions": {
    "target": "ES2022",
    "module": "ES2022",
    "moduleResolution": "bundler",
    "strict": true
  }
}
```