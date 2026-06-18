---
title: Vitest
description: Next Generation Testing Framework สำหรับ Vite ด้วย TypeScript, HMR, Jest-compatible API, และ Browser Mode
auto_execution_mode: 3
related_workflows:
  - /follow-vitest
  - /write-test
  - /run-test
---

## Goal

ใช้ Vitest สำหรับ unit testing ด้วย Vite-native integration, watch mode, Jest-compatible API, และ Browser Mode

## Scope

ใช้สำหรับ unit testing ใน Vite projects, TypeScript projects, และ projects ที่ต้องการ Jest-compatible API หรือ Browser Mode

## โครงสร้าง Directory

```
vitest/
├── SKILL.md
├── guide/
│   ├── installation.md
│   ├── quick-start.md
│   ├── configuration.md
│   ├── features.md
│   ├── browser-mode.md
│   ├── coverage.md
│   ├── mocking.md
│   ├── benchmarking.md
│   ├── in-source-testing.md
│   └── migration.md
├── key-concepts/
│   ├── test-suite.md
│   ├── hooks.md
│   ├── matchers.md
│   ├── fixtures.md
│   └── test-context.md
├── principles/
│   ├── arrange-act-assert.md
│   ├── test-isolation.md
│   └── test-naming.md
├── references/
│   ├── api.md
│   ├── cli.md
│   └── configuration.md
└── workflows/
    ├── setup-vitest.md
    └── write-test.md
```

## Execute

### 1. Install Vitest

ติดตั้ง Vitest ด้วย bun

```bash
bun add -D vitest
```

ต้องการ Vite >=v6.0.0 และ Node >=v20.0.0

### 2. Configure Vitest

ตั้งค่า `vitest.config.ts` หรือใช้ `vite.config.ts` ตาม project requirements

### 3. Learn Fundamentals

เรียนรู้พื้นฐาน Vitest

- อ่าน `guide/quick-start.md` สำหรับเริ่มต้น
- อ่าน `guide/configuration.md` สำหรับการตั้งค่า
- อ่าน `guide/features.md` สำหรับ features หลัก

### 4. Understand Key Concepts

ทำความเข้าใจ key concepts

- อ่าน `key-concepts/test-suite.md` สำหรับ test suite
- อ่าน `key-concepts/hooks.md` สำหรับ test hooks
- อ่าน `key-concepts/matchers.md` สำหรับ matchers
- อ่าน `key-concepts/fixtures.md` สำหรับ fixtures
- อ่าน `key-concepts/test-context.md` สำหรับ test context

### 5. Learn Advanced Features

ศึกษา features ขั้นสูง

- อ่าน `guide/browser-mode.md` สำหรับ Browser Mode
- อ่าน `guide/coverage.md` สำหรับ code coverage
- อ่าน `guide/mocking.md` สำหรับ mocking
- อ่าน `guide/benchmarking.md` สำหรับ benchmarking
- อ่าน `guide/in-source-testing.md` สำหรับ in-source testing

### 6. Use Best Practices

ใช้ best practices ในการเขียน tests

- อ่าน `principles/arrange-act-assert.md` สำหรับ AAA pattern
- อ่าน `principles/test-isolation.md` สำหรับ test isolation
- อ่าน `principles/test-naming.md` สำหรับ test naming

### 7. Write Tests

เขียน tests ด้วย Vitest

- อ่าน `workflows/write-test.md` สำหรับเขียน tests
- อ่าน `workflows/setup-vitest.md` สำหรับ setup

### 8. Run Tests

รัน tests ด้วย Vitest

```bash
bun run test
```

### 9. Migrate from Other Frameworks

Migration จาก test frameworks อื่น

- อ่าน `guide/migration.md` สำหรับ migration

## หมวดหมู่ไฟล์

### Guide

- **Installation** - อ่าน `guide/installation.md` สำหรับการติดตั้ง
- **Quick Start** - อ่าน `guide/quick-start.md` สำหรับเริ่มต้น
- **Configuration** - อ่าน `guide/configuration.md` สำหรับการตั้งค่า
- **Features** - อ่าน `guide/features.md` สำหรับ features หลัก
- **Browser Mode** - อ่าน `guide/browser-mode.md` สำหรับ Browser Mode
- **Coverage** - อ่าน `guide/coverage.md` สำหรับ code coverage
- **Mocking** - อ่าน `guide/mocking.md` สำหรับ mocking
- **Benchmarking** - อ่าน `guide/benchmarking.md` สำหรับ benchmarking
- **In-Source Testing** - อ่าน `guide/in-source-testing.md` สำหรับ in-source testing
- **Migration** - อ่าน `guide/migration.md` สำหรับ migration

### Key Concepts

- **Test Suite** - อ่าน `key-concepts/test-suite.md` สำหรับ test suite
- **Hooks** - อ่าน `key-concepts/hooks.md` สำหรับ test hooks
- **Matchers** - อ่าน `key-concepts/matchers.md` สำหรับ matchers
- **Fixtures** - อ่าน `key-concepts/fixtures.md` สำหรับ fixtures
- **Test Context** - อ่าน `key-concepts/test-context.md` สำหรับ test context

### Principles

- **Arrange-Act-Assert** - อ่าน `principles/arrange-act-assert.md` สำหรับ AAA pattern
- **Test Isolation** - อ่าน `principles/test-isolation.md` สำหรับ test isolation
- **Test Naming** - อ่าน `principles/test-naming.md` สำหรับ test naming

### References

- **API Documentation** - อ่าน `references/api.md` สำหรับ API reference
- **CLI Commands** - อ่าน `references/cli.md` สำหรับ CLI commands
- **Configuration Reference** - อ่าน `references/configuration.md` สำหรับ configuration reference

### Workflows

- **Setup Vitest** - อ่าน `workflows/setup-vitest.md` สำหรับ setup Vitest
- **Write Test** - อ่าน `workflows/write-test.md` สำหรับเขียน tests

## Rules

- ใช้ `bun run test` สำหรับรัน tests (ไม่ใช้ `bun test` เพราะจะรัน Bun test runner)
- ใช้ `describe` สำหรับ grouping tests
- ใช้ `it` หรือ `test` สำหรับ individual tests
- ใช้ `expect` สำหรับ assertions (Jest-compatible)
- ใช้ `vi.mock` สำหรับ mocking modules
- ใช้ `vi.fn` และ `vi.spyOn` สำหรับ mocking functions
- ใช้ `beforeEach` และ `afterEach` สำหรับ setup/teardown
- ใช้ AAA pattern (Arrange-Act-Assert) สำหรับ test structure
- ใช้ descriptive test names
- ใช้ test isolation สำหรับ independent tests
- ใช้ TypeScript สำหรับ type-safe tests
- ใช้ `test.extend` สำหรับ fixtures และ test context
- ใช้ tags สำหรับ test categorization และ filtering
- ใช้ Browser Mode สำหรับ component testing ใน real browser
- ใช้ `vi.stubEnv` และ `vi.stubGlobal` สำหรับ environment mocking
- ใช้ coverage (v8 หรือ istanbul) สำหรับ code coverage
- ใช้ `vitest.config.ts` หรือ `vite.config.ts` สำหรับ configuration
- ใช้ chainable modifiers (.skip, .only, .todo, .concurrent, .each, .runIf, .skipIf) สำหรับ test execution control
- ใช้ `onTestFailed` และ `onTestFinished` สำหรับ fine-grained cleanup
- ใช้ `expect.soft()` สำหรับ soft assertions
- ใช้ `expect.poll()` สำหรับ polling assertions
- ใช้ `expectTypeOf` และ `assertType` สำหรับ type-level assertions
- ใช้ `vi.hoisted()` สำหรับ hoisting variables
- ใช้ `__mocks__` folders สำหรับ automatic mocking
- ใช้ `--ui` flag สำหรับ Vitest UI
- ใช้ `bench()` สำหรับ benchmarking tests

## Expected Outcome

- Tests ที่เขียนด้วย Vitest ตาม best practices
- Test coverage ที่ครอบคลุม
- Mocking ที่ถูกต้อง
- Performance ที่ดีด้วย parallel execution
- Tests ที่ maintainable และ readable
- Browser Mode สำหรับ component testing
- Test Context และ fixtures สำหรับ reusable test logic
- Tags สำหรับ test categorization และ filtering
- Benchmarking tests สำหรับ performance measurement
- In-source testing สำหรับ tests ที่อยู่ใกล้ implementation
- Type-level assertions สำหรับ type safety
- Soft assertions และ polling assertions สำหรับ advanced testing scenarios
