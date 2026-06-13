# Installation Issues

## Issue: UnoCSS not found

**Problem:** UnoCSS ไม่ถูกติดตั้ง

**Solution:**

```bash
# ติดตั้ง UnoCSS
bun add -D unocss

# หรือตรวจสอบ package.json
cat package.json | grep unocss
```

## Issue: Integration not working

**Problem:** Integration กับ framework ไม่ทำงาน

**Solution:**

```typescript
// ตรวจสอบ configuration
// vite.config.ts
import UnoCSS from 'unocss/vite'

export default {
  plugins: [UnoCSS()],
}

// ตรวจสอบ import
import 'virtual:uno.css'
```
