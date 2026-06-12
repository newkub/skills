# How It Works

อธิบายวิธีการทำงานของ Bunup ภายใน

## Build Pipeline

```
┌─────────────────────────────────────────────────────────────────┐
│                        BUNUP BUILD PIPELINE                     │
└─────────────────────────────────────────────────────────────────┘

Source Files          Processing              Output
─────────────         ───────────             ──────
                                                           
  src/index.ts ──┬── Entry Resolution ──► Bundle Graph        
                 │                                 │          
  src/utils.ts ──┤── Dependency Analysis ─► Tree Shaking      
                 │                                 │          
  src/types.ts ──┤── Module Resolution ────► Code Splitting    
                 │                                 │          
  .d.ts files ───┤── Type Declaration ─────► Type Output      
                 │                                 │          
config/plugins ──┴── Plugin Execution ─────► Final Output     
```

## Step-by-Step Process

### 1. Entry Point Resolution

Bunup ค้นหา entry points ตามลำดับ:

1. ตรวจสอบ CLI arguments หรือ config file
2. ถ้าไม่มี ใช้ default patterns: `index.ts`, `src/index.ts`, etc.
3. รองรับ glob patterns เช่น `src/**/*.ts`

### 2. Dependency Analysis

```ansi
[32mAnalyzing dependencies...[39m

  ✓ Resolving imports...
  ✓ Building module graph...
  ✓ Detecting external packages...
```

Bunup ใช้ Bun's bundler เพื่อวิเคราะห์ module dependencies

### 3. Tree Shaking

```ansi
[32mOptimizing bundle...[39m

  ✓ Removing unused exports
  ✓ Flattening module structure
  ✓ Dead code elimination
```

Bunup ตัดโค้ดที่ไม่ได้ใช้ออกโดยอัตโนมัติ

### 4. Format Generation

```ansi
[32mGenerating output formats...[39m

  ✓ dist/index.js      (ESM, 2.3KB)
  ✓ dist/index.cjs     (CJS, 2.5KB)  
  ✓ dist/index.d.ts    (TypeScript)
```

### 5. TypeScript Declarations

```ansi
[32mGenerating type declarations...[39m

  ✓ dist/index.d.ts    (isolated mode, 1.2KB)
  ✓ dist/shared.d.ts   (shared types, 0.8KB)
```

## Configuration Flow

```
┌──────────────┐
│  bunup.config.ts  │
└───────┬──────┘
        │
        ▼
┌──────────────────────────────────────────────────┐
│              Configuration Merging               │
├──────────────────────────────────────────────────┤
│  CLI Flags  →  Config File  →  Defaults          │
└──────────────────────────────────────────────────┘
        │
        ▼
┌──────────────────────────────────────────────────┐
│              Build Options Object                │
├──────────────────────────────────────────────────┤
│  entry, format, outDir, target, plugins, dts...  │
└──────────────────────────────────────────────────┘
        │
        ▼
┌──────────────────────────────────────────────────┐
│              Bun Bundler Execution               │
└──────────────────────────────────────────────────┘
```

## Watch Mode

```
┌─────────────────────────────────────────────────────┐
│                    WATCH MODE                       │
└─────────────────────────────────────────────────────┘

  File Change ──► Debounce ──► Rebuild ──► Output
      ▲                              │
      │                              │
      └──────────────────────────────┘
                    (loop)
```

### Watch Mode Options

```typescript
// เฉพาะ rebuild ไฟล์ที่เปลี่ยน (default)
watchMode: "changed"

// rebuild ทุกไฟล์
watchMode: "always"

// ข้ามการ copy
watchMode: "skip"
```

## Plugin System

```
┌─────────────────────────────────────────────────────┐
│                   PLUGIN PIPELINE                   │
└─────────────────────────────────────────────────────┘

  Input Files ──► Pre-process ──► Bundle ──► Post-process ──► Output
                      │                         │
                      ▼                         ▼
              ┌────────────────┐        ┌────────────────┐
              │   Plugins      │        │   Plugins      │
              │  (transform)   │        │  (copy, etc.)  │
              └────────────────┘        └────────────────┘
```

### Built-in Plugins

| Plugin | หน้าที่ |
|--------|--------|
| `copy` | คัดลอกไฟล์และโฟลเดอร์ไปยัง output |
| `tailwindcss` | รวม Tailwind CSS เข้ากับ bundle |

### Plugin API

```typescript
interface BunupPlugin {
  name: string;
  setup: (builder: BunupBuilder) => void | Promise<void>;
}
```

## Performance Optimizations

### Caching

Bunup ใช้ Bun's caching system เพื่อเร่งการ build ซ้ำ:

```ansi
[2m[cache hit]──────────────────────────────────[22m
     dist/index.js  →  no rebuild needed
     
[cache miss]───────────────────────────────────
     src/index.ts   →  rebuilding...
```

### Incremental Builds

เฉพาะไฟล์ที่เปลี่ยนเท่านั้นที่ถูก rebuild:

```
Before:  src/**/*.ts  →  150 files rebuilt
After:   src/index.ts  →  1 file rebuilt
```

### TypeScript Compilation

ใช้ `isolatedDeclarations` เพื่อ parallel processing:

```
┌──────────┐  ┌──────────┐  ┌──────────┐
│ index.ts │  │ utils.ts │  │ types.ts │  ← Process simultaneously
└──────────┘  └──────────┘  └──────────┘
      │              │              │
      ▼              ▼              ▼
  index.d.ts     utils.d.ts     types.d.ts
```