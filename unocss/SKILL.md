# UnoCSS

UnoCSS เป็น atomic CSS engine ที่รวดเร็วและเกิดขึ้นจากเครื่องมือ (instant) สำหรับ Vite และ Web frameworks อื่นๆ มีคุณสมบัติหลักๆ ดังนี้:

- **Instant**: ไม่มี parsing, ไม่มี AST, ไม่มี scanning - เร็วและเบา
- **Fully Customizable**: รองรับ presets, rules, shortcuts, icons
- **Attributify Mode**: ใช้ attributes แทน classes
- **Shortcuts**: สร้าง custom shortcuts ได้ง่าย
- **Theme System**: รองรับ theme customization
- **Icons**: รวม icons เข้ามาได้อัตโนมัติ
- **Framework Agnostic**: ใช้ได้กับ Vite, Webpack, CLI, etc.

## สรุปเนื้อหา

| หมวดหมู่ | ไฟล์ | คำอธิบาย |
|---------|------|----------|
| **Guide** | guide/getting-started.md | เริ่มต้นใช้งาน UnoCSS |
| **Guide** | guide/configuration.md | การตั้งค่า configuration |
| **Guide** | guide/presets.md | การใช้ presets |
| **Guide** | guide/shortcuts.md | การใช้ shortcuts |
| **Guide** | guide/theme.md | การปรับแต่ง theme |
| **Reference** | reference/utilities.md | Utility classes reference |
| **Reference** | reference/icons.md | Icons reference |
| **Reference** | reference/cli.md | CLI commands |

## การใช้งาน

ใช้ UnoCSS เมื่อ:
- ต้องการ atomic CSS ที่รวดเร็ว
- ต้องการ customizability สูง
- ต้องการ performance ที่ดีกว่า Tailwind
- ต้องการ integration ที่ง่ายกับ Vite
- ต้องการ icon system ที่รวดเร็ว

## ตัวอย่างเริ่มต้น

```bash
# Install
npm install -D unocss
```

```typescript
// uno.config.ts
import { defineConfig, presetUno } from 'unocss'

export default defineConfig({
  presets: [presetUno()],
})
```
