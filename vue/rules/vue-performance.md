# Vue Performance Best Practices (แนวทางปฏิบัติที่ดีที่สุดสำหรับ Vue Performance)

## 1. Virtualize Large Lists (สร้าง Virtualization สำหรับ Large Lists)

### 1.1. Rationale (เหตุผล)

Rendering lists ที่มี items หลายพันเป็น performance bottleneck ที่พบบ่อย Browser ดิ้นรนในการจัดการจำนวน DOM nodes ที่มาก นำไปสู่ slow rendering และ poor user experience List virtualization แก้ปัญหานี้โดย render เฉพาะ items ที่ visible (หรือเกือบ visible) ใน viewport

### 1.2. Bad Practice (วิธีที่ไม่ควรทำ)

Rendering large list โดยตรงด้วย `v-for` นี่บังคับให้ Vue และ browser สร้างและจัดการ DOM nodes หลายพัน แม้ว่าจะมีเพียงไม่กี่ตัวที่ visible

````vue
<script setup>
// bigList contains thousands of items
const bigList = Array.from({ length: 10000 }, (_, i) => ({ id: i, text: `Item ${i}` }))
</script>

<template>
  <!-- This will be very slow and may freeze the browser -->
  <ul>
    <li v-for="item in bigList" :key="item.id">
      {{ item.text }}
    </li>
  </ul>
</template>
````

### 1.3. Good Practice (วิธีที่ควรทำ)

ใช้ community library เช่น `vue-virtual-scroller` เพื่อ render เฉพาะ visible portion ของ list อย่างมีประสิทธิภาพ นี่รักษา DOM ให้เบาและ application ตอบสนอง

````vue
<script setup>
import 'vue-virtual-scroller/dist/vue-virtual-scroller.css'
import { RecycleScroller } from 'vue-virtual-scroller'

const bigList = Array.from({ length: 10000 }, (_, i) => ({ id: i, text: `Item ${i}` }))
</script>

<template>
  <!-- This renders only the visible items, providing excellent performance -->
  <RecycleScroller
    class="scroller"
    :items="bigList"
    :item-size="32"
    key-field="id"
    v-slot="{ item }"
  >
    <div class="user">
      {{ item.text }}
    </div>
  </RecycleScroller>
</template>

<style>
.scroller {
  height: 500px;
  overflow-y: auto;
}
.user {
  height: 32px;
  padding: 0 12px;
  display: flex;
  align-items: center;
}
</style>
````

---

## 2. Use `v-once` and `v-memo` for Stable Content (ใช้ `v-once` และ `v-memo` สำหรับ Stable Content)

### 2.1. Rationale (เหตุผล)

- `v-once`: สำหรับ content ที่พึ่งพา runtime data แต่จะไม่เปลี่ยนหลังจาก initial render Vue จะ skip การ updates ทั้งหมดในอนาคตสำหรับ element นี้และ children ซึ่งเป็น performance optimization ที่สำคัญ
- `v-memo`: สำหรับ conditionally skipping updates มัน memoizes sub-tree และ re-render เฉพาะเมื่อ dependency array ที่ระบุมีการเปลี่ยนแปลง นี่มีประโยชน์สำหรับ large `v-for` lists ที่คุณต้องการควบคุม updates อย่างแม่นยำ

### 2.2. Bad Practice (วิธีที่ไม่ควรทำ)

อนุญาตให้ Vue re-evaluate และ re-render components หรือ elements โดยไม่จำเป็นซึ่งคุณรู้ว่าจะไม่เปลี่ยน

````vue
<script setup>
import { ref } from 'vue'
const list = ref([...]) // Large list
const canUpdate = ref(false)
</script>
<template>
  <!-- This header is re-evaluated on every component update -->
  <h1>Static Header</h1>

  <!-- Every item in this list will re-render if the parent component updates, even if the item data hasn't changed -->
  <div v-for="item in list" :key="item.id">
    <p>{{ item.text }}</p>
  </div>
</template>
````

### 2.3. Good Practice (วิธีที่ควรทำ)

Apply `v-once` สำหรับ purely static content และ `v-memo` สำหรับ lists ที่คุณสามารถกำหนด condition ที่ชัดเจนสำหรับ updates

````vue
<script setup>
import { ref } from 'vue'
const list = ref([...]) // Large list
const canUpdate = ref(false)
</script>
<template>
  <!-- This header is rendered once and then skipped for all future updates -->
  <h1 v-once>Static Header</h1>

  <!-- This list will only re-render if `canUpdate` becomes true -->
  <div v-for="item in list" :key="item.id" v-memo="[canUpdate]">
    <p>{{ item.text }}</p>
  </div>
</template>
````

---

## 3. Reduce Reactivity Overhead with Shallow Refs (ลด Reactivity Overhead ด้วย Shallow Refs)

### 3.1. Rationale (เหตุผล)

Reactivity system ของ Vue เป็น deep โดย default ซึ่งสะดวกแต่อาจมีค่าใช้จ่ายสำหรับ very large, deeply nested data structures (เช่น array ที่มี objects หลายพัน) การเข้าถึง property ทุกครั้ง trigger dependency tracking สำหรับ immutable หรือ read-only data นี่เป็น overhead ที่ไม่จำเป็น `shallowRef()` และ `shallowReactive()` สร้าง state ที่ reactive เฉพาะที่ root level ทำให้ nested property access เร็วขึ้นมาก

### 3.2. Bad Practice (วิธีที่ไม่ควรทำ)

ใช้ standard `ref()` สำหรับ very large, immutable data structure

````javascript
import { ref } from 'vue'

// If this array contains thousands of deeply nested objects,
// making it fully reactive can be slow.
const largeImmutableList = ref([/* ... thousands of objects ... */])
````

### 3.3. Good Practice (วิธีที่ควรทำ)

ใช้ `shallowRef()` สำหรับ large, immutable data Updates ต้องทำโดย replace entire root value ซึ่ง aligns กับ immutable patterns

````javascript
import { shallowRef } from 'vue'

const largeImmutableList = shallowRef([/* ... thousands of objects ... */])

// To update, you must replace the value entirely.
// This is much more performant for large datasets.
function addItem(newItem) {
  largeImmutableList.value = [...largeImmutableList.value, newItem]
}
````

## References (อ้างอิง)

- [Vue.js Official Performance Guide](https://vuejs.org/guide/best-practices/performance.html)
- [vue-virtual-scroller](https://github.com/Akryum/vue-virtual-scroller)
