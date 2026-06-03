# Architecture

## Purpose

อธิบาย architecture และ design patterns ภายใน tsdown

## Scope

- Build System
- Plugin System
- Output Formats
- Declaration Generation

## Build System Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                    tsdown Architecture                        │
│                                                             │
│  ┌─────────────┐     ┌─────────────┐     ┌─────────────┐   │
│  │   Config    │────▶│    CLI      │────▶│   Rolldown  │   │
│  │  Parser     │     │  (tsdown)  │     │   Engine    │   │
│  └─────────────┘     └─────────────┘     └──────┬──────┘   │
│                                                │            │
│                                                ▼            │
│  ┌─────────────────────────────────────────────────────────┐│
│  │                   Output Generator                      ││
│  │  ┌─────────┐  ┌─────────┐  ┌─────────┐  ┌─────────┐     ││
│  │  │   ESM   │  │   CJS   │  │  IIFE   │  │   DTS   │     ││
│  │  └─────────┘  └─────────┘  └─────────┘  └─────────┘     ││
│  └─────────────────────────────────────────────────────────┘│
└─────────────────────────────────────────────────────────────┘
```

### Components

| Component | Description |
|-----------|-------------|
| **Config Parser** | Parse tsdown.config.ts |
| **CLI** | Command-line interface |
| **Rolldown Engine** | Rust-based bundler core |
| **Output Generator** | Multi-format output |

## Plugin System Architecture

### Plugin Hooks

```
┌─────────────────────────────────────────────────────────────┐
│                    Plugin Pipeline                            │
│                                                             │
│  Build Start ──▶ Resolve ──▶ Load ──▶ Transform ──▶ Bundle  │
│       │            │          │          │          │        │
│       ▼            ▼          ▼          ▼          ▼        │
│  ┌────────┐   ┌────────┐  ┌────────┐  ┌────────┐  ┌───────┐  │
│  │ Hook1 │   │ Hook2 │  │ Hook3 │  │ Hook4 │  │ Hook5 │  │
│  └────────┘   └────────┘  └────────┘  └────────┘  └───────┘  │
└─────────────────────────────────────────────────────────────┘
```

### Hook Types

| Phase | Hooks | Description |
|-------|-------|-------------|
| **Build** | `buildStart`, `buildEnd` | Build lifecycle |
| **Module** | `resolveId`, `load`, `transform` | Module processing |
| **Chunk** | `renderChunk`, `renderBundle` | Chunk generation |
| **Output** | `generateBundle`, `writeBundle` | File output |

### Plugin Compatibility

```
┌─────────────────────────────────────────────────────────────┐
│                  Plugin Compatibility                         │
│                                                             │
│  ┌──────────────────────────────────────────────────────┐   │
│  │              Rolldown Plugins (Native)                │   │
│  │                      ✓                               │   │
│  └──────────────────────────────────────────────────────┘   │
│  ┌──────────────────────────────────────────────────────┐   │
│  │              Unplugin Plugins (High)                   │   │
│  │                      ✓                               │   │
│  └──────────────────────────────────────────────────────┘   │
│  ┌──────────────────────────────────────────────────────┐   │
│  │              Rollup Plugins (High)                    │   │
│  │                   ✓ (with as any)                     │   │
│  └──────────────────────────────────────────────────────┘   │
│  ┌──────────────────────────────────────────────────────┐   │
│  │              Vite Plugins (Partial)                   │   │
│  │               ✓ (with as any)                        │   │
│  └──────────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────────┘
```

## Output Format Architecture

### Multi-format Generation

```
Source Code
     │
     ▼
┌───────────────┐
│   Rolldown    │
│    Engine     │
└───────┬───────┘
        │
        ├──▶ ESM (.mjs)
        │
        ├──▶ CJS (.cjs)
        │
        ├──▶ IIFE (.iife.js)
        │
        └──▶ UMD (.umd.js)
```

### Format Comparison

| Format | Module | Global | Browser | Node.js |
|--------|--------|--------|---------|---------|
| **ESM** | ✓ | ✗ | ✓ | ✓ |
| **CJS** | ✗ | ✗ | ✗ | ✓ |
| **IIFE** | ✗ | ✓ | ✓ | ✗ |
| **UMD** | ✓ | ✓ | ✓ | ✓ |

### Default Outputs

```typescript
export default defineConfig({
  entry: ['./src/index.ts'],
})
```

| Entry | ESM | CJS | DTS |
|-------|-----|-----|-----|
| `index.ts` | `index.mjs` | `index.cjs` | `index.d.ts` |

## Declaration Generation Architecture

### Two Paths

```
┌─────────────────────────────────────────────────────────────┐
│              DTS Generation Paths                             │
│                                                             │
│  Path 1: Fast (isolatedDeclarations)                         │
│  ┌─────────────────────────────────────────────────────┐    │
│  │  .ts files ──▶ oxc-transform ──▶ .d.ts               │    │
│  └─────────────────────────────────────────────────────┘    │
│                                                             │
│  Path 2: Compatible (default)                                │
│  ┌─────────────────────────────────────────────────────┐    │
│  │  .ts files ──▶ TypeScript Compiler ──▶ .d.ts        │    │
│  └─────────────────────────────────────────────────────┘    │
└─────────────────────────────────────────────────────────────┘
```

### Performance Comparison

| Path | Speed | Requirements |
|------|-------|-------------|
| **oxc-transform** | ~10x faster | `isolatedDeclarations: true` |
| **TypeScript** | Slower | None |

### Separate Builds

| Format | DTS Build | Method |
|--------|-----------|--------|
| **ESM** | Same build | Inline |
| **CJS** | Separate build | Standalone |

## Config Resolution

### Resolution Order

```
1. tsdown.config.ts       (highest priority)
2. tsdown.config.mts
3. --config CLI option
```

### Config Merging

```typescript
// tsdown.config.ts
export default defineConfig({
  entry: ['./src/index.ts'],
  // Default values auto-applied
})
```

### Default Values

| Option | Default |
|--------|---------|
| `format` | `['esm', 'cjs']` |
| `treeshake` | `true` |
| `dts` | Auto (if types in package.json) |

## Memory Management

### Build Memory

| Project Size | Memory Usage |
|--------------|--------------|
| Small (<100 files) | ~50MB |
| Medium (100-500 files) | ~150MB |
| Large (500+ files) | ~500MB+ |

### Optimization

- Lazy loading of plugins
- Incremental builds
- Worker thread isolation

## Summary

| Component | Description |
|-----------|-------------|
| **Build System** | Config → CLI → Rolldown → Output |
| **Plugin System** | Hook-based pipeline |
| **Output Formats** | ESM, CJS, IIFE, UMD |
| **DTS Generation** | oxc-transform (fast) or TSC |
| **Config Resolution** | File → CLI → Defaults |