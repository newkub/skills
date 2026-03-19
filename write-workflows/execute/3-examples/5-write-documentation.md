---
title: Write Documentation
description: เขียน documentation ที่ครบถ้วนและเข้าใจง่าย
auto_execution_mode: 3
file-patterns:
  - "**/*.md"
  - "**/docs/**"
  - "**/README.md"
follow:
  skills:
    - "@write-skills"
    - "@write-markdown"
  workflows:
    - "/validate"
    - "/write-documentation"
    - "/improve-content-quality"
  files:
    - "guidelines/documentation-standards.md"
---

## Write Documentation

## Purpose

สร้างและปรับปรุง documentation ให้ครบถ้วน ชัดเจน และเข้าใจง่าย

## Scope

- README.md หลักของโปรเจกต์
- API documentation
- User guides และ tutorials
- Developer documentation

## Rules

### 1. Documentation Structure

| Section | คำอธิบาย | จำเป็น? |
|---------|-----------|----------|
| **Title** | ชื่อเอกสาร | ✅ |
| **Overview** | ภาพรวม 1-2 ย่อหน้า | ✅ |
| **Installation** | วิธีติดตั้ง | ✅ |
| **Usage** | วิธีใช้งาน | ✅ |
| **API Reference** | API docs | ❌ |
| **Examples** | ตัวอย่าง | ✅ |
| **Contributing** | วิธีมีส่วนร่วม | ❌ |
| **License** | License | ✅ |

### 2. Writing Standards

| Element | กฎ |
|---------|----|
| **Headings** | ใช้ # ## ### ตามลำดับ |
| **Code Blocks** | ระบุภาษาเสมอ |
| **Links** | ใช้ relative links ภายในโปรเจกต์ |
| **Images** | ใช้ alt text และ path ที่ถูกต้อง |
| **Lists** | ใช้ bullet points หรือ numbered lists |

### 3. Content Guidelines

| หัวข้อ | แนวทาง |
|---------|----------|
| **Clarity** | เขียนให้เข้าใจง่าย ง่ายกว่าฉลาด |
| **Examples** | มีตัวอย่างจริงที่ copy-paste ได้ |
| **Updates** | อัพเดทตามการเปลี่ยนแปลงโค้ด |
| **Audience** | กำหนดผู้อ่าน (dev, user, admin) |

## Steps

### Phase 1: Planning

1. กำหนด audience และ objectives
2. สร้าง outline และ structure
3. รวบรวม content ที่จำเป็น

### Phase 2: Writing

1. เขียน content ตาม structure
2. เพิ่ม examples และ code snippets
3. ตรวจสอบ clarity และ completeness

### Phase 3: Review

1. ตรวจสอบ grammar และ spelling
2. ทดสอบ examples ว่าใช้งานได้
3. อัพเดท links และ references

## Expected Outcome

| ผลลัพธ์ | คำอธิบาย | วิธีวัดผล |
|--------|----------|------------|
| **Documentation Complete** | มี docs ครบถ้วน | Check sections |
| **Content Clear** | เข้าใจง่าย | User testing |
| **Examples Working** | Copy-paste ได้ | Test examples |
| **Links Valid** | Links ทำงานได้ | Link checker |

## Reference

- [Markdown Guide](../../../template-markdown/)
- [Content Quality](../../../improve-content-quality/)
- [Writing Standards](../../../lang-javascript/)
- [API Documentation](https://apidoc.tools/)
- [Technical Writing](https://developers.google.com/tech-writing)
