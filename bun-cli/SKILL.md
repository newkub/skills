---
name: bun-cli
description: Best practices for CLI development with Bun
goal: พัฒนา CLI tools ตาม best practices
outcome: CLI tools มีคุณภาพและใช้งานง่าย
---

# Bun CLI Development

## When to Apply

ใช้ Skill นี้เมื่อพัฒนา CLI tools ด้วย Bun

- เมื่อสร้าง CLI tools ใหม่ด้วย Bun
- เมื่อต้องการ improve CLI tools ที่มีอยู่
- เมื่อต้องการ optimize CLI performance

## Rules

| Priority | Impact | Reference | Name | Description | Prefix | Condition |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| 1 | `CRITICAL` | [package-json](./rules/package-json.md) | Package JSON | การกำหนดค่า package.json สำหรับ CLI | `cli-` | เมื่อสร้าง CLI tools |
| 2 | `HIGH` | [project-structure](./rules/project-structure.md) | Project Structure | โครงสร้างโปรเจกต์ CLI ที่ถูกต้อง | `cli-` | เมื่อสร้าง CLI tools |

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

- [Bun CLI Documentation](https://bun.sh/docs/cli)
