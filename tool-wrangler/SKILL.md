# tool-wrangler

## Overview

Wrangler เป็น CLI tool อย่างเป็นทางการสำหรับ Cloudflare Workers ช่วยให้สามารถสร้าง, พัฒนา, deploy และจัดการ Workers, KV, R2, D1, Queues และ services อื่นๆ บน Cloudflare's edge network

## Content Summary

| Folder | File | Description |
|--------|------|-------------|
| **guide/** | [key-concept.md](guide/key-concept.md) | แนวคิดหลักเกี่ยวกับ Workers และ bindings |
| | [how-it-works.md](guide/how-it-works.md) | การทำงานของ Wrangler และ deployment flow |
| | [features.md](guide/features.md) | ฟีเจอร์หลักของ Wrangler |
| | [installation.md](guide/installation.md) | การติดตั้งและข้อกำหนด |
| | [configuration.md](guide/configuration.md) | การตั้งค่า wrangler.toml |
| | [quick-start.md](guide/quick-start.md) | เริ่มต้นใช้งานอย่างรวดเร็ว |
| | [best-practices.md](guide/best-practices.md) | แนวทางปฏิบัติที่ดี |
| **references/** | [website.md](references/website.md) | เว็บไซต์และเอกสารอย่างเป็นทางการ |
| | [cli.md](references/cli.md) | คำสั่ง CLI สำหรับ Wrangler |
| | [configuration.md](references/configuration.md) | ตัวเลือก configuration ทั้งหมด |
| | [api.md](references/api.md) | Bindings และ API options |

## Quick Reference

```bash
# ติดตั้ง
npm install -D wrangler

# สร้าง project ใหม่
wrangler init my-worker

# Development
wrangler dev

# Deploy
wrangler deploy

# KV operations
wrangler kv:namespace create
wrangler kv:key put
```

## Key Concepts

| Concept | คำอธิบาย |
|---------|----------|
| **Workers** | Serverless functions ที่รันบน Cloudflare's edge |
| **Bindings** | การเชื่อมต่อกับ services เช่น KV, R2, D1 |
| **wrangler.toml** | Configuration file หลัก |
| **Environments** | dev, staging, production configurations |
| **compatibility_date** | กำหนด runtime version |

## File Structure

```
tool-wrangler/
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