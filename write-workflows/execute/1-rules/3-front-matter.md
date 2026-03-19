# Front Matter Format

## Purpose

กำหนดรูปแบบมาตรฐานสำหรับ front matter ในไฟล์ workflow

## Scope

- ทุกไฟล์ workflow ใน `.windsurf/workflows/*.md`
- ทุกไฟล์ global workflow ใน `global_workflows/*.md`

## Rules

### 1. Required Fields

ทุกไฟล์ต้องมี fields ต่อไปนี้:

| Field | Type | Language | คำอธิบาย |
|-------|------|----------|----------|
| **title** | String | English | ชื่อ workflow (Title Case) |
| **description** | String | Thai | คำอธิบายวัตถุประสงค์ |
| **auto_execution_mode** | Number | - | ระดับการทำงานอัตโนมัติ (1, 2, 3) |
| **file-patterns** | Array | - | รูปแบบไฟล์ที่ใช้งาน (glob patterns) |

### 2. Optional Fields

| Field | Type | ใช้เมื่อ |
|-------|------|----------|
| **follow** | Object | มีการอ้างอิง skills, workflows, หรือ files |

### 3. Validation Rules

| Rule | รายละเอียด |
|------|-----------|
| YAML Syntax | ต้องถูกต้อง |
| Title | ภาษาอังกฤษเท่านั้น |
| Description | ภาษาไทยเท่านั้น |
| File Patterns | ต้องเป็น glob patterns ที่ถูกต้อง |
| References | ต้องมีอยู่จริง |

### 4. Auto Execution Mode

| Mode | ความหมาย | ใช้เมื่อ |
|------|----------|----------|
| **1** | Manual | ต้องถามก่อนทำทุกครั้ง |
| **2** | Semi-auto | ถามเฉพาะสิ่งสำคัญ |
| **3** | Auto | ทำอัตโนมัติ (default) |

## Template

```yaml
---
title: [Workflow Title]
description: [Thai Description]
auto_execution_mode: [1 | 2 | 3]
file-patterns:
  - "[pattern1]"
  - "[pattern2]"
follow:
  skills:
    - "@skill-name"
  workflows:
    - "/workflow-name"
  files:
    - "path/to/file.md"
---
```

## Example

```yaml
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
    - "guidelines/workflow-structure.md"
---
```
