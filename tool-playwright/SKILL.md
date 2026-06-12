---
name: tool-playwright
description: แนวทางการใช้งาน Playwright - End-to-end testing สำหรับ web applications
---

# tool-playwright

แนวทางการใช้งาน Playwright - End-to-end testing สำหรับ web applications


## When to use



## Skills Related



## References


## Overview

Playwright เป็น end-to-end testing framework ที่รองรับ Chromium, Firefox, และ WebKit ใช้สำหรับ test web applications, generate code, debug และทำ automation รองรับ auto-waiting, network interception, และ multi-browser testing

## File Structure

```
tool-playwright/
├── SKILL.md
├── 
│   └── guide/
│       ├── key-concept.md
│       ├── how-it-works.md
│       ├── features.md
│       ├── installation.md
│       ├── configuration.md
│       ├── quick-start.md
│       ├── best-practices.md
│       └── integration.md
└── references/
    ├── website.md
    ├── cli.md
    ├── configuration.md
    └── api.md
```

## Content Summary

| Folder | File | Description |
|--------|------|-------------|
| **Knowledge/Guide** | key-concept.md | แนวคิดหลัก - Locators, Assertions |
| **Knowledge/Guide** | how-it-works.md | การทำงาน - Browser context, Page |
| **Knowledge/Guide** | features.md | ฟีเจอร์ทั้งหมด - Auto-waiting, Tracing |
| **Knowledge/Guide** | installation.md | การติดตั้ง - browsers, dependencies |
| **Knowledge/Guide** | configuration.md | การตั้งค่า - playwright.config.ts |
| **Knowledge/Guide** | quick-start.md | คู่มือเริ่มต้นใช้งาน |
| **Knowledge/Guide** | best-practices.md | แนวทางปฏิบัติที่ดี |
| **Knowledge/Guide** | integration.md | การเชื่อมต่อกับ frameworks อื่น |
| **Reference** | website.md | Official links และ resources |
| **Reference** | cli.md | CLI commands |
| **Reference** | configuration.md | Configuration options reference |
| **Reference** | api.md | API reference |

## Quick Start

```bash
# Install
bunx create-playwright

# Install browsers
bunx playwright install --with-deps

# Run tests
bunx playwright test

# UI mode
bunx playwright test --ui

# Debug
bunx playwright test --debug
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