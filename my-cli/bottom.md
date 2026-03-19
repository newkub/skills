---
description: Customizable cross-platform graphical process/system monitor for the terminal
title: cli-bottom
tags: [cli, system, monitor, graphs]
---

## Overview

`bottom` (btm) เป็น customizable cross-platform graphical process/system monitor ที่รองรับ Linux, macOS และ Windows พร้อม graphs และ real-time monitoring

## Installation

```powershell
scoop install bottom
# หรือ
cargo install bottom
```

## Basic Usage

```bash
# Start with default settings
btm

# Start with basic look (htop-inspired)
btm --basic

# Start with specific refresh rate
btm --rate 2s
btm -r 500ms

# Start with expanded default widget
btm --expanded

# Hide time scale in graphs
btm --hide-time

# Use dot marker for graphs
btm --dot-marker
```

## General Options

| Flag | Description |
|------|-------------|
| `--autohide_time` | Auto-hide time scale when zoomed |
| `-b, --basic` | Basic look inspired by htop |
| `-C, --config_location <PATH>` | Set custom config file location |
| `-t, --default_time_value <TIME>` | Default time value for graphs (default: 60s) |
| `--default_widget_type <WIDGET>` | Default widget type (cpu, mem, net, proc, temp, disk, batt) |
| `--default_widget_count <N>` | N'th widget of selected type as default |
| `--disable_click` | Disable mouse interactions |
| `--disable_keys` | Disable keyboard shortcuts |
| `-m, --dot_marker` | Use dot marker for graphs |
| `-e, --expanded` | Expand default widget on start |
| `--hide_table_gap` | Hide spacing between table headers |
| `--hide_time` | Hide time scale from graphs |
| `-r, --rate <TIME>` | Data refresh rate (default: 1s, min: 250ms) |
| `--retention <TIME>` | Data storage duration (default: 10m, min: 1m) |
| `-d, --time_delta <TIME>` | Time change amount when zooming (default: 15s) |

## Process Options

| Flag | Description |
|------|-------------|
| `-S, --case_sensitive` | Enable case-sensitive search |
| `-u, --current_usage` | Calculate CPU% as current usage |
| `--read_only` | Prevent system-affecting actions |
| `--get_threads` | Gather process thread information |
| `-g, --group_processes` | Group processes with same name |
| `--process_memory_as_value` | Show memory by value instead of percentage |
| `--process_command` | Show full command instead of name |
| `-R, --regex` | Enable regex by default for search |
| `-T, --tree` | Use tree mode by default |
| `--tree_collapse` | Collapse process tree by default |
| `-n, --unnormalized_cpu` | Show CPU% without averaging across cores |
| `-W, --whole_word` | Enable whole-word matching |

## Temperature Options

| Flag | Description |
|------|-------------|
| `-c, --celsius` | Use Celsius (default) |
| `-f, --fahrenheit` | Use Fahrenheit |
| `-k, --kelvin` | Use Kelvin |

## CPU Options

| Flag | Description |
|------|-------------|
| `-l, --cpu_left_legend` | Put CPU chart legend on left |
| `--default_cpu_entry <ENTRY>` | Default CPU entry (all, avg) |
| `-a, --hide_avg_cpu` | Hide average CPU usage |

## Memory Options

| Flag | Description |
|------|-------------|
| `--memory_legend <POSITION>` | Legend position (none, top-left, top, top-right, left, right, bottom-left, bottom, bottom-right) |
| `--free_arc` | Subtract reclaimable ARC from memory |

## Network Options

| Flag | Description |
|------|-------------|
| `--network_legend <POSITION>` | Network chart legend position |
| `--network_use_bytes` | Display in bytes instead of bits |
| `--network_use_binary_prefix` | Use binary prefixes (KiB, MiB) instead of decimal |
| `--network_use_log` | Use log scale for network display |

## Battery & GPU Options

| Flag | Description |
|------|-------------|
| `--battery` | Show battery widget if available |
| `--disable_gpu` | Disable NVIDIA/AMD GPU collection |

## Style Options

| Flag | Description |
|------|-------------|
| `--theme <SCHEME>` | Pre-defined color themes: default, default-light, gruvbox, gruvbox-light, nord, nord-light |

## Configuration

Config file location: `~/.config/bottom/bottom.toml`

```toml
[flags]
# General settings
color = "default"
cpu_left_legend = true
rate = 1000  # milliseconds
default_time_value = "60s"
retention = "10m"

# Process settings
case_sensitive = false
group_processes = true
tree = false
process_command = false

# Temperature
temperature_type = "celsius"

# Network
network_use_bytes = false
network_use_log = false

# Style
theme = "default"
bindings = false
```

## Key Bindings

| Key | Action |
|-----|--------|
| `q, Ctrl+C, Esc` | Quit |
| `↑/↓` | Navigate list |
| `←/→` | Navigate widgets |
| `Enter` | Process details/expand widget |
| `Tab` | Switch between widgets |
| `dd` | Kill selected process |
| `f` | Filter processes |
| `c` | Clear filter |
| `+/-` | Zoom in/out graphs |
| `h, F1` | Help screen |
| `Ctrl+R` | Reset zoom |
| `Space` | Pause/resume |
| `m` | Memory mode toggle |
| `k` | Kill process with signal |
| `s` | Sort processes |
| `t` | Tree view toggle |
| `E` | Expand widget |
| `e` | Collapse widget |

## Features

- **Cross-platform**: Linux, macOS, Windows support
- **Real-time graphs**: CPU, memory, network, temperature
- **Process management**: Kill, filter, tree view
- **Customizable**: Themes, layouts, widgets
- **Battery monitoring**: Laptop battery status
- **Temperature sensors**: CPU/GPU temperature
- **GPU monitoring**: NVIDIA and AMD GPU support
- **Lightweight**: Low resource usage
- **Mouse support**: Click interactions
- **Configurable**: Extensive TOML configuration
