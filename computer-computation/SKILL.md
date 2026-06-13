---
title: Guide Computer Computation
description: Computer computation and theory of computation guide covering computational models, complexity theory, algorithms, and formal languages.
auto_execution_mode: 3
---

## Goal

ให้ผู้ใช้เข้าใจและสามารถประยุกต์ใช้ theory of computation ได้อย่างมีประสิทธิภาพ

## Scope

ใช้สำหรับเข้าใจทฤษฎี computation และ computational models, เรียนรู้ complexity theory และ algorithm analysis, เข้าใจ formal languages และ automata, เตรียมสอบ theory of computation, ออกแบบ algorithms ที่มีประสิทธิภาพ, และเข้าใจ limits ของ computation

## Execute

### 1. Study The Fundamentals

- อ่าน `guide/quick-start.md` เพื่อเริ่มต้นเรียนรู้
- ศึกษา `guide/key-concept-turing-machines.md` เพื่อเข้าใจ Turing Machines
- ศึกษา `guide/key-concept-automata.md` เพื่อเข้าใจ Automata Theory
- ศึกษา `guide/key-concept-complexity.md` เพื่อเข้าใจ Complexity Classes
- ศึกษา `guide/key-concept-formal-languages.md` เพื่อเข้าใจ Formal Languages
- ศึกษา `guide/key-concept-computability.md` เพื่อเข้าใจ Computability
- ศึกษา `guide/key-concept-church-turing.md` เพื่อเข้าใจ Church-Turing Thesis

### 2. Learn Architecture And Design

- อ่าน `guide/architecture.md` เพื่อเข้าใจ computational models
- ศึกษา `guide/features.md` เพื่อเข้าใจ features หลัก
- อ่าน `guide/integration.md` เพื่อเข้าใจการเชื่อมโยง

### 3. Understand How It Works

- อ่าน `guide/how-it-works-computation-models.md` เพื่อเข้าใจการทำงานของ computation models
- อ่าน `guide/how-it-works-complexity.md` เพื่อเข้าใจ complexity analysis

### 4. Apply Best Practices

- อ่าน `guide/best-practices.md` เพื่อเรียนรู้ best practices
- ตั้งค่าตาม `guide/configuration.md`
- ติดตั้งตาม `guide/installation.md`

### 5. Use Workflows

- ปฏิบัติตาม `workflows/study-computation.md` สำหรับการศึกษา
- ใช้ภาษาไทยในการอธิบาย
- ให้ examples ที่ชัดเจนและใช้งานได้จริง

### 6. Reference Documentation

- อ้างอิง `references/website.md` สำหรับ official documentation
- ดู `references/sitemap.md` สำหรับ content map
- อ้างอิง sources ที่เชื่อถือได้
- อัปเดต content ให้ทันสมัยตาม version ล่าสุด

## โครงสร้าง Directory

```
computer-computation/
├── SKILL.md
├── guide/
│   ├── architecture.md
│   ├── best-practices.md
│   ├── configuration.md
│   ├── features.md
│   ├── how-it-works-computation-models.md
│   ├── how-it-works-complexity.md
│   ├── installation.md
│   ├── integration.md
│   ├── key-concept-turing-machines.md
│   ├── key-concept-automata.md
│   ├── key-concept-complexity.md
│   ├── key-concept-formal-languages.md
│   ├── key-concept-computability.md
│   ├── key-concept-church-turing.md
│   └── quick-start.md
├── references/
│   ├── sitemap.md
│   └── website.md
└── workflows/
    └── study-computation.md
```

## หมวดหมู่ไฟล์

| หมวดหมู่ | ไฟล์ | คำอธิบาย |
|---------|------|---------|
| **Index** | `SKILL.md` | ไฟล์หลักของ skill |
| **Guides** | `guide/` | คู่มือและแนวทางการใช้งาน |
| **References** | `references/` | เอกสารอ้างอิงและ resources |
| **Workflows** | `workflows/` | Workflows สำหรับ automation |

## Rules

### Content And Style

- ใช้ภาษาไทยในการอธิบาย
- ให้ examples ที่ชัดเจนและใช้งานได้จริง
- อ้างอิง sources ที่เชื่อถือได้
- อัปเดต content ให้ทันสมัยตาม version ล่าสุด
- ใช้ backticks สำหรับ `file paths`, `commands`, และ technical terms

### Structure And Consistency

- ทุกไฟล์ต้องมี headings ที่ชัดเจน
- ใช้ bullet points (-) ชิดซ้ายใน Rules
- แต่ละไฟล์ต้องไม่เกิน 250 บรรทัด
- ใช้ `kebab-case` สำหรับชื่อไฟล์

## Expected Outcome

- เข้าใจ computational models และ automata
- สามารถวิเคราะห์ algorithm complexity ได้
- สามารถเข้าใจ formal languages ได้
- สามารถประยุกต์ใช้ theory ในการออกแบบ algorithms ได้
- สามารถใช้ workflows สำหรับการศึกษาได้อย่างมีระบบ
