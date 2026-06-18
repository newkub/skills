# Integration

## CSS Frameworks

### Tailwind CSS

```bash
bun install -D @nuxtjs/tailwindcss
```

```typescript
// nuxt.config.ts
export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss']
})
```

### UnoCSS

```bash
bun install -D @unocss/nuxt
```

```typescript
// nuxt.config.ts
export default defineNuxtConfig({
  modules: ['@unocss/nuxt']
})
```

## UI Libraries

### Nuxt UI

```bash
bun install @nuxt/ui
```

```typescript
// nuxt.config.ts
export default defineNuxtConfig({
  modules: ['@nuxt/ui']
})
```

### shadcn-nuxt

```bash
npx nuxi module add shadcn
```

## State Management

### Pinia

```bash
bun install @pinia/nuxt pinia
```

```typescript
// nuxt.config.ts
export default defineNuxtConfig({
  modules: ['@pinia/nuxt']
})
```

## Authentication

### Auth.js

```bash
bun install @sidebase/nuxt-auth
```

```typescript
// nuxt.config.ts
export default defineNuxtConfig({
  modules: ['@sidebase/nuxt-auth'],
  auth: {
    provider: 'authjs'
  }
})
```

## Database

### Prisma

```bash
bun install prisma @prisma/client
npx prisma init
```

### Drizzle

```bash
bun install drizzle-orm drizzle-kit
```

## API Client

### OFetch

```typescript
// composables/useApi.ts
export function useApi() {
  return $fetch.create({
    baseURL: '/api'
  })
}
```

## Testing

### Vitest

```bash
bun install -D vitest @nuxt/test-utils
```

```typescript
// vitest.config.ts
import { defineConfig } from 'vitest/config'

export default defineConfig({
  plugins: [Nuxt({ test: true })]
})
```

### Playwright

```bash
bun install -D @playwright/test
npx playwright install
```

## Deployment

### Vercel

```json
// package.json
{
  "scripts": {
    "build": "nuxt build",
    "generate": "nuxt generate",
    "preview": "nuxt preview"
  }
}
```

### Netlify

```toml
# netlify.toml
[build]
  command = "bun run generate"
  publish = ".output/public"
```

### Cloudflare Pages

```bash
bun install -D @nuxtjs/cloudflare
```

## Analytics

### Vercel Analytics

```bash
bun install @vercel/analytics
```

```vue
<!-- app.vue -->
<script setup lang="ts">
import { inject } from 'vue'

onMounted(() => {
  import('@vercel/analytics').then(({ inject }) => {
    inject()
  })
})
</script>
```

## Monitoring

### Sentry

```bash
bun install @sentry/vue
```

```typescript
// plugins/sentry.client.ts
import * as Sentry from '@sentry/vue'

export default defineNuxtPlugin((nuxtApp) => {
  Sentry.init({
    app: nuxtApp.vueApp,
    dsn: process.env.SENTRY_DSN
  })
})
```