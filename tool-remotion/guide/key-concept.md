# Key Concept

## Remotion คืออะไร?

Remotion เป็น framework สำหรับสร้างวิดีโอแบบโปรแกรมมิ่งโดยใช้ React ช่วยให้สร้างวิดีโอด้วย component model เดียวกับ React โดยใช้ hooks เช่น `useCurrentFrame()` สำหรับ animations และ patterns มาตรฐานของ React

## หลักการหลัก

### 1. Animation แบบ Frame-Based

ทุก animations ใน Remotion ขับเคลื่อนด้วย frames ไม่ใช่ time:

```tsx
const frame = useCurrentFrame();
const { fps } = useVideoConfig();

// แปลงวินาทีเป็น frames
const twoSeconds = 2 * fps;
```

| ข้อดี | คำอธิบาย |
|-------|----------|
| **Precise** | ควบคุมได้ละเอียดระดับ frame |
| **Predictable** | output ตรงกันทุกครั้ง |
| **Programmatic** | ใช้ code ควบคุมได้เต็มที่ |

### 2. React Components เป็น Video Elements

สร้างวิดีโอโดยใช้ React components:

```tsx
const MyVideo = () => {
  return (
    <div>
      <h1>Hello World</h1>
      <Logo />
      <Stats />
    </div>
  );
};
```

### 3. Type Safety ด้วย TypeScript และ Zod

ใช้ TypeScript และ Zod สำหรับ props ที่มี type ปลอดภัย:

```tsx
import { z } from 'zod';

const MySchema = z.object({
  title: z.string(),
  color: zColor(),
});
```

### 4. ห้ามใช้ CSS Animations

CSS transitions และ animations ถูกห้าม - จะ render ไม่ถูกต้อง

## สถาปัตยกรรม

### วิธีการทำงานของ Remotion

```
┌─────────────────────────────────────────────────────────┐
│                        Browser                            │
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐       │
│  │  React UI    │  │   Player    │  │  Timeline   │       │
│  └─────────────┘  └─────────────┘  └─────────────┘       │
└─────────────────────────────────────────────────────────┘
                         │
                         ▼
┌─────────────────────────────────────────────────────────┐
│                    Puppeteer/Chrome                      │
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐       │
│  │  Captures   │  │  Renders    │  │  Composites │       │
│  │  Frames     │  │  Video      │  │  Output     │       │
│  └─────────────┘  └─────────────┘  └─────────────┘       │
└─────────────────────────────────────────────────────────┘
```

### ไฟล์สำคัญ

| ไฟล์ | วัตถุประสงค์ |
|------|-------------|
| `src/Root.tsx` | กำหนด compositions |
| `src/MyComposition.tsx` | Video component |
| `remotion.config.ts` | การตั้งค่า global |

## เมื่อไหร่ควรใช้

| Use Case | คำอธิบาย |
|----------|----------|
| **Animated content** | เนื้อหา animation ด้วย React |
| **Data-driven videos** | วิดีโอที่ขับเคลื่อนด้วยข้อมูล |
| **Automated generation** | สร้างวิดีโออัตโนมัติ |
| **Video APIs** | API สำหรับวิดีโอ |
| **Social media** | เนื้อหาสำหรับ social media |