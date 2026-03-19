---
title: Basic SPA Example
description: โปรเจกต์ตัวอย่าง SPA ด้วย Vite + Vue 3
---

# Basic SPA Example

## โครงสร้างโปรเจกต์

```
basic-spa/
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
├── .env
└── src/
    ├── assets/
    │   └── logo.png
    ├── components/
    │   ├── HelloWorld.vue
    │   └── Counter.vue
    ├── App.vue
    └── main.ts
```

## ไฟล์ตั้งค่า

### package.json

```json
{
  "name": "basic-spa",
  "private": true,
  "version": "1.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vue-tsc --noEmit && vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "vue": "^3.4.0"
  },
  "devDependencies": {
    "@vitejs/plugin-vue": "^5.0.0",
    "typescript": "^5.3.0",
    "vite": "^5.0.0",
    "vue-tsc": "^1.8.0"
  }
}
```

### vite.config.ts

```typescript
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()]
})
```

### tsconfig.json

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
    "noFallthroughCasesInSwitch": true
  },
  "include": ["src/**/*.ts", "src/**/*.tsx", "src/**/*.vue"]
}
```

## Source Files

### index.html

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Basic SPA</title>
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

createApp(App).mount('#app')
```

### src/App.vue

```vue
<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue'
import Counter from './components/Counter.vue'
</script>

<template>
  <div>
    <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld msg="Hello Vue 3 + Vite" />
    <Counter />
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
}
</style>
```

### src/components/HelloWorld.vue

```vue
<script setup lang="ts">
defineProps<{
  msg: string
}>()
</script>

<template>
  <h1>{{ msg }}</h1>
  <p>
    This is a basic SPA example using Vite + Vue 3
  </p>
</template>
```

### src/components/Counter.vue

```vue
<script setup lang="ts">
import { ref } from 'vue'

const count = ref(0)

const increment = () => {
  count.value++
}
</script>

<template>
  <button @click="increment">
    Count is: {{ count }}
  </button>
</template>

<style scoped>
button {
  padding: 0.5em 1em;
  font-size: 1em;
}
</style>
```

## Commands

```bash
# Install dependencies
bun install

# Start dev server
bun run dev

# Build for production
bun run build

# Preview production build
bun run preview
```

## Key Features

- **Fast HMR** - เปลี่ยนแปลงทันที
- **TypeScript** - Type safety
- **Vue 3** - Composition API
- **Scoped CSS** - Component styles
