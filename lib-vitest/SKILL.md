# lib-vitest

## Overview

Vitest เป็น Next Generation Unit Testing Framework ที่เข้ากันได้กับ Vite รองรับ TypeScript out-of-the-box, HMR ที่รวดเร็ว, smart watch mode และ Jest-compatible API

## File Structure

| Folder | Description |
|--------|-------------|
| guide/ | Guides และ tutorials สำหรับการใช้งาน |
| references/ | References สำหรับ Website, API, Configuration |

## Guide Files

| File | Description |
|------|-------------|
| key-concept.md | Core concepts — Test, Suite, Matcher, Mock, Spy |
| how-it-works.md | การทำงานภายใน — Vite Integration, Watch Mode, Pool Workers |
| features.md | Features ทั้งหมด — Test Types, Matchers, Hooks, Mocking |
| installation.md | การติดตั้ง — npm/yarn/pnpm, Vite, React/Vue |
| configuration.md | การตั้งค่า — vitest.config.ts, environments, coverage |
| quick-start.md | คู่มือเริ่มต้นใช้งาน — สร้าง test แรกใน 5 นาที |
| best-practices.md | Best practices — Test structure, Naming, Organization |
| integration.md | การ integrate — Vue, React, TypeScript, Vite |
| architecture.md | Architecture — Pool System, Watch Mode, Coverage Engine |

## References Files

| File | Description |
|------|-------------|
| website.md | Official documentation links และ resources |
| api.md | API reference — describe, it, expect, vi, mocking |
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