# Variants

## ภาพรวม

Variants คือ modifiers ที่เปลี่ยน behavior ของ utility classes เช่น pseudo-classes (`:hover`), media queries (`@media`), และ custom variants

## Built-in Variants

### Pseudo-class Variants

```html
<!-- Hover state -->
<div class="hover:text-red">Hover me</div>

<!-- Focus state -->
<input class="focus:ring-2" />

<!-- Active state -->
<button class="active:bg-blue-600">Click me</button>

<!-- Disabled state -->
<button class="disabled:opacity-50" disabled>Disabled</button>
```

### Media Query Variants

```html
<!-- Responsive variants -->
<div class="sm:text-sm md:text-base lg:text-lg">Responsive text</div>

<!-- Dark mode -->
<div class="dark:text-white">Dark mode text</div>

<!-- Print mode -->
<div class="print:hidden">Hidden when printing</div>
```

### State Variants

```html
<!-- Group hover -->
<div class="group">
  <div class="group-hover:text-red">Red on group hover</div>
</div>

<!-- Peer hover -->
<div class="peer">
  <div class="peer-hover:text-blue">Blue on peer hover</div>
</div>

<!-- Focus-within -->
<div class="focus-within:ring-2">
  <input type="text" />
</div>
```

## Variant Syntax

### Basic Syntax

```html
<!-- variant:utility -->
<div class="hover:text-red">Text</div>
```

### Multiple Variants

```html
<!-- Multiple variants -->
<div class="hover:text-red focus:text-blue active:text-green">
  Text
</div>
```

### Variant Groups

```html
<!-- Group variants with shorthand -->
<div class="hover:(bg-red text-white)">
  Hover me
</div>

<!-- Equivalent to -->
<div class="hover:bg-red hover:text-white">
  Hover me
</div>
```

## Custom Variants

สร้าง custom variants ใน config

```typescript
export default defineConfig({
  variants: [
    // Custom variant
    (matcher) => {
      if (!matcher.startsWith('custom:')) return matcher
      return {
        matcher: matcher.slice(7),
        selector: (s) => `[data-custom] ${s}`,
      }
    },
  ],
})
```

```html
<!-- Usage -->
<div data-custom class="custom:text-red">Text</div>
```

## Variant Options

### Variant Matcher

```typescript
export default defineConfig({
  variants: [
    (matcher) => {
      // matcher = ชื่อ utility class
      if (!matcher.startsWith('my-variant:')) return matcher
      
      // Return modified matcher
      return {
        matcher: matcher.slice(11),
        selector: (s) => `.my-variant ${s}`,
      }
    },
  ],
})
```

### Variant Selector

```typescript
export default defineConfig({
  variants: [
    (matcher) => {
      if (!matcher.startsWith('parent:')) return matcher
      
      return {
        matcher: matcher.slice(7),
        selector: (s) => `:has(> .child) ${s}`,
      }
    },
  ],
})
```

### Variant CSS

```typescript
export default defineConfig({
  variants: [
    (matcher) => {
      if (!matcher.startsWith('important:')) return matcher
      
      return {
        matcher: matcher.slice(10),
        // Add !important
        css: (css) => ({ ...css, important: true }),
      }
    },
  ],
})
```

## Common Custom Variants

### Scroll Variant

```typescript
export default defineConfig({
  variants: [
    (matcher) => {
      if (!matcher.startsWith('scroll:')) return matcher
      return {
        matcher: matcher.slice(7),
        selector: (s) => `:is(:hover, :focus) ${s}`,
      }
    },
  ],
})
```

### Not Variant

```typescript
export default defineConfig({
  variants: [
    (matcher) => {
      if (!matcher.startsWith('not-')) return matcher
      return {
        matcher: matcher.slice(4),
        selector: (s) => `:not(${s})`,
      }
    },
  ],
})
```

### Child Variant

```typescript
export default defineConfig({
  variants: [
    (matcher) => {
      if (!matcher.startsWith('child:')) return matcher
      return {
        matcher: matcher.slice(6),
        selector: (s) => `> ${s}`,
      }
    },
  ],
})
```

## Variant ใน Presets

Presets สามารถกำหนด variants ได้

```typescript
import { definePreset } from 'unocss'

const myPreset = definePreset(() => {
  return {
    name: 'my-preset',
    variants: [
      (matcher) => {
        if (!matcher.startsWith('custom:')) return matcher
        return {
          matcher: matcher.slice(7),
          selector: (s) => `[data-custom] ${s}`,
        }
      },
    ],
  }
})
```

## Variant Order

Variants ถูก apply ตามลำดับที่กำหนด

```typescript
export default defineConfig({
  variants: [
    // Execute ก่อน
    preVariant(),
    
    // Built-in variants
    // (hover, focus, active, etc.)
    
    // Execute หลัง
    postVariant(),
  ],
})
```

## Variant Stacking

Stack multiple variants

```html
<!-- Stacked variants -->
<div class="hover:focus:text-red">
  Text
</div>

<!-- Equivalent to -->
<div class="hover:focus:text-red">
  Text
</div>
```

## Variant กับ Dark Mode

```typescript
export default defineConfig({
  darkMode: 'class', // or 'media'
})
```

```html
<!-- Dark mode variant -->
<div class="dark:text-white">Dark mode text</div>
```

## Variant ก với Responsive Design

```html
<!-- Responsive variants -->
<div class="sm:text-sm md:text-base lg:text-lg xl:text-xl">
  Responsive text
</div>
```

## Variant กับ Print Styles

```html
<!-- Print variant -->
<div class="print:hidden">
  Hidden when printing
</div>

<div class="print:text-black">
  Black text when printing
</div>
```

## Performance Considerations

1. **Minimal variants** - ใช้ variants เฉพาะที่จำเป็น
2. **Order matters** - เรียงลำดับ variants ให้ถูกต้อง
3. **Specificity** - ระวัง specificity conflicts
4. **Bundle size** - variants หลายตัวอาจเพิ่ม bundle size

## Debugging Variants

```typescript
export default defineConfig({
  inspect: true,
})
```

ตรวจสอบ variant processing ที่ `http://localhost:3000/__uno`

## Best Practices

1. **Use built-in variants** - ใช้ built-in variants ก่อน custom
2. **Logical naming** - ตั้งชื่อ variants ให้ logical
3. **Document behavior** - document ว่า variant ทำอะไร
4. **Test thoroughly** - test variants อย่างละเอียด
5. **Avoid conflicts** - ตรวจสอบ conflicts ระหว่าง variants

## Common Patterns

### Button States

```html
<button class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:ring-2 active:bg-blue-700">
  Button
</button>
```

### Form Inputs

```html
<input class="px-3 py-2 border rounded focus:ring-2 focus:ring-blue-400 focus:border-transparent" />
```

### Card Components

```html
<div class="p-4 border rounded-lg shadow-sm hover:shadow-md transition-shadow">
  <h2 class="text-xl font-bold mb-2">Title</h2>
  <p class="text-gray-600">Content</p>
</div>
```

## Variant กับ CSS-in-JS

```typescript
// styled-components
const Button = styled.button`
  @apply px-4 py-2 bg-blue-500 text-white rounded;
  @apply hover:bg-blue-600;
  @apply focus:ring-2;
`
```

## Variant กับ Frameworks

### Vue

```vue
<template>
  <button class="hover:bg-blue-600 focus:ring-2">
    Click me
  </button>
</template>
```

### React

```jsx
<button className="hover:bg-blue-600 focus:ring-2">
  Click me
</button>
```

### Svelte

```svelte
<button class="hover:bg-blue-600 focus:ring-2">
  Click me
</button>
```

## Variant กับ Transformers

Variants ทำงานร่วมกับ transformers

```typescript
import { transformerVariantGroup } from 'unocss'

export default defineConfig({
  transformers: [
    transformerVariantGroup(),
  ],
})
```

```html
<!-- Variant group -->
<div class="hover:(bg-red text-white)">
  Hover me
</div>
```

## Community Variants

Variants ที่สร้างโดย community:

- `@unocss/preset-wind` - Tailwind variants
- `@unocss/preset-mini` - Minimal variants
- Custom variants จาก community presets
