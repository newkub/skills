---
name: runtime-bun
description: Bun JavaScript runtime - all-in-one toolkit สำหรับ JavaScript/TypeScript ที่เร็วกว่า Node.js 10-20 เท่า
---

## When to use

- ต้องการประสิทธิภาพสูงกว่า Node.js
- ต้องการ TypeScript zero-config
- ต้องการ package manager ที่เร็วกว่า npm
- ต้องการ bundler ในตัว
- ต้องการ test runner ในตัว
- ต้องการ migrate จาก Node.js

## Skills Related

- `/runtime-node` - Node.js JavaScript runtime ที่ใช้ Chrome V8 engine

## โครงสร้าง Directory

```
runtime-bun/
├── SKILL.md                      # ไฟล์ index หลัก
├── guide/                        # เนื้อหาแนะนำและ best practices
├── key-concepts/                 # แนวคิดสำคัญ
├── principles/                   # หลักการ
├── references/                   # เอกสารอ้างอิง
└── workflows/                    # Workflows สำหรับ automation
```

## หมวดหมู่ไฟล์

### guide/

| No | File | Description |
|----|------|-------------|
| 1 | [architecture.md](guide/architecture.md) | สถาปัตยกรรมของ Bun |
| 2 | [best-practices.md](guide/best-practices.md) | แนวทางปฏิบัติที่ดี |
| 3 | [configuration.md](guide/configuration.md) | การตั้งค่าและ configuration |
| 4 | [ecosystem.md](guide/ecosystem.md) | Ecosystem และ tools |
| 5 | [features.md](guide/features.md) | คุณสมบัติหลักของ Bun |
| 6 | [how-it-works.md](guide/how-it-works.md) | อธิบายการทำงานของ Bun พร้อม diagram |
| 7 | [installation.md](guide/installation.md) | วิธีการติดตั้ง Bun |
| 8 | [integration.md](guide/integration.md) | การเชื่อมต่อกับ tools และ frameworks |
| 9 | [migration.md](guide/migration.md) | การ migrate จาก Node.js ไป Bun |
| 10 | [patterns.md](guide/patterns.md) | Patterns และ best practices สำหรับ Bun |
| 11 | [performance.md](guide/performance.md) | ประสิทธิภาพและการ optimize |
| 12 | [quick-start.md](guide/quick-start.md) | เริ่มต้นใช้งานอย่างรวดเร็ว |
| 13 | [security.md](guide/security.md) | ความปลอดภัยและ best practices |
| 14 | [structure.md](guide/structure.md) | โครงสร้างโปรเจกต์และการจัดระเบียบไฟล์ |
| 15 | [testing.md](guide/testing.md) | การทดสอบด้วย Bun test runner |
| 16 | [troubleshooting.md](guide/troubleshooting.md) | การแก้ปัญหาที่พบบ่อย |

### key-concepts/

| No | File | Description |
|----|------|-------------|
| 1 | [key-concepts.md](key-concepts/key-concepts.md) | Core concepts และพื้นฐานของ Bun |

### principles/

| No | File | Description |
|----|------|-------------|
| 1 | [error-handling.md](principles/error-handling.md) | Error handling patterns |
| 2 | [naming-conventions.md](principles/naming-conventions.md) | Naming conventions |
| 3 | [performance.md](principles/performance.md) | Performance principles |

### references/

| No | File | Description |
|----|------|-------------|
| 1 | [api.md](references/api.md) | API reference ของ Bun globals และ built-in modules |
| 2 | [cli.md](references/cli.md) | คำสั่ง CLI ของ Bun |
| 3 | [sitemap.md](references/sitemap.md) | Sitemap ของเอกสาร Bun |
| 4 | [website.md](references/website.md) | ลิงก์ไปยังเว็บไซต์และเอกสารอย่างเป็นทางการ |

### workflows/

| No | File | Description |
|----|------|-------------|
| 1 | [setup-project.md](workflows/setup-project.md) | ตั้งค่าโปรเจกต์ด้วย Bun |
| 2 | [migrate-from-node.md](workflows/migrate-from-node.md) | migrate จาก Node.js ไป Bun |
