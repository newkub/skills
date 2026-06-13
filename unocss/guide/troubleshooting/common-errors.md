# Common Errors

## Error: Rule not found

**Problem:** Rule ไม่ถูกพบ

**Solution:**

```typescript
// ตรวจสอบ rule syntax
export default defineConfig({
  rules: [
    // ตรวจสอบว่า rule ถูกต้อง
    ['text-red', { color: 'red' }],
  ],
})
```

## Error: Theme not found

**Problem:** Theme ไม่ถูกพบ

**Solution:**

```typescript
// ตรวจสอบ theme syntax
export default defineConfig({
  theme: {
    colors: {
      // ตรวจสอบว่า theme ถูกต้อง
      primary: '#3b82f6',
    },
  },
})
```

## Error: Preset not found

**Problem:** Preset ไม่ถูกพบ

**Solution:**

```typescript
// ตรวจสอบ preset import
import { presetUno } from 'unocss'

export default defineConfig({
  presets: [presetUno()],
})
```
