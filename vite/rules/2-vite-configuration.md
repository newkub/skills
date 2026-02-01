# Configuration

## Description
ตั้งค่า Vite configuration ให้เหมาะสมกับโปรเจกต์เพื่อประสิทธิภาพสูงสุดและการพัฒนาที่สะดวก

## Examples

### Basic Configuration
```javascript
// vite.config.js
import { defineConfig } from 'vite'
import path from 'path'

export default defineConfig({
  plugins: [],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
  server: {
    port: 5173,
    open: true
  }
})
```

### Environment-based Configuration
```javascript
// vite.config.js
export default defineConfig(({ mode }) => {
  const isDev = mode === 'development'
  
  return {
    server: {
      port: isDev ? 5173 : 3000
    }
  }
})
```

## Anti-patterns

❌ **ใช้ path แบบ relative**: `import utils from '../../../utils'` - ยากต่อการบำรุงรักษา
✅ **ใช้ alias**: `import utils from '@/utils'` - สั้นและชัดเจน

❌ **ใช้ port 3000**: อาจชนกับ services อื่น
✅ **ใช้ port 5173**: default ของ Vite ไม่ซ้ำกับ framework อื่น

❌ **รวมทุก config**: ทำให้จัดการ environment ยาก
✅ **แยก config ตาม mode**: ใช้ `defineConfig(({ mode }) => ...)`

❌ **ปิด HMR**: ทำให้การพัฒนาช้าลง
✅ **เปิด HMR**: อัปเดต code แบบ real-time

## Verification

1. ตรวจสอบว่า Vite config ทำงานได้ด้วย `npx vite --help`
2. ทดสอบ dev server ด้วย `npm run dev`
3. ตรวจสอบว่า alias ทำงานโดยลอง import จาก `@/`
4. ทดสอบ build ด้วย `npm run build`
5. ยืนยันว่า port ไม่ชนกับ services อื่น
