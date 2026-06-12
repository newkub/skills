---
title: Turborepo
description: High-performance build system สำหรับ JavaScript/TypeScript monorepos ด้วย intelligent caching และ task scheduling
auto_execution_mode: 3
---

## When to use

ใช้ skill นี้เมื่อต้องการ:
- Build system สำหรับ monorepos
- Intelligent caching และ task scheduling
- Remote cache สำหรับ CI/CD
- Faster builds ด้วย parallel execution

## Skills Related

- `/lib-nitro` - Nitro framework สำหรับ server-side
- `/tool-moonrepo` - Moonrepo สำหรับ monorepo management
- `/follow-turborepo` - Turborepo best practices

## References

### guide/

| No | File | Description |
|----|------|-------------|
| 1 | key-concept.md | แนวคิดหลักและการทำงานของ Turborepo |
| 2 | how-it-works.md | สถาปัตยกรรมและ workflow การทำงาน |
| 3 | features.md | ฟีเจอร์หลักที่สำคัญ |
| 4 | installation.md | การติดตั้งและข้อกำหนด |
| 5 | configuration.md | การตั้งค่า turbo.json |
| 6 | quick-start.md | เริ่มต้นใช้งานอย่างรวดเร็ว |
| 7 | best-practices.md | แนวทางปฏิบัติที่ดี |
| 8 | integration.md | การเชื่อมต่อกับเครื่องมือและ workflow ต่างๆ |
| 9 | architecture.md | สถาปัตยกรรมระบบโดยละเอียด |

### references/

| No | File | Description |
|----|------|-------------|
| 1 | website.md | เว็บไซต์และเอกสารอย่างเป็นทางการ |
| 2 | cli.md | คำสั่ง CLI สำหรับ Turborepo |
| 3 | configuration.md | ตัวเลือก configuration ทั้งหมด |
| 4 | api.md | Remote cache และ API options |

## Quick Reference

```bash
# ติดตั้ง Turborepo
bun add -D turbo

# Run tasks
bunx turbo run build

# Dry run
bunx turbo run build --dry

# Login to remote cache
bunx turbo login

# Link repository
bunx turbo link
```
