---
name: vscode-extensions
description: Best practices for VSCode extensions development including reactive patterns, testing, performance optimization, and security
goal: พัฒนา VSCode extensions ตาม best practices
outcome: VSCode extensions มีคุณภาพและ maintainable
---

# VSCode Extensions Development

## When to Use

ใช้ Skill นี้เมื่อพัฒนา VSCode extensions

- เมื่อสร้าง VSCode extensions ใหม่
- เมื่อต้องการ reactive state management ใน extensions
- เมื่อต้องการ simplify event handling และ subscriptions
- เมื่อ migrate จาก VSCode API ไป reactive patterns
- เมื่อต้องการทดสอบ extensions
- เมื่อต้องการ optimize performance
- เมื่อต้องการ ensure security

## Quick Start

1. สร้าง project ด้วย VSCode Extension Generator
2. ติดตั้ง dependencies ด้วย `npm install`
3. เลือก approach: reactive-vscode หรือ traditional API
4. เขียน code ตาม rules ที่เกี่ยวข้อง
5. ทดสอบด้วย `npm run test`

## Rules

| Priority | Impact | Reference | Name | Description | Prefix | Condition |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| 1 | `HIGH` | [1-reactive-vscode-development.md](./rules/1-reactive-vscode-development.md) | Reactive VSCode | ใช้ reactive patterns สำหรับ VSCode extensions | `vscode-` | เมื่อพัฒนา extensions |
| 2 | `HIGH` | [2-vueuse-integration.md](./rules/2-vueuse-integration.md) | VueUse Integration | ใช้ VueUse utilities กับ reactive-vscode | `vscode-` | เมื่อใช้ composables |
| 3 | `HIGH` | [3-tree-shaking.md](./rules/3-tree-shaking.md) | Tree Shaking | Keep code tree-shakeable โดย import เฉพาะที่ต้อง | `vscode-` | เมื่อ optimize bundle |
| 4 | `HIGH` | [4-testing-best-practices.md](./rules/4-testing-best-practices.md) | Testing | เขียน tests สำหรับ VSCode extensions | `vscode-` | เมื่อพัฒนา extensions |
| 5 | `MEDIUM` | [5-performance-optimization.md](./rules/5-performance-optimization.md) | Performance | Optimize extension performance และ memory usage | `vscode-` | เมื่อ optimize performance |
| 6 | `MEDIUM` | [6-security-best-practices.md](./rules/6-security-best-practices.md) | Security | Follow security best practices สำหรับ extensions | `vscode-` | เมื่อพัฒนา extensions |

## Knowledge

| Reference | Name | Description | Prefix |
| :--- | :--- | :--- | :--- |
| [reactive-vscode-concepts.md](./knowledge/reactive-vscode-concepts.md) | Reactive VSCode Concepts | Core concepts of reactive-vscode library | `vscode-` |
| [extension-architecture.md](./knowledge/extension-architecture.md) | Extension Architecture | VSCode extension architecture and patterns | `vscode-` |

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

- [VSCode Extension API](https://code.visualstudio.com/api)
- [VueUse Documentation](https://vueuse.org/)
