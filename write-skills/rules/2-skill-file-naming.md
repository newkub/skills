---
name: skill-file-naming
description: กำหนดรูปแบบการตั้งชื่อไฟล์สำหรับ Skills
---

# Skill File Naming (การตั้งชื่อไฟล์ Skill)

กำหนดรูปแบบการตั้งชื่อไฟล์ให้สอดคล้องกัน

## 1. Rules Files Naming (การตั้งชื่อไฟล์ Rules)

ตั้งชื่อไฟล์ rules ตาม format ที่ถูกต้อง

1. USE format: {number}-{prefix}-{name}.md
2. USE number สำหรับลำดับความสำคัญ
3. USE prefix สำหรับระบุ skill

````markdown
# 1-skill-folder-structure.md
# 2-skill-file-naming.md
# 3-skill-get-started.md
````

| ส่วน | คำอธิบาย | ตัวอย่าง |
|------|----------|----------|
| {number} | ลำดับความสำคัญ | 1, 2, 3 |
| {prefix} | ระบุ skill | skill-, elysia-, rust- |
| {name} | ชื่อ rule | folder-structure |

## 2. Knowledge Files Naming (การตั้งชื่อไฟล์ Knowledge)

ตั้งชื่อไฟล์ knowledge ตาม format ที่ถูกต้อง

1. USE format: {prefix}-{name}.md
2. USE prefix สำหรับระบุ skill
3. USE name สำหรับระบุหัวข้อ

````markdown
# skill-concepts.md
# skill-patterns.md
````

| ส่วน | คำอธิบาย | ตัวอย่าง |
|------|----------|----------|
| {prefix} | ระบุ skill | skill-, elysia- |
| {name} | ชื่อหัวข้อ | concepts, patterns |

## 3. Guides Files Naming (การตั้งชื่อไฟล์ Guides)

ตั้งชื่อไฟล์ guides ตาม format ที่ถูกต้อง

1. USE format: {prefix}-{name}.md
2. USE prefix สำหรับระบุ skill
3. USE name สำหรับระบุหัวข้อ

````markdown
# skill-structure-guide.md
# skill-installation-guide.md
````

| ส่วน | คำอธิบาย | ตัวอย่าง |
|------|----------|----------|
| {prefix} | ระบุ skill | skill-, elysia- |
| {name} | ชื่อหัวข้อ | structure-guide |

## 4. Verify Naming (ตรวจสอบการตั้งชื่อ)

ตรวจสอบว่าการตั้งชื่อถูกต้อง

1. CHECK format ว่าถูกต้อง
2. CHECK prefix ว่าสอดคล้อง
3. CHECK name ว่าชัดเจน

| ตรวจสอบ | รายการ | ผลลัพธ์ |
|--------|--------|--------|
| Format | {number}-{prefix}-{name}.md | ✓ |
| Prefix | skill-, elysia- | ✓ |
| Name | folder-structure, concepts | ✓ |
