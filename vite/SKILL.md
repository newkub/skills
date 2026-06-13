---
title: Vite
description: แนวทางการใช้งาน Vite ในฐานะ build library สำหรับ frontend development ด้วย Native ESM, HMR ที่รวดเร็ว, Plugin API และ Rollup-based production build
auto_execution_mode: 3
---

## Goal

ใช้ Vite สำหรับ frontend build tool ด้วย Native ESM, HMR ที่รวดเร็ว, Plugin API, และ Rollup-based production build

## Scope

ใช้สำหรับ build และ development ของ frontend projects ด้วย Vite

## โครงสร้าง Directory

```
vite/
├── SKILL.md
├── guide/
│   ├── installation.md
│   ├── quick-start.md
│   ├── key-concept.md
│   ├── how-it-works.md
│   ├── configuration.md
│   ├── features.md
│   ├── patterns.md
│   ├── performance.md
│   ├── best-practices.md
│   ├── integration.md
│   ├── architecture.md
│   ├── structure.md
│   ├── testing.md
│   ├── migration.md
│   ├── ecosystem.md
│   ├── security.md
│   └── troubleshooting.md
├── key-concepts/
│   ├── native-esm.md
│   ├── hmr.md
│   └── dependency-pre-bundling.md
├── principles/
│   ├── performance-first.md
│   └── convention-over-configuration.md
├── references/
│   ├── api.md
│   ├── configuration.md
│   ├── sitemap.md
│   └── website.md
└── workflows/
    ├── setup-vite-project.md
    ├── add-plugin.md
    └── optimize-build.md
```

## หมวดหมู่ไฟล์

- **guide/** - คู่มือการใช้งานและ best practices
- **key-concepts/** - แนวคิดสำคัญของ Vite
- **principles/** - หลักการในการพัฒนาด้วย Vite
- **references/** - เอกสารอ้างอิง API และ configuration
- **workflows/** - workflows สำหรับ automation

## Execute

1. ติดตั้ง Vite ด้วย `bun add -D vite`
2. อ่าน `guide/installation.md` สำหรับการติดตั้งและ setup
3. อ่าน `guide/quick-start.md` สำหรับเริ่มต้นใช้งาน
4. ใช้ `workflows/setup-vite-project.md` สำหรับ setup project
5. อ่าน `guide/key-concept.md` สำหรับแนวคิดหลัก
6. อ่าน `guide/how-it-works.md` สำหรับวิธีการทำงาน
7. อ่าน `key-concepts/native-esm.md` สำหรับ Native ESM
8. อ่าน `key-concepts/hmr.md` สำหรับ HMR
9. อ่าน `key-concepts/dependency-pre-bundling.md` สำหรับ dependency pre-bundling
10. อ่าน `guide/configuration.md` สำหรับการตั้งค่า
11. อ่าน `references/configuration.md` สำหรับ configuration reference
12. ตั้งค่า `vite.config.ts`
13. อ่าน `guide/features.md` สำหรับ features ที่มี
14. อ่าน `guide/patterns.md` สำหรับ patterns ทั่วไป
15. ใช้ Plugin API สำหรับ extend functionality
16. ใช้ `workflows/add-plugin.md` สำหรับเพิ่ม plugins
17. อ่าน `guide/best-practices.md` สำหรับ best practices
18. อ่าน `principles/performance-first.md` สำหรับ performance principles
19. อ่าน `principles/convention-over-configuration.md` สำหรับ convention principles
20. ใช้ Rollup-based production build
21. ใช้ `workflows/optimize-build.md` สำหรับ build optimization
22. อ่าน `guide/integration.md` สำหรับ framework integration
23. อ่าน `guide/architecture.md` สำหรับ system architecture
24. อ่าน `guide/structure.md` สำหรับ project structure
25. อ่าน `guide/troubleshooting.md` สำหรับปัญหาทั่วไป

## Rules

- ใช้ `bun add -D vite` สำหรับ installation
- ใช้ backticks สำหรับ `vite`, commands, plugins
- ใช้ code blocks สำหรับ configuration examples
- ใช้ ansi markdown diagrams สำหรับ flow และ architecture
- ใช้ Native ESM เสมอ
- ใช้ HMR สำหรับ development
- ใช้ Plugin API สำหรับ extend functionality
- ใช้ Rollup-based production build

## Expected Outcome

- Development ที่รวดเร็วด้วย HMR
- Build ที่ optimized ด้วย Rollup
- Plugin system ที่ flexible
- Integration ที่ smooth กับ frameworks
