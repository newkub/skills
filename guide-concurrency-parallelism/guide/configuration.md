# Configuration

## Concurrency Tools Configuration

### Go Environment

### GOMAXPROCS

```bash
# Set number of OS threads
export GOMAXPROCS=4

# Or in code
runtime.GOMAXPROCS(4)
```

### Go Modules

```bash
# Initialize module
go mod init concurrency-demo

# Add dependencies
go get github.com/stretchr/testify/assert
```

### VS Code Configuration

**settings.json**:

```json
{
  "go.useLanguageServer": true,
  "go.toolsManagement": "auto",
  "go.lintTool": "golangci-lint",
  "go.lintOnSave": "workspace",
  "go.formatTool": "goimports"
}
```

### Rust Environment

### Tokio Configuration

**Cargo.toml**:

```toml
[dependencies]
tokio = { version = "1.0", features = ["full"] }
crossbeam = "0.8"
```

### Async Runtime

```rust
// Configure runtime
#[tokio::main(flavor = "multi_thread", worker_threads = 4)]
async fn main() {
    // Async code
}
```

### Python Environment

### Asyncio Configuration

```python
import asyncio

# Configure event loop
async def main():
    loop = asyncio.get_event_loop()
    loop.set_debug(True)
    # Async code

asyncio.run(main())
```

### Threading Configuration

```python
import threading

# Configure thread pool
executor = ThreadPoolExecutor(max_workers=4)
```

### Profiling Configuration

### Go Profiling

```bash
# Enable CPU profiling
go test -cpuprofile=cpu.prof

# View profile
go tool pprof cpu.prof
```

### Rust Profiling

```bash
# Install flamegraph
cargo install flamegraph

# Generate flamegraph
cargo flamegraph
```

### Python Profiling

```python
import cProfile
import pstats

def profile_function():
    profiler = cProfile.Profile()
    profiler.enable()
    # Function to profile
    profiler.disable()
    
    stats = pstats.Stats(profiler)
    stats.sort_stats('cumulative')
    stats.print_stats(10)
```

### Testing Configuration

### Go Testing

**go test flags**:

```bash
# Run tests with race detector
go test -race

# Run tests with coverage
go test -cover

# Run tests with verbose output
go test -v
```

### Rust Testing

**Cargo.toml**:

```toml
[dev-dependencies]
tokio-test = "0.4"
```

### Python Testing

**pytest.ini**:

```ini
[pytest]
testpaths = tests
python_files = test_*.py
python_classes = Test*
python_functions = test_*
addopts = -v --tb=short
asyncio_mode = auto
```

### Debugging Configuration

### Go Debugging

```bash
# Install delve
go install github.com/go-delve/delve/cmd/dlv@latest

# Debug program
dlv debug main.go
```

### Rust Debugging

```bash
# Install lldb
cargo install lldb

# Debug program
rust-lldb target/debug
```

### Python Debugging

```python
import pdb

def debug_function():
    pdb.set_trace()
    # Code to debug
```

### Environment Variables

### Go

```bash
# GODEBUG
export GODEBUG=gctrace=1

# GOROOT
export GOROOT=/usr/local/go

# GOPATH
export GOPATH=$HOME/go
```

### Rust

```bash
# RUST_LOG
export RUST_LOG=debug

# RUST_BACKTRACE
export RUST_BACKTRACE=1
```

### Python

```bash
# PYTHONASYNCIODEBUG
export PYTHONASYNCIODEBUG=1

# PYTHONPATH
export PYTHONPATH="${PYTHONPATH}:/path/to/project"
```

### IDE Configuration

### VS Code

**launch.json (Go)**:

```json
{
  "version": "0.2.0",
  "configurations": [
    {
      "name": "Launch Package",
      "type": "go",
      "request": "launch",
      "mode": "auto",
      "program": "${workspaceFolder}/main.go",
      "env": {
        "GOMAXPROCS": "4"
      }
    }
  ]
}
```

**launch.json (Rust)**:

```json
{
  "version": "0.2.0",
  "configurations": [
    {
      "name": "Debug",
      "type": "lldb",
      "request": "launch",
      "program": "${workspaceFolder}/target/debug/main",
      "cwd": "${workspaceFolder}"
    }
  ]
}
```

### Performance Tuning

### Go

```go
// Set GOMAXPROCS based on CPU cores
runtime.GOMAXPROCS(runtime.NumCPU())

// Configure GC
debug.SetGCPercent(100)
```

### Rust

```rust
// Configure tokio runtime
#[tokio::main(
    worker_threads = 4,
    max_blocking_threads = 32
)]
async fn main() {
    // Async code
}
```

### Python

```python
# Configure thread pool
executor = ThreadPoolExecutor(
    max_workers=min(32, (os.cpu_count() or 1) + 4)
)
```
