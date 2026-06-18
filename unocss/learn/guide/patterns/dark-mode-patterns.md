# Dark Mode Patterns

## Dark Mode Toggle

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
