---
name: lib-wxt
description: WXT - Next-gen Web Extension Framework สำหรับสร้าง browser extensions ที่รองรับหลาย browser และทั้ง Manifest V2/V3
---

## When to use

ใช้ skill นี้เมื่อ:
- สร้าง web extensions สำหรับ Chrome, Firefox, Edge, Safari
- ต้องการ cross-browser support จาก codebase เดียว
- ต้องการ TypeScript support และ type safety
- ต้องการ fast HMR สำหรับ development
- ต้องการ auto-imports แบบ Nuxt
- ต้องการ automated publishing ไปยัง extension stores
- ต้องการ Manifest V2 และ V3 support
- ต้องการ module system สำหรับ reusable code

## Skills Related

- `lib-vite` - Vite build tool ที่ WXT ใช้ภายใน
- `lib-vue` - Vue.js framework integration
- `lib-react` - React framework integration
- `lib-svelte` - Svelte framework integration
- `lib-solidjs` - SolidJS framework integration
- `create-browser-extensions` - แนวทางการสร้าง browser extensions ทั่วไป

## โครงสร้าง Directory

โครงสร้างโฟลเดอร์สำหรับ Library Skills

```
lib-wxt/
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
| 1 | installation.md | วิธีติดตั้งและตั้งค่า WXT ในโปรเจกต์ |
| 2 | key-concept.md | แนวคิดพื้นฐานของ WXT และ web extensions |
| 3 | how-it-works.md | วิธีการทำงานของ WXT และ build process |
| 4 | features.md | รายการ features ทั้งหมดของ WXT |
| 5 | configuration.md | การตั้งค่า configuration และ options |
| 6 | quick-start.md | คู่มือเริ่มต้นใช้งานอย่างรวดเร็ว |
| 7 | best-practices.md | แนวทางปฏิบัติที่ดีสำหรับการพัฒนา |
| 8 | integration.md | การรวมกับ frameworks และ tools อื่นๆ |
| 9 | architecture.md | สถาปัตยกรรมของ WXT และ project structure |

### references/

| No | File | Description |
|----|------|-------------|
| 1 | website.md | เว็บไซต์และเอกสารอย่างเป็นทางการ |
| 2 | sitemap.md | แผนผังเอกสารและ resources |
| 3 | api.md | WXT programmatic API และ functions |
| 4 | cli.md | WXT CLI commands และ options |
| 5 | configuration.md | WXT configuration options และ types |

### workflows/

| No | File | Description |
|----|------|-------------|
| 1 | setup-wxt.md | ตั้งค่า WXT ในโปรเจกต์ใหม่ |
| 2 | create-extension.md | สร้าง web extension ด้วย WXT |
| 3 | add-framework.md | เพิ่ม framework integration (Vue, React, Svelte, Solid) |
| 4 | build-extension.md | Build และ package extension สำหรับ production |
| 5 | publish-extension.md | Publish extension ไปยัง stores |