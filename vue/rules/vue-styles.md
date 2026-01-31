# Vue.js Component Styling Best Practices

## 1. Prefer Scoped Styles for Encapsulation (ใช้ Scoped Styles สำหรับ Encapsulation)

### 1.1. เหตุผล

โดย default CSS ภายใน Vue Single-File Component (SFC) เป็น global นี่หมายความว่า styles ที่กำหนดใน component หนึ่งอาจ leak โดยไม่ตั้งใจและ affect components อื่น นำไปสู่ hard-to-debug bugs `scoped` attribute บน `<style>` tag แก้ปัญหานี้โดย encapsulate CSS ไปยัง component เท่านั้น Vue ทำสิ่งนี้โดยการเพิ่ม unique data attribute ไปยัง elements ของ component และ rewrite CSS selectors เพื่อ match

### 1.2. วิธีที่ไม่ควรทำ

Writing unscoped styles ใน component พวกมันอาจ unintentionally affect child components หรือแม้แต่ parts อื่นของ application

````vue
<!-- components/MyButton.vue -->
<template>
  <button class="btn">Click Me</button>
</template>

<style>
/* UNSCOPED: This will apply to ALL elements with class "btn" in the entire app */
.btn {
  background-color: blue;
  color: white;
}
</style>
````

### 1.3. วิธีที่ควรทำ

ใช้ `scoped` attribute บน `<style>` tag ของ component ของคุณเสมอเพื่อให้แน่ใจว่า styles ใช้เฉพาะกับ current component นี่ป้องกัน style leakage และทำให้ components มีความเป็น modular และ reusable จริงๆ

````vue
<!-- components/MyButton.vue -->
<template>
  <button class="btn">Click Me</button>
</template>

<style scoped>
/* SCOPED: This style only applies to elements within this component */
.btn {
  background-color: blue;
  color: white;
  padding: 8px 16px;
  border-radius: 4px;
}
</style>
````

---

## 2. Use Dynamic Class and Style Bindings (ใช้ Dynamic Class และ Style Bindings)

### 2.1. เหตุผล

Component appearance มักต้องเปลี่ยนตาม state ของมัน แทนที่จะ manipulate CSS classes โดยตรงใน script ของคุณ leverage Vue's dynamic `:class` และ `:style` bindings นี่เป็น approach ที่ declarative มากกว่าและรักษา template ของ component เป็น single source of truth สำหรับวิธีที่มันควรมอง

### 2.2. วิธีที่ไม่ควรทำ

Manually adding หรือ removing classes จาก DOM elements ใน script ของคุณ นี่เป็น imperative approach ที่ขัดต่อ declarative nature ของ Vue

````vue
<script setup>
import { ref, onMounted } from 'vue'

const buttonEl = ref(null)
const isActive = ref(false)

// ANTI-PATTERN: Manually manipulating the DOM
onMounted(() => {
  if (isActive.value) {
    buttonEl.value.classList.add('active')
  }
})
</script>

<template>
  <button ref="buttonEl">Click Me</button>
</template>
````

### 2.3. วิธีที่ควรทำ

ใช้ `:class` binding พร้อม object หรือ array syntax เพื่อ toggle classes ตาม reactive state ของ component ของคุณ

````vue
<script setup>
import { ref } from 'vue'

const isActive = ref(true)
const hasError = ref(false)
</script>

<template>
  <!-- Object syntax is great for toggling individual classes -->
  <div :class="{ active: isActive, 'text-danger': hasError }">
    Dynamic Classes
  </div>

  <!-- Array syntax is useful for mixing conditional and static classes -->
  <div :class="['static-class', { active: isActive }]">
    Mixed Classes
  </div>

  <!-- You can also bind directly to computed properties for more complex logic -->
</template>

<style scoped>
.active {
  font-weight: bold;
}
.text-danger {
  color: red;
}
</style>
````

---

## 3. Organize Global Styles Appropriately (จัดระเบียบ Global Styles อย่างเหมาะสม)

### 3.1. เหตุผล

ในขณะที่ styles ส่วนใหญ่ควรเป็น scoped บาง styles เป็น inherently global (เช่น CSS resets, typography, theme variables) พวกมันควรถูก define ใน single, clear location มากกว่าถูก scatter ทั่ว components

### 3.2. วิธีที่ไม่ควรทำ

Defining global styles (เช่น `body` หรือ `h1` tags) ภายใน deeply nested, scoped component นี่สับสนและทำให้ styles หาและจัดการยาก

### 3.3. วิธีที่ควรทำ

มี main approaches สองอย่างสำหรับการจัดการ global styles:

1. **Import in `main.js`:** สร้าง dedicated CSS file (เช่น `src/assets/main.css`) สำหรับ global styles ของคุณและ import มันครั้งเดียวที่ root ของ application ของคุณ
2. **Unscoped style in `App.vue`:** วาง global styles ของคุณใน non-scoped `<style>` block ใน root `App.vue` component ของคุณ

**Example (Import in `main.js`):**

````javascript
// src/main.js
import { createApp } from 'vue'
import App from './App.vue'

// Import global styles
import './assets/main.css'

createApp(App).mount('#app')
````

````css
/* src/assets/main.css */
body {
  font-family: 'Inter', sans-serif;
  color: #333;
}

:root {
  --primary-color: #42b983;
}
````

## อ้างอิง

- [Vue Docs - SFC Style Features](https://vuejs.org/api/sfc-css-features.html)
- [MDN - Styling Vue components with CSS](https://developer.mozilla.org/en-US/docs/Learn/web_development/Core/Frameworks_libraries/Vue_styling)