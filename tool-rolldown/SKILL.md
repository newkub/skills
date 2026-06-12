# tool-rolldown

แนวทางการใช้งาน Rolldown - Fast JavaScript bundler ที่เขียนด้วย Rust

## Overview

Rolldown เป็น fast Rust-based bundler สำหรับ JavaScript/TypeScript ที่ใช้ Rollup-compatible API ให้ความเร็วสูงและรองรับ tree-shaking, code splitting, และ plugin system


## When to use



## Skills Related



## References


## File Structure

```
tool-rolldown/
├── SKILL.md
├── guide/
│   ├── key-concept.md
│   ├── how-it-works.md
│   ├── features.md
│   ├── installation.md
│   ├── configuration.md
│   ├── quick-start.md
│   └── best-practices.md
└── references/
    ├── website.md
    ├── cli.md
    ├── configuration.md
    └── api.md
```

## Content Summary

| Folder | File | Description |
|--------|------|-------------|
| **Guide** | key-concept.md | แนวคิดหลัก - Rust-based, Rollup compatible |
| **Guide** | how-it-works.md | สถาปัตยกรรม - Module resolution, Plugin system |
| **Guide** | features.md | ฟีเจอร์ทั้งหมด - Code splitting, Tree-shaking |
| **Guide** | installation.md | การติดตั้ง - npm, pnpm |
| **Guide** | configuration.md | การตั้งค่า - rolldown.config.js |
| **Guide** | quick-start.md | คู่มือเริ่มต้นใช้งาน |
| **Guide** | best-practices.md | แนวทางปฏิบัติที่ดี |
| **Reference** | website.md | Official links และ resources |
| **Reference** | cli.md | CLI commands - rolldown, rolldown --watch |
| **Reference** | configuration.md | Configuration options reference |
| **Reference** | api.md | Programmatic API reference |

## Quick Start

```bash
# Install
npm install -D rolldown

# Build
npx rolldown

# Watch mode
npx rolldown --watch

# Config
npx rolldown --config rolldown.config.js
```

## Key Features

| Feature | Description |
|---------|-------------|
| **Rust-based** | High performance |
| **Rollup Compatible** | Easy migration |
| **Code Splitting** | Automatic splitting |
| **Tree-shaking** | Remove unused code |
| **Plugin System** | Rollup plugins |

## Usage Order

1. **Start**: `guide/installation.md` → `guide/key-concept.md`
2. **Learn**: `guide/how-it-works.md` → `guide/features.md`
3. **Configure**: `guide/configuration.md`
4. **Reference**: `references/cli.md` → `references/api.md`
5. **Best Practices**: `guide/best-practices.md`