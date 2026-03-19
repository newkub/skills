---
title: Refactoring
description: ปรับปรุงโครงสร้างโค้ดโดยไม่เปลี่ยน behavior
auto_execution_mode: 3
file-patterns:
  - "workflows/**/*.md"
  - "**/workflows/*.md"
---

## Prerequisites

- มีโค้ดที่ต้องการ refactor และเข้าใจ behavior ปัจจุบัน
- Tests ครอบคลุมส่วนที่จะ refactor
- เข้าใจ refactoring patterns และ best practices

## 3.1 Precondition

- Codebase มี tests ที่ pass อยู่
- เข้าใจสิ่งที่ต้องการปรับปรุง (code smell, complexity, etc.)
- Scope ของ refactoring ชัดเจน
- มี time และ resources สำหรับ refactor

## 3.2 Prepare

- รัน tests เพื่อ establish baseline
- ระบุ code smells หรือ areas ที่ต้อง refactoring
- เลือก refactoring patterns ที่เหมาะสม
- เตรียม rollback plan

## 3.3 Execute

1. ระบุส่วนที่ต้อง refactor

   - ใช้ `code_search` หา code smells (long methods, large classes)
   - ใช้ `grep_search` หา duplicate code
   - ใช้ `read_file` อ่านโค้ดที่ซับซ้อน
   - ใช้ `run_command` รัน complexity analysis tools
   - สร้าง prioritized list ของ refactoring targets

2. Apply refactoring อย่างปลอดภัย

   - ใช้ `edit` หรือ `multi_edit` ทำ refactoring ทีละขั้น
   - ทำ small, safe changes (rename, extract method, inline, etc.)
   - รัน tests หลังแต่ละ change (`run_command`)
   - ใช้ `read_file` ตรวจสอบ changes
   - Commit บ่อยๆ เพื่อสามารถ rollback ได้

3. Validate refactoring

   - ใช้ `run_command` รัน full test suite
   - ใช้ `run_command` รัน linters และ type checkers
   - ใช้ `grep_search` ตรวจสอบว่าไม่มี code smells เหลือ
   - ใช้ `code_search` ตรวจสอบ coupling และ cohesion
   - ใช้ `browser_preview` ทดสอบถ้าเป็น web app

4. Document changes

   - ใช้ `write_to_file` อัปเดต documentation
   - ใช้ `edit` เพิ่ม comments ถ้าจำเป็น
   - บันทึก refactoring decisions ด้วย `create_memory`
   - อัปเดต changelog หรือ release notes

## 3.4 Validate

- [ ] Tests ผ่านทั้งหมดหลัง refactoring
- [ ] Behavior ไม่เปลี่ยน (functionality เท่าเดิม)
- [ ] Code quality improved (complexity, readability)
- [ ] ไม่เกิด bugs ใหม่
- [ ] Performance ไม่ degrade

## 3.5 Verify

- [ ] ยืนยันว่า refactoring goals achieved
- [ ] ตรวจสอบว่า code review ผ่าน
- [ ] ยืนยันว่า documentation อัปเดต
- [ ] ตรวจสอบว่า stakeholders ยอมรับ
- [ ] ยืนยันว่าพร้อม merge/deploy
