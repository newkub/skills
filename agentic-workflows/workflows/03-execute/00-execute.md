---
title: Execute
description: ดำเนินการตามแผนที่วางไว้อย่างมีประสิทธิภาพและติดตามความคืบหน้าอย่างต่อเนื่อง
auto_execution_mode: 3
file-patterns:
  - "workflows/**/*.md"
  - "**/workflows/*.md"
---

## Prerequisites

- มีแผนการที่ชัดเจน สมบูรณ์ และผ่านการ validate แล้ว
- เข้าใจลำดับขั้นตอนการทำงานและ dependencies ทั้งหมด
- พร้อมเริ่มดำเนินการตาม plan ทันที
- มี resources และ tools ที่จำเป็นพร้อมใช้งาน

## 3.1 Precondition

- แผนผ่านการ validate และ approved แล้ว
- Resources ทั้งหมดพร้อมใช้งาน (human, technical, tools)
- Dependencies ก่อนหน้าเสร็จสมบูรณ์และ verified
- Environment และ infrastructure พร้อมสำหรับ execution
- ทีมหรือ stakeholders พร้อมสนับสนุนการดำเนินการ

## 3.2 Prepare

- ตรวจสอบ environment พร้อมใช้งานและ configured ถูกต้อง
- ยืนยัน access และ permissions ที่จำเป็นทั้งหมด
- เตรียม tools, configurations, และ templates ที่ต้องใช้
- สร้าง workspace หรือ setup ที่จำเป็น
- กำหนด communication channels และ update frequency

## 3.3 Execute

1. ดำเนินการตามลำดับขั้นตอนที่กำหนดไว้อย่างเคร่งครัด

   - ทำตาม plan ที่กำหนดไว้ในลำดับที่ถูกต้อง โดยใช้ `todo_list` ติดตาม progress
   - สร้างหรือแก้ไขไฟล์โดยใช้ `write_to_file`, `edit`, `multi_edit` ตามความเหมาะสม
   - รันคำสั่งที่จำเป็นโดยใช้ `run_command` เช่น build, test, install dependencies
   - ใช้ `read_file` เพื่อตรวจสอบโค้ดก่อนและหลังการแก้ไข
   - ใช้ `code_search` และ `grep_search` เพื่อหาตำแหน่งที่ต้องแก้ไขใน codebase
   - ติดตาม progress ของแต่ละ step อย่างสม่ำเสมอและอัปเดต `todo_list`
   - บันทึกผลการทำงานและ any deviations จาก plan

2. จัดการกับปัญหาและ obstacles ที่เกิดขึ้นอย่างมีประสิทธิภาพ

   - ระบุ blockers, obstacles, หรือ issues ทันทีที่พบ
   - ใช้ `search_web` หาวิธีแก้ไขปัญหาที่พบเจอ
   - ใช้ `mcp2_query-docs` หรือ `mcp1_search_cloudflare_documentation` สำหรับข้อมูลเฉพาะทาง
   - ใช้ `skill` เพื่อดู best practices สำหรับการแก้ปัญหาประเภทนั้นๆ
   - ประเมิน impact และ urgency ของแต่ละปัญหา
   - ปรับแผนหรือ approach หากจำเป็นโดยไม่สูญเสีย objectives
   - ขอความช่วยเหลือโดยใช้ `ask_user_question` เมื่อติดขัดจริงๆ

3. ติดตาม รายงาน และ maintain ความคืบหน้าอย่างต่อเนื่อง

   - อัปเดตสถานะการทำงาน (status updates) ตาม checkpoints โดยใช้ `todo_list`
   - ใช้ `browser_preview` และ `mcp5_*` tools สำหรับทดสอบ web applications
   - บันทึกการเปลี่ยนแปลง, decisions, และ rationales อย่างละเอียด
   - ใช้ `create_memory` บันทึกสิ่งสำคัญที่ต้องจำระหว่างทำงาน
   - สร้าง progress report ที่ชัดเจนและ transparent
   - สื่อสารกับ stakeholders ตาม communication plan
   - ปรับ timeline หรือ resources หากจำเป็นโดยมีเหตุผล

## 3.4 Validate

- [ ] ทุกขั้นตอนใน plan ถูกดำเนินการจนสมบูรณ์
- [ ] ผลลัพธ์ตรงตาม success criteria ที่กำหนดไว้
- [ ] ไม่มี errors, critical issues, หรือ blockers ที่ค้างอยู่
- [ ] Quality ของ deliverables อยู่ในระดับที่ยอมรับได้
- [ ] บันทึกและ documentation ครบถ้วนและ accurate

## 3.5 Verify

- [ ] ยืนยันว่างานเสร็จสมบูรณ์ตาม scope ที่กำหนด
- [ ] ตรวจสอบความถูกต้องและ completeness ของผลลัพธ์
- [ ] ยืนยันว่าพร้อมส่งมอบงานและเข้าสู่ validation phase
- [ ] ตรวจสอบว่าไม่มี loose ends หรือ pending items
- [ ] ยืนยันว่าทุก stakeholders พอใจกับผลงาน
