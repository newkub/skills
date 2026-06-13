---
title: Svelte
description: แนวทางการพัฒนา Svelte ตาม best practices สำหรับ compiler-based JavaScript framework ที่มี reactive declarations, stores และ no virtual DOM
auto_execution_mode: 3
---

## Goal

ใช้ Svelte สร้าง web applications ด้วย compiler-based framework, reactive declarations, stores, และ no virtual DOM

## Scope

ใช้สำหรับสร้าง UI และ web applications ด้วย Svelte framework

## โครงสร้าง Directory

```
svelte/
├── SKILL.md
├── guide/
│   ├── installation.md
│   ├── quick-start.md
│   ├── key-concept.md
│   ├── how-it-works.md
│   ├── configuration.md
│   ├── features.md
│   ├── patterns.md
│   ├── best-practices.md
│   ├── integration.md
│   ├── architecture.md
│   ├── structure.md
│   ├── performance.md
│   ├── security.md
│   ├── testing.md
│   ├── troubleshooting.md
│   ├── migration.md
│   └── ecosystem.md
├── key-concepts/
│   ├── reactivity.md
│   ├── components.md
│   ├── stores.md
│   ├── lifecycle.md
│   └── compilation.md
├── principles/
│   ├── reactive-programming.md
│   ├── component-design.md
│   ├── performance-first.md
│   └── type-safety.md
├── references/
│   ├── api.md
│   ├── cli.md
│   ├── configuration.md
│   ├── sitemap.md
│   └── website.md
└── workflows/
    ├── setup-svelte.md
    ├── create-component.md
    ├── use-stores.md
    └── migrate-to-svelte.md
```

## หมวดหมู่ไฟล์

- **SKILL.md** - Index file และจุดเริ่มต้นของ skill
- **guide/** - คู่มือการใช้งาน, installation, configuration, best practices
- **key-concepts/** - แนวคิดสำคัญของ Svelte (reactivity, components, stores, lifecycle, compilation)
- **principles/** - หลักการพัฒนา (reactive programming, component design, performance, type safety)
- **references/** - เอกสารอ้างอิง (API, CLI, configuration)
- **workflows/** - Workflows สำหรับ automation (setup, create component, use stores, migration)

## Execute

### 1. ติดตั้งและ Setup

- ติดตั้ง Svelte ด้วย `bun add svelte`
- อ่าน `guide/installation.md` สำหรับการติดตั้งและ setup
- อ่าน `guide/quick-start.md` สำหรับเริ่มต้นใช้งาน
- ใช้ `workflows/setup-svelte.md` สำหรับ setup project

### 2. เรียนรู้พื้นฐาน

- อ่าน `guide/key-concept.md` สำหรับแนวคิดหลัก
- อ่าน `guide/how-it-works.md` สำหรับวิธีการทำงาน
- อ่าน `key-concepts/reactivity.md` สำหรับ reactivity system
- อ่าน `key-concepts/components.md` สำหรับ component architecture
- อ่าน `key-concepts/stores.md` สำหรับ state management
- อ่าน `key-concepts/lifecycle.md` สำหรับ component lifecycle
- อ่าน `key-concepts/compilation.md` สำหรับ compilation process

### 3. ตั้งค่าและ Configuration

- อ่าน `guide/configuration.md` สำหรับการตั้งค่า
- อ่าน `references/configuration.md` สำหรับ configuration reference
- ตั้งค่า Svelte configuration

### 4. ใช้งาน Features และ Patterns

- อ่าน `guide/features.md` สำหรับ features ที่มี
- อ่าน `guide/patterns.md` สำหรับ patterns ทั่วไป
- ใช้ `workflows/create-component.md` สำหรับสร้าง components

### 5. ประยุกต์ใช้หลักการ

- อ่าน `principles/reactive-programming.md` สำหรับ reactive programming
- อ่าน `principles/component-design.md` สำหรับ component design
- ใช้ `workflows/use-stores.md` สำหรับ state management

### 6. Best Practices และ Advanced

- อ่าน `guide/best-practices.md` สำหรับ best practices
- อ่าน `guide/integration.md` สำหรับ framework integration
- อ่าน `guide/architecture.md` สำหรับ system architecture
- อ่าน `guide/structure.md` สำหรับ project structure
- อ่าน `guide/performance.md` สำหรับ performance optimization
- อ่าน `guide/security.md` สำหรับ security best practices
- อ่าน `guide/testing.md` สำหรับ testing

### 7. Troubleshooting และ Migration

- อ่าน `guide/troubleshooting.md` สำหรับปัญหาทั่วไป
- อ่าน `guide/migration.md` สำหรับ migration guide
- ใช้ `workflows/migrate-to-svelte.md` สำหรับ migration

### 8. References

- อ่าน `references/api.md` สำหรับ API reference
- อ่าน `references/cli.md` สำหรับ CLI commands
- อ่าน `references/sitemap.md` สำหรับ documentation sitemap
- อ่าน `references/website.md` สำหรับ official website

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
