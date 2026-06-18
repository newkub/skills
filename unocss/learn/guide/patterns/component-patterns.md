# Component Patterns

## ภาพรวม

Component patterns ที่ใช้บ่อยใน UnoCSS สำหรับสร้าง UI components

## Button Pattern

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

## Card Pattern

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

## Form Pattern

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
