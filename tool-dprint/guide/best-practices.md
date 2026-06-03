# Best Practices

## Project Setup

### 1. Initialize Early

```bash
# สร้าง config ตั้งแต่เริ่ม project
dprint init

# เพิ่มใน .gitignore
echo ".dprint" >> .gitignore
```

### 2. Use Extends

```json
{
  "extends": [
    "https://dprint.dev/configs/typescript-format.json"
  ],
  "typescript": {
    "override": true
  }
}
```

## Configuration

### 1. Shared Configuration

```json
{
  "extends": "./configs/base-format.json"
}
```

ใช้ `extends` สำหรับ shared config ระหว่าง projects

### 2. Plugin Version Pinning

```json
{
  "plugins": [
    "https://plugins.dprint.dev/typescript-0.93.3.wasm"
  ]
}
```

Pin version ใน CI เพื่อ reproducibility

### 3. Ignore Patterns

```json
{
  "excludes": [
    "**/node_modules/**",
    "**/dist/**",
    "**/.git/**",
    "**/coverage/**"
  ]
}
```

## CI/CD

### 1. Fail on Unformatted

```yaml
# GitHub Actions
- name: Check formatting
  run: dprint check --fail-on-only-if-changed
```

### 2. Cache Plugins

```yaml
- uses: actions/cache@v4
  with:
    path: ~/.cache/dprint
    key: dprint-plugins-${{ hashFiles('dprint.json') }}
```

### 3. Parallel Execution

```bash
# Format ใน parallel
dprint fmt --parallel
```

## Editor Integration

### 1. Auto-save Format

```json
// .vscode/settings.json
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "dprint.dprint"
}
```

### 2. Format on Paste

```json
{
  "editor.formatOnPaste": true
}
```

## Workflow

### 1. Pre-commit Hook

```bash
# ติดตั้ง pre-commit
npm install -D @dprint/pre-commit
npx pre-commit install
```

### 2. Git Blame Ignore

```bash
# เพิ่ม revision ที่ format
dprint fmt --git-blame-ignore-revs

# ใช้ใน .git-blame-ignore-revs
# Format changes จะไม่แสดงใน git blame
```

### 3. Staged Files Only

```bash
# Format เฉพาะ staged files
git diff --staged --name-only | xargs dprint fmt
```

## Performance

### 1. Incremental Formatting

```bash
# ใช้ cache สำหรับ incremental
dprint fmt --cache

# Clear cache ถ้าจำเป็น
dprint clear-cache
```

### 2. Parallel Processing

```bash
# ใช้ multiple threads
dprint fmt --parallel
```

### 3. Watch Mode

```bash
# Watch files และ format เมื่อเปลี่ยน
dprint fmt --watch
```

## Team Guidelines

| Practice | Recommendation |
|----------|----------------|
| Config location | Repository root |
| Config format | JSON (not JSONC) |
| Version control | Commit `dprint.json` |
| IDE settings | Commit `.vscode/settings.json` |
| Cache | Add `.dprint/` to `.gitignore` |
| CI | Run `dprint check` on push |
| Pre-commit | Run format ก่อน commit |

## Common Issues

### 1. Plugin Not Found

```bash
# Update plugins
dprint fmt --update

# Or specific plugin
dprint add https://plugins.dprint.dev/typescript-0.93.3.wasm
```

### 2. Slow First Run

```bash
# Pre-download plugins
dprint cache-plugins

# หรือใช้ CI cache
```

### 3. Config Conflicts

```bash
# Validate config
dprint config --validate

# Show resolved config
dprint config --show
```