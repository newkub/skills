# Key Concepts

## Workers

Cloudflare Workers คือ serverless functions ที่ทำงานบน Cloudflare's edge network ทั่วโลก ทำให้สามารถ execute code ใกล้กับผู้ใช้มากที่สุด

## Bindings

Bindings คือวิธีเชื่อมต่อ Workers กับ Cloudflare services:

- **KV** - Key-value storage สำหรับ caching และ data ที่เขียนน้อย
- **R2** - Object storage ที่ compatible กับ S3 API
- **D1** - SQLite database สำหรับ relational data
- **Queues** - Message queue สำหรับ async processing
- **Durable Objects** - Stateful coordination สำหรับ real-time apps
- **Vectorize** - Vector database สำหรับ AI/ML applications

## Environments

Wrangler รองรับ multiple environments:
- **Production** - Environment หลัก
- **Staging/Dev** - Environment สำหรับ testing
- แต่ละ environment มี configuration และ bindings แยกกัน

## Configuration

ใช้ `wrangler.jsonc` (recommended) หรือ `wrangler.toml` สำหรับ:
- Worker name และ entry point
- Compatibility date และ flags
- Bindings configuration
- Routes และ custom domains
- Environment variables และ secrets
