# API Reference

## API Reference และ Documentation สำหรับ Workflow-Ship

### Overview

Workflow-Ship เป็น workflow ที่ใช้ผ่าน command line ใน Windsurf IDE ไม่มี API แบบ programmatic แต่มี commands และ workflows ที่สามารถเรียกใช้ได้

### Commands

#### /ship-run

**Description:** Ship code ครบวงจร ทดสอบคุณภาพ และรัน development server

**Usage:**
```bash
/ship-run
```

**Phases:**
1. Ship-code (planning → build)
2. Run-verify (typecheck → lint → test)
3. Run-dev (development server)

**Options:**
- ไม่มี options เพิ่มเติม

**Example:**
```bash
# Ship code ครบวงจร
/ship-run
```

#### /ship-code

**Description:** Ship code ครบวงจรจาก planning ไปจนถึง build

**Usage:**
```bash
/ship-code
```

**Phases:**
1. Planning และ analysis
2. Code generation
3. Build และ compilation

**Options:**
- ไม่มี options เพิ่มเติม

**Example:**
```bash
# Ship code
/ship-code
```

#### /run-verify

**Description:** ทดสอบคุณภาพโค้ดด้วย typecheck, lint, และ test

**Usage:**
```bash
/run-verify
```

**Phases:**
1. Typecheck
2. Lint
3. Test

**Options:**
- ไม่มี options เพิ่มเติม

**Example:**
```bash
# Verify code
/run-verify
```

#### /run-dev

**Description:** รัน development server และตรวจสอบการทำงาน

**Usage:**
```bash
/run-dev
```

**Phases:**
1. Start development server
2. Monitor health
3. Check critical errors

**Options:**
- ไม่มี options เพิ่มเติม

**Example:**
```bash
# Run dev server
/run-dev
```

#### /loop-until-complete

**Description:** วนซ้ำจนกว่าจะผ่าน

**Usage:**
```bash
/loop-until-complete
```

**Options:**
- ไม่มี options เพิ่มเติม

**Example:**
```bash
# Loop until complete
/loop-until-complete
/run-verify
```

#### /resolve-errors

**Description:** แก้ไข errors อย่างเป็นระบบ

**Usage:**
```bash
/resolve-errors
```

**Options:**
- ไม่มี options เพิ่มเติม

**Example:**
```bash
# Resolve errors
/resolve-errors
```

### Workflow Execution Flow

#### Standard Flow

```text
Start
  ↓
/ship-code
  ↓ (Planning → Build)
/run-verify
  ↓ (Typecheck → Lint → Test)
/run-dev
  ↓ (Start Dev Server)
End
```

#### With Loop Until Complete

```text
Start
  ↓
/ship-code
  ↓ (Planning → Build)
/loop-until-complete
  ↓
  /run-verify
  ↓ (Typecheck → Lint → Test)
  ↓ (เมื่อ error → /resolve-errors)
  ↓ (วนซ้ำจนผ่าน)
/loop-until-complete
  ↓
  /run-dev
  ↓ (Start Dev Server)
  ↓ (เมื่อ error → /resolve-errors)
  ↓ (วนซ้ำจนผ่าน)
End
```

### Error Handling

#### Error Types

1. **Type Errors**
   - ตรวจสอบด้วย typecheck
   - แก้ไขด้วย proper types
   - ใช้ `/resolve-errors`

2. **Lint Errors**
   - ตรวจสอบด้วย lint
   - แก้ไขด้วย lint rules
   - ใช้ `/resolve-errors`

3. **Test Failures**
   - ตรวจสอบด้วย test
   - แก้ไขด้วย test fixes
   - ใช้ `/resolve-errors`

4. **Runtime Errors**
   - ตรวจสอบด้วย dev server
   - แก้ไขด้วย runtime fixes
   - ใช้ `/resolve-errors`

#### Error Resolution Process

```text
Error Detected
  ↓
Analyze Error Type
  ↓
Use /resolve-errors
  ↓
Analyze Root Cause
  ↓
Generate Minimal Fix
  ↓
Apply Fix
  ↓
Retest
  ↓ (Success)
Continue
  ↓ (Failure)
Retry
```

### Integration Points

#### Framework Integration

**Next.js:**
```bash
/ship-code  # Uses next build
/run-verify  # Uses next lint
/run-dev  # Uses next dev
```

**Nuxt:**
```bash
/ship-code  # Uses nuxt build
/run-verify  # Uses nuxt typecheck
/run-dev  # Uses nuxt dev
```

**Vite:**
```bash
/ship-code  # Uses vite build
/run-verify  # Uses typecheck + lint
/run-dev  # Uses vite dev
```

**Tauri:**
```bash
/ship-code  # Uses tauri build
/run-verify  # Uses typecheck + lint
/run-dev  # Uses tauri dev
```

#### Tool Integration

**TypeScript:**
```bash
/run-verify  # Uses tsc
```

**Biome:**
```bash
/run-verify  # Uses biome check
```

**Vitest:**
```bash
/run-verify  # Uses vitest
```

**Playwright:**
```bash
/run-verify  # Uses playwright
```

### Configuration

#### Environment Variables

```bash
# .env
NODE_ENV=development
PORT=3000
```

#### Package.json Scripts

```json
{
  "scripts": {
    "build": "vite build",
    "dev": "vite dev",
    "typecheck": "tsc --noEmit",
    "lint": "biome check .",
    "test": "vitest"
  }
}
```

### Return Values

#### Success

- Code ผ่าน ship-code
- Code ผ่าน verify
- Dev server ทำงานได้

#### Failure

- Code ไม่ผ่าน ship-code
- Code ไม่ผ่าน verify
- Dev server ไม่ทำงานได้

### Next Steps

- อ่าน [CLI](cli.md) สำหรับ CLI commands
- อ่าน [TUI Usage](tui-usage.md) สำหรับ TUI usage
- อ่าน [Configuration](configuration.md) สำหรับ configuration options
