---
name: debuging
description: Best practices for debugging and troubleshooting
goal: Debug และ troubleshooting ตาม best practices
outcome: การ debug มีประสิทธิภาพและแก้ปัญหาได้รวดเร็ว
---

# Debugging & Troubleshooting

## When to Apply

ใช้ Skill นี้เมื่อต้องการ debug และ troubleshooting

- เมื่อต้องการ debug บน browser
- เมื่อต้องการ debug file system
- เมื่อต้องการ debug ใน terminal
- เมื่อต้องการ debug process
- เมื่อต้องการ debug network
- เมื่อต้องการ debug memory
- เมื่อต้องการ debug performance
- เมื่อต้องการ logging และ tracing

## Rules

| Priority | Impact | Reference | Name | Description | Prefix | Condition |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| 1 | `HIGH` | [debug-browser](./rules/debug-browser.md) | Browser Debugging | Debug บน browser ด้วย Agent Browser | `debug-` | เมื่อต้องการ debug บน browser |
| 2 | `HIGH` | [debug-file-system](./rules/debug-file-system.md) | File System Debugging | Debug file system ด้วย exa, rg, fd, ast-grep | `debug-` | เมื่อต้องการ debug file system |
| 3 | `HIGH` | [debug-terminal](./rules/debug-terminal.md) | Terminal Debugging | Debug ใน terminal (Node.js, Bun debugger) | `debug-` | เมื่อต้องการ debug ใน terminal |
| 4 | `HIGH` | [debug-process](./rules/debug-process.md) | Process Debugging | Debug process และ monitoring | `debug-` | เมื่อต้องการ debug process |
| 5 | `HIGH` | [debug-network](./rules/debug-network.md) | Network Debugging | Debug network และ HTTP requests | `debug-` | เมื่อต้องการ debug network |
| 6 | `HIGH` | [debug-memory](./rules/debug-memory.md) | Memory Debugging | Debug memory leaks และ heap profiling | `debug-` | เมื่อต้องการ debug memory |
| 7 | `HIGH` | [debug-performance](./rules/debug-performance.md) | Performance Debugging | Debug performance และ CPU profiling | `debug-` | เมื่อต้องการ debug performance |
| 8 | `HIGH` | [debug-logging](./rules/debug-logging.md) | Logging & Tracing | Logging และ tracing | `debug-` | เมื่อต้องการ logging และ tracing |

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

ตัวอย่าง Link ไปยังไฟล์ Rule:
- [`./rules/debug-browser.md`](./rules/debug-browser.md)
- [`./rules/debug-file-system.md`](./rules/debug-file-system.md)
- [`./rules/debug-terminal.md`](./rules/debug-terminal.md)
- [`./rules/debug-process.md`](./rules/debug-process.md)
- [`./rules/debug-network.md`](./rules/debug-network.md)
- [`./rules/debug-memory.md`](./rules/debug-memory.md)
- [`./rules/debug-performance.md`](./rules/debug-performance.md)
- [`./rules/debug-logging.md`](./rules/debug-logging.md)

## References

- [Debugging Best Practices](https://example.com)
