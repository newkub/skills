# Reactivity System

## Overview

Vue's reactivity system ทำให้ state และ UI อยู่ใน sync อัตโนมัติ เมื่อ state เปลี่ยน UI จะ update โดยอัตโนมัติ

## Core Concepts

### ref()

ใช้สำหรับ primitive values (string, number, boolean):

```ts
import { ref } from 'vue'

const count = ref(0)
const message = ref('Hello')

// Access value
console.log(count.value) // 0

// Update value
count.value = 1
```

### reactive()

ใช้สำหรับ objects และ arrays:

```ts
import { reactive } from 'vue'

const state = reactive({
  count: 0,
  user: {
    name: 'John',
    age: 30
  }
})

// Access
console.log(state.count) // 0

// Update
state.count = 1
state.user.name = 'Jane'
```

### computed()

สร้าง derived state ที่ update อัตโนมัติ:

```ts
import { ref, computed } from 'vue'

const count = ref(0)
const doubleCount = computed(() => count.value * 2)
const isEven = computed(() => count.value % 2 === 0)
```

### watch()

Track changes และ run side effects:

```ts
import { ref, watch } from 'vue'

const count = ref(0)

watch(count, (newValue, oldValue) => {
  console.log(`Count changed from ${oldValue} to ${newValue}`)
})
```

### watchEffect()

Track dependencies อัตโนมัติ:

```ts
import { ref, watchEffect } from 'vue'

const count = ref(0)

watchEffect(() => {
  console.log(`Count is ${count.value}`)
})
```

## Best Practices

### ใช้ ref() สำหรับ primitives

```ts
// ✅ ดี
const count = ref(0)
const message = ref('Hello')

// ❌ ไม่ดี
const state = reactive({
  count: 0,
  message: 'Hello'
})
```

### ใช้ reactive() สำหรับ objects

```ts
// ✅ ดี
const user = reactive({
  name: 'John',
  age: 30
})

// ❌ ไม่ดี
const user = ref({
  name: 'John',
  age: 30
})
```

### ใช้ computed() สำหรับ derived state

```ts
// ✅ ดี
const fullName = computed(() => `${firstName.value} ${lastName.value}`)

// ❌ ไม่ดี
const fullName = ref(`${firstName.value} ${lastName.value}`)
```

### ใช้ watch() เมื่อต้องการ specific dependencies

```ts
// ✅ ดี
watch(count, (newValue) => {
  console.log(newValue)
})

// ❌ ไม่ดี
watchEffect(() => {
  console.log(count.value)
})
```

## Common Patterns

### Destructuring reactive()

```ts
const state = reactive({
  count: 0,
  message: 'Hello'
})

// ❌ ไม่ดี - loses reactivity
const { count, message } = state

// ✅ ดี - maintains reactivity
const count = toRef(state, 'count')
const message = toRef(state, 'message')

// ✅ ดี - destructuring with toRefs
const { count, message } = toRefs(state)
```

### Array Operations

```ts
const items = ref([1, 2, 3])

// ✅ ดี - maintains reactivity
items.value.push(4)
items.value = [...items.value, 4]

// ❌ ไม่ดี - doesn't trigger updates
items.value[0] = 0
```

## References

- [Reactivity Fundamentals](https://vuejs.org/guide/essentials/reactivity-fundamentals)
- [Reactivity API](https://vuejs.org/api/reactivity-core)
