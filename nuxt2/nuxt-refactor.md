---
name: nuxt-refactor
description: แนวทางการ refactor โปรเจกต์ Nuxt ให้เป็นไปตาม best practices
---

## When to Use
ใช้เมื่อต้อง refactor โปรเจกต์ Nuxt ที่มีอยู่ให้เป็นไปตาม best practices

## Structure

### 1. Analyze Current Structure

ตรวจสอบโครงสร้างโปรเจกต์ปัจจุบัน:

```bash
# ตรวจสอบโครงสร้างโปรเจกต์
eza --tree --git-ignore
```

ตรวจสอบสิ่งเหล่านี้:
- โครงสร้างโฟลเดอร์ตามมาตรฐาน
- การจัดวางไฟล์ components
- การจัดวางไฟล์ pages
- การจัดวางไฟล์ composables
- การจัดวางไฟล์ layouts

### 2. Identify Issues

ระบุปัญหาที่ต้องแก้ไข:

- ไฟล์ที่ยาวเกินไป (>300 lines)
- โค้ดที่ซ้ำซ้อน
- การจัดวางที่ไม่เป็นระเบียบ
- การใช้งานที่ไม่ถูกต้อง
- การขาด best practices

### 3. Create Refactor Plan

สร้างแผนการ refactor:

```
1. สร้างโครงสร้างโฟลเดอร์ใหม่
2. ย้ายไฟล์ไปยังตำแหน่งที่ถูกต้อง
3. แยกไฟล์ที่ยาวเกินไป
4. สร้าง composables สำหรับโค้ดที่ใช้ร่วมกัน
5. อัปเดต imports ทั้งหมด
6. ทดสอบการทำงาน
```

## Configuration

### 4. Update Project Structure

สร้างโครงสร้างโฟลเดอร์ตามมาตรฐาน:

```
src/
├── components/
│   ├── atoms/
│   ├── molecules/
│   └── organisms/
├── composables/
├── layouts/
├── pages/
├── server/
│   ├── api/
│   └── middleware/
├── stores/
└── types/
```

### 5. Update Config Files

ตรวจสอบและอัปเดต config files:

```typescript
// nuxt.config.ts
export default defineNuxtConfig({
  components: true,
  composables: true,
  imports: {
    dirs: ['composables', 'utils']
  }
})
```

## Usage

### 6. Refactor Components

แยก components ตามหลักการ:

**Atoms:** ส่วนประกอบพื้นฐาน
- Button
- Input
- Badge

**Molecules:** ส่วนประกอบที่รวม atoms
- FormField
- Card
- NavbarItem

**Organisms:** ส่วนประกอบที่ซับซ้อน
- Form
- Navbar
- Layout

### 7. Extract Composables

แยก logic ที่ใช้ร่วมกัน:

```typescript
// composables/useAuth.ts
export const useAuth = () => {
  const user = useState('user', () => null)
  
  const login = async (credentials) => {
    // login logic
  }
  
  return { user, login }
}
```

### 8. Update Imports

อัปเดต imports ทั้งหมด:

```typescript
// จาก
import { useState } from '#app'

// เป็น
import { useState } from '@vueuse/core'
```

## Verification

### 9. Test Functionality

ตรวจสอบการทำงาน:

```bash
# รัน dev server
npm run dev

# รัน tests
npm run test

# รัน lint
npm run lint
```

### 10. Verify Structure

ตรวจสอบโครงสร้าง:

```bash
# ตรวจสอบโครงสร้าง
eza --tree --git-ignore

# ตรวจสอบไฟล์ที่ยาว
find src -name "*.vue" -exec wc -l {} \;
```

### 11. Check Best Practices

ตรวจสอบ best practices:

- Components ไม่เกิน 200 lines
- Composables ไม่เกิน 100 lines
- ไม่มีโค้ดที่ซ้ำซ้อน
- มี TypeScript types ที่ชัดเจน
- มี tests ครอบคลุม

## Examples

### Example 1: Refactor Long Component

**Before:**
```vue
<script setup lang="ts">
// 300+ lines of logic
</script>

<template>
  <!-- complex template -->
</template>
```

**After:**
```vue
<script setup lang="ts">
import { useAuth } from '~/composables/useAuth'
import { useForm } from '~/composables/useForm'

const { user } = useAuth()
const { form, submit } = useForm()
</script>

<template>
  <!-- simplified template -->
</template>
```

### Example 2: Extract Shared Logic

**Before:**
```vue
<script setup lang="ts">
// duplicate logic in multiple files
const fetchData = async () => {
  // logic
}
</script>
```

**After:**
```typescript
// composables/useFetchData.ts
export const useFetchData = () => {
  const data = ref(null)
  const loading = ref(false)
  
  const fetch = async () => {
    loading.value = true
    data.value = await fetchData()
    loading.value = false
  }
  
  return { data, loading, fetch }
}
```

```vue
<script setup lang="ts">
import { useFetchData } from '~/composables/useFetchData'

const { data, loading, fetch } = useFetchData()
</script>
```

## Verification

1. ตรวจสอบว่าโครงสร้างโปรเจกต์ตามมาตรฐาน
2. ทดสอบด้วย `npm run dev` และ `npm run test`
3. ตรวจสอบว่าไม่มี errors หรือ warnings
4. ตรวจสอบว่า components ไม่เกิน 200 lines
5. ตรวจสอบว่า composables ไม่เกิน 100 lines