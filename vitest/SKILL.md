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

### 1. Installation

ติดตั้ง Vitest ด้วย `bun add -D vitest`

### 2. Setup

อ่าน `guide/installation.md` สำหรับการติดตั้งและ setup

### 3. Quick Start

อ่าน `guide/quick-start.md` สำหรับเริ่มต้นใช้งาน

### 4. Setup Project

ใช้ `workflows/setup-vitest.md` สำหรับ setup project

### 5. Learn Concepts

อ่าน `guide/key-concepts.md` สำหรับแนวคิดหลัก

### 6. Understand Workflow

อ่าน `guide/how-it-works.md` สำหรับวิธีการทำงาน

### 7. Test Suite

อ่าน `key-concepts/test-suite.md` สำหรับ test suite

### 8. Matchers

อ่าน `key-concepts/matchers.md` สำหรับ matchers

### 9. Mocking

อ่าน `key-concepts/mocking.md` สำหรับ mocking

### 10. Test Hooks

อ่าน `key-concepts/hooks.md` สำหรับ test hooks

### 11. Configuration

อ่าน `guide/configuration.md` สำหรับการตั้งค่า
อ่าน `references/configuration.md` สำหรับ configuration reference
ตั้งค่า `vitest.config.ts`

### 12. Features

อ่าน `guide/features.md` สำหรับ features ที่มี

### 13. Write Tests

อ่าน `workflows/write-test.md` สำหรับการเขียน tests

### 14. Mock Dependencies

ใช้ `workflows/mock-dependencies.md` สำหรับ mocking

### 15. Best Practices

อ่าน `guide/best-practices.md` สำหรับ best practices

### 16. Test Isolation

อ่าน `principles/test-isolation.md` สำหรับ test isolation

### 17. AAA Pattern

อ่าน `principles/arrange-act-assert.md` สำหรับ AAA pattern

### 18. Test Naming

อ่าน `principles/test-naming.md` สำหรับ test naming

### 19. Single Responsibility

อ่าน `principles/single-responsibility.md` สำหรับ single responsibility

### 20. Integration

อ่าน `guide/integration.md` สำหรับ framework integration

### 21. Architecture

อ่าน `guide/architecture.md` สำหรับ system architecture

### 22. Project Structure

อ่าน `guide/structure.md` สำหรับ project structure

### 23. Testing Strategies

อ่าน `guide/testing.md` สำหรับ testing strategies

### 24. Migration

อ่าน `guide/migration.md` สำหรับ migration จาก test frameworks อื่น

### 25. Ecosystem

อ่าน `guide/ecosystem.md` สำหรับ ecosystem และ plugins

### 26. Security

อ่าน `guide/security.md` สำหรับ security considerations

### 27. Troubleshooting

อ่าน `guide/troubleshooting.md` สำหรับปัญหาทั่วไป

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
