# Windsurf Keyboard Shortcuts

Complete reference of all keyboard shortcuts in Windsurf.

## AI Features

| Shortcut | Action | Context |
|----------|--------|---------|
| `Cmd+L` / `Ctrl+L` | Open Cascade | Global |
| `Cmd+I` / `Ctrl+I` | Inline command | Editor / Terminal |
| `Cmd+.` / `Ctrl+.` | Cascade Write mode | Cascade panel |
| `Tab` | Accept autocomplete | Editor |
| `Tab` (repeated) | Cycle Supercomplete | Editor |
| `Tab` + jump | Tab to Jump | Editor |

## Navigation

| Shortcut | Action |
|----------|--------|
| `Cmd+P` / `Ctrl+P` | Quick open file |
| `Cmd+Shift+P` / `Ctrl+Shift+P` | Command Palette |
| `Cmd+K` / `Ctrl+K` | Quick actions |
| `Cmd+Shift+O` / `Ctrl+Shift+O` | Go to symbol |
| `Cmd+G` / `Ctrl+G` | Go to line |
| `Cmd+Tab` / `Alt+Tab` | Switch window (OS) |

## Editing

| Shortcut | Action |
|----------|--------|
| `Cmd+S` / `Ctrl+S` | Save |
| `Cmd+Z` / `Ctrl+Z` | Undo |
| `Cmd+Shift+Z` / `Ctrl+Shift+Z` | Redo |
| `Cmd+C` / `Ctrl+C` | Copy |
| `Cmd+V` / `Ctrl+V` | Paste |
| `Cmd+X` / `Ctrl+X` | Cut |
| `Cmd+D` / `Ctrl+D` | Select word (next occurrence) |
| `Cmd+Shift+L` / `Ctrl+Shift+L` | Select all occurrences |

## Selection

| Shortcut | Action |
|----------|--------|
| `Cmd+A` / `Ctrl+A` | Select all |
| `Shift+↑/↓` | Extend selection |
| `Shift+←/→` | Extend character selection |
| `Cmd+Shift+↑` / `Ctrl+Shift+↑` | Select to line start |
| `Cmd+Shift+↓` / `Ctrl+Shift+↓` | Select to line end |

## Cascade-Specific

| Shortcut | Action |
|----------|--------|
| `Cmd+L` / `Ctrl+L` | Open Cascade chat |
| `Cmd+I` / `Ctrl+I` | Inline command |
| `@` | Mention code (in Cascade) |
| `#` | Search memories |
| `Tab` | Accept suggestion |
| `Esc` | Cancel operation |

## Cascade Flow Features

| Shortcut | Action |
|----------|--------|
| Click on element | Send element to Cascade |
| Select code + `Cmd+L` | Mention code in Cascade |
| Select code + `Cmd+I` | Refactor selected code |

## Terminal

| Shortcut | Action |
|----------|--------|
| `Cmd+\`` / `Ctrl+\`` | Toggle terminal |
| `Cmd+Shift+\`` / `Ctrl+Shift+\`` | New terminal |
| `Cmd+I` / `Ctrl+I` | Command in terminal |

## Split Editor

| Shortcut | Action |
|----------|--------|
| `Cmd+\` / `Ctrl+\` | Split editor |
| `Cmd+1/2/3` / `Ctrl+1/2/3` | Focus group |
| `Cmd+Shift+E` / `Ctrl+Shift+E` | Explorer |
| `Cmd+Shift+F` / `Ctrl+Shift+F` | Search |

## macOS vs Windows/Linux

| Action | macOS | Windows/Linux |
|--------|-------|---------------|
| Open Cascade | `Cmd+L` | `Ctrl+L` |
| Inline command | `Cmd+I` | `Ctrl+I` |
| Command Palette | `Cmd+Shift+P` | `Ctrl+Shift+P` |
| Quick open | `Cmd+P` | `Ctrl+P` |
| Settings | `Cmd+,` | `Ctrl+,` |

## Customizing Shortcuts

### Open Keyboard Shortcuts

1. `Cmd+Shift+P` → "Open Keyboard Shortcuts"
2. Or: `Cmd+K` → `Cmd+S`

### Remap Example

```json
{
  "key": "cmd+shift+c",
  "command": "windsurf.cascade.open"
}
```

## Codelenses

| Location | Action |
|----------|--------|
| Next to breadcrumbs | Click for quick actions |
| In editor margin | Refactor suggestions |
| Error indicators | Quick fixes |

## Quick Reference Card

```
╔══════════════════════════════════════════╗
║         Windsurf Shortcuts               ║
╠══════════════════════════════════════════╣
║ AI:                                       ║
║   Cmd+L     → Open Cascade               ║
║   Cmd+I     → Inline command             ║
║   Tab       → Accept autocomplete       ║
╠══════════════════════════════════════════╣
║ Navigation:                               ║
║   Cmd+P     → Quick open file            ║
║   Cmd+Shift+P → Command Palette          ║
╠══════════════════════════════════════════╣
║ Editing:                                  ║
║   Cmd+S     → Save                       ║
║   Cmd+Z     → Undo                       ║
║   Cmd+D     → Select next               ║
╚══════════════════════════════════════════╝
```

## Tips

1. **Press and hold Tab** — For continuous Supercomplete
2. **@ in Cascade** — Reference files, functions, classes
3. **Select + Cmd+L** — Mention selected code in Cascade
4. **Cmd+I in terminal** — Natural language commands