# Preset Wind4

## ภาพรวม

`preset-wind4` คือ preset ที่ compatible กับ Tailwind CSS v4 ให้ความสามารถในการ migrate จาก Tailwind v4 มาใช้ UnoCSS ได้อย่างราบรื่น

## การติดตั้ง

```bash
bun add -D @unocss/preset-wind4
```

## การตั้งค่า

```typescript
import { defineConfig } from 'unocss'
import { presetWind4 } from '@unocss/preset-wind4'

export default defineConfig({
  presets: [
    presetWind4(),
  ],
})
```

## Features

### Tailwind v4 Compatibility

รองรับ syntax และ features ของ Tailwind CSS v4:

```html
<!-- Tailwind v4 syntax -->
<div class="text-red-500 bg-blue-500">
  Text
</div>
```

### CSS Variables

รองรับ CSS variables จาก Tailwind v4:

```css
/* CSS variables */
@theme {
  --color-primary: #3b82f6;
  --color-secondary: #10b981;
}
```

```html
<!-- Usage -->
<div class="text-primary bg-secondary">
  Text
</div>
```

### Native CSS Nesting

รองรับ CSS nesting:

```css
/* Native CSS nesting */
.button {
  @apply px-4 py-2 bg-blue-500 text-white rounded;
  
  &:hover {
    @apply bg-blue-600;
  }
  
  &:focus {
    @apply ring-2 ring-blue-400;
  }
}
```

## Configuration Options

```typescript
import { presetWind4 } from '@unocss/preset-wind4'

export default defineConfig({
  presets: [
    presetWind4({
      // Enable CSS variables
      enableCssVariables: true,
      
      // Enable native CSS nesting
      enableNativeNesting: true,
      
      // Theme configuration
      theme: {
        colors: {
          primary: '#3b82f6',
        },
      },
    }),
  ],
})
```

## Migration จาก Tailwind v4

### Step 1: ติดตั้ง UnoCSS

```bash
bun add -D unocss @unocss/preset-wind4
```

### Step 2: สร้าง Config

```typescript
// uno.config.ts
import { defineConfig } from 'unocss'
import { presetWind4 } from '@unocss/preset-wind4'

export default defineConfig({
  presets: [
    presetWind4(),
  ],
})
```

### Step 3: อัปเดต Import

```typescript
// แทนที่ Tailwind CSS
// import 'tailwindcss'

// ด้วย UnoCSS
import 'virtual:uno.css'
```

### Step 4: อัปเดต Build Config

```typescript
// vite.config.ts
import UnoCSS from 'unocss/vite'

export default {
  plugins: [
    UnoCSS(),
  ],
}
```

## Theme Configuration

### Colors

```typescript
export default defineConfig({
  presets: [
    presetWind4({
      theme: {
        colors: {
          primary: {
            50: '#eff6ff',
            100: '#dbeafe',
            500: '#3b82f6',
            900: '#1e3a8a',
          },
        },
      },
    }),
  ],
})
```

### Spacing

```typescript
export default defineConfig({
  presets: [
    presetWind4({
      theme: {
        spacing: {
          xs: '0.75rem',
          sm: '0.875rem',
          md: '1rem',
          lg: '1.125rem',
          xl: '1.25rem',
        },
      },
    }),
  ],
})
```

### Typography

```typescript
export default defineConfig({
  presets: [
    presetWind4({
      theme: {
        fontFamily: {
          sans: ['Inter', 'sans-serif'],
          mono: ['Fira Code', 'monospace'],
        },
        fontSize: {
          xs: ['0.75rem', { lineHeight: '1rem' }],
          sm: ['0.875rem', { lineHeight: '1.25rem' }],
          base: ['1rem', { lineHeight: '1.5rem' }],
        },
      },
    }),
  ],
})
```

## CSS Variables

### กำหนด CSS Variables

```css
/* styles.css */
@theme {
  --color-primary: #3b82f6;
  --color-secondary: #10b981;
  --spacing-md: 1rem;
  --font-sans: 'Inter', sans-serif;
}
```

### ใช้ CSS Variables

```html
<div class="text-primary bg-secondary p-md font-sans">
  Text
</div>
```

## Native CSS Nesting

### Basic Nesting

```css
.button {
  @apply px-4 py-2 bg-blue-500 text-white rounded;
  
  &:hover {
    @apply bg-blue-600;
  }
  
  &:focus {
    @apply ring-2 ring-blue-400;
  }
}
```

### Complex Nesting

```css
.card {
  @apply p-4 border rounded-lg;
  
  &__header {
    @apply mb-4;
    
    &__title {
      @apply text-xl font-bold;
    }
  }
  
  &__body {
    @apply text-gray-600;
  }
}
```

## Differences จาก Tailwind v4

### Performance

UnoCSS มี performance ดีกว่า Tailwind v4:
- Zero-parsing design
- On-demand generation
- Minimal bundle size (~6kb)

### Extensibility

UnoCSS มีความยืดหยุ่นมากกว่า:
- Custom presets
- Custom transformers
- Custom extractors

### Integration

UnoCSS รองรับ build tools หลากหลาย:
- Vite
- Webpack
- Nuxt
- Astro
- และอื่นๆ

## Best Practices

1. **Use CSS variables** - ใช้ CSS variables สำหรับ theme
2. **Leverage nesting** - ใช้ nesting สำหรับ complex styles
3. **Migrate gradually** - migrate ทีละส่วน
4. **Test thoroughly** - test ทุก components หลัง migration
5. **Document changes** - document การเปลี่ยนแปลง

## Common Patterns

### Button Component

```css
.button {
  @apply px-4 py-2 bg-blue-500 text-white rounded font-medium;
  
  &:hover {
    @apply bg-blue-600;
  }
  
  &:focus {
    @apply ring-2 ring-blue-400 ring-offset-2;
  }
  
  &:disabled {
    @apply opacity-50 cursor-not-allowed;
  }
}
```

### Card Component

```css
.card {
  @apply p-4 border rounded-lg shadow-sm;
  
  &__header {
    @apply mb-4;
    
    &__title {
      @apply text-xl font-bold text-gray-900;
    }
  }
  
  &__body {
    @apply text-gray-600;
  }
  
  &__footer {
    @apply mt-4 pt-4 border-t;
  }
}
```

### Form Component

```css
.input {
  @apply px-3 py-2 border rounded focus:ring-2 focus:ring-blue-400 focus:border-transparent;
  
  &:focus {
    @apply outline-none;
  }
  
  &:disabled {
    @apply bg-gray-100 cursor-not-allowed;
  }
}
```

## Integration Examples

### Vite

```typescript
// vite.config.ts
import UnoCSS from 'unocss/vite'
import { presetWind4 } from '@unocss/preset-wind4'

export default {
  plugins: [
    UnoCSS({
      presets: [presetWind4()],
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
      presetWind4(),
    ],
  },
})
```

### Astro

```typescript
// astro.config.mjs
import UnoCSS from 'unocss/astro'
import { presetWind4 } from '@unocss/preset-wind4'

export default {
  integrations: [
    UnoCSS({
      presets: [presetWind4()],
    }),
  ],
}
```

## Troubleshooting

### CSS Variables ไม่ทำงาน

ตรวจสอบว่า `enableCssVariables` ถูกเปิด:

```typescript
export default defineConfig({
  presets: [
    presetWind4({
      enableCssVariables: true,
    }),
  ],
})
```

### Nesting ไม่ทำงาน

ตรวจสอบว่า `enableNativeNesting` ถูกเปิด:

```typescript
export default defineConfig({
  presets: [
    presetWind4({
      enableNativeNesting: true,
    }),
  ],
})
```

### Styles ไม่ถูก apply

ตรวจสอบว่า import UnoCSS CSS:

```typescript
import 'virtual:uno.css'
```

## Performance Tips

1. **Minimal theme** - ใช้ theme เฉพาะที่จำเป็น
2. **Avoid unused variables** - ลบ CSS variables ที่ไม่ใช้
3. **Optimize nesting** - ใช้ nesting อย่างเหมาะสม
4. **Tree shaking** - tree shake unused styles

## Resources

- [UnoCSS Documentation](https://unocss.dev)
- [Tailwind CSS v4 Documentation](https://tailwindcss.com/docs/v4)
- [preset-wind4 GitHub](https://github.com/unocss/unocss/tree/main/packages/presets/wind4)
