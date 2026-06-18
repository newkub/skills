# Quick Start UnoCSS

## Step 1: Install

```bash
# Vite project
bun i -D unocss

# หรือสร้างโปรเจกต์ใหม่
bun create vite@latest my-app -- --template react-ts
cd my-app
bun i -D unocss
```

## Step 2: Config

สร้างไฟล์ `uno.config.ts`:

```typescript
// uno.config.ts
import {
  defineConfig,
  presetUno,
  presetAttributify,
  presetIcons,
  transformerDirectives,
} from 'unocss'

export default defineConfig({
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons({ scale: 1.2 }),
  ],
  transformers: [
    transformerDirectives(),
  ],
})
```

## Step 3: Register Plugin

```typescript
// vite.config.ts
import { defineConfig } from 'vite'
import UnoCSS from 'unocss/vite'

export default defineConfig({
  plugins: [UnoCSS()],
})
```

## Step 4: Import CSS

```typescript
// src/main.tsx
import 'virtual:uno.css'
import './App.tsx'
```

## Step 5: Use Classes

```tsx
// src/App.tsx
export default function App() {
  return (
    <div class="min-h-screen bg-gray-100 flex items-center justify-center">
      <div class="bg-white rounded-lg shadow-lg p-8 max-w-md w-full">
        <h1 class="text-3xl font-bold text-gray-900 mb-4">
          Hello UnoCSS
        </h1>
        <p class="text-gray-600">
          Atomic CSS ที่เร็วที่สุด
        </p>
        <button class="mt-4 px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">
          Click Me
        </button>
      </div>
    </div>
  )
}
```

## Step 6: Build & Verify

```bash
# Development
bun run dev

# Build
bun run build
```

## สรุปขั้นตอน

```
┌─────────────────────────────────────────────────────────────┐
│  Quick Start Flow                                           │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  1. Install ──▶ 2. Config ──▶ 3. Plugin ──▶ 4. Import      │
│  bun i -D      uno.config   vite.config    virtual:uno     │
│                                                             │
│  5. Use Classes ──▶ 6. Build                                │
│  class="..."        bun run dev                             │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

## ลองใช้ Attributify

```html
<!-- แทน class string ยาวๆ -->
<div bg="gray-100" flex items-center justify-center min-h="screen">
  <div bg="white" rounded-lg shadow-lg p="8" max-w="md" w="full">
    <h1 text="3xl gray-900" font="bold">Hello</h1>
  </div>
</div>
```

## ลองใช้ Icons

```bash
bun i -D @iconify-json/carbon
```

```html
<div class="i-carbon-home text-3xl text-blue-500"></div>
<div class="i-carbon-logo-github text-2xl"></div>
```

## ลองใช้ Shortcuts

```typescript
// uno.config.ts
export default defineConfig({
  shortcuts: {
    'btn': 'px-4 py-2 rounded-lg font-medium transition',
    'btn-primary': 'btn bg-blue-500 text-white hover:bg-blue-600',
    'btn-secondary': 'btn bg-gray-200 text-gray-800 hover:bg-gray-300',
    'card': 'bg-white rounded-lg shadow-lg p-6',
  },
})
```

```html
<button class="btn-primary">Primary</button>
<button class="btn-secondary">Secondary</button>
<div class="card">Card content</div>
```

## Next Steps

- อ่าน [features.md](./features.md) เพื่อดู features ทั้งหมด
- อ่าน [configuration.md](./configuration.md) สำหรับการตั้งค่าขั้นสูง
- อ่าน [best-practices.md](./best-practices.md) สำหรับแนวทางการใช้งาน
