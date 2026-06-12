# Patterns

Design patterns สำหรับ Mastra applications

## ภาพรวว

Common patterns:
- Agent patterns
- Workflow patterns
- Tool patterns
- Memory patterns
- Integration patterns

## Agent Patterns

### 1. Single Responsibility Agent

Agent ที่มีหน้าที่เดียวชัดเจน

```typescript
const passwordResetAgent = new Agent({
  name: 'password-reset',
  description: 'Handles password reset requests',
  tools: [emailTool, authTool],
  workflow: passwordResetWorkflow
});
```

### 2. Composite Agent

Agent ที่รวมหลาย agents เข้าด้วยกัน

```typescript
const compositeAgent = new Agent({
  name: 'composite-agent',
  subAgents: {
    support: customerSupportAgent,
    analytics: dataAnalystAgent
  }
});
```

### 3. Hierarchical Agent

Agent ที่มี hierarchy ของ decision making

```typescript
const managerAgent = new Agent({
  name: 'manager',
  delegates: {
    technical: technicalAgent,
    billing: billingAgent,
    general: generalAgent
  }
});
```

## Workflow Patterns

### 1. Sequential Workflow

Execute steps ตามลำดับ

```typescript
const sequentialWorkflow = new Workflow({
  name: 'sequential',
  steps: [
    { agent: agent1, task: 'task1' },
    { agent: agent2, task: 'task2', dependsOn: ['task1'] },
    { agent: agent3, task: 'task3', dependsOn: ['task2'] }
  ]
});
```

### 2. Parallel Workflow

Execute steps แบบ parallel

```typescript
const parallelWorkflow = new Workflow({
  name: 'parallel',
  steps: [
    { agent: agent1, task: 'task1', parallel: true },
    { agent: agent2, task: 'task2', parallel: true },
    { agent: agent3, task: 'task3', parallel: true }
  ]
});
```

### 3. Conditional Workflow

Execute steps ตาม conditions

```typescript
const conditionalWorkflow = new Workflow({
  name: 'conditional',
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

### 4. Retry Workflow

Retry steps ที่ fail

```typescript
const retryWorkflow = new Workflow({
  name: 'retry',
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

## Tool Patterns

### 1. Stateless Tool

Tool ที่ไม่มี state

```typescript
const statelessTool = new Tool({
  name: 'stateless-tool',
  execute: async (input) => {
    return await fetch(input.url);
  }
});
```

### 2. Stateful Tool

Tool ที่มี state

```typescript
class StatefulTool extends Tool {
  private state = {};

  constructor() {
    super({
      name: 'stateful-tool',
      execute: async (input) => {
        this.state[input.key] = input.value;
        return this.state;
      }
    });
  }
}
```

### 3. Cached Tool

Tool ที่มี caching

```typescript
const cachedTool = new Tool({
  name: 'cached-tool',
  cache: new Cache({ ttl: 300 }),
  execute: async (input) => {
    return await fetch(input.url);
  }
});
```

### 4. Batch Tool

Tool ที่รองรับ batch operations

```typescript
const batchTool = new Tool({
  name: 'batch-tool',
  execute: async (inputs) => {
    const promises = inputs.map(input => fetch(input.url));
    return Promise.all(promises);
  }
});
```

## Memory Patterns

### 1. Short-term Memory

Memory สำหรับ context ระยะสั้น

```typescript
const shortTermMemory = new Memory({
  store: new InMemoryStore(),
  retention: '1h'
});
```

### 2. Long-term Memory

Memory สำหรับ context ระยะยาว

```typescript
const longTermMemory = new Memory({
  store: new VectorStore(),
  retention: '30d'
});
```

### 3. Hierarchical Memory

Memory ที่มี hierarchy

```typescript
const hierarchicalMemory = new Memory({
  stores: {
    short: new InMemoryStore(),
    long: new VectorStore()
  },
  policy: 'tiered'
});
```

### 4. Shared Memory

Memory ที่ใช้ร่วมกันหลาย agents

```typescript
const sharedMemory = new Memory({
  store: new RedisStore(),
  namespace: 'shared'
});
```

## Integration Patterns

### 1. API Gateway Pattern

Centralized API access

```typescript
const apiGateway = new Tool({
  name: 'api-gateway',
  execute: async (input) => {
    const service = getService(input.service);
    return await service.call(input);
  }
});
```

### 2. Circuit Breaker Pattern

Prevent cascading failures

```typescript
const circuitBreaker = new Tool({
  name: 'circuit-breaker',
  circuitBreaker: {
    threshold: 5,
    timeout: 60000
  },
  execute: async (input) => {
    return await fetch(input.url);
  }
});
```

### 3. Rate Limiting Pattern

Control request rate

```typescript
const rateLimitedTool = new Tool({
  name: 'rate-limited',
  rateLimit: {
    max: 100,
    window: 60000
  },
  execute: async (input) => {
    return await fetch(input.url);
  }
});
```

### 4. Retry Pattern

Retry failed requests

```typescript
const retryTool = new Tool({
  name: 'retry-tool',
  retry: {
    max: 3,
    backoff: 'exponential'
  },
  execute: async (input) => {
    return await fetch(input.url);
  }
});
```

## Error Handling Patterns

### 1. Fallback Pattern

Fallback ไปยัง alternative

```typescript
const fallbackTool = new Tool({
  name: 'fallback-tool',
  fallback: async (error) => {
    return await fetch(backupUrl);
  },
  execute: async (input) => {
    return await fetch(primaryUrl);
  }
});
```

### 2. Dead Letter Pattern

Queue failed operations

```typescript
const deadLetterTool = new Tool({
  name: 'dead-letter',
  deadLetter: new Queue('failed-operations'),
  execute: async (input) => {
    try {
      return await fetch(input.url);
    } catch (error) {
      await deadLetterTool.deadLetter.push({ input, error });
      throw error;
    }
  }
});
```

## Best Practices

### 1. Keep Agents Focused

แต่ละ agent ควรมี responsibility เดียว

### 2. Use Workflows for Orchestration

ใช้ workflows สำหรับ complex logic

### 3. Design Tools for Reusability

Tools ควร reusable ข้าม agents

### 4. Implement Proper Error Handling

ใช้ patterns สำหรับ error handling

### 5. Monitor and Log

Track operations สำหรับ debugging
