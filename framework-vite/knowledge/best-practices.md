# Vite Best Practices

## Concepts
Best practices สำหรับการพัฒนาโปรเจกต์ Vite ที่มีคุณภาพสูงและปฏิบัติตามมาตรฐานอุตสาหกรรม

## Best Practices

### Project Structure
- ใช้โครงสร้างแบบ feature-based สำหรับโปรเจกต์ขนาดใหญ่
- แยก concerns อย่างชัดเจนระหว่าง components, utils, และ business logic
- ใช้ barrel exports สำหรับการจัดการ imports ที่สะดวก
- จัดระเบียบไฟล์ตามหน้าที่และความสัมพันธ์

### Configuration
- ตั้งค่า alias สำหรับ paths ที่ใช้บ่อยเพื่อความสะดวกในการ import
- ใช้ environment variables สำหรับค่าที่แตกต่างกันตาม environment
- แยก configuration สำหรับ development และ production
- เปิดใช้งาน HMR และ auto-open browser ใน development

### Performance
- ใช้ esbuild สำหรับ minification เพื่อความเร็วสูงสุด
- แยก vendor code ด้วย manualChunks สำหรับ caching
- ปิด sourcemap ใน production เพื่อลดขนาด bundle
- ใช้ CDN สำหรับ external libraries ที่ใหญ่ๆ

### Development Experience
- ติดตั้ง ESLint และ Prettier สำหรับ code quality
- ใช้ TypeScript สำหรับ type safety
- ตั้งค่า VS Code extensions ที่เหมาะสมกับ Vite
- ใช้ Git hooks สำหรับ pre-commit checks

### Security
- ตรวจสอบ dependencies ด้วย tools อย่าง npm audit
- ปิด sourcemap ใน production
- ใช้ HTTPS ใน development เมื่อจำเป็น
- ตั้งค่า CSP headers สำหรับ production

## Examples

### Project Structure
```
src/
├── components/
│   ├── ui/
│   └── features/
├── composables/
├── utils/
├── stores/
├── pages/
└── assets/
```

### Configuration
```javascript
// vite.config.js
export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@/components': path.resolve(__dirname, './src/components'),
      '@/utils': path.resolve(__dirname, './src/utils')
    }
  },
  build: {
    minify: 'esbuild',
    sourcemap: process.env.NODE_ENV === 'development',
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['vue', 'vue-router'],
          ui: ['element-plus']
        }
      }
    }
  }
})
```

### Development Scripts
```json
{
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview",
    "lint": "eslint . --ext .vue,.js,.ts",
    "lint:fix": "eslint . --ext .vue,.js,.ts --fix",
    "type-check": "vue-tsc --noEmit"
  }
}
```

## Verification
1. ตรวจสอบว่าโครงสร้างโปรเจกต์เป็นไปตาม best practices
2. ทดสอบ build performance ด้วย `npm run build`
3. ตรวจสอบ bundle size ด้วย visualizer
4. ทดสอบ development experience ด้วย HMR และ auto-reload
5. ตรวจสอบ security ด้วย `npm audit`
