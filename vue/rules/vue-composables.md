# Vue Composables Best Practices (แนวทางปฏิบัติที่ดีที่สุดสำหรับ Vue Composables)

## 1. Encapsulate Stateful Logic into `use` Functions (แยก Stateful Logic เป็นฟังก์ชัน `use`)

### 1.1. เหตุผล (Rationale)

Composables เป็น pattern หลักใน Vue 3 สำหรับ reuse stateful logic โดย extract logic จาก component ไปยัง reusable function ทำให้ components ของคุณสะอาดขึ้น เน้นไปที่การทำงานที่ชัดเจน และทดสอบได้ง่ายขึ้น convention คือตั้งชื่อฟังก์ชันเหล่านี้ขึ้นต้นด้วย `use` (เช่น `useMouse`, `useFetch`)

### 1.2. วิธีที่ไม่ควรทำ (Bad Practice)

เก็บ complex, reusable logic ไว้โดยตรงใน component นี่นำไปสู่ "fat components" ที่อ่านยาก บำรุงรักษายาก และทดสอบยาก logic ไม่สามารถแชร์กับ components อื่นได้ง่าย

````vue
<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

// Mouse tracking logic is stuck inside this component
const x = ref(0)
const y = ref(0)

function update(event) {
  x.value = event.pageX
  y.value = event.pageY
}

onMounted(() => window.addEventListener('mousemove', update))
onUnmounted(() => window.removeEventListener('mousemove', update))
</script>
````

### 1.3. วิธีที่ควรทำ (Good Practice)

Extract stateful logic ไปยังไฟล์และฟังก์ชันของตัวเอง composable encapsulate reactive state และ lifecycle hooks ของตัวเอง และ return state ที่ต้องการ expose

````javascript
// composables/useMouse.js
import { ref, onMounted, onUnmounted } from 'vue'

export function useMouse() {
  const x = ref(0)
  const y = ref(0)

  function update(event) {
    x.value = event.pageX
    y.value = event.pageY
  }

  onMounted(() => window.addEventListener('mousemove', update))
  onUnmounted(() => window.removeEventListener('mousemove', update))

  // Expose the managed state
  return { x, y }
}
````

Component จะกลายเป็น consumer ที่เรียบง่ายของ composable ทำให้ code สะอาดขึ้นและ logic สามารถ reuse ได้

````vue
<script setup>
import { useMouse } from './composables/useMouse'

const { x, y } = useMouse()
</script>

<template>
  Mouse position is at: {{ x }}, {{ y }}
</template>
````

---

## 2. Always Return a Plain Object of Refs (ส่งคืน Plain Object ของ Refs เสมอ)

### 2.1. เหตุผล (Rationale)

Composable ควรส่งคืน plain, non-reactive object ที่แต่ละ property เป็น `ref` นี่เป็น convention ที่สำคัญเพราะอนุญาตให้ consuming component ใช้ destructuring ในขณะที่รักษา reactivity ของ state หากคุณส่งคืน `reactive` object destructuring จะทำลาย reactivity connection

### 2.2. วิธีที่ไม่ควรทำ (Bad Practice)

ส่งคืน `reactive` object จาก composable

````javascript
// composables/useBadCounter.js
import { reactive } from 'vue'

export function useBadCounter() {
  const state = reactive({ count: 0 })
  // ...
  return state // Returning a reactive object
}

// In component:
// const { count } = useBadCounter() // `count` is now just a number, not reactive!
````

### 2.3. วิธีที่ควรทำ (Good Practice)

ส่งคืน plain object ที่มี refs นี่ช่วยให้ destructuring ทำงานได้ตามที่คาดหวังและ reactivity ถูกรักษา

````javascript
// composables/useGoodCounter.js
import { ref } from 'vue'

export function useGoodCounter() {
  const count = ref(0)
  const name = ref('Counter')
  // ...
  return { count, name } // Return a plain object of refs
}

// In component:
// const { count, name } = useGoodCounter() // `count` and `name` are both refs and fully reactive.
````

---

## 3. Clean Up Side Effects in `onUnmounted` (ล้าง Side Effects ใน `onUnmounted`)

### 3.1. เหตุผล (Rationale)

Composables มักสร้าง side effects เช่น adding DOM event listeners, setting up timers (`setInterval`), หรือ establishing WebSocket connections สำคัญที่จะ clean up side effects เหล่านี้เมื่อ component ที่ใช้ composable ถูก unmount หากไม่เช่นนั้นคุณจะสร้าง memory leaks `onUnmounted` lifecycle hook คือสถานที่ที่ถูกต้องในการทำ cleanup นี้

### 3.2. วิธีที่ไม่ควรทำ (Bad Practice)

สร้าง side effect โดยไม่ให้ cleanup function ที่สอดคล้องกัน

````javascript
// composables/useInterval.js
import { onMounted, ref } from 'vue'

export function useInterval(ms) {
  const count = ref(0)

  onMounted(() => {
    // This interval will keep running forever, even after the
    // component is destroyed, causing a memory leak.
    setInterval(() => {
      count.value++
    }, ms)
  })

  return { count }
}
````

### 3.3. วิธีที่ควรทำ (Good Practice)

จับคู่ side effect กับ cleanup action ใน `onUnmounted` เสมอ

````javascript
// composables/useInterval.js
import { onMounted, onUnmounted, ref } from 'vue'

export function useInterval(ms) {
  const count = ref(0)
  let intervalId = null

  onMounted(() => {
    intervalId = setInterval(() => {
      count.value++
    }, ms)
  })

  // The cleanup function is called when the component is unmounted.
  onUnmounted(() => {
    clearInterval(intervalId)
  })

  return { count }
}
````

## อ้างอิง (References)

- [Vue.js Docs - Composables](https://vuejs.org/guide/reusability/composables.html)
- [Vue.js Docs - Lifecycle Hooks](https://vuejs.org/guide/essentials/lifecycle.html)
