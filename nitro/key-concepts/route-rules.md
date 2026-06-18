---
title: Route Rules
description: Configuration สำหรับ routes เช่น headers, CORS, redirect, proxy, caching
---

## What are Route Rules?

Route rules คือ configuration ที่ apply กับ routes ตาม pattern ใช้สำหรับ:
- Headers
- CORS
- Redirect
- Proxy
- Caching
- Prerender
- ISR

## Basic Usage

```typescript
import { defineConfig } from "nitro/config";

export default defineConfig({
  routeRules: {
    '/api/**': { cors: true },
    '/static/**': { cache: { maxAge: 60 * 60 * 24 } }
  }
});
```

## Rule Merging and Overrides

Rules ที่ specific จะ override rules ที่ general:

```typescript
import { defineConfig } from "nitro/config";

export default defineConfig({
  routeRules: {
    '/**': { cache: { maxAge: 60 } },           // Default
    '/api/**': { cache: false },                 // Override for API
    '/static/**': { cache: { maxAge: 86400 } }   // Override for static
  }
});
```

## Headers

Add custom headers:

```typescript
import { defineConfig } from "nitro/config";

export default defineConfig({
  routeRules: {
    '/api/**': {
      headers: {
        'x-api-version': '1.0',
        'x-powered-by': 'Nitro'
      }
    }
  }
});
```

## CORS

Enable CORS:

```typescript
import { defineConfig } from "nitro/config";

export default defineConfig({
  routeRules: {
    '/api/**': {
      cors: true,
      corsOptions: {
        origin: ['https://example.com'],
        methods: ['GET', 'POST'],
        credentials: true
      }
    }
  }
});
```

## Redirect

Redirect routes:

```typescript
import { defineConfig } from "nitro/config";

export default defineConfig({
  routeRules: {
    '/old-path': { redirect: '/new-path' },
    '/external': { redirect: 'https://example.com' },
    '/temporary': { redirect: '/new', statusCode: 302 }
  }
});
```

## Proxy

Proxy requests ไปยัง external API:

```typescript
import { defineConfig } from "nitro/config";

export default defineConfig({
  routeRules: {
    '/api/proxy/**': {
      proxy: 'https://api.example.com/**'
    }
  }
});
```

## Basic Auth

Add basic authentication:

```typescript
import { defineConfig } from "nitro/config";

export default defineConfig({
  routeRules: {
    '/admin/**': {
      auth: {
        user: 'admin',
        pass: 'password'
      }
    }
  }
});
```

## Caching (SWR / Static)

Cache routes:

```typescript
import { defineConfig } from "nitro/config";

export default defineConfig({
  routeRules: {
    '/api/data': {
      cache: {
        maxAge: 60 * 60,  // 1 hour
        swr: true         // Stale-while-revalidate
      }
    },
    '/static/**': {
      cache: {
        maxAge: 60 * 60 * 24 * 365,  // 1 year
        swr: false                     // Static
      }
    }
  }
});
```

## Prerender

Prerender routes ที่ build time:

```typescript
import { defineConfig } from "nitro/config";

export default defineConfig({
  routeRules: {
    '/about': { prerender: true },
    '/blog/**': { prerender: true }
  }
});
```

## ISR (Vercel)

Incremental Static Regeneration สำหรับ Vercel:

```typescript
import { defineConfig } from "nitro/config";

export default defineConfig({
  routeRules: {
    '/blog/**': {
      isr: {
        expiration: 60 * 60  // 1 hour
      }
    }
  }
});
```

## Route Rules Reference

| Option | Type | Description |
|--------|------|-------------|
| `headers` | `Record<string, string>` | Custom headers |
| `cors` | `boolean \| CorsOptions` | Enable CORS |
| `redirect` | `string \| { to: string, statusCode?: number }` | Redirect |
| `proxy` | `string` | Proxy to external URL |
| `auth` | `{ user: string, pass: string }` | Basic auth |
| `cache` | `false \| CacheOptions` | Cache configuration |
| `prerender` | `boolean` | Prerender at build time |
| `isr` | `{ expiration: number }` | ISR configuration |

## Runtime Route Rules

Dynamic route rules ที่ runtime:

```typescript
import { defineNitroPlugin } from "nitro";

export default defineNitroPlugin((nitroApp) => {
  nitroApp.hooks.hook('request', (event) => {
    // Add dynamic rules based on request
  });
});
```

## Best Practices

- ใช้ patterns ที่ specific ที่สุด
- Group related rules ด้วย patterns
- Cache static content ที่ไม่เปลี่ยนบ่อย
- ใช้ CORS เฉพาะ routes ที่ต้องการ
- Test route rules ใน isolation
