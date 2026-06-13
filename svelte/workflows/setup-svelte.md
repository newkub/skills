---
description: ตั้งค่า Svelte project ด้วย Vite
---

## Goal

ตั้งค่า Svelte project ใหม่ด้วย Vite และ TypeScript

## Steps

### 1. Create Project

```bash
bun create vite my-svelte-app -- --template svelte-ts
cd my-svelte-app
bun install
```

### 2. Install Dependencies

```bash
bun add -D svelte-check
```

### 3. Configure TypeScript

ตรวจสอบ `tsconfig.json` และ `svelte.config.js`

### 4. Run Dev Server

```bash
bun run dev
```

### 5. Verify Setup

เปิด browser ที่ `http://localhost:5173`

## Optional: Add Tailwind CSS

```bash
bun add -D tailwindcss postcss autoprefixer
bunx tailwindcss init -p
```

## Optional: Add Testing

```bash
bun add -D vitest @testing-library/svelte @testing-library/jest-dom
```

## Summary

สร้าง Svelte project ด้วย Vite:
1. `bun create vite` ด้วย template svelte-ts
2. Install dependencies
3. Configure TypeScript
4. Run dev server
5. Optional: Add Tailwind, Testing
