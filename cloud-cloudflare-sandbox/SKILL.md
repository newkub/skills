# Cloudflare Sandbox

Cloudflare Sandbox เป็น environment สำหรับทดสอบและพัฒนา Cloudflare Workers, Pages และ services อื่นๆ ใน isolated environment ก่อน deploy ไป production

## Directory Structure

```text
cloud-cloudflare-sandbox/
├── guide/
│   ├── key-concept.md
│   ├── how-it-works.md
│   ├── features.md
│   ├── installation.md
│   ├── configuration.md
│   ├── quick-start.md
│   └── best-practices.md
├── references/
│   ├── website.md
│   └── configuration.md
└── SKILL.md
```

## File Categories

| Folder | Description |
|--------|-------------|
| **guide/** | คู่มือการใช้งานและ best practices |
| **references/** | เอกสารอ้างอิง configuration |

## คุณสมบัติหลัก

- **Isolated Environment**: ไม่กระทบ production
- **Local Development**: Dev server สำหรับ Workers
- **Wrangler CLI**: เครื่องมือ command-line
- **Mock Services**: จำลอง KV, R2, D1 ได้ local
- **Preview URLs**: แชร์ preview ให้ team
- **Playwright Testing**: Integrated testing
- **Secrets Management**: จัดการ environment variables

## เมื่อใดควรใช้

- ต้องการทดสอบ Workers ก่อน deploy
- ต้องการ dev แบบ local โดยไม่ต้อง internet
- ต้องการ mock external services
- ต้องการ preview code ให้ stakeholders
- ต้องการ integrated testing

## ลิงก์อ้างอิง

- [Wrangler CLI](https://developers.cloudflare.com/workers/wrangler/)
- [Local Dev](https://developers.cloudflare.com/workers/local-development/)
- [Testing](https://developers.cloudflare.com/workers/testing/)
- [Playground](https://workers.cloudflare.com/playground)