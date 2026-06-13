# Troubleshooting

## ภาพรวม

Common issues และ solutions สำหรับ UnoCSS

## Installation Issues

### Issue: UnoCSS not found

**Problem:** UnoCSS ไม่ถูกติดตั้ง

**Solution:**

```bash
# ติดตั้ง UnoCSS
bun add -D unocss

# หรือตรวจสอบ package.json
cat package.json | grep unocss
```

### Issue: Integration not working

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

## CSS Generation Issues

### Issue: CSS not generated

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

### Issue: Wrong CSS generated

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

## Configuration Issues

### Issue: Theme not working

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

### Issue: Shortcuts not working

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

## Performance Issues

### Issue: Slow build time

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

### Issue: Large CSS size

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

## Integration Issues

### Issue: Vite integration not working

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

### Issue: Nuxt integration not working

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

### Issue: Next.js integration not working

**Problem:** Next.js integration ไม่ทำงาน

**Solution:**

```javascript
// ตรวจสอบ next.config.js
const UnoCSS = require('@unocss/next').default

module.exports = UnoCSS()

// ตรวจสอบ import
import 'uno.css'
```

## Runtime Issues

### Issue: CSS not applied

**Problem:** CSS ไม่ถูก apply ใน browser

**Solution:**

```typescript
// ตรวจสอบ import
import 'virtual:uno.css'

// ตรวจสอบว่า CSS ถูก generate
// ใช้ browser devtools
```

### Issue: HMR not working

**Problem:** HMR ไม่ทำงาน

**Solution:**

```typescript
// Vite HMR จะทำงานอัตโนมัติ
// ตรวจสอบ dev server
bun run dev
```

## Debugging

### Enable Inspector

Enable inspector สำหรับ debugging

```typescript
export default defineConfig({
  inspector: true,
})
```

### Check CSS Output

ตรวจสอบ CSS output

```bash
# ตรวจสอบ generated CSS
cat dist/assets/*.css
```

### Check Configuration

ตรวจสอบ configuration

```typescript
// Log configuration
export default defineConfig({
  // ...
})

// ใช้ UnoCSS Inspector ใน browser
```

## Common Errors

### Error: Rule not found

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

### Error: Theme not found

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

### Error: Preset not found

**Problem:** Preset ไม่ถูกพบ

**Solution:**

```typescript
// ตรวจสอบ preset import
import { presetUno } from 'unocss'

export default defineConfig({
  presets: [presetUno()],
})
```

## Getting Help

### Documentation

ตรวจสอบ official documentation

- [Official Docs](https://unocss.dev/)
- [GitHub Issues](https://github.com/unocss/unocss/issues)

### Community

ขอความช่วยเหลือจาก community

- [Discord](https://chat.antfu.me)
- [GitHub Discussions](https://github.com/unocss/unocss/discussions)

## Best Practices

### 1. Check Configuration First

ตรวจสอบ configuration ก่อนอื่น

```typescript
// ตรวจสอบ uno.config.ts
// ตรวจสอบ framework config
```

### 2. Use Inspector

ใช้ inspector สำหรับ debugging

```typescript
export default defineConfig({
  inspector: true,
})
```

### 3. Check Dependencies

ตรวจสอบ dependencies

```bash
# ตรวจสอบ package.json
cat package.json

# ตรวจสอบ lock file
cat bun.lockb
```

### 4. Test Incrementally

Test ทีละส่วน

```typescript
// Test rules
// Test shortcuts
// Test theme
```

### 5. Document Issues

Document issues ที่พบ

```markdown
# Known Issues

## Issue 1
- Description: ...
- Solution: ...
```

## Conclusion

Troubleshooting UnoCSS:
- ตรวจสอบ configuration
- ใช้ inspector สำหรับ debugging
- ตรวจสอบ dependencies
- Test incrementally
- Document issues

ใช้ best practices เพื่อ solve issues อย่าง efficient
