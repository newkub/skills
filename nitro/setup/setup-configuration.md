# Nitro Configuration

## Configuration File

สร้าง `nitro.config.ts` ใน root directory:

```typescript
import { defineNitroConfig } from 'nitropack'

export default defineNitroConfig({
  // Configuration options
})
```

## Basic Configuration

### Development Server

```typescript
export default defineNitroConfig({
  devServer: {
    port: 3000,
    host: 'localhost'
  }
})
```

### Runtime Configuration

```typescript
export default defineNitroConfig({
  preset: 'node', // 'node', 'bun', 'deno', 'cloudflare', etc.
})
```

## Advanced Configuration

### Storage Configuration

```typescript
export default defineNitroConfig({
  storage: {
    'redis': {
      driver: 'redis',
      options: {
        host: 'localhost',
        port: 6379
      }
    },
    'fs': {
      driver: 'fs',
      base: './data'
    }
  }
})
```

### Database Configuration

```typescript
export default defineNitroConfig({
  database: {
    default: {
      driver: 'sqlite',
      options: {
        path: './data/database.sqlite'
      }
    }
  }
})
```

### Route Rules

```typescript
export default defineNitroConfig({
  routeRules: {
    '/api/**': {
      cors: true,
      headers: {
        'Access-Control-Allow-Origin': '*'
      }
    },
    '/admin/**': {
      auth: 'basic'
    }
  }
})
```

## Environment Variables

### Development Environment

```bash
# .env
NITRO_PORT=3000
NITRO_HOST=localhost
DATABASE_URL=sqlite:./data/database.sqlite
REDIS_URL=redis://localhost:6379
```

### Production Environment

```bash
# Production env vars
NITRO_PRESET=cloudflare
DATABASE_URL=postgresql://user:pass@host:5432/db
REDIS_URL=redis://user:pass@host:6379
```

## Presets

### Available Presets

- `node` - Node.js runtime
- `bun` - Bun runtime
- `deno` - Deno runtime
- `cloudflare` - Cloudflare Workers
- `vercel` - Vercel Functions
- `netlify` - Netlify Functions
- `aws-lambda` - AWS Lambda

### Preset Configuration

```typescript
export default defineNitroConfig({
  preset: 'cloudflare',
  experimental: {
    wasm: true
  }
})
```

## Build Configuration

### Output Configuration

```typescript
export default defineNitroConfig({
  output: {
    dir: '.output',
    publicDir: 'public'
  }
})
```

### Minification

```typescript
export default defineNitroConfig({
  minify: true,
  sourcemap: true
})
```

## Development Tools

### Hot Module Replacement

```typescript
export default defineNitroConfig({
  dev: {
    hmr: true
  }
})
```

### Debug Mode

```typescript
export default defineNitroConfig({
  dev: {
    debug: true
  }
})
```

## TypeScript Configuration

### tsconfig.json

```json
{
  "compilerOptions": {
    "target": "ES2022",
    "module": "ESNext",
    "moduleResolution": "node",
    "types": ["node"]
  },
  "include": ["**/*.ts"],
  "exclude": ["node_modules", ".output"]
}
```

## Common Configuration Patterns

### Multi-environment Setup

```typescript
export default defineNitroConfig({
  $development: {
    preset: 'node',
    devServer: {
      port: 3000
    }
  },
  $production: {
    preset: 'cloudflare'
  }
})
```

### Plugin Configuration

```typescript
export default defineNitroConfig({
  plugins: [
    './plugins/database.ts',
    './plugins/auth.ts'
  ]
})
```

## Troubleshooting

### Configuration Issues

1. ตรวจสอบ syntax ใน config file
2. ตรวจสอบว่า preset ที่เลือกสนับสนุน features ที่ใช้
3. ตรวจสอบ environment variables

### Performance Issues

1. ใช้ appropriate preset สำหรับ deployment target
2. เปิด minification สำหรับ production
3. ปิด sourcemap สำหรับ production
