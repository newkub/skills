---
title: Semantic Release
description: Fully automated version management และ package publishing tool ที่ใช้ conventional commits
auto_execution_mode: 3
---

## When to use

ใช้ skill นี้เมื่อต้องการ:
- Automated version management
- Semantic versioning อัตโนมัติ
- Automated changelog generation
- Package publishing ไปยัง npm, GitHub, GitLab

## Skills Related

- `/follow-auto-it` - Auto สำหรับ automated releases
- `/follow-changelogen` - Changelog generation

## References

### guide/

| No | File | Description |
|----|------|-------------|
| 1 | key-concept.md | แนวคิดหลัก - Semver, Commits, Plugins |
| 2 | how-it-works.md | สถาปัตยกรรม - Commit analysis, Version bump |
| 3 | features.md | ฟีเจอร์ทั้งหมด - Plugins, CI, Changelog |
| 4 | installation.md | การติดตั้ง - npm, CI setup |
| 5 | configuration.md | การตั้งค่า - .releaserc |
| 6 | quick-start.md | เริ่มต้นใช้งานอย่างรวดเร็ว |
| 7 | best-practices.md | แนวทางปฏิบัติที่ดี |

### references/

| No | File | Description |
|----|------|-------------|
| 1 | website.md | เว็บไซต์และเอกสารอย่างเป็นทางการ |
| 2 | cli.md | CLI commands สำหรับ semantic-release |
| 3 | configuration.md | ตัวเลือก configuration ทั้งหมด |
| 4 | api.md | Programmatic API และ commit types |

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