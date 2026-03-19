---
description: Disk Usage/Free utility with modern UI and comprehensive filtering options
title: cli-duf
tags: [cli, disk, system, monitoring]
---

## Overview

`duf` เป็น Disk Usage/Free utility ที่มี modern UI แสดงข้อมูล disk usage แบบ user-friendly พร้อม options สำหรับ filtering, sorting และ output formats หลากหลาย

## Installation

```powershell
scoop install duf
# หรือ
choco install duf
# หรือ
cargo install duf
```

## Basic Usage

```bash
# Show all filesystems
duf

# Show specific directories
duf /home /var

# Show only local devices
duf --only-local

# JSON output for scripting
duf --json

# Sort by usage percentage
duf --sort usage

# Show specific mount points
duf --only-mp "/,/home,/var"

# Custom output fields
duf --output mountpoint,size,used,avail,usage

# Light theme for bright terminals
duf --theme light

# ASCII output for compatibility
duf --style ascii

# Custom width for narrow terminals
duf --width 80

# Show inode information
duf --inodes

# Set usage threshold
duf --avail-threshold "10G,1G"

# Set usage threshold
duf --usage-threshold "0.5,0.9"

# Show all warnings
duf --warnings
```

## Filter Options

| Flag | Description |
|------|-------------|
| `--all` | Include pseudo, duplicate, inaccessible filesystems |
| `--hide <devices>` | Hide specific devices (local, network, fuse, special, loops, binds) |
| `--hide-fs <filesystems>` | Hide specific filesystems (comma-separated) |
| `--hide-mp <mountpoints>` | Hide mount points (supports wildcards) |
| `--only <devices>` | Show only specific devices |
| `--only-fs <filesystems>` | Show only specific filesystems |
| `--only-mp <mountpoints>` | Show only specific mount points |

## Output Options

| Flag | Description |
|------|-------------|
| `--output <fields>` | Output fields (mountpoint, size, used, avail, usage, inodes, type, filesystem) |
| `--sort <field>` | Sort by field (mountpoint, size, used, avail, usage, inodes, type, filesystem) |
| `--style <style>` | Display style (unicode, ascii) |
| `--theme <theme>` | Color theme (dark, light, ansi) |
| `--json` | Output in JSON format |
| `--width <width>` | Max output width |
| `-h, --help` | Show help |
| `-V, --version` | Show version |

## Threshold Options

| Flag | Description |
|------|-------------|
| `--avail-threshold <threshold>` | Available space threshold (default: "10G,1G") |
| `--usage-threshold <threshold>` | Usage percentage threshold (default: "0.5,0.9") |

## Advanced Usage

```bash
# Show only local filesystems
duf --only local

# Hide network and special filesystems
duf --hide network,special

# Show specific mount points
duf --only-mp "/,/home,/var"

# Custom output fields
duf --output mountpoint,size,used,avail,usage

# Sort by available space
duf --sort avail

# Light theme for bright terminals
duf --theme light

# ASCII output for compatibility
duf --style ascii

# Custom width for narrow terminals
duf --width 80

# Show inode information
duf --inodes

# JSON for scripting
duf --json | jq '.filesystems[] | select(.usage > 80)'
```

## Output Fields

Available fields for `--output` option:

- `mountpoint`: Mount point path
- `size`: Total filesystem size
- `used`: Used space
- `avail`: Available space
- `usage`: Usage percentage
- `inodes`: Inode information
- `inodes_used`: Used inodes
- `inodes_avail`: Available inodes
- `inodes_usage`: Inode usage percentage
- `type`: Filesystem type
- `filesystem`: Filesystem name

## Sorting Options

```bash
# Sort by different fields
duf --sort size          # Sort by total size
duf --sort used          # Sort by used space
duf --sort avail         # Sort by available space
duf --sort usage         # Sort by usage percentage
duf --sort mountpoint    # Sort by mount point
duf --sort type          # Sort by filesystem type
```

## Theme Options

```bash
# Dark theme (default)
duf --theme dark

# Light theme for bright terminals
duf --theme light

# ANSI theme (no colors)
duf --theme ansi
```

## Integration Examples

### Monitoring Scripts

```bash
#!/bin/bash
# Check filesystems with >80% usage
duf --json | jq -r '.filesystems[] | select(.usage > 80) | "\(.mountpoint): \(.usage)%"'
```

### System Information

```bash
# Get total disk usage summary
duf --json | jq '
{
  total_size: .filesystems | map(.size) | add,
  total_used: .filesystems | map(.used) | add,
  total_avail: .filesystems | map(.avail) | add,
  filesystems_count: .filesystems | length
}'
```

### Alert Script

```bash
#!/bin/bash
# Alert when filesystem usage > threshold
THRESHOLD=90
duf --json | jq -r --arg threshold "$THRESHOLD" '
  .filesystems[] | 
  select(.usage > ($threshold | tonumber)) | 
  "WARNING: \(.mountpoint) is \(.usage)% full"
'
```

### Custom Display

```bash
# Custom formatted output
duf --output mountpoint,usage,avail --sort usage |
  awk 'NR>1 {printf "%-20s %6s %10s\n", $1, $2, $3}'
```

## Aliases

```bash
# Common aliases
alias df='duf'
alias dff='duf --only local'
alias dfj='duf --json'
alias dft='duf --theme light'
alias dfu='duf --sort usage'

# Monitoring alias
alias dfwarn='duf --warnings --sort usage'
```

## Configuration

While `duf` doesn't have a config file, you can set defaults via shell aliases or functions:

```bash
# Function with custom defaults
df_custom() {
    duf --only local --sort usage --theme dark "$@"
}
```

## Use Cases

### Quick Overview

```bash
# Standard overview
duf

# Local filesystems only
duf --only local

# High usage first
duf --sort usage
```

### System Administration

```bash
# Check all filesystems
duf --all

# Monitor specific directories
duf --only-mp "/,/home,/var,/tmp"

# Find filesystems needing cleanup
duf --sort usage | head -10
```

### Scripting

```bash
# JSON for automation
duf --json > disk_usage.json

# CSV for spreadsheets
duf --output mountpoint,size,used,avail,usage --sort mountpoint
```

## Features

- **Modern UI**: Clean, colorful interface
- **Cross-platform**: Windows, macOS, Linux support
- **Flexible filtering**: Hide/show specific filesystems
- **Multiple outputs**: JSON, CSV, custom fields
- **Sorting**: Sort by any metric
- **Themes**: Dark, light, ANSI themes
- **Thresholds**: Visual warnings for low space
- **Inodes**: Inode usage information
- **Wildcards**: Pattern matching for mount points
- **Compatibility**: ASCII fallback for old terminals
