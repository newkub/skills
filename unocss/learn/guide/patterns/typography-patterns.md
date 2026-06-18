# Typography Patterns

## Heading Pattern

สร้าง heading system

```typescript
export default defineConfig({
  shortcuts: {
    'text-heading': 'text-2xl font-bold text-gray-900',
    'text-subheading': 'text-xl font-semibold text-gray-800',
    'text-body': 'text-base text-gray-600',
    'text-caption': 'text-sm text-gray-500',
  },
})
```

```html
<h1 class="text-heading">Heading</h1>
<p class="text-body">Body text</p>
```

## Link Pattern

สร้าง link system

```typescript
export default defineConfig({
  shortcuts: {
    'link': 'text-blue-500 hover:text-blue-700 underline',
    'link-no-underline': 'text-blue-500 hover:text-blue-700',
  },
})
```

```html
<a href="#" class="link">Link</a>
```
