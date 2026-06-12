---
title: Vitest
description: Vitest - Next Generation Unit Testing Framework สำหรับ Vite ที่รองรับ TypeScript, HMR, และ Jest-compatible API
auto_execution_mode: 3
---

## Goal

ใช้ Vitest สำหรับ unit testing ด้วย TypeScript support, HMR, และ Jest-compatible API

## Scope

ใช้สำหรับ unit testing ของ Vite projects ด้วย Vitest framework

## Execute

- ติดตั้ง Vitest ด้วย `bun add -D vitest`
- อ่าน `guide/installation.md` สำหรับการติดตั้งและ setup
- อ่าน `guide/quick-start.md` สำหรับเริ่มต้นใช้งาน
- ใช้ `workflows/setup-vitest.md` สำหรับ setup project
- อ่าน `guide/key-concept.md` สำหรับแนวคิดหลัก
- อ่าน `guide/how-it-works.md` สำหรับวิธีการทำงาน
- อ่าน `key-concepts/test-suite.md` สำหรับ test suite
- อ่าน `key-concepts/matchers.md` สำหรับ matchers
- อ่าน `key-concepts/mocking.md` สำหรับ mocking
- อ่าน `key-concepts/hooks.md` สำหรับ test hooks
- อ่าน `guide/configuration.md` สำหรับการตั้งค่า
- อ่าน `references/configuration.md` สำหรับ configuration reference
- ตั้งค่า `vitest.config.ts`
- อ่าน `guide/features.md` สำหรับ features ที่มี
- อ่าน `workflows/write-test.md` สำหรับการเขียน tests
- ใช้ `workflows/mock-dependencies.md` สำหรับ mocking
- อ่าน `guide/best-practices.md` สำหรับ best practices
- อ่าน `principles/test-isolation.md` สำหรับ test isolation
- อ่าน `principles/arrange-act-assert.md` สำหรับ AAA pattern
- อ่าน `principles/test-naming.md` สำหรับ test naming
- อ่าน `guide/integration.md` สำหรับ framework integration
- อ่าน `guide/architecture.md` สำหรับ system architecture
- อ่าน `guide/structure.md` สำหรับ project structure
- อ่าน `guide/troubleshooting.md` สำหรับปัญหาทั่วไป

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
