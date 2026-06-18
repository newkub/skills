# Configuration

## Configuration File

Wrangler supports two formats:

### wrangler.jsonc (Recommended)

```jsonc
{
  "$schema": "./node_modules/wrangler/config-schema.json",
  "name": "my-worker",
  "main": "src/index.ts",
  "compatibility_date": "2024-06-03"
}
```

### wrangler.toml

```toml
name = "my-worker"
main = "src/index.ts"
compatibility_date = "2024-06-03"
```

## Basic Configuration

| Key | Type | Description |
|-----|------|-------------|
| `name` | string | Worker name |
| `main` | string | Entry point file |
| `compatibility_date` | string | Runtime version (YYYY-MM-DD) |
| `compatibility_flags` | string[] | Feature flags |

## Bindings Configuration

### KV Namespace

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

## Environment Configuration

```jsonc
{
  "vars": {
    "ENV": "production"
  },
  "env": {
    "staging": {
      "vars": {
        "ENV": "staging"
      }
    }
  }
}
```

## Route Configuration

### Custom Domain

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

## Cron Triggers

```jsonc
{
  "triggers": {
    "crons": ["0 * * * *"]
  }
}
```

## Build Configuration

```jsonc
{
  "build": {
    "command": "bun run build",
    "watch_dir": "src"
  }
}
```
