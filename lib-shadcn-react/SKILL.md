# lib-shadcn-react

## Overview

แนวทางการพัฒนาด้วย shadcn/ui ตาม best practices สำหรับ React 18+ component library ที่ใช้ copy-to-own pattern พร้อม Radix UI และ Tailwind CSS

## Content Summary

| Folder | File | Description |
|--------|------|-------------|
| **guide/** | [key-concept.md](guide/key-concept.md) | แนวคิดพื้นฐานของ shadcn/ui |
| | [how-it-works.md](guide/how-it-works.md) | หลักการทำงานและ architecture |
| | [features.md](guide/features.md) | ฟีเจอร์และ components ทั้งหมด |
| | [installation.md](guide/installation.md) | การติดตั้งและ setup |
| | [configuration.md](guide/configuration.md) | การตั้งค่า components.json |
| | [quick-start.md](guide/quick-start.md) | เริ่มต้นใช้งานอย่างรวดเร็ว |
| | [best-practices.md](guide/best-practices.md) | แนวทางปฏิบัติที่ดีที่สุด |
| | [integration.md](guide/integration.md) | การรวมกับ tools อื่นๆ |
| | [architecture.md](guide/architecture.md) | Component architecture patterns |
| **references/** | [website.md](references/website.md) | เว็บไซต์และแหล่งข้อมูลที่เป็นประโยชน์ |
| | [cli.md](references/cli.md) | shadcn/ui CLI commands |
| | [configuration.md](references/configuration.md) | ตัวเลือก configuration ทั้งหมด |
| | [api.md](references/api.md) | Component API reference |

## Quick Reference

```bash
# Initialize shadcn/ui
npx shadcn@latest init

# Add component
npx shadcn@latest add button

# Add multiple components
npx shadcn@latest add button card dialog form

# Upgrade all components
npx shadcn@latest upgrade
```

## File Structure

```
lib-shadcn-react/
├── SKILL.md
├── guide/
│   ├── key-concept.md
│   ├── how-it-works.md
│   ├── features.md
│   ├── installation.md
│   ├── configuration.md
│   ├── quick-start.md
│   ├── best-practices.md
│   ├── integration.md
│   └── architecture.md
└── references/
    ├── website.md
    ├── cli.md
    ├── configuration.md
    └── api.md
```