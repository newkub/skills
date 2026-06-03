---
description: Fast disk usage analyzer with interactive TUI and batch operations
title: cli-dua
tags: [cli, disk, cleanup, analyzer, tui]
---

## Overview

`dua` (Disk Usage Analyzer) เป็น tool สำหรับวิเคราะห์ disk space ที่รวดเร็ว มี interactive TUI และ batch operations สำหรับลบไฟล์ที่ไม่ต้องการ

## Installation

```powershell
scoop install dua
# หรือ
cargo install dua
```

## Commands

| Command | Description |
|---------|-------------|
| `dua interactive` or `dua i` | Launch terminal user interface |
| `dua aggregate` or `dua a` | Aggregate consumed space of directories/files |
| `dua completions` | Generate shell completions |
| `dua config` | Configuration related commands |

## Basic Usage

```bash
# Interactive mode (TUI) - default
dua

# Explicit interactive mode
dua interactive

# Aggregate mode (list)
dua aggregate

# Scan specific directory
dua ./target

# Scan multiple directories
dua ~/Downloads ~/Documents

# Aggregate with specific format
dua aggregate --format bytes
```

## Interactive Mode (TUI)

### Key Bindings

| Key | Action |
|-----|--------|
| `↑/↓` | Navigate up/down |
| `Enter` | Enter directory |
| `Backspace` | Go up to parent directory |
| `Space` | Mark/unmark for deletion |
| `d` | Delete selected/marked items |
| `r` | Refresh current directory |
| `h` | Show help |
| `q` | Quit |
| `Esc` | Exit/Cancel |
| `g` | Go to top |
| `G` | Go to bottom |

### TUI Features

- **Navigation**: Browse directory tree interactively
- **Deletion**: Mark and delete multiple files/directories
- **Sorting**: Sort by size, name, or modification time
- **Search**: Filter results by name
- **Visualization**: Size bars and percentage display

## Command Line Options

### General Options

| Flag | Description |
|------|-------------|
| `-t, --threads <THREADS>` | Thread count (default: 0 = CPU cores) |
| `-f, --format <FORMAT>` | Size format (metric, binary, bytes, gb, gib, mb, mib) |
| `-A, --apparent-size` | Show apparent size instead of disk usage |
| `-l, --count-hard-links` | Count hard-linked files each time |
| `-x, --stay-on-filesystem` | Don't cross filesystem boundaries |
| `-i, --ignore-dirs <IGNORE_DIRS>` | Ignore absolute directories |
| `--log-file <LOG_FILE>` | Write debug log to file |
| `-h, --help` | Show help |
| `-V, --version` | Show version |

### Format Options

```bash
# Binary prefixes (KiB, MiB, GiB) - default
dua --format binary

# Metric prefixes (kB, MB, GB)
dua --format metric

# Raw bytes
dua --format bytes

# Specific units
dua --format gb  # Gigabytes
dua --format mib  # Mebibytes
```

### Environment Variables

| Variable | Description |
|----------|-------------|
| `DUA_THREADS` | Default thread count |
| `DUA_FORMAT` | Default size format |
| `DUA_APPARENT_SIZE` | Show apparent size (1/0) |
| `DUA_COUNT_HARD_LINKS` | Count hard links (1/0) |
| `DUA_STAY_ON_FILESYSTEM` | Stay on filesystem (1/0) |
| `DUA_IGNORE_DIRS` | Directories to ignore |
| `DUA_LOG_FILE` | Log file location |

## Advanced Usage

### Batch Operations

```bash
# Aggregate mode for scripting
dua aggregate --format json > disk_usage.json

# Ignore specific directories
dua --ignore-dirs "/proc,/sys,/dev" /

# Stay on current filesystem
dua --stay-on-filesystem /

# Count hard links (might increase size)
dua --count-hard-links

# Show apparent file size
dua --apparent-size
```

### Performance Tuning

```bash
# Use single thread for low resource usage
dua --threads 1

# Use multiple threads for faster scanning
dua --threads 8

# Custom thread count
export DUA_THREADS=4
dua
```

### Configuration

```bash
# View current config
dua config show

# Set default format
dua config set format binary

# Set default threads
dua config set threads 4

# Reset config
dua config reset
```

## Use Cases

### Quick Disk Analysis

```bash
# Scan current directory interactively
dua

# Scan home directory
dua ~

# Find large files quickly
dua aggregate | sort -hr | head -10
```

### Cleanup Operations

```bash
# Interactive cleanup of Downloads
dua ~/Downloads

# Find and remove large old files
dua aggregate --format bytes | awk '$1 > 1GB'
```

### System Monitoring

```bash
# Check root filesystem usage
dua --stay-on-filesystem /

# Monitor specific directories
dua --ignore-dirs "/proc,/sys,/dev" /
```

## Integration Examples

### Shell Scripts

```bash
#!/bin/bash
# Find directories > 1GB
echo "Large directories:"
dua aggregate --format gb | awk '$1 > 1 {print $2 " (" $1 " GB)"}'
```

### Cron Jobs

```bash
# Weekly disk usage report
0 2 * * 0 /usr/local/bin/dua aggregate --format bytes > /var/log/disk_usage.log
```

### Monitoring

```bash
# Check if disk usage > 80%
usage=$(dua aggregate --format bytes / | awk '{print $1}')
total=$(df / | awk 'NR==2 {print $2}')
percentage=$((usage * 100 / total))
if [ $percentage -gt 80 ]; then
    echo "Disk usage: ${percentage}%"
fi
```

## Features

- **Fast**: Multi-threaded scanning
- **Interactive**: Terminal user interface for navigation
- **Cross-platform**: Windows, macOS, Linux
- **Configurable**: Environment variables and config file
- **Batch mode**: Scriptable output formats
- **Safe**: Confirmation prompts for deletions
- **Flexible**: Multiple size formats and units
- **Efficient**: Hard link handling and filesystem boundaries
- **Extensible**: Shell completion support

## Performance Tips

1. **Thread count**: Use `--threads` to balance speed vs resource usage
2. **Filesystem limits**: Use `--stay-on-filesystem` to avoid network mounts
3. **Ignore directories**: Exclude `/proc`, `/sys`, `/dev` on Linux
4. **Format choice**: Binary format for human-readable, bytes for scripting
5. **Hard links**: Disable `--count-hard-links` if not needed

## Help

```
dua 2.2.0
Disk Usage Analyzer

USAGE:
    dua [FLAGS] [OPTIONS] [PATH]...

FLAGS:
    -A, --apparent-size    Show apparent size instead of disk usage
    -h, --help             Prints help information
    -i, --ignore-dirs      Ignore absolute directories
    -l, --count-hard-links Count hard-linked files each time
    -V, --version          Prints version information
    -x, --stay-on-filesystem Don't cross filesystem boundaries

OPTIONS:
    -f, --format <FORMAT>    Size format (metric, binary, bytes, gb, gib, mb, mib)
    -t, --threads <THREADS>  Thread count (default: 0 = CPU cores)

ARGS:
    <PATH>...    Paths to scan
```
