---
description: Deploy Cloudflare Workers ไปยัง production หรือ staging environments
---

## Goal

Deploy Workers ไปยัง Cloudflare อย่างมีประสิทธิภาพ

## Execute

### 1. Build

```bash
# Build project (ถ้ามี build script)
bun run build
```

### 2. Deploy to Production

```bash
# Deploy ไปยัง production
wrangler deploy

# Deploy ด้วยชื่อเฉพาะ
wrangler deploy --name my-worker
```

### 3. Deploy to Environment

```bash
# Deploy ไปยัง staging
wrangler deploy --env staging

# Deploy ไปยัง dev
wrangler deploy --env dev
```

### 4. Dry Run

```bash
# Preview deployment โดยไม่ deploy จริง
wrangler deploy --dry-run
```

### 5. Monitor Logs

```bash
# Tail logs หลัง deployment
wrangler tail my-worker

# Tail logs สำหรับ environment
wrangler tail my-worker --env staging
```

## Expected Outcome

- Worker deploy สำเร็จ
- Configuration อัปเดตถูกต้อง
- Bindings เชื่อมต่อได้
- Logs สามารถ monitor ได้
