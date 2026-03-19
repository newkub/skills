---
title: Team Sync
description: ประสานงานและ sync กับทีมอย่างมีประสิทธิภาพ
auto_execution_mode: 3
file-patterns:
  - "workflows/**/*.md"
  - "**/workflows/*.md"
---

## Prerequisites

- มีทีมที่ต้องการ sync
- เข้าใจ agenda และ goals ของ sync
- มี communication channels พร้อม

## 3.1 Precondition

- Agenda ชัดเจน
- Team members พร้อมเข้าร่วม
- Context และ updates พร้อมแชร์
- Time และ platform กำหนดแล้ว

## 3.2 Prepare

- สร้าง agenda และ talking points
- รวบรวม updates และ progress
- เตรียม blockers และ issues ที่ต้อง discuss
- กำหนด action items ที่ต้องตัดสินใจ

## 3.3 Execute

1. Share updates

   - ใช้ `read_file` อ่าน progress reports
   - ใช้ `todo_list` แสดง task status
   - ใช้ `list_dir` แสดง deliverables
   - ใช้ `ask_user_question` collect team updates

2. Discuss blockers และ solutions

   - ใช้ `code_search` หา technical context
   - ใช้ `search_web` หา solutions
   - ใช้ `mcp6_search_nodes` หา past decisions
   - ใช้ `ask_user_question` reach consensus

3. Define next steps

   - ใช้ `todo_list` สร้าง action items
   - ใช้ `write_to_file` บันทึก decisions
   - ใช้ `create_memory` บันทึก key points
   - ใช้ `ask_user_question` assign responsibilities

## 3.4 Validate

- [ ] ทุกคน share updates ครบถ้วน
- [ ] Blockers ถูก identify และวางแผน
- [ ] Decisions ถูกบันทึก
- [ ] Action items ชัดเจน

## 3.5 Verify

- [ ] ยืนยันว่าทุกคนเข้าใจ next steps
- [ ] ตรวจสอบว่า action items assigned
- [ ] ยืนยันว่า sync productive
- [ ] ตรวจสอบว่า follow-up scheduled
