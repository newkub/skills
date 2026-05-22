---
title: Debugging Common Issues
description: วิธีการ debug และแก้ไขปัญหาที่พบบ่อยใน Vite projects
---

# Debugging Common Issues

## Issue: Slow Dev Server Startup

### สาเหตุ
- Dependencies จำนวนมากต้อง pre-bundle
- Config ที่ซับซ้อน
- Plugin ที่ทำงานช้า

### วิธีแก้ไข

```typescript
// 1. Optimize dependencies
export default defineConfig({
  optimizeDeps: {
    include: ['large-library-1', 'large-library-2'],
    force: true // บังคับ optimize ใหม่
  }
})
```

```bash
# 2. Clear cache
rm -rf node_modules/.vite

# 3. Re-install dependencies
bun install
```

---

## Issue: HMR Not Working

### ตรวจสอบ

```bash
# 1. ตรวจสอบ WebSocket connection
# ดูที่ browser console ว่าเชื่อมต่อ ws://localhost:5173 ได้ไหม

# 2. ตรวจสอบ file path
# ต้องเป็น absolute path ใน index.html
<script type="module" src="/src/main.ts"></script>
```

### วิธีแก้ไข

```typescript
// vite.config.ts
export default defineConfig({
  server: {
    hmr: {
      overlay: true, // แสดง error overlay
      // ถ้าใช้ Docker/WSL อาจต้องกำหนด host
      host: '0.0.0.0',
      port: 5173
    }
  }
})
```

---

## Issue: Module Not Found

### Common Errors

```
[plugin:vite:import-analysis] Failed to resolve import "@/components/Button" from "src/App.vue". Does the file exist?
```

### วิธีแก้ไข

```typescript
// 1. ตรวจสอบ alias
export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@components': path.resolve(__dirname, './src/components')
    }
  }
})

// 2. ตรวจสอบ tsconfig.json paths
{
  "compilerOptions": {
    "paths": {
      "@/*": ["./src/*"],
      "@components/*": ["./src/components/*"]
    }
  }
}

// 3. ใช้ explicit extensions
import Button from '@/components/Button.vue' // .vue จำเป็น!
```

---

## Issue: Build Fails with Out of Memory

### วิธีแก้ไข

```bash
# 1. เพิ่ม Node memory
export NODE_OPTIONS="--max-old-space-size=4096"
bunx vite build

# Windows PowerShell
$env:NODE_OPTIONS="--max-old-space-size=4096"
bunx vite build
```

```typescript
// 2. ปรับ build config
export default defineConfig({
  build: {
    sourcemap: false, // ปิด sourcemap ชั่วคราว
    reportCompressedSize: false, // ปิด compression reporting
    
    rollupOptions: {
      output: {
        manualChunks: {
          // แยก chunks ให้เล็กลง
          'vendor-1': ['lodash-es'],
          'vendor-2': ['axios'],
          'vendor-3': ['dayjs']
        }
      }
    }
  }
})
```

---

## Issue: CSS Not Loading

### ตรวจสอบ

```typescript
// vite.config.ts
export default defineConfig({
  css: {
    devSourcemap: true,
    
    // ถ้าใช้ CSS Modules
    modules: {
      localsConvention: 'camelCaseOnly'
    },
    
    // ถ้าใช้ PostCSS
    postcss: {
      plugins: [
        require('autoprefixer'),
        require('postcss-nested')
      ]
    }
  }
})
```

### CSS Preprocessor Issues

```typescript
export default defineConfig({
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "./src/styles/vars.scss" as *;`,
        // ปิด deprecation warnings
        quietDeps: true
      }
    }
  }
})
```

---

## Issue: Proxy Not Working

### ตรวจสอบ

```typescript
export default defineConfig({
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
        configure: (proxy, options) => {
          proxy.on('error', (err, req, res) => {
            console.log('proxy error', err)
          })
          proxy.on('proxyReq', (proxyReq, req, res) => {
            console.log('Sending Request:', req.method, req.url)
          })
          proxy.on('proxyRes', (proxyRes, req, res) => {
            console.log('Received Response:', proxyRes.statusCode, req.url)
          })
        }
      }
    }
  }
})
```

---

## Issue: TypeScript Errors

### ตรวจสอบ tsconfig.json

```json
{
  "compilerOptions": {
    "target": "ES2020",
    "module": "ESNext",
    "moduleResolution": "bundler",
    "strict": true,
    "jsx": "preserve",
    "sourceMap": true,
    "resolveJsonModule": true,
    "isolatedModules": true,
    "esModuleInterop": true,
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "skipLibCheck": true,
    "noEmit": true
  },
  "include": ["src/**/*.ts", "src/**/*.tsx", "src/**/*.vue"],
  "exclude": ["node_modules", "dist"]
}
```

### Type Declarations

```typescript
// src/vite-env.d.ts
/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_API_URL: string
  readonly VITE_DEBUG: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
```

---

## Issue: Static Assets 404

### ตรวจสอบ Public Directory

```text
project/
├── public/
│   └── images/
│       └── logo.png    # ✅ ถูกต้อง
└── src/
    └── assets/
            └── logo.png  # ✅ ก็ได้ แต่ผ่าน build process
```

```html
<!-- ใช้ใน HTML -->
<img src="/images/logo.png" alt="Logo">

<!-- ใช้ใน Vue/React -->
<img src="/images/logo.png" alt="Logo">
```

### Base URL

```typescript
export default defineConfig({
  base: '/my-app/', // ถ้า deploy ใน subpath
  
  build: {
    assetsDir: 'assets', // default
    assetsInlineLimit: 4096
  }
})
```

---

## Debug Tools

### Vite Plugin Inspect

```bash
bun add -D vite-plugin-inspect
```

```typescript
import Inspect from 'vite-plugin-inspect'

export default defineConfig({
  plugins: [
    Inspect({
      build: true,
      outputDir: '.vite-inspect'
    })
  ]
})
```

เข้า `http://localhost:5173/__inspect`

### Debug Mode

```bash
# Show debug logs
DEBUG=vite:* bunx vite

# Specific debug
DEBUG=vite:resolve bunx vite
DEBUG=vite:transform bunx vite
DEBUG=vite:hmr bunx vite
```

---

## Common Error Messages

### "Cannot find module 'xxx'"

```bash
# Clear everything
rm -rf node_modules
rm -rf node_modules/.vite
bun install
bunx vite optimize --force
```

### "The requested module 'xxx' does not provide an export named 'yyy'"

```typescript
// ใช้ default import แทน
import pkg from 'library'
const { specificExport } = pkg
```

### "Circular dependency"

```typescript
// Refactor โค้ดให้แยก dependencies
// หรือใช้ dynamic import
const module = await import('./module')
```
