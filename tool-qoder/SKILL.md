# tool-qoder

แนวทางการใช้งาน Qoder - Agentic AI Coding Platform

## Overview

Qoder เป็น agentic coding platform ที่ออกแบบมาสำหรับ real software development ผสมผสาน enhanced context engineering กับ intelligent agents เพื่อให้เข้าใจ codebase อย่างครอบคลุม และทำ development tasks ได้อย่างเป็นระบบ มี 2 workspaces หลักคือ **Editor** และ **Quest** รองรับทั้ง Editor extensions และ CLI


## When to use



## Skills Related



## References


## File Structure

```
tool-qoder/
├── SKILL.md
├── guide/
│   ├── key-concept.md
│   ├── how-it-works.md
│   ├── features.md
│   ├── installation.md
│   ├── configuration.md
│   ├── quick-start.md
│   └── best-practices.md
├── references/
│   ├── website.md
│   ├── api.md
│   ├── cli.md
│   └── configuration.md
```

## Content Summary

| Folder | File | Description |
|--------|------|-------------|
| **Guide** | key-concept.md | แนวคิดหลัก - Agent, Context, Quest, Workspace |
| **Guide** | how-it-works.md | การทำงาน - Context Engineering, Tool Integration |
| **Guide** | features.md | ฟีเจอร์ทั้งหมด - Code Generation, Q&A, Editing |
| **Guide** | installation.md | การติดตั้ง - Editor Plugin, CLI |
| **Guide** | configuration.md | การตั้งค่า - MCP, Rules, Preferences |
| **Guide** | quick-start.md | คู่มือเริ่มต้นใช้งาน |
| **Guide** | best-practices.md | แนวทางปฏิบัติที่ดี |
| **Reference** | website.md | Official links และ resources |
| **Reference** | api.md | ACP & MCP API reference |
| **Reference** | cli.md | CLI commands reference |
| **Reference** | configuration.md | Configuration options reference |

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