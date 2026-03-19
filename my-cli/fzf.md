---
description: Interactive fuzzy finder for command line with advanced features and customization
title: cli-fzf
tags: [cli, search, fuzzy, interactive, preview]
---

## Overview

`fzf` เป็น interactive fuzzy finder สำหรับ command line ที่ช่วยให้ค้นหาไฟล์, history, processes และอื่นๆ ได้อย่างรวดเร็ว พร้อม preview, multi-select และ extensive customization

## Installation

```powershell
scoop install fzf
# หรือ
choco install fzf
# หรือ
cargo install fzf
```

## Basic Usage

### File Search

```bash
# Interactive file finder
fzf

# ใช้กับ other commands
find . -type f | fzf
ls | fzf

# Search with specific pattern
find . -name "*.py" | fzf
```

### History Search

```bash
# ค้นหาใน command history
history | fzf

# Interactive history search
Ctrl+R  # (if fzf key bindings are enabled)
```

### Process Management

```bash
# ค้นหาและ kill process
ps aux | fzf | awk '{print $2}' | xargs kill -9

# Interactive process killer
ps aux | fzf --header-lines=1 | awk '{print $2}' | xargs kill
```

## Search Options

| Flag | Description |
|------|-------------|
| `-q, --query <str>` | Initial query |
| `-f, --filter <str>` | Filter with initial query |
| `--print-query` | Print query as first line |
| `--expect <keys>` | Comma-separated keys to complete |
| `--read0` | Read NUL terminated input |
| `--print0` | Print NUL terminated output |
| `-0, --null` | Same as --read0 --print0 |
| `-1, --select-1` | Auto-select if single match |
| `--exit-0` | Exit if no match |

## Display Options

| Flag | Description |
|------|-------------|
| `--height <height>` | Display height (percent or lines) |
| `--min-height <height>` | Minimum height |
| `--layout` | Layout (default, reverse, reverse-list) |
| `--reverse` | Reverse layout (alias for --layout=reverse) |
| `--border` | Border style (rounded, sharp, bold, etc.) |
| `--margin <margin>` | Margin (top, right, bottom, left) |
| `--padding <padding>` | Padding |
| `--info` | Finder info position (default, right, hidden, inline) |
| `--separator` | Info line separator |
| `--scrollbar` | Scrollbar character(s) |
| `--no-scrollbar` | Hide scrollbar |

## Color and Theme Options

| Flag | Description |
|------|-------------|
| `--color <scheme>` | Color scheme (default, 16, bw, etc.) |
| `--color <fg:bg:hl:...>` | Custom colors |
| `--black` | Black color |
| `--no-black` | Disable black color |
| `--bold` | Bold text |
| `--no-bold` | Disable bold text |
| `--ansi` | Parse ANSI color codes |

## Preview Options

| Flag | Description |
|------|-------------|
| `--preview <command>` | Preview command (use {} for path) |
| `--preview-window <opts>` | Preview window options |
| `--preview-border <style>` | Preview border style |
| `--preview-label <label>` | Preview window label |

## Input Options

| Flag | Description |
|------|-------------|
| `--prompt <prompt>` | Input prompt (default: '> ') |
| `--header <header>` | Header string |
| `--header-lines <n>` | First N lines as header |
| `--header-first` | Print header before prompt |
| `--no-input` | Disable input section |
| `--input-border <style>` | Input border style |
| `--input-label <label>` | Input label |

## Multi-select Options

| Flag | Description |
|------|-------------|
| `-m, --multi` | Enable multi-select |
| `--no-multi` | Disable multi-select |
| `--bind <bindings>` | Custom key bindings |
| `--cycle` | Enable cyclic navigation |

## Advanced Usage

```bash
# Preview with syntax highlighting
fzf --preview 'bat --style=numbers --color=always {}'

# Multi-select with preview
fzf -m --preview 'cat {}'

# Custom height and layout
fzf --height 40% --layout reverse

# With header and info
fzf --header "Files" --info inline

# Custom colors
fzf --color bg:#242424,fg:#bbbbbb,hl:#7e8e91

# Border and padding
fzf --border rounded --padding 1,2

# Custom prompt
fzf --prompt "Select file > "

# With key bindings
fzf --bind 'ctrl-y:execute-silent(echo {} | clip)'
fzf --bind 'ctrl-v:page-down,ctrl-^:change-multi'

# Expect keys
fzf --expect 'ctrl-o,ctrl-e'

# Filter with initial query
fzf -f "src/"

# Print query
fzf --print-query

# Select single match automatically
fzf -1

# Exit if no match
fzf --exit-0

# NUL terminated I/O
find . -print0 | fzf --read0 --print0

# With custom info
fzf --info right --separator " | "

# With scrollbar
fzf --scrollbar "┃"

# No mouse support
fzf --disable-mouse

# With ANSI colors
fzf --ansi

# Bold text
fzf --bold

# Custom preview window
fzf --preview 'bat {}' --preview-window right:50%:wrap

# Preview with border and label
fzf --preview 'bat {}' --preview-border sharp --preview-label "Preview"
```

## Preview Window Options

```bash
# Right side, 50% width
--preview-window right:50%

# Left side, 30% width with wrap
--preview-window left:30%:wrap

# Bottom, 10 lines
--preview-window bottom:10

# With follow mode
--preview-window right:50%:follow

# With hidden option
--preview-window right:50%:hidden

# With cycle option
--preview-window right:50%:cycle

# Default
--preview-window right:50%

# With header lines
--preview-window right:50%:+3

# With size threshold
--preview-window right:50%,80:bottom
```

## Key Bindings

### Default Bindings

| Key | Action |
|-----|--------|
| `Enter` | Accept selection |
| `Esc` | Abort |
| `Ctrl-A` | Select all |
| `Ctrl-D` | Delete char |
| `Ctrl-U` | Delete line |
| `Ctrl-W` | Delete word |
| `Ctrl-Y` | Paste |
| `↑/↓` | Navigate |
| `PgUp/PgDn` | Page navigation |
| `Home/End` | Line navigation |

### Custom Bindings

```bash
# Copy to clipboard
fzf --bind 'ctrl-y:execute-silent(echo {} | clip)'

# Open in editor
fzf --bind 'ctrl-o:execute(nvim {})'

# Toggle preview
fzf --bind 'ctrl-p:toggle-preview'

# Change multi-select mode
fzf --bind 'ctrl-m:change-multi'

# Print selection
fzf --bind 'ctrl-p:print'

# Reload with different command
fzf --bind 'ctrl-r:reload(find . -type f)'

# Execute command on selection
fzf --bind 'enter:execute(echo "Selected: {}")'

# Abort on specific key
fzf --bind 'ctrl-q:abort'

# Custom action
fzf --bind 'f1:execute(less {})'
```

## Shell Integration

### Bash/Zsh

```bash
# Enable key bindings (add to .bashrc/.zshrc)
eval "$(fzf --bash)"
eval "$(fzf --zsh)"

# Ctrl-T: File finder
# Ctrl-R: History search  
# Alt-C: Directory change
```

### Fish

```fish
# Enable key bindings (add to config.fish)
fzf_key_bindings
```

## Integration Examples

### With ripgrep

```bash
# Fuzzy search in files
rg --files | fzf --preview 'bat --color=always {}'

# Search content and preview
rg "pattern" --line-number | fzf --delimiter ':' --preview 'bat --color=always {1} --highlight-line {2}'
```

### With git

```bash
# Branch selection
git branch | fzf | xargs git checkout

# Commit selection
git log --oneline | fzf --preview 'git show {1}' | xargs git checkout

# File selection for git add
git status --porcelain | fzf -m --preview 'git diff {2}' | cut -c4- | xargs git add
```

### With fd

```bash
# File search with preview
fd --type f | fzf --preview 'bat --color=always {}'

# Directory selection
fd --type d | fzf | cd

# Search and edit
fd --type f | fzf --preview 'bat --color=always {}' | xargs nvim
```

### With eza

```bash
# Directory browser
eza --tree --level 2 | fzf | cd

# File browser with details
eza -l | fzf | awk '{print $NF}' | xargs nvim
```

### Process Management

```bash
# Process killer
ps aux | fzf --header-lines=1 | awk '{print $2}' | xargs kill

# Process selector
ps aux | fzf --header-lines=1 --preview 'ps -p {2}' | awk '{print $2}' | xargs kill
```

### Environment Variables

```bash
# Variable selector
env | fzf | cut -d= -f1

# PATH selector
echo $PATH | tr ':' '\n' | fzf
```

## Configuration

### Environment Variables

```bash
# Default options
export FZF_DEFAULT_OPTS="--height 40% --layout reverse --border"

# Default command
export FZF_DEFAULT_COMMAND="fd --type f --hidden --follow --exclude .git"
```

### fzf-tmux Script

```bash
# Use fzf in tmux pane
fzf-tmux -p 80%
```

## Aliases

```bash
# Common aliases
alias f='fzf'
alias fv='fzf --preview "bat --color=always {}"'
alias fd='fd --type f | fzf'
alias fh='history | fzf'

# Multi-select aliases
alias fm='fzf -m'
alias fvm='fzf -m --preview "bat --color=always {}"'

# Directory aliases
alias cd='cd "$(fd --type d | fzf)"'
alias cdd='cd "$(fd --type d --hidden | fzf)"'
```

## Performance Tips

1. **Limit results**: Use `find` with depth limits
2. **Use fast commands**: `fd` instead of `find`
3. **Optimize preview**: Use lightweight preview commands
4. **Cache results**: Use `--reload` with caching
5. **Limit height**: Use appropriate `--height`

## Advanced Scenarios

### File Browser

```bash
# Interactive file browser
fd --type f | fzf --preview 'bat --color=always {}' \
  --bind 'enter:execute(nvim {}),ctrl-o:execute(open {})'
```

### Multi-file Operations

```bash
# Select multiple files for operations
fd --type f | fzf -m --preview 'bat --color=always {}' | \
  xargs -I {} cp {} ./backup/
```

### Search and Replace

```bash
# Search files and replace content
rg --files-with-matches "old_pattern" | fzf -m | \
  xargs sed -i 's/old_pattern/new_pattern/g'
```

## Features

- **Fast**: Optimized for performance
- **Interactive**: Real-time fuzzy search
- **Preview**: Built-in preview support
- **Multi-select**: Select multiple items
- **Customizable**: Extensive configuration options
- **Cross-platform**: Windows, macOS, Linux support
- **Shell integration**: Key bindings for popular shells
- **Flexible**: Works with any command-line tool
- **Extensible**: Plugin architecture
- **Themeable**: Custom colors and styling
- **Keyboard-driven**: Efficient keyboard navigation
