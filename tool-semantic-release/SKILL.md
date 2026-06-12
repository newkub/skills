---
title: Semantic Release
description: Fully automated version management และ package publishing tool ที่ใช้ conventional commits
auto_execution_mode: 3
---

## Goal

ใช้งาน Semantic Release สำหรับ automated version management และ package publishing

## Scope

ใช้สำหรับ:
- Automated version management
- Semantic versioning อัตโนมัติ
- Automated changelog generation
- Package publishing ไปยัง npm, GitHub, GitLab

## Execute

### 1. Install Semantic Release

ติดตั้ง Semantic Release:
```bash
bun add -D semantic-release
```

### 2. Run Semantic Release

รัน semantic-release:
```bash
bunx semantic-release
```

### 3. Dry Run

Dry run:
```bash
bunx semantic-release --dry-run
```

### 4. Debug Mode

Debug mode:
```bash
DEBUG=semantic-release:* bunx semantic-release
```

## Rules

- ใช้ `bun add -D semantic-release` สำหรับติดตั้ง
- ใช้ `bunx semantic-release` สำหรับรัน
- ใช้ `--dry-run` สำหรับ dry run
- ใช้ conventional commits สำหรับ version bump

## Expected Outcome

- Version management ที่ automated
- Semantic versioning ที่ consistent
- Changelog generation ที่ automated
- Package publishing ที่ automated

## Skills Related

- `/follow-auto-it` - Auto สำหรับ automated releases
- `/follow-changelogen` - Changelog generation

## โครงสร้าง Directory

```
tool-semantic-release/
├── SKILL.md
├── guide/              (Guides และ best practices)
├── key-concepts/       (แนวคิดหลัก)
├── principles/         (หลักการ)
├── references/         (CLI, configuration, API reference)
├── workflows/          (Workflows สำหรับการใช้งาน)
├── templates/          (Templates สำหรับ .releaserc)
└── scripts/            (Scripts สำหรับ automation)
```

## หมวดหมู่ไฟล์

| Folder | Files | Description |
|--------|-------|-------------|
| [guide/](guide/) | 0 files | Guides และ best practices สำหรับการใช้งาน |
| [key-concepts/](key-concepts/) | 0 files | แนวคิดหลักของ Semantic Release |
| [principles/](principles/) | 0 files | หลักการในการใช้งาน Semantic Release |
| [references/](references/) | 4 files | CLI, configuration, API reference |
| [workflows/](workflows/) | 0 files | Workflows สำหรับการใช้งาน |
| [templates/](templates/) | 0 files | Templates สำหรับ .releaserc |
| [scripts/](scripts/) | 0 files | Scripts สำหรับ automation |

## Guide Files

| File | Description |
|------|-------------|
| [guide/key-concept.md](guide/key-concept.md) | แนวคิดหลัก - Semver, Commits, Plugins |
| [guide/how-it-works.md](guide/how-it-works.md) | สถาปัตยกรรม - Commit analysis, Version bump |
| [guide/features.md](guide/features.md) | ฟีเจอร์ทั้งหมด - Plugins, CI, Changelog |
| [guide/installation.md](guide/installation.md) | การติดตั้ง - npm, CI setup |
| [guide/configuration.md](guide/configuration.md) | การตั้งค่า - .releaserc |
| [guide/quick-start.md](guide/quick-start.md) | เริ่มต้นใช้งานอย่างรวดเร็ว |
| [guide/best-practices.md](guide/best-practices.md) | แนวทางปฏิบัติที่ดี |

## Reference Files

| File | Description |
|------|-------------|
| [references/website.md](references/website.md) | เว็บไซต์และเอกสารอย่างเป็นทางการ |
| [references/cli.md](references/cli.md) | CLI commands สำหรับ semantic-release |
| [references/configuration.md](references/configuration.md) | ตัวเลือก configuration ทั้งหมด |
| [references/api.md](references/api.md) | Programmatic API และ commit types |
