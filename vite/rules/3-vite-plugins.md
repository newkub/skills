# Plugins

## Description
ใช้ Vite plugins อย่างเหมาะสมเพื่อเพิ่มฟีเจอร์และประสิทธิภาพ

## Common Plugins
```javascript
import vue from '@vitejs/plugin-vue'
import eslint from 'vite-plugin-eslint'
import components from 'unplugin-vue-components'

export default defineConfig({
  plugins: [
    vue(),
    eslint(),
    components()
  ]
})
```

## Rules
- ติดตั้ง plugins ที่จำเป็นเท่านั้น
- ตรวจสอบความเข้ากันได้ของ plugins
- ระบุ options สำหรับ plugins ที่ต้องการ
- ใช้ plugins ที่ active maintain
- อ่าน docs ก่อนติดตั้ง

## Examples
```
✅ ดี: ใช้ @vitejs/plugin-vue สำหรับ Vue
✅ ดี: ติดตั้ง eslint plugin สำหรับ linting
✅ ดี: ใช้ unplugin-vue-components สำหรับ auto-import

❌ ไม่ดี: ติดตั้ง plugins ที่ไม่จำเป็น
❌ ไม่ดี: ใช้ plugins ที่ไม่ maintain
❌ ไม่ดี: ไม่ระบุ options ที่จำเป็น
```

## Anti-patterns
- ห้ามติดตั้ง plugins ที่ไม่จำเป็น
- ห้ามใช้ plugins ที่ไม่ maintain แล้ว
- ห้ามไม่ระบุ options ที่จำเป็น
- ห้ามติดตั้ง plugins ที่ขัดแย้งกัน
- ห้ามใช้ plugins โดยไม่อ่าน docs

## Plugin Installation
```bash
npm install -D @vitejs/plugin-vue
npm install -D vite-plugin-eslint
npm install -D unplugin-vue-components
```

## Verification
1. ตรวจสอบว่า plugins ทำงานได้
2. รัน `vite` และดูว่าไม่มี error
3. ทดสอบ features ที่ plugins ให้มา
