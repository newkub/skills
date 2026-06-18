# Preset Typography

## ภาพรวม

`preset-typography` คือ preset ที่ provide prose utilities สำหรับ styling content เช่น articles, blog posts, documentation ให้มี typography ที่สวยงามและ readable

## การติดตั้ง

```bash
bun add -D @unocss/preset-typography
```

## การตั้งค่า

```typescript
import { defineConfig } from 'unocss'
import { presetTypography } from '@unocss/preset-typography'

export default defineConfig({
  presets: [
    presetTypography(),
  ],
})
```

## การใช้งาน

### Basic Usage

ใช้ `prose` class สำหรับ content containers:

```html
<article class="prose">
  <h1>Article Title</h1>
  <p>This is a paragraph with proper typography.</p>
  <ul>
    <li>List item 1</li>
    <li>List item 2</li>
  </ul>
</article>
```

### Prose Variants

ใช้ prose variants สำหรับ different sizes:

```html
<!-- Small prose -->
<article class="prose-sm">
  <h1>Small Article</h1>
  <p>Content with smaller typography.</p>
</article>

<!-- Default prose -->
<article class="prose">
  <h1>Default Article</h1>
  <p>Content with default typography.</p>
</article>

<!-- Large prose -->
<article class="prose-lg">
  <h1>Large Article</h1>
  <p>Content with larger typography.</p>
</article>

<!-- Extra large prose -->
<article class="prose-xl">
  <h1>Extra Large Article</h1>
  <p>Content with extra large typography.</p>
</article>
```

### Prose Colors

ใช้ prose color variants:

```html
<!-- Default (slate) -->
<article class="prose">
  <h1>Default Color</h1>
</article>

<!-- Red -->
<article class="prose prose-red">
  <h1>Red Color</h1>
</article>

<!-- Blue -->
<article class="prose prose-blue">
  <h1>Blue Color</h1>
</article>

<!-- Green -->
<article class="prose prose-green">
  <h1>Green Color</h1>
</article>

<!-- Yellow -->
<article class="prose prose-yellow">
  <h1>Yellow Color</h1>
</article>
```

## Configuration Options

```typescript
import { presetTypography } from '@unocss/preset-typography'

export default defineConfig({
  presets: [
    presetTypography({
      // Custom selector
      selector: '.prose',
      
      // Custom theme
      theme: {
        colors: {
          primary: '#3b82f6',
        },
      },
    }),
  ],
})
```

### Custom Selector

กำหนด custom selector:

```typescript
export default defineConfig({
  presets: [
    presetTypography({
      selector: '.article-content',
    }),
  ],
})
```

```html
<article class="article-content">
  <h1>Article Title</h1>
  <p>Content</p>
</article>
```

### Custom Theme

กำหนด custom theme:

```typescript
export default defineConfig({
  presets: [
    presetTypography({
      theme: {
        colors: {
          primary: '#3b82f6',
          secondary: '#10b981',
        },
        fontSize: {
          h1: '2.5rem',
          h2: '2rem',
          h3: '1.5rem',
        },
      },
    }),
  ],
})
```

## Typography Elements

### Headings

```html
<article class="prose">
  <h1>Heading 1</h1>
  <h2>Heading 2</h2>
  <h3>Heading 3</h3>
  <h4>Heading 4</h4>
  <h5>Heading 5</h5>
  <h6>Heading 6</h6>
</article>
```

### Paragraphs

```html
<article class="prose">
  <p>This is a paragraph with proper line-height and spacing.</p>
  <p>Another paragraph with consistent typography.</p>
</article>
```

### Lists

```html
<article class="prose">
  <!-- Unordered list -->
  <ul>
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
  </ul>

  <!-- Ordered list -->
  <ol>
    <li>First item</li>
    <li>Second item</li>
    <li>Third item</li>
  </ol>
</article>
```

### Links

```html
<article class="prose">
  <a href="#">This is a link</a>
</article>
```

### Blockquotes

```html
<article class="prose">
  <blockquote>
    This is a blockquote with proper styling.
  </blockquote>
</article>
```

### Code

```html
<article class="prose">
  <!-- Inline code -->
  <p>This is <code>inline code</code>.</p>

  <!-- Code block -->
  <pre><code>const x = 1;</code></pre>
</article>
```

### Tables

```html
<article class="prose">
  <table>
    <thead>
      <tr>
        <th>Header 1</th>
        <th>Header 2</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Data 1</td>
        <td>Data 2</td>
      </tr>
    </tbody>
  </table>
</article>
```

### Images

```html
<article class="prose">
  <img src="image.jpg" alt="Description" />
</article>
```

### Horizontal Rules

```html
<article class="prose">
  <hr />
</article>
```

## Custom Typography Styles

### Override Default Styles

```typescript
export default defineConfig({
  presets: [
    presetTypography({
      theme: {
        // Override heading styles
        'h1': {
          'font-size': '2.5rem',
          'font-weight': 'bold',
          'line-height': '1.2',
          'margin-bottom': '1rem',
        },
        // Override paragraph styles
        'p': {
          'font-size': '1rem',
          'line-height': '1.75',
          'margin-bottom': '1.25rem',
        },
      },
    }),
  ],
})
```

### Custom Colors

```typescript
export default defineConfig({
  presets: [
    presetTypography({
      theme: {
        colors: {
          primary: '#3b82f6',
          secondary: '#64748b',
          accent: '#f59e0b',
        },
      },
    }),
  ],
})
```

## Prose กับ Dark Mode

ใช้ prose กับ dark mode:

```html
<article class="prose dark:prose-invert">
  <h1>Dark Mode Article</h1>
  <p>Content with dark mode typography.</p>
</article>
```

```typescript
export default defineConfig({
  darkMode: 'class',
  presets: [
    presetTypography(),
  ],
})
```

## Prose กับ Responsive Design

ใช้ prose กับ responsive variants:

```html
<article class="prose sm:prose-lg lg:prose-xl">
  <h1>Responsive Article</h1>
  <p>Content with responsive typography.</p>
</article>
```

## Performance Considerations

1. **Minimal usage** - ใช้ prose เฉพาะที่จำเป็น
2. **Custom theme** - custom theme อาจเพิ่ม bundle size
3. **Selector specificity** - ระวัง selector specificity
4. **Bundle size** - preset นี้มีขนาดปานกลาง

## Best Practices

1. **Use semantic HTML** - ใช้ semantic HTML elements
2. **Consistent sizing** - ใช้ prose sizes ที่ consistent
3. **Accessibility** - พิจารณา accessibility
4. **Test readability** - test readability บน devices ต่างๆ
5. **Document custom styles** - document custom typography styles

## Common Patterns

### Blog Post

```html
<article class="prose prose-lg max-w-none">
  <header class="mb-8">
    <h1 class="text-4xl font-bold mb-4">Blog Post Title</h1>
    <p class="text-gray-500">Published on January 1, 2024</p>
  </header>
  
  <p>Introduction paragraph...</p>
  
  <h2>Section Title</h2>
  <p>Content...</p>
  
  <blockquote>
    Quote...
  </blockquote>
  
  <h2>Another Section</h2>
  <p>More content...</p>
</article>
```

### Documentation

```html
<article class="prose prose-blue">
  <h1>Documentation Title</h1>
  
  <p>Introduction...</p>
  
  <h2>Getting Started</h2>
  <pre><code>bun install package</code></pre>
  
  <h2>Usage</h2>
  <p>Usage instructions...</p>
  
  <h2>API Reference</h2>
  <table>
    <thead>
      <tr>
        <th>Method</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>method()</td>
        <td>Description</td>
      </tr>
    </tbody>
  </table>
</article>
```

### README

```html
<article class="prose prose-sm">
  <h1>Project Name</h1>
  
  <p>Description...</p>
  
  <h2>Installation</h2>
  <pre><code>bun install</code></pre>
  
  <h2>Usage</h2>
  <p>Usage instructions...</p>
  
  <h2>Contributing</h2>
  <p>Contributing guidelines...</p>
</article>
```

## Integration Examples

### Vite

```typescript
// vite.config.ts
import UnoCSS from 'unocss/vite'
import { presetTypography } from '@unocss/preset-typography'

export default {
  plugins: [
    UnoCSS({
      presets: [presetTypography()],
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
      presetTypography(),
    ],
  },
})
```

### Astro

```typescript
// astro.config.mjs
import UnoCSS from 'unocss/astro'
import { presetTypography } from '@unocss/preset-typography'

export default {
  integrations: [
    UnoCSS({
      presets: [presetTypography()],
    }),
  ],
})
```

## Troubleshooting

### Prose ไม่ทำงาน

ตรวจสอบว่า preset-typography ถูกเปิด:

```typescript
export default defineConfig({
  presets: [
    presetTypography(),
  ],
})
```

### Custom styles ไม่ถูก apply

ตรวจสอบว่า selector ถูกต้อง:

```typescript
export default defineConfig({
  presets: [
    presetTypography({
      selector: '.prose',
    }),
  ],
})
```

### Colors ไม่ถูกต้อง

ตรวจสอบ theme configuration:

```typescript
export default defineConfig({
  presets: [
    presetTypography({
      theme: {
        colors: {
          primary: '#3b82f6',
        },
      },
    }),
  ],
})
```

## Alternatives

### ใช้ Custom CSS

```css
.article-content {
  font-family: sans-serif;
  line-height: 1.75;
}

.article-content h1 {
  font-size: 2.5rem;
  font-weight: bold;
}
```

### ใช้ Other Typography Libraries

- [Typography.js](https://github.com/bradley/typography.js)
- [Tailwind Typography](https://github.com/tailwindlabs/tailwindcss-typography)

## Resources

- [UnoCSS Documentation](https://unocss.dev)
- [preset-typography GitHub](https://github.com/unocss/unocss/tree/main/packages/presets/typography)
