# Features

ฟีเจอร์ทั้งหมดของ Bunup

## Core Features

### Blazing Fast Builds

- ใช้ Bun's native bundler ที่เขียนด้วย Zig
- Instant rebuilds แม้ใน monorepos
- เร็วกว่าเครื่องมืออื่น 3-9 เท่า

| Tool | Build Time | Relative Speed |
|------|------------|----------------|
| bunup | 0.37s | baseline |
| tsdown | 0.41s | 1.11x slower |
| rslib | 1.41s | 3.81x slower |
| unbuild | 3.19s | 8.62x slower |

### Multiple Output Formats

รองรับ ESM, CJS, และ IIFE:

```typescript
export default defineConfig({
  format: ["esm", "cjs"],  // Both formats
});
```

### TypeScript Declarations

สร้าง `.d.ts` อัตโนมัติ:

```typescript
export default defineConfig({
  dts: true,  // Generate .d.ts files
});
```

## Build Options

### Entry Points

```typescript
// Single entry
entry: "src/index.ts"

// Multiple entries
entry: ["src/index.ts", "src/cli.ts"]

// Glob patterns
entry: ["src/**/*.ts", "!src/**/*.test.ts"]
```

### Output Directory

```typescript
outDir: "dist"  // Default
outDir: "build" // Custom
```

### Target Environments

```typescript
target: "node"    // Node.js (default)
target: "browser" // Browsers
target: "bun"     // Bun runtime
```

## Minification

### Full Minification

```typescript
minify: true
```

### Granular Control

```typescript
minifyWhitespace: true
minifyIdentifiers: false
minifySyntax: true
```

## Source Maps

```typescript
sourcemap: "linked"   // Linked .map files
sourcemap: "inline"   // Inline in bundle
sourcemap: "external" // Separate files
```

## Environment Variables

```typescript
// Inline all
env: "inline"

// Disable inlining
env: "disable"

// Prefix filter
env: "PUBLIC_*"

// Explicit values
env: {
  API_URL: "https://api.example.com",
}
```

## Code Splitting

```typescript
// Enable for all formats
splitting: true

// Default for ESM
splitting: true  // ESM only
```

## JSX Support

```typescript
jsx: {
  runtime: "automatic", // or "classic"
  importSource: "react",
  factory: "h",
  fragment: "Fragment",
}
```

## Plugins

### Built-in Plugins

```typescript
import { copy } from "bunup/plugins";

// Copy files
plugins: [copy(["README.md", "assets/**/*"])]
```

### Plugin Options

```typescript
copy("assets/**/*").with({
  followSymlinks: true,
  excludeDotfiles: true,
  override: false,
  watchMode: "changed", // "always" | "skip"
})
```

## Package Exports

```typescript
exports: true  // Auto-generate package.json exports
```

### Export Options

```typescript
exports: {
  exclude: ["src/cli.ts"],
  excludeCli: true,
  excludeCss: true,
  includePackageJson: true,
  all: false,  // Wildcard export
}
```

## Workspaces Support

```typescript
// bunup.config.ts
export default defineConfig({
  // Works in monorepos automatically
  // Use --filter to build specific packages
});
```

### Filter Configurations

```typescript
// Build specific configs only
bunup --filter main,browser
```

## Advanced Options

### Define Constants

```typescript
define: {
  PACKAGE_VERSION: '"1.0.0"',
  DEBUG: "false",
}
```

### Banner and Footer

```typescript
banner: '"use client"',
footer: "// built with love",
```

### Drop Function Calls

```typescript
drop: ["console", "debugger"]
```

### Custom Loaders

```typescript
loader: {
  ".css": "text",
  ".txt": "file",
}
```

### Public Path

```typescript
publicPath: "https://cdn.example.com/"
```

### Source Base Directory

```typescript
sourceBase: "./src"  // Preserve directory structure
```