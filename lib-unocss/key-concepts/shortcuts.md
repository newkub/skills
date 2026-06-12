# Shortcuts

## ภาพรวม

Shortcuts คือการกำหนด alias สำหรับ group ของ utilities ที่ใช้บ่อย ช่วยลดการเขียน class ซ้ำๆ

## Basic Shortcuts

กำหนด shortcut แบบง่าย

```typescript
export default defineConfig({
  shortcuts: {
    // Single shortcut
    'btn': 'px-4 py-2 bg-blue-500 text-white rounded',
    
    // Multiple shortcuts
    'card': 'p-4 bg-white rounded shadow',
    'input': 'px-3 py-2 border rounded',
  },
})
```

## การใช้งาน

ใช้ shortcut เหมือน class ปกติ

```html
<!-- แทนที่จะเขียนยาวๆ -->
<div class="px-4 py-2 bg-blue-500 text-white rounded">
  Button
</div>

<!-- ใช้ shortcut แทน -->
<div class="btn">
  Button
</div>
```

## Nested Shortcuts

Shortcuts สามารถอ้างอิง shortcuts อื่นได้

```typescript
export default defineConfig({
  shortcuts: {
    'btn': 'px-4 py-2 bg-blue-500 text-white rounded',
    'btn-primary': 'btn bg-blue-600',
    'btn-secondary': 'btn bg-gray-500',
  },
})
```

## Dynamic Shortcuts

ใช้ function สำหรับ generate shortcuts

```typescript
export default defineConfig({
  shortcuts: [
    // Generate shortcuts for colors
    ...['red', 'blue', 'green'].map((color) => [
      `btn-${color}`,
      `px-4 py-2 bg-${color}-500 text-white rounded`,
    ]),
  ],
})
```

## Shortcut with Variants

ใช้ variants กับ shortcuts

```typescript
export default defineConfig({
  shortcuts: {
    'btn': 'px-4 py-2 bg-blue-500 text-white rounded',
  },
  // Variants จะ apply หลังจาก shortcuts
})
```

```html
<!-- Hover variant -->
<div class="hover:btn">
  Hover Button
</div>
```

## Shortcut Layers

กำหนด layer สำหรับ shortcuts

```typescript
export default defineConfig({
  shortcuts: [
    ['btn', 'px-4 py-2 bg-blue-500 text-white rounded', { layer: 'shortcuts' }],
  ],
})
```

## Shortcut vs Rules

| Feature | Shortcuts | Rules |
|---------|-----------|-------|
| Purpose | Group utilities | Define CSS |
| Expansion | Expand to utilities | Generate CSS |
| Variants | Apply after expansion | Apply before generation |
| Performance | Faster (no generation) | Slower (needs generation) |

## 何时使用 Shortcuts

ใช้ shortcuts เมื่อ:
- มี group ของ utilities ที่ใช้บ่อย
- ต้องการ maintain consistency
- ต้องการ reduce CSS size
- ต้องการ semantic naming

## 何时使用 Rules

ใช้ rules เมื่อ:
- ต้องการ custom CSS
- ต้องการ dynamic values
- ต้องการ complex logic
- ต้องการ performance optimization

## Common Patterns

### Button System

```typescript
export default defineConfig({
  shortcuts: {
    'btn': 'px-4 py-2 rounded font-medium transition-colors',
    'btn-sm': 'px-3 py-1.5 text-sm rounded',
    'btn-lg': 'px-6 py-3 text-lg rounded',
    'btn-primary': 'btn bg-blue-500 text-white hover:bg-blue-600',
    'btn-secondary': 'btn bg-gray-200 text-gray-900 hover:bg-gray-300',
    'btn-danger': 'btn bg-red-500 text-white hover:bg-red-600',
  },
})
```

### Card System

```typescript
export default defineConfig({
  shortcuts: {
    'card': 'p-4 bg-white rounded-lg shadow',
    'card-hover': 'card hover:shadow-lg transition-shadow',
    'card-compact': 'card p-2',
  },
})
```

### Form System

```typescript
export default defineConfig({
  shortcuts: {
    'input': 'px-3 py-2 border rounded focus:ring-2 focus:ring-blue-500',
    'input-error': 'input border-red-500 focus:ring-red-500',
    'label': 'block text-sm font-medium text-gray-700 mb-1',
  },
})
```

### Layout System

```typescript
export default defineConfig({
  shortcuts: {
    'container': 'mx-auto px-4 max-w-7xl',
    'flex-center': 'flex items-center justify-center',
    'flex-between': 'flex items-center justify-between',
    'grid-auto': 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4',
  },
})
```

## Shortcut with CSS Variables

ใช้ CSS variables ใน shortcuts

```typescript
export default defineConfig({
  shortcuts: {
    'btn': 'px-4 py-2 rounded text-white',
    'btn-primary': 'btn bg-primary hover:bg-primary-dark',
  },
  theme: {
    colors: {
      primary: 'var(--color-primary)',
      'primary-dark': 'var(--color-primary-dark)',
    },
  },
})
```

## Shortcut Inspection

ตรวจสอบ shortcuts ที่ถูก expand

```typescript
// In dev mode, UnoCSS จะแสดง shortcuts ที่ถูก expand
// ใช้ UnoCSS Inspector ใน browser devtools
```

## Best Practices

1. **Semantic naming** - ใช้ชื่อที่สื่อความหมาย
2. **Consistent patterns** - ใช้ naming convention ที่ consistent
3. **Avoid overuse** - ไม่ควรสร้าง shortcuts เกินไป
4. **Document usage** - document shortcuts ที่สำคัญ
5. **Review regularly** - review และ remove shortcuts ที่ไม่ได้ใช้

## Performance

Shortcuts มี performance ดีกว่า rules เพราะ:
- ไม่ต้อง generate CSS
- เพียงแค่ expand utilities
- Browser สามารถ cache ได้ดีขึ้น

## Migration from Tailwind

ถ้า migrate จาก Tailwind:

```typescript
// Tailwind @apply
.btn {
  @apply px-4 py-2 bg-blue-500 text-white rounded;
}

// UnoCSS shortcuts
export default defineConfig({
  shortcuts: {
    'btn': 'px-4 py-2 bg-blue-500 text-white rounded',
  },
})
```
