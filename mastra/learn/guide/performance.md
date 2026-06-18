# Performance

ประสิทธิภาพและการ optimize สำหรับ Mastra applications

## ภาพรวม

ปัจจัยที่ส่งผลต่อ performance:
- Tool execution time
- Memory retrieval speed
- AI model latency
- Workflow orchestration overhead
- Network latency

## Optimization Strategies

### 1. Tool Optimization

#### Caching

```typescript
import { Cache } from '@mastra/cache';

const cache = new Cache({ ttl: 300 });

const tool = new Tool({
  name: 'api-tool',
  execute: async (input) => {
    const cacheKey = `api:${input.url}`;
    const cached = await cache.get(cacheKey);
    
    if (cached) return cached;
    
    const result = await fetch(input.url);
    await cache.set(cacheKey, result);
    return result;
  }
});
```

#### Batching

```typescript
const batchTool = new Tool({
  name: 'batch-api',
  execute: async (inputs) => {
    const promises = inputs.map(input => fetch(input.url));
    return Promise.all(promises);
  }
});
```

#### Connection Pooling

```typescript
import { Pool } from 'pg';

const pool = new Pool({ max: 20 });

const dbTool = new Tool({
  name: 'db-tool',
  execute: async (query) => {
    const client = await pool.connect();
    try {
      const result = await client.query(query);
      return result;
    } finally {
      client.release();
    }
  }
});
```

### 2. Memory Optimization

#### Vector Indexing

```typescript
import { VectorStore } from '@mastra/vector';

const vectorStore = new VectorStore({
  provider: 'pinecone',
  index: 'my-index',
  indexConfig: {
    metric: 'cosine',
    pods: 1
  }
});
```

#### Selective Retrieval

```typescript
const memory = new Memory({
  store: vectorStore,
  retrieval: {
    topK: 5,
    threshold: 0.7
  }
});
```

#### Retention Policies

```typescript
const memory = new Memory({
  store: vectorStore,
  retention: {
    shortTerm: '1h',
    longTerm: '7d',
    archive: '30d'
  }
});
```

### 3. Workflow Optimization

#### Parallel Execution

```typescript
const workflow = new Workflow({
  name: 'parallel-workflow',
  steps: [
    { 
      agent: agent1, 
      task: 'task1',
      parallel: true 
    },
    { 
      agent: agent2, 
      task: 'task2',
      parallel: true 
    }
  ]
});
```

#### Early Termination

```typescript
const workflow = new Workflow({
  name: 'conditional-workflow',
  steps: [
    { 
      agent: agent1, 
      task: 'task1',
      condition: (result) => result.success 
    }
  ]
});
```

### 4. AI Model Optimization

#### Model Selection

```typescript
const agent = new Agent({
  name: 'fast-agent',
  llm: new OpenAIProvider({
    model: 'gpt-3.5-turbo', // Faster than gpt-4
    temperature: 0.7
  })
});
```

#### Streaming

```typescript
const agent = new Agent({
  name: 'streaming-agent',
  llm: new OpenAIProvider({
    model: 'gpt-4',
    stream: true
  })
});
```

#### Context Optimization

```typescript
const agent = new Agent({
  name: 'context-optimized-agent',
  contextWindow: 4096,
  maxTokens: 1000
});
```

## Performance Monitoring

### Metrics

```typescript
import { Metrics } from '@mastra/metrics';

const metrics = new Metrics();

const tool = new Tool({
  name: 'monitored-tool',
  execute: async (input) => {
    const start = Date.now();
    try {
      const result = await fetch(input.url);
      metrics.record('tool.execution.time', Date.now() - start);
      return result;
    } catch (error) {
      metrics.record('tool.execution.error', 1);
      throw error;
    }
  }
});
```

### Profiling

```typescript
import { Profiler } from '@mastra/profiler';

const profiler = new Profiler();

profiler.profile('agent.execution', async () => {
  await agent.execute(input);
});
```

## Benchmarks

### Tool Execution

| Tool Type | Avg Latency | P95 Latency | P99 Latency |
|-----------|-------------|-------------|-------------|
| REST API  | 50ms        | 100ms       | 200ms       |
| GraphQL   | 75ms        | 150ms       | 300ms       |
| Database  | 25ms        | 50ms        | 100ms       |

### Memory Retrieval

| Store Type | Avg Latency | P95 Latency | P99 Latency |
|------------|-------------|-------------|-------------|
| In-Memory  | 5ms         | 10ms        | 20ms        |
| Vector     | 50ms        | 100ms       | 200ms       |
| PostgreSQL | 25ms        | 50ms        | 100ms       |

### AI Model Inference

| Model | Avg Latency | P95 Latency | P99 Latency |
|-------|-------------|-------------|-------------|
| GPT-3.5 | 500ms | 1s | 2s |
| GPT-4 | 2s | 5s | 10s |
| Local | 100ms | 200ms | 500ms |

## Best Practices

### 1. Use Caching

Cache results ที่มีค่าใช้งานสูง:
- API calls
- Database queries
- Vector searches
- AI model responses

### 2. Optimize Context

ลด context size:
- ใช้ selective retrieval
- จำกัด conversation history
- ใช้ summarization
- เลือก model ที่เหมาะสม

### 3. Use Parallel Execution

Execute tasks แบบ parallel เมื่อเป็นไปได้:
- Independent tool calls
- Multiple memory retrievals
- Parallel workflow steps

### 4. Monitor Performance

Track metrics สำคัญ:
- Execution time
- Error rates
- Resource usage
- Cache hit rates

## Common Bottlenecks

### 1. Network Latency

**Solution:**
- Use CDN
- Implement caching
- Reduce API calls
- Use batch operations

### 2. AI Model Latency

**Solution:**
- Use faster models
- Implement streaming
- Cache responses
- Use local models

### 3. Memory Retrieval

**Solution:**
- Optimize vector indexing
- Use selective retrieval
- Implement caching
- Use faster backends
