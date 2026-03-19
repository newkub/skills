---
title: Build Optimization Techniques
description: เทคนิคการ optimize build time และ bundle size สำหรับ Vite
---

# Build Optimization Techniques

## 1. Dependency Pre-bundling Optimization

```typescript
export default defineConfig({
  optimizeDeps: {
    // Pre-bundle เฉพาะ dependencies ที่ใช้บ่อย
    include: [
      'vue',
      'vue-router',
      'pinia',
      '@headlessui/vue'
    ],
    
    // ยกเว้น libraries ที่เป็น ESM อยู่แล้ว
    exclude: ['vue-demi'],
    
    // Force optimize เมื่อ dependencies เปลี่ยน
    force: false,
    
    // ระบุ entry points สำหรับ scan
    entries: [
      './src/main.ts',
      './src/admin.ts'
    ],
    
    // Hold until crawl end สำหรับ CJS
    holdUntilCrawlEnd: true
  }
})
```

---

## 2. Code Splitting Strategies

### Route-based Splitting

```typescript
// router/index.ts
const routes = [
  {
    path: '/dashboard',
    component: () => import('../views/Dashboard.vue')
  },
  {
    path: '/analytics',
    component: () => import('../views/Analytics.vue')
  }
]
```

### Vendor Chunk Optimization

```typescript
export default defineConfig({
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          // แยก vendors ตามกลุ่ม
          'vendor-core': ['vue', 'vue-router', 'pinia'],
          'vendor-ui': ['@headlessui/vue', '@heroicons/vue'],
          'vendor-utils': ['lodash-es', 'dayjs', 'axios']
        }
      }
    }
  }
})
```

---

## 3. Lazy Loading Components

```vue
<script setup lang="ts">
import { defineAsyncComponent } from 'vue'

// Lazy load heavy components
const HeavyChart = defineAsyncComponent(() =>
  import('./components/HeavyChart.vue')
)

// With loading state
const AsyncModal = defineAsyncComponent({
  loader: () => import('./components/Modal.vue'),
  loadingComponent: LoadingSpinner,
  errorComponent: ErrorFallback,
  delay: 200,
  timeout: 3000
})
</script>
```

---

## 4. Image Optimization

```typescript
export default defineConfig({
  build: {
    assetsInlineLimit: 4096, // Inline images < 4KB
    
    rollupOptions: {
      output: {
        assetFileNames: (assetInfo) => {
          const info = assetInfo.name.split('.')
          const ext = info[info.length - 1]
          
          if (/\.(png|jpe?g|gif|svg|webp)$/i.test(assetInfo.name)) {
            return 'images/[name]-[hash][extname]'
          }
          
          return 'assets/[name]-[hash][extname]'
        }
      }
    }
  }
})
```

### ใช้ Vite Image Plugin

```bash
bun add -D vite-plugin-imagemin
```

```typescript
import viteImagemin from 'vite-plugin-imagemin'

export default defineConfig({
  plugins: [
    viteImagemin({
      gifsicle: { optimizationLevel: 7 },
      optipng: { optimizationLevel: 7 },
      mozjpeg: { quality: 80 },
      pngquant: { quality: [0.8, 0.9] },
      svgo: {
        plugins: [
          { name: 'removeViewBox' },
          { name: 'removeEmptyAttrs', active: false }
        ]
      }
    })
  ]
})
```

---

## 5. CSS Optimization

```typescript
export default defineConfig({
  build: {
    cssCodeSplit: true,     // แยก CSS เป็น chunks
    cssMinify: true,        // Minify CSS (default)
    sourcemap: false        // ปิด sourcemap ใน production
  },
  
  css: {
    devSourcemap: true,     // เปิด sourcemap ใน development
    
    // ใช้ Lightning CSS แทน PostCSS (เร็วกว่า)
    transformer: 'lightningcss',
    lightningcss: {
      targets: {
        chrome: 80
      }
    }
  }
})
```

---

## 6. Build Performance Monitoring

```typescript
import { defineConfig } from 'vite'
import { visualizer } from 'rollup-plugin-visualizer'

export default defineConfig(({ mode }) => ({
  plugins: [
    mode === 'analyze' && visualizer({
      open: true,
      gzipSize: true,
      brotliSize: true,
      filename: 'dist/stats.html'
    })
  ].filter(Boolean)
}))
```

ใช้งาน:

```bash
bunx vite build --mode analyze
```

---

## 7. Memory Optimization

```typescript
export default defineConfig({
  build: {
    // ลด memory usage ใน large projects
    rollupOptions: {
      output: {
        // แยก chunks ขนาดใหญ่
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('vue')) return 'vendor-vue'
            if (id.includes('lodash')) return 'vendor-lodash'
            return 'vendor-others'
          }
        }
      }
    },
    
    // จำกัด concurrent operations
    reportCompressedSize: false,
    chunkSizeWarningLimit: 1000
  }
})
```

---

## 8. Caching Strategies

### HTTP Caching Headers

```typescript
// server.ts (Express example)
app.use(express.static('dist', {
  maxAge: '1y',
  immutable: true,
  setHeaders: (res, path) => {
    if (path.endsWith('.html')) {
      res.setHeader('Cache-Control', 'no-cache')
    }
  }
}))
```

### Service Worker (PWA)

```bash
bun add -D vite-plugin-pwa
```

```typescript
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [
    VitePWA({
      registerType: 'autoUpdate',
      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,png,svg}']
      }
    })
  ]
})
```

---

## 9. Tree Shaking Optimization

```typescript
export default defineConfig({
  build: {
    rollupOptions: {
      treeshake: {
        moduleSideEffects: false,
        propertyReadSideEffects: false,
        tryCatchDeoptimization: false
      }
    }
  }
})
```

### Side Effects ใน package.json

```json
{
  "name": "my-library",
  "sideEffects": [
    "*.css",
    "*.scss"
  ]
}
```

---

## 10. Bundle Analysis

```bash
# วิเคราะห์ bundle size
bun add -D vite-bundle-visualizer
```

```typescript
import { bundleVisualizer } from 'rollup-plugin-visualizer'

export default defineConfig({
  plugins: [
    bundleVisualizer({
      emitFile: true,
      filename: 'stats.html',
      open: true
    })
  ]
})
```

---

## Performance Checklist

- [ ] Pre-bundle dependencies ที่ใช้บ่อย
- [ ] Split routes ด้วย dynamic imports
- [ ] Optimize images ด้วย imagemin
- [ ] ใช้ Lightning CSS แทน PostCSS
- [ ] เปิด CSS code splitting
- [ ] ตั้งค่า caching headers ถูกต้อง
- [ ] วิเคราะห์ bundle ด้วย visualizer
- [ ] ลด chunk size ให้ < 500KB
