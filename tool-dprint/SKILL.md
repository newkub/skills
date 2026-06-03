# tool-dprint

## Overview

dprint เป็น pluggable and configurable code formatting platform ที่รวดเร็วมาก ใช้ Rust และ WebAssembly รองรับหลายภาษา (TypeScript, JavaScript, JSON, Markdown, TOML, Rust)

## File Structure

| Folder | Files | Description |
|--------|-------|-------------|
| guide/ | 8 files | Guides และ tutorials |
| references/ | 3 files | CLI, configuration, API references |

## Guide Files

| File | Description |
|------|-------------|
| [installation.md](guide/installation.md) | วิธีติดตั้ง dprint |
| [quick-start.md](guide/quick-start.md) | เริ่มต้นใช้งาน |
| [key-concept.md](guide/key-concept.md) | แนวคิดหลัก |
| [how-it-works.md](guide/how-it-works.md) | หลักการทำงาน + diagram |
| [features.md](guide/features.md) | Features ทั้งหมด |
| [configuration.md](guide/configuration.md) | การตั้งค่า |
| [best-practices.md](guide/best-practices.md) | แนวทางปฏิบัติที่ดี |
| [integration.md](guide/integration.md) | การรวมกับ tools อื่น |
| [architecture.md](guide/architecture.md) | สถาปัตยกรรมภายใน |

## Reference Files

| File | Description |
|------|-------------|
| [cli.md](references/cli.md) | CLI commands |
| [configuration.md](references/configuration.md) | Configuration options |
| [api.md](references/api.md) | Programmatic API |
| [website.md](references/website.md) | Official links |

## Quick Start

```bash
# Install
npm install -D dprint

# Initialize
dprint init

# Format all files
dprint fmt

# Check formatting
dprint check
```

## Supported Languages

| Language | Extensions |
|----------|------------|
| TypeScript | .ts, .tsx |
| JavaScript | .js, .jsx, .mjs |
| JSON | .json, .jsonc |
| Markdown | .md |
| Rust | .rs |
| TOML | .toml |
| CSS | .css, .scss |
| Go | .go |
| Python | .py |

## Version

- Current: v0.38+
- GitHub: https://github.com/dprint/dprint
- Website: https://dprint.dev