---
title: Execute
description: Execute steps ทั้งหมดของ skill write-markdown
---

## Execute Steps

### 1. วิเคราะห์ความต้องการ

1. อ่าน user request อย่างละเอียด
2. ระบุประเภทของเอกสารที่ต้องการ (README, guide, tutorial, reference)
3. ระบุ audience และ purpose ของเอกสาร
4. ระบุ templates ที่เกี่ยวข้องจาก `templates/`
5. วางแผนโครงสร้างของเอกสารตาม patterns ใน `guide/patterns.md`

### 2. เลือก Templates

1. ค้นหา templates ที่เกี่ยวข้องใน `templates/`
2. อ่านและเข้าใจรูปแบบของแต่ละ template
3. เลือก templates ที่เหมาะสมกับ content และ use case
4. ตรวจสอบว่า templates มีรูปแบบที่ถูกต้องตาม best practices
5. ตรวจสอบ consistency กับ templates อื่นๆ ที่ใช้

### 3. เขียน Content

1. เริ่มเขียนตาม structure ที่วางแผน
2. ใช้ templates ที่เลือกตามรูปแบบที่กำหนด
3. เขียน content ให้ชัดเจนและเข้าใจง่ายตาม principles ใน `principles/`
4. ใช้ formatting ที่สม่ำเสมอตาม `key-concepts/formatting.md`
5. ใช้ syntax ที่ถูกต้องตาม `key-concepts/syntax.md`
6. จัดโครงสร้างตาม `key-concepts/structure.md`

### 4. ตรวจสอบคุณภาพ

1. ตรวจสอบ syntax ของ Markdown ว่าถูกต้อง
2. ตรวจสอบ consistency กับ templates อื่นๆ
3. ตรวจสอบว่า content ครอบคลุมตาม best practices ใน `guide/best-practices.md`
4. ตรวจสอบว่า formatting ถูกต้องและสม่ำเสมอ
5. ตรวจสอบว่า structure ถูกต้องตาม hierarchy
6. ตรวจสอบว่า links และ references ใช้งานได้
7. ตรวจสอบว่า code blocks มี syntax highlighting ที่ถูกต้อง

### 5. ตรวจสอบความถูกต้อง

1. ตรวจสอบว่า content ตรงกับ user requirements
2. ตรวจสอบว่า terminology สม่ำเสมอ
3. ตรวจสอบว่า examples ถูกต้องและ complete
4. ตรวจสอบว่าไม่มี logical errors
5. ตรวจสอบว่า references มีอยู่จริง

### 6. ปรับปรุง

1. ทำ `simplify-content` หากจำเป็น
2. ปรับปรุง clarity ตาม `principles/clarity.md`
3. ปรับปรุง consistency ตาม `principles/consistency.md`
4. ปรับปรุง simplicity ตาม `principles/simplicity.md`
5. ลบ content ที่ซ้ำซ้อนหรือไม่จำเป็น

### 7. ส่งมอบ

1. ส่งเอกสารที่เสร็จสมบูรณ์
2. อธิบายสิ่งที่ทำไป
3. แนะนำการปรับปรุงถ้าจำเป็น
4. ระบุ templates ที่ใช้
5. ระบุ references ที่เกี่ยวข้อง
