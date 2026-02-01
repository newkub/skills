---
name: typescript
description: Best practices for TypeScript development including configuration, type safety, build optimizations, and runtime validation
goal: ใช้ TypeScript ตาม best practices
outcome: โค้ด TypeScript มีคุณภาพและ maintainable
---

# TypeScript

## When to Apply

ใช้ Skill นี้เมื่อใช้ TypeScript

- เมื่อตั้งค่า TypeScript project ใหม่
- เมื่อทำงานใน monorepo
- เมื่อต้องการ improve build times
- เมื่อ handle data จาก external sources

## Rules

| Priority | Impact | Reference | Name | Description | Prefix | Condition |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| 1 | `CRITICAL` | [ts-config-project-references.md](./rules/ts-config-project-references.md) | Project References | Use Project References for better dependency management | `ts-config-` | เมื่อใช้ project references |
| 2 | `CRITICAL` | [ts-config-compiler-options.md](./rules/ts-config-compiler-options.md) | Compiler Options | Enable strict compiler options to catch errors early | `ts-config-` | เมื่อตั้งค่า compiler |
| 2 | `CRITICAL` | [ts-config-structure.md](./rules/ts-config-structure.md) | Config Structure | Organize tsconfig files for different environments | `ts-config-` | เมื่อจัดรูป config |
| 2 | `CRITICAL` | [ts-config-include-exclude.md](./rules/ts-config-include-exclude.md) | Include/Exclude | Explicitly define which files to include and exclude | `ts-config-` | เมื่อกำหนด files |
| 2 | `CRITICAL` | [ts-config-monorepo.md](./rules/ts-config-monorepo.md) | Monorepo Config | Configure each package in a monorepo as composite project | `ts-config-` | เมื่อใช้ monorepo |
| 2 | `CRITICAL` | [ts-type-safety-avoid-any.md](./rules/ts-type-safety-avoid-any.md) | Avoid Any | Avoid using the `any` type | `ts-type-` | เมื่อเขียน types |
| 2 | `CRITICAL` | [ts-type-safety-type-guards.md](./rules/ts-type-safety-type-guards.md) | Type Guards | Use type guards for safe type narrowing | `ts-type-` | เมื่อ narrow types |
| 3 | `HIGH` | [ts-runtime-validation-zod.md](./rules/ts-runtime-validation-zod.md) | Runtime Validation | Validate data at runtime using schema libraries like Zod | `ts-runtime-` | เมื่อ validate data |
| 4 | `MEDIUM` | [ts-build-time-incremental.md](./rules/ts-build-time-incremental.md) | Incremental Builds | Enable incremental builds to speed up compilation | `ts-build-` | เมื่อ optimize builds |
| 4 | `MEDIUM` | [ts-build-time-transpilers.md](./rules/ts-build-time-transpilers.md) | Transpilers | Use modern, faster transpilers like `esbuild` or `swc` | `ts-build-` | เมื่อ use transpilers |

## Knowledge

| Reference | Name | Description | Prefix |
| :--- | :--- | :--- | :--- |

## Overview

### Rules

แต่ละไฟล์ Rule ประกอบด้วย:
- เหตุผล (Why)
- ตัวอย่างที่ไม่ดี (Anti-patterns)
- ตัวอย่างที่ดี (Best practices)
- กฎที่ต้องปฏิบัติตาม (Rules)
- ผลกระทบถ้าไม่ทำตาม (Impact)
- เอกสารอ้างอิง (References)

### Knowledge

แต่ละไฟล์ Knowledge ประกอบด้วย:
- Overview: ภาพรวมของ topic
- Key Concepts: concepts สำคัญที่ต้องรู้
- Examples: ตัวอย่างการใช้งาน
- Best Practices: best practices ที่ควรทำตาม
- References: ลิงก์ไปยังแหล่งข้อมูลต้นฉบับ

## How to Use

แต่ละไฟล์ Rule อธิบายถึง:
- เหตุผลที่ต้องทำตามกฎ
- ตัวอย่างที่ไม่ดีและดี
- กฎที่ต้องปฏิบัติตาม
- ผลกระทบถ้าไม่ทำตาม
- เอกสารอ้างอิง

แต่ละไฟล์ Knowledge อธิบายถึง:
- ภาพรวมของ topic
- Concepts สำคัญที่ต้องรู้
- ตัวอย่างการใช้งาน
- Best practices ที่ควรทำตาม
- เอกสารอ้างอิง

## References

- [TypeScript Documentation](https://www.typescriptlang.org/docs/)