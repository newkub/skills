---
title: Perf - Code Splitting
description: การแบ่ง code เป็น chunks สำหรับ optimize loading performance
---

# Code Splitting Patterns

## Manual Code Splitting

Vite 6+ ใช้ Rolldown (Rust bundler) สำหรับ production build:

```typescript
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    // Rolldown options
    rolldownOptions: {
      output: {
        // Manual code splitting
        codeSplitting: {
          // แยก vendor libraries
          'vendor': ['vue', 'vue-router', 'pinia'],
          // แยกตาม feature
          'ui': ['./src/components/ui/index.ts'],
        }
      }
    }
  }
})
```

### Legacy Rollup Options (Vite 5 และก่อนหน้า)

```typescript
export default defineConfig({
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['vue', 'vue-router', 'pinia'],
          ui: ['./src/components/ui/index.ts'],
        }
      }
    }
  }
})
```

---

## Dynamic Import สำหรับ Lazy Loading

```typescript
// แทนที่จะ import ตรงๆ
import HeavyComponent from './HeavyComponent.vue'

// ใช้ dynamic import
const HeavyComponent = defineAsyncComponent(() =>
  import('./HeavyComponent.vue')
)

// หรือใน router
const routes = [
  {
    path: '/heavy',
    component: () => import('./views/HeavyView.vue')
  }
]
```

---

## Route-based Code Splitting

```typescript
// router/index.ts
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: () => import('../views/Home.vue')
    },
    {
      path: '/dashboard',
      component: () => import('../views/Dashboard.vue'),
      // Lazy load child routes
      children: [
        {
          path: 'analytics',
          component: () => import('../views/dashboard/Analytics.vue')
        }
      ]
    }
  ]
})
```

---

## Prefetching & Preloading

```typescript
// Prefetch on viewport
const Component = defineAsyncComponent({
  loader: () => import('./HeavyComponent.vue'),
  delay: 200,
  timeout: 3000
})

// หรือ manual prefetch
const prefetchComponent = () => {
  const link = document.createElement('link')
  link.rel = 'prefetch'
  link.href = '/chunks/HeavyComponent.js'
  document.head.appendChild(link)
}
```
