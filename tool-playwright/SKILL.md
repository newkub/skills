# tool-playwright

แนวทางการใช้งาน Playwright - End-to-end testing สำหรับ web applications

## Overview

Playwright เป็น end-to-end testing framework ที่รองรับ Chromium, Firefox, และ WebKit ใช้สำหรับ test web applications, generate code, debug และทำ automation รองรับ auto-waiting, network interception, และ multi-browser testing

## File Structure

```
tool-playwright/
├── SKILL.md
├── guide/
│   ├── key-concept.md
│   ├── how-it-works.md
│   ├── features.md
│   ├── installation.md
│   ├── configuration.md
│   ├── quick-start.md
│   └── best-practices.md
└── references/
    ├── website.md
    ├── cli.md
    ├── configuration.md
    └── api.md
```

## Content Summary

| Folder | File | Description |
|--------|------|-------------|
| **Guide** | key-concept.md | แนวคิดหลัก - Locators, Assertions |
| **Guide** | how-it-works.md | การทำงาน - Browser context, Page |
| **Guide** | features.md | ฟีเจอร์ทั้งหมด - Auto-waiting, Tracing |
| **Guide** | installation.md | การติดตั้ง - browsers, dependencies |
| **Guide** | configuration.md | การตั้งค่า - playwright.config.ts |
| **Guide** | quick-start.md | คู่มือเริ่มต้นใช้งาน |
| **Guide** | best-practices.md | แนวทางปฏิบัติที่ดี |
| **Reference** | website.md | Official links และ resources |
| **Reference** | cli.md | CLI commands |
| **Reference** | configuration.md | Configuration options reference |
| **Reference** | api.md | API reference |

## Quick Start

```bash
# Install
npm init playwright@latest

# Install browsers
npx playwright install --with-deps

# Run tests
npx playwright test

# UI mode
npx playwright test --ui

# Debug
npx playwright test --debug
```

## Key Features

| Feature | Description |
|---------|-------------|
| **Multi-browser** | Chromium, Firefox, WebKit |
| **Auto-waiting** | Automatic waits for elements |
| **Network Interception** | Mock API requests |
| **Mobile Testing** | Emulate mobile devices |
| **Trace Viewer** | Debug with traces |
| **Codegen** | Generate tests |

## Usage Order

1. **Start**: `guide/installation.md` → `guide/key-concept.md`
2. **Learn**: `guide/how-it-works.md` → `guide/features.md`
3. **Configure**: `guide/configuration.md`
4. **Reference**: `references/cli.md` → `references/api.md`
5. **Best Practices**: `guide/best-practices.md`