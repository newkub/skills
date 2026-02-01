---
name: bun-sdk
description: Best practices for SDK development with Bun
goal: พัฒนา SDKs ตาม best practices
outcome: SDKs มีคุณภาพและใช้งานง่าย
---

# Bun SDK Development

## When to Apply

ใช้ Skill นี้เมื่อพัฒนา SDKs ด้วย Bun

- เมื่อสร้าง SDKs ใหม่ด้วย Bun
- เมื่อต้องการ improve SDKs ที่มีอยู่
- เมื่อต้องการ publish SDKs สำหรับ public use

## Rules

| Priority | Impact | Reference | Name | Description | Prefix | Condition |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| 1 | `CRITICAL` | [package-json](./rules/package-json.md) | Package JSON | การกำหนดค่า package.json สำหรับ SDK | `sdk-` | เมื่อสร้าง SDKs |
| 2 | `HIGH` | [project-structure](./rules/project-structure.md) | Project Structure | โครงสร้างโปรเจกต์ SDK ที่ถูกต้อง | `sdk-` | เมื่อสร้าง SDKs |

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
- Best practices ที่ควรทำตาม
- เอกสารอ้างอิง

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

- [Bun SDK Documentation](https://bun.sh/docs)
