---
title: Review Component Design
description: ตรวจสอบการออกแบบ components, reusability, composition และ component APIs
auto_execution_mode: 3
file-patterns:
  - "**/workflows/04-design/*-review-component.md"
---

## Prerequisites

- เข้าใจ component-based architecture
- รู้จัก composition patterns (compound components, render props, slots)
- เข้าใจ separation of concerns ใน components
- รู้จัก design systems และ component libraries

## 3.1 Precondition

- มี UI components หรือ design system ที่ต้องตรวจสอบ
- มีสิทธิ์อ่าน/เขียนไฟล์ใน project directory
- เข้าใจ framework ที่ใช้ (React, Vue, Svelte, etc.)

## 3.2 Prepare

- รวบรวม component documentation และ design specs
- ระบุ component hierarchy และ dependencies
- เตรียม checklist ตาม component design best practices
- ทำความเข้าใจ state management ใน components

## 3.3 Execute

1. ตรวจสอบ single responsibility
   - แต่ละ component มีหน้าที่ชัดเจนเดียว
   - ไม่มี component ที่ทำหลายอย่างเกินไป (God Component)
   - Separation ระหว่าง presentational และ container components

2. ตรวจสอบ reusability
   - Props API ที่ flexible และ predictable
   - Default values ที่ sensible
   - รองรับ multiple use cases โดยไม่ต้องแก้ไข component
   - Avoid hard-coded values ที่ specific เกินไป

3. ตรวจสอบ composition
   - Support children/slots สำหรับ flexible content
   - Compound component pattern (ถ้าเหมาะสม)
   - Render props pattern (ถ้าจำเป็น)
   - Composition แทน inheritance

4. ตรวจสอบ component API
   - Props naming ที่ consistent และ semantic
   - TypeScript types/interfaces ที่ complete
   - Events/callbacks ที่ well-defined
   - Documentation สำหรับ props และ usage

5. ตรวจสอบ state management
   - Local state vs lifted state decision ที่เหมาะสม
   - Avoid unnecessary prop drilling
   - State synchronization ที่ถูกต้อง
   - Immutable state updates

6. ตรวจสอบ side effects
   - Lifecycle methods/effects ที่ necessary เท่านั้น
   - Cleanup functions สำหรับ subscriptions/timers
   - Avoid side effects ใน render phase
   - Race condition handling

7. ตรวจสอบ testing สำหรับ components
   - Testable components (dependency injection)
   - Mocking external dependencies ได้
   - Accessibility testing

## 3.4 Validate

- [ ] Components มี single responsibility ที่ชัดเจน
- [ ] Props API มี documentation และ TypeScript types
- [ ] Reusability สูง (ไม่ hard-code specific values)
- [ ] Composition patterns ใช้งานถูกต้อง
- [ ] State management มี separation ที่เหมาะสม
- [ ] Side effects ถูกจัดการและ cleanup ถูกต้อง
- [ ] Components testable และมี tests

## 3.5 Verify

- [ ] ยืนยันว่า components render ถูกต้องใน isolation
- [ ] ทดสอบ composition ของ multiple components
- [ ] ตรวจสอบ performance กับ large component trees
- [ ] ทดสอบ reusability ใน multiple contexts
