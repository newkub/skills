---
description: Post-modern modal text editor with built-in LSP and tree-sitter integration
title: cli-helix
tags: [cli, editor, modal, lsp, tree-sitter]
---

## Overview

`helix` เป็น post-modern text editor ที่ได้แรงบันดาลใจจาก Kakoune และ Vim มี built-in LSP, tree-sitter และ modal editing พร้อม features ขั้นสูงสำหรับ modern development

## Installation

```powershell
scoop install helix
# หรือ
choco install helix
# หรือ
cargo install helix
```

## Basic Usage

```bash
# Open file
hx file.rs

# Open directory
hx ./project

# Open with specific file at line
hx file.rs:10

# Open multiple files
hx file1.rs file2.rs file3.rs

# Open with line and column
hx file.rs:10:5

# Open in read-only mode
hx -r file.rs

# Open with specific config
hx --config ~/.config/helix/config.toml file.rs
```

## Command Line Options

| Flag | Description |
|------|-------------|
| `-c, --config <path>` | Config file path |
| `-v, --version` | Show version |
| `-h, --help` | Show help |
| `--health` | Check health |
| `-w, --working-dir <dir>` | Working directory |
| `-r, --readonly` | Read-only mode |

## Modal Editing

### Mode Transitions

| Mode | Key | Description |
|------|-----|-------------|
| Normal | `Esc` | Command/Navigation mode |
| Insert | `i` | Insert text |
| Select | `v` | Selection mode |
| Insert | `a` | Append after cursor |
| Normal | `s` | Replace character |
| Insert | `o` | Open line below |
| Insert | `O` | Open line above |

### Mode Indicators

- **Normal**: No special indicator
- **Insert**: `-- INSERT --` in status bar
- **Select**: `-- SELECT --` in status bar

## Core Navigation

### Movement Commands

| Key | Action |
|-----|--------|
| `h/j/k/l` | Left/Down/Up/Right |
| `w/b` | Word backward/forward |
| `W/B` | BIG word backward/forward |
| `e/ge` | End of word |
| `0/^/$` | Start of line/first non-space/end of line |
| `gg/G` | First/last line |
| `f/F/char` | Find till/before character |
| `t/T/char` | Till/before character |
| `%` | Matching bracket |
| `Ctrl+f/b` | Page down/up |

### File Navigation

| Key | Action |
|-----|--------|
| `Ctrl+o/i` | Jump list back/forward |
| `Ctrl+s` | Save position |
| `Space` | File picker |
| `g d` | Go to definition |
| `g r` | Go to references |
| `g y` | Go to type definition |
| `g i` | Go to implementation |

## Editing Commands

### Basic Editing

| Key | Action |
|-----|--------|
| `x/X` | Delete character/line |
| `d` | Delete operator |
| `c` | Change operator |
| `y` | Yank/copy operator |
| `p/P` | Paste after/before |
| `u/U` | Undo/redo |
| `.` | Repeat last change |
| `~` | Toggle case |
| `>` | Indent |
| `<` | Unindent |

### Advanced Editing

| Key | Action |
|-----|--------|
| `J` | Join lines |
| `g J` | Join lines with space |
| `r` | Replace character |
| `R` | Replace mode |
| `*` | Select word under cursor |
| `#` | Select word under cursor (whole word) |
| `Alt+i` | Insert mode at beginning |
| `Alt+a` | Append mode at end |

## Search and Replace

### Search

| Key | Action |
|-----|--------|
| `/` | Search forward |
| `?` | Search backward |
| `n/N` | Next/previous match |
| `*` | Search word under cursor |
| `#` | Search word under cursor (whole word) |
| `Alt+n` | Select next match |
| `Alt+N` | Select all matches |

### Replace

| Key | Action |
|-----|--------|
| `:%s/old/new/g` | Replace all in file |
| `:%s/old/new/gc` | Replace with confirmation |
| `:s/old/new/g` | Replace in selection |

## LSP Integration

### Built-in LSP Features

| Feature | Key | Description |
|---------|-----|-------------|
| **Auto-completion** | `Ctrl+Space` | Trigger completion |
| **Go to definition** | `g d` | Jump to definition |
| **Go to references** | `g r` | Find all references |
| **Go to type definition** | `g y` | Jump to type definition |
| **Go to implementation** | `g i` | Jump to implementation |
| **Hover documentation** | `K` | Show documentation |
| **Code actions** | `Space a` | Show available actions |
| **Rename symbol** | `Space r` | Rename symbol |
| **Format document** | `Space f` | Format code |
| **Diagnostics** | `Space d` | Show diagnostics |
| **Workspace symbols** | `Space s` | Search symbols |

### LSP Configuration

Language servers are auto-detected. Manual configuration in `languages.toml`:

```toml
[[language]]
name = "rust"
auto-format = true

[language-server.rust-analyzer]
command = "rust-analyzer"
```

## Selection and Multiple Cursors

### Selection Types

| Mode | Key | Description |
|------|-----|-------------|
| **Character** | `v` | Character selection |
| **Line** | `V` | Line selection |
| **Block** | `Ctrl+v` | Block selection |
| **Extend** | `Alt+v` | Extend selection |

### Multiple Cursors

| Key | Action |
|-----|--------|
| `Alt+c` | Add cursor below |
| `Alt+C` | Add cursor above |
| `Alt+mouse` | Add cursor at click |
| `Space m` | Match all selections |
| `Space M` | Clear other selections |

## File Management

### File Operations

| Key | Action |
|-----|--------|
| `Space f` | File picker |
| `Space w` | Save |
| `Space W` | Save as |
| `Space q` | Quit |
| `Space Q` | Quit without saving |
| `Ctrl+w` | Window operations |
| `Ctrl+t` | Tab operations |

### Buffer Management

| Key | Action |
|-----|--------|
| `Space b` | Buffer picker |
| `Ctrl+Tab` | Next buffer |
| `Ctrl+Shift+Tab` | Previous buffer |
| `Ctrl+w w` | Switch window |
| `Ctrl+w q` | Close window |

## Advanced Features

### Tree-sitter Integration

- **Syntax highlighting**: Accurate parsing
- **Code structure**: Tree-based navigation
- **Incremental parsing**: Fast updates
- **Error recovery**: Graceful handling

### Text Objects

| Object | Key | Description |
|---------|-----|-------------|
| `w` | Word |
| `s` | Sentence |
| `p` | Paragraph |
| `b` | Bracket pair |
| `t` | Tag pair |
| `f` | Function |
| `a` | Argument |

### Macros

| Key | Action |
|-----|--------|
| `q` | Start/stop recording |
| `Q` | Play macro |
| `@` | Play macro by name |

### Registers

| Register | Description |
|----------|-------------|
| `"` | Default register |
| `0` | Yank register |
| `1-9` | Numbered registers |
| `+` | Clipboard |
| `_` | Black hole |

## Configuration

### Config File

Create `~/.config/helix/config.toml`:

```toml
theme = "dark_plus"

[editor]
line-number = "relative"
mouse = true
scroll-lines = 3
shell = ["bash", "-c"]
auto-pairs = true

[editor.cursor-shape]
insert = "bar"
normal = "block"
select = "underline"

[editor.file-picker]
hidden = false
follow-symlinks = true
deduplicate-links = false

[editor.indentation]
tab-width = 4
unit = 4

[editor.soft-wrap]
enable = false
max-wrap = 25
max-indent-retain = 0

[keys.normal]
space = { w = ":write", q = ":quit", f = "file_picker" }
```

### Language Configuration

Create `~/.config/helix/languages.toml`:

```toml
[[language]]
name = "typescript"
language-servers = ["typescript-language-server", "eslint"]
auto-format = true
formatter = { command = "prettier", args = ["--stdin-filepath", "stdin"] }

[[language]]
name = "rust"
language-servers = ["rust-analyzer"]
auto-format = true
```

## Integration Examples

### Git Integration

```bash
# Open git status files
hx $(git status --porcelain | awk '{print $2}')

# Open modified files
hx $(git diff --name-only)
```

### Project Navigation

```bash
# Find and open files
fd -e rs | fzf | xargs hx

# Open project with specific config
hx --config project-config.toml ./project
```

### Development Workflow

```bash
# Open with LSP diagnostics
hx --health

# Open with specific theme
hx --theme onedark file.rs

# Open with working directory
hx --working-dir ./src lib.rs
```

## Performance Tips

1. **Large files**: Use line-relative numbers
2. **Syntax highlighting**: Disable for very large files
3. **LSP**: Configure only needed language servers
4. **Auto-completion**: Adjust trigger settings
5. **File picker**: Configure exclude patterns

## Troubleshooting

### Common Issues

1. **LSP not working**: Check language server installation
2. **Syntax errors**: Verify tree-sitter grammar
3. **Performance**: Adjust config for large files
4. **Key conflicts**: Check terminal key bindings

### Health Check

```bash
# Check editor health
hx --health

# Check LSP status
hx --health
# Look for LSP status in output
```

## Features

- **Modal editing**: Vim-like modal system
- **Built-in LSP**: Language server protocol support
- **Tree-sitter**: Advanced syntax parsing
- **Multiple cursors**: Simultaneous editing
- **Text objects**: Intelligent text selection
- **Auto-completion**: Context-aware suggestions
- **Code formatting**: Integrated formatting
- **File picker**: Fast file navigation
- **Git integration**: Version control support
- **Macro system**: Record/replay actions
- **Register system**: Clipboard and registers
- **Themes**: Customizable color schemes
- **Cross-platform**: Windows, macOS, Linux
- **Extensible**: Plugin architecture
- **Fast**: Rust-based performance
- **Modern**: Contemporary editor features
