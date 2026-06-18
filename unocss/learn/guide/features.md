# Features ของ UnoCSS

## สรุป Features ทั้งหมด

| Feature | คำอธิบาย | Preset |
|---------|----------|--------|
| **Atomic Utilities** | On-demand CSS classes | preset-uno |
| **Attributify Mode** | ใช้ HTML attributes แทน classes | preset-attributify |
| **Shortcuts** | รวมหลาย classes เป็นชื่อเดียว | core |
| **Icons** | ใช้ Iconify icons เป็น CSS | preset-icons |
| **Theme System** | Design tokens (colors, spacing, etc.) | core |
| **Transformers** | CSS transformation directives | core |
| **Typography** | Prose utilities สำหรับ content | preset-typography |
| **Web Fonts** | Auto-loading Google Fonts | preset-web-fonts |
| **Tagify** | ใช้ HTML tags เป็น utilities | preset-tagify |
| **Inspect Mode** | Debug CSS generation | core |

## Atomic Utilities

Utility classes พื้นฐานที่สร้าง on-demand:

```html
<!-- Layout -->
<div class="flex justify-between items-center">
<div class="grid grid-cols-3 gap-4">

<!-- Spacing -->
<div class="p-4 mx-auto my-2">

<!-- Typography -->
<h1 class="text-2xl font-bold text-gray-900">

<!-- Colors -->
<div class="bg-blue-500 text-white border-red-300">
```

## Attributify Mode

ใช้ HTML attributes แทน class strings:

```html
<!-- แบบเดิม -->
<div class="flex items-center p-4 bg-gray-100">

<!-- Attributify -->
<div flex items-center p="4" bg="gray-100">

<!-- Group values -->
<div grid="~ cols-3 gap-4">
<div p="x-4 y-2" m="t-2 b-4">
```

## Shortcuts

```typescript
// Static shortcuts
shortcuts: {
  'btn': 'px-4 py-2 rounded bg-blue-500 text-white',
  'btn-primary': 'btn hover:bg-blue-600',
  'card': 'p-4 border rounded-lg shadow-sm',
  'flex-center': 'flex items-center justify-center',
}

// Dynamic shortcuts
shortcuts: [
  [/^space-(\d+)$/, ([, d]) => ({ gap: `${d * 0.25}rem` })],
]
```

## Icons System

ใช้ icons จาก 100+ Iconify collections:

```typescript
// Config
presetIcons({ scale: 1.2, warn: true })
```

```html
<!-- Usage -->
<div class="i-carbon-home"></div>
<div class="i-mdi-account text-2xl text-blue-500"></div>
<div class="i-heroicons-outline-star w-6 h-6"></div>
```

```bash
# Install icon collections
bun i -D @iconify-json/carbon
bun i -D @iconify-json/mdi
```

## Theme Customization

```typescript
theme: {
  colors: {
    primary: { 50: '#eff6ff', 500: '#3b82f6', 900: '#1e3a8a' },
    brand: { DEFAULT: '#3b82f6', light: '#60a5fa' },
  },
  spacing: { xs: '0.75rem', sm: '0.875rem', md: '1rem' },
  fontFamily: { sans: ['Inter', 'sans-serif'] },
  breakpoints: { sm: '640px', md: '768px', lg: '1024px' },
}
```

## Transformers

```typescript
import { transformerDirectives, transformerVariantGroup } from 'unocss'

transformers: [
  transformerDirectives(),    // @apply, @screen
  transformerVariantGroup(),  // hover:(bg-red text-white)
]
```

```css
/* @apply directive */
.btn { @apply px-4 py-2 bg-blue-500 text-white rounded; }

/* Variant group */
/* hover:(bg-red-500 text-white) → hover:bg-red-500 hover:text-white */
```

## Preset Typography

```typescript
import { presetTypography } from '@unocss/preset-typography'
presetTypography()
```

```html
<article class="prose prose-lg">
  <h1>Article Title</h1>
  <p>Content with proper typography...</p>
</article>
```

## Preset Web Fonts

```typescript
import { presetWebFonts } from '@unocss/preset-web-fonts'
presetWebFonts({
  fonts: {
    sans: 'Inter',
    mono: 'Fira Code',
    serif: 'Merriweather',
  },
})
```

## Inspect Mode

เปิด `__uno` ใน dev server เพื่อดู CSS generation:

```typescript
export default defineConfig({
  inspect: true,  // เปิดที่ /__uno
})
```

- ดูว่า class ไหนถูก generate จากไฟล์ไหน
- ตรวจสอบ generated CSS rules
- Debug missing classes
