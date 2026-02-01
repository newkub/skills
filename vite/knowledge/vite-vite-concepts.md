# Vite Concepts

## Concepts
Vite เป็น build tool ที่ใช้ ES Modules สำหรับ development และ Rollup สำหรับ production

### Core Features
- **Dev Server**: ใช้ native ES Modules ทำให้เร็วกว่า webpack
- **HMR**: Hot Module Replacement สำหรับการพัฒนา
- **Build**: ใช้ Rollup สำหรับ production builds
- **Plugins**: ระบบ plugins ที่ยืดหยุ่น

### How It Works
1. Dev server ใช้ ES Modules แทนการ bundle
2. Browser โหลด modules ตามที่ต้องการ
3. HMR อัปเดต modules โดยไม่ reload ทั้งหน้า
4. Production build ใช้ Rollup สำหรับ optimization

## Best Practices

1. **Use Vite for new projects** - เพื่อประสิทธิภาพสูงสุดในการพัฒนา
2. **Choose official or popular plugins** - รับประกันความเสถียรและการบำรุงรักษา
3. **Check plugin compatibility** - ตรวจสอบความเข้ากันได้ก่อนติดตั้ง
4. **Use TypeScript** - เพิ่ม type safety และการบำรุงรักษาที่ดีขึ้น
5. **Setup ESLint and Prettier** - รักษา code quality และ consistency
6. **Configure aliases** - ตั้งค่า path ที่ใช้บ่อยเพื่อความสะดวก
7. **Use manualChunks** - สำหรับ large libraries เพื่อปรับปรุง caching

## Examples

### Basic Configuration
```javascript
// vite.config.js
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [],
  server: {
    port: 5173
  }
})
```

### Advanced Configuration with TypeScript
```javascript
// vite.config.ts
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src')
    }
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['vue', 'vue-router']
        }
      }
    }
  }
})
```

## Verification

1. ตรวจสอบว่า Vite ติดตั้งและทำงานได้ด้วย `npx vite --version`
2. รัน `npm run dev` และเปิด browser ที่ http://localhost:5173
3. ทดสอบ HMR โดยแก้ไข code และตรวจสอบว่าอัปเดตแบบ real-time
4. รัน `npm run build` เพื่อตรวจสอบว่า production build ทำงานได้
5. ตรวจสอบว่า plugins ทำงานตามที่คาดหวัง
