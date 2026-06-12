# Best Practices ของ UnoCSS

## สรุป Best Practices

| หมวด | Practice | เหตุผล |
|------|----------|--------|
| **Presets** | เลือก presets ตามที่ต้องการ | ลด bundle size |
| **Shortcuts** | ใช้สำหรับ patterns ที่ซ้ำ | DRY, maintainability |
| **Theme** | กำหนด design tokens | consistency |
| **Safelist** | ระบุ dynamic classes | ป้องกัน missing CSS |
| **Semantic** | ใช้ชื่อสื่อความหมาย | readability |
| **Performance** | จำกัด scan scope | build speed |

## Performance

### จำกัด Scan Scope

```typescript
// ดี - ระบุ scope ชัดเจน
content: {
  filesystem: ['src/**/*.{vue,tsx,html}'],
}

// ไม่ดี - scan ทุกไฟล์
content: {
  filesystem: ['**/*'],
}
```

### ใช้ Safelist สำหรับ Dynamic Classes

```typescript
// Dynamic classes ที่ runtime
const color = `bg-${status}-500`  // UnoCSS ไม่สามารถ detect ได้

// แก้ด้วย safelist
export default defineConfig({
  safelist: ['bg-red-500', 'bg-green-500', 'bg-yellow-500'],
})
```

### ใช้ Shortcuts ลด Repetition

```typescript
// ไม่ดี - ซ้ำทุกที่
<div class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">

// ดี - ใช้ shortcut
shortcuts: { 'btn-primary': 'px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600' }
<div class="btn-primary">
```

## Organization

### จัด Shortcuts ตาม Category

```typescript
shortcuts: {
  // Layout
  'flex-center': 'flex items-center justify-center',
  'flex-between': 'flex items-center justify-between',

  // Components
  'btn': 'px-4 py-2 rounded font-medium transition',
  'card': 'bg-white rounded-lg shadow-sm p-6',

  // Typography
  'heading': 'font-bold text-gray-900',
  'body-text': 'text-base text-gray-600',
}
```

### แยก Theme ตาม Design System

```typescript
theme: {
  colors: {
    // Brand colors
    primary: { DEFAULT: '#3b82f6', light: '#60a5fa', dark: '#1d4ed8' },
    // Status colors
    success: '#22c55e',
    warning: '#f59e0b',
    error: '#ef4444',
  },
  spacing: {
    // Consistent spacing scale
    'xs': '0.25rem', 'sm': '0.5rem', 'md': '1rem',
    'lg': '1.5rem', 'xl': '2rem', '2xl': '3rem',
  },
}
```

### ใช้ TypeScript Definitions

```typescript
import { defineConfig } from 'unocss'  // type-safe config

export default defineConfig({
  // TypeScript จะช่วย validate options
  presets: [presetUno()],
  theme: { colors: { /* ... */ } },
})
```

## Development

### เปิด Inspect Mode ขณะ Dev

```typescript
export default defineConfig({
  inspect: true,  // ดูที่ http://localhost:5173/__uno
})
```

### ใช้ Transformers

```typescript
import { transformerDirectives, transformerVariantGroup } from 'unocss'

transformers: [
  transformerDirectives(),    // ใช้ @apply ใน CSS files
  transformerVariantGroup(),  // group variants
]
```

### ตั้งค่า ESLint

```json
{
  "rules": {
    "unocss/order": "warn",
    "unocss/order-attributify": "warn"
  }
}
```

## Maintenance

### เก็บ Config ใน Version Control

```text
project/
├── uno.config.ts      ← commit
├── vite.config.ts     ← commit
└── src/
```

### ทดสอบ CSS Output

```bash
# ใน CI/CD pipeline
npx unocss "src/**/*.tsx" -o dist/uno.css
diff dist/uno.css expected/uno.css
```

### อัพเดท UnoCSS เป็นประจำ

```bash
# ตรวจสอบ outdated
npm outdated unocss

# อัพเดท
npm i -D unocss@latest
```

## ข้อควรระวัง

| ข้อ | คำอธิบาย |
|----|----------|
| **อย่า overuse shortcuts** | ใช้เมื่อซ้ำ 3 ครั้งขึ้นไป |
| **อย่า skip theme** | กำหนด design tokens เสมอ |
| **อย่าลืม safelist** | สำหรับ dynamic classes |
| **อย่า scan ทั้ง repo** | จำกัด scope ให้เหมาะสม |
| **อย่าลืม inspect** | เปิด inspect ขณะ dev |
