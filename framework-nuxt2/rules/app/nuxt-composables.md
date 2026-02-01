---
trigger: always_on
description: สร้างและจัดโครงสร้าง Nuxt Composables ตาม best practices
condition: |
  ใช้เมื่อต้องการสร้าง composable ใหม่
  ใช้เมื่อต้องการ refactor composable ที่มีอยู่
---

## 1. Naming & Structure (การตั้งชื่อและโครงสร้าง)

- **File Naming**: ตั้งชื่อไฟล์ composable ด้วย `camelCase` และขึ้นต้นด้วย `use` (เช่น `useAuth.ts`, `useFetchUsers.ts`)
- **Function Naming**: ชื่อฟังก์ชัน composable ต้องตรงกับชื่อไฟล์ (เช่น `export function useAuth() { ... }`)
- **Folder Structure**: จัดกลุ่ม composables ที่เกี่ยวข้องกันไว้ใน sub-folder เพื่อความเป็นระเบียบ (เช่น `~/composables/auth/`, `~/composables/data/`)
- **Auto-Import**: Nuxt จะ auto-import composables ทั้งหมดที่อยู่ใน `~/composables` ไม่จำเป็นต้อง import เอง

---

## 2. Core Principles (หลักการเขียน Composable)

- **Single Responsibility**: Composable หนึ่งตัวควรมีหน้าที่รับผิดชอบเพียงอย่างเดียว
- **Return Value**: Composable ควร return object ที่ประกอบด้วย reactive state (`ref`, `reactive`, `computed`) และ functions
- **Reactivity**: ใช้ Vue reactivity APIs (`ref`, `reactive`, `computed`, `watch`) ในการจัดการ state
- **Type Safety**: ใช้ TypeScript เพื่อกำหนด type ของ parameters และ return values ให้ชัดเจน
- **Error Handling**: จัดการ error ที่อาจเกิดขึ้นภายใน composable, โดยเฉพาะ async operations
- **Lifecycle**: ใช้ `onUnmounted` หรือ lifecycle hooks อื่นๆ เพื่อ cleanup (เช่น clear timers, remove event listeners)

---

## 3. Data Fetching (การดึงข้อมูล)

- **`useFetch`**: ใช้สำหรับ data fetching ทั่วไปที่ต้องการทำงานบน SSR
- **`useAsyncData`**: ใช้สำหรับ data fetching ที่มี logic ซับซ้อน หรือต้องการ control การ caching มากขึ้น
- **`useLazyFetch` / `useLazyAsyncData`**: ใช้เมื่อไม่ต้องการให้ data fetching block การ render ของหน้า

---

## 4. Library Integration (การใช้งานร่วมกับ Library)

- **VueUse**: ใช้ VueUse composables สำหรับ common patterns ต่างๆ (เช่น `useLocalStorage`, `useDebounceFn`, `useClipboard`)
- **Pinia**: ใช้ Pinia stores สำหรับการจัดการ global state ที่ซับซ้อนและต้องการแชร์ข้ามหลาย components

---

## 5. Performance & Testing (ประสิทธิภาพและการทดสอบ)

- **Memoization**: ใช้ `computed` เพื่อ cache ผลลัพธ์ของการคำนวณที่ซับซ้อน
- **Debouncing/Throttling**: ใช้ `useDebounceFn` หรือ `useThrottleFn` จาก VueUse สำหรับ event ที่ถูกเรียกบ่อย
- **Unit Testing**: เขียน unit test สำหรับ composable ที่มีความสำคัญหรือมี logic ซับซ้อน เพื่อทดสอบ state changes, method calls, และ error handling
