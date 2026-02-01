# Theme Customization

## Color Theme
```javascript
// uno.config.js
export default defineConfig({
  theme: {
    colors: {
      primary: {
        50: '#eff6ff',
        500: '#3b82f6',
        900: '#1e3a8a'
      },
      brand: {
        DEFAULT: '#3b82f6',
        light: '#60a5fa',
        dark: '#1d4ed8'
      }
    }
  }
})
```

## Spacing Theme
```javascript
export default defineConfig({
  theme: {
    spacing: {
      'xs': '0.75rem',
      'sm': '0.875rem',
      'md': '1rem',
      'lg': '1.125rem',
      'xl': '1.25rem',
      '2xl': '1.5rem'
    }
  }
})
```

## Typography Theme
```javascript
export default defineConfig({
  theme: {
    fontFamily: {
      sans: ['Inter', 'system-ui', 'sans-serif'],
      mono: ['Fira Code', 'monospace']
    },
    fontSize: {
      'xs': ['0.75rem', { lineHeight: '1rem' }],
      'base': ['1rem', { lineHeight: '1.5rem' }],
      'xl': ['1.25rem', { lineHeight: '1.75rem' }]
    }
  }
})
```

## Breakpoints Theme
```javascript
export default defineConfig({
  theme: {
    breakpoints: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px'
    }
  }
})
```
