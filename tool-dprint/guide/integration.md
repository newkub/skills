# Integration

## Editor Integrations

### VS Code

```bash
code --install-extension dprint.dprint
```

หรือติดตั้งจาก [VS Code Marketplace](https://marketplace.visualstudio.com/items?itemName=dprint.dprint)

### Neovim

ใช้ plugin `:formatter` หรือ `:null-ls`:

```lua
-- lazy.nvim
{ "jose-elias-alvarez/null-ls.nvim", dependencies = "dprint" }
```

หรือใช้ `dprint.nvim`:

```lua
-- lazy.nvim
{ ":gaborcode/dprint", }
```

### JetBrains IDEs

```bash
# ติดตั้งผ่าน IDE
Plugins > Marketplace > dprint
```

## CI/CD Integration

### GitHub Actions

```yaml
name: Format Check

on: [push, pull_request]

jobs:
  format:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: dprint/actions/install@v1
      - run: dprint check
```

### GitLab CI

```yaml
format-check:
  image: dprint/dprint:latest
  script:
    - dprint check
```

## Pre-commit Hook

### Husky + lint-staged

```json
// package.json
{
  "husky": {
    "hooks": {
      "pre-commit": "lint-staged"
    }
  },
  "lint-staged": {
    "*.{ts,tsx,js,jsx,json,md}": "dprint fmt"
  }
}
```

### Pre-commit (Python)

```yaml
# .pre-commit-config.yaml
repos:
  - repo: https://github.com/dprint/dprint
    rev: v0.38.0
    hooks:
      - id: dprint
```

## Build Tool Integration

### Vite

```typescript
// vite.config.ts
import dprint from 'dprint'

export default {
  plugins: [
    {
      name: 'dprint',
      async closeBundle() {
        await dprint.formatFiles(['src/**/*.ts'])
      }
    }
  ]
}
```

### esbuild

```typescript
import * as dprint from 'dprint'

const result = await dprint.format('typescript', sourceCode)
```

### Rollup

```typescript
// rollup.config.js
import dprint from 'dprint'

export default {
  plugins: [
    {
      name: 'dprint',
      async generateBundle() {
        await dprint.formatFiles(['src/**/*.ts'])
      }
    }
  ]
}
```

## Git Integration

### Git Blame Ignore

```bash
# .git-blame-ignore-revs
# Automatically format files without changing blame
dprint fmt --git-blame-ignore-revs
```

## Task Runners

### npm scripts

```json
{
  "scripts": {
    "fmt": "dprint fmt",
    "fmt:check": "dprint check",
    "fmt:ci": "dprint fmt --ci"
  }
}
```

### Make

```makefile
.PHONY: fmt
fmt:
	dprint fmt

.PHONY: fmt-check
fmt-check:
	dprint check
```

## EditorConfig Compatibility

dprint รองรับ `.editorconfig`:

```editorconfig
root = true

[*]
indent_style = space
indent_size = 2
```