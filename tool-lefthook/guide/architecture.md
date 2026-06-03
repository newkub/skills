# Architecture

## Lefthook Architecture

### Overview

Lefthook is written in Go, which provides:
- Single binary distribution (no runtime dependencies)
- Fast execution speed
- Cross-platform support (Windows, macOS, Linux)

### Architecture Layers

```
┌─────────────────────────────────────────────────────────────┐
│                    Lefthook Architecture                      │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│   ┌─────────────────────────────────────────────────────┐   │
│   │                  CLI Layer                           │   │
│   │  ┌─────────┐  ┌─────────┐  ┌─────────┐              │   │
│   │  │ install │  │   run   │  │  dump   │  ...          │   │
│   │  └─────────┘  └─────────┘  └─────────┘              │   │
│   └─────────────────────────────────────────────────────┘   │
│                           │                                  │
│                           ▼                                  │
│   ┌─────────────────────────────────────────────────────┐   │
│   │              Configuration Layer                     │   │
│   │  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐   │   │
│   │  │ lefthook.yml │  │  extends    │  │   env vars  │   │   │
│   │  └─────────────┘  └─────────────┘  └─────────────┘   │   │
│   └─────────────────────────────────────────────────────┘   │
│                           │                                  │
│                           ▼                                  │
│   ┌─────────────────────────────────────────────────────┐   │
│   │              Execution Engine                         │   │
│   │  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐   │   │
│   │  │  commands   │  │  scripts    │  │    pipe     │   │   │
│   │  └─────────────┘  └─────────────┘  └─────────────┘   │   │
│   └─────────────────────────────────────────────────────┘   │
│                           │                                  │
│                           ▼                                  │
│   ┌─────────────────────────────────────────────────────┐   │
│   │              Git Hook Interface                       │   │
│   │  ┌─────────────────────────────────────────────┐     │   │
│   │  │  .git/hooks/pre-commit, pre-push, etc.      │     │   │
│   │  └─────────────────────────────────────────────┘     │   │
│   └─────────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────────┘
```

### Components

| Component | Description |
|-----------|-------------|
| **CLI Parser** | Parses command-line arguments |
| **Config Loader** | Loads and merges YAML configurations |
| **Hook Executor** | Executes commands and scripts |
| **Parallel Runner** | Manages concurrent execution |
| **Git Bridge** | Interfaces with Git hooks |

### Data Flow

```
1. User runs: git commit
       │
       ▼
2. Git triggers: .git/hooks/pre-commit
       │
       ▼
3. pre-commit calls: lefthook run pre-commit
       │
       ▼
4. Lefthook loads: lefthook.yml
       │
       ▼
5. Config merged with extends
       │
       ▼
6. Commands prepared with variables
       │
       ▼
7. Execute (parallel/sequential)
       │
       ▼
8. Results collected
       │
       ▼
9. Exit with success/failure code
```

### Hook Installation

```
┌─────────────────┐
│ lefthook.yml     │──┐
└─────────────────┘  │
                     ▼
┌─────────────────────────────────────┐
│           lefthook install           │
└─────────────────┬───────────────────┘
                  │
                  ▼
┌─────────────────────────────────────┐
│     Generate .git/hooks/* files     │
└─────────────────┬───────────────────┘
                  │
                  ▼
┌─────────────────────────────────────┐
│  .git/hooks/pre-commit              │
│  #!/bin/sh                          │
│  lefthook run pre-commit "$@"       │
└─────────────────────────────────────┘
```

### Performance Characteristics

| Aspect | Description |
|--------|-------------|
| **Startup Time** | ~10-50ms (depends on system) |
| **Parallel Execution** | Uses Go goroutines |
| **Memory Usage** | Minimal (~5-10MB) |
| **Config Parsing** | Fast YAML parsing with caching |

### Configuration Merging

```
lefthook.yml          → Base configuration
        │
        ├── extends: lefthook.shared.yml
        │               │
        │               ▼
        │       Shared commands
        │
        └── Local overrides
                │
                ▼
        Final merged config
```

### Security Considerations

| Concern | Mitigation |
|---------|------------|
| **Script Injection** | Commands are not shell-interpreted |
| **Path Traversal** | Working directory is validated |
| **Environment** | Env vars are explicitly defined |
| **Timeouts** | Commands have timeout protection |