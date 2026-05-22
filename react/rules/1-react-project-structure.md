# React Project Structure

## Description

โครงสร้าง React project ที่ถูกต้องและเหมาะสมสำหรับการพัฒนาที่ maintainable และ scalable

## Why

โครงสร้างที่ดีช่วยให้การจัดการ code ง่ายขึ้น ลดความซับซ้อน และทำให้ทีมสามารถทำงานร่วมกันได้ง่าย

## Anti-patterns

❌ ใส่ทุกอย่างไว้ใน `src` โดยไม่มีการแบ่ง folder
❌ ตั้งชื่อ folder ด้วยภาษาไทยหรือช่องว่าง
❌ ไม่มีการแบ่งแยกส่วนของ application

## Best Practices

✅ แบ่งโครงสร้างตามความรับผิดชอบ (feature-based หรือ layer-based)
✅ ใช้ชื่อ folder ภาษาอังกฤษและ kebab-case
✅ แยก components, hooks, utils, และ services ออกจากกัน

## Rules

### 1. โครงสร้างพื้นฐาน

```text
src/
├── components/          # Reusable UI components
├── pages/              # Page components
├── hooks/              # Custom hooks
├── utils/              # Utility functions
├── services/           # API services
├── types/              # TypeScript types
├── constants/          # Constants
└── assets/             # Static assets
```

### 2. Component Structure

แต่ละ component ควรมี:

```text
ComponentName/
├── index.tsx           # Component entry
├── ComponentName.tsx   # Main component
├── ComponentName.test.tsx
├── ComponentName.styles.ts
└── types.ts            # Component-specific types
```

### 3. File Naming

- ใช้ PascalCase สำหรับ component files
- ใช้ camelCase สำหรับ utility files
- ใช้ kebab-case สำหรับ folder names

## Impact

ถ้าไม่ทำตาม:

- Code ยากต่อการ maintain
- ทีมงานสับสนในการทำงานร่วมกัน
- Performance ลดลงเนื่องจาก bundle size ใหญ่ขึ้น

## Verification

1. ตรวจสอบว่ามีโครงสร้าง folder ตามที่กำหนด
2. ตรวจสอบว่า file names ตรงตาม conventions
3. ทดสอบว่าสามารถ import components ได้ถูกต้อง

## References

- [React Project Structure Best Practices](https://react.dev/learn/understanding-your-ui-as-a-tree)
- [TypeScript React Project Structure](https://typescript-eslint.io/rules/)
