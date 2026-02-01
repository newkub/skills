---
name: tauri
description: แนวทางการพัฒนา Desktop Applications ด้วย Tauri ตาม Best Practices
goal: พัฒนา desktop applications ที่ปลอดภัย มีประสิทธิภาพ และ cross-platform
outcome: สามารถสร้าง desktop applications ด้วย Tauri ที่ทำงานบน Windows, macOS, และ Linux
---

## When to Apply

ใช้ Skill นี้เมื่อพัฒนา desktop applications ด้วย Tauri

- เมื่อต้องการ cross-platform support (Windows, macOS, Linux)
- เมื่อต้องการความปลอดภัยสูงด้วย Rust backend
- เมื่อต้องการ bundle size เล็ก
- เมื่อใช้ web technologies (HTML, CSS, JavaScript) สำหรับ UI

## Rules

| Priority | Impact | Reference | Name | Description | Prefix | Condition |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| 1 | `CRITICAL` | [1-setup.md](./rules/1-setup.md) | Setup | ติดตั้ง dependencies และสร้าง project | `tauri-` | เมื่อสร้าง project |
| 2 | `HIGH` | [2-configuration.md](./rules/2-configuration.md) | Configuration | ตั้งค่า configuration ใน tauri.conf.json | `tauri-` | เมื่อตั้งค่า config |
| 3 | `HIGH` | [3-usage.md](./rules/3-usage.md) | Usage | เขียน Rust backend code และเรียกใช้ frontend | `tauri-` | เมื่อใช้ Tauri API |
| 4 | `CRITICAL` | [4-security.md](./rules/4-security.md) | Security | Best practices สำหรับความปลอดภัย | `tauri-` | เมื่อ ensure security |

## Knowledge

| Reference | Name | Description | Prefix |
| :--- | :--- | :--- | :--- |
| [core-concept.md](./knowledge/core-concept.md) | Core Concepts | Core Concepts ของ Tauri | `tauri-` |
| [all-features.md](./knowledge/all-features.md) | All Features | Features ทั้งหมดของ Tauri | `tauri-` |
| [best-practices.md](./knowledge/best-practices.md) | Best Practices | Best practices สำหรับ Tauri | `tauri-` |

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

- [Tauri Documentation](https://tauri.app/v1/guides/)
