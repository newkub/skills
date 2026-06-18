# Performance

## Overview

Optimize Nuxt applications for fast load times, smooth interactions, and efficient resource usage.

## Rendering Mode Selection

Choose the right rendering mode for each route:

```typescript
export default defineNuxtConfig({
  routeRules: {
    // Static content - fastest
    '/': { prerender: true },
    '/about': { prerender: true },
    
    // Dynamic content with infrequent updates
    '/blog/**': { isr: 3600 },
    
    // Highly dynamic content
    '/admin/**': { ssr: true },
    
    // Client-only applications
    '/dashboard/**': { ssr: false }
  }
})
```

## Code Splitting

Nuxt automatically splits code by routes. Split further with dynamic imports:

```vue
<script setup lang="ts">
// ✅ Dynamic import - lazy loaded
const HeavyChart = defineAsyncComponent(
  () => import('~/components/HeavyChart.vue')
)

// ❌ Static import - loaded immediately
import HeavyChart from '~/components/HeavyChart.vue'
</script>
```

## Image Optimization

Use `@nuxt/image` for optimized images:

```vue
<template>
  <!-- ✅ Optimized image -->
  <NuxtImg
    src="/hero.jpg"
    width="1200"
    height="630"
    format="webp"
    loading="lazy"
  />
  
  <!-- ❌ Unoptimized image -->
  <img src="/hero.jpg" alt="Hero" />
</template>
```

## Font Optimization

Use `@nuxtjs/google-fonts` for optimized fonts:

```typescript
export default defineNuxtConfig({
  modules: ['@nuxtjs/google-fonts'],
  googleFonts: {
    families: {
      Inter: [400, 500, 600, 700]
    }
  }
})
```

## Bundle Analysis

Analyze bundle size:

```bash
npx nuxi analyze
```

## Lazy Loading Components

Lazy load components below the fold:

```vue
<template>
  <div>
    <HeroSection />
    <LazyHeavyComponent v-if="showHeavy" />
  </div>
</template>
```

## Prefetching

Nuxt automatically prefetches linked routes. Configure manually:

```typescript
export default defineNuxtConfig({
  router: {
    prefetchLinks: true // default
  }
})
```

## CSS Optimization

- Use CSS modules or scoped styles
- Avoid global CSS when possible
- Purge unused CSS with Tailwind

```typescript
export default defineNuxtConfig({
  css: ['~/assets/css/main.css'],
  build: {
    postcss: {
      plugins: {
        '@tailwindcss/nesting': {},
        autoprefixer: {},
        cssnano: {}
      }
    }
  }
})
```

## JavaScript Optimization

### Minification

```typescript
export default defineNuxtConfig({
  vite: {
    build: {
      minify: 'terser',
      terserOptions: {
        compress: {
          drop_console: true
        }
      }
    }
  }
})
```

### Tree Shaking

Nuxt automatically tree-shakes unused code. Ensure proper imports:

```typescript
// ✅ Tree-shakeable
import { ref } from 'vue'

// ❌ Not tree-shakeable
import * as Vue from 'vue'
```

## Caching

### HTTP Caching

```typescript
export default defineNuxtConfig({
  routeRules: {
    '/api/**': {
      headers: {
        'Cache-Control': 'public, max-age=3600'
      }
    }
  }
})
```

### ISR Caching

```typescript
export default defineNuxtConfig({
  routeRules: {
    '/blog/**': { isr: 3600 } // Cache for 1 hour
  }
})
```

## Server-Side Optimization

### Nitro Configuration

```typescript
export default defineNuxtConfig({
  nitro: {
    compressPublicAssets: true,
    experimental: {
      wasm: true
    }
  }
})
```

### Edge Deployment

Deploy to edge for global performance:

```typescript
export default defineNuxtConfig({
  nitro: {
    preset: 'cloudflare-pages' // or 'vercel-edge'
  }
})
```

## Monitoring

Use performance monitoring tools:

```typescript
export default defineNuxtConfig({
  modules: ['@nuxtjs/web-vitals']
})
```

## Best Practices

- Choose appropriate rendering modes
- Lazy load heavy components
- Optimize images and fonts
- Analyze bundle size regularly
- Implement caching strategies
- Use edge deployment for global performance
- Monitor performance metrics
- Minify and compress assets
- Enable tree shaking
