# Performance Optimization

## ภาพรวม

UnoCSS ถูกออกแบบมาสำหรับ performance สูงสุด แต่ยังมีวิธี optimize เพิ่มเติม

## Build-Time Optimization

### 1. Minify CSS

Minify CSS ใน production

```typescript
export default defineConfig({
  minify: true,
})
```

### 2. Purge Unused

Purge unused utilities อัตโนมัติ

```typescript
export default defineConfig({
  // Auto-purge ใน production
  presets: [presetUno()],
})
```

### 3. Cache Strategy

Cache generated CSS สำหรับ faster rebuilds

```typescript
// Vite จะ cache อัตโนมัติ
// Dev server จะ regenerate เฉพาะที่เปลี่ยน
```

## Runtime Optimization

### 1. Zero Runtime

UnoCSS ไม่มี runtime overhead

```typescript
// หลังจาก build จะเหลือเฉพาะ CSS
// ไม่มี JavaScript runtime
```

### 2. CSS Size

UnoCSS generate CSS เฉพาะที่ใช้

```html
<!-- เฉพาะ utilities ที่ใช้จะถูก generate -->
<div class="text-red p-4">
  <!-- generate: .text-red, .p-4 -->
</div>
```

### 3. CSS Parsing

Browser parse CSS เร็วเพราะ CSS simple

```css
/* Simple selectors มี performance ดี */
.text-red { color: red; }
```

## Configuration Optimization

### 1. Disable Unused Features

Disable features ที่ไม่ได้ใช้

```typescript
export default defineConfig({
  presets: [
    presetUno({
      dark: false, // Disable ถ้าไม่ใช้
      attributifyPseudo: false,
    }),
  ],
})
```

### 2. Optimize Rules

Optimize rules สำหรับ performance

```typescript
export default defineConfig({
  rules: [
    // ✅ Good - Simple regex
    [/^text-(.+)$/, ([, color]) => ({ color })],
    
    // ❌ Bad - Complex regex
    [/^text-(?:red|blue|green)-(?:light|dark)$/, ...],
  ],
})
```

### 3. Use Shortcuts

ใช้ shortcuts แทน complex rules

```typescript
export default defineConfig({
  shortcuts: {
    // ✅ Good - Shortcuts มี performance ดีกว่า
    'btn': 'px-4 py-2 bg-blue-500 text-white rounded',
  },
})
```

## File Optimization

### 1. Include/Exclude

กำหนด files ที่จะ scan

```typescript
export default defineConfig({
  include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
  exclude: [/node_modules/, /\.git/],
})
```

### 2. Split CSS

Split CSS ตาม routes สำหรับ large applications

```typescript
// ใช้ dynamic imports
// Load CSS เฉพาะที่จำเป็น
```

## Monitoring Performance

### 1. CSS Size Monitoring

Monitor CSS size ใน production

```bash
# Check CSS size
ls -lh dist/assets/*.css
```

### 2. Build Time Monitoring

Monitor build time

```bash
# Vite จะแสดง build time
bun run build
```

### 3. Dev Server Monitoring

Monitor dev server performance

```bash
# Vite dev server metrics
bun run dev
```

## Performance Tips

### 1. Use CDN for Development

ใช้ CDN สำหรับ development ที่เร็ว

```html
<script src="https://cdn.jsdelivr.net/bun/@unocss/runtime"></script>
```

### 2. Enable HMR

Enable HMR สำหรับ faster development

```typescript
// Vite HMR จะทำงานอัตโนมัติ
// UnoCSS จะ regenerate CSS เฉพาะที่เปลี่ยน
```

### 3. Optimize Assets

Optimize assets ร่วมกับ UnoCSS

```typescript
// Optimize images, fonts, etc.
// ร่วมกับ UnoCSS optimization
```

## Performance Comparison

### vs Tailwind CSS

| Metric | UnoCSS | Tailwind CSS |
|--------|--------|--------------|
| CSS Size | Smaller | Larger |
| Build Time | Faster | Slower |
| HMR Speed | Faster | Slower |
| Memory Usage | Lower | Higher |

### vs Styled Components

| Metric | UnoCSS | Styled Components |
|--------|--------|------------------|
| CSS Size | Smaller | Larger |
| Build Time | Faster | Slower |
| Runtime | Zero | Runtime overhead |

## Conclusion

UnoCSS มี performance ดีกว่า alternatives เพราะ:
- On-demand generation
- Build-time optimization
- Zero runtime overhead
- Efficient CSS parsing

ใช้ best practices เพื่อ maximize performance
