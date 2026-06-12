# Patterns

## Patterns ที่ใช้ใน Workflow-Ship

### Overview

Workflow-Ship ใช้ patterns ต่างๆ เพื่อให้การทำงานเป็นระบบและมีประสิทธิภาพ

### Architectural Patterns

#### 1. Sequential Execution Pattern

**Description:** ทำงานตามลำดับที่เคร่งครัด

**Implementation:**
```typescript
class SequentialExecutor {
  async execute(phases: Phase[]) {
    for (const phase of phases) {
      await phase.execute()
    }
  }
}
```

**Use Cases:**
- Ship-code → Verify → Dev
- Build → Test → Deploy
- Setup → Configure → Run

**Benefits:**
- Clear execution order
- Easy to debug
- Predictable behavior

#### 2. Loop Until Complete Pattern

**Description:** วนซ้ำจนกว่าจะผ่าน

**Implementation:**
```typescript
class LoopController {
  async loopUntilComplete(task: Task, options = {}) {
    const {
      maxRetries = 10,
      timeout = 30000,
      backoff = 1000
    } = options

    let retries = 0
    while (!task.isComplete() && retries < maxRetries) {
      try {
        await task.execute()
        if (task.isComplete()) break
      } catch (error) {
        retries++
        await this.sleep(backoff * Math.pow(2, retries))
      }
    }
  }
}
```

**Use Cases:**
- Run-verify loop
- Run-dev loop
- Retry mechanisms

**Benefits:**
- Automatic retry
- Error recovery
- Consistent results

#### 3. Error Resolution Pattern

**Description:** แก้ไข errors อย่างเป็นระบบ

**Implementation:**
```typescript
class ErrorResolver {
  async resolve(error: Error) {
    const rootCause = this.analyzeRootCause(error)
    const fix = this.generateMinimalFix(rootCause)
    await this.applyFix(fix)
    await this.retest()
  }

  private analyzeRootCause(error: Error) {
    // Analyze error to find root cause
    return this.traceError(error)
  }

  private generateMinimalFix(rootCause: any) {
    // Generate minimal fix
    return this.createFix(rootCause)
  }

  private async applyFix(fix: Fix) {
    // Apply the fix
    await this.executeFix(fix)
  }

  private async retest() {
    // Retest after fix
    await this.runTests()
  }
}
```

**Use Cases:**
- Type errors
- Lint errors
- Test failures
- Runtime errors

**Benefits:**
- Systematic resolution
- Minimal changes
- Root cause focus

### Design Patterns

#### 1. Strategy Pattern

**Description:** ใช้ strategies ที่แตกต่างกันสำหรับ tasks ที่แตกต่างกัน

**Implementation:**
```typescript
interface BuildStrategy {
  build(): Promise<void>
}

class ViteBuildStrategy implements BuildStrategy {
  async build() {
    await exec('vite build')
  }
}

class NextBuildStrategy implements BuildStrategy {
  async build() {
    await exec('next build')
  }
}

class Builder {
  constructor(private strategy: BuildStrategy) {}

  async build() {
    await this.strategy.build()
  }
}
```

**Use Cases:**
- Different build systems
- Different test frameworks
- Different linters

**Benefits:**
- Flexible
- Extensible
- Swappable

#### 2. Observer Pattern

**Description:** Monitor และ react ต่อ events

**Implementation:**
```typescript
class WorkflowObserver {
  private listeners = new Map()

  on(event: string, callback: Function) {
    if (!this.listeners.has(event)) {
      this.listeners.set(event, [])
    }
    this.listeners.get(event).push(callback)
  }

  emit(event: string, data: any) {
    const callbacks = this.listeners.get(event) || []
    callbacks.forEach(callback => callback(data))
  }
}

// Usage
const observer = new WorkflowObserver()
observer.on('error', (error) => console.error(error))
observer.on('complete', () => console.log('Complete'))
```

**Use Cases:**
- Error monitoring
- Progress tracking
- Event logging

**Benefits:**
- Decoupled
- Extensible
- Reactive

#### 3. Command Pattern

**Description:** Encapsulate requests ใน objects

**Implementation:**
```typescript
interface Command {
  execute(): Promise<void>
  undo(): Promise<void>
}

class ShipCodeCommand implements Command {
  async execute() {
    await exec('/ship-code')
  }

  async undo() {
    await exec('git reset --hard HEAD~1')
  }
}

class CommandInvoker {
  private history: Command[] = []

  async execute(command: Command) {
    await command.execute()
    this.history.push(command)
  }

  async undo() {
    const command = this.history.pop()
    if (command) {
      await command.undo()
    }
  }
}
```

**Use Cases:**
- Undo operations
- Command history
- Batch operations

**Benefits:**
- Undoable
- Loggable
- Queueable

### Code Patterns

#### 1. Minimal Fix Pattern

**Description:** แก้ไขแบบ minimal เท่านั้ม

**Implementation:**
```typescript
function applyMinimalFix(error: Error) {
  // Identify the exact line causing the error
  const line = error.line
  
  // Apply single-line fix
  const fix = generateSingleLineFix(line)
  
  // Apply fix
  applyFix(fix)
}
```

**Use Cases:**
- Type errors
- Lint errors
- Syntax errors

**Benefits:**
- Less risk
- Faster fixes
- Easier review

#### 2. Retry Pattern

**Description:** Retry operations ที่ล้มเหลว

**Implementation:**
```typescript
async function retry<T>(
  fn: () => Promise<T>,
  options = { maxRetries: 3, backoff: 1000 }
): Promise<T> {
  let lastError: Error
  
  for (let i = 0; i < options.maxRetries; i++) {
    try {
      return await fn()
    } catch (error) {
      lastError = error
      await sleep(options.backoff * Math.pow(2, i))
    }
  }
  
  throw lastError
}
```

**Use Cases:**
- Network requests
- File operations
- External API calls

**Benefits:**
- Resilient
- Handles transient failures
- Configurable

#### 3. Cache Pattern

**Description:** Cache results สำหรับ performance

**Implementation:**
```typescript
class Cache {
  private cache = new Map()

  async get<T>(key: string, fn: () => Promise<T>): Promise<T> {
    if (this.cache.has(key)) {
      return this.cache.get(key)
    }

    const result = await fn()
    this.cache.set(key, result)
    return result
  }

  clear() {
    this.cache.clear()
  }
}
```

**Use Cases:**
- Build results
- Test results
- Dependency resolution

**Benefits:**
- Faster
- Less resource usage
- Consistent results

### Workflow Patterns

#### 1. Pipeline Pattern

**Description:** Chain operations ต่อกัน

**Implementation:**
```typescript
class Pipeline {
  private stages: Stage[] = []

  addStage(stage: Stage) {
    this.stages.push(stage)
    return this
  }

  async execute(input: any) {
    let result = input
    
    for (const stage of this.stages) {
      result = await stage.execute(result)
    }
    
    return result
  }
}

// Usage
const pipeline = new Pipeline()
  .addStage(new ShipCodeStage())
  .addStage(new VerifyStage())
  .addStage(new DevStage())

await pipeline.execute(input)
```

**Use Cases:**
- Build pipelines
- Test pipelines
- Deploy pipelines

**Benefits:**
- Composable
- Reusable
- Flexible

#### 2. Fork-Join Pattern

**Description:** Fork tasks และ join results

**Implementation:**
```typescript
async function forkJoin<T>(
  tasks: (() => Promise<T>)[]
): Promise<T[]> {
  return await Promise.all(tasks.map(task => task()))
}
```

**Use Cases:**
- Parallel builds
- Parallel tests
- Parallel linting

**Benefits:**
- Faster
- Efficient
- Scalable

#### 3. Circuit Breaker Pattern

**Description:** Stop operations ที่ล้มเหลวซ้ำๆ

**Implementation:**
```typescript
class CircuitBreaker {
  private failures = 0
  private lastFailureTime = 0
  private state = 'closed'

  async execute(fn: () => Promise<any>) {
    if (this.state === 'open') {
      throw new Error('Circuit breaker is open')
    }

    try {
      const result = await fn()
      this.reset()
      return result
    } catch (error) {
      this.recordFailure()
      throw error
    }
  }

  private recordFailure() {
    this.failures++
    this.lastFailureTime = Date.now()
    
    if (this.failures >= 5) {
      this.state = 'open'
    }
  }

  private reset() {
    this.failures = 0
    this.state = 'closed'
  }
}
```

**Use Cases:**
- External API calls
- Network requests
- Resource-intensive operations

**Benefits:**
- Prevents cascading failures
- Resilient
- Configurable

### Anti-Patterns

#### 1. Skipping Ship-Code

**Anti-Pattern:** ข้าม ship-code ไปเลย

**Solution:** ทำ ship-code ทุกครั้ง

#### 2. Mixing Responsibilities

**Anti-Pattern:** ผสม responsibilities ระหว่าง phases

**Solution:** แยก responsibilities ชัดเจน

#### 3. Over-Engineering

**Anti-Pattern:** แก้ไขหลายจุดเมื่อเจอ error

**Solution:** แก้ไข root cause เท่านั้ม

### Pattern Selection Guide

| Pattern | Use Case | Complexity |
|---------|----------|------------|
| Sequential Execution | Ordered phases | Low |
| Loop Until Complete | Retry mechanisms | Medium |
| Error Resolution | Error handling | High |
| Strategy | Swappable implementations | Medium |
| Observer | Event monitoring | Medium |
| Command | Undoable operations | High |
| Minimal Fix | Error fixes | Low |
| Retry | Transient failures | Low |
| Cache | Performance optimization | Low |
| Pipeline | Composable workflows | Medium |
| Fork-Join | Parallel execution | Medium |
| Circuit Breaker | Failure prevention | High |

### Next Steps

- อ่าน [Troubleshooting](troubleshooting.md) สำหรับการแก้ปัญหา
- อ่าน [Best Practices](best-practices.md) สำหรับแนวทางปฏิบัติที่ดีที่สุด
- อ่าน [Performance](performance.md) สำหรับประสิทธิภาพ
