# tool-turborepo

## Overview

Turborepo เป็น high-performance build system สำหรับ JavaScript และ TypeScript monorepos ที่พัฒนาโดย Vercel ช่วย optimize local และ CI workflows ด้วย intelligent caching และ task scheduling

## Content Summary

| Folder | File | Description |
|--------|------|-------------|
| **guide/** | [key-concept.md](guide/key-concept.md) | แนวคิดหลักและการทำงาน |
| | [how-it-works.md](guide/how-it-works.md) | สถาปัตยกรรมและ workflow |
| | [features.md](guide/features.md) | ฟีเจอร์หลักที่สำคัญ |
| | [installation.md](guide/installation.md) | การติดตั้งและข้อกำหนด |
| | [configuration.md](guide/configuration.md) | การตั้งค่า turbo.json |
| | [quick-start.md](guide/quick-start.md) | เริ่มต้นใช้งานอย่างรวดเร็ว |
| | [best-practices.md](guide/best-practices.md) | แนวทางปฏิบัติที่ดี |
| **references/** | [website.md](references/website.md) | เว็บไซต์และเอกสารอย่างเป็นทางการ |
| | [cli.md](references/cli.md) | คำสั่ง CLI สำหรับ Turborepo |
| | [configuration.md](references/configuration.md) | ตัวเลือก configuration ทั้งหมด |
| | [api.md](references/api.md) | Remote cache และ API options |

## Quick Reference

```bash
# ติดตั้ง Turborepo
npm install -g turbo

# Run tasks
turbo run build

# Dry run
turbo run build --dry

# Login to remote cache
turbo login

# Link repository
turbo link
```

## Key Concepts

| Concept | คำอธิบาย |
|---------|----------|
| **Pipeline** | กำหนด task dependencies และ execution order |
| **Remote Cache** | Share build artifacts ระหว่างเครื่องและ CI |
| **Task Graph** | DAG-based execution สำหรับ tasks |
| **Framework Inference** | Auto-detect framework-specific settings |
| **Environment Modes** | Strict/Louse mode สำหรับ env variables |

## File Structure

```
tool-turborepo/
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