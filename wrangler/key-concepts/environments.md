# Environments

Wrangler รองรับ multiple environments สำหรับ staging และ production

## Environment Types

### Production

Environment หลักสำหรับ production deployment

```jsonc
{
  "name": "my-worker",
  "vars": {
    "ENV": "production"
  }
}
```

### Staging/Dev

Environment สำหรับ testing และ development

```jsonc
{
  "name": "my-worker",
  "vars": {
    "ENV": "production"
  },
  "env": {
    "staging": {
      "name": "my-worker-staging",
      "vars": {
        "ENV": "staging"
      }
    },
    "dev": {
      "name": "my-worker-dev",
      "vars": {
        "ENV": "development"
      }
    }
  }
}
```

## Environment-Specific Bindings

แต่ละ environment สามารถมี bindings แยกกัน

```jsonc
{
  "kv_namespaces": [
    { "binding": "CACHE", "id": "prod-id" }
  ],
  "env": {
    "staging": {
      "kv_namespaces": [
        { "binding": "CACHE", "id": "staging-id" }
      ]
    }
  }
}
```

## Deployment

```bash
# Deploy to production
wrangler deploy

# Deploy to staging
wrangler deploy --env staging

# Deploy to dev
wrangler deploy --env dev
```

## Best Practices

- ใช้ staging environment ก่อน production
- แยก bindings ระหว่าง environments
- ใช้ environment variables สำหรับ config
- ตั้งชื่อ environment ให้ชัดเจน
