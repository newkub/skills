---
name: vite-plugins
description: Build Vite plugins with TypeScript and tsdown
goal: สร้าง Vite plugins ตาม best practices
outcome: Vite plugins มีคุณภาพและ maintainable
---

# Vite Plugins Development

## When to Apply

ใช้ Skill นี้เมื่อสร้าง Vite plugins

- เมื่อสร้าง Vite plugins ใหม่
- เมื่อต้องการ extend Vite functionality
- เมื่อ publish plugins สำหรับ public use

## Rules

| Priority | Impact | Reference | Name | Description | Prefix | Condition |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| 1 | `CRITICAL` | [project-structure.md](./rules/project-structure.md) | Project Structure | โครงสร้าง project ที่ถูกต้อง | `vite-plugin-` | เมื่อสร้าง plugin |
| 2 | `HIGH` | [package-json.md](./rules/package-json.md) | Package JSON | การกำหนดค่า package.json | `vite-plugin-` | เมื่อตั้งค่า package |

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

- [Vite Plugin Documentation](https://vitejs.dev/guide/using-plugins)
