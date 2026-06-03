# Quick Start

## ข้อกำหนดเบื้องต้น

| สิ่งที่ต้องมี | เวอร์ชัน |
|-------------|----------|
| Node.js | 18+ |
| Bun | 1.0+ |
| Package manager | npm, yarn, pnpm, หรือ bun |

## ขั้นตอนการเริ่มต้น

### 1. สร้างโปรเจกต์ใหม่

```bash
# ใช้ bun
bunx create-video@latest

# หรือใช้ npm
npx create-video@latest
```

### 2. เลือก Template

| Template | คำอธิบาย |
|----------|----------|
| **Empty** | เริ่มต้นจากศูนย์ |
| **Hello World** | ตัวอย่างพื้นฐาน |
| **Starter Template** | มีฟีเจอร์ยอดนิยม |

### 3. เริ่มต้น Development

```bash
# ไปยังโฟลเดอร์โปรเจกต์
cd my-video-project

# ติดตั้ง dependencies
npm install

# เริ่ม preview
npm start
```

## ตัวอย่างพื้นฐาน

### สร้าง Composition

```tsx title="src/Root.tsx"
import { Composition } from 'remotion';
import { MyVideo } from './MyVideo';

export const RemotionRoot: React.FC = () => {
  return (
    <Composition
      id="MyVideo"
      component={MyVideo}
      durationInFrames={150}
      fps={30}
      width={1920}
      height={1080}
    />
  );
};
```

### สร้าง Video Component

```tsx title="src/MyVideo.tsx"
import { useCurrentFrame, useVideoConfig, interpolate } from 'remotion';

export const MyVideo: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const opacity = interpolate(frame, [0, 30], [0, 1], {
    extrapolateRight: 'clamp',
  });

  return (
    <div style={{ backgroundColor: '#1a1a2e', flex: 1 }}>
      <h1 style={{ opacity, color: 'white' }}>Hello World!</h1>
    </div>
  );
};
```

## การ Render

```bash
# render เป็น MP4
npm run render

# render เป็น GIF
npm run render:gif

# render composition ที่ระบุ
bunx remotion render MyVideo --out=output.mp4
```

## ขั้นตอนถัดไป

- อ่าน [Key Concepts](key-concept.md) สำหรับความเข้าใจที่ลึกขึ้น
- ดู [Best Practices](best-practices.md) สำหรับแนวทางที่ดี
- สำรวจ [Features](features.md) สำหรับฟีเจอร์ทั้งหมด