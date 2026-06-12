---
title: jsDelivr
description: Open Source CDN for npm packages and GitHub repositories with multi-CDN infrastructure, smart load balancing, and global performance. Use for loading JavaScript libraries, CSS frameworks, and static assets on web pages.
auto_execution_mode: 3
---

## Goal

ใช้ jsDelivr CDN สำหรับโหลด npm packages และ GitHub repositories บน web pages

## Scope

ใช้สำหรับการโหลด JavaScript libraries, CSS frameworks, และ static assets บน web pages ด้วย multi-CDN infrastructure

## Execute

- Load packages ด้วย URL format: `https://cdn.jsdelivr.net/npm/package@version`
- ใช้ ES Modules ด้วย `<script type="module">` และ import จาก jsDelivr
- ใช้ combine feature เพื่อลด HTTP requests
- Pin version เสมอเพื่อ stability
- ใช้ `+semver` สำหรับ version ranges
- Test ใน production ก่อน deploy
- ใช้ SRI hashes สำหรับ security
- Monitor CDN performance

## Rules

- ใช้ URL format: `https://cdn.jsdelivr.net/npm/package@version`
- Pin version เสมอเพื่อ stability
- ใช้ `+semver` สำหรับ version ranges
- Test ใน production ก่อน deploy
- ใช้ SRI hashes สำหรับ security
- Monitor CDN performance

## Expected Outcome

- Loading performance ที่ดีขึ้นด้วย multi-CDN
- Global reach รวมถึง China
- High availability ด้วย failover

## โครงสร้าง Directory

```
cloud-jsdelivr/
├── SKILL.md
├── guide/
├── key-concepts/
├── principles/
├── references/
├── workflows/
├── templates/
└── scripts/
```

## หมวดหมู่ไฟล์

- `SKILL.md` - ไฟล์หลักของ skill
- `guide/` - คู่มือการใช้งานและ best practices
- `key-concepts/` - แนวคิดสำคัญเกี่ยวกับ jsDelivr CDN
- `principles/` - หลักการในการใช้ jsDelivr
- `references/` - เอกสารอ้างอิงและ API documentation
- `workflows/` - workflows สำหรับ automation
- `templates/` - templates สำหรับเริ่มต้น
- `scripts/` - scripts สำหรับ automation

## References

- [Official Website](https://www.jsdelivr.com)
- [Documentation](https://www.jsdelivr.com/documentation)
- [GitHub](https://github.com/jsdelivr/jsdelivr)
- [esm.run](https://www.jsdelivr.com/esm)
- [Purge Cache Tool](https://www.jsdelivr.com/tools/purge)
