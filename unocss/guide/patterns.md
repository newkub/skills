# Common Patterns

## ภาพรวม

Patterns ที่ใช้บ่อยใน UnoCSS สำหรับ solve common problems

## Component Patterns

### Button Pattern

สร้าง button system ด้วย shortcuts

```typescript
export default defineConfig({
  shortcuts: {
    'btn': 'px-4 py-2 rounded font-medium transition-colors',
    'btn-sm': 'px-3 py-1.5 text-sm rounded',
    'btn-lg': 'px-6 py-3 text-lg rounded',
    'btn-primary': 'btn bg-blue-500 text-white hover:bg-blue-600',
    'btn-secondary': 'btn bg-gray-200 text-gray-900 hover:bg-gray-300',
    'btn-danger': 'btn bg-red-500 text-white hover:bg-red-600',
    'btn-outline': 'btn border-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white',
  },
})
```

```html
<button class="btn btn-primary">Primary Button</button>
<button class="btn btn-secondary">Secondary Button</button>
<button class="btn btn-sm">Small Button</button>
```

### Card Pattern

สร้าง card system ด้วย shortcuts

```typescript
export default defineConfig({
  shortcuts: {
    'card': 'p-4 bg-white rounded-lg shadow',
    'card-hover': 'card hover:shadow-lg transition-shadow',
    'card-compact': 'card p-2',
    'card-bordered': 'card border-2',
  },
})
```

```html
<div class="card">
  <h2 class="text-xl font-bold mb-2">Title</h2>
  <p class="text-gray-600">Content</p>
</div>
```

### Form Pattern

สร้าง form system ด้วย shortcuts

```typescript
export default defineConfig({
  shortcuts: {
    'input': 'px-3 py-2 border rounded focus:ring-2 focus:ring-blue-500',
    'input-error': 'input border-red-500 focus:ring-red-500',
    'label': 'block text-sm font-medium text-gray-700 mb-1',
    'form-group': 'mb-4',
  },
})
```

```html
<div class="form-group">
  <label class="label">Email</label>
  <input type="email" class="input" placeholder="Enter email" />
</div>
```

## Layout Patterns

### Container Pattern

สร้าง container system

```typescript
export default defineConfig({
  shortcuts: {
    'container': 'mx-auto px-4 max-w-7xl',
    'container-sm': 'mx-auto px-4 max-w-3xl',
    'container-lg': 'mx-auto px-4 max-w-5xl',
  },
})
```

```html
<div class="container">
  <h1>Content</h1>
</div>
```

### Flex Pattern

สร้าง flex utilities

```typescript
export default defineConfig({
  shortcuts: {
    'flex-center': 'flex items-center justify-center',
    'flex-between': 'flex items-center justify-between',
    'flex-col': 'flex flex-col',
    'flex-col-center': 'flex flex-col items-center justify-center',
  },
})
```

```html
<div class="flex-between">
  <div>Left</div>
  <div>Right</div>
</div>
```

### Grid Pattern

สร้าง grid utilities

```typescript
export default defineConfig({
  shortcuts: {
    'grid-auto': 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4',
    'grid-2': 'grid grid-cols-2 gap-4',
    'grid-3': 'grid grid-cols-3 gap-4',
    'grid-4': 'grid grid-cols-4 gap-4',
  },
})
```

```html
<div class="grid-auto">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</div>
```

## Typography Patterns

### Heading Pattern

สร้าง heading system

```typescript
export default defineConfig({
  shortcuts: {
    'text-heading': 'text-2xl font-bold text-gray-900',
    'text-subheading': 'text-xl font-semibold text-gray-800',
    'text-body': 'text-base text-gray-600',
    'text-caption': 'text-sm text-gray-500',
  },
})
```

```html
<h1 class="text-heading">Heading</h1>
<p class="text-body">Body text</p>
```

### Link Pattern

สร้าง link system

```typescript
export default defineConfig({
  shortcuts: {
    'link': 'text-blue-500 hover:text-blue-700 underline',
    'link-no-underline': 'text-blue-500 hover:text-blue-700',
  },
})
```

```html
<a href="#" class="link">Link</a>
```

## Responsive Patterns

### Mobile-First Pattern

ใช้ mobile-first approach

```html
<!-- Mobile first -->
<div class="p-4 md:p-8 lg:p-12">
  Content
</div>
```

### Breakpoint Pattern

ใช้ breakpoints อย่าง consistent

```typescript
export default defineConfig({
  theme: {
    breakpoints: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
    },
  },
})
```

```html
<div class="p-4 md:p-8 lg:p-12 xl:p-16">
  Content
</div>
```

## State Patterns

### Hover Pattern

ใช้ hover states

```html
<button class="bg-blue-500 hover:bg-blue-600 text-white">
  Button
</button>
```

### Focus Pattern

ใช้ focus states

```html
<input class="border focus:ring-2 focus:ring-blue-500" />
```

### Active Pattern

ใช้ active states

```html
<button class="bg-blue-500 active:bg-blue-700 text-white">
  Button
</button>
```

## Dark Mode Patterns

### Dark Mode Toggle

สร้าง dark mode toggle

```typescript
export default defineConfig({
  darkMode: 'class',
  theme: {
    colors: {
      primary: '#3b82f6',
      dark: {
        primary: '#60a5fa',
      },
    },
  },
})
```

```html
<div class="bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
  Content
</div>
```

## Animation Patterns

### Fade Pattern

สร้าง fade animation

```typescript
export default defineConfig({
  shortcuts: {
    'fade-in': 'animate-fade-in',
    'fade-out': 'animate-fade-out',
  },
  theme: {
    animation: {
      'fade-in': 'fadeIn 0.3s ease-in',
      'fade-out': 'fadeOut 0.3s ease-out',
    },
    keyframes: {
      fadeIn: {
        '0%': { opacity: '0' },
        '100%': { opacity: '1' },
      },
      fadeOut: {
        '0%': { opacity: '1' },
        '100%': { opacity: '0' },
      },
    },
  },
})
```

```html
<div class="fade-in">
  Content
</div>
```

## Utility Patterns

### Spacing Pattern

ใช้ spacing utilities อย่าง consistent

```html
<div class="m-4 p-4">
  <div class="mb-2">Child</div>
</div>
```

### Color Pattern

ใช้ color utilities อย่าง consistent

```html
<div class="text-red-500 bg-blue-500 border-green-500">
  Content
</div>
```

## Best Practices

### 1. Use Shortcuts for Reuse

ใช้ shortcuts สำหรับ patterns ที่ใช้บ่อย

```typescript
export default defineConfig({
  shortcuts: {
    'btn': 'px-4 py-2 bg-blue-500 text-white rounded',
  },
})
```

### 2. Use Theme for Consistency

ใช้ theme สำหรับ consistent values

```typescript
export default defineConfig({
  theme: {
    colors: {
      primary: '#3b82f6',
    },
  },
})
```

### 3. Use Variants for States

ใช้ variants สำหรับ states

```html
<button class="bg-blue-500 hover:bg-blue-600">
  Button
</button>
```

### 4. Document Patterns

Document patterns ที่ใช้บ่อย

```markdown
# Component Patterns

## Button
- btn: Base button
- btn-primary: Primary button
- btn-secondary: Secondary button
```

### 5. Test Patterns

Test patterns อย่างละเอียด

```typescript
// Test button pattern
describe('Button Pattern', () => {
  it('should render correctly', async () => {
    // ...
  })
})
```

## Conclusion

Common patterns ใน UnoCSS:
- Component patterns (button, card, form)
- Layout patterns (container, flex, grid)
- Typography patterns (heading, link)
- Responsive patterns (mobile-first, breakpoints)
- State patterns (hover, focus, active)
- Dark mode patterns
- Animation patterns

ใช้ patterns เหล่านี้สำหรับ consistent และ maintainable code
