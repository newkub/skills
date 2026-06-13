# Transformers Customization

## Create Custom Transformer

สร้าง transformer ของตัวเอง

```typescript
import type { Transformer } from 'unocss'

const customTransformer: Transformer = {
  name: 'custom-transformer',
  enforce: 'pre',
  transform(code, id) {
    // Custom transform logic
    if (id.endsWith('.vue')) {
      return code.replace(/class="([^"]+)"/g, (match, classes) => {
        // Transform classes
        return `class="${transformClasses(classes)}"`
      })
    }
    return code
  },
}

export default defineConfig({
  transformers: [customTransformer],
})
```

## Extend Existing Transformers

Extend transformers ที่มีอยู่

```typescript
import { transformerDirectives } from 'unocss'

export default defineConfig({
  transformers: [
    transformerDirectives({
      // Extend transformer options
      applyVariant: false,
      varStyle: 'light',
    }),
  ],
})
```
