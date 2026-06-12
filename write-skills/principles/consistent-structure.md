# Consistent Structure

## โครงสร้างที่สม่ำเสมอ

ทุก skill ต้องมีโครงสร้างพื้นฐานเหมือนกันเพื่อให้ maintainable และ easy to navigate

## โครงสร้างพื้นฐาน

- `SKILL.md` - REQUIRED (index file)
- `guide/` - OPTIONAL (guides และ best practices)
- `key-concepts/` - OPTIONAL (แนวคิดสำคัญ)
- `principles/` - OPTIONAL (หลักการ)
- `references/` - OPTIONAL (references และ API docs)
- `workflows/` - OPTIONAL (workflows สำหรับ automation)
- `templates/` - OPTIONAL (templates สำหรับเริ่มต้น)
- `scripts/` - OPTIONAL (scripts สำหรับ automation)

## Frontmatter

ทุก `SKILL.md` ต้องมี frontmatter ที่ด้านบนสุดของไฟล์:

```yaml
---
title: Skill Name
description: คำอธิบายสั้นๆ
auto_execution_mode: 3
related_workflows:
  - /workflow-name
---
```

## Headings

ใช้ headings ที่สม่ำเสมอทั่วทั้ง skill:
- `## Goal` - วัตถุประสงค์
- `## Scope` - ขอบเขตการใช้งาน
- `## When to use` - เมื่อไหร่ควรใช้
- `## Execute` - ขั้นตอนการดำเนินการ
- `## Rules` - กฎที่ต้องปฏิบัติ
- `## Expected Outcome` - ผลลัพธ์ที่คาดหวัง
- `## References` - แหล่งอ้างอิง
