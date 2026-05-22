---
title: Feature - Hot Module Replacement (HMR)
description: ความสามารถในการแก้ไขโค้ดแบบ real-time โดยไม่ต้อง reload หน้า
---

# Hot Module Replacement (HMR)

## HMR คืออะไร

HMR (Hot Module Replacement) คือความสามารถที่อนุญาตให้แก้ไขโค้ดใน development mode แล้วเห็นผลลัพธ์ทันที โดยไม่ต้อง refresh หน้าเว็บ

### ข้อดีของ HMR

- **ไม่สูญเสีย state** - ข้อมูลใน form, scroll position, หรือ component state ยังคงอยู่
- **เร็วกว่า full reload** - อัพเดทเฉพาะส่วนที่เปลี่ยนแปลง
- **preserve application state** - ไม่ต้อง navigate กลับไปหน้าเดิม
- **instant feedback** - เห็นผลทันทีหลัง save ไฟล์

---

## การทำงานของ HMR

### Flow การทำงาน

```
1. แก้ไขไฟล์ → Vite detect การเปลี่ยนแปลง
2. Re-compile เฉพาะ module ที่เปลี่ยน
3. ส่ง update ผ่าน WebSocket ไปยัง browser
4. Browser replace module ใหม่เข้าไปแทนที่
5. Application อัพเดทโดยไม่ reload หน้า
```

### HMR Boundary

Vite ใช้ HMR boundary เพื่อกำหนดว่า module ไหนบ้างที่สามารถ hot reload ได้

```typescript
// ตัวอย่าง: Vue component มี HMR boundary อยู่แล้ว
// ไม่ต้องเขียนโค้ดเพิ่ม

// App.vue
<script setup>
import { ref } from 'vue'
const count = ref(0) // state จะถูก preserve
</script>
```

---

## HMR API

### การใช้งาน HMR API

```typescript
// ในไฟล์ที่ต้องการ HMR
if (import.meta.hot) {
  // Accept hot update
  import.meta.hot.accept()
  
  // หรือ with callback
  import.meta.hot.accept((newModule) => {
    console.log('Module updated:', newModule)
  })
}
```

### HMR Events

```typescript
if (import.meta.hot) {
  // ก่อน update
  import.meta.hot.on('vite:beforeUpdate', (event) => {
    console.log('Before update:', event.updates)
  })
  
  // หลัง update
  import.meta.hot.on('vite:afterUpdate', (event) => {
    console.log('After update:', event.updates)
  })
  
  // ก่อน full reload
  import.meta.hot.on('vite:beforeFullReload', () => {
    console.log('Full reload incoming')
  })
  
  // เมื่อเกิด error
  import.meta.hot.on('vite:error', (err) => {
    console.error('HMR error:', err)
  })
}
```

### Dispose Callback

```typescript
if (import.meta.hot) {
  // ทำความสะอาดก่อน module ถูกแทนที่
  import.meta.hot.dispose(() => {
    // Cleanup event listeners
    // Clear timers
    // Remove DOM elements ที่สร้างขึ้น
  })
}
```

---

## Framework Integration

### Vue HMR

```vue
<script setup lang="ts">
// Vue components รองรับ HMR โดยอัตโนมัติผ่าน @vitejs/plugin-vue
// State จะถูก preserve

import { ref } from 'vue'
const count = ref(0) // ค่านี้จะไม่หายเมื่อแก้ไข template
</script>
```

### React HMR (Fast Refresh)

```tsx
// React ใช้ Fast Refresh ผ่าน @vitejs/plugin-react
// Component state จะถูก preserve ใน most cases

import { useState } from 'react'

function Counter() {
  const [count, setCount] = useState(0) // state ไม่หาย
  return <button onClick={() => setCount(c + 1)}>{count}</button>
}
```

### Custom HMR Handler

```typescript
// stores/counter.ts
import { ref } from 'vue'

export const count = ref(0)

if (import.meta.hot) {
  // Preserve state across reloads
  import.meta.hot.accept()
  
  // หรือ restore state
  const saved = import.meta.hot.data.count
  if (saved) {
    count.value = saved
  }
  
  // Save before dispose
  import.meta.hot.dispose(() => {
    import.meta.hot.data.count = count.value
  })
}
```

---

## Self-Accepting Components

```typescript
// Component ที่ยอมรับ hot update เอง
export function render() {
  // render logic
}

if (import.meta.hot) {
  import.meta.hot.accept((newModule) => {
    // ใช้ render function ใหม่
    newModule.render()
  })
}
```

---

## HMR Best Practices

### Do's

- ✅ ใช้ framework plugins (Vue, React) เพื่อ HMR อัตโนมัติ
- ✅ Preserve important state ใน HMR data
- ✅ Cleanup side effects ใน dispose callback
- ✅ ใช้ explicit HMR boundaries สำหรับ complex modules

### Don'ts

- ❌ พึ่งพา HMR สำหรับ state ที่ต้อง persist ระหว่าง sessions
- ❌ ลืม cleanup event listeners หรือ timers
- ❌ ใช้ module-level variables ที่ไม่ควร persist

---

## HMR Performance

### ปัจจัยที่มีผลต่อ HMR Speed

1. **File size** - ไฟล์ใหญ่ re-compile ช้ากว่า
2. **Dependencies** - ถ้า module ถูก import จากหลายที่ ต้อง update ทุกที่
3. **Plugin complexity** - Plugin ที่ทำงานหนักจะทำให้ HMR ช้า

### การ Optimize HMR

```typescript
// vite.config.ts
export default defineConfig({
  server: {
    hmr: {
      overlay: true, // แสดง error บนหน้าจอ
      // กำหนด client port ถ้าจำเป็น
      clientPort: 5173
    }
  }
})
```
