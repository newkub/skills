---
description: Smarter cd command with z-like navigation, fuzzy matching, and intelligent directory tracking
title: cli-zoxide
tags: [cli, navigation, productivity, fuzzy-search, directory-management]
---

## Overview

`zoxide` เป็น smart cd command ที่จดจำ directories ที่คุณเยี่ยมชมบ่อย ช่วยให้ jump ไปยัง directories ได้อย่างรวดเร็ว พร้อม advanced features สำหรับ directory navigation และ fuzzy matching

## Installation

```powershell
scoop install zoxide
# หรือ
choco install zoxide
# หรือ
winget install ajeetdsouza.zoxide
# หรือ
curl -sSfL https://raw.githubusercontent.com/ajeetdsouza/zoxide/main/install.sh | sh
# หรือ
cargo install zoxide
```

## Shell Integration

### PowerShell

```powershell
# Add to $PROFILE
Invoke-Expression (& { (zoxide init powershell | Out-String) })

# Or add manually to $PROFILE
Invoke-Expression (& { (zoxide init powershell | Out-String) })
```

### Bash

```bash
# Add to ~/.bashrc
eval "$(zoxide init bash)"

# Or with custom options
eval "$(zoxide init bash --cmd cd)"
```

### Zsh

```bash
# Add to ~/.zshrc
eval "$(zoxide init zsh)"

# With fzf integration
eval "$(zoxide init zsh --cmd j)"
```

### Fish

```bash
# Add to ~/.config/fish/config.fish
zoxide init fish | source

# Or with custom command
zoxide init fish --cmd cd | source
```

### Ion

```bash
# Add to ~/.config/ion/initrc
eval $(zoxide init ion)
```

### Elvish

```bash
# Add to ~/.elvish/rc.elv
eval (zoxide init elvish)
```

## Command Line Options

| Flag | Description |
|------|-------------|
| `--help` | Show help information |
| `--version` | Show version information |
| `--init <shell>` | Generate shell integration script |
| `--cmd <command>` | Custom command name |
| `--hook <command>` | Custom hook command |
| `--database <path>` | Custom database path |
| `--exclude <dirs>` | Exclude directories |

## Basic Usage

```bash
# Jump to directory (fuzzy match)
z foo

# Jump with interactive selection
zi foo

# Add current directory to database
z .

# Jump to parent directory
z ..

# Jump to home directory
z ~

# Query without jumping
zq foo

# Remove directory from database
zr /path/to/dir

# Add directory manually
za /path/to/dir

# Show database statistics
zoxide --help
```

## Advanced Usage

### Fuzzy Matching

```bash
# Fuzzy search for directory
z proj

# Multiple keywords
z src py

# Case-sensitive search
z Project

# Partial path matching
z /home/user/projects
```

### Interactive Selection

```bash
# Interactive directory selection
zi

# Interactive with query
zi foo

# Interactive with fzf integration
zi | fzf
```

### Database Management

```bash
# Add directory to database
za /path/to/directory

# Remove directory from database
zr /path/to/directory

# Query database without jumping
zq foo

# Show all directories in database
zoxide query --all

# Import from z database
zoxide import ~/.z

# Export to z database
zoxide export > ~/.z
```

### Custom Commands

```bash
# Use custom command instead of cd
eval "$(zoxide init bash --cmd j)"

# Now use j instead of z
j foo

# Use with custom hook
eval "$(zoxide init bash --hook pwd)"
```

## Configuration

### Environment Variables

```bash
# Custom database location
export _ZO_DATA_DIR="$HOME/.local/share/zoxide"

# Custom database file
export _ZO_DATA_DIR="$HOME/.zoxide_db"

# Exclude directories
export _ZO_EXCLUDE_DIRS="$HOME/.git:$HOME/.cache"

# Maximum database entries
export _ZO_MAXAGE=10000

# Fuzzy matching threshold
export _ZO_FZF_OPTS="--height 40% --layout=reverse"
```

### Configuration File

Create `~/.config/zoxide/config.yaml`:

```yaml
# Database settings
database:
  path: "~/.local/share/zoxide/db"
  max_age: 10000
  import: ["~/.z"]
  export: ["~/.z"]

# Navigation settings
navigation:
  cmd: "cd"
  hook: "pwd"

# Exclusion settings
exclude:
  - "~/.git"
  - "~/.cache"
  - "/tmp"
  - "/var/tmp"

# Fuzzy matching
fzf:
  opts: "--height 40% --layout=reverse --border"
  cmd: "fzf"

# Scoring algorithm
scoring:
  frecency: true
  age: true
  depth: true
```

## Integration Examples

### FZF Integration

```bash
# Enhanced fuzzy matching
eval "$(zoxide init zsh --cmd j)"

# Custom fzf function
j() {
    local dir
    dir="$(zoxide query -l "$1" | fzf --height 40% --layout=reverse)"
    cd "$dir"
}

# Interactive with preview
j() {
    local dir
    dir="$(zoxide query -l "$1" | fzf --height 40% --layout=reverse --preview 'ls -la {}')"
    cd "$dir"
}
```

### Git Integration

```bash
# Jump to git repositories
jg() {
    local dir
    dir="$(zoxide query -l "$1" | grep -E '\.git$|/\.git/' | sed 's/\/\.git$//' | fzf)"
    cd "$dir"
}

# Jump to project directories
jp() {
    local dir
    dir="$(zoxide query -l "$1" | xargs -I {} find {} -name "*.git" -type d 2>/dev/null | sed 's/\/\.git$//' | fzf)"
    cd "$dir"
}
```

### Development Workflow

```bash
# Jump to source directories
js() {
    local dir
    dir="$(zoxide query -l "$1" | grep -E 'src|source|lib' | fzf)"
    cd "$dir"
}

# Jump to test directories
jt() {
    local dir
    dir="$(zoxide query -l "$1" | grep -E 'test|tests|spec' | fzf)"
    cd "$dir"
}

# Jump to configuration directories
jc() {
    local dir
    dir="$(zoxide query -l "$1" | grep -E 'config|\.config' | fzf)"
    cd "$dir"
}
```

## Advanced Features

### Scoring Algorithm

```bash
# Frecency scoring (frequency + recency)
z foo

# Age-based scoring
zoxide query --age foo

# Depth-based scoring
zoxide query --depth foo

# Custom scoring weights
zoxide query --frecency 0.5 --age 0.3 --depth 0.2 foo
```

### Database Operations

```bash
# Database statistics
zoxide query --stats

# Database cleanup
zoxide query --cleanup

# Database validation
zoxide query --validate

# Database migration
zoxide migrate
```

### Path Manipulation

```bash
# Relative paths
z ../foo

# Absolute paths
z /home/user/foo

# Home directory shortcuts
z ~/foo

# Environment variable expansion
z $PROJECT/foo
```

## Performance Optimization

### Database Optimization

```bash
# Set maximum database size
export _ZO_MAXAGE=10000

# Clean old entries
zoxide query --cleanup --max-age 30

# Optimize database
zoxide query --optimize
```

### Caching

```bash
# Enable caching
export _ZO_CACHE=true

# Set cache size
export _ZO_CACHE_SIZE=1000

# Clear cache
zoxide query --clear-cache
```

### Memory Usage

```bash
# Limit memory usage
export _ZO_MEMORY_LIMIT="100MB"

# Monitor memory usage
zoxide query --memory-stats
```

## Troubleshooting

### Common Issues

1. **Directory not found**: Check if directory exists in database
2. **Fuzzy matching not working**: Check fzf integration
3. **Database corruption**: Rebuild database with `zoxide query --rebuild`
4. **Shell integration not working**: Verify shell initialization

### Debug Mode

```bash
# Debug queries
zoxide query --debug foo

# Show database contents
zoxide query --all

# Test shell integration
zoxide init bash --debug

# Check configuration
zoxide query --config
```

### Database Recovery

```bash
# Backup database
cp ~/.local/share/zoxide/db ~/.local/share/zoxide/db.backup

# Rebuild database
zoxide query --rebuild

# Import from backup
zoxide import ~/.local/share/zoxide/db.backup

# Validate database
zoxide query --validate
```

## Aliases and Functions

### Common Aliases

```bash
# Basic aliases
alias z='zoxide'
alias zi='zoxide -i'
alias za='zoxide --add'
alias zr='zoxide --remove'
alias zq='zoxide query'

# Custom command aliases
alias j='z'
alias ji='zi'
alias d='z'  # Like fasd
```

### Custom Functions

```bash
# Enhanced jump function
j() {
    if [ $# -eq 0 ]; then
        zoxide -i
    else
        zoxide "$@"
    fi
}

# Jump with fzf preview
jf() {
    local dir
    dir="$(zoxide query -l "$1" | fzf --height 40% --layout=reverse --preview 'ls -la {}')"
    cd "$dir"
}

# Jump to parent directory
jp() {
    local dir
    dir="$(zoxide query -l "$1" | grep -E '\.\./' | fzf)"
    cd "$dir"
}

# Jump to recent directory
jr() {
    local dir
    dir="$(zoxide query -l | head -10 | fzf)"
    cd "$dir"
}

# Jump to frequent directory
jfrequent() {
    local dir
    dir="$(zoxide query --score | sort -nr | head -10 | fzf)"
    cd "$dir"
}
```

## Use Cases

### Development Workflow

```bash
# Jump to project directory
z myproject

# Jump to source directory
z src

# Jump to test directory
z test

# Jump to configuration directory
z config
```

### System Administration

```bash
# Jump to system directories
z /etc

# Jump to log directories
z /var/log

# Jump to home directories
z ~user

# Jump to temporary directories
z /tmp
```

### File Management

```bash
# Jump to downloads
z downloads

# Jump to documents
z docs

# Jump to pictures
z pictures

# Jump to music
z music
```

## Migration from z

```bash
# Import z database
zoxide import ~/.z

# Export to z database
zoxide export > ~/.z

# Test migration
zoxide query --all | head -10
```

## Features

- **Smart navigation**: Intelligent directory jumping
- **Fuzzy matching**: Flexible pattern matching
- **Interactive selection**: fzf integration
- **Database management**: Persistent directory tracking
- **Cross-shell**: Works with all major shells
- **Performance optimized**: Fast queries and updates
- **Customizable**: Extensive configuration options
- **Scoring algorithm**: Frecency-based ranking
- **Import/Export**: Database portability
- **Exclusion support**: Skip unwanted directories
- **Path expansion**: Environment variable support
- **Statistics**: Database usage analytics
- **Recovery**: Database backup and restore
- **Memory efficient**: Optimized memory usage
- **Cross-platform**: Windows, macOS, Linux
