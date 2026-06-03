# Installation

## Requirements

| Requirement | Version |
|-------------|---------|
| Node.js | 18+ (optional, for npm install) |
| npm/yarn/pnpm | latest |

## Installation Methods

### npm (Recommended)

```bash
# Local install (per project)
npm install -D dprint

# Global install
npm install -g dprint
```

### yarn

```bash
yarn add -D dprint
```

### pnpm

```bash
pnpm add -D dprint
```

### Binary Download

```bash
# Linux/macOS
curl -fsSL https://dprint.dev/install.sh | sh

# Windows (PowerShell)
irm https://dprint.dev/install.ps1 | iex
```

### Cargo (Rust)

```bash
cargo install dprint
```

### Homebrew (macOS)

```bash
brew install dprint
```

## Verify Installation

```bash
dprint --version
# dprint 0.38.3

# หรือผ่าน npm
npx dprint --version
```

## Initialize Project

```bash
# สร้าง dprint.json
dprint init

# ดู config ที่ได้
cat dprint.json
```

## Update dprint

```bash
# npm
npm update -D dprint

# Binary
dprint self-update

# Global npm
npm update -g dprint
```

## Docker

```dockerfile
FROM dprint/dprint:latest

WORKDIR /app
COPY . .
RUN dprint fmt
```

## CI Installation

### GitHub Actions

```yaml
- uses: dprint/actions/install@v1
```

### GitLab CI

```yaml
image: dprint/dprint:latest
```

## Shell Completion

```bash
# Bash
dprint completions bash >> ~/.bashrc

# Zsh
dprint completions zsh >> ~/.zshrc

# PowerShell
dprint completions powershell >> $PROFILE
```

## Cache Location

| OS | Path |
|----|------|
| Linux | `~/.cache/dprint` |
| macOS | `~/Library/Caches/dprint` |
| Windows | `%LOCALAPPDATA%\dprint` |

## Uninstall

```bash
# npm
npm uninstall dprint

# Global
npm uninstall -g dprint

# Binary (Linux/macOS)
rm ~/.dprint
```