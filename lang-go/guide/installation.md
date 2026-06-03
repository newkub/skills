# Installation - Go

## System Requirements

Go requires minimal resources and runs on multiple platforms.

| OS | Architecture | Minimum |
|----|--------------|---------|
| Windows | x86_64, arm64 | 64-bit |
| macOS | x86_64, arm64 (Apple Silicon) | 64-bit |
| Linux | x86_64, arm64, i386 | 64-bit |

## Installation Methods

### Windows (Recommended)

Download installer from https://go.dev/dl/

```powershell
# Or use winget
winget install Go.Go

# Verify installation
go version
```

### macOS

```bash
# Via Homebrew (Recommended)
brew install go

# Or via installer
# Download from https://go.dev/dl/

# Verify installation
go version
```

### Linux

```bash
# Via package manager (Ubuntu/Debian)
sudo apt update
sudo apt install golang-go

# Via package manager (Fedora/RHEL)
sudo dnf install golang

# Or download tarball
wget https://go.dev/dl/go1.22.0.linux-amd64.tar.gz
sudo tar -C /usr/local -xzf go1.22.0.linux-amd64.tar.gz

# Add to PATH
echo 'export PATH=$PATH:/usr/local/go/bin' >> ~/.bashrc
source ~/.bashrc

# Verify installation
go version
```

## Environment Setup

### GOPATH vs Module Mode

Since Go 1.11+, module mode is recommended over GOPATH.

```bash
# Check Go module mode
go env GO111MODULE
# Should output: on

# GOPATH location
go env GOPATH
# Usually: $HOME/go
```

### Environment Variables

```bash
# View all Go environment variables
go env

# Common variables to customize
GOPATH=$HOME/go           # Workspace root
GOROOT=/usr/local/go      # Go installation
GOBIN=$GOPATH/bin         # Compiled binary location
PATH=$PATH:$GOBIN         # Add to PATH
```

## Essential Tools

### gofmt

Built-in code formatter (comes with Go).

```bash
# Format code
gofmt -w yourfile.go

# Format entire directory
gofmt -w .

# Check formatting (no changes)
gofmt -d yourfile.go
```

### golint / staticcheck

Linter for Go code.

```bash
# Install golint
go install golang.org/x/lint/golint@latest

# Run linter
golint ./...
```

### Editor Tools

| Tool | Purpose | Install |
|------|---------|---------|
| gopls | Language Server | Built-in with VS Code Go |
| dlv | Debugger | `go install github.com/go-delve/delve/cmd/dlv@latest` |
| staticcheck | Static analyzer | `go install honnef.co/go/tools/cmd/staticcheck@latest` |

## IDE Setup

### VS Code

Install "Go" extension by Google.

```bash
# Or via command palette: Ctrl+Shift+P > "Extensions: Install Extensions"
# Search: "Go" by Google
```

### GoLand (IntelliJ)

Built-in Go support. Install from https://www.jetbrains.com/go/

### Neovim

```vim
-- Using lazy.nvim
{ "neovim/nvim-lspconfig", opts = { /* ... */ } }
{ "olexsmir/gopher.nvim", opts = { /* ... */ } }
```

## Verify Installation

```bash
# Check Go version
go version

# Test installation
go run hello.go
```

## Update Go

```bash
# Via package manager (same as installation)

# Or via go command
go install golang.org/dl/go1.22.0@latest
go1.22.0 download
```