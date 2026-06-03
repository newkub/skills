# Configuration - Go

## go.mod

Module definition file.

```go
module github.com/user/project

go 1.22

require (
    github.com/pkg/errors v0.9.1
    github.com/stretchr/testify v1.8.4
)

require (
    github.com/davecgh/go-spew v1.1.1 // indirect
    github.com/pmezard/go-difflib v1.0.0 // indirect
)

replace github.com/example/package => ../local/package

exclude github.com/old/package v0.0.0
```

## go.sum

Dependency checksums (auto-generated).

```
github.com/pkg/errors v0.9.1 h1:FgLxXCoUy9xCc1cgcin5L06nW1z0z2cQ2L9FmcG38=
github.com/pkg/errors v0.9.1/go.mod h1:bwawxfHBFNV+L2hUp1rHADufV3IMtnDRdf1r5NINEl0=
```

## go.sum vs go.mod

```bash
# Initialize module
go mod init github.com/user/project

# Add dependencies
go get github.com/pkg/errors

# Tidy dependencies
go mod tidy

# Download dependencies
go mod download

# Verify dependencies
go mod verify

# List dependencies
go list -m all

# Why dependency
go mod why github.com/pkg/errors
```

## go.work (Workspace Mode)

For monorepo development.

```go
go 1.22

use (
    ./moduleA
    ./moduleB
)
```

## Build Configuration

### go build

```bash
# Build binary
go build -o myapp .

# Build for specific OS/Arch
GOOS=linux GOARCH=amd64 go build -o myapp .

# Build with ldflags
go build -ldflags="-X main.Version=1.0.0"

# Strip symbols
go build -ldflags="-s -w"

# Build with tags
go build -tags=debug .
```

### Cross-compilation Targets

| GOOS | GOARCH | Description |
|------|--------|-------------|
| linux | amd64, arm64 | Linux 64-bit |
| darwin | amd64, arm64 | macOS |
| windows | amd64, 386 | Windows |
| freebsd | amd64 | FreeBSD |
| js | wasm | WebAssembly |

## Testing Configuration

```bash
# Run tests
go test ./...

# Verbose output
go test -v ./...

# Coverage
go test -cover ./...
go test -coverprofile=coverage.out
go tool cover -html=coverage.out

# Race detector
go test -race ./...

# Benchmark
go test -bench=. ./...
go test -benchmem ./...

# Fuzz testing
go test -fuzz=FuzzAdd
```

## Linting and Formatting

### gofmt

```bash
# Format file
gofmt -w main.go

# Format directory
gofmt -w .

# Show differences
gofmt -d main.go

# Simplified mode
gofmt -s -w .
```

### staticcheck

```bash
# Install
go install honnef.co/go/tools/cmd/staticcheck@latest

# Run
staticcheck ./...

# Specific checks
staticcheck -checks=all,-S1002,-U1000 ./...
```

### golangci-lint

```yaml
# .golangci.yml
linters:
  default: none
  enable:
    - gofmt
    - staticcheck
    - unused
    - gosimple

linters-settings:
  gofmt:
    simplify: true
  staticcheck:
    checks:
      - all
      - "-S*"
```

## Editor Configuration

### VS Code (settings.json)

```json
{
  "go.formatTool": "gofmt",
  "go.lintTool": "staticcheck",
  "go.useLanguageServer": true,
  "[go]": {
    "editor.formatOnSave": true
  }
}
```

### GoLand

- Enable "Go modules" integration
- Configure "Go SDK" path
- Enable "Format on save"

## Environment Variables

| Variable | Default | Description |
|----------|---------|-------------|
| GOPATH | $HOME/go | Workspace root |
| GOROOT | (auto) | Go installation |
| GO111MODULE | on | Module mode |
| GOBIN | $GOPATH/bin | Binary output |
| GOCACHE | $HOME/.cache/go-build | Build cache |
| GOMODCACHE | $HOME/go/pkg/mod | Module cache |

## GOPROXY

```bash
# Default proxy
go env GOPROXY
# https://proxy.golang.org,direct

# Set custom proxy
export GOPROXY=https://goproxy.cn,direct

# Disable proxy
export GOPROXY=off

# Direct only
export GOPROXY=direct
```