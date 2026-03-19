---
description: เอกสารคอมโพเนนต์ใน Markdown
title: components
tags: [markdown, components, documentation]
goals:
  - แสดงตัวอย่างการเขียนเอกสารคอมโพเนนต์
  - สอนวิธีสร้าง props tables และ usage examples
---

## Props Table

````markdown
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `title` | `string` | - | หัวข้อของคอมโพเนนต์ |
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | ขนาดของคอมโพเนนต์ |
| `disabled` | `boolean` | `false` | สถานะการปิดใช้งาน |
````

## Usage Examples

````markdown
### Basic Usage

```vue
<template>
  <MyComponent title="Hello World" />
</template>
```

### With Events

```vue
<template>
  <MyComponent 
    title="Click me"
    @click="handleClick"
    @change="handleChange"
  />
</template>
```
````

## Events

````markdown
| Event | Payload | Description |
|-------|---------|-------------|
| `click` | `MouseEvent` | เมื่อคลิกคอมโพเนนต์ |
| `change` | `any` | เมื่อค่าเปลี่ยนแปลง |
| `focus` | `FocusEvent` | เมื่อได้รับ focus |
````
