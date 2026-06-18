# Performance

## ภาพรวม

UnoCSS ถูกออกแบบมาสำหรับ performance สูงสุด โดย generate CSS เฉพาะที่ใช้ และ optimize ใน build time

## Performance Characteristics

### On-Demand Generation

UnoCSS generate CSS เฉพาะ utilities ที่ถูกใช้

```typescript
// เฉพาะ utilities ที่ใช้จะถูก generate
<div class="text-red p-4">
  // generate: .text-red, .p-4
</div>
```

### Build-Time Optimization

CSS ถูก generate ใน build time ไม่ใช่ runtime

```typescript
// Vite จะ generate CSS ใน build time
// Dev server จะ regenerate เฉพาะที่เปลี่ยน
```

### Zero Runtime

ไม่มี runtime overhead หลังจาก build

```typescript
// หลังจาก build จะเหลือเฉพาะ CSS file
// ไม่มี JavaScript runtime
```

## Optimization Strategies

### 1. Minify CSS

Minify CSS ใน production

```typescript
// vite.config.ts
export default {
  plugins: [
    UnoCSS({
      minify: true, // Minify CSS
    }),
  ],
}
```

### 2. Purge Unused

Purge unused utilities ใน production

```typescript
export default defineConfig({
  // Auto-purge ใน production
  presets: [presetUno()],
})
```

### 3. Cache Strategy

Cache generated CSS สำหรับ performance

```typescript
// Vite จะ cache อัตโนมัติ
// Dev server จะ regenerate เฉพาะที่เปลี่ยน
```

### 4. Lazy Loading

Lazy load CSS สำหรับ large applications

```typescript
// Split CSS ตาม routes
// Load เฉพาะที่จำเป็น
```

## Performance Metrics

### CSS Size

UnoCSS มี CSS size เล็กกว่า Tailwind

| Framework | CSS Size (minified) |
|-----------|-------------------|
| Tailwind CSS | ~3.5kb (base) + utilities |
| UnoCSS | ~1kb (base) + utilities |

### Build Time

UnoCSS มี build time เร็วกว่า

| Framework | Build Time |
|-----------|------------|
| Tailwind CSS | ~2-3s |
| UnoCSS | ~0.5-1s |

### Dev Server HMR

UnoCSS มี HMR เร็วกว่า

| Framework | HMR Time |
|-----------|----------|
| Tailwind CSS | ~100-200ms |
| UnoCSS | ~10-50ms |

## Configuration Optimization

### Disable Unused Features

Disable features ที่ไม่ได้ใช้

```typescript
export default defineConfig({
  presets: [
    presetUno({
      // Disable unused features
      dark: 'class', // หรือ false ถ้าไม่ใช้
      attributifyPseudo: false, // หากไม่ใช้ attributify
    }),
  ],
})
```

### Optimize Rules

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

### Use Shortcuts

ใช้ shortcuts แทน complex rules

```typescript
export default defineConfig({
  shortcuts: {
    // ✅ Good - Shortcuts มี performance ดีกว่า
    'btn': 'px-4 py-2 bg-blue-500 text-white rounded',
  },
  rules: [
    // ❌ Bad - Rules ช้ากว่า
    ['btn', { padding: '1rem', background: 'blue', ... }],
  ],
})
```

## Runtime Performance

### CSS Generation

UnoCSS generate CSS ใน build time ไม่ใช่ runtime

```typescript
// Build time generation
// ไม่มี runtime overhead
```

### CSS Parsing

Browser parse CSS เร็วเพราะ CSS size เล็ก

```css
/* UnoCSS CSS เล็กและ efficient */
.text-red { color: red; }
.p-4 { padding: 1rem; }
```

### CSS Matching

Browser match CSS selectors เร็วเพราะ selectors simple

```css
/* Simple selectors มี performance ดี */
.text-red { color: red; }
```

## Memory Usage

### Dev Server

UnoCSS มี memory usage ต่ำใน dev server

```typescript
// Dev server memory usage: ~50-100MB
// เนื่องจาก generate CSS เฉพาะที่ใช้
```

### Build Process

UnoCSS มี memory usage ต่ำใน build process

```typescript
// Build memory usage: ~100-200MB
// เนื่องจาก process อย่าง efficient
```

## Monitoring Performance

### CSS Size Monitoring

Monitor CSS size ใน production

```typescript
// UnoCSS จะแสดง CSS size ใน build output
// ใช้สำหรับ monitoring
```

### Build Time Monitoring

Monitor build time

```typescript
// Vite จะแสดง build time
// ใช้สำหรับ monitoring
```

### Dev Server Monitoring

Monitor dev server performance

```typescript
// Vite dev server metrics
// ใช้สำหรับ monitoring
```

## Best Practices

### 1. Use Presets Wisely

ใช้ presets ที่จำเป็นเท่านั้น

```typescript
export default defineConfig({
  presets: [
    presetUno(), // Base preset
    // เพิ่ม presets ตามความจำเป็น
  ],
})
```

### 2. Optimize Rules

Optimize rules สำหรับ performance

```typescript
export default defineConfig({
  rules: [
    // Simple regex
    [/^text-(.+)$/, ([, color]) => ({ color })],
  ],
})
```

### 3. Use Shortcuts

ใช้ shortcuts สำหรับ patterns ที่ใช้บ่อย

```typescript
export default defineConfig({
  shortcuts: {
    'btn': 'px-4 py-2 bg-blue-500 text-white rounded',
  },
})
```

### 4. Disable Unused Features

Disable features ที่ไม่ได้ใช้

```typescript
export default defineConfig({
  presets: [
    presetUno({
      dark: false, // Disable ถ้าไม่ใช้
    }),
  ],
})
```

### 5. Monitor Performance

Monitor CSS size และ build time

```typescript
// Monitor build output
// Monitor CSS size
```

## Performance Comparison

### vs Tailwind CSS

| Metric | UnoCSS | Tailwind CSS |
|--------|--------|--------------|
| CSS Size | Smaller | Larger |
| Build Time | Faster | Slower |
| HMR Speed | Faster | Slower |
| Memory Usage | Lower | Higher |
| Runtime | Zero | Zero |

### vs Styled Components

| Metric | UnoCSS | Styled Components |
|--------|--------|------------------|
| CSS Size | Smaller | Larger |
| Build Time | Faster | Slower |
| Runtime | Zero | Runtime overhead |
| Memory Usage | Lower | Higher |

### vs CSS Modules

| Metric | UnoCSS | CSS Modules |
|--------|--------|------------|
| CSS Size | Smaller | Larger |
| Build Time | Faster | Slower |
| Runtime | Zero | Zero |
| Memory Usage | Lower | Higher |

## Performance Tips

### 1. Use CDN for Development

ใช้ CDN สำหรับ development ที่เร็ว

```html
<script src="https://cdn.jsdelivr.net/bun/@unocss/runtime"></script>
```

### 2. Enable Minification

Enable minification ใน production

```typescript
export default defineConfig({
  minify: true,
})
```

### 3. Use Production Build

ใช้ production build สำหรับ deployment

```bash
bun run build
```

### 4. Optimize Assets

Optimize assets ร่วมกับ UnoCSS

```typescript
// Optimize images, fonts, etc.
// ร่วมกับ UnoCSS optimization
```

## Conclusion

UnoCSS มี performance ดีกว่า alternatives เพราะ:
- On-demand generation
- Build-time optimization
- Zero runtime overhead
- Efficient CSS parsing

ใช้ best practices เพื่อ maximize performance
