---
title: Storybook
description: แนวทางการพัฒนา Storybook ตาม best practices สำหรับ component explorer ที่ช่วยให้สามารถ develop, test, และ document UI components ได้อย่างมีประสิทธิภาพ
auto_execution_mode: 3
---

## Goal

ใช้ Storybook สำหรับ develop, test, และ document UI components ใน isolated environment

## Scope

ใช้สำหรับ component development, testing, และ documentation ด้วย Storybook

## Execute

- อ่าน `guide/installation.md` สำหรับการติดตั้งและ setup
- อ่าน `guide/quick-start.md` สำหรับเริ่มต้นใช้งาน
- อ่าน `guide/how-it-works.md` สำหรับวิธีการทำงาน
- อ่าน `guide/features.md` สำหรับ features ที่มี
- อ่าน `guide/configuration.md` สำหรับการตั้งค่า
- อ่าน `guide/best-practices.md` สำหรับ best practices
- อ่าน `references/cli.md` สำหรับ CLI commands
- อ่าน `references/configuration.md` สำหรับ configuration reference

## Rules

- ใช้ `bunx storybook@latest init` สำหรับ installation
- ใช้ backticks สำหรับ stories, commands, addons
- ใช้ code blocks สำหรับ story examples
- ใช้ ansi markdown diagrams สำหรับ flow และ architecture
- เขียน stories สำหรับทุก components
- ใช้ addons สำหรับ extend functionality
- ใช้ isolated environment สำหรับ development
- ใช้ proper story organization
- ใช้ component testing อย่างเหมาะสม

## Expected Outcome

- Components ที่ well-documented
- Development ใน isolated environment
- Testing ที่ comprehensive
- Documentation ที่ interactive

## โครงสร้าง Directory

```
lib-storybook/
├── SKILL.md
├── guide/              (Guides และ best practices)
├── key-concepts/       (แนวคิดหลัก)
├── principles/         (หลักการ)
├── references/         (CLI, configuration, API reference)
├── workflows/          (Workflows สำหรับการใช้งาน)
├── templates/          (Templates สำหรับ configuration)
└── scripts/            (Scripts สำหรับ automation)
```

## หมวดหมู่ไฟล์

| Folder | Files | Description |
|--------|-------|-------------|
| [guide/](guide/) | 6 files | Guides และ best practices สำหรับการใช้งาน |
| [key-concepts/](key-concepts/) | 0 files | แนวคิดหลักของ Storybook |
| [principles/](principles/) | 0 files | หลักการในการใช้งาน Storybook |
| [references/](references/) | 2 files | CLI, configuration reference |
| [workflows/](workflows/) | 0 files | Workflows สำหรับการใช้งาน |
| [templates/](templates/) | 0 files | Templates สำหรับ configuration |
| [scripts/](scripts/) | 0 files | Scripts สำหรับ automation |

## Guide Files

| File | Description |
|------|-------------|
| [guide/installation.md](guide/installation.md) | การติดตั้งและ setup |
| [guide/quick-start.md](guide/quick-start.md) | เริ่มต้นใช้งานอย่างรวดเร็ว |
| [guide/how-it-works.md](guide/how-it-works.md) | วิธีการทำงาน |
| [guide/features.md](guide/features.md) | Features ที่มี |
| [guide/configuration.md](guide/configuration.md) | การตั้งค่า |
| [guide/best-practices.md](guide/best-practices.md) | Best practices |

## Reference Files

| File | Description |
|------|-------------|
| [references/cli.md](references/cli.md) | CLI commands |
| [references/configuration.md](references/configuration.md) | Configuration reference |
