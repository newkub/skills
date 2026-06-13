# Configuration Reference

## Configuration File

Supports both JSON (recommended) and TOML formats.

```jsonc
// wrangler.jsonc
{
  "$schema": "./node_modules/wrangler/config-schema.json"
}
```

## Top-level Only Keys

These keys cannot be defined in environments.

| Key | Type | Description |
|-----|------|-------------|
| `keep_vars` | `boolean` | Keep dashboard variables |
| `migrations` | `object[]` | Durable Object migrations |
| `send_metrics` | `boolean` | Send usage data |
| `site` | `object` | Static assets (deprecated) |

## Inheritable Keys

Can be set at top-level and inherited by environments.

| Key | Type | Description |
|-----|------|-------------|
| `name` | `string` | Worker name |
| `main` | `string` | Entry point |
| `compatibility_date` | `string` | Runtime version |
| `compatibility_flags` | `string[]` | Feature flags |
| `workers_dev` | `boolean` | Use workers.dev |
| `preview_urls` | `boolean` | Enable preview URLs |
| `route` | `Route` | Custom route |
| `routes` | `Route[]` | Multiple routes |
| `triggers` | `object` | Cron triggers |
| `rules` | `Rule[]` | Module rules |
| `build` | `Build` | Build configuration |
| `minify` | `boolean` | Minify output |
| `logpush` | `boolean` | Enable logpush |
| `limits` | `Limits` | Execution limits |

## Non-inheritable Keys

Must be set per environment.

| Key | Type | Description |
|-----|------|-------------|
| `define` | `Record<string, string>` | Global defines |
| `vars` | `object` | Environment variables |
| `kv_namespaces` | `KVNamespace[]` | KV bindings |
| `r2_buckets` | `R2Bucket[]` | R2 bindings |
| `d1_databases` | `D1Database[]` | D1 bindings |
| `queues` | `Queue[]` | Queue bindings |
| `durable_objects` | `DurableObjects` | DO bindings |
| `vectorize` | `Vectorize[]` | Vectorize indexes |
| `secrets` | `Secrets` | Required secrets |

## Route Types

### Custom Domain

```jsonc
{
  "routes": [
    {
      "pattern": "shop.example.com",
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
      "pattern": "subdomain.example.com/*",
      "zone_name": "example.com"
    }
  ]
}
```

## Bindings

### KV Namespace

```jsonc
{
  "kv_namespaces": [
    {
      "binding": "MY_KV",
      "id": "xxxxxxxx"
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
      "database_id": "xxx",
      "database_name": "my-db"
    }
  ]
}
```

### Durable Objects

```jsonc
{
  "durable_objects": {
    "bindings": [
      {
        "name": "MY_DO",
        "class_name": "MyDurableObject"
      }
    ]
  }
}
```

## Complete Example

```jsonc
{
  "$schema": "./node_modules/wrangler/config-schema.json",
  "name": "my-worker",
  "main": "src/index.ts",
  "compatibility_date": "2024-06-03",

  "kv_namespaces": [
    { "binding": "CACHE", "id": "xxx" }
  ],
  "d1_databases": [
    { "binding": "DB", "database_id": "xxx" }
  ],
  "r2_buckets": [
    { "binding": "ASSETS", "bucket_name": "my-assets" }
  ],

  "vars": {
    "ENV": "production"
  },

  "env": {
    "staging": {
      "name": "my-worker-staging"
    }
  }
}
```