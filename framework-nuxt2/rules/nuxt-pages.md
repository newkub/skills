---
trigger: always_on
description: สร้างและจัดโครงสร้าง Nuxt Pages ตาม best practices
condition: |
  ใช้เมื่อต้องการสร้าง page-based route ใหม่
  ใช้เมื่อต้องการ refactor page ที่มีอยู่
---

## 1. Routing & File Structure (การจัดการ Route และโครงสร้างไฟล์)

- **File-based Routing**: Nuxt ใช้ระบบ file-based routing โดยอัตโนมัติจากไฟล์และโฟลเดอร์ใน `~/pages`
- **Folder Structure**: จัดกลุ่มหน้าที่เกี่ยวข้องกันไว้ใน sub-folder (เช่น `~/pages/settings/profile.vue` จะ map ไปที่ `/settings/profile`)
- **Dynamic Routes**: ใช้ `[bracket]` สำหรับ dynamic segments (เช่น `~/pages/users/[id].vue` map ไปที่ `/users/:id`)
- **Catch-all Routes**: ใช้ `[...slug].vue` เพื่อสร้าง catch-all route

---

## 2. Page Implementation (การสร้าง Page)

- **Composition API**: ใช้ `<script setup>` สำหรับการเขียน script ทั้งหมด
- **`definePageMeta`**: ใช้ `definePageMeta` compiler macro เพื่อกำหนด metadata สำหรับ page:
  - `layout`: กำหนด layout ที่จะใช้ (เช่น `layout: 'dashboard'`)
  - `middleware`: กำหนด page-specific middleware
- **`useRoute`**: ใช้ `useRoute()` composable เพื่อเข้าถึง route parameters (เช่น `route.params.id`)
- **Component Extraction**: หาก page มีขนาดใหญ่หรือซับซ้อน (เกิน 300-400 บรรทัด), ควรแยกส่วนที่ re-usable ออกไปเป็น components ย่อย

---

## 3. Data Fetching (การดึงข้อมูล)

- **`useFetch` / `useAsyncData`**: ใช้ composables เหล่านี้สำหรับการดึงข้อมูลฝั่ง server (SSR)
- **`useLazyFetch` / `useLazyAsyncData`**: ใช้เมื่อไม่ต้องการให้ data fetching block การ render ของหน้า
- **Loading & Error States**: จัดการ loading state (จาก `pending` property) และ error state (จาก `error` property) ที่ได้จาก data fetching composables เพื่อสร้าง UX ที่ดี

---

## 4. SEO & Metadata (การจัดการ SEO)

- **`useHead`**: ใช้ `useHead` composable เพื่อจัดการ `<head>` tags เช่น `title`, `meta`, `link`
- **`useSeoMeta`**: เป็น utility ที่สะดวกกว่า `useHead` สำหรับการตั้งค่า SEO meta tags ทั่วไป (เช่น `title`, `description`, `og:image`)
- **`useSchemaOrg`**: ใช้สำหรับสร้าง structured data (JSON-LD) เพื่อปรับปรุง SEO

---

## 5. State & Logic (การจัดการ State และ Logic)

- **Pinia**: ใช้ Pinia stores สำหรับการจัดการ global state ที่ต้องแชร์ข้าม pages หรือ components
- **VueUse**: ใช้ VueUse composables สำหรับ common patterns (เช่น `useWindowSize`, `useClipboard`)
