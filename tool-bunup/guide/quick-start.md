# Quick Start

## Create a Library

### Step 1: Scaffold

```bash
bunx @bunup/cli@latest create
```

### Step 2: Write Code

```typescript
// src/index.ts
export function greet(name: string): string {
  return `Hello, ${name}!`;
}

export const version = "1.0.0";
```

### Step 3: Build

```bash
bunx bunup
```

### Output

```
dist/
├── index.js      # ESM bundle
├── index.d.ts    # Type declarations
└── index.js.map  # Source map
```

## Common Build Commands

### Basic Build

```bash
bunx bunup
```

### Multiple Formats

```bash
bunx bunup --format esm,cjs
```

### With Type Declarations

```bash
bunx bunup --dts
```

### Watch Mode

```bash
bunx bunup --watch
```

## Configuration

### bunup.config.ts

```typescript
import { defineConfig } from 'bunup';

export default defineConfig({
  entry: './src/index.ts',
  formats: ['esm', 'cjs'],
  dts: true,
  minify: true,
});
```

### bunfig.toml (Bun)

```toml
[install]
peer = true
```

## Package.json Scripts

```json
{
  "scripts": {
    "build": "bunup",
    "build:watch": "bunup --watch",
    "build:esm": "bunup --format esm",
    "build:cjs": "bunup --format cjs"
  }
}
```

## Examples

### Basic TypeScript

```bash
# Create
mkdir my-lib && cd my-lib
bunx @bunup/cli@latest create

# Build
bunx bunup
```

### React Component

```bash
# Create React library
bunx @bunup/cli@latest create --template react

# Build
bunx bunup
```

### Monorepo

```bash
# Navigate to workspace package
cd packages/my-package

# Build with workspace config
bunx bunup
```

## Next Steps

- ดู [key-concept.md](key-concept.md) สำหรับแนวคิดหลัก
- ดู [all-features.md](all-features.md) สำหรับ features ทั้งหมด
- ดู [configuration.md](configuration.md) สำหรับการตั้งค่า