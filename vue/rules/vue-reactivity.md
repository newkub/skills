# Understanding Vue's Reactivity System (ความเข้าใจระบบ Reactivity ของ Vue)

## 1. Prefer `ref` over `reactive` for State Declaration (ใช้ `ref` มากกว่า `reactive` สำหรับ State Declaration)

### 1.1. Reasoning (เหตุผล)

Vue มี APIs หลักสองตัวสำหรับสร้าง reactive state: `ref()` และ `reactive()` แม้ว่าทั้งคู่จะทำให้ data reactive แต่ `ref()` โดยทั่วไปถูก recommend เป็นตัวเลือกหลักเพราะหลายเหตุผล:

- **Handles all data types:** `ref()` สามารถ hold ค่า type ใดๆ ก็ได้ รวมทั้ง primitives (`string`, `number`, `boolean`) และ objects `reactive()` ทำงานเฉพาะสำหรับ object types
- **Preserves reactivity:** `ref` สามารถส่งผ่านได้อย่างอิสระโดยไม่สูญเสีย reactivity reactivity connection ถูกบรรจุภายใน ref object เอง (เข้าถึงผ่าน `.value`)
- **Clearer usage:** ความจำเป็นในการใช้ `.value` ใน script ทำให้ชัดเจนว่า reactive tracking เกิดขึ้นที่ไหน
- **Avoids destructuring pitfalls:** Destructuring properties จาก `reactive` object จะทำให้ properties เหล่านั้นสูญเสีย reactivity นี่เป็น source ของ bugs ที่พบบ่อย

### 1.2. What Not to Do (วิธีที่ไม่ควรทำ)

ใช้ `reactive` แล้ว destructuring properties ซึ่งทำลาย reactivity connection

````vue
<script setup>
import { reactive } from 'vue'

const state = reactive({ count: 0, name: 'Vue' })

// When destructured, `count` becomes a plain number and is no longer reactive.
// Changes to `count` will not update the DOM or trigger watchers.
let { count } = state

function increment() {
  // This only changes the local `count` variable, not `state.count`.
  count++
}
</script>

<template>
  <!-- This will always display 0, even after `increment` is called. -->
  <p>Count: {{ state.count }}</p>
  <button @click="increment">Increment</button>
</template>
````

### 1.3. What to Do (วิธีที่ควรทำ)

ใช้ `ref` สำหรับทุก reactive state รวมทั้ง objects นี่ช่วยให้ reactivity ถูกรักษาเสมอและหลีกเลี่ยง common pitfalls เข้าถึงค่าโดยใช้ `.value` property ใน script ของคุณ

````vue
<script setup>
import { ref } from 'vue'

// `ref` works for both primitives and objects.
const count = ref(0)
const state = ref({ name: 'Vue' })

function increment() {
  // Always mutate the .value property to trigger reactivity.
  count.value++
}
</script>

<template>
  <!-- In templates, refs are automatically "unwrapped", so you don't need .value -->
  <p>Count: {{ count }}</p>
  <button @click="increment">Increment</button>
</template>
````

---

## 2. Understand Deep Reactivity and When to Avoid It (เข้าใจ Deep Reactivity และเมื่อควรหลีกเลี่ยง)

### 2.1. Reasoning (เหตุผล)

โดย default reactivity ของ Vue เป็น deep เมื่อคุณสร้าง reactive object ด้วย `ref()` หรือ `reactive()` Vue จะ walk ผ่าน properties ทั้งหมดแบบ recursive และ convert เป็น reactive proxies นี่สะดวกแต่อาจแนะนำ performance overhead สำหรับ very large หรือ deeply nested objects ที่คุณไม่ต้องการ deep tracking

### 2.2. What Not to Do (วิธีที่ไม่ควรทำ)

ทำให้ large, read-only data structure เป็น deeply reactive เมื่อไม่จำเป็น นี่สิ้นเปลือง memory และ CPU cycles บน tracking changes ที่จะไม่เกิดขึ้น

````vue
<script setup>
import { ref } from 'vue'

// Imagine `largeReadOnlyData` is a huge object fetched from an API
// that will never be modified on the client-side.
const largeReadOnlyData = ref(getLargeDataSet())

// Vue will spend time making every nested property reactive, which is wasteful.
</script>
````

### 2.3. วิธีที่ควรทำ

สำหรับ large, immutable data structures ใช้ `shallowRef()` เพื่อ opt-out ของ deep reactivity ด้วย shallow ref เฉพาะ `.value` access ที่ถูก tracked Nested properties ของ object ถูกทิ้งไว้ไม่เปลี่ยนแปลงและไม่ reactive ซึ่งปรับปรุง performance

````vue
<script setup>
import { shallowRef } from 'vue'

const largeImmutableData = shallowRef(getLargeDataSet())

// Vue only tracks assignments to `largeImmutableData.value`.
// Accessing `largeImmutableData.value.some.nested.property` is fast
// because it's not going through reactivity proxies.

function replaceData() {
  // To trigger an update, you must replace the entire value.
  largeImmutableData.value = getNewLargeDataSet()
}
</script>
````

## อ้างอิง

- [Vue.js Docs - Reactivity Fundamentals](https://vuejs.org/guide/essentials/reactivity-fundamentals.html)
- [Vue.js Docs - Reactivity in Depth](https://vuejs.org/guide/extras/reactivity-in-depth.html)
