---
description: Count code statistics quickly with advanced language support and performance optimization
title: cli-tokei
tags: [cli, statistics, analysis, code-metrics, performance]
---

## Overview

`tokei` เป็น tool สำหรับนับ lines of code ในโปรเจกต์ รวดเร็วและรองรับหลายภาษา พร้อม advanced features สำหรับ code analysis และ performance optimization

## Installation

```powershell
scoop install tokei
# หรือ
choco install tokei
# หรือ
winget install XAMPPRocky.tokei
# หรือ
cargo install tokei
```

## Basic Usage

```bash
# Basic statistics for current directory
tokei

# Specific directories
tokei src tests

# Sort by lines
tokei --sort lines

# Show only specific language
tokei --type Rust

# Exclude directories
tokei --exclude target,node_modules

# Output to file
tokei --output json stats.json
```

## Command Line Options

### Basic Options

| Flag | Description |
|------|-------------|
| `-s, --sort <column>` | Sort by column (lines, code, comments, blanks, files) |
| `-t, --type <language>` | Show only specific language |
| `-e, --exclude <pattern>` | Exclude directories/files |
| `-o, --output <format>` | Output format (json, yaml, cbor) |
| `-f, --files` | Include individual file stats |
| `-l, --languages` | List supported languages |
| `-v, --verbose` | Verbose output |
| `-q, --quiet` | Quiet mode |

### Filtering Options

| Flag | Description |
|------|-------------|
| `-i, --input <file>` | Read file list from file |
| `-c, --columns <width>` | Set output column width |
| `-A, --all` | Show all languages (including empty) |
| `-C, --no-csv` | Disable CSV output |
| `-L, --no-languages` | Don't show language names |
| `-S, --no-sort` | Don't sort results |

### Advanced Options

| Flag | Description |
|------|-------------|
| `--hidden` | Include hidden files |
| `--no-ignore` | Don't respect .gitignore |
| `--no-ignore-parent` | Don't respect parent .gitignore |
| `--no-ignore-dot` | Don't respect .ignore files |
| `--no-ignore-vcs` | Don't respect VCS ignore files |
| `--threads <num>` | Number of threads to use |
| `--compact` | Compact output format |

## Output Columns

### Default Columns

- **Language**: Programming language name
- **Files**: Number of files
- **Lines**: Total lines of code
- **Code**: Lines of actual code
- **Comments**: Lines of comments
- **Blanks**: Empty lines

### Extended Columns (with --files)

- **File**: Individual file name
- **Language**: File language
- **Lines**: Total lines in file
- **Code**: Code lines in file
- **Comments**: Comment lines in file
- **Blanks**: Blank lines in file

## Advanced Usage

### Language-Specific Analysis

```bash
# Show only Python statistics
tokei --type Python

# Multiple languages
tokei --type Rust --type Go --type TypeScript

# Exclude specific languages
tokei --exclude "*.md" --exclude "*.json"

# Show all languages including empty ones
tokei --all
```

### Directory Filtering

```bash
# Exclude multiple directories
tokei --exclude target --exclude node_modules --exclude dist

# Include hidden files
tokei --hidden

# Don't respect .gitignore
tokei --no-ignore

# Analyze specific directories only
tokei src lib tests docs
```

### Output Formats

```bash
# JSON output
tokei --output json > stats.json

# YAML output
tokei --output yaml > stats.yaml

# CBOR output (binary)
tokei --output cbor > stats.cbor

# Compact output
tokei --compact

# Custom column width
tokei --columns 120
```

### Performance Options

```bash
# Use specific number of threads
tokei --threads 8

# Verbose output for debugging
tokei --verbose

# Quiet mode for scripts
tokei --quiet
```

## Configuration

### Configuration File

Create `~/.config/tokei.toml`:

```toml
[general]
# Exclude directories
exclude = [
    "target",
    "node_modules",
    "dist",
    "build",
    ".git",
    ".vscode",
    ".idea"
]

# Include hidden files
hidden = false

# Respect .gitignore
respect_gitignore = true

# Number of threads
threads = 4

# Output format
output = "text"

# Sort by
sort = "lines"

[languages]
# Language-specific settings
[rust]
# Custom file extensions for Rust
extensions = ["rs"]

[python]
# Custom file extensions for Python
extensions = ["py", "pyi", "pyw"]

[javascript]
# Custom file extensions for JavaScript
extensions = ["js", "mjs", "cjs", "jsx"]

[typescript]
# Custom file extensions for TypeScript
extensions = ["ts", "mts", "cts", "tsx"]
```

### Language Definitions

```toml
# Custom language definitions
[[languages]]
name = "MyLang"
extensions = ["mylang"]
line_comment = "#"
multi_line_comments = [["/*", "*/"]]
quotes = [["\"", "'"]]

[[languages]]
name = "Config"
extensions = ["conf", "config"]
line_comment = "#"
```

## Integration Examples

### CI/CD Integration

```bash
# Generate statistics for CI
tokei --output json > code-stats.json

# Generate summary for reports
tokei --sort lines --compact > stats.txt

# Check code coverage threshold
if [ $(tokei --type Python | grep "Python" | awk '{print $3}') -lt 1000 ]; then
    echo "Insufficient code coverage"
    exit 1
fi
```

### Git Integration

```bash
# Analyze only tracked files
git ls-files | tokei --files -i -

# Analyze changes between commits
git diff --name-only HEAD~1 HEAD | tokei --files -i -

# Analyze specific branch
git diff --name-only main..feature | tokei --files -i -
```

### Project Analysis

```bash
# Complete project analysis
tokei --all --sort lines --verbose > project-stats.txt

# Language breakdown
tokei --languages

# File-level analysis
tokei --files --sort code > file-stats.txt

# Generate report
tokei --output json > stats.json && \
python generate_report.py stats.json
```

## Performance Optimization

### Thread Configuration

```bash
# Auto-detect threads (default)
tokei

# Use specific thread count
tokei --threads 4

# Use all available cores
tokei --threads $(nproc)
```

### Memory Optimization

```bash
# Compact output for large projects
tokei --compact

# Process in chunks for very large projects
find . -name "*.py" | head -1000 | tokei --files -i -

# Exclude large directories
tokei --exclude node_modules --exclude target --exclude .git
```

### Fast Analysis

```bash
# Quick stats without details
tokei --quiet

# Only show totals
tokei --no-languages

# Minimal output
tokei --compact --no-sort
```

## Supported Languages

### Major Languages

| Language | Extensions |
|-----------|------------|
| **Rust** | `.rs` |
| **Python** | `.py`, `.pyi`, `.pyw`, `.py3` |
| **JavaScript** | `.js`, `.mjs`, `.cjs`, `.jsx` |
| **TypeScript** | `.ts`, `.mts`, `.cts`, `.tsx` |
| **Go** | `.go` |
| **Java** | `.java` |
| **C/C++** | `.c`, `.cpp`, `.cc`, `.cxx`, `.h`, `.hpp` |
| **C#** | `.cs` |
| **PHP** | `.php`, `.phtml`, `.php3`, `.php4` |
| **Ruby** | `.rb`, `.rbw` |
| **Swift** | `.swift` |
| **Kotlin** | `.kt`, `.kts` |
| **Scala** | `.scala`, `.sc` |
| **R** | `.R`, `.r` |
| **SQL** | `.sql` |
| **Shell** | `.sh`, `.bash`, `.zsh`, `.fish` |

### Web Languages

| Language | Extensions |
|-----------|------------|
| **HTML** | `.html`, `.htm`, `.xhtml` |
| **CSS** | `.css`, `.scss`, `.sass`, `.less` |
| **JSON** | `.json` |
| **YAML** | `.yaml`, `.yml` |
| **XML** | `.xml`, `.xsl`, `.xslt` |
| **Markdown** | `.md`, `.markdown` |

### Configuration Languages

| Language | Extensions |
|-----------|------------|
| **TOML** | `.toml` |
| **Dockerfile** | `Dockerfile`, `dockerfile` |
| **Makefile** | `Makefile`, `makefile`, `GNUmakefile` |
| **CMake** | `.cmake` |
| **Gradle** | `.gradle`, `.gradle.kts` |

## Advanced Features

### Custom Statistics

```bash
# Count only code lines (no comments, no blanks)
tokei --sort code

# Count only comments
tokei --sort comments

# Count only blank lines
tokei --sort blanks

# Count by number of files
tokei --sort files
```

### Batch Processing

```bash
# Process multiple directories
for dir in project1 project2 project3; do
    echo "Analyzing $dir:"
    tokei $dir
    echo "---"
done

# Generate reports for all projects
find . -name "*.git" -type d | while read gitdir; do
    project=$(dirname "$gitdir")
    tokei "$project" > "$project/stats.txt"
done
```

### Script Integration

```bash
#!/bin/bash
# Code analysis script

echo "=== Code Statistics ==="
tokei --sort lines

echo -e "\n=== Language Breakdown ==="
tokei --languages

echo -e "\n=== Top 10 Files by Lines ==="
tokei --files --sort lines | head -10

echo -e "\n=== JSON Export ==="
tokei --output json > stats.json
echo "Statistics saved to stats.json"
```

## Troubleshooting

### Common Issues

1. **Slow performance**: Use fewer threads or exclude large directories
2. **Memory issues**: Use compact output or process in chunks
3. **Language not detected**: Check file extensions and language definitions
4. **Exclude patterns not working**: Verify pattern syntax

### Debug Mode

```bash
# Verbose output
tokei --verbose

# Show supported languages
tokei --languages

# Test configuration
tokei --config ~/.config/tokei.toml

# Check file detection
tokei --files --verbose
```

## Aliases and Functions

### Common Aliases

```bash
# Basic aliases
alias tk='tokei'
alias tkj='tokei --output json'
alias tkl='tokei --sort lines'
alias tkc='tokei --sort code'
alias tkf='tokei --files'

# Analysis aliases
alias stats='tokei --sort lines --compact'
alias lang-stats='tokei --languages'
alias file-stats='tokei --files --sort code'
```

### Custom Functions

```bash
# Project analysis
analyze-project() {
    local project=$1
    echo "Analyzing $project:"
    tokei "$project" --sort lines --verbose
}

# Language-specific analysis
analyze-lang() {
    local lang=$1
    tokei --type "$lang" --sort lines
}

# Generate report
generate-report() {
    local output=$1
    tokei --output json > "$output"
    echo "Report saved to $output"
}

# Compare directories
compare-dirs() {
    local dir1=$1
    local dir2=$2
    echo "=== $dir1 ==="
    tokei "$dir1" --sort lines
    echo -e "\n=== $dir2 ==="
    tokei "$dir2" --sort lines
}
```

## Use Cases

### Development Workflow

```bash
# Daily code statistics
alias daily-stats='tokei --sort lines --compact'

# Before commit check
pre-commit-stats() {
    echo "Code statistics before commit:"
    tokei --sort lines
    echo -e "\nFiles changed:"
    git diff --name-only | tokei --files -i -
}
```

### Project Management

```bash
# Project health check
project-health() {
    echo "=== Project Health ==="
    echo "Total lines: $(tokei --quiet | awk '{sum+=$3} END {print sum}')"
    echo "Files: $(tokei --quiet | awk '{sum+=$2} END {print sum}')"
    echo "Languages: $(tokei --languages | wc -l)"
}

# Language distribution
lang-distribution() {
    tokei --sort lines | awk 'NR>1 {print $1, $3}' | sort -k2 -nr
}
```

### Performance Monitoring

```bash
# Monitor code growth over time
code-growth() {
    local date=$(date +%Y-%m-%d)
    local stats=$(tokei --quiet | awk '{sum+=$3} END {print sum}')
    echo "$date,$stats" >> code-growth.csv
}

# Analyze large files
large-files() {
    tokei --files --sort lines | awk '$3 > 1000'
}
```

## Features

- **150+ languages**: Extensive language support
- **Fast parallel processing**: Multi-threaded analysis
- **Configurable**: TOML configuration file support
- **Multiple output formats**: JSON, YAML, CBOR, text
- **Git integration**: Respects .gitignore by default
- **Customizable**: Add custom languages and extensions
- **Performance optimized**: Efficient memory usage
- **Cross-platform**: Windows, macOS, Linux
- **Detailed statistics**: Code, comments, blanks breakdown
- **File-level analysis**: Individual file statistics
- **Sorting options**: Multiple sorting criteria
- **Filtering**: Exclude files and directories
- **Hidden file support**: Include hidden files
- **Thread control**: Configurable thread count
- **Verbose output**: Detailed analysis information
- **Compact mode**: Space-efficient output
- **Batch processing**: Handle multiple directories
- **Script friendly**: Quiet mode for automation
