---
name: lib-storybook
description: แนวทางการพัฒนา Storybook ตาม best practices สำหรับ component explorer ที่ช่วยให้สามารถ develop, test และ document UI components ได้อย่างมีประสิทธิภาพ
---

## When to use

- เมื่อต้องการ component explorer สำหรับ UI components
- เมื่อต้องการ develop, test และ document UI components
- เมื่อต้องการ isolated development environment

## Skills Related

- `lib-react` - React library
- `lib-vue` - Vue library
- `lib-solidjs` - SolidJS library
- `lib-svelte` - Svelte library

## โครงสร้าง Directory

โครงสร้างโฟลเดอร์สำหรับ Library Skills

```
lib-storybook/
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