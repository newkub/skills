---
title: Wrangler
description: CLI tool อย่างเป็นทางการสำหรับ Cloudflare Workers ช่วยให้สร้าง, พัฒนา, deploy และจัดการ Workers, KV, R2, D1
auto_execution_mode: 3
---

## When to use

ใช้ skill นี้เมื่อต้องการ:
- สร้างและ deploy Cloudflare Workers
- จัดการ KV, R2, D1, Queues
- Edge development บน Cloudflare's network
- Serverless functions และ edge computing

## Skills Related

- `/cloudflare` - Cloudflare platform
- `/follow-wrangler-cli` - Wrangler CLI best practices

## References

### guide/

| No | File | Description |
|----|------|-------------|
| 1 | key-concept.md | แนวคิดหลักเกี่ยวกับ Workers และ bindings |
| 2 | how-it-works.md | การทำงานของ Wrangler และ deployment flow |
| 3 | features.md | ฟีเจอร์หลักของ Wrangler |
| 4 | installation.md | การติดตั้งและข้อกำหนด |
| 5 | configuration.md | การตั้งค่า wrangler.toml |
| 6 | quick-start.md | เริ่มต้นใช้งานอย่างรวดเร็ว |
| 7 | best-practices.md | แนวทางปฏิบัติที่ดี |

### references/

| No | File | Description |
|----|------|-------------|
| 1 | website.md | เว็บไซต์และเอกสารอย่างเป็นทางการ |
| 2 | cli.md | คำสั่ง CLI สำหรับ Wrangler |
| 3 | configuration.md | ตัวเลือก configuration ทั้งหมด |
| 4 | api.md | Bindings และ API options |

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
