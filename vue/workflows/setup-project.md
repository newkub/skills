---
description: Setup Vue 3 project with Vite and TypeScript
---

## Goal

Setup Vue 3 project ด้วย Vite, TypeScript, และ best practices

## Execute

### 1. Create Project

```bash
bun create vite@latest my-vue-app -- --template vue-ts
cd my-vue-app
bun install
```

### 2. Install Additional Dependencies

```bash
bun add pinia vue-router
bun add -D @types/node
```

### 3. Configure Vite

ตรวจสอบ `vite.config.ts`:

```typescript
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath, URL } from 'node:url'

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  server: {
    port: 3000
  }
})
```

### 4. Configure TypeScript

ตรวจสอบ `tsconfig.json`:

```json
{
  "compilerOptions": {
    "target": "ES2020",
    "useDefineForClassFields": true,
    "module": "ESNext",
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "skipLibCheck": true,
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "preserve",
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true,
    "baseUrl": ".",
    "paths": {
      "@/*": ["src/*"]
    }
  },
  "include": ["src/**/*.ts", "src/**/*.d.ts", "src/**/*.tsx", "src/**/*.vue"],
  "references": [{ "path": "./tsconfig.node.json" }]
}
```

### 5. Setup Project Structure

สร้าง directories:

```bash
mkdir -p src/components src/views src/stores src/router src/composables src/assets
```

### 6. Setup Router

สร้าง `src/router/index.ts`:

```typescript
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  { path: '/', name: 'Home', component: () => import('@/views/Home.vue') },
  { path: '/about', name: 'About', component: () => import('@/views/About.vue') }
]

export const router = createRouter({
  history: createWebHistory(),
  routes
})
```

### 7. Setup Pinia

สร้าง `src/stores/counter.ts`:

```typescript
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', {
  state: () => ({
    count: 0
  }),
  actions: {
    increment() {
      this.count++
    }
  }
})
```

### 8. Update main.ts

```typescript
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
```

### 9. Run Development

```bash
bun run dev
```

## Expected Outcome

- Vue 3 project พร้อมใช้งาน
- TypeScript configuration เรียบร้อย
- Router และ Pinia setup เรียบร้อย
- Project structure ตาม best practices
