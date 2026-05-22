# Vue.js Accessibility (a11y) Best Practices (แนวปฏิบัติที่ดีที่สุดสำหรับการเข้าถึง Vue.js)

## 1. Use Semantic HTML (ใช้ Semantic HTML)

### 1.1. เหตุผล (Rationale)

Semantic HTML เป็นพื้นฐานของ web accessibility การใช้ elements ที่ถูกต้องตามวัตถุประสงค์ (เช่น `<nav>`, `<main>`, `<button>`, `<h1>`-`<h6>`) ให้โครงสร้างที่ assistive technologies เช่น screen readers ใช้ในการตีความและนำทางหน้า การพึ่งพา generic `<div>` elements และ CSS เพื่อสร้าง UI controls เป็น anti-pattern ที่ทำให้ accessibility แย่ลง

### 1.2. วิธีที่ไม่ควรทำ (Bad Practice)

ใช้ `div` elements พร้อม click handlers เพื่อจำลอง buttons หรือ links นี่ไม่สามารถ focus ได้โดย default ไม่สามารถ navigate ด้วย keyboard ได้ และไม่ได้สื่อสาร role ให้กับ screen readers

````vue
<!-- ANTI-PATTERN: นี่ไม่ใช่ button จริง -->
<div @click="doSomething">
  Click me
</div>

<!-- ANTI-PATTERN: ดูเหมือน heading แต่ไม่มี semantic meaning -->
<div class="h1">Page Title</div>
````

### 1.3. วิธีที่ควรทำ (Good Practice)

ใช้ semantic HTML element ที่เหมาะสมเสมอ นี่ให้ keyboard accessibility และ ARIA roles ฟรี

````vue
<!-- GOOD: Button จริงสามารถ focus ได้และประกาศตัวเองว่าเป็น button -->
<button @click="doSomething">
  Click me
</button>

<!-- GOOD: Heading จริงช่วยโครงสร้าง document -->
<h1>Page Title</h1>

<!-- Use landmarks to define page regions -->
<nav>...</nav>
<main>...</main>
<footer>...</footer>
````

---

## 2. Implement Accessible Forms (สร้าง Forms ที่เข้าถึงได้)

### 2.1. เหตุผล (Rationale)

Form controls ต้องถูก label อย่างถูกต้องเพื่อให้ accessible label ให้ description ที่มองเห็นได้และพื้นที่คลิกที่ใหญ่ขึ้นสำหรับ input นอกจากนี้ยัง associate text กับ control โดย programmatic ซึ่งจำเป็นสำหรับ screen reader users

### 2.2. วิธีที่ไม่ควรทำ (Bad Practice)

ไม่ให้ `<label>` สำหรับ form inputs หรือใช้ `placeholder` แทน label placeholders ไม่ใช่ substitute สำหรับ labels เพราะมันหายไปเมื่อ input และมักมี color contrast ที่ไม่ดี

````vue
<!-- ANTI-PATTERN: ไม่มี label สำหรับ input -->
<input type="text" placeholder="Your Name">
````

### 2.3. วิธีที่ควรทำ (Good Practice)

Associate `<label>` กับทุก `<input>` โดยใช้ `for` attribute ซึ่งต้อง match กับ `id` ของ input นี่ช่วยให้คลิก label แล้ว focus input และ screen readers ประกาศ label เมื่อ input ถูก focus

````vue
<script setup>
import { ref } from 'vue'
const name = ref('')
</script>

<template>
  <label for="nameInput">Name:</label>
  <input id="nameInput" type="text" v-model="name">
</template>
````

สำหรับ scenarios ที่ซับซ้อน ใช้ `aria-labelledby` หรือ `aria-describedby` เพื่อ associate inputs กับ descriptive text อื่นๆ บนหน้า

````vue
<label id="passwordLabel">Password:</label>
<input type="password" aria-labelledby="passwordLabel" aria-describedby="passwordHint">
<p id="passwordHint">Must be at least 8 characters long.</p>
````

---

## 3. Manage Focus (จัดการ Focus)

### 3.1. เหตุผล (Rationale)

ใน Single-Page Application (SPA) เมื่อ route เปลี่ยน content บนหน้าจะอัปเดต แต่ focus ของ user มักยังอยู่บน element ที่ trigger navigation (เช่น link) นี่อาจทำให้สับสน โดยเฉพาะสำหรับ screen reader users สำคัญที่จะจัดการ focus โดย programmatic โดยย้ายไปยัง logical place บนหน้าใหม่ โดยปกติคือ main content area หรือ page title

### 3.2. วิธีที่ไม่ควรทำ (Bad Practice)

อนุญาตให้ focus ยังอยู่บน navigation link เดิมหลังจาก route change user ไม่รู้ว่า page content ถูกอัปเดตแล้ว

### 3.3. วิธีที่ควรทำ (Good Practice)

หลังจาก route change ย้าย focus ไปยัง top ของ main content area ของ view ใหม่ technique ทั่วไปคือมี visually hidden element พร้อม `tabindex="-1"` ที่คุณสามารถเรียก `.focus()` ได้

````vue
<!-- App.vue -->
<template>
  <!-- This element is focusable but not part of the tab order -->
  <span ref="mainContent" tabindex="-1"></span>
  <router-view />
</template>

<script setup>
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const mainContent = ref(null)

// Watch for route changes
watch(
  () => route.path,
  async () => {
    // When the route changes, focus the main content area
    mainContent.value.focus()
  }
)
</script>
````

## อ้างอิง (References)

- [Vue.js Docs - Accessibility](https://vuejs.org/guide/best-practices/accessibility.html)
- [Web Content Accessibility Guidelines (WCAG)](https://www.w3.org/WAI/standards-guidelines/wcag/)
- [ARIA Authoring Practices Guide (APG)](https://www.w3.org/WAI/ARIA/apg/)
