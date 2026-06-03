# Quick Start

## 1. Install dprint

```bash
npm install -D dprint
```

## 2. Initialize Configuration

```bash
npx dprint init
```

สร้างไฟล์ `dprint.json`:

```json
{
  "$schema": "https://dprint.dev/schemas/0.38.3.json",
  "incremental": true,
  "plugins": [
    "https://plugins.dprint.dev/typescript-0.93.3.wasm",
    "https://plugins.dprint.dev/json-0.19.3.wasm",
    "https://plugins.dprint.dev/markdown-0.17.2.wasm"
  ]
}
```

## 3. Format Files

```bash
# Format all files
npx dprint fmt

# Check (dry run)
npx dprint check

# Format specific files
npx dprint fmt src/**/*.ts
```

## 4. Add to npm Scripts

```json
{
  "scripts": {
    "fmt": "dprint fmt",
    "fmt:check": "dprint check"
  }
}
```

## 5. Editor Integration (VS Code)

```bash
code --install-extension dprint.dprint
```

เปิด `.vscode/settings.json`:

```json
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "dprint.dprint"
}
```

## Basic Configuration

### TypeScript

```json
{
  "typescript": {
    "indentWidth": 2,
    "lineWidth": 100,
    "quoteStyle": "preferSingle",
    "semicolons": true
  }
}
```

### JSON

```json
{
  "json": {
    "indentWidth": 2
  }
}
```

### Markdown

```json
{
  "markdown": {
    "textWrap": "preserve"
  }
}
```

## Common Workflows

### Pre-commit Hook

```bash
npm install -D @dprint/pre-commit
npx pre-commit install
```

### CI Check

```yaml
# .github/workflows/format.yml
- name: Check formatting
  run: npx dprint check --fail-on-only-if-changed
```

### Watch Mode

```bash
# Format เมื่อไฟล์เปลี่ยน
npx dprint fmt --watch
```

## Next Steps

| Topic | Guide |
|-------|-------|
| Configuration | [Configuration](configuration.md) |
| Features | [Features](features.md) |
| Best Practices | [Best Practices](best-practices.md) |
| Integration | [Integration](integration.md) |
| Architecture | [Architecture](architecture.md) |