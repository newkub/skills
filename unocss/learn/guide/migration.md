# Migration Guide

## ภาพรวม

Guide สำหรับ migrate จาก CSS frameworks อื่นๆ มายัง UnoCSS

## From Tailwind CSS

### 1. Install UnoCSS

```bash
bun add -D unocss
```

### 2. Update Config

```typescript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        brand: '#8b5cf6',
      },
    },
  },
}

// uno.config.ts
export default defineConfig({
  theme: {
    colors: {
      brand: '#8b5cf6',
    },
  },
})
```

### 3. Update Presets

```typescript
// ใช้ presetWind สำหรับ Tailwind compatibility
import { presetWind } from 'unocss'

export default defineConfig({
  presets: [presetWind()],
})
```

### 4. Update Directives

```css
/* Tailwind */
@tailwind base;
@tailwind components;
@tailwind utilities;

/* UnoCSS */
@unocss;
```

### 5. Update Import

```typescript
// Tailwind
import 'tailwindcss/tailwind.css'

// UnoCSS
import 'virtual:uno.css'
```

## From Windi CSS

### 1. Install UnoCSS

```bash
bun add -D unocss
```

### 2. Update Config

```typescript
// windi.config.ts
export default {
  theme: {
    colors: {
      primary: '#3b82f6',
    },
  },
}

// uno.config.ts
export default defineConfig({
  theme: {
    colors: {
      primary: '#3b82f6',
    },
  },
})
```

### 3. Update Presets

```typescript
// Windi ใช้ presetUno โดย default
import { presetUno } from 'unocss'

export default defineConfig({
  presets: [presetUno()],
})
```

## From CSS Modules

### 1. Install UnoCSS

```bash
bun add -D unocss
```

### 2. Convert Classes

```css
/* CSS Modules */
.card {
  padding: 1rem;
  background: white;
  border-radius: 0.5rem;
}
```

```html
<!-- CSS Modules -->
<div class={styles.card}>
  Content
</div>

<!-- UnoCSS -->
<div class="p-4 bg-white rounded">
  Content
</div>
```

### 3. Remove CSS Files

ลบ CSS module files ที่ไม่จำเป็น

```bash
# Remove CSS module files
rm src/styles/*.module.css
```

## From Styled Components

### 1. Install UnoCSS

```bash
bun add -D unocss
```

### 2. Convert Components

```jsx
// Styled Components
const Button = styled.button`
  padding: 1rem;
  background: blue;
  color: white;
  border-radius: 0.5rem;
`;

// UnoCSS
<button className="px-4 py-2 bg-blue-500 text-white rounded">
  Button
</button>
```

### 3. Update Imports

```jsx
// Styled Components
import styled from 'styled-components'

// UnoCSS
import 'virtual:uno.css'
```

## From Emotion

### 1. Install UnoCSS

```bash
bun add -D unocss
```

### 2. Convert Styles

```jsx
// Emotion
const buttonStyle = css`
  padding: 1rem;
  background: blue;
  color: white;
`;

// UnoCSS
<button className="px-4 py-2 bg-blue-500 text-white">
  Button
</button>
```

## From BEM

### 1. Install UnoCSS

```bash
bun add -D unocss
```

### 2. Convert Classes

```css
/* BEM */
.card {}
.card__title {}
.card__content {}
.card--primary {}
```

```html
<!-- BEM -->
<div class="card card--primary">
  <h2 class="card__title">Title</h2>
  <p class="card__content">Content</p>
</div>

<!-- UnoCSS -->
<div class="p-4 bg-white rounded shadow bg-blue-500">
  <h2 class="text-xl font-bold mb-2">Title</h2>
  <p class="text-gray-600">Content</p>
</div>
```

## Migration Strategy

### Phase 1: Setup

1. Install UnoCSS
2. Setup configuration
3. Import CSS

### Phase 2: Convert Components

1. Convert component classes
2. Test each component
3. Fix issues

### Phase 3: Remove Old Code

1. Remove old CSS files
2. Remove old dependencies
3. Clean up imports

### Phase 4: Optimize

1. Optimize configuration
2. Add shortcuts
3. Performance tuning

## Common Issues

### 1. Missing Utilities

บาง utilities อาจไม่มีใน UnoCSS

**Solution:** Add custom rules

```typescript
export default defineConfig({
  rules: [
    ['missing-utility', { /* ... */ }],
  ],
})
```

### 2. Different Syntax

บาง syntax อาจต่างกัน

**Solution:** Check documentation และ adjust

### 3. Theme Differences

Theme อาจต่างกัน

**Solution:** Customize theme ใน UnoCSS

## Best Practices

### 1. Gradual Migration

Migrate ทีละ component

```typescript
// Migrate component by component
// Test แต่ละ component อย่างละเอียด
```

### 2. Keep Old Code

Keep old code จนกว่า migration เสร็จ

```css
/* Keep old CSS จนกว่า migration เสร็จ */
.old-component {
  /* ... */
}
```

### 3. Test Thoroughly

Test ทุก component หลัง migration

```bash
# Run tests
bun run test

# Run E2E tests
bun run test:e2e
```

### 4. Document Changes

Document migration changes

```markdown
# Migration Notes

## Changes
- Migrated from Tailwind to UnoCSS
- Updated configuration
- Converted components
```

## Rollback Strategy

ถ้า migration มีปัญหา:

```bash
# Rollback ไป version เดิม
git revert <commit-hash>

# หรือ restore backup
cp backup/ package.json package.json
```

## Conclusion

Migration ไปยัง UnoCSS:
- Install UnoCSS
- Update configuration
- Convert components
- Test thoroughly
- Remove old code

ใช้ gradual migration สำหรับ minimal disruption
