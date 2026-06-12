# Presets

## ภาพรวม

Presets คือชุด rules และ utilities ที่กำหนดไว้ล่วงหน้าสำหรับ UnoCSS ช่วยให้เริ่มต้นใช้งานได้ทันทีโดยไม่ต้อง config ทั้งหมดเอง

## Presets หลัก

### presetUno

Default preset ที่รวม utilities พื้นฐาน เหมือน Tailwind CSS

```typescript
import { presetUno } from 'unocss'

export default defineConfig({
  presets: [presetUno()],
})
```

**Features:**
- Spacing utilities (m, p, gap)
- Colors (text-, bg-, border-)
- Typography (text-, font-)
- Layout (flex, grid)
- Effects (shadow, opacity)

### presetAttributify

ใช้ HTML attributes แทน class names

```html
<div text="red" font="bold" p="4">
  Hello World
</div>
```

```typescript
import { presetAttributify } from 'unocss'

export default defineConfig({
  presets: [presetAttributify()],
})
```

### presetIcons

รองรับ 100+ icon collections จาก Iconify

```html
<div i="carbon-home" />
<div i="mdi-light:home" />
```

```typescript
import { presetIcons } from 'unocss'

export default defineConfig({
  presets: [
    presetIcons({
      scale: 1.2,
      warn: true,
    }),
  ],
})
```

### presetWind

Tailwind CSS compatible preset

```typescript
import { presetWind } from 'unocss'

export default defineConfig({
  presets: [presetWind()],
})
```

## Custom Presets

สร้าง preset ของตัวเอง

```typescript
import { definePreset } from 'unocss'

const myPreset = definePreset((options) => {
  return {
    name: 'my-preset',
    rules: [
      ['custom-color', { color: 'red' }],
    ],
    variants: [
      (matcher) => {
        if (!matcher.startsWith('hover:')) return matcher
        return {
          matcher: matcher.slice(6),
          selector: (s) => `${s}:hover`,
        }
      },
    ],
  }
})

export default defineConfig({
  presets: [myPreset()],
})
```

## Preset Options

แต่ละ preset มี options ที่แตกต่างกัน

### presetIcons Options

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| scale | number | 1.2 | Icon scale |
| warn | boolean | true | Warn for missing icons |
| extraProperties | object | {} | Extra CSS properties |
| collections | object | {} | Custom icon collections |

### presetAttributify Options

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| prefix | string | '' | Attribute prefix |
| strict | boolean | false | Strict mode |
| prefixedOnly | boolean | false | Only prefixed attributes |

## การใช้งานหลาย Presets

รวมหลาย presets ใน config เดียว

```typescript
import { defineConfig, presetUno, presetAttributify, presetIcons } from 'unocss'

export default defineConfig({
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons({
      scale: 1.2,
    }),
  ],
})
```

## Preset Priority

Presets ถูกประมวลผลตามลำดับที่กำหนด หลังจากนั้น custom rules จะ override

```typescript
export default defineConfig({
  presets: [presetUno(), myPreset()],
  rules: [
    // จะ override preset rules
    ['text-red', { color: '#ff0000' }],
  ],
})
```

## Community Presets

Presets ที่สร้างโดย community:

- `@unocss/preset-wind` - Tailwind compatible
- `@unocss/preset-mini` - Minimal preset
- `@unocss/preset-rem-to-px` - Convert rem to px
- `@unocss/preset-tagify` - Tag-based CSS

## Best Practices

1. **เลือก preset ที่เหมาะสม** - ใช้ presetUno สำหรับ general use
2. **Custom rules** - เพิ่ม custom rules หลังจาก presets
3. **Avoid conflicts** - ตรวจสอบ naming conflicts ระหว่าง presets
4. **Performance** - presets ที่ซับซ้อนอาจช้าลง
