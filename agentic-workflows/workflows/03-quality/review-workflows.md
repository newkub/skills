---
title: Review Workflows
auto_execution_mode: 3
description: ตรวจสอบและปรับปรุงคุณภาพ workflow files ให้เป็นมาตรฐาน AI-executable
---

## 1. Precondition

- มี workflow files (.md) ในโปรเจกต์ที่ต้องการตรวจสอบ
- เข้าใจโครงสร้างมาตรฐานของ AI-executable workflows
- มีสิทธิ์อ่าน/เขียนไฟล์ใน workflow directory

## 2. Prepare

- ค้นหา workflow files ทั้งหมดในโปรเจกต์
- อ่านเนื้อหาปัจจุบันของแต่ละไฟล์
- ตรวจสอบความสอดคล้องกับ write-workflows.md มาตรฐาน
- เตรียม checklist สำหรับการตรวจสอบ workflow structure

## 3. Execute

1. ค้นหา workflow files ทั้งหมด

   ```bash
   find . -path "*/workflows/*.md" -type f | grep -v node_modules
   ```

2. ตรวจสอบ frontmatter ของแต่ละ workflow
   - ต้องมี `title` ที่ตรงกับชื่อไฟล์ (kebab-case → readable)
   - ต้องมี `description` ไม่เกิน 150 ตัวอักษร
   - title ไม่เกิน 60 ตัวอักษร

3. ตรวจสอบโครงสร้าง 5 ส่วนหลัก
   - มี `## 1. Precondition` (bullet points)
   - มี `## 2. Prepare` (bullet points)
   - มี `## 3. Execute` (numbered list 1., 2.)
   - มี `## 4. Validate` (checkbox - [ ])
   - มี `## 5. Verify` (checkbox - [ ])

4. ตรวจสอบ AI-executable requirements
   - ทุก step เป็น actionable command
   - ใช้ `bun` ไม่ใช้ `npm` หรือ `npx`
   - ไม่มีคำสั่งที่ require human interaction
   - ใช้ absolute paths ไม่ใช้ relative paths

5. ตรวจสอบ writing style
   - ใช้ imperative mood (คำสั่ง)
   - ไม่มีคำว่า "etc", "etc.", "เป็นต้น"
   - ใช้ heading `##` และ `###` เท่านั้น
   - code blocks ระบุภาษาเสมอ

6. แก้ไขไฟล์ที่ไม่ตรงมาตรฐาน
   - เพิ่มหรือแก้ไข frontmatter
   - ปรับโครงสร้างให้มี 5 ส่วนหลัก
   - แก้ไขคำสั่งให้เป็น AI-executable
   - ปรับ writing style ตามมาตรฐาน

## 4. Validate

- [ ] ทุก workflow file มี frontmatter ครบถ้วน (title, description, auto_execution_mode)
- [ ] title และ description ถูกต้องตามชื่อไฟล์และขนาด
- [ ] โครงสร้างมี 5 ส่วนหลักถูกต้อง (Precondition, Prepare, Execute, Validate, Verify)
- [ ] รูปแบบ list ถูกต้องตามแต่ละส่วน
- [ ] ทุก step เป็น actionable และ AI สามารถ execute ได้
- [ ] ใช้ `bun` ไม่ใช้ `npm` หรือ `npx`
- [ ] ไม่มี relative paths ใช้ absolute paths เสมอ
- [ ] ไม่มีคำสั่งที่ require human interaction
- [ ] ไม่มีคำว่า "etc", "etc.", "เป็นต้น"
- [ ] ใช้ heading `##` และ `###` เท่านั้น

## 5. Verify

- [ ] ยืนยันว่าทุก workflow file สามารถทำงานได้จริง
