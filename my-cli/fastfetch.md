---
description: A maintained, feature-rich and performance oriented system information tool with extensive customization
title: cli-fastfetch
tags: [cli, system, info, performance, customization]
---

## Overview

`fastfetch` เป็น system information tool ที่แสดงข้อมูล system แบบสวยงาม เร็วกว่า neofetch และมี features เยอะกว่า พร้อมการ custom ที่ยืดหยุ่นสูง

## Installation

```powershell
scoop install fastfetch
# หรือ
choco install fastfetch
# หรือ
cargo install fastfetch
```

## Basic Usage

```bash
# Show system info with default structure
fastfetch

# Specific logo
fastfetch --logo arch

# JSON output for scripting
fastfetch --format json

# Load custom config
fastfetch --load-config ~/.config/fastfetch/custom.jsonc

# Generate config file
fastfetch --gen-config

# Generate full config
fastfetch --gen-config-full
```

## Config Options

| Flag | Description |
|------|-------------|
| `-c, --config <config>` | Specify config file or preset |
| `--gen-config <?path>` | Generate minimal config file |
| `--gen-config-full <?path>` | Generate full config with all options |
| `--gen-config-force <?path>` | Generate config, overwriting existing |

## General Options

| Flag | Description |
|------|-------------|
| `--thread <?bool>` | Use separate threads for HTTP requests |
| `--wmi-timeout <num>` | WMI query timeout (ms) |
| `--processing-timeout <num>` | Child process timeout (ms) |
| `--ds-force-drm <?enum>` | Force DRM for display detection |
| `--detect-version <?bool>` | Detect terminal/shell/editor versions |

## Logo Options

| Flag | Description |
|------|-------------|
| `-l, --logo <logo>` | Set logo source (none, file, data, raw, etc.) |
| `--logo-type <enum>` | Logo type (file, data, raw, sixel, kitty, etc.) |
| `--logo-width <num>` | Logo width in characters |
| `--logo-height <num>` | Logo height in characters |
| `--logo-preserve-aspect-ratio <?bool>` | Preserve aspect ratio |
| `--logo-color-[1-9] <color>` | Override logo colors |
| `--logo-padding <num>` | Left/right padding |
| `--logo-padding-left <num>` | Left padding |
| `--logo-padding-right <num>` | Right padding |
| `--logo-padding-top <num>` | Top padding |
| `--logo-print-remaining <?bool>` | Print remaining logo lines |
| `--logo-position <enum>` | Logo position |
| `--logo-recache <?bool>` | Regenerate image logo cache |

## Display Options

| Flag | Description |
|------|-------------|
| `-s, --structure <structure>` | Set output structure |
| `--structure-disabled <structure>` | Disable specific modules |
| `--stat <?bool>` | Show timing statistics |
| `--pipe <?bool>` | Disable colors |
| `--color <color>` | Set key and title color |
| `--color-keys <color>` | Set key color |
| `--color-title <color>` | Set title color |
| `--color-output <color>` | Set output color |
| `--color-separator <color>` | Set separator color |
| `--duration-abbreviation <?bool>` | Abbreviate duration values |
| `--key-width <num>` | Align key width |
| `--key-padding-left <num>` | Left padding for keys |
| `--key-type <enum>` | Icon before string keys |
| `--bright-color <?bool>` | Bright colors for keys/title/logo |
| `--separator <str>` | Key-value separator |
| `--show-errors <?bool>` | Print errors when they occur |
| `--disable-linewrap <?bool>` | Disable line wrap |
| `--hide-cursor <?bool>` | Hide cursor during execution |

## Percentage and Bar Options

| Flag | Description |
|------|-------------|
| `--percent-type <num>` | Percentage output type |
| `--percent-ndigits <num>` | Decimal places for percentages |
| `--percent-color-green <color>` | Green state color |
| `--percent-color-yellow <color>` | Yellow state color |
| `--percent-color-red <color>` | Red state color |
| `--percent-space-before-unit <enum>` | Space before % symbol |
| `--percent-width <num>` | Percentage number width |
| `--bar-char-elapsed <str>` | Elapsed bar character |
| `--bar-char-total <str>` | Total bar character |
| `--bar-border-left <str>` | Left border character |
| `--bar-border-right <str>` | Right border character |
| `--bar-color-elapsed <color>` | Elapsed bar color |
| `--bar-color-total <color>` | Total bar color |
| `--bar-border-color <color>` | Border color |
| `--bar-width <num>` | Bar width in characters |

## Size, Frequency, and Temperature Options

| Flag | Description |
|------|-------------|
| `--size-ndigits <num>` | Decimal places for sizes |
| `--size-binary-prefix <enum>` | Binary prefix for sizes |
| `--size-max-prefix <enum>` | Largest binary prefix |
| `--size-space-before-unit <enum>` | Space before unit |
| `--freq-ndigits <num>` | Decimal places for frequencies |
| `--freq-space-before-unit <enum>` | Space before frequency unit |
| `--temp-unit <enum>` | Temperature unit |
| `--temp-ndigits <num>` | Decimal places for temperature |
| `--temp-color-green <color>` | Green temperature color |
| `--temp-color-yellow <color>` | Yellow temperature color |
| `--temp-color-red <color>` | Red temperature color |
| `--temp-space-before-unit <enum>` | Space before temperature unit |

## Configuration

Config file: `~/.config/fastfetch/config.jsonc`

```jsonc
{
    "$schema": "https://github.com/fastfetch-cli/fastfetch/raw/dev/doc/json_schema.json",
    "logo": {
        "source": "windows",
        "type": "auto",
        "width": 20,
        "height": 10,
        "preserveAspectRatio": true,
        "padding": {
            "top": 2,
            "left": 3,
            "right": 3
        }
    },
    "display": {
        "separator": " -> ",
        "keyWidth": 20,
        "color": {
            "keys": "blue",
            "title": "green",
            "output": "white"
        }
    },
    "modules": [
        "title",
        "separator",
        "os",
        "kernel",
        "uptime",
        "packages",
        "shell",
        "resolution",
        "de",
        "wm",
        "theme",
        "icons",
        "font",
        "cpu",
        "cpuUsage",
        "gpu",
        "memory",
        "disk",
        "battery",
        "locale",
        "localIp",
        "publicIp",
        "weather"
    ]
}
```

## Available Modules

### System Information
- `title` - System title
- `separator` - Visual separator
- `os` - Operating system
- `kernel` - Kernel version
- `uptime` - System uptime
- `packages` - Package count
- `shell` - Shell information
- `resolution` - Display resolution

### Hardware
- `cpu` - CPU information
- `cpuUsage` - CPU usage
- `gpu` - GPU information
- `memory` - Memory information
- `disk` - Disk information
- `battery` - Battery status

### Desktop Environment
- `de` - Desktop environment
- `wm` - Window manager
- `theme` - Desktop theme
- `icons` - Icon theme
- `font` - System font

### Network
- `locale` - System locale
- `localIp` - Local IP addresses
- `publicIp` - Public IP address
- `wifi` - WiFi information

### Additional
- `weather` - Weather information
- `break` - Line break
- `colors` - Color palette

## Advanced Usage

```bash
# Custom structure
fastfetch --structure "title:os:kernel:cpu:memory:disk"

# Disable specific modules
fastfetch --structure-disabled "battery:weather"

# Custom colors
fastfetch --color-keys cyan --color-title magenta

# Custom separator
fastfetch --separator " => "

# Show timing statistics
fastfetch --stat

# JSON output for scripts
fastfetch --format json > system_info.json

# Generate config with all options
fastfetch --gen-config-full ~/.config/fastfetch/full.jsonc

# Load specific preset
fastfetch --config arch

# Custom logo from file
fastfetch --logo-file ~/custom-logo.txt

# Minimal output
fastfetch --pipe

# Error debugging
fastfetch --show-errors
```

## Integration Examples

### Scripts

```bash
#!/bin/bash
# Get system info as JSON
info=$(fastfetch --format json)
cpu_usage=$(echo "$info" | jq -r '.cpuUsage.value')
memory_usage=$(echo "$info" | jq -r '.memory.value')

echo "CPU: $cpu_usage%"
echo "Memory: $memory_usage%"
```

### Monitoring

```bash
# System monitoring with custom structure
watch -n 5 'fastfetch --structure "title:cpuUsage:memory:disk:uptime" --pipe'
```

### Custom Presets

```bash
# Create presets for different systems
alias ff-min='fastfetch --structure "title:cpu:memory:disk"'
alias ff-net='fastfetch --structure "title:localIp:publicIp:wifi"'
alias ff-dev='fastfetch --structure "title:os:kernel:packages:shell"'
```

## Logo Sources

Available logo sources:
- `auto` - Auto-detect
- `none` - No logo
- File paths - Custom logo files
- Built-in logos: arch, ubuntu, windows, macos, etc.

## Output Formats

- Default - Colored terminal output
- `json` - JSON for scripting
- `xml` - XML format

## Performance

Fastfetch is optimized for performance:
- Multi-threaded operations
- Minimal system impact
- Fast startup time
- Efficient memory usage

## Features

- **Fast**: Optimized for performance
- **Customizable**: Extensive configuration options
- **Cross-platform**: Windows, macOS, Linux support
- **Modular**: Enable/disable specific modules
- **Themed**: Custom colors and styling
- **Scriptable**: JSON output for automation
- **Extensible**: Plugin architecture
- **Rich modules**: Comprehensive system information
- **Logo support**: Custom and built-in logos
- **Multi-format**: Various output formats
