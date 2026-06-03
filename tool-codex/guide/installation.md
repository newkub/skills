# Installation

## Quick Install

### macOS / Linux

```bash
curl -fsSL https://chatgpt.com/codex/install.sh | sh
```

### Windows

```powershell
powershell -ExecutionPolicy ByPass -c "irm https://chatgpt.com/codex/install.ps1 | iex"
```

## Package Managers

### npm

```bash
npm install -g @openai/codex
```

### pnpm

```bash
pnpm add -g @openai/codex
```

### yarn

```bash
yarn global add @openai/codex
```

### bun

```bash
bun add -g @openai/codex
```

### Homebrew (macOS)

```bash
brew install --cask codex
```

## Binary Download

ดาวน์โหลด binary ได้จาก [GitHub Releases](https://github.com/openai/codex/releases/latest)

| Platform | Architecture | Filename |
|----------|--------------|----------|
| macOS | Apple Silicon | `codex-aarch64-apple-darwin.tar.gz` |
| macOS | Intel x86_64 | `codex-x86_64-apple-darwin.tar.gz` |
| Linux | x86_64 | `codex-x86_64-unknown-linux-musl.tar.gz` |
| Linux | ARM64 | `codex-aarch64-unknown-linux-musl.tar.gz` |
| Windows | x86_64 | `codex-x86_64-pc-windows-msvc.zip` |

### Manual Installation

```bash
# Download
curl -L https://github.com/openai/codex/releases/latest/download/codex-x86_64-apple-darwin.tar.gz -o codex.tar.gz

# Extract
tar -xzf codex.tar.gz

# Move to PATH
mv codex /usr/local/bin/

# Verify
codex --version
```

## Verify Installation

```bash
codex --version
```

## Requirements

| Requirement | Details |
|-------------|---------|
| **OS** | macOS 10.15+, Linux (glibc 2.17+), Windows 10+ |
| **Network** | Internet connection required |
| **Authentication** | ChatGPT account หรือ OpenAI API key |
| **Permissions** | Read/write access to project directories |

## Shell Completion

### Bash

```bash
# Add to ~/.bashrc
source <(codex completion bash)
```

### Zsh

```bash
# Add to ~/.zshrc
source <(codex completion zsh)
```

### Fish

```bash
codex completion fish | source
```

## Update Codex

```bash
codex update
```

หรือติดตั้งใหม่เหมือนเดิม

## Uninstall

```bash
# npm
npm uninstall -g @openai/codex

# Homebrew
brew uninstall codex

# Manual (delete binary)
rm $(which codex)
```