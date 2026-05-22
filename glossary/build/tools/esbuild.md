# esbuild

## คำอธิบาย
JavaScript bundler ที่เร็วที่สุดในปัจจุบัน เขียนด้วย Go

## ลักษณะเฉพาะ
- **Extreme Speed**: 10-100x เร็วกว่าเครื่องมืออื่น
- **Minimal Configuration**: ทำงานได้เลยโดยไม่ต้องตั้งค่า
- **Built-in Features**: TypeScript, JSX, CSS ในตัว
- **API First**: สามารถใช้เป็น library ได้

## คุณสมบัติหลัก
- **Bundling**: รวม files หลายๆ อัน
- **Minification**: ลดขนาดไฟล์อย่างมีประสิทธิภาพ
- **Source Maps**: สร้าง source maps สำหรับ debugging
- **Tree Shaking**: ลบโค้ดที่ไม่ได้ใช้

## ตัวอย่างการใช้งาน
```javascript
// CLI
esbuild src/index.ts --bundle --outfile=dist/bundle.js --minify

// API
const esbuild = require('esbuild');
esbuild.build({
  entryPoints: ['src/index.ts'],
  bundle: true,
  outfile: 'dist/bundle.js',
  minify: true,
  sourcemap: true,
}).catch(() => process.exit(1));
```

## ข้อดี
- Blazing fast performance
- Simple to use
- No configuration needed
- Great for libraries

## ข้อเสีย
- Limited plugin ecosystem
- Fewer features than Webpack
- Less flexible
- Newer project

## เหมาะกับ
- Library development
- Fast builds
- Simple projects
- Performance-critical builds

---

**หมวดหมู่**: Build Tools
