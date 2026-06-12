---
name: lang-typescript
description: แนวทางการพัฒนา TypeScript ตาม best practices สำหรับ type-safe JavaScript development ที่เน้น type safety, developer experience และ scalability
---

# lang-typescript

## When to use

- Web development (Frontend และ Backend)
- Large-scale JavaScript applications
- API development (REST, GraphQL)
- Full-stack development (Next.js, NestJS)
- Library และ package development
- โปรเจกต์ที่ต้องการ type safety และ maintainability

## Skills Related

- `lang-javascript` - JavaScript base language
- `lib-vue` - Vue.js framework with TypeScript
- `lib-react` - React framework with TypeScript
- `framework-next` - Next.js framework with TypeScript
- `framework-nuxt` - Nuxt.js framework with TypeScript

## โครงสร้าง Directory

โครงสร้างโฟลเดอร์สำหรับ Programming Language Skills

```
lang-typescript/
├── SKILL.md                      # ไฟล์ index หลัก
├── guide/                        # เนื้อหาแนะนำและ best practices
├── key-concepts/                 # แนวคิดสำคัญของภาษา
├── principles/                   # หลักการของภาษา
├── references/                   # เอกสารอ้างอิง
└── workflows/                    # Workflows สำหรับ automation
```

## หมวดหมู่ไฟล์

### guide/

| No | File | Description |
|----|------|-------------|
| 1 | [installation.md](guide/installation.md) | วิธีติดตั้ง TypeScript และ tools ที่เกี่ยวข้อง |
| 2 | [key-concept.md](guide/key-concept.md) | แนวคิดหลักของ TypeScript (Type System, Type Inference, Generics) |
| 3 | [how-it-works.md](guide/how-it-works.md) | วิธีการทำงานของ TypeScript compiler และ type checking |
| 4 | [features.md](guide/features.md) | คุณสมบัติหลักของ TypeScript (Types, Interfaces, Enums, Decorators) |
| 5 | [configuration.md](guide/configuration.md) | การตั้งค่า tsconfig.json และ compiler options |
| 6 | [quick-start.md](guide/quick-start.md) | เริ่มต้นใช้งาน TypeScript อย่างรวดเร็ว |
| 7 | [best-practices.md](guide/best-practices.md) | best practices สำหรับ TypeScript (naming, type safety, patterns) |
| 8 | [integration.md](guide/integration.md) | การเชื่อมต่อกับ frameworks และ tools |
| 9 | [architecture.md](guide/architecture.md) | สถาปัตยกรรมของ TypeScript projects |
| 10 | [troubleshooting.md](guide/troubleshooting.md) | การแก้ปัญหาที่พบบ่อยใน TypeScript |

### key-concepts/

| No | File | Description |
|----|------|-------------|
| 1 | [type-assertions.md](key-concepts/type-assertions.md) | Type assertions, type guards และ narrowing |
| 2 | [decorators.md](key-concepts/decorators.md) | Experimental decorators สำหรับ classes, methods, properties |
| 3 | [declaration-files.md](key-concepts/declaration-files.md) | Declaration files (.d.ts) และ module augmentation |
| 4 | [mapped-conditional-types.md](key-concepts/mapped-conditional-types.md) | Mapped types, conditional types และ utility types |
| 5 | [generics.md](key-concepts/generics.md) | Generic functions, classes, constraints และ use cases |
| 6 | [interfaces-vs-types.md](key-concepts/interfaces-vs-types.md) | เมื่อใช้ interface vs type alias และ best practices |
| 7 | [type-narrowing.md](key-concepts/type-narrowing.md) | Type narrowing techniques และ control flow analysis |

### principles/

| No | File | Description |
|----|------|-------------|
| 1 | [type-safety.md](principles/type-safety.md) | กฏการใช้ types ให้ปลอดภัย (strict mode, type guards) |
| 2 | [naming-conventions.md](principles/naming-conventions.md) | การตั้งชื่อตามมาตรฐาน (PascalCase, camelCase, kebab-case) |
| 3 | [error-handling.md](principles/error-handling.md) | การจัดการ error อย่างเหมาะสม (custom errors, result pattern) |
| 4 | [testing.md](principles/testing.md) | best practices สำหรับเขียน tests (AAA, mocking, coverage) |
| 5 | [solid-principles.md](principles/solid-principles.md) | SOLID principles ใน TypeScript (SRP, OCP, LSP, ISP, DIP) |
| 6 | [composition-patterns.md](principles/composition-patterns.md) | Composition patterns (function, object, decorator, DI) |

### references/

| No | File | Description |
|----|------|-------------|
| 1 | [website.md](references/website.md) | ลิงก์ไปยังเว็บไซต์และเอกสารอย่างเป็นทางการ |
| 2 | [sitemap.md](references/sitemap.md) | แผนผังเอกสารและทรัพยากรที่เกี่ยวข้อง |
| 3 | [api.md](references/api.md) | TypeScript API reference และ compiler API |
| 4 | [cli.md](references/cli.md) | TypeScript CLI commands และ compiler options |
| 5 | [configuration.md](references/configuration.md) | tsconfig.json compiler options และ common configurations |

### workflows/

| No | File | Description |
|----|------|-------------|
| 1 | [add-type.md](workflows/add-type.md) | วิธีเพิ่ม type/interface ใหม่ใน project |
| 2 | [create-component.md](workflows/create-component.md) | วิธีสร้าง React component ด้วย TypeScript |
| 3 | [migrate-js-to-ts.md](workflows/migrate-js-to-ts.md) | วิธี migrate จาก JavaScript เป็น TypeScript |
| 4 | [optimize-build.md](workflows/optimize-build.md) | วิธีปรับปรุง TypeScript build performance |

## Core Features

- **Static Typing**: Compile-time type checking
- **Type Inference**: Automatic type deduction
- **Generics**: Reusable type-safe code
- **Interfaces**: Contract-based design
- **Enums**: Named constant collections
- **Decorators**: Metadata และ behavior modification
- **Union/Intersection Types**: Flexible type composition
- **Utility Types**: Built-in type transformations
