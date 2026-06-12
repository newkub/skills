# Ecosystem

## Vite Ecosystem

Vite มี ecosystem ที่กว้างขวางประกอบด้วย plugins, tools, และ integrations

## Official Plugins

### Framework Plugins

| Plugin | Framework | Description |
|--------|-----------|-------------|
| @vitejs/plugin-vue | Vue 3 | Official Vue 3 plugin |
| @vitejs/plugin-react | React | Official React plugin |
| @vitejs/plugin-react-swc | React | React plugin with SWC |
| @vitejs/plugin-svelte | Svelte | Official Svelte plugin |
| @vitejs/plugin-solid | SolidJS | Official SolidJS plugin |
| @vitejs/plugin-vue-jsx | Vue JSX | Vue JSX support |

### Installation

```bash
# Vue
bun add -D @vitejs/plugin-vue

# React
bun add -D @vitejs/plugin-react

# Svelte
bun add -D @vitejs/plugin-svelte
```

## Popular Community Plugins

### 1. Build Optimization

#### vite-plugin-compression

Compress assets ใน production build

```bash
bun add -D vite-plugin-compression
```

```typescript
import viteCompression from 'vite-plugin-compression'

export default defineConfig({
  plugins: [
    viteCompression({
      algorithm: 'gzip',
      ext: '.gz',
    }),
  ],
})
```

#### rollup-plugin-visualizer

Visualize bundle size

```bash
bun add -D rollup-plugin-visualizer
```

```typescript
import { visualizer } from 'rollup-plugin-visualizer'

export default defineConfig({
  plugins: [
    visualizer({ open: true }),
  ],
})
```

### 2. CSS Optimization

#### vite-plugin-purgecss

Remove unused CSS

```bash
bun add -D vite-plugin-purgecss
```

```typescript
import { purgeCss } from 'vite-plugin-purgecss'

export default defineConfig({
  plugins: [
    purgeCss({
      content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    }),
  ],
})
```

#### vite-plugin-sass-dts

Generate TypeScript definitions for SCSS

```bash
bun add -D vite-plugin-sass-dts
```

### 3. Development Tools

#### vite-plugin-inspect

Inspect Vite plugins และ internals

```bash
bun add -D vite-plugin-inspect
```

```typescript
import Inspect from 'vite-plugin-inspect'

export default defineConfig({
  plugins: [
    Inspect(),
  ],
})
```

#### vite-plugin-remix-routes

Generate routes สำหรับ Remix

```bash
bun add -D vite-plugin-remix-routes
```

### 4. Testing

#### vite-plugin-vitest

Integrate Vitest กับ Vite

```bash
bun add -D vitest @vitest/ui
```

```typescript
/// <reference types="vitest" />
import { defineConfig } from 'vite'

export default defineConfig({
  test: {
    globals: true,
    environment: 'jsdom',
  },
})
```

### 5. UI Components

#### unplugin-vue-components

Auto-import Vue components

```bash
bun add -D unplugin-vue-components unplugin-auto-import
```

```typescript
import Components from 'unplugin-vue-components/vite'
import AutoImport from 'unplugin-auto-import/vite'

export default defineConfig({
  plugins: [
    Components({
      dts: true,
    }),
    AutoImport({
      dts: true,
    }),
  ],
})
```

## Integrations

### 1. Testing Frameworks

#### Vitest

Unit testing framework ที่ built-in กับ Vite

```bash
bun add -D vitest @vitest/ui
```

```typescript
// vitest.config.ts
import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    globals: true,
    environment: 'jsdom',
  },
})
```

#### Playwright

E2E testing สำหรับ Vite projects

```bash
bun add -D @playwright/test
```

```typescript
// playwright.config.ts
import { defineConfig } from '@playwright/test'

export default defineConfig({
  testDir: './tests/e2e',
  use: {
    baseURL: 'http://localhost:5173',
  },
})
```

### 2. CSS Frameworks

#### Tailwind CSS

```bash
bun add -D tailwindcss postcss autoprefixer
bunx tailwindcss init -p
```

```css
/* tailwind.config.js */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

#### UnoCSS

```bash
bun add -D unocss
```

```typescript
// vite.config.ts
import UnoCSS from 'unocss/vite'

export default defineConfig({
  plugins: [
    UnoCSS(),
  ],
})
```

### 3. State Management

#### Pinia (Vue)

```bash
bun add pinia
```

```typescript
// src/stores/index.ts
import { createPinia } from 'pinia'

const pinia = createPinia()

export default pinia
```

#### Zustand (React)

```bash
bun add zustand
```

```typescript
// src/store.ts
import create from 'zustand'

export const useStore = create((set) => ({
  count: 0,
  increment: () => set((state) => ({ count: state.count + 1 })),
}))
```

### 4. Routing

#### Vue Router

```bash
bun add vue-router
```

```typescript
// src/router/index.ts
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [],
})

export default router
```

#### React Router

```bash
bun add react-router-dom
```

```typescript
// src/App.tsx
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}
```

## Tools

### 1. CLI Tools

#### Vite CLI

```bash
# Create new project
bunx create-vite my-app

# Preview production build
bunx vite preview

# Optimize dependencies
bunx vite optimize
```

#### Vitest CLI

```bash
# Run tests
bunx vitest

# Run tests with UI
bunx vitest --ui

# Run tests in watch mode
bunx vitest --watch
```

### 2. Development Tools

#### Vite DevTools

Browser extension สำหรับ debugging Vite apps

#### Vue DevTools

Official Vue DevTools extension

#### React DevTools

Official React DevTools extension

## Starter Templates

### 1. Official Templates

```bash
# Vue
bunx create-vite my-app --template vue

# React
bunx create-vite my-app --template react

# React + TypeScript
bunx create-vite my-app --template react-ts

# Vue + TypeScript
bunx create-vite my-app --template vue-ts
```

### 2. Community Templates

#### Vitesse

Vue 3 + TypeScript + Vite starter

```bash
bunx degit antfu/vitesse my-app
```

#### Vite React Starter

React + TypeScript + Vite starter

```bash
bunx degit sveltejs/vite-react my-app
```

## Resources

### Official Documentation

- Vite Docs: https://vitejs.dev/
- Plugin API: https://vitejs.dev/guide/api-plugin.html
- Config Reference: https://vitejs.dev/config/

### Community

- Discord: https://chat.vitejs.dev/
- GitHub: https://github.com/vitejs/vite
- Twitter: https://twitter.com/vite_js

### Examples

- Vite Examples: https://github.com/vitejs/awesome-vite
- StackBlitz: https://stackblitz.com/
