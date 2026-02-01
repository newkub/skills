## Title
Build Optimization

## Description
ปรับปรุงประสิทธิภาพการ build และขนาด bundle เพื่อการทำงานที่เร็วและประสบการณ์ผู้ใช้ที่ดีขึ้น

## Config Options
```javascript
export default defineConfig({
  build: {
    minify: 'esbuild',
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks: {
          'vendor': ['vue', 'vue-router']
        }
      }
    }
  }
})
```

## Rules
- ใช้ `minify: 'esbuild'` สำหรับความเร็ว
- ปิด `sourcemap` ใน production
- แยก vendor code เพื่อ caching
- ใช้ `manualChunks` สำหรับ large libraries
- ตรวจสอบ bundle size ด้วย `rollup-plugin-visualizer`

## Examples
✅ **ดี**: แยก vendor เพื่อ caching - ทำให้ build ต่อไปเร็วขึ้น
✅ **ดี**: ปิด sourcemap ใน production - ลดขนาด bundle
✅ **ดี**: ใช้ esbuild สำหรับ minification - เร็วและมีประสิทธิภาพ

❌ **ไม่ดี**: เปิด sourcemap ใน production - เพิ่มขนาด bundle และเปิดเผย code
❌ **ไม่ดี**: ไม่แยก vendor code - ทำให้ caching ไม่มีประสิทธิภาพ
❌ **ไม่ดี**: ไม่ตรวจสอบ bundle size - อาจมีปัญหา performance

## Anti-patterns
- ห้ามเปิด sourcemap ใน production
- ห้ามไม่แยก vendor code ออกจาก app code
- ห้ามไม่ตรวจสอบ bundle size
- ห้ามใช้ minifier ที่ช้าเกินไป
- ห้ามไม่ใช้ manualChunks สำหรับ large libraries

## Bundle Analysis
```bash
npm install -D rollup-plugin-visualizer
```

```javascript
import { visualizer } from 'rollup-plugin-visualizer'

export default defineConfig({
  plugins: [
    visualizer({ open: true })
  ]
})
```

## Verification
1. ตรวจสอบ bundle size ด้วย visualizer
2. รัน `vite build` และดู output
3. ทดสอบ load time ใน production
