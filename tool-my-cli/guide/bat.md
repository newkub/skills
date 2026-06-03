---
description: Cat clone with syntax highlighting, Git integration, and advanced pagination
title: cli-bat
tags: [cli, viewer, syntax, git]
---

## Overview

`bat` เป็น modern cat replacement ที่มี syntax highlighting, line numbers, Git integration, paging และฟีเจอร์ขั้นสูงอื่นๆ

## Installation

```powershell
scoop install bat
# หรือ
cargo install bat
```

## Basic Usage

```bash
# View file with syntax highlighting
bat file.rs

# View multiple files
bat file1.ts file2.ts

# Show non-printable characters
bat -A file.txt

# Display specific line range
bat -r 30:40 file.go

# View with custom theme
bat --theme=GitHub script.py
```

## Display Options

| Flag | Description |
|------|-------------|
| `-n, --number` | Show line numbers only |
| `--style <components>` | Control display elements (numbers,changes,grid,header,rule,snip) |
| `--theme <theme>` | Set color theme (auto, dark, light, or specific theme) |
| `-A, --show-all` | Show all characters including non-printable |
| `-r, --line-range <N:M>` | Display specific line range |
| `-s, --squeeze-blank` | Squeeze consecutive empty lines |
| `--list-themes` | Show all available themes |
| `-L, --list-languages` | Show supported languages |

## Color & Decoration Control

| Flag | Description |
|------|-------------|
| `--color <when>` | When to use colors (auto, never, always) |
| `--decorations <when>` | When to show decorations (auto, never, always) |
| `--italic-text <when>` | When to use italic text (always, never) |
| `-f, --force-colorization` | Force colors and decorations |
| `--strip-ansi <when>` | Strip ANSI escape sequences |

## Pagination Control

| Flag | Description |
|------|-------------|
| `--paging <when>` | When to use pager (auto, never, always) |
| `-P` | Disable pager (alias for --paging=never) |
| `--pager <command>` | Set custom pager (default: less) |
| `--set-terminal-title` | Set terminal title to filenames |

## Advanced Features

```bash
# Map custom syntax
bat -m '*.build:Python' my_file.build

# Ignore file extensions
bat --ignored-suffix ".dev" my_file.json.dev

# Use built-in pager
bat --pager=builtin file.md

# Terminal width control
bat --terminal-width 120 file.txt
bat --terminal-width +20 file.txt  # offset from actual width
bat --terminal-width auto file.txt  # automatically detect terminal width
```

## Integration Examples

```bash
# With fzf preview
fzf --preview 'bat --color=always {}' --preview-window=right:50%

# As man pager
export MANPAGER="sh -c 'col -bx | bat -l man -p'"

# Git diff with bat
git diff --name-only | xargs bat --diff

# Bat as cat replacement
alias cat='bat --paging=never --style=plain'

# Bat with less features
alias less='bat --pager="less -RF"'
```

## Configuration

Environment variables:

- `BAT_PAGING`: Default pagination behavior
- `BAT_THEME`: Default theme
- `BAT_STYLE`: Default style components
- `BAT_CACHE_DIR`: Cache directory location

## Cache Management

```bash
# Clear and rebuild cache
bat cache --clear
bat cache --build

# Show cache info
bat cache --source-dir ~/.local/share/bat
```

## Additional Options

| Option | Description |
|--------|-------------|
| `-h, --help` | Print help (see a summary with '-h') |
| `-V, --version` | Print version |
| `--map-syntax <glob:syntax>` | Map a glob pattern to an existing syntax name |
| `--ignored-suffix <ignored-suffix>` | Ignore extension |
| `--list-themes` | Display a list of supported themes |
| `--squeeze-limit <squeeze-limit>` | Set maximum number of consecutive empty lines |
| `--strip-ansi <when>` | Specify when to strip ANSI escape sequences |
| `--diagnostic` | Show diagnostic information for bug reports |
| `--acknowledgements` | Show acknowledgements |
| `--set-terminal-title` | Sets terminal title to filenames when using a pager |
| `--completion <SHELL>` | Show shell completion for a certain shell |
| `-u, --unbuffered` | This option exists for POSIX-compliance reasons ('u' is for 'unbuffered') |

You can use 'bat cache' to customize syntaxes and themes. See 'bat cache --help' for more information.
