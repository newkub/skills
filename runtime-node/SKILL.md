# runtime-node

## Overview

Node.js เป็น JavaScript runtime ที่ใช้ Chrome V8 engine สำหรับรัน JavaScript นอก browser รองรับ npm package manager, ระบบ module ที่หลากหลาย และมี ecosystem ใหญ่ที่สุด

## โครงสร้าง Directory

```
runtime-node/
├── SKILL.md
├── guide/
│   ├── key-concept.md
│   ├── how-it-works.md
│   ├── features.md
│   ├── installation.md
│   ├── configuration.md
│   ├── quick-start.md
│   ├── best-practices.md
│   ├── integration.md
│   └── architecture.md
├── key-concepts/
├── principles/
├── references/
│   ├── api.md
│   ├── website.md
│   ├── cli.md
│   └── configuration.md
└── workflows/
```

## หมวดหมู่ไฟล์

### guide/

| ไฟล์ | คำอธิบาย |
|------|---------|
| key-concept.md | พื้นฐานและหลักการสำคัญของ Node.js |
| how-it-works.md | อธิบายการทำงานของ Node.js พร้อม diagram |
| features.md | คุณสมบัติหลักของ Node.js |
| installation.md | วิธีการติดตั้ง Node.js |
| configuration.md | การตั้งค่าและ configuration |
| quick-start.md | เริ่มต้นใช้งานอย่างรวดเร็ว |
| best-practices.md | แนวทางปฏิบัติที่ดี |
| integration.md | การเชื่อมต่อกับ tools และ frameworks |
| architecture.md | สถาปัตยกรรมของ Node.js |

### references/

| ไฟล์ | คำอธิบาย |
|------|---------|
| api.md | API reference ของ Node.js globals และ built-in modules |
| website.md | ลิงก์ไปยังเว็บไซต์และเอกสารอย่างเป็นทางการ |
| cli.md | คำสั่ง CLI ของ Node.js |
| configuration.md | ตัวเลือก configuration ต่างๆ |

## When to Use

- Web servers และ APIs
- CLI tools
- Build tools และ automation
- Microservices
- Real-time applications
- Desktop applications (Electron)

## Core Features

- **Chrome V8 Engine**: JavaScript execution engine ที่เร็ว
- **npm Ecosystem**: Package manager ที่ใหญ่ที่สุด
- **Event Loop**: Asynchronous non-blocking I/O
- **Module System**: CommonJS และ ES Modules
- **Cross-platform**: รันได้ทั้ง Windows, Linux, macOS
- **Streams**: รองรับ streaming data
