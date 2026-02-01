---
name: nuxt-module
description: แนวทางการพัฒนา Nuxt Modules ตาม Best Practices
goal: พัฒนา Nuxt Modules ตามมาตรฐาน
outcome: Nuxt Modules มีโครงสร้างและคุณภาพตามมาตรฐาน
---

# Nuxt Module Development

## When to Apply

ใช้ Skill นี้เมื่อพัฒนา Nuxt Modules

- เมื่อสร้าง Nuxt modules ใหม่
- เมื่อต้องการ extend Nuxt functionality
- เมื่อต้องการ create reusable components

## Rules

| Priority | Impact | Reference | Name | Description | Prefix | Condition |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| 1 | `CRITICAL` | [module-structure.md](./rules/module-structure.md) | Module Structure | โครงสร้าง module ที่ถูกต้อง | `nuxt-module-` | เมื่อสร้าง module |
| 2 | `HIGH` | [module-config.md](./rules/module-config.md) | Module Configuration | การกำหนดค่า module | `nuxt-module-` | เมื่อตั้งค่า config |

## Knowledge

| Reference | Name | Description | Prefix |
| :--- | :--- | :--- | :--- |
| [nuxt-module-concepts.md](./knowledge/nuxt-module-concepts.md) | Nuxt Module Concepts | ความรู้พื้นฐานเกี่ยวกับ Nuxt modules | `nuxt-module-` |

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

## Quick Start

1. สร้าง module ใหม่
2. ติดตั้ง dependencies
3. ตั้งค่า config

## References

- [Nuxt Modules Documentation](https://nuxt.com/docs/guide/going-further/modules)
