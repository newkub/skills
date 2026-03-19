---
description: เขียน skill documentation ตามมาตรฐาน
title: write-skills
---

## Objective

กำหนดมาตรฐานการเขียน skills ให้มีคุณภาพสูง และเป็นมาตรฐานเดียวกัน

## Scope

- สร้าง skill ใหม่ตามมาตรฐาน
- แก้ไข skill ที่มีอยู่ให้เป็นมาตรฐาน
- ตรวจสอบความถูกต้องของโครงสร้างไฟล์
- สร้าง templates สำหรับ skills

## Preconditions

- รู้ว่า skill นี้ใช้ทำอะไร
- เข้าใจมาตรฐานการเขียน workflows
- เข้าใจผู้ใช้เป้าหมาย

## Execution

### Apply Content Rules

ดูที่มาตรฐานการเขียน workflows

### File Naming

| รูปแบบ | ตัวอย่าง |
|--------|----------|
| prefix + topic | `check-`, `guide-`, `lang-`, `learn-`, `lib-`, `runtime-`, `update-` |
| ordered files | `1-introduction.md`, `2-setup.md` |
| kebab-case | `file-name.md` |

### File Structure

```text
[skill-name]/
├── SKILL.md                    # เอกสารหลัก
├── get-started/                # เริ่มต้นใช้งาน
│   ├── 1-introduction.md
│   ├── 2-quick-start.md
│   └── 3-key-concept.md
├── knowledge/                  # ความรู้พื้นฐาน
│   ├── 1-core-concept.md
│   ├── 2-all-features.md
│   └── best-practices/
│       ├── 1-fundamentals.md
│       └── 2-advanced.md
├── guide/                      # คู่มือการใช้งาน
│   └── ...
├── tools/                      # เครื่องมือ (lib)
│   └── cli.md
├── api/                        # API reference (lib)
│   └── ...
├── rules/                      # กฎการใช้งาน
│   ├── 1-[topic]-setup.md
│   ├── 2-[topic]-config.md
│   └── 3-[topic]-usage.md
└── reference/                  # เอกสารอ้างอิง
    ├── 1-examples.md
    ├── 2-patterns.md
    └── 3-resources.md
```

### References

| ประเภท | รูปแบบ | ตัวอย่าง |
|--------|--------|----------|
| workflow | `/workflow-name` | `/update-workflows` |
| skill | `@skill-name` | `@typescript` |

## Validation

ตรวจสอบว่า skill ที่สร้าง:

- ใช้ file naming ถูกต้อง (prefix, ordered files)
- มีครบทุก sections ตามมาตรฐานการเขียน workflows
- ใช้ภาษาไทยเป็นหลัก
- ไม่มี "การ", "ทำการ"
- ใช้ active voice

## Exclusions

- ไม่รวมการสร้าง skills จริง
- ไม่รวม business logic
