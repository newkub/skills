# Examples

## Basic Setup
```javascript
// uno.config.js
import { defineConfig, presetUno } from 'unocss'

export default defineConfig({
  presets: [presetUno()]
})
```

## Vue Component
```vue
<template>
  <div class="flex items-center justify-center p-4">
    <button class="btn-primary">Click me</button>
  </div>
</template>

<style>
.btn-primary {
  @apply px-4 py-2 bg-blue-500 text-white rounded;
}
</style>
```

## React Component
```jsx
export default function Button({ children, variant = 'primary' }) {
  const baseClasses = 'px-4 py-2 rounded font-medium'
  const variantClasses = {
    primary: 'bg-blue-500 text-white hover:bg-blue-600',
    secondary: 'bg-gray-200 text-gray-800 hover:bg-gray-300'
  }
  
  return (
    <button className={`${baseClasses} ${variantClasses[variant]}`}>
      {children}
    </button>
  )
}
```

## Attributify Mode
```html
<div flex="~ items-center justify-center" p="4">
  <button bg="blue-500" text="white" p="x-4 y-2" rounded>
    Attributify Button
  </button>
</div>
```
