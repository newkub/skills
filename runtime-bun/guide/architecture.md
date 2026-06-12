# Architecture

## ภาพรวม

Bun ถูกออกแบบมาเพื่อความเร็วและความสะดวก โดยใช้ Zig ในการพัฒนาและใช้ JavaScriptCore engine

## สถาปัตยกรรมระดับสูง

```
┌─────────────────────────────────────────────────────────────┐
│                      User Applications                       │
│  (JavaScript/TypeScript/JSX/TSX)                             │
└─────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────┐
│                    Bun Runtime Interface                     │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐      │
│  │  CLI Tools   │  │   Bundler    │  │ Test Runner  │      │
│  └──────────────┘  └──────────────┘  └──────────────┘      │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐      │
│  │ Package Mgr  │  │ File Server  │  │   Server     │      │
│  └──────────────┘  └──────────────┘  └──────────────┘      │
└─────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────┐
│                  JavaScript/TypeScript Engine               │
│                    (JavaScriptCore)                          │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐      │
│  │   Parser     │  │  Compiler    │  │  Interpreter │      │
│  └──────────────┘  └──────────────┘  └──────────────┘      │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐      │
│  │   JIT        │  │   GC         │  │  Optimizer   │      │
│  └──────────────┘  └──────────────┘  └──────────────┘      │
└─────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────┐
│                    Bun Core Layer                           │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐      │
│  │   I/O APIs   │  │   Network    │  │  File System │      │
│  └──────────────┘  └──────────────┘  └──────────────┘      │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐      │
│  │  HTTP/HTTPS  │  │   WebSocket  │  │   Streams    │      │
│  └──────────────┘  └──────────────┘  └──────────────┘      │
└─────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────┐
│                    System Layer                             │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐      │
│  │   libuv      │  │   zlib       │  │   crypto     │      │
│  └──────────────┘  └──────────────┘  └──────────────┘      │
└─────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────┐
│                  Operating System                            │
│  (Windows, Linux, macOS)                                    │
└─────────────────────────────────────────────────────────────┘
```

## ส่วนประกอบหลัก

### 1. JavaScriptCore Engine

Bun ใช้ JavaScriptCore จาก WebKit แทน V8:

**ข้อดี:**
- เร็วกว่าในบางกรณี
- Memory footprint น้อยกว่า
- Startup time เร็วกว่า

**การทำงาน:**
```
Source Code → Parser → AST → Bytecode → JIT → Native Code
```

### 2. Zig Implementation

Bun เขียนด้วย Zig ซึ่งให้:

- **Low-level control**: ควบคุม memory และ performance ได้ดี
- **Zero-cost abstractions**: Abstractions ที่ไม่มี overhead
- **Safety**: Memory safety โดย default
- **Performance**: Performance สูงเหมือน C/C++

### 3. All-in-One Design

Bun รวมทุกอย่างไว้ใน binary เดียว:

```
Bun Binary
├── Runtime
├── Package Manager
├── Bundler
├── Test Runner
├── File Server
└── CLI Tools
```

### 4. Zero-Copy I/O

Bun ใช้ zero-copy I/O เพื่อลด overhead:

```
Traditional I/O:
Disk → Buffer A → Buffer B → Application

Zero-Copy I/O:
Disk → Application (Direct)
```

### 5. Parallel Operations

Bun ใช้ parallel operations เมื่อเป็นไปได้:

```
Package Installation:
Package A ────┐
Package B ────┼──→ Parallel Download
Package C ────┤
Package D ────┘
```

## สถาปัตยกรรม Package Manager

### Dependency Resolution

```
package.json
     │
     ▼
┌─────────────┐
│  Parse      │ (Read dependencies)
└──────┬──────┘
       │
       ▼
┌─────────────┐
│  Resolve    │ (Resolve versions)
└──────┬──────┘
       │
       ▼
┌─────────────┐
│  Lockfile   │ (bun.lockb)
└──────┬──────┘
       │
       ▼
┌─────────────┐
│  Download   │ (Parallel)
└──────┬──────┘
       │
       ▼
┌─────────────┐
│  Install    │ (node_modules)
└─────────────┘
```

### Caching Strategy

```
Cache Lookup:
┌─────────────┐
│  Request    │
└──────┬──────┘
       │
       ▼
┌─────────────┐
│  Check Cache│
└──────┬──────┘
       │
       ├─ Hit → Return from cache
       │
       └─ Miss → Download → Cache → Return
```

## สถาปัตยกรรม Bundler

### Bundling Process

```
Entry Point
     │
     ▼
┌─────────────┐
│  Analyze    │ (Find dependencies)
└──────┬──────┘
       │
       ▼
┌─────────────┐
│  Transform  │ (TS → JS, JSX → JS)
└──────┬──────┘
       │
       ▼
┌─────────────┐
│  Optimize   │ (Tree shaking, minification)
└──────┬──────┘
       │
       ▼
┌─────────────┐
│  Bundle     │ (Single file)
└──────┬──────┘
       │
       ▼
┌─────────────┐
│  Output     │ (dist/)
└─────────────┘
```

## สถาปัตยกรรม Test Runner

### Test Execution

```
Test Files
     │
     ▼
┌─────────────┐
│  Collect    │ (Find test files)
└──────┬──────┘
       │
       ▼
┌─────────────┐
│  Execute    │ (Run tests)
└──────┬──────┘
       │
       ▼
┌─────────────┐
│  Report     │ (Results)
└─────────────┘
```

## สถาปัตยกรรม Server

### HTTP Server

```
Request
     │
     ▼
┌─────────────┐
│  Parse      │ (HTTP headers)
└──────┬──────┘
       │
       ▼
┌─────────────┐
│  Route      │ (Match route)
└──────┬──────┘
       │
       ▼
┌─────────────┐
│  Handler    │ (Execute handler)
└──────┬──────┘
       │
       ▼
┌─────────────┐
│  Response   │ (Send response)
└─────────────┘
```

## Performance Optimization

### 1. Startup Time

- **Minimal initialization**: โหลดเฉพาะที่จำเป็น
- **Lazy loading**: โหลด modules เมื่อต้องการ
- **Binary size**: Optimized binary size

### 2. Runtime Performance

- **JIT compilation**: Compile เป็น native code
- **Inline caching**: Cache ผลลัพธ์
- **Optimized algorithms**: Algorithms ที่เร็ว

### 3. Memory Efficiency

- **Efficient GC**: Garbage collection ที่ดี
- **Memory pooling**: Reuse memory
- **Zero-copy**: ลด memory copy

## สรุป

สถาปัตยกรรมของ Bun ถูกออกแบบมาเพื่อ:
- **ความเร็ว**: เร็วกว่า Node.js ในหลายด้าน
- **ความสะดวก**: All-in-one solution
- **ความเข้ากันได้**: Compatible กับ Node.js
- **ความปลอดภัย**: Memory safety ด้วย Zig
