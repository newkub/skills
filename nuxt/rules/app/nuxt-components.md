---
trigger: manual
description: สร้างและจัดโครงสร้าง Vue Components ใน Nuxt ตาม best practices
condition: |
  ใช้เมื่อต้องการสร้าง Nuxt component ใหม่
  ใช้เมื่อต้องการ refactor Nuxt component ที่มีอยู่
  ใช้เมื่อต้องการตรวจสอบ Nuxt component ว่าเป็นไปตาม best practices
---

## 1. Vue Component Foundation (ใช้แนวทางจาก /follow-vue)

- **Foundation**: เริ่มต้นด้วยการปฏิบัติตามแนวทางทั้งหมดใน `/follow-vue` สำหรับกฎพื้นฐานของ Vue components, รวมถึง:
  - Folder Structure
  - Import Rules
  - Component Rules
  - Naming Convention
  - Styling Rules
  - Library Usage

---

## 2. Nuxt Auto-Import (การใช้งาน Auto-Import)

- **Component Auto-Import**: Nuxt จะทำการ auto-import components ที่อยู่ใน `~/components` โดยอัตโนมัติ ไม่จำเป็นต้อง import เอง
  - **Convention**: ตั้งชื่อไฟล์ component ด้วย `PascalCase` (เช่น `UserCard.vue`)
  ````vue
  <template>
    <UserCard /> <!-- Auto-imported from /components/UserCard.vue -->
  </template>
  ````
- **Composables Auto-Import**: Composables ที่อยู่ใน `~/composables` จะถูก auto-import เช่นกัน
  ````vue
  <script setup lang="ts">
  // No import needed for composables in /composables
  const user = useAuth()
  </script>
  ````

---

## 3. Performance Optimization (การปรับปรุงประสิทธิภาพ)

- **Lazy Loading**: สำหรับ components ขนาดใหญ่ที่ไม่ได้ใช้ทันที ให้ใช้ `Lazy` prefix เพื่อทำการ lazy load
  ````vue
  <template>
    <LazyChartComponent /> <!-- Component นี้จะถูก load เมื่อจำเป็นเท่านั้น -->
  </template>
  ````
- **Client-Only Components**: สำหรับ components ที่ต้องใช้ Browser APIs (เช่น `window`, `document`) ให้ห่อด้วย `<ClientOnly>` เพื่อให้ render เฉพาะฝั่ง client
  ````vue
  <template>
    <ClientOnly>
      <MapComponent />
    </ClientOnly>
  </template>
  ````

---

## 4. SSR-Friendly Patterns (แนวทางสำหรับ SSR)

- **State Management**: ใช้ `useState` สำหรับการจัดการ state ที่ต้องทำงานร่วมกับ SSR เพื่อให้ state ถูกส่งจาก server ไปยัง client (hydration)
  ````typescript
  // Good - SSR-friendly
  const count = useState('count', () => 0)

  // Avoid - Not SSR-friendly in many cases
  const count = ref(0)
  ````
- **Lifecycle Hooks**: เลือกใช้ lifecycle hooks ให้เหมาะสมกับ SSR
  - `onMounted`: จะทำงานเฉพาะฝั่ง client เท่านั้น
  - `onServerPrefetch`: ใช้สำหรับ data fetching ที่ต้องการให้ทำงานบน server

---

## 5. Advanced Rendering Optimization (การปรับปรุงการ Render)

- **`v-if` vs `v-show`**:
  - `v-if`: เหมาะสำหรับเงื่อนไขที่ไม่ค่อยเปลี่ยนแปลง เพราะจะมีการสร้างและทำลาย DOM element จริงๆ
  - `v-show`: เหมาะสำหรับเงื่อนไขที่เปลี่ยนแปลงบ่อย เพราะจะใช้ CSS `display: none` ในการซ่อน/แสดง
- **`v-memo`**: ใช้ `v-memo` เพื่อป้องกันการ re-render ที่ไม่จำเป็น เมื่อ component มีการ render ซ้ำๆ แต่ props ไม่ได้เปลี่ยนแปลง
  ````vue
  <template>
    <div v-memo="[user.id]">
      {{ user.name }}
    </div>
  </template>
  ````
- **`key` Attribute**: ใน `v-for` loop, ให้ใช้ `key` ที่เป็น unique ID เสมอ และหลีกเลี่ยงการใช้ index เป็น `key` หาก list มีการเปลี่ยนแปลงลำดับ, เพิ่ม, หรือลบข้อมูล
  ````vue
  <template>
    <div v-for="item in items" :key="item.id">
      {{ item.name }}
    </div>
  </template>
  ````

---

## 6. Primitive Components (แนวทางสำหรับ Primitive Components)

- **Scope**: กฎนี้ใช้สำหรับ components ที่อยู่ใน `~/components/primitive`
- **Simplicity**: Primitive components ควรเป็น building blocks ที่เรียบง่าย, re-usable, ไม่มี business logic ซับซ้อน, และไม่เชื่อมต่อกับ Pinia stores โดยตรง
- **File Size**: รักษาขนาดไฟล์ให้เล็ก ไม่ควรเกิน 50-100 บรรทัด เพื่อให้เป็น Single Responsibility
- **Props & Emits**:
  - จำกัดจำนวน props ไม่เกิน 5-7 ตัว และ emits ไม่เกิน 3-5 events
  - ใช้ TypeScript types ที่ชัดเจนสำหรับ props และ emits
- **Styling**:
  - ใช้ UnoCSS utility classes เป็นหลัก
  - รองรับ variants (เช่น `size`, `variant`, `color`) ผ่าน props
  - ใช้ `<style scoped>` เฉพาะกรณีที่จำเป็นจริงๆ เช่น animations
- **Slots**:
  - รองรับ default slot เสมอเพื่อความยืดหยุ่น
  - ใช้ named slots เมื่อจำเป็น
- **Examples**: `Icon`, `Avatar`, `Badge`, `Separator`, `Skeleton`, `Spinner`
