# tool-github-actions

## Overview

แนวทางการใช้งาน GitHub Actions สำหรับ CI/CD


## When to use



## Skills Related



## References


## What is GitHub Actions?

GitHub Actions เป็น CI/CD platform ที่ช่วย automate workflows ภายใน GitHub

## File Structure

| Folder | Description |
|--------|-------------|
| guide/ | Guides และ tutorials สำหรับการใช้งาน |
| references/ | References และ links ภายนอก (CLI, configuration, API) |

## Quick Start

```yaml
name: CI

on: [push, pull_request]

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - run: npm install
      - run: npm test
```

## Core Concepts

| Concept | Description |
|---------|-------------|
| **Workflow** | ไฟล์ YAML ที่กำหนด automation |
| **Job** | กลุ่มของ steps ที่รันบน runner |
| **Step** | งานเดียวที่รัน command หรือ action |
| **Action** | reusable unit ของ code |
| **Runner** | server ที่รัน jobs |

## Guide Files

| File | Description |
|------|-------------|
| [guide/installation.md](guide/installation.md) | วิธีติดตั้ง GitHub Actions |
| [guide/quick-start.md](guide/quick-start.md) | เริ่มต้นใช้งาน GitHub Actions |
| [guide/key-concept.md](guide/key-concept.md) | แนวคิดหลักและหลักการทำงาน |
| [guide/how-it-works.md](guide/how-it-works.md) | วิธีการทำงานของ GitHub Actions |
| [guide/features.md](guide/features.md) | Features ทั้งหมดของ GitHub Actions |
| [guide/configuration.md](guide/configuration.md) | การตั้งค่า GitHub Actions |
| [guide/best-practices.md](guide/best-practices.md) | แนวทางปฏิบัติที่ดี |

## Reference Files

| Folder | Files |
|--------|-------|
| [references/cli.md](references/cli.md) | CLI commands reference |
| [references/configuration.md](references/configuration.md) | Configuration options |
| [api.md](references/api.md) | Programmatic API |

## Version

- Documentation: https://docs.github.com/en/actions
- GitHub: https://github.com/features/actions