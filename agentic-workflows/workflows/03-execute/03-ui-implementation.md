---
title: UI Implementation
description: พัฒนา UI และ frontend อย่างเป็นระบบ
auto_execution_mode: 3
file-patterns:
  - "workflows/**/*.md"
  - "**/workflows/*.md"
---

## Prerequisites

- UI/UX designs หรือ wireframes พร้อม
- Component library หรือ design system ถูกเลือกแล้ว
- API contracts พร้อมสำหรับ integration

## 3.1 Precondition

- Design mockups หรือ prototypes ชัดเจน
- Component specifications กำหนดแล้ว
- API endpoints พร้อม (หรือ mock)
- Frontend framework ถูกเลือกแล้ว

## 3.2 Prepare

- รวบรวม design assets และ specs
- เตรียม component library
- Setup development environment
- กำหนด component hierarchy

## 3.3 Execute

1. Setup project และ structure

   - ใช้ `write_to_file` สร้าง project structure
   - ใช้ `run_command` ติดตั้ง dependencies
   - ใช้ `edit` กำหนด routing และ layout
   - ใช้ `code_search` ดู existing components

2. Build components

   - ใช้ `write_to_file` สร้าง components
   - ใช้ `browser_preview` ดู visual output
   - ใช้ `edit` refine styling และ behavior
   - ใช้ `run_command` รัน linting

3. Integrate APIs และ state

   - ใช้ `write_to_file` สร้าง API clients
   - ใช้ `edit` แก้ไข state management
   - ใช้ `browser_preview` ทดสอบ integration
   - ใช้ `mcp5_*` รัน E2E tests

## 3.4 Validate

- [ ] UI ตรงตาม designs
- [ ] Responsive และ accessible
- [ ] Components reusable
- [ ] State management ถูกต้อง

## 3.5 Verify

- [ ] ยืนยันว่า designs pixel-perfect
- [ ] ตรวจสอบว่า interactions smooth
- [ ] ยืนยันว่า API integration ทำงาน
- [ ] ตรวจสอบว่า performance acceptable
