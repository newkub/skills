# Architecture

## Purpose

อธิบาย architecture และ design patterns ภายใน Vitest

## Scope

- System Architecture
- Pool System
- Watch Mode Architecture
- Coverage Engine

## System Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                    Vitest Architecture                       │
│                                                             │
│  ┌─────────────┐     ┌─────────────┐     ┌─────────────┐   │
│  │   Config    │────▶│    CLI      │────▶│   Pool      │   │
│  │  (vitest    │     │  (vitest)   │     │  Manager    │   │
│  │   config)   │     └─────────────┘     └──────┬──────┘   │
│  └─────────────┘                                 │          │
│                                                  ▼          │
│  ┌─────────────────────────────────────────────────────────┐│
│  │                    Worker Pool                          ││
│  │  ┌─────────┐  ┌─────────┐  ┌─────────┐  ┌─────────┐     ││
│  │  │ Worker  │  │ Worker  │  │ Worker  │  │ Worker  │     ││
│  │  │    1    │  │    2    │  │    3    │  │    N    │     ││
│  │  └─────────┘  └─────────┘  └─────────┘  └─────────┘     ││
│  └─────────────────────────────────────────────────────────┘│
│                          │                                   │
│                          ▼                                   │
│  ┌─────────────────────────────────────────────────────────┐│
│  │                   Reporters                              ││
│  │  ┌─────────┐  ┌─────────┐  ┌─────────┐                 ││
│  │  │  dot    │  │ verbose │  │  json   │                 ││
│  │  └─────────┘  └─────────┘  └─────────┘                 ││
│  └─────────────────────────────────────────────────────────┘│
└─────────────────────────────────────────────────────────────┘
```

| Component | Description |
|-----------|-------------|
| **Config** | อ่านและ merge config จาก vitest.config.ts |
| **CLI** | Parse arguments, สร้าง runner |
| **Pool Manager** | จัดการ worker pools |
| **Workers** | รัน tests ใน isolate processes |
| **Reporters** | แสดงผลลัพธ์ในรูปแบบต่างๆ |

## Pool System

### Pool Types

```
┌─────────────────────────────────────────────────────────────┐
│                    Pool Architecture                         │
│                                                             │
│  ┌─────────────────────────────────────────────────────┐   │
│  │                   Main Process                       │   │
│  │  - Test discovery                                    │   │
│  │  - Result aggregation                                │   │
│  │  - Reporter orchestration                            │   │
│  └─────────────────────────────────────────────────────┘   │
│                           │                                 │
│          ┌────────────────┼────────────────┐                │
│          ▼                ▼                ▼                 │
│    ┌──────────┐    ┌──────────┐    ┌──────────┐          │
│    │  Forks   │    │ Threads  │    │vmThreads │          │
│    │  Pool    │    │  Pool    │    │  Pool    │          │
│    └────┬─────┘    └────┬─────┘    └────┬─────┘          │
│         │                │                │                 │
│         ▼                ▼                ▼                 │
│    ┌────────┐      ┌────────┐      ┌────────┐           │
│    │ Child  │      │ Worker │      │  VM    │           │
│    │Process │      │Thread  │      │Context │           │
│    └────────┘      └────────┘      └────────┘           │
└─────────────────────────────────────────────────────────────┘
```

### Fork Pool

```typescript
export default defineConfig({
  test: {
    pool: 'forks',
    poolOptions: {
      forks: {
        singleFork: false,    // รันหลาย fork
        maxForks: 4,          // Max workers
        minForks: 1,          // Min workers
      },
    },
  },
})
```

| Option | Description |
|--------|-------------|
| `singleFork` | รันทุก test ใน fork เดียว |
| `maxForks` | Max fork workers |
| `minForks` | Min fork workers |

### Threads Pool

```typescript
export default defineConfig({
  test: {
    pool: 'threads',
    poolOptions: {
      threads: {
        singleThread: false,
        maxThreads: 4,
        minThreads: 2,
      },
    },
  },
})
```

### vmThreads Pool

```typescript
export default defineConfig({
  test: {
    pool: 'vmThreads',
    poolOptions: {
      vmThreads: {
        // Memory optimization
        memoryLimit: '2GB',
      },
    },
  },
})
```

## Watch Mode Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                   Watch Mode Flow                            │
│                                                             │
│  ┌──────────┐                                               │
│  │  Start   │──────┐                                        │
│  └──────────┘      │                                        │
│                    ▼                                        │
│  ┌──────────────────────────────────────────────────┐       │
│  │              Initial Test Run                     │       │
│  └──────────────────────────────────────────────────┘       │
│                    │                                        │
│                    ▼                                        │
│  ┌──────────────────────────────────────────────────┐       │
│  │            Enter Watch Loop                        │       │
│  └──────────────────────────────────────────────────┘       │
│                    │                                        │
│         ┌──────────┼──────────┐                              │
│         ▼          ▼          ▼                              │
│  ┌──────────┐ ┌──────────┐ ┌──────────┐                     │
│  │ File     │ │ User     │ │  Exit    │                     │
│  │ Change   │ │ Input    │ │ (q)      │                     │
│  └─────┬────┘ └────┬────┘ └────┬────┘                     │
│        │           │           │                            │
│        ▼           ▼           ▼                            │
│  ┌────────────────────────────────┐                         │
│  │     Rerun Affected Tests       │                         │
│  └────────────────────────────────┘                         │
│                    │                                        │
│                    └────────────────┘                        │
│                           │                                  │
└───────────────────────────────────────────────────────────────┘
```

### Watch Mode Commands

| Key | Action |
|-----|--------|
| `a` | รัน all tests |
| `f` | รัน failed tests |
| `o` | รัน tests ที่ related กับ changed files |
| `c` | clear output |
| `u` | update snapshots |
| `i` | update inline snapshots |
| `q` | quit |

## Coverage Engine

```
┌─────────────────────────────────────────────────────────────┐
│                Coverage Architecture                         │
│                                                             │
│  ┌───────────┐      ┌───────────┐      ┌───────────┐        │
│  │  Source   │─────▶│ Transform │─────▶│ Instrument│        │
│  │   Code    │      │   (esbuild)│      │  (v8/nyc) │        │
│  └───────────┘      └───────────┘      └─────┬─────┘        │
│                                              │               │
│                                              ▼               │
│  ┌──────────────────────────────────────────────────┐       │
│  │                  Execution                         │       │
│  │  ┌────────┐  ┌────────┐  ┌────────┐              │       │
│  │  │ Test 1 │  │ Test 2 │  │ Test N │              │       │
│  │  └────────┘  └────────┘  └────────┘              │       │
│  └──────────────────────────────────────────────────┘       │
│                           │                                 │
│                           ▼                                 │
│  ┌──────────────────────────────────────────────────┐       │
│  │              Coverage Report                       │       │
│  │  ┌────────┐  ┌────────┐  ┌────────┐               │       │
│  │  │  text  │  │   json  │  │  html  │               │       │
│  │  └────────┘  └────────┘  └────────┘               │       │
│  └──────────────────────────────────────────────────┘       │
└─────────────────────────────────────────────────────────────┘
```

### V8 vs Istanbul

| Provider | Description | Pros |
|----------|-------------|------|
| `v8` | V8 built-in | Fast, native |
| `istanbul` | nyc/istanbul | More detailed |

```typescript
export default defineConfig({
  test: {
    coverage: {
      provider: 'v8',  // หรือ 'istanbul'
      reporter: ['text', 'json', 'html'],
      thresholds: {
        lines: 80,
        functions: 80,
        branches: 80,
        statements: 80,
      },
    },
  },
})
```

## Summary

| Component | Key Points |
|-----------|------------|
| **Pool System** | fork, threads, vmThreads |
| **Watch Mode** | File watching + smart rerun |
| **Coverage** | v8 (fast) vs istanbul (detailed) |
| **Workers** | Isolated execution, memory-safe |