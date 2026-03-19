---
title: Reflect
description: ทบทวนกระบวนการทำงานและเรียนรู้เพื่อปรับปรุงในอนาคต
auto_execution_mode: 3
file-patterns:
  - "workflows/**/*.md"
  - "**/workflows/*.md"
---

## Prerequisites

- งานเสร็จสมบูรณ์และรายงานผลแล้ว
- มีเวลาสำหรับการทบทวนอย่างมีสติ
- พร้อมที่จะเรียนรู้จากประสบการณ์

## 3.1 Precondition

- ข้อมูลจากการทำงานครบถ้วนและพร้อมใช้งาน
- มี feedback จากผู้ที่เกี่ยวข้อง
- สภาพแวดล้อมเอื้อต่อการทบทวน
- ไม่มีความกดดันเร่งด่วน

## 3.2 Prepare

- รวบรวมข้อมูลทั้งหมดจากกระบวนการทำงาน
- ทบทวน timeline และ milestones ที่ผ่านมา
- เตรียมบันทึก observations และ insights
- กำหนด scope ของการทบทวน

## 3.3 Execute

1. วิเคราะห์กระบวนการทำงาน

   - ใช้ `read_file` อ่าน `todo_list` หรือ progress logs ที่บันทึกไว้
   - ใช้ `trajectory_search` ค้นหาประวัติการทำงานย้อนหลังเพื่อวิเคราะห์ patterns
   - ทบทวนแต่ละ phase (analyze, plan, execute, validate, verify) ว่าเป็นอย่างไร
   - ระบุสิ่งที่ทำได้ดีและควรรักษาไว้
   - หาจุดที่สามารถปรับปรุงได้
   - วิเคราะห์สาเหตุของปัญหาที่พบโดยใช้ `code_search` หาจุดที่เกิด errors

2. สร้าง insights และ lessons learned

   - สรุป knowledge ที่ได้รับจากงาน
   - ใช้ `mcp6_read_graph` หรือ `mcp6_search_nodes` ดู memories ที่เก็บไว้
   - ระบุ patterns ที่พบซ้ำๆ โดยใช้ `grep_search` หา recurring issues
   - บันทึก best practices ที่ค้นพบโดยใช้ `create_memory`
   - หา anti-patterns ที่ควรหลีกเลี่ยง
   - ใช้ `skill` เพื่อเปรียบเทียบกับ best practices ที่มีอยู่

3. วางแผนการปรับปรุง

   - ใช้ `todo_list` สร้าง action items สำหรับการปรับปรุง
   - กำหนดวิธีการใช้ lessons learned ในอนาคต
   - ระบุ tools หรือ processes ที่ควรเปลี่ยน
   - ใช้ `write_to_file` สร้าง improvement plan ที่ละเอียด
   - วางแผนการติดตามผลการปรับปรุง
   - ใช้ `create_memory` บันทึก lessons learned สำคัญสำหรับงานถัดไป

## 3.4 Validate

- [ ] การทบทวนครอบคลุมทุก phase สำคัญ
- [ ] Insights ที่ได้มาจากข้อมูลจริง
- [ ] Lessons learned สามารถนำไปใช้ได้จริง
- [ ] Action items มีความชัดเจนและเป็นไปได้
- [ ] มีการบันทึกไว้สำหรับอ้างอิงในอนาคต

## 3.5 Verify

- [ ] ยืนยันว่าได้เรียนรู้จากประสบการณ์จริง
- [ ] ตรวจสอบว่า insights มีคุณค่า
- [ ] ยืนยันว่าพร้อมนำไปใช้ในงานถัดไป
- [ ] ตรวจสอบว่ามีการบันทึกที่เป็นระบบ
- [ ] ยืนยันว่าการทบทวนมีประโยชน์ต่อการพัฒนา
