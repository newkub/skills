---
description: Intuitive find & replace CLI with advanced regex and streaming capabilities
title: cli-sd
tags: [cli, search, replace, regex, streaming]
---

## Overview

`sd` เป็น intuitive find & replace tool ที่ใช้งานง่ายกว่า sed รองรับ regex และ literal string replacement พร้อม advanced features สำหรับ text processing และ streaming operations

## Installation

```powershell
scoop install sd
# หรือ
choco install sd
# หรือ
winget install BurntSushi.sd
# หรือ
cargo install sd
```

## Basic Usage

```bash
# Basic replacement
sd "old" "new" file.txt

# In-place edit (default behavior)
sd "old" "new" file.txt

# Recursive directory
sd "old" "new" --recursive ./src

# Multiple files
sd "old" "new" *.md

# Standard input
cat file.txt | sd "old" "new"

# Output to file
cat file.txt | sd "old" "new" > output.txt
```

## Command Line Options

### Search and Replace Options

| Flag | Description |
|------|-------------|
| `-s, --string-mode` | Treat pattern as literal string |
| `-f, --flags <flags>` | Regex flags (i, m, s, U) |
| `-p, --preview` | Preview changes without applying |
| `-F, --fixed-strings` | Literal string patterns |
| `-e, --regexp <pattern>` | Use regex pattern |
| `-x, --extended-regexp` | Extended regex (default) |

### File Handling

| Flag | Description |
|------|-------------|
| `-r, --recursive` | Recursive search in directories |
| `-g, --glob <pattern>` | Filter files with glob pattern |
| `--iglob <pattern>` | Case-insensitive glob |
| `--follow` | Follow symbolic links |
| `-0, --print0` | Use NUL character for filename separation |
| `-w, --word` | Match whole words only |

### Output Options

| Flag | Description |
|------|-------------|
| `-n, --line-number` | Show line numbers |
| `-c, --count` | Show count of matches |
| `-o, --only-matching` | Show only matched parts |
| `-u, --unbuffered` | Unbuffered output |
| `--no-line-number` | Hide line numbers |
| `--null` | Use NUL as line separator |

### Performance and Debug

| Flag | Description |
|------|-------------|
| `-j, --threads <num>` | Number of threads |
| `--buffer-size <size>` | Buffer size for streaming |
| `--debug` | Debug information |
| `--help` | Show help |
| `--version` | Show version |

## Pattern Syntax

### Basic Patterns

```bash
# Literal string replacement
sd "hello" "world" file.txt

# Case insensitive
sd -i "hello" "world" file.txt

# Whole word matching
sd -w "word" "replacement" file.txt

# Multiple patterns
sd -e "pattern1" "replacement1" -e "pattern2" "replacement2" file.txt
```

### Regex Patterns

```bash
# Capture groups
sd "(\w+) (\w+)" "$2 $1" file.txt

# Named capture groups
sd "(?<first>\w+) (?<last>\w+)" "$last $first" file.txt

# Character classes
sd "[0-9]+" "NUMBER" file.txt
sd "[a-zA-Z]" "LETTER" file.txt
sd "[^0-9]" "NON-DIGIT" file.txt

# Quantifiers
sd "a+" "A" file.txt
sd "a{2,3}" "AA" file.txt
sd "a*" "ZERO_OR_MORE" file.txt
sd "a?" "OPTIONAL" file.txt

# Anchors
sd "^start" "BEGIN" file.txt
sd "end$" "FINISH" file.txt
sd "\bword\b" "WORD" file.txt
```

### Special Characters

```bash
# Replace newlines
sd '\n' ',' file.txt

# Replace tabs
sd '\t' '    ' file.txt

# Replace backslashes
sd '\\' '/' file.txt

# Replace quotes
sd '"' "'" file.txt

# Unicode characters
sd 'café' 'cafe' file.txt
```

### Advanced Patterns

```bash
# Delete matching lines
sd "^#.*\n" "" file.txt

# Remove empty lines
sd "^\s*\n" "" file.txt

# Replace multiple spaces
sd " +" " " file.txt

# Trim whitespace
sd "^\s+|\s+$" "" file.txt

# Add line numbers
sd "^" "Line $1: " file.txt

# Remove HTML tags
sd "<[^>]*>" "" file.txt

# Extract URLs
sd "https://[^\s]+" "URL: $0" file.txt
```

## File Operations

### Recursive Operations

```bash
# Recursive search and replace
sd "old" "new" --recursive ./src

# Recursive with glob pattern
sd "old" "new" --recursive --glob "*.py" ./src

# Exclude directories
sd "old" "new" --recursive --glob "!node_modules" .

# Follow symbolic links
sd "old" "new" --recursive --follow .
```

### File Filtering

```bash
# Multiple file types
sd "old" "new" --glob "*.py" --glob "*.js" .

# Case-insensitive glob
sd "old" "new" --iglob "*.TXT" .

# Complex patterns
sd "old" "new" --glob "src/**/*.rs" --glob "tests/**/*.rs"

# Exclude patterns
sd "old" "new" --glob "*.rs" --glob "!target" .
```

### Streaming Operations

```bash
# Process large files efficiently
cat large_file.txt | sd "pattern" "replacement" > output.txt

# Real-time processing
tail -f log.txt | sd "ERROR" "ERROR!" | tee processed.log

# Pipeline processing
cat file.txt | sd "old" "new" | sd "another" "replacement" > final.txt

# Multiple files processing
find . -name "*.txt" -print0 | xargs -0 sd "old" "new"
```

## Advanced Features

### Preview Mode

```bash
# Preview changes without applying
sd "old" "new" --preview file.txt

# Preview with line numbers
sd "old" "new" --preview --line-number file.txt

# Preview recursive changes
sd "old" "new" --recursive --preview ./src
```

### Performance Optimization

```bash
# Use multiple threads
sd "old" "new" --threads 4 file.txt

# Adjust buffer size for large files
sd "old" "new" --buffer-size 1M large_file.txt

# Unbuffered output for real-time processing
sd "old" "new" --unbuffered file.txt
```

### Count and Statistics

```bash
# Count matches
sd "pattern" "replacement" --count file.txt

# Count matches across files
sd "pattern" "replacement" --count --recursive .

# Show only matching parts
sd "pattern" "replacement" --only-matching file.txt
```

## Integration Examples

### With ripgrep

```bash
# Find files and replace
rg -l "pattern" | xargs sd "old" "new"

# Complex workflow
rg -l "function_name" | xargs sd "function_name" "new_function_name" --preview

# Replace across project
rg -l "TODO" --type py | xargs sd "TODO" "FIXME"
```

### With fd

```bash
# Find and replace in specific files
fd -e rs | xargs sd "println!" "println!"

# Replace in nested directories
fd -e py -g "**/test_**" | xargs sd "test_" "spec_"

# Exclude directories
fd -e rs --exclude target | xargs sd "old" "new"
```

### With bat

```bash
# Preview changes with syntax highlighting
sd "old" "new" --preview file.txt | bat

# Show line numbers
sd "old" "new" --line-number file.txt | bat
```

### With git

```bash
# Replace in tracked files
git ls-files | xargs sd "old" "new"

# Replace in modified files
git diff --name-only | xargs sd "old" "new"

# Safe replacement workflow
git diff --name-only | xargs sd "old" "new" --preview
git diff --name-only | xargs sd "old" "new"
git add .
```

## Development Workflows

### Code Refactoring

```bash
# Rename function
sd "oldFunction" "newFunction" --recursive --glob "*.js"

# Update imports
sd "from old_module" "from new_module" --recursive --glob "*.py"

# Replace API calls
sd "old_api_call" "new_api_call" --recursive --glob "*.{js,ts}"

# Update configuration
sd "old_value" "new_value" config.json
```

### Documentation Updates

```bash
# Update version numbers
sd "v1.0.0" "v2.0.0" README.md CHANGELOG.md

# Update URLs
sd "http://old.example.com" "https://new.example.com" --recursive --glob "*.md"

# Update email addresses
sd "old@example.com" "new@example.com" --recursive --glob "*.{txt,md}"
```

### Text Processing

```bash
# Clean up whitespace
sd "^\s+|\s+$" "" --recursive --glob "*.txt"

# Remove comments
sd "#.*\n" "" --recursive --glob "*.py"

# Format dates
sd "(\d{4})-(\d{2})-(\d{2})" "$3/$2/$1" dates.txt

# Extract data
sd "name: (\w+)" "$1" --only-matching data.txt
```

## Comparison with sed

### Feature Comparison

| Task | sed | sd |
|------|-----|-----|
| **Basic replace** | `sed -i 's/old/new/g'` | `sd old new` |
| **Case insensitive** | `sed -i 's/old/new/gI'` | `sd -i old new` |
| **Recursive** | `find . -exec sed -i 's/old/new/g' {} +` | `sd old new -r .` |
| **Preview** | `sed 's/old/new/g'` | `sd old new --preview` |
| **Multiple files** | `sed -i 's/old/new/g' *.txt` | `sd old new *.txt` |
| **Regex groups** | `sed -i 's/\(a\)\(b\)/\2\1/g'` | `sd '(a)(b)' '$2$1'` |
| **Word boundaries** | `sed -i 's/\bold\b/new/g'` | `sd -w old new` |
| **Unicode** | Limited | Full support |

### Advantages of sd

| Feature | sd Advantage |
|---------|-------------|
| **Syntax** | No need to escape `/` separator |
| **Regex** | Modern regex syntax by default |
| **Unicode** | Full Unicode support |
| **Performance** | Faster for large files |
| **Preview** | Built-in preview mode |
| **Recursive** | Built-in recursive search |
| **Streaming** | Efficient streaming operations |
| **Glob patterns** | Built-in file filtering |
| **Threaded** | Multi-threaded processing |

## Performance Tips

### Large Files

```bash
# Use streaming for very large files
cat huge_file.txt | sd "pattern" "replacement" > output.txt

# Adjust buffer size
sd "pattern" "replacement" --buffer-size 10M large_file.txt

# Use multiple threads
sd "pattern" "replacement" --threads 8 file.txt
```

### Batch Operations

```bash
# Parallel processing
find . -name "*.txt" | parallel sd "old" "new" {}

# Process in chunks
find . -name "*.txt" | head -100 | xargs sd "old" "new"
```

## Troubleshooting

### Common Issues

1. **No matches found**: Check pattern syntax and case sensitivity
2. **Permission denied**: Check file permissions
3. **Unicode issues**: Enable Unicode support (default in sd)
4. **Large files**: Use streaming or adjust buffer size

### Debug Mode

```bash
# Debug pattern matching
sd "pattern" "replacement" --debug file.txt

# Test with preview
sd "pattern" "replacement" --preview file.txt

# Check line numbers
sd "pattern" "replacement" --line-number file.txt
```

## Scripting Examples

### Automated Refactoring Script

```bash
#!/bin/bash
# Automated refactoring script

echo "Starting refactoring..."

# Preview changes
echo "Previewing changes..."
sd "old_pattern" "new_pattern" --recursive --preview --glob "*.js"

# Ask for confirmation
read -p "Continue with replacement? (y/n) " -n 1 -r
echo
if [[ $REPLY =~ ^[Yy]$ ]]; then
    echo "Applying changes..."
    sd "old_pattern" "new_pattern" --recursive --glob "*.js"
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
    sd "$old" "$new" --recursive --preview --glob "*.{js,ts}"
    
    read -p "Apply this replacement? (y/n) " -n 1 -r
    echo
    if [[ $REPLY =~ ^[Yy]$ ]]; then
        sd "$old" "$new" --recursive --glob "*.{js,ts}"
    fi
done
```

## Aliases and Functions

### Common Aliases

```bash
# Basic aliases
alias sdr='sd --recursive'
alias sdp='sd --preview'
alias sdi='sd -i'
alias sdw='sd -w'
alias sdn='sd --line-number'

# Development aliases
alias replace='sd --preview'
alias replace-force='sd'
alias replace-all='sd --recursive'
```

### Custom Functions

```bash
# Search and replace with preview
sdrp() {
    sd "$@" --recursive --preview
}

# Replace with confirmation
sdc() {
    sd "$@" --preview
    read -p "Apply changes? (y/n) " -n 1 -r
    echo
    if [[ $REPLY =~ ^[Yy]$ ]]; then
        sd "$@"
    fi
}

# Count replacements
sdcount() {
    sd "$@" --count
}
```

## Features

- **Intuitive syntax**: No need to escape separators
- **Modern regex**: Full regex support by default
- **Unicode support**: Complete Unicode handling
- **Fast performance**: Optimized for speed
- **Preview mode**: See changes before applying
- **Recursive search**: Built-in directory traversal
- **Glob patterns**: Flexible file filtering
- **Streaming**: Efficient large file processing
- **Multi-threaded**: Parallel processing capabilities
- **Case sensitivity**: Control case matching
- **Word boundaries**: Whole word matching
- **Line numbers**: Optional line number display
- **Count matches**: Statistics and counting
- **Cross-platform**: Windows, macOS, Linux
- **Pipeline support**: Unix philosophy compatible
- **Memory efficient**: Low memory usage
- **Flexible output**: Multiple output formats
