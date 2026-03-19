---
title: SSR External Dependencies
description: การจัดการ external dependencies สำหรับ SSR
---

# SSR External Dependencies

```typescript
export default defineConfig({
  build: {
    ssr: {
      // ไม่ bundle dependencies (ใช้ Node.js require)
      noExternal: ['some-package'], // ยกเว้น package นี้
      external: ['large-lib'] // externalize package นี้
    }
  }
})
```
