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

- `lib-vite` - Vite build tool
- `lang-typescript` - TypeScript programming language

## โครงสร้าง Directory

โครงสร้างโฟลเดอร์สำหรับ Library Skills

```
lib-vitest/
├── SKILL.md                      # ไฟล์ index หลัก
├── guide/                        # เนื้อหาแนะนำและ best practices
├── key-concepts/                 # แนวคิดสำคัญ (optional)
├── principles/                   # หลักการ (optional)
├── references/                   # เอกสารอ้างอิง
├── workflows/                    # Workflows สำหรับ automation
├── templates/                    # Templates สำหรับเริ่มต้น (optional)
├── scripts/                      # Scripts สำหรับ automation (optional)
└── .devin/                       # Rules และ configurations
    ├── goal.md                  # เป้าหมายของ skill
    ├── scope.md                 # Scope และ execute steps
    ├── execute.md               # Execute steps ทั้งหมด
    ├── expected.md              # Expected outcome
    ├── rules/
    │   ├── always-on/           # Structure files ที่ต้องมีเสมอ
    │   │   └── structure-lib.md
    │   ├── glob/                # Files ที่ใช้ glob patterns
    │   └── model_decision/      # Template files สำหรับ model decision
    └── workflows/               # Workflow files สำหรับ task automation
```

## หมวดหมู่ไฟล์

### guide/

| No | ไฟล์ | คำอธิบาย |
|----|------|-------------|
| 1 | installation.md | การติดตั้ง — bun add, Vite, React/Vue |
| 2 | quick-start.md | คู่มือเริ่มต้นใช้งาน — สร้าง test แรกใน 5 นาที |
| 3 | key-concepts.md | Core concepts — Test, Suite, Matcher, Mock, Spy |
| 4 | how-it-works.md | การทำงานภายใน — Vite Integration, Watch Mode, Pool Workers |
| 5 | features.md | Features ทั้งหมด — Test Types, Matchers, Hooks, Mocking |
| 6 | configuration.md | การตั้งค่า — vitest.config.ts, environments, coverage |
| 7 | best-practices.md | Best practices — Test structure, Naming, Organization |
| 8 | integration.md | การ integrate — Vue, React, TypeScript, Vite |
| 9 | architecture.md | Architecture — Pool System, Watch Mode, Coverage Engine |
| 10 | structure.md | โครงสร้าง test files และ organization |
| 11 | performance.md | Performance characteristics และ optimization |
| 12 | security.md | Security considerations สำหรับ testing |
| 13 | migration.md | Migration จาก Jest หรือ testing frameworks อื่น |
| 14 | ecosystem.md | Ecosystem และ tools ที่เกี่ยวข้องกับ Vitest |
| 15 | testing.md | Testing strategies และ approaches |
| 16 | patterns.md | Testing patterns ที่ใช้บ่อย |
| 17 | troubleshooting.md | การแก้ปัญหาที่พบบ่อยใน Vitest |

### key-concepts/

| No | ไฟล์ | คำอธิบาย |
|----|------|-------------|
| 1 | test-suite.md | Test และ Test Suite ใน Vitest |
| 2 | matchers.md | Matchers สำหรับ assertions ใน Vitest |
| 3 | mocking.md | Mocking ใน Vitest |
| 4 | hooks.md | Test Hooks ใน Vitest |

### principles/

| No | ไฟล์ | คำอธิบาย |
|----|------|-------------|
| 1 | test-isolation.md | Test Isolation - แต่ละ test ควรเป็นอิสระจากกัน |
| 2 | arrange-act-assert.md | Arrange-Act-Assert Pattern - โครงสร้าง test ที่ชัดเจน |
| 3 | test-naming.md | Test Naming - ตั้งชื่อ test ที่ชัดเจนและอธิบาย behavior |
| 4 | single-responsibility.md | Single Responsibility - แต่ละ test ควร test สิ่งเดียว |

### references/

| No | ไฟล์ | คำอธิบาย |
|----|------|-------------|
| 1 | website.md | Official documentation links และ resources |
| 2 | sitemap.md | Sitemap ของ Vitest documentation |
| 3 | api.md | API reference — describe, it, expect, vi, mocking |
| 4 | cli.md | CLI commands และ options |
| 5 | configuration.md | Configuration options — test config, environments |

### workflows/

| No | ไฟล์ | คำอธิบาย |
|----|------|-------------|
| 1 | setup-vitest.md | ติดตั้งและตั้งค่า Vitest ใน project |
| 2 | write-test.md | เขียน unit tests ด้วย Vitest |
| 3 | mock-dependencies.md | Mock dependencies สำหรับ unit testing |

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