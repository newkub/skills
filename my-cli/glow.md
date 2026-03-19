---
description: Render markdown on the CLI with beautiful styling and advanced features
title: cli-glow
tags: [cli, markdown, viewer, rendering, styling]
---

## Overview

`glow` เป็น markdown reader สำหรับ command line ที่สวยงาม รองรับ styles, paging และ local/remote files พร้อม GitHub-flavored markdown และ advanced rendering features

## Installation

```powershell
scoop install glow
# หรือ
choco install glow
# หรือ
cargo install glow
```

## Basic Usage

```bash
# View local markdown file
glow README.md

# View from URL
glow https://example.com/readme.md

# Interactive file picker
glow

# List all markdown files in directory
glow .

# Read from stdin
cat README.md | glow -

# View specific lines
glow README.md :10-20
```

## Command Line Options

| Flag | Description |
|------|-------------|
| `-p, --pager` | Use pager |
| `-s, --style <style>` | Markdown style |
| `-w, --width <width>` | Word wrap at width |
| `-l, --local` | Local mode only |
| `-a, --all` | Show all files (including hidden) |
| `-d, --directory <dir>` | Directory to search |
| `-x, --line-number <num>` | Start at line number |
| `-h, --help` | Show help |
| `-v, --version` | Show version |

## Style Options

### Built-in Styles

| Style | Description |
|-------|-------------|
| `auto` | Auto-detect terminal theme |
| `dark` | Dark background theme |
| `light` | Light background theme |
| `ascii` | ASCII only, no colors |
| `notty` | No TTY, plain text |

### Custom Styling

```bash
# Use dark style
glow -s dark README.md

# Use light style
glow -s light README.md

# Use ASCII style
glow -s ascii README.md

# Auto style (default)
glow -s auto README.md
```

## Display Options

```bash
# Set custom width
glow -w 80 README.md
glow --width 120 README.md

# Use pager for long documents
glow -p README.md
glow --pager README.md

# Local mode only (no network)
glow -l README.md
glow --local README.md

# Show line numbers
glow --line-number 10 README.md

# View specific line range
glow README.md :5-15

# View from specific line
glow README.md :20
```

## File Operations

```bash
# View all markdown files in current directory
glow .

# View markdown files in specific directory
glow -d docs/

# Include hidden files
glow -a .

# Search for markdown files
glow -d . --search "api"

# Multiple files
glow README.md CHANGELOG.md
```

## Advanced Features

### Remote Content

```bash
# View from GitHub URL
glow https://raw.githubusercontent.com/user/repo/main/README.md

# View from any URL
glow https://example.com/document.md

# View from GitLab
glow https://gitlab.com/user/project/-/raw/main/README.md
```

### Pipe and Redirect

```bash
# Read from stdin
cat README.md | glow -

# Pipe from other commands
grep -n "TODO" README.md | glow -

# Save output to file
glow README.md > output.txt

# Combine with other tools
find . -name "*.md" | head -5 | xargs glow
```

### Interactive Mode

```bash
# Interactive file picker
glow

# Navigate with arrow keys
# Press Enter to view file
# Press q to quit
# Press ? for help
```

## Integration Examples

### With fzf

```bash
# Fuzzy file selection with preview
fd -e md | fzf --preview 'glow --style dark {}' --height 40%

# Search and view
fd -e md | fzf | xargs glow

# Multi-select and batch view
fd -e md | fzf -m | xargs glow
```

### With ripgrep

```bash
# Search content and view matching files
rg --files-with-matches "TODO" | xargs glow

# Search with context and view
rg -A 5 -B 5 "API" README.md | glow -
```

### With git

```bash
# View README from remote
gh repo view --json url | jq -r '.url' | sed 's/github\.com/raw.githubusercontent.com\/blob\/master/' | glow

# View all markdown files in repo
gh repo clone owner/repo --depth 1 && cd repo && glow . && cd .. && rm -rf repo
```

### With editors

```bash
# Preview in editor (vim)
:autocmd BufReadPost *.md silent !glow -s dark % > /tmp/glow_preview

# Preview in editor (neovim)
:autocmd BufReadPost *.md !glow -s dark % | less
```

## Configuration

### Config File

Create `~/.config/glow/glow.yml`:

```yaml
# Global style
style: "dark"

# Default width
width: 80

# Local mode only
local: false

# Pager
pager: false

# Mouse support
mouse: true

# Line numbers
line_numbers: false
```

### Environment Variables

```bash
# Set default style
export GLOW_STYLE="dark"

# Set default width
export GLOW_WIDTH="120"

# Enable local mode
export GLOW_LOCAL="true"

# Set pager
export GLOW_PAGER="less"
```

## Keyboard Shortcuts (Interactive Mode)

| Key | Action |
|-----|--------|
| `↑/↓` | Navigate files |
| `Enter` | View selected file |
| `q` | Quit |
| `Esc` | Exit/Cancel |
| `?` | Show help |
| `Home/End` | Jump to start/end |
| `PgUp/PgDn` | Page navigation |

## Performance Tips

1. **Large files**: Use `--width` to limit line length
2. **Network**: Use `--local` to disable remote fetching
3. **Memory**: Use pager for very large documents
4. **Speed**: Use ASCII style for faster rendering

## Advanced Usage

### Custom Themes

```bash
# Create custom theme file
glow --style custom README.md

# Theme customization (if supported)
export GLOW_STYLE_PATH="~/.config/glow/custom.json"
```

### Batch Processing

```bash
# Process multiple files
for file in *.md; do
    glow "$file" > "${file%.md}.txt"
done

# Convert markdown to plain text
find . -name "*.md" -exec glow -s ascii {} \; > all_docs.txt
```

### Scripting

```bash
#!/bin/bash
# Markdown viewer script
if [ $# -eq 0 ]; then
    glow .
else
    glow "$@"
fi
```

### CI/CD Integration

```bash
# View documentation in CI
glow -s dark README.md

# Generate documentation preview
glow README.md > docs_preview.txt

# Validate markdown rendering
glow README.md >/dev/null && echo "Markdown renders correctly"
```

## Troubleshooting

### Common Issues

1. **Colors not showing**: Check terminal color support
2. **URL not loading**: Verify network connectivity
3. **Large files**: Use pager or limit width
4. **Encoding issues**: Check file encoding

### Debug Mode

```bash
# Enable verbose output
glow -v README.md

# Check version and config
glow --version
```

## Aliases and Functions

```bash
# Common aliases
alias md='glow'
alias mdd='glow -s dark'
alias mdl='glow -s light'
alias mdp='glow -p'

# Custom functions
mdview() {
    if [ -f "$1" ]; then
        glow -s dark "$1"
    else
        glow "$1"
    fi
}

# Batch markdown viewer
mdall() {
    find . -name "*.md" | while read file; do
        echo "=== $file ==="
        glow "$file"
        echo
    done
}
```

## Features

- **Beautiful rendering**: GitHub-flavored markdown
- **Multiple themes**: Dark, light, ASCII, auto
- **Remote content**: Fetch from URLs
- **Interactive mode**: File browser interface
- **Pager support**: For long documents
- **Syntax highlighting**: Code blocks with colors
- **Table rendering**: Proper table formatting
- **List support**: Ordered and unordered lists
- **Links**: Clickable links in supported terminals
- **Images**: ASCII art representation
- **Math**: Basic math rendering (if supported)
- **Task lists**: GitHub-style task lists
- **Footnotes**: Markdown footnote support
- **Cross-platform**: Windows, macOS, Linux
- **Fast**: Optimized rendering performance
- **Extensible**: Plugin architecture
- **Configurable**: Custom themes and settings
