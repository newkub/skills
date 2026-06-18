# configuration

## nuxt.config.ts Options

### General

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `ssr` | `boolean` | `true` | Enable/disable SSR |
| `devtools` | `boolean \| object` | `false` | Enable Nuxt DevTools |
| `modules` | `string[]` | `[]` | Nuxt modules |
| `compatibilityDate` | `string` | - | Nuxt version compatibility |
| `features` | `object` | `{}` | Enable/disable optional features |
| `future` | `object` | `{}` | Early opt-in to future features |

### App

| Option | Type | Description |
|--------|------|-------------|
| `app.baseURL` | `string` | Base URL (default: `/`) |
| `app.buildAssetsDir` | `string` | Build assets directory |
| `app.cdnURL` | `string` | CDN URL |
| `app.head` | `object` | Default head tags |
| `app.keepalive` | `boolean` | Keep alive between pages |
| `app.layoutTransition` | `boolean \| object` | Layout transition |
| `app.pageTransition` | `boolean \| object` | Page transition |

### Runtime Config

| Option | Type | Description |
|--------|------|-------------|
| `runtimeConfig` | `object` | Runtime config variables |
| `runtimeConfig.public` | `object` | Public variables (client-side) |

### Routing

| Option | Type | Description |
|--------|------|-------------|
| `routeRules` | `object` | Route-specific rendering rules |
| `experimental.warpRoute` | `boolean` | Warp route matching |

### Rendering

| Option | Type | Description |
|--------|------|-------------|
| `routeRules` | `object` | Per-route rendering rules |
| `nitro.prerender.crawlLinks` | `boolean` | Crawl links for prerendering |
| `nitro.prerender.routes` | `string[]` | Routes to prerender |

### TypeScript

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `typescript.strict` | `boolean` | `true` | Strict type checking |
| `typescript.typeCheck` | `boolean` | `false` | Type check during build |
| `typescript.shim` | `boolean` | `false` | Generate type shims |

### CSS

| Option | Type | Description |
|--------|------|-------------|
| `css` | `string[]` | Global CSS files |
| `postcss` | `object` | PostCSS configuration |

## routeRules Examples

```typescript
// nuxt.config.ts
export default defineNuxtConfig({
  routeRules: {
    // Static generation
    '/': { prerender: true },
    
    // SPA mode
    '/admin/**': { ssr: false },
    
    // SWR with 1 hour cache
    '/blog/**': { swr: 3600 },
    
    // ISR with revalidation
    '/products/**': { isr: 60 },
    
    // Headers
    '/api/**': { cors: true }
  }
})
```

## Environment Variables

| Variable | Description |
|----------|-------------|
| `NUXT_PUBLIC_*` | Public variables (client-side) |
| `NUXT_*` | Private variables (server-side) |

## nitro Configuration

```typescript
// nuxt.config.ts
export default defineNuxtConfig({
  nitro: {
    preset: 'node-server',
    compressPublicAssets: true,
    prerender: {
      crawlLinks: true,
      routes: ['/', '/about']
    }
  }
})
```

## features Configuration

```typescript
// nuxt.config.ts
export default defineNuxtConfig({
  features: {
    // Stream server logs to client (default: true in dev)
    devLogs: true,

    // Inline styles when rendering HTML (Vite only)
    inlineStyles: false, // or function: (id) => id.includes('.vue')

    // Turn off Nuxt scripts and JS resource hints
    noScripts: false, // or 'production' | 'all'
  }
})
```

## future Configuration

```typescript
// nuxt.config.ts
export default defineNuxtConfig({
  future: {
    // Early opt-in to Nuxt 5 features
    compatibilityVersion: 4, // or 5 for Nuxt 5 preview

    // Experimental multi-app support
    multiApp: false,

    // TypeScript bundler resolution
    typescriptBundlerResolution: false,
  }
})
```