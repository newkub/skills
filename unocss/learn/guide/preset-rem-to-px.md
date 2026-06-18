# Preset Rem to Px

## ภาพรวม

`preset-rem-to-px` คือ preset ที่ convert rem units เป็น px units อัตโนมัติ ช่วยให้ใช้ UnoCSS กับ projects ที่ต้องการ px units ได้ง่ายขึ้น

## การติดตั้ง

```bash
bun add -D @unocss/preset-rem-to-px
```

## การตั้งค่า

```typescript
import { defineConfig } from 'unocss'
import { presetRemToPx } from '@unocss/preset-rem-to-px'

export default defineConfig({
  presets: [
    presetRemToPx(),
  ],
})
```

## การใช้งาน

### Basic Usage

ใช้ rem utilities แต่จะถูก convert เป็น px:

```html
<!-- Input (rem units) -->
<div class="p-4 m-2 text-lg">
  Text
</div>

<!-- Output (px units) -->
<style>
  .p-4 { padding: 16px; }
  .m-2 { margin: 8px; }
  .text-lg { font-size: 18px; }
</style>
```

### Base Font Size

Default base font size คือ 16px (1rem = 16px)

```html
<!-- 1rem = 16px -->
<div class="p-4">Padding: 16px</div>

<!-- 0.5rem = 8px -->
<div class="p-2">Padding: 8px</div>

<!-- 2rem = 32px -->
<div class="p-8">Padding: 32px</div>
```

## Configuration Options

```typescript
import { presetRemToPx } from '@unocss/preset-rem-to-px'

export default defineConfig({
  presets: [
    presetRemToPx({
      // Base font size (default: 16)
      baseFontSize: 16,
      
      // Precision (default: 4)
      precision: 4,
      
      // Convert specific properties only
      properties: ['padding', 'margin', 'font-size'],
    }),
  ],
})
```

### Base Font Size

กำหนด base font size ที่ต่างกัน:

```typescript
export default defineConfig({
  presets: [
    presetRemToPx({
      baseFontSize: 14, // 1rem = 14px
    }),
  ],
})
```

```html
<!-- 1rem = 14px -->
<div class="p-4">Padding: 14px</div>
```

### Precision

กำหนด precision ของ conversion:

```typescript
export default defineConfig({
  presets: [
    presetRemToPx({
      precision: 2, // 2 decimal places
    }),
  ],
})
```

### Properties Filter

Convert เฉพาะ properties ที่ต้องการ:

```typescript
export default defineConfig({
  presets: [
    presetRemToPx({
      properties: [
        'padding',
        'padding-top',
        'padding-bottom',
        'padding-left',
        'padding-right',
        'margin',
        'margin-top',
        'margin-bottom',
        'margin-left',
        'margin-right',
        'font-size',
        'line-height',
      ],
    }),
  ],
})
```

## การใช้งานกับ Presets อื่น

### กับ preset-mini

```typescript
import { presetMini } from 'unocss'
import { presetRemToPx } from '@unocss/preset-rem-to-px'

export default defineConfig({
  presets: [
    presetMini(),
    presetRemToPx(),
  ],
})
```

### กับ preset-wind3

```typescript
import { presetWind3 } from 'unocss'
import { presetRemToPx } from '@unocss/preset-rem-to-px'

export default defineConfig({
  presets: [
    presetWind3(),
    presetRemToPx(),
  ],
})
```

### กับ preset-wind4

```typescript
import { presetWind4 } from '@unocss/preset-wind4'
import { presetRemToPx } from '@unocss/preset-rem-to-px'

export default defineConfig({
  presets: [
    presetWind4(),
    presetRemToPx(),
  ],
})
```

## Spacing Utilities

### Padding

```html
<!-- rem → px -->
<div class="p-0">Padding: 0px</div>
<div class="p-1">Padding: 4px</div>
<div class="p-2">Padding: 8px</div>
<div class="p-4">Padding: 16px</div>
<div class="p-8">Padding: 32px</div>

<!-- Directional -->
<div class="px-4">Padding X: 16px</div>
<div class="py-2">Padding Y: 8px</div>
<div class="pt-4">Padding Top: 16px</div>
<div class="pb-2">Padding Bottom: 8px</div>
<div class="pl-4">Padding Left: 16px</div>
<div class="pr-2">Padding Right: 8px</div>
```

### Margin

```html
<!-- rem → px -->
<div class="m-0">Margin: 0px</div>
<div class="m-1">Margin: 4px</div>
<div class="m-2">Margin: 8px</div>
<div class="m-4">Margin: 16px</div>
<div class="m-8">Margin: 32px</div>

<!-- Directional -->
<div class="mx-4">Margin X: 16px</div>
<div class="my-2">Margin Y: 8px</div>
<div class="mt-4">Margin Top: 16px</div>
<div class="mb-2">Margin Bottom: 8px</div>
<div class="ml-4">Margin Left: 16px</div>
<div class="mr-2">Margin Right: 8px</div>
```

### Gap

```html
<!-- rem → px -->
<div class="gap-0">Gap: 0px</div>
<div class="gap-1">Gap: 4px</div>
<div class="gap-2">Gap: 8px</div>
<div class="gap-4">Gap: 16px</div>
<div class="gap-8">Gap: 32px</div>
```

## Typography Utilities

### Font Size

```html
<!-- rem → px -->
<div class="text-xs">Font Size: 12px</div>
<div class="text-sm">Font Size: 14px</div>
<div class="text-base">Font Size: 16px</div>
<div class="text-lg">Font Size: 18px</div>
<div class="text-xl">Font Size: 20px</div>
<div class="text-2xl">Font Size: 24px</div>
<div class="text-3xl">Font Size: 30px</div>
<div class="text-4xl">Font Size: 36px</div>
```

### Line Height

```html
<!-- rem → px -->
<div class="leading-none">Line Height: 0px</div>
<div class="leading-tight">Line Height: 20px</div>
<div class="leading-normal">Line Height: 24px</div>
<div class="leading-relaxed">Line Height: 28px</div>
<div class="leading-loose">Line Height: 32px</div>
```

## Custom Spacing Scale

กำหนด custom spacing scale:

```typescript
export default defineConfig({
  theme: {
    spacing: {
      xs: '0.5rem',  // 8px
      sm: '0.75rem', // 12px
      md: '1rem',    // 16px
      lg: '1.25rem', // 20px
      xl: '1.5rem',  // 24px
    },
  },
  presets: [
    presetRemToPx(),
  ],
})
```

```html
<!-- Custom spacing -->
<div class="p-xs">Padding: 8px</div>
<div class="p-sm">Padding: 12px</div>
<div class="p-md">Padding: 16px</div>
<div class="p-lg">Padding: 20px</div>
<div class="p-xl">Padding: 24px</div>
```

## Performance Considerations

1. **Minimal conversion** - convert เฉพาะที่จำเป็น
2. **Precision impact** - precision สูงอาจช้าลง
3. **Properties filter** - filter properties เพื่อ performance
4. **Bundle size** - preset นี้มีขนาดเล็ก

## Best Practices

1. **Use consistent base** - ใช้ base font size ที่ consistent
2. **Document conversion** - document conversion rules
3. **Test thoroughly** - test ทุก utilities หลัง conversion
4. **Consider accessibility** - พิจารณา accessibility
5. **Fallback to rem** - ใช้ rem เมื่อ px ไม่เหมาะสม

## Common Patterns

### Responsive Spacing

```html
<div class="p-2 sm:p-4 md:p-6 lg:p-8">
  Responsive padding
</div>
```

### Typography Scale

```html
<h1 class="text-4xl font-bold">Heading 1 (36px)</h1>
<h2 class="text-3xl font-semibold">Heading 2 (30px)</h2>
<h3 class="text-2xl font-medium">Heading 3 (24px)</h3>
<p class="text-base leading-normal">Paragraph (16px, 24px line-height)</p>
<small class="text-sm">Small text (14px)</small>
```

### Component Spacing

```html
<button class="px-4 py-2 bg-blue-500 text-white rounded">
  <!-- Padding X: 16px, Padding Y: 8px -->
  Button
</button>

<div class="p-4 border rounded-lg shadow-sm">
  <!-- Padding: 16px -->
  Card
</div>
```

## Integration Examples

### Vite

```typescript
// vite.config.ts
import UnoCSS from 'unocss/vite'
import { presetRemToPx } from '@unocss/preset-rem-to-px'

export default {
  plugins: [
    UnoCSS({
      presets: [presetRemToPx()],
    }),
  ],
}
```

### Nuxt

```typescript
// nuxt.config.ts
export default defineNuxtConfig({
  modules: ['@unocss/nuxt'],
  unocss: {
    presets: [
      presetRemToPx(),
    ],
  },
})
```

### Astro

```typescript
// astro.config.mjs
import UnoCSS from 'unocss/astro'
import { presetRemToPx } from '@unocss/preset-rem-to-px'

export default {
  integrations: [
    UnoCSS({
      presets: [presetRemToPx()],
    }),
  ],
})
```

## Troubleshooting

### Conversion ไม่ทำงาน

ตรวจสอบว่า preset-rem-to-px ถูกเปิด:

```typescript
export default defineConfig({
  presets: [
    presetRemToPx(),
  ],
})
```

### Precision ไม่ถูกต้อง

ตรวจสอบ precision config:

```typescript
export default defineConfig({
  presets: [
    presetRemToPx({
      precision: 2,
    }),
  ],
})
```

### Properties ไม่ถูก convert

ตรวจสอบ properties filter:

```typescript
export default defineConfig({
  presets: [
    presetRemToPx({
      properties: ['padding', 'margin', 'font-size'],
    }),
  ],
})
```

## Alternatives

### ใช้ PostCSS

```css
/* PostCSS plugin */
@use postcss-rem-to-px;
```

### ใช้ CSS Variables

```css
:root {
  --spacing-unit: 16px;
}
```

## Resources

- [UnoCSS Documentation](https://unocss.dev)
- [preset-rem-to-px GitHub](https://github.com/unocss/unocss/tree/main/packages/presets/rem-to-px)
