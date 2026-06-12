---
name: lib-mastra
description: Comprehensive Mastra framework guide for building agents, workflows, tools, memory, workspaces, and storage with current APIs
---

# lib-mastra

## When to use

- เมื่อต้องการสร้าง AI agents ด้วย TypeScript
- เมื่อต้องการใช้งาน Mastra framework สำหรับ building agents, workflows, tools, memory, workspaces, และ storage
- เมื่อต้องการใช้งาน Mastra API สำหรับ documentation lookup, API verification, TypeScript setup, common errors, migrations, และ `mastra api` CLI tasks
- เมื่อต้องการเชื่อมต่อ external APIs หรือ services ผ่าน Mastra

## Skills Related

- `lib-agents-sdk` - Build AI agents on Cloudflare Workers (similar concept but different platform)

## โครงสร้าง Directory

โครงสร้างโฟลเดอร์สำหรับ Library Skills

```
lib-mastra/
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
| 1 | [installation.md](guide/installation.md) | วิธีติดตั้ง Mastra และ dependencies ที่จำเป็น |
| 2 | [key-concept.md](guide/key-concept.md) | Core concepts หลักของ Mastra (Agent, Workflow, Tool, Memory, Storage) |
| 3 | [how-it-works.md](guide/how-it-works.md) | กลไกภายในของ Mastra framework |
| 4 | [features.md](guide/features.md) | รายการ features ทั้งหมดของ Mastra |
| 5 | [configuration.md](guide/configuration.md) | การตั้งค่า configuration และ options ต่างๆ |
| 6 | [quick-start.md](guide/quick-start.md) | คู่มือเริ่มต้นใช้งานอย่างรวดเร็ว |
| 7 | [best-practices.md](guide/best-practices.md) | Best practices สำหรับการพัฒนาด้วย Mastra |
| 8 | [integration.md](guide/integration.md) | วิธี integration กับ tools และ services อื่นๆ |
| 9 | [architecture.md](guide/architecture.md) | สถาปัตยกรรมของ Mastra framework |
| 10 | [structure.md](guide/structure.md) | โครงสร้าง project และ folder layout |
| 11 | [performance.md](guide/performance.md) | ประสิทธิภาพและการ optimize |
| 12 | [security.md](guide/security.md) | ความปลอดภัยและ security considerations |
| 13 | [migration.md](guide/migration.md) | วิธี migration จาก version เก่า |
| 14 | [ecosystem.md](guide/ecosystem.md) | Ecosystem และ tools ที่เกี่ยวข้อง |
| 15 | [testing.md](guide/testing.md) | วิธี testing สำหรับ Mastra applications |
| 16 | [patterns.md](guide/patterns.md) | Design patterns สำหรับ Mastra |
| 17 | [troubleshooting.md](guide/troubleshooting.md) | การแก้ไขปัญหาที่พบบ่อย |

### key-concepts/

| No | File | Description |
|----|------|-------------|
| 1 | [agent.md](key-concepts/agent.md) | Agent concept และการใช้งาน |
| 2 | [workflow.md](key-concepts/workflow.md) | Workflow concept และ orchestration |
| 3 | [tool.md](key-concepts/tool.md) | Tool concept และ integration |
| 4 | [memory.md](key-concepts/memory.md) | Memory concept และ storage |
| 5 | [workspace.md](key-concepts/workspace.md) | Workspace concept และ organization |

### principles/

| No | File | Description |
|----|------|-------------|
| 1 | [agent-design.md](principles/agent-design.md) | หลักการออกแบบ agents |
| 2 | [workflow-orchestration.md](principles/workflow-orchestration.md) | หลักการ orchestration workflows |
| 3 | [tool-integration.md](principles/tool-integration.md) | หลักการ integration tools |

### references/

| No | File | Description |
|----|------|-------------|
| 1 | [website.md](references/website.md) | Official website และ documentation |
| 2 | [sitemap.md](references/sitemap.md) | Sitemap ของ documentation |
| 3 | [api.md](references/api.md) | API reference และ documentation |
| 4 | [cli.md](references/cli.md) | Mastra CLI commands และ usage |
| 5 | [configuration.md](references/configuration.md) | Configuration options และ reference |

### workflows/

| No | File | Description |
|----|------|-------------|
| 1 | [create-agent.md](workflows/create-agent.md) | สร้าง AI agent ใหม่ |
| 2 | [create-workflow.md](workflows/create-workflow.md) | สร้าง workflow ใหม่ |
| 3 | [integrate-tool.md](workflows/integrate-tool.md) | Integration tool เข้ากับ agent |