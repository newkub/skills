# tool-knip

## Overview

แนวทางการใช้งาน Knip สำหรับหา unused files, dependencies และ exports

## What is Knip?

Knip เป็นเครื่องมือสำหรับหา unused files, dependencies และ exports ใน TypeScript/JavaScript projects

## File Structure

| Folder | Description |
|--------|-------------|
| guide/ | Guides และ tutorials สำหรับการใช้งาน |
| references/ | References และ links ภายนอก (CLI, configuration, API) |

## Quick Start

```bash
# Install
npm install -D knip

# Run
bunx knip

# Watch mode
bunx knip --watch
```

## Core Features

| Feature | Description |
|---------|-------------|
| **Unused Files** | หาไฟล์ที่ไม่มี import |
| **Unused Dependencies** | หา dependencies ที่ไม่ได้ใช้ |
| **Unused Exports** | หา exports ที่ไม่มีใครใช้ |
| **TypeScript** | รองรับ TypeScript เต็มรูปแบบ |

## Guide Files

| File | Description |
|------|-------------|
| [guide/installation.md](guide/installation.md) | วิธีติดตั้ง Knip |
| [guide/quick-start.md](guide/quick-start.md) | เริ่มต้นใช้งาน Knip |
| [guide/key-concept.md](guide/key-concept.md) | แนวคิดหลักและหลักการทำงาน |
| [guide/how-it-works.md](guide/how-it-works.md) | วิธีการทำงานของ Knip |
| [guide/features.md](guide/features.md) | Features ทั้งหมดของ Knip |
| [guide/configuration.md](guide/configuration.md) | การตั้งค่า Knip |
| [guide/best-practices.md](guide/best-practices.md) | แนวทางปฏิบัติที่ดี |

## Reference Files

| Folder | Files |
|--------|-------|
| [references/cli.md](references/cli.md) | CLI commands reference |
| [references/configuration.md](references/configuration.md) | Configuration options |
| [api.md](references/api.md) | Programmatic API |

## Version

- Current: v2.x
- GitHub: https://github.com/webpro-nl/knip
- npm: knip