# Installation

## Installation Methods

### npm

```bash
npm install -g @ast-grep/cli
```

### Homebrew (macOS/Linux)

```bash
brew install ast-grep
```

### Cargo (Rust)

```bash
cargo install ast-grep --locked
```

### MacPorts

```bash
sudo port install ast-grep
```

### Nix

```bash
nix-shell -p ast-grep
```

### pip

```bash
pip install ast-grep-cli
```

## Verify Installation

```bash
ast-grep --version
# or
sg --version
```

## Update

### npm

```bash
npm update -g @ast-grep/cli
```

### Homebrew

```bash
brew upgrade ast-grep
```

### Cargo

```bash
cargo install ast-grep --locked
```

## Build from Source

```bash
git clone https://github.com/ast-grep/ast-grep.git
cd ast-grep
cargo install --path ./crates/cli --locked
```

## Shell Completion

### Bash

```bash
ast-grep completion bash > /etc/bash_completion.d/ast-grep
```

### Zsh

```bash
ast-grep completion zsh > "${fpath[1]}/_ast-grep"
```

### Fish

```bash
ast-grep completion fish > ~/.config/fish/completions/ast-grep.fish
```

## Platform-Specific Notes

| Platform | Notes |
|----------|-------|
| Linux | คำสั่ง `sg` อาจชนกับ `setgroups` command ให้ใช้ `ast-grep` แทน หรือสร้าง alias `alias sg=ast-grep` |
| Windows | รองรับผ่าน npm, cargo, หรือ scoop |
| macOS | แนะนำใช้ Homebrew |