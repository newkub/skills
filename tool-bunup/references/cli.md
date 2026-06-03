# cli

## index.md

# CLI Reference

## Installation

```bash
# npm
npm install -D bunup

# bun
bun add -D bunup

# Using bunx
bunx bunup
```

## Main Commands

### bunup

Build library:

```bash
bunup [options]
```

| Option | Short | Description |
|--------|-------|-------------|
| `--entry` | `-e` | Entry point file |
| `--format` | `-f` | Output formats (esm, cjs, iife) |
| `--outdir` | `-o` | Output directory |
| `--dts` | `-d` | Generate TypeScript declarations |
| `--dts-split` | | Split declaration files |
| `--minify` | `-m` | Minify output |
| `--watch` | `-w` | Watch mode |
| `--external` | `-x` | External packages |
| `--target` | `-t` | Build target (browser, node, neutral) |
| `--config` | `-c` | Config file path |
| `--help` | `-h` | Show help |

### Examples

```bash
# Basic build
bunup

# ESM only
bunup --format esm

# ESM and CJS
bunup --format esm,cjs

# With types
bunup --dts

# Minified
bunup --minify

# Watch mode
bunup --watch

# Custom entry
bunup --entry ./src/lib.ts

# Custom output
bunup --outdir ./lib

# External deps
bunup --external react react-dom
```

### Init Command

Initialize bunup config:

```bash
bunup init
bunup init --template react
```

### Version Command

Check version:

```bash
bunup --version
bunup -V
```

### Help Command

Show help:

```bash
bunup --help
bunup -h
```

## Build with Config

### Using Config File

```bash
bunup --config bunup.config.ts
```

### Environment Variables

| Variable | Description |
|----------|-------------|
| `BUNUP_ENTRY` | Entry point override |
| `BUNUP_OUTDIR` | Output directory override |
| `BUNUP_FORMAT` | Format override |

## Common Workflows

### Library Build

```bash
bunup --entry ./src/index.ts --format esm,cjs --dts
```

### React Component Build

```bash
bunup --entry ./src/index.tsx --format esm,cjs --dts --external react react-dom
```

### Watch and Rebuild

```bash
bunup --watch
```

## Exit Codes

| Code | Meaning |
|------|---------|
| 0 | Success |
| 1 | Build error |
| 2 | Config error |
| 3 | Missing entry |

---

