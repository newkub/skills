---
title: Qoder
description: Agentic AI Coding Platform สำหรับ real software development ด้วย enhanced context engineering และ intelligent agents
auto_execution_mode: 3
---

## Goal

ใช้งาน Qoder สำหรับ AI-powered coding platform

## Scope

ใช้สำหรับ:
- AI-powered coding platform สำหรับ real software development
- Enhanced context engineering และ intelligent agents
- Code generation, Q&A, และ editing
- Editor extensions และ CLI support
- Project-wide context understanding

## Execute

### 1. Install Qoder

ติดตั้ง Qoder ตาม guide/installation.md

### 2. Configure Qoder

ตั้งค่า Qoder ตาม guide/configuration.md

### 3. Use Qoder

ใช้ Qoder สำหรับ code generation, Q&A, และ editing

## Rules

- ติดตั้ง Qoder ตาม guide/installation.md
- ตั้งค่า Qoder ตาม guide/configuration.md
- ใช้ Editor Workspace สำหรับ in-flow collaboration
- ใช้ Quest Workspace สำหรับ autonomous delegation

## Expected Outcome

- AI-powered coding platform ที่ efficient
- Enhanced context engineering ที่ accurate
- Intelligent agents ที่ autonomous
- Code generation ที่ fast
- Project-wide context understanding ที่ comprehensive

## Skills Related

- `/tool-windsurf` - Windsurf AI assistant
- `/vibe-coding` - Vibe coding practices

## โครงสร้าง Directory

```
tool-qoder/
├── SKILL.md
├── guide/              (Guides และ best practices)
├── key-concepts/       (แนวคิดหลัก)
├── principles/         (หลักการ)
├── references/         (CLI, configuration, API reference)
├── workflows/          (Workflows สำหรับการใช้งาน)
├── templates/          (Templates สำหรับ configuration)
└── scripts/            (Scripts สำหรับ automation)
```

## หมวดหมู่ไฟล์

| Folder | Files | Description |
|--------|-------|-------------|
| [guide/](guide/) | 0 files | Guides และ best practices สำหรับการใช้งาน |
| [key-concepts/](key-concepts/) | 0 files | แนวคิดหลักของ Qoder |
| [principles/](principles/) | 0 files | หลักการในการใช้งาน Qoder |
| [references/](references/) | 4 files | CLI, configuration, API reference |
| [workflows/](workflows/) | 0 files | Workflows สำหรับการใช้งาน |
| [templates/](templates/) | 0 files | Templates สำหรับ configuration |
| [scripts/](scripts/) | 0 files | Scripts สำหรับ automation |

## Guide Files

| File | Description |
|------|-------------|
| [guide/key-concept.md](guide/key-concept.md) | แนวคิดหลัก - Agent, Context, Quest, Workspace |
| [guide/how-it-works.md](guide/how-it-works.md) | การทำงาน - Context Engineering, Tool Integration |
| [guide/features.md](guide/features.md) | ฟีเจอร์ทั้งหมด - Code Generation, Q&A, Editing |
| [guide/installation.md](guide/installation.md) | การติดตั้ง - Editor Plugin, CLI |
| [guide/configuration.md](guide/configuration.md) | การตั้งค่า - MCP, Rules, Preferences |
| [guide/quick-start.md](guide/quick-start.md) | คู่มือเริ่มต้นใช้งาน |
| [guide/best-practices.md](guide/best-practices.md) | แนวทางปฏิบัติที่ดี |

## Reference Files

| File | Description |
|------|-------------|
| [references/website.md](references/website.md) | Official links และ resources |
| [references/api.md](references/api.md) | ACP & MCP API reference |
| [references/cli.md](references/cli.md) | CLI commands reference |
| [references/configuration.md](references/configuration.md) | Configuration options reference |

## Quick Start

```bash
# Install via Editor marketplace
# Or use CLI
npx qoder@latest

# Start coding with AI assistance
# Open Editor workspace for inline collaboration
# Or use Quest workspace for autonomous delegation
```

## Key Features

| Feature | Description |
|---------|-------------|
| **Editor Workspace** | NEXT, Inline Chat, Chat panel สำหรับ in-flow collaboration |
| **Quest Workspace** | หน้าต่างสำหรับ autonomous delegation พร้อม task boards |
| **Code Generation** | Generate ทั้ง function ไม่ใช่แค่บรรทัดเดียว |
| **Context Aware** | เข้าใจ project-wide context, dependencies, patterns |
| **MCP Integration** | เชื่อมต่อ external tools ผ่าน Model Context Protocol |
| **Cloud Agents** | Autonomous agents สำหรับ complex tasks |
| **Memory Stores** | จัดเก็บ business knowledge อัตโนมัติ |

## Usage Order

1. **Start**: `guide/installation.md` → `guide/key-concept.md`
2. **Learn**: `guide/how-it-works.md` → `guide/features.md`
3. **Configure**: `guide/configuration.md`
4. **Reference**: `references/cli.md` → `references/configuration.md`
5. **Best Practices**: `guide/best-practices.md`
