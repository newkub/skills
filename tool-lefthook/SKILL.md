# tool-lefthook

## Overview

แนวทางการใช้งาน Lefthook สำหรับจัดการ Git hooks อย่างมีประสิทธิภาพ

## What is Lefthook?

Lefthook เป็น Git hooks manager ที่รวดเร็วและทรงพลัง เขียนด้วย Go สามารถรัน commands แบบ parallel และรองรับหลายภาษา (Node.js, Ruby, Python, Go, etc.)

## File Structure

| Folder | Description |
|--------|-------------|
| guide/ | Guides และ tutorials สำหรับการใช้งาน |
| references/ | References สำหรับ CLI, configuration และ API |

## Quick Start

```bash
# Install lefthook
npm install lefthook

# Initialize in project
npx lefthook install

# Run hooks manually
npx lefthook run pre-commit
```

## Core Concepts

| Concept | Description |
|---------|-------------|
| **Hooks** | Scripts ที่รันเมื่อ Git events เกิดขึ้น |
| **lefthook.yml** | Configuration file สำหรับกำหนด hooks |
| **Parallel Execution** | รันหลาย commands พร้อมกัน |
| **Remote Configs** | รองรับ extends จาก remote configs |

## Guide Files

| File | Description |
|------|-------------|
| [installation.md](guide/installation.md) | วิธีติดตั้ง Lefthook |
| [quick-start.md](guide/quick-start.md) | เริ่มต้นใช้งาน Lefthook อย่างรวดเร็ว |
| [key-concept.md](guide/key-concept.md) | แนวคิดหลักของ Lefthook |
| [how-it-works.md](guide/how-it-works.md) | หลักการทำงานและ architecture |
| [features.md](guide/features.md) | Features ทั้งหมดของ Lefthook |
| [configuration.md](guide/configuration.md) | การตั้งค่า Lefthook |
| [best-practices.md](guide/best-practices.md) | แนวทางปฏิบัติที่ดี |
| [integration.md](guide/integration.md) | การรวมกับ tools อื่นๆ |
| [architecture.md](guide/architecture.md) | Architecture ของ Lefthook |

## Reference Files

| Folder | Files |
|--------|-------|
| references/ | [cli.md](references/cli.md) - Lefthook CLI commands |
| references/ | [configuration.md](references/configuration.md) - Configuration options |
| references/ | [api.md](references/api.md) - Programmatic API |
| references/ | [website.md](references/website.md) - Official website และ resources |

## Version

- Current: v1.x (latest stable)
- Website: https://lefthook.dev
- GitHub: https://github.com/evilmartians/lefthook