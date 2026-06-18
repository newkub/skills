---
description: Setup UnoCSS ใน project ตาม framework ที่ใช้
---

## Goal

Setup UnoCSS ใน project ตาม framework ที่ใช้ (Vite, Nuxt, Next, etc.)

## Scope

### 1. ตรวจสอบ Framework

ตรวจสอบ framework ที่ใช้ใน project

```bash
# ตรวจสอบ package.json
cat package.json
```

### 2. ติดตั้ง UnoCSS

ติดตั้ง UnoCSS ตาม package manager ที่ใช้

```bash
# Bun
bun add -D unocss

# bun
bun install -D unocss

# bun
bun add -D unocss

# yarn
yarn add -D unocss
```

### 3. Setup ตาม Framework

#### Vite

สร้าง `uno.config.ts`

```typescript
import { defineConfig, presetUno, presetAttributify, presetIcons } from 'unocss'

export default defineConfig({
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons(),
  ],
})
```

อัปเดต `vite.config.ts`

```typescript
import UnoCSS from 'unocss/vite'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [
    UnoCSS(),
  ],
})
```

Import CSS ใน `src/main.ts`

```typescript
import 'virtual:uno.css'
```

#### Nuxt

ติดตั้ง module

```bash
bun add -D @unocss/nuxt
```

อัปเดต `nuxt.config.ts`

```typescript
export default defineNuxtConfig({
  modules: ['@unocss/nuxt'],
  unocss: {
    presets: [
      presetUno(),
      presetAttributify(),
      presetIcons(),
    ],
  },
})
```

#### Next.js

ติดตั้ง dependencies

```bash
bun add -D @unocss/next unocss
```

สร้าง `uno.config.ts`

```typescript
import { defineConfig, presetUno, presetAttributify, presetIcons } from 'unocss'

export default defineConfig({
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons(),
  ],
})
```

อัปเดต `next.config.js`

```javascript
const UnoCSS = require('@unocss/next').default

module.exports = UnoCSS()
```

Import CSS ใน `pages/_app.tsx` หรือ `app/layout.tsx`

```typescript
import 'uno.css'
```

### 4. ทดสอบ

สร้าง test component

```html
<div class="text-red-500 p-4 bg-blue-500">
  UnoCSS Test
</div>
```

รัน dev server

```bash
bun run dev
```

ตรวจสอบว่า CSS ถูก generate อย่างถูกต้อง

### 5. Customization (Optional)

เพิ่ม custom rules, shortcuts, หรือ theme

```typescript
// uno.config.ts
export default defineConfig({
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons(),
  ],
  shortcuts: {
    'btn': 'px-4 py-2 bg-blue-500 text-white rounded',
  },
  theme: {
    colors: {
      primary: '#3b82f6',
    },
  },
})
```

## Rules

### 1. ใช้ Bun สำหรับ package management

ใช้ `bun add -D` แทน `bun install -D` เสมอ

### 2. ติดตั้ง dependencies ที่จำเป็นเท่านั้น

ติดตั้งเฉพาะ UnoCSS และ framework integration ที่จำเป็น

### 3. ใช้ presets พื้นฐาน

ใช้ `presetUno`, `presetAttributify`, `presetIcons` สำหรับเริ่มต้น

### 4. ทดสอบทันทีหลัง setup

ทดสอบว่า UnoCSS ทำงานได้ถูกต้องหลัง setup

### 5. Document configuration

Document configuration ที่ custom ใน project

## Expected Outcome

- UnoCSS ติดตั้งและ config แล้ว
- Dev server ทำงานได้
- CSS ถูก generate อย่างถูกต้อง
- Customizations ทำงานได้
