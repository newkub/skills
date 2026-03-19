---
title: Review TypeScript
auto_execution_mode: 3
description: ตรวจสอบและปรับปรุงคุณภาพ TypeScript code ตาม best practices และ type safety standards
---

## 1. Precondition

- มี TypeScript project หรือไฟล์ .ts ที่ต้องการตรวจสอบ
- มี bun ติดตั้งในระบบ
- มี tsconfig.json ที่กำหนดค่าถูกต้อง
- มีสิทธิ์อ่าน/เขียนไฟล์ใน project directory

## 2. Prepare

- ระบุไฟล์ TypeScript ที่ต้องการตรวจสอบ
- อ่านเนื้อหาปัจจุบันของแต่ละไฟล์
- ตรวจสอบว่า tsconfig.json มีอยู่และถูกต้อง
- เตรียม tools สำหรับ type checking และ linting

## 3. Execute

1. รัน type checker เพื่อตรวจสอบ type errors

   ```bash
   bun run typecheck
   ```

2. รัน linter เพื่อตรวจสอบ code quality

   ```bash
   bun run lint
   ```

3. รัน formatter เพื่อตรวจสอบรูปแบบโค้ด

   ```bash
   bun run format:check
   ```

4. รัน tests เพื่อตรวจสอบความถูกต้อง

   ```bash
   bun test
   ```

5. ตรวจสอบ type coverage
   - ตรวจสอบว่ามี `any` types ที่ไม่จำเป็น
   - ยืนยันว่า function parameters มี type annotations
   - ตรวจสอบ return types ของ functions

6. แก้ไขปัญหาที่พบ
   - แก้ไข type errors ที่ type checker พบ
   - แก้ไข linting warnings
   - ปรับ formatting ให้สอดคล้องกัน
   - เพิ่ม type annotations ที่ขาดหาย

## 4. Validate

- [ ] รัน `bun run typecheck` ผ่านไม่มี type errors
- [ ] รัน `bun run lint` ผ่านไม่มี linting errors
- [ ] รัน `bun run format:check` ผ่านไม่มี formatting issues
- [ ] รัน `bun test` ผ่านทุก test case
- [ ] ไม่มี unnecessary `any` types ในโค้ด
- [ ] ทุก public function มี type annotations ครบถ้วน
- [ ] ใช้ strict TypeScript configuration

## 5. Verify

- [ ] ยืนยันว่าโปรเจกต์ TypeScript ทำงานได้ปกติ
