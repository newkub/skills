---
title: Accessibility Review
description: ตรวจสอบ accessibility เพื่อให้แน่ใจว่าทุกคนใช้งานได้
auto_execution_mode: 3
file-patterns:
  - "workflows/**/*.md"
  - "**/workflows/*.md"
---

## Prerequisites

- UI/UX implementation เสร็จสมบูรณ์
- เข้าใจ accessibility standards (WCAG)
- มี tools สำหรับ accessibility testing

## 3.1 Precondition

- Application หรือ website พร้อมสำหรับ testing
- Accessibility requirements กำหนดแล้ว
- Testing environment พร้อม
- Checklist หรือ standards ถูกเลือกแล้ว

## 3.2 Prepare

- รวบรวม accessibility requirements
- เตรียม testing tools (Lighthouse, axe, etc.)
- กำหนด testing scenarios
- เตรียม assistive technology สำหรับ manual testing

## 3.3 Execute

1. Run automated checks

   - ใช้ `run_command` รัน Lighthouse accessibility audit
   - ใช้ `run_command` รัน axe-core tests
   - ใช้ `grep_search` หา semantic HTML issues
   - ใช้ `read_file` ตรวจสอบ ARIA labels

2. Manual testing

   - ใช้ `browser_preview` ทดสอบ keyboard navigation
   - ทดสอบ screen reader compatibility
   - ใช้ `mcp5_browser_click` ทดสอบ interactive elements
   - ตรวจสอบ color contrast และ visual impairments

3. Document และ fix issues

   - ใช้ `write_to_file` สร้าง accessibility report
   - ใช้ `edit` แก้ไข issues ที่พบ
   - ใช้ `todo_list` track fixes
   - ใช้ `create_memory` บันทึก best practices

## 3.4 Validate

- [ ] Automated checks ผ่าน
- [ ] Keyboard navigation ทำงานได้
- [ ] Screen reader compatible
- [ ] Color contrast ตรงตาม standards

## 3.5 Verify

- [ ] ยืนยันว่า WCAG compliant
- [ ] ตรวจสอบว่า real user testing ผ่าน
- [ ] ยืนยันว่า documentation อัปเดต
- [ ] ตรวจสอบว่า ready สำหรับ production
