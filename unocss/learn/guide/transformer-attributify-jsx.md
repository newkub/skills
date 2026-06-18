# Transformer Attributify JSX

## ภาพรวม

`transformer-attributify-jsx` คือ transformer ที่ enable attributify mode สำหรับ JSX/TSX ให้ใช้ HTML attributes แทน class strings ใน React components

## การติดตั้ง

```bash
bun add -D @unocss/transformer-attributify-jsx
```

## การตั้งค่า

```typescript
import { defineConfig } from 'unocss'
import transformerAttributifyJsx from '@unocss/transformer-attributify-jsx'

export default defineConfig({
  transformers: [
    transformerAttributifyJsx(),
  ],
})
```

## การใช้งาน

### Basic Usage

ใช้ attributes แทน className ใน JSX:

```jsx
// แบบเดิม
<div className="flex items-center justify-center">
  <div className="text-xl font-bold">Title</div>
</div>

// ด้วย transformer-attributify-jsx
<div flex items-center justify-center>
  <div text-xl font-bold>Title</div>
</div>
```

### React Components

```jsx
function Button() {
  return (
    <button px-4 py-2 bg-blue-500 text-white rounded>
      Click me
    </button>
  )
}
```

### Preact Components

```jsx
function Button() {
  return (
    <button px-4 py-2 bg-blue-500 text-white rounded>
      Click me
    </button>
  )
}
```

### Solid Components

```jsx
function Button() {
  return (
    <button px-4 py-2 bg-blue-500 text-white rounded>
      Click me
    </button>
  )
}
```

## Configuration Options

```typescript
import transformerAttributifyJsx from '@unocss/transformer-attributify-jsx'

export default defineConfig({
  transformers: [
    transformerAttributifyJsx({
      // Block list attributes
      blockList: ['id', 'class'],
      
      // Prefix for attributes
      prefix: '',
      
      // Ignore attributes
      ignoreAttributes: ['data-*'],
    }),
  ],
})
```

### Block List

กำหนด attributes ที่ไม่ให้ transform:

```typescript
export default defineConfig({
  transformers: [
    transformerAttributifyJsx({
      blockList: ['id', 'class', 'style'],
    }),
  ],
})
```

### Prefix

กำหนด prefix สำหรับ attributes:

```typescript
export default defineConfig({
  transformers: [
    transformerAttributifyJsx({
      prefix: 'u-',
    }),
  ],
})
```

```jsx
<div u-flex u-items-center u-justify-center>
  <div u-text-xl u-font-bold>Title</div>
</div>
```

### Ignore Attributes

กำหนด attributes ที่ ignore:

```typescript
export default defineConfig({
  transformers: [
    transformerAttributifyJsx({
      ignoreAttributes: ['data-*', 'aria-*'],
    }),
  ],
})
```

## การใช้งานกับ preset-attributify

รวมกับ preset-attributify:

```typescript
import { presetAttributify } from 'unocss'
import transformerAttributifyJsx from '@unocss/transformer-attributify-jsx'

export default defineConfig({
  presets: [
    presetAttributify(),
  ],
  transformers: [
    transformerAttributifyJsx(),
  ],
})
```

## การใช้งานกับ Variants

ใช้ variants ใน JSX attributes:

```jsx
<div hover:bg-red-500 focus:ring-2 active:bg-blue-600>
  Interactive element
</div>
```

## การใช้งานกับ Dynamic Values

ใช้ dynamic values ใน JSX:

```jsx
function Component({ isActive }) {
  return (
    <div className={isActive ? 'bg-green-500' : 'bg-red-500'}>
      Status
    </div>
  )
}
```

## การใช้งานกับ Conditional Attributes

ใช้ conditional attributes:

```jsx
function Component({ isLarge }) {
  return (
    <div px-4 py-2={isLarge} bg-blue-500>
      Button
    </div>
  )
}
```

## การใช้งานกับ Children

ใช้กับ children elements:

```jsx
<div flex>
  <div flex-1>Left</div>
  <div flex-1>Right</div>
</div>
```

## การใช้งานกับ Event Handlers

ใช้กับ event handlers:

```jsx
<button 
  px-4 py-2 bg-blue-500 text-white rounded
  onClick={handleClick}
>
  Click me
</button>
```

## การใช้งานกับ Refs

ใช้กับ refs:

```jsx
import { useRef } from 'react'

function Component() {
  const ref = useRef(null)
  
  return (
    <div ref={ref} px-4 py-2>
      Content
    </div>
  )
}
```

## Performance Considerations

1. **Minimal attributes** - ใช้ attributes เฉพาะที่จำเปณ
2. **Block list** - ใช้ block list เพื่อ performance
3. **Transformer order** - เรียงลำดับ transformers ให้ถูกต้อง
4. **Bundle size** - transformer นี้มีขนาดเล็ก

## Best Practices

1. **Consistent naming** - ตั้งชื่อ attributes ให้ consistent
2. **Type safety** - ใช้ TypeScript สำหรับ type safety
3. **Test thoroughly** - test ทุก components หลัง transformation
4. **Document usage** - document การใช้งาน
5. **Fallback to className** - ใช้ className เมื่อจำเป็น

## Common Patterns

### Button Component

```jsx
function Button({ variant = 'primary', children }) {
  const baseClasses = 'px-4 py-2 rounded font-medium'
  const variantClasses = {
    primary: 'bg-blue-500 text-white hover:bg-blue-600',
    secondary: 'bg-gray-500 text-white hover:bg-gray-600',
    danger: 'bg-red-500 text-white hover:bg-red-600',
  }
  
  return (
    <button 
      className={`${baseClasses} ${variantClasses[variant]}`}
    >
      {children}
    </button>
  )
}
```

### Card Component

```jsx
function Card({ title, children }) {
  return (
    <div p-4 border rounded-lg shadow-sm>
      <h2 text-xl font-bold mb-4>{title}</h2>
      <div text-gray-600>{children}</div>
    </div>
  )
}
```

### Layout Component

```jsx
function Layout({ header, sidebar, content }) {
  return (
    <div flex h-screen>
      <aside w-64 border-r>
        {sidebar}
      </aside>
      <main flex-1>
        <header border-b p-4>
          {header}
        </header>
        <div p-4>
          {content}
        </div>
      </main>
    </div>
  )
}
```

## Integration Examples

### Vite + React

```typescript
// vite.config.ts
import UnoCSS from 'unocss/vite'
import transformerAttributifyJsx from '@unocss/transformer-attributify-jsx'

export default {
  plugins: [
    UnoCSS({
      transformers: [
        transformerAttributifyJsx(),
      ],
    }),
  ],
}
```

### Vite + Preact

```typescript
// vite.config.ts
import UnoCSS from 'unocss/vite'
import transformerAttributifyJsx from '@unocss/transformer-attributify-jsx'

export default {
  plugins: [
    UnoCSS({
      transformers: [
        transformerAttributifyJsx(),
      ],
    }),
  ],
}
```

### Vite + Solid

```typescript
// vite.config.ts
import UnoCSS from 'unocss/vite'
import transformerAttributifyJsx from '@unocss/transformer-attributify-jsx'

export default {
  plugins: [
    UnoCSS({
      transformers: [
        transformerAttributifyJsx(),
      ],
    }),
  ],
}
```

## Troubleshooting

### Attributes ไม่ถูก transform

ตรวจสอบว่า transformer-attributify-jsx ถูกเปิด:

```typescript
export default defineConfig({
  transformers: [
    transformerAttributifyJsx(),
  ],
})
```

### Block list ไม่ทำงาน

ตรวจสอบ blockList configuration:

```typescript
export default defineConfig({
  transformers: [
    transformerAttributifyJsx({
      blockList: ['id', 'class'],
    }),
  ],
})
```

### Prefix ไม่ทำงาน

ตรวจสอบ prefix configuration:

```typescript
export default defineConfig({
  transformers: [
    transformerAttributifyJsx({
      prefix: 'u-',
    }),
  ],
})
```

## Alternatives

### ใช้ className

```jsx
<div className="flex items-center justify-center">
  Content
</div>
```

### ใช้ preset-attributify

```typescript
import { presetAttributify } from 'unocss'

export default defineConfig({
  presets: [
    presetAttributify(),
  ],
})
```

## Resources

- [UnoCSS Documentation](https://unocss.dev)
- [transformer-attributify-jsx GitHub](https://github.com/unocss/unocss/tree/main/packages/transformers/attributify-jsx)
