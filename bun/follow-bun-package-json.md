## 1. Setup package.json

- **Setup**: [follow-package-json](/follow-package-json)

## 2. Add Scripts

เพิ่ม scripts สำหรับ build, dev, lint, test

```json [package.json]
{
  "scripts": {
    "build": "bun build",
    "dev": "bun run --hot",
    "format": "dprint fmt",
    "lint": "oxlint --fix --type-aware",
    "test": "vitest",
    "test:ui": "vitest --ui",
    "test:cov": "vitest --coverage",
    "check": "oxlint --fix --type-aware && vitest run"
  }
}
```

**ตัวอย่าง:**

```bash
bun run lint
# รัน lint และแก้ไข errors อัตโนมัติ
bun run test
# รัน tests
```
