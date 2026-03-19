---
description: Ultra-fast grep alternative with advanced search capabilities and performance optimization
title: cli-ripgrep
tags: [cli, search, grep, regex, performance]
---

## Overview

`ripgrep` (rg) เป็น search tool ที่เร็วกว่า grep ทั่วไป รองรับ regex, smart filtering และ colored output พร้อม advanced search features และ performance optimization

## Installation

```powershell
scoop install ripgrep
# หรือ
choco install ripgrep
# หรือ
winget install BurntSushi.ripgrep.MSVC
# หรือ
cargo install ripgrep
```

## Basic Usage

```bash
# Search pattern in current directory
rg "pattern"

# Search specific file type
rg "pattern" --type rust

# Search with line numbers (default)
rg "pattern" -n

# Case insensitive search
rg "pattern" -i

# Whole word matching
rg "pattern" -w

# Show only filenames
rg "pattern" -l

# Count matches per file
rg "pattern" -c

# Invert match
rg "pattern" -v
```

## Command Line Options

### Search Options

| Flag | Description |
|------|-------------|
| `-i, --ignore-case` | Case insensitive search |
| `-s, --case-sensitive` | Case sensitive search |
| `-w, --word-regexp` | Match whole words |
| `-x, --line-regexp` | Match entire lines |
| `-F, --fixed-strings` | Literal string search |
| `-U, --multiline` | Multiline mode |
| `-u, --unrestricted` | Search all files (ignore .gitignore) |
| `-P, --pcre2` | Use PCRE2 regex engine |

### Output Options

| Flag | Description |
|------|-------------|
| `-n, --line-number` | Show line numbers (default) |
| `--column` | Show column numbers |
| `--no-heading` | No file name headings |
| `--no-line-number` | Hide line numbers |
| `--no-column` | Hide column numbers |
| `-c, --count` | Count matches per file |
| `--count-matches` | Count total matches |
| `-l, --files-with-matches` | Show only filenames |
| `--files-without-matches` | Show files without matches |
| `-o, --only-matching` | Show only matched parts |
| `-r, --replace <string>` | Replace matches |
| `--passthru` | Show unmatched lines |

### File Filtering

| Flag | Description |
|------|-------------|
| `-t, --type <type>` | Filter by file type |
| `-T, --type-not <type>` | Exclude file type |
| `-g, --glob <glob>` | Glob pattern filter |
| `--iglob <glob>` | Case-insensitive glob |
| `--glob-add <glob>` | Add additional glob |
| `--glob-case-insensitive` | Case insensitive globs |
| `-f, --file <file>` | Search patterns from file |
| `-e, --regexp <pattern>` | Multiple patterns |

### Context and Display

| Flag | Description |
|------|-------------|
| `-A, --after-context <num>` | Lines after match |
| `-B, --before-context <num>` | Lines before match |
| `-C, --context <num>` | Lines around match |
| `--context-separator <sep>` | Context separator |
| `--max-columns <num>` | Limit line width |
| `--max-columns-preview` | Show preview for long lines |
| `--expand-context` | Expand context lines |
| `--pretty` | Pretty print output |

### Performance Options

| Flag | Description |
|------|-------------|
| `-j, --threads <num>` | Number of threads |
| `--max-filesize <size>` | Maximum file size |
| `--max-depth <num>` | Maximum search depth |
| `--follow` | Follow symbolic links |
| `--no-require-git` | Don't require .git directory |
| `--binary` | Search binary files |
| `--text` | Search text files |

## Advanced Usage

### Complex Search Patterns

```bash
# Search with context
rg "pattern" -C 3

# Search with after/before context
rg "pattern" -A 5 -B 2

# Search multiple patterns
rg -e "pattern1" -e "pattern2"

# Search with replacement
rg "old" -r "new" file.txt

# Search and show only matches
rg "pattern" -o

# Search with column numbers
rg "pattern" --column
```

### File Type Filtering

```bash
# Search specific types
rg "pattern" --type py      # Python
rg "pattern" --type js      # JavaScript
rg "pattern" --type ts      # TypeScript
rg "pattern" --type md      # Markdown
rg "pattern" --type rs      # Rust
rg "pattern" --type go      # Go

# Exclude types
rg "pattern" --type-not js   # Exclude JavaScript
rg "pattern" -T py           # Exclude Python

# Custom file types
rg "pattern" --type-add 'custom:*.custom'
rg "pattern" --type custom
```

### Glob Patterns

```bash
# Include specific files
rg "pattern" -g "*.py"
rg "pattern" -g "src/**/*.rs"

# Exclude directories
rg "pattern" -g '!node_modules'
rg "pattern" -g '!target'
rg "pattern" -g '!.git'

# Complex patterns
rg "pattern" -g 'src/**/*.{rs,toml}'
rg "pattern" --glob 'tests/**/*.py'
```

### Directory and Depth Control

```bash
# Search in specific directory
rg "pattern" ./src

# Search with depth limit
rg "pattern" --max-depth 3

# Follow symbolic links
rg "pattern" --follow

# Unrestricted search (ignore .gitignore)
rg "pattern" -u
```

## Type Filters

### Built-in Types

| Type | Extensions |
|------|------------|
| `py` | Python files |
| `js` | JavaScript files |
| `ts` | TypeScript files |
| `rs` | Rust files |
| `go` | Go files |
| `java` | Java files |
| `c` | C files |
| `cpp` | C++ files |
| `md` | Markdown files |
| `toml` | TOML files |
| `yaml` | YAML files |
| `json` | JSON files |
| `html` | HTML files |
| `css` | CSS files |
| `sh` | Shell scripts |

### Custom Types

```bash
# Add custom type
rg --type-add 'web:*.html,*.css,*.js'

# Search with custom type
rg "pattern" --type web

# List all types
rg --type-list
```

## Integration Examples

### With fzf

```bash
# Interactive file search
rg --files | fzf --preview 'rg {}'

# Interactive pattern search
rg "pattern" | fzf

# Search and edit
rg --files | fzf --preview 'bat {}' | xargs hx
```

### With bat

```bash
# Search with preview
rg "pattern" --passthru | bat

# Search and preview context
rg "pattern" -C 3 | bat
```

### With sd

```bash
# Find and replace
rg -l "old" | xargs sd "old" "new"

# Complex replace workflow
rg -l "function_name" | xargs sd "function_name" "new_function_name"
```

### Git Integration

```bash
# Search in tracked files only
rg "pattern" --no-ignore-vcs

# Search excluding gitignored files
rg "pattern" --type-add 'gitignore:.gitignore'
rg "pattern" --type-not gitignore

# Search in git history
git log -p --all | rg "pattern"
```

### Development Workflows

```bash
# Find TODO comments
rg "TODO|FIXME|HACK" --type-add 'code:*.{py,js,ts,rs}' --type code

# Find console.log statements
rg "console\.log" --type js --type ts

# Find debug statements
rg "print\(|debug\.|console\.log" --type py --type js --type ts

# Find import/export statements
rg "^(import|export)" --type js --type ts --type py

# Find function definitions
rg "^(def|function|fn)\s+\w+" --type py --type js --type rs
```

## Performance Optimization

### Thread Control

```bash
# Use specific thread count
rg "pattern" -j 4

# Disable threading
rg "pattern" -j 1
```

### File Size Limits

```bash
# Limit maximum file size
rg "pattern" --max-filesize 10M

# Search binary files
rg "pattern" --binary
```

### Memory Usage

```bash
# Reduce memory usage
rg "pattern" --max-columns 100

# Search without context for speed
rg "pattern" --no-context
```

## Configuration

### Configuration File

Create `~/.ripgreprc`:

```toml
# Ripgrep configuration file
[default]
# Case sensitivity
case-sensitive = false

# Follow symlinks
follow = true

# Hidden files
hidden = true

# Git ignore
git-ignore = true

# Git global
git-global = true

# Ignore files
ignore-file = ".rgignore"

# Pre-glob
pre-glob = "!*.{log,tmp}"

# Max file size
max-filesize = "10M"

# Threads
threads = 4

# Binary files
binary = false

# Encoding
encoding = "utf-8"

# Max columns
max-columns = 200

# Max columns preview
max-columns-preview = true

# Context separator
context-separator = "--"

# Colors
colors = true

# Line numbers
line-number = true

# Column numbers
column = true

# Heading
heading = true

# Smart case
smart-case = true

# Multiline
multiline = false

# PCRE2
pcre2 = false

# PCRE2 version
pcre2-version = "10.40"

# Unicode
unicode = true

# Invert match
invert-match = false

# Passthru
passthru = false

# Replace
replace = ""

# Quiet
quiet = false

# Only matching
only-matching = false

# Files with matches
files-with-matches = false

# Files without matches
files-without-matches = false

# Count
count = false

# Count matches
count-matches = false

# File list
file-list = ""

# File list separator
file-list-separator = ":"

# Path separator
path-separator = ":"

# Max depth
max-depth = null

# Require git
require-git = false

# No require git
no-require-git = false

# Add type
type-add = []

# Type
type = []

# Type not
type-not = []

# Glob
glob = []

# Glob case insensitive
glob-case-insensitive = false

# Iglob
iglob = []

# Pre-glob
pre-glob = []

# Pre-iglob
pre-iglob = []

# After context
after-context = 0

# Before context
before-context = 0

# Context
context = 0

# Expand context
expand-context = false

# Regex engine
regex-engine = "auto"

# Regex size limit
regex-size-limit = "10M"

# DFA size limit
dfa-size-limit = "1M"

# PCRE2 limit
pcre2-limit = "50M"
```

### Ignore Files

Create `.rgignore`:

```
# Ignore patterns
node_modules/
target/
dist/
build/
*.log
*.tmp
.cache/
.env
.DS_Store
Thumbs.db
```

## Advanced Features

### Regex Engines

```bash
# Use PCRE2 for advanced regex
rg "pattern" --pcre2

# Use ripgrep's default engine
rg "pattern" --regex-engine rust

# Auto-select engine
rg "pattern" --regex-engine auto
```

### Multiline Search

```bash
# Multiline pattern
rg "pattern.*pattern" -U

# Multiline with specific engine
rg "pattern.*pattern" -U --pcre2
```

### Binary File Handling

```bash
# Search in binary files
rg "pattern" --binary

# Search text files only
rg "pattern" --text

# Auto-detect
rg "pattern" --binary --text
```

## Troubleshooting

### Common Issues

1. **Slow search**: Use `--max-depth` and file type filters
2. **Memory issues**: Limit `--max-columns` and use `--binary`
3. **Pattern not found**: Check case sensitivity and regex syntax
4. **Too many results**: Use more specific patterns

### Debug Mode

```bash
# Show debug information
rg "pattern" --debug

# Show type list
rg --type-list

# Test regex
rg "pattern" --pcre2 --debug
```

## Aliases and Functions

### Common Aliases

```bash
# Search aliases
alias rgf='rg --files'
alias rgl='rg --files-with-matches'
alias rgc='rg --count'
alias rgi='rg --ignore-case'
alias rgw='rg --word-regexp'

# Development aliases
alias todos='rg "TODO|FIXME|HACK"'
alias logs='rg "console\.log|print\("'
alias imports='rg "^(import|export)"'
```

### Custom Functions

```bash
# Search and edit
rge() {
    rg "$@" | fzf --preview 'bat {}' | xargs hx
}

# Search with context
rgc() {
    rg "$@" -C 3 | bat
}

# Count and sort
rgcount() {
    rg "$@" -c | sort -nr
}
```

## Features

- **Ultra-fast**: Optimized for speed with SIMD
- **Smart defaults**: Sensible defaults for most use cases
- **Regex support**: Multiple regex engines (Rust, PCRE2)
- **File type filtering**: Built-in and custom file types
- **Git integration**: Respects .gitignore by default
- **Parallel processing**: Multi-threaded search
- **Colored output**: Syntax highlighting for matches
- **Context lines**: Show context around matches
- **Replacement**: In-place search and replace
- **Binary support**: Search in binary files
- **Unicode support**: Full Unicode support
- **Cross-platform**: Windows, macOS, Linux
- **Configurable**: Extensive configuration options
- **Memory efficient**: Low memory usage
- **Recursive**: Recursive directory search
- **Interactive**: Works well with other tools
- **Extensible**: Plugin architecture
