---
title: Rolldown
description: Fast JavaScript bundler ที่เขียนด้วย Rust ใช้ Rollup-compatible API
auto_execution_mode: 3
---

## Goal

ใช้งาน Rolldown สำหรับ bundle JavaScript/TypeScript ด้วยความเร็วสูง

## Scope

ใช้สำหรับ:
- Bundle JavaScript/TypeScript ด้วยความเร็วสูง
- Migration จาก Rollup ไปยัง Rust-based bundler
- Code splitting และ tree-shaking
- Plugin system ที่ compatible กับ Rollup

## โครงสร้าง Directory

```
rolldown/
├── SKILL.md
├── learn/
│   ├── guide/
│   │   └── getting-started.md
│   ├── key-concepts/
│   │   ├── three-stage-pipeline.md
│   │   ├── module-resolution.md
│   │   ├── tree-shaking.md
│   │   └── code-splitting.md
│   └── principles/
│       ├── best-practices.md
│       └── performance-tips.md
├── references/
│   ├── api.md
│   ├── cli.md
│   ├── configuration.md
│   └── website.md
├── workflows/
│   ├── setup-rolldown.md
│   ├── build-project.md
│   └── migrate-from-rollup.md
├── scripts/
└── templates/
```

## หมวดหมู่ไฟล์

### learn/guide

Guides สำหรับเริ่มต้นใช้งาน Rolldown

| ไฟล์ | คำอธิบาย |
|------|-----------|
| getting-started.md | เริ่มต้นใช้งาน Rolldown ตั้งแต่ installation ถึง basic configuration |

### learn/key-concepts

Concepts หลักและกลไกการทำงานของ Rolldown

| ไฟล์ | คำอธิบาย |
|------|-----------|
| three-stage-pipeline.md | กระบวนการ Scan, Link, Generate |
| module-resolution.md | วิธีการ resolve module paths |
| tree-shaking.md | การลบ code ที่ไม่ถูกใช้ |
| code-splitting.md | การแบ่ง code เป็น chunks |

### learn/principles

Best practices และ guidelines สำหรับการใช้งาน

| ไฟล์ | คำอธิบาย |
|------|-----------|
| best-practices.md | Best practices สำหรับ production |
| performance-tips.md | เทคนิค optimize performance |

### references

Documentation references สำหรับ API, CLI, และ configuration

| ไฟล์ | คำอธิบาย |
|------|-----------|
| api.md | Programmatic API reference |
| cli.md | CLI commands และ options |
| configuration.md | Configuration options reference |
| website.md | Official links และ resources |

### workflows

Workflows สำหรับ tasks ทั่วไป

| ไฟล์ | คำอธิบาย |
|------|-----------|
| setup-rolldown.md | Setup Rolldown สำหรับ project ใหม่ |
| build-project.md | Build project ด้วย Rolldown |
| migrate-from-rollup.md | Migration guide จาก Rollup |

## Execute

### Quick Start

ติดตั้งและเริ่มต้นใช้งาน:

```bash
bun add -D rolldown
```

สร้าง config file:

```typescript
import { defineConfig } from 'rolldown'

export default defineConfig({
  input: 'src/index.ts',
  output: {
    dir: 'dist',
    format: 'esm',
  },
})
```

Build project:

```bash
bunx rolldown
```

### Learning Path

1. **Getting Started**: อ่าน [learn/guide/getting-started.md](learn/guide/getting-started.md)
2. **Key Concepts**: เรียนรู้ [learn/key-concepts/three-stage-pipeline.md](learn/key-concepts/three-stage-pipeline.md)
3. **Best Practices**: ดู [learn/principles/best-practices.md](learn/principles/best-practices.md)
4. **Workflows**: ใช้ [workflows/setup-rolldown.md](workflows/setup-rolldown.md)

## Rules

- ใช้ `bun add -D rolldown` สำหรับติดตั้ง
- ใช้ `bunx rolldown` สำหรับ build
- ใช้ `--watch` สำหรับ watch mode
- ใช้ `--config` สำหรับ config file
- ใช้ TypeScript สำหรับ config file (rolldown.config.ts)
- ใช้ `defineConfig` สำหรับ type safety

## Expected Outcome

- JavaScript/TypeScript ที่ bundled ด้วยความเร็วสูง
- Migration จาก Rollup ที่ smooth
- Code splitting ที่ efficient
- Tree-shaking ที่ effective
- Plugin system ที่ compatible
- Performance ที่ดีขึ้น 10-100x
