---
title: Review Vue
auto_execution_mode: 3
description: ตรวจสอบและปรับปรุงคุณภาพ Vue code ตาม Vue best practices และ composition API patterns
---

## 1. Precondition

- มี Vue project (Vue 2 หรือ Vue 3)
- มี bun ติดตั้งในระบบ
- มี Vue tooling (Vue Language Features, Vue Devtools)
- มีสิทธิ์อ่าน/เขียนไฟล์ใน project directory

## 2. Prepare

- ระบุไฟล์ Vue (.vue) และ TypeScript/JavaScript ที่ต้องการตรวจสอบ
- อ่านเนื้อหาปัจจุบันของแต่ละไฟล์
- ตรวจสอบ Vue version และ project setup
- เตรียม Vue-specific linting และ type checking tools

## 3. Execute

1. รัน Vue compiler เพื่อตรวจสอบ template syntax

   ```bash
   bun run build
   ```

2. รัน type checker สำหรับ Vue files

   ```bash
   bun run typecheck
   ```

3. รัน linter ที่รองรับ Vue rules

   ```bash
   bun run lint
   ```

4. ตรวจสอบ Vue specific patterns
   - ตรวจสอบ script setup syntax (สำหรับ Vue 3)
   - ตรวจสอบ composition API usage
   - ตรวจสอบ reactivity patterns (ref, reactive, computed)

5. รัน tests ที่เกี่ยวข้องกับ Vue components

   ```bash
   bun test
   ```

6. ตรวจสอบ Vue file structure
   - ยืนยันว่าใช้ `script setup lang="ts"` ตามมาตรฐาน
   - ตรวจสอบว่า template อยู่ด้านล่าง script
   - ตรวจสอบการใช้ composables ตาม best practices

7. แก้ไขปัญหาที่พบ
   - แก้ไข template syntax errors
   - ปรับปรุงให้ใช้ composition API ตามมาตรฐาน
   - แก้ไข type definitions ใน Vue components
   - ปรับ file structure ให้สอดคล้องกับ best practices

## 4. Validate

- [ ] รัน `bun run build` ผ่านไม่มี compilation errors
- [ ] รัน `bun run typecheck` ผ่านไม่มี type errors
- [ ] รัน `bun run lint` ผ่านไม่มี Vue-specific linting errors
- [ ] รัน `bun test` ผ่านทุก Vue component tests
- [ ] Vue files ใช้ `script setup lang="ts"` ตามมาตรฐาน
- [ ] script อยู่ด้านบน template ใน Vue files
- [ ] ใช้ composition API patterns ถูกต้อง (ref, reactive, computed)
- [ ] ไม่มี Vue 2 options API ที่ไม่จำเป็น (ถ้าใช้ Vue 3)

## 5. Verify

- [ ] ยืนยันว่า Vue components ทำงานได้ปกติ
