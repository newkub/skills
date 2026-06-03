---
description: Pluggable and configurable code formatting platform with fast performance
title: cli-dprint
tags: [cli, formatter, code-quality, plugins]
---

## Overview

`dprint` เป็น pluggable และ configurable code formatting platform ที่ auto-formats source code ตาม plugins ที่กำหนด มีประสิทธิภาพสูงและรองรับหลายภาษา

## Installation

```powershell
scoop install dprint
# หรือ
npm install -g dprint
# หรือ
cargo install dprint
```

## Setup

```bash
# Initialize dprint in project
dprint init

# Add plugin
dprint add typescript json

# Clear cache
dprint clear-cache
```

## Configuration

Config file: `dprint.json` or `.dprint.json`

```json
{
  "typescript": {
    "indentWidth": 2,
    "semiColons": "asi",
    "quoteStyle": "alwaysSingle",
    "trailingCommas": "never"
  },
  "json": {
    "indentWidth": 2
  },
  "markdown": {},
  "toml": {},
  "excludes": [
    "**/node_modules",
    "**/*.log",
    "**/dist",
    "**/build"
  ],
  "plugins": [
    "https://plugins.dprint.dev/typescript-0.88.1.wasm",
    "https://plugins.dprint.dev/json-0.19.1.wasm",
    "https://plugins.dprint.dev/markdown-0.16.2.wasm",
    "https://plugins.dprint.dev/toml-0.6.0.wasm"
  ],
  "lineWidth": 120,
  "includes": ["**/*.{ts,js,json,md,toml}"]
}
```

## Subcommands

| Command | Description |
|---------|-------------|
| `dprint init` | Initialize configuration file in current directory |
| `dprint add <plugin>` | Add plugin to configuration file |
| `dprint fmt [patterns]` | Format source files and write to filesystem |
| `dprint check [patterns]` | Check for files that haven't been formatted |
| `dprint config <subcommand>` | Configuration file functionality |
| `dprint output-file-paths [patterns]` | Print resolved file paths |
| `dprint output-resolved-config [patterns]` | Print resolved configuration |
| `dprint output-format-times [patterns]` | Print formatting time for debugging |
| `dprint clear-cache` | Delete plugin cache directory |
| `dprint upgrade` | Upgrade dprint executable |
| `dprint completions <shell>` | Generate shell completions |
| `dprint lsp` | Start language server for formatting |

## Global Options

| Flag | Description |
|------|-------------|
| `-c, --config <config>` | Path or URL to JSON configuration file |
| `--config-discovery=<mode>` | Config discovery mode (false, ignore-descendants, global) |
| `--plugins <urls/files>` | Override plugins from config file |
| `-L, --log-level <level>` | Set log level (debug, info, warn, error, silent) |

## Basic Usage

```bash
# Format all files
dprint fmt

# Check formatting without modifying
dprint check

# Format specific patterns
dprint fmt "**/*.{ts,tsx,js,jsx,json}"

# Check with verbose output
dprint check --verbose

# Use custom config
dprint fmt --config ./config/dprint.json

# Format with specific plugins
dprint fmt --plugins typescript,json

# Show files that would be formatted
dprint output-file-paths "**/*.ts"
```

## Advanced Usage

```bash
# Show resolved configuration
dprint output-resolved-config

# Benchmark formatting performance
dprint output-format-times

# Clear and rebuild cache
dprint clear-cache

# Upgrade dprint
dprint upgrade

# Generate shell completions
dprint completions bash > ~/.local/share/bash-completion/completions/dprint
```

## Environment Variables

| Variable | Description |
|----------|-------------|
| `DPRINT_MAX_THREADS` | Limit formatting threads |
| `DPRINT_CACHE_DIR` | Cache directory location |
| `DPRINT_CONFIG_DIR` | Global config directory |
| `DPRINT_CONFIG_DISCOVERY` | Config discovery mode |
| `DPRINT_CERT` | Certificate authority file |
| `DPRINT_TLS_CA_STORE` | Certificate stores |
| `DPRINT_IGNORE_CERTS` | Ignore certificates |
| `DPRINT_EDITOR` | Editor for config files |
| `HTTPS_PROXY` | Proxy for downloads |

## Supported Languages

### Official Plugins

- **TypeScript/JavaScript**: `typescript-0.88.1.wasm`
- **JSON/JSONC**: `json-0.19.1.wasm`
- **Markdown**: `markdown-0.16.2.wasm`
- **TOML**: `toml-0.6.0.wasm`
- **Rust**: `rust-0.7.2.wasm`
- **CSS/SCSS/Sass/Less**: `css-0.2.3.wasm`
- **Dockerfile**: `dockerfile-0.3.1.wasm`
- **YAML**: `yaml-0.4.1.wasm`
- **ROS2**: `ros2-0.2.0.wasm`

### Plugin URLs

```json
{
  "plugins": [
    "https://plugins.dprint.dev/typescript-0.88.1.wasm",
    "https://plugins.dprint.dev/json-0.19.1.wasm",
    "https://plugins.dprint.dev/markdown-0.16.2.wasm",
    "https://plugins.dprint.dev/toml-0.6.0.wasm",
    "https://plugins.dprint.dev/rust-0.7.2.wasm",
    "https://plugins.dprint.dev/jupyter-0.1.2.wasm",
    "https://plugins.dprint.dev/dockerfile-0.3.1.wasm",
    "https://plugins.dprint.dev/yaml-0.4.1.wasm",
    "https://plugins.dprint.dev/ros2-0.2.0.wasm"
  ]
}
```

## Integration Examples

### Git Hooks

```yaml
repos:
  - repo: local
    hooks:
      - id: dprint
        name: dprint fmt
        entry: dprint fmt
        language: system
        types: [text]

# Or manually
dprint fmt && git add -A
```

### CI/CD

```yaml
name: Check formatting
run: dprint check

# Format and commit
name: Format code
run: |
  dprint fmt
  git config --local user.email "action@github.com"
  git config --local user.name "GitHub Action"
  git add -A
  git commit -m "Format code" || exit 0
  git push
```

### Editor Integration

```bash
# VS Code settings.json
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "dprint.dprint",
  "dprint.path": "dprint"
}

# Vim/Neovim
set formatprg=dprint\ fmt\ --stdin\ --fmt=stdin
```

### Pre-commit Script

```bash
# pre-commit hook
dprint check
if [ $? -ne 0 ]; then
    echo "Code is not formatted. Run 'dprint fmt' to fix."
    exit 1
fi
```

## Performance Tips

1. **Use cache**: Dprint caches plugins for faster startup
2. **Limit threads**: Use `DPRINT_MAX_THREADS` for resource control
3. **Exclude directories**: Add `node_modules`, `target`, etc. to excludes
4. **Specific patterns**: Format only changed files for large projects
5. **Local plugins**: Use local plugin URLs for offline development

## Language Server

```bash
# Start LSP server for editor integration
dprint lsp

# Use with specific config
dprint lsp --config ./dprint.json
```

## Features

- **Pluggable**: Add/remove formatting plugins
- **Fast**: Written in Rust with performance focus
- **Configurable**: Extensive configuration options
- **Cross-platform**: Windows, macOS, Linux
- **Language server**: Editor integration support
- **Caching**: Plugin and configuration caching
- **Incremental**: Format only changed files
- **Parallel**: Multi-threaded formatting
- **Extensible**: Create custom plugins

## Help

```bash
dprint --help
```

Output:

```
dprint 0.88.1
Darren Schroeder <dschroeder@users.noreply.github.com>
A pluggable and configurable code formatting platform

USAGE:
    dprint [SUBCOMMAND]

FLAGS:
    -h, --help       Prints help information
    -V, --version    Prints version information

SUBCOMMANDS:
    add         Add a plugin to the configuration file
    check       Check for files that haven't been formatted
    clear-cache Delete plugin cache directory
    completions Generate shell completions
    config      Configuration file functionality
    fmt         Format source files and write to filesystem
    help        Prints this message or the help of the given subcommand(s)
    init        Initialize configuration file in current directory
    lsp         Start language server for formatting
    output-file-paths Print resolved file paths
    output-format-times Print formatting time for debugging
    output-resolved-config Print resolved configuration
    upgrade     Upgrade dprint executable
```

Note: The `--help` output is subject to change and may not reflect the exact output of the `dprint` command.
