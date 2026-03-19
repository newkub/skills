---
title: Knowledge Sharing
description: แบ่งปันและ传播 knowledge ภายในทีมหรือ community
auto_execution_mode: 3
file-patterns:
  - "workflows/**/*.md"
  - "**/workflows/*.md"
---

## Prerequisites

- มี knowledge หรือ experience ที่ต้องการแบ่งปัน
- เข้าใจ target audience และ their needs
- มี channels และ platforms สำหรับ sharing

## 3.1 Precondition

- Knowledge หรือ insights ชัดเจน
- Content format ถูกกำหนด (doc, presentation, workshop)
- Audience พร้อมรับ knowledge
- Time และ resources สำหรับ preparation

## 3.2 Prepare

- กำหนด key messages และ takeaways
- เตรียม content และ materials
- จัดระเบียบ examples และ case studies
- เตรียม Q&A และ discussion points

## 3.3 Execute

1. Create knowledge content

   - ใช้ `write_to_file` สร้าง documentation
   - ใช้ `read_file` รวบรวม examples จาก codebase
   - ใช้ `code_search` หา code snippets ที่ illustrative
   - ใช้ `mcp5_browser_take_screenshot` สร้าง visuals

2. Share และ present

   - ใช้ `ask_user_question` สื่อสารกับ audience
   - ใช้ `browser_preview` แสดง live demos
   - ใช้ `run_command` รัน live coding examples
   - ใช้ `read_file` นำเสนอ documentation

3. Gather feedback และ iterate

   - ใช้ `ask_user_question` ขอ feedback
   - ใช้ `create_memory` บันทึก insights
   - ใช้ `edit` ปรับปรุง content ตาม feedback
   - ใช้ `todo_list` track follow-up actions

## 3.4 Validate

- [ ] Content ชัดเจนและเข้าใจง่าย
- [ ] Examples relevant และ helpful
- [ ] Audience เข้าใจและ engage
- [ ] Knowledge transfer สำเร็จ

## 3.5 Verify

- [ ] ยืนยันว่า knowledge documented
- [ ] ตรวจสอบว่า feedback รวบรวมแล้ว
- [ ] ยืนยันว่า content reusable
- [ ] ตรวจสอบว่า impact วัดได้
