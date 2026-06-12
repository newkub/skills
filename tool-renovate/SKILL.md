# tool-renovate

## Overview

Renovate เป็น automated dependency update tool ที่สร้าง pull requests อัตโนมัติสำหรับ update dependencies, lock files และ configuration files รองรับหลาย platform เช่น GitHub, GitLab, Bitbucket


## When to use



## Skills Related



## References


## Content Summary

| Folder | File | Description |
|--------|------|-------------|
| **guide/** | [key-concept.md](guide/key-concept.md) | แนวคิดหลักและการทำงาน |
| | [how-it-works.md](guide/how-it-works.md) | สถาปัตยกรรมและ workflow |
| | [features.md](guide/features.md) | ฟีเจอร์หลักที่สำคัญ |
| | [installation.md](guide/installation.md) | การติดตั้งและข้อกำหนด |
| | [configuration.md](guide/configuration.md) | การตั้งค่า renovate.json |
| | [quick-start.md](guide/quick-start.md) | เริ่มต้นใช้งานอย่างรวดเร็ว |
| | [best-practices.md](guide/best-practices.md) | แนวทางปฏิบัติที่ดี |
| **references/** | [website.md](references/website.md) | เว็บไซต์และเอกสารอย่างเป็นทางการ |
| | [cli.md](references/cli.md) | คำสั่ง CLI สำหรับ Renovate |
| | [configuration.md](references/configuration.md) | ตัวเลือก configuration ทั้งหมด |
| | [api.md](references/api.md) | Configuration presets และ platform support |

## Quick Reference

```bash
# ติดตั้ง Renovate CLI
npx renovate --version

# รัน Renovate ในโหมด dry-run
npx renovate --dry-run

# ตั้งค่า config
renovate:config:validate

# สร้าง PR สำหรับ ทดสอบ
npx renovate --platform=github
```

## Key Concepts

| Concept | คำอธิบาย |
|---------|----------|
| **Automated PRs** | สร้าง PR อัตโนมัติสำหรับ dependency updates |
| **Presets** | คล้าย ESLint - ใช้ config ที่มีอยู่แล้วได้ |
| **Monorepo** | รองรับ monorepo ได้ดี |
| **Schedule** | กำหนดเวลาสร้าง PR ได้ |

## File Structure

```
tool-renovate/
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
