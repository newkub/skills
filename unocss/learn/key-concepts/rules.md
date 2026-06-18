# Rules

## ภาพรวม

Rules คือการกำหนด CSS utilities ที่กำหนดเองใน UnoCSS โดย mapping จาก class name ไปยัง CSS properties

## Basic Rules

กำหนด rule แบบง่ายด้วย array `[matcher, body]`

```typescript
export default defineConfig({
  rules: [
    // Static rule
    ['text-red', { color: 'red' }],
    
    // Dynamic rule with regex
    [/^text-(.+)$/, ([, color]) => ({ color })],
    
    // Multiple properties
    ['card', {
      padding: '1rem',
      border: '1px solid #e5e7eb',
      'border-radius': '0.5rem',
    }],
  ],
})
```

## Dynamic Rules

ใช้ regex สำหรับ dynamic class names

```typescript
export default defineConfig({
  rules: [
    // Dynamic color
    [/^text-(.+)$/, ([, color]) => ({ color })],
    
    // Dynamic spacing
    [/^p-(\d+)$/, ([, num]) => ({ padding: `${num * 0.25}rem` })],
    
    // Multiple captures
    [/^m-([xy])-(\d+)$/, ([, dir, num]) => {
      const prop = dir === 'x' ? 'margin-left' : 'margin-top'
      return { [prop]: `${num * 0.25}rem` }
    }],
  ],
})
```

## Rule Variants

ใช้ variants กับ rules

```typescript
export default defineConfig({
  rules: [
    // With variant
    [/^text-(.+)$/, ([, color], { variant }) => {
      if (variant === 'dark') {
        return { color: `dark-${color}` }
      }
      return { color }
    }],
  ],
})
```

## Rule Layers

กำหนด layer สำหรับ rule

```typescript
export default defineConfig({
  rules: [
    // Default layer
    ['text-red', { color: 'red' }],
    
    // Specific layer
    ['text-blue', { color: 'blue' }, { layer: 'utilities' }],
    
    // Base layer
    ['body-reset', { margin: 0 }, { layer: 'base' }],
  ],
})
```

## Rule Priority

กำหนด priority สำหรับ rule

```typescript
export default defineConfig({
  rules: [
    // Higher priority (default: 1)
    ['important-text', { color: 'red' }, { priority: 10 }],
    
    // Lower priority
    ['normal-text', { color: 'blue' }, { priority: -1 }],
  ],
})
```

## Rule Generator

ใช้ function สำหรับ generate rules

```typescript
export default defineConfig({
  rules: [
    // Generate multiple rules
    ...colors.map((color) => [
      `bg-${color}`,
      { 'background-color': color },
    ]),
  ],
})
```

## Rule with CSS Variables

ใช้ CSS variables ใน rules

```typescript
export default defineConfig({
  rules: [
    [/^bg-(.+)$/, ([, color]) => ({
      'background-color': `var(--color-${color})`,
    })],
  ],
})
```

## Rule with Media Queries

ใช้ media queries ใน rules

```typescript
export default defineConfig({
  rules: [
    // Responsive rule
    [/^sm:text-(.+)$/, ([, color]) => ({
      '@media (min-width: 640px)': {
        color,
      },
    })],
  ],
})
```

## Rule with Pseudo-classes

ใช้ pseudo-classes ใน rules

```typescript
export default defineConfig({
  rules: [
    // Hover state
    [/^hover:text-(.+)$/, ([, color]) => ({
      '&:hover': { color },
    })],
    
    // Focus state
    [/^focus:ring-(\d+)$/, ([, size]) => ({
      '&:focus': {
        'box-shadow': `0 0 0 ${size}px`,
      },
    })],
  ],
})
```

## Rule Shortcuts

ใช้ shortcuts กับ rules

```typescript
export default defineConfig({
  shortcuts: {
    // Shortcut to multiple rules
    'btn': 'px-4 py-2 bg-blue-500 text-white rounded',
  },
  rules: [
    // Rules still work
    ['text-red', { color: 'red' }],
  ],
})
```

## Rule Inspection

ตรวจสอบ rules ที่ถูก generate

```typescript
// In dev mode, UnoCSS จะแสดง rules ที่ถูก match
// ใช้ UnoCSS Inspector ใน browser devtools
```

## Best Practices

1. **Naming conventions** - ใช้ naming ที่ชัดเจนและ consistent
2. **Regex performance** - หลีกเลี่ยง regex ที่ซับซ้อนเกินไป
3. **Rule ordering** - specific rules ก่อน general rules
4. **Layer usage** - ใช้ layers สำหรับ organize rules
5. **Avoid conflicts** - ตรวจสอบ naming conflicts กับ presets

## Common Patterns

### Color System

```typescript
const colors = {
  red: '#ef4444',
  blue: '#3b82f6',
  green: '#22c55e',
}

export default defineConfig({
  rules: [
    ...Object.entries(colors).map(([name, value]) => [
      `text-${name}`,
      { color: value },
    ]),
  ],
})
```

### Spacing System

```typescript
const spacing = {
  0: '0',
  1: '0.25rem',
  2: '0.5rem',
  3: '0.75rem',
  4: '1rem',
}

export default defineConfig({
  rules: [
    ...Object.entries(spacing).map(([name, value]) => [
      `p-${name}`,
      { padding: value },
    ]),
  ],
})
```

### Typography System

```typescript
export default defineConfig({
  rules: [
    [/^text-(\d+)$/, ([, size]) => ({
      'font-size': `${size / 16}rem`,
      'line-height': '1.5',
    })],
  ],
})
```
