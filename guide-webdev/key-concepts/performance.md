# Performance

## Overview

หลักการและเทคนิคการ optimize performance ของ web applications

## Core Web Vitals

| Metric | Target | What It Measures |
|--------|--------|-----------------|
| **LCP** | < 2.5s | Largest Contentful Paint |
| **FID** | < 100ms | First Input Delay |
| **CLS** | < 0.1 | Cumulative Layout Shift |
| **INP** | < 200ms | Interaction to Next Paint |

## Performance Budget

| Resource | Budget |
|----------|--------|
| **HTML** | < 50KB |
| **CSS** | < 50KB |
| **JavaScript** | < 200KB (initial) |
| **LCP Image** | < 500KB |
| **TTI** | < 3s on 3G |

## Optimization Strategies

### 1. Bundle Optimization

| Technique | Description | Impact |
|-----------|-------------|--------|
| **Code Splitting** | Split by routes | -50% initial JS |
| **Tree Shaking** | Remove dead code | -30% bundle size |
| **Compression** | gzip/brotli | -70% transfer size |
| **Dynamic Import** | Lazy load modules | Faster TTI |

### 2. Image Optimization

| Technique | Tool | Savings |
|-----------|------|---------|
| **WebP/AVIF** | Convert images | -30-50% |
| **Responsive Images** | srcset attribute | Right size per device |
| **Lazy Loading** | loading="lazy" | Defer off-screen |
| **CDN** | Cloudflare, Cloudinary | Global delivery |

### 3. Rendering Performance

```typescript
// Avoid layout thrashing
// Bad: interleaved reads/writes
element.style.height = element.offsetHeight + 'px'  // read
element.style.width = element.offsetWidth + 'px'    // read
element.style.margin = '10px'                       // write

// Good: batch operations
const height = element.offsetHeight  // read all
const width = element.offsetWidth    // read all
element.style.height = height + 'px' // single write reflow
```

### 4. Caching Strategy

| Cache Type | Duration | Use Case |
|------------|----------|----------|
| **Browser Cache** | 1 year | Static assets (hash-named) |
| **CDN Cache** | 1 year | Assets, images |
| **Memory Cache** | Session | API responses |
| **Service Worker** | Custom | Offline-first apps |

## Summary

| Category | Optimization |
|----------|--------------|
| **Core Vitals** | LCP < 2.5s, FID < 100ms, CLS < 0.1 |
| **Bundle** | Code splitting, tree shaking, compression |
| **Images** | WebP, responsive, lazy loading |
| **Rendering** | Batch reads/writes, CSS containment |
| **Caching** | Multi-layer caching strategy |
