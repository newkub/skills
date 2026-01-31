---
name: skill-folder-structure
description: กำหนดโครงสร้างโฟลเดอร์สำหรับทุก Skill
---

# Skill Folder Structure (โครงสร้างโฟลเดอร์ Skill)

กำหนดโครงสร้างโฟลเดอร์ที่ต้องมีในทุก Skill

## 1. Create Main Folders (สร้างโฟลเดอร์หลัก)

สร้างโฟลเดอร์หลักที่จำเป็นสำหรับทุก Skill

1. CREATE rules/ folder
2. CREATE get-started/ folder
3. CREATE templates/ folder

````bash
mkdir -p skill-name/{rules,get-started,templates}
````

| โฟลเดอร์ | คำอธิบาย | จำเป็น |
|--------|----------|--------|
| rules/ | เก็บ rules ทั้งหมด | ✓ |
| get-started/ | เก็บคู่มือเริ่มต้น | ✓ |
| templates/ | เก็บ templates | ✓ |

## 2. Create Root Files (สร้างไฟล์ระดับ root)

สร้างไฟล์ที่จำเป็นใน root folder

1. CREATE SKILL.md
2. CREATE getting-started.md (ถ้าจำเป็น)
3. CREATE features.md (ถ้าจำเป็น)

| ไฟล์ | คำอธิบาย | จำเป็น |
|------|----------|--------|
| SKILL.md | ไฟล์หลักของ Skill | ✓ |
| getting-started.md | คู่มือเริ่มต้น | ตามความจำเป็น |
| features.md | รายการฟีเจอร์ | ตามความจำเป็น |

## 3. Create Get Started Files (สร้างไฟล์ใน get-started/)

สร้างไฟล์ที่จำเป็นใน get-started/ folder

1. CREATE quick-start.md
2. CREATE features.md
3. CREATE core-principle.md
4. CREATE cli.md (ถ้ามี)

| ไฟล์ | คำอธิบาย | จำเป็น |
|------|----------|--------|
| quick-start.md | เริ่มต้นใช้งาน | ✓ |
| features.md | รายการฟีเจอร์ | ✓ |
| core-principle.md | หลักการสำคัญ | ✓ |
| cli.md | คำสั่ง CLI | ตามความจำเป็น |

## 4. Verify Structure (ตรวจสอบโครงสร้าง)

ตรวจสอบว่าโครงสร้างถูกต้อง

1. CHECK ว่ามี rules/, get-started/, templates/
2. CHECK ว่ามี SKILL.md
3. CHECK ว่า get-started/ มีไฟล์ที่จำเป็น

| ตรวจสอบ | รายการ | ผลลัพธ์ |
|--------|--------|--------|
| Main Folders | rules, get-started, templates | ✓ |
| Root Files | SKILL.md | ✓ |
| Get Started Files | quick-start, features, core-principle | ✓ |
