---
name: tool-write-dot-devin
description: สร้าง .devin structure ครบถ้วนสำหรับ project workspace
---

## When to use

- เมื่อต้องการสร้าง .devin structure ใน project workspace
- เมื่อต้องการตั้งค่า rules สำหรับ Devin/Cascade
- เมื่อต้องการตั้งค่า hooks สำหรับ automation
- เมื่อต้องการสร้าง project configuration ตามมาตรฐาน

## Skills Related

- `/write-skills` - มาตรฐานการเขียน Devin Skills
- `/write-windsurf-global-workflows` - มาตรฐานการเขียน Workflows

## โครงสร้าง Directory

```text
tool-write-dot-devin/
├── SKILL.md
├── guide/
│   ├── installation.md
│   ├── key-concept.md
│   ├── how-it-works.md
│   ├── features.md
│   ├── configuration.md
│   ├── quick-start.md
│   └── best-practices.md
├── key-concepts/
│   ├── devin-structure.md
│   ├── rules.md
│   └── hooks.md
├── principles/
│   ├── minimal-config.md
│   └── consistency.md
├── references/
│   ├── project-rules.md
│   ├── project-hooks.md
│   ├── configuration.md
│   └── website.md
└── workflows/
    ├── write-devin-project-rules.md
    └── write-devin-project-hooks.md
```

## Guide

| No | File | Description |
|----|------|-------------|
| 1 | [installation.md](guide/installation.md) | วิธีติดตั้งและใช้งาน write-dot-devin |
| 2 | [key-concept.md](guide/key-concept.md) | Key concepts ของ .devin structure |
| 3 | [how-it-works.md](guide/how-it-works.md) | วิธีการทำงานของ .devin structure |
| 4 | [features.md](guide/features.md) | Features ของ .devin structure |
| 5 | [configuration.md](guide/configuration.md) | Configuration ของ .devin |
| 6 | [quick-start.md](guide/quick-start.md) | Quick start guide |
| 7 | [best-practices.md](guide/best-practices.md) | Best practices สำหรับ .devin structure |

## Key Concepts

| No | File | Description |
|----|------|-------------|
| 1 | [devin-structure.md](key-concepts/devin-structure.md) | โครงสร้างของ .devin directory |
| 2 | [rules.md](key-concepts/rules.md) | Rules สำหรับ Devin/Cascade |
| 3 | [hooks.md](key-concepts/hooks.md) | Hooks สำหรับ automation |

## Principles

| No | File | Description |
|----|------|-------------|
| 1 | [minimal-config.md](principles/minimal-config.md) | Minimal configuration ที่จำเป็น |
| 2 | [consistency.md](principles/consistency.md) | ความสม่ำเสมอของ configuration |

## References

| No | File | Description |
|----|------|-------------|
| 1 | [project-rules.md](references/project-rules.md) | Project rules reference |
| 2 | [project-hooks.md](references/project-hooks.md) | Project hooks reference |
| 3 | [configuration.md](references/configuration.md) | Configuration reference |
| 4 | [website.md](references/website.md) | Official documentation |

## Workflows

| No | File | Description |
|----|------|-------------|
| 1 | [write-devin-project-rules.md](workflows/write-devin-project-rules.md) | Workflow สำหรับสร้าง project rules |
| 2 | [write-devin-project-hooks.md](workflows/write-devin-project-hooks.md) | Workflow สำหรับสร้าง project hooks |

## Version

- Current: v1.0
- Repository: [newkub/skills](https://github.com/newkub/skills)
