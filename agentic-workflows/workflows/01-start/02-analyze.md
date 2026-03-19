---
title: Analyze
description: วิเคราะห์และทำความเข้าใจปัญหาหรืองานอย่างละเอียดก่อนเริ่มดำเนินการ
auto_execution_mode: 3
file-patterns:
  - "workflows/**/*.md"
  - "**/workflows/*.md"
---

## Prerequisites

- เข้าใจ context และบริบทของงานที่ต้องทำอย่างชัดเจน
- มีข้อมูลเพียงพอสำหรับการวิเคราะห์จากแหล่งที่น่าเชื่อถือ
- เข้าใจเป้าหมายหลัก (primary objectives) และขอบเขตของงาน (scope)
- เข้าใจ stakeholder expectations และ success criteria ที่คาดหวัง

## 3.1 Precondition

- ได้รับคำขอหรือคำอธิบายงานที่ชัดเจนและครบถ้วน
- มี access ข้อมูลที่จำเป็นทั้งหมดสำหรับการวิเคราะห์
- เข้าใจ constraints (ข้อจำกัด) และ limitations (ข้อจำกัดเฉพาะ) ของงาน
- ระบุ assumptions (สมมติฐาน) และ dependencies (ความขึ้นต่อ) ที่สำคัญ
- มีเวลาเพียงพอสำหรับการวิเคราะห์อย่างละเอียด

## 3.2 Prepare

- รวบรวมข้อมูลที่เกี่ยวข้องทั้งหมดจากแหล่งต่างๆ
- ตรวจสอบ context ที่มีอยู่ในระบบและ historical data
- ระบุ stakeholders ที่เกี่ยวข้องและความต้องการของแต่ละฝ่าย
- เตรียมเครื่องมือสำหรับการวิเคราะห์ (analysis tools, frameworks)
- กำหนดขอบเขตการวิเคราะห์เพื่อไม่ให้ scope creep

## 3.3 Execute

1. รวบรวมและอ่านข้อมูลที่เกี่ยวข้องอย่างครบถ้วน

   - อ่านไฟล์ที่เกี่ยวข้องกับงานทั้งหมดโดยใช้ `read_file`
   - ค้นหา patterns ที่เคยใช้ใน codebase โดยใช้ `grep_search`, `code_search`, `find_by_name`
   - สำรวจโครงสร้างโปรเจกต์โดยใช้ `list_dir` เพื่อเข้าใจ architecture
   - ค้นหาข้อมูลจากภายนอกโดยใช้ `search_web` หรือ `mcp2_query-docs` สำหรับ library/frameworks
   - โหลด skills ที่เกี่ยวข้องโดยใช้ `skill` เพื่อดู best practices
   - วิเคราะห์ requirements ทั้ง functional และ non-functional

2. ระบุปัญหาหรือโอกาสอย่างลึกซึ้ง

   - แยกแยะ root cause (สาเหตุหลัก) จาก symptoms (อาการ) โดยใช้ `grep_search` หา patterns ผิดปกติ
   - ใช้ `code_search` เพื่อค้นหาโค้ดที่เกี่ยวข้องกับปัญหา
   - ระบุ pain points และ bottlenecks ที่มีอยู่
   - ประเมินความซับซ้อน (complexity) และ technical debt
   - ใช้ `search_web` หา solutions ที่ผู้อื่นใช้แก้ปัญหาคล้ายกัน
   - วิเคราะห์ trade-offs ระหว่าง different approaches

3. สร้าง findings และ insights ที่มีคุณค่า

   - จัดระเบียบข้อมูลที่พบเป็น categories ที่เข้าใจง่าย
   - สร้างสรุปที่ highlight key findings และ critical issues
   - ใช้ `ask_user_question` เมื่อต้องการยืนยัน assumptions หรือขอข้อมูลเพิ่มเติม
   - ระบุความเสี่ยง (risks) ที่อาจเกิดขึ้นและ mitigation strategies
   - สร้าง recommendations ที่ actionable และ prioritized
   - บันทึกสำคัญโดยใช้ `create_memory` หากจำเป็นจัดเก็บระยะยาว

## 3.4 Validate

- [ ] ข้อมูลที่วิเคราะห์ครบถ้วน ถูกต้อง และ up-to-date
- [ ] ระบุ root cause ได้อย่างชัดเจนและมีหลักฐานสนับสนุน
- [ ] สรุป findings สอดคล้องกับข้อมูลและ data ที่มี
- [ ] ระบุ risks และ assumptions ที่สำคัญครบถ้วน
- [ ] Recommendations มีความเป็นไปได้และ actionable

## 3.5 Verify

- [ ] ยืนยันว่าการวิเคราะห์ครอบคลุมทุกมิติที่สำคัญ
- [ ] ตรวจสอบความสมบูรณ์และ accuracy ของข้อมูล
- [ ] ยืนยันว่าพร้อมดำเนินการต่อไปยัง phase ถัดไป
- [ ] ตรวจสอบว่า findings สามารถนำไปใช้วางแผนได้จริง
- [ ] ยืนยันว่าไม่มี missing information ที่สำคัญ
