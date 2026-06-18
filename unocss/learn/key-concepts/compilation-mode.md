# Compilation Mode

## ภาพรวม

Compilation Mode คือ feature ที่ synthesize multiple utility classes ให้เป็น class เดียวใน build time ช่วยลด HTML size และ improve performance

## การทำงาน

Compilation mode จะ:
1. Detect patterns ของ utility classes ที่ใช้ร่วมกันบ่อย
2. Synthesize เป็น class เดียว
3. Replace usage ด้วย class ที่ synthesize แล้ว
4. Generate CSS สำหรับ class ที่ synthesize

## เปิดใช้งาน Compilation Mode

ใช้ `transformerCompileClass`

```typescript
import { transformerCompileClass } from 'unocss'

export default defineConfig({
  transformers: [transformerCompileClass()],
})
```

## การใช้งาน

### Basic Usage

```html
<!-- ก่อน compilation -->
<div class="px-4 py-2 bg-blue-500 text-white rounded">Button</div>

<!-- หลัง compilation -->
<div class="compile:px-4 py-2 bg-blue-500 text-white rounded">Button</div>
```

### Automatic Compilation

```typescript
import { transformerCompileClass } from 'unocss'

export default defineConfig({
  transformers: [
    transformerCompileClass({
      // Automatic compilation สำหรับ patterns ที่กำหนด
      trigger: new RegExp(/class="([^"]+)"/),
    }),
  ],
})
```

## Compilation Patterns

### Button Pattern

```html
<!-- Input -->
<button class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
  Click me
</button>

<!-- Output (compiled) -->
<button class="btn-primary">
  Click me
</button>
```

```css
/* Generated CSS */
.btn-primary {
  padding: 1rem;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  background-color: #3b82f6;
  color: white;
  border-radius: 0.25rem;
}
.btn-primary:hover {
  background-color: #2563eb;
}
```

### Card Pattern

```html
<!-- Input -->
<div class="p-4 border rounded-lg shadow-sm bg-white">
  <h2 class="text-xl font-bold mb-2">Title</h2>
  <p class="text-gray-600">Content</p>
</div>

<!-- Output (compiled) -->
<div class="card">
  <h2 class="text-xl font-bold mb-2">Title</h2>
  <p class="text-gray-600">Content</p>
</div>
```

## Custom Compilation Rules

กำหนด custom compilation rules

```typescript
import { transformerCompileClass } from 'unocss'

export default defineConfig({
  transformers: [
    transformerCompileClass({
      // Custom triggers
      trigger: (selector, raw) => {
        // Custom logic สำหรับ trigger compilation
        if (selector.startsWith('btn-')) {
          return true
        }
        return false
      },
    }),
  ],
})
```

## Compilation Options

### transformerCompileClass Options

```typescript
import { transformerCompileClass } from 'unocss'

export default defineConfig({
  transformers: [
    transformerCompileClass({
      // Trigger pattern
      trigger: new RegExp(/class="([^"]+)"/),
      
      // Class name prefix
      classPrefix: 'c-',
      
      // Minimum utilities สำหรับ compilation
      minify: true,
      
      // Skip specific patterns
      ignore: ['hover:', 'focus:'],
    }),
  ],
})
```

## Compilation กับ Shortcuts

Compilation mode ทำงานร่วมกับ shortcuts

```typescript
export default defineConfig({
  shortcuts: {
    'btn': 'px-4 py-2 bg-blue-500 text-white rounded',
  },
  transformers: [
    transformerCompileClass(),
  ],
})
```

```html
<!-- Input -->
<div class="btn hover:bg-blue-600">Button</div>

<!-- Output (compiled) -->
<div class="c-btn">Button</div>
```

## Compilation กับ Variants

รองรับ variants ใน compilation

```html
<!-- Input -->
<div class="hover:text-red focus:text-blue active:text-green">
  Text
</div>

<!-- Output (compiled) -->
<div class="c-variant">
  Text
</div>
```

```css
/* Generated CSS */
.c-variant:hover {
  color: red;
}
.c-variant:focus {
  color: blue;
}
.c-variant:active {
  color: green;
}
```

## Performance Benefits

### HTML Size Reduction

```html
<!-- ก่อน compilation -->
<div class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:ring-2 focus:ring-blue-400">
  Button
</div>
<!-- ~100 characters -->

<!-- หลัง compilation -->
<div class="btn-primary">
  Button
</div>
<!-- ~20 characters -->
```

### CSS Optimization

```css
/* ก่อน compilation */
.px-4 { padding-left: 1rem; padding-right: 1rem; }
.py-2 { padding-top: 0.5rem; padding-bottom: 0.5rem; }
.bg-blue-500 { background-color: #3b82f6; }
/* ... */

/* หลัง compilation */
.btn-primary {
  padding: 1rem 0.5rem;
  background-color: #3b82f6;
  /* ... */
}
```

## Debugging Compilation

```typescript
export default defineConfig({
  transformers: [
    transformerCompileClass({
      // Debug mode
      debug: true,
    }),
  ],
  inspect: true,
})
```

ตรวจสอบ compilation ที่ `http://localhost:3000/__uno`

## Best Practices

1. **Use sparingly** - ใช้ compilation เฉพาะ patterns ที่ใช้บ่อย
2. **Measure impact** - วัดผล impact ก่อนใช้
3. **Test thoroughly** - test ว่า compilation ไม่ break styles
4. **Document patterns** - document patterns ที่ compile
5. **Review regularly** - review compilation rules อย่างสม่ำเสมอ

## Common Patterns

### Button Components

```typescript
export default defineConfig({
  shortcuts: {
    'btn': 'px-4 py-2 rounded font-medium',
    'btn-primary': 'btn bg-blue-500 text-white hover:bg-blue-600',
    'btn-secondary': 'btn bg-gray-500 text-white hover:bg-gray-600',
  },
  transformers: [
    transformerCompileClass(),
  ],
})
```

### Form Components

```typescript
export default defineConfig({
  shortcuts: {
    'input': 'px-3 py-2 border rounded focus:ring-2 focus:ring-blue-400',
    'label': 'block text-sm font-medium text-gray-700 mb-1',
  },
  transformers: [
    transformerCompileClass(),
  ],
})
```

### Layout Components

```typescript
export default defineConfig({
  shortcuts: {
    'container': 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8',
    'flex-center': 'flex items-center justify-center',
    'grid-3': 'grid grid-cols-3 gap-4',
  },
  transformers: [
    transformerCompileClass(),
  ],
})
```

## Compilation กับ Build Tools

### Vite

```typescript
// vite.config.ts
import UnoCSS from 'unocss/vite'
import { transformerCompileClass } from 'unocss'

export default {
  plugins: [
    UnoCSS({
      transformers: [
        transformerCompileClass(),
      ],
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
    transformers: [
      transformerCompileClass(),
    ],
  },
})
```

## Compilation กับ Frameworks

### Vue

```vue
<template>
  <button class="btn-primary">Click me</button>
</template>

<script setup>
// Compilation จะทำงานใน build time
</script>
```

### React

```jsx
function Button() {
  return <button className="btn-primary">Click me</button>
}
// Compilation จะทำงานใน build time
```

### Svelte

```svelte
<button class="btn-primary">Click me</button>
<!-- Compilation จะทำงานใน build time -->
```

## Limitations

1. **Build-time only** - compilation ทำงานเฉพาะ build time
2. **Dynamic classes** - dynamic classes ไม่ถูก compile
3. **Runtime changes** - runtime changes ไม่ถูก compile
4. **Complex patterns** - patterns ที่ซับซ้อนอาจไม่ compile ได้

## Alternatives

### ใช้ Shortcuts

```typescript
export default defineConfig({
  shortcuts: {
    'btn-primary': 'px-4 py-2 bg-blue-500 text-white rounded',
  },
})
```

### ใช้ CSS Components

```css
.btn-primary {
  @apply px-4 py-2 bg-blue-500 text-white rounded;
}
```

## Monitoring Compilation

ตรวจสอบ compilation results

```typescript
export default defineConfig({
  transformers: [
    transformerCompileClass({
      // Log compilation
      onCompiled(result) {
        console.log('Compiled:', result)
      },
    }),
  ],
})
```
