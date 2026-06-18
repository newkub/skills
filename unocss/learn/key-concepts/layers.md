# Layers

## ภาพรวม

Layers คือระบบที่จัดลำดับ CSS output ของ UnoCSS ช่วยให้ควบคุม specificity และลำดับของ CSS rules ที่ generate ออกมา

## Default Layers

UnoCSS มี 3 default layers:

| Layer | ลำดับ | คำอธิบาย |
|-------|--------|----------|
| **preflights** | 1 | Global CSS resets และ base styles |
| **default** | 2 | Utility classes หลัก |
| **shortcuts** | 3 | Shortcut utilities |

## Preflights Layer

ใช้สำหรับ global CSS resets และ base styles

```typescript
export default defineConfig({
  preflights: [
    {
      getCSS() {
        return `
          * { margin: 0; padding: 0; box-sizing: border-box; }
          body { font-family: sans-serif; }
        `
      },
    },
  ],
})
```

### presetMini Preflights

`presetMini` มี preflights สำหรับ CSS reset:

```typescript
import { presetMini } from 'unocss'

export default defineConfig({
  presets: [presetMini()],
  // presetMini จะ inject preflights อัตโนมัติ
})
```

## Default Layer

Layer หลักสำหรับ utility classes ทั้งหมด

```typescript
export default defineConfig({
  rules: [
    // Rules เหล่านี้จะอยู่ใน default layer
    ['text-red', { color: 'red' }],
    ['bg-blue', { 'background-color': 'blue' }],
  ],
})
```

## Shortcuts Layer

Layer สำหรับ shortcut utilities

```typescript
export default defineConfig({
  shortcuts: {
    // Shortcuts เหล่านี้จะอยู่ใน shortcuts layer
    'btn': 'px-4 py-2 bg-blue-500 text-white rounded',
    'card': 'p-4 border rounded-lg shadow-sm',
  },
})
```

## Custom Layers

สร้าง custom layers ของตัวเอง

```typescript
export default defineConfig({
  rules: [
    ['text-red', { color: 'red' }, { layer: 'utilities' }],
    ['bg-blue', { 'background-color': 'blue' }, { layer: 'utilities' }],
  ],
  shortcuts: {
    'btn': 'px-4 py-2 bg-blue-500 text-white rounded',
  },
  layers: {
    // กำหนดลำดับ custom layers
    utilities: -1,  // ก่อน preflights
    components: 4,  // หลัง shortcuts
  },
})
```

## Layer Order

กำหนดลำดับ layers ด้วย `layers` config

```typescript
export default defineConfig({
  layers: {
    // ตัวเลขน้อยกว่า = อยู่ก่อน
    base: -10,
    preflights: -5,
    default: 0,
    shortcuts: 10,
    overrides: 20,
  },
})
```

## Layer Output

CSS output จะถูกจัดเรียงตาม layer order:

```css
/* Layer: base */
@layer base {
  /* ... */
}

/* Layer: preflights */
@layer preflights {
  * { margin: 0; padding: 0; }
}

/* Layer: default */
@layer default {
  .text-red { color: red; }
  .bg-blue { background-color: blue; }
}

/* Layer: shortcuts */
@layer shortcuts {
  .btn { @apply px-4 py-2 bg-blue-500 text-white rounded; }
}
```

## การใช้งาน Layers ใน Rules

กำหนด layer สำหรับแต่ละ rule

```typescript
export default defineConfig({
  rules: [
    // กำหนด layer แบบ explicit
    ['text-red', { color: 'red' }, { layer: 'utilities' }],
    
    // กำหนด layer แบบ implicit (default layer)
    ['bg-blue', { 'background-color': 'blue' }],
  ],
})
```

## การใช้งาน Layers ใน Shortcuts

```typescript
export default defineConfig({
  shortcuts: [
    // Shortcut จะอยู่ใน shortcuts layer โดย default
    ['btn', 'px-4 py-2 bg-blue-500 text-white rounded'],
    
    // กำหนด layer แบบ explicit
    ['card', 'p-4 border rounded-lg shadow-sm', { layer: 'components' }],
  ],
})
```

## Layer Specificity

Layers ที่มีลำดับสูงกว่าจะ override layers ที่ต่ำกว่า

```typescript
export default defineConfig({
  layers: {
    base: -10,
    utilities: 0,
    overrides: 10,
  },
  rules: [
    ['text-red', { color: 'red' }, { layer: 'utilities' }],
    ['text-red', { color: 'darkred' }, { layer: 'overrides' }],
  ],
})
```

```css
/* Result: color: darkred (overrides layer wins) */
```

## Disable Layers

ปิดการใช้งาน layers ที่ไม่ต้องการ

```typescript
export default defineConfig({
  // ปิด preflights
  preflights: false,
  
  // หรือปิด layers ทั้งหมด
  layers: false,
})
```

## Layer Groups

จัดกลุ่ม rules ใน layer เดียวกัน

```typescript
export default defineConfig({
  rules: [
    // กลุ่ม typography utilities
    { layer: 'typography',
      rules: [
        ['text-h1', { 'font-size': '2.5rem', 'font-weight': 'bold' }],
        ['text-h2', { 'font-size': '2rem', 'font-weight': 'semibold' }],
      ],
    },
  ],
})
```

## Layer ใน Presets

Presets สามารถกำหนด layers ได้

```typescript
import { definePreset } from 'unocss'

const myPreset = definePreset(() => {
  return {
    name: 'my-preset',
    rules: [
      ['custom-utility', { color: 'red' }, { layer: 'custom' }],
    ],
    layers: {
      custom: 5,
    },
  }
})
```

## Performance Considerations

1. **Minimal layers** - ใช้ layers เฉพาะที่จำเป็น
2. **Order matters** - เรียงลำดับ layers ให้ถูกต้อง
3. **Specificity** - ระวัง specificity conflicts
4. **Bundle size** - layers หลายตัวอาจเพิ่ม bundle size

## Debugging Layers

```typescript
export default defineConfig({
  // เปิด inspect mode เพื่อดู layer information
  inspect: true,
})
```

เข้าไปที่ `http://localhost:3000/__uno` เพื่อดู CSS generation และ layer information

## Best Practices

1. **Use default layers** - ใช้ default layers ก่อน custom
2. **Logical ordering** - เรียงลำดับ layers ตาม logic
3. **Avoid conflicts** - ตรวจสอบ conflicts ระหว่าง layers
4. **Document layers** - document ว่าแต่ละ layer ทำอะไร
5. **Test specificity** - test specificity ของแต่ละ layer

## Common Patterns

### Base Styles Layer

```typescript
export default defineConfig({
  preflights: [
    {
      getCSS() {
        return `
          @layer base {
            html { font-size: 16px; }
            body { line-height: 1.5; }
          }
        `
      },
    },
  ],
})
```

### Component Utilities Layer

```typescript
export default defineConfig({
  shortcuts: [
    ['btn-primary', 'px-4 py-2 bg-blue-500 text-white rounded', { layer: 'components' }],
    ['btn-secondary', 'px-4 py-2 bg-gray-500 text-white rounded', { layer: 'components' }],
  ],
  layers: {
    components: 15,
  },
})
```

### Override Layer

```typescript
export default defineConfig({
  rules: [
    ['!text-red', { color: 'red !important' }, { layer: 'overrides' }],
  ],
  layers: {
    overrides: 100,
  },
})
```
