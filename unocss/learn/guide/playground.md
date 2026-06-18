# Playground

## ภาพรวม

UnoCSS Playground คือ online tool สำหรับทดลองและ experiment กับ UnoCSS ใน browser โดยไม่ต้อง setup project

## การเข้าถึง Playground

เข้าถึง playground ที่:

```
https://unocss.dev/play
```

## Features

### Live Preview

ดู preview ของ CSS และ HTML แบบ real-time:

```html
<!-- Input -->
<div class="text-red bg-blue">
  Text
</div>

<!-- Output -->
<div style="color: red; background-color: blue;">
  Text
</div>
```

### Config Editor

แก้ไข UnoCSS config แบบ real-time:

```typescript
export default defineConfig({
  theme: {
    colors: {
      primary: '#3b82f6',
    },
  },
})
```

### HTML Editor

แก้ไข HTML แบบ real-time:

```html
<div class="text-primary bg-blue-500">
  Text
</div>
```

### CSS Output

ดู CSS ที่ถูก generate:

```css
.text-primary { color: #3b82f6; }
.bg-blue-500 { background-color: #3b82f6; }
```

## การใช้งาน

### Basic Usage

1. เข้าไปที่ `https://unocss.dev/play`
2. พิมพ์ HTML ใน HTML editor
3. ดู preview และ CSS output แบบ real-time

### Custom Config

1. แก้ไข config ใน Config editor
2. ดู CSS output ที่เปลี่ยนแปลง
3. ทดลอง different configurations

### Test Presets

1. เพิ่ม presets ใน config
2. ดู CSS output ที่เปลี่ยนแปลง
3. ทดลอง different presets

### Test Transformers

1. เพิ่ม transformers ใน config
2. ดู CSS output ที่เปลี่ยนแปลง
3. ทดลอง different transformers

## Playground UI

### HTML Editor

พิมพ์ HTML ใน editor:

```html
<div class="flex items-center justify-center">
  <div class="text-xl font-bold">Title</div>
</div>
```

### Config Editor

แก้ไข config:

```typescript
export default defineConfig({
  presets: [
    presetUno(),
    presetAttributify(),
  ],
  transformers: [
    transformerDirectives(),
  ],
})
```

### Preview Panel

ดู preview ของ HTML:

```
[Preview of HTML with applied styles]
```

### CSS Output Panel

ดู CSS ที่ถูก generate:

```css
.flex { display: flex; }
.items-center { align-items: center; }
.justify-center { justify-content: center; }
.text-xl { font-size: 1.25rem; }
.font-bold { font-weight: bold; }
```

## Common Use Cases

### Test New Utilities

ทดลอง utilities ใหม่:

```html
<div class="text-red bg-blue p-4 m-2">
  Test utilities
</div>
```

### Test Custom Config

ทดลอง custom config:

```typescript
export default defineConfig({
  theme: {
    colors: {
      brand: '#3b82f6',
    },
  },
})
```

```html
<div class="text-brand bg-brand">
  Custom theme
</div>
```

### Test Presets

ทดลอง presets:

```typescript
export default defineConfig({
  presets: [
    presetUno(),
    presetIcons(),
  ],
})
```

```html
<div class="i-carbon-home text-2xl">
  Icon
</div>
```

### Test Transformers

ทดลอง transformers:

```typescript
export default defineConfig({
  transformers: [
    transformerVariantGroup(),
  ],
})
```

```html
<div class="hover:(bg-red text-white)">
  Variant group
</div>
```

## Sharing Playground

### Share URL

Share playground configuration ด้วย URL:

```
https://unocss.dev/play/#config=...
```

### Export Config

Export config ไปยัง project:

```typescript
export default defineConfig({
  // Config from playground
})
```

### Export HTML

Export HTML ไปยัง project:

```html
<!-- HTML from playground -->
<div class="text-red bg-blue">
  Text
</div>
```

## Best Practices

1. **Experiment freely** - ทดลองอย่างอิสระ
2. **Test before implement** - test ก่อน implement ใน project
3. **Save useful configs** - save configs ที่มีประโยชน์
4. **Share with team** - share playground กับ team
5. **Document learnings** - document สิ่งที่เรียนรู้

## Advanced Features

### Custom Rules

ทดลอง custom rules:

```typescript
export default defineConfig({
  rules: [
    ['custom-red', { color: 'red' }],
    ['custom-blue', { color: 'blue' }],
  ],
})
```

```html
<div class="custom-red custom-blue">
  Custom rules
</div>
```

### Custom Shortcuts

ทดลอง custom shortcuts:

```typescript
export default defineConfig({
  shortcuts: {
    'btn': 'px-4 py-2 bg-blue-500 text-white rounded',
  },
})
```

```html
<div class="btn">
  Button
</div>
```

### Custom Theme

ทดลอง custom theme:

```typescript
export default defineConfig({
  theme: {
    colors: {
      primary: '#3b82f6',
      secondary: '#10b981',
    },
    spacing: {
      xs: '0.5rem',
      sm: '0.75rem',
    },
  },
})
```

## Integration Examples

### Test Before Integration

ทดลองก่อน integrate ใน project:

1. เข้าไปที่ playground
2. ทดลอง config ที่ต้องการ
3. ตรวจสอบ CSS output
4. Copy config ไปยัง project

### Debug Issues

Debug issues ใน playground:

1. Reproduce issue ใน playground
2. ทดลอง different configurations
3. หา solution ที่เหมาะสม
4. Apply solution ใน project

### Learn UnoCSS

เรียนรู้ UnoCSS ด้วย playground:

1. ทดลอง different features
2. ทดลอง different presets
3. ทดลอง different transformers
4. เข้าใจวิธีการทำงาน

## Troubleshooting

### Playground ไม่โหลด

ตรวจสอบ browser compatibility และ network connection

### Config ไม่ทำงาน

ตรวจสอบ config syntax และ validate

### CSS output ไม่ถูกต้อง

ตรวจสอบ HTML และ config ว่าถูกต้อง

## Alternatives

### ใช้ Local Project

ใช้ local project สำหรับ testing:

```bash
bun create vite my-app
cd my-app
bun add -D unocss
```

### ใช้ CodeSandbox

ใช้ CodeSandbox สำหรับ online testing:

```
https://codesandbox.io
```

## Resources

- [UnoCSS Playground](https://unocss.dev/play)
- [UnoCSS Documentation](https://unocss.dev)
