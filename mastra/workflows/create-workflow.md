---
description: สร้าง workflow ใหม่ด้วย Mastra
---

# Create Workflow

สร้าง workflow ใหม่ด้วย Mastra framework

## Steps

### 1. Install Dependencies

```bash
bun add @mastra/core
```

### 2. Create Workflow File

สร้างไฟล์ใน `src/workflows/`:

```typescript
// src/workflows/my-workflow.ts
import { Workflow } from '@mastra/core';
import { myAgent } from '../agents';

export const myWorkflow = new Workflow({
  name: 'my-workflow',
  steps: [
    { agent: myAgent, task: 'task1' }
  ]
});
```

### 3. Add Multiple Steps

```typescript
export const myWorkflow = new Workflow({
  name: 'my-workflow',
  steps: [
    { agent: agent1, task: 'task1' },
    { agent: agent2, task: 'task2', dependsOn: ['task1'] },
    { agent: agent3, task: 'task3', dependsOn: ['task2'] }
  ]
});
```

### 4. Add Parallel Steps

```typescript
export const myWorkflow = new Workflow({
  name: 'my-workflow',
  steps: [
    { agent: agent1, task: 'task1', parallel: true },
    { agent: agent2, task: 'task2', parallel: true },
    { agent: agent3, task: 'task3', parallel: true }
  ]
});
```

### 5. Add Retry Configuration

```typescript
export const myWorkflow = new Workflow({
  name: 'my-workflow',
  steps: [
    { 
      agent: agent1, 
      task: 'task1',
      retry: { 
        max: 3, 
        backoff: 'exponential' 
      }
    }
  ]
});
```

### 6. Export Workflow

```typescript
// src/workflows/index.ts
export { myWorkflow } from './my-workflow';
```

### 7. Use Workflow

```typescript
import { myWorkflow } from './workflows';

const result = await myWorkflow.execute({ input: 'test' });
console.log(result);
```

## Configuration Options

| Option | Type | Required | Description |
|--------|------|----------|-------------|
| name | string | ✅ | Workflow name |
| steps | WorkflowStep[] | ✅ | Workflow steps |
| retry | RetryConfig | ⭕ | Retry configuration |
| debug | boolean | ⭕ | Enable debug mode |

## Step Options

| Option | Type | Description |
|--------|------|-------------|
| agent | Agent | Agent to execute |
| task | string | Task name |
| dependsOn | string[] | Dependencies |
| parallel | boolean | Execute in parallel |
| retry | RetryConfig | Retry configuration |
| condition | function | Conditional execution |

## Best Practices

- กำหนด dependencies อย่างชัดเจน
- ใช้ parallel execution เมื่อเป็นไปได้
- เพิ่ม retry configuration สำหรับ critical steps
- Test workflows ก่อน deployment
- ใช้ descriptive task names
