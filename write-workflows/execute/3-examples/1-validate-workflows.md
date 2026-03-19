---
title: Validate Workflows
description: ตรวจสอบความถูกต้องของ workflows ทั้งหมด
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
  files:
    - "guidelines/workflow-structure.md"
---

## Validate Workflows

## Purpose

ตรวจสอบความถูกต้องของไฟล์ workflow ทั้งหมดตามมาตรฐานที่กำหนด

## Scope

- ทุกไฟล์ workflow ใน `.windsurf/workflows/`
- ทุกไฟล์ global workflow ใน `global_workflows/`
- การตรวจสอบ pre-commit และ CI/CD

## Rules

### 1. Structure Validation

| รายการ | สถานะ |
|--------|--------|
| มี sections ครบ (Purpose, Scope, Rules, Steps, Reference) | ✅ |
| ลำดับ sections ถูกต้อง | ✅ |
| Heading levels สอดคล้องกัน | ✅ |

### 2. Language Check

| Element | ภาษา |
|---------|------|
| Headings | อังกฤษ |
| Descriptions | ไทย |
| Technical terms | อังกฤษ |

### 3. Front Matter Validation

| Field | สถานะ |
|-------|--------|
| `title` | Required (อังกฤษ) |
| `description` | Required (ไทย) |
| `auto_execution_mode` | Required (1, 2, 3) |
| `file-patterns` | Required (Array) |
| `follow` | Recommended |

## Steps

### Phase 1: Initial Check

1. ตรวจสอบว่าไฟล์มี front matter ครบถ้วน
2. ตรวจสอบว่ามี sections ครบตามโครงสร้าง
3. ตรวจสอบลำดับและ hierarchy ของ headings

### Phase 2: Content Validation

1. ตรวจสอบภาษาที่ใช้ใน headings และ descriptions
2. ตรวจสอบความสมบูรณ์ของ technical terms
3. ตรวจสอบความถูกต้องของ file patterns

### Phase 3: Integration Check

1. ตรวจสอบว่า follow references มีอยู่จริง
2. ตรวจสอบว่า internal links ใช้งานได้
3. ตรวจสอบว่า external links เข้าถึงได้

## Expected Outcome

| ผลลัพธ์ | คำอธิบาย | วิธีวัดผล |
|--------|----------|------------|
| **All Files Validated** | ทุกไฟล์ผ่าน validation | Check validation report |
| **Structure Compliant** | โครงสร้างถูกต้อง | Run structure check |
| **Links Working** | Links ทำงานได้ | Test all links |
| **Ready for Integration** | เชื่อมโยงได้ | Test with other workflows |

## Reference

- [Document Structure Rules](../1-rules/1-document-structure.md)
- [File Naming Conventions](../1-rules/2-file-naming.md)
- [Front Matter Format](../1-rules/3-front-matter.md)
- [Language Standards](../1-rules/4-language.md)
- [Workflow Examples](../3-examples/)
- [Markdown Format Guidelines](https://www.markdownguide.org/)
