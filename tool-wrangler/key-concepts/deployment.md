# Deployment

Deployment คือกระบวนการ upload Workers ไปยัง Cloudflare

## Deployment Flow

```
Build → Upload → Configure → Route → Live
```

## Commands

### Deploy to Production

```bash
wrangler deploy
```

### Deploy to Environment

```bash
wrangler deploy --env staging
```

### Dry Run

```bash
wrangler deploy --dry-run
```

## Deployment Options

| Flag | Description |
|------|-------------|
| `--name` | Worker name |
| `--env` | Environment |
| `--dry-run` | Preview without deploying |
| `--assets` | Static assets folder |
| `--triggers` | Cron schedules |
| `--routes` | Custom routes |
| `--domain` | Custom domains |

## Configuration

### Workers.dev

ใช้ subdomain ฟรีจาก Cloudflare

```jsonc
{
  "name": "my-worker",
  "workers_dev": true
}
```

### Custom Domain

ใช้ domain ของคุณเอง

```jsonc
{
  "routes": [
    {
      "pattern": "api.example.com",
      "custom_domain": true
    }
  ]
}
```

### Zone Route

Route ภายใน zone

```jsonc
{
  "routes": [
    {
      "pattern": "api.example.com/*",
      "zone_name": "example.com"
    }
  ]
}
```

## Best Practices

- ทดสอบบน staging ก่อน production
- ใช้ version control
- Monitor logs หลัง deployment
- Implement rollback strategy
- ใช้ environment variables สำหรับ config
