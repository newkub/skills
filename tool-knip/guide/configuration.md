# Configuration

## Configuration

สร้างไฟล์ `knip.jsonc` หรือ `knip.config.{js,ts}` ใน root ของ project:

```json
{
  "$schema": "https://cdn.jsdelivr.net/gh/webpro-nl/knip@3/schema.json"
}
```

## Config File Names

| Priority | Filename |
|----------|----------|
| 1 | `knip.jsonc` |
| 2 | `knip.json` |
| 3 | `knip.config.js` |
| 4 | `knip.config.ts` |
| 5 | `knip.config.mjs` |
| 6 | `knip.config.mts` |

## Common Options

| Option | Type | Description | Default |
|--------|------|-------------|---------|
| `entry` | array | Entry files ของ project | `["src"]` |
| `project` | array | File patterns ที่จะ analyze | `["**/*.ts"]` |
| `ignore` | array | Patterns ที่จะ ignore | `[]` |
| `include` | array | Check types ที่จะ include | all |
| `exclude` | array | Check types ที่จะ exclude | `[]` |
| `strict` | boolean | Fail CI ถ้ามี issues | `false` |

## Check Types Options

```json
{
  "include": ["files", "dependencies", "devDependencies", "exports"]
}
```

## Ignore Patterns

```json
{
  "ignore": [
    "**/*.test.ts",
    "**/__tests__/**",
    "**/node_modules/**",
    "**/dist/**"
  ]
}
```

## Ignore Dependencies

```json
{
  "ignoreDependencies": ["eslint", "prettier", "@types/*"]
}
```

## Ignore Files

```json
{
  "ignoreFiles": ["**/generated/**", "**/*.d.ts"]
}
```

## Custom Entry Points

```json
{
  "entry": ["src/index.ts", "src/cli.ts", "bin/*.js"]
}
```

## Custom Project Patterns

```json
{
  "project": ["src/**/*.ts", "src/**/*.tsx", "apps/**/*.ts"]
}
```

## Environment Variables

| Variable | Description |
|----------|-------------|
| `KNIP_STRICT` | เปิด strict mode |
| `KNIP_OUTPUT` | Output format (`text`, `json`, `stream`) |
| `KNIP_CONFIG` | Path to config file |
