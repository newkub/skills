# tool-bunup

## Overview

แนวทางการใช้งาน bunup สำหรับ build TypeScript/React libraries ด้วยความเร็วสูง สร้างบน Bun's native bundler

## What is bunup?

bunup เป็นเครื่องมือสำหรับ build และ publish TypeScript/React libraries อย่างรวดเร็ว รองรับ:
- Instant builds ด้วย Bun's native speed
- CSS support พร้อม CSS Modules
- TypeScript declarations (.d.ts)
- Declaration splitting
- Auto-exports
- Unused dependency detection
- Workspace-ready

## File Structure

| Folder | Description |
|--------|-------------|
| guide/ | Guides และ tutorials สำหรับการใช้งาน |
| references/ | References และ links ภายนอก (CLI, configuration, API, web) |
| reference/ | Official links |
| examples/ | ตัวอย่างการใช้งาน |
| templates/ | Templates สำหรับเริ่มต้น |
| rules/ | Rules และ conventions |
| patterns/ | Design patterns |
| usecase/ | Use cases |
| workflows/ | Workflows |
| integration/ | Integration กับ tools อื่นๆ |
| changelog/ | Changelog และ version history |

## Quick Start

```bash
# Create TypeScript library
bunx @bunup/cli@latest create

# Build library
bunx bunup

# Build with multiple formats
bunx bunup --format esm,cjs

# Generate exports
bunx bunup --exports
```

## Core Concepts

| Concept | Description |
|---------|-------------|
| Instant builds | Bun's native speed สำหรับ builds และ rebuilds |
| Declaration splitting | แยก .d.ts files สำหรับ cleaner type bundles |
| Auto-exports | สร้าง export maps อัตโนมัติ |
| Workspace | build หลาย packages จาก config เดียว |

## Guide Files

| File | Description |
|------|-------------|
| [installation.md](guide/installation.md) | วิธีติดตั้ง bunup |
| [quick-start.md](guide/quick-start.md) | เริ่มต้นใช้งาน bunup |
| [key-concept.md](guide/key-concept.md) | แนวคิดหลักและหลักการทำงาน |
| [all-features.md](guide/all-features.md) | Features ทั้งหมดของ bunup |
| [best-practices.md](guide/best-practices.md) | แนวทางปฏิบัติที่ดี |
| [configuration.md](guide/configuration.md) | การตั้งค่า bunup |
| [troubleshooting.md](guide/troubleshooting.md) | การแก้ปัญหา |

## Reference Files

| Folder | Files |
|--------|-------|
| cli/ | [index.md](references/cli.mdindex.md) - CLI commands reference |
| configuration/ | [index.md](references/configuration.mdindex.md) - Configuration options |
| api/ | [index.md](references/api.mdindex.md) - Programmatic API |
| web/ | [index.md](references/web.mdindex.md) - Web interface |

## Version

- Current: v0.16+
- Repository: [bunup/bunup](https://github.com/bunup/bunup)
- Website: [bunup.dev](https://bunup.dev)