# Presets Customization

## Extend Existing Presets

Extend presets ที่มีอยู่

```typescript
import { presetUno } from 'unocss'

export default defineConfig({
  presets: [
    presetUno({
      // Extend preset options
      dark: 'class',
      attributifyPseudo: true,
    }),
  ],
})
```

## Create Custom Preset

สร้าง preset ของตัวเอง

```typescript
import { definePreset } from 'unocss'

const brandPreset = definePreset((options) => {
  return {
    name: 'brand-preset',
    theme: {
      colors: {
        brand: {
          50: '#f5f3ff',
          500: '#8b5cf6',
          900: '#4c1d95',
        },
      },
    },
    rules: [
      ['text-brand', { color: '#8b5cf6' }],
      ['bg-brand', { 'background-color': '#8b5cf6' }],
    ],
  }
})

export default defineConfig({
  presets: [brandPreset()],
})
```
