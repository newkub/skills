---
name: lib-zod
description: แนวทางการใช้งาน Zod สำหรับ TypeScript-first schema validation พร้อม runtime type checking และ static type inference
---

## When to use

- เมื่อต้องการ schema validation ใน TypeScript
- เมื่อต้องการ runtime type checking พร้อม static type inference
- เมื่อต้องการ validate API requests, forms, environment variables
- เมื่อต้องการ type-safe data parsing และ transformation

## Skills Related

- `lang-typescript` - TypeScript programming language
- `lib-effect-ts` - Effect สำหรับ functional programming

## โครงสร้าง Directory

โครงสร้างโฟลเดอร์สำหรับ Library Skills

```
lib-zod/
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

- **key-concept.md** - Core concepts: schemas, type inference, parsing
- **how-it-works.md** - Internal workings: parsing pipeline, error handling
- **features.md** - All features: primitives, objects, unions, transforms
- **installation.md** - Installation for npm, yarn, pnpm, bun, Deno
- **configuration.md** - Schema configuration, error maps, coercion
- **quick-start.md** - Step-by-step guide from install to first schema
- **best-practices.md** - Schema organization, error handling, testing
- **integration.md** - Integration with Express, React Hook Form, tRPC
- **architecture.md** - Core architecture: ZodType, parsing pipeline

### references/

- **website.md** - Official links: docs, GitHub, npm, Discord
- **api.md** - Schema methods, string/number validators, transforms
- **configuration.md** - tsconfig, error maps, coercion options