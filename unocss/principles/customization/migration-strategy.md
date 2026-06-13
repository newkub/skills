# Migration Strategy

## From Tailwind

Migrate customizations จาก Tailwind

```typescript
// Tailwind theme.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        brand: '#8b5cf6',
      },
    },
  },
}

// UnoCSS uno.config.ts
export default defineConfig({
  theme: {
    colors: {
      brand: '#8b5cf6',
    },
  },
})
```

## From Styled Components

Migrate customizations จาก Styled Components

```jsx
// Styled Components
const Button = styled.button`
  padding: 1rem;
  background: blue;
  color: white;
  border-radius: 0.5rem;
`;

// UnoCSS
export default defineConfig({
  shortcuts: {
    'btn': 'px-4 py-2 bg-blue-500 text-white rounded',
  },
})
```
