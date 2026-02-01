# Plugin System

## Concepts
Vite plugins ใช้ Rollup plugin API และเพิ่ม Vite-specific hooks

### Plugin Types
- **Official Plugins**: จาก Vite team
- **Community Plugins**: จาก community
- **Custom Plugins**: สร้างเอง

### Plugin Hooks
- `resolveId`: แก้ไข module resolution
- `load`: แก้ไข module loading
- `transform`: แก้ไข code ก่อนใช้
- `configureServer`: ตั้งค่า dev server

## Best Practices
- ใช้ official plugins ก่อนเพื่อความเสถียรและการสนับสนุน
- ตรวจสอบความเข้ากันได้ของ plugins ก่อนติดตั้ง
- อ่าน documentation ก่อนใช้ plugins เพื่อความเข้าใจที่ถูกต้อง
- ติดตั้งเฉพาะที่จำเป็นเพื่อลดความซับซ้อน
- รายงาน bugs ถ้าพบเพื่อการพัฒนาที่ดีขึ้น
- ตรวจสอบ plugin versions และ compatibility กับ Vite version
- ใช้ plugin options อย่างเหมาะสมเพื่อประสิทธิภาพสูงสุด

## Examples
```javascript
// Official plugins
import vue from '@vitejs/plugin-vue'
import eslint from 'vite-plugin-eslint'

// Community plugins
import components from 'unplugin-vue-components'

export default defineConfig({
  plugins: [
    vue(),
    eslint(),
    components()
  ]
})
```

```javascript
// Custom plugin example
export default function myPlugin() {
  return {
    name: 'my-plugin',
    transform(code, id) {
      if (id.endsWith('.vue')) {
        return code.replace(/foo/g, 'bar')
      }
    }
  }
}
```

## Verification
1. ตรวจสอบว่า plugins ทำงานได้
2. รัน `vite` และดูว่าไม่มี error
3. ทดสอบ features ที่ plugins ให้มา
