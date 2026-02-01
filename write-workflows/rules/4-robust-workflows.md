# Robust Workflows Rules

## Strict Rules
- ทุก workflow ต้องมี error handling ที่ครอบคลุม
- ห้ามใช้ `any` types โดยเด็ดขาด
- ทุก input ต้องมี validation
- ห้ามใช้ hardcoded values โดยไม่ระบุว่าสามารถปรับได้
- ทุก function ต้องมี type annotations
- ทุก error ต้องมี error code และ error message ที่ชัดเจน
- ห้าม swallow errors โดยไม่มีการจัดการที่เหมาะสม
- ทุก critical operation ต้องมี rollback mechanism

## Handle Errors Properly
- ระบุ error types ที่เป็นไปได้ใน workflow
- ให้วิธีจัดการ error ที่ชัดเจน
- ระบุ rollback plans สำหรับแต่ละ error
- ให้ error messages ที่เข้าใจง่าย
- ระบุวิธีการ recover จาก error

## Use Type Safety
- ใช้ TypeScript หรือ type checking สำหรับ code examples
- กำหนด types ที่ชัดเจน
- หลีกเลี่ยง `any` types
- กำหนด data types สำหรับ inputs และ outputs
- ใช้ TypeScript interfaces สำหรับ data structures ที่ซับซ้อน

## Validate Input
- validate inputs ทุกตัวใน examples
- sanitize user inputs
- จัดการ null/undefined
- ระบุ validation rules สำหรับทุก input
- ให้ตัวอย่างของ valid และ invalid inputs

## Verification
- ตรวจสอบว่าทุก workflow มี error handling
- ยืนยันว่าไม่มีการใช้ `any` types
- ตรวจสอบว่าทุก input มี validation
- ยืนยันว่ามี type annotations ครบถ้วน
- ตรวจสอบว่า critical operations มี rollback mechanism
