# Getting Started with UnoCSS

## การติดตั้ง

ติดตั้ง UnoCSS เป็น dev dependency:

```bash
npm install -D unocss
# หรือ
pnpm add -D unocss
```

## การตั้งค่า Vite

สร้างไฟล์ `uno.config.ts`:

```typescript
import { defineConfig, presetUno } from 'unocss'

export default defineConfig({
  presets: [presetUno()],
})
```

เพิ่ม plugin ใน `vite.config.ts`:

```typescript
import UnoCSS from 'unocss/vite'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [UnoCSS()],
})
```

เพิ่ม import ใน `main.ts`:

```typescript
import 'virtual:uno.css'
```

## การใช้งาน

ใช้ utility classes ใน HTML/components:

```html
<div class="flex items-center justify-center p-4 bg-blue-500 text-white">
  Hello UnoCSS
</div>
```

## การตั้งค่า Attributify Mode

เปิดใช้ attributify mode ใน config:

```typescript
export default defineConfig({
  attributifyPreset: true,
})
```

ใช้ attributes แทน classes:

```html
<div flex items-center justify-center p-4 bg-blue-500 text-white>
  Hello UnoCSS
</div>
```
