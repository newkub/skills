---
description: จัดการ bindings สำหรับ Cloudflare services (KV, R2, D1, Queues, etc.)
---

## Goal

สร้างและจัดการ bindings สำหรับ Cloudflare services

## Execute

### KV Namespace

```bash
# สร้าง KV namespace
wrangler kv:namespace create MY_KV

# สร้างสำหรับ environment
wrangler kv:namespace create MY_KV --env staging

# List namespaces
wrangler kv:namespace list
```

เพิ่มใน `wrangler.jsonc`:

```jsonc
{
  "kv_namespaces": [
    {
      "binding": "MY_KV",
      "id": "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
    }
  ]
}
```

### R2 Bucket

```bash
# สร้าง R2 bucket
wrangler r2 bucket create my-bucket

# List buckets
wrangler r2 bucket list

# Delete bucket
wrangler r2 bucket delete my-bucket
```

เพิ่มใน `wrangler.jsonc`:

```jsonc
{
  "r2_buckets": [
    {
      "binding": "BUCKET",
      "bucket_name": "my-bucket"
    }
  ]
}
```

### D1 Database

```bash
# สร้าง D1 database
wrangler d1 create my-db

# Execute query
wrangler d1 execute my-db --command "SELECT * FROM users"

# Export database
wrangler d1 export my-db --output backup.sql
```

เพิ่มใน `wrangler.jsonc`:

```jsonc
{
  "d1_databases": [
    {
      "binding": "DB",
      "database_id": "xxxxxxxx",
      "database_name": "my-db"
    }
  ]
}
```

### Queues

```bash
# สร้าง queue (ผ่าน dashboard)
# เพิ่มใน wrangler.jsonc
```

เพิ่มใน `wrangler.jsonc`:

```jsonc
{
  "queues": [
    {
      "binding": "MY_QUEUE",
      "queue_name": "my-queue"
    }
  ]
}
```

### Secrets

```bash
# สร้าง secret
wrangler secret put API_KEY

# สร้าง secret สำหรับ environment
wrangler secret put API_KEY --env staging

# List secrets (ผ่าน dashboard)
```

## Expected Outcome

- Bindings สร้างและตั้งค่าถูกต้อง
- Services เชื่อมต่อได้
- Secrets จัดการอย่างปลอดภัย
- Configuration อัปเดตใน wrangler.jsonc
