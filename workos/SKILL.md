---
title: WorkOS
description: Enterprise identity platform สำหรับ SSO, SAML, directory sync, audit logs และ admin portal
auto_execution_mode: 3
---

## Goal

ใช้ WorkOS สำหรับ enterprise identity platform ด้วย SSO, SAML, directory sync, audit logs, และ admin portal

## Scope

ใช้สำหรับ SSO (SAML/OIDC), directory sync, audit logs, และ multi-tenant organization management

## โครงสร้าง Directory

```
workos/
├── SKILL.md
├── guide/
│   ├── installation.md
│   ├── quick-start.md
│   ├── key-concept.md
│   ├── how-it-works.md
│   ├── configuration.md
│   ├── features.md
│   ├── best-practices.md
│   ├── integration.md
│   └── architecture.md
└── references/
    ├── api.md
    ├── configuration.md
    └── website.md
```

## หมวดหมู่ไฟล์

- **guide/** - คู่มือการใช้งานและ best practices
- **references/** - เอกสารอ้างอิง API และ configuration

## Execute

1. ติดตั้ง WorkOS SDK ด้วย `bun add @workos-inc/node`
2. อ่าน `guide/installation.md` สำหรับการติดตั้งและ setup
3. อ่าน `guide/quick-start.md` สำหรับเริ่มต้นใช้งาน
4. อ่าน `guide/key-concept.md` สำหรับแนวคิดหลัก
5. อ่าน `guide/how-it-works.md` สำหรับวิธีการทำงาน
6. อ่าน `guide/configuration.md` สำหรับการตั้งค่า
7. อ่าน `references/configuration.md` สำหรับ configuration reference
8. ตั้งค่า environment variables และ SDK
9. อ่าน `guide/features.md` สำหรับ features ที่มี
10. ใช้ SSO (SAML/OIDC) สำหรับ authentication
11. อ่าน `guide/integration.md` สำหรับ integration
12. ใช้ directory sync สำหรับ sync users และ groups
13. ใช้ webhooks สำหรับ real-time events
14. อ่าน `guide/best-practices.md` สำหรับ best practices
15. ใช้ audit logs สำหรับ compliance
16. อ่าน `guide/architecture.md` สำหรับ system architecture

## Rules

- ใช้ `bun add @workos-inc/node` สำหรับ installation
- ใช้ backticks สำหรับ API endpoints, commands
- ใช้ code blocks สำหรับ examples
- ใช้ ansi markdown diagrams สำหรับ flow และ architecture
- ใช้ SSO สำหรับ authentication
- ใช้ directory sync สำหรับ user management
- ใช้ audit logs สำหรับ compliance
- ใช้ webhooks สำหรับ real-time events

## Expected Outcome

- SSO ที่ configured อย่างถูกต้อง
- Directory sync ที่ automated
- Audit logs ที่ comprehensive
- Compliance ที่ meets requirements
