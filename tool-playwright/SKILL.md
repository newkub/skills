---
name: tool-playwright
description: แนวทางการใช้งาน Playwright - End-to-end testing สำหรับ web applications
---

# tool-playwright

แนวทางการใช้งาน Playwright - End-to-end testing สำหรับ web applications


## When to use



## Skills Related



## referencess


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
└── referencess/
    ├── website.md
    ├── cli.md
    ├── configuration.md
    └── api.md
```

## Content Summary

| Folder | File | Description |
|--------|------|-------------|
| **guide** | key-concept.md | แนวคิดหลัก - Locators, Assertions |
| **guide** | how-it-works.md | การทำงาน - Browser context, Page |
| **guide** | features.md | ฟีเจอร์ทั้งหมด - Auto-waiting, Tracing |
| **guide** | installation.md | การติดตั้ง - browsers, dependencies |
| **guide** | configuration.md | การตั้งค่า - playwright.config.ts |
| **guide** | quick-start.md | คู่มือเริ่มต้นใช้งาน |
| **guide** | best-practices.md | แนวทางปฏิบัติที่ดี |
| **guide** | integration.md | การเชื่อมต่อกับ frameworks อื่น |
| **references** | website.md | Official links และ resources |
| **references** | cli.md | CLI commands |
| **references** | configuration.md | Configuration options references |
| **references** | api.md | API references |

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
4. **references**: `referencess/cli.md` → `referencess/api.md`
5. **Best Practices**: `guide/best-practices.md`
