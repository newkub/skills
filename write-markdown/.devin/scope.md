---
title: Scope
description: Scope และ execute steps ของ skill write-markdown
---

## Scope

ใช้สำหรับการเขียนเอกสาร Markdown ทุกประเภท ในทุก workspace รวมถึง:

### ประเภทเอกสาร

- **README files** - เอกสารโครงการ
- **Documentation** - เอกสารทางเทคนิค
- **Technical guides** - คู่มือการใช้งาน
- **Tutorials** - บทเรียนและ walkthroughs
- **API references** - เอกสาร API
- **Changelogs** - บันทึกการเปลี่ยนแปลง
- **FAQs** - คำถามที่พบบ่อย
- **Blog posts** - บทความ
- **Presentations** - สไล์ด์และ presentations
- **Notes** - บันทึกและ memos

### Features ที่รองรับ

- **Basic syntax** - Headers, emphasis, lists, links, images, code
- **Extended syntax** - Tables, footnotes, definition lists, task lists
- **GitHub Flavored Markdown** - GFM features
- **CommonMark** - Standard compliance
- **Frontmatter** - YAML metadata
- **Code highlighting** - Syntax highlighting สำหรับหลายภาษา
- **Templates** - 29 templates สำหรับ elements ต่างๆ

### Templates ที่มี

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

## Execute

1. อ่าน templates จาก `templates/` folder
2. เลือก template ที่เหมาะสมกับ content
3. เขียน content ตามรูปแบบที่กำหนด
4. ตรวจสอบ syntax และ formatting
5. ตรวจสอบ consistency กับ templates อื่นๆ
6. ปฏิบัติตาม execute steps ใน `execute.md` อย่างครบถ้วน

## Integration

- ใช้ร่วมกับ `write-skills` สำหรับการเขียน skills
- ใช้ร่วมกับ `write-windsurf-global-workflows` สำหรับ workflows
- ใช้ร่วมกับ `write-windsurf-skills` สำหรับ skills
- ใช้ร่วมกับ documentation tools อื่นๆ
