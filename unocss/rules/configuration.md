# Configuration UnoCSS

## Title

ตั้งค่าไฟล์ konfigurasi UnoCSS

## Description

สร้างและตั้งค่าไฟล์ uno.config.js สำหรับควบคุมการทำงานของ UnoCSS

## Examples

### การตั้งค่าพื้นฐาน

```javascript
import { defineConfig, presetUno, presetAttributify, presetIcons } from 'unocss'

export default defineConfig({
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons()
  ],
  shortcuts: {
    'btn': 'px-4 py-2 rounded bg-blue-500 text-white hover:bg-blue-600',
    'card': 'p-4 border border-gray-200 rounded-lg shadow-sm'
  }
})
```

### การตั้งค่ากับ Vite

```javascript
// vite.config.js
import { defineConfig } from 'vite'
import UnoCSS from 'unocss/vite'

export default defineConfig({
  plugins: [
    UnoCSS()
  ]
})
```

## Anti-patterns

- ห้ามตั้งค่า presets ซ้ำซ้อน
- ห้ามใช้ shortcuts ที่ซับซ้อนเกินไป
- ห้ามลืม import presets ที่จำเป็น
