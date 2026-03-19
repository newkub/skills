---
title: Feature - Production Build
description: ความสามารถในการ build โปรเจกต์สำหรับ production ด้วย optimization
---

# Production Build

## Production Build คืออะไร

Production build คือกระบวนการ compile และ optimize โค้ดสำหรับ deploy ไปยัง production environment โดย Vite ใช้ Rollup (หรือ Rolldown ใน Vite 6+) เพื่อสร้าง optimized bundles

### ความแตกต่างระหว่าง Dev และ Production

| Aspect | Development | Production |
|--------|-------------|------------|
| Bundler | Native ESM | Rollup/Rolldown |
| Transforms | On-demand | Pre-bundled |
| Minification | ไม่มี | Terser/esbuild |
| Source Maps | มี | Configurable |
| Code Splitting | ไม่มี | มี |
| Tree Shaking | Limited | Full |

---

## Build Configuration

### Basic Build Config

```typescript
// vite.config.ts
export default defineConfig({
  build: {
    // Output directory
    outDir: 'dist',
    
    // Static assets directory
    assetsDir: 'assets',
    
    // Minification
    minify: 'esbuild', // 'esbuild' | 'terser' | false
    
    // Source maps
    sourcemap: false,
    
    // Target browsers
    target: 'es2020',
    
    // CSS optimization
    cssCodeSplit: true,
    cssMinify: true
  }
})
```

### Advanced Build Options

```typescript
export default defineConfig({
  build: {
    // Library mode
    lib: {
      entry: './src/index.ts',
      name: 'MyLib',
      formats: ['es', 'cjs', 'umd'],
      fileName: (format) => `my-lib.${format}.js`
    },
    
    // Rollup options
    rollupOptions: {
      // External dependencies
      external: ['vue', 'react'],
      
      output: {
        // Global variables for UMD
        globals: {
          vue: 'Vue',
          react: 'React'
        },
        
        // Manual code splitting
        manualChunks: {
          vendor: ['vue', 'vue-router']
        }
      }
    },
    
    // Asset handling
    assetsInlineLimit: 4096,
    
    // Chunk size warning
    chunkSizeWarningLimit: 500,
    
    // Watch mode
    watch: null, // { ... }
    
    // Write bundle to disk
    write: true,
    
    // Empty outDir before build
    emptyOutDir: true
  }
})
```

---

## Build Commands

### CLI Commands

```bash
# Standard build
bunx vite build

# Build with specific mode
bunx vite build --mode production
bunx vite build --mode staging

# Build with config
bunx vite build --config vite.prod.config.ts

# Build and watch
bunx vite build --watch

# Force build (skip cache)
bunx vite build --force
```

### Package Scripts

```json
{
  "scripts": {
    "build": "vite build",
    "build:staging": "vite build --mode staging",
    "build:analyze": "vite build --mode analyze",
    "preview": "vite preview"
  }
}
```

---

## Code Splitting

### Manual Chunks

```typescript
export default defineConfig({
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          // Vendor chunks
          'vendor-vue': ['vue', 'vue-router', 'pinia'],
          'vendor-ui': ['@headlessui/vue'],
          
          // Feature chunks
          'feature-dashboard': ['./src/views/Dashboard.vue'],
          'feature-analytics': ['./src/views/Analytics.vue']
        }
      }
    }
  }
})
```

### Dynamic Imports

```typescript
// Automatic code splitting
const Dashboard = () => import('./views/Dashboard.vue')

// With prefetch
const AdminPanel = () => import(
  /* webpackChunkName: "admin" */
  /* webpackPrefetch: true */
  './views/Admin.vue'
)
```

---

## Bundle Analysis

### Build Analysis Tools

```bash
# Install bundle analyzer
bun add -D rollup-plugin-visualizer
```

```typescript
import { visualizer } from 'rollup-plugin-visualizer'

export default defineConfig({
  plugins: [
    process.env.ANALYZE && visualizer({
      open: true,
      gzipSize: true,
      brotliSize: true,
      filename: 'dist/stats.html'
    })
  ].filter(Boolean)
})
```

```bash
# Run with analysis
ANALYZE=true bunx vite build
```

---

## Build Performance

### Memory Management

```typescript
export default defineConfig({
  build: {
    // ลด memory usage
    reportCompressedSize: false,
    
    rollupOptions: {
      // แบ่ง chunks ให้เล็กลง
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return 'vendor'
          }
        }
      }
    }
  }
})
```

### Parallel Builds

```bash
# สำหรับ large projects ใช้ NODE_OPTIONS
export NODE_OPTIONS="--max-old-space-size=4096"
bunx vite build
```

---

## Production Optimization

### Pre-compression

```bash
bun add -D vite-plugin-compression
```

```typescript
import compression from 'vite-plugin-compression'

export default defineConfig({
  plugins: [
    compression({
      algorithm: 'gzip',
      ext: '.gz'
    }),
    compression({
      algorithm: 'brotliCompress',
      ext: '.br'
    })
  ]
})
```

### Image Optimization

```bash
bun add -D vite-plugin-imagemin
```

```typescript
import viteImagemin from 'vite-plugin-imagemin'

export default defineConfig({
  plugins: [
    viteImagemin({
      mozjpeg: { quality: 80 },
      pngquant: { quality: [0.8, 0.9] }
    })
  ]
})
```

---

## Build Troubleshooting

### Out of Memory

```bash
# เพิ่ม Node memory limit
export NODE_OPTIONS="--max-old-space-size=8192"
bunx vite build
```

### Slow Build

```typescript
export default defineConfig({
  build: {
    // ปิด sourcemaps ถ้าไม่จำเป็น
    sourcemap: false,
    
    // ปิด compression reporting
    reportCompressedSize: false,
    
    // ใช้ esbuild แทน terser (เร็วกว่า)
    minify: 'esbuild'
  }
})
```
