# tool-semantic-release

## Overview

semantic-release เป็น fully automated version management และ package publishing tool ที่ใช้ conventional commits สำหรับ determine version bumps อัตโนมัติตาม semantic versioning รองรับ npm, GitHub Releases, GitLab Releases

## Content Summary

| Folder | File | Description |
|--------|------|-------------|
| **guide/** | [key-concept.md](guide/key-concept.md) | แนวคิดหลัก - Semver, Commits, Plugins |
| | [how-it-works.md](guide/how-it-works.md) | สถาปัตยกรรม - Commit analysis, Version bump |
| | [features.md](guide/features.md) | ฟีเจอร์ทั้งหมด - Plugins, CI, Changelog |
| | [installation.md](guide/installation.md) | การติดตั้ง - npm, CI setup |
| | [configuration.md](guide/configuration.md) | การตั้งค่า - .releaserc |
| | [quick-start.md](guide/quick-start.md) | เริ่มต้นใช้งานอย่างรวดเร็ว |
| | [best-practices.md](guide/best-practices.md) | แนวทางปฏิบัติที่ดี |
| **references/** | [website.md](references/website.md) | เว็บไซต์และเอกสารอย่างเป็นทางการ |
| | [cli.md](references/cli.md) | CLI commands สำหรับ semantic-release |
| | [configuration.md](references/configuration.md) | ตัวเลือก configuration ทั้งหมด |
| | [api.md](references/api.md) | Programmatic API และ commit types |

## Quick Reference

```bash
# ติดตั้ง
npm install -D semantic-release

# รัน semantic-release
npx semantic-release

# Dry run
npx semantic-release --dry-run

# Debug mode
DEBUG=semantic-release:* npx semantic-release
```

## Key Concepts

| Concept | คำอธิบาย |
|---------|----------|
| **Semver** | major.minor.patch versioning |
| **Conventional Commits** | `feat:`, `fix:`, `docs:` prefixes |
| **Plugins** | analyze, generate, publish |
| **CI Integration** | รันหลัง build สำเร็จ |

## File Structure

```
tool-semantic-release/
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
    ├── website.md
    ├── cli.md
    ├── configuration.md
    └── api.md
```