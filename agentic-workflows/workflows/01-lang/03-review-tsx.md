---
title: Review TSX
auto_execution_mode: 3
description: ตรวจสอบและปรับปรุงคุณภาพ React TSX/TS code ตาม best practices และ React patterns
---

## 1. Precondition

- มี React project ที่ใช้ TypeScript (.tsx, .ts)
- มี bun ติดตั้งในระบบ
- มี tsconfig.json และการตั้งค่า React types
- มีสิทธิ์อ่าน/เขียนไฟล์ใน project directory

## 2. Prepare

- ระบุไฟล์ TSX และ TS ที่ต้องการตรวจสอบ
- อ่านเนื้อหาปัจจุบันของแต่ละไฟล์
- ตรวจสอบว่า dependencies ของ React และ types ถูกต้อง
- เตรียม tools สำหรับ React และ TypeScript checking

## 3. Execute

1. รัน type checker สำหรับ React types

   ```bash
   bun run typecheck
   ```

2. รัน linter ที่รองรับ React rules

   ```bash
   bun run lint
   ```

3. ตรวจสอบ React specific patterns
   - ตรวจสอบ React Hooks rules (rules of hooks)
   - ตรวจสอบ JSX syntax และ attributes
   - ตรวจสอบ component props types

4. รัน tests ที่เกี่ยวข้องกับ React components

   ```bash
   bun test
   ```

5. ตรวจสอบ accessibility ใน JSX
   - ตรวจสอบ alt attributes ใน images
   - ตรวจสอบ aria labels และ roles
   - ตรวจสอบ semantic HTML elements

6. แก้ไขปัญหาที่พบ
   - แก้ไข type errors ใน props และ state
   - แก้ไข React Hooks violations
   - เพิ่ม accessibility attributes ที่ขาดหาย
   - ปรับปรุง component structure ตาม best practices

## 4. Validate

- [ ] รัน `bun run typecheck` ผ่านไม่มี type errors
- [ ] รัน `bun run lint` ผ่านไม่มี React-specific linting errors
- [ ] React Hooks ใช้งานถูกต้องตาม rules of hooks
- [ ] ทุก component มี proper type definitions สำหรับ props
- [ ] JSX มี accessibility attributes ครบถ้วน
- [ ] รัน `bun test` ผ่านทุก React component tests
- [ ] ใช้ functional components และ modern React patterns

## 5. Verify

- [ ] ยืนยันว่า React components ทำงานได้ปกติ
