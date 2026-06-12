---
description: Workflow สำหรับการใช้งาน Markdown templates
---

# Workflow: ใช้งาน Markdown Templates

## Goal

ใช้ templates จาก `templates/` folder เพื่อเขียน Markdown ที่มีคุณภาพและสม่ำเสมอ

## When to Use

- เมื่อต้องการใช้ Markdown element เฉพาะทาง
- เมื่อต้องการ standardize formatting
- เมื่อต้องการใช้ patterns ที่มีอยู่แล้ว
- เมื่อต้องการเรียนรู้รูปแบบ Markdown

## Execute

### 1. ค้นหา Template

1. อ่าน `templates/` folder เพื่อดู templates ที่มี
2. ระบุ template ที่เหมาะสมกับ use case
3. อ่าน description และ when to use ของ template
4. ตรวจสอบ examples ใน template

### 2. อ่าน Template

1. อ่าน template อย่างละเอียด
2. เข้าใจรูปแบบและ syntax
3. ตรวจสอบ best practices ใน template
4. ทำความเข้าใจ parameters หรือ options

### 3. ปรับแต่ง Template

1. คัดลอก template ที่ต้องการ
2. ปรับแต่ง content ตามความต้องการ
3. ปรับแต่ง parameters หากมี
4. ตรวจสอบว่ายังคงตรงตามรูปแบบ

### 4. ใช้ Template

1. วาง template ลงในเอกสาร
2. เชื่อมต่อกับ content อื่นๆ
3. ตรวจสอบ consistency กับ templates อื่นๆ
4. ตรวจสอบว่าใช้งานได้จริง

### 5. ตรวจสอบ

1. ตรวจสอบ syntax ว่าถูกต้อง
2. ตรวจสอบ formatting ว่าสม่ำเสมอ
3. ตรวจสอบว่าตรงกับ best practices
4. ตรวจสอบว่าไม่มี errors

## Template Categories

### Structure Templates

- `headers.md` - Headers และ hierarchy
- `structure-layout.md` - Document structure
- `toc.md` - Table of contents

### Code Templates

- `code-block.md` - Code blocks พร้อม syntax highlighting
- `terminal.md` - Terminal output
- `diff.md` - Code diffs

### Data Templates

- `table.md` - Tables
- `data-structure.md` - Data structures

### Media Templates

- `images.md` - Images
- `video.md` - Videos
- `audio.md` - Audio
- `iframe.md` - Embedded content

### Component Templates

- `component.md` - UI components
- `collapsible.md` - Collapsible sections
- `tabs.md` - Tabbed content
- `details.md` - Details/summary

### Formatting Templates

- `admonition.md` - Admonitions/notes
- `alert.md` - Alerts
- `quote.md` - Blockquotes
- `horizontal-rule.md` - Horizontal rules

### Interactive Templates

- `badge.md` - Badges
- `tag.md` - Tags
- `spoiler.md` - Spoilers

### Advanced Templates

- `diagram.md` - Diagrams
- `mermaid-variants.md` - Mermaid diagrams
- `math.md` - Mathematical formulas
- `footnote.md` - Footnotes

### Link Templates

- `links.md` - Links และ references

### Metadata Templates

- `frontmatter.md` - YAML frontmatter

## Best Practices

- อ่าน template ก่อนใช้เสมอ
- ปรับแต่งตามความต้องการ แต่รักษารูปแบบ
- ใช้ templates อย่างสม่ำเสมอ
- ตรวจสอบว่า templates ถูกต้องกับ parser ที่ใช้
- อัปเดต templates หากมีการเปลี่ยนแปลง

## Troubleshooting

### Template ไม่ทำงาน

- ตรวจสอบว่า parser รองรับ syntax
- ตรวจสอบว่า formatting ถูกต้อง
- ตรวจสอบว่าไม่มี typos
- อ่าน documentation ของ parser

### Template ไม่สม่ำเสมอ

- ตรวจสอบ version ของ template
- ตรวจสอบ consistency กับ templates อื่นๆ
- อัปเดต template หากจำเป็น
- ใช้ linting tools

## Examples

### ใช้ Code Block Template

```markdown
```typescript filename="example.ts"
const x = 1;
```
```

### ใช้ Table Template

```markdown
| Header 1 | Header 2 |
|----------|----------|
| Cell 1   | Cell 2   |
```

### ใชงาน Admonition Template

```markdown
> **Note**: This is a note
```
