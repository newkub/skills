# Setup Vite Project

## Goal

ตั้งค่าโปรเจกต์ Vite ใหม่ด้วย framework ที่ต้องการ

## Scope

สร้างโปรเจกต์ Vite ใหม่พร้อม framework, TypeScript, และ tools ที่จำเป็น

## Steps

### 1. Create Project

ใช้ `create-vite` สร้างโปรเจกต์ใหม่

```bash
bunx create-vite my-app --template vue-ts
```

Templates ที่มี:
- `vanilla` - Vanilla JavaScript
- `vanilla-ts` - Vanilla TypeScript
- `vue` - Vue 3
- `vue-ts` - Vue 3 + TypeScript
- `react` - React
- `react-ts` - React + TypeScript
- `react-swc` - React + SWC
- `react-swc-ts` - React + SWC + TypeScript
- `svelte` - Svelte
- `svelte-ts` - Svelte + TypeScript
- `solid` - SolidJS
- `solid-ts` - SolidJS + TypeScript

### 2. Install Dependencies

```bash
cd my-app
bun install
```

### 3. Run Development Server

```bash
bun run dev
```

### 4. Configure Vite (Optional)

สร้าง `vite.config.ts` ถ้าต้องการ custom config

```typescript
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
})
```

### 5. Add Additional Tools (Optional)

```bash
# Add UI library
bun add element-plus

# Add state management
bun add pinia

# Add router
bun add vue-router
```

## Configuration Options

### Path Aliases

```typescript
// vite.config.ts
import path from 'path'

export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
```

### Proxy Configuration

```typescript
// vite.config.ts
export default defineConfig({
  server: {
    proxy: {
      '/api': {
        target: 'http://backend:3000',
        changeOrigin: true,
      },
    },
  },
})
```

### Build Configuration

```typescript
// vite.config.ts
export default defineConfig({
  build: {
    outDir: 'dist',
    sourcemap: true,
  },
})
```

## Verification

```bash
# Test dev server
bun run dev

# Test build
bun run build

# Test preview
bun run preview
```

## Common Issues

### Port Already in Use

```typescript
// vite.config.ts
export default defineConfig({
  server: {
    port: 3000,
  },
})
```

### Module Resolution Issues

```typescript
// vite.config.ts
import path from 'path'

export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
```
