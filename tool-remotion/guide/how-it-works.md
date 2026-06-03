# How It Works

## วงจรการทำงานของ Remotion

Remotion ใช้ Chrome (ผ่าน Puppeteer) เพื่อ render วิดีโอจาก React components

```
┌─────────────────────────────────────────────────────────────┐
│                     Development Phase                        │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│   ┌──────────────┐      ┌──────────────┐      ┌─────────┐  │
│   │  Write Code  │ ──── │   Preview    │ ──── │  Debug  │  │
│   │  React TSX   │      │   Browser    │      │  Timeline│  │
│   └──────────────┘      └──────────────┘      └─────────┘  │
│                                                             │
└─────────────────────────────────────────────────────────────┘
                          │
                          ▼
┌─────────────────────────────────────────────────────────────┐
│                      Render Phase                            │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│   ┌──────────────┐      ┌──────────────┐      ┌─────────┐  │
│   │  Bundle      │ ──── │   Chrome     │ ──── │  Output │  │
│   │  ESBuild     │      │   Screenshots│      │  MP4/GIF│  │
│   └──────────────┘      └──────────────┘      └─────────┘  │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

## ขั้นตอนการ Render

| Step | คำอธิบาย | Command |
|------|----------|---------|
| **1** | Bundle code ด้วย ESBuild | `remotion bundle` |
| **2** | เริ่มต้น Chrome headless | Puppeteer |
| **3** | แสดงผลแต่ละ frame | `useCurrentFrame()` |
| **4** | จับภาพ screenshot | Chrome `captureScreenshot()` |
| **5** | รวม frames เป็น video | FFmpeg |

## Hooks หลักในการทำงาน

```tsx
// 1. ดึง frame ปัจจุบัน
const frame = useCurrentFrame();

// 2. ดึง video config
const { fps, width, height } = useVideoConfig();

// 3. แปลงค่าตาม frame
const opacity = interpolate(frame, [0, 30], [0, 1]);

// 4. ใช้ spring animation
const scale = spring({ frame, fps, config: { damping: 15 } });
```

## การจัดการ Timing

| Component | วัตถุประสงค์ |
|-----------|-------------|
| `<Sequence>` | กำหนดเวลาเริ่มต้นของ child component |
| `loop()` | ทำให้ content วนซ้ำ |
| `delayRender()` | จัดการ async operations |

## การใช้ Audio/Video

```tsx
// Audio
import { Audio } from 'remotion';
<Audio src={staticFile('music.mp3')} />

// Video
import { Video } from 'remotion';
<Video src={staticFile('intro.mp4')} />
```

| Asset | วิธีการ |
|-------|--------|
| **Static files** | ใช้ `staticFile('path')` |
| **Audio/Video** | import component แล้วใส่ใน JSX |
| **Images** | ใช้ `<Img src={staticFile(...)} />` |
