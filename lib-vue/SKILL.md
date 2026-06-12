---
name: lib-vue
description: แนวทางการพัฒนา Vue.js ตาม best practices สำหรับ progressive JavaScript framework ที่มี reactive data binding และ component system
---

## When to use

- เมื่อต้องการพัฒนา web applications ด้วย Vue.js
- เมื่อต้องการเรียนรู้ best practices สำหรับการพัฒนา Vue.js

## Skills Related

- `lib-pinia` - State management สำหรับ Vue
- `lib-vite` - Build tool สำหรับ Vue applications

## โครงสร้าง Directory

โครงสร้างโฟลเดอร์สำหรับ Library Skills

```
lib-vue/
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

| No | File | Description |
|----|------|-------------|
| 1 | [key-concept.md](guide/key-concept.md) | Core concepts ของ Vue และหลักการพื้นฐาน |
| 2 | [how-it-works.md](guide/how-it-works.md) | วิธีการทำงานของ Vue.js ระบบ reactivity และ rendering |
| 3 | [features.md](guide/features.md) | Features และ capabilities ของ Vue.js |
| 4 | [configuration.md](guide/configuration.md) | การตั้งค่า configuration และ options |
| 5 | [quick-start.md](guide/quick-start.md) | คู่มือเริ่มต้นใช้งานอย่างรวดเร็ว (รวม installation) |
| 6 | [best-practices.md](guide/best-practices.md) | Best practices สำหรับการพัฒนา Vue.js |
| 7 | [integration.md](guide/integration.md) | Integration กับ tools และ libraries อื่นๆ |
| 8 | [architecture.md](guide/architecture.md) | โครงสร้าง architecture ของ Vue.js |
| 9 | [structure.md](guide/structure.md) | โครงสร้าง file และ folder ของ Vue project |
| 10 | [performance.md](guide/performance.md) | Optimization และ performance tuning |
| 11 | [security.md](guide/security.md) | Security best practices สำหรับ Vue applications |
| 12 | [migration.md](guide/migration.md) | Migration จาก Vue 2 ไป Vue 3 |
| 13 | [ecosystem.md](guide/ecosystem.md) | Tools และ libraries ใน Vue ecosystem |
| 14 | [testing.md](guide/testing.md) | การทดสอบ Vue applications |
| 15 | [patterns.md](guide/patterns.md) | Design patterns ที่ใช้กับ Vue |
| 16 | [troubleshooting.md](guide/troubleshooting.md) | แก้ปัญหาที่พบบ่อย |

## key-concepts/

| No | File | Description |
|----|------|-------------|
| 1 | [reactivity.md](key-concepts/reactivity.md) | ระบบ reactivity ของ Vue |
| 2 | [components.md](key-concepts/components.md) | Vue Components และ lifecycle |
| 3 | [state.md](key-concepts/state.md) | State management ใน Vue |

## principles/

| No | File | Description |
|----|------|-------------|
| 1 | [single-responsibility.md](principles/single-responsibility.md) | Single Responsibility Principle ใน Vue |
| 2 | [dr.md](principles/dr.md) | Don't Repeat Yourself ใน Vue |

## references/

| No | File | Description |
|----|------|-------------|
| 1 | [website.md](references/website.md) | Official documentation links และ resources |
| 2 | [api.md](references/api.md) | Vue Composition API reference และ methods |
| 3 | [configuration.md](references/configuration.md) | Configuration options และ API reference |
