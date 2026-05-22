# Shortcuts

## Basic Shortcuts

```javascript
// uno.config.js
export default defineConfig({
  shortcuts: {
    'btn': 'px-4 py-2 rounded bg-blue-500 text-white',
    'btn-primary': 'btn bg-blue-600 hover:bg-blue-700',
    'card': 'p-4 border border-gray-200 rounded-lg shadow-sm',
    'flex-center': 'flex items-center justify-center'
  }
})
```

## Dynamic Shortcuts

```javascript
// ใช้ฟังก์ชันสำหรับ shortcuts แบบไดนามิก
export default defineConfig({
  shortcuts: [
    // สร้าง spacing shortcuts
    [/^m-(.+)$/, ([, d]) => ({ margin: `${d / 4}rem` })],
    [/^p-(.+)$/, ([, d]) => ({ padding: `${d / 4}rem` })]
  ]
})
```

## Theme-based Shortcuts

```javascript
export default defineConfig({
  theme: {
    colors: {
      primary: '#3b82f6',
      secondary: '#64748b'
    }
  },
  shortcuts: {
    'btn-primary': 'bg-primary text-white hover:bg-primary/80',
    'btn-secondary': 'bg-secondary text-white hover:bg-secondary/80'
  }
})
```
