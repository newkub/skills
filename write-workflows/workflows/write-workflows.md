---
title: Write Workflows
description: แนวทางการสร้างและจัดรูปแบบไฟล์ workflow ตามมาตรฐานโปรเจกต์
auto_execution_mode: 3
file-patterns:
  - ".windsurf/workflows/*.md"
  - "global_workflows/*.md"
follow:
  skills:
    - "@write-skills"
    - "@write-markdown"
  workflows:
    - "/validate"
    - "/connect-workflows"
    - "/improve-content-quality"
    - "/review-workflows"
    - "/optimize-workflows"
  files:
    - "write-workflows/rules/document-structure.md"
    - "write-workflows/rules/language-standards.md"
    - "write-workflows/rules/front-matter-format.md"
---

## Write Workflows

## Purpose

สร้างและจัดรูปแบบไฟล์ workflow ตามมาตรฐานโปรเจกต์เพื่อความสอดคล้องและคุณภาพ

## When to Apply

ใช้ workflow นี้เมื่อต้องการ:

1. **สร้าง workflow ใหม่** - สร้างไฟล์ workflow ตามมาตรฐาน
2. **จัดรูปแบบ workflow** - จัด organization ของ content
3. **ตรวจสอบมาตรฐาน** - ให้สอดคล้องกับ project standards
4. **เขียน documentation** - สร้างเอกสารที่มีประสิทธิภาพ

## Scope

- การสร้างไฟล์ workflow ใหม่
- การปรับปรุงไฟล์ workflow ที่มีอยู่
- การตรวจสอบความถูกต้องของ workflow format
- การรักษาความสอดคล้องของมาตรฐาน

## Rules

### 1. Structure Requirements

- ต้องมี sections ครบถ้วน: Purpose, Scope, Rules, Steps, Reference
- ใช้ heading levels ที่สอดคล้องกัน
- จัดลำดับ sections ตามที่กำหนด

### 2. Language Standards

- Headings ใช้ภาษาอังกฤษ
- Content หลักใช้ภาษาไทย
- Technical terms ใช้ภาษาอังกฤษ

### 3. Front Matter Format

- ใช้ YAML format ที่กำหนด
- มี required fields ครบถ้วน
- ตรวจสอบ syntax ให้ถูกต้อง

### 4. File Naming

- ใช้ format `domain-category-subtopic.md`
- ใช้ kebab-case เท่านั้น
- ชื่อต้องสื่อถึงเนื้อหา

## Steps

### Phase 1: Preparation

1. ศึกษา rules ทั้งหมดใน `rules/` folder
2. ตรวจสอบ templates ใน `templates/` folder
3. ดูตัวอย่างใน `examples/` folder
4. ทำความเข้าใจ requirements ที่ชัดเจน

### Phase 2: Structure Creation

1. คัดลอก template จาก `templates/workflow-template.md`
2. สร้าง front matter ตาม `rules/front-matter-format.md`
3. สร้าง sections ครบถ้วนตาม `rules/document-structure.md`
4. ตั้งชื่อไฟล์ตาม `rules/file-naming-conventions.md`

### Phase 3: Content Development

1. เขียน Purpose section ให้ชัดเจน
2. กำหนด Scope ให้จำกัดและเฉพาะเจาะจง
3. สร้าง Rules ที่เป็นข้อกำหนดที่ชัดเจน
4. แบ่ง Steps เป็น phases ที่เป็นลำดับ
5. เพิ่ม Reference ที่เกี่ยวข้อง

### Phase 4: Language Validation

1. ตรวจสอบว่า headings เป็นภาษาอังกฤษ
2. ตรวจสอบว่า content หลักเป็นภาษาไทย
3. ตรวจสอบว่า technical terms เป็นภาษาอังกฤษ
4. ทบทวนความสอดคล้องของภาษาทั้งไฟล์

### Phase 5: Quality Assurance

1. ตรวจสอบความถูกต้องของ front matter
2. ตรวจสอบว่า links และ references ใช้งานได้
3. ตรวจสอบความสมบูรณ์ของเนื้อหา
4. ทบทวนความชัดเจนและความเข้าใจง่าย

### Phase 6: Integration

1. เชื่อมโยงกับ workflows ที่เกี่ยวข้อง
2. อัพเดท references ในไฟล์อื่นที่เกี่ยวข้อง
3. ตรวจสอบว่าทุกอย่างทำงานร่วมกันได้
4. ทำการทดสอบ workflow จริง

## Reference

- [Document Structure Rules](../execute/1-rules/document-structure.md)
- [File Naming Conventions](../execute/1-rules/file-naming-conventions.md)
- [Template](../execute/2-templates/global-workflows.md)
- [Example](../execute/3-examples/commit.md)
- Related workflows: `/validate`, `/connect-workflows`, `/improve-content-quality`