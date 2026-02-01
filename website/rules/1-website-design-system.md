## Website Design System

### Description
สร้าง design system ที่สม่ำเสมอและใช้งานได้จริงสำหรับ website

### Examples
```css
/* กำหนด design tokens */
:root {
  --color-primary: #3b82f6;
  --color-secondary: #6366f1;
  --spacing-unit: 8px;
  --font-sans: 'Inter', sans-serif;
}

/* ใช้ utility classes */
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 16px;
}
```

### Anti-patterns
❌ ใช้ค่า hardcoded โดยไม่มี design tokens
❌ ไม่มี naming convention ที่ชัดเจน
❌ ไม่มี component library ที่ใช้ซ้ำได้

## Verification
1. ตรวจสอบว่ามี design tokens ที่ครบถ้วน
2. ทดสอบว่า components ใช้งานได้จริง
3. ตรวจสอบว่า design system สม่ำเสมอทั่วทั้ง website
