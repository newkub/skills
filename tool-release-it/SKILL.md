---
title: Release It
description: Generic CLI tool สำหรับ automate versioning และ package publishing
auto_execution_mode: 3
---

## Goal

ใช้งาน Release It สำหรับ automate versioning และ package publishing

## Scope

ใช้สำหรับ:
- Automate versioning และ package publishing
- Git commit/tag/push automation
- GitHub/GitLab releases
- Changelog generation
- npm publishing

## Execute

### 1. Install Release It

ติดตั้ง Release It:
```bash
bun add -D release-it
```

### 2. Interactive Release

Interactive release:
```bash
bunx release-it
```

### 3. CI Mode

CI mode (no prompts):
```bash
bunx release-it --ci
```

### 4. Dry Run

Dry run:
```bash
bunx release-it --dry-run
```

## Rules

- ใช้ `bun add -D release-it` สำหรับติดตั้ง
- ใช้ `bunx release-it` สำหรับ interactive release
- ใช้ `--ci` สำหรับ CI mode
- ใช้ `--dry-run` สำหรับ dry run

## Expected Outcome

- Versioning ที่ automated
- Git commit/tag/push ที่ automated
- GitHub/GitLab releases ที่ automated
- Changelog generation ที่ automated
- npm publishing ที่ automated

## Skills Related

- `/follow-auto-it` - Auto สำหรับ automated releases
- `/follow-changelogen` - Changelog generation

## โครงสร้าง Directory

```
tool-release-it/
├── SKILL.md
├── guide/              (Guides และ best practices)
├── key-concepts/       (แนวคิดหลัก)
├── principles/         (หลักการ)
├── references/         (CLI, configuration, API reference)
├── workflows/          (Workflows สำหรับการใช้งาน)
├── templates/          (Templates สำหรับ .release-it.json)
└── scripts/            (Scripts สำหรับ automation)
```

## หมวดหมู่ไฟล์

| Folder | Files | Description |
|--------|-------|-------------|
| [guide/](guide/) | 0 files | Guides และ best practices สำหรับการใช้งาน |
| [key-concepts/](key-concepts/) | 0 files | แนวคิดหลักของ Release It |
| [principles/](principles/) | 0 files | หลักการในการใช้งาน Release It |
| [references/](references/) | 4 files | CLI, configuration, API reference |
| [workflows/](workflows/) | 0 files | Workflows สำหรับการใช้งาน |
| [templates/](templates/) | 0 files | Templates สำหรับ .release-it.json |
| [scripts/](scripts/) | 0 files | Scripts สำหรับ automation |

## Guide Files

| File | Description |
|------|-------------|
| [guide/key-concept.md](guide/key-concept.md) | แนวคิดหลัก - Version bump, Git, npm |
| [guide/how-it-works.md](guide/how-it-works.md) | การทำงาน - Release flow, Hooks lifecycle |
| [guide/features.md](guide/features.md) | ฟีเจอร์ทั้งหมด - Plugins, Pre-releases |
| [guide/installation.md](guide/installation.md) | การติดตั้ง - npm, npx |
| [guide/configuration.md](guide/configuration.md) | การตั้งค่า - .release-it.json |
| [guide/quick-start.md](guide/quick-start.md) | คู่มือเริ่มต้นใช้งาน |
| [guide/best-practices.md](guide/best-practices.md) | แนวทางปฏิบัติที่ดี |

## Reference Files

| File | Description |
|------|-------------|
| [references/website.md](references/website.md) | Official links และ resources |
| [references/cli.md](references/cli.md) | CLI commands |
| [references/configuration.md](references/configuration.md) | Configuration options reference |
| [references/api.md](references/api.md) | Programmatic API |

## Key Features

| Feature | Description |
|---------|-------------|
| **Version Bump** | Auto increment semver |
| **Git Integration** | commit, tag, push |
| **GitHub/GitLab** | Create releases |
| **npm Publish** | Publish to npm registry |
| **Changelog** | Auto-generate |
| **Plugins** | Extend functionality |
| **Hooks** | Run commands |

## Usage Order

1. **Start**: `guide/installation.md` → `guide/key-concept.md`
2. **Learn**: `guide/how-it-works.md` → `guide/features.md`
3. **Configure**: `guide/configuration.md`
4. **Reference**: `references/cli.md` → `references/configuration.md`
5. **Best Practices**: `guide/best-practices.md`
