# tool-oxlint

แนวทางการใช้งาน Oxlint - Blazing fast JavaScript linter ที่เขียนด้วย Rust

## Overview

Oxlint เป็น high-performance linter สำหรับ JavaScript/TypeScript ที่ใช้ Oxc compiler stack (Rust) ให้ความเร็ว 50-100x กว่า ESLint พร้อมรองรับ 800+ rules และ ESLint compatibility


## When to use



## Skills Related



## References


## File Structure

```text
tool-oxlint/
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
    ├── cli.md
    ├── configuration.md
    └── api.md
```

## Content Summary

| Folder | File | Description |
|--------|------|-------------|
| **Guide** | key-concept.md | แนวคิดหลัก - OXC-based, 800+ rules, ESLint compatible |
| **Guide** | how-it-works.md | สถาปัตยกรรม - Parser, Resolver, Type-check, Analyze, Report |
| **Guide** | features.md | ฟีเจอร์ทั้งหมด - High performance, Type-aware, Multi-file analysis |
| **Guide** | installation.md | การติดตั้ง - npm/pnpm/yarn/bun |
| **Guide** | configuration.md | การตั้งค่า - .oxlintrc.json, oxlint.config.ts |
| **Guide** | quick-start.md | เริ่มต้นใช้งานอย่างรวดเร็ว |
| **Guide** | best-practices.md | แนวทางปฏิบัติที่ดี |
| **Reference** | cli.md | CLI commands - oxlint --init, oxlint, oxlint --fix |
| **Reference** | configuration.md | Configuration options - categories, rules, severity |
| **Reference** | [api.md](references/api.md) | Programmatic API สำหรับ CI/CD integration |

## Quick Start

```bash
# Install
pnpm add -D oxlint

# Initialize config
oxlint --init

# Run lint
oxlint

# Auto-fix
oxlint --fix
```

## Key Features

| Feature | Description |
|---------|-------------|
| **High Performance** | 50-100x faster than ESLint |
| **800+ Rules** | ESLint compatible ruleset |
| **Type-aware** | Uses tsgo for TypeScript |
| **Multi-file** | Project-wide module graph |
| **AI-friendly** | Structured diagnostics |

## Usage Order

1. **Start**: `guide/quick-start.md` → `guide/installation.md`
2. **Learn**: `guide/key-concept.md` → `guide/how-it-works.md` → `guide/features.md`
3. **Configure**: `guide/configuration.md`
4. **Reference**: `references/cli.md` → `references/configuration.md`
5. **Best Practices**: `guide/best-practices.md`