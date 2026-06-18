# Animation Patterns

## Fade Pattern

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
