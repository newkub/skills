# Best Practices

แนวปฏิบัติที่ดีที่สุดสำหรับการใช้ Bunup

## Project Structure

```
my-library/
├── src/
│   ├── index.ts        # Main entry
│   ├── utils.ts        # Utilities
│   └── types.ts        # Types
├── dist/               # Build output (gitignore)
├── package.json
├── tsconfig.json
└── bunup.config.ts
```

## Use Explicit Return Types

เปิดใช้ `isolatedDeclarations` เพื่อ build เร็วขึ้น:

```typescript
// ✅ Good - explicit return type
export function getData(): Promise<User[]> {
  return fetch("/api/users");
}

// ❌ Bad - inferred return type
export function getData() {
  return fetch("/api/users");
}
```

## tsconfig.json

```json
{
  "compilerOptions": {
    "target": "ES2022",
    "module": "ESNext",
    "declaration": true,
    "isolatedDeclarations": true,
    "strict": true,
    "moduleResolution": "bundler"
  }
}
```

## Single Responsibility

แยก entry points ตามหน้าที่:

```typescript
// bunup.config.ts
export default defineConfig([
  {
    entry: "src/index.ts",
    name: "main",
    format: ["esm", "cjs"],
  },
  {
    entry: "src/cli.ts",
    name: "cli",
    format: "esm",
  },
]);
```

## External Dependencies

```typescript
// ✅ Good - declare external dependencies
export default defineConfig({
  external: ["react", "react-dom"],
});

// ✅ Better - use peerDependencies for libs
peerDependencies: {
  "react": ">=17.0.0"
}
```

## Environment Variables

```typescript
// ✅ Development
FOO=bar bunup --env inline

// ✅ Production
NODE_ENV=production bunup --env disable

// ✅ Selective
PUBLIC_API_URL=https://api.example.com bunup --env PUBLIC_
```

## Use Plugins Wisely

```typescript
import { copy } from "bunup/plugins";

export default defineConfig({
  plugins: [
    // Copy static assets
    copy("README.md"),
    copy("assets/**/*").to("static"),
  ],
});
```

## Watch Mode for Development

```json
{
  "scripts": {
    "dev": "bunup --watch",
    "build": "bunup",
    "build:watch": "bunup --watch"
  }
}
```

## Build Scripts

```json
{
  "scripts": {
    "build": "bunup",
    "build:watch": "bunup --watch",
    "type-check": "tsc --noEmit",
    "lint": "biome check .",
    "lint:fix": "biome check --write .",
    "test": "bun test"
  }
}
```

## CI/CD Integration

```yaml
# .github/workflows/ci.yml
name: CI
on: [push, pull_request]
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: oven-sh/setup-bun@v2
      - run: bun install
      - run: bun run type-check
      - run: bun run lint
      - run: bun run test
      - run: bun run build
```

## Version Management

```typescript
// bunup.config.ts
import { defineConfig } from "bunup";
import packageJson from "./package.json" assert { type: "json" };

export default defineConfig({
  define: {
    PACKAGE_VERSION: JSON.stringify(packageJson.version),
  },
});
```

## Performance Tips

1. **Use isolated declarations** - 50-100x faster builds
2. **Limit entry points** - Fewer entries = faster builds
3. **Use external for large deps** - Keep bundles small
4. **Disable dts when not needed** - `--no-dts`
5. **Use --filter for monorepos** - Build only what changed

## Common Patterns

### Library with React

```typescript
export default defineConfig({
  entry: "src/index.ts",
  format: ["esm", "cjs"],
  jsx: {
    runtime: "automatic",
    importSource: "react",
  },
  external: ["react", "react-dom"],
});
```

### CLI Tool

```typescript
export default defineConfig({
  entry: "src/cli.ts",
  format: "esm",
  target: "node",
  banner: "#!/usr/bin/env bun",
});
```

### CSS Library

```typescript
export default defineConfig({
  entry: "src/index.css",
  format: ["esm", "iife"],
  packages: "external",
});
```