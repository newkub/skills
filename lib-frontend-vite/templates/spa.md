---
title: SPA Project Template
description: Template สำหรับสร้าง Single Page Application ด้วย Vite
---

# SPA Project Template

## โครงสร้างโปรเจกต์

```text
my-spa/
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
├── .env
├── .env.development
├── .env.production
├── public/
│   ├── favicon.ico
│   └── robots.txt
└── src/
    ├── assets/
    │   ├── images/
    │   └── fonts/
    ├── components/
    │   ├── common/
    │   │   ├── Button.vue
    │   │   └── Input.vue
    │   └── layout/
    │       ├── Header.vue
    │       └── Footer.vue
    ├── composables/
    │   └── useAuth.ts
    ├── router/
    │   └── index.ts
    ├── stores/
    │   └── counter.ts
    ├── styles/
    │   ├── variables.css
    │   └── global.css
    ├── utils/
    │   └── helpers.ts
    ├── views/
    │   ├── Home.vue
    │   ├── About.vue
    │   └── NotFound.vue
    ├── App.vue
    └── main.ts
```

---

## vite.config.ts

```typescript
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

export default defineConfig(({ mode }) => ({
  plugins: [vue()],
  
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
      '@components': resolve(__dirname, 'src/components'),
      '@composables': resolve(__dirname, 'src/composables'),
      '@stores': resolve(__dirname, 'src/stores'),
      '@utils': resolve(__dirname, 'src/utils'),
      '@views': resolve(__dirname, 'src/views'),
      '@assets': resolve(__dirname, 'src/assets')
    }
  },
  
  server: {
    port: 5173,
    open: true,
    cors: true,
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  },
  
  build: {
    target: 'esnext',
    outDir: 'dist',
    sourcemap: mode === 'development',
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['vue', 'vue-router', 'pinia'],
          ui: ['@headlessui/vue']
        }
      }
    }
  }
}))
```

---

## package.json

```json
{
  "name": "my-spa",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vue-tsc --noEmit && vite build",
    "build:staging": "vue-tsc --noEmit && vite build --mode staging",
    "preview": "vite preview",
    "typecheck": "vue-tsc --noEmit",
    "lint": "eslint . --ext .vue,.ts,.tsx --fix",
    "test": "vitest",
    "test:coverage": "vitest --coverage"
  },
  "dependencies": {
    "vue": "^3.4.0",
    "vue-router": "^4.2.0",
    "pinia": "^2.1.0",
    "@headlessui/vue": "^1.7.0"
  },
  "devDependencies": {
    "@vitejs/plugin-vue": "^5.0.0",
    "@vue/tsconfig": "^0.5.0",
    "typescript": "^5.3.0",
    "vite": "^5.0.0",
    "vue-tsc": "^1.8.0",
    "vitest": "^1.0.0",
    "@vue/test-utils": "^2.4.0"
  }
}
```

---

## คำสั่งที่ใช้บ่อย

```bash
# Development
bun run dev

# Build
bun run build
bun run build:staging

# Preview
bun run preview

# Testing
bun run test
bun run test:coverage

# Type checking
bun run typecheck

# Linting
bun run lint
```
