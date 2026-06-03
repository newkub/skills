# Biome Configuration

## Configuration File

Biome uses `biome.json` (JSON format) or `biome.jsonc` (JSON with comments).

## File Location

Place `biome.json` in your project root. Biome will also look for:
- `biome.jsonc`
- `package.json` (with `biome` field)

## Schema

Include the JSON schema for IDE support:

```json
{
  "$schema": "https://biomejs.dev/schemas/1.9.0/schema.json"
}
```

## Full Configuration Example

```json
{
  "$schema": "https://biomejs.dev/schemas/1.9.0/schema.json",
  "files": {
    "ignore": ["dist/**", "node_modules/**", "*.min.js"]
  },
  "organizeImports": {
    "enabled": true,
    "ignore": []
  },
  "linter": {
    "enabled": true,
    "run": "all",
    "rules": {
      "recommended": true,
      "correctness": {
        "noUnusedVariables": "error"
      },
      "style": {
        "noNegationElse": "off"
      }
    }
  },
  "formatter": {
    "enabled": true,
    "indentStyle": "space",
    "indentWidth": 2,
    "lineWidth": 100,
    "lineEnding": "lf",
    "attributePosition": "auto",
    "indentSize": null
  },
  "javascript": {
    "formatter": {
      "quoteStyle": "double",
      "quoteProperties": "asNeeded",
      "semicolons": "always",
      "trailingCommas": "es5",
      "arrowParentheses": "always",
      "bracketSameLine": false,
      "bracketSpacing": true,
      "jsxQuoteStyle": "double",
      "operatorPosition": "same"
    }
  },
  "json": {
    "formatter": {
      "enabled": true,
      "indentStyle": "space",
      "indentWidth": 2
    }
  },
  "css": {
    "formatter": {
      "enabled": true,
      "quoteStyle": "double"
    }
  }
}
```

## Configuration Sections

### files

```json
{
  "files": {
    "ignore": ["node_modules/**", "dist/**"]
  }
}
```

### organizeImports

```json
{
  "organizeImports": {
    "enabled": true,
    "ignore": []
  }
}
```

### linter

```json
{
  "linter": {
    "enabled": true,
    "rules": {
      "recommended": true
    }
  }
}
```

### formatter

```json
{
  "formatter": {
    "enabled": true,
    "indentStyle": "space",
    "indentWidth": 2,
    "lineWidth": 80,
    "lineEnding": "lf"
  }
}
```

## Language-Specific Settings

### JavaScript / TypeScript

```json
{
  "javascript": {
    "formatter": {
      "quoteStyle": "single",
      "trailingCommas": "all"
    }
  }
}
```

### JSON

```json
{
  "json": {
    "formatter": {
      "enabled": true
    }
  }
}
```

### CSS

```json
{
  "css": {
    "formatter": {
      "enabled": true
    }
  }
}
```

## Overrides

Apply configuration to specific files:

```json
{
  "overrides": [
    {
      "include": ["*.test.ts"],
      "linter": {
        "rules": {
          "no-restricted-globals": "off"
        }
      }
    }
  ]
}
```

## Configuration Inheritance

```json
{
  "extends": ["./biome.base.json"]
}
```

## Environment Variables

Biome respects `.env` files for some settings (future feature).

## CLI Overrides

Override config via CLI:

```bash
biome check --write --indent-style space --line-width 100 ./src
```

## Migrate from ESLint

```bash
biome migrate eslint --write
```

This creates `biome.json` from your `.eslintrc`.

## Migrate from Prettier

```bash
biome migrate prettier --write
```

This creates `biome.json` from your `.prettierrc`.