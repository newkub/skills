# Customization Levels

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
