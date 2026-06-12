---
title: WXT
description: WXT - Next-gen Web Extension Framework สำหรับสร้าง browser extensions ที่รองรับหลาย browser และทั้ง Manifest V2/V3
auto_execution_mode: 3
---

## Goal

ใช้ WXT สร้าง browser extensions ที่รองรับหลาย browser ด้วย TypeScript, HMR, และ Manifest V2/V3 support

## Scope

ใช้สำหรับสร้าง web extensions สำหรับ Chrome, Firefox, Edge, Safari ด้วย WXT framework

## Execute

- ติดตั้ง WXT ด้วย `bun add -D wxt`
- อ่าน `guide/installation.md` สำหรับการติดตั้งและ setup
- อ่าน `guide/quick-start.md` สำหรับเริ่มต้นใช้งาน
- ใช้ `workflows/setup-wxt.md` สำหรับ setup project
- อ่าน `guide/key-concept.md` สำหรับแนวคิดหลัก
- อ่าน `guide/how-it-works.md` สำหรับวิธีการทำงาน
- อ่าน `key-concepts/` สำหรับแนวคิดเฉพาะทาง
- อ่าน `guide/configuration.md` สำหรับการตั้งค่า
- อ่าน `references/configuration.md` สำหรับ configuration reference
- ตั้งค่า `wxt.config.ts`
- อ่าน `guide/features.md` สำหรับ features ที่มี
- อ่าน `workflows/create-extension.md` สำหรับสร้าง extension
- ใช้ `workflows/add-framework.md` สำหรับ framework integration
- อ่าน `workflows/build-extension.md` สำหรับ build และ package
- อ่าน `guide/best-practices.md` สำหรับ best practices
- ใช้ proper build optimization
- อ่าน `workflows/publish-extension.md` สำหรับ publishing
- อ่าน `guide/integration.md` สำหรับ framework integration
- อ่าน `guide/architecture.md` สำหรับ system architecture
- อ่าน `guide/structure.md` สำหรับ project structure
- อ่าน `guide/troubleshooting.md` สำหรับปัญหาทั่วไป

## Rules

- ใช้ `bun add -D wxt` สำหรับ installation
- ใช้ backticks สำหรับ commands, manifest keys
- ใช้ code blocks สำหรับ extension examples
- ใช้ ansi markdown diagrams สำหรับ flow และ architecture
- ใช้ TypeScript เสมอ
- ใช้ HMR สำหรับ development
- รองรับ Manifest V2/V3
- ใช้ proper build optimization

## Expected Outcome

- Browser extensions ที่ cross-browser compatible
- Development ที่รวดเร็วด้วย HMR
- Build ที่ optimized สำหรับ production
- Publishing ที่ streamlined
