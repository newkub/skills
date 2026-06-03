# How It Works

## Architecture Overview

Turborepo ทำงานเป็น CLI tool ที่อ่าน config จาก `turbo.json` และ orchestrate tasks ตาม task graph

```
┌─────────────────────────────────────────────────────────────────┐
│                     Turborepo Architecture                      │
├─────────────────────────────────────────────────────────────────┤
│                                                                  │
│  ┌──────────────┐                                               │
│  │   turbo.json  │                                               │
│  │   (Config)    │                                               │
│  └──────┬───────┘                                               │
│         │                                                       │
│         ▼                                                       │
│  ┌──────────────────────────────────────────────────────────┐  │
│  │                    Task Scheduler                          │  │
│  │  ┌────────────┐  ┌────────────┐  ┌────────────┐           │  │
│  │  │  Parser     │  │  Resolver  │  │  Executor  │           │  │
│  │  │  (config)   │  │  (deps)    │  │  (run)     │           │  │
│  │  └────────────┘  └────────────┘  └────────────┘           │  │
│  └──────────────────────────────────────────────────────────┘  │
│                            │                                    │
│         ┌──────────────────┼──────────────────┐                 │
│         ▼                  ▼                  ▼                  │
│  ┌─────────────┐   ┌─────────────┐   ┌─────────────┐            │
│  │Local Cache  │   │Remote Cache │   │Package Graph│            │
│  │  .turbo/   │   │   Vercel    │   │  (tasks)    │            │
│  │   cache    │   │   (share)   │   │             │            │
│  └─────────────┘   └─────────────┘   └─────────────┘            │
│                                                                  │
└─────────────────────────────────────────────────────────────────┘
```

## Task Execution Flow

```
┌──────────────────────────────────────────────────────────────────┐
│                      Task Execution Flow                          │
├──────────────────────────────────────────────────────────────────┤
│                                                                   │
│  1. Parse Config                                                  │
│  ┌─────────────────┐                                             │
│  │  Read turbo.json │                                             │
│  └────────┬────────┘                                             │
│           │                                                        │
│           ▼                                                        │
│  2. Build Task Graph                                               │
│  ┌─────────────────┐                                             │
│  │  Discover tasks  │                                             │
│  │  from package.json│                                            │
│  └────────┬────────┘                                             │
│           │                                                        │
│           ▼                                                        │
│  3. Calculate Hashes                                              │
│  ┌──────────────────────────────────────┐                         │
│  │  inputs → hash (cache key)           │                         │
│  │  package.json + turbo.json + files    │                         │
│  └────────┬─────────────────────────────┘                         │
│           │                                                        │
│           ▼                                                        │
│  4. Check Cache                                                   │
│  ┌──────────────────────────────────────┐                         │
│  │  Local → Remote (if enabled)         │                         │
│  │  Cache Hit? Skip execution            │                         │
│  │  Cache Miss? Run task                 │                         │
│  └────────┬─────────────────────────────┘                         │
│           │                                                        │
│           ▼                                                        │
│  5. Execute Tasks                                                 │
│  ┌──────────────────────────────────────┐                         │
│  │  Run tasks respecting dependencies   │                         │
│  │  Parallel where possible              │                         │
│  └────────┬─────────────────────────────┘                         │
│           │                                                        │
│           ▼                                                        │
│  6. Store Results                                                 │
│  ┌──────────────────────────────────────┐                         │
│  │  Save outputs + logs to cache        │                         │
│  │  Upload to Remote Cache (if enabled) │                         │
│  └──────────────────────────────────────┘                         │
│                                                                   │
└──────────────────────────────────────────────────────────────────┘
```

## Hash Calculation

Hash สำหรับ cache key คำนวณจาก:

| Component | รายละเอียด |
|-----------|------------|
| **Root inputs** | `globalDependencies` files |
| **Task inputs** | `inputs` globs + source files |
| **Env vars** | `env`, `globalEnv` values |
| **Package manager** | Lockfile, `packageManager` field |
| **Framework** | Auto-detected framework settings |

## Remote Cache Flow

```
┌────────────────────────────────────────────────────────────────┐
│                    Remote Cache Flow                            │
├────────────────────────────────────────────────────────────────┤
│                                                                 │
│   Developer A                    Vercel Cache                   │
│   ┌─────────────┐                ┌─────────────────┐           │
│   │  turbo run  │───upload───→   │  Store hash     │           │
│   │   build     │                │  + artifacts   │           │
│   └─────────────┘                └─────────────────┘           │
│                                          ▲                      │
│                                          │                      │
│                                          │ download             │
│                                          │                      │
│   Developer B                    CI Server                      │
│   ┌─────────────┐                ┌─────────────────┐           │
│   │  turbo run  │───download──→  │  Fetch hash     │           │
│   │   build     │←─────────────  │  + artifacts   │           │
│   └─────────────┘                └─────────────────┘           │
│                                                                 │
└────────────────────────────────────────────────────────────────┘
```

## Concurrent Execution

Turborepo รัน tasks แบบ parallel โดยคำนึงถึง:

1. **Dependencies**: Task รอ dependencies ก่อน
2. **Concurrency limit**: Default 10 tasks พร้อมกัน
3. **Package graph**: Topological sort สำหรับ execution order

```bash
# Limit concurrent tasks
turbo run build --concurrency=5

# Force serial execution
turbo run build --concurrency=1
```