# Workflow

Workflow concept และ orchestration ใน Mastra

## คำนิยาม

Workflow เป็น orchestration layer ที่:
- กำหนดลำดับการทำงานของ agents
- จัดการ dependencies ระหว่าง tasks
- จัดการ error handling และ retries
- รองรับ parallel และ sequential execution

## ความสำคัญ

Workflow เป็นสิ่งสำคัญเพราะ:
- ทำให้สามารถ orchestrate complex logic ได้
- จัดการ dependencies อัตโนมัติ
- ให้ error handling และ recovery
- รองรับ parallel execution

## เมื่อไรควรใช้

ใช้ Workflow เมื่อ:
- ต้องการ orchestrate multiple agents
- มี dependencies ระหว่าง tasks
- ต้องการ error handling และ retries
- ต้องการ parallel execution

## ตัวอย่าง

### Sequential Workflow

```typescript
const workflow = new Workflow({
  name: 'sequential-workflow',
  steps: [
    { agent: agent1, task: 'task1' },
    { agent: agent2, task: 'task2', dependsOn: ['task1'] },
    { agent: agent3, task: 'task3', dependsOn: ['task2'] }
  ]
});
```

### Parallel Workflow

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

### Conditional Workflow

```typescript
const workflow = new Workflow({
  name: 'conditional-workflow',
  steps: [
    { 
      agent: agent1, 
      task: 'task1',
      condition: (result) => result.success 
    },
    { 
      agent: agent2, 
      task: 'task2',
      condition: (result) => !result.success 
    }
  ]
});
```

### Workflow with Retry

```typescript
const workflow = new Workflow({
  name: 'retry-workflow',
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

## ข้อดีและข้อเสีย

### ข้อดี

- **Orchestration:** จัดการ complex logic ได้
- **Automation:** Automatic dependency resolution
- **Resilience:** Built-in error handling และ retries
- **Performance:** Parallel execution support

### ข้อเสีย

- **Complexity:** ต้องเข้าใจ DAG และ dependencies
- **Debugging:** ยากที่จะ debug complex workflows
- **Overhead:** มี overhead จาก orchestration
- **Learning Curve:** ต้องเรียนรู้ concepts ใหม่
