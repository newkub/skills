---
title: Nitro
description: คู่มือการใช้งาน Nitro - full-stack server framework สำหรับ JavaScript/TypeScript ที่รองรับทุก runtime และ deploy target
auto_execution_mode: 3
---

## Goal

ใช้ Nitro สร้าง full-stack server applications ที่รองรับทุก runtime (Node.js, Bun, Deno, Edge) และ deploy target

## Scope

ใช้สำหรับสร้าง server applications, APIs, และ backend services ด้วย Nitro framework

## Execute

- ติดตั้ง Nitro ด้วย `bun add nitropack`
- อ่าน `guide/installation.md` สำหรับการติดตั้งและ setup
- อ่าน `guide/quick-start.md` สำหรับเริ่มต้นใช้งาน
- ใช้ `workflows/setup-nitro.md` สำหรับ setup project ใหม่
- อ่าน `guide/key-concept.md` สำหรับแนวคิดหลัก
- อ่าน `guide/how-it-works.md` สำหรับวิธีการทำงาน
- อ่าน `key-concepts/server-routes.md` สำหรับ server routes
- อ่าน `key-concepts/middleware.md` สำหรับ middleware
- อ่าน `key-concepts/storage.md` สำหรับ storage abstraction
- อ่าน `key-concepts/deployment-presets.md` สำหรับ deployment presets
- อ่าน `guide/configuration.md` สำหรับการตั้งค่า
- อ่าน `references/configuration.md` สำหรับ configuration reference
- ตั้งค่า Nitro configuration
- อ่าน `guide/features.md` สำหรับ features ที่มี
- อ่าน `guide/patterns.md` สำหรับ patterns ทั่วไป
- ใช้ `workflows/create-nitro-app.md` สำหรับสร้าง application
- อ่าน `principles/platform-agnostic.md` สำหรับ platform-agnostic design
- อ่าน `principles/serverless-first.md` สำหรับ serverless-first design
- อ่าน `guide/performance.md` สำหรับ performance optimization
- อ่าน `guide/integration.md` สำหรับ framework integration
- อ่าน `guide/architecture.md` สำหรับ system architecture
- อ่าน `guide/structure.md` สำหรับ project structure
- อ่าน `workflows/deploy-nitro.md` สำหรับ deployment
- อ่าน `guide/security.md` สำหรับ security considerations
- อ่าน `guide/troubleshooting.md` สำหรับปัญหาทั่วไป

## Rules

- ใช้ `bun add nitropack` สำหรับ installation
- ใช้ `bun add -D @types/node` สำหรับ Node.js types
- รองรับทุก runtime (Node.js, Bun, Deno, Edge)
- ใช้ backticks สำหรับ `defineEventHandler()`, `useStorage()`, commands
- ใช้ code blocks สำหรับ server examples
- ใช้ ansi markdown diagrams สำหรับ flow และ architecture
- เขียน code ที่ platform-agnostic เสมอ
- ใช้ storage abstraction สำหรับ data persistence
- หลีกเลี่ยง runtime-specific APIs
- ใช้ serverless deployment presets เมื่อเป็นไปได้
- ใช้ edge functions สำหรับ low-latency responses
- หลีกเลี่ยง long-running processes

## Expected Outcome

- Server applications ที่ platform-agnostic
- Code ที่ deploy ได้ทุกที่
- Performance ที่ optimized สำหรับ serverless
- Integration ที่ smooth กับ frameworks อื่นๆ
