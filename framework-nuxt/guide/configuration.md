# Configuration

## nuxt.config.ts

ไฟล์ config หลักสำหรับ Nuxt application

```typescript
// nuxt.config.ts
export default defineNuxtConfig({
  devtools: { enabled: true },
  
  modules: [],
  
  app: {
    head: {
      title: 'My Nuxt App',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' }
      ]
    }
  }
})
```

## Common Options

### App Configuration

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `app.head` | Object | `{}` | HTML head tags |
| `app.baseURL` | String | `/` | Base URL |
| `app.buildAssetsDir` | String | `/_nuxt/` | Build assets directory |
| `app.cdnURL` | String | - | CDN URL |

### Module Configuration

| Option | Type | Description |
|--------|------|-------------|
| `modules` | Array | Nuxt modules to use |
| `buildModules` | Array | Build-only modules |

### Runtime Configuration

| Option | Type | Description |
|--------|------|-------------|
| `runtimeConfig` | Object | Runtime config variables |
| `publicRuntimeConfig` | Object | Public config (client-side) |
| `privateRuntimeConfig` | Object | Private config (server-side) |

### Rendering Configuration

| Option | Type | Description |
|--------|------|-------------|
| `ssr` | Boolean | Enable/disable SSR |
| `routeRules` | Object | Route-specific rules |
| `nitro` | Object | Nitro server config |

### CSS Configuration

| Option | Type | Description |
|--------|------|-------------|
| `css` | Array | Global CSS files |
| `postcss` | Object | PostCSS config |

## Environment Variables

```env
# .env
NUXT_PUBLIC_API_URL=https://api.example.com
NUXT_API_SECRET=your-secret-key
```

## TypeScript Configuration

```typescript
// nuxt.config.ts
export default defineNuxtConfig({
  typescript: {
    strict: true,
    typeCheck: true
  }
})
```

## Module Configuration Examples

### Tailwind CSS

```typescript
// nuxt.config.ts
export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss']
})
```

### Pinia

```typescript
// nuxt.config.ts
export default defineNuxtConfig({
  modules: ['@pinia/nuxt']
})
```

### i18n

```typescript
// nuxt.config.ts
export default defineNuxtConfig({
  modules: ['@nuxtjs/i18n'],
  i18n: {
    locales: ['en', 'th'],
    defaultLocale: 'en'
  }
})
```

## Route Rules

```typescript
// nuxt.config.ts
export default defineNuxtConfig({
  routeRules: {
    '/': { prerender: true },
    '/blog/**': { swr: 3600 },
    '/admin/**': { ssr: false },
    '/api/**': { cors: true }
  }
})
```