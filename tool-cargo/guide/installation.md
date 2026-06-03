# Installation

## Prerequisites

### Rustup (Recommended)

`rustup` เป็น toolchain manager สำหรับ Rust:

```bash
# Linux/macOS
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh

# Windows (PowerShell)
powershell -c "irm rustup.rs | iex"
```

## Installation Methods

### 1. Via rustup (Recommended)

```bash
# Install stable toolchain
rustup default stable

# Install nightly
rustup default nightly

# Install specific version
rustup install 1.76.0

# Show installed toolchains
rustup show

# Update rustup
rustup update
```

### 2. Via package managers

```bash
# Homebrew (macOS/Linux)
brew install rust

# Chocolatey (Windows)
choco install rust

# apt (Debian/Ubuntu)
apt install cargo rustc

# pacman (Arch)
pacman -S rust
```

### 3. Source compilation

```bash
git clone https://github.com/rust-lang/cargo.git
cd cargo
cargo build --release
```

## Verify Installation

```bash
# Check Cargo version
cargo --version

# Check Rust version
rustc --version

# Show Cargo location
which cargo

# Show help
cargo --help
```

## Update

### Update stable toolchain

```bash
rustup update stable
```

### Update rustup itself

```bash
rustup self update
```

### Update specific package

```bash
cargo install cargo-update
cargo install-update -a
```

## Toolchain Management

### Multiple toolchains

```bash
# Install stable
rustup install stable

# Install nightly
rustup install nightly

# Install beta
rustup install beta

# Set default
rustup default nightly

# Override per project
rustup override set stable
```

### Targets

```bash
# Add target
rustup target add x86_64-unknown-linux-gnu

# List targets
rustup target list

# Install for cross-compilation
rustup target add thumbv7em-none-eabihf --toolchain nightly
```

## Uninstall

```bash
# Via rustup
rustup self uninstall

# Via package manager
# Use respective package manager's remove command
```

## Cargo binaries

```bash
# Install cargo binary
cargo install cargo-binutils

# Use
cargo size --lib
cargo objdump --lib
```

## Shell Completion

```bash
# Bash
cargo generate-completions bash

# Zsh
cargo generate-completions zsh

# Fish
cargo generate-completions fish
```

## Platform-specific Notes

| Platform | Notes |
|----------|-------|
| Windows | ใช้ PowerShell หรือ MSYS2 |
| macOS | รองรับ Apple Silicon (aarch64) |
| Linux | ต้องมี gcc/clang |
| WSL | รองรับเต็มรูปแบบ |