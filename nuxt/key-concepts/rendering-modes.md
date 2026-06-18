# Rendering Modes

## Overview

Nuxt 3 supports multiple rendering strategies to optimize performance, SEO, and user experience based on your application needs.

## Rendering Modes

### Server-Side Rendering (SSR)

**Default mode** - Vue components are rendered on the server for each request.

**Benefits:**
- Better SEO (search engines can crawl rendered HTML)
- Faster initial page load (server sends rendered HTML)
- Social media sharing with correct meta tags

**Use Cases:**
- Dynamic content websites
- E-commerce sites
- SEO-critical pages
- Content management systems

**Configuration:**
```typescript
export default defineNuxtConfig({
  ssr: true // default
})
```

### Static Site Generation (SSG)

Pre-renders pages at build time into static HTML files.

**Benefits:**
- Fastest performance (served from CDN)
- No server costs
- Great for static content
- Excellent SEO

**Use Cases:**
- Documentation sites
- Blogs
- Marketing pages
- Portfolios

**Configuration:**
```typescript
export default defineNuxtConfig({
  ssr: true,
  nitro: {
    prerender: {
      routes: ['/']
    }
  }
})
```

**Generate static site:**
```bash
nuxt generate
```

### Hybrid Rendering

Mix different rendering modes per route using route rules.

**Benefits:**
- Optimize each route independently
- Combine SSR, SSG, and SPA in one app
- Flexible performance tuning

**Configuration:**
```typescript
export default defineNuxtConfig({
  routeRules: {
    '/': { prerender: true },              // SSG
    '/blog/**': { isr: 60 },               // ISR (60s)
    '/admin/**': { ssr: false },           // SPA
    '/api/**': { cors: true },             // API routes
  }
})
```

### Incremental Static Regeneration (ISR)

Re-generate static pages on-demand after a specified time.

**Benefits:**
- Static performance with dynamic updates
- Reduced build times
- Fresh content without full rebuilds

**Configuration:**
```typescript
export default defineNuxtConfig({
  routeRules: {
    '/blog/**': { isr: 3600 } // regenerate every hour
  }
})
```

### Single Page Application (SPA)

Client-side rendering only, no server rendering.

**Benefits:**
- Simplest deployment
- Fast navigation after initial load
- Good for admin panels

**Use Cases:**
- Admin dashboards
- Internal tools
- Applications with no SEO requirements

**Configuration:**
```typescript
export default defineNuxtConfig({
  ssr: false
})
```

## Choosing the Right Mode

| Scenario | Recommended Mode |
|----------|------------------|
| Marketing site with dynamic content | SSR |
| Documentation | SSG |
| Blog with frequent updates | ISR |
| Admin panel | SPA |
| E-commerce with SEO needs | SSR |
| Mixed content types | Hybrid |

## Performance Comparison

| Mode | First Load | Navigation | SEO | Server Cost |
|------|------------|-------------|-----|-------------|
| SSR | Fast | Fast | Excellent | High |
| SSG | Fastest | Fastest | Excellent | None |
| ISR | Fast | Fastest | Excellent | Low |
| SPA | Slow | Fast | Poor | Low |

## Route Rules API

```typescript
export default defineNuxtConfig({
  routeRules: {
    // String shorthand for ISR
    '/blog/**': 'isr:3600',
    
    // Object configuration
    '/products/**': {
      isr: 1800,              // 30 minutes
      headers: {
        'Cache-Control': 'public, max-age=1800'
      }
    },
    
    // Disable SSR for specific routes
    '/admin/**': { ssr: false },
    
    // Redirect
    '/old-path': { redirect: '/new-path' },
    
    // CORS
    '/api/**': { cors: true }
  }
})
```

## Edge-Side Rendering

Deploy to edge networks for global performance.

**Benefits:**
- Global low latency
- Auto-scaling
- Serverless pricing

**Supported Platforms:**
- Cloudflare Pages
- Vercel Edge
- Netlify Edge
- AWS Lambda@Edge

**Configuration:**
```typescript
export default defineNuxtConfig({
  nitro: {
    preset: 'cloudflare-pages' // or 'vercel-edge', 'netlify-edge'
  }
})
```
