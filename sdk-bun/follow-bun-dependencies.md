## 1. Check Existing Dependencies

ตรวจสอบว่ามี dependencies แล้วหรือยัง

```bash
bun pm ls
```

## 2. Install Dev Dependencies

ติดตั้ง linting, testing, formatting tools

| Package | Purpose |
|---|---|
| oxlint | Fast linter |
| oxlint-tsgolint | TypeScript rules for oxlint |
| dprint | Code formatter |
| biome | Linter and formatter |
| @biomejs/biome | Biome runtime |
| vitest | Testing framework |
| @vitest/ui | Vitest UI |

```bash
bun add -d oxlint oxlint-tsgolint dprint biome @biomejs/biome vitest @vitest/ui
```
