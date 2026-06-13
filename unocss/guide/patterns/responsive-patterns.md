# Responsive Patterns

## Mobile-First Pattern

ใช้ mobile-first approach

```html
<!-- Mobile first -->
<div class="p-4 md:p-8 lg:p-12">
  Content
</div>
```

## Breakpoint Pattern

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
