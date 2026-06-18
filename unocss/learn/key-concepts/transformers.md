# Transformers

## ภาพรวม

Transformers คือ plugins ที่ transform CSS ก่อน generate ช่วยให้ใช้ CSS directives และ features เพิ่มเติม

## Built-in Transformers

### Directives Transformer

รองรับ CSS directives เหมือน Tailwind

```typescript
import { transformerDirectives } from 'unocss'

export default defineConfig({
  transformers: [transformerDirectives()],
})
```

```css
/* @apply directive */
.btn {
  @apply px-4 py-2 bg-blue-500 text-white rounded;
}

/* @screen directive */
@media @screen sm {
  .text-sm {
    font-size: 0.875rem;
  }
}

/* @variant directive */
.hover\:text-red:hover {
  @variant hover;
  color: red;
}
```

### Variant Group Transformer

Group variants ด้วย `@unocss`

```typescript
import { transformerVariantGroup } from 'unocss'

export default defineConfig({
  transformers: [transformerVariantGroup()],
})
```

```css
/* Group variants */
@unocss {
  .btn {
    @apply px-4 py-2;
    @hover: {
      @apply bg-blue-600;
    }
    @focus: {
      @apply ring-2;
    }
  }
}
```

### Compile Class Transformer

Compile classes ใน build time

```typescript
import { transformerCompileClass } from 'unocss'

export default defineConfig({
  transformers: [transformerCompileClass()],
})
```

```html
<!-- Classes จะถูก compile ใน build time -->
<div class="compile:text-red">Text</div>
```

## การใช้งาน Transformers

### Vite Integration

```typescript
// vite.config.ts
import UnoCSS from 'unocss/vite'
import { transformerDirectives, transformerVariantGroup } from 'unocss'

export default {
  plugins: [
    UnoCSS({
      transformers: [
        transformerDirectives(),
        transformerVariantGroup(),
      ],
    }),
  ],
}
```

### Nuxt Integration

```typescript
// nuxt.config.ts
export default defineNuxtConfig({
  modules: ['@unocss/nuxt'],
  unocss: {
    transformers: [
      transformerDirectives(),
      transformerVariantGroup(),
    ],
  },
})
```

## Custom Transformers

สร้าง transformer ของตัวเอง

```typescript
import type { Transformer } from 'unocss'

const myTransformer: Transformer = {
  name: 'my-transformer',
  enforce: 'pre', // or 'post'
  transform(code, id) {
    // Transform code ก่อน generate
    if (id.endsWith('.css')) {
      return code.replace(/my-class/g, 'text-red')
    }
  },
}

export default defineConfig({
  transformers: [myTransformer],
})
```

## Transformer Options

### transformerDirectives Options

```typescript
import { transformerDirectives } from 'unocss'

export default defineConfig({
  transformers: [
    transformerDirectives({
      // Apply rules for @apply
      applyVariant: false,
      // Treat CSS variables
      varStyle: 'light',
    }),
  ],
})
```

### transformerVariantGroup Options

```typescript
import { transformerVariantGroup } from 'unocss'

export default defineConfig({
  transformers: [
    transformerVariantGroup({
      // Prefix for variant groups
      prefix: '@unocss',
    }),
  ],
})
```

## Transformer Order

Transformers ถูก execute ตามลำดับที่กำหนด

```typescript
export default defineConfig({
  transformers: [
    // Pre-transformers
    myPreTransformer(),
    
    // Built-in transformers
    transformerDirectives(),
    transformerVariantGroup(),
    
    // Post-transformers
    myPostTransformer(),
  ],
})
```

## Transformer Enforce

กำหนดลำดับ execute ด้วย `enforce`

```typescript
const preTransformer: Transformer = {
  name: 'pre-transformer',
  enforce: 'pre', // Execute ก่อน built-in transformers
  transform(code, id) {
    // ...
  },
}

const postTransformer: Transformer = {
  name: 'post-transformer',
  enforce: 'post', // Execute หลัง built-in transformers
  transform(code, id) {
    // ...
  },
}
```

## Common Use Cases

### Extract CSS Variables

```typescript
const extractVars: Transformer = {
  name: 'extract-vars',
  transform(code) {
    // Extract CSS variables จาก code
    const vars = code.match(/var\(--[^)]+\)/g)
    // ...
  },
}
```

### Custom Directives

```typescript
const customDirectives: Transformer = {
  name: 'custom-directives',
  transform(code) {
    // Transform custom directives
    return code.replace(/@custom (.+)/g, (match, content) => {
      // Transform logic
      return transformed
    })
  },
}
```

### Optimize CSS

```typescript
const optimizeCSS: Transformer = {
  name: 'optimize-css',
  enforce: 'post',
  transform(code) {
    // Optimize generated CSS
    return code
      .replace(/\s+/g, ' ')
      .replace(/;\s*}/g, '}')
  },
}
```

## Performance Considerations

1. **Minimal transformers** - ใช้เฉพาะที่จำเป็น
2. **Order matters** - เรียงลำดับ transformers ให้ถูกต้อง
3. **Cache friendly** - transformers ควร deterministic
4. **Avoid heavy operations** - หลีกเลี่ยง operations ที่หนักใน transformers

## Debugging Transformers

```typescript
const debugTransformer: Transformer = {
  name: 'debug',
  transform(code, id) {
    console.log('Transforming:', id)
    console.log('Before:', code)
    const result = // transform logic
    console.log('After:', result)
    return result
  },
}
```

## Best Practices

1. **Test transformers** - test ทุก transformer อย่างละเอียด
2. **Document behavior** - document ว่า transformer ทำอะไร
3. **Handle errors** - handle errors ใน transformers อย่างเหมาะสม
4. **Keep simple** - transformers ควร simple และ focused
5. **Performance first** - พิจารณา performance ของแต่ละ transformer

## Community Transformers

Transformers ที่สร้างโดย community:

- `@unocss/transformer-directives` - CSS directives
- `@unocss/transformer-variant-group` - Variant groups
- `@unocss/transformer-compile-class` - Compile classes
- `@unocss/transformer-attributify-jsx` - JSX attributify mode
