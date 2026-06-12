# Architecture

## Purpose

อธิบาย architecture ของ Nitro server framework โครงสร้างภายใน และ design decisions

## Scope

- System Architecture
- Module Structure
- Data Flow
- Build Architecture

## System Architecture

Nitro ถูกออกแบบเป็น layered architecture ที่แยก concerns ออกจากกันชัดเจน

```
+--------------------------------------------------+
|                  Application Layer                |
|  (Routes, Middleware, Plugins, Tasks)             |
+--------------------------------------------------+
|                  Framework Layer                  |
|  (H3 HTTP, Auto-imports, Filesystem Routing)      |
+--------------------------------------------------+
|                  Runtime Layer                    |
|  (Server Entry, Event System, Storage, Cache)     |
+--------------------------------------------------+
|                  Build Layer                      |
|  (Rolldown, Presets, Code-splitting)              |
+--------------------------------------------------+
|                  Platform Layer                   |
|  (Node.js, Bun, Deno, Cloudflare, Vercel)        |
+--------------------------------------------------+
```

### Layer Responsibilities

| Layer | Responsibility |
|-------|---------------|
| Application | Business logic, routes, middleware |
| Framework | HTTP handling, routing, auto-imports |
| Runtime | Server lifecycle, storage, caching |
| Build | Bundle, optimize, adapt to platform |
| Platform | Execution environment, deployment |

## Module Structure

Nitro ประกอบด้วย modules หลักๆ ดังนี้

```
nitro/
├── core/              # Core framework logic
│   ├── router         # Compiled routing
│   ├── handlers       # Request handlers
│   └── plugins        # Plugin system
├── runtime/           # Runtime utilities
│   ├── storage        # KV storage layer
│   ├── cache          # Response caching
│   ├── database       # SQL database layer
│   └── config         # Runtime config
├── build/             # Build system
│   ├── scanner        # File scanner
│   ├── bundler        # Rolldown bundler
│   └── presets        # Platform adapters
└── vite/              # Vite integration
    └── plugin         # Vite plugin
```

### Core Modules

| Module | Package | Description |
|--------|---------|-------------|
| H3 | `h3` | HTTP framework (Web Standards) |
| Router | Built-in | Compiled filesystem router |
| Storage | `unstorage` | Universal KV storage |
| Cache | `ocache` | Response caching layer |
| Database | `db0` | Lightweight SQL layer |

## Data Flow

### Request Flow

```
Client --> Server Entry --> Middleware 1 --> Middleware 2
                                               |
Client <-- Response     <-- Handler     <-- Route Match
```

### Storage Flow

```
Handler --> useStorage() --> Storage Driver --> Backend
                              |
                    +---------+---------+
                    |         |         |
                 Memory   Filesystem   Redis
```

### Cache Flow

```
Request --> Cache Check --> Hit? --> Return Cached
                |
               Miss --> Handler --> Store in Cache --> Return
```

## Build Architecture

### Build Phases

| Phase | Description | Output |
|-------|-------------|--------|
| Scan | ค้นหา routes, middleware, plugins | Route manifest |
| Transform | Compile TypeScript, resolve imports | Transpiled code |
| Bundle | Rolldown bundling + tree-shaking | Optimized chunks |
| Adapt | Apply preset-specific transforms | Platform bundle |
| Emit | Write output files | `.output/` directory |

### Output Structure

```
.output/
├── server/
│   ├── index.mjs       # Server entry
│   ├── chunks/         # Code-split chunks
│   └── assets/         # Server assets
├── public/             # Static assets
└── nitro.json          # Build metadata
```

## Design Decisions

| Decision | Rationale |
|----------|-----------|
| Compiled routing | ไม่ต้อง runtime router = เร็วขึ้น |
| Auto-imports | ลด boilerplate code |
| Web Standards | ใช้ Request/Response API มาตรฐาน |
| Preset system | Deploy ที่ไหนก็ได้ด้วย config เดียว |
| Code-splitting | แต่ละ route แยก chunk = เร็วขึ้น |