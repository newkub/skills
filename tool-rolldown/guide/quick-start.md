# Quick Start

## Purpose

คู่มือเริ่มต้นใช้งาน Rolldown อย่างรวดเร็วใน 5 นาที

## 5-Minute Tutorial

### Step 1: Install

```bash
npm install -D rolldown
```

### Step 2: Create Entry Point

สร้างไฟล์ `src/index.ts`:

```typescript
export function hello(name: string): string {
  return `Hello, ${name}!`
}

export function goodbye(name: string): string {
  return `Goodbye, ${name}!`
}
```

### Step 3: Create Config

สร้างไฟล์ `rolldown.config.js`:

```javascript
import { defineConfig } from 'rolldown'

export default defineConfig({
  input: 'src/index.ts',
  output: {
    dir: 'dist',
    format: 'esm',
  },
})
```

### Step 4: Add Script

เพิ่มใน `package.json`:

```json
{
  "scripts": {
    "build": "rolldown",
    "dev": "rolldown --watch"
  }
}
```

### Step 5: Build

```bash
npm run build
```

### Step 6: Verify

```bash
node dist/index.js
```

## Common Use Cases

### Basic Bundle

```javascript
import { defineConfig } from 'rolldown'

export default defineConfig({
  input: 'src/index.ts',
  output: {
    dir: 'dist',
    format: 'esm',
  },
})
```

### Library Build

```javascript
import { defineConfig } from 'rolldown'

export default defineConfig({
  input: 'src/index.ts',
  output: {
    dir: 'dist',
    format: 'esm',
    name: 'myLibrary',
  },
  external: ['react', 'react-dom'],
})
```

### With Plugins

```javascript
import { defineConfig } from 'rolldown'
import commonjs from '@rolldown/plugin-commonjs'
import nodeResolve from '@rolldown/plugin-node-resolve'

export default defineConfig({
  input: 'src/index.ts',
  output: {
    dir: 'dist',
    format: 'esm',
  },
  plugins: [
    nodeResolve(),
    commonjs(),
  ],
})
```

### Code Splitting

```javascript
import { defineConfig } from 'rolldown'

export default defineConfig({
  input: 'src/index.ts',
  output: {
    dir: 'dist',
    manualChunks: {
      vendor: ['react', 'react-dom'],
    },
  },
})
```

## CLI Commands

### Build

```bash
rolldown
# or
rolldown --config rolldown.config.js
```

### Watch Mode

```bash
rolldown --watch
```

### With Options

```bash
rolldown --input src/index.ts --dir dist --format esm
```

### Options

| Option | Description |
|--------|-------------|
| `--config` | Config file path |
| `--input` | Entry point |
| `--dir` | Output directory |
| `--format` | Output format |
| `--watch` | Watch mode |
| `--sourcemap` | Generate sourcemap |
| `--minify` | Minify output |
| `--version` | Show version |
| `--help` | Show help |

## Next Steps

### Learn More

- [Key Concept](key-concept.md) - แนวคิดหลัก
- [How It Works](how-it-works.md) - การทำงานภายใน
- [Features](features.md) - ฟีเจอร์ทั้งหมด

### Configuration

- [Configuration](configuration.md) - การตั้งค่า
- [Best Practices](best-practices.md) - แนวทางปฏิบัติ

### References

- [CLI Reference](../references/cli.md) - CLI commands
- [API Reference](../references/api.md) - Programmatic API
- [Config Reference](../references/configuration.md) - Configuration options

## Summary

| Step | Command |
|------|---------|
| **Install** | `npm install -D rolldown` |
| **Create entry** | `src/index.ts` |
| **Create config** | `rolldown.config.js` |
| **Build** | `npm run build` |
| **Watch** | `npm run dev` |