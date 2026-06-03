# Biome Features

## Formatter

### Supported Languages

- JavaScript / TypeScript
- JSX / TSX
- JSON
- CSS
- HTML
- GraphQL

### Features

- **Consistent formatting** across the entire codebase
- **Fast performance** (built with Rust)
- **Configurable** via biome.json or CLI flags
- **Editor integration** with LSP support
- **Prettier-compatible** output for many options

### Notable Options

| Option | Values | Default |
|--------|--------|---------|
| `indentStyle` | `tab`, `space` | `tab` |
| `indentWidth` | number | `2` |
| `lineWidth` | number | `80` |
| `quoteStyle` | `single`, `double` | `double` |
| `semicolons` | `always`, `as-needed` | `always` |
| `trailingCommas` | `all`, `es5`, `none` | `es5` |
| `arrowParentheses` | `always`, `as-needed` | `always` |

## Linter

### 200+ Built-in Rules

Categories:
- **Accessibility (a11y)**: Enforce accessibility best practices
- **Complexity**: Reduce code complexity
- **Correctness**: Catch bugs and errors
- **Performance**: Identify performance issues
- **Security**: Detect security vulnerabilities
- **Style**: Enforce consistent style
- **Suspicious**: Flag suspicious patterns

### Key Features

- **Auto-fix**: Many rules can be auto-fixed
- **Safe vs Unsafe fixes**: Clear distinction
- **No dependencies**: No external lint dependencies needed
- **Type-aware linting**: For TypeScript (when parser is used)

### Recommended Preset

```json
{
  "linter": {
    "rules": {
      "recommended": true
    }
  }
}
```

## Organize Imports

Automatically:
- Sort imports alphabetically
- Remove unused imports
- Group imports (external, internal, relative)

```json
{
  "organizeImports": {
    "enabled": true
  }
}
```

## Commands

### `biome format`

Format files without linting:

```bash
biome format [files...] [options]
```

Options:
- `--write` - Write formatted files
- `--dry-run` - Show what would be formatted
- `--stdin-file-name` - Format from stdin

### `biome lint`

Lint files:

```bash
biome lint [files...] [options]
```

Options:
- `--write` - Apply safe fixes
- `--unsafe` - Apply unsafe fixes
- `--diagnostic-level` - Control severity

### `biome check`

Run format + lint:

```bash
biome check [files...] [options]
```

### `biome ci`

Non-interactive check for CI:

```bash
biome ci [files...]
```

Exits with error code if issues found.

### `biome init`

Initialize configuration:

```bash
biome init [directory]
```

Creates `biome.json` with defaults.

### `biome migrate`

Migrate configurations from other tools:

```bash
# From ESLint
biome migrate eslint

# From Prettier
biome migrate prettier
```

## Integration Features

### LSP Support

Biome provides Language Server Protocol support:
- Real-time diagnostics
- Code actions
- Format on save
- Go-to-definition (limited)

### Editor Extensions

- **VS Code**: Official Biome extension
- **Neovim**: Built-in LSP client
- **Emacs**: via eglot or lsp-mode
- **JetBrains**: via built-in LSP support

### Git Integration

- Pre-commit hooks
- CI/CD pipelines
- GitHub Actions integration

### Configuration Inheritance

Biome can extend other configurations:

```json
{
  "extends": ["./biome.base.json"]
}
```

## Performance

- **Rust-based**: Extremely fast
- **Parallel processing**: Utilize all CPU cores
- **Minimal memory**: Low memory footprint
- **Incremental**: Only process changed files