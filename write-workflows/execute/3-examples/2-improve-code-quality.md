---
title: Improve Code Quality
description: ปรับปรุงคุณภาพโค้ดให้ดีขึ้นตาม best practices
auto_execution_mode: 3
file-patterns:
  - "**/*.{ts,js,tsx,jsx,vue}"
  - "**/*.json"
  - "**/*.md"
follow:
  skills:
    - "@write-skills"
    - "@typescript"
    - "@javascript"
  workflows:
    - "/validate"
    - "/improve-code-quality"
    - "/optimize-workflows"
  files:
    - "guidelines/code-standards.md"
---

## Improve Code Quality

## Purpose

ปรับปรุงคุณภาพโค้ดให้สอดคล้องกับมาตรฐานและ best practices

## Scope

- ทุกไฟล์ TypeScript/JavaScript
- ไฟล์ configuration (package.json, tsconfig.json)
- ไฟล์ documentation
- การ review code และ refactoring

## Rules

### 1. Code Standards

| รายการ | มาตรฐาน |
|--------|----------|
| **Naming** | camelCase (vars/functions), PascalCase (classes) |
| **Imports** | Grouped: external, internal, relative |
| **Functions** | Pure functions และ single responsibility |
| **Types** | Strict TypeScript, no `any` |

### 2. Performance Rules

| Rule | Description |
|------|-------------|
| **Async/Await** | ใช้ async/await แทน callbacks |
| **Destructuring** | ใช้ destructuring สำหรับ objects/arrays |
| **Constants** | ใช้ `const` แทน `let` เมื่อไม่ต้อง reassign |
| **Early Returns** | ใช้ early returns แทน nested ifs |

### 3. Documentation Standards

| Element | Format |
|---------|--------|
| **Comments** | JSDoc สำหรับ functions |
| **Readme** | มี installation, usage, examples |
| **API Docs** | OpenAPI หรือ TypeDoc |

## Steps

### Phase 1: Code Analysis

1. วิเคราะห์โค้ดปัจจุบันเพื่อหา issues
2. ตรวจสอบ TypeScript types และ interfaces
3. ตรวจสอบ naming conventions

### Phase 2: Refactoring

1. ปรับปรุง function signatures และ types
2. จัดระเบียบ imports และ exports
3. ลด code duplication และ improve reusability

### Phase 3: Performance Optimization

1. ใช้ async/await สำหรับ asynchronous operations
2. ปรับปรุง memory usage และ garbage collection
3. ใช้ destructuring และ modern ES features

## Expected Outcome

| ผลลัพธ์ | คำอธิบาย | วิธีวัดผล |
|--------|----------|------------|
| **Code Improved** | โค้ดมีคุณภาพสูงขึ้น | Run linting tools |
| **Type Safety** | ไม่มี `any` types | TypeScript compiler check |
| **Performance Better** | ประสิทธิภาพดีขึ้น | Performance testing |
| **Documentation Complete** | มี docs ครบถ้วน | Check coverage |

## Reference

- [TypeScript Best Practices](../../../lang-typescript/)
- [JavaScript Standards](../../../lang-javascript/)
- [Code Quality Guide](../../../improve-code-quality/)
- [Performance Optimization](../../../optimize-perf/)
- [JSDoc Documentation](https://jsdoc.app/)
