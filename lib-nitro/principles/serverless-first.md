# Serverless-First Design

## Principle

Nitro ออกแบบมาเพื่อ serverless:
- **Stateless** - applications ควรเป็น stateless
- **Cold Starts** - optimize สำหรับ cold starts
- **Auto-scaling** - ใช้ประโยชน์จาก auto-scaling

## Application

- **Use External Storage** - ใช้ external storage สำหรับ state
- **Minimize Bundle Size** - ลด bundle size สำหรับ faster cold starts
- **Use Caching** - ใช้ caching สำหรับ reduce cold starts
