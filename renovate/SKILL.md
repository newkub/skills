---
title: Renovate
description: Automated dependency update tool ที่สร้าง pull requests อัตโนมัติสำหรับ update dependencies
auto_execution_mode: 3
---

## Goal

ใช้งาน Renovate สำหรับ automated dependency updates

## Scope

ใช้สำหรับ:
- Automated dependency updates
- Auto-create pull requests สำหรับ dependency updates
- Support หลาย platform เช่น GitHub, GitLab, Bitbucket
- Monorepo support
- Schedule dependency updates

## Execute

### 1. Install Renovate CLI

ติดตั้ง Renovate CLI:
```bash
npx renovate --version
```

### 2. Run Renovate in Dry-run

รัน Renovate ในโหมด dry-run:
```bash
npx renovate --dry-run
```

### 3. Validate Config

ตั้งค่า config:
```bash
renovate:config:validate
```

### 4. Create PR for Testing

สร้าง PR สำหรับทดสอบ:
```bash
npx renovate --platform=github
```

## Rules

- ใช้ presets คล้าย ESLint - ใช้ config ที่มีอยู่แล้วได้
- รองรับ monorepo ได้ดี
- กำหนดเวลาสร้าง PR ได้
- ใช้ configuration ที่ centralized

## Expected Outcome

- Automated dependency updates ที่ efficient
- Pull requests ที่ created อัตโนมัติ
- Multi-platform support ที่ comprehensive
- Monorepo support ที่ robust
- Scheduled updates ที่ reliable

## Skills Related

- `/follow-renovate` - Renovate best practices

## โครงสร้าง Directory

```
tool-renovate/
├── SKILL.md
├── guide/              (Guides และ best practices)
├── key-concepts/       (แนวคิดหลัก)
├── principles/         (หลักการ)
├── references/         (CLI, configuration, API reference)
├── workflows/          (Workflows สำหรับการใช้งาน)
├── templates/          (Templates สำหรับ renovate.json)
└── scripts/            (Scripts สำหรับ automation)
```

## หมวดหมู่ไฟล์

| Folder | Files | Description |
|--------|-------|-------------|
| [guide/](guide/) | 0 files | Guides และ best practices สำหรับการใช้งาน |
| [key-concepts/](key-concepts/) | 0 files | แนวคิดหลักของ Renovate |
| [principles/](principles/) | 0 files | หลักการในการใช้งาน Renovate |
| [references/](references/) | 4 files | CLI, configuration, API reference |
| [workflows/](workflows/) | 0 files | Workflows สำหรับการใช้งาน |
| [templates/](templates/) | 0 files | Templates สำหรับ renovate.json |
| [scripts/](scripts/) | 0 files | Scripts สำหรับ automation |

## Guide Files

| File | Description |
|------|-------------|
| [guide/key-concept.md](guide/key-concept.md) | แนวคิดหลักและการทำงาน |
| [guide/how-it-works.md](guide/how-it-works.md) | สถาปัตยกรรมและ workflow |
| [guide/features.md](guide/features.md) | ฟีเจอร์หลักที่สำคัญ |
| [guide/installation.md](guide/installation.md) | การติดตั้งและข้อกำหนด |
| [guide/configuration.md](guide/configuration.md) | การตั้งค่า renovate.json |
| [guide/quick-start.md](guide/quick-start.md) | เริ่มต้นใช้งานอย่างรวดเร็ว |
| [guide/best-practices.md](guide/best-practices.md) | แนวทางปฏิบัติที่ดี |

## Reference Files

| File | Description |
|------|-------------|
| [references/website.md](references/website.md) | เว็บไซต์และเอกสารอย่างเป็นทางการ |
| [references/cli.md](references/cli.md) | คำสั่ง CLI สำหรับ Renovate |
| [references/configuration.md](references/configuration.md) | ตัวเลือก configuration ทั้งหมด |
| [references/api.md](references/api.md) | Configuration presets และ platform support |

## Key Concepts

| Concept | คำอธิบาย |
|---------|----------|
| **Automated PRs** | สร้าง PR อัตโนมัติสำหรับ dependency updates |
| **Presets** | คล้าย ESLint - ใช้ config ที่มีอยู่แล้วได้ |
| **Monorepo** | รองรับ monorepo ได้ดี |
| **Schedule** | กำหนดเวลาสร้าง PR ได้ |
