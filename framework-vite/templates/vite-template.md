---
name: vite-template
description: Template สำหรับสร้าง Vite project
---

# Vite Project Template

## Project Structure

```
my-vite-app/
├── public/
│   └── favicon.ico
├── src/
│   ├── assets/
│   ├── components/
│   ├── styles/
│   ├── App.vue (หรือ App.jsx)
│   └── main.js (หรือ main.ts)
├── index.html
├── package.json
├── vite.config.js
└── tsconfig.json (ถ้าใช้ TypeScript)
```

## Configuration Files

### vite.config.js

```javascript
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue' // หรือ framework อื่นๆ

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': '/src'
    }
  }
})
```

### package.json

```json
{
  "name": "my-vite-app",
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "vue": "^3.0.0"
  },
  "devDependencies": {
    "@vitejs/plugin-vue": "^5.0.0",
    "vite": "^5.0.0"
  }
}
```

## Best Practices

1. ใช้ alias `@` สำหรับ src folder
2. แยก components ออกจาก pages
3. ใช้ CSS Modules หรือ scoped CSS
4. ตั้งค่า ESLint และ Prettier
5. ใช้ TypeScript ถ้าเป็นไปได้
6. เขียน tests สำหรับส่วนสำคัญ
7. ใช้ environment variables สำหรับ config

## Verification
1. ตรวจสอบว่าโครงสร้างตรงตามที่กำหนด
2. รัน `npm run dev` และเปิด browser
3. รัน `npm run build` เพื่อทดสอบ production build
4. ตรวจสอบว่า config ทำงานได้
