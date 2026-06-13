# Workflow Orchestration

หลักการ orchestration workflows ใน Mastra

## คำนิยาม

หลักการ orchestration workflows ที่ดี คือการ:
- กำหนด dependencies อย่างชัดเจน
- จัดการ errors และ retries อย่างเหมาะสม
- ใช้ parallel execution เมื่อเป็นไปได้
- ทำให้ workflows สามารถ test ได้

## ความสำคัญ

การ orchestration workflows ที่ดีเป็นสิ่งสำคัญเพราะ:
- ทำให้ system ทำงานได้อย่าง reliable
- เพิ่ม performance ด้วย parallel execution
- ลด downtime ด้วย error handling
- ทำให้ debug และ monitor ได้ง่าย

## การประยุกต์ใช้

### 1. Clear Dependencies

กำหนด dependencies อย่างชัดเจน:

**✅ ดี:**
```typescript
const workflow = new Workflow({
  name: 'clear-workflow',
  steps: [
    { agent: agent1, task: 'task1' },
    { agent: agent2, task: 'task2', dependsOn: ['task1'] },
    { agent: agent3, task: 'task3', dependsOn: ['task2'] }
  ]
});
```

**❌ ไม่ดี:**
```typescript
const workflow = new Workflow({
  name: 'unclear-workflow',
  steps: [
    { agent: agent1, task: 'task1' },
    { agent: agent2, task: 'task2' }, // No clear dependency
    { agent: agent3, task: 'task3' }
  ]
});
```

### 2. Appropriate Error Handling

ใช้ error handling ที่เหมาะสม:

**✅ ดี:**
```typescript
const workflow = new Workflow({
  name: 'resilient-workflow',
  steps: [
    { 
      agent: agent1, 
      task: 'task1',
      retry: { max: 3, backoff: 'exponential' },
      fallback: async (error) => {
        return await fallbackTask();
      }
    }
  ]
});
```

**❌ ไม่ดี:**
```typescript
const workflow = new Workflow({
  name: 'fragile-workflow',
  steps: [
    { 
      agent: agent1, 
      task: 'task1'
      // No retry, no fallback
    }
  ]
});
```

### 3. Parallel Execution

ใช้ parallel execution เมื่อเป็นไปได้:

**✅ ดี:**
```typescript
const workflow = new Workflow({
  name: 'parallel-workflow',
  steps: [
    { agent: agent1, task: 'task1', parallel: true },
    { agent: agent2, task: 'task2', parallel: true },
    { agent: agent3, task: 'task3', parallel: true }
  ]
});
```

**❌ ไม่ดี:**
```typescript
const workflow = new Workflow({
  name: 'sequential-workflow',
  steps: [
    { agent: agent1, task: 'task1' },
    { agent: agent2, task: 'task2' }, // Could be parallel
    { agent: agent3, task: 'task3' }
  ]
});
```

### 4. Testable Workflows

ทำให้ workflows สามารถ test ได้:

**✅ ดี:**
```typescript
const workflow = new Workflow({
  name: 'testable-workflow',
  steps: [
    { agent: mockAgent1, task: 'task1' },
    { agent: mockAgent2, task: 'task2' }
  ]
});

// Test
const result = await workflow.execute({ input: 'test' });
expect(result.status).toBe('completed');
```

**❌ ไม่ดี:**
```typescript
const workflow = new Workflow({
  name: 'untestable-workflow',
  steps: [
    { agent: realAgent1, task: 'task1' }, // Hard to test
    { agent: realAgent2, task: 'task2' }
  ]
});
```

## ตัวอย่าง

### Before: Anti-Pattern

```typescript
const badWorkflow = new Workflow({
  name: 'bad-workflow',
  steps: [
    { agent: agent1, task: 'task1' },
    { agent: agent2, task: 'task2' }, // No clear dependency
    { agent: agent3, task: 'task3' }  // No error handling
  ]
});
```

### After: Good Pattern

```typescript
const goodWorkflow = new Workflow({
  name: 'good-workflow',
  steps: [
    { agent: agent1, task: 'task1' },
    { 
      agent: agent2, 
      task: 'task2',
      dependsOn: ['task1'],
      retry: { max: 3, backoff: 'exponential' }
    },
    { 
      agent: agent3, 
      task: 'task3',
      dependsOn: ['task2'],
      parallel: true
    }
  ]
});
```

## Anti-Patterns

### 1. Unclear Dependencies

Dependencies ที่ไม่ชัดเจน:
- ยากที่จะเข้าใจ flow
- ยากที่จะ debug
- อาจมี race conditions

### 2. No Error Handling

ไม่มี error handling:
- System ไม่ stable
- ยากที่จะ recover
- User experience แย่

### 3. Sequential When Parallel Possible

ใช้ sequential เมื่อสามารถ parallel ได้:
- Performance แย่
- Waste resources
- User experience แย่

### 4. Untestable Workflows

Workflows ที่ test ยาก:
- ยากที่จะ verify
- ยากที่จะ refactor
- Risky deployments
