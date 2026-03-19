---
title: Review Agents
auto_execution_mode: 3
description: ตรวจสอบและปรับปรุงคุณภาพ AGENTs.md files ให้เป็นมาตรฐาน AI-executable
---

## 1. Precondition

- มีไฟล์ AGENTs.md หรือ AGENT.md ในโปรเจกต์ที่ต้องการตรวจสอบ
- เข้าใจโครงสร้างและวัตถุประสงค์ของ AGENTs files
- มีสิทธิ์อ่าน/เขียนไฟล์ใน target directory

## 2. Prepare

- ค้นหาไฟล์ AGENTs.md ทั้งหมดในโปรเจกต์
- อ่านเนื้อหาปัจจุบันของแต่ละไฟล์
- ตรวจสอบความสอดคล้องกับ AGENTs structure ที่กำหนด
- ยืนยัน AI สามารถ execute ตามคำสั่งได้จริง

## 3. Execute

1. ค้นหาไฟล์ AGENTs ทั้งหมดในโปรเจกต์

   ```bash
   find . -name "AGENT*.md" -type f
   ```

2. อ่านแต่ละไฟล์และตรวจสอบโครงสร้าง
   - ตรวจสอบว่ามี frontmatter ครบถ้วน (title, description)
   - ตรวจสอบหมวดหมู่ที่จำเป็น (Precondition, Prepare, Execute, Validate, Verify)
   - ยืนยันคำสั่งเป็น actionable และ AI สามารถทำได้

3. แก้ไขไฟล์ที่ไม่ตรงมาตรฐาน
   - เพิ่ม frontmatter ที่ขาดหาย
   - ปรับโครงสร้างให้มี 5 ส่วนหลัก
   - แปลงคำสั่งให้เป็น AI-executable

4. ตรวจสอบ consistency ระหว่างไฟล์
   - ใช้ naming convention สอดคล้องกัน
   - ใช้ format เดียวกันในทุกไฟล์

## 4. Validate

- [ ] ทุกไฟล์ AGENTs.md มี frontmatter ครบถ้วน
- [ ] โครงสร้างไฟล์มี 5 ส่วนหลักถูกต้อง
- [ ] คำสั่งทั้งหมดเป็น actionable และ AI สามารถ execute ได้
- [ ] ใช้ bun ไม่ใช้ npm ในทุกคำสั่ง
- [ ] ไม่มี relative paths ใช้ absolute paths เสมอ
- [ ] ไม่มีคำสั่งที่ต้องรอ human interaction

## 5. Verify

- [ ] ยืนยันว่าทุก AGENTs.md สามารถทำงานได้จริง
