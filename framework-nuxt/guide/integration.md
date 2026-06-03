# Integration

## CSS Frameworks

### Tailwind CSS

```bash
npm install -D @nuxtjs/tailwindcss
```

```typescript
// nuxt.config.ts
export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss']
})
```

### UnoCSS

```bash
npm install -D @unocss/nuxt
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
npm install @nuxt/ui
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
npm install @pinia/nuxt pinia
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
npm install @sidebase/nuxt-auth
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
npm install prisma @prisma/client
npx prisma init
```

### Drizzle

```bash
npm install drizzle-orm drizzle-kit
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
npm install -D vitest @nuxt/test-utils
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
npm install -D @playwright/test
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
  command = "npm run generate"
  publish = ".output/public"
```

### Cloudflare Pages

```bash
npm install -D @nuxtjs/cloudflare
```

## Analytics

### Vercel Analytics

```bash
npm install @vercel/analytics
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
npm install @sentry/vue
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