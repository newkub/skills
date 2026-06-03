# Quick Start

## 1. Install Turborepo

```bash
# Global installation
npm install -g turbo

# หรือ local ใน project
npm install -D turbo
```

## 2. Create turbo.json

สร้างไฟล์ `turbo.json` ใน root ของ monorepo:

```json
{
  "$schema": "https://turborepo.dev/schema.json",
  "tasks": {
    "build": {
      "dependsOn": ["^build"],
      "outputs": ["dist/**", ".next/**"]
    },
    "dev": {
      "cache": false,
      "persistent": true
    },
    "lint": {
      "dependsOn": ["^build"]
    },
    "test": {
      "dependsOn": ["build"],
      "outputs": ["coverage/**"]
    }
  }
}
```

## 3. Run Your First Task

```bash
# Build all packages
turbo run build

# Run dev servers
turbo run dev

# Run tests
turbo run test
```

## 4. Common Commands

| Command | คำอธิบาย |
|---------|----------|
| `turbo run build` | Build all packages |
| `turbo run dev` | Start all dev servers |
| `turbo run test` | Run all tests |
| `turbo run lint` | Lint all packages |
| `turbo --dry` | Preview without running |
| `turbo --force` | Force rebuild all |

## 5. Filter Packages

```bash
# Run only for specific package
turbo run build --filter=web

# Run for package and its dependencies
turbo run build --filter=web...

# Exclude specific package
turbo run build --filter=!docs
```

## 6. Enable Remote Cache (Optional)

```bash
# Login to Vercel
turbo login

# Link repository
turbo link

# Now cache will be shared with team
turbo run build
```

## Example Output

```
•  Running build in 3 packages
    ✓ web (2s)
    ✓ api (1.5s)
    ✓ docs (800ms)
```

## Monorepo Structure Example

```
my-monorepo/
├── package.json
├── turbo.json
├── apps/
│   ├── web/
│   │   ├── package.json
│   │   └── src/
│   └── api/
│       ├── package.json
│       └── src/
└── packages/
    ├── ui/
    │   ├── package.json
    │   └── src/
    └── utils/
        ├── package.json
        └── src/
```

## Environment Variables

สร้าง `.env` ใน root แล้ว Turborepo จะรวมให้อัตโนมัติ:

```bash
# .env
DATABASE_URL=postgres://...
API_KEY=xxx
```

## Next Steps

- ดู [Configuration Guide](configuration.md) สำหรับรายละเอียดเพิ่มเติม
- ดู [Best Practices](best-practices.md) สำหรับแนวทางที่แนะนำ
- ดู [References](../references/) สำหรับ CLI commands