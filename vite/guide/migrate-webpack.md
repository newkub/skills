---
title: Migration from Webpack
description: คู่มือการย้ายโปรเจกต์จาก Webpack มาใช้ Vite
---

# Migration from Webpack

## เปรียบเทียบโครงสร้าง

### Webpack vs Vite Config

| Webpack | Vite |
|---------|------|
| `webpack.config.js` | `vite.config.ts` |
| `webpack-dev-server` | `vite` (built-in) |
| `html-webpack-plugin` | `index.html` (native) |
| `mini-css-extract-plugin` | Built-in CSS handling |
| `terser-webpack-plugin` | Built-in minification |

---

## ขั้นตอน Migration

### Step 1: ติดตั้ง Vite

```bash
bun add -D vite @vitejs/plugin-vue
# หรือ framework ที่ใช้
bun add -D @vitejs/plugin-react
bun add -D @vitejs/plugin-svelte
```

### Step 2: สร้าง vite.config.ts

```typescript
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

export default defineConfig({
  plugins: [vue()],
  
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
      // ย้าย alias จาก webpack resolve.alias
    },
    // Vite ไม่ต้องกำหนด extensions เยอะ
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.vue']
  },
  
  server: {
    port: 8080,  // ตามที่เคยใช้ใน webpack
    proxy: {
      // ย้าย proxy จาก webpack devServer.proxy
      '/api': {
        target: 'http://localhost:3000',
        changeOrigin: true
      }
    }
  },
  
  build: {
    outDir: 'dist',  // default คือ 'dist'
    sourcemap: true,
    
    rollupOptions: {
      output: {
        // คล้าย webpack optimization.splitChunks
        manualChunks: {
          vendor: ['vue', 'vue-router', 'pinia']
        }
      }
    }
  }
})
```

### Step 3: อัพเดท index.html

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" href="/favicon.ico" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>My App</title>
  </head>
  <body>
    <div id="app"></div>
    <!-- Vite จัดการ script อัตโนมัติ -->
    <script type="module" src="/src/main.ts"></script>
  </body>
</html>
```

หมายเหตุ: ไม่ต้องใช้ `html-webpack-plugin` แล้ว

### Step 4: ย้าย Environment Variables

```text
# .env (Webpack)
REACT_APP_API_URL=http://localhost:3000

# .env (Vite) - ต้องขึ้นต้นด้วย VITE_
VITE_API_URL=http://localhost:3000
```

```typescript
// Webpack
const apiUrl = process.env.REACT_APP_API_URL

// Vite
const apiUrl = import.meta.env.VITE_API_URL
```

### Step 5: อัพเดท Imports

```typescript
// Webpack - ใช้ได้แต่ไม่แนะนำ
import Component from './Component'

// Vite - ต้องระบุ extension ชัดเจน
import Component from './Component.vue'
import Helper from './helper.ts'
```

---

## ปัญหาที่พบบ่อย

### Issue 1: require() not working

```typescript
// Webpack
const config = require('./config')

// Vite - ใช้ ESM
import config from './config'
// หรือ dynamic import
const config = await import('./config')
```

### Issue 2: __dirname ไม่ทำงาน

```typescript
// Vite ใช้ import.meta.url แทน
import { fileURLToPath } from 'url'
import { dirname, resolve } from 'path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
```

### Issue 3: SVG imports

```typescript
// Webpack (svg-loader)
import Logo from './logo.svg?react'

// Vite
import Logo from './logo.svg?component'
// หรือใช้ plugin
import Logo from './logo.svg'
```

---

## Build Scripts

```json
{
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview",
    "serve": "vite preview --port 8080"
  }
}
```

---

## Verification Checklist

- [ ] Dev server รันได้ (`bun run dev`)
- [ ] HMR ทำงาน (แก้ไขไฟล์แล้ว browser อัพเดท)
- [ ] Build ผ่าน (`bun run build`)
- [ ] Environment variables โหลดถูกต้อง
- [ ] Proxy ทำงาน (ถ้ามี)
- [ ] Static assets โหลดถูกต้อง
- [ ] Source maps มีใน dev mode
