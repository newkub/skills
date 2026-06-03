# Configuration

## Create Configuration File

สร้าง configuration file ด้วยคำสั่ง:

```bash
oxlint --init
```

Oxlint จะค้นหา `.oxlintrc.json` หรือ `oxlint.config.ts` ใน current working directory โดยอัตโนมัติ

## Basic Configuration

สร้างไฟล์ `.oxlintrc.json`:

```json
{
  "$schema": "./node_modules/oxlint/configuration_schema.json",
  "categories": {
    "correctness": "warn"
  },
  "rules": {
    "eslint/no-unused-vars": "error"
  }
}
```

## Configuration Options

### Categories

Enable/disable rule groups:

```json
{
  "categories": {
    "correctness": "warn",
    "suspicious": "error",
    "perf": "off"
  }
}
```

### Rules

Configure individual rules:

```json
{
  "rules": {
    "eslint/no-unused-vars": "error",
    "typescript/no-floating-promises": "warn",
    "react/no-unknown-property": "off"
  }
}
```

### Severity Values

- `"error"` - Errors will fail the build
- `"warn"` - Warnings will be reported but won't fail
- `"off"` - Disable the rule

### Override Configuration by File Pattern

```json
{
  "overrides": [
    {
      "files": ["**/*.test.ts", "**/*.spec.ts"],
      "rules": {
        "eslint/no-explicit-any": "off"
      }
    }
  ]
}
```

### Extend Shared Configs

```json
{
  "extends": ["@oxlint/config-recommended"]
}
```

## TypeScript Config (oxlint.config.ts)

สามารถใช้ TypeScript สำหรับ configuration:

```typescript
import { defineConfig } from "oxlint";

export default defineConfig({
  categories: {
    correctness: "warn",
  },
  rules: {
    "eslint/no-unused-vars": "error",
  },
});
```

## Environment Variables

ไม่มี environment variables ที่จำเป็นสำหรับ Oxlint
