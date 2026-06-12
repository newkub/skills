---
name: lib-solidjs
description: แนวทางการพัฒนา SolidJS ตาม best practices สำหรับ declarative JavaScript library ที่มี fine-grained reactivity, no virtual DOM และ compile-time optimization
---

## When to use

- เมื่อต้องการ reactive JavaScript library
- เมื่อต้องการ fine-grained reactivity
- เมื่อต้องการ no virtual DOM performance
- เมื่อต้องการ compile-time optimization

## Skills Related

- `/lang-typescript` - TypeScript programming language
- `/lib-vite` - Vite build tool


## References


## โครงสร้าง Directory

```text
lib-solidjs/
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
│   │   ├── signals.md
│   │   ├── reactivity.md
│   │   ├── components.md
│   │   └── effects.md
│   └── principles/
│       ├── fine-grained-reactivity.md
│       └── minimal-runtime.md
└── references/
    ├── website.md
    ├── sitemap.md
    ├── api.md
    ├── cli.md
    └── configuration.md
```

## หมวดหมู่ไฟล

### guide/

| No | File | Description |
|----|------|-------------|
| 1 | key-concept.md | Core concepts ของ SolidJS |
| 2 | how-it-works.md | การทำงานของ SolidJS reactivity |
| 3 | features.md | Features ทั้งหมดของ SolidJS |
| 4 | installation.md | การติดตั้งและ setup |
| 5 | configuration.md | การตั้งค่าและ config options |
| 6 | quick-start.md | คู่มือเริ่มต้นใช้งาน |
| 7 | best-practices.md | Best practices ในการใช้งาน |
| 8 | integration.md | การ integrate กับ tools และ frameworks อื่นๆ |
| 9 | architecture.md | Architecture ของ SolidJS |
| 10 | structure.md | โครงสร้างโปรเจกต์ SolidJS |
| 11 | performance.md | เทคนิคการปรับปรุง performance |
| 12 | security.md | ความปลอดภัยและ security considerations |
| 13 | migration.md | วิธี migration จาก frameworks อื่นๆ |
| 14 | ecosystem.md | Ecosystem และ integrations |
| 15 | testing.md | การทดสอบ SolidJS applications |
| 16 | patterns.md | Patterns ที่ใช้บ่อย |
| 17 | troubleshooting.md | การแก้ปัญหาที่พบบ่อย |

### references/

| No | File | Description |
|----|------|-------------|
| 1 | website.md | Official documentation links |
| 2 | sitemap.md | แผนผังเอกสารและทรัพยากรที่เกี่ยวข้อง |
| 3 | api.md | SolidJS API reference |
| 4 | cli.md | Solid CLI commands และ usage |
| 5 | configuration.md | Configuration options |

### key-concepts/

| No | File | Description |
|----|------|-------------|
| 1 | signals.md | Signals และ reactive state management |
| 2 | reactivity.md | Reactivity model และ automatic tracking |
| 3 | components.md | Components และ JSX syntax |
| 4 | effects.md | Effects และ side effects |

### principles/

| No | File | Description |
|----|------|-------------|
| 1 | fine-grained-reactivity.md | Fine-grained reactivity principle |
| 2 | minimal-runtime.md | Minimal runtime principle |