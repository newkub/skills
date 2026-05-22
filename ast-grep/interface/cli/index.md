# CLI Reference

## Installation

| Method | Documentation |
|--------|---------------|
| **Installation** | [installation.md](./installation.md) |

## Commands

| Command | Documentation |
|---------|---------------|
| **ast-grep run** | [commands/run.md](./commands/run.md) |
| **ast-grep scan** | [commands/scan.md](./commands/scan.md) |
| **ast-grep test** | [commands/test.md](./commands/test.md) |
| **ast-grep new** | [commands/new.md](./commands/new.md) |
| **ast-grep lsp** | [commands/lsp.md](./commands/lsp.md) |
| **ast-grep completions** | [commands/completions.md](./commands/completions.md) |

## Configuration

| Topic | Documentation |
|-------|---------------|
| **Configuration** | [configuration.md](./configuration.md) |
| **Usage Examples** | [usage-examples.md](./usage-examples.md) |
| **Output Formats** | [output-formats.md](./output-formats.md) |
| **Exit Codes** | [exit-codes.md](./exit-codes.md) |

## Reference

| Topic | Documentation |
|-------|---------------|
| **Performance Tips** | [performance-tips.md](./performance-tips.md) |
| **Troubleshooting** | [troubleshooting.md](./troubleshooting.md) |
| **Integration** | [integration.md](./integration.md) |

## Quick Start

```bash
# Install
npm install -g @ast-grep/cli

# Basic search
ast-grep run -p 'console.log($ARG)'

# Scan with rules
ast-grep scan --config sgconfig.yml

# Interactive fix
ast-grep scan --config sgconfig.yml --interactive
```
