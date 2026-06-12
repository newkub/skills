# Ecosystem

## ระบบนิเวศและเครื่องมือที่เกี่ยวข้องกับ Workflow-Ship

### Core Workflows

Workflow-Ship เชื่อมต่อกับ workflows หลักดังนี้:

#### 1. Ship-Code

**Purpose:** Ship code ครบวงจรจาก planning ไปจนถึง build

**Integration:**
- Phase 1 ของ workflow-ship
- ต้องทำก่อนเสมอ
- ไม่รวม testing

**Related Skills:**
- `/plan` - Planning และ architecture
- `/ship-code` - Ship code ครบวงจร

#### 2. Run-Verify

**Purpose:** ทดสอบคุณภาพโค้ดด้วย typecheck, lint, และ test

**Integration:**
- Phase 2 ของ workflow-ship
- ต้องทำหลังจาก ship-code
- ใช้ loop-until-complete

**Related Skills:**
- `/run-typecheck` - Type checking
- `/run-lint` - Linting
- `/run-test` - Testing

#### 3. Run-Dev

**Purpose:** รัน development server และตรวจสอบการทำงาน

**Integration:**
- Phase 3 ของ workflow-ship
- ต้องทำหลังจาก verify
- ใช้ loop-until-complete

**Related Skills:**
- `/run-dev` - Development server
- `/watch-dev` - Watch mode

### Supporting Workflows

#### 1. Loop Until Complete

**Purpose:** วนซ้ำจนกว่าจะผ่าน

**Integration:**
- ใช้กับ run-verify และ run-dev
- วนซ้ำจนผ่าน
- แก้ไข errors อัตโนมัติ

#### 2. Resolve Errors

**Purpose:** แก้ไข errors อย่างเป็นระบบ

**Integration:**
- ใช้เมื่อพบ error
- วิเคราะห์ root cause
- แก้ไขและทดสอบซ้ำ

### Frameworks Integration

#### Next.js

**Integration:**
```bash
/ship-code  # Planning → Build
/run-verify  # Typecheck → Lint → Test
/run-dev  # Next dev server
```

**Related Skills:**
- `/framework-next` - Next.js framework

#### Nuxt

**Integration:**
```bash
/ship-code  # Planning → Build
/run-verify  # Typecheck → Lint → Test
/run-dev  # Nuxt dev server
```

**Related Skills:**
- `/framework-nuxt` - Nuxt framework

#### Vite

**Integration:**
```bash
/ship-code  # Planning → Build
/run-verify  # Typecheck → Lint → Test
/run-dev  # Vite dev server
```

**Related Skills:**
- `/lib-vite` - Vite build tool

#### Tauri

**Integration:**
```bash
/ship-code  # Planning → Build
/run-verify  # Typecheck → Lint → Test
/run-dev  # Tauri dev
```

**Related Skills:**
- `/framework-tauri` - Tauri framework

### Tools Integration

#### Type Checkers

**TypeScript:**
```bash
/run-verify  # ใช้ tsc
```

**Related Skills:**
- `/lang-typescript` - TypeScript language
- `/follow-ts` - TypeScript best practices

**tsgo:**
```bash
/run-verify  # ใช้ tsgo
```

**Related Skills:**
- `/follow-tsgo` - tsgo compiler

#### Linters

**Biome:**
```bash
/run-verify  # ใช้ Biome
```

**Related Skills:**
- `/follow-biome` - Biome linter

**ESLint:**
```bash
/run-verify  # ใช้ ESLint
```

**Related Skills:**
- `/follow-eslint` - ESLint linter

#### Test Frameworks

**Vitest:**
```bash
/run-verify  # ใช้ Vitest
```

**Related Skills:**
- `/lib-vitest` - Vitest framework

**Playwright:**
```bash
/run-verify  # ใช้ Playwright สำหรับ E2E
```

**Related Skills:**
- `/tool-playwright` - Playwright testing

### Runtime Integration

#### Bun

**Integration:**
```bash
/ship-code  # ใช้ Bun สำหรับ build
/run-verify  # ใช้ Bun สำหรับ test
/run-dev  # ใช้ Bun สำหรับ dev server
```

**Related Skills:**
- `/runtime-bun` - Bun runtime
- `/follow-bun` - Bun best practices

#### Node.js

**Integration:**
```bash
/ship-code  # ใช้ Node.js สำหรับ build
/run-verify  # ใช้ Node.js สำหรับ test
/run-dev  # ใช้ Node.js สำหรับ dev server
```

**Related Skills:**
- `/runtime-node` - Node.js runtime

### Package Managers

#### Bun

**Integration:**
```bash
bun install  # ติดตั้ง dependencies
bun add  # เพิ่ม dependencies
bun run  # รัน scripts
```

**Related Skills:**
- `/runtime-bun` - Bun runtime

#### npm

**Integration:**
```bash
npm install  # ติดตั้ง dependencies
npm add  # เพิ่ม dependencies
npm run  # รัน scripts
```

### CI/CD Integration

#### GitHub Actions

**Integration:**
```yaml
# .github/workflows/ci.yml
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

**Related Skills:**
- `/follow-github-actions` - GitHub Actions

#### Vercel

**Integration:**
```bash
# Deploy ไป Vercel
/run-deploy-to-vercel
```

**Related Skills:**
- `/cloud-vercel` - Vercel platform
- `/deploy-to-vercel` - Deploy to Vercel

### Monitoring Integration

#### Error Tracking

**Sentry:**
```bash
# Add Sentry สำหรับ error tracking
bun add @sentry/bun
```

#### Performance Monitoring

**Lighthouse:**
```bash
# Run Lighthouse สำหรับ performance
bunx lighthouse http://localhost:3000
```

**Related Skills:**
- `/web-perf` - Web performance

### Documentation Integration

#### Docus

**Integration:**
```bash
# Setup documentation site
/run-docs
```

**Related Skills:**
- `/follow-docus` - Docus documentation

#### VitePress

**Integration:**
```bash
# Setup VitePress
bun add -D vitepress
```

### Development Tools Integration

#### IDE Integration

**VS Code:**
```json
// .vscode/settings.json
{
  "typescript.tsdk": "node_modules/typescript/lib",
  "eslint.enable": true
}
```

**Related Skills:**
- `/tool-nvim` - Neovim

#### Git Integration

**Git Hooks:**
```bash
# Setup git hooks
bun add -D husky
bunx husky install
```

**Related Skills:**
- `/follow-lefthook` - Lefthook git hooks

### Ecosystem Map

```text
Workflow-Ship
├── Core Workflows
│   ├── Ship-Code
│   ├── Run-Verify
│   └── Run-Dev
├── Supporting Workflows
│   ├── Loop Until Complete
│   └── Resolve Errors
├── Frameworks
│   ├── Next.js
│   ├── Nuxt
│   ├── Vite
│   └── Tauri
├── Tools
│   ├── Type Checkers (TypeScript, tsgo)
│   ├── Linters (Biome, ESLint)
│   └── Test Frameworks (Vitest, Playwright)
├── Runtimes
│   ├── Bun
│   └── Node.js
├── Package Managers
│   ├── Bun
│   └── npm
├── CI/CD
│   ├── GitHub Actions
│   └── Vercel
├── Monitoring
│   ├── Error Tracking (Sentry)
│   └── Performance (Lighthouse)
├── Documentation
│   ├── Docus
│   └── VitePress
└── Development Tools
    ├── IDE (VS Code, Neovim)
    └── Git Hooks (Husky, Lefthook)
```

### Best Practices

1. **Choose Right Tools:** เลือก tools ที่เหมาะสมกับ project
2. **Integrate Properly:** เชื่อมต่อ tools อย่างถูกต้อง
3. **Monitor Performance:** ตรวจสอบ performance อย่างสม่ำเสมอ
4. **Keep Updated:** Update tools อย่างสม่ำเสมอ
5. **Document Integration:** เขียน documentation ครบถ้วน

### Next Steps

- อ่าน [Testing](testing.md) สำหรับการทดสอบ
- อ่าน [Patterns](patterns.md) สำหรับ patterns
- อ่าน [Troubleshooting](troubleshooting.md) สำหรับการแก้ปัญหา
