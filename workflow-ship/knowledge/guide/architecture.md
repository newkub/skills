# Architecture

## สถาปัตยกรรมของ Workflow-Ship

### Overview

Workflow-Ship เป็น workflow ที่ออกแบบมาเพื่อ ship code ครบวงจร โดยมีสถาปัตยกรรมที่เป็นระบบและชัดเจน

### High-Level Architecture

```text
┌─────────────────────────────────────────┐
│         Workflow-Ship                  │
├─────────────────────────────────────────┤
│                                         │
│  ┌──────────────┐                      │
│  │ Ship-Code   │                      │
│  │ Phase 1     │                      │
│  └──────┬───────┘                      │
│         ↓                              │
│  ┌──────────────┐                      │
│  │ Run-Verify  │                      │
│  │ Phase 2     │                      │
│  └──────┬───────┘                      │
│         ↓                              │
│  ┌──────────────┐                      │
│  │ Run-Dev     │                      │
│  │ Phase 3     │                      │
│  └──────────────┘                      │
│                                         │
└─────────────────────────────────────────┘
```

### Phase Architecture

#### Phase 1: Ship-Code

**Responsibilities:**
- Planning และ analysis
- Code generation
- Build และ compilation

**Architecture:**
```text
Ship-Code
├── Planning
│   ├── Analysis
│   ├── Design
│   └── Implementation Plan
├── Code Generation
│   ├── Write Code
│   ├── Refactor
│   └── Optimize
└── Build
    ├── Compilation
    ├── Bundling
    └── Output Generation
```

**Characteristics:**
- ไม่รวม testing
- เน้น planning และ build
- ต้องทำก่อนเสมอ

#### Phase 2: Run-Verify

**Responsibilities:**
- Typecheck
- Lint
- Test

**Architecture:**
```text
Run-Verify
├── Loop Until Complete
│   ├── Typecheck
│   │   ├── Type Safety Check
│   │   └── Type Error Resolution
│   ├── Lint
│   │   ├── Code Quality Check
│   │   └── Lint Error Resolution
│   └── Test
│       ├── Unit Tests
│       ├── Integration Tests
│       └── E2E Tests
└── Error Resolution
    ├── Root Cause Analysis
    ├── Minimal Changes
    └── Retest
```

**Characteristics:**
- Testing เท่านั้น
- ใช้ loop-until-complete
- ต้องทำหลังจาก ship-code

#### Phase 3: Run-Dev

**Responsibilities:**
- Development server
- Runtime testing
- Health monitoring

**Architecture:**
```text
Run-Dev
├── Loop Until Complete
│   ├── Start Dev Server
│   ├── Monitor Health
│   └── Check Critical Errors
└── Error Resolution
    ├── Runtime Error Analysis
    ├── Server Restart
    └── Retest
```

**Characteristics:**
- Development server เท่านั้น
- ใช้ loop-until-complete
- ต้องทำหลังจาก verify

### Component Architecture

#### 1. Sequential Executor

**Responsibilities:**
- บังคับลำดับการทำงาน
- ตรวจสอบ dependencies
- ป้องกันการข้าม steps

**Implementation:**
```typescript
class SequentialExecutor {
  async execute(phases: Phase[]) {
    for (const phase of phases) {
      await phase.execute();
    }
  }
}
```

#### 2. Loop Controller

**Responsibilities:**
- วนซ้ำจนกว่าจะผ่าน
- ตรวจสอบ success criteria
- จัดการ retries

**Implementation:**
```typescript
class LoopController {
  async loopUntilComplete(task: Task) {
    while (!task.isComplete()) {
      await task.execute();
      if (task.hasError()) {
        await this.resolveError(task.getError());
      }
    }
  }
}
```

#### 3. Error Resolver

**Responsibilities:**
- วิเคราะห์ root cause
- แก้ไข minimal changes
- ทดสอบซ้ำ

**Implementation:**
```typescript
class ErrorResolver {
  async resolve(error: Error) {
    const rootCause = this.analyzeRootCause(error);
    const fix = this.generateMinimalFix(rootCause);
    await this.applyFix(fix);
    await this.retest();
  }
}
```

### Data Flow

```text
User Request
    ↓
Ship-Code Phase
    ↓ (Code + Build Artifacts)
Run-Verify Phase
    ↓ (Verified Code)
Run-Dev Phase
    ↓ (Running Dev Server)
User
```

### Error Flow

```text
Error Detected
    ↓
Error Resolver
    ↓
Root Cause Analysis
    ↓
Minimal Fix Generation
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

#### 1. Ship-Code Integration

- Planning workflows
- Build systems
- Code generation tools

#### 2. Run-Verify Integration

- Type checkers (TypeScript, tsgo)
- Linters (Biome, ESLint)
- Test frameworks (Vitest, Playwright)

#### 3. Run-Dev Integration

- Dev servers (Vite, Next.js, Nuxt)
- Runtime environments (Bun, Node)
- Monitoring tools

### Scalability

Workflow-Ship ออกแบบมาเพื่อ:

- **Small projects:** ใช้ phases ทั้งหมด
- **Medium projects:** สามารถ skip phases บางอย่าง
- **Large projects:** สามารถ parallelize บาง tasks

### Extensibility

สามารถ extend ได้โดย:

- เพิ่ม custom phases
- เพิ่ม custom error resolvers
- เพิ่ม custom integration points

### Next Steps

- อ่าน [Structure](structure.md) สำหรับโครงสร้าง
- อ่าน [Performance](performance.md) สำหรับประสิทธิภาพ
- อ่าน [Security](security.md) สำหรับความปลอดภัย
