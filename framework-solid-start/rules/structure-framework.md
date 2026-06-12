---
title: Framework Structure
description: โครงสร้างและ file requirements สำหรับ framework skills
---

## Goal

ระบุโครงสร้างและ file requirements สำหรับ framework skills

## Folder Structure

```text
framework-name/
├── SKILL.md
├── guide/
│   ├── installation.md
│   ├── key-concept.md
│   ├── how-it-works.md
│   ├── features.md
│   ├── configuration.md
│   ├── quick-start.md
│   ├── best-practices.md
│   ├── integration.md
│   ├── architecture.md
│   ├── structure.md
│   ├── performance.md
│   ├── security.md
│   ├── migration.md
│   ├── ecosystem.md
│   ├── testing.md
│   ├── patterns.md
│   └── troubleshooting.md
├── key-concepts/
│   └── ...
├── principles/
│   └── ...
├── references/
│   ├── website.md
│   ├── sitemap.md
│   ├── api.md
│   ├── cli.md
│   └── configuration.md
├── workflows/
│   └── ...
├── templates/
│   └── ...
├── scripts/
│   └── ...
└── rules/
    └── structure-framework.md
```

## File Requirements

| File/Folder | Required | Description |
|-------------|----------|-------------|
| SKILL.md | ✅ | Index file สำหรับ skill |
| guide/ | ✅ | Guides และ best practices |
| installation.md | ✅ | วิธีติดตั้งและ dependencies |
| key-concept.md | ⭕ | Concept หลักของ framework |
| how-it-works.md | ✅ | วิธีการทำงานภายใน |
| features.md | ✅ | Features และ capabilities |
| configuration.md | ✅ | Configuration options |
| quick-start.md | ✅ | เริ่มต้นใช้งานอย่างรวดเร็ว |
| best-practices.md | ✅ | Best practices จาก official docs |
| integration.md | ✅ | Integration patterns |
| architecture.md | ✅ | Architecture และ component relationships |
| structure.md | ✅ | Project structure และ file organization |
| performance.md | ✅ | Performance characteristics และ optimization |
| security.md | ✅ | Security considerations |
| migration.md | ✅ | Migration guides |
| ecosystem.md | ✅ | Ecosystem tools และ plugins |
| testing.md | ✅ | Testing strategies |
| patterns.md | ✅ | Design patterns สำหรับ framework |
| troubleshooting.md | ✅ | Common errors และ solutions |
| key-concepts/ | ✅ | Key concepts แยกเป็นไฟล์ |
| principles/ | ✅ | Principles แยกเป็นไฟล์ |
| references/ | ✅ | External references |
| website.md | ✅ | Official website และ resources |
| sitemap.md | ✅ | Documentation sitemap |
| api.md | ✅ | API reference |
| cli.md | ⭕ | CLI commands และ options |
| configuration.md | ✅ | Configuration reference |
| workflows/ | ✅ | Workflow files |
| templates/ | ⭕ | Code templates |
| scripts/ | ⭕ | TypeScript scripts |
| rules/ | ✅ | Structure rules |

✅ = REQUIRED, ⭕ = OPTIONAL

## Content Guidelines

### guide/

เขียนเป็นภาษาไทย, ใช้ตารางสรุป, diagrams

- **installation**: วิธีติดตั้ง, dependencies, ตาราง Platform/Command/Notes
- **key-concept**: concept หลัก, ภาษาเข้าใจง่าย, ตัวอย่างจริง
- **how-it-works**: internal mechanism, diagrams, step-by-step
- **features**: รายการ features, ตาราง Feature/Description/Use Case
- **configuration**: options ทั้งหมด, code example, ตาราง Option/Type/Default
- **quick-start**: minimal setup, numbered steps, copy-paste examples
- **best-practices**: จาก official docs, ตาราง Practice/Why/Example
- **integration**: integration patterns, diagrams, pitfalls
- **architecture**: component relationships, design decisions
- **structure**: folder layout, naming conventions
- **performance**: characteristics, benchmarks, optimization
- **security**: considerations, vulnerabilities, checklists
- **migration**: breaking changes, migration scripts
- **ecosystem**: tools/plugins, community resources
- **testing**: strategies, test cases, coverage goals
- **patterns**: design patterns, when to use
- **troubleshooting**: common errors, ตาราง Error/Cause/Solution

### key-concepts/

เขียนเป็นภาษาไทย, ไฟล์แยกกัน

- definition, importance, when to use, examples, pros/cons
- ใช้ diagrams หรือ analogies

### principles/

เขียนเป็นภาษาไทย, ไฟล์แยกกัน

- definition, importance, application, examples, anti-patterns
- ใช้ before/after examples

### references/

ใช้ตารางสรุป

- **website.md**: ตาราง Name/URL/Description, official resources
- **sitemap.md**: ตาราง Name/URL/Description, documentation list
- **api.md**: ตาราง Method/Description/Example, public API
- **cli.md**: ตาราง Command/Description/Example, CLI commands
- **configuration.md**: code example + ตาราง Option/Type/Default
