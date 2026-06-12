---
title: Rolldown
description: Fast JavaScript bundler ที่เขียนด้วย Rust ใช้ Rollup-compatible API
auto_execution_mode: 3
---

## When to use

ใช้ skill นี้เมื่อต้องการ:
- Bundle JavaScript/TypeScript ด้วยความเร็วสูง
- Migration จาก Rollup ไปยัง Rust-based bundler
- Code splitting และ tree-shaking
- Plugin system ที่ compatible กับ Rollup

## Skills Related

- `/lib-vite` - Vite build tool
- `/follow-vite` - Vite best practices

## References

### guide/

| No | File | Description |
|----|------|-------------|
| 1 | key-concept.md | แนวคิดหลัก - Rust-based, Rollup compatible |
| 2 | how-it-works.md | สถาปัตยกรรม - Module resolution, Plugin system |
| 3 | features.md | ฟีเจอร์ทั้งหมด - Code splitting, Tree-shaking |
| 4 | installation.md | การติดตั้ง - npm, pnpm |
| 5 | configuration.md | การตั้งค่า - rolldown.config.js |
| 6 | quick-start.md | คู่มือเริ่มต้นใช้งาน |
| 7 | best-practices.md | แนวทางปฏิบัติที่ดี |

### references/

| No | File | Description |
|----|------|-------------|
| 1 | website.md | Official links และ resources |
| 2 | cli.md | CLI commands - rolldown, rolldown --watch |
| 3 | configuration.md | Configuration options reference |
| 4 | api.md | Programmatic API reference |

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