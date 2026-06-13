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

### 1. Install SolidJS

ติดตั้ง SolidJS ด้วย Bun

```bash
bun add solid-js
```

### 2. Learn Key Concepts

อ่านแนวคิดหลักของ SolidJS
- อ่าน `key-concepts/signals.md` สำหรับ signals
- อ่าน `key-concepts/reactivity.md` สำหรับ reactivity model
- อ่าน `key-concepts/components.md` สำหรับ components
- อ่าน `key-concepts/effects.md` สำหรับ effects

### 3. Setup Project

ตั้งค่า project และ configuration
- อ่าน `guide/installation.md` สำหรับการติดตั้งและ setup
- อ่าน `guide/quick-start.md` สำหรับเริ่มต้นใช้งาน
- อ่าน `guide/configuration.md` สำหรับการตั้งค่า
- อ่าน `references/configuration.md` สำหรับ configuration reference
- ตั้งค่า SolidJS configuration

### 4. Learn Patterns

ศึกษา patterns และ best practices
- อ่าน `guide/features.md` สำหรับ features ที่มี
- อ่าน `guide/patterns.md` สำหรับ patterns ทั่วไป
- อ่าน `principles/fine-grained-reactivity.md` สำหรับ fine-grained reactivity
- อ่าน `principles/minimal-runtime.md` สำหรับ minimal runtime

### 5. Optimize Performance

ปรับปรุง performance
- อ่าน `guide/performance.md` สำหรับ performance optimization
- ใช้ fine-grained reactivity
- หลีกเลี่ยง unnecessary re-renders

### 6. Integrate And Deploy

- อ่าน `guide/integration.md` สำหรับ framework integration
- อ่าน `guide/architecture.md` สำหรับ system architecture
- อ่าน `guide/structure.md` สำหรับ project structure
- อ่าน `guide/troubleshooting.md` สำหรับปัญหาทั่วไป

## Rules

### Installation
- ใช้ `bun add solid-js` สำหรับ installation

### Development
- ใช้ signals สำหรับ state management
- ใช้ fine-grained reactivity เสมอ
- ใช้ proper reactivity patterns
- หลีกเลี่ยง unnecessary re-renders

### Code Style
- ใช้ backticks สำหรับ `createSignal()`, `createEffect()`, commands
- ใช้ code blocks สำหรับ component examples
- ใช้ ansi markdown diagrams สำหรับ flow และ architecture

### Performance
- หลีกเลี่ยง virtual DOM
- ใช้ compile-time optimization

## Directory Structure

```
lib-solidjs/
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
│   ├── integration.md
│   ├── architecture.md
│   ├── structure.md
│   └── troubleshooting.md
├── key-concepts/
│   ├── signals.md
│   ├── reactivity.md
│   ├── components.md
│   └── effects.md
├── principles/
│   ├── fine-grained-reactivity.md
│   └── minimal-runtime.md
└── references/
    └── configuration.md
```

## File Categories

| หมวดหมู่ | ไฟล์ | คำอธิบาย |
|-----------|------|-----------|
| Root Files | SKILL.md | Index file สำหรับ SolidJS skill |
| guide/ | installation.md | Installation และ setup |
| guide/ | quick-start.md | เริ่มต้นใช้งาน |
| guide/ | key-concept.md | แนวคิดหลัก |
| guide/ | how-it-works.md | วิธีการทำงาน |
| guide/ | configuration.md | Configuration และ setup |
| guide/ | features.md | Features ที่มี |
| guide/ | patterns.md | Patterns ทั่วไป |
| guide/ | performance.md | Performance optimization |
| guide/ | integration.md | Framework integration |
| guide/ | architecture.md | System architecture |
| guide/ | structure.md | Project structure |
| guide/ | troubleshooting.md | ปัญหาทั่วไป |
| key-concepts/ | signals.md | Signals |
| key-concepts/ | reactivity.md | Reactivity model |
| key-concepts/ | components.md | Components |
| key-concepts/ | effects.md | Effects |
| principles/ | fine-grained-reactivity.md | Fine-grained reactivity |
| principles/ | minimal-runtime.md | Minimal runtime |
| references/ | configuration.md | Configuration reference |

## Expected Outcome

- Reactive applications ที่ performant
- Code ที่ใช้ fine-grained reactivity
- Performance ที่ optimized ด้วย no virtual DOM
- Integration ที่ smooth กับ SolidJS ecosystem
