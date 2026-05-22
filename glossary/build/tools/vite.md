# Vite

## คำอธิบาย
Build tool สมัยใหม่ที่เร็วและง่ายต่อการใช้งาน

## ลักษณะเฉพาะ
- **Instant Dev Server**: ใช้ ES modules ใน development
- **Fast HMR**: Hot Module Replacement ที่รวดเร็ว
- **Optimized Build**: ใช้ Rollup สำหรับ production
- **Zero Configuration**: ทำงานได้เลยโดยไม่ต้องตั้งค่า

## คุณสมบัติหลัก
- **Native ES Modules**: ไม่ต้อง bundle ใน dev mode
- **Lightning Fast**: Build times ที่เร็วมาก
- **Framework Agnostic**: รองรับหลาย frameworks
- **Plugin System**: ขยายฟังก์ชันได้

## ตัวอย่างการใช้งาน
```javascript
// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom']
        }
      }
    }
  }
});
```

## ข้อดี
- Extremely fast development
- Simple configuration
- Modern tooling
- Great DX (Developer Experience)

## ข้อเสีย
- Newer ecosystem
- Less mature than Webpack
- Migration complexity
- Limited advanced features

## เหมาะกับ
- Modern web applications
- React/Vue/Svelte projects
- Rapid prototyping
- Performance-critical development

---

**หมวดหมู่**: Build Tools
