# lang-typescript

## Overview

แนวทางการพัฒนา TypeScript ตาม best practices สำหรับ type-safe JavaScript development ที่เน้น type safety, developer experience และ scalability

## โครงสร้าง Directory

```
lang-typescript/
├── SKILL.md
├── guide/
│   ├── key-concept.md
│   ├── how-it-works.md
│   ├── features.md
│   ├── installation.md
│   ├── configuration.md
│   ├── quick-start.md
│   ├── best-practices.md
│   ├── integration.md
│   └── architecture.md
├── key-concepts/
│   ├── type-assertions.md
│   ├── decorators.md
│   ├── declaration-files.md
│   ├── mapped-conditional-types.md
│   ├── generics.md
│   ├── interfaces-vs-types.md
│   └── type-narrowing.md
├── principles/
│   ├── type-safety.md
│   ├── naming-conventions.md
│   ├── error-handling.md
│   ├── testing.md
│   ├── solid-principles.md
│   └── composition-patterns.md
├── workflows/
│   ├── add-type.md
│   ├── create-component.md
│   ├── migrate-js-to-ts.md
│   └── optimize-build.md
└── references/
    └── website.md
```

## หมวดหมู่ไฟล์

### guide/

| ไฟล์ | คำอธิบาย |
|------|---------|
| key-concept.md | แนวคิดหลักของ TypeScript (Type System, Type Inference, Generics) |
| how-it-works.md | วิธีการทำงานของ TypeScript compiler และ type checking |
| features.md | คุณสมบัติหลักของ TypeScript (Types, Interfaces, Enums, Decorators) |
| installation.md | วิธีติดตั้ง TypeScript และ tools ที่เกี่ยวข้อง |
| configuration.md | การตั้งค่า tsconfig.json และ compiler options |
| quick-start.md | เริ่มต้นใช้งาน TypeScript อย่างรวดเร็ว |
| best-practices.md | best practices สำหรับ TypeScript (naming, type safety, patterns) |
| integration.md | การเชื่อมต่อกับ frameworks และ tools |
| architecture.md | สถาปัตยกรรมของ TypeScript projects |

### key-concepts/

| ไฟล์ | คำอธิบาย |
|------|--------|
| type-assertions.md | Type assertions, type guards และ narrowing |
| decorators.md | Experimental decorators สำหรับ classes, methods, properties |
| declaration-files.md | Declaration files (.d.ts) และ module augmentation |
| mapped-conditional-types.md | Mapped types, conditional types และ utility types |
| generics.md | Generic functions, classes, constraints และ use cases |
| interfaces-vs-types.md | เมื่อใช้ interface vs type alias และ best practices |
| type-narrowing.md | Type narrowing techniques และ control flow analysis |

### principles/

| ไฟล์ | คำอธิบาย |
|------|--------|
| type-safety.md | กฏการใช้ types ให้ปลอดภัย (strict mode, type guards) |
| naming-conventions.md | การตั้งชื่อตามมาตรฐาน (PascalCase, camelCase, kebab-case) |
| error-handling.md | การจัดการ error อย่างเหมาะสม (custom errors, result pattern) |
| testing.md | best practices สำหรับเขียน tests (AAA, mocking, coverage) |
| solid-principles.md | SOLID principles ใน TypeScript (SRP, OCP, LSP, ISP, DIP) |
| composition-patterns.md | Composition patterns (function, object, decorator, DI) |

### workflows/

| ไฟล์ | คำอธิบาย |
|------|--------|
| add-type.md | วิธีเพิ่ม type/interface ใหม่ใน project |
| create-component.md | วิธีสร้าง React component ด้วย TypeScript |
| migrate-js-to-ts.md | วิธี migrate จาก JavaScript เป็น TypeScript |
| optimize-build.md | วิธีปรับปรุง TypeScript build performance |

### references/

| ไฟล์ | คำอธิบาย |
|------|--------|
| website.md | ลิงก์ไปยังเว็บไซต์และเอกสารอย่างเป็นทางการ |
| configuration.md | tsconfig.json compiler options และ common configurations |

## When to Use

- Web development (Frontend และ Backend)
- Large-scale JavaScript applications
- API development (REST, GraphQL)
- Full-stack development (Next.js, NestJS)
- Library และ package development
- โปรเจกต์ที่ต้องการ type safety และ maintainability

## Core Features

- **Static Typing**: Compile-time type checking
- **Type Inference**: Automatic type deduction
- **Generics**: Reusable type-safe code
- **Interfaces**: Contract-based design
- **Enums**: Named constant collections
- **Decorators**: Metadata และ behavior modification
- **Union/Intersection Types**: Flexible type composition
- **Utility Types**: Built-in type transformations
