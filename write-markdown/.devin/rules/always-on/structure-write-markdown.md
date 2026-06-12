---
title: Structure Write-Markdown
description: โครงสร้าง Directory สำหรับ Write-Markdown Skill
---

## โครงสร้าง Directory

โครงสร้างโฟลเดอร์สำหรับ Write-Markdown Skill

```
write-markdown/
├── SKILL.md                      # ไฟล์ index หลัก
├── guide/                        # เนื้อหาแนะนำและ best practices
├── key-concepts/                 # แนวคิดสำคัญ
├── principles/                   # หลักการ
├── references/                   # เอกสารอ้างอิง
├── workflows/                    # Workflows สำหรับ automation
├── templates/                    # Templates สำหรับเริ่มต้น
├── scripts/                      # Scripts สำหรับ automation (optional)
└── .devin/                       # Rules และ configurations
    ├── goal.md                  # เป้าหมายของ skill
    ├── scope.md                 # Scope และ execute steps
    ├── execute.md               # Execute steps ทั้งหมด
    ├── expected.md              # Expected outcome
    ├── rules/
    │   ├── always-on/           # Structure files ที่ต้องมีเสมอ
    │   │   └── structure-write-markdown.md
    │   ├── glob/                # Files ที่ใช้ glob patterns
    │   └── model_decision/      # Template files สำหรับ model decision
    └── workflows/               # Workflow files สำหรับ task automation
```

## หมวดหมู่ไฟล์

### guide/
ไฟล์เนื้อหาแนะนำสำหรับ Markdown

- `best-practices.md` - Best practices สำหรับ Markdown
- `features.md` - Features และ syntax ของ Markdown
- `patterns.md` - Patterns และ document structures

### key-concepts/
ไฟล์แนวคิดสำคัญของ Markdown

- `syntax.md` - Markdown syntax ทั้ง basic และ extended
- `formatting.md` - Formatting rules และ conventions
- `structure.md` - Document structure และ organization

### principles/
ไฟล์หลักการสำหรับ Markdown

- `consistency.md` - Consistency principles
- `clarity.md` - Clarity principles
- `simplicity.md` - Simplicity principles

### references/
ไฟล์เอกสารอ้างอิง

- `api.md` - API reference สำหรับ Markdown syntax
- `sitemap.md` - Sitemap ของ documentation
- `website.md` - Link ไปยัง official websites และ resources

### workflows/
ไฟล์ workflows สำหรับ automation tasks

- `write-markdown.md` - Workflow สำหรับเขียน Markdown
- `use-templates.md` - Workflow สำหรับใช้ templates

### templates/
ไฟล์ templates สำหรับ Markdown elements (30 templates)

- **Structure** - headers, structure-layout, toc
- **Code** - code-block, terminal, diff
- **Data** - table, data-structure
- **Media** - images, video, audio, iframe
- **Components** - component, collapsible, tabs, details
- **Formatting** - admonition, alert, quote, horizontal-rule
- **Interactive** - badge, tag, spoiler
- **Advanced** - diagram, mermaid-variants, math, footnote
- **Links** - links
- **Metadata** - frontmatter
- **Other** - emoji
