---
trigger: always_on
description: ตั้งค่า app.vue ในโปรเจกต์ Nuxt ตาม best practices
condition: ใช้เมื่อต้องการกำหนดโครงสร้างและแนวทางปฏิบัติสำหรับไฟล์ app.vue
---

## 1. App.vue Structure (โครงสร้างไฟล์)

- **Root Component**: `app.vue` เป็น root component ของแอปพลิเคชัน ใช้ `<NuxtLayout>` และ `<NuxtPage>` เป็นองค์ประกอบหลัก
- **Minimal Setup**: รักษา `app.vue` ให้เรียบง่ายที่สุด หลีกเลี่ยงการใส่ business logic ที่ซับซ้อน
- **Global Styles**: หากต้องการ global styles ให้ประกาศใน `<style>` โดยไม่ใช้ `scoped`

---

## 2. Import Rules (กฎการ Import)

- **ลำดับ Imports**: จัดเรียงลำดับการ import ดังนี้:
  1.  External libraries (เช่น `@vueuse/core`)
  2.  Internal modules (เช่น `~/types`)
  3.  Relative imports (เช่น `./helper`)
- **การจัดกลุ่ม Imports**: แบ่งกลุ่มการ import แต่ละประเภทและคั่นด้วยบรรทัดว่าง
- **Type Imports**: ใช้ `import type` เมื่อต้องการ import แค่ type เพื่อลด runtime overhead

---

## 3. Template Rules (กฎสำหรับ Template)

- **Layouts**: ใช้ `<NuxtLayout>` เพื่อแสดง layout หลักของหน้า
- **Pages**: ใช้ `<NuxtPage>` เพื่อแสดง component ของ page ปัจจุบัน
- **Error Handling**: ใช้ `<NuxtErrorBoundary>` เพื่อจัดการ error และแสดง custom error page

---

## 4. Script Rules (กฎสำหรับ Script)

- **Composition API**: ใช้ `<script setup>` เพื่อเขียน Composition API
- **Vue Macros**: ใช้ Vue Macros เพื่อลด boilerplate code เช่น `defineProps`, `defineEmits`
- **VueUse**: ใช้ VueUse composables สำหรับ common patterns เช่น `useLocalStorage`, `useDark`
- **Global State**: ใช้ Pinia stores สำหรับจัดการ global state
- **App Lifecycle**: ใช้ Nuxt app lifecycle hooks สำหรับ app-level logic

---

## 5. Styling Rules (กฎสำหรับ Styling)

- **Global Styles**: ประกาศ global styles ใน `<style>` โดยไม่ใช้ `scoped`
- **UnoCSS**: ใช้ UnoCSS utility classes ใน template เพื่อความรวดเร็วและสอดคล้อง
- **CSS Variables**: ใช้ CSS variables สำหรับการทำ theming

---

## 6. Library Usage (แนวทางการใช้ Library)

- **VueUse**: ใช้ composables สำหรับ common patterns เช่น `useLocalStorage`, `useWindowSize`, `useDark`
- **Vue Macros**: ใช้ macros เพื่อลด boilerplate และเพิ่มความกระชับของโค้ด
- **UnoCSS**: ใช้ utility classes, shortcuts, และ theme configuration เพื่อสร้าง UI ที่สอดคล้องกัน
- **Pinia**: ใช้ `defineStore` สำหรับสร้าง store และ composables สำหรับการเข้าถึง state

---

## 7. Naming Convention (ข้อตกลงการตั้งชื่อ)

- **File Name**: ตั้งชื่อไฟล์ว่า `app.vue`
- **Variables**: ตั้งชื่อตัวแปรและฟังก์ชันด้วย `camelCase`
