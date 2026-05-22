# Installation Guide

## Prerequisites

- **Node.js**: 20.19+ หรือ 22.12+
- **Package Manager**: npm, yarn, pnpm, bun, หรือ deno

---

## สร้าง Project ใหม่

### ใช้ create-vite (แนะนำ)

```bash
# Interactive mode
bun create vite@latest

# ระบุชื่อ project และ template
bun create vite my-vue-app --template vue-ts

# ใช้ current directory
bun create vite . --template react-ts
```

### Templates ที่มีให้

| Template | คำอธิบาย |
|----------|----------|
| `vanilla` | ไม่มี framework |
| `vanilla-ts` | TypeScript |
| `vue` | Vue 3 |
| `vue-ts` | Vue 3 + TypeScript |
| `react` | React |
| `react-ts` | React + TypeScript |
| `react-swc` | React + SWC (เร็ว) |
| `svelte` | Svelte |
| `solid` | SolidJS |

---

## ติดตั้งใน Project ที่มีอยู่

```bash
# Install Vite
bun add -D vite

# Install framework plugin (ตัวอย่าง Vue)
bun add -D @vitejs/plugin-vue

# สร้าง config file
echo "import { defineConfig } from 'vite'\nimport vue from '@vitejs/plugin-vue'\n\nexport default defineConfig({\n  plugins: [vue()]\n})" > vite.config.ts

# แก้ไข package.json scripts
cat package.json | sed 's/"scripts": {/"scripts": {\n    "dev": "vite",\n    "build": "vite build",\n    "preview": "vite preview",/' > package.json.tmp && mv package.json.tmp package.json
```

---

## โครงสร้างไฟล์พื้นฐาน

```text
my-project/
├── index.html          # HTML entry point
├── vite.config.ts      # Vite config
├── package.json
├── tsconfig.json       # TypeScript config
└── src/
    ├── main.ts         # Application entry
    ├── App.vue         # Root component
    ├── components/     # UI components
    ├── assets/         # Static files
    └── styles/         # CSS/SCSS
```

### index.html

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>My Vite App</title>
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

const app = createApp(App)
app.mount('#app')
```

---

## รัน Development Server

```bash
# Start dev server
bunx vite

# หรือ
bun run dev

# ระบุ port
bunx vite --port 3000

# Auto-open browser
bunx vite --open
```

---

## Build for Production

```bash
# Build
bunx vite build

# Preview production build locally
bunx vite preview

# Build with specific mode
bunx vite build --mode production
```

---

## ติดตั้ง TypeScript (ถ้ายังไม่มี)

```bash
bun add -D typescript

# สร้าง tsconfig.json
bunx tsc --init
```

แก้ไข `tsconfig.json`:

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
    "paths": {
      "@/*": ["./src/*"]
    }
  },
  "include": ["src/**/*.ts", "src/**/*.tsx", "src/**/*.vue"],
  "references": [{ "path": "./tsconfig.node.json" }]
}
```
