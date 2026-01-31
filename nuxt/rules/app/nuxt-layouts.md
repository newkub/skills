---
trigger: always_on
description: สร้างและจัดโครงสร้าง Nuxt Layouts ตาม best practices
condition: |
  ใช้เมื่อต้องการสร้าง layout ใหม่สำหรับหน้าเพจ
  ใช้เมื่อต้องการ refactor layout ที่มีอยู่
---

## 1. Naming & Structure (การตั้งชื่อและโครงสร้าง)

- **File Location**: สร้างไฟล์ layout ทั้งหมดภายใน `~/layouts` directory.
- **File Naming**: ตั้งชื่อไฟล์ด้วย `kebab-case` หรือ `PascalCase` (เช่น `default.vue`, `AuthLayout.vue`).
- **Common Layouts**:
  - `default.vue`: Layout หลักที่ใช้กับทุกหน้า (ถ้าไม่ได้ระบุ layout อื่น)
  - `auth.vue`: Layout สำหรับหน้า authentication (login, register)
  - `dashboard.vue`: Layout สำหรับส่วน dashboard ที่มี sidebar และ header
  - `blank.vue`: Layout ว่างสำหรับหน้าที่ไม่ต้องการองค์ประกอบร่วมใดๆ

---

## 2. Implementation (การสร้าง Layout)

- **Composition API**: ใช้ `<script setup>` สำหรับการเขียน script ทั้งหมด
- **Slot**: ทุก layout ต้องมี `<slot />` อย่างน้อยหนึ่งตำแหน่งเพื่อแสดง content ของ page ที่เรียกใช้
- **Named Slots**: หาก layout มีหลาย section (เช่น `header`, `footer`, `sidebar`), ให้ใช้ named slots เพื่อความยืดหยุ่น (`<slot name="header" />`)
- **Props**: หาก layout ต้องการรับค่าจาก page, ให้ใช้ `defineProps` พร้อมกำหนด TypeScript types ที่ชัดเจน
- **Component Extraction**: หาก layout มีขนาดใหญ่หรือซับซ้อน (เกิน 200-300 บรรทัด), ควรแยกส่วนที่ re-usable ออกไปเป็น components ย่อย

---

## 3. Styling & Responsiveness (การจัดสไตล์)

- **UnoCSS**: ใช้ UnoCSS utility classes เป็นเครื่องมือหลักในการจัดสไตล์
- **Scoped Styles**: ใช้ `<style scoped>` สำหรับ custom styles ที่ซับซ้อนหรือไม่สามารถทำได้ด้วย utility classes
- **Responsiveness**: ใช้ responsive utilities ของ UnoCSS (เช่น `md:`, `lg:`) เพื่อให้ layout รองรับหลายขนาดหน้าจอ

---

## 4. State & Logic (การจัดการ State และ Logic)

- **VueUse**: ใช้ VueUse composables สำหรับ common UI patterns (เช่น `useWindowSize`, `useDark`, `useMediaQuery`)
- **Pinia**: ใช้ Pinia stores สำหรับการจัดการ global state ที่ต้องแชร์ระหว่าง layout และ pages (เช่น สถานะการ login ของ user)
