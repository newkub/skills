---
description: CLI tools and command-line utilities
title: cli
tags: [cli, tools, utilities]
---

## Overview

CLI skills สำหรับ command-line tools และ utilities ที่ช่วยเพิ่ม productivity ในการพัฒนา

## Directory Structure

```
cli/
├── core/          # Core development tools
├── files/         # File management and search
├── git/           # Git and version control
├── system/        # System monitoring and analysis
├── devops/        # DevOps and infrastructure
└── README.md      # Main documentation
```

## Core Development Tools

| Skill | Description |
|-------|-------------|
| [cli-task](./core/cli-task.md) | Task runner / Make alternative |
| [cli-mise](./core/cli-mise.md) | Dev tools version manager |
| [cli-uv](./core/cli-uv.md) | Fast Python package manager (10-100x faster than pip) |
| [cli-sccache](./core/cli-sccache.md) | Compiler cache for faster builds |
| [cli-starship](./core/cli-starship.md) | Minimal, fast, customizable shell prompt |
| [cli-helix](./core/cli-helix.md) | Post-modern modal text editor |
| [cli-hyperfine](./core/cli-hyperfine.md) | Command-line benchmarking |
| [cli-zoxide](./core/cli-zoxide.md) | Smart cd command จำ directories ที่ใช้บ่อย |

## File Management & Search

| Skill | Description |
|-------|-------------|
| [cli-fd](./files/cli-fd.md) | Fast alternative to find |
| [cli-eza](./files/cli-eza.md) | Modern ls replacement with icons |
| [cli-bat](./files/cli-bat.md) | Cat clone with syntax highlighting |
| [cli-ripgrep](./files/cli-ripgrep.md) | Ultra-fast grep alternative |
| [cli-sad](./files/cli-sad.md) | Space Age seD - search and replace |
| [cli-sd](./files/cli-sd.md) | Intuitive sed alternative |
| [cli-dprint](./files/cli-dprint.md) | Pluggable code formatter |
| [cli-fzf](./files/cli-fzf.md) | Fuzzy finder สำหรับค้นหาไฟล์, history, processes |
| [cli-glow](./files/cli-glow.md) | Markdown viewer |
| [cli-yazi](./files/cli-yazi.md) | Terminal file manager |

## Git & Version Control

| Skill | Description |
|-------|-------------|
| [cli-gh](./git/cli-gh.md) | GitHub CLI |
| [cli-lefthook](./git/cli-lefthook.md) | Git hooks manager |
| [cli-gitui](./git/cli-gitui.md) | Terminal UI for git |

## System Monitoring & Analysis

| Skill | Description |
|-------|-------------|
| [cli-bottom](./system/cli-bottom.md) | System monitor with graphs |
| [cli-tokei](./system/cli-tokei.md) | Code statistics counter |
| [cli-dua](./system/cli-dua.md) | Disk usage analyzer |
| [cli-duf](./system/cli-duf.md) | Disk usage utility |
| [cli-fastfetch](./system/cli-fastfetch.md) | System information display |

## DevOps & Infrastructure

| Skill | Description |
|-------|-------------|
| [cli-chezmoi](./devops/cli-chezmoi.md) | Dotfiles manager |

## Key Features

### Performance Optimized
- **uv**: 10-100x faster than pip for Python packages
- **ripgrep**: Ultra-fast search with parallel processing
- **sccache**: Distributed compiler caching
- **tokei**: Fast code statistics with multi-threading

### Modern Replacements
- **eza** → `ls` (modern file listing)
- **bat** → `cat` (syntax highlighting)
- **fd** → `find` (user-friendly file search)
- **ripgrep** → `grep` (faster searching)
- **sd/sad** → `sed` (intuitive search/replace)
- **task** → `make` (simpler task runner)

### Cross-Platform Support
All tools support Windows, macOS, and Linux with consistent interfaces and package manager installations.

## Common Workflows

### Development Setup
```bash
# Environment management
mise install node@20 python@3.11

# Navigation
z project-name

# File operations
fd | fzf --preview 'bat --color=always {}'
rg "pattern" --type rust

# Git workflow
gitui
gh pr create
```

### System Monitoring
```bash
# Monitor processes
bottom --process-filter "node|python|cargo"

# Check system info
fastfetch

# Analyze code
tokei --sort lines
```

### Build Automation
```bash
# Task runner
task build
task test

# Fast compilation
export RUSTC_WRAPPER=sccache
cargo build

# Python packages
uv pip install -r requirements.txt
```

## Installation

Most tools can be installed via:
- **Windows**: `scoop install <tool>`, `choco install <tool>`, `winget install <tool>`
- **macOS**: `brew install <tool>`
- **Linux**: Package manager or `cargo install <tool>`

## Configuration

Tools typically use configuration files in:
- `~/.config/<tool>/config.toml`
- `~/.<tool>rc`
- Project-specific configuration files

## Integration

These tools work seamlessly together:
- `mise` manages language versions used by `uv`
- `task` can orchestrate builds using `sccache`
- `starship` displays context from all tools
- `zoxide` remembers project directories
- `fzf` integrates with `fd`, `rg`, and `bat`

## Best Practices

1. **Start with essentials**: `eza`, `fd`, `ripgrep`, `bat`
2. **Add development tools**: `mise`, `task`, `starship`
3. **Configure shell integration**: `zoxide`, `fzf` key bindings
4. **Set up monitoring**: `bottom`, `fastfetch`
5. **Customize**: Edit configuration files to match workflow

## Additional Resources

- [Main README](./README.md) - Complete documentation
- [Individual category READMEs] - Detailed guides for each category
- [Package managers](../package-manager/) - Package management guides
- [Search techniques](../search-guide/) - Advanced search methods
