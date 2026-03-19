---
description: Modern ls replacement with icons, colors, Git integration, and advanced features
title: cli-eza
tags: [cli, files, listing, git, icons]
---

## Overview

`eza` เป็น modern replacement สำหรับ `ls` มี icons, colors, git integration และ features เพิ่มเติมมากมาย พร้อม performance ที่ดีกว่าเดิม

## Installation

```powershell
scoop install eza
# หรือ
choco install eza
# หรือ
cargo install eza
```

## Basic Usage

```bash
# Basic listing with icons
eza

# Long format with icons
eza -l

# Tree view
eza --tree

# Show all files including hidden
eza -a

# Grid view
eza --grid

# Across grid (horizontal first)
eza --across
```

## Display Options

| Flag | Description |
|------|-------------|
| `-1, --oneline` | Display one entry per line |
| `-l, --long` | Display extended metadata as table |
| `-G, --grid` | Display entries as grid (default) |
| `-x, --across` | Sort grid across instead of down |
| `-R, --recurse` | Recurse into directories |
| `-T, --tree` | Tree view |
| `-X, --dereference` | Dereference symbolic links |
| `-F, --classify=WHEN` | File type indicators (always, auto, never) |
| `--color=WHEN` | Color control (always, auto, never) |
| `--color-scale` | Highlight levels distinctly |
| `--icons=WHEN` | Icon display (always, auto, never) |
| `--no-quotes` | Don't quote file names with spaces |
| `--hyperlink` | Display entries as hyperlinks |
| `--absolute` | Show absolute paths |
| `--follow-symlinks` | Drill down into symbolic links |
| `-w, --width COLS` | Set screen width |

## Filtering and Sorting Options

| Flag | Description |
|------|-------------|
| `-a, --all` | Show hidden and dot files |
| `-A, --almost-all` | Same as --all |
| `-d, --treat-dirs-as-files` | List directories as files |
| `-D, --only-dirs` | List only directories |
| `-f, --only-files` | List only files |
| `--show-symlinks` | Explicitly show symbolic links |
| `--no-symlinks` | Don't show symbolic links |
| `-L, --level DEPTH` | Limit recursion depth |
| `-r, --reverse` | Reverse sort order |
| `-s, --sort SORT_FIELD` | Sort by field |
| `--group-directories-first` | List directories first |
| `--group-directories-last` | List directories last |
| `-I, --ignore-glob GLOBS` | Ignore glob patterns |
| `--git-ignore` | Ignore files in .gitignore |

### Sort Fields

Valid sort fields: name, Name, extension, Extension, size, type, created, modified, accessed, changed, inode, none, date, time, old, new

## Long View Options

| Flag | Description |
|------|-------------|
| `-b, --binary` | Binary prefixes for file sizes |
| `-B, --bytes` | File sizes in bytes |
| `-g, --group` | Show file group |
| `--smart-group` | Show group only if different from owner |
| `-h, --header` | Add header row |
| `-H, --links` | Show hard link count |
| `-i, --inode` | Show inode number |
| `-M, --mounts` | Show mount details (Linux/Mac only) |
| `-n, --numeric` | Numeric user/group IDs |
| `-O, --flags` | File flags (Mac/BSD/Windows only) |
| `-S, --blocksize` | File system block size |
| `-t, --time FIELD` | Timestamp field (modified, accessed, created) |
| `-m, --modified` | Use modified timestamp |
| `-u, --accessed` | Use accessed timestamp |
| `-U, --created` | Use created timestamp |
| `--changed` | Use changed timestamp |
| `--time-style` | Timestamp format (default, iso, long-iso, full-iso, relative) |
| `--total-size` | Directory size as sum of contents (Unix only) |
| `-o, --octal-permissions` | Permissions in octal |
| `--no-permissions` | Suppress permissions field |
| `--no-filesize` | Suppress file size field |
| `--no-user` | Suppress user field |
| `--no-time` | Suppress time field |
| `--git` | Show Git status |
| `--no-git` | Suppress Git status |
| `--git-repos` | Show git repository information |
| `--git-repos-no-status` | Show git branch names only |
| `--stdin` | Read file names from stdin |

## Advanced Usage

```bash
# Tree view with depth limit
eza --tree --level 2

# Sort by modification time, newest first
eza -l --sort modified

# Show only directories, group first
eza -D --group-directories-first

# Long view with custom timestamp format
eza -l --time-style iso

# Show git status in long view
eza -l --git

# Grid view with custom width
eza --grid --width 120

# Ignore patterns
eza -I "*.log,node_modules"

# Follow symlinks to directories
eza --follow-symlinks

# Show absolute paths
eza --absolute

# Color scale by file size
eza --color-scale=size

# Hyperlinks for terminals that support them
eza --hyperlink

# Read from stdin
find . -name "*.txt" | eza --stdin
```

## Git Integration

```bash
# Show git status indicators
eza --git

# Long view with git status
eza -l --git

# Show git repository information
eza --git-repos

# Fast git status (no file status)
eza --git-repos-no-status
```

## Icon and Color Options

```bash
# Always show icons
eza --icons=always

# Always use colors
eza --color=always

# Color scale by different fields
eza --color-scale=age    # By file age
eza --color-scale=size   # By file size

# No quotes around filenames with spaces
eza --no-quotes
```

## Tree View Examples

```bash
# Basic tree
eza --tree

# Tree with depth limit
eza --tree --level 3

# Long format tree
eza --tree --long

# Tree with git status
eza --tree --git

# Tree ignoring certain directories
eza --tree --ignore-glob "node_modules,target"
```

## Aliases

```bash
# Add to shell config (.bashrc, .zshrc, etc.)
alias ls='eza --icons'
alias ll='eza -l --icons --git'
alias la='eza -la --icons --git'
alias lt='eza --tree --icons'
alias lla='eza -la --icons --git --tree'
alias lg='eza -l --git --icons --group-directories-first'

# Advanced aliases
alias lsize='eza -l --sort=size --reverse'
alias ltime='eza -l --sort=modified --reverse'
alias lext='eza -l --sort=extension'
alias ldir='eza -D --icons'
```

## Integration Examples

### With fzf

```bash
# Fuzzy file selection with preview
eza --long --git | fzf --preview 'eza --long --git {}'

# Directory browser
eza --tree --level 2 | fzf | cd
```

### With ripgrep

```bash
# Find files and show details
rg -l "pattern" | xargs eza -l --git
```

### Git Workflow

```bash
# Show modified files
eza --git --long | grep "M "

# Show untracked files
eza --git --long | grep "?? "

# Show all git status
eza --git-repos
```

## Performance Tips

1. **Use --level** for deep directories to limit recursion
2. **Ignore patterns** with `-I` to exclude large directories
3. **Use --git-repos-no-status** for faster git information
4. **Disable features** you don't need (e.g., `--no-git`)

## Configuration

While eza doesn't have a config file, you can create shell functions:

```bash
# Custom eza function with defaults
exz() {
    eza --icons --git --group-directories-first "$@"
}

# Function for different views
lls() {
    eza -l --icons --git --color-scale=size "$@"
}

lds() {
    eza -D --icons --sort=size --reverse "$@"
}
```

## Use Cases

### Quick Directory Overview

```bash
# Standard view
eza

# Detailed view
eza -l --git

# Tree structure
eza --tree --level 2
```

### File Management

```bash
# Find large files
eza -l --sort=size --reverse | head -10

# Find recently modified files
eza -l --sort=modified --reverse | head -10

# Show only directories
eza -D --icons
```

### Development

```bash
# Show project structure
eza --tree --ignore-glob "node_modules,target,.git"

# Git status overview
eza -l --git --group-directories-first

# Find specific file types
eza -I "*.ts,*.tsx,*.js,*.jsx" --tree
```

## Features

- **Fast**: Written in Rust for performance
- **Modern**: Icons, colors, Git integration
- **Flexible**: Multiple view modes and sorting options
- **Cross-platform**: Windows, macOS, Linux support
- **Git aware**: Show file status and repository information
- **Tree view**: Hierarchical directory display
- **Hyperlinks**: Terminal hyperlink support
- **Color scales**: Visual size/age indicators
- **Customizable**: Extensive filtering and display options
- **Compatible**: ls-like behavior for easy migration
