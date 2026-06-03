# Installation

## การติดตั้ง

### วิธีที่ 1: สร้างโปรเจกต์ใหม่ (แนะนำ)

```bash
# npm
npx create-video@latest

# bun
bunx create-video@latest

# yarn
yarn create video

# pnpm
pnpm create video
```

### วิธีที่ 2: ติดตั้งในโปรเจกต์ที่มีอยู่

```bash
# npm
npm install remotion

# pnpm
pnpm add remotion

# yarn
yarn add remotion

# bun
bun add remotion
```

## เวอร์ชันที่แนะนำ

| สิ่งที่ต้องมี | เวอร์ชัน |
|-------------|----------|
| **Node.js** | 18+ (แนะนำ LTS) |
| **Bun** | 1.0+ |
| **TypeScript** | 5.0+ |

## การตรวจสอบการติดตั้ง

```bash
# ตรวจสอบเวอร์ชัน
npx remotion --version
```

## Remote Packages

ติดตั้ง packages เพิ่มเติมสำหรับ Remotion:

```bash
# เพิ่ม package สำหรับ Remotion
bunx remotion add <package-name>

# ตัวอย่าง
bunx remotion add @remotion/google-fonts
bunx remotion add @remotion/lottie
```

| Package | การใช้งาน |
|---------|-----------|
| `@remotion/google-fonts` | ใช้ Google Fonts |
| `@remotion/lottie` | ใช้ Lottie animations |
| `@remotion/three` | ใช้ Three.js ในวิดีโอ |
| `@remotion/gltf-example` | โหลด 3D models |
