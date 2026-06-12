---
name: tool-turborepo
description: Turborepo - High-performance build system สำหรับ JavaScript/TypeScript monorepos ด้วย intelligent caching และ task scheduling
---

## When to use

- เมื่อต้องการ build system สำหรับ monorepos
- เมื่อต้องการ intelligent caching และ task scheduling
- เมื่อต้องการ remote cache สำหรับ CI/CD
- เมื่อต้องการ faster builds ด้วย parallel execution

## Skills Related

- `/lib-nitro` - Nitro framework สำหรับ server-side
- `/tool-moonrepo` - Moonrepo สำหรับ monorepo management

## หมวดหมู่ไฟล์

### knowledge/guide/

- **key-concept.md** - แนวคิดหลักและการทำงานของ Turborepo
- **how-it-works.md** - สถาปัตยกรรมและ workflow การทำงาน
- **features.md** - ฟีเจอร์หลักที่สำคัญ
- **installation.md** - การติดตั้งและข้อกำหนด
- **configuration.md** - การตั้งค่า turbo.json
- **quick-start.md** - เริ่มต้นใช้งานอย่างรวดเร็ว
- **best-practices.md** - แนวทางปฏิบัติที่ดี
- **integration.md** - การเชื่อมต่อกับเครื่องมือและ workflow ต่างๆ
- **architecture.md** - สถาปัตยกรรมระบบโดยละเอียด

### references/

- **website.md** - เว็บไซต์และเอกสารอย่างเป็นทางการ
- **cli.md** - คำสั่ง CLI สำหรับ Turborepo
- **configuration.md** - ตัวเลือก configuration ทั้งหมด
- **api.md** - Remote cache และ API options

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