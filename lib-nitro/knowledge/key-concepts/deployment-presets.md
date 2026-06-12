# Deployment Presets

## What are Presets

Presets คือ deployment configurations:
- **Platform-specific** - สำหรับ platforms ต่างๆ
- **Auto-configuration** - ตั้งค่าอัตโนมัติ
- **Optimized** - optimized สำหรับแต่ละ platform

## Available Presets

- **vercel-edge** - Vercel Edge Functions
- **cloudflare** - Cloudflare Workers
- **node** - Node.js servers
- **netlify** - Netlify Functions
- **azure** - Azure Functions

## Using Presets

```typescript
// nitro.config.ts
export default defineNitroConfig({
  preset: 'vercel-edge',
});
```
