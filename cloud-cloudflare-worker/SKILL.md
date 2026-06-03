# Cloudflare Workers

Cloudflare Workers เป็น serverless execution environment ที่ทำงานบน Cloudflare's global network ให้บริการ deploy และ run code ใกล้กับ users มากที่สุดเพื่อลด latency สูงสุด

## Directory Structure

```text
cloud-cloudflare-worker/
├── guide/
│   ├── key-concept.md
│   ├── how-it-works.md
│   ├── features.md
│   ├── installation.md
│   ├── configuration.md
│   ├── quick-start.md
│   ├── best-practices.md
│   ├── integration.md
│   └── architecture.md
├── references/
│   ├── website.md
│   ├── api.md
│   ├── cli.md
│   └── configuration.md
└── SKILL.md
```

## File Categories

| Folder | Description |
|--------|-------------|
| **guide/** | คู่มือการใช้งานและ best practices |
| **references/** | เอกสารอ้างอิง API, CLI และ configuration |

## คุณสมบัติหลัก

- **Edge Computing**: รัน code ใกล้ users มากที่สุด
- **Global Network**: 300+ data centers ทั่วโลก
- **Instant Scale**: Scale ได้อัตโนมัติโดยไม่ต้อง provision
- **Low Latency**: Cold start น้อยกว่า 5ms
- **V8 Isolates**: Lightweight isolates แทน containers
- **KV Storage**: Global key-value storage
- **Durable Objects**: Stateful serverless
- **Workers AI**: AI inference at the edge
- **Bindings**: เชื่อมต่อกับ services ต่างๆ (R2, D1, etc.)

## เมื่อใดควรใช้

- ต้องการ deploy API endpoints ที่ทำงานเร็ว
- ต้องการ edge functions สำหรับ A/B testing, redirects
- ต้องการ SSR หรือ edge caching
- ต้องการ AI inference at the edge
- ต้องการ full-stack applications

## ลิงก์อ้างอิง

- [หน้าเว็บหลัก](https://workers.cloudflare.com)
- [เอกสาร](https://developers.cloudflare.com/workers/)
- [Dashboard](https://dash.cloudflare.com)
- [Playground](https://workers.cloudflare.com/playground)
- [Templates](https://developers.cloudflare.com/pagesFramework focus on creating detailed, accurate, and actionable guides for developers.workers/templates/)