---
title: Getting Started with Vite
description: เริ่มต้นใช้งาน Vite ตั้งแต่ installation จนถึงการสร้างโปรเจกต์แรก
---

# Getting Started

## Installation

### System Requirements

- **Node.js**: 20.19+ หรือ 22.12+
- **Package Manager**: bun (ตาม global rules)

### Create Vite Project

```bash
# ใช้ create-vite (official)
bun create vite@latest my-app

# หรือระบุ template ทันที
bun create vite@latest my-app --template vue-ts
bun create vite@latest my-app --template react-ts
bun create vite@latest my-app --template svelte-ts
bun create vite@latest my-app --template vanilla-ts
```

### Available Templates

| Template | Framework | Language |
|----------|-----------|----------|
| `vanilla` | Vanilla JS | JavaScript |
| `vanilla-ts` | Vanilla JS | TypeScript |
| `vue` | Vue 3 | JavaScript |
| `vue-ts` | Vue 3 | TypeScript |
| `react` | React | JavaScript |
| `react-ts` | React | TypeScript |
| `react-swc` | React + SWC | TypeScript |
| `preact` | Preact | JavaScript |
| `preact-ts` | Preact | TypeScript |
| `svelte` | Svelte | JavaScript |
| `svelte-ts` | Svelte | TypeScript |
| `solid` | SolidJS | JavaScript |
| `solid-ts` | SolidJS | TypeScript |
| `qwik` | Qwik | TypeScript |
| `lit` | Lit | TypeScript |

---

## Project Structure

```text
my-app/
├── index.html          # Entry HTML file
├── package.json        # Dependencies & scripts
├── tsconfig.json       # TypeScript config
├── vite.config.ts      # Vite configuration
├── public/             # Static assets (ไม่ผ่าน build)
│   └── favicon.ico
└── src/
    ├── assets/         # Assets (ผ่าน build process)
    │   └── logo.png
    ├── components/     # UI components
    ├── App.vue         # Root component
    └── main.ts         # Entry point
```

---

## เริ่มต้นใช้งาน

### Step 1: Install Dependencies

```bash
cd my-app
bun install
```

### Step 2: Start Dev Server

```bash
bunx vite
```

หรือใช้ script:

```bash
bun run dev
```

### Step 3: Build for Production

```bash
bunx vite build
```

หรือ:

```bash
bun run build
```

### Step 4: Preview Production Build

```bash
bunx vite preview
```

---

## โครงสร้างไฟล์สำคัญ

### index.html

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Vite App</title>
  </head>
  <body>
    <div id="app"></div>
    <script type="module" src="/src/main.ts"></script>
  </body>
</html>
```

### src/main.ts

```typescript
import { createApp } from 'vue'
import App from './App.vue'
import './style.css'

createApp(App).mount('#app')
```

### vite.config.ts

```typescript
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()]
})
```

---

## Next Steps

1. **Configuration**: เรียนรู้ `@vite/patterns/config-basics.md`
2. **Plugins**: ดู `@vite/patterns/plugin-basics.md`
3. **Build**: ศึกษา `@vite/patterns/build-library.md`
4. **Performance**: อ่าน `@vite/patterns/perf-code-splitting.md`
