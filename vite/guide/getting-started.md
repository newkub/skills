# Getting Started with Vite

## การสร้าง Project

สร้าง project ใหม่:

```bash
npm create vite@latest my-app
cd my-app
npm install
npm run dev
```

หรือใช้ template เฉพาะ:

```bash
npm create vite@latest my-app -- --template vue-ts
```

## การติดตั้งใน Project ที่มีอยู่

ติดตั้ง Vite:

```bash
npm install -D vite
```

ติดตั้ง plugin สำหรับ framework:

```bash
# Vue
npm install -D @vitejs/plugin-vue

# React
npm install -D @vitejs/plugin-react

# Svelte
npm install -D @sveltejs/vite-plugin-svelte
```

## การตั้งค่า Config

สร้าง `vite.config.ts`:

```typescript
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
})
```

## การรัน Dev Server

```bash
npm run dev
# หรือ
npx vite
```
