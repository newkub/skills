---
name: quick-start
description: เริ่มต้นใช้งาน Write Skills
---

# Quick Start (เริ่มต้นใช้งาน)

เริ่มต้นใช้งาน Write Skills เพื่อสร้าง Skills ที่มีคุณภาพและสอดคล้องกัน

## 1. Create New Skill (สร้าง Skill ใหม่)

สร้างโครงสร้าง Skill ใหม่ด้วยโครงสร้างที่ถูกต้อง

1. CREATE folder structure ที่จำเป็น
2. CREATE SKILL.md ไฟล์หลัก
3. CREATE rules ไฟล์ตาม format ที่ถูกต้อง

````bash
# สร้างโครงสร้างพื้นฐาน
mkdir -p my-skill/{rules,get-started,templates}

# สร้างไฟล์ที่จำเป็น
touch my-skill/SKILL.md
touch my-skill/get-started/quick-start.md
touch my-skill/get-started/features.md
touch my-skill/get-started/core-principle.md
````

| ขั้นตอน | คำสั่ง | คำอธิบาย |
|--------|--------|----------|
| 1 | mkdir | CREATE folder structure |
| 2 | touch | CREATE SKILL.md |
| 3 | touch | CREATE get-started files |

## 2. Write SKILL.md (เขียน SKILL.md)

เขียน SKILL.md ตาม format ที่ถูกต้อง

1. ADD frontmatter (name, description)
2. ADD overview section
3. ADD rules table
4. ADD file structure

````markdown
---
name: my-skill
description: คำอธิบาย skill ของคุณ
---

# My Skill

เอกสารนี้เป็นแนวทางสำหรับ...

## Overview

My Skill เป็น...
````

| ส่วน | คำอธิบาย |
|------|----------|
| Frontmatter | name, description |
| Overview | คำอธิบาย skill |
| Rules Table | รายการ rules |
| File Structure | โครงสร้างไฟล์ |

## 3. Create Rules Files (สร้าง Rules ไฟล์)

สร้าง rules ไฟล์ตาม format ที่ถูกต้อง

1. CREATE rules ไฟล์ใน rules/
2. USE naming convention: {number}-{prefix}-{name}.md
3. ADD content ตาม /write-rules

````markdown
# 1-skill-folder-structure.md
# 2-skill-file-naming.md
````

| รูปแบบ | ตัวอย่าง | คำอธิบาย |
|--------|--------|----------|
| {number}-{prefix}-{name}.md | 1-skill-folder-structure.md | ระบุลำดับความสำคัญ |
| {number}-{prefix}-{name}.md | 2-skill-file-naming.md | ระบุหัวข้อ |

## 4. Verify Structure (ตรวจสอบโครงสร้าง)

ตรวจสอบว่าโครงสร้างถูกต้อง

1. CHECK folder structure ว่ามี rules, get-started, templates
2. CHECK get-started ว่ามี quick-start, features, core-principle
3. CHECK rules ว่ามี format ที่ถูกต้อง

| ตรวจสอบ | รายการ | ผลลัพธ์ |
|--------|--------|--------|
| Folder Structure | rules, get-started, templates | ✓ |
| Get Started | quick-start, features, core-principle | ✓ |
| Rules Format | {number}-{prefix}-{name}.md | ✓ |
