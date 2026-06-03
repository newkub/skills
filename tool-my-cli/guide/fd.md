---
description: Fast and user-friendly alternative to find with advanced search capabilities
title: cli-fd
tags: [cli, search, files, find, regex]
---

## Overview

`fd` เป็น find alternative ที่เร็วกว่า ใช้งานง่ายกว่า มี colored output โดย default และรองรับ regular expressions พร้อม features ขั้นสูงมากมาย

## Installation

```powershell
scoop install fd
# หรือ
choco install fd
# หรือ
cargo install fd
```

## Basic Usage

```bash
# Find by name pattern
fd "pattern"

# Find specific extension
fd -e md
fd -e ts

# Find and execute command
fd -e js -x rm {}

# Case insensitive search
fd -i "readme"

# Search in specific directory
fd pattern ~/Documents
```

## Pattern Matching

| Flag | Description |
|------|-------------|
| `<pattern>` | Search pattern (supports regex) |
| `-g, --glob` | Glob pattern matching |
| `--regex` | Enable regular expressions (default) |
| `--fixed-strings` | Literal string matching |
| `-i, --ignore-case` | Case insensitive search |
| `-s, --case-sensitive` | Case sensitive search |
| `--follow` | Follow symbolic links |
| `--max-depth <depth>` | Maximum search depth |
| `--min-depth <depth>` | Minimum search depth |

## File Type Filtering

| Flag | Description |
|------|-------------|
| `-t, --type <type>` | Filter by type (f=file, d=directory, l=symlink, x=executable) |
| `-e, --extension <ext>` | Filter by file extension |
| `--extension <ext>` | Same as -e |
| `-E, --exclude <pattern>` | Exclude entries matching pattern |
| `-I, --no-ignore` | Don't respect .gitignore files |
| `--hidden` | Search hidden files and directories |
| `--no-ignore-vcs` | Don't respect VCS ignore files |

## Search Control

| Flag | Description |
|------|-------------|
| `-j, --threads <num>` | Number of threads (default: CPU cores) |
| `--max-buffer-time <time>` | Max time to buffer results |
| `--max-results <count>` | Limit number of results |
| `-1` | Limit to single result |
| `-q, --quiet` | Quiet mode (no output, exit code indicates matches) |
| `--has-results` | Same as --quiet |
| `--show-errors` | Show filesystem errors |

## Output Control

| Flag | Description |
|------|-------------|
| `-c, --color <when>` | Color output (auto, never, always) |
| `--hyperlink[=<when>]` | Add terminal hyperlinks |
| `--path-separator <sep>` | Path separator |
| `--search-path <path>` | Search path instead of arguments |
| `--strip-cwd-prefix[=<when>]` | Strip ./ prefix |
| `--one-file-system` | Don't cross filesystem boundaries |

## Execution Options

| Flag | Description |
|------|-------------|
| `-x, --exec <cmd>` | Execute command for each result |
| `-X, --exec-batch <cmd>` | Execute command with all results |
| `--batch-size <size>` | Max arguments for -X |
| `--ignore-file <path>` | Custom ignore file |

## Directory Traversal

| Flag | Description |
|------|-------------|
| `--walker <opts>` | Directory traversal options |
| `--walker-root <dir>` | Root directories for walker |
| `--walker-skip <dirs>` | Directories to skip |
| `-C, --base-directory <path>` | Change working directory |

## Advanced Usage

```bash
# Find directories only
fd -t d "node_modules" -x rm -rf

# Find and open with editor
fd -e rs | xargs hx

# Case insensitive search
fd -i "readme"

# Search with regex
fd "^test.*\.rs$"

# Find files modified within 7 days
fd --changed-within 7days

# Find files older than 30 days
fd --changed-before 30days

# Find files between 1MB and 10MB
fd --size 1M..10M

# Execute command in parallel
fd -e py -x python3 {}

# Execute with all results at once
fd -e log -X rm

# Custom batch size
fd -e txt -X --batch-size 100 cat

# Search with custom ignore file
fd --ignore-file .fdignore

# Search specific path
fd --search-path ~/Downloads pattern

# Strip current directory prefix
fd --strip-cwd-prefix

# Add hyperlinks
fd --hyperlink=always

# Show errors
fd --show-errors

# Limit depth
fd --max-depth 2

# Follow symlinks
fd --follow

# Use glob patterns
fd -g "*.py" --glob "!test_*"

# Multiple extensions
fd -e js -e ts -e jsx -e tsx

# Find executables
fd -t x

# Find symlinks
fd -t l

# Case sensitive override
fd --case-sensitive "README"

# Literal string search
fd --fixed-strings "exact string"
```

## Time-based Filtering

```bash
# Files modified in last N days/weeks/months
fd --changed-within 2weeks
fd --changed-within 1month
fd --changed-within 3days

# Files modified before certain date
fd --changed-before 2023-01-01
fd --changed-before 1year

# Files modified between dates
fd --changed-within 1week --changed-before 2days
```

## Size-based Filtering

```bash
# Files larger than 1MB
fd --size +1M

# Files smaller than 100KB
fd --size -100K

# Files between 1MB and 10MB
fd --size 1M..10M

# Files exactly 1KB
fd --size 1K

# Size units: b, k, M, G, T, ki, Mi, Gi, Ti
```

## Integration Examples

### With fzf

```bash
# Fuzzy file selection with preview
fd -e md | fzf --preview 'bat --color=always {}'

# Interactive directory navigation
fd -t d | fzf --preview 'eza --tree {}' | cd

# Search and edit
fd | fzf --preview 'bat {}' | xargs hx
```

### With ripgrep

```bash
# Find files containing pattern
rg -l "pattern" | fd -e js

# Search and replace
fd -e ts | xargs sed -i 's/old/new/g'
```

### Git Workflow

```bash
# Find untracked files
fd --type f --hidden | git check-ignore --stdin

# Clean git repository
fd -H -I -E '.git' | git clean -fd

# Find large files in git history
git ls-files | xargs fd --size +10M
```

### Development

```bash
# Find test files
fd -t f "^test_.*\.py$"

# Find configuration files
fd -e json -e yaml -e toml -e ini

# Find source files by language
fd -e rs -e go -e py -e js -e ts

# Find and format files
fd -e rs -x rustfmt {}
fd -e py -x black {}
fd -e js -x prettier --write {}
```

### System Administration

```bash
# Find large log files
fd -e log --size +100M

# Find temporary files
fd -t f /tmp --changed-within 1day

# Find executable scripts
fd -t x --extension sh

# Find broken symlinks
fd -t l --exec-bash test -e
```

## Performance Tips

1. **Use threads**: Adjust with `-j` for CPU-intensive searches
2. **Limit depth**: Use `--max-depth` for deep directory trees
3. **Exclude patterns**: Use `-E` to exclude large directories
4. **Case sensitivity**: Use `-s` for faster case-sensitive searches
5. **Batch execution**: Use `-X` for commands that handle multiple arguments

## Configuration

Create `.fdignore` file (similar to `.gitignore`):

```
# Ignore common directories
node_modules
target
build
dist
.git
.svn

# Ignore file types
*.log
*.tmp
*.cache

# Ignore patterns
*.backup.*
test_*
```

## Aliases

```bash
# Common aliases
alias find='fd'
alias ff='fd -H'  # include hidden
alias fe='fd -e'  # by extension
alias ft='fd -t'  # by type

# Advanced aliases
alias fjs='fd -e js -e jsx'
alias fpy='fd -e py'
alias frs='fd -e rs'
alias fmd='fd -e md'

# Search and execute
alias frm='fd -e log -X rm'
alias fedit='fd | fzf --preview "bat {}" | xargs hx'
```

## Environment Variables

| Variable | Description |
|----------|-------------|
| `FIND_DEFAULT_OPTIONS` | Default fd options |
| `FD_DEFAULT_OPTIONS` | Default fd options (alternative) |

## Features

- **Fast**: Written in Rust for performance
- **User-friendly**: Intuitive syntax and colored output
- **Regex support**: Powerful pattern matching
- **Parallel execution**: Multi-threaded searching
- **Git integration**: Respects .gitignore by default
- **Cross-platform**: Windows, macOS, Linux support
- **Flexible**: Multiple filtering and execution options
- **Interactive**: Works well with fzf and other tools
- **Safe**: Won't follow dangerous symlinks by default
- **Customizable**: Extensive configuration options
