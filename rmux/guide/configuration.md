# Configuration

ตั้งค่า RMUX ด้วย config file และ environment variables

## Config File

RMUX ใช้ config file ที่ `~/.rmux.conf` เหมือน tmux

### Basic Config

```conf
# Set prefix key (default: Ctrl-b)
set-option -g prefix C-a

# Enable mouse support
set-option -g mouse on

# Set default shell
set-option -g default-shell /bin/bash

# Set base index to 1
set-option -g base-index 1
set-window-option -g pane-base-index 1
```

### Key Bindings

```conf
# Split panes
bind-key - split-window -v
bind-key | split-window -h

# Navigate panes
bind-key h select-pane -L
bind-key j select-pane -D
bind-key k select-pane -U
bind-key l select-pane -R
```

### Session Options

```conf
# Rename window automatically
set-option -g automatic-rename on

# Set window title
set-option -g set-titles on

# History limit
set-option -g history-limit 10000
```

## Environment Variables

| Variable | Description | Default |
|----------|-------------|---------|
| `RMUX_CONFIG` | Path to config file | `~/.rmux.conf` |
| `RMUX_SOCKET` | Socket path | `/tmp/rmux-*` |
| `RMUX_TMPDIR` | Temporary directory | System temp |

## Loading Config

```bash
# Load config file
rmux source-file ~/.rmux.conf

# Reload config in running session
rmux source-file ~/.rmux.conf \; display-message "Config reloaded"
```

## Default Config Location

- **Linux/macOS**: `~/.rmux.conf`
- **Windows**: `%USERPROFILE%\.rmux.conf`
