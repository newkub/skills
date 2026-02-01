## Title
Development Setup

## Description
ตั้งค่าสภาพแวดล้อมการพัฒนาให้เหมาะสมเพื่อประสิทธิภาพสูงสุดและการพัฒนาที่สะดวก

## Installation
```bash
npm create vite@latest my-project
cd my-project
npm install
npm run dev
```

## Rules
- ใช้ Node.js 18+ สำหรับ Vite 5+
- ติดตั้ง dependencies ด้วย npm/pnpm/yarn
- รัน dev server ด้วย `npm run dev`
- ใช้ HMR สำหรับการพัฒนา
- เปิด browser อัตโนมัติด้วย `open: true`

## Examples
✅ **ดี**: ใช้ Node.js 18 หรือใหม่กว่า - รองรับ features ล่าสุด
✅ **ดี**: รัน dev server ด้วย npm run dev - เริ่มการพัฒนาได้ทันที
✅ **ดี**: ใช้ HMR สำหรับการพัฒนา - อัปเดต code แบบ real-time

❌ **ไม่ดี**: ใช้ Node.js เก่าเกินไป - อาจมีปัญหา compatibility
❌ **ไม่ดี**: ไม่รัน dev server - ไม่สามารถทดสอบได้
❌ **ไม่ดี**: ปิด HMR - ทำให้การพัฒนาช้าลง

## Anti-patterns
- ห้ามใช้ Node.js เก่ากว่า 18
- ห้ามไม่รัน dev server
- ห้ามปิด HMR ใน development
- ห้ามไม่ตรวจสอบ Node.js version
- ห้ามใช้ port ที่ชนกับ services อื่น

## Dev Server Config
```javascript
export default defineConfig({
  server: {
    port: 5173,
    open: true,
    hmr: {
      overlay: true
    }
  }
})
```

## Verification
1. ตรวจสอบ Node.js version ด้วย `node --version`
2. รัน `npm run dev` และเปิด browser
3. ทดสอบ HMR โดยแก้ไข code
