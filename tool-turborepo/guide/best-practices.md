# Best Practices

## Project Structure

### Recommended Monorepo Layout

```
my-monorepo/
├── apps/
│   ├── web/          # Next.js, Vite, etc.
│   └── api/          # Backend services
├── packages/
│   ├── ui/           # Shared UI components
│   ├── config/       # Shared configs (ESLint, TS)
│   └── utils/        # Shared utilities
├── package.json
├── turbo.json
└── pnpm-workspace.yaml
```

### Use Workspaces

```json
// package.json
{
  "workspaces": ["apps/*", "packages/*"]
}
```

## Configuration

### Always Use Schema

```json
{
  "$schema": "https://turborepo.dev/schema.json"
}
```

### Define Outputs Correctly

```json
{
  "tasks": {
    "build": {
      "outputs": ["dist/**", ".next/**", "!.next/cache/**"]
    }
  }
}
```

### Avoid Caching Long-running Tasks

```json
{
  "tasks": {
    "dev": {
      "cache": false,
      "persistent": true
    }
  }
}
```

## Performance

### Use Appropriate Concurrency

```bash
# สำหรับเครื่องที่มี CPU หลาย core
turbo run build --concurrency=50%

# จำกัด concurrency สำหรับ resource-intensive tasks
turbo run test --concurrency=5
```

### Leverage Remote Cache

```bash
# Login แล้ว cache จะถูก share อัตโนมัติ
turbo login
turbo link
```

### Use Affected Mode in CI

```bash
# Run only changed packages
turbo run build --affected
```

## Environment Variables

### Use Strict Mode in Production

```json
{
  "envMode": "strict",
  "tasks": {
    "build": {
      "env": ["API_URL", "NEXT_PUBLIC_*"]
    }
  }
}
```

### Don't Cache Secrets

```json
{
  "tasks": {
    "build": {
      "passThroughEnv": ["SECRET_API_KEY"]
    }
  }
}
```

## Common Pitfalls

| Pitfall | วิธีแก้ |
|---------|----------|
| Missing outputs | ระบุ glob patterns ที่ถูกต้อง |
| Over-caching | ใช้ `cache: false` สำหรับ dev tasks |
| Slow cold start | ใช้ remote cache |
| Dependency cycles | ใช้ `turbo graph` ตรวจสอบ |
| Large cache | ตั้ง `cacheMaxAge` และ `cacheMaxSize` |

## CI/CD Best Practices

### GitHub Actions

```yaml
- uses: actions/checkout@v4
- uses: pnpm/action-setup@v4
  with:
    version: 9
- uses: actions/setup-node@v4
  with:
    node-version: 20
    cache: pnpm
- run: pnpm install
- run: pnpm turbo build --filter=...
  env:
    TURBO_TOKEN: ${{ secrets.TURBO_TOKEN }}
    TURBO_TEAM: ${{ vars.TURBO_TEAM }}
```

### Enable Remote Cache

```bash
# Set environment variables
TURBO_TOKEN=your-token
TURBO_TEAM=your-team
```

## Debugging

### Check Task Graph

```bash
turbo run build --dry --graph=graph.html
```

### Clear Cache

```bash
# Local cache only
rm -rf .turbo

# Remote cache
turbo run build --force
```

### Run Single Task

```bash
turbo run build --filter=my-package
```