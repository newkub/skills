# Quick Start

## Installation

```bash
npm install -D knip
```

## Configuration

สร้างไฟล์ `knip.jsonc` ใน root ของ project:

```json
{
  "$schema": "https://cdn.jsdelivr.net/gh/webpro-nl/knip@3/schema.json"
}
```

## Run

```bash
# Run knip
npx knip

# Watch mode
npx knip --watch

# Strict mode (fail on issues)
npx knip --strict
```

## Auto-fix

```bash
# Preview changes
npx knip --fix-dry-run

# Apply fixes
npx knip --fix
```

## Next Steps

- ดู [Features](features.md) เพื่อเรียนรู้ features ทั้งหมด
- ดู [Configuration](configuration.md) เพื่อปรับแต่งการตั้งค่า
- ดู [Best Practices](best-practices.md) เพื่อแนวทางปฏิบัติที่ดี
