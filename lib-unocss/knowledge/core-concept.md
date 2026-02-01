# Core Concepts

## Atomic CSS
UnoCSS เป็น atomic CSS engine ที่สร้าง CSS classes ตามการใช้งานจริง ไม่ต้องเขียน CSS ด้วยตนเอง

## Presets
UnoCSS ใช้ presets เพื่อกำหนดรูปแบบ CSS classes:
- **preset-uno**: รองรับ Tailwind CSS compatible utilities
- **preset-attributify**: ใช้ attributes แทน classes
- **preset-icons**: ใช้ icons จาก icon collections

## Engine
UnoCSS scan code และสร้าง CSS ตามที่ใช้เท่านั้น ทำให้ไฟล์ CSS เล็กที่สุด

## Runtime
UnoCSS ทำงานขณะ build time ไม่ใช่ runtime ทำให้ไม่ส่งผลต่อ performance
