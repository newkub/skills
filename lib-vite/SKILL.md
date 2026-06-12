---
name: lib-vite
description: แนวทางการใช้งาน Vite ในฐานะ build library สำหรับ frontend development ด้วย Native ESM, HMR ที่รวดเร็ว, Plugin API และ Rollup-based production build
---

## When to use

- เมื่อต้องการ build tool ที่เร็วสำหรับ frontend development
- เมื่อต้องการ HMR (Hot Module Replacement) ที่รวดเร็ว
- เมื่อต้องการใช้ Native ESM ใน development
- เมื่อต้องการ Plugin API ที่ flexible
- เมื่อต้องการ build ด้วย Rollup สำหรับ production
- เมื่อต้องการ support frameworks อย่าง Vue, React, Svelte, SolidJS
- เมื่อต้องการ TypeScript และ JSX support
- เมื่อต้องการ CSS preprocessors และ asset optimization

## Skills Related

- `lib-vitest` - Testing framework ที่ built-in กับ Vite
- `lib-react` - React framework สำหรับใช้กับ Vite
- `lib-vue` - Vue framework สำหรับใช้กับ Vite
- `lib-svelte` - Svelte framework สำหรับใช้กับ Vite
- `lib-solidjs` - SolidJS framework สำหรับใช้กับ Vite
- `lang-typescript` - TypeScript สำหรับ type safety

## โครงสร้าง Directory

โครงสร้างโฟลเดอร์สำหรับ Library Skills

```
lib-vite/
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