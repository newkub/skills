# Quick Start

เริ่มต้นใช้งาน Bunup อย่างรวดเร็ว

## 1. Create a TypeScript File

```typescript
// src/index.ts
export function greet(name: string): string {
  return `Hello, ${name}!`;
}

export function add(a: number, b: number): number {
  return a + b;
}
```

## 2. Build with Bunup

```sh
# Basic build
bunx bunup

# Or with npx
npx bunup
```

Output:
```
✓ dist/index.js (ESM, 0.2KB)
✓ dist/index.d.ts (TypeScript)
```

## 3. Add Multiple Formats

```sh
# ESM + CJS
bunx bunup --format esm,cjs
```

Output:
```
✓ dist/index.js (ESM, 0.2KB)
✓ dist/index.cjs (CJS, 0.2KB)
✓ dist/index.d.ts (TypeScript)
```

## 4. Auto-generate Package Exports

```sh
bunx bunup --exports
```

## 5. Add to package.json

```json
{
  "name": "my-library",
  "type": "module",
  "scripts": {
    "build": "bunup",
    "dev": "bunup --watch"
  },
  "dependencies": {},
  "devDependencies": {
    "bunup": "^1.0.0"
  }
}
```

Then run:
```sh
bun run build
```

## Common Workflows

### Library with ESM and CJS

```typescript
// bunup.config.ts
import { defineConfig } from "bunup";

export default defineConfig({
  entry: "src/index.ts",
  format: ["esm", "cjs"],
  dts: true,
});
```

### React Component Library

```typescript
import { defineConfig } from "bunup";
import { copy } from "bunup/plugins";

export default defineConfig({
  entry: ["src/index.ts", "src/styles.ts"],
  format: ["esm", "cjs"],
  jsx: "react-jsx",
  plugins: [
    copy("README.md"),
    copy("dist/styles.css"),
  ],
});
```

### Monorepo Package

```typescript
// packages/my-lib/bunup.config.ts
export default defineConfig({
  entry: "src/index.ts",
  outDir: "../../dist/my-lib",
});
```

## Watch Mode

```sh
bunx bunup --watch
```

Or in package.json:
```json
{
  "scripts": {
    "dev": "bunup --watch"
  }
}
```

## Scaffold a New Library

```sh
bunx @bunup/cli@latest create
```

You'll be asked:
- Project name
- Template (Minimal or Full)
- TypeScript or JavaScript

Then start coding immediately!

## Next Steps

- See [Configuration](configuration.md) for advanced options
- See [Features](features.md) for all available features
- See [Best Practices](best-practices.md) for recommended patterns