# tool-my-cli

## Overview

CLI skills for command-line tools and utilities that help increase productivity in development workflow. This skill documents essential CLI tools organized by category.


## When to use



## Skills Related



## References


## File Structure

| Folder | Description |
|--------|-------------|
| [guide/](guide/) | Individual tool guides and documentation |
| [references/](references/) | CLI commands and configuration references |

## Usage Order

1. **Start**: `guide/key-concept.md` → `guide/features.md`
2. **Learn**: Browse individual tool guides in `guide/`
3. **Reference**: `references/cli.md` → `references/configuration.md`

## Guide Files

| File | Description |
|------|-------------|
| [key-concept.md](guide/key-concept.md) | Core concepts and overview |
| [how-it-works.md](guide/how-it-works.md) | How these tools work |
| [features.md](guide/features.md) | Key features overview |
| [installation.md](guide/installation.md) | Installation guide |
| [configuration.md](guide/configuration.md) | Configuration guide |
| [best-practices.md](guide/best-practices.md) | Best practices |

## Individual Tool Guides

### File Management & Search

| File | Tool | Description |
|------|------|-------------|
| [fd.md](guide/fd.md) | fd | Fast alternative to find |
| [eza.md](guide/eza.md) | eza | Modern ls replacement |
| [bat.md](guide/bat.md) | bat | Cat clone with syntax highlighting |
| [ripgrep.md](guide/ripgrep.md) | ripgrep | Ultra-fast grep alternative |
| [sad.md](guide/sad.md) | sad | Search and replace |
| [sd.md](guide/sd.md) | sd | Intuitive sed alternative |
| [fzf.md](guide/fzf.md) | fzf | Fuzzy finder |
| [yazi.md](guide/yazi.md) | yazi | Terminal file manager |

### System Tools

| File | Tool | Description |
|------|------|-------------|
| [bottom.md](guide/bottom.md) | bottom | System monitor |
| [fastfetch.md](guide/fastfetch.md) | fastfetch | System information |
| [tokei.md](guide/tokei.md) | tokei | Code statistics |
| [dua.md](guide/dua.md) | dua | Disk usage analyzer |
| [duf.md](guide/duf.md) | duf | Disk usage utility |

### Development Tools

| File | Tool | Description |
|------|------|-------------|
| [mise.md](guide/mise.md) | mise | Dev tools version manager |
| [task.md](guide/task.md) | task | Task runner / Make alternative |
| [starship.md](guide/starship.md) | starship | Shell prompt |
| [hyperfine.md](guide/hyperfine.md) | hyperfine | Benchmarking |
| [zoxide.md](guide/zoxide.md) | zoxide | Smart cd command |
| [sccache.md](guide/sccache.md) | sccache | Compiler cache |
| [uv.md](guide/uv.md) | uv | Fast Python package manager |

### Git Tools

| File | Tool | Description |
|------|------|-------------|
| [gh.md](guide/gh.md) | gh | GitHub CLI |
| [gitui.md](guide/gitui.md) | gitui | Terminal UI for git |
| [lefthook.md](guide/lefthook.md) | lefthook | Git hooks manager |

### Formatters & Editors

| File | Tool | Description |
|------|------|-------------|
| [dprint.md](guide/dprint.md) | dprint | Code formatter |
| [helix.md](guide/helix.md) | helix | Modal text editor |
| [glow.md](guide/glow.md) | glow | Markdown viewer |
| [chezmoi.md](guide/chezmoi.md) | chezmoi | Dotfiles manager |

## Reference Files

| File | Description |
|------|-------------|
| [cli.md](references/cli.md) | CLI commands reference |
| [configuration.md](references/configuration.md) | Configuration options |
| [api.md](references/api.md) | Programmatic API reference |

## Quick Commands

```bash
# File operations
fd pattern | fzf --preview 'bat --color=always {}'
rg "pattern" --type rust

# System
fastfetch
bottom --process-filter "node|python"
tokei --sort lines

# Development
mise install node@20 python@3.12
task build
```

## Installation

Most tools can be installed via:
- **Windows**: `scoop install <tool>`, `winget install <tool>`
- **macOS**: `brew install <tool>`
- **Linux**: Package manager or `cargo install <tool>`

## Key Features

### Modern Replacements

| Traditional | Modern Alternative |
|-------------|---------------------|
| `ls` | eza |
| `cat` | bat |
| `find` | fd |
| `grep` | ripgrep |
| `sed` | sd/sad |
| `make` | task |

### Performance

- **uv**: 10-100x faster than pip for Python
- **ripgrep**: Ultra-fast search with parallel processing
- **sccache**: Distributed compiler caching
- **tokei**: Fast code statistics