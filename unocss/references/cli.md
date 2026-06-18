# UnoCSS CLI Reference

## Installation

```bash
# Install globally
bun install -g @unocss/cli

# Install locally (recommended)
bun install -D unocss

# Use via npx/bunx (no install required)
npx unocss "src/**/*.html" -o dist/uno.css
bunx unocss "src/**/*.html" -o dist/uno.css
```

## Basic Usage

### Generate CSS from Files

```bash
# Scan single glob pattern
unocss "src/**/*.html" -o dist/uno.css

# Scan multiple patterns
unocss "src/**/*.html" "src/**/*.jsx" "src/**/*.tsx" -o dist/uno.css

# Use pipe input
echo '<div class="flex p-4"></div>' | unocss -o -
```

### Watch Mode

```bash
# Watch and regenerate on changes
unocss "src/**/*.html" -o dist/uno.css -w

# Watch with minify
unocss "src/**/*.html" -o dist/uno.css -w -m
```

### Config File

```bash
# Use default uno.config.ts
unocss "src/**" -o dist/uno.css

# Use custom config file
unocss "src/**" -o dist/uno.css -c uno.config.js
unocss "src/**" -o dist/uno.css --config custom.config.ts
```

## Options

| Option | Short | Description | Example |
|--------|-------|-------------|---------|
| `--output` | `-o` | Output file path (required) | `-o dist/uno.css` |
| `--config` | `-c` | Config file path | `-c uno.config.ts` |
| `--watch` | `-w` | Watch mode | `-w` |
| `--minify` | `-m` | Minify output | `-m` |
| `--no-cache` | - | Disable cache | `--no-cache` |
| `--no-sourcemap` | - | Disable sourcemap | `--no-sourcemap` |
| `--virtual-template` | - | Virtual module ID | `--virtual-template virtual:uno` |
| `--version` | `-v` | Show version | `--version` |
| `--help` | `-h` | Show help | `--help` |

## Examples

### Basic Vite-like Setup

```bash
unocss "src/**/*.{html,vue,jsx,tsx}" -o dist/uno.css -c uno.config.ts
```

### With Minification

```bash
unocss "src/**/*" -o dist/uno.min.css -m
```

### Stdin Input

```bash
# From stdin
cat src/index.html | unocss -o dist/uno.css

# From echo
echo '<div class="text-red p-4"></div>' | unocss -o -
```

### CI/CD Usage

```bash
# Pre-build step
unocss "src/**/*.{html,vue,jsx,tsx}" -o dist/uno.css -c uno.config.ts

# Validate output exists
test -f dist/uno.css && echo "CSS generated successfully"
```

### Different Configs

```bash
# Production config
unocss "src/**" -o dist/uno.css -c uno.production.config.ts

# Development config
unocss "src/**" -o dist/uno.css -c uno.dev.config.ts
```

## Exit Codes

| Code | Description |
|------|-------------|
| 0 | Success |
| 1 | Error (file not found, invalid config, etc.) |

## Environment Variables

| Variable | Description |
|----------|-------------|
| `UNOCSS_CACHE` | Cache directory path |
| `UNOCSS_CONFIG` | Default config file path |
| `NO_COLOR` | Disable color output |

## Tips

- Use `-o -` to output to stdout
- Use glob patterns with quotes to avoid shell expansion
- Add `--no-cache` in CI to ensure fresh output
- Use `-m` for production builds to reduce file size