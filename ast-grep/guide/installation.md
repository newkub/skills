# Installation

Install AST-grep CLI tool for your development environment.

## System Requirements

- Node.js 16+ or Bun
- Rust toolchain (for building from source)
- Git (for version control)

## Installation Methods

### Using Bun (Recommended)

```bash
# Install as dev dependency
bun add -D @ast-grep/cli

# Verify installation
bunx ast-grep --version
```

### Using npm

```bash
# Install globally
npm install -g @ast-grep/cli

# Or as dev dependency
npm install -D @ast-grep/cli

# Verify installation
ast-grep --version
```

### Using Cargo

```bash
# Install from crates.io
cargo install ast-grep

# Verify installation
ast-grep --version
```

## Verification

After installation, verify the CLI is working:

```bash
# Check version
ast-grep --version

# Test basic functionality
ast-grep run -p 'console.log($ARG)' --help
```

## Editor Integration

### VS Code

Install the AST-grep extension for VS Code integration.

### Neovim

Use the built-in LSP server with nvim-lspconfig.

### Other Editors

AST-grep provides LSP server support for most modern editors.

## Next Steps

After installation, proceed to [Configuration](./configuration.md) to set up your project.
