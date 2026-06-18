# Inspector

## ภาพรวม

UnoCSS Inspector คือ developer tool ที่ช่วย debug และ inspect CSS generation ใน real-time ช่วยให้เข้าใจว่า utilities ไหนถูก generate จากไฟล์ไหน

## การเปิดใช้งาน

เปิด inspector mode ใน config:

```typescript
export default defineConfig({
  inspect: true,
})
```

## การเข้าถึง Inspector

เข้าถึง inspector ที่:

```
http://localhost:3000/__uno
```

## Features

### CSS Generation View

ดู CSS ที่ถูก generate:

```css
/* Generated CSS */
.text-red { color: red; }
.bg-blue { background-color: blue; }
```

### Source Mapping

ดูว่า class ถูก generate จากไฟล์ไหน:

```
text-red → src/components/Button.vue:10
bg-blue → src/pages/Home.vue:5
```

### Utility Usage

ดูว่า utilities ถูกใช้ที่ไหนบ้าง:

```
text-red
  - src/components/Button.vue:10
  - src/pages/Home.vue:5

bg-blue
  - src/components/Card.vue:3
```

### Missing Classes

ดู classes ที่ไม่ถูก generate:

```
Missing classes:
  - text-green (not found in source)
  - bg-yellow (not found in source)
```

## Configuration Options

```typescript
export default defineConfig({
  inspect: {
    // Inspector URL
    url: '/__uno',
    
    // Show source mapping
    showSources: true,
    
    // Show missing classes
    showMissing: true,
    
    // Show usage count
    showUsage: true,
  },
})
```

### Custom URL

กำหนด custom inspector URL:

```typescript
export default defineConfig({
  inspect: {
    url: '/__inspector',
  },
})
```

### Toggle Features

เปิด/ปิด features:

```typescript
export default defineConfig({
  inspect: {
    showSources: false,
    showMissing: false,
    showUsage: false,
  },
})
```

## Inspector UI

### Overview Tab

ดู overview ของ CSS generation:

```
Total utilities: 150
Total CSS size: 2.5KB
Files scanned: 25
```

### Utilities Tab

ดูรายการ utilities ทั้งหมด:

```
Utilities (150):
  text-red (5 uses)
  bg-blue (3 uses)
  px-4 (10 uses)
  py-2 (8 uses)
  ...
```

### Sources Tab

ดู source files:

```
Sources (25):
  src/components/Button.vue
  src/pages/Home.vue
  src/components/Card.vue
  ...
```

### Missing Tab

ดู missing classes:

```
Missing (5):
  text-green
  bg-yellow
  ...
```

## Debugging กับ Inspector

### Find Unused Utilities

ใช้ inspector เพื่อหา utilities ที่ไม่ถูกใช้:

1. เข้าไปที่ `/__uno`
2. ดู tab "Utilities"
3. เรียงตาม "Usage count"
4. ลบ utilities ที่ไม่ถูกใช้

### Find Missing Classes

ใช้ inspector เพื่อหา classes ที่ไม่ถูก generate:

1. เข้าไปที่ `/__uno`
2. ดู tab "Missing"
3. ตรวจสอบว่าทำไมไม่ถูก generate
4. เพิ่ม safelist หรือแก้ไข source code

### Trace CSS Generation

ใช้ inspector เพื่อ trace CSS generation:

1. เข้าไปที่ `/__uno`
2. ดู tab "Sources"
3. คลิกที่ file เพื่อดู utilities ที่ถูก generate
4. ตรวจสอบว่า utilities ถูก generate ถูกต้อง

## Performance Monitoring

### CSS Size

ดู CSS size ใน inspector:

```
Total CSS size: 2.5KB
Minified: 1.8KB
Gzipped: 0.5KB
```

### Generation Time

ดู generation time:

```
Generation time: 50ms
Average: 45ms
Peak: 60ms
```

### Bundle Impact

ดู bundle impact:

```
Bundle impact: +2.5KB
Minified: +1.8KB
Gzipped: +0.5KB
```

## Best Practices

1. **Use inspector regularly** - ใช้ inspector อย่างสม่ำเสมอ
2. **Monitor CSS size** - monitor CSS size อย่างสม่ำเสมอ
3. **Remove unused utilities** - ลบ utilities ที่ไม่ใช้
4. **Fix missing classes** - แก้ไข missing classes
5. **Optimize generation** - optimize CSS generation

## Common Use Cases

### Debug Missing Classes

เมื่อ classes ไม่ถูก generate:

1. เข้าไปที่ `/__uno`
2. ดู tab "Missing"
3. ตรวจสอบ source code
4. เพิ่ม safelist หรือแก้ไข source

### Optimize CSS Size

เมื่อ CSS size ใหญ่เกินไป:

1. เข้าไปที่ `/__uno`
2. ดู tab "Utilities"
3. เรียงตาม "Usage count"
4. ลบ utilities ที่ไม่ใช้
5. ตรวจสอบ CSS size อีกครั้ง

### Trace Generation Issues

เมื่อ generation มีปัญหา:

1. เข้าไปที่ `/__uno`
2. ดู tab "Sources"
3. ตรวจสอบ file ที่มีปัญหา
4. แก้ไข source code
5. ตรวจสอบ generation อีกครั้ง

## Integration Examples

### Vite

```typescript
// vite.config.ts
import UnoCSS from 'unocss/vite'

export default {
  plugins: [
    UnoCSS({
      inspect: true,
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
    inspect: true,
  },
})
```

### Astro

```typescript
// astro.config.mjs
import UnoCSS from 'unocss/astro'

export default {
  integrations: [
    UnoCSS({
      inspect: true,
    }),
  ],
})
```

## Troubleshooting

### Inspector ไม่เปิด

ตรวจสอบว่า inspect ถูกเปิด:

```typescript
export default defineConfig({
  inspect: true,
})
```

### Inspector URL ไม่ทำงาน

ตรวจสอบ URL configuration:

```typescript
export default defineConfig({
  inspect: {
    url: '/__uno',
  },
})
```

### Source mapping ไม่ทำงาน

ตรวจสอบ showSources:

```typescript
export default defineConfig({
  inspect: {
    showSources: true,
  },
})
```

## Alternatives

### ใช้ Browser DevTools

ใช้ browser dev tools เพื่อ inspect CSS:

```javascript
// Browser console
document.styleSheets
```

### ใช้ CSS Stats

ใช้ CSS stats tools:

```bash
bun install -D css-stats
```

## Resources

- [UnoCSS Documentation](https://unocss.dev)
- [Inspector GitHub](https://github.com/unocss/unocss/tree/main/packages/inspector)
