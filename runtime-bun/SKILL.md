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
├── SKILL.md
├── guide/
│   ├── installation.md
│   ├── key-concept.md
│   ├── how-it-works.md
│   ├── features.md
│   ├── configuration.md
│   ├── quick-start.md
│   ├── best-practices.md
│   ├── integration.md
│   ├── architecture.md
│   ├── structure.md
│   ├── performance.md
│   ├── security.md
│   ├── migration.md
│   ├── ecosystem.md
│   ├── testing.md
│   ├── patterns.md
│   └── troubleshooting.md
├── references/
│   ├── website.md
│   ├── sitemap.md
│   ├── api.md
│   └── cli.md
└── workflows/
```

## หมวดหมู่ไฟล์

### guide/

| No | File | Description |
|----|------|-------------|
| 1 | [installation.md](guide/installation.md) | วิธีการติดตั้ง Bun |
| 2 | [key-concept.md](guide/key-concept.md) | พื้นฐานและหลักการสำคัญของ Bun |
| 3 | [how-it-works.md](guide/how-it-works.md) | อธิบายการทำงานของ Bun พร้อม diagram |
| 4 | [features.md](guide/features.md) | คุณสมบัติหลักของ Bun |
| 5 | [configuration.md](guide/configuration.md) | การตั้งค่าและ configuration |
| 6 | [quick-start.md](guide/quick-start.md) | เริ่มต้นใช้งานอย่างรวดเร็ว |
| 7 | [best-practices.md](guide/best-practices.md) | แนวทางปฏิบัติที่ดี |
| 8 | [integration.md](guide/integration.md) | การเชื่อมต่อกับ tools และ frameworks |
| 9 | [architecture.md](guide/architecture.md) | สถาปัตยกรรมของ Bun |
| 10 | [structure.md](guide/structure.md) | โครงสร้างโปรเจกต์และการจัดระเบียบไฟล์ |
| 11 | [performance.md](guide/performance.md) | ประสิทธิภาพและการ optimize |
| 12 | [security.md](guide/security.md) | ความปลอดภัยและ best practices |
| 13 | [migration.md](guide/migration.md) | การ migrate จาก Node.js ไป Bun |
| 14 | [ecosystem.md](guide/ecosystem.md) | เครื่องมือและ libraries ใน ecosystem |
| 15 | [testing.md](guide/testing.md) | การทดสอบด้วย Bun test runner |
| 16 | [patterns.md](guide/patterns.md) | Patterns และ best practices สำหรับ Bun |
| 17 | [troubleshooting.md](guide/troubleshooting.md) | การแก้ปัญหาที่พบบ่อย |

### references/

| No | File | Description |
|----|------|-------------|
| 1 | [website.md](references/website.md) | ลิงก์ไปยังเว็บไซต์และเอกสารอย่างเป็นทางการ |
| 2 | [sitemap.md](references/sitemap.md) | Sitemap ของเอกสาร Bun |
| 3 | [api.md](references/api.md) | API reference ของ Bun globals และ built-in modules |
| 4 | [cli.md](references/cli.md) | คำสั่ง CLI ของ Bun |

### workflows/

| No | File | Description |
|----|------|-------------|
| 1 | [setup-project.md](workflows/setup-project.md) | ตั้งค่าโปรเจกต์ด้วย Bun |
| 2 | [migrate-from-node.md](workflows/migrate-from-node.md) | migrate จาก Node.js ไป Bun |
