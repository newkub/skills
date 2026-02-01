---
name: playwright
description: Best practices for Playwright E2E testing including setup, configuration, and test patterns
goal: พัฒนา E2E tests ด้วย Playwright ตาม best practices
outcome: E2E test suites ที่มีความน่าเชื่อถือ บำรุงรักษาง่าย และทำงานได้จริง
---

# Playwright

## When to Use

ใช้ Skill นี้เมื่อต้องการพัฒนา E2E tests ด้วย Playwright

- เมื่อสร้าง E2E test suite ใหม่สำหรับ web application
- เมื่อต้องการตั้งค่า Playwright configuration สำหรับ CI/CD
- เมื่อต้องการเขียน tests ที่มีความน่าเชื่อถือและ maintainable
- เมื่อต้องการ integrate Playwright กับ testing frameworks
- เมื่อต้องการ optimize test performance และ parallel execution

## Quick Start

1. ติดตั้ง Playwright ด้วย `npm init playwright@latest`
2. ตั้งค่าโครงสร้าง tests ตาม [1-playwright-project-structure.md](./rules/1-playwright-project-structure.md)
3. ตั้งค่า Playwright configuration ใน `playwright.config.ts` ตาม [2-playwright-configuration.md](./rules/2-playwright-configuration.md)
4. เขียน tests ตาม patterns ใน [3-playwright-test-patterns.md](./rules/3-playwright-test-patterns.md)
5. รัน `npx playwright test` เพื่อทดสอบการทำงาน

## Rules

| Priority | Impact | Reference | Name | Description | Prefix | Condition |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| 1 | `CRITICAL` | [1-playwright-project-structure.md](./rules/1-playwright-project-structure.md) | Project Structure | โครงสร้างโปรเจกต์ Playwright ที่ถูกต้อง | `playwright-` | เมื่อสร้าง project |
| 2 | `HIGH` | [2-playwright-configuration.md](./rules/2-playwright-configuration.md) | Configuration | ตั้งค่า Playwright configuration ให้เหมาะสม | `playwright-` | เมื่อตั้งค่า config |
| 3 | `HIGH` | [3-playwright-test-patterns.md](./rules/3-playwright-test-patterns.md) | Test Patterns | เขียน tests ตาม best practices | `playwright-` | เมื่อเขียน tests |
| 4 | `HIGH` | [4-playwright-page-objects.md](./rules/4-playwright-page-objects.md) | Page Objects | ใช้ Page Object Model สำหรับ maintainability | `playwright-` | เมื่อจัดการ pages |
| 5 | `MEDIUM` | [5-playwright-fixtures.md](./rules/5-playwright-fixtures.md) | Fixtures | สร้างและใช้ fixtures อย่างมีประสิทธิภาพ | `playwright-` | เมื่อใช้ fixtures |

## Knowledge

| Reference | Name | Description | Prefix |
| :--- | :--- | :--- | :--- |
| [core-concepts.md](./knowledge/core-concepts.md) | Core Concepts | ความรู้เกี่ยวกับ concepts หลักของ Playwright | `playwright-` |
| [all-features.md](./knowledge/all-features.md) | All Features | ความรู้เกี่ยวกับฟีเจอร์ทั้งหมดของ Playwright | `playwright-` |
| [best-practices.md](./knowledge/best-practices.md) | Best Practices | best practices สำหรับการใช้ Playwright | `playwright-` |

## Verification

1. ตรวจสอบว่า Playwright ติดตั้งและตั้งค่าถูกต้องด้วย `npx playwright --version`
2. ทดสอบด้วยการรัน `npx playwright test` และตรวจสอบว่า tests ทำงานได้
3. ตรวจสอบว่า test reports สร้างได้ถูกต้องใน `playwright-report`
4. ตรวจสอบว่า CI/CD integration ทำงานได้ถ้ามีการตั้งค่า
