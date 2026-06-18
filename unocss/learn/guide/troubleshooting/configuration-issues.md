# Configuration Issues

## Issue: Theme not working

**Problem:** Theme ไม่ทำงาน

**Solution:**

```typescript
// ตรวจสอบ theme configuration
export default defineConfig({
  theme: {
    colors: {
      primary: '#3b82f6',
    },
  },
})

// ตรวจสอบว่าใช้ theme ถูกต้อง
<div class="text-primary">
```

## Issue: Shortcuts not working

**Problem:** Shortcuts ไม่ทำงาน

**Solution:**

```typescript
// ตรวจสอบ shortcuts configuration
export default defineConfig({
  shortcuts: {
    'btn': 'px-4 py-2 bg-blue-500 text-white rounded',
  },
})

// ตรวจสอบว่าใช้ shortcut ถูกต้อง
<div class="btn">
```
