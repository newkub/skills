# Vue.js Developer Experience (DX) Best Practices (แนวทางปฏิบัติที่ดีที่สุดสำหรับ Vue.js Developer Experience)

## 1. Follow Consistent Naming Conventions (ทำตาม Naming Conventions ที่สอดคล้องกัน)

### 1.1. เหตุผล (Rationale)

การนำ naming strategy ที่สอดคล้องกันมาใช้สำหรับ components ของคุณทำให้ project ของคุณ navigate และเข้าใจได้ง่ายขึ้น อนุญาตให้ developers รู้ scope และวัตถุประสงค์ของ component เพียงแค่ดูชื่อ

- **Component Files:** ใช้ `PascalCase` (เช่น `MyComponent.vue`) นี่เป็นมาตรฐานใน ecosystem และทำงานได้ดีกับ IDE auto-completion
- **Base Components:** Prefix general-purpose, purely presentational components ด้วย `Base` (เช่น `BaseButton.vue`, `BaseCard.vue`) นี่จัดกลุ่มพวกมันเข้าด้วยกันและส่งสัญญาณว่าพวกมันเป็น foundational UI elements
- **Single-Instance Components:** Prefix components ที่ควรใช้เพียงครั้งเดียวต่อหน้า (เช่น layouts) ด้วย `The` (เช่น `TheHeader.vue`, `TheSidebar.vue`)

### 1.2. วิธีที่ไม่ควรทำ (Bad Practice)

Naming ที่ไม่สอดคล้องและไม่บรรยาย

````markdown
// Bad component file names
my-button.vue
card.vue
header.vue
````

### 1.3. วิธีที่ควรทำ (Good Practice)

Naming ที่ชัดเจน สอดคล้องกัน และบรรยายตาม role ของ component

````markdown
// Good component file names
components/
├── base/
│   ├── BaseButton.vue
│   └── BaseCard.vue
├── layout/
│   ├── TheHeader.vue
│   └── TheSidebar.vue
└── views/
    └── UserProfile.vue
````

---

## 2. Use Correct Casing for Props and Events (ใช้ Casing ที่ถูกต้องสำหรับ Props และ Events)

### 2.1. เหตุผล (Rationale)

การทำตาม conventions ที่ก่อตั้งไว้สำหรับ JavaScript และ HTML ทำให้ code ของคุณอ่านง่ายและ interoperable ขึ้น

- **Props:** ประกาศชื่อ prop ใน `camelCase` ใน `<script>` block ของคุณ และใช้ `kebab-case` เมื่อส่งใน template Vue จัดการ conversion อัตโนมัติ
- **Events:** Emit และ listen สำหรับ events โดยใช้ `kebab-case` เสมอ

### 2.2. วิธีที่ไม่ควรทำ (Bad Practice)

ใช้ casing ที่ไม่สอดคล้องซึ่งอาจนำไปสู่ความสับสนและ errors

````vue
<!-- Passing a prop with the wrong case -->
<MyComponent myProp="value" />

<script setup>
// Emitting an event with the wrong case
emit('myEvent')
</script>
````

### 2.3. วิธีที่ควรทำ (Good Practice)

ทำตาม standard conventions สำหรับแต่ละภาษา

````vue
<!-- Pass props using kebab-case -->
<MyComponent my-prop="value" />

<!-- Listen for events using kebab-case -->
<MyComponent @my-event="handleEvent" />

<script setup>
// Declare props in camelCase
defineProps({
  myProp: String
})

// Emit events in kebab-case
emit('my-event')
</script>
````

---

## 3. Always Validate Your Props (ตรวจสอบ Props ของคุณเสมอ)

### 3.1. เหตุผล (Rationale)

Prop validation เป็นหนึ่งในรูปแบบที่สำคัญที่สุดของ self-documentation สำหรับ component นี่บอก developers อื่นๆ (และ future self ของคุณ) ว่า component คาดหวัง type ข้อมูลอะไร ว่า required หรือไม่ และอนุญาตให้มี custom validation logic นี่ป้องกัน bugs และทำให้ components ใช้งานได้ง่ายขึ้น

### 3.2. วิธีที่ไม่ควรทำ (Bad Practice)

กำหนด props เป็น array ของ strings ที่เรียบง่าย โดยไม่มี type checking หรือ validation

````javascript
// This provides no information about the expected data type or if it's required.
defineProps(['status', 'user'])
````

### 3.3. วิธีที่ควรทำ (Good Practice)

ให้ definition แบบ object-based โดยละเอียดสำหรับทุก prop โดยระบุ `type`, `required`, และ `default` value ถ้าเกี่ยวข้อง

````javascript
defineProps({
  // Basic type checking
  title: String,

  // Required with type checking
  status: {
    type: String,
    required: true
  },

  // Number with a default value
  likes: {
    type: Number,
    default: 0
  },

  // Custom validator
  userRole: {
    validator(value) {
      // The value must match one of these strings
      return ['admin', 'editor', 'guest'].includes(value)
    }
  }
})
````

---

## 4. Use Directive Shorthands Consistently (ใช้ Directive Shorthands อย่างสอดคล้องกัน)

### 4.1. เหตุผล (Rationale)

Vue มี shorthands สำหรับ directives ที่พบบ่อยที่สุดเพื่อทำให้ templates สะอาดและอ่านง่ายขึ้น

- `:` สำหรับ `v-bind:`
- `@` สำหรับ `v-on:`
- `#` สำหรับ `v-slot:`

คีย์สำคัญของ good DX คือ consistency เลือก style (ใช้ shorthands เสมอหรือไม่ใช้เลย) และยึดมั่นกับมันตลอดทั้ง project ของคุณ

### 4.2. วิธีที่ไม่ควรทำ (Bad Practice)

ผสม long-form และ shorthand syntax ภายใน project เดียวกันหรือแม้แต่ใน component เดียวกัน

````vue
<!-- Inconsistent and harder to read -->
<MyComponent :prop="value" v-on:click="handleClick" />
````

### 4.3. วิธีที่ควรทำ (Good Practice)

สอดคล้องกัน convention ทั่วไปคือใช้ shorthand เสมอ

````vue
<!-- Consistent and clean -->
<MyComponent :prop="value" @click="handleClick" />

<template #header>
  <h1>Header Content</h1>
</template>
````

## อ้างอิง (References)

- [Vue Style Guide](https://vuejs.org/style-guide/)
- [LearnVue - Vue Best Practices](https://learnvue.co/articles/vue-best-practices)