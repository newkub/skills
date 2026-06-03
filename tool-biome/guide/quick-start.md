# Biome Quick Start

## Basic Usage

### 1. Initialize Configuration

Create a `biome.json` configuration file:

```bash
npx biome init
```

This creates a default configuration:

```json
{
  "$schema": "https://biomejs.dev/schemas/1.9.0/schema.json",
  "organizeImports": {
    "enabled": true
  },
  "linter": {
    "enabled": true,
    "rules": {
      "recommended": true
    }
  },
  "formatter": {
    "indentStyle": "tab",
    "lineWidth": 80
  }
}
```

### 2. Format Files

```bash
# Format all files in src directory
npx biome format --write ./src

# Format specific files
npx biome format --write ./src/index.ts

# Check without writing
npx biome format ./src
```

### 3. Lint Files

```bash
# Lint all files
npx biome lint ./src

# Lint with auto-fix
npx biome lint --write ./src
```

### 4. Check (Format + Lint)

```bash
# Run both format and lint
npx biome check --write ./src

# Check without writing (for CI)
npx biome ci ./src
```

## VS Code Integration

Install the Biome extension:
1. Open VS Code
2. Search for "Biome" in Extensions
3. Install "Biome — fast formatter for web"
4. Reload VS Code

The extension provides:
- Real-time formatting on save
- Inline linting errors
- Format on paste
- Code actions for quick fixes

## Common Workflows

### Pre-commit Hook

Add to `.git/hooks/pre-commit`:

```bash
npx biome check --staged
```

Or use a tool like lint-staged:

```json
{
  "lint-staged": {
    "*.{js,ts,jsx,tsx}": "biome check --staged"
  }
}
```

### CI Pipeline

```yaml
# .github/workflows/ci.yml
- name: Run Biome
  run: npx biome ci ./src
```

### GitHub Actions

```yaml
- uses: biomejs/setup-biome@v2
  with:
    version: latest
- run: biome ci ./src
```