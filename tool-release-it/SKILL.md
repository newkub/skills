# tool-release-it

แนวทางการใช้งาน Release It - Generic CLI tool สำหรับ automate versioning และ package publishing

## Overview

Release It เป็น CLI tool สำหรับ automate versioning, git commit/tag/push, สร้าง GitHub/GitLab releases, generate changelog, และ publish ไปยัง npm รองรับ plugins และ hooks สำหรับ customize release workflow

## File Structure

```
tool-release-it/
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

## Content Summary

| Folder | File | Description |
|--------|------|-------------|
| **Guide** | key-concept.md | แนวคิดหลัก - Version bump, Git, npm |
| **Guide** | how-it-works.md | การทำงาน - Release flow, Hooks lifecycle |
| **Guide** | features.md | ฟีเจอร์ทั้งหมด - Plugins, Pre-releases |
| **Guide** | installation.md | การติดตั้ง - npm, npx |
| **Guide** | configuration.md | การตั้งค่า - .release-it.json |
| **Guide** | quick-start.md | คู่มือเริ่มต้นใช้งาน |
| **Guide** | best-practices.md | แนวทางปฏิบัติที่ดี |
| **Reference** | website.md | Official links และ resources |
| **Reference** | cli.md | CLI commands |
| **Reference** | configuration.md | Configuration options reference |
| **Reference** | api.md | Programmatic API |

## Quick Start

```bash
# Install
npm install -D release-it

# Interactive release
npx release-it

# CI mode (no prompts)
npx release-it --ci

# Dry run
npx release-it --dry-run
```

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