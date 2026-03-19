# Workflow Template

## Purpose

Template สำหรับสร้างไฟล์ workflow ตามมาตรฐานโปรเจกต์ ให้คัดลอกและแก้ไข `[placeholders]` ตามความเหมาะสม

## When to Apply

ใช้ template นี้เมื่อต้องการ:

1. **สร้าง workflow ใหม่** - คัดลอกและแก้ไข template
2. **ตรวจสอบ structure** - ใช้เป็นตัวอย่างโครงสร้างที่ถูกต้อง
3. **เรียนรู้ format** - ศึกษา sections ที่จำเป็น
4. **ทำให้สอดคล้อง** - รักษาความสอดคล้องกับมาตรฐาน

## Scope

- การสร้าง workflow files ใหม่
- การใช้ template เป็นตัวอย่างสำหรับโครงสร้างที่ถูกต้อง
- การรักษาความสอดคล้องของ workflow format

## Rules

### 1. Template Usage

- คัดลอก template ทั้งหมด
- แก้ไข `[placeholders]` ทั้งหมด
- ตรวจสอบความถูกต้องตามมาตรฐาน

### 2. Required Sections

ต้องมี sections ต่อไปนี้ทั้งหมด:

- `## Purpose` - วัตถุประสงค์ของ workflow
- `## Scope` - ขอบเขตการใช้งาน
- `## Rules` - กฎและข้อกำหนด
- `## Steps` - ขั้นตอนการดำเนินการ
- `## Expected Outcome` - ผลลัพธ์ที่คาดหวัง
- `## Reference` - แหล่งข้อมูลเพิ่มเติม

### 3. Directory Structure (optional)

```
[project]/
├── src/
│   ├── index.ts
│   ├── components/
│   └── utils/
├── tests/
│   ├── *.test.ts
│   └── fixtures/
├── docs/
│   ├── README.md
│   └── API.md
└── package.json
```

| โฟลเดอร์ | คำอธิบาย | ไฟล์หลัก |
|----------|-----------|-----------|
| `[project]/src/` | Source code | `index.ts` |
| `[project]/tests/` | Test files | `*.test.ts` |
| `[project]/docs/` | Documentation | `README.md` |

### 4. Config (optional)

```json
{
  "package.json": {
    "type": "Project config",
    "description": "Dependencies และ scripts"
  },
  "tsconfig.json": {
    "type": "TypeScript config", 
    "description": "Compiler options"
  },
  ".eslintrc.json": {
    "type": "Linting config",
    "description": "Code quality rules"
  },
  "vitest.config.ts": {
## Steps

### Phase 1: Preparation

1. คัดลอก template ด้านล่าง
2. แก้ไข `[placeholders]` ทั้งหมด
3. ตรวจสอบว่ามี sections ครบถ้วน

### Phase 2: Execution

1. บันทึกไฟล์ตาม naming convention
2. ตรวจสอบความถูกต้องอีกครั้ง
3. รัน workflow เพื่อทดสอบ

### Phase 3: Validation

1. ตรวจสอบผลลัพธ์ที่ได้
2. แก้ไขปัญหา (ถ้ามี)
3. ยืนยันว่า workflow ทำงานได้

## Template

```markdown
---
title: [Workflow Name]
description: [คำอธิบายสั้นๆ ชัดเจน]
auto_execution_mode: 3
file-patterns:
  - ".windsurf/workflows/*.md"
  - "global_workflows/*.md"
follow:
  skills:
    - "@write-skills"
    - "@write-markdown"
    - "@[other-skill-if-needed]"
  workflows:
    - "/validate"
    - "/connect-workflows"
    - "/improve-content-quality"
    - "/review-workflows"
    - "/optimize-workflows"
    - "[other-workflows-if-needed]"
  files:
    - "guidelines/workflow-structure.md"
    - "[other-files-if-needed]"
---

## [Workflow Name]

## Purpose

[คำอธิบายวัตถุประสงค์ของ workflow นี้ ใช้ภาษาไทย]

## Scope

- [ขอบเขตการใช้งานที่ 1]
- [ขอบเขตการใช้งานที่ 2]
- [ขอบเขตการใช้งานที่ 3]

## Rules

### 1. [Rule Category 1]

[รายละเอียดกฎในหมวดนี้]

### 2. [Rule Category 2]

[รายละเอียดกฎในหมวดนี้]

### 3. [Rule Category 3]

[รายละเอียดกฎในหมวดนี้]

### 4. Directory Structure (optional)

```
[project]/
├── src/
│   └── index.ts
├── tests/
│   └── *.test.ts
└── docs/
    └── README.md
```

### 5. Config (optional)

```json
{
  "package.json": {
    "type": "Project config",
    "description": "Dependencies และ scripts"
  },
  "tsconfig.json": {
    "type": "TypeScript config", 
    "description": "Compiler options"
  },
  ".eslintrc.json": {
    "type": "Linting config",
    "description": "Code quality rules"
  },
  "vitest.config.ts": {
    "type": "Test config",
    "description": "Test configuration"
  }
}
```

## Expected Outcome

| ผลลัพธ์ | คำอธิบาย | วิธีวัดผล |
|--------|----------|------------|
| **Files Created** | ไฟล์ workflow ที่สร้าง | ตรวจสอบใน directory |
| **Structure Validated** | โครงสร้างถูกต้อง | Run validation script |
| **References Updated** | Links ทำงานได้ | Test all links |
| **Integration Ready** | เชื่อมโยงได้ | Test with other workflows |

## Reference

- [Write Workflows Rules](../1-rules/document-structure.md)
- [File Naming Conventions](../1-rules/file-naming-conventions.md)
- [Markdown Format Guidelines](https://www.markdownguide.org/)
- [Project Structure Standards](../../follow-project-structure/)
- [Examples Directory](../3-examples)