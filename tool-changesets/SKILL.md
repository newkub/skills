# tool-changesets

## Overview

แนวทางการใช้งาน Changesets สำหรับ version management และ release automation ใน monorepos ใช้โดยโปรเจกต์ชั้นนำ เช่น Astro, Vite, Remix, SvelteKit

## Content Summary

| Folder | File | Description |
|--------|------|-------------|
| **guide/** | [key-concept.md](guide/key-concept.md) | แนวคิดพื้นฐานและ key terms |
| | [how-it-works.md](guide/how-it-works.md) | หลักการทำงานและ workflow |
| | [features.md](guide/features.md) | Features ทั้งหมดของ Changesets |
| | [installation.md](guide/installation.md) | การติดตั้งและ setup |
| | [configuration.md](guide/configuration.md) | การตั้งค่า config.json |
| | [quick-start.md](guide/quick-start.md) | เริ่มต้นใช้งานอย่างรวดเร็ว |
| | [best-practices.md](guide/best-practices.md) | แนวทางปฏิบัติที่ดีที่สุด |
| **references/** | [website.md](references/website.md) | เว็บไซต์และแหล่งข้อมูลที่เป็นประโยชน์ |
| | [cli.md](references/cli.md) | Changesets CLI commands |
| | [configuration.md](references/configuration.md) | ตัวเลือก configuration ทั้งหมด |
| | [api.md](references/api.md) | Programmatic API |

## Quick Reference

```bash
# Install
npm install -D @changesets/cli

# Initialize
bunx changeset init

# Create changeset
bunx changeset

# Version packages
bunx changeset version

# Publish
bunx changeset publish
```

## File Structure

```
tool-changesets/
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