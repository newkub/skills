---
description: เพิ่ม framework integration (Vue, React, Svelte, Solid)
---

## Goal

เพิ่ม framework integration ใน WXT project สำหรับ UI development

## Scope

ใช้สำหรับเพิ่ม Vue, React, Svelte, หรือ SolidJS ใน WXT project

## Execute

### 1. Vue Integration

#### ติดตั้ง Dependencies

```bash
bun add vue
bun add -D @vitejs/plugin-vue
```

#### ตั้งค่า wxt.config.ts

```typescript
import { defineConfig } from 'wxt'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  vite: () => ({
    plugins: [vue()]
  })
})
```

#### สร้าง Vue Component

สร้าง `entrypoints/popup/App.vue`:

```vue
<template>
  <div>
    <h1>{{ message }}</h1>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const message = ref('Hello from Vue!')
</script>
```

#### อัปเดต Popup HTML

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Popup</title>
  </head>
  <body>
    <div id="app"></div>
    <script src="./main.ts"></script>
  </body>
</html>
```

#### อัปเดต Popup Main

```typescript
import { createApp } from 'vue'
import App from './App.vue'

createApp(App).mount('#app')
```

### 2. React Integration

#### ติดตั้ง Dependencies

```bash
bun add react react-dom
bun add -D @vitejs/plugin-react @types/react @types/react-dom
```

#### ตั้งค่า wxt.config.ts

```typescript
import { defineConfig } from 'wxt'
import react from '@vitejs/plugin-react'

export default defineConfig({
  vite: () => ({
    plugins: [react()]
  })
})
```

#### สร้าง React Component

สร้าง `entrypoints/popup/App.tsx`:

```tsx
import React from 'react'

export default function App() {
  return <h1>Hello from React!</h1>
}
```

#### อัปเดต Popup Main

```typescript
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

ReactDOM.createRoot(document.getElementById('app')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
```

### 3. Svelte Integration

#### ติดตั้ง Dependencies

```bash
bun add -D @sveltejs/vite-plugin-svelte svelte
```

#### ตั้งค่า wxt.config.ts

```typescript
import { defineConfig } from 'wxt'
import { svelte } from '@sveltejs/vite-plugin-svelte'

export default defineConfig({
  vite: () => ({
    plugins: [svelte()]
  })
})
```

#### สร้าง Svelte Component

สร้าง `entrypoints/popup/App.svelte`:

```svelte
<script>
  let message = 'Hello from Svelte!'
</script>

<h1>{message}</h1>
```

#### อัปเดต Popup Main

```typescript
import App from './App.svelte'

const app = new App({
  target: document.getElementById('app')!
})

export default app
```

### 4. Solid Integration

#### ติดตั้ง Dependencies

```bash
bun add solid-js
bun add -D vite-plugin-solid
```

#### ตั้งค่า wxt.config.ts

```typescript
import { defineConfig } from 'wxt'
import solid from 'vite-plugin-solid'

export default defineConfig({
  vite: () => ({
    plugins: [solid()]
  })
})
```

#### สร้าง Solid Component

สร้าง `entrypoints/popup/App.tsx`:

```tsx
import { createSignal } from 'solid-js'

export default function App() {
  const [message] = createSignal('Hello from Solid!')

  return <h1>{message()}</h1>
}
```

#### อัปเดต Popup Main

```typescript
import { render } from 'solid-js/web'
import App from './App'

render(() => <App />, document.getElementById('app')!)
```

## Rules

### Framework Selection

- เลือก framework ที่คุณคุ้นเคย
- Vue: เหมาะสำหรับ projects ที่ต้องการ DX ดี
- React: เหมาะสำหรับ projects ที่มี ecosystem ใหญ่
- Svelte: เหมาะสำหรับ performance และ bundle size
- Solid: เหมาะสำหรับ performance สูง

### Official Modules

WXT มี official modules สำหรับ framework integrations:
- `@wxt-dev/module-react`
- `@wxt-dev/module-vue`
- `@wxt-dev/module-svelte`
- `@wxt-dev/module-solid`

ใช้ modules เหล่านี้แทน manual setup ถ้ามีให้ใช้

### Auto-imports

WXT รองรับ auto-imports สำหรับ:
- Vue composables
- React hooks
- Svelte stores
- Solid signals

## Expected Outcome

- Framework integration ที่ทำงานได้
- HMR สำหรับ UI development
- TypeScript support สำหรับ framework
- Auto-imports ที่ทำงานได้
