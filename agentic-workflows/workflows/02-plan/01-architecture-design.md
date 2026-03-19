---
title: Architecture Design
description: ออกแบบสถาปัตยกรรมระบบให้รองรับ requirements และ scale
auto_execution_mode: 3
file-patterns:
  - "workflows/**/*.md"
  - "**/workflows/*.md"
---

## Prerequisites

- Requirements ชัดเจนและ approved
- เข้าใจ constraints และ non-functional requirements
- มี knowledge ด้าน architecture patterns

## 3.1 Precondition

- Functional และ non-functional requirements ครบถ้วน
- Scale และ performance targets กำหนดแล้ว
- Technology constraints รู้จัก
- Team มี expertise พอสมควร

## 3.2 Prepare

- รวบรวม requirements และ constraints
- ศึกษา architecture patterns ที่เหมาะสม
- เตรียม decision records templates
- กำหนด evaluation criteria

## 3.3 Execute

1. Analyze requirements

   - ใช้ `read_file` อ่าน requirements
   - ใช้ `search_web` หา similar systems
   - ใช้ `skill` โหลด architecture patterns
   - วิเคราะห์ quality attributes

2. Design architecture

   - ใช้ `write_to_file` สร้าง architecture diagrams
   - ใช้ `code_search` ดู existing patterns
   - ใช้ `mcp2_query-docs` หา best practices
   - ใช้ `edit` iterate บน designs

3. Document decisions

   - ใช้ `write_to_file` สร้าง ADRs
   - ใช้ `create_memory` บันทึก rationale
   - ใช้ `ask_user_question` ยืนยันกับ stakeholders
   - ใช้ `todo_list` track implementation

## 3.4 Validate

- [ ] Architecture รองรับ requirements
- [ ] Non-functional needs ถูก address
- [ ] Decisions documented
- [ ] Trade-offs understood

## 3.5 Verify

- [ ] ยืนยันว่า design feasible
- [ ] ตรวจสอบว่า team สามารถ implement
- [ ] ยืนยันว่า stakeholders approve
- [ ] ตรวจสอบว่า ready สำหรับ implementation
