---
title: Verify
description: ตรวจสอบยืนยันขั้นสุดท้ายเพื่อความมั่นใจสูงสุดก่อนส่งมอบงานอย่างเป็นทางการ
auto_execution_mode: 3
file-patterns:
  - "workflows/**/*.md"
  - "**/workflows/*.md"
---

## Prerequisites

- ผ่านการ validate ครบทุก criteria และไม่มี critical issues
- ผลงานสมบูรณ์ พร้อมส่งมอบ และผ่าน acceptance criteria
- เข้าใจ requirements ทั้งหมดและมี confidence ในคุณภาพ
- Stakeholders พร้อมรับมอบงานและ sign-off

## 3.1 Precondition

- การ validate เสร็จสมบูรณ์และผ่านทุก criteria
- ไม่มี critical issues, blockers, หรือ high-priority bugs ที่ค้างอยู่
- ทีมหรือ stakeholders พร้อมรับมอบงานและให้ sign-off
- Final deliverables พร้อมและ organized อย่างเป็นระบบ
- มี documentation และ handover materials ครบถ้วน

## 3.2 Prepare

- รวบรวม deliverables ทั้งหมดให้ complete และ organized
- เตรียม documentation, guides, และ handover notes อย่างละเอียด
- ตรวจสอบ completeness ครั้งสุดท้ายด้วย fresh perspective
- สร้าง final checklist สำหรับ verify phase
- เตรียม communication และ presentation สำหรับ stakeholders

## 3.3 Execute

1. ตรวจสอบครบถ้วนและละเอียดก่อนส่งมอบอย่างเป็นทางการ

   - ใช้ `read_file` ตรวจสอบทุก deliverables ด้วย final review ที่รอบคอบ
   - ใช้ `list_dir` และ `find_by_name` ตรวจสอบว่าไม่มีไฟล์ตกหล่น
   - ยืนยัน quality standards ทั้งหมดถูกตอบสนองโดยใช้ `run_command` รัน linters ครั้งสุดท้าย
   - ใช้ `run_command` รัน final tests เพื่อยืนยันว่าทุกอย่างทำงานถูกต้อง
   - ตรวจสอบ documentation สมบูรณ์โดยใช้ `read_file` อ่าน README และ docs ต่างๆ
   - ยืนยัน acceptance criteria ทั้งหมดถูกตอบสนองโดย cross-check กับ original requirements
   - ใช้ `grep_search` ตรวจสอบว่าไม่มี debug code หรือ TODO ที่ลืมลบ

2. ทำ final review อย่างละเอียดด้วย critical eye

   - ใช้ `code_search` ทบทวนโค้ดทั้งหมดจากมุมมองของ end user
   - ตรวจสอบ consistency และ coherence ทุกด้านโดยใช้ `grep_search` หา patterns ที่ไม่สอดคล้องกัน
   - ยืนยัน accuracy ของข้อมูล, data, และ results
   - ตรวจสอบ completeness ของ features และ functionality
   - ใช้ `browser_preview` และ `mcp5_*` ทดสอบ UX ครั้งสุดท้ายสำหรับ web apps
   - ประเมิน overall user experience และ satisfaction

3. สร้าง comprehensive handover summary ที่มีคุณค่า

   - สรุปสิ่งที่ทำเสร็จแล้วอย่างละเอียดและ clear โดยใช้ `write_to_file` สร้าง summary report
   - บันทึก known issues, limitations, และ workarounds อย่างตรงไปตรงมา
   - ใช้ `create_memory` บันทึกสิ่งสำคัญสำหรับการ maintenance ในอนาคต
   - แนะนำ next steps, future improvements, และ maintenance
   - จัดทำ troubleshooting guide และ FAQ ที่จำเป็น
   - สร้าง closure report ที่ครบถ้วนสำหรับ project archive

## 3.4 Validate

- [ ] ทุก deliverables สมบูรณ์ ถูกต้อง และ ready for production
- [ ] Documentation ครบถ้วน accurate และ helpful สำหรับ users
- [ ] ผ่าน final review โดยไม่มี issues หรือ concerns ที่สำคัญ
- [ ] Acceptance criteria ทั้งหมดได้รับการตอบสนองและ verified
- [ ] Handover materials พร้อมสำหรับ smooth transition

## 3.5 Verify

- [ ] ยืนยันว่าพร้อมส่งมอบงานอย่างเป็นทางการและมั่นใจ 100%
- [ ] ตรวจสอบว่า stakeholders ยอมรับผลงานและพร้อม sign-off
- [ ] ยืนยันว่างานสำเร็จตาม objectives ทั้งหมดที่กำหนดไว้
- [ ] ตรวจสอบว่า project closure เรียบร้อยและ properly archived
- [ ] ยืนยันว่าทุกฝ่ายพึงพอใจและ ready สำหรับ next phase
