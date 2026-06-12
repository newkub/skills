# Configuration

## การตั้งค่าและ Configuration สำหรับ Workflow-Ship

### ข้อกำหนดเบื้องต้น

Workflow-Ship ไม่ต้องการ configuration file เพิ่มเติม แต่ต้องการให้ project มีการตั้งค่าพื้นฐานดังนี้:

### 1. Build System

ต้องมี build system ที่ตั้งค่าไว้:

```json
// package.json
{
  "scripts": {
    "build": "vite build",
    "dev": "vite dev"
  }
}
```

หรือสำหรับ frameworks อื่นๆ:

- **Next.js**: `next build`, `next dev`
- **Nuxt**: `nuxt build`, `nuxt dev`
- **Vite**: `vite build`, `vite dev`
- **Tauri**: `tauri build`, `tauri dev`

### 2. Typecheck

ต้องมี typecheck script:

```json
// package.json
{
  "scripts": {
    "typecheck": "tsc --noEmit"
  }
}
```

### 3. Lint

ต้องมี lint script:

```json
// package.json
{
  "scripts": {
    "lint": "eslint .",
    "lint:fix": "eslint . --fix"
  }
}
```

หรือใช้ Biome:

```json
// package.json
{
  "scripts": {
    "lint": "biome check .",
    "lint:fix": "biome check . --write"
  }
}
```

### 4. Test

ต้องมี test script:

```json
// package.json
{
  "scripts": {
    "test": "vitest",
    "test:coverage": "vitest --coverage"
  }
}
```

### 5. Verify Script (Optional)

สามารถสร้าง verify script ที่รวมทุกอย่าง:

```json
// package.json
{
  "scripts": {
    "verify": "bun run typecheck && bun run lint && bun run test"
  }
}
```

### Environment Variables

ตั้งค่า environment variables ถ้าจำเป็น:

```bash
# .env
NODE_ENV=development
PORT=3000
```

### Workflow Configuration

Workflow-Ship ไม่ต้องการ configuration file เพิ่มเติม แต่สามารถปรับแต่งผ่าน workflows อื่นๆ:

#### 1. Ship-Code Configuration

ปรับแต่งผ่าน `/ship-code` workflow:

- Planning strategies
- Build options
- Code generation rules

#### 2. Run-Verify Configuration

ปรับแต่งผ่าน `/run-verify` workflow:

- Typecheck options
- Lint rules
- Test configurations

#### 3. Run-Dev Configuration

ปรับแต่งผ่าน `/run-dev` workflow:

- Dev server options
- Port configuration
- Hot reload settings

### Custom Workflows

สามารถสร้าง custom workflows ที่ extend จาก workflow-ship:

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

### Integration with CI/CD

สามารถใช้ workflow-ship กับ CI/CD:

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

### Monitoring

ตั้งค่า monitoring สำหรับ workflow:

- Build logs
- Test results
- Dev server health
- Error tracking

### Next Steps

- อ่าน [Integration](integration.md) สำหรับการเชื่อมต่อกับ workflows อื่นๆ
- อ่าน [Architecture](architecture.md) สำหรับสถาปัตยกรรม
- อ่าน [Best Practices](best-practices.md) สำหรับแนวทางปฏิบัติที่ดีที่สุด
