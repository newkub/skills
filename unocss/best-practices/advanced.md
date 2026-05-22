# Advanced

## 1. Custom Transformers

สร้าง custom transformers สำหรับ CSS transformations:

```javascript
// uno.config.js
export default defineConfig({
  transformers: [
    transformerDirectives(),
    transformerVariantGroup(),
    transformerCompileClass() // custom transformer
  ]
})
```

## 2. Dynamic Classes

จัดการ dynamic classes อย่างปลอดภัย:

```javascript
export default defineConfig({
  safelist: [
    'dynamic-class-1',
    'dynamic-class-2'
  ]
})
```

## 3. Performance Optimization

ปรับปรุง performance ของ UnoCSS:

- ใช้ caching
- จำกัด scan scope
- ปรับแต่ง build process

## 4. Integration Patterns

ผสาน UnoCSS กับระบบอื่น:

- CSS-in-JS libraries
- Design systems
- Component libraries
- Build tools

## 5. Testing Strategy

ทดสอบ UnoCSS output:

- Visual regression testing
- CSS unit testing
- Integration testing
