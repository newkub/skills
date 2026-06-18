# Safelist

## ภาพรวม

Safelist คือรายการ utility classes ที่จะถูก include ใน generated CSS เสมอ แม้ว่าจะไม่ถูก detect ใน source code ช่วยแก้ปัญหา utilities ที่ถูก generate แบบ dynamic หรือ runtime

## การใช้งาน

กำหนด safelist ใน config

```typescript
export default defineConfig({
  safelist: [
    'text-red',
    'bg-blue',
    'hover:text-white',
  ],
})
```

## Use Cases

### Dynamic Classes

เมื่อ classes ถูก generate แบบ dynamic ใน runtime

```typescript
// JavaScript
const colors = ['red', 'blue', 'green']
const colorClass = `text-${colors[Math.floor(Math.random() * colors.length)]}`

// Config
export default defineConfig({
  safelist: [
    'text-red',
    'text-blue',
    'text-green',
  ],
})
```

### Third-party Libraries

เมื่อใช้ libraries ที่ inject classes แบบ dynamic

```typescript
// ใช้กับ libraries เช่น chart.js, d3.js
export default defineConfig({
  safelist: [
    // Chart.js classes
    'chart-bar',
    'chart-line',
    'chart-pie',
  ],
})
```

### Conditional Classes

เมื่อ classes ถูกใช้แบบ conditional ที่ยากต่อการ detect

```typescript
// JavaScript
const isActive = true
const className = isActive ? 'text-green' : 'text-red'

// Config
export default defineConfig({
  safelist: [
    'text-green',
    'text-red',
  ],
})
```

## Regex Safelist

ใช้ regex patterns สำหรับ safelist

```typescript
export default defineConfig({
  safelist: [
    // Safelist ทุก text-{color}
    /^text-(red|blue|green)$/,
    
    // Safelist ทุก bg-{color}-{shade}
    /^bg-(red|blue|green)-(100|200|300)$/,
    
    // Safelist ทุก spacing utilities
    /^p-[0-9]+$/,
    /^m-[0-9]+$/,
  ],
})
```

## Dynamic Safelist

ใช้ฟังก์ชันสำหรับ dynamic safelist

```typescript
export default defineConfig({
  safelist: () => {
    // Generate safelist จาก external source
    const colors = fetchColorsFromAPI()
    return colors.map(c => `text-${c}`)
  },
})
```

## Safelist ใน Presets

Presets สามารถกำหนด safelist ได้

```typescript
import { definePreset } from 'unocss'

const myPreset = definePreset(() => {
  return {
    name: 'my-preset',
    safelist: [
      'custom-utility',
      /^custom-\w+$/,
    ],
  }
})
```

## Safelist กับ Extractors

Safelist ทำงานร่วมกับ extractors

```typescript
export default defineConfig({
  extractors: [extractorSplit()],
  safelist: [
    // Utilities ที่ extractors ไม่ detect
    'dynamic-class',
  ],
})
```

## Safelist กับ Shortcuts

Safelist สามารถใช้กับ shortcuts ได้

```typescript
export default defineConfig({
  shortcuts: {
    'btn': 'px-4 py-2 bg-blue-500 text-white rounded',
  },
  safelist: [
    // Safelist shortcut และ utilities ที่ใช้
    'btn',
    'px-4',
    'py-2',
    'bg-blue-500',
    'text-white',
    'rounded',
  ],
})
```

## Safelist กับ Icons

Safelist icons ที่ใช้แบบ dynamic

```typescript
export default defineConfig({
  presets: [presetIcons()],
  safelist: [
    // Safelist specific icons
    'i-carbon-home',
    'i-mdi-account',
    'i-heroicons-star',
  ],
})
```

## Performance Impact

Safelist จะเพิ่ม bundle size เพราะ CSS จะถูก generate เสมอ

```typescript
// ❌ ไม่ดี: Safelist มากเกินไป
export default defineConfig({
  safelist: [
    // หลายร้อย utilities
    ...Array.from({ length: 1000 }, (_, i) => `text-${i}`),
  ],
})

// ✅ ดี: Safelist เฉพาะที่จำเป็น
export default defineConfig({
  safelist: [
    'text-red',
    'text-blue',
    'text-green',
  ],
})
```

## Debugging Safelist

ตรวจสอบว่า utilities ถูก safelist หรือไม่

```typescript
export default defineConfig({
  inspect: true,
  safelist: [
    'text-red',
  ],
})
```

เข้าไปที่ `http://localhost:3000/__uno` เพื่อดู CSS generation

## Best Practices

1. **Minimal safelist** - ใช้ safelist เฉพาะที่จำเป็น
2. **Prefer extractors** - ใช้ extractors ก่อน safelist
3. **Document reasons** - document ว่าทำไมต้อง safelist
4. **Review regularly** - review safelist อย่างสม่ำเสมอ
5. **Test coverage** - test ว่า safelist ทำงานได้ถูกต้อง

## Common Patterns

### Color Palette Safelist

```typescript
export default defineConfig({
  theme: {
    colors: {
      primary: {
        50: '#eff6ff',
        100: '#dbeafe',
        500: '#3b82f6',
        900: '#1e3a8a',
      },
    },
  },
  safelist: [
    // Safelist ทุก primary colors
    /^text-primary-(50|100|500|900)$/,
    /^bg-primary-(50|100|500|900)$/,
  ],
})
```

### Spacing Safelist

```typescript
export default defineConfig({
  safelist: [
    // Safelist ทุก spacing utilities
    /^p-[0-8]$/,
    /^m-[0-8]$/,
    /^px-[0-8]$/,
    /^py-[0-8]$/,
  ],
})
```

### Icon Safelist

```typescript
export default defineConfig({
  presets: [presetIcons()],
  safelist: [
    // Safelist icons ที่ใช้บ่อย
    'i-carbon-home',
    'i-carbon-user',
    'i-carbon-settings',
    'i-mdi-menu',
    'i-mdi-close',
  ],
})
```

## Safelist กับ Build Tools

### Vite

```typescript
// vite.config.ts
import UnoCSS from 'unocss/vite'

export default {
  plugins: [
    UnoCSS({
      safelist: [
        'text-red',
        'bg-blue',
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
    safelist: [
      'text-red',
      'bg-blue',
    ],
  },
})
```

## Alternatives ที่ดีกว่า Safelist

### ใช้ Extractors

```typescript
// ใช้ extractor แทน safelist
const myExtractor: Extractor = {
  name: 'my-extractor',
  extract({ code }) {
    // Extract dynamic classes
    return extractDynamicClasses(code)
  },
}

export default defineConfig({
  extractors: [myExtractor],
})
```

### ใช้ Static Analysis

```typescript
// ใช้ static analysis เพื่อ detect classes
const classes = analyzeSourceCode()
export default defineConfig({
  safelist: classes,
})
```

## Safelist กับ CSS-in-JS

เมื่อใช้ CSS-in-JS libraries

```typescript
// styled-components
const Button = styled.button`
  ${css`
    @apply px-4 py-2 bg-blue-500 text-white rounded;
  `}
`

// Config
export default defineConfig({
  safelist: [
    'px-4',
    'py-2',
    'bg-blue-500',
    'text-white',
    'rounded',
  ],
})
```

## Monitoring Safelist Usage

ตรวจสอบว่า safelist utilities ถูกใช้จริงหรือไม่

```typescript
export default defineConfig({
  safelist: [
    'text-red',
    'bg-blue',
  ],
  // เปิด inspect mode
  inspect: true,
})
```

ตรวจสอบใน dev tools ว่า utilities ถูกใช้จริงหรือไม่ และลบ safelist ที่ไม่จำเป็น
