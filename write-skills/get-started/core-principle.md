---
name: core-principle
description: หลักการสำคัญของ Write Skills
---

# Core Principle (หลักการสำคัญ)

หลักการสำคัญที่ต้องยึดถือในการเขียน Skills

## 1. Single Responsibility (หน้าที่เดียว)

แต่ละ Skill มีหน้าที่รับผิดชอบเพียงหนึ่งอย่าง

1. DEFINE purpose ที่ชัดเจน
2. FOCUS บนหัวข้อเดียว
3. AVOID การทำหลายอย่างใน Skill เดียว

| หลักการ | คำอธิบาย | ตัวอย่าง |
|--------|----------|----------|
| Single Purpose | ทำหน้าที่เดียว | Elysia Skill สำหรับ Elysia framework |
| Clear Focus | เน้นหัวข้อเดียว | Rust Skill สำหรับ Rust development |
| Avoid Multi-task | หลีกเลี่ยงหลายหัวข้อ | ไม่รวม Vue และ React ใน Skill เดียว |

## 2. Consistency (ความสอดคล้อง)

ทุก Skill มีโครงสร้างที่สอดคล้องกัน

1. USE folder structure เดียวกัน
2. USE file naming convention เดียวกัน
3. USE content format เดียวกัน

| ประเภท | รูปแบบ | คำอธิบาย |
|--------|--------|----------|
| Folder Structure | rules, get-started, templates | โครงสร้างมาตรฐาน |
| File Naming | {number}-{prefix}-{name}.md | naming convention |
| Content Format | /write-rules | format ที่ถูกต้อง |

## 3. Action-Oriented (เน้นการกระทำ)

เนื้อหาเน้นการกระทำมากกว่าข้อมูล

1. USE Action Verbs (CREATE, CHECK, VERIFY)
2. WRITE steps ที่ชัดเจน
3. AVOID information เท่านั้น

| ประเภท | ดี | ไม่ดี |
|--------|--------|--------|
| Action Verbs | CREATE folder | สร้าง folder |
| Steps | 1. CREATE folder | 1. สร้าง folder |
| Content | CHECK ว่ามี folder | ตรวจสอบว่ามี folder |

## 4. Specificity (ความเฉพาะเจาะจง)

เนื้อหาต้องเฉพาะเจาะจงและมี context ชัดเจน

1. SPECIFY ชื่อไฟล์และ path
2. PROVIDE context ที่ชัดเจน
3. AVOID คำที่กว้างเกินไป

| ประเภท | ดี | ไม่ดี |
|--------|--------|--------|
| File Path | CREATE `src/components` | สร้าง folder |
| Context | ใช้ UnoCSS สำหรับ design system | สร้าง design system |
| Specific | สร้าง Button component | สร้าง component |
