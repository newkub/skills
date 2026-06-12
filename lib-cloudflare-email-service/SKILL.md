---
name: lib-cloudflare-email-service
description: Cloudflare Email Routing and Email Security services for handling incoming and outgoing emails. Load when implementing email routing, forwarding, filtering, security rules, DKIM/SPF/DMARC setup, or email-to-worker integrations. Covers Email Routing API, security rules, address masking, and integration with Workers. Biases towards retrieval from Cloudflare docs over pre-trained knowledge.
---

## When to use

- เมื่อต้องการตั้งค่า Email Routing บน Cloudflare
- เมื่อต้องการ forward emails ไปยัง external addresses
- เมื่อต้องการ filter และ process emails ด้วย Workers
- เมื่อต้องการตั้งค่า email security rules
- เมื่อต้องการตั้งค่า DKIM, SPF, DMARC
- เมื่อต้องการ address masking หรือ email aliases
- เมื่อต้องการ integrate email กับ Cloudflare Workers

## Skills Related

- `cloud-cloudflare` - Cloudflare platform and services
- `tool-wrangler` - Cloudflare Workers CLI tool
- `lang-typescript` - TypeScript programming language

## โครงสร้าง Directory

โครงสร้างโฟลเดอร์สำหรับ Library Skills

```
lib-cloudflare-email-service/
├── SKILL.md                      # ไฟล์ index หลัก
├── guide/                        # เนื้อหาแนะนำและ best practices
├── key-concepts/                 # แนวคิดสำคัญ (optional)
├── principles/                   # หลักการ (optional)
├── references/                   # เอกสารอ้างอิง
├── workflows/                    # Workflows สำหรับ automation
├── templates/                    # Templates สำหรับเริ่มต้น (optional)
├── scripts/                      # Scripts สำหรับ automation (optional)
└── .devin/                       # Rules และ configurations
    ├── goal.md                  # เป้าหมายของ skill
    ├── scope.md                 # Scope และ execute steps
    ├── execute.md               # Execute steps ทั้งหมด
    ├── expected.md              # Expected outcome
    ├── rules/
    │   ├── always-on/           # Structure files ที่ต้องมีเสมอ
    │   │   └── structure-lib.md
    │   ├── glob/                # Files ที่ใช้ glob patterns
    │   └── model_decision/      # Template files สำหรับ model decision
    └── workflows/               # Workflow files สำหรับ task automation
```

## หมวดหมู่ไฟล์

| Topic | Docs URL | Use for |
|-------|----------|---------|
| Email Routing overview | [Email Routing](https://developers.cloudflare.com/email-routing/) | Setup, configuration, concepts |
| Getting started | [Quick start](https://developers.cloudflare.com/email-routing/get-started/) | First email routing setup |
| Rules | [Routing rules](https://developers.cloudflare.com/email-routing/configuration/rules/) | Forwarding, catch-all, custom rules |
| Security | [Email security](https://developers.cloudflare.com/email-routing/security/) | DKIM, SPF, DMARC, security rules |
| API | [Email Routing API](https://developers.cloudflare.com/api/resources/email-routing/) | Programmatic management |
| Workers integration | [Email with Workers](https://developers.cloudflare.com/email-routing/email-with-workers/) | Process emails with Workers |
| Address masking | [Address masking](https://developers.cloudflare.com/email-routing/address-masking/) | Privacy-focused email aliases |

## หมวดหมู่ไฟล์

### guide/

| No | File | Description |
|----|------|-------------|
| 1 | installation.md | Installation and setup of Email Routing |
| 2 | quick-start.md | Quick start guide for first email routing |
| 3 | configuration.md | DNS configuration and routing setup |
| 4 | key-concept.md | Core concepts overview |
| 5 | how-it-works.md | How Email Routing works internally |
| 6 | features.md | Available features and capabilities |
| 7 | architecture.md | System architecture and components |
| 8 | best-practices.md | Development best practices |
| 9 | integration.md | Integration with Workers and other services |
| 10 | migration.md | Migration from other email providers |
| 11 | patterns.md | Common patterns and recipes |
| 12 | performance.md | Performance optimization |
| 13 | security.md | Security considerations |
| 14 | structure.md | Project structure and organization |
| 15 | testing.md | Testing strategies |
| 16 | troubleshooting.md | Common issues and solutions |
| 17 | ecosystem.md | Related tools and services |

### key-concepts/

| No | File | Description |
|----|------|-------------|
| 1 | email-routing.md | Email routing fundamentals |
| 2 | dns-records.md | DNS records for email (MX, TXT, CNAME) |
| 3 | security-protocols.md | DKIM, SPF, DMARC protocols |

### principles/

| No | File | Description |
|----|------|-------------|
| 1 | email-hygiene.md | Email hygiene and deliverability principles |
| 2 | privacy-first.md | Privacy-first email handling |

### references/

| No | File | Description |
|----|------|-------------|
| 1 | api.md | Complete API documentation |
| 2 | website.md | Official documentation links |
| 3 | sitemap.md | Documentation sitemap |
| 4 | configuration.md | Configuration reference |
| 5 | rules.md | Routing rules reference |
| 6 | security.md | Security features reference |
| 7 | workers-integration.md | Workers integration reference |
