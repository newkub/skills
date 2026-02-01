# Usage UnoCSS

## Title
การใช้งาน UnoCSS ในโปรเจกต์

## Description
วิธีการใช้งาน UnoCSS classes และ attributify mode ใน HTML และ components

## Examples

### การใช้ classes แบบปกติ
```html
<div class="flex items-center justify-center p-4 bg-blue-100 rounded-lg">
  <h1 class="text-2xl font-bold text-gray-800">Hello UnoCSS</h1>
</div>
```

### การใช้ attributify mode
```html
<div flex="~ items-center justify-center" p="4" bg="blue-100" rounded="lg">
  <h1 text="2xl" font="bold" text="gray-800">Hello UnoCSS</h1>
</div>
```

### การใช้ shortcuts
```html
<button class="btn">Click me</button>
<div class="card">Card content</div>
```

## Anti-patterns
- ห้ามผสม classes และ attributify ใน element เดียวกัน
- ห้ามใช้ classes ที่ไม่ได้ตั้งค่าไว้
- ห้ามใช้ attributify โดยไม่เปิด preset
