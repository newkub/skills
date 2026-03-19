---
title: Basic Skill Example
description: ตัวอย่าง skill ขั้นพื้นฐานที่แสดงโครงสร้างพื้นฐาน
type: skill
version: 1.0.0
auto_execution_mode: 3
file-patterns: ["*.md", "*.txt"]
follow:
  skills: []
  workflows: ["/write-workflows"]
  files: []
  mcp: []
---

# Basic Skill Example

## Purpose

ตัวอย่าง skill ขั้นพื้นฐานที่แสดงโครงสร้างที่เรียบง่าย:

- **Minimal structure** - มีเฉพาะสิ่งที่จำเป็น
- **Clear purpose** - ทำหนึ่งอย่างให้ดี
- **Easy to understand** - เหมาะสำหรับผู้เริ่มต้น

## Scope

ใช้สำหรับ:

- การเรียนรู้โครงสร้างพื้นฐานของ skill
- ตัวอย่างที่ง่ายที่สุดที่สามารถมีได้
- การเริ่มต้นสร้าง skill ใหม่

## Quick Reference

| Directory | Status | Purpose |
|-----------|--------|---------|
| `SKILL.md` | **MUST** | Main definition |
| `patterns/` | **MUST** | Basic pattern |
| `rules/` | **MUST** | Basic rule |

## โครงสร้าง Directory

```
basic-skill/
├── SKILL.md
├── patterns/
│   └── 01-basic-pattern.md
└── rules/
    └── 01-basic-rule.md
```

## Implementation

### 1. สร้างโครงสร้างพื้นฐาน

```bash
mkdir basic-skill
cd basic-skill
mkdir patterns rules
touch SKILL.md
```

### 2. เขียน SKILL.md

เพิ่ม frontmatter และ content พื้นฐาน

### 3. สร้าง patterns และ rules

สร้างไฟล์ pattern และ rule อย่างละหนึ่งไฟล์

## Verification Checklist

- [ ] Frontmatter ครบถ้วน
- [ ] มี patterns/ และ rules/ directories
- [ ] ไม่มี empty directories
- [ ] ชื่อไฟล์ตาม conventions
- [ ] Content ไม่ซ้ำซ้อน

## Related Skills

- `@write-skills` - สำหรับสร้าง skills แบบสมบูรณ์
- `@write-markdown` - สำหรับเขียน markdown ที่มีคุณภาพ
