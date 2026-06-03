# Architecture

## System Overview

```
┌─────────────────────────────────────────────────────────────┐
│                        dprint CLI                          │
├─────────────────────────────────────────────────────────────┤
│  Config Parser  │  Plugin Loader  │  Cache Manager         │
├─────────────────────────────────────────────────────────────┤
│                    Core Engine (Rust)                       │
├─────────────────────────────────────────────────────────────┤
│  WASM Sandbox  │  File Scanner  │  Formatter Pipeline     │
├─────────────────────────────────────────────────────────────┤
│  TypeScript  │  JSON  │  Markdown  │  TOML  │  Rust  │  ... │
└─────────────────────────────────────────────────────────────┘
```

## Core Components

### 1. CLI Interface

- `dprint fmt` - Format files
- `dprint check` - Check formatting
- `dprint init` - Initialize config
- `dprint add` - Add plugins
- `dprint update` - Update plugins

### 2. Configuration Parser

- JSON / JSONC format support
- Schema validation
- Plugin URL resolution
- Environment variable expansion

### 3. Plugin System

```
┌─────────────────┐     ┌─────────────────┐
│  Plugin Manifest │     │  WASM Binary    │
├─────────────────┤     ├─────────────────┤
│  file_extensions│     │  Format Logic   │
│  version        │     │  Language Rules │
│  url            │     │  Options        │
└─────────────────┘     └─────────────────┘
```

**Plugin Loading Flow:**

```
1. Read plugin URL from config
2. Download WASM binary (if URL)
3. Verify checksum
4. Load into WASM sandbox
5. Execute format operations
```

### 4. WASM Sandbox

| Capability | Access |
|------------|--------|
| CPU | ✅ Limited |
| Memory | ✅ Bounded |
| Network | ❌ Blocked |
| File System | ❌ Blocked |
| System Clock | ✅ Available |

### 5. Cache System

```
~/.cache/dprint/
├── plugins/
│   ├── typescript-0.90.wasm
│   └── json-0.19.wasm
└── cache/
    └── format-cache.db
```

**Cache Benefits:**

- Incremental formatting
- Plugin binary caching
- Configuration caching

## Data Flow

```
Source Code → Scanner → Plugin (WASM) → Formatter → Output
     ↓           ↓           ↓            ↓
   Config    Glob Match   Sandbox    Rule Engine
```

### Format Pipeline

1. **Input**: Read source files
2. **Filter**: Apply glob patterns
3. **Parse**: Build AST via WASM plugin
4. **Transform**: Apply formatting rules
5. **Output**: Write formatted code

## Performance Architecture

### Parallel Processing

```text
Thread 1: file1.ts → formatted
Thread 2: file2.ts → formatted
Thread 3: file3.ts → formatted
...
Thread N: fileN.ts → formatted
```

### Incremental Updates

```
1. File Change Detected
2. Compare with Cache
3. Re-format Only Changed
4. Update Cache
```

### Memory Management

- **Worker Threads**: Parallel file processing
- **Streaming**: Large file support
- **WASM Memory**: Isolated per plugin

## Security Model

```
┌─────────────────────────────────────┐
│           Sandbox Boundary           │
├─────────────────────────────────────┤
│  WASM Plugin ←→ Isolated Memory     │
├─────────────────────────────────────┤
│  No: network, filesystem, process   │
│  Yes: CPU, memory (bounded)          │
└─────────────────────────────────────┘
```

## Extension Points

### Custom Plugins

1. Implement `dprint-plugin` interface
2. Compile to WASM
3. Publish to registry
4. Add URL to config

### Configuration Extends

```json
{
  "extends": [
    "https://dprint.dev/configs/typescript-format.json"
  ],
  "typescript": {
    "override": true
  }
}
```

## Version Compatibility

| Component | Version |
|-----------|---------|
| Core | 0.38+ |
| TypeScript Plugin | 0.93+ |
| JSON Plugin | 0.19+ |
| Markdown Plugin | 0.17+ |