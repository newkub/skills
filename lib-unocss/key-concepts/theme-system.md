# Theme System

## ภาพรวม

UnoCSS มี theme system ที่ flexible สำหรับกำหนด design tokens เช่น colors, spacing, fonts และอื่นๆ

## Basic Theme

กำหนด theme ใน config

```typescript
export default defineConfig({
  theme: {
    colors: {
      primary: '#3b82f6',
      secondary: '#64748b',
    },
    spacing: {
      'xs': '0.5rem',
      'sm': '1rem',
      'md': '1.5rem',
    },
  },
})
```

## Theme Colors

กำหนด color palette

```typescript
export default defineConfig({
  theme: {
    colors: {
      // Named colors
      primary: '#3b82f6',
      secondary: '#64748b',
      
      // Color scales
      blue: {
        50: '#eff6ff',
        100: '#dbeafe',
        200: '#bfdbfe',
        300: '#93c5fd',
        400: '#60a5fa',
        500: '#3b82f6',
        600: '#2563eb',
        700: '#1d4ed8',
        800: '#1e40af',
        900: '#1e3a8a',
      },
      
      // CSS variables
      'primary': 'var(--color-primary)',
      'primary-light': 'var(--color-primary-light)',
    },
  },
})
```

## Theme Spacing

กำหนด spacing scale

```typescript
export default defineConfig({
  theme: {
    spacing: {
      '0': '0',
      'px': '1px',
      '0.5': '0.125rem',
      '1': '0.25rem',
      '2': '0.5rem',
      '3': '0.75rem',
      '4': '1rem',
      '5': '1.25rem',
      '6': '1.5rem',
      '8': '2rem',
      '10': '2.5rem',
      '12': '3rem',
      '16': '4rem',
      '20': '5rem',
      '24': '6rem',
    },
  },
})
```

## Theme Typography

กำหนด typography scale

```typescript
export default defineConfig({
  theme: {
    fontSize: {
      'xs': ['0.75rem', { lineHeight: '1rem' }],
      'sm': ['0.875rem', { lineHeight: '1.25rem' }],
      'base': ['1rem', { lineHeight: '1.5rem' }],
      'lg': ['1.125rem', { lineHeight: '1.75rem' }],
      'xl': ['1.25rem', { lineHeight: '1.75rem' }],
      '2xl': ['1.5rem', { lineHeight: '2rem' }],
      '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
      '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
    },
    fontWeight: {
      'thin': '100',
      'extralight': '200',
      'light': '300',
      'normal': '400',
      'medium': '500',
      'semibold': '600',
      'bold': '700',
      'extrabold': '800',
      'black': '900',
    },
  },
})
```

## Theme Breakpoints

กำหนด responsive breakpoints

```typescript
export default defineConfig({
  theme: {
    breakpoints: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
  },
})
```

## Theme Border Radius

กำหนด border radius scale

```typescript
export default defineConfig({
  theme: {
    borderRadius: {
      'none': '0',
      'sm': '0.125rem',
      DEFAULT: '0.25rem',
      'md': '0.375rem',
      'lg': '0.5rem',
      'xl': '0.75rem',
      '2xl': '1rem',
      '3xl': '1.5rem',
      'full': '9999px',
    },
  },
})
```

## Theme Shadows

กำหนด shadow scale

```typescript
export default defineConfig({
  theme: {
    boxShadow: {
      'sm': '0 1px 2px 0 rgb(0 0 0 / 0.05)',
      DEFAULT: '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
      'md': '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
      'lg': '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
      'xl': '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
    },
  },
})
```

## Theme Animation

กำหนด animations

```typescript
export default defineConfig({
  theme: {
    animation: {
      'spin': 'spin 1s linear infinite',
      'ping': 'ping 1s cubic-bezier(0, 0, 0.2, 1) infinite',
      'pulse': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      'bounce': 'bounce 1s infinite',
    },
    keyframes: {
      spin: {
        'from': { transform: 'rotate(0deg)' },
        'to': { transform: 'rotate(360deg)' },
      },
      ping: {
        '75%, 100%': {
          transform: 'scale(2)',
          opacity: '0',
        },
      },
    },
  },
})
```

## CSS Variables Theme

ใช้ CSS variables สำหรับ theme

```typescript
export default defineConfig({
  theme: {
    colors: {
      primary: 'var(--color-primary)',
      'primary-light': 'var(--color-primary-light)',
      'primary-dark': 'var(--color-primary-dark)',
    },
  },
})
```

```css
:root {
  --color-primary: #3b82f6;
  --color-primary-light: #60a5fa;
  --color-primary-dark: #2563eb;
}

[data-theme='dark'] {
  --color-primary: #60a5fa;
  --color-primary-light: #93c5fd;
  --color-primary-dark: #3b82f6;
}
```

## Dark Mode Theme

กำหนด theme สำหรับ dark mode

```typescript
export default defineConfig({
  darkMode: 'class', // or 'media'
  theme: {
    colors: {
      // Light mode
      primary: '#3b82f6',
      background: '#ffffff',
      text: '#000000',
      
      // Dark mode
      dark: {
        primary: '#60a5fa',
        background: '#000000',
        text: '#ffffff',
      },
    },
  },
})
```

## Theme Extending

Extend theme จาก presets

```typescript
import { presetUno } from 'unocss'

export default defineConfig({
  presets: [presetUno()],
  theme: {
    // Extend default theme
    extend: {
      colors: {
        brand: '#8b5cf6',
      },
      spacing: {
      '128': '32rem',
      },
    },
  },
})
```

## Theme Merging

Merge theme จากหลาย sources

```typescript
import { presetUno } from 'unocss'

export default defineConfig({
  presets: [presetUno()],
  theme: {
    // Will merge with preset theme
    colors: {
      custom: '#ff0000',
    },
  },
})
```

## Theme Functions

ใช้ functions ใน theme

```typescript
export default defineConfig({
  theme: {
    colors: {
      // Function to generate colors
      primary: ({ opacity }) => {
        if (opacity) return `rgba(59, 130, 246, ${opacity})`
        return '#3b82f6'
      },
    },
  },
})
```

## Best Practices

1. **Consistent naming** - ใช้ naming convention ที่ consistent
2. **Semantic colors** - ใช้ semantic names เช่น primary, secondary
3. **Scale consistency** - ใช้ scale ที่ consistent ทั่วทั้ง project
4. **CSS variables** - ใช้ CSS variables สำหรับ dynamic theming
5. **Document theme** - document theme structure อย่างชัดเจน

## Theme Inspection

ตรวจสอบ theme ที่ถูกใช้

```typescript
// In dev mode, UnoCSS จะแสดง theme ที่ถูกใช้
// ใช้ UnoCSS Inspector ใน browser devtools
```

## Migration from Tailwind

ถ้า migrate จาก Tailwind:

```typescript
// Tailwind theme.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        brand: '#8b5cf6',
      },
    },
  },
}

// UnoCSS uno.config.ts
export default defineConfig({
  theme: {
    colors: {
      brand: '#8b5cf6',
    },
  },
})
```
