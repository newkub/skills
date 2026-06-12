---
title: Cloudflare Email Service
description: Cloudflare Email Routing and Email Security services for handling incoming and outgoing emails. Load when implementing email routing, forwarding, filtering, security rules, DKIM/SPF/DMARC setup, or email-to-worker integrations. Covers Email Routing API, security rules, address masking, and integration with Workers. Biases towards retrieval from Cloudflare docs over pre-trained knowledge.
auto_execution_mode: 3
---

## Goal

ใช้ Cloudflare Email Service สำหรับจัดการ incoming และ outgoing emails ด้วย Email Routing, Email Security, และ Workers integration

## Scope

ใช้สำหรับ Email Routing, forwarding, filtering, security rules, DKIM/SPF/DMARC setup, และ email-to-worker integrations

## Execute

- ตั้งค่า Email Routing บน Cloudflare dashboard
- อ่าน `guide/installation.md` สำหรับการติดตั้งและ setup
- อ่าน `guide/quick-start.md` สำหรับเริ่มต้นใช้งาน
- อ่าน `guide/key-concept.md` สำหรับแนวคิดหลัก
- อ่าน `guide/how-it-works.md` สำหรับวิธีการทำงาน
- อ่าน `key-concepts/email-routing.md` สำหรับ email routing fundamentals
- อ่าน `key-concepts/dns-records.md` สำหรับ DNS records
- อ่าน `key-concepts/security-protocols.md` สำหรับ DKIM, SPF, DMARC
- อ่าน `guide/configuration.md` สำหรับ DNS configuration
- อ่าน `references/rules.md` สำหรับ routing rules
- อ่าน `references/configuration.md` สำหรับ configuration reference
- อ่าน `guide/security.md` สำหรับ security considerations
- อ่าน `references/security.md` สำหรับ security features
- ตั้งค่า DKIM, SPF, DMARC ตาม best practices
- อ่าน `guide/integration.md` สำหรับ Workers integration
- อ่าน `references/workers-integration.md` สำหรับ integration reference
- อ่าน `guide/architecture.md` สำหรับ system architecture
- อ่าน `references/api.md` สำหรับ API documentation
- อ่าน `guide/patterns.md` สำหรับ patterns ทั่วไป
- ใช้ API สำหรับ programmatic management
- อ่าน `guide/troubleshooting.md` สำหรับปัญหาทั่วไป
- อ่าน `principles/email-hygiene.md` สำหรับ email hygiene
- อ่าน `principles/privacy-first.md` สำหรับ privacy principles

## Rules

- ใช้ Cloudflare dashboard สำหรับ initial setup
- ใช้ API สำหรับ programmatic management
- ตั้งค่า DNS records (MX, TXT, CNAME) อย่างถูกต้อง
- ตั้งค่า DKIM, SPF, DMARC เสมอ
- ใช้ security rules สำหรับ filtering
- ใช้ address masking สำหรับ privacy
- ใช้ backticks สำหรับ API endpoints, commands, file paths
- ใช้ code blocks สำหรับ configuration examples
- ใช้ ansi markdown diagrams สำหรับ flow และ architecture
- ใช้ Workers สำหรับ email processing
- ใช้ caching สำหรับ repeated operations
- หลีกเลี่ยง unnecessary email forwarding

## Expected Outcome

- Email routing ที่ configured อย่างถูกต้อง
- Security ที่ robust ด้วย DKIM/SPF/DMARC
- Integration ที่ smooth กับ Workers
- Email hygiene ที่ดีและ deliverability สูง
