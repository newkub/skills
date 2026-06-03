# Configuration

การตั้งค่า Bunup ด้วย bunup.config.ts

## Basic Config

```typescript
// bunup.config.ts
import { defineConfig } from "bunup";

export default defineConfig({
  // Entry points
  entry: "src/index.ts",
  
  // Output directory
  outDir: "dist",
  
  // Formats
  format: ["esm", "cjs"],
  
  // Generate type declarations
  dts: true,
});
```

## Multiple Configurations

```typescript
// bunup.config.ts
export default defineConfig([
  {
    entry: "src/index.ts",
    name: "node",
    format: "esm",
    target: "node",
  },
  {
    entry: "src/browser.ts",
    name: "browser",
    format: ["esm", "iife"],
    target: "browser",
    outDir: "dist/browser",
  },
]);
```

## CLI vs Config

| Option | CLI | Config |
|--------|-----|--------|
| Entry | `bunup src/index.ts` | `entry: "src/index.ts"` |
| Out Dir | `bunup --out-dir build` | `outDir: "build"` |
| Format | `bunup --format esm,cjs` | `format: ["esm", "cjs"]` |
| Target | `bunup -t browser` | `target: "browser"` |

## Common Options

### Entry Points

```typescript
// Single entry
entry: "src/index.ts"

// Multiple entries
entry: ["src/index.ts", "src/cli.ts"]

// Glob patterns
entry: ["src/**/*.ts", "!src/**/*.test.ts"]
```

### Output Settings

```typescript
outDir: "dist",           // Output directory
clean: true,              // Clean before build (default: true)
format: ["esm", "cjs"],   // Output formats
```

### TypeScript Declarations

```typescript
dts: true,  // Enable (default: true)

// Or with options
dts: {
  splitting: true,    // Split declarations
  minify: false,       // Minify declarations
  resolve: true,       // Resolve external types
  inferTypes: false,   // Use tsc for inference
}
```

### Minification

```typescript
// Full minification
minify: true

// Granular
minifyWhitespace: true
minifyIdentifiers: false
minifySyntax: true
```

### Code Splitting

```typescript
splitting: true  // Enable (default for ESM)
```

### Source Maps

```typescript
sourcemap: "linked"   // "none" | "linked" | "inline" | "external"
```

## Environment Variables

```typescript
// Inline all
env: "inline"

// Disable
env: "disable"

// Prefix filter
env: "PUBLIC_*"

// Explicit
env: {
  API_URL: "https://api.example.com",
}
```

## Plugins

```typescript
import { copy } from "bunup/plugins";

plugins: [
  copy(["README.md", "assets/**/*"]),
]
```

## Advanced Options

### Define Constants

```typescript
define: {
  VERSION: '"1.0.0"',
}
```

### Banner/Footer

```typescript
banner: '"use client"',
footer: "// built with bunup",
```

### Drop Calls

```typescript
drop: ["console", "debugger"]
```

### JSX

```typescript
jsx: {
  runtime: "automatic",
  importSource: "react",
}
```

### Package Management

```typescript
packages: "external"  // "bundle" | "external"
external: ["lodash"]
noExternal: ["react"]
```

## Filtering Configurations

```typescript
// bunup.config.ts
export default defineConfig([
  { name: "main", entry: "src/index.ts" },
  { name: "cli", entry: "src/cli.ts" },
]);

// CLI
bunup --filter main
```

## Custom Config Path

```typescript
bunup --config ./configs/build.ts
bunup -c ./configs/build.ts
```