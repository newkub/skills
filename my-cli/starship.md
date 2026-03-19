---
description: Minimal, blazing-fast, and infinitely customizable prompt for any shell
title: cli-starship
tags: [cli, prompt, customization, shell, terminal]
---

## Overview

`starship` เป็น cross-shell prompt ที่ minimal, fast และ customizable สนับสนุน many programming languages และ tools พร้อม advanced features สำหรับ terminal customization

## Installation

```powershell
scoop install starship
# หรือ
choco install starship
# หรือ
winget install starship
# หรือ
cargo install starship
```

## Shell Setup

### PowerShell

```powershell
# Add to $PROFILE
echo 'Invoke-Expression (&starship init powershell)' >> $PROFILE

# Or add manually to $PROFILE
Invoke-Expression (&starship init powershell)
```

### Bash

```bash
# Add to ~/.bashrc
echo 'eval "$(starship init bash)"' >> ~/.bashrc

# Or source directly
eval "$(starship init bash)"
```

### Zsh

```bash
# Add to ~/.zshrc
echo 'eval "$(starship init zsh)"' >> ~/.zshrc

# Or source directly
eval "$(starship init zsh)"
```

### Fish

```bash
# Add to ~/.config/fish/config.fish
echo 'starship init fish | source' >> ~/.config/fish/config.fish

# Or source directly
starship init fish | source
```

### Ion

```bash
# Add to ~/.config/ion/initrc
echo 'eval $(starship init ion)' >> ~/.config/ion/initrc
```

### Elvish

```bash
# Add to ~/.elvish/rc.elv
echo 'eval (starship init elvish)' >> ~/.elvish/rc.elv
```

## Command Line Options

| Flag | Description |
|------|-------------|
| `--help` | Show help information |
| `--version` | Show version information |
| `--init <shell>` | Print initialization script |
| `--print-config` | Print current configuration |
| `--print-known-commands` | Print known commands |
| `--execute` | Execute command with prompt |
| `--key` | Print key binding |

## Configuration

### Basic Configuration

Config file: `~/.config/starship.toml`

```toml
# Basic format
format = """$directory$git_branch$git_status$character"""

# Character module
[character]
success_symbol = "[➜](bold green)"
error_symbol = "[✗](bold red)"
vicmd_symbol = "[V](bold green)"

# Directory module
[directory]
truncation_length = 3
truncation_symbol = "…"
fish_style_pwd_dir_length = 1
use_os_path_sep = false
```

### Advanced Configuration

```toml
# Complete format with all modules
format = """
$hostname$localip$shlvl$shell$cmd_duration$jobs$time$line_break$directory$git_branch$git_status$git_commit$git_state$git_metrics$package$nodejs$python$rust$golang$php$java$kotlin$java_script$docker_context$aws$gcloud$azure$openstack$env_var$crystal$custom$sudo$character"""

# Right prompt
right_format = """$status$memory_usage$battery"""

# Wait for command completion
scan_timeout = 30
command_timeout = 500
add_newline = true
```

## Module Configuration

### Git Modules

```toml
[git_branch]
format = "on [$symbol$branch]($style) "
symbol = "🌱 "
style = "bold violet"
truncation_length = 63
truncation_symbol = "…"
only_attached = false
always_show_remote = false
ignore_branches = []
disabled = false

[git_status]
format = '([\[$all_status$ahead_behind\]]($style) )'
style = "bold red"
conflicted = "🗿"
ahead = "🏎"
behind = "🔀"
diverged = "🔀"
untracked = "?"
stashed = "📦"
modified = "!"
staged = "+"
renamed = "»"
deleted = "✘"
type_changed = ""
disabled = false
```

### Programming Language Modules

```toml
[nodejs]
format = "via [$symbol($version )]($style)"
symbol = "⬢ "
style = "bold green"
disabled = false
not_capable_style = "bold red"
detect_extensions = [".js", ".mjs", ".cjs", ".ts", ".mts", ".cts", ".jsx", ".tsx", ".json", ".node"]
detect_files = ["package.json", ".nvmrc", "node_modules"]
detect_folders = ["node_modules"]

[python]
format = "via [${symbol}${pyenv_prefix}(${version} )]($style)"
symbol = "🐍 "
style = "bold yellow"
pyenv_version_name = false
pyenv_prefix = "pyenv"
python_binary = ["python", "python3"]
disabled = false
detect_extensions = [".py", ".ipynb", ".pyc", ".pyd", ".pyi", ".pyw", ".pyz"]
detect_files = ["requirements.txt", ".python-version", "pyproject.toml", "Pipfile", "setup.py", "tox.ini"]
detect_folders = [".venv", "venv", "env", "__pycache__"]

[rust]
format = "via [$symbol($version )]($style)"
symbol = "🦀 "
style = "bold red"
disabled = false
detect_extensions = [".rs"]
detect_files = ["Cargo.toml", "Cargo.lock"]
detect_folders = ["src"]

[golang]
format = "via [$symbol($version )]($style)"
symbol = "🐹 "
style = "bold cyan"
disabled = false
detect_extensions = [".go"]
detect_files = ["go.mod", "go.sum", "go.work", "go.work.sum"]
detect_folders = ["go"]
```

### System Modules

```toml
[directory]
format = "[$path]($style) [$read_only]($read_only_style) "
style = "bold blue"
read_only_style = "red"
truncation_length = 3
truncation_symbol = "…"
truncate_to_repo = true
fish_style_pwd_dir_length = 1
use_os_path_sep = true
disabled = false

[hostname]
ssh_only = false
ssh_symbol = "🌐 "
trim_at = "."
format = "[$ssh_symbol$hostname]($style) "
style = "bold dimmed green"
disabled = false

[username]
format = "[$user]($style)@"
style_user = "bold blue"
style_root = "bold red"
show_always = true
disabled = false

[cmd_duration]
min_time = 0
show_milliseconds = false
format = "took [$duration]($style) "
style = "bold yellow"
disabled = false
show_notifications = false
min_time_to_notify = 60_000

[memory_usage]
format = "via $symbol [${ram_pct}${ram}]($style) "
symbol = "🧠"
style = "bold dimmed white"
threshold = 75
disabled = false

[battery]
full_symbol = "🔋 "
charging_symbol = "⚡️ "
discharging_symbol = "💀 "
unknown_symbol = "❓ "
empty_symbol = "🖕 "
format = "[$symbol$percentage]($style) "
style = "bold red"
display_full_threshold = 10
charging_threshold = 10
discharging_threshold = 10
disabled = false
```

## Advanced Features

### Custom Modules

```toml
[custom.foo]
command = "echo foo"
when = true
format = "[$output]($style) "
shell = ["sh", "-c"]
description = "A custom module"
symbol = "🦄 "
style = "bold red"
disabled = false

[custom.time]
command = "date +%H:%M:%S"
when = true
format = "at [$output]($style) "
style = "bold yellow"
```

### Environment Variables

```toml
[env_var.VAR_NAME]
format = "with [$env_value]($style) "
style = "bold green"
default = "not set"
variable = "VAR_NAME"
disabled = false
```

### Conditional Modules

```toml
[git_commit]
commit_hash_length = 7
format = "[\\($hash\\)]($style) "
style = "bold green"
only_detached = true
tag_symbol = "🏷 "
tag_disabled = false
disabled = false

[git_state]
rebase = "REBASING"
merge = "MERGING"
revert = "REVERTING"
bisect = "BISECTING"
cherry_pick = "CHERRY-PICKING"
format = "\\[$state( $progress_current/$progress_total)\\]($style) "
style = "bold yellow"
disabled = false
```

## Integration Examples

### Development Environment

```toml
# Development-focused configuration
format = """
$env_var$directory$git_branch$git_status$nodejs$python$rust$character"""

[env_var.NODE_ENV]
format = "[$env_value]($style) "
style = "bold yellow"
variable = "NODE_ENV"
default = "development"

[nodejs]
symbol = "⬢ "
style = "bold green"

[python]
symbol = "🐍 "
style = "bold yellow"

[rust]
symbol = "🦀 "
style = "bold red"
```

### Production Environment

```toml
# Production-focused configuration
format = """
$hostname$directory$git_branch$git_status$character"""

[hostname]
ssh_only = false
format = "[$ssh_symbol$hostname]($style) "
style = "bold red"

[git_status]
style = "bold red"
```

### Minimal Configuration

```toml
# Minimal setup
format = "$directory$character"

[directory]
truncation_length = 2

[character]
success_symbol = "❯"
error_symbol = "❯"
```

## Performance Optimization

### Fast Configuration

```toml
# Disable expensive modules
[git_metrics]
disabled = true

[git_state]
disabled = true

[package]
disabled = true

# Reduce timeout
scan_timeout = 10
command_timeout = 250
```

### Conditional Loading

```toml
# Only show git info in git repositories
[git_branch]
disabled = true

[git_status]
disabled = true

# Use environment variable to enable
# STARSHIP_GIT=1 task
```

## Custom Presets

### Nerd Font Symbols

```toml
# Using nerd font symbols
[character]
success_symbol = "[❯](bold green)"
error_symbol = "[❯](bold red)"
vicmd_symbol = "[❮](bold green)"

[git_branch]
symbol = "⎇ "

[nodejs]
symbol = "⬢ "

[python]
symbol = "🐍 "

[rust]
symbol = "🦀 "

[golang]
symbol = "🐹 "
```

### Emoji Symbols

```toml
# Using emoji symbols
[character]
success_symbol = "[🚀](bold green)"
error_symbol = "[💥](bold red)"

[git_branch]
symbol = "🌱 "

[nodejs]
symbol = "📦 "

[python]
symbol = "🐍 "

[rust]
symbol = "🦀 "

[golang]
symbol = "🐹 "
```

## Troubleshooting

### Common Issues

1. **Prompt not showing**: Check shell initialization
2. **Slow prompt**: Disable expensive modules
3. **Missing symbols**: Install nerd font
4. **Git info not showing**: Check if in git repository

### Debug Mode

```bash
# Check configuration
starship print-config

# Test with specific shell
starship init bash

# Check for errors
starship --debug
```

### Performance Monitoring

```bash
# Measure prompt time
time starship prompt

# Check module performance
STARSHIP_LOG=debug starship prompt
```

## Aliases and Functions

### Quick Commands

```bash
# Reload configuration
alias reload-starship="source ~/.bashrc"

# Test configuration
alias test-starship="starship print-config"

# Show prompt
alias show-prompt="starship prompt"
```

### Development Functions

```bash
# Switch between configurations
starship-config() {
    local config=$1
    if [ -f "$HOME/.config/starship-$config.toml" ]; then
        cp "$HOME/.config/starship-$config.toml" "$HOME/.config/starship.toml"
        echo "Switched to $config configuration"
    else
        echo "Configuration $config not found"
    fi
}

# Create new configuration
create-starship-config() {
    local config=$1
    cp "$HOME/.config/starship.toml" "$HOME/.config/starship-$config.toml"
    echo "Created $config configuration"
}
```

## Use Cases

### Development Workflow

```toml
# Development environment
format = """
$env_var$directory$git_branch$git_status$nodejs$python$rust$cmd_duration$character"""

[env_var.NODE_ENV]
format = "[$env_value]($style) "
style = "bold yellow"
variable = "NODE_ENV"

[cmd_duration]
min_time = 1000
format = "took [$duration]($style) "
```

### Server Administration

```toml
# Server environment
format = """
$hostname$username$directory$character"""

[hostname]
ssh_only = false
format = "[$ssh_symbol$hostname]($style) "
style = "bold red"

[username]
show_always = true
style_user = "bold blue"
```

### Minimal Setup

```toml
# Minimal setup for speed
format = "$directory$character"

[directory]
truncation_length = 1
use_os_path_sep = false

[character]
success_symbol = "❯"
error_symbol = "❯"
vicmd_symbol = "❮"
```

## Features

- **Minimal**: Clean and unobtrusive design
- **Fast**: Optimized for performance
- **Customizable**: Extensive configuration options
- **Cross-shell**: Works with all major shells
- **Git integration**: Comprehensive git status
- **Language support**: Many programming languages
- **Module system**: Extensible module architecture
- **Conditional modules**: Show information when relevant
- **Environment aware**: Context-aware display
- **Unicode support**: Full Unicode and emoji support
- **Performance monitoring**: Built-in performance metrics
- **Custom modules**: Create your own modules
- **Preset support**: Predefined configurations
- **Real-time updates**: Immediate status changes
- **Cross-platform**: Windows, macOS, Linux
- **Theme support**: Multiple built-in themes
- **Configuration validation**: Error checking
- **Documentation**: Comprehensive help system
