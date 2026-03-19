---
title: CLI Skill Example
description: ตัวอย่าง skill สำหรับ CLI tools และ command-line interfaces
type: skill
version: 1.0.0
auto_execution_mode: 3
file-patterns: ["*.sh", "*.bat", "*.ps1", "*.py", "*.js", "*.ts"]
follow:
  skills: ["@bun-sdk", "@node-sdk"]
  workflows: ["/write-workflows"]
  files: []
  mcp: []
---

# CLI Skill Example

## Purpose

ตัวอย่าง skill สำหรับพัฒนา CLI tools และ command-line interfaces:

- **Command structure** - โครงสร้างคำสั่งที่ชัดเจน
- **Argument parsing** - การจัดการ arguments และ options
- **Error handling** - การจัดการ errors อย่างเหมาะสม
- **User experience** - ประสบการณ์การใช้งานที่ดี

## Scope

ใช้สำหรับ:

- พัฒนา CLI applications ทุกประเภท
- การจัดการ command-line arguments
- การสร้าง interactive interfaces
- การจัดการ configuration files
- ไม่รวม GUI applications

## Quick Reference

| Directory | Status | Purpose |
|-----------|--------|---------|
| `SKILL.md` | **MUST** | Main definition |
| `patterns/` | **MUST** | CLI patterns |
| `rules/` | **MUST** | CLI rules |
| `templates/` | **RECOMMENDED** | CLI templates |

## โครงสร้าง Directory

```
cli-skill/
├── SKILL.md
├── patterns/
│   ├── 01-command-structure.md
│   ├── 02-argument-parsing.md
│   ├── 03-error-handling.md
│   └── 04-interactive-cli.md
├── rules/
│   ├── 01-naming-conventions.md
│   ├── 02-help-system.md
│   └── 03-exit-codes.md
└── templates/
    ├── cli-template.sh
    ├── cli-template.py
    └── cli-template.js
```

## Implementation

### 1. สร้างโครงสร้าง CLI

```bash
mkdir cli-skill
cd cli-skill
mkdir patterns rules templates
touch SKILL.md
```

### 2. กำหนด Command Structure

```bash
# Basic command structure
command [options] [arguments]

# Example
myapp --verbose --output=file.txt input.txt
```

### 3. จัดการ Arguments

```python
import argparse

parser = argparse.ArgumentParser(description='My CLI Tool')
parser.add_argument('--verbose', '-v', action='store_true')
parser.add_argument('--output', '-o', required=True)
parser.add_argument('input_file', help='Input file path')
```

### 4. Error Handling

```bash
#!/bin/bash
set -euo pipefail

error_exit() {
    echo "Error: $1" >&2
    exit 1
}

# Usage
command || error_exit "Command failed"
```

## CLI Best Practices

### Command Design
- Use consistent naming conventions
- Provide helpful --help and --version
- Support both long and short options
- Use sensible defaults

### User Experience
- Show progress for long operations
- Use colors appropriately
- Provide clear error messages
- Support configuration files

### Error Handling
- Use meaningful exit codes
- Provide helpful error messages
- Log errors appropriately
- Graceful degradation

## Verification Checklist

- [ ] Commands follow naming conventions
- [ ] Help system is complete
- [ ] Error handling is robust
- [ ] Exit codes are meaningful
- [ ] Configuration is supported
- [ ] Documentation is complete

## Related Skills

- `@bun-sdk` - สำหรับ CLI ด้วย Bun runtime
- `@node-sdk` - สำหรับ CLI ด้วย Node.js
- `@write-skills` - สำหรับสร้าง skills แบบสมบูรณ์
- `@write-markdown` - สำหรับเขียน documentation
