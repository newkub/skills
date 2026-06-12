# Atomic First

## ภาพรวม

Atomic CSS principle คือการแยก CSS ออกเป็น utilities ขนาดเล็กๆ ที่ทำหน้าที่เดียว และ combine กันเพื่อสร้าง styles ที่ซับซ้อน

## Core Principles

### Single Responsibility

แต่ละ utility class ทำหน้าที่เดียว

```html
<!-- ✅ Good - Single responsibility -->
<div class="text-red font-bold p-4">
  Text
</div>

<!-- ❌ Bad - Multiple responsibilities -->
<div class="red-bold-padded">
  Text
</div>
```

### Composability

Combine utilities เพื่อสร้าง complex styles

```html
<!-- Combine multiple utilities -->
<div class="flex items-center justify-between p-4 bg-white rounded shadow">
  <div class="text-lg font-bold">Title</div>
  <button class="px-4 py-2 bg-blue-500 text-white rounded">Action</button>
</div>
```

### Predictability

Class names ควร predictable และ consistent

```html
<!-- Predictable naming -->
<div class="text-red-500 bg-blue-500 p-4 m-2">
  Content
</div>
```

## Benefits

### Maintainability

- เปลี่ยน style ได้ง่ายโดยแก้ class เดียว
- ไม่ต้องกังวลเรื่อง specificity
- ลด CSS conflicts

### Performance

- Generate CSS เฉพาะที่ใช้
- ลบ unused utilities ได้ง่าย
- CSS size เล็กลง

### Consistency

- Design system ที่ consistent
- Team members ใช้ utilities เดียวกัน
- ลบ inconsistencies ใน design

## Anti-Patterns

### Semantic Classes Overuse

```html
<!-- ❌ Bad - Too many semantic classes -->
<div class="card card-primary card-hover card-large">
  Content
</div>

<!-- ✅ Good - Use utilities directly -->
<div class="p-4 bg-white rounded shadow hover:shadow-lg">
  Content
</div>
```

### Inline Styles

```html
<!-- ❌ Bad - Inline styles -->
<div style="color: red; padding: 1rem;">
  Content
</div>

<!-- ✅ Good - Utility classes -->
<div class="text-red p-4">
  Content
</div>
```

### Custom CSS Files

```css
/* ❌ Bad - Custom CSS file */
.custom-button {
  padding: 1rem;
  background: blue;
  color: white;
  border-radius: 0.5rem;
}
```

```html
<!-- ✅ Good - Utility classes -->
<button class="px-4 py-2 bg-blue-500 text-white rounded">
  Button
</button>
```

## When to Break Rules

### Complex Components

สำหรับ components ที่ซับซ้อน ใช้ shortcuts

```typescript
export default defineConfig({
  shortcuts: {
    'btn': 'px-4 py-2 bg-blue-500 text-white rounded',
  },
})
```

```html
<button class="btn">Button</button>
```

### Reusable Patterns

สำหรับ patterns ที่ใช้บ่อย ใช้ shortcuts

```typescript
export default defineConfig({
  shortcuts: {
    'card': 'p-4 bg-white rounded shadow',
    'flex-center': 'flex items-center justify-center',
  },
})
```

## Best Practices

### 1. Use Utilities First

เริ่มด้วย utilities ก่อนเสมอ

```html
<div class="flex items-center justify-between p-4">
  Content
</div>
```

### 2. Use Shortcuts for Reuse

ใช้ shortcuts สำหรับ patterns ที่ใช้บ่อย

```typescript
export default defineConfig({
  shortcuts: {
    'btn-primary': 'px-4 py-2 bg-blue-500 text-white rounded',
  },
})
```

### 3. Avoid Custom CSS

หลีกเลี่ยง custom CSS ให้มากที่สุด

```css
/* ❌ Avoid */
.custom-style {
  /* ... */
}
```

### 4. Document Patterns

Document patterns ที่ใช้บ่อย

```typescript
export default defineConfig({
  shortcuts: {
    // Button patterns
    'btn': 'px-4 py-2 rounded font-medium transition-colors',
    'btn-primary': 'btn bg-blue-500 text-white hover:bg-blue-600',
    
    // Card patterns
    'card': 'p-4 bg-white rounded-lg shadow',
  },
})
```

### 5. Use Theme System

ใช้ theme system สำหรับ consistency

```typescript
export default defineConfig({
  theme: {
    colors: {
      primary: '#3b82f6',
      secondary: '#64748b',
    },
  },
})
```

## Migration Strategy

### From BEM

```css
/* BEM */
.card {}
.card__title {}
.card__content {}
.card--primary {}
```

```html
<!-- Atomic CSS -->
<div class="p-4 bg-white rounded shadow">
  <h2 class="text-xl font-bold mb-2">Title</h2>
  <p class="text-gray-600">Content</p>
</div>
```

### From CSS Modules

```css
/* CSS Modules */
.card {
  padding: 1rem;
  background: white;
  border-radius: 0.5rem;
}
```

```html
<!-- Atomic CSS -->
<div class="p-4 bg-white rounded">
  Content
</div>
```

### From Styled Components

```jsx
// Styled Components
const Card = styled.div`
  padding: 1rem;
  background: white;
  border-radius: 0.5rem;
`;
```

```jsx
// Atomic CSS
<div className="p-4 bg-white rounded">
  Content
</div>
```

## Performance Considerations

### CSS Generation

UnoCSS generate CSS เฉพาะที่ใช้

```typescript
// Only generate used utilities
// ไม่ generate utilities ที่ไม่ได้ใช้
```

### Purge CSS

Purge unused utilities ใน production

```typescript
export default defineConfig({
  // Auto-purge ใน production
  presets: [presetUno()],
})
```

### Cache

Cache generated CSS สำหรับ performance

```typescript
// Vite จะ cache อัตโนมัติ
// Dev server จะ regenerate เฉพาะที่เปลี่ยน
```

## Team Adoption

### Onboarding

1. **Start simple** - เริ่มด้วย utilities พื้นฐาน
2. **Document patterns** - document shortcuts และ patterns
3. **Code reviews** - review code สำหรับ consistency
4. **Training** - train team บน atomic CSS concepts

### Guidelines

สร้าง guidelines สำหรับ team

```markdown
# UnoCSS Guidelines

1. Use utilities ก่อนเสมอ
2. Use shortcuts สำหรับ patterns ที่ใช้บ่อย
3. Avoid custom CSS
4. Document new shortcuts
5. Follow naming conventions
```

## Common Pitfalls

### 1. Too Many Classes

```html
<!-- ❌ Bad - Too many classes -->
<div class="text-red-500 font-bold text-lg p-4 m-2 bg-white rounded shadow hover:shadow-lg transition-shadow">
  Content
</div>

<!-- ✅ Good - Use shortcuts -->
<div class="card text-red-500 font-bold text-lg">
  Content
</div>
```

### 2. Inconsistent Naming

```html
<!-- ❌ Bad - Inconsistent -->
<div class="text-red bg-blue p-4">
  Content
</div>

<!-- ✅ Good - Consistent -->
<div class="text-red-500 bg-blue-500 p-4">
  Content
</div>
```

### 3. Magic Numbers

```html
<!-- ❌ Bad - Magic numbers -->
<div class="p-[13.5px]">
  Content
</div>

<!-- ✅ Good - Use spacing scale -->
<div class="p-4">
  Content
</div>
```

## Conclusion

Atomic CSS principle ช่วยให้:
- Maintainability ดีขึ้น
- Performance ดีขึ้น
- Consistency ดีขึ้น
- Team collaboration ดีขึ้น

เริ่มด้วย utilities ก่อนเสมอ และใช้ shortcuts สำหรับ patterns ที่ใช้บ่อย
