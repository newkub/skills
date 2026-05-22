# UnoCSS Icons Reference

## การตั้งค่า Icons

เปิดใช้ presetIcons:

```typescript
import { presetIcons } from 'unocss'

export default defineConfig({
  presets: [
    presetIcons({
      scale: 1.2,
      warn: true,
      extraProperties: {
        'display': 'inline-block',
        'vertical-align': 'middle',
      },
    }),
  ],
})
```

## การใช้งาน

ใช้ icon classes:

```html
<div class="i-carbon-logo"></div>
<div class="i-mdi-home"></div>
<div class="i-heroicons-outline-home"></div>
```

## Icon Collections

- **carbon**: Carbon Design System
- **mdi**: Material Design Icons
- **heroicons**: Heroicons
- **ph**: Phosphor Icons
- **ri**: Remix Icon
- **vs**: VS Code Icons
- และอื่นๆ อีก 100+ collections

## การติดตั้ง Icon Collections

```bash
npm install -D @iconify-json/carbon
npm install -D @iconify-json/mdi
npm install -D @iconify-json/heroicons
```
