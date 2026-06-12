---
title: esm.sh
description: CDN สำหรับ ES Modules ที่ให้บริการโหลด npm packages ผ่าน ESM format โดยตรงบน browser รองรับ tree-shaking, การ bundle และ optimize อัตโนมัติ
auto_execution_mode: 3
---

## Goal

ใช้ esm.sh CDN สำหรับโหลด ES Modules บน browser โดยไม่ต้อง bundler

## Scope

ใช้สำหรับการโหลด npm packages ผ่าน ESM format บน browser ด้วย tree-shaking และ optimization อัตโนมัติ

## Execute

- Import modules ด้วย URL format: `import React from 'https://esm.sh/react@18'`
- ใช้ query parameters สำหรับ configuration เช่น `?dev` สำหรับ development mode
- ใช้ `?deps` สำหรับ external dependencies
- Pin version เสมอเพื่อ stability
- ใช้ `?external` สำหรับ peer dependencies
- Test ใน production ก่อน deploy

## Rules

- ใช้ URL format: `https://esm.sh/package@version`
- ใช้ `?dev` สำหรับ development mode
- ใช้ `?deps` สำหรับ external dependencies
- Pin version เสมอเพื่อ stability
- ใช้ `?external` สำหรับ peer dependencies
- Test ใน production ก่อน deploy

## Expected Outcome

- Bundle size ที่เล็กลงด้วย tree-shaking
- Loading performance ที่ดีขึ้น
- Development workflow ที่ง่ายขึ้น

## โครงสร้าง Directory

```
cloud-esm-sh/
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
- `key-concepts/` - แนวคิดสำคัญเกี่ยวกับ esm.sh CDN
- `principles/` - หลักการในการใช้ esm.sh
- `references/` - เอกสารอ้างอิงและ API documentation
- `workflows/` - workflows สำหรับ automation
- `templates/` - templates สำหรับเริ่มต้น
- `scripts/` - scripts สำหรับ automation

## References

- [esm.sh Website](https://esm.sh)
- [Documentation](https://esm.sh/docs)
