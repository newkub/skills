---
title: Tool Playwright
description: แนวทางการใช้งาน Playwright - End-to-end testing สำหรับ web applications
auto_execution_mode: 3
---

## Goal

ใช้งาน Playwright สำหรับ end-to-end testing ของ web applications

## Scope

ใช้สำหรับ E2E testing สำหรับ web applications, multi-browser testing, auto-waiting และ reliability, network interception, และ mobile testing

## โครงสร้าง Directory

```
playwright/
├── SKILL.md
├── guide/
│   ├── installation.md
│   ├── quick-start.md
│   └── configuration.md
├── key-concepts/
│   ├── assertions.md
│   └── locators.md
├── principles/
│   ├── debugging.md
│   └── test-organization.md
├── references/
│   ├── api.md
│   ├── cli.md
│   ├── configuration.md
│   └── website.md
└── workflows/
    ├── setup-playwright.md
    └── run-tests.md
```

## Execute

- ติดตั้ง Playwright
- ติดตั้ง browsers
- รัน tests
- รันใน UI mode
- อ่าน `guide/installation.md` สำหรับการติดตั้งและ setup
- อ่าน `guide/quick-start.md` สำหรับเริ่มต้นใช้งาน
- อ่าน `guide/configuration.md` สำหรับการตั้งค่า
- อ่าน `key-concepts/assertions.md` สำหรับ assertions
- อ่าน `key-concepts/locators.md` สำหรับ locators
- อ่าน `principles/debugging.md` สำหรับ debugging
- อ่าน `principles/test-organization.md` สำหรับการจัดระเบียบ tests
- อ่าน `references/api.md` สำหรับ API documentation
- อ่าน `references/cli.md` สำหรับ CLI commands
- อ่าน `references/configuration.md` สำหรับ configuration options
- อ่าน `references/website.md` สำหรับ official website
- อ่าน `workflows/setup-playwright.md` สำหรับการ setup
- อ่าน `workflows/run-tests.md` สำหรับการรัน tests

## Rules

- ใช้ `bunx create-playwright` สำหรับ installation
- ใช้ `bunx playwright install --with-deps` สำหรับ browsers
- ใช้ `bunx playwright test` สำหรับ run tests
- ใช้ `bunx playwright test --ui` สำหรับ UI mode
- ใช้ backticks สำหรับ commands
- ใช้ code blocks สำหรับ examples
- ใช้ ansi markdown diagrams สำหรับ flow และ architecture

## Expected Outcome

- E2E tests ที่ reliable
- Multi-browser testing ที่ comprehensive
- Auto-waiting ที่ smart
- Network interception ที่ powerful
- Test organization ที่เป็นระบบ
- Debugging ที่มีประสิทธิภาพ
