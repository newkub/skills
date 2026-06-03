# How It Works

## Purpose

อธิบายกลไกการทำงานภายในของ tsdown เพื่อให้เข้าใจว่า bundle ถูกสร้างอย่างไร

## Scope

- Build Pipeline
- Module Resolution
- DTS Generation
- Plugin System

## Build Pipeline

```
┌─────────────────────────────────────────────────────────────────────┐
│                      tsdown Build Pipeline                           │
├─────────────────────────────────────────────────────────────────────┤
│                                                                      │
│   1. Configuration                                                   │
│      tsdown.config.ts ──> TsdownOptions                             │
│              │                                                        │
│              ▼                                                        │
│   2. Entry Resolution                                               │
│      ./src/index.ts                                                 │
│              │                                                        │
│              ▼                                                        │
│   3. Module Graph Building (Rolldown)                               │
│      ┌─────────┐     ┌─────────┐     ┌─────────┐                    │
│      │  index  │ ──> │  utils  │ ──> │ helper  │                    │
│      └─────────┘     └─────────┘     └─────────┘                    │
│              │                                                        │
│              ▼                                                        │
│   4. Bundling                                                        │
│      Combine all modules into chunks                                │
│              │                                                        │
│              ▼                                                        │
│   5. Transform                                                       │
│      Apply plugins, transform code                                   │
│              │                                                        │
│              ▼                                                        │
│   6. Format Output                                                   │
│      ┌─────────┐  ┌─────────┐  ┌─────────┐                          │
│      │   .mjs  │  │   .cjs  │  │   .d.ts │                          │
│      └─────────┘  └─────────┘  └─────────┘                          │
│                                                                      │
└─────────────────────────────────────────────────────────────────────┘
```

## Module Resolution

### Resolution Flow

```
┌─────────────────────────────────────────────────────────────────────┐
│                    Module Resolution Flow                             │
├─────────────────────────────────────────────────────────────────────┤
│                                                                      │
│   Import Statement                                                   │
│   import { hello } from './hello'                                   │
│          │                                                           │
│          ▼                                                           │
│   ┌─────────────────────────────────────────────────────────────┐   │
│   │                    Resolver                                   │   │
│   │  ├── Relative: ./hello, ./hello.ts, ./hello.tsx             │   │
│   │  ├── Absolute: /path/to/file                                 │   │
│   │  ├── Alias: @/utils → ./src/utils                          │   │
│   │  └── Package: lodash → node_modules/lodash                  │   │
│   └─────────────────────────────────────────────────────────────┘   │
│          │                                                           │
│          ▼                                                           │
│   Resolved File                                                       │
│   ./src/hello.ts                                                     │
│                                                                      │
└─────────────────────────────────────────────────────────────────────┘
```

### Import Types

| Type | Example | Resolution |
|------|---------|------------|
| **Relative** | `./utils` | `.ts`, `.tsx`, `.js`, `.jsx` |
| **Absolute** | `/src/utils` | Path from root |
| **Package** | `lodash` | node_modules |
| **Alias** | `@/utils` | Configured path |

## Tree-shaking Process

```
┌─────────────────────────────────────────────────────────────────────┐
│                       Tree-shaking Process                            │
├─────────────────────────────────────────────────────────────────────┤
│                                                                      │
│   Source Code                                                        │
│   ┌─────────────────────────────────────────────────────────────┐   │
│   │ export function used() { return 1 }                         │   │
│   │ export function unused() { return 2 }                       │   │
│   └─────────────────────────────────────────────────────────────┘   │
│          │                                                           │
│          ▼                                                           │
│   ┌─────────────────────────────────────────────────────────────┐   │
│   │                    AST Analysis                             │   │
│   │  - Parse to AST                                              │   │
│   │  - Build dependency graph                                    │   │
│   │  - Mark reachable exports                                    │   │
│   └─────────────────────────────────────────────────────────────┘   │
│          │                                                           │
│          ▼                                                           │
│   ┌─────────────────────────────────────────────────────────────┐   │
│   │                    Dead Code Elimination                    │   │
│   │  - Remove unused() function                                  │   │
│   │  - Keep used() function                                      │   │
│   └─────────────────────────────────────────────────────────────┘   │
│          │                                                           │
│          ▼                                                           │
│   Output                                                             │
│   ┌─────────────────────────────────────────────────────────────┐   │
│   │ export function used() { return 1 }                        │   │
│   └─────────────────────────────────────────────────────────────┘   │
│                                                                      │
└─────────────────────────────────────────────────────────────────────┘
```

## DTS Generation

```
┌─────────────────────────────────────────────────────────────────────┐
│                       DTS Generation Flow                              │
├─────────────────────────────────────────────────────────────────────┤
│                                                                      │
│   Source Files (.ts)                                                 │
│        │                                                             │
│        ▼                                                             │
│   ┌─────────────────────────────────────────────────────────────┐   │
│   │                 TypeScript Compiler                          │   │
│   │  - Parse TypeScript AST                                       │   │
│   │  - Type checking (if enabled)                                 │   │
│   │  - Extract type information                                   │   │
│   └─────────────────────────────────────────────────────────────┘   │
│        │                                                             │
│        ▼                                                             │
│   ┌─────────────────────────────────────────────────────────────┐   │
│   │                rolldown-plugin-dts                           │   │
│   │  - Generate .d.ts from bundled modules                       │   │
│   │  - Handle re-exports                                          │   │
│   │  - Merge declarations                                        │   │
│   └─────────────────────────────────────────────────────────────┘   │
│        │                                                             │
│        ▼                                                             │
│   Declaration Files (.d.ts)                                          │
│                                                                      │
└─────────────────────────────────────────────────────────────────────┘
```

### DTS Options

```typescript
// tsdown.config.ts
export default defineConfig({
  dts: {
    sourcemap: true,  // Generate .d.ts.map
    // Or just boolean
    // dts: true
  },
})
```

## Plugin System

### Plugin Hooks

```
┌─────────────────────────────────────────────────────────────────────┐
│                         Plugin Hooks                                  │
├─────────────────────────────────────────────────────────────────────┤
│                                                                      │
│   buildStart ──> resolveId ──> load ──> transform                   │
│       │              │           │           │                      │
│       │              │           │           ▼                      │
│       │              │           │     renderChunk                  │
│       │              │           │           │                      │
│       │              │           ▼           ▼                      │
│       │              ▼     ┌─────────┐ ┌─────────┐                   │
│       │            resolve  │  load   │ │ render  │                   │
│       │            source   └─────────┘ └─────────┘                   │
│       │                  │           │           │                      │
│       ▼                  ▼           ▼           ▼                      │
│   ┌─────────────────────────────────────────────────────────────┐   │
│   │                   generateBundle                              │   │
│   │                        │                                      │   │
│   │                        ▼                                      │   │
│   │                     writeBundle                                │   │
│   │                        │                                      │   │
│   │                        ▼                                      │   │
│   │                      buildEnd                                  │   │
│   └─────────────────────────────────────────────────────────────┘   │
│                                                                      │
└─────────────────────────────────────────────────────────────────────┘
```

### Plugin Example

```typescript
import type { Plugin } from 'rollup'

function myPlugin(): Plugin {
  return {
    name: 'my-plugin',
    resolveId(source) {
      if (source === 'virtual-module') {
        return source
      }
      return null
    },
    load(id) {
      if (id === 'virtual-module') {
        return 'export const value = 42'
      }
    },
    transform(code, id) {
      // Transform code
      return code
    },
  }
}

// Usage
export default defineConfig({
  plugins: [myPlugin()],
})
```

## Watch Mode

```
┌─────────────────────────────────────────────────────────────────────┐
│                         Watch Mode Flow                               │
├─────────────────────────────────────────────────────────────────────┤
│                                                                      │
│   ┌─────────────┐                                                   │
│   │   Watcher   │ ◄────── File System Events                       │
│   └──────┬──────┘                                                   │
│          │                                                          │
│          ▼                                                          │
│   ┌─────────────────────────────────────────────────────────────┐   │
│   │                    Change Detection                         │   │
│   │  - Compare file hashes                                       │   │
│   │  - Determine affected modules                                │   │
│   │  - Calculate rebuild scope                                   │   │
│   └─────────────────────────────────────────────────────────────┘   │
│          │                                                          │
│          ▼                                                          │
│   ┌─────────────────────────────────────────────────────────────┐   │
│   │                    Incremental Build                         │   │
│   │  - Rebuild only affected modules                             │   │
│   │  - Update affected bundles                                   │   │
│   │  - Emit only changed outputs                                 │   │
│   └─────────────────────────────────────────────────────────────┘   │
│          │                                                          │
│          ▼                                                          │
│   ┌─────────────────────────────────────────────────────────────┐   │
│   │                    Emit Events                              │   │
│   │  - 'change' - file changed                                   │   │
│   │  - 'restart' - rebuild triggered                            │   │
│   │  - 'close' - watcher closed                                  │   │
│   └─────────────────────────────────────────────────────────────┘   │
│                                                                      │
└─────────────────────────────────────────────────────────────────────┘
```

## Summary

| Process | Description |
|---------|-------------|
| **Configuration** | Parse tsdown.config.ts |
| **Resolution** | Resolve module imports |
| **Bundling** | Combine modules with Rolldown |
| **Transform** | Apply plugins |
| **Output** | Generate ESM, CJS, DTS |

## Next Steps

| File | Description |
|------|-------------|
| [features.md](features.md) | Features ทั้งหมด |
| [configuration.md](configuration.md) | การตั้งค่าเพิ่มเติม |
| [installation.md](installation.md) | การติดตั้ง |