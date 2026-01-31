# การสร้าง Vue Components ที่สามารถ Reuse ได้

## 1. Use Props for Input (Passing Data In) (ใช้ Props สำหรับ Input)

### เหตุผล

เพื่อทำให้ component reusable คุณต้องสามารถส่ง data เข้าไปจาก parent ได้ นี่คือ role ของ **props** Props อนุญาตให้ parent component configure child component ทำให้ child flexible และ decoupled จาก data sources เฉพาะ component ที่ออกแบบดี define clear API ผ่าน props ของมัน

### วิธีที่ไม่ควรทำ

Hard-coding content ภายใน component ที่ตั้งใจให้ reusable นี่จำกัด utility อย่างมากเพราะมันสามารถแสดงเพียงสิ่งเดียวเท่านั้น

````vue
<!-- components/GreetingMessage.vue -->
<template>
  <!-- This component can only ever greet "World". It's not reusable. -->
  <h1>Hello, World!</h1>
</template>
````

### วิธีที่ควรทำ

Define props เพื่อรับ external data นี่อนุญาตให้ component เดียวกันถูกใช้ใน contexts ต่างๆ ด้วย data ต่างกัน Provide validation สำหรับ props ของคุณเสมอเพื่อให้แน่ใจว่า type safety

````vue
<!-- components/GreetingMessage.vue -->
<script setup>
// Define a prop to accept a name from the parent.
// Add validation to ensure it's a String and is required.
defineProps({
  name: {
    type: String,
    required: true
  }
})
</script>

<template>
  <h1>Hello, {{ name }}!</h1>
</template>
````

ตอนนี้ parent สามารถ reuse component นี้ด้วย data ต่างกัน:

````vue
<!-- ParentComponent.vue -->
<script setup>
import GreetingMessage from './GreetingMessage.vue'
</script>

<template>
  <GreetingMessage name="Vue" />
  <GreetingMessage name="World" />
</template>
````

---

## 2. Use Events for Output (Communicating Out) (ใช้ Events สำหรับ Output)

### เหตุผล

Reusable component ไม่ควร modify state ของ parent โดยตรง นี่สร้าง tight coupling และทำให้ system ยากต่อการคิด แทนที่จะเป็นเช่นนั้น เมื่อบางอย่างเกิดขึ้นภายใน child component (เช่น user กดปุ่ม) มันควร **emit an event** Parent component สามารถ listen สำหรับ event นี้และตัดสินใจว่าจะ react อย่างไร นี่เรียกว่า "props down, events up" pattern

### วิธีที่ไม่ควรทำ

Child component พยายาม mutate prop โดยตรงหรือ reach outside ของตัวเองเพื่อเปลี่ยน state ของ parent นี่เป็น anti-pattern และ Vue จะ warn คุณเกี่ยวกับ mutating props

````vue
<!-- components/MyButton.vue -->
<script setup>
const props = defineProps(['modelValue'])

function handleClick() {
  // ANTI-PATTERN: Directly mutating a prop!
  props.modelValue++
}
</script>

<template>
  <button @click="handleClick">
    Click me
  </button>
</template>
````

### วิธีที่ควรทำ

Child component emit event เพื่อแจ้ง parent ถึงการเปลี่ยนแปลงที่ร้องขอ Parent รับผิดชอบในการ update state นี่ทำให้ data flow คาดการณ์ได้

````vue
<!-- components/MyButton.vue -->
<script setup>
defineProps(['modelValue'])
// Declare the event the component can emit
const emit = defineEmits(['update:modelValue'])

function handleClick() {
  // Emit an event to the parent, passing the new value.
  emit('update:modelValue', props.modelValue + 1)
}
</script>

<template>
  <button @click="handleClick">
    Click me: {{ modelValue }}
  </button>
</template>
````

Parent สามารถใช้ `v-model` (ซึ่งเป็น shorthand สำหรับการส่ง `modelValue` prop และ listening สำหรับ `update:modelValue` event) เพื่อจัดการ state

````vue
<!-- ParentComponent.vue -->
<script setup>
import { ref } from 'vue'
import MyButton from './MyButton.vue'

const count = ref(0)
</script>

<template>
  <MyButton v-model="count" />
</template>
````

---

## 3. Use Slots for Content Distribution (ใช้ Slots สำหรับ Content Distribution)

### เหตุผล

บางครั้งคุณต้องการสร้าง component ที่ wraps รอบ layout หรือ styling แต่อนุญาตให้ parent ให้ actual content **Slots** เป็น placeholders ใน template ของ child component ที่ถูกเติมด้วย content จาก parent นี่เหมาะสำหรับการสร้าง generic layout components เช่น cards, modals, หรือ page layouts

### วิธีที่ไม่ควรทำ

สร้าง components หลายตัวที่เกือบเหมือนกันเพียงเพื่อเปลี่ยน inner content

````vue
<!-- RedButton.vue -->
<button class="btn-red">Click Me</button>

<!-- BlueButton.vue -->
<button class="btn-blue">Click Me</button>
````

### วิธีที่ควรทำ

สร้าง single, generic component พร้อม `<slot>` Parent สามารถส่ง content ใดๆ ที่ต้องการเข้าไปใน slot นั้น

````vue
<!-- BaseButton.vue -->
<script setup>
defineProps(['color']) // e.g., 'red', 'blue'
</script>

<template>
  <button :class="`btn-${color}`">
    <!-- The parent's content will be rendered here -->
    <slot></slot>
  </button>
</template>
````

ตอนนี้ parent สามารถ reuse `BaseButton` สำหรับ content หรือ color ใดๆ

````vue
<!-- ParentComponent.vue -->
<script setup>
import BaseButton from './BaseButton.vue'
</script>

<template>
  <BaseButton color="red">
    Delete Item
  </BaseButton>
  <BaseButton color="blue">
    Save Changes
  </BaseButton>
</template>
````

## อ้างอิง

- [Vue.js Docs - Component Basics](https://vuejs.org/guide/essentials/component-basics.html)
- [Vue.js Docs - Props](https://vuejs.org/guide/components/props.html)
- [Vue.js Docs - Events](https://vuejs.org/guide/components/events.html)
- [Vue.js Docs - Slots](https://vuejs.org/guide/components/slots.html)