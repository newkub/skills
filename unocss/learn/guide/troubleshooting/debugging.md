# Debugging

## Enable Inspector

Enable inspector สำหรับ debugging

```typescript
export default defineConfig({
  inspector: true,
})
```

## Check CSS Output

ตรวจสอบ CSS output

```bash
# ตรวจสอบ generated CSS
cat dist/assets/*.css
```

## Check Configuration

ตรวจสอบ configuration

```typescript
// Log configuration
export default defineConfig({
  // ...
})

// ใช้ UnoCSS Inspector ใน browser
```
