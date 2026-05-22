---
title: Add Windsurf Skills
description: Global workflow สำหรับการสร้าง skills ใหม่ใน Windsurf global skills directory
type: skill
version: 1.0.0
auto_execution_mode: 3
file-patterns: []
follow:
  skills: ["@write-skills", "@write-workflows", "@write-markdown"]
  workflows: ["/add-windsurf-skills", "/write-skills"]
  files: []
  mcp: []
---

# Add Windsurf Skills

## Purpose

Global workflow สำหรับสร้าง skill ใหม่ใน Windsurf global skills directory (~/.codeium/windsurf/skills/) ตาม follow-skills-creator standards

## When to Apply

ใช้เมื่อต้องการ:
- สร้าง skill ใหม่ใน global skills
- สร้าง workflow skill สำหรับ repetitive tasks
- สร้าง skill ตาม project patterns

## Target Location

**Global Skills Directory**: C:\Users\<username>\.codeium\windsurf\skills\

**Skill Types**:
- ramework-skill - สำหรับ frameworks
- lib-skill - สำหรับ libraries
- cli-skill - สำหรับ CLI tools
- language-skill - สำหรับ programming languages
- asic-skill - สำหรับ general functionalities

## Directory Structure

`
add-windsurf-skills/
├── SKILL.md                    # ไฟล์หลัก
├── workflows/                  # Workflow files
│   ├── create-skill.md         # สร้าง skill ใหม่
│   └── create-workflow.md      # สร้าง workflow
├── execute/                    # Execution rules & templates
│   ├── 1-rules/                # กฎและมาตรฐาน
│   ├── 2-templates/            # เทมเพลต
│   └── 3-examples/             # ตัวอย่าง
└── reference/                  # แหล่งอ้างอิง
`

## Quick Reference

| Component | Location | Purpose |
|-----------|----------|---------|
| SKILL.md | skill-name/ | Main definition file |
| workflows/ | skill-name/ | Workflow files |
| rules/ | execute/1-rules/ | Standards & conventions |
| templates/ | execute/2-templates/ | Skill templates |

## Execution

### Phase 1: Planning
1. กำหนดชื่อ skill และประเภท
2. ศึกษา existing skills ที่คล้ายกัน
3. เลือก template ที่เหมาะสม

### Phase 2: Creation
1. สร้าง directory structure
2. คัดลอก template จาก @write-skills
3. ปรับแต่ง content ตามความต้องการ

### Phase 3: Validation
1. ตรวจสอบ frontmatter
2. ตรวจสอบ directory structure
3. ตรวจสอบ follow references

## Related Skills

- @write-skills - มาตรฐานการสร้าง skills
- @write-workflows - มาตรฐานการสร้าง workflows
- @write-markdown - มาตรฐานการเขียน markdown
