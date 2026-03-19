---
title: write-markdown
description: Skill สำหรับการเขียน Markdown ที่สวยงามและมีประสิทธิภาพ
auto_execution_mode: 3
file-patterns:
  - "**/*.md"
follow:
  skills:
    - "@write-skills"
  workflows:
    - "/write-workflows"
    - "/optimize-workflows"
---

## Purpose

สร้าง Markdown documentation ที่มีโครงสร้างสม่ำเสมอ อ่านง่าย และสวยงาม

## Scope

ใช้สำหรับ:

- เขียน documentation ทุกประเภท (README, API docs, guides)
- จัดรูปแบบ Markdown ให้เป็นมาตรฐาน
- สร้างตัวอย่างและ templates สำหรับ Markdown
- ไม่รวมการแปลง Markdown เป็นรูปแบบอื่น

## Inputs

| Input | Details |
|-------|-----------|
| Target File | ไฟล์ Markdown ที่ต้องการเขียนหรือแก้ไข |
| Content Type | ประเภทของเนื้อหา (API, Guide, Reference, etc.) |
| Style Guide | มาตรฐานการเขียนที่ต้องการปฏิบัติตาม |

## Rules

### Content Standards

| Category | Requirements |
|------|---------|
| **Language** | ใช้ภาษาไทยสำหรับ headings และ descriptions |
| **Code** | ใช้ภาษาอังกฤษสำหรับ code และ technical terms |
| **Syntax** | ใช้ proper markdown syntax เสมอ |
| **Examples** | มีตัวอย่างการใช้งานในทุก section |

### Formatting Standards

| Category | Requirements |
|------|---------|
| **Headings** | `#` หัวข้อหลัก, `##` subheadings, `###` sub-subheadings |
| **Code Blocks** | ใช้ triple backticks พร้อมระบุภาษา |
| **Inline Code** | ใช้ `` ` `` สำหรับ short snippets |
| **Tables** | ใช้ pipe `\|` สร้างตาราง |
| **Lists** | `-` unordered lists, `1.` ordered lists |

## โครงสร้าง Directory

```text
write-markdown/
├── SKILL.md              # เอกสารหลักของ skill
├── rules/
│   ├── 1-setup.md
│   ├── 2-usage.md
│   └── 3-best-practices.md
├── knowledge/
│   ├── core-concept.md
│   └── best-practices.md
├── reference/
│   ├── examples.md
│   └── external-links.md
├── examples/              # ตัวอย่างการใช้งาน
└── templates/             # templates สำหรับเอกสารต่างๆ
```

## หมวดหมู่ไฟล์

| หมวดหมู่ | ตัวอย่าง | ใช้สำหรับ |
|---------|---------|----------|
| Core | `SKILL.md` | เอกสารหลักของ skill |
| Rules | `rules/*.md` | กฎและแนวทางการใช้งาน |
| Knowledge | `knowledge/*.md` | ความรู้และแนวคิด |
| Reference | `reference/*.md` | ตัวอย่างและแหล่งอ้างอิง |

### Phase Definitions

| Phase | Description | Main Activities |
|-------|-------------|---------------|
| Setup | เตรียม context | อ่าน SKILL.md, ตรวจสอบ follow references |
| Research | ศึกษา reference | ดู examples/, อ่าน rules/ |
| Analyze | วิเคราะห์ content | ระบุ content type, เลือก patterns |
| Plan | วางแผน structure | กำหนด headings, เลือก formatting |
| Execute | เขียน markdown | ใช้ patterns ที่เหมาะสม |
| Verify | ตรวจสอบคุณภาพ | ตรวจสอบ syntax, consistency |
| Review | ตรวจสอบ readability | อ่านทวน, ตรวจสอบ clarity |
| Finalize | ปิดงาน | รัน /optimize-workflows |

## Steps

### Phase 0: Precondition

- 0.1 **ตรวจสอบสิทธิ์**
  - มีสิทธิ์เขียนไฟล์ใน directory เป้าหมาย
  - ตรวจสอบว่าไฟล์ไม่ถูก lock โดย process อื่น

- 0.2 **อ่าน Global Rules**
  - อ่านไฟล์ global rules ของโปรเจกต์
  - เข้าใจมาตรฐานการเขียนของโปรเจกต์
  - ยืนยันว่าทำตาม conventions

### Phase 1: Setup

- 1.1 **เตรียม Context**
  - อ่าน SKILL.md นี้เพื่อเข้าใจ patterns ที่มี
  - ตรวจสอบ `follow` references ใน frontmatter

### Phase 2: Research

- 2.1 **ศึกษา Reference**
  - ดูตัวอย่างในโฟลเดอร์ `examples/` สำหรับดู patterns
  - อ่าน `rules/` เพื่อเข้าใจกฎการเขียน

### Phase 3: Analyze

- 3.1 **วิเคราะห์ Content Type**
  - ระบุว่าเป็น documentation ประเภทใด (API, Guide, Reference)
  - เลือก patterns ที่เหมาะสมจาก `examples/`

### Phase 4: Plan

- 4.1 **วางแผน Structure**
  - กำหนดลำดับ headings ที่เหมาะสม
  - เลือก formatting patterns ที่จะใช้

### Phase 5: Execute

- 5.1 **เขียน Markdown**
  - ใช้ภาษาไทยสำหรับ headings และ descriptions
  - ใช้ภาษาอังกฤษสำหรับ code และ technical terms
  - ใช้ proper markdown syntax เสมอ
  - มีตัวอย่างการใช้งานในทุก section

- 5.2 **จัดรูปแบบ**
  - ใช้ `#` สำหรับหัวข้อหลัก
  - ใช้ `##` สำหรับ subheadings
  - ใช้ `###` สำหรับ sub-subheadings
  - ใช้ triple backticks พร้อมระบุภาษา
  - ใช้ inline code `` ` `` สำหรับ short snippets
  - ใช้ pipe `\|` สำหรับสร้างตาราง
  - ใช้ `-` สำหรับ unordered lists
  - ใช้ `1.` สำหรับ ordered lists

### Phase 6: Verify

- 6.1 **ตรวจสอบคุณภาพ**
  - ตรวจสอบ markdown syntax ถูกต้อง
  - ตรวจสอบ consistency ของ formatting

### Phase 7: Review

- 7.1 **ตรวจสอบ Readability**
  - อ่านทวนเนื้อหาทั้งหมด
  - ตรวจสอบ clarity และ flow

### Phase 8: Finalize

- 8.1 **รัน /optimize-workflows**
  - ปรับปรุงคุณภาพหลังเขียนเสร็จ
  - ตรวจสอบความสม่ำเสมอ

## Outputs

| Output | Details |
|--------|-----------|
| Markdown File | ไฟล์ Markdown ที่มีโครงสร้างสม่ำเสมอ |
| Examples | ตัวอย่างการใช้งานในทุก section |
| Consistent Formatting | Formatting ที่เป็นมาตรฐาน |

## Expected Outcome

- Markdown มีโครงสร้างสม่ำเสมอ
- อ่านง่ายและเข้าใจได้เร็ว
- มีตัวอย่างประกอบทุก section
- Formatting สวยงามและ professional

## Reference

- `rules/1-setup.md` - การตั้งค่าและเตรียมความพร้อม
- `rules/2-usage.md` - วิธีการใช้งาน
- `rules/3-best-practices.md` - แนวทางปฏิบัติที่ดีที่สุด
- `knowledge/core-concept.md` - แนวคิดหลัก
- `knowledge/best-practices.md` - แนวทานการปฏิบัติที่ดี
- `reference/examples.md` - ตัวอย่างการใช้งาน
- `reference/external-links.md` - แหล่งข้อมูลภายนอก
- `examples/` - คอลเลกชันตัวอย่าง 200+ รายการ
- `templates/` - templates สำหรับเอกสารต่างๆ
- `/write-workflows` - มาตรฐานการสร้าง workflow
- `/optimize-workflows` - ปรับปรุงคุณภาพ workflow
