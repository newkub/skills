---
title: Code Review
description: ตรวจสอบโค้ดอย่างละเอียดเพื่อให้แน่ใจว่าคุณภาพและมาตรฐาน
auto_execution_mode: 3
file-patterns:
  - "workflows/**/*.md"
  - "**/workflows/*.md"
---

## Prerequisites

- มีโค้ดที่ต้องการ review (PR, commit, หรือ changes)
- เข้าใจ coding standards และ best practices
- มี context ของโปรเจกต์และ requirements

## 3.1 Precondition

- Code หรือ changes พร้อมสำหรับ review
- Author พร้อมรับ feedback
- Review criteria ชัดเจน
- Time allocated สำหรับ thorough review

## 3.2 Prepare

- รวบรวม context และ requirements
- ศึกษา changes ที่กำลังจะ review
- เตรียม review checklist
- กำหนด review approach (line-by-line, architecture, security)

## 3.3 Execute

1. ทำความเข้าใจ changes

   - ใช้ `read_file` อ่าน changed files
   - ใช้ `code_search` ดู context และ related code
   - ใช้ `grep_search` หา dependencies และ impacts
   - ใช้ `list_dir` สำรวจ file structure

2. Review code quality

   - ใช้ `run_command` รัน linters และ formatters
   - ใช้ `skill` ตรวจสอบ best practices
   - ตรวจสอบ logic, readability, และ maintainability
   - ดู tests และ documentation

3. Provide feedback

   - ใช้ `ask_user_question` สื่อสารกับ author
   - ใช้ `edit` แนะนำ specific improvements
   - ใช้ `create_memory` บันทึก review decisions
   - ใช้ `todo_list` track required changes

## 3.4 Validate

- [ ] Code ทำงานถูกต้อง
- [ ] Quality ตาม standards
- [ ] Security ไม่มี issues
- [ ] Tests ครอบคลุม

## 3.5 Verify

- [ ] ยืนยันว่า feedback ชัดเจน
- [ ] ตรวจสอบว่า concerns ถูก address
- [ ] ยืนยันว่า approve หรือ request changes
- [ ] ตรวจสอบว่า review documented
