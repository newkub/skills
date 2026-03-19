---
description: Blazing fast terminal file manager with async operations, image previews, and extensive customization
title: cli-yazi
tags: [cli, file-manager, navigation, async, previews, customization]
---

## Overview

`yazi` เป็น terminal file manager ที่ fast, async และ customizable สนับสนุน image previews, code highlighting และ plugins พร้อม advanced features สำหรับ file management และ navigation

## Installation

```powershell
scoop install yazi
# หรือ
choco install yazi
# หรือ
winget install sxyazi.yazi
# หรือ
cargo install yazi
# หรือ
curl -sSfL https://raw.githubusercontent.com/sxyazi/yazi/main/install.sh | sh
```

## Basic Usage

```bash
# Open yazi
yazi

# Open specific directory
yazi /path/to/dir

# Open with specific cwd
yazi --cwd-file /tmp/yazi-cwd

# Open in debug mode
yazi --debug

# Open with specific config
yazi --config-dir ~/.config/yazi
```

## Command Line Options

| Flag | Description |
|------|-------------|
| `--cwd-file <file>` | File to write cwd on exit |
| `--config-dir <dir>` | Custom config directory |
| `--debug` | Debug mode |
| `--clear` | Clear screen on exit |
| `--no-clear` | Don't clear screen on exit |
| `--help` | Show help |
| `--version` | Show version |

## Key Bindings

### Navigation

| Key | Action |
|-----|--------|
| `j/k` หรือ `↓/↑` | Navigate up/down |
| `h/l` หรือ `←/→` | Enter/leave directory |
| `g` | Go to top |
| `G` | Go to bottom |
| `Home` | Go to first file |
| `End` | Go to last file |
| `PgUp/PgDn` | Page up/down |
| `Ctrl+U/Ctrl+D` | Half page up/down |

### File Operations

| Key | Action |
|-----|--------|
| `Enter` | Open file/directory |
| `Space` | Select/toggle |
| `y` | Yank (copy) |
| `d` | Cut |
| `p` | Paste |
| `r` | Rename |
| `D` | Delete |
| `a` | Create file/directory |
| `A` | Create directory |
| `x` | Execute file |
| `e` | Open with editor |

### Search and Filter

| Key | Action |
|-----|--------|
| `/` | Search |
| `n` | Next match |
| `N` | Previous match |
| `f` | Filter |
| `F` | Filter by extension |
| `s` | Sort |
| `S` | Sort by criteria |

### View and Preview

| Key | Action |
|-----|--------|
| `Tab` | Toggle preview |
| `z` | Zoom preview |
| `Z` | Reset zoom |
| `v` | Visual mode |
| `V` | Visual line mode |
| `Ctrl+R` | Refresh |

### System Operations

| Key | Action |
|-----|--------|
| `q` | Quit |
| `Q` | Quit without cwd file |
| `~` | Go home |
| `-` | Go to previous directory |
| `.` | Toggle hidden |
| `Ctrl+L` | Clear screen |
| `Ctrl+C` | Cancel operation |

## Configuration

### Main Config File

Create `~/.config/yazi/yazi.toml`:

```toml
[manager]
# Show hidden files
show_hidden = false

# Sort by
sort_by = "modified"
sort_sensitive = false
sort_reverse = false
sort_dir_first = true
sort_translit = false

# Linemode
linemode = "none"

# Show permissions
show_permissions = false

[preview]
# Image preview
image_quality = 75
image_alpha = 50
image_bound = true
image_cache = "metadata"

# Video preview
video_quality = 50
video_bound = true

# Audio preview
audio_metadata = true

[opener]
# File openers
edit = [
    { run = '$EDITOR "$1"', desc = "$EDITOR", block = true, for = "unix" },
    { run = 'notepad "$1"', desc = "notepad", block = true, for = "windows" },
]

open = [
    { run = 'open "$1"', desc = "open", for = "macos" },
    { run = 'start "" "$1"', desc = "start", for = "windows" },
    { run = 'xdg-open "$1"', desc = "xdg-open", for = "linux" },
]

reveal = [
    { run = 'open -R "$1"', desc = "reveal", for = "macos" },
    { run = 'explorer /select,"$1"', desc = "reveal", for = "windows" },
    { run = 'nautilus "$1"', desc = "reveal", for = "linux" },
]

[open]
# Preview rules
prepend_rules = [
    { name = "*.txt", use = ["text"] },
    { name = "*.md", use = ["text", "markdown"] },
    { name = "*.json", use = ["text", "json"] },
    { name = "*.yaml", use = ["text", "yaml"] },
]
```

### Theme Configuration

Create `~/.config/yazi/theme.toml`:

```toml
[manager]
# Manager colors
cwd = { fg = "cyan" }

# File types
file = { fg = "white" }
directory = { fg = "blue", bold = true }
executable = { fg = "green", bold = true }

# Selection
selected = { bg = "blue", bold = true }
selected_mod = { bg = "bright_black", fg = "blue", bold = true }

[status]
# Status bar
separator_open = ""
separator_close = ""
separator_style = { fg = "gray" }

# Mode indicators
mode_normal = { fg = "blue", bold = true }
mode_select = { fg = "magenta", bold = true }
mode_unset = { fg = "red", bold = true }

[select]
# Selection mode
border = { fg = "blue" }
active = { fg = "magenta" }
inactive = { fg = "gray" }

[execute]
# Execute mode
border = { fg = "red" }
cwd = { fg = "cyan" }

[help]
# Help screen
desc = { fg = "gray" }
on = { fg = "yellow" }
exec = { fg = "green" }
desc_sep = { fg = "gray" }

[input]
# Input field
border = { fg = "blue" }
title = { fg = "cyan" }
value = { fg = "white" }
selected = { reversed = true }
```

### Key Mappings

Create `~/.config/yazi/keymap.toml`:

```toml
[manager]
# Custom keybindings
map = [
    # Navigation
    { on = [ "k" ], run = "arrow -1", desc = "Move up" },
    { on = [ "j" ], run = "arrow 1",  desc = "Move down" },
    { on = [ "h" ], run = "leave",      desc = "Back to parent" },
    { on = [ "l" ], run = "enter",     desc = "Enter directory" },

    # File operations
    { on = [ "y" ], run = "yank",        desc = "Yank selected files" },
    { on = [ "d" ], run = "cut",         desc = "Cut selected files" },
    { on = [ "p" ], run = "paste",       desc = "Paste yanked files" },
    { on = [ "r" ], run = "rename --empty", desc = "Rename selected file" },
    { on = [ "D" ], run = "delete",      desc = "Delete selected files" },
    { on = [ "a" ], run = "create",      desc = "Create file/directory" },

    # Search and filter
    { on = [ "/" ], run = "search",      desc = "Search files" },
    { on = [ "f" ], run = "filter",      desc = "Filter files" },
    { on = [ "s" ], run = "sort --reverse", desc = "Toggle sort direction" },

    # Preview
    { on = [ "Tab" ], run = "preview", desc = "Toggle preview" },
    { on = [ "z" ], run = "preview --scale 1.5", desc = "Zoom preview" },
    { on = [ "Z" ], run = "preview --scale 1.0", desc = "Reset preview zoom" },

    # System
    { on = [ "q" ], run = "quit",        desc = "Quit" },
    { on = [ "Q" ], run = "quit --no-cwd-file", desc = "Quit without writing cwd" },
]
```

## Advanced Features

### Image Previews

```toml
[preview]
# Image preview settings
image_quality = 75
image_alpha = 50
image_bound = true
image_cache = "metadata"

# Supported formats
image_formats = ["jpg", "jpeg", "png", "gif", "bmp", "webp", "svg"]

# Preview size
max_width = 1920
max_height = 1080
```

### Code Highlighting

```toml
[preview]
# Code preview
tab_size = 4
max_width = 100
max_height = 20

# Syntax highlighting
highlight = true
theme = "base16"

# Language detection
languages = [
    { ext = "rs", lang = "rust" },
    { ext = "py", lang = "python" },
    { ext = "js", lang = "javascript" },
    { ext = "ts", lang = "typescript" },
]
```

### File Operations

```bash
# Batch operations
# Select files with Space, then:
y  # Yank (copy)
d  # Cut
p  # Paste

# Advanced operations
# Press `:` to enter command mode
:bulk-rename  # Rename multiple files
:bulk-delete  # Delete multiple files
:bulk-copy    # Copy multiple files
```

### Search and Filter

```bash
# Search mode
/  # Enter search
n  # Next match
N  # Previous match

# Filter mode
f  # Filter by name
F  # Filter by extension

# Sort options
s  # Toggle sort
S  # Sort by specific field
```

## Integration Examples

### Git Integration

```bash
# Git status integration
yazi --cwd-file /tmp/yazi-cwd
cd "$(cat /tmp/yazi-cwd)"

# Git diff in yazi
yazi --config-dir ~/.config/yazi-git
```

### Editor Integration

```bash
# Open file in editor from yazi
# Press `e` to open in $EDITOR

# Custom editor setup
[opener]
edit = [
    { run = 'nvim "$1"', desc = "neovim", block = true },
    { run = 'code "$1"', desc = "vscode", block = true },
]
```

### Terminal Integration

```bash
# Shell function for yazi
y() {
    local tmp="$(mktemp -t "yazi-cwd.XXXXXX")"
    yazi "$@" --cwd-file "$tmp"
    if cwd="$(cat "$tmp)" && [ -n "$cwd" ] && [ "$cwd" != "$PWD" ]; then
        cd "$cwd"
    fi
    rm -f "$tmp"
}

# Use with: y /path/to/dir
```

## Performance Optimization

### Caching

```toml
[preview]
# Preview cache
image_cache = "metadata"
video_cache = "metadata"

# Cache size
cache_size = "1GB"
cache_ttl = "7d"
```

### Async Operations

```toml
[manager]
# Async loading
async_operations = true
preview_timeout = 1000

# Performance tuning
max_threads = 4
buffer_size = "64KB"
```

### Memory Management

```toml
[preview]
# Memory limits
max_preview_size = "10MB"
max_image_size = "50MB"

# Cleanup
auto_cleanup = true
cleanup_interval = "1h"
```

## Troubleshooting

### Common Issues

1. **Slow preview**: Check cache settings and reduce preview size
2. **Image preview not working**: Install required dependencies
3. **Key bindings not working**: Check keymap configuration
4. **Theme not loading**: Verify theme file syntax

### Debug Mode

```bash
# Debug mode
yazi --debug

# Check configuration
yazi --config-dir ~/.config/yazi-debug

# Test key bindings
yazi --debug --config-dir ~/.config/yazi
```

### Dependencies

```bash
# Install dependencies for image preview
# Ubuntu/Debian
sudo apt install ffmpegthumbnailer unar

# macOS
brew install ffmpegthumbnailer unar

# Windows (with scoop)
scoop install ffmpeg unar
```

## Aliases and Functions

### Common Aliases

```bash
# Basic aliases
alias y='yazi'
alias ya='yazi --cwd-file /tmp/yazi-cwd'
alias yd='yazi --debug'

# Directory aliases
alias y.='yazi .'
alias y..='yazi ..'
alias y~='yazi ~'
```

### Custom Functions

```bash
# Yazi with cd
y() {
    local tmp="$(mktemp -t "yazi-cwd.XXXXXX")"
    yazi "$@" --cwd-file "$tmp"
    if cwd="$(cat "$tmp)" && [ -n "$cwd" ] && [ "$cwd" != "$PWD" ]; then
        cd "$cwd"
    fi
    rm -f "$tmp"
}

# Yazi with file selection
yf() {
    local tmp="$(mktemp -t "yazi-files.XXXXXX")"
    yazi "$@" --chooser-file "$tmp"
    if [ -f "$tmp" ]; then
        cat "$tmp"
        rm -f "$tmp"
    fi
}

# Yazi with preview
yp() {
    yazi --preview "$@"
}

# Yazi for specific file types
yimg() {
    yazi --filter "*.jpg,*.jpeg,*.png,*.gif" "$@"
}

ycode() {
    yazi --filter "*.rs,*.py,*.js,*.ts" "$@"
}
```

## Use Cases

### Development Workflow

```bash
# Navigate project files
y src/

# Edit files from yazi
# Press `e` to open in editor

# Git workflow
y --cwd-file /tmp/yazi-cwd
cd "$(cat /tmp/yazi-cwd)"
git status
```

### File Management

```bash
# Organize downloads
y ~/Downloads/

# Batch rename
# Select files with Space, press `:` then `bulk-rename`

# Clean up directories
y --filter "*.tmp,*.log" /var/log/
```

### Media Management

```bash
# Browse photos
y ~/Pictures/

# Video management
y ~/Videos/ --filter "*.mp4,*.avi,*.mkv"

# Music library
y ~/Music/ --filter "*.mp3,*.flac,*.wav"
```

## Features

- **Blazing fast**: Async operations and optimized performance
- **Image previews**: Built-in image preview with zoom
- **Code highlighting**: Syntax highlighting for 100+ languages
- **Video previews**: Thumbnail generation for video files
- **Audio metadata**: Display audio file information
- **Customizable**: Extensive configuration options
- **Plugin system**: Extendable with plugins
- **Key bindings**: Fully customizable key mappings
- **Themes**: Multiple built-in themes and custom themes
- **File operations**: Copy, cut, paste, rename, delete
- **Search and filter**: Powerful search and filtering capabilities
- **Batch operations**: Bulk rename and operations
- **Git integration**: Git status and operations
- **Cross-platform**: Windows, macOS, Linux
- **Terminal integration**: Shell integration functions
- **Performance optimized**: Efficient memory usage and caching
- **Unicode support**: Full Unicode and emoji support
- **Preview caching**: Intelligent preview caching
- **Async loading**: Non-blocking file operations
