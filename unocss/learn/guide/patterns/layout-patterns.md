# Layout Patterns

## Container Pattern

สร้าง container system

```typescript
export default defineConfig({
  shortcuts: {
    'container': 'mx-auto px-4 max-w-7xl',
    'container-sm': 'mx-auto px-4 max-w-3xl',
    'container-lg': 'mx-auto px-4 max-w-5xl',
  },
})
```

```html
<div class="container">
  <h1>Content</h1>
</div>
```

## Flex Pattern

สร้าง flex utilities

```typescript
export default defineConfig({
  shortcuts: {
    'flex-center': 'flex items-center justify-center',
    'flex-between': 'flex items-center justify-between',
    'flex-col': 'flex flex-col',
    'flex-col-center': 'flex flex-col items-center justify-center',
  },
})
```

```html
<div class="flex-between">
  <div>Left</div>
  <div>Right</div>
</div>
```

## Grid Pattern

สร้าง grid utilities

```typescript
export default defineConfig({
  shortcuts: {
    'grid-auto': 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4',
    'grid-2': 'grid grid-cols-2 gap-4',
    'grid-3': 'grid grid-cols-3 gap-4',
    'grid-4': 'grid grid-cols-4 gap-4',
  },
})
```

```html
<div class="grid-auto">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</div>
```
