---
description: ตั้งค่า WXT ในโปรเจกต์ใหม่
---

## Goal

ตั้งค่า WXT ในโปรเจกต์ใหม่สำหรับสร้าง web extensions

## Scope

ใช้สำหรับโปรเจกต์ใหม่ที่ยังไม่มี WXT ติดตั้ง

## Execute

### 1. สร้างโปรเจกต์ใหม่

```bash
bun create wxt@latest my-extension
```

หรือใช้ npm:

```bash
npm create wxt@latest my-extension
```

### 2. เลือก Template

WXT จะถามให้เลือก template:
- **Vanilla TypeScript** - สำหรับ extensions ที่ไม่ใช้ framework
- **Vue** - สำหรับ Vue.js extensions
- **React** - สำหรับ React extensions
- **Svelte** - สำหรับ Svelte extensions
- **Solid** - สำหรับ SolidJS extensions

### 3. เข้าไปในโปรเจกต์

```bash
cd my-extension
```

### 4. ติดตั้ง Dependencies

```bash
bun install
```

หรือ:

```bash
npm install
```

### 5. ตั้งค่า Scripts ใน package.json

ตรวจสอบว่ามี scripts ต่อไปนี้:

```json
{
  "scripts": {
    "dev": "wxt",
    "build": "wxt build",
    "build:firefox": "wxt build --browser firefox",
    "zip": "wxt zip",
    "zip:firefox": "wxt zip --browser firefox",
    "postinstall": "wxt prepare"
  }
}
```

### 6. รัน Postinstall

```bash
bun run postinstall
```

หรือ:

```bash
npm run postinstall
```

นี่จะสร้าง TypeScript types และ auto-imports

### 7. ตรวจสอบ Project Structure

ตรวจสอบว่ามีโครงสร้างต่อไปนี้:

```
my-extension/
├── entrypoints/
│   ├── background.ts
│   ├── popup/
│   └── content/
├── public/
├── wxt.config.ts
├── tsconfig.json
└── package.json
```

### 8. เริ่ม Development Server

```bash
bun run dev
```

หรือ:

```bash
npm run dev
```

## Rules

### Framework Selection

- เลือก framework ที่คุณคุ้นเคย
- ถ้าไม่มีความจำเป็น ใช้ Vanilla TypeScript
- ถ้าต้องการ UI ที่ซับซ้อน เลือก framework ที่มี ecosystem ดี

### Browser Targeting

- Default: Chrome (Chromium-based browsers)
- เพิ่ม Firefox ด้วย `--browser firefox` flag
- Safari ต้องใช้ additional setup

### Type Safety

- ต้องรัน `wxt prepare` หลังจาก `bun install` เสมอ
- นี่จะสร้าง types สำหรับ auto-imports และ configuration

## Expected Outcome

- โปรเจกต์ WXT ที่พร้อมใช้งาน
- TypeScript types ที่สร้างขึ้นอัตโนมัติ
- Development server ที่พร้อมรัน
- Scripts ที่จำเป็นใน package.json
