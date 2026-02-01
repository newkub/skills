## Website Motion Design

### Description
ใช้ animation และ motion อย่างเหมาะสมเพื่อประสบการณ์ผู้ใช้ที่ดี

### Examples
```css
/* ใช้ CSS transitions */
.button {
  transition: all 0.3s ease;
}

.button:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

/* ใช้ keyframes */
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}
```

### Anti-patterns
❌ ใช้ animation มากเกินไปจนรบกวนผู้ใช้
❌ ไม่คำนึงถึง performance และ accessibility
❌ ไม่มี option ปิด animation สำหรับผู้ที่ต้องการลด motion

## Verification
1. ตรวจสอบว่า animation ไม่รบกวนการใช้งาน
2. ทดสอบด้วย prefers-reduced-motion
3. ตรวจสอบ performance ด้วย Lighthouse
