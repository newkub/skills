---
name: lib-zustand
description: แนวทางการพัฒนา Zustand ตาม best practices สำหรับ React state management ที่มาพร้อม hooks-based API, middleware system และ devtools integration
---

## When to use

- เมื่อต้องการ state management ที่เรียบง่ายสำหรับ React
- เมื่อต้องการ hooks-based API ที่ใช้งานง่าย
- เมื่อต้องการ middleware system ที่ flexible
- เมื่อต้องการ devtools integration
- เมื่อต้องการ TypeScript support

## Skills Related

- `lib-react` - React library
- `lang-typescript` - TypeScript programming language

## โครงสร้าง Directory

โครงสร้างโฟลเดอร์สำหรับ Library Skills

```
lib-zustand/
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

| File | Description | Level |
|------|-------------|-------|
| key-concept.md | Core concepts: store, actions, selectors | Basic |
| how-it-works.md | Internal workings: create, subscribe, middleware | Basic |
| features.md | All features: middlewares, persistence, devtools | Basic |
| installation.md | Installation for npm, yarn, pnpm, bun | Basic |
| configuration.md | Store configuration, TypeScript setup | Basic |
| quick-start.md | Step-by-step guide from install to first store | Basic |
| best-practices.md | Store organization, selectors, TypeScript | Intermediate |
| integration.md | Integration with React, devtools, persist | Intermediate |
| architecture.md | Core architecture: create, subscribe, middleware | Intermediate |

### references/

| File | Description | Language |
|------|-------------|----------|
| api.md | Store methods, middleware APIs, hooks | English |
| configuration.md | Middleware options, TypeScript config | English |
| website.md | Official links: docs, GitHub, npm, Discord | English |