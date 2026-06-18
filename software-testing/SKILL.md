---
title: Guide Software Testing
description: Software testing guide covering testing principles, types, strategies, tools, and best practices for building quality software.
auto_execution_mode: 3
---

## Goal

ให้ผู้ใช้เข้าใจและสามารถทดสอบ software ได้อย่างมีประสิทธิภาพ

## Scope

ใช้สำหรับเรียนรู้หลักการทดสอบซอฟต์แวร์, เขียน tests ที่มีคุณภาพ, เข้าใจ test pyramid และ test strategies, ตั้งค่า testing framework, และรวม testing เข้ากับ CI/CD

## โครงสร้าง Directory

```
software-testing/
├── SKILL.md
├── learn/
│   ├── guide/              # Guides สำหรับการใช้งาน
│   │   ├── quick-start.md
│   │   ├── installation.md
│   │   ├── configuration.md
│   │   ├── how-it-works.md
│   │   ├── features.md
│   │   ├── integration.md
│   │   ├── best-practices.md
│   │   ├── mocking.md
│   │   ├── snapshot-testing.md
│   │   ├── coverage.md
│   │   ├── performance-testing.md
│   │   ├── security-testing.md
│   │   └── accessibility-testing.md
│   ├── key-concepts/       # Concepts พื้นฐาน
│   │   ├── testing-pyramid.md
│   │   ├── test-doubles.md
│   │   ├── fixtures.md
│   │   └── test-isolation.md
│   └── principles/         # Principles และ best practices
│       ├── test-pyramid.md
│       ├── fast-feedback.md
│       └── test-maintainability.md
├── examples/              # Code examples จริง
│   ├── jest-example.md
│   ├── vitest-example.md
│   └── pytest-example.md
├── references/            # Documentation และ resources
│   ├── website.md
│   └── api-reference.md
└── workflows/             # Workflows สำหรับการทำงานเฉพาะทาง
    └── implement-testing.md
```

## หมวดหมู่ไฟล์

### Guide Files (learn/guide/)

| ไฟล์ | คำอธิบาย |
|------|-----------|
| quick-start.md | เริ่มต้นเร็วด้วยตัวอย่างพื้นฐาน |
| installation.md | วิธีติดตั้ง testing frameworks |
| configuration.md | การตั้งค่าและ configuration |
| how-it-works.md | หลักการทำงานของ testing |
| features.md | Features และ capabilities |
| integration.md | การเชื่อมต่อกับ CI/CD |
| best-practices.md | Best practices สำหรับการเขียน tests |
| mocking.md | เทคนิค mocking และ test doubles |
| snapshot-testing.md | Snapshot testing สำหรับ UI components |
| coverage.md | Test coverage และการวัดผล |
| performance-testing.md | Performance testing และ load testing |
| security-testing.md | Security testing และ vulnerability scanning |
| accessibility-testing.md | Accessibility testing ตามมาตรฐาน WCAG |

### Key Concepts Files (learn/key-concepts/)

| ไฟล์ | คำอธิบาย |
|------|-----------|
| testing-pyramid.md | Test pyramid principle |
| test-doubles.md | Test doubles (mocks, stubs, spies, fakes) |
| fixtures.md | Fixtures และ test setup |
| test-isolation.md | Test isolation และ independence |

### Principles Files (learn/principles/)

| ไฟล์ | คำอธิบาย |
|------|-----------|
| test-pyramid.md | Test pyramid principle และ ideal ratios |
| fast-feedback.md | Fast feedback principle สำหรับ development |
| test-maintainability.md | Test maintainability และ refactoring |

### Example Files (examples/)

| ไฟล์ | คำอธิบาย |
|------|-----------|
| jest-example.md | Jest examples สำหรับ JavaScript/TypeScript |
| vitest-example.md | Vitest examples สำหรับ Vite projects |
| pytest-example.md | Pytest examples สำหรับ Python |

### Reference Files (references/)

| ไฟล์ | คำอธิบาย |
|------|-----------|
| website.md | Official documentation และ learning resources |
| api-reference.md | API reference สำหรับ testing frameworks |

### Workflow Files (workflows/)

| ไฟล์ | คำอธิบาย |
|------|-----------|
| implement-testing.md | Workflow สำหรับ implement testing |

## Execute

- อ่าน guide/ เพื่อเข้าใจ concepts และ best practices
- ศึกษา key-concepts/ สำหรับ concepts พื้นฐาน
- ศึกษา principles/ สำหรับ principles และ best practices
- ดู examples/ สำหรับ code examples จริง
- ศึกษา references/ สำหรับ documentation และ resources
- ปฏิบัติตาม workflows/ สำหรับการทำงานเฉพาะทาง
- ใช้ภาษาไทยในการอธิบาย
- ให้ code examples ที่ชัดเจนและใช้งานได้จริง
- อ้างอิง sources ที่เชื่อถือได้
- อัปเดต content ให้ทันสมัยตาม version ล่าสุด

## Rules

- ใช้ภาษาไทยในการอธิบาย
- ให้ code examples ที่ชัดเจนและใช้งานได้จริง
- อ้างอิง sources ที่เชื่อถือได้
- อัปเดต content ให้ทันสมัยตาม version ล่าสุด

## Expected Outcome

- เข้าใจ testing principles และ strategies
- สามารถเขียน tests ที่มีคุณภาพได้
- สามารถตั้งค่า testing framework ได้
- สามารถรวม testing เข้ากับ CI/CD ได้
