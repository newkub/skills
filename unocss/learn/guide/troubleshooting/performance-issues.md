# Performance Issues

## Issue: Slow build time

**Problem:** Build time ช้า

**Solution:**

```typescript
// ปิด features ที่ไม่ได้ใช้
export default defineConfig({
  presets: [
    presetUno({
      dark: false, // ปิด dark mode ถ้าไม่ใช้
    }),
  ],
})

// Optimize rules
export default defineConfig({
  rules: [
    // ใช้ simple regex
    [/^text-(.+)$/, ([, color]) => ({ color })],
  ],
})
```

## Issue: Large CSS size

**Problem:** CSS size ใหญ่

**Solution:**

```typescript
// ใช้ shortcuts แทน complex rules
export default defineConfig({
  shortcuts: {
    'btn': 'px-4 py-2 bg-blue-500 text-white rounded',
  },
})

// Purge unused CSS
export default defineConfig({
  // Auto-purge ใน production
})
```
