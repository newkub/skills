# Fundamentals

## 1. เริ่มต้นด้วย Presets ที่เหมาะสม

ใช้ presets ตามความต้องการของโปรเจกต์:

- **preset-uno**: สำหรับ utility classes พื้นฐาน
- **preset-attributify**: ถ้าชอบ attribute-based styling
- **preset-icons**: ถ้าต้องการใช้ icons

## 2. จัดระเบียบ Configuration

แยก configuration ตาม environment:

```javascript
// uno.config.js
export default defineConfig({
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons()
  ],
  shortcuts: {
    // เก็บ shortcuts ที่ใช้บ่อย
  }
})
```

## 3. ใช้ Shortcuts อย่างมีเหตุผล

สร้าง shortcuts สำหรับ patterns ที่ใช้ซ้ำ:

- Component-level shortcuts
- Common layout patterns
- Brand-specific styles

## 4. กำหนด Theme อย่างสม่ำเสมอ

ตั้งค่า theme ให้สอดคล้องกับ design system:

- Brand colors
- Typography scale
- Spacing system
- Breakpoints
