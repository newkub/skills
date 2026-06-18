# Preset Tagify

## ภาพรวม

`preset-tagify` คือ preset ที่ใช้ HTML tags เป็น utility classes ช่วยให้เขียน CSS แบบ semantic และ readable มากขึ้น

## การติดตั้ง

```bash
bun add -D @unocss/preset-tagify
```

## การตั้งค่า

```typescript
import { defineConfig } from 'unocss'
import { presetTagify } from '@unocss/preset-tagify'

export default defineConfig({
  presets: [
    presetTagify(),
  ],
})
```

## การใช้งาน

### Basic Usage

ใช้ HTML tags แทน utility classes:

```html
<!-- แบบเดิม -->
<div class="flex items-center justify-center">
  <div class="text-xl font-bold">Title</div>
</div>

<!-- ด้วย preset-tagify -->
<flex items-center justify-center>
  <text-xl font-bold>Title</text-xl>
</flex>
```

### Layout Tags

```html
<!-- Flexbox -->
<flex justify-between items-center>
  <text>Left</text>
  <text>Right</text>
</flex>

<!-- Grid -->
<grid grid-cols-3 gap-4>
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</grid>

<!-- Container -->
<container max-w-7xl mx-auto px-4>
  <text>Content</text>
</container>
```

### Typography Tags

```html
<!-- Headings -->
<h1 text-4xl font-bold>Title</h1>
<h2 text-3xl font-semibold>Subtitle</h2>
<h3 text-2xl font-medium>Section</h3>

<!-- Text -->
<text text-lg>Paragraph</text>
<text text-sm>Small text</text>
<text text-xs>Extra small</text>

<!-- Links -->
<a text-blue-500 hover:text-blue-600 href="#">Link</a>
```

### Component Tags

```html
<!-- Button -->
<button px-4 py-2 bg-blue-500 text-white rounded>
  Click me
</button>

<!-- Card -->
<card p-4 border rounded-lg shadow-sm>
  <card-header mb-4>
    <h2 text-xl font-bold>Title</h2>
  </card-header>
  <card-body text-gray-600>
    Content
  </card-body>
</card>

<!-- Input -->
<input px-3 py-2 border rounded type="text" />
```

## Configuration Options

```typescript
import { presetTagify } from '@unocss/preset-tagify'

export default defineConfig({
  presets: [
    presetTagify({
      // Custom prefix
      prefix: 'u-',
      
      // Extra tags
      extraTags: {
        'my-component': 'div',
      },
      
      // Tag aliases
      aliases: {
        'btn': 'button',
        'link': 'a',
      },
    }),
  ],
})
```

## Custom Tags

สร้าง custom tags

```typescript
export default defineConfig({
  presets: [
    presetTagify({
      extraTags: {
        'navbar': 'nav',
        'sidebar': 'aside',
        'footer': 'footer',
        'header': 'header',
      },
    }),
  ],
})
```

```html
<navbar bg-white border-b>
  <logo text-xl font-bold>Brand</logo>
</navbar>

<sidebar w-64 border-r>
  <menu>
    <item>Home</item>
    <item>About</item>
  </menu>
</sidebar>

<footer bg-gray-100 p-4>
  <text text-center>© 2024</text>
</footer>
```

## Tag Aliases

กำหนด aliases สำหรับ tags

```typescript
export default defineConfig({
  presets: [
    presetTagify({
      aliases: {
        'btn': 'button',
        'link': 'a',
        'img': 'img',
        'video': 'video',
      },
    }),
  ],
})
```

```html
<btn px-4 py-2 bg-blue-500 text-white rounded>
  Button
</btn>

<link text-blue-500 href="#">Link</link>

<img w-full h-auto src="image.jpg" />
```

## Tag Prefix

ใช้ prefix สำหรับ tags

```typescript
export default defineConfig({
  presets: [
    presetTagify({
      prefix: 'u-',
    }),
  ],
})
```

```html
<u-flex justify-between>
  <u-text>Left</u-text>
  <u-text>Right</u-text>
</u-flex>
```

## Tag กับ Variants

ใช้ variants กับ tags

```html
<flex hover:bg-gray-100 focus:ring-2>
  <text hover:text-red focus:text-blue>
    Text
  </text>
</flex>
```

## Tag กับ Shortcuts

ใช้ shortcuts กับ tags

```typescript
export default defineConfig({
  shortcuts: {
    'btn-primary': 'px-4 py-2 bg-blue-500 text-white rounded',
  },
  presets: [
    presetTagify(),
  ],
})
```

```html
<button btn-primary>
  Button
</button>
```

## Tag กับ Icons

ใช้ icons กับ tags

```html
<icon i-carbon-home text-2xl />
<icon i-mdi-account text-xl />
```

## Performance Considerations

1. **Minimal tags** - ใช้ tags เฉพาะที่จำเป็น
2. **Semantic HTML** - ใช้ semantic tags เมื่อเป็นไปได้
3. **Avoid nesting** - หลีกเลี่ยง nesting ลึกเกินไป
4. **Bundle size** - tags หลายตัวอาจเพิ่ม bundle size

## Best Practices

1. **Use semantic tags** - ใช้ semantic tags เมื่อเป็นไปได้
2. **Consistent naming** - ตั้งชื่อ tags ให้ consistent
3. **Document tags** - document custom tags
4. **Test accessibility** - test accessibility ของ tags
5. **Fallback to classes** - ใช้ classes เมื่อ tags ไม่เหมาะสม

## Common Patterns

### Navigation

```html
<navbar bg-white border-b p-4>
  <logo text-xl font-bold>Brand</logo>
  <menu flex gap-4>
    <item text-blue-500>Home</item>
    <item hover:text-blue-600>About</item>
    <item hover:text-blue-600>Contact</item>
  </menu>
</navbar>
```

### Layout

```html
<container max-w-7xl mx-auto px-4>
  <header mb-8>
    <h1 text-4xl font-bold>Title</h1>
  </header>
  <main>
    <content>
      <text text-lg>Content</text>
    </content>
  </main>
  <footer mt-8>
    <text text-center>© 2024</text>
  </footer>
</container>
```

### Card

```html
<card p-4 border rounded-lg shadow-sm>
  <card-header mb-4>
    <h2 text-xl font-bold>Title</h2>
    <text text-sm text-gray-500>Subtitle</text>
  </card-header>
  <card-body text-gray-600>
    <p>Content</p>
  </card-body>
  <card-footer mt-4 pt-4 border-t>
    <button px-4 py-2 bg-blue-500 text-white rounded>
      Action
    </button>
  </card-footer>
</card>
```

## Integration Examples

### Vite

```typescript
// vite.config.ts
import UnoCSS from 'unocss/vite'
import { presetTagify } from '@unocss/preset-tagify'

export default {
  plugins: [
    UnoCSS({
      presets: [presetTagify()],
    }),
  ],
}
```

### Nuxt

```typescript
// nuxt.config.ts
export default defineNuxtConfig({
  modules: ['@unocss/nuxt'],
  unocss: {
    presets: [
      presetTagify(),
    ],
  },
})
```

### Vue

```vue
<template>
  <flex justify-between items-center>
    <text>Left</text>
    <text>Right</text>
  </flex>
</template>
```

### React

```jsx
<flex justifyBetween itemsCenter>
  <text>Left</text>
  <text>Right</text>
</flex>
```

## Troubleshooting

### Tags ไม่ทำงาน

ตรวจสอบว่า preset-tagify ถูกเปิด:

```typescript
export default defineConfig({
  presets: [
    presetTagify(),
  ],
})
```

### Custom tags ไม่ทำงาน

ตรวจสอบว่า extraTags ถูกกำหนด:

```typescript
export default defineConfig({
  presets: [
    presetTagify({
      extraTags: {
        'my-tag': 'div',
      },
    }),
  ],
})
```

## Alternatives

### ใช้ Attributify Mode

```html
<div flex justify-between items-center>
  <text>Left</text>
  <text>Right</text>
</div>
```

### ใช้ Regular Classes

```html
<div class="flex justify-between items-center">
  <div class="text">Left</div>
  <div class="text">Right</div>
</div>
```

## Resources

- [UnoCSS Documentation](https://unocss.dev)
- [preset-tagify GitHub](https://github.com/unocss/unocss/tree/main/packages/presets/tagify)
