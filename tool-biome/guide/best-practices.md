# Biome Best Practices

## Setup Recommendations

### 1. Initialize Early

```bash
npx biome init
```

This creates a baseline configuration that you can customize.

### 2. Use Recommended Rules

Start with the recommended preset:

```json
{
  "linter": {
    "rules": {
      "recommended": true
    }
  }
}
```

This enables a balanced set of rules that catch common issues.

### 3. Set Consistent Formatting

Choose team-wide defaults and stick to them:

```json
{
  "formatter": {
    "indentStyle": "space",
    "indentWidth": 2,
    "lineWidth": 100
  }
}
```

## Integration Guidelines

### VS Code Settings

Add to `.vscode/settings.json`:

```json
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "biomejs.biome",
  "[javascript]": {
    "editor.defaultFormatter": "biomejs.biome"
  },
  "[typescript]": {
    "editor.defaultFormatter": "biomejs.biome"
  }
}
```

### Git Pre-commit Hook

Using Husky:

```bash
npx husky add .husky/pre-commit "npx biome check --staged"
```

Or use lint-staged:

```json
{
  "lint-staged": {
    "*": "biome check --staged"
  }
}
```

### CI Configuration

```yaml
# GitHub Actions
- name: Run Biome
  run: npx biome ci ./src
```

## Performance Tips

### 1. Ignore Build Directories

```json
{
  "files": {
    "ignore": ["dist/**", "build/**", "node_modules/**"]
  }
}
```

### 2. Use Incremental Processing

Biome automatically caches processed files. Don't clear cache unnecessarily.

### 3. Run CI Mode

Use `biome ci` in CI to avoid unnecessary writes:

```bash
npx biome ci ./src
```

## Rule Configuration Strategy

### Enable Strict Rules Gradually

Start with recommended, then enable stricter rules:

```json
{
  "linter": {
    "rules": {
      "recommended": true,
      "style": {
        "noNonNullAssertion": "warn"
      },
      "correctness": {
        "noUnusedVariables": "error"
      }
    }
  }
}
```

### Disable Rules Selectively

```json
{
  "linter": {
    "rules": {
      "recommended": true,
      "suspicious": {
        "noExplicitAny": "off"
      }
    }
  }
}
```

## Common Patterns

### React/Next.js

```json
{
  "javascript": {
    "formatter": {
      "jsxQuoteStyle": "double"
    }
  }
}
```

### Testing Files

```json
{
  "overrides": [
    {
      "include": ["*.test.ts", "*.spec.ts"],
      "linter": {
        "rules": {
          "no-restricted-globals": "off"
        }
      }
    }
  ]
}
```

## Migration Tips

### From ESLint

```bash
# Generate biome.json from eslint config
npx biome migrate eslint --write

# Review the generated config
# Manually adjust rules as needed
```

### From Prettier

```bash
# Generate biome.json from prettier config
npx biome migrate prettier --write

# Review formatter settings
```

## Troubleshooting

### Slow Performance

1. Check `files.ignore` settings
2. Ensure build directories are ignored
3. Use `biome ci` instead of `biome check`

### Conflicting Formatting

1. Check for `.editorconfig` files
2. Remove Prettier configuration
3. Use Biome as sole formatter

### Import Sorting Issues

Enable organize imports:

```json
{
  "organizeImports": {
    "enabled": true
  }
}
```

## Editor-Specific Setup

### Neovim (built-in LSP)

```lua
require('lspconfig').biome.setup {}
```

### JetBrains IDEs

1. Go to Settings > Plugins
2. Search for "Biome"
3. Install and enable
4. Configure as default formatter

## Team Adoption

1. **Document** the chosen configuration
2. **Share** the `biome.json` in repo
3. **Enforce** via CI
4. **Update** rules as team grows