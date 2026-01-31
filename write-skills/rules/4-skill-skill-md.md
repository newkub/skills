---
name: skill-skill-md
description: กำหนดรูปแบบการเขียน SKILL.md
---

# Skill SKILL.md (รูปแบบ SKILL.md)

กำหนดรูปแบบการเขียน SKILL.md ให้ถูกต้อง

## 1. Frontmatter (ส่วนหัว)

เพิ่ม frontmatter ที่จำเป็น

1. ADD name field
2. ADD description field

````yaml
---
name: my-skill
description: คำอธิบาย skill ของคุณ
---
````

| ฟิลด์ | คำอธิบาย | จำเป็น |
|------|----------|--------|
| name | ชื่อ skill | ✓ |
| description | คำอธิบาย | ✓ |

## 2. Main Content (เนื้อหาหลัก)

เขียนเนื้อหาหลักใน SKILL.md

1. ADD overview section
2. ADD quick start section
3. ADD rules table
4. ADD knowledge table
5. ADD guides table
6. ADD templates table
7. ADD file structure
8. ADD examples
9. ADD references

````markdown
# My Skill

เอกสารนี้เป็นแนวทางสำหรับ...

## Overview

My Skill เป็น...

## Quick Start

สร้าง Skill ใหม่...

## Rules

| Priority | Impact | Reference | Name | Description | Prefix | Condition |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |

## Knowledge

| Reference | Name | Description | Prefix |
| :--- | :--- | :--- | :--- |

## Guides

| Reference | Name | Description | Prefix |
| :--- | :--- | :--- | :--- |

## Templates

| Reference | Name | Description | Prefix |
| :--- | :--- | :--- | :--- |

## File Structure

```
my-skill/
└── ...
```

## Examples

### Example Title

คำอธิบาย...

## References

- [Documentation](url)
````

| ส่วน | คำอธิบาย | จำเป็น |
|------|----------|--------|
| Overview | คำอธิบาย skill | ✓ |
| Quick Start | เริ่มต้นใช้งาน | ✓ |
| Rules Table | รายการ rules | ✓ |
| Knowledge Table | รายการ knowledge | ตามความจำเป็น |
| Guides Table | รายการ guides | ตามความจำเป็น |
| Templates Table | รายการ templates | ตามความจำเป็น |
| File Structure | โครงสร้างไฟล์ | ✓ |
| Examples | ตัวอย่าง | ✓ |
| References | อ้างอิง | ✓ |

## 3. Rules Table Format (รูปแบบตาราง Rules)

เขียนตาราง rules ตาม format ที่ถูกต้อง

1. ADD columns: Priority, Impact, Reference, Name, Description, Prefix, Condition
2. FILL ข้อมูลให้ครบ

````markdown
| Priority | Impact | Reference | Name | Description | Prefix | Condition |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| 1 | CRITICAL | 1-skill-rule.md | Rule Name | คำอธิบาย | skill- | เมื่อ... |
````

| Column | คำอธิบาย | จำเป็น |
|--------|----------|--------|
| Priority | ลำดับความสำคัญ | ✓ |
| Impact | ผลกระทบ | ✓ |
| Reference | ไฟล์อ้างอิง | ✓ |
| Name | ชื่อ rule | ✓ |
| Description | คำอธิบาย | ✓ |
| Prefix | Prefix สำหรับ rule | ✓ |
| Condition | เงื่อนไข | ✓ |

## 4. Verify SKILL.md (ตรวจสอบ SKILL.md)

ตรวจสอบว่า SKILL.md ถูกต้อง

1. CHECK frontmatter ว่ามี name, description
2. CHECK sections ว่าครบ
3. CHECK tables ว่าถูกต้อง

| ตรวจสอบ | รายการ | ผลลัพธ์ |
|--------|--------|--------|
| Frontmatter | name, description | ✓ |
| Sections | overview, quick start, rules, etc. | ✓ |
| Tables | rules, knowledge, guides, templates | ✓ |
