# Shortcuts Customization

## Component Shortcuts

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

## Layout Shortcuts

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

## Semantic Shortcuts

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
