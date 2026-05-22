# Attributify Mode

## Basic Usage

```html
<!-- แทนที่จะใช้ class="flex items-center" -->
<div flex items-center>
  Content
</div>
```

## Complex Attributes

```html
<!-- ค่าหลายตัว -->
<div grid="~ cols-3 gap-4">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</div>

<!-- ค่าแบบ array -->
<div p="x-4 y-2" m="t-2 b-4">
  Content
</div>
```

## Responsive Design

```html
<!-- Breakpoint prefixes -->
<div flex="~ items-center sm:flex-row md:flex-col">
  Responsive content
</div>
```

## States and Variants

```html
<!-- Hover states -->
<button bg="blue-500 hover:bg-blue-600">
  Hover me
</button>

<!-- Focus states -->
<input border="focus:border-blue-500" />
```
