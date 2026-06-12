---
name: lib-svelte
description: แนวทางการพัฒนา Svelte ตาม best practices สำหรับ compiler-based JavaScript framework ที่มี reactive declarations, stores และ no virtual DOM
---

# lib-svelte

## When to use

- เมื่อต้องการพัฒนา web applications ด้วย Svelte framework
- เมื่อต้องการใช้ compiler-based framework ที่ไม่มี virtual DOM
- เมื่อต้องการ reactive programming ด้วย declarations และ stores
- เมื่อต้องการเขียน components ที่มี performance สูงและ bundle size เล็ก
- เมื่อต้องการใช้ Svelte กับ TypeScript, Vite, หรือ build tools อื่นๆ

## Skills Related

- `framework-svelte-kit` - SvelteKit framework
- `lib-vite` - Vite build tool
- `lang-typescript` - TypeScript programming language
- `lang-javascript` - JavaScript programming language

## โครงสร้าง Directory

โครงสร้างโฟลเดอร์สำหรับ Library Skills

```
lib-svelte/
├── SKILL.md                      # ไฟล์ index หลัก
├── guide/                        # เนื้อหาแนะนำและ best practices
├── key-concepts/                 # แนวคิดสำคัญ (optional)
├── principles/                   # หลักการ (optional)
├── references/                   # เอกสารอ้างอิง
├── workflows/                    # Workflows สำหรับ automation
├── templates/                    # Templates สำหรับเริ่มต้น (optional)
├── scripts/                      # Scripts สำหรับ automation (optional)
└── .devin/                       # Rules และ configurations
    ├── goal.md                  # เป้าหมายของ skill
    ├── scope.md                 # Scope และ execute steps
    ├── execute.md               # Execute steps ทั้งหมด
    ├── expected.md              # Expected outcome
    ├── rules/
    │   ├── always-on/           # Structure files ที่ต้องมีเสมอ
    │   │   └── structure-lib.md
    │   ├── glob/                # Files ที่ใช้ glob patterns
    │   └── model_decision/      # Template files สำหรับ model decision
    └── workflows/               # Workflow files สำหรับ task automation
```

## หมวดหมู่ไฟล์

### guide/

| No | File | Description |
|----|------|-------------|
| 1 | installation.md | การติดตั้งและ setup |
| 2 | key-concept.md | Core concepts หลัก |
| 3 | how-it-works.md | วิธีการทำงานของ Svelte |
| 4 | features.md | Features ทั้งหมด |
| 5 | configuration.md | การตั้งค่า configuration |
| 6 | quick-start.md | คู่มือเริ่มต้นใช้งาน |
| 7 | best-practices.md | Best practices สำหรับการพัฒนา |
| 8 | integration.md | การเชื่อมต่อกับ tools อื่นๆ |
| 9 | architecture.md | สถาปัตยกรรมของ Svelte |
| 10 | structure.md | โครงสร้างโปรเจกต์ |
| 11 | performance.md | การปรับปรุง performance |
| 12 | security.md | Security best practices |
| 13 | migration.md | การ migrate จาก frameworks อื่น |
| 14 | ecosystem.md | Ecosystem และ tools |
| 15 | testing.md | การทดสอบ Svelte applications |
| 16 | patterns.md | Design patterns สำหรับ Svelte |
| 17 | troubleshooting.md | การแก้ไขปัญหาที่พบบ่อย |

### key-concepts/

| No | File | Description |
|----|------|-------------|
| 1 | reactivity.md | Reactivity system ของ Svelte |
| 2 | components.md | Component architecture |
| 3 | stores.md | State management ด้วย stores |
| 4 | lifecycle.md | Component lifecycle |
| 5 | compilation.md | Compilation process |

### principles/

| No | File | Description |
|----|------|-------------|
| 1 | reactive-programming.md | Reactive programming principles |
| 2 | component-design.md | Component design principles |
| 3 | performance-first.md | Performance optimization principles |
| 4 | type-safety.md | TypeScript integration principles |

### references/

| No | File | Description |
|----|------|-------------|
| 1 | website.md | Official website |
| 2 | sitemap.md | Sitemap ของ documentation |
| 3 | api.md | API reference |
| 4 | cli.md | CLI commands |
| 5 | configuration.md | Configuration options |

### workflows/

| No | File | Description |
|----|------|-------------|
| 1 | setup-svelte.md | ตั้งค่า Svelte project |
| 2 | create-component.md | สร้าง Svelte component |
| 3 | use-stores.md | ใช้งาน stores |
| 4 | migrate-to-svelte.md | Migrate จาก frameworks อื่น |