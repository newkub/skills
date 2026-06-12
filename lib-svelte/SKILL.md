---
title: Svelte
description: แนวทางการพัฒนา Svelte ตาม best practices สำหรับ compiler-based JavaScript framework ที่มี reactive declarations, stores และ no virtual DOM
auto_execution_mode: 3
---

## Goal

ใช้ Svelte สร้าง web applications ด้วย compiler-based framework, reactive declarations, stores, และ no virtual DOM

## Scope

ใช้สำหรับสร้าง UI และ web applications ด้วย Svelte framework

## Execute

- ติดตั้ง Svelte ด้วย `bun add svelte`
- อ่าน `guide/installation.md` สำหรับการติดตั้งและ setup
- อ่าน `guide/quick-start.md` สำหรับเริ่มต้นใช้งาน
- ใช้ `workflows/setup-svelte.md` สำหรับ setup project
- อ่าน `guide/key-concept.md` สำหรับแนวคิดหลัก
- อ่าน `guide/how-it-works.md` สำหรับวิธีการทำงาน
- อ่าน `key-concepts/reactivity.md` สำหรับ reactivity system
- อ่าน `key-concepts/components.md` สำหรับ component architecture
- อ่าน `key-concepts/stores.md` สำหรับ state management
- อ่าน `key-concepts/lifecycle.md` สำหรับ component lifecycle
- อ่าน `key-concepts/compilation.md` สำหรับ compilation process
- อ่าน `guide/configuration.md` สำหรับการตั้งค่า
- อ่าน `references/configuration.md` สำหรับ configuration reference
- ตั้งค่า Svelte configuration
- อ่าน `guide/features.md` สำหรับ features ที่มี
- อ่าน `guide/patterns.md` สำหรับ patterns ทั่วไป
- ใช้ `workflows/create-component.md` สำหรับสร้าง components
- อ่าน `principles/reactive-programming.md` สำหรับ reactive programming
- อ่าน `principles/component-design.md` สำหรับ component design
- ใช้ `workflows/use-stores.md` สำหรับ state management
- อ่าน `guide/best-practices.md` สำหรับ best practices
- อ่าน `guide/integration.md` สำหรับ framework integration
- อ่าน `guide/architecture.md` สำหรับ system architecture
- อ่าน `guide/structure.md` สำหรับ project structure
- อ่าน `guide/troubleshooting.md` สำหรับปัญหาทั่วไป

## Rules

- ใช้ `bun add svelte` สำหรับ installation
- ใช้ reactive declarations เสมอ
- ใช้ stores สำหรับ state management
- ใช้ backticks สำหรับ `$state`, `$derived`, commands
- ใช้ code blocks สำหรับ component examples
- ใช้ ansi markdown diagrams สำหรับ flow และ architecture
- หลีกเลี่ยง virtual DOM
- ใช้ compile-time optimization
- ใช้ proper reactivity patterns
- ใช้ component lifecycle อย่างเหมาะสม

## Expected Outcome

- Web applications ที่ performant
- Code ที่ใช้ reactive declarations
- Performance ที่ optimized ด้วย no virtual DOM
- State management ที่ clean ด้วย stores
