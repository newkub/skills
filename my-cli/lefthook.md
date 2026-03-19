---
description: Fast and powerful Git hooks manager with parallel execution and advanced features
title: cli-lefthook
tags: [cli, git, hooks, automation, ci-cd]
---

## Overview

`lefthook` เป็น Git hooks manager ที่เร็วและ powerful รองสนุน parallel execution, cross-platform และ advanced configuration options สำหรับ automation และ CI/CD workflows

## Installation

```powershell
scoop install lefthook
# หรือ
choco install lefthook
# หรือ
npm install -g lefthook
# หรือ
cargo install lefthook
```

## Setup

```bash
# Initialize lefthook in project
lefthook install

# Install with specific config
lefthook install -f config.yml

# Install for all hooks
lefthook install --all

# Check installation
lefthook version
```

## Command Line Options

| Flag | Description |
|------|-------------|
| `-c, --config <file>` | Config file path |
| `-f, --force` | Force operation |
| `-v, --verbose` | Verbose output |
| `-q, --quiet` | Quiet mode |
| `--no-colors` | Disable colors |
| `--help` | Show help |
| `--version` | Show version |

## Basic Configuration

Config file: `lefthook.yml`

```yaml
# Simple pre-commit hook
pre-commit:
  commands:
    lint:
      run: npm run lint
    test:
      run: npm test

# With parallel execution
pre-commit:
  parallel: true
  commands:
    lint:
      run: npm run lint
    format:
      run: npm run format
    typecheck:
      run: npm run typecheck
```

## Advanced Configuration

### Hook Types

```yaml
# All available hooks
pre-commit:
  commands:
    - name: lint
      run: npm run lint

pre-push:
  commands:
    - name: test
      run: npm test

commit-msg:
  commands:
    - name: validate-message
      run: npx commitlint --edit {1}

pre-merge-commit:
  commands:
    - name: security-scan
      run: npm audit

prepare-commit-msg:
  commands:
    - name: add-issue-number
      run: ./scripts/add-issue-number.sh {1}

post-checkout:
  commands:
    - name: install-deps
      run: npm install
      files: "package.json"
```

### File Patterns and Filters

```yaml
pre-commit:
  commands:
    eslint:
      glob: "*.{js,ts,jsx,tsx}"
      run: npx eslint {staged_files}
    prettier:
      glob: "*.{js,ts,jsx,tsx,css,md,json}"
      run: npx prettier --write {staged_files}
    rustfmt:
      glob: "*.rs"
      run: cargo fmt
    gofmt:
      glob: "*.go"
      run: go fmt {staged_files}

# Exclude patterns
pre-commit:
  commands:
    test:
      glob: "*.{js,ts}"
      exclude: "vendor/**"
      run: npm test

# Include only specific files
pre-commit:
  commands:
    security:
      files: "package.json"
      run: npm audit
```

### Scripts and Custom Commands

```yaml
pre-commit:
  scripts:
    "hello.sh":
      runner: bash
    "check.py":
      runner: python
    "validate.rb":
      runner: ruby

# Complex script with parameters
pre-commit:
  scripts:
    "complex.sh":
      runner: bash
      args: ["--strict", "--verbose"]
```

### Environment and Conditions

```yaml
# Skip hooks in CI
skip:
  - merge
  - squash
  - ref: refs/heads/main
  - ref: refs/heads/develop
  - env: CI=true

# Environment variables
pre-commit:
  env:
    NODE_ENV: test
    DEBUG: hooks
  commands:
    test:
      run: npm test

# Conditional execution
pre-commit:
  commands:
    deploy-check:
      run: ./scripts/deploy-check.sh
      only_on_branch: main
```

## Commands

### Installation and Management

| Command | Description |
|---------|-------------|
| `lefthook install` | Install hooks |
| `lefthook install --all` | Install all hooks |
| `lefthook uninstall` | Remove hooks |
| `lefthook uninstall --all` | Remove all hooks |
| `lefthook add <hook>` | Add new hook |
| `lefthook remove <hook>` | Remove hook |

### Execution and Testing

| Command | Description |
|---------|-------------|
| `lefthook run <hook>` | Run hook manually |
| `lefthook run pre-commit` | Run pre-commit hook |
| `lefthook run --all` | Run all hooks |
| `lefthook run --force` | Force run hook |

### Configuration and Debug

| Command | Description |
|---------|-------------|
| `lefthook version` | Show version |
| `lefthook doctor` | Check configuration |
| `lefthook dump` | Dump configuration |
| `lefthook list` | List available hooks |

## Advanced Features

### Parallel Execution

```yaml
# Enable parallel execution
pre-commit:
  parallel: true
  commands:
    lint:
      run: npm run lint
    format:
      run: npm run format
    test:
      run: npm test

# Parallel with specific concurrency
pre-commit:
  parallel: true
  concurrency: 4
  commands:
    - name: task1
      run: npm run task1
    - name: task2
      run: npm run task2
```

### Staged Files Handling

```yaml
pre-commit:
  commands:
    # Use staged files
    eslint:
      run: npx eslint {staged_files}
    
    # Use all files
    full-lint:
      run: npx eslint .
    
    # Use changed files
    changed:
      run: git diff --name-only --cached | xargs npx eslint
    
    # Custom file list
    custom:
      run: ./scripts/custom-check.sh {files}
```

### Output and Logging

```yaml
# Control output
pre-commit:
  commands:
    quiet-task:
      run: npm run quiet
      output: pipe
    
    verbose-task:
      run: npm run verbose
      output: console
    
    silent-task:
      run: npm run silent
      output: discard

# Logging configuration
pre-commit:
  commands:
    logged-task:
      run: npm run task
      log_file: "lefthook.log"
```

## Integration Examples

### Node.js Project

```yaml
# lefthook.yml for Node.js
pre-commit:
  parallel: true
  commands:
    lint:
      glob: "*.{js,ts,jsx,tsx}"
      run: npx eslint {staged_files}
    format:
      glob: "*.{js,ts,jsx,tsx,css,md,json}"
      run: npx prettier --write {staged_files}
    typecheck:
      glob: "*.{ts,tsx}"
      run: npx tsc --noEmit

pre-push:
  commands:
    test:
      run: npm test

commit-msg:
  commands:
    commitlint:
      run: npx commitlint --edit {1}
```

### Rust Project

```yaml
# lefthook.yml for Rust
pre-commit:
  parallel: true
  commands:
    fmt:
      glob: "*.rs"
      run: cargo fmt --check
    clippy:
      glob: "*.rs"
      run: cargo clippy -- -D warnings
    test:
      run: cargo test

pre-push:
  commands:
    build:
      run: cargo build --release
```

### Multi-Language Project

```yaml
# lefthook.yml for multi-language
pre-commit:
  parallel: true
  commands:
    # JavaScript/TypeScript
    js-lint:
      glob: "*.{js,ts}"
      run: npx eslint {staged_files}
    
    # Python
    python-lint:
      glob: "*.py"
      run: python -m flake8 {staged_files}
    
    # Go
    go-fmt:
      glob: "*.go"
      run: go fmt {staged_files}
    
    # Rust
    rust-fmt:
      glob: "*.rs"
      run: cargo fmt --check
```

## Performance Optimization

### Fast Hooks

```yaml
# Use file patterns to limit scope
pre-commit:
  commands:
    fast-lint:
      glob: "*.{js,ts}"
      exclude: "vendor/**"
      run: npx eslint {staged_files}

# Use parallel execution
pre-commit:
  parallel: true
  concurrency: 8
  commands:
    - name: task1
      run: npm run task1
    - name: task2
      run: npm run task2
```

### Conditional Execution

```yaml
# Skip hooks in CI
skip:
  - env: CI=true

# Only run on specific branches
pre-commit:
  commands:
    deploy-check:
      run: ./scripts/deploy-check.sh
      only_on_branch: main

# Skip for merge commits
skip:
  - merge
```

## Troubleshooting

### Common Issues

1. **Hooks not executing**: Check installation with `lefthook doctor`
2. **Permission denied**: Make scripts executable
3. **Path issues**: Use absolute paths or proper relative paths
4. **Parallel conflicts**: Disable parallel for conflicting commands

### Debug Mode

```bash
# Run with verbose output
lefthook run pre-commit --verbose

# Check configuration
lefthook doctor

# Dump configuration
lefthook dump

# Test specific hook
lefthook run pre-commit --force
```

## Best Practices

### Configuration Structure

```yaml
# Organized configuration
pre-commit:
  parallel: true
  commands:
    # Fast checks first
    format:
      glob: "*.{js,ts,css,md}"
      run: npx prettier --write {staged_files}
    
    # Then linting
    lint:
      glob: "*.{js,ts}"
      run: npx eslint {staged_files}
    
    # Finally tests
    test:
      run: npm test

# Separate concerns
pre-push:
  commands:
    security:
      run: npm audit
    integration:
      run: npm run test:integration
```

### Error Handling

```yaml
# Continue on failure
pre-commit:
  commands:
    optional-task:
      run: npm run optional
      continue_on_error: true

# Critical tasks
pre-push:
  commands:
    critical-test:
      run: npm run test:critical
      continue_on_error: false
```

## Features

- **Parallel execution**: Run commands concurrently
- **File glob patterns**: Target specific files
- **Custom scripts**: Run shell scripts
- **Skip conditions**: Conditional hook execution
- **Environment variables**: Configure environment
- **Cross-platform**: Windows, macOS, Linux support
- **Fast execution**: Optimized for performance
- **Flexible configuration**: YAML-based config
- **Multiple hook types**: All Git hooks supported
- **Output control**: Manage command output
- **Error handling**: Continue on failure options
- **Integration**: Works with CI/CD systems
- **Debugging**: Comprehensive debugging tools
- **Version control**: Track configuration in git
