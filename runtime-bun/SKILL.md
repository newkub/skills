# runtime-bun

## Overview

Bun เป็น JavaScript runtime, package manager, bundler, และ test runner ที่เร็วกว่า Node.js ถึง 10-20 เท่า รองรับ TypeScript โดยตรงโดยไม่ต้อง compile

## โครงสร้าง Directory

```
runtime-bun/
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
└── references/
    ├── api.md
    ├── website.md
    ├── cli.md
    └── configuration.md
```

## หมวดหมู่ไฟล์

### guide/

| ไฟล์ | คำอธิบาย |
|------|---------|
| key-concept.md | พื้นฐานและหลักการสำคัญของ Bun |
| how-it-works.md | อธิบายการทำงานของ Bun พร้อม diagram |
| features.md | คุณสมบัติหลักของ Bun |
| installation.md | วิธีการติดตั้ง Bun |
| configuration.md | การตั้งค่าและ configuration |
| quick-start.md | เริ่มต้นใช้งานอย่างรวดเร็ว |
| best-practices.md | แนวทางปฏิบัติที่ดี |
| integration.md | การเชื่อมต่อกับ tools และ frameworks |
| architecture.md | สถาปัตยกรรมของ Bun |

### references/

| ไฟล์ | คำอธิบาย |
|------|---------|
| api.md | API reference ของ Bun globals และ built-in modules |
| website.md | ลิงก์ไปยังเว็บไซต์และเอกสารอย่างเป็นทางการ |
| cli.md | คำสั่ง CLI ของ Bun |
| configuration.md | ตัวเลือก configuration ต่างๆ |

## When to Use

- ต้องการประสิทธิภาพสูงกว่า Node.js
- ต้องการ TypeScript zero-config
- ต้องการ package manager ที่เร็วกว่า npm
- ต้องการ bundler ในตัว
- ต้องการ test runner ในตัว
- ต้องการ migrate จาก Node.js

## Core Features

- **Fast Runtime**: เร็วกว่า Node.js 10-20 เท่า
- **TypeScript Native**: รัน TypeScript ได้โดยตรง
- **Package Manager**: ติดตั้งเร็วกว่า npm 20 เท่า
- **Bundler**: รวม bundler ในตัว
- **Test Runner**: รัน tests ได้เลย
- **Hot Reload**: รองรับ HMR ในตัว
