# Customization

## ภาพรวม

UnoCSS มี flexibility สูงในการ customize ตั้งแต่ rules, shortcuts, theme, ไปจนถึง transformers

## Customization Levels

### Level 1: Theme Customization

กำหนด theme สำหรับ design tokens

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
    },
  },
})
```

### Level 2: Rules Customization

กำหนด custom rules สำหรับ utilities

```typescript
export default defineConfig({
  rules: [
    ['text-brand', { color: '#8b5cf6' }],
    [/^bg-(.+)$/, ([, color]) => ({ 'background-color': color })],
  ],
})
```

### Level 3: Shortcuts Customization

กำหนด shortcuts สำหรับ patterns

```typescript
export default defineConfig({
  shortcuts: {
    'btn': 'px-4 py-2 bg-blue-500 text-white rounded',
    'card': 'p-4 bg-white rounded shadow',
  },
})
```

### Level 4: Presets Customization

สร้าง custom presets

```typescript
import { definePreset } from 'unocss'

const myPreset = definePreset((options) => {
  return {
    name: 'my-preset',
    rules: [
      ['custom-class', { color: 'red' }],
    ],
  }
})

export default defineConfig({
  presets: [myPreset()],
})
```

### Level 5: Transformers Customization

สร้าง custom transformers

```typescript
import type { Transformer } from 'unocss'

const myTransformer: Transformer = {
  name: 'my-transformer',
  transform(code, id) {
    // Custom transform logic
    return code
  },
}

export default defineConfig({
  transformers: [myTransformer],
})
```

## Theme Customization

### Color System

กำหนด color system ที่ custom

```typescript
export default defineConfig({
  theme: {
    colors: {
      // Brand colors
      brand: {
        50: '#f5f3ff',
        100: '#ede9fe',
        200: '#ddd6fe',
        300: '#c4b5fd',
        400: '#a78bfa',
        500: '#8b5cf6',
        600: '#7c3aed',
        700: '#6d28d9',
        800: '#5b21b6',
        900: '#4c1d95',
      },
      
      // Semantic colors
      primary: 'var(--color-primary)',
      secondary: 'var(--color-secondary)',
      success: 'var(--color-success)',
      warning: 'var(--color-warning)',
      error: 'var(--color-error)',
    },
  },
})
```

### Spacing System

กำหนด spacing scale ที่ custom

```typescript
export default defineConfig({
  theme: {
    spacing: {
      // Custom spacing scale
      '0': '0',
      '1': '0.25rem',
      '2': '0.5rem',
      '3': '0.75rem',
      '4': '1rem',
      '6': '1.5rem',
      '8': '2rem',
      '12': '3rem',
      '16': '4rem',
      '24': '6rem',
    },
  },
})
```

### Typography System

กำหนด typography scale ที่ custom

```typescript
export default defineConfig({
  theme: {
    fontSize: {
      // Custom font sizes
      'xs': ['0.75rem', { lineHeight: '1rem' }],
      'sm': ['0.875rem', { lineHeight: '1.25rem' }],
      'base': ['1rem', { lineHeight: '1.5rem' }],
      'lg': ['1.125rem', { lineHeight: '1.75rem' }],
      'xl': ['1.25rem', { lineHeight: '1.75rem' }],
      '2xl': ['1.5rem', { lineHeight: '2rem' }],
      '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
    },
  },
})
```

## Rules Customization

### Static Rules

กำหนด static rules ง่ายๆ

```typescript
export default defineConfig({
  rules: [
    ['text-brand', { color: '#8b5cf6' }],
    ['bg-brand', { 'background-color': '#8b5cf6' }],
    ['border-brand', { 'border-color': '#8b5cf6' }],
  ],
})
```

### Dynamic Rules

กำหนด dynamic rules ด้วย regex

```typescript
export default defineConfig({
  rules: [
    // Dynamic color
    [/^text-(.+)$/, ([, color]) => ({ color })],
    
    // Dynamic spacing
    [/^p-(\d+)$/, ([, num]) => ({ padding: `${num * 0.25}rem` })],
    
    // Dynamic with transformation
    [/^m-([xy])-(\d+)$/, ([, dir, num]) => {
      const prop = dir === 'x' ? 'margin-left' : 'margin-top'
      return { [prop]: `${num * 0.25}rem` }
    }],
  ],
})
```

### Complex Rules

กำหนด complex rules ด้วย logic

```typescript
export default defineConfig({
  rules: [
    // Complex logic
    [/^shadow-(.+)$/, ([, size]) => {
      const shadows = {
        sm: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
        md: '0 4px 6px -1px rgb(0 0 0 / 0.1)',
        lg: '0 10px 15px -3px rgb(0 0 0 / 0.1)',
      }
      return { 'box-shadow': shadows[size] || shadows.md }
    }],
  ],
})
```

## Shortcuts Customization

### Component Shortcuts

กำหนด shortcuts สำหรับ components

```typescript
export default defineConfig({
  shortcuts: {
    // Button shortcuts
    'btn': 'px-4 py-2 rounded font-medium transition-colors',
    'btn-sm': 'px-3 py-1.5 text-sm rounded',
    'btn-lg': 'px-6 py-3 text-lg rounded',
    'btn-primary': 'btn bg-blue-500 text-white hover:bg-blue-600',
    'btn-secondary': 'btn bg-gray-200 text-gray-900 hover:bg-gray-300',
    
    // Card shortcuts
    'card': 'p-4 bg-white rounded-lg shadow',
    'card-hover': 'card hover:shadow-lg transition-shadow',
    
    // Form shortcuts
    'input': 'px-3 py-2 border rounded focus:ring-2 focus:ring-blue-500',
    'label': 'block text-sm font-medium text-gray-700 mb-1',
  },
})
```

### Layout Shortcuts

กำหนด shortcuts สำหรับ layouts

```typescript
export default defineConfig({
  shortcuts: {
    // Layout shortcuts
    'container': 'mx-auto px-4 max-w-7xl',
    'flex-center': 'flex items-center justify-center',
    'flex-between': 'flex items-center justify-between',
    'grid-auto': 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4',
  },
})
```

### Semantic Shortcuts

กำหนด shortcuts สำหรับ semantic purposes

```typescript
export default defineConfig({
  shortcuts: {
    // Semantic shortcuts
    'text-heading': 'text-2xl font-bold text-gray-900',
    'text-body': 'text-base text-gray-600',
    'text-caption': 'text-sm text-gray-500',
  },
})
```

## Presets Customization

### Extend Existing Presets

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

### Create Custom Preset

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

## Transformers Customization

### Create Custom Transformer

สร้าง transformer ของตัวเอง

```typescript
import type { Transformer } from 'unocss'

const customTransformer: Transformer = {
  name: 'custom-transformer',
  enforce: 'pre',
  transform(code, id) {
    // Custom transform logic
    if (id.endsWith('.vue')) {
      return code.replace(/class="([^"]+)"/g, (match, classes) => {
        // Transform classes
        return `class="${transformClasses(classes)}"`
      })
    }
    return code
  },
}

export default defineConfig({
  transformers: [customTransformer],
})
```

### Extend Existing Transformers

Extend transformers ที่มีอยู่

```typescript
import { transformerDirectives } from 'unocss'

export default defineConfig({
  transformers: [
    transformerDirectives({
      // Extend transformer options
      applyVariant: false,
      varStyle: 'light',
    }),
  ],
})
```

## Integration Customization

### Vite Integration

Customize Vite integration

```typescript
// vite.config.ts
import UnoCSS from 'unocss/vite'

export default {
  plugins: [
    UnoCSS({
      // Custom configuration
      configFile: './uno.config.ts',
      include: [/\.vue$/, /\.vue\?vue/, /\.md$/, /\.md\?vue/],
      exclude: [/node_modules/, /\.git/],
    }),
  ],
})
```

### Nuxt Integration

Customize Nuxt integration

```typescript
// nuxt.config.ts
export default defineNuxtConfig({
  modules: ['@unocss/nuxt'],
  unocss: {
    // Custom configuration
    uno: './uno.config.ts',
    include: [/\.vue$/, /\.vue\?vue/, /\.md$/, /\.md\?vue/],
    exclude: [/node_modules/, /\.git/],
  },
})
```

## Best Practices

### 1. Start Simple

เริ่มด้วย customizations ง่ายๆ ก่อน

```typescript
export default defineConfig({
  theme: {
    colors: {
      primary: '#3b82f6',
    },
  },
})
```

### 2. Document Customizations

Document customizations ทั้งหมด

```typescript
/**
 * UnoCSS Configuration
 * 
 * Customizations:
 * - Brand colors
 * - Custom spacing scale
 * - Component shortcuts
 */
export default defineConfig({
  // ...
})
```

### 3. Use Semantic Names

ใช้ semantic names สำหรับ customizations

```typescript
export default defineConfig({
  shortcuts: {
    'btn-primary': 'px-4 py-2 bg-blue-500 text-white rounded',
  },
})
```

### 4. Test Customizations

Test customizations อย่างละเอียด

```typescript
// Test custom rules
// Test custom shortcuts
// Test custom theme
```

### 5. Review Regularly

Review customizations อย่างสม่ำเสมอ

```typescript
// Review unused customizations
// Remove unnecessary customizations
// Optimize performance
```

## Migration Strategy

### From Tailwind

Migrate customizations จาก Tailwind

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

### From Styled Components

Migrate customizations จาก Styled Components

```jsx
// Styled Components
const Button = styled.button`
  padding: 1rem;
  background: blue;
  color: white;
  border-radius: 0.5rem;
`;

// UnoCSS
export default defineConfig({
  shortcuts: {
    'btn': 'px-4 py-2 bg-blue-500 text-white rounded',
  },
})
```

## Conclusion

UnoCSS มี flexibility สูงในการ customize:
- Theme customization
- Rules customization
- Shortcuts customization
- Presets customization
- Transformers customization

ใช้ best practices เพื่อ maintainability และ performance
