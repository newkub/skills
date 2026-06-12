# Configuration

## Configuration Options และ Settings สำหรับ Workflow-Ship

### Overview

Workflow-Ship ไม่ต้องการ configuration file เพิ่มเติม แต่ต้องการให้ project มีการตั้งค่าพื้นฐานดังนี้

### Project Configuration

#### package.json

**Required Scripts:**

```json
{
  "name": "my-project",
  "version": "1.0.0",
  "scripts": {
    "build": "vite build",
    "dev": "vite dev",
    "typecheck": "tsc --noEmit",
    "lint": "biome check .",
    "lint:fix": "biome check . --write",
    "test": "vitest",
    "test:coverage": "vitest --coverage",
    "verify": "bun run typecheck && bun run lint && bun run test"
  }
}
```

**Framework-Specific Scripts:**

**Next.js:**
```json
{
  "scripts": {
    "build": "next build",
    "dev": "next dev",
    "typecheck": "tsc --noEmit",
    "lint": "next lint"
  }
}
```

**Nuxt:**
```json
{
  "scripts": {
    "build": "nuxt build",
    "dev": "nuxt dev",
    "typecheck": "nuxt typecheck"
  }
}
```

**Tauri:**
```json
{
  "scripts": {
    "build": "tauri build",
    "dev": "tauri dev"
  }
}
```

### Environment Configuration

#### .env

**Basic Configuration:**

```bash
NODE_ENV=development
PORT=3000
```

**Advanced Configuration:**

```bash
NODE_ENV=development
PORT=3000
API_URL=http://localhost:3000/api
DATABASE_URL=postgresql://localhost:5432/mydb
API_KEY=your-api-key
```

#### .env.example

```bash
NODE_ENV=development
PORT=3000
API_URL=http://localhost:3000/api
DATABASE_URL=postgresql://localhost:5432/mydb
API_KEY=your-api-key
```

### TypeScript Configuration

#### tsconfig.json

**Basic Configuration:**

```json
{
  "compilerOptions": {
    "target": "ES2020",
    "module": "ESNext",
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "moduleResolution": "bundler",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true,
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules"]
}
```

**Framework-Specific:**

**Next.js:**
```json
{
  "extends": "next/core-web-vitals",
  "compilerOptions": {
    "strict": true
  }
}
```

**Nuxt:**
```json
{
  "extends": "./.nuxt/tsconfig.json"
}
```

### Linting Configuration

#### Biome

**biome.json:**

```json
{
  "formatter": {
    "enabled": true,
    "formatWithErrors": false,
    "indentStyle": "space",
    "indentWidth": 2,
    "lineWidth": 80
  },
  "linter": {
    "enabled": true,
    "rules": {
      "recommended": true
    }
  },
  "javascript": {
    "formatter": {
      "quoteStyle": "single",
      "jsxQuoteStyle": "double",
      "quoteProperties": "asNeeded"
    }
  }
}
```

#### ESLint

**.eslintrc.js:**

```javascript
module.exports = {
  root: true,
  env: {
    node: true,
    browser: true
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended'
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  rules: {
    '@typescript-eslint/no-explicit-any': 'warn',
    '@typescript-eslint/no-unused-vars': 'error'
  }
}
```

### Testing Configuration

#### Vitest

**vitest.config.ts:**

```typescript
import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    globals: true,
    environment: 'node',
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html'],
      exclude: ['node_modules/', 'tests/']
    }
  }
})
```

#### Playwright

**playwright.config.ts:**

```typescript
import { defineConfig } from '@playwright/test'

export default defineConfig({
  testDir: './tests/e2e',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: 'html',
  use: {
    baseURL: 'http://localhost:3000',
    trace: 'on-first-retry'
  }
})
```

### Build Configuration

#### Vite

**vite.config.ts:**

```typescript
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    outDir: 'dist',
    sourcemap: false,
    minify: 'terser',
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom']
        }
      }
    }
  },
  server: {
    port: 3000,
    host: 'localhost',
    hmr: true
  }
})
```

#### Next.js

**next.config.js:**

```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  output: 'standalone'
}

module.exports = nextConfig
```

#### Nuxt

**nuxt.config.ts:**

```typescript
export default defineNuxtConfig({
  typescript: {
    strict: true
  },
  vite: {
    build: {
      minify: 'terser'
    }
  }
})
```

### Git Configuration

#### .gitignore

```gitignore
node_modules/
dist/
build/
.env
.env.local
.env.*.local
*.log
coverage/
.nuxt/
.next/
.tauri/
```

#### .gitattributes

```gitattributes
* text=auto eol=lf
*.ts text eol=lf
*.js text eol=lf
*.json text eol=lf
*.md text eol=lf
```

### CI/CD Configuration

#### GitHub Actions

**.github/workflows/ci.yml:**

```yaml
name: CI

on: [push, pull_request]

jobs:
  verify:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: oven-sh/setup-bun@v1
      - run: bun install
      - run: bun run typecheck
      - run: bun run lint
      - run: bun run test
```

### Workflow Configuration

#### Custom Workflow

สามารถสร้าง custom workflow ที่ extend จาก workflow-ship:

```markdown
---
description: Custom workflow for specific project
---

## Execute

1. ทำ `/ship-code`
2. ทำ custom steps
3. ทำ `/run-verify`
4. ทำ `/run-dev`
```

### Configuration Best Practices

1. **Use Environment Variables:** ใช้ environment variables สำหรับ sensitive data
2. **Version Control Configs:** Version control configuration files
3. **Document Configs:** เขียน documentation สำหรับ configurations
4. **Use Defaults:** ใช้ default values เมื่อเป็นไปได้
5. **Validate Configs:** Validate configurations อย่างสม่ำเสมอ

### Configuration Troubleshooting

#### Build Fails

**Problem:** Build ล้มเหลว

**Solution:**
- ตรวจสอบ build configuration
- ตรวจสอบ dependencies
- ตรวจสอบ environment variables

#### Typecheck Fails

**Problem:** Typecheck ล้มเหลว

**Solution:**
- ตรวจสอบ tsconfig.json
- ตรวจสอบ TypeScript version
- Enable strict mode

#### Lint Fails

**Problem:** Lint ล้มเหลว

**Solution:**
- ตรวจสอบ lint configuration
- ตรวจสอบ lint rules
- Auto-fix lint errors

#### Test Fails

**Problem:** Test ล้มเหลว

**Solution:**
- ตรวจสอบ test configuration
- ตรวจสอบ test environment
- Debug test failures

### Next Steps

- อ่าน [API](api.md) สำหรับ API reference
- อ่าน [CLI](cli.md) สำหรับ CLI commands
- อ่าน [TUI Usage](tui-usage.md) สำหรับ TUI usage
