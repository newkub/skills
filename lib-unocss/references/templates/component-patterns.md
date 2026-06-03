# Component Patterns

## Button Variants

```html
<!-- Primary Button -->
<button class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
  Primary
</button>

<!-- Secondary Button -->
<button class="px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300">
  Secondary
</button>

<!-- Outline Button -->
<button class="px-4 py-2 border border-blue-500 text-blue-500 rounded hover:bg-blue-50">
  Outline
</button>

<!-- Ghost Button -->
<button class="px-4 py-2 text-blue-500 rounded hover:bg-blue-50">
  Ghost
</button>
```

## Button Sizes

```html
<!-- Small -->
<button class="px-3 py-1 text-sm bg-blue-500 text-white rounded">

<!-- Medium (default) -->
<button class="px-4 py-2 bg-blue-500 text-white rounded">

<!-- Large -->
<button class="px-6 py-3 text-lg bg-blue-500 text-white rounded">
```

## Card Component

```html
<!-- Basic Card -->
<div class="bg-white rounded-lg shadow p-6">
  <h3 class="text-lg font-semibold text-gray-900">Card Title</h3>
  <p class="mt-2 text-gray-600">Card content goes here.</p>
</div>

<!-- Card with Header -->
<div class="bg-white rounded-lg shadow">
  <div class="px-6 py-4 border-b border-gray-200">
    <h3 class="text-lg font-semibold">Header</h3>
  </div>
  <div class="p-6">
    <p>Content</p>
  </div>
</div>

<!-- Interactive Card -->
<div class="bg-white rounded-lg shadow hover:shadow-lg transition-shadow">
  <div class="p-6">
    <h3>Hover Effect</h3>
  </div>
</div>
```

## Form Inputs

```html
<!-- Text Input -->
<div>
  <label class="block text-sm font-medium text-gray-700 mb-1">Label</label>
  <input type="text" class="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" />
</div>

<!-- Textarea -->
<div>
  <label class="block text-sm font-medium text-gray-700 mb-1">Message</label>
  <textarea class="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" rows="4"></textarea>
</div>

<!-- Select -->
<div>
  <label class="block text-sm font-medium text-gray-700 mb-1">Select</label>
  <select class="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500">
    <option>Option 1</option>
    <option>Option 2</option>
  </select>
</div>

<!-- Checkbox -->
<div class="flex items-center">
  <input type="checkbox" class="w-4 h-4 text-blue-500 border-gray-300 rounded" />
  <label class="ml-2 text-sm text-gray-700">Remember me</label>
</div>
```

## Navigation

```html
<!-- Navbar -->
<nav class="flex items-center justify-between px-6 py-4 bg-white shadow">
  <div class="flex items-center">
    <span class="text-xl font-bold">Logo</span>
  </div>
  <div class="flex items-center space-x-4">
    <a href="#" class="text-gray-600 hover:text-gray-900">Home</a>
    <a href="#" class="text-gray-600 hover:text-gray-900">About</a>
    <a href="#" class="text-gray-600 hover:text-gray-900">Contact</a>
  </div>
</nav>

<!-- Sidebar -->
<div class="flex h-screen">
  <aside class="w-64 bg-gray-100 p-4">
    <nav class="space-y-2">
      <a href="#" class="block px-4 py-2 rounded bg-blue-500 text-white">Active</a>
      <a href="#" class="block px-4 py-2 rounded hover:bg-gray-200">Item</a>
    </nav>
  </aside>
</div>
```

## Layout Patterns

```html
<!-- Center Container -->
<div class="max-w-4xl mx-auto px-4">
  <div class="max-w-2xl">
    Content
  </div>
</div>

<!-- Sidebar Layout -->
<div class="flex min-h-screen">
  <aside class="w-64 bg-gray-100 p-4">
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

## Alert/Notification

```html
<!-- Success Alert -->
<div class="flex items-center p-4 bg-green-100 rounded">
  <span class="i-carbon-checkmark-filled text-green-500 text-xl"></span>
  <p class="ml-3 text-green-700">Success message</p>
</div>

<!-- Error Alert -->
<div class="flex items-center p-4 bg-red-100 rounded">
  <span class="i-carbon-warning-filled text-red-500 text-xl"></span>
  <p class="ml-3 text-red-700">Error message</p>
</div>

<!-- Info Alert -->
<div class="flex items-center p-4 bg-blue-100 rounded">
  <span class="i-carbon-information-filled text-blue-500 text-xl"></span>
  <p class="ml-3 text-blue-700">Info message</p>
</div>
```

## Badge

```html
<!-- Basic Badge -->
<span class="inline-flex items-center px-2 py-1 text-xs font-medium bg-blue-100 text-blue-800 rounded">
  Badge
</span>

<!-- Colored Badges -->
<span class="px-2 py-1 text-xs rounded bg-green-100 text-green-800">Success</span>
<span class="px-2 py-1 text-xs rounded bg-yellow-100 text-yellow-800">Warning</span>
<span class="px-2 py-1 text-xs rounded bg-red-100 text-red-800">Error</span>
```

## Avatar

```html
<!-- Circle Avatar -->
<div class="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center">
  <span class="text-gray-600 font-medium">JD</span>
</div>

<!-- With Image -->
<img class="w-10 h-10 rounded-full" src="avatar.jpg" alt="Avatar" />
```

## Table

```html
<div class="overflow-x-auto">
  <table class="min-w-full divide-y divide-gray-200">
    <thead class="bg-gray-50">
      <tr>
        <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Name</th>
        <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Email</th>
      </tr>
    </thead>
    <tbody class="bg-white divide-y divide-gray-200">
      <tr class="hover:bg-gray-50">
        <td class="px-6 py-4">John Doe</td>
        <td class="px-6 py-4">john@example.com</td>
      </tr>
    </tbody>
  </table>
</div>
```