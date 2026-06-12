---
name: lib-vitest
description: Vitest - Next Generation Unit Testing Framework สำหรับ Vite ที่รองรับ TypeScript, HMR, และ Jest-compatible API
---

## When to use

- เมื่อต้องการ unit testing framework สำหรับ Vite projects
- เมื่อต้องการ TypeScript support และ HMR
- เมื่อต้องการ Jest-compatible API
- เมื่อต้องการ fast test runner

## Skills Related

- `/lib-vite` - Vite build tool
- `/lang-typescript` - TypeScript programming language


## References


## หมวดหมู่ไฟล์

### guide/

| ไฟล์ | คำอธิบาย |
|------|-------------|
| key-concept.md | Core concepts — Test, Suite, Matcher, Mock, Spy |
| how-it-works.md | การทำงานภายใน — Vite Integration, Watch Mode, Pool Workers |
| features.md | Features ทั้งหมด — Test Types, Matchers, Hooks, Mocking |
| installation.md | การติดตั้ง — bun add, Vite, React/Vue |
| configuration.md | การตั้งค่า — vitest.config.ts, environments, coverage |
| quick-start.md | คู่มือเริ่มต้นใช้งาน — สร้าง test แรกใน 5 นาที |
| best-practices.md | Best practices — Test structure, Naming, Organization |
| integration.md | การ integrate — Vue, React, TypeScript, Vite |
| architecture.md | Architecture — Pool System, Watch Mode, Coverage Engine |

### references/

| ไฟล์ | คำอธิบาย |
|------|-------------|
| website.md | Official documentation links และ resources |
| api.md | API reference — describe, it, expect, vi, mocking |
| cli.md | CLI commands และ options |
| configuration.md | Configuration options — test config, environments |

## Key Concepts Summary

| Concept | Description |
|---------|-------------|
| **Test File** | ไฟล์ที่มี `.test.ts` หรือ `.spec.ts` suffix |
| **describe** | จัดกลุ่ม tests เป็น test suite |
| **it/test** | สร้าง individual test case |
| **expect** | Assertion function สำหรับตรวจสอบค่า |
| **vi** | Vitest utility functions (mock, spy, stub) |
| **Matchers** | Functions สำหรับเปรียบเทียบค่า |

## Quick Commands

```bash
# Run tests in watch mode
vitest

# Run tests once (CI mode)
vitest run

# Run with coverage
vitest run --coverage

# Run specific file
vitest run src/components/Button.test.ts

# UI mode
vitest --ui
```