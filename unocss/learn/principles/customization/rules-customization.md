# Rules Customization

## Static Rules

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

## Dynamic Rules

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

## Complex Rules

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
