# CSS Generation Issues

## Issue: CSS not generated

**Problem:** CSS ไม่ถูก generate

**Solution:**

```typescript
// ตรวจสอบ configuration
export default defineConfig({
  // ตรวจสอบ presets
  presets: [presetUno()],
  
  // ตรวจสอบ include/exclude
  include: [/\.vue$/, /\.vue\?vue/],
  exclude: [/node_modules/],
})
```

## Issue: Wrong CSS generated

**Problem:** CSS ที่ generate ไม่ถูกต้อง

**Solution:**

```typescript
// ตรวจสอบ rules
export default defineConfig({
  rules: [
    // ตรวจสอบ rule syntax
    ['text-red', { color: 'red' }],
  ],
})
```
