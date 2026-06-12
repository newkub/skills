---
name: lib-arktype
description: TypeScript runtime validation library ที่ใช้ type syntax โดยตรง มาพร้อมความเร็ว 20x กว่า Zod และ type inference ที่แม่นยำ สำหรับ validation, type checking, และ schema definition
---

## When to use

- เมื่อต้องการ TypeScript runtime validation library
- เมื่อต้องการ type syntax โดยตรง
- เมื่อต้องการความเร็ว 20x กว่า Zod
- เมื่อต้องการ type inference ที่แม่นยำ
- เมื่อต้องการ schema validation สำหรับ API, forms, หรือ database
- เมื่อต้องการ type-safe validation ที่ compile-time และ runtime

## Skills Related

- `lang-typescript` - TypeScript programming language
- `lib-zod` - Zod validation library (alternative)
- `lib-drizzle` - Drizzle ORM (integration)
- `lib-elysia` - Elysia framework (integration)

## โครงสร้าง Directory

โครงสร้างโฟลเดอร์สำหรับ Library Skills

```
lib-arktype/
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

| Topic | Docs URL | Use for |
|-------|----------|---------|
| Getting started | [Quick start](https://arktype.io/docs/quick-start) | First schema, installation |
| Type syntax | [Type syntax](https://arktype.io/docs/type-syntax) | Type definitions, syntax |
| Validation | [Validation](https://arktype.io/docs/validation) | Validation patterns |
| Type inference | [Type inference](https://arktype.io/docs/type-inference) | Inferred types |
| API reference | [API docs](https://arktype.io/api) | Complete API documentation |
| Best practices | [Best practices](https://arktype.io/docs/best-practices) | Development guidelines |
| Migration | [Migration guide](https://arktype.io/docs/migration) | Migrate from Zod/Yup/Joi |
| GitHub | [Repository](https://github.com/arktypeio/arktype) | Source code, issues, examples |

## หมวดหมู่ไฟล์

### guide/

| No | File | Description |
|----|------|-------------|
| 1 | installation.md | Installation and setup of ArkType |
| 2 | quick-start.md | Quick start guide for creating first schema |
| 3 | configuration.md | Configuration options and settings |
| 4 | key-concept.md | Core concepts overview |
| 5 | how-it-works.md | How ArkType works internally |
| 6 | features.md | Available features and capabilities |
| 7 | architecture.md | System architecture and components |
| 8 | best-practices.md | Development best practices |
| 9 | integration.md | Integration with frameworks and tools |
| 10 | migration.md | Migration guides from other libraries |
| 11 | patterns.md | Common patterns and use cases |
| 12 | performance.md | Performance optimization |
| 13 | security.md | Security considerations |
| 14 | structure.md | Project structure and organization |
| 15 | testing.md | Testing strategies |
| 16 | troubleshooting.md | Common issues and solutions |
| 17 | ecosystem.md | Related tools and resources |

### key-concepts/

| No | File | Description |
|----|------|-------------|
| - | - | (Optional - add as needed) |

### principles/

| No | File | Description |
|----|------|-------------|
| - | - | (Optional - add as needed) |

### references/

| No | File | Description |
|----|------|-------------|
| 1 | website.md | Official documentation links |
| 2 | sitemap.md | Documentation sitemap |
| 3 | api.md | Complete API documentation |
| 4 | configuration.md | Configuration reference |