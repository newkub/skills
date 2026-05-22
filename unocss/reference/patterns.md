# Patterns

## Layout Patterns

```html
<!-- Center Container -->
<div class="container mx-auto px-4">
  <div class="max-w-4xl mx-auto">
    Content
  </div>
</div>

<!-- Sidebar Layout -->
<div class="flex min-h-screen">
  <aside class="w-64 bg-gray-100">
    Sidebar
  </aside>
  <main class="flex-1 p-6">
    Main content
  </main>
</div>

<!-- Grid Layout -->
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  <div class="card">Item 1</div>
  <div class="card">Item 2</div>
  <div class="card">Item 3</div>
</div>
```

## Component Patterns

```html
<!-- Card Component -->
<div class="bg-white rounded-lg shadow-md p-6 border border-gray-200">
  <div class="flex items-center justify-between mb-4">
    <h3 class="text-lg font-semibold text-gray-900">Card Title</h3>
    <span class="text-sm text-gray-500">Badge</span>
  </div>
  <p class="text-gray-600">Card content goes here.</p>
</div>

<!-- Button Variants -->
<button class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
  Primary Button
</button>

<button class="px-4 py-2 border border-gray-300 text-gray-700 rounded hover:bg-gray-50">
  Secondary Button
</button>
```

## Form Patterns

```html
<div class="space-y-4">
  <div>
    <label class="block text-sm font-medium text-gray-700 mb-1">
      Email
    </label>
    <input type="email" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" />
  </div>

  <div>
    <label class="block text-sm font-medium text-gray-700 mb-1">
      Message
    </label>
    <textarea class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" rows="4"></textarea>
  </div>
</div>
```
