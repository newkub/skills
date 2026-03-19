---
title: Build - Multi Page App (MPA)
description: การตั้งค่า Vite สำหรับ Multi Page Applications หลาย entry points
---

# Multi Page App (MPA) Configuration

## Multi-Page Setup

```typescript
import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        about: resolve(__dirname, 'about/index.html'),
        contact: resolve(__dirname, 'contact/index.html'),
        nested: resolve(__dirname, 'nested/deep/index.html')
      }
    }
  }
})
```

---

## Shared Chunks

```typescript
export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        about: resolve(__dirname, 'about.html')
      },
      output: {
        manualChunks: {
          // แยก shared vendor
          vendor: ['vue', 'vue-router'],
          // แยก utilities
          utils: ['./src/utils/shared.ts']
        }
      }
    }
  }
})
```

---

## HTML Template per Page

```typescript
export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'src/pages/main/index.html'),
        admin: resolve(__dirname, 'src/pages/admin/index.html'),
        login: resolve(__dirname, 'src/pages/login/index.html')
      }
    }
  }
})
```

โครงสร้างโปรเจกต์:

```text
src/
├── pages/
│   ├── main/
│   │   ├── index.html
│   │   ├── main.ts
│   │   └── App.vue
│   ├── admin/
│   │   ├── index.html
│   │   ├── admin.ts
│   │   └── App.vue
│   └── login/
│       ├── index.html
│       ├── login.ts
│       └── App.vue
```

---

## Dynamic Page Generation

```typescript
import { defineConfig } from 'vite'
import { resolve } from 'path'
import fs from 'fs'
import glob from 'glob'

const pages = glob.sync('src/pages/*/index.html')

const input = pages.reduce((acc, page) => {
  const name = page.match(/src\/pages\/(.*)\/index\.html/)?.[1] || 'main'
  acc[name] = resolve(__dirname, page)
  return acc
}, {})

export default defineConfig({
  build: {
    rollupOptions: { input }
  }
})
```
