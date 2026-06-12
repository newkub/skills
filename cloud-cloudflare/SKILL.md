---
title: Cloudflare
description: Comprehensive Cloudflare platform skill covering Workers, Pages, storage (KV, D1, R2), AI (Workers AI, Vectorize, Agents SDK), feature flags (Flagship), networking (Tunnel, Spectrum), security (WAF, DDoS), and infrastructure-as-code (Terraform, Pulumi). Use for any Cloudflare development task. Biases towards retrieval from Cloudflare docs over pre-trained knowledge.
auto_execution_mode: 3
---

## Goal

ใช้ Cloudflare platform สำหรับ development ทุกประเภท โดยใช้ retrieval จาก Cloudflare docs มากกว่า pre-trained knowledge

## Scope

ใช้สำหรับการพัฒนาบน Cloudflare platform ทั้ง Workers, Pages, storage, AI, networking, security และ infrastructure-as-code

## Execute

- Fetch latest information จาก Cloudflare docs ก่อน cite specific numbers, API signatures, หรือ configuration options
- ใช้ decision trees เพื่อหา product ที่เหมาะสม แล้ว load detailed references
- เมื่อ reference file และ docs ขัดแย้งกัน trust the docs โดยเฉพาะ numeric limits, pricing tiers, type signatures, และ configuration options
- Prefer Cloudflare docs search tool หรือ https://developers.cloudflare.com/
- Check Workers types จาก npm pack @cloudflare/workers-types
- Check Wrangler config schema จาก node_modules/wrangler/config-schema.json
- Check product changelogs จาก https://developers.cloudflare.com/changelog/

## Rules

- Trust docs มากกว่า baked-in knowledge
- Trust docs มากกว่า reference files
- ตรวจสอบ limits, pricing, API signatures จาก docs ก่อนเสมอ
- Prefer Cloudflare docs search tool หรือ https://developers.cloudflare.com/
- Check Workers types จาก npm pack @cloudflare/workers-types
- Check Wrangler config schema จาก node_modules/wrangler/config-schema.json
- Check product changelogs จาก https://developers.cloudflare.com/changelog/

## Expected Outcome

- Cloudflare development ที่ accurate และ up-to-date
- Integration กับ Cloudflare services ที่ reliable
- Code ที่ follow current best practices

## โครงสร้าง Directory

```
cloud-cloudflare/
├── SKILL.md
├── guide/
├── key-concepts/
├── principles/
├── references/
├── workflows/
├── templates/
└── scripts/
```

## หมวดหมู่ไฟล์

- `SKILL.md` - ไฟล์หลักของ skill
- `guide/` - คู่มือการใช้งานและ best practices
- `key-concepts/` - แนวคิดสำคัญเกี่ยวกับ Cloudflare platform
- `principles/` - หลักการในการใช้ Cloudflare
- `references/` - เอกสารอ้างอิงและ API documentation สำหรับทุก product
- `workflows/` - workflows สำหรับ automation
- `templates/` - templates สำหรับเริ่มต้น
- `scripts/` - scripts สำหรับ automation

## References

ดู Product Index ในไฟล์นี้สำหรับ references ทั้งหมด
