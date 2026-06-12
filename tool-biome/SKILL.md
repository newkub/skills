# tool-biome

## Overview

Guide for using Biome - a fast, all-in-one toolchain for web development with formatting, linting, and code analysis capabilities.


## When to use



## Skills Related



## References


## What is Biome?

Biome is a high-performance toolchain for web projects built with Rust. It provides:
- **Formatter** for JavaScript, TypeScript, JSX, TSX, JSON, CSS, HTML, and GraphQL
- **Linter** with 200+ rules to catch common mistakes and enforce best practices
- **Editor integration** via LSP for real-time feedback

## Quick Start

```bash
# Install Biome
npm install --save-dev @biomejs/biome

# Format files
npx biome format --write ./src

# Lint files
npx biome lint ./src

# Check (format + lint)
npx biome check --write ./src

# CI mode (read-only, no write)
npx biome ci ./src
```

## Core Commands

| Command | Description |
|---------|-------------|
| `biome format` | Format source files |
| `biome lint` | Lint source files |
| `biome check` | Run format + lint together |
| `biome ci` | Run in CI mode (non-interactive) |

## Supported Languages

- JavaScript / TypeScript
- JSX / TSX
- JSON
- CSS
- HTML
- GraphQL

## Resources

- Website: https://biomejs.dev/
- GitHub: https://github.com/biomejs/biome
- npm: `@biomejs/biome`