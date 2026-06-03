---
description: Blazing fast terminal-ui for git with advanced features and customization
title: cli-gitui
tags: [cli, git, tui, interface, workflow]
---

## Overview

`gitui` เป็น terminal UI สำหรับ git ที่เร็วและใช้งานง่าย ให้ประสบการณ์คล้าย lazygit แต่เขียนด้วย Rust พร้อม features ขั้นสูงและ customization options

## Installation

```powershell
scoop install gitui
# หรือ
choco install gitui
# หรือ
cargo install gitui
```

## Basic Usage

```bash
# Open gitui in current repo
gitui

# Open in specific directory
gitui -d /path/to/repo

# Open with logging
gitui -l

# Open with theme
gitui -t my-theme.toml
```

## Command Line Options

| Flag | Description |
|------|-------------|
| `-d, --directory <path>` | Repository directory |
| `-l, --logging` | Enable logging |
| `-t, --theme <path>` | Theme file path |
| `-h, --help` | Show help |
| `-V, --version` | Show version |

## Key Bindings

### Navigation

| Key | Action |
|-----|--------|
| `Tab` / `Shift+Tab` | Switch tabs/views |
| `↑/↓` / `k/j` | Navigate up/down |
| `PgUp/PgDn` | Page up/down |
| `Home/End` | Jump to start/end |
| `g` | Go to top |
| `G` | Go to bottom |
| `1-9` | Jump to item (1-indexed) |
| `q` / `Ctrl+C` | Quit/exit |

### File Operations

| Key | Action |
|-----|--------|
| `Enter` / `Space` | Stage/unstage file |
| `c` / `s` | Stage all changes |
| `C` / `S` | Stage all files (including untracked) |
| `a` / `A` | Stage all files |
| `u` / `U` | Unstage all changes |
| `r` / `R` | Reset file (discard changes) |
| `d` / `D` | Diff selected file |
| `e` / `E` | Edit file in editor |
| `o` / `O` | Open file in external tool |

### Commit Operations

| Key | Action |
|-----|--------|
| `c` | Open commit dialog |
| `Enter` (in commit) | Commit with message |
| `Esc` | Cancel commit |
| `m` | Amend last commit |
| `M` | Amend last commit (no edit) |

### Branch Operations

| Key | Action |
|-----|--------|
| `b` | Open branch dialog |
| `n` | Create new branch |
| `d` | Delete branch |
| `r` | Rename branch |
| `Enter` | Checkout branch |

### Remote Operations

| Key | Action |
|-----|--------|
| `p` | Push |
| `P` | Push with force |
| `f` | Fetch |
| `F` | Fetch all remotes |
| `l` | Pull |
| `L` | Pull with rebase |

### Stash Operations

| Key | Action |
|-----|--------|
| `z` | Stash changes |
| `Z` | Stash with message |
| `x` | Pop stash |
| `X` | Apply stash |
| `d` | Drop stash |

### Other Operations

| Key | Action |
|-----|--------|
| `?` | Help |
| `w` | Toggle worktree |
| `t` | Toggle theme |
| `s` | Status |
| `h` | History/log |
| `r` | Refresh |
| `Ctrl+R` | Force refresh |
| `F1` | Open repo in browser |

## Tabs and Views

### Status Tab
- View staged/unstaged changes
- Stage/unstage files
- View diffs
- Commit changes

### Log Tab
- View commit history
- See commit details
- Checkout commits
- Search commits

### Stashing Tab
- View stashes
- Apply/pop stashes
- Drop stashes
- Create new stashes

### Stashes Tab
- Manage all stashes
- View stash contents
- Apply selective stashes

## Advanced Features

### Interactive Staging

```bash
# Open gitui for interactive staging
gitui

# Navigate to files with Tab
# Use Space/Enter to stage individual lines
# Use c to stage entire file
# Use C to stage all files
```

### Conflict Resolution

```bash
# When conflicts exist, gitui shows conflict UI
# Navigate through conflicts
# Choose resolution (ours/theirs/both)
# Stage resolved files
# Commit merge
```

### Branch Management

```bash
# Create and switch to new branch
gitui
# Press 'b' for branch dialog
# Press 'n' for new branch
# Enter branch name
# Press Enter to checkout
```

### Workflow Integration

```bash
# Complete workflow in gitui
gitui
# Stage changes -> Commit -> Push -> Pull requests
```

## Configuration

### Theme Configuration

Create `~/.config/gitui/theme.toml`:

```toml
[theme]
background = "#282c34"
foreground = "#abb2bf"
selected = "#61afef"
# Add more theme colors...
```

### Key Bindings Configuration

Create `~/.config/gitui/key_config.ron`:

```ron
[
    (
        key: "c",
        command: Stage,
        description: "Stage selected file",
    ),
    // Add more custom bindings...
]
```

## Integration Examples

### Editor Integration

```bash
# Set default editor
export GIT_EDITOR="nvim"

# Gitui will use this for 'e' key
gitui
```

### Git Hooks

```bash
# Pre-commit hook that opens gitui
#!/bin/sh
gitui --logging
```

### Aliases

```bash
# Git aliases for gitui
alias g='gitui'
alias gst='gitui'
alias glog='gitui'
```

### Workflow Automation

```bash
# Complete commit workflow
function gcommit() {
    gitui
    # Stage, commit, and push in one interface
}
```

## Performance Tips

1. **Large repositories**: Use `--logging` to debug performance
2. **Network operations**: Configure remote timeouts
3. **File watching**: Enable auto-refresh for active development
4. **Memory usage**: Close unused tabs and views

## Advanced Usage

### Worktree Support

```bash
# Manage multiple worktrees
gitui
# Press 'w' to toggle worktree view
```

### Submodule Management

```bash
# Work with git submodules
gitui
# Navigate submodule directories
# Stage submodule changes
```

### Filter Views

```bash
# Filter by file type
# Use search functionality
# Navigate large repositories efficiently
```

## Customization

### Color Themes

```bash
# Built-in themes
gitui --theme dark
gitui --theme light

# Custom theme file
gitui --theme ~/.config/gitui/my-theme.toml
```

### Behavior Configuration

```bash
# Environment variables
export GITUI_LOG_LEVEL=debug
export GITUI_PAGER="less -R"
export GITUI_EDITOR="nvim"
```

## Troubleshooting

### Common Issues

1. **Performance**: Use `--logging` to identify bottlenecks
2. **Display**: Check terminal compatibility
3. **Git operations**: Verify git repository integrity
4. **Key bindings**: Check for terminal conflicts

### Debug Mode

```bash
# Run with logging
gitui --logging

# Check log file
tail -f ~/.local/share/gitui/gitui.log
```

## Features

- **Blazing fast**: Async operations, Rust performance
- **Intuitive UI**: Familiar git workflow patterns
- **Interactive staging**: Line-by-line staging
- **Branch management**: Create, delete, rename, checkout
- **Conflict resolution**: Visual merge conflict handling
- **Stash management**: Create, apply, pop, drop stashes
- **History view**: Commit log and details
- **Remote operations**: Push, pull, fetch, rebase
- **Customizable**: Themes, key bindings, behavior
- **Cross-platform**: Windows, macOS, Linux support
- **Lightweight**: Minimal dependencies
- **Extensible**: Plugin architecture
- **Git integration**: Full git command coverage
- **Search**: Filter files, commits, branches
- **Worktree support**: Multiple working trees
- **Mouse support**: Click navigation and selection
