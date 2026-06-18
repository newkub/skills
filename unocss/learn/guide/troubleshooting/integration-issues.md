# Integration Issues

## Issue: Vite integration not working

**Problem:** Vite integration ไม่ทำงาน

**Solution:**

```typescript
// ตรวจสอบ vite.config.ts
import UnoCSS from 'unocss/vite'

export default {
  plugins: [UnoCSS()],
}

// ตรวจสอบ import
import 'virtual:uno.css'
```

## Issue: Nuxt integration not working

**Problem:** Nuxt integration ไม่ทำงาน

**Solution:**

```typescript
// ตรวจสอบ nuxt.config.ts
export default defineNuxtConfig({
  modules: ['@unocss/nuxt'],
  unocss: {
    presets: [presetUno()],
  },
})
```

## Issue: Next.js integration not working

**Problem:** Next.js integration ไม่ทำงาน

**Solution:**

```javascript
// ตรวจสอบ next.config.js
const UnoCSS = require('@unocss/next').default

module.exports = UnoCSS()

// ตรวจสอบ import
import 'uno.css'
```
