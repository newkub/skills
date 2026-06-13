---
title: Vitest
description: Vitest - Next Generation Unit Testing Framework สำหรับ Vite ที่รองรับ TypeScript, HMR, และ Jest-compatible API
auto_execution_mode: 3
---

## Goal

ใช้ Vitest สำหรับ unit testing ด้วย TypeScript support, HMR, และ Jest-compatible API

## Scope

ใช้สำหรับ unit testing ของ Vite projects ด้วย Vitest framework

## โครงสร้าง Directory

```
vitest/
├── SKILL.md
├── guide/
│   ├── installation.md
│   ├── quick-start.md
│   ├── key-concepts.md
│   ├── how-it-works.md
│   ├── configuration.md
│   ├── features.md
│   ├── patterns.md
│   ├── performance.md
│   ├── best-practices.md
│   ├── integration.md
│   ├── architecture.md
│   ├── structure.md
│   ├── testing.md
│   ├── migration.md
│   ├── ecosystem.md
│   ├── security.md
│   └── troubleshooting.md
├── key-concepts/
│   ├── test-suite.md
│   ├── matchers.md
│   ├── mocking.md
│   └── hooks.md
├── principles/
│   ├── test-isolation.md
│   ├── arrange-act-assert.md
│   ├── test-naming.md
│   └── single-responsibility.md
├── references/
│   ├── api.md
│   ├── cli.md
│   ├── configuration.md
│   ├── sitemap.md
│   └── website.md
└── workflows/
    ├── setup-vitest.md
    ├── write-test.md
    └── mock-dependencies.md
```

## หมวดหมู่ไฟล์

- **guide/** - คู่มือการใช้งานและ best practices
- **key-concepts/** - แนวคิดสำคัญของ Vitest
- **principles/** - หลักการในการเขียน tests
- **references/** - เอกสารอ้างอิง API และ configuration
- **workflows/** - workflows สำหรับ automation

## Execute

1. ติดตั้ง Vitest ด้วย `bun add -D vitest`
2. อ่าน `guide/installation.md` สำหรับการติดตั้งและ setup
3. อ่าน `guide/quick-start.md` สำหรับเริ่มต้นใช้งาน
4. ใช้ `workflows/setup-vitest.md` สำหรับ setup project
5. อ่าน `guide/key-concepts.md` สำหรับแนวคิดหลัก
6. อ่าน `guide/how-it-works.md` สำหรับวิธีการทำงาน
7. อ่าน `key-concepts/test-suite.md` สำหรับ test suite
8. อ่าน `key-concepts/matchers.md` สำหรับ matchers
9. อ่าน `key-concepts/mocking.md` สำหรับ mocking
10. อ่าน `key-concepts/hooks.md` สำหรับ test hooks
11. อ่าน `guide/configuration.md` สำหรับการตั้งค่า
12. อ่าน `references/configuration.md` สำหรับ configuration reference
13. ตั้งค่า `vitest.config.ts`
14. อ่าน `guide/features.md` สำหรับ features ที่มี
15. อ่าน `workflows/write-test.md` สำหรับการเขียน tests
16. ใช้ `workflows/mock-dependencies.md` สำหรับ mocking
17. อ่าน `guide/best-practices.md` สำหรับ best practices
18. อ่าน `principles/test-isolation.md` สำหรับ test isolation
19. อ่าน `principles/arrange-act-assert.md` สำหรับ AAA pattern
20. อ่าน `principles/test-naming.md` สำหรับ test naming
21. อ่าน `guide/integration.md` สำหรับ framework integration
22. อ่าน `guide/architecture.md` สำหรับ system architecture
23. อ่าน `guide/structure.md` สำหรับ project structure
24. อ่าน `guide/troubleshooting.md` สำหรับปัญหาทั่วไป

## Rules

- ใช้ `bun add -D vitest` สำหรับ installation
- ใช้ backticks สำหรับ `describe()`, `it()`, `expect()`, commands
- ใช้ code blocks สำหรับ test examples
- ใช้ ansi markdown diagrams สำหรับ flow และ architecture
- ใช้ AAA pattern (Arrange, Act, Assert)
- ใช้ test isolation เสมอ
- ใช้ proper test naming
- ใช้ mocking อย่างเหมาะสม
- ใช้ HMR สำหรับ development

## Expected Outcome

- Tests ที่ comprehensive และ maintainable
- Test isolation ที่ proper
- Development ที่รวดเร็วด้วย HMR
- Integration ที่ smooth กับ Vite
