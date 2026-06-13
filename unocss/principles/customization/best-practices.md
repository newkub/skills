# Best Practices

## 1. Start Simple

เริ่มด้วย customizations ง่ายๆ ก่อน

```typescript
export default defineConfig({
  theme: {
    colors: {
      primary: '#3b82f6',
    },
  },
})
```

## 2. Document Customizations

Document customizations ทั้งหมด

```typescript
/**
 * UnoCSS Configuration
 * 
 * Customizations:
 * - Brand colors
 * - Custom spacing scale
 * - Component shortcuts
 */
export default defineConfig({
  // ...
})
```

## 3. Use Semantic Names

ใช้ semantic names สำหรับ customizations

```typescript
export default defineConfig({
  shortcuts: {
    'btn-primary': 'px-4 py-2 bg-blue-500 text-white rounded',
  },
})
```

## 4. Test Customizations

Test customizations อย่างละเอียด

```typescript
// Test custom rules
// Test custom shortcuts
// Test custom theme
```

## 5. Review Regularly

Review customizations อย่างสม่ำเสมอ

```typescript
// Review unused customizations
// Remove unnecessary customizations
// Optimize performance
```
