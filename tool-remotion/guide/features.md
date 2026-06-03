# All Features

## ฟีเจอร์หลัก

| ฟีเจอร์ | คำอธิบาย |
|---------|----------|
| **React-based** | ใช้ component model และ hooks เหมือน React ปกติ |
| **Frame-based** | ควบคุม animation ระดับ frame ได้ละเอียด |
| **Type-safe** | ใช้ TypeScript และ Zod สำหรับ props validation |
| **Multi-format** | export เป็น MP4, GIF, WebM, หรือ image sequence |

## ฟีเจอร์เด่น

### Composition System

สร้าง composition หลายตัวในโปรเจกต์เดียว:

```tsx
<Composition id="Intro" component={Intro} />
<Composition id="Main" component={Main} />
<Composition id="Outro" component={Outro} />
```

### Timing Controls

| Feature | วิธีใช้ |
|---------|--------|
| **Sequences** | `<Sequence from={0} durationInFrames={90} />` |
| **Loops** | `loop(frame, duration)` |
| **Delay render** | `delayRender()` / `continueRender()` |

### Animation Utilities

| Function | การใช้งาน |
|----------|----------|
| `interpolate()` | แปลงค่าตาม input range |
| `spring()` | สร้าง spring physics animation |
| `interpolateColor()` | แปลงสีตาม progress |
| `useTransform()` | chain interpolations |

### Media Support

| Type | Component |
|------|-----------|
| **Audio** | `<Audio src={staticFile('music.mp3')} />` |
| **Video** | `<Video src={staticFile('clip.mp4')} />` |
| **Images** | `<Img src={staticFile('logo.png')} />` |
| **Fonts** | วางใน `public/` แล้วใช้ `staticFile()` |

### Advanced Features

| Feature | คำอธิบาย |
|---------|----------|
| **Transparent output** | รองรับ WebM/VP9 alpha channel |
| **Lambda rendering** | render บน serverless (AWS Lambda) |
| **Still frames** | export frame เดียวเป็น image |
| **Custom encoders** | ตั้งค่า FFmpeg codecs |

## Remote Assets

```tsx
// โหลด assets จาก URL
<Img src="https://example.com/image.png" />

// ใช้ไฟล์ local จาก public folder
<Img src={staticFile('assets/logo.png')} />
```

> **หมายเหตุ**: path แบบ relative ไม่รองรับ ต้องใช้ `staticFile()` เสมอ
