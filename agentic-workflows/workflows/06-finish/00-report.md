---
title: Report
description: สรุปผลลัพธ์และรายงานผลการทำงานอย่างเป็นระบบ
auto_execution_mode: 3
file-patterns:
  - "workflows/**/*.md"
  - "**/workflows/*.md"
---

## Prerequisites

- งานเสร็จสมบูรณ์และผ่านการตรวจสอบแล้ว
- มีผลลัพธ์ที่ชัดเจนและสามารถนำเสนอได้
- เข้าใจผู้รับรายงานและความต้องการของพวกเขา

## 3.1 Precondition

- งานทั้งหมดเสร็จสิ้นตามที่วางแผนไว้
- มี deliverables ที่ครบถ้วนและถูกต้อง
- ผ่านการ validate และ verify แล้ว
- มีข้อมูลสำหรับสรุปผลการทำงาน

## 3.2 Prepare

- รวบรวมผลลัพธ์ทั้งหมดจากการทำงาน
- เตรียมข้อมูลสถิติและ metrics ที่เกี่ยวข้อง
- จัดระเบียบ evidence และ supporting materials
- กำหนดรูปแบบรายงานที่เหมาะสมกับผู้รับ

## 3.3 Execute

1. สร้างสรุปผลการทำงาน

   - ใช้ `read_file` อ่าน deliverables และผลลัพธ์ทั้งหมดที่สร้างขึ้น
   - ใช้ `list_dir` ตรวจสอบโครงสร้างไฟล์และ completeness
   - สรุปสิ่งที่ทำสำเร็จตาม objectives
   - ระบุ key results และ achievements สำคัญ
   - อธิบาย impact และ value ที่เกิดขึ้น
   - ยืนยันว่าตรงตาม success criteria โดย cross-check กับ original plan

2. จัดทำรายงานอย่างละเอียด

   - ใช้ `write_to_file` สร้าง executive summary ที่กระชับ
   - ใช้ `write_to_file` สร้างรายงานฉบับเต็ม (full report) ตาม template ที่กำหนด
   - อธิบาย approach และ methodology ที่ใช้ พร้อม reference ถึง `skill` หรือ best practices ที่ใช้
   - แสดงผลลัพธ์พร้อมข้อมูลประกอบ เช่น screenshots จาก `mcp5_browser_take_screenshot` หากเป็น web app
   - ระบุ challenges และวิธีการแก้ไข พร้อม links ถึง resources ที่ใช้ เช่น `search_web`
   - ใช้ `grep_search` หา metrics หรือ statistics จากโค้ดหรือ logs

3. สื่อสารและส่งมอบ

   - ใช้ `ask_user_question` เพื่อยืนยันรูปแบบรายงานที่ผู้รับต้องการ
   - นำเสนอรายงานตามช่องทางที่เหมาะสม พร้อม `read_file` แสดงเนื้อหาสำคัญ
   - ตอบคำถามและให้ clarification เพิ่มเติม
   - ใช้ `create_memory` บันทึก feedback และ comments ที่ได้รับ
   - ใช้ `todo_list` ปิด task อย่างเป็นระบบ

## 3.4 Validate

- [ ] รายงานครอบคลุมทุกส่วนที่สำคัญ
- [ ] ข้อมูลถูกต้องและตรวจสอบได้
- [ ] สรุปผลตรงกับ deliverables จริง
- [ ] รูปแบบรายงานเหมาะสมกับผู้รับ
- [ ] ได้รับการยอมรับจากผู้ที่เกี่ยวข้อง

## 3.5 Verify

- [ ] ยืนยันว่ารายงานสมบูรณ์และถูกต้อง
- [ ] ตรวจสอบว่าไม่มีข้อมูลสำคัญตกหล่น
- [ ] ยืนยันว่าผู้รับเข้าใจรายงาน
- [ ] ตรวจสอบว่า task ปิดสมบูรณ์
- [ ] ยืนยันว่าพร้อมสำหรับ handoff
