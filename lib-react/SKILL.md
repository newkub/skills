---
name: lib-react
description: แนวทางการพัฒนา React ตาม best practices สำหรับ JavaScript library สำหรับสร้าง UI ที่มี component-based architecture, virtual DOM และ extensive ecosystem
---

# lib-react

## When to use

- เมื่อต้องการสร้าง web applications ด้วย component-based architecture
- เมื่อต้องการใช้ virtual DOM สำหรับ performance ที่ดี
- เมื่อต้องการใช้ ecosystem ที่กว้างขวางและ active community
- เมื่อต้องการใช้ hooks สำหรับ state management และ side effects
- เมื่อต้องการใช้ TypeScript สำหรับ type safety

## Skills Related

- `lib-solidjs` - Alternative JavaScript library ด้วย fine-grained reactivity
- `lib-vue` - Progressive JavaScript framework สำหรับ building UI
- `lib-svelte` - Compiler-based framework สำหรับ building UI
- `framework-next` - React framework สำหรับ SSR/SSG
- `framework-nuxt` - Vue framework สำหรับ SSR/SSG
- `lib-tanstack` - Collection ของ libraries สำหรับ data fetching และ state management
- `lib-zustand` - State management library สำหรับ React

## โครงสร้าง Directory

โครงสร้างโฟลเดอร์สำหรับ Library Skills

```
lib-react/
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
| 1 | installation.md | การติดตั้งและ setup React project |
| 2 | quick-start.md | คู่มือเริ่มต้นใช้งาน React อย่างรวดเร็ว |
| 3 | key-concept.md | Core concepts ของ React |
| 4 | how-it-works.md | วิธีการทำงานของ React (Virtual DOM, Reconciliation) |
| 5 | features.md | Features และ capabilities ของ React |
| 6 | configuration.md | การตั้งค่า configuration ต่างๆ |
| 7 | best-practices.md | Best practices สำหรับการพัฒนา React |
| 8 | integration.md | Integration กับ tools และ libraries อื่นๆ |
| 9 | architecture.md | Architecture patterns สำหรับ React applications |
| 10 | structure.md | Project structure และ file organization |
| 11 | performance.md | Performance optimization techniques |
| 12 | security.md | Security best practices สำหรับ React applications |
| 13 | migration.md | Migration guide ระหว่าง React versions |
| 14 | ecosystem.md | React ecosystem และ libraries ที่น่าสนใจ |
| 15 | testing.md | Testing strategies และ tools สำหรับ React |
| 16 | patterns.md | Design patterns สำหรับ React components |
| 17 | troubleshooting.md | การแก้ไขปัญหาที่พบบ่อยใน React |

### references/

| No | File | Description |
|----|------|-------------|
| 1 | website.md | Official React website และ documentation |
| 2 | sitemap.md | Documentation sitemap และ navigation |
| 3 | api.md | React API reference และ hooks documentation |
| 4 | cli.md | CLI commands และ tools |
| 5 | configuration.md | Configuration options และ settings |

### workflows/

| No | File | Description |
|----|------|-------------|
| 1 | setup-react-project.md | สร้าง React project ใหม่ด้วย Vite และ TypeScript |
| 2 | use-react-hooks.md | ใช้ React hooks อย่างถูกต้องและมีประสิทธิภาพ |
| 3 | optimize-react-app.md | Optimize React application สำหรับ performance ที่ดีขึ้น |
| 4 | migrate-to-react-18.md | Migrate React project ไป React 18 |