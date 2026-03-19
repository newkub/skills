---
description: Manage your dotfiles across multiple diverse machines, securely with templates and encryption
title: cli-chezmoi
tags: [cli, dotfiles, config, templates, encryption]
---

## Overview

`chezmoi` เป็น dotfiles manager ที่ช่วยจัดการ configuration files ข้ามหลาย machines อย่างปลอดภัย รองรับ templates, encryption, secrets management และ version control integration

## Installation

```powershell
scoop install chezmoi
# หรือ
choco install chezmoi
# หรือ
cargo install chezmoi
```

## Quick Start

```bash
# Initialize chezmoi
chezmoi init

# Add a file to chezmoi
chezmoi add ~/.bashrc

# Edit source file
chezmoi edit ~/.bashrc

# Apply changes to home directory
chezmoi apply
```

## Daily Commands

| Command | Description |
|---------|-------------|
| `chezmoi add <path>` | Add existing file/directory/symlink to source state |
| `chezmoi apply` | Update destination directory to match target state |
| `chezmoi chattr <attrs> <target>` | Change attributes of target in source state |
| `chezmoi diff` | Print diff between target state and destination |
| `chezmoi edit <target>` | Edit source state of target |
| `chezmoi forget <target>` | Remove target from source state |
| `chezmoi init [repo]` | Setup source directory and apply target state |
| `chezmoi merge <target>` | Perform three-way merge |
| `chezmoi merge-all` | Merge all modified files |
| `chezmoi re-add <target>` | Re-add modified files |
| `chezmoi status` | Show status of targets |
| `chezmoi update` | Pull and apply any changes |

## Template Commands

| Command | Description |
|---------|-------------|
| `chezmoi cat <target>` | Print target contents of file/script/symlink |
| `chezmoi data` | Print template data |
| `chezmoi execute-template <template>` | Execute given template(s) |

## Advanced Commands

| Command | Description |
|---------|-------------|
| `chezmoi cd` | Launch shell in source directory |
| `chezmoi edit-config` | Edit configuration file |
| `chezmoi edit-config-template` | Edit configuration file template |
| `chezmoi git <command>` | Run git in source directory |
| `chezmoi ignored` | Print ignored targets |
| `chezmoi managed` | List managed entries in destination |
| `chezmoi unmanaged` | List unmanaged files in destination |
| `chezmoi verify` | Exit with success if destination matches target |

## Encryption Commands

| Command | Description |
|---------|-------------|
| `chezmoi age <subcommand>` | Interact with age encryption |
| `chezmoi age-keygen` | Generate age identity/recipient |
| `chezmoi decrypt <file>` | Decrypt file or stdin |
| `chezmoi edit-encrypted <file>` | Edit encrypted file |
| `chezmoi encrypt <file>` | Encrypt file or stdin |

## Remote Commands

| Command | Description |
|---------|-------------|
| `chezmoi docker <subcommand>` | Use dotfiles in Docker container |
| `chezmoi ssh <host>` | SSH to host and initialize dotfiles |

## Global Options

| Flag | Description |
|------|-------------|
| `-c, --config <path>` | Set config file |
| `-D, --destination <path>` | Set destination directory (default: home) |
| `-n, --dry-run` | Do not make modifications (show what would happen) |
| `--force` | Make all changes without prompting |
| `-S, --source <path>` | Set source directory |
| `-v, --verbose` | Make output more verbose |
| `--version` | Show version |

## Environment Variables

- `LEFTHOOK`: Set to '0' or 'false' to disable lefthook execution
- `LEFTHOOK_CONFIG`: Override main config path
- `LEFTHOOK_OUTPUT`: Control printed sections (see config option 'output')
- `LEFTHOOK_VERBOSE`: Enable debug logs

## Supported Commands

- **Daily Commands**: add, apply, chattr, diff, edit, forget, init, merge, re-add, status, update
- **Template Commands**: cat, data, execute-template
- **Advanced Commands**: cd, edit-config, edit-config-template, dump, validate, version, self-update
- **Encryption Commands**: age, age-keygen, decrypt, edit-encrypted, encrypt
- **Remote Commands**: docker, ssh
- **Internal Commands**: cache, cat-config, completion, dump-config, ignored, managed, secret, source-path, state, target-path, unmanaged, verify
- **Migration Commands**: archive, destroy, import, purge, upgrade

## Repository Management

```bash
# Init with GitHub repo
chezmoi init https://github.com/username/dotfiles.git

# Init with existing repo in current directory
chezmoi init .

# Push to remote
chezmoi git push

# Pull updates
chezmoi git pull

# Clone and apply on new machine
chezmoi init https://github.com/username/dotfiles.git
chezmoi apply
```

## Templates

Files can use Go's `text/template` syntax with chezmoi functions:

```text
# ~/.local/share/chezmoi/dot_bashrc.tmpl
{{- if eq .chezmoi.os "darwin" -}}
# macOS specific configuration
export PATH="/opt/homebrew/bin:$PATH"
{{- else if eq .chezmoi.os "linux" -}}
# Linux specific configuration
{{ end -}}

# Use data from config
export EDITOR={{ .editor }}
export NAME={{ .name }}

# Conditional based on architecture
{{- if eq .chezmoi.arch "amd64" -}}
export GOARCH=amd64
{{- end -}}

# Include only if program exists
{{- if stat .chezmoi.homeDir "/.local/bin/program" -}}
export PATH="$HOME/.local/bin:$PATH"
{{ end -}}
```

## Template Functions

| Function | Description |
|----------|-------------|
| `.chezmoi.os` | Operating system (linux, darwin, windows) |
| `.chezmoi.arch` | Architecture (amd64, arm64, etc.) |
| `.chezmoi.hostname` | Hostname |
| `.chezmoi.username` | Username |
| `.chezmoi.homeDir` | Home directory |
| `stat <path>` | Check if path exists |
| `lookPath <command>` | Check if command exists in PATH |
| `join <sep> <list>` | Join list with separator |
| `split <sep> <string>` | Split string by separator |
| `env <var>` | Get environment variable |

## Configuration

Config file: `~/.config/chezmoi/chezmoi.toml`

```toml
[edit]
command = "nvim"
args = ["--clean"]

[diff]
command = "delta"
args = ["--side-by-side"]

[data]
editor = "nvim"
name = "John Doe"
email = "john@example.com"

# Source directory configuration
[source]
path = "~/.local/share/chezmoi"

# Destination directory
[destination]
path = "~"

# Version control
[git]
autoPush = true
autoCommit = true

# Encryption with age
[age]
identity = "~/.config/chezmoi/age.key"
recipient = "age1..."

# Secrets management
[bitwarden]
# Configure Bitwarden integration

[1password]
# Configure 1Password integration
```

## File Attributes

Control how files are managed with attributes:

```bash
# Create executable script
chezmoi add --executable script.sh

# Create private file (600 permissions)
chezmoi add --private private.key

# Create directory
chezmoi add --template configs/

# Create symlink
chezmoi add --symbolic link -> target

# Remove when not needed
chezmoi add --remove obsolete.conf

# Template file
chezmoi add --template config.toml

# External script (run on apply)
chezmoi add --execute setup.sh
```

## Advanced Features

### Encryption

```bash
# Generate age key
chezmoi age-keygen

# Encrypt file
chezmoi encrypt secret.txt > secret.txt.age

# Edit encrypted file
chezmoi edit-encrypted secret.txt

# Use in templates
{{- if and (stat .chezmoi.sourceDir "secret.txt.age") (lookPath "age") -}}
{{- $secret := include "secret.txt.age" | decrypt -}}
export SECRET={{ $secret }}
{{ end -}}
```

### Machine-Specific Configuration

```bash
# Add machine-specific file
chezmoi add --template .machine-specific

# Template with hostname condition
{{- if eq .chezmoi.hostname "work-laptop" -}}
# Work-specific settings
{{ end -}}
```

### Script Execution

```bash
# Run script on apply
chezmoi add --execute setup.sh

# Run once script
chezmoi add --execute-once init.sh

# Create template script
chezmoi add --template --execute generate-config.sh
```

## Integration Examples

### Git Integration

```bash
# Auto-commit and push
chezmoi git add -A
chezmoi git commit -m "Update dotfiles"
chezmoi git push
```

### Docker Integration

```bash
# Test dotfiles in Docker
chezmoi docker run --image ubuntu:latest
chezmoi docker apply
```

### SSH Integration

```bash
# Deploy dotfiles to remote server
chezmoi ssh user@server init https://github.com/user/dotfiles.git
chezmoi ssh user@server apply
```

## Features

- **Cross-platform**: Windows, macOS, Linux support
- **Template engine**: Powerful Go template system
- **Encryption**: Age, GPG encryption support
- **Secrets management**: 1Password, Bitwarden, LastPass integration
- **Version control**: Git integration with auto-push/pull
- **Machine-specific**: Per-machine configuration
- **Script execution**: Run scripts on apply
- **Symlinks**: Create symbolic links
- **File attributes**: Control permissions and behavior
- **Dry run**: Preview changes before applying
- **Atomic updates**: Safe file modifications
