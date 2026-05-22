# Windsurf Quick Start

Get up and running with Windsurf IDE in minutes.

## Installation

### Download

1. Visit [windsurf.com](https://windsurf.com) and download for your OS:
   - **macOS**: `.dmg` installer (Apple Silicon or Intel)
   - **Windows**: `.exe` installer
   - **Linux**: `.deb`, `.rpm`, or `.tar.gz`

### System Requirements

| OS | Minimum | Recommended |
|----|---------|-------------|
| macOS | 10.15 Catalina | Latest |
| Windows | 10 (1903+) | 11 |
| Linux | Ubuntu 20.04+ | Latest |

**Requirements:**
- 4 GB RAM minimum (8 GB recommended)
- 2 GB disk space
- Git installed and in PATH
- Internet connection (AI runs server-side)

### Import from VS Code

On first launch, Windsurf detects VS Code and offers to import:
- Extensions
- Settings and keybindings
- Themes and icon packs
- Profiles

## Initial Setup

### 1. Install CLI

Open Command Palette (`Cmd+Shift+P` / `Ctrl+Shift+P`) and run:
```
"Install 'windsurf' command in PATH"
```

### 2. Configure AI Models

Open Settings (`Cmd+,` / `Ctrl+,`) → AI section:

| Feature | Recommended Model |
|---------|-------------------|
| Cascade | Premium (GPT-4o, Claude) |
| Autocomplete | Default (faster, lower latency) |

### 3. Create .windsurfrules (Optional but Recommended)

Create `.windsurfrules` in project root for better AI context:

```markdown
# .windsurfrules

## Project Overview
[Describe your tech stack]

## Code Style
[Your coding conventions]

## File Structure
[Your project structure]

## Testing
[Testing requirements]
```

## Core Workflows

### Starting a Session

1. Open Windsurf: `windsurf .` or from terminal
2. Press `Cmd+L` (macOS) / `Ctrl+L` (Windows/Linux) to open Cascade
3. Start describing your task

### Basic Cascade Interaction

```
# Add a feature
"Add user authentication with JWT to the API"

# Refactor code
"Refactor the user service to use dependency injection"

# Debug an issue
"Fix the memory leak in the image processing module"
```

### Using Tab

1. Start typing code
2. Press `Tab` to accept suggestion
3. Continue typing for more suggestions

### Supercomplete

- Press `Tab` repeatedly to cycle through completions
- Predictions include entire functions or blocks

## Essential Shortcuts

| Shortcut | Action |
|----------|--------|
| `Cmd+L` / `Ctrl+L` | Open Cascade |
| `Cmd+I` / `Ctrl+I` | Inline command (generate/refactor) |
| `Tab` | Accept autocomplete |
| `Cmd+Shift+P` | Command Palette |
| `Cmd+K` / `Ctrl+K` | Quick actions |

## Next Steps

- [Cascade Usage](cascade-usage.md) — Master the Cascade agent
- [All Features](all-features.md) — Explore all capabilities
- [Configuration](interface/configuration.md) — Customize your setup