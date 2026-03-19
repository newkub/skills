---
description: Space Age seD - fast and intuitive search and replace tool with preview capabilities
title: cli-sad
tags: [cli, search, replace, regex, preview]
---

## Overview

`sad` (Space Age seD) เป็น search and replace tool ที่เร็วและใช้งานง่าย รองรับ regex, preview ก่อน apply พร้อม advanced features สำหรับ text processing

## Installation

```powershell
scoop install sad
# หรือ
choco install sad
# หรือ
cargo install sad
# หรือ
winget install ms-jpq.sad
```

## Basic Usage

```bash
# Basic search and replace
sad "old" "new" file.txt

# Preview changes (dry run)
sad "old" "new" file.txt --dry-run

# Recursive directory
sad "old" "new" ./src -r

# Multiple files
sad "old" "new" *.md

# Standard input
cat file.txt | sad "old" "new"
```

## Command Line Options

### Basic Options

| Flag | Description |
|------|-------------|
| `-r, --recursive` | Recursive search in directories |
| `-n, --dry-run` | Preview without applying changes |
| `-i, --ignore-case` | Case insensitive search |
| `-g, --glob <pattern>` | Filter by glob pattern |
| `-p, --preview` | Show preview of changes |
| `-w, --word` | Match whole words only |
| `-f, --force` | Force overwrite files |
| `-s, --stats` | Show statistics |

### Search Options

| Flag | Description |
|------|-------------|
| `-e, --regex <pattern>` | Use regex pattern |
| `-x, --fixed-strings` | Literal string search |
| `-u, --unicode` | Enable Unicode support |
| `--case-sensitive` | Case sensitive search |

### Output Options

| Flag | Description |
|------|-------------|
| `-c, --color <when>` | Color output (auto, never, always) |
| `--no-color` | Disable colored output |
| `-q, --quiet` | Quiet mode |
| `-v, --verbose` | Verbose output |
| `--debug` | Debug information |

### File Handling

| Flag | Description |
|------|-------------|
| `-o, --output <file>` | Output to file |
| `--in-place` | Edit files in place |
| `--stdin` | Read from stdin |
| `--stdout` | Write to stdout |

## Advanced Usage

### Regex Patterns

```bash
# Basic regex
sad "fn\s+(\w+)" "function $1" file.rs

# Capture groups
sad "(\d{4})-(\d{2})-(\d{2})" "$3/$2/$1" dates.txt

# Alternation
sad "(error|warn|info)" "log_$1" app.log

# Quantifiers
sad "a+" "A" file.txt
sad "a{2,3}" "AA" file.txt
```

### File Operations

```bash
# Recursive with glob
sad "old" "new" -r -g "*.py" ./src

# Multiple files with pattern
sad "old" "new" -g "src/**/*.rs" -g "tests/**/*.rs"

# Exclude patterns
sad "old" "new" -r -g "!node_modules" -g "!dist" .

# In-place editing
sad "old" "new" --in-place file.txt

# Create backup
sad "old" "new" file.txt --backup
```

### Preview and Statistics

```bash
# Preview changes
sad "old" "new" file.txt --preview

# Dry run with statistics
sad "old" "new" file.txt --dry-run --stats

# Verbose output
sad "old" "new" file.txt --verbose

# Debug mode
sad "old" "new" file.txt --debug
```

## Integration Examples

### With ripgrep

```bash
# Find files and replace
rg -l "pattern" | xargs sad "old" "new"

# Complex workflow
rg -l "function_name" | xargs sad "function_name" "new_function_name" --dry-run

# Replace across project
rg -l "TODO" --type py | xargs sad "TODO" "FIXME"
```

### With fd

```bash
# Find and replace in specific files
fd -e rs | xargs sad "println!" "println!"

# Replace in nested directories
fd -e py -g "**/test_**" | xargs sad "test_" "spec_"
```

### With git

```bash
# Replace in tracked files
git ls-files | xargs sad "old" "new"

# Replace in modified files
git diff --name-only | xargs sad "old" "new"

# Safe replacement workflow
git diff --name-only | xargs sad "old" "new" --dry-run
git diff --name-only | xargs sad "old" "new"
git add .
```

### Development Workflows

```bash
# Update import statements
sad "from old_module" "from new_module" --recursive -g "*.py"

# Replace function calls
sad "old_function(" "new_function(" --recursive -g "*.js"

# Update configuration
sad "old_value" "new_value" config.json

# Batch refactoring
sad "className" "NewClassName" --recursive -g "*.{js,ts,jsx,tsx}"
```

## Advanced Features

### Multiple Patterns

```bash
# Multiple replacements in one command
echo "text" | sad -e "a" "A" -e "b" "B"

# Chain replacements
echo "text" | sad "a" "A" | sad "A" "B"
```

### Word Boundaries

```bash
# Whole word matching
sad "word" "replacement" --word file.txt

# Case sensitive whole words
sad "Word" "Replacement" --word --case-sensitive file.txt
```

### Unicode and Encoding

```bash
# Unicode support
sad "café" "cafe" --unicode file.txt

# Handle different encodings
iconv -f latin1 -t utf8 file.txt | sad "café" "cafe" > new.txt
```

### Backup and Safety

```bash
# Create backup before replacement
sad "old" "new" file.txt --backup

# Force overwrite
sad "old" "new" file.txt --force

# Safe mode (check first)
sad "old" "new" file.txt --dry-run && sad "old" "new" file.txt
```

## Configuration

### Environment Variables

```bash
# Set default options
export SAD_COLOR=always
export SAD_PREVIEW=true
export SAD_CASE_SENSITIVE=false
```

### Aliases

```bash
# Common aliases
alias sad-dry='sad --dry-run'
alias sad-preview='sad --preview'
alias sad-recursive='sad --recursive'
alias sad-word='sad --word'
alias sad-quiet='sad --quiet'

# Development aliases
alias replace='sad --preview --dry-run'
alias replace-force='sad --in-place'
```

## Performance Tips

### Large Files

```bash
# Process large files efficiently
sad "pattern" "replacement" large_file.txt --stats

# Use streaming for very large files
cat large_file.txt | sad "pattern" "replacement" > output.txt
```

### Batch Operations

```bash
# Parallel processing
find . -name "*.txt" | parallel sad "old" "new" {}

# Sequential processing with progress
for file in *.txt; do
    echo "Processing $file..."
    sad "old" "new" "$file" --stats
done
```

## Troubleshooting

### Common Issues

1. **No matches found**: Check pattern syntax and case sensitivity
2. **Permission denied**: Check file permissions
3. **Unicode issues**: Enable Unicode support
4. **Large files**: Use streaming or chunk processing

### Debug Mode

```bash
# Debug pattern matching
sad "pattern" "replacement" file.txt --debug

# Show statistics
sad "pattern" "replacement" file.txt --stats

# Verbose output
sad "pattern" "replacement" file.txt --verbose
```

## Use Cases

### Code Refactoring

```bash
# Rename function
sad "oldFunction" "newFunction" --recursive -g "*.js"

# Update imports
sad "from old_package" "from new_package" --recursive -g "*.py"

# Update API calls
sad "old_api_call" "new_api_call" --recursive -g "*.{js,ts}"
```

### Documentation Updates

```bash
# Update version numbers
sad "v1.0.0" "v2.0.0" README.md CHANGELOG.md

# Update URLs
sad "http://old.example.com" "https://new.example.com" --recursive -g "*.md"

# Update email addresses
sad "old@example.com" "new@example.com" --recursive -g "*.{txt,md}"
```

### Configuration Management

```bash
# Update configuration values
sad "old_value" "new_value" config.json

# Update environment variables
sad "OLD_ENV" "NEW_ENV" .env

# Update database URLs
sad "old_database" "new_database" database.yml
```

## Scripting Examples

### Automated Refactoring Script

```bash
#!/bin/bash
# Automated refactoring script

echo "Starting refactoring..."

# Preview changes
echo "Previewing changes..."
sad "old_pattern" "new_pattern" --recursive --dry-run --stats

# Ask for confirmation
read -p "Continue with replacement? (y/n) " -n 1 -r
echo
if [[ $REPLY =~ ^[Yy]$ ]]; then
    echo "Applying changes..."
    sad "old_pattern" "new_pattern" --recursive --stats
    echo "Refactoring completed!"
else
    echo "Refactoring cancelled."
fi
```

### Batch Processing Script

```bash
#!/bin/bash
# Batch processing script

PATTERNS=(
    "oldFunction:newFunction"
    "oldVariable:newVariable"
    "oldClass:newClass"
)

for pattern in "${PATTERNS[@]}"; do
    old="${pattern%:*}"
    new="${pattern#*:}"
    
    echo "Replacing $old with $new..."
    sad "$old" "$new" --recursive --dry-run --stats
    
    read -p "Apply this replacement? (y/n) " -n 1 -r
    echo
    if [[ $REPLY =~ ^[Yy]$ ]]; then
        sad "$old" "$new" --recursive
    fi
done
```

## Features

- **Fast**: Optimized for performance
- **Intuitive**: Simple and clear syntax
- **Regex support**: Full regex capabilities
- **Preview mode**: See changes before applying
- **Recursive**: Directory traversal
- **Glob patterns**: Flexible file filtering
- **Unicode support**: Handle international text
- **Case sensitivity**: Control case matching
- **Word boundaries**: Whole word matching
- **Statistics**: Track replacement counts
- **Color output**: Highlighted changes
- **Backup**: Safe file modification
- **Streaming**: Handle large files
- **Cross-platform**: Windows, macOS, Linux
- **Git integration**: Works with version control
- **Pipeline support**: Unix philosophy compatible
- **Verbose output**: Detailed operation information
- **Quiet mode**: Silent operation when needed
- **Debug mode**: Troubleshooting capabilities
