# Skill Template

## โครงสร้างพื้นฐานสำหรับสร้าง Skill ใหม่

```yaml
---
title: Skill Name
description: คำอธิบายสั้นๆ เกี่ยวกับ skill นี้
type: skill
version: 1.0.0
auto_execution_mode: 3
file-patterns: ["*.md", "SKILL.md"]
follow:
  skills: []
  workflows: []
  files: []
  mcp: []
---
```

## Directory Structure Template

```text
skill-name/
├── SKILL.md                    # MUST: Main definition
├── execute/                    # การดำเนินการ
│   ├── 1-rules/               # กฎและมาตรฐาน
│   │   ├── 1-setup.md
│   │   ├── 2-usage.md
│   │   └── 3-best-practices.md
│   ├── 2-templates/           # เทมเพลต
│   │   └── skill-template.md
│   └── 3-examples/            # ตัวอย่าง
│       ├── 1-basic-example.md
│       └── 2-advanced-example.md
├── knowledge/                  # MUST: Core concepts
│   ├── core-concept.md
│   ├── best-practices.md
│   └── terminology.md
├── reference/                  # MUST: Examples and resources
│   ├── examples.md
│   └── external-links.md
└── workflows/                  # Optional: Workflow definitions
    ├── create-skill.md
    └── update-skill.md
```

## Expected Outcome

หลังจากใช้ template นี้:

1. **โครงสร้างสม่ำเสมอ** - ทุก skill ใช้โครงสร้างเดียวกัน
2. **คุณภาพมาตรฐาน** - มีทุก sections ที่จำเป็น
3. **อ้างอิงถูกต้อง** - เชื่อมโยง skills อื่นได้สมบูรณ์
4. **ปรับปรุงง่าย** - โครงสร้างชัดเจน แก้ไขได้ง่าย

## Config ที่ต้องตั้งค่า

### Frontmatter Fields
- `title`: ชื่อ skill ที่ชัดเจน
- `description`: คำอธิบายแบบย่อ
- `type`: ต้องเป็น "skill"
- `version`: Semantic version
- `auto_execution_mode`: 3 สำหรับ skills
- `file-patterns`: Array ของ glob patterns
- `follow`: Object สำหรับ dependencies

### Directory Naming
- ใช้ kebab-case สำหรับชื่อ skill
- ไม่ใช้ spaces หรือ special characters
- ชื่อต้องสื่อความหมาย

## ขั้นตอนการสร้าง Skill ใหม่

1. **สร้าง Directory Structure** - ตาม template ข้างบน
2. **เขียน SKILL.md** - เพิ่ม frontmatter และคำอธิบาย
3. **สร้าง execute/1-rules/** - กฎและ conventions
4. **สร้าง knowledge/** - core concepts และ theory
5. **สร้าง reference/** - examples และ external links
6. **เพิ่ม examples (ถ้าจำเป็น)** - ตัวอย่างการใช้งาน
7. **ตรวจสอบความถูกต้อง** - validate ทุกอย่าง

## Integration

- เชื่อมโยงกับ `@write-workflows` สำหรับสร้าง workflows
- เชื่อมโยงกับ `@write-markdown` สำหรับเขียน content
- ใช้ `/connect-workflows` สำหรับเชื่อมโยง skills ที่เกี่ยวข้อง
