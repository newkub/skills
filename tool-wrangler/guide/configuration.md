# Configuration

## Configuration File

Wrangler ใช้ configuration file เพื่อกำหนด Worker settings:

- **Recommended**: `wrangler.jsonc` (JSON with comments)
- **Alternative**: `wrangler.toml` (TOML format)

## Basic Configuration

```jsonc
// wrangler.jsonc
{
  "$schema": "./node_modules/wrangler/config-schema.json",

  "name": "my-worker",
  "main": "src/index.ts",
  "compatibility_date": "2024-06-03"
}
```

## Required Fields

| Field | Type | คำอธิบาย |
|-------|------|----------|
| `name` | `string` | Worker name (alphanumeric และ dashes เท่านั้น) |
| `main` | `string` | Entry point path |
| `compatibility_date` | `string` | Date format `yyyy-mm-dd` |

## Inheritable Keys

Keys ที่กำหนดที่ top-level แล้ว inherit ไปยัง environments:

```jsonc
{
  "name": "my-worker",
  "main": "src/index.ts",
  "compatibility_date": "2024-06-03",
  "workers_dev": true,

  "env": {
    "staging": {
      "name": "my-worker-staging"
    }
  }
}
```

## Non-inheritable Keys

Keys ที่ต้องกำหนดในแต่ละ environment:

| Key | Type | คำอธิบาย |
|-----|------|----------|
| `vars` | `object` | Environment variables |
| `kv_namespaces` | `array` | KV bindings |
| `r2_buckets` | `array` | R2 bindings |
| `d1_databases` | `array` | D1 bindings |
| `queues` | `array` | Queue bindings |
| `durable_objects` | `object` | Durable Object bindings |
| `secrets` | `object` | Required secrets |

## Bindings Configuration

### KV Namespace

```jsonc
{
  "kv_namespaces": [
    {
      "binding": "MY_KV",
      "id": "xxxxxxxxxxxxxxxxxxxx"
    }
  ]
}
```

### R2 Bucket

```jsonc
{
  "r2_buckets": [
    {
      "binding": "MY_BUCKET",
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
      "database_id": "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx"
    }
  ]
}
```

### Environment Variables

```jsonc
{
  "vars": {
    "ENV": "production",
    "MAX_COUNT": "100"
  }
}
```

## Route Configuration

```jsonc
{
  "routes": [
    {
      "pattern": "example.com/*",
      "zone_name": "example.com"
    }
  ]
}
```

## Build Configuration

```jsonc
{
  "build": {
    "command": "npm run build",
    "cwd": ".",
    "watch_dir": "src"
  }
}
```