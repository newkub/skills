---
name: bun
description: Best practices for Bun development including dependencies, configuration, and project structure
goal: พัฒนาด้วย Bun ตาม best practices
outcome: Projects ที่ใช้ Bun มีคุณภาพและประสิทธิภาพ
---

# Bun

## When to Execute

Use this skill when you need to develop applications using Bun runtime with proper best practices and optimization.

### Folder Structure Summary

| Folder | Purpose | When to Use |
|--------|---------|-------------|
| `knowledge/` | Core concepts and features | Document fundamental understanding |
| `rules/` | Specific guidelines and patterns | Create actionable rules |
| `follow-*.md` | Implementation guides | Step-by-step setup instructions |

### Entry Points

1. **New Bun Project** - Start with `bun init` and follow package.json guide
2. **Dependencies Management** - Use follow-bun-dependencies.md
3. **Project Structure** - Follow follow-bun-project-structure.md
4. **Configuration Setup** - Use follow-bun-config.md and follow-bun-gitignore.md

## Quick Start

1. สร้างโปรเจกต์ Bun ใหม่ด้วย `bun init my-project`
2. ตั้งค่า package.json และ scripts ตาม [follow-bun-package-json.md](./follow-bun-package-json.md)
3. ติดตั้ง dependencies ด้วย `bun install`
4. จัดโครงสร้างโปรเจกต์ตาม [follow-bun-project-structure.md](./follow-bun-project-structure.md)
5. รัน `bun run dev` เพื่อเริ่มการพัฒนา

## Rules

| Priority | Impact | Reference | Name | Description | Prefix | Condition |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| 1 | `CRITICAL` | [follow-bun-package-json.md](./follow-bun-package-json.md) | Package & Scripts | ตั้งค่า package.json และ scripts ตามมาตรฐาน | `bun-` | เมื่อสร้าง project |
| 2 | `HIGH` | [follow-bun-dependencies.md](./follow-bun-dependencies.md) | Dependencies | จัดการ dependencies อย่างเหมาะสม | `bun-` | เมื่อจัดการ deps |
| 2 | `HIGH` | [follow-bun-config.md](./follow-bun-config.md) | Tooling Config | ตั้งค่า tooling config | `bun-` | เมื่อตั้งค่า config |
| 2 | `HIGH` | [follow-bun-gitignore.md](./follow-bun-gitignore.md) | Gitignore | ตั้งค่า .gitignore ตาม best practices | `bun-` | เมื่อสร้าง gitignore |
| 3 | `HIGH` | [follow-bun-project-structure.md](./follow-bun-project-structure.md) | Project Structure | โครงสร้าง project ที่เหมาะสม | `bun-` | เมื่อสร้าง project |

## Knowledge

| Reference | Name | Description | Prefix |
| :--- | :--- | :--- | :--- |
| [core-concept.md](./knowledge/core-concept.md) | Core Concepts | ความรู้เกี่ยวกับ concepts หลักของ Bun | `bun-` |
| [all-features.md](./knowledge/all-features.md) | All Features | ความรู้เกี่ยวกับฟีเจอร์ทั้งหมดของ Bun | `bun-` |
| [best-practices.md](./knowledge/best-practices.md) | Best Practices | best practices สำหรับการใช้ Bun | `bun-` |

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

- [Bun Documentation](https://bun.sh/docs)

## Verification

1. ตรวจสอบว่า Bun ติดตั้งและตั้งค่าถูกต้องด้วย `bun --version`
2. ทดสอบด้วยการรัน `bun install` และตรวจสอบว่า dependencies ติดตั้งสำเร็จ
3. ตรวจสอบว่า scripts ใน package.json ทำงานได้
4. ทดสอบว่า development server ทำงานได้ด้วย `bun run dev`
