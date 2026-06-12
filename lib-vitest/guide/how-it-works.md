# How It Works

## Purpose

อธิบายการทำงานภายในของ Vitest — Vite Integration, Watch Mode, Pool Workers

## Scope

- Vite Integration
- Test Running Flow
- Watch Mode
- Pool Workers
- File Watching

## Vite Integration

Vitest สร้างบน Vite โดยใช้ same transform pipeline:

```
┌─────────────────────────────────────────────────────────────┐
│                      Vite Dev Server                        │
│  ┌─────────────┐    ┌─────────────┐    ┌─────────────────┐  │
│  │   Server    │    │   Client    │    │   Vitest Worker │  │
│  │  (SSR/Prod) │    │   (Browser) │    │   (Testing)     │  │
│  └─────────────┘    └─────────────┘    └─────────────────┘  │
└─────────────────────────────────────────────────────────────┘
```

### Transform Pipeline

```
Source File (.ts/.tsx/.js)
         │
         ▼
┌──────────────────┐
│   esbuild        │  ← TypeScript → JavaScript
│   (transform)    │
└────────┬─────────┘
         │
         ▼
┌──────────────────┐
│   Vite Plugins   │  ← React/Vue/Svelte transforms
│   (custom)       │
└────────┬─────────┘
         │
         ▼
    Transformed Code
```

### Vite Config Sharing

Vitest อ่าน `vite.config.ts` อัตโนมัติ:

```typescript
// vite.config.ts
export default defineConfig({
  plugins: [vue()],
  resolve: { alias: { '@': '/src' } },
})
```

```typescript
// vitest.config.ts
import { defineConfig } from 'vitest/config'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],  // ใช้ plugins เดียวกับ Vite
  test: {
    environment: 'jsdom',
  },
})
```

## Test Running Flow

```
vitest run
     │
     ▼
┌─────────────────────────────────────────┐
│           Pool Manager                  │
│  ┌─────────┐  ┌─────────┐  ┌─────────┐  │
│  │ Worker  │  │ Worker  │  │ Worker  │  │
│  │    1    │  │    2    │  │    3    │  │
│  └────┬────┘  └────┬────┘  └────┬────┘  │
│       │            │            │        │
│       └────────────┼────────────┘        │
│                    ▼                     │
│           ┌──────────────┐               │
│           │  RPC Channel  │               │
│           │  (ipc main)  │               │
│           └──────────────┘               │
└─────────────────────────────────────────┘
                    │
                    ▼
            Test Results Report
```

### Steps

| Step | Description |
|------|-------------|
| **1. Discover** | ค้นหาไฟล์ที่ match pattern (`**/*.test.ts`) |
| **2. Transform** | Transform ด้วย esbuild + Vite plugins |
| **3. Preload** | Preload dependencies ก่อนรัน |
| **4. Execute** | รัน tests ใน worker pools |
| **5. Collect** | รวบรวม results จากทุก worker |
| **6. Report** | แสดงผลลัพธ์ตาม reporter |

## Watch Mode

Watch mode ใช้ Vite's file watcher + HMR:

```
┌────────────────────────────────────────────────────────────┐
│                      Watch Mode                            │
│                                                            │
│  File Change ──► Detect ──► Invalidate ──► Rerun          │
│                     │              │          │            │
│                     ▼              ▼          ▼            │
│              ┌────────────┐  ┌──────────┐ ┌────────┐        │
│              │ Chokidar   │  │  Vite    │ │Worker  │        │
│              │ (watcher)  │  │  HMR     │ │Pool    │        │
│              └────────────┘  └──────────┘ └────────┘        │
│                                                            │
└────────────────────────────────────────────────────────────┘
```

### Watch Mode Features

| Feature | Description |
|---------|-------------|
| **Smart Watch** | รันเฉพาะ tests ที่เกี่ยวข้องกับไฟล์ที่เปลี่ยน |
| **Rerun All** | กด `a` เพื่อรันทั้งหมด |
| **Focused Test** | กด `f` เพื่อรันเฉพาะ failed tests |
| **UI Mode** | กด `u` เพื่อดู coverage update |

### Watch Mode Commands

| Key | Command |
|-----|---------|
| `a` | Run all tests |
| `f` | Run failed tests only |
| `o` | Run tests related to changed files |
| `c` | Clear output |
| `q` | Quit |
| `u` | Update snapshots |

## Pool Workers

Vitest ใช้ worker pools เพื่อรัน tests ขนานกัน:

### Pool Types

| Pool | Description | Use Case |
|------|-------------|----------|
| `fork` | 1 worker ต่อ test file | Default, simple |
| `vmThreads` | Isolated VMs with threads | Fast, memory-intensive |
| `threads` | Workers in threads | Cross-platform |
| `forks` | Multiple fork workers | Best compatibility |

### Configuration

```typescript
// vitest.config.ts
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

### Memory Management

```
┌─────────────────────────────────────────────────────┐
│                  Memory Usage                       │
│                                                     │
│  Before:  Shared Memory (leaks accumulate)         │
│  After:   Per-Worker Memory (isolated)              │
│                                                     │
│  ┌─────────┐ ┌─────────┐ ┌─────────┐               │
│  │Worker 1 │ │Worker 2 │ │Worker 3 │               │
│  │  50MB   │ │  45MB   │ │  48MB   │               │
│  └─────────┘ └─────────┘ └─────────┘               │
│                                                     │
│  ✦ Worker dies → Memory freed                      │
│  ✦ No state leakage between tests                  │
└─────────────────────────────────────────────────────┘
```

## File Watching

Vitest ใช้ `chokidar` สำหรับ file watching:

```typescript
// vitest.config.ts
export default defineConfig({
  test: {
    watchExclude: [
      '**/node_modules/**',
      '**/dist/**',
      '**/.git/**',
    ],
  },
})
```

| Option | Description |
|--------|-------------|
| `include` | Glob patterns สำหรับ test files |
| `exclude` | Glob patterns ที่ exclude |
| `watchExclude` | Files ที่ไม่ watch |

## Summary

| Component | Description |
|-----------|-------------|
| **Vite Integration** | Transform pipeline + plugin system |
| **Pool Workers** | Parallel test execution |
| **Watch Mode** | HMR-style hot reload for tests |
| **File Watching** | Chokidar-based change detection |
| **RPC Channel** | Communication between main and workers |