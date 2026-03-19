---
title: Clarify Requirements
description: ทำความเข้าใจและ clarify requirements ให้ชัดเจนก่อนเริ่มงาน
auto_execution_mode: 3
file-patterns:
  - "workflows/**/*.md"
  - "**/workflows/*.md"
---

## Prerequisites

- ได้รับ requirements หรือ specifications
- เข้าใจ business context และ user needs
- มี access สู่ stakeholders เพื่อถามคำถาม

## 3.1 Precondition

- Requirements documentation พร้อม
- Stakeholders พร้อมตอบคำถาม
- Business objectives ชัดเจน
- Time สำหรับ clarification session

## 3.2 Prepare

- อ่าน requirements เริ่มต้น
- ระบุ areas ที่คลุมเครือหรือกว้างเกินไป
- เตรียมคำถามเฉพาะเจาะจง
- กำหนด criteria สำหรับ success

## 3.3 Execute

1. Review initial requirements

   - ใช้ `read_file` อ่าน requirements documents
   - ใช้ `search_web` หา industry standards
   - ใช้ `skill` โหลด domain knowledge
   - ใช้ `mcp6_read_graph` ดู past context

2. Ask clarifying questions

   - ใช้ `ask_user_question` ถาม stakeholders
   - สร้าง scenarios และ use cases
   - ยืนยัน assumptions และ constraints
   - ขอ examples และ edge cases

3. Document clarified requirements

   - ใช้ `write_to_file` สร้าง clarified requirements doc
   - ใช้ `edit` อัปเดต existing docs
   - ใช้ `create_memory` บันทึก decisions
   - ใช้ `todo_list` track follow-ups

## 3.4 Validate

- [ ] Requirements ชัดเจนและ unambiguous
- [ ] Stakeholders agree กับ clarified requirements
- [ ] Success criteria กำหนดแล้ว
- [ ] Edge cases documented

## 3.5 Verify

- [ ] ยืนยันว่าไม่ missing requirements
- [ ] ตรวจสอบว่า constraints understood
- [ ] ยืนยันว่า ready สำหรับ planning
- [ ] ตรวจสอบว่า sign-off ได้รับ
