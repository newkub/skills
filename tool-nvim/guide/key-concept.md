# Key Concept

แนวคิดหลักของ Neovim

## What is Neovim?

Neovim (nvim) เป็น modern, extensible text editor ที่พัฒนาจาก Vim มี focus บน extensibility และ usability รองรับ Lua scripting, built-in terminal, และ async plugin system

## Modal Editing

Neovim ใช้ modal editing system:

```
┌─────────────────────────────────────┐
│         Neovim Modes                  │
├─────────────────────────────────────┤
│  Normal  │  Insert  │  Visual       │
│  Command │  Ex      │  Terminal     │
├─────────────────────────────────────┤
│  Normal: Navigate and edit          │
│  Insert: Type text                  │
│  Visual: Select text                │
│  Command: Execute commands          │
└─────────────────────────────────────┘
```

| Mode | Key | Purpose |
|------|-----|---------|
| Normal | `Esc` | Navigate and edit |
| Insert | `i` | Insert text |
| Visual | `v` | Select text |
| Line Visual | `V` | Select lines |
| Block Visual | `Ctrl+v` | Select blocks |
| Command | `:` | Execute commands |
| Terminal | `Ctrl+\` | Terminal mode |

## Core Features

| Feature | Description |
|---------|-------------|
| **Modal Editing** | Multiple modes for different tasks |
| **Registers** | Store and access clipboard/history |
| **Macros** | Record and replay actions |
| **Buffers** | Multiple open files |
| **Windows** | Split view |
| **Tabs** | Multiple workspaces |

## When to Use

- **Coding** - Excellent for coding with LSP support
- **Text Editing** - Fast and powerful text manipulation
- **System Administration** - Great for config files
- **Terminal Integration** - Built-in terminal

## Registers

| Register | Description | Usage |
|----------|-------------|-------|
| `"` | Default | y, p |
| `0` | Last yank | `"0p` |
| `1-9` | Delete history | `"1p` |
| `a-z` | Named registers | `"ay` |
| `/` | Search | `ctrl+r/` |

## Macros

```vim
" Record macro 'a'
qa ... actions ... q

" Playback
@a

" Play 3 times
3@a
```

## Buffers and Windows

```vim
:edit file.txt      " Open file
:ls                 " List buffers
:bnext              " Next buffer
:split              " Horizontal split
:vsplit             " Vertical split
```

## See Also

- [How It Works](./how-it-works.md) - Architecture details
- [Features](./features.md) - All features
- [Installation](./installation.md) - Installation guide