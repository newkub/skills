---
name: dioxus
description: Fullstack cross-platform framework for Rust that lets you build applications for web, desktop, and mobile with a single codebase
goal: สร้าง applications ด้วย Dioxus ตาม best practices
outcome: Cross-platform applications มีโครงสร้างและคุณภาพตามมาตรฐาน
---

# Dioxus

## When to Apply

ใช้ Skill นี้เมื่อพัฒนา cross-platform applications ด้วย Dioxus

- เมื่อสร้าง components ใหม่
- เมื่อต้องการ optimize performance
- เมื่อพัฒนา cross-platform apps
- เมื่อต้องการ build สำหรับ production

## Rules

| Priority | Impact | Reference | Name | Description | Prefix | Condition |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| 1 | `CRITICAL` | - | Component Structure and Best Practices | กฎเกี่ยวกับโครงสร้างและ best practices สำหรับ Dioxus components | `dioxus-` | เมื่อสร้าง components ใหม่ |
| 2 | `HIGH` | - | Performance Optimization | กฎเกี่ยวกับการปรับปรุง performance ของ Dioxus applications | `dioxus-` | เมื่อต้องการ optimize performance |
| 3 | `MEDIUM` | - | Cross-Platform Development | กฎเกี่ยวกับการพัฒนา cross-platform applications ด้วย Dioxus | `dioxus-` | เมื่อพัฒนา cross-platform apps |

### 3. Cross-Platform Development

**3-dioxus-cross-platform-development.md** ประกอบด้วย:

- Platform-specific code ด้วย conditional compilation
- Asset management สำหรับ cross-platform
- Responsive design สำหรับ desktop/mobile
- Platform testing strategies
- CLI usage สำหรับ different platforms

**เมื่อใช้**: พัฒนา cross-platform apps, handle platform differences, deploy ไปยังหลาย platforms

## Scripts

| Priority | Impact | Reference | Name | Description | Prefix | Condition |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| 1 | `CRITICAL` | - | Initialize Dioxus Project | สร้าง Dioxus project ใหม่ด้วย dx CLI | `dioxus-` | เมื่อต้องการสร้าง project ใหม่ |
| 2 | `HIGH` | - | Start Development Server | เริ่ม development server สำหรับ Dioxus | `dioxus-` | เมื่อต้องการเริ่ม development |

## Knowledge

| Reference | Name | Description | Prefix |
| :--- | :--- | :--- | :--- |
| Dioxus Core Concepts | Dioxus Core Concepts | ความรู้พื้นฐานเกี่ยวกับ Dioxus framework | `dioxus-` |
| Dioxus Ecosystem | Dioxus Ecosystem | ความรู้เกี่ยวกับ ecosystem และ tools ของ Dioxus | `dioxus-` |

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

- [Dioxus Official Website](https://dioxuslabs.com/)
- [Dioxus Documentation](https://dioxuslabs.com/learn/0.7/)
- [Dioxus on GitHub](https://github.com/DioxusLabs/dioxus)
- [Dioxus on docs.rs](https://docs.rs/dioxus/)
- [Dioxus 0.7 Release Notes](https://github.com/DioxusLabs/dioxus/releases/tag/v0.7.0)
- [Dioxus Discord](https://discord.gg/XgGxMSkvUM)
