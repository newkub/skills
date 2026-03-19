---
title: Review Markdown
auto_execution_mode: 3
description: ตรวจสอบและปรับปรุงคุณภาพ Markdown files ตามมาตรฐาน AI-executable workflows
---

## 1. Precondition

- มี Markdown files ในโปรเจกต์ที่ต้องการตรวจสอบ
- เข้าใจโครงสร้าง standard markdown สำหรับ workflows
- มีสิทธิ์อ่าน/เขียนไฟล์ใน target directory

## 2. Prepare

- ระบุไฟล์ Markdown ที่ต้องการตรวจสอบ (ทั้ง .md และ .mdx)
- อ่านเนื้อหาปัจจุบันของแต่ละไฟล์
- ตรวจสอบความสอดคล้องกับ markdown best practices
- เตรียม checklist สำหรับการตรวจสอบ

## 3. Execute

1. ค้นหาไฟล์ Markdown ทั้งหมด

   ```bash
   find . -name "*.md" -o -name "*.mdx" | grep -v node_modules
   ```

2. ตรวจสอบ frontmatter ของแต่ละไฟล์
   - ต้องมี `title` และ `description`
   - title ต้องตรงกับชื่อไฟล์ (kebab-case → readable)
   - description ไม่เกิน 150 ตัวอักษร

3. ตรวจสอบโครงสร้างเนื้อหา
   - มีส่วน Precondition, Prepare, Execute, Validate
   - ใช้ heading ระดับ `##` และ `###` เท่านั้น
   - ไม่ใช้ `####` หรือลึกกว่า

4. ตรวจสอบรูปแบบการเขียน
   - ใช้ bullet points (-) สำหรับ Precondition และ Prepare
   - ใช้ numbered list (1., 2.) สำหรับ Execute
   - ใช้ checkbox (- [ ]) สำหรับ Validate

5. แก้ไขไฟล์ที่ไม่ตรงมาตรฐาน
   - เพิ่มหรือแก้ไข frontmatter
   - ปรับโครงสร้าง heading ให้ถูกต้อง
   - แก้ไขรูปแบบ list ให้สอดคล้องกัน

## 4. Validate

- [ ] ทุกไฟล์ Markdown มี frontmatter ครบถ้วน
- [ ] title และ description ถูกต้องตามชื่อไฟล์
- [ ] โครงสร้างมี 5 ส่วนหลัก (Precondition, Prepare, Execute, Validate, Verify)
- [ ] ใช้ heading `##` และ `###` เท่านั้น
- [ ] รูปแบบ list ถูกต้องตามแต่ละส่วน
- [ ] ไม่มีคำว่า "etc", "etc.", "เป็นต้น" ในเนื้อหา
- [ ] ใช้ bun ไม่ใช้ npm ในคำสั่ง code blocks

## 5. Verify

- [ ] ยืนยันว่าทุก Markdown file สามารถใช้งานได้จริง
