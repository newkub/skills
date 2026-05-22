# UnoCSS Configuration

## การตั้งค่า Presets

```typescript
import { defineConfig, presetUno, presetAttributify, presetIcons } from 'unocss'

export default defineConfig({
  presets: [
    presetUno(),        // Default preset (Tailwind-like)
    presetAttributify(), // Attributify mode
    presetIcons(),      // Icons support
  ],
})
```

## การตั้งค่า Rules

สร้าง custom rules:

```typescript
export default defineConfig({
  rules: [
    ['custom-rule', { color: 'red' }],
    [/^custom-(\d+)$/, ([, d]) => ({ fontSize: `${d}px` })],
  ],
})
```

## การตั้งค่า Shortcuts

สร้าง shortcuts:

```typescript
export default defineConfig({
  shortcuts: {
    'btn': 'px-4 py-2 rounded bg-blue-500 text-white hover:bg-blue-600',
    'btn-primary': 'btn bg-blue-500',
    'btn-secondary': 'btn bg-gray-500',
  },
})
```

## การตั้งค่า Theme

```typescript
export default defineConfig({
  theme: {
    colors: {
      primary: '#3b82f6',
      secondary: '#6b7280',
    },
    breakpoints: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
    },
  },
})
```

## การตั้งค่า Transformers

```typescript
import { transformerDirectives, transformerVariantGroup } from 'unocss'

export default defineConfig({
  transformers: [
    transformerDirectives(),  // @apply, @screen
    transformerVariantGroup(), // Group variants
  ],
})
```
