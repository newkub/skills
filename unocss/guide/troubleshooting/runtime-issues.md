# Runtime Issues

## Issue: CSS not applied

**Problem:** CSS ไม่ถูก apply ใน browser

**Solution:**

```typescript
// ตรวจสอบ import
import 'virtual:uno.css'

// ตรวจสอบว่า CSS ถูก generate
// ใช้ browser devtools
```

## Issue: HMR not working

**Problem:** HMR ไม่ทำงาน

**Solution:**

```typescript
// Vite HMR จะทำงานอัตโนมัติ
// ตรวจสอบ dev server
bun run dev
```
