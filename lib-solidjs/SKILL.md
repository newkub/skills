---
title: SolidJS
description: แนวทางการพัฒนา SolidJS ตาม best practices สำหรับ declarative JavaScript library ที่มี fine-grained reactivity, no virtual DOM และ compile-time optimization
auto_execution_mode: 3
---

## Goal

ใช้ SolidJS สร้าง reactive applications ด้วย fine-grained reactivity, no virtual DOM, และ compile-time optimization

## Scope

ใช้สำหรับสร้าง UI และ reactive applications ด้วย SolidJS library

## Execute

- ติดตั้ง SolidJS ด้วย `bun add solid-js`
- อ่าน `guide/installation.md` สำหรับการติดตั้งและ setup
- อ่าน `guide/quick-start.md` สำหรับเริ่มต้นใช้งาน
- ใช้ `workflows/setup-solidjs.md` สำหรับ setup project
- อ่าน `guide/key-concept.md` สำหรับแนวคิดหลัก
- อ่าน `guide/how-it-works.md` สำหรับวิธีการทำงาน
- อ่าน `key-concepts/signals.md` สำหรับ signals
- อ่าน `key-concepts/reactivity.md` สำหรับ reactivity model
- อ่าน `key-concepts/components.md` สำหรับ components
- อ่าน `key-concepts/effects.md` สำหรับ effects
- อ่าน `guide/configuration.md` สำหรับการตั้งค่า
- อ่าน `references/configuration.md` สำหรับ configuration reference
- ตั้งค่า SolidJS configuration
- อ่าน `guide/features.md` สำหรับ features ที่มี
- อ่าน `guide/patterns.md` สำหรับ patterns ทั่วไป
- ใช้ fine-grained reactivity
- อ่าน `principles/fine-grained-reactivity.md` สำหรับ fine-grained reactivity
- อ่าน `principles/minimal-runtime.md` สำหรับ minimal runtime
- อ่าน `guide/performance.md` สำหรับ performance optimization
- อ่าน `guide/integration.md` สำหรับ framework integration
- อ่าน `guide/architecture.md` สำหรับ system architecture
- อ่าน `guide/structure.md` สำหรับ project structure
- อ่าน `guide/troubleshooting.md` สำหรับปัญหาทั่วไป

## Rules

- ใช้ `bun add solid-js` สำหรับ installation
- ใช้ signals สำหรับ state management
- ใช้ fine-grained reactivity เสมอ
- ใช้ backticks สำหรับ `createSignal()`, `createEffect()`, commands
- ใช้ code blocks สำหรับ component examples
- ใช้ ansi markdown diagrams สำหรับ flow และ architecture
- หลีกเลี่ยง virtual DOM
- ใช้ compile-time optimization
- ใช้ proper reactivity patterns
- หลีกเลี่ยง unnecessary re-renders

## Expected Outcome

- Reactive applications ที่ performant
- Code ที่ใช้ fine-grained reactivity
- Performance ที่ optimized ด้วย no virtual DOM
- Integration ที่ smooth กับ SolidJS ecosystem
