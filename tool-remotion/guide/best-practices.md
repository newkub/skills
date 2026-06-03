# Best Practices

## Performance

| Practice | คำอธิบาย |
|----------|----------|
| **ใช้ memo()** | ป้องกันการ re-render ที่ไม่จำเป็น |
| **หลีกเลี่ยง heavy computation** | คำนวณนอก render function |
| **ใช้งาน sequence อย่างมีประสิทธิภาพ** | แบ่ง composition เป็นส่วนเล็กๆ |
| **ใช้ CDN สำหรับ assets** | ลดขนาด bundle |

```tsx
// ใช้ memo สำหรับ component ที่ซับซ้อน
const HeavyComponent = memo(() => {
  // ...
});
```

## Security

| Practice | คำอธิบาย |
|----------|----------|
| **ใช้ Zod schema** | validate props ทุกครั้ง |
| **หลีกเลี่ยง eval()** | ป้องกัน code injection |
| **ตรวจสอบ input** | ทำให้ props ปลอดภัย |

## Code Quality

| Practice | คำอธิบาย |
|----------|----------|
| **ใช้ TypeScript** | ทำให้ code มี type ที่ชัดเจน |
| **แยก components** | แบ่ง logic เป็นส่วนๆ |
| **ใช้ constants** | กำหนดค่าที่ใช้บ่อยไว้ที่เดียว |
| **comment สำคัญ** | อธิบาย logic ที่ซับซ้อน |

## ข้อผิดพลาดที่พบบ่อย

| Pitfall | วิธีหลีกเลี่ยง |
|---------|---------------|
| **CSS animations ไม่ทำงาน** | ใช้ `interpolate()` แทน |
| **relative paths ไม่ทำงาน** | ใช้ `staticFile()` เสมอ |
| **video กระตุก** | ลดความซับซ้อนของ components |
| **memory สูง** | ใช้ `<Sequence>` แทน mount/unmount |
| **text ไม่แสดง** | ใช้ font จาก public folder |

```tsx
// ❌ Wrong - relative path
<Img src="./logo.png" />

// ✅ Correct - staticFile
<Img src={staticFile('logo.png')} />
```

## โครงสร้างโปรเจกต์ที่แนะนำ

```
src/
├── Root.tsx          # composition definitions
├── compositions/    # video components
│   ├── Intro.tsx
│   ├── Main.tsx
│   └── Outro.tsx
├── components/      # reusable components
├── utils/           # helper functions
└── constants/      # shared constants
```
