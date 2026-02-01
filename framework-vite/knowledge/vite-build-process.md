# Build Process

## Concepts
Vite ใช้ Rollup สำหรับ production builds และ optimization

### Build Phases
1. **Analysis**: วิเคราะห์ dependencies และ imports
2. **Transform**: แปลง source code เป็น output format
3. **Optimization**: Minify และ tree-shaking
4. **Output**: สร้าง static files สำหรับ deployment

### Output Structure
```
dist/
├── assets/           # CSS, JS, images
├── index.html        # Entry HTML
└── favicon.ico       # Icon
```

## Best Practices
- ใช้ `vite build` สำหรับ production builds เพื่อ optimization สูงสุด
- ตรวจสอบ bundle size ด้วย visualizer เพื่อหาปัญหา performance
- แยก vendor code สำหรับ caching และ load time ที่เร็วขึ้น
- ใช้ CDN สำหรับ large libraries เพื่อลด server load
- ปิด sourcemap ใน production เพื่อความปลอดภัยและลดขนาด
- ใช้ esbuild สำหรับ minification เพื่อความเร็วสูงสุด
- ตั้งค่า manualChunks สำหรับ libraries ใหญ่ๆ

## Examples
```bash
# Build for production
npm run build

# Preview production build
npm run preview

# Analyze bundle size
npm run build -- --mode analyze
```

```javascript
// vite.config.js
export default defineConfig({
  build: {
    minify: 'esbuild',
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks: {
          'vendor': ['vue']
        }
      }
    }
  }
})
```

## Verification
1. รัน `npm run build` และตรวจสอบ output
2. รัน `npm run preview` สำหรับ testing
3. ตรวจสอบ bundle size ด้วย visualizer
