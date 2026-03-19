---
description: การติดตั้งและเตรียมความพร้อมสำหรับ basic skill
title: 1-Setup Instructions
tags: [rules, setup, basic-skill]
goals:
  - ให้คำแนะนำการติดตั้งพื้นฐาน
  - กำหนด prerequisites ที่จำเป็น
  - ทำให้เริ่มต้นได้ง่าย
---

# 1-Setup Instructions

## Purpose

คำแนะนำการติดตั้งและเตรียมความพร้อมสำหรับ basic skill

## Prerequisites

### Required Tools
- Text editor (VS Code แนะนำ)
- Basic command line knowledge
- Git (optional)

### Knowledge Requirements
- พื้นฐาน Markdown
- ความเข้าใจ file structure พื้นฐาน

## Setup Steps

### 1. สร้าง Directory Structure

```bash
mkdir basic-skill
cd basic-skill
mkdir patterns rules
touch SKILL.md
```

### 2. สร้าง Frontmatter Template

```yaml
---
title: Your Skill Name
description: Brief description
version: 1.0.0
auto_execution_mode: 3
file-patterns: ["*.md"]
follow:
  skills: []
  workflows: ["/write-workflows"]
  files: []
  mcp: []
---
```

### 3. กำหนด Basic Sections

```markdown
# Skill Name

## Purpose
[Clear purpose statement]

## Scope
[Scope definition]

## โครงสร้าง Directory
[Directory structure]

## หมวดหมู่ไฟล์
[File categories]

## Implementation
[Implementation details]

## Verification Checklist
[Checklist]

## Related Skills
[Related skills]
```

## Common Pitfalls

- ไม่สร้าง required directories
- ลืมเพิ่ม frontmatter
- ใช้ naming conventions ที่ไม่ถูกต้อง
- เขียน content ซ้ำซ้อน

## Success Criteria

✅ Directory structure ถูกต้อง  
✅ Frontmatter ครบถ้วน  
✅ Required sections มีครบ  
✅ Naming conventions ถูกต้อง  
✅ พร้อมสำหรับ development
