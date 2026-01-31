---
name: write-skills
description: แนวทางการเขียน Skills สำหรับการพัฒนาซอฟต์แวร์
---

# Write Skills

เอกสารนี้เป็นแนวทางสำหรับการเขียน Skills ที่ใช้ในการพัฒนาซอฟต์แวร์ เพื่อให้มีคุณภาพ, สอดคล้องกัน, และเข้าใจง่าย

## Overview

Write Skills เป็นแนวทางในการเขียนเอกสาร Skills สำหรับการพัฒนาซอฟต์แวร์ โดยมีโครงสร้างที่ชัดเจนและเป็นมาตรฐานเดียวกัน

### Key Features

- **Standardized Structure**: โครงสร้างที่เป็นมาตรฐานสำหรับทุก Skill
- **Clear Organization**: การจัดระเบียบไฟล์และโฟลเดอร์ที่ชัดเจน
- **Consistent Naming**: การตั้งชื่อที่สอดคล้องกัน
- **Easy Navigation**: การนำทางที่ง่ายต่อการค้นหา

## Quick Start

สร้าง Skill ใหม่ด้วยโครงสร้างที่ถูกต้อง

````bash
# สร้างโครงสร้างพื้นฐาน
mkdir -p skill-name/{rules,get-started,templates}
cd skill-name
````

## Rules

| Priority | Impact | Reference | Name | Description | Prefix | Condition |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| 1 | CRITICAL | 1-skill-folder-structure.md | Folder Structure | ทุก skill folder ต้องมี subfolders: rules, get-started, templates | skill- | เมื่อสร้าง skill ใหม่ |
| 2 | HIGH | 2-skill-file-naming.md | File Naming | Rules ไฟล์ต้องมี format: {number}-{prefix}-{name}.md | skill- | เมื่อสร้าง rules ไฟล์ |
| 3 | HIGH | 3-skill-get-started.md | Get Started Structure | get-started ต้องมี: quick-start, features, cli (ถ้ามี), core principle | skill- | เมื่อสร้าง get-started |
| 4 | MEDIUM | 4-skill-skill-md.md | SKILL.md Format | SKILL.md ต้องมี table สรุป: number, filename, condition | skill- | เมื่อเขียน SKILL.md |

## Knowledge

| Reference | Name | Description | Prefix |
| :--- | :--- | :--- | :--- |
| skill-concepts.md | Core Concepts | ความรู้เกี่ยวกับ concepts หลักของ Write Skills | skill- |
| skill-patterns.md | Design Patterns | Patterns ที่ใช้กับ Write Skills | skill- |

## Guides

| Reference | Name | Description | Prefix |
| :--- | :--- | :--- | :--- |
| skill-structure-guide.md | Structure Guide | คู่มือการสร้างโครงสร้าง Skill | skill- |

## Templates

| Reference | Name | Description | Prefix |
| :--- | :--- | :--- | :--- |
| skill-template.md | Skill Template | Template สำหรับสร้าง Skill ใหม่ | skill- |

## Additional Files

| File | Description |
| :--- | :--- |
| getting-started.md | คู่มือเริ่มต้นใช้งาน Write Skills |
| features.md | รายการฟีเจอร์และความสามารถของ Write Skills |

## File Structure

```
write-skills/
├── rules/
│   ├── 1-skill-folder-structure.md
│   ├── 2-skill-file-naming.md
│   ├── 3-skill-get-started.md
│   └── 4-skill-skill-md.md
├── get-started/
│   ├── quick-start.md
│   ├── features.md
│   ├── cli.md (ถ้ามี)
│   └── core-principle.md
├── templates/
│   └── skill-template.md
├── getting-started.md
├── features.md
└── SKILL.md
```

## Examples

### Create New Skill Structure

สร้างโครงสร้าง Skill ใหม่ที่ถูกต้อง

````bash
# สร้างโครงสร้างพื้นฐาน
mkdir -p my-skill/{rules,get-started,templates}

# สร้างไฟล์ที่จำเป็น
touch my-skill/SKILL.md
touch my-skill/get-started/quick-start.md
touch my-skill/get-started/features.md
touch my-skill/get-started/core-principle.md
````

### Rule File Naming

ตั้งชื่อไฟล์ rules ตาม format ที่ถูกต้อง

````markdown
# 1-skill-folder-structure.md
# 2-skill-file-naming.md
# 3-skill-get-started.md
````

## References

- [Skills Documentation](../)
- [Workflow Authoring Guide](../../global_workflows/write-rules.md) 