---
description: The front-end to your dev environment with comprehensive version management
title: cli-mise
tags: [cli, version-manager, dev-tools, environment, runtime]
---

## Overview

`mise` (formerly rtx) เป็น dev tools version manager ที่จัดการ versions ของ programming languages, tools และ dependencies พร้อม environment management และ task runner capabilities

## Installation

```powershell
scoop install mise
# หรือ
choco install mise
# หรือ
curl https://mise.run | sh
# หรือ
cargo install mise
```

## Shell Setup

### PowerShell

```powershell
# Add to $PROFILE
mise activate pwsh | Out-String | Invoke-Expression

# Or add to profile permanently
echo 'mise activate pwsh | Out-String | Invoke-Expression' >> $PROFILE
```

### Bash

```bash
# Add to ~/.bashrc
echo 'eval "$(mise activate bash)"' >> ~/.bashrc

# Or source directly
eval "$(mise activate bash)"
```

### Zsh

```bash
# Add to ~/.zshrc
echo 'eval "$(mise activate zsh)"' >> ~/.zshrc

# Or source directly
eval "$(mise activate zsh)"
```

### Fish

```bash
# Add to ~/.config/fish/config.fish
echo 'mise activate fish | source' >> ~/.config/fish/config.fish

# Or source directly
mise activate fish | source
```

## Command Line Options

| Flag | Description |
|------|-------------|
| `-q, --quiet` | Quiet mode |
| `-v, --verbose` | Verbose output |
| `--debug` | Debug output |
| `-y, --yes` | Auto-confirm prompts |
| `--no-progress` | Disable progress bars |
| `--log-level <level>` | Log level (error, warn, info, debug, trace) |
| `--profile <profile>` | Profile execution time |
| `--help` | Show help |
| `--version` | Show version |

## Basic Usage

### Tool Management

```bash
# Install tool
mise install nodejs@20
mise install python@3.11
mise install rust@latest

# Install multiple tools
mise install nodejs@20 python@3.11 rust@latest

# Install all tools from config
mise install

# Use specific version
mise use nodejs@20
mise use python@3.11

# Set global version
mise use -g nodejs@20
mise use -g python@3.11

# List installed versions
mise list
mise list nodejs

# List available versions
mise ls-remote nodejs
mise ls-remote python@3.11

# Uninstall tool
mise uninstall nodejs@18
mise uninstall --all
```

### Environment Management

```bash
# Set environment variable
mise set NODE_ENV development
mise set DATABASE_URL postgresql://localhost/mydb

# List environment variables
mise env

# Unset environment variable
mise unset NODE_ENV

# Load environment from file
mise env load .env

# Export environment
mise env -s
```

### Task Runner

```bash
# Run task
mise run build
mise run test
mise run lint

# Run task with arguments
mise run build --production

# List available tasks
mise run --list

# Run task from specific directory
mise run -C /path/to/project test
```

## Configuration

### Global Configuration

Config file: `~/.config/mise/config.toml`

```toml
[tools]
nodejs = "20"
python = "3.11"
rust = "latest"
go = "1.21"

[env]
NODE_ENV = "development"
DATABASE_URL = "postgresql://localhost/mydb"

[alias]
node = "nodejs"
py = "python"
rb = "ruby"

[settings]
always_keep_download = true
legacy_version_file = true
plugin_autoupdate_last_check_duration = 7
```

### Project Configuration

Config file: `.mise.toml` หรือ `mise.toml`

```toml
[tools]
nodejs = "20"
python = "3.11"
npm = "latest"
yarn = "latest"

[env]
NODE_ENV = "development"
PORT = "3000"

[tasks.build]
run = "npm run build"
description = "Build the project"

[tasks.test]
run = "npm test"
description = "Run tests"

[tasks.lint]
run = "npm run lint"
description = "Lint code"

[tasks.dev]
run = "npm run dev"
description = "Start development server"
```

### Advanced Configuration

```toml
[tools]
# Version ranges
nodejs = "18, 20"
python = "3.10, 3.11"

# Latest stable
rust = "latest"
go = "latest"

# Specific versions
java = "21"
maven = "3.9"

[env]
# Environment variables
NODE_ENV = "development"
DATABASE_URL = "postgresql://localhost/mydb"
API_KEY = "${API_KEY_FROM_ENV}"

# Path modifications
PATH = ["./node_modules/.bin", "$PATH"]

[tasks]
# Complex tasks
[tasks.build]
run = ["npm run build", "npm run test"]
env = { NODE_ENV = "production" }
depends = ["clean"]

[tasks.clean]
run = "rm -rf dist node_modules"

[tasks.deploy]
run = "npm run build && npm run deploy"
depends = ["build", "test"]

# Task aliases
[tasks.serve]
alias = "dev"

# Task with arguments
[tasks.test]
run = "npm test --"
args = ["--coverage"]

[settings]
# Mise settings
always_keep_download = true
legacy_version_file = true
plugin_autoupdate_last_check_duration = 7
not_found_auto_install = true
verbose = false
```

## Advanced Features

### Version Files

```bash
# Create .node-version
echo "20" > .node-version

# Create .python-version
echo "3.11" > .python-version

# Create .tool-versions
echo "nodejs 20" > .tool-versions
echo "python 3.11" >> .tool-versions
echo "rust latest" >> .tool-versions

# Use mise.toml
mise use nodejs@20 python@3.11
```

### Plugin Management

```bash
# List available plugins
mise plugins ls

# Install plugin
mise plugin install nodejs

# Update plugin
mise plugin update nodejs

# Remove plugin
mise plugin uninstall nodejs

# Clear plugin cache
mise plugin clear nodejs
```

### Runtime Execution

```bash
# Execute with specific version
mise exec nodejs@18 -- node --version
mise exec python@3.10 -- python --version

# Execute with current context
mise exec -- npm --version

# Execute with custom environment
mise exec -e NODE_ENV=production -- npm run build
```

### Directory Management

```bash
# Install tools in specific directory
mise install -C /path/to/project

# Use tools in specific directory
mise use -C /path/to/project nodejs@20

# Run tasks in specific directory
mise run -C /path/to/project build
```

## Integration Examples

### Node.js Development

```bash
# Setup Node.js project
mise use nodejs@20 npm@latest
mise set NODE_ENV=development

# Install dependencies
npm install

# Run development
mise run dev

# Build for production
mise run build
```

### Python Development

```bash
# Setup Python project
mise use python@3.11 pip@latest
mise set PYTHONPATH=.

# Create virtual environment
python -m venv venv
source venv/bin/activate

# Install dependencies
pip install -r requirements.txt

# Run tests
mise run test
```

### Multi-Language Project

```bash
# .mise.toml
[tools]
nodejs = "20"
python = "3.11"
rust = "latest"

[tasks.install]
run = ["npm install", "pip install -r requirements.txt", "cargo build"]

[tasks.test]
run = ["npm test", "python -m pytest", "cargo test"]
```

### CI/CD Integration

```bash
# GitHub Actions
- name: Setup mise
  uses: jdx/mise-action@v2

- name: Install tools
  run: mise install

- name: Run tests
  run: mise run test
```

## Performance Optimization

### Caching

```bash
# Clear cache
mise cache clear

# List cache
mise cache ls

# Clear specific cache
mise cache clear nodejs
```

### Parallel Installation

```bash
# Install tools in parallel
mise install --jobs 4

# Install all tools with parallel execution
mise install --all --jobs 8
```

### Lazy Loading

```toml
# .mise.toml
[settings]
not_found_auto_install = true
always_keep_download = true
```

## Troubleshooting

### Common Issues

1. **Activation not working**: Check shell configuration
2. **Tool not found**: Run `mise install`
3. **Version conflicts**: Check `.mise.toml` configuration
4. **Path issues**: Verify `mise env` output

### Debug Mode

```bash
# Enable debug output
mise --debug install nodejs@20

# Check environment
mise env

# Verify installation
mise doctor

# Check tool status
mise ls
```

## Aliases and Functions

### Common Aliases

```bash
# Shell aliases
alias m='mise'
alias mi='mise install'
alias mu='mise use'
alias ml='mise list'
alias mr='mise run'
alias me='mise exec'
```

### Custom Functions

```bash
# Quick tool switch
ms() {
    mise use "$@"
}

# Task runner with auto-install
mrun() {
    mise install && mise run "$@"
}

# Environment setter
mset() {
    mise set "$@"
    mise env
}
```

## Features

- **Multi-language support**: 100+ tools and languages
- **Environment management**: Per-project environment variables
- **Task runner**: Built-in task execution system
- **Version files**: Support for `.nvmrc`, `.pyenv-version`, etc.
- **Parallel execution**: Install tools concurrently
- **Caching**: Fast tool switching with caching
- **Cross-platform**: Windows, macOS, Linux support
- **Shell integration**: Seamless shell activation
- **Configuration as code**: TOML-based configuration
- **Plugin system**: Extensible plugin architecture
- **Runtime execution**: Execute commands with specific versions
- **Auto-install**: Install missing tools automatically
- **Legacy support**: Compatible with existing version files
- **Performance**: Optimized for speed and efficiency
- **Development tools**: Integrated development workflow
- **CI/CD ready**: Designed for automation environments
