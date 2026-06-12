---
name: lib-bunup
description: แนวทางการใช้งาน Bunup สำหรับ bundle TypeScript libraries ด้วย Bun's native bundler - เร็ว ง่าย และ auto-detect entry points
---

## When to use

- เมื่อต้องการ bundle TypeScript libraries
- เมื่อต้องการ Bun's native bundler
- เมื่อต้องการ auto-detect entry points
- เมื่อต้องการ bundle ที่เร็ว

## Skills Related

- `runtime-bun` - Bun runtime
- `lang-typescript` - TypeScript programming language

## โครงสร้าง Directory

โครงสร้างโฟลเดอร์สำหรับ Library Skills

```
lib-bunup/
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
| Getting started | [Homepage](https://bunup.dev) | Quick start, overview |
| Documentation | [Docs](https://bunup.dev/docs) | Complete documentation |
| GitHub | [Repository](https://github.com/unjs/bunup) | Source code, issues |
| Config file | [Config file](https://bunup.dev/docs/guide/config-file.md) | `bunup.config.ts` setup |
| Options | [Options](https://bunup.dev/docs/guide/options.md) | All configuration options |
| CLI options | [CLI options](https://bunup.dev/docs/guide/cli-options.md) | Command-line usage |
| TypeScript declarations | [TypeScript declarations](https://bunup.dev/docs/guide/typescript-declarations.md) | `.d.ts` generation |
| Plugins | [Plugins](https://bunup.dev/docs/guide/plugins.md) | Plugin system |
| Workspaces | [Workspaces](https://bunup.dev/docs/guide/workspaces.md) | Monorepo support |

## หมวดหมู่ไฟล์

### guide/

| No | File | Description |
|----|------|-------------|
| 1 | installation.md | Installation and setup of Bunup |
| 2 | quick-start.md | Quick start guide for first bundle |
| 3 | configuration.md | Configuration options and setup |
| 4 | key-concept.md | Core concepts overview |
| 5 | how-it-works.md | How Bunup works internally |
| 6 | features.md | Available features and capabilities |
| 7 | architecture.md | System architecture and components |
| 8 | best-practices.md | Development best practices |
| 9 | integration.md | Integration with other tools |
| 10 | migration.md | Migration guides from other bundlers |
| 11 | patterns.md | Common patterns and recipes |
| 12 | performance.md | Performance optimization |
| 13 | security.md | Security considerations |
| 14 | structure.md | Project structure and organization |
| 15 | testing.md | Testing strategies |
| 16 | troubleshooting.md | Common issues and solutions |
| 17 | ecosystem.md | Related tools and services |

### key-concepts/

| No | File | Description |
|----|------|-------------|
| 1 | rolldown.md | Rolldown bundler foundation |
| 2 | entry-point-detection.md | Automatic entry point detection |
| 3 | bundle-formats.md | Supported bundle formats |
| 4 | type-declarations.md | TypeScript declaration generation |

### principles/

| No | File | Description |
|----|------|-------------|
| 1 | zero-config.md | Zero-configuration principle |
| 2 | bun-native.md | Bun runtime integration |

### references/

| No | File | Description |
|----|------|-------------|
| 1 | website.md | Official documentation links |
| 2 | sitemap.md | Documentation sitemap |
| 3 | api.md | API reference |
| 4 | configuration.md | Configuration reference |

### workflows/

| No | File | Description |
|----|------|-------------|
| 1 | bundle-library.md | Bundle TypeScript library workflow |
