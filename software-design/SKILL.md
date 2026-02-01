---
name: software-design
description: Best practices for software design including principles, patterns, architecture, and maintainability
goal: ออกแบบ software ตาม best practices
outcome: Software มีโครงสร้างและคุณภาพตามมาตรฐาน
---

# Software Design

## When to Apply

ใช้ Skill นี้เมื่อออกแบบ software

- เมื่อออกแบบ modules, classes, และ APIs
- เมื่อ apply design patterns
- เมื่อสร้าง APIs
- เมื่อ implement business logic

## Rules

| Priority | Impact | Reference | Name | Description | Prefix | Condition |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| 1 | `CRITICAL` | [design-principles.md](./rules/design-principles.md) | Design Principles | SOLID, DRY, KISS, YAGNI | `design-` | เมื่อออกแบบ software |
| 2 | `HIGH` | [architecture-patterns.md](./rules/architecture-patterns.md) | Architecture | Monolith, Modular, Microservices | `design-` | เมื่อเลือก architecture |
| 3 | `HIGH` | [design-patterns.md](./rules/design-patterns.md) | Design Patterns | Factory, Strategy, Observer | `design-` | เมื่อใช้ patterns |
| 4 | `HIGH` | [system-design.md](./rules/system-design.md) | System Design | Scalability, Reliability | `design-` | เมื่อออกแบบระบบ |
| 5 | `HIGH` | [api-design.md](./rules/api-design.md) | API Design | REST, GraphQL, RPC | `design-` | เมื่อออกแบบ API |
| 6 | `HIGH` | [data-design.md](./rules/data-design.md) | Data Design | Schema, Index, Consistency | `design-` | เมื่อออกแบบข้อมูล |
| 7 | `HIGH` | [performance.md](./rules/performance.md) | Performance | Caching, Profiling | `design-` | เมื่อ optimize performance |
| 8 | `CRITICAL` | [security.md](./rules/security.md) | Security | Auth, Encryption, Threat modeling | `design-` | เมื่อ implement security |
| 9 | `HIGH` | [maintainability.md](./rules/maintainability.md) | Maintainability | Modularity, Refactoring | `design-` | เมื่อ maintain code |
| 10 | `MEDIUM` | [developer-experience.md](./rules/developer-experience.md) | DX | Tooling, CLI, Docs | `design-` | เมื่อ improve DX |

## Knowledge

| Reference | Name | Description | Prefix |
| :--- | :--- | :--- | :--- |

## Overview

### Rules

แต่ละไฟล์ Rule ประกอบด้วย:
- เหตุผล (Why)
- ตัวอย่างที่ไม่ดี (Anti-patterns)
- ตัวอย่างที่ดี (Best practices)
- กฎที่ต้องปฏิบัติตาม (Rules)
- ผลกระทบถ้าไม่ทำตาม (Impact)
- เอกสารอ้างอิง (References)

### Knowledge

แต่ละไฟล์ Knowledge ประกอบด้วย:
- Overview: ภาพรวมของ topic
- Key Concepts: concepts สำคัญที่ต้องรู้
- Examples: ตัวอย่างการใช้งาน
- Best Practices: best practices ที่ควรทำตาม
- References: ลิงก์ไปยังแหล่งข้อมูลต้นฉบับ

## How to Use

แต่ละไฟล์ Rule อธิบายถึง:
- เหตุผลที่ต้องทำตามกฎ
- ตัวอย่างที่ไม่ดีและดี
- กฎที่ต้องปฏิบัติตาม
- ผลกระทบถ้าไม่ทำตาม
- เอกสารอ้างอิง

แต่ละไฟล์ Knowledge อธิบายถึง:
- ภาพรวมของ topic
- Concepts สำคัญที่ต้องรู้
- ตัวอย่างการใช้งาน
- Best practices ที่ควรทำตาม
- เอกสารอ้างอิง

## References

- [Software Design Principles](https://example.com)
