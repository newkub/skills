# CLI Commands

## CLI Commands และ Usage สำหรับ Workflow-Ship

### Overview

Workflow-Ship ใช้ผ่าน command line ใน Windsurf IDE โดยมี commands หลักดังนี้

### Main Commands

#### /ship-run

**Description:** Ship code ครบวงจร ทดสอบคุณภาพ และรัน development server

**Syntax:**
```bash
/ship-run
```

**Description:**
- ทำ `/ship-code` (planning → build)
- ทำ `/run-verify` (typecheck → lint → test)
- ทำ `/run-dev` (development server)

**Example:**
```bash
# Ship code ครบวงจร
/ship-run
```

**Output:**
```
Starting ship-run workflow...
Phase 1: Ship-code
  Planning...
  Building...
Phase 2: Run-verify
  Typecheck...
  Lint...
  Test...
Phase 3: Run-dev
  Starting dev server...
Complete!
```

#### /ship-code

**Description:** Ship code ครบวงจรจาก planning ไปจนถึง build

**Syntax:**
```bash
/ship-code
```

**Description:**
- Planning และ analysis
- Code generation
- Build และ compilation

**Example:**
```bash
# Ship code
/ship-code
```

**Output:**
```
Starting ship-code...
Planning...
  Analyzing requirements...
  Designing implementation...
Building...
  Compiling...
  Bundling...
Complete!
```

#### /run-verify

**Description:** ทดสอบคุณภาพโค้ดด้วย typecheck, lint, และ test

**Syntax:**
```bash
/run-verify
```

**Description:**
- Typecheck
- Lint
- Test

**Example:**
```bash
# Verify code
/run-verify
```

**Output:**
```
Starting run-verify...
Typecheck...
  No type errors
Lint...
  No lint errors
Test...
  All tests passed
Complete!
```

#### /run-dev

**Description:** รัน development server และตรวจสอบการทำงาน

**Syntax:**
```bash
/run-dev
```

**Description:**
- Start development server
- Monitor health
- Check critical errors

**Example:**
```bash
# Run dev server
/run-dev
```

**Output:**
```
Starting run-dev...
Starting dev server...
  Server running on http://localhost:3000
Monitoring health...
  All systems operational
Complete!
```

### Supporting Commands

#### /loop-until-complete

**Description:** วนซ้ำจนกว่าจะผ่าน

**Syntax:**
```bash
/loop-until-complete
```

**Description:**
- วนซ้ำ task จนกว่าจะผ่าน
- แก้ไข errors อัตโนมัติ
- ทำงานอัตโนมัติ

**Example:**
```bash
# Loop until verify passes
/loop-until-complete
/run-verify
```

**Output:**
```
Starting loop-until-complete...
Iteration 1:
  Typecheck... Failed
  Resolving errors...
Iteration 2:
  Typecheck... Passed
  Lint... Failed
  Resolving errors...
Iteration 3:
  Typecheck... Passed
  Lint... Passed
  Test... Passed
Complete!
```

#### /resolve-errors

**Description:** แก้ไข errors อย่างเป็นระบบ

**Syntax:**
```bash
/resolve-errors
```

**Description:**
- วิเคราะห์ root cause
- แก้ไข minimal changes
- ทดสอบซ้ำ

**Example:**
```bash
# Resolve errors
/resolve-errors
```

**Output:**
```
Starting resolve-errors...
Analyzing error...
  Type error in src/index.ts:42
Root cause: Missing type annotation
Generating minimal fix...
  Add type annotation
Applying fix...
Retesting...
  Passed
Complete!
```

### Command Chains

#### Standard Chain

```bash
/ship-code
/run-verify
/run-dev
```

#### With Loop Until Complete

```bash
/ship-code
/loop-until-complete
/run-verify
/loop-until-complete
/run-dev
```

#### Single Command

```bash
/ship-run
```

### Command Options

#### Current Status

Commands ของ Workflow-Ship ไม่มี options เพิ่มเติมในปัจจุบัน

#### Future Options

อาจมี options เพิ่มเติมในอนาคต เช่น:

```bash
/ship-run --verbose
/ship-code --skip-planning
/run-verify --skip-test
/run-dev --port 3001
```

### Error Handling

#### Command Errors

เมื่อ command ล้มเหลว:

```bash
/ship-code
```

**Output:**
```
Starting ship-code...
Planning...
Error: Failed to analyze requirements
Resolving errors...
  Fixing issue...
Retrying...
Complete!
```

#### Manual Intervention

ถ้า auto-resolution ล้มเหลว:

```bash
# แก้ไข manually
# รัน command ซ้ำ
/ship-code
```

### Exit Codes

#### Success

- Exit code: 0
- Message: "Complete!"

#### Failure

- Exit code: 1
- Message: "Failed: [error message]"

### Environment Variables

#### Required Variables

```bash
NODE_ENV=development
```

#### Optional Variables

```bash
PORT=3000
API_KEY=secret
```

### Configuration Files

#### package.json

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

#### .env

```bash
NODE_ENV=development
PORT=3000
```

### Examples

#### Example 1: Basic Usage

```bash
# Ship code ครบวงจร
/ship-run
```

#### Example 2: Step by Step

```bash
# Ship code
/ship-code

# Verify
/run-verify

# Run dev
/run-dev
```

#### Example 3: With Loop

```bash
# Ship code
/ship-code

# Verify with loop
/loop-until-complete
/run-verify

# Run dev with loop
/loop-until-complete
/run-dev
```

#### Example 4: Manual Error Resolution

```bash
# Ship code
/ship-code

# Verify
/run-verify
# Error occurs

# Resolve manually
/resolve-errors

# Retry verify
/run-verify
```

### Best Practices

1. **ใช้ /ship-run** สำหรับการ ship ครบวงจร
2. **ใช้ /loop-until-complete** สำหรับ verify และ dev
3. **ใช้ /resolve-errors** เมื่อพบ error
4. **ตรวจสอบ output** อย่างใกล้ชิด
5. **ตรวจสอบ exit codes** สำหรับ automation

### Troubleshooting

#### Command Not Found

**Problem:** Command ไม่พบ

**Solution:**
- ตรวจสอบว่า workflow ถูกติดตั้ง
- ตรวจสอบ Windsurf version
- Restart Windsurf

#### Command Hangs

**Problem:** Command ค้าง

**Solution:**
- ตรวจสอบ network connection
- ตรวจสอบ disk space
- Kill process และ retry

#### Command Fails

**Problem:** Command ล้มเหลว

**Solution:**
- ตรวจสอบ error message
- ใช้ /resolve-errors
- แก้ไข manually และ retry

### Next Steps

- อ่าน [TUI Usage](tui-usage.md) สำหรับ TUI usage
- อ่าน [Configuration](configuration.md) สำหรับ configuration options
- อ่าน [API](api.md) สำหรับ API reference
