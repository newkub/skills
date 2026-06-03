# Biome Key Concepts

## Configuration File

Biome uses `biome.json` (or `biome.jsonc`) in the project root:

```json
{
  "$schema": "./node_modules/@biomejs/biome/configuration_schema.json",
  "organizeImports": { "enabled": true },
  "linter": {
    "enabled": true,
    "rules": {
      "recommended": true,
      "suspicious": {
        "noExplicitAny": "warn"
      },
      "style": {
        "noNonNullAssertion": "off"
      }
    }
  },
  "formatter": {
    "indentStyle": "space",
    "indentWidth": 2,
    "lineWidth": 100
  },
  "javascript": {
    "formatter": {
      "quoteStyle": "single",
      "trailingCommas": "es5"
    }
  }
}
```

## Organize Imports

Automatically organize imports on save:
- Sort imports alphabetically
- Remove unused imports
- Group imports by source (external, internal, relative)

Enable in config:

```json
{
  "organizeImports": {
    "enabled": true,
    "ignore": ["node_modules"]
  }
}
```

## Linter Rules

Biome categorizes lint rules:

| Category | Description |
|----------|-------------|
| `a11y` | Accessibility rules |
| `complexity` | Code complexity issues |
| `correctness` | Bugs and possible errors |
| `performance` | Performance anti-patterns |
| `security` | Security vulnerabilities |
| `style` | Stylistic conventions |
| `suspicious` | Suspicious patterns |
| `nursery` | New rules (may change) |

### Rule Configuration

```json
{
  "linter": {
    "rules": {
      "recommended": true,
      "a11y": {
        "useAltText": "warn"
      },
      "style": {
        "noNonNullAssertion": "off"
      }
    }
  }
}
```

Rule values: `"error"`, `"warn"`, `"off"`

## Formatter Options

### Indent Style

```json
{
  "formatter": {
    "indentStyle": "tab" | "space"
  }
}
```

### Indent Width

```json
{
  "formatter": {
    "indentWidth": 2 | 4
  }
}
```

### Line Width

```json
{
  "formatter": {
    "lineWidth": 80 | 100 | 120
  }
}
```

### Language-specific Overrides

```json
{
  "javascript": {
    "formatter": {
      "quoteStyle": "single" | "double",
      "semicolons": true | false,
      "trailingCommas": "all" | "es5" | "none"
    }
  },
  "json": {
    "formatter": {
      "enabled": true
    }
  }
}
```

## Ignore Files

### Using biome.json

```json
{
  "files": {
    "ignore": [
      "dist/**",
      "node_modules/**",
      "*.min.js"
    ]
  }
}
```

### Using .biomeignore

Create `.biomeignore` similar to `.gitignore`:

```
dist/
node_modules/
*.min.js
coverage/
```

## Fix Modes

| Mode | Description |
|------|-------------|
| `--write` | Apply fixes to files |
| `--unsafe` | Apply unsafe fixes (may change behavior) |
| `--staged` | Apply fixes only to staged files |

## Report Format

```bash
# JSON format for CI
biome ci ./src --reporter=json

# GitHub annotations format
biome ci ./src --reporter=github-annotations
```