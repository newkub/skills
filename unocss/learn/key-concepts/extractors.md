# Extractors

## ภาพรวม

Extractors คือฟังก์ชันที่ extract utility class names จาก source code เพื่อให้ UnoCSS สามารถ generate CSS สำหรับ utilities ที่ใช้งานจริงเท่านั้น

## การทำงาน

Extractors สแกน source files และ extract utility class names จาก:
- Class attributes ใน HTML/JSX
- String literals ใน JavaScript/TypeScript
- CSS directives เช่น `@apply`
- Custom patterns ที่กำหนดเอง

## Built-in Extractors

### extractorSplit

Default extractor ที่ split utilities ด้วย whitespace

```typescript
import { extractorSplit } from 'unocss'

export default defineConfig({
  extractors: [extractorSplit()],
})
```

**การทำงาน:**
- Split class strings ด้วย whitespace
- Extract utilities จาก `class="text-red bg-blue"`
- รองรับ variant syntax เช่น `hover:text-red`

### extractorArbitraryVariants

Extract arbitrary variants เช่น `[&:hover]:text-red`

```typescript
import { extractorArbitraryVariants } from 'unocss'

export default defineConfig({
  extractors: [extractorArbitraryVariants()],
})
```

## Custom Extractors

สร้าง extractor ของตัวเอง

```typescript
import type { Extractor } from 'unocss'

const myExtractor: Extractor = {
  name: 'my-extractor',
  extract({ code }) {
    // Extract utilities จาก code
    const matches = code.matchAll(/my-class-([a-z]+)/g)
    return Array.from(matches).map(m => m[0])
  },
}

export default defineConfig({
  extractors: [myExtractor],
})
```

## Extractor Context

Extractors ได้รับ context object ที่มีข้อมูลเกี่ยวกับ file ที่กำลัง process

```typescript
const contextExtractor: Extractor = {
  name: 'context-extractor',
  extract({ code, id }) {
    // id = file path
    // code = file content
    console.log('Processing:', id)
    
    // Extract utilities จาก specific file types
    if (id.endsWith('.vue')) {
      // Vue-specific extraction
    }
  },
}
```

## Extractor Options

### extractorSplit Options

```typescript
import { extractorSplit } from 'unocss'

export default defineConfig({
  extractors: [
    extractorSplit({
      // Custom separator
      separator: ' ',
      // Allow custom separators
      allowCustomSeparator: true,
    }),
  ],
})
```

## การใช้งานหลาย Extractors

รวมหลาย extractors ใน config เดียว

```typescript
export default defineConfig({
  extractors: [
    extractorSplit(),
    extractorArbitraryVariants(),
    myCustomExtractor(),
  ],
})
```

## Extractor Order

Extractors ถูก execute ตามลำดับที่กำหนด

```typescript
export default defineConfig({
  extractors: [
    // Execute ก่อน
    preExtractor(),
    
    // Built-in extractors
    extractorSplit(),
    
    // Execute หลัง
    postExtractor(),
  ],
})
```

## Common Use Cases

### Extract from Custom Attributes

```typescript
const attributeExtractor: Extractor = {
  name: 'attribute-extractor',
  extract({ code }) {
    // Extract จาก custom attributes
    const matches = code.matchAll(/data-style="([^"]+)"/g)
    return Array.from(matches).map(m => m[1].split(' ')).flat()
  },
}
```

### Extract from Template Literals

```typescript
const templateExtractor: Extractor = {
  name: 'template-extractor',
  extract({ code }) {
    // Extract จาก template literals
    const matches = code.matchAll(/`([^`]+)`/g)
    return Array.from(matches).map(m => m[1].split(' ')).flat()
  },
}
```

### Extract from CSS Variables

```typescript
const varExtractor: Extractor = {
  name: 'var-extractor',
  extract({ code }) {
    // Extract จาก CSS variables
    const matches = code.matchAll(/--([a-z-]+):\s*([^;]+)/g)
    return Array.from(matches).map(m => m[1])
  },
}
```

## Performance Considerations

1. **Minimal extractors** - ใช้เฉพาะที่จำเป็น
2. **Order matters** - เรียงลำดับ extractors ให้ถูกต้อง
3. **Cache friendly** - extractors ควร deterministic
4. **Avoid regex complexity** - หลีกเลี่ยง regex ที่ซับซ้อน

## Debugging Extractors

```typescript
const debugExtractor: Extractor = {
  name: 'debug',
  extract({ code, id }) {
    console.log('Extracting from:', id)
    const result = // extraction logic
    console.log('Extracted:', result)
    return result
  },
}
```

## Best Practices

1. **Test extractors** - test ทุก extractor อย่างละเอียด
2. **Document behavior** - document ว่า extractor ทำอะไร
3. **Handle errors** - handle errors ใน extractors อย่างเหมาะสม
4. **Keep simple** - extractors ควร simple และ focused
5. **Performance first** - พิจารณา performance ของแต่ละ extractor

## Integration Examples

### Vite Integration

```typescript
// vite.config.ts
import UnoCSS from 'unocss/vite'
import { extractorSplit } from 'unocss'

export default {
  plugins: [
    UnoCSS({
      extractors: [extractorSplit()],
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
    extractors: [extractorSplit()],
  },
})
```

## Community Extractors

Extractors ที่สร้างโดย community:

- `@unocss/extractor-arbitrary-variants` - Arbitrary variants
- `@unocss/extractor-pug` - Pug template support
- `@unocss/extractor-svelte` - Svelte component support
