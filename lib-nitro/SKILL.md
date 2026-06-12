---
name: lib-nitro
description: คู่มือการใช้งาน Nitro - full-stack server framework สำหรับ JavaScript/TypeScript ที่รองรับทุก runtime และ deploy target
---

## When to use

- เมื่อต้องการ full-stack server framework
- เมื่อต้องการรองรับทุก runtime (Node.js, Bun, Deno, Edge)
- เมื่อต้องการ deploy ไปยังหลาย platform
- เมื่อต้องการ universal rendering

## Skills Related

- `/framework-nuxt` - Nuxt framework
- `/runtime-bun` - Bun runtime
- `/runtime-node` - Node.js runtime


## References


## โครงสร้าง Directory

```text
lib-nitro/
├── SKILL.md
├── 
│   ├── guide/
│   │   ├── key-concept.md
│   │   ├── how-it-works.md
│   │   ├── features.md
│   │   ├── installation.md
│   │   ├── configuration.md
│   │   ├── quick-start.md
│   │   ├── best-practices.md
│   │   ├── integration.md
│   │   ├── architecture.md
│   │   ├── structure.md
│   │   ├── performance.md
│   │   ├── security.md
│   │   ├── migration.md
│   │   ├── ecosystem.md
│   │   ├── testing.md
│   │   ├── patterns.md
│   │   └── troubleshooting.md
│   ├── key-concepts/
│   │   ├── server-routes.md
│   │   ├── middleware.md
│   │   ├── storage.md
│   │   └── deployment-presets.md
│   └── principles/
│       ├── platform-agnostic.md
│       └── serverless-first.md
├── references/
│   ├── website.md
│   ├── sitemap.md
│   ├── api.md
│   ├── cli.md
│   └── configuration.md
└── workflows/
    ├── setup-nitro.md
    ├── create-nitro-app.md
    └── deploy-nitro.md
```

## หมวดหมู่ไฟล์

### guide/

| No | File | Description |
|----|------|-------------|
| 1 | key-concept.md | Core concepts ของ Nitro |
| 2 | how-it-works.md | การทำงานภายใน Request lifecycle |
| 3 | features.md | Features ทั้งหมดของ Nitro |
| 4 | installation.md | การติดตั้งและ setup โปรเจกต์ |
| 5 | configuration.md | การตั้งค่า configuration |
| 6 | quick-start.md | คู่มือเริ่มต้นใช้งาน |
| 7 | best-practices.md | Best practices สำหรับ production |
| 8 | integration.md | การ integrate กับ frameworks อื่นๆ |
| 9 | architecture.md | Architecture และ design decisions |
| 10 | structure.md | โครงสร้างโปรเจกต์ Nitro |
| 11 | performance.md | เทคนิคการปรับปรุง performance |
| 12 | security.md | ความปลอดภัยและ security considerations |
| 13 | migration.md | วิธี migration จาก frameworks อื่นๆ |
| 14 | ecosystem.md | Ecosystem และ integrations |
| 15 | testing.md | การทดสอบ Nitro applications |
| 16 | patterns.md | Patterns ที่ใช้บ่อย |
| 17 | troubleshooting.md | การแก้ปัญหาที่พบบ่อย |

### references/

| No | File | Description |
|----|------|-------------|
| 1 | website.md | Official documentation links |
| 2 | sitemap.md | แผนผังเอกสารและทรัพยากรที่เกี่ยวข้อง |
| 3 | api.md | API functions และ utilities |
| 4 | cli.md | CLI commands |
| 5 | configuration.md | Configuration options reference |

### key-concepts/

| No | File | Description |
|----|------|-------------|
| 1 | server-routes.md | Server routes และ file-based routing |
| 2 | middleware.md | Middleware และ request processing |
| 3 | storage.md | Storage abstraction และ drivers |
| 4 | deployment-presets.md | Deployment presets สำหรับ platforms ต่างๆ |

### principles/

| No | File | Description |
|----|------|-------------|
| 1 | platform-agnostic.md | Platform-agnostic design principle |
| 2 | serverless-first.md | Serverless-first design principle |

### workflows/

| No | File | Description |
|----|------|-------------|
| 1 | setup-nitro.md | ตั้งค่า Nitro framework สำหรับโปรเจกต์ใหม่ |
| 2 | create-nitro-app.md | สร้าง Nitro application ใหม่ด้วย template |
| 3 | deploy-nitro.md | Deploy Nitro application ไปยังต่างๆ platform |