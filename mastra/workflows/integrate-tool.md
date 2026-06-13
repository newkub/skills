---
description: Integration tool เข้ากับ agent ใน Mastra
---

# Integrate Tool

Integration tool เข้ากับ agent ใน Mastra

## Steps

### 1. Create Tool

สร้าง tool ใน `src/tools/`:

```typescript
// src/tools/my-tool.ts
import { Tool } from '@mastra/core';

export const myTool = new Tool({
  name: 'my-tool',
  description: 'My custom tool',
  schema: {
    type: 'object',
    properties: {
      input: { type: 'string' }
    }
  },
  execute: async (input) => {
    return { result: 'success' };
  }
});
```

### 2. Add to Agent

```typescript
// src/agents/my-agent.ts
import { myTool } from '../tools';

export const myAgent = new Agent({
  name: 'my-agent',
  tools: { myTool }
});
```

### 3. Add Caching (Optional)

```typescript
import { Cache } from '@mastra/cache';

export const myTool = new Tool({
  name: 'my-tool',
  cache: new Cache({ ttl: 300 }),
  execute: async (input) => {
    return await fetchData(input);
  }
});
```

### 4. Add Retry (Optional)

```typescript
export const myTool = new Tool({
  name: 'my-tool',
  retry: { max: 3, backoff: 'exponential' },
  execute: async (input) => {
    return await fetchData(input);
  }
});
```

### 5. Export Tool

```typescript
// src/tools/index.ts
export { myTool } from './my-tool';
```

### 6. Test Tool

```typescript
import { testTool } from '@mastra/test';

test('tool should execute', async () => {
  const result = await myTool.execute({ input: 'test' });
  expect(result.success).toBe(true);
});
```

## Tool Types

### REST API Tool

```typescript
const apiTool = new Tool({
  name: 'api-tool',
  execute: async (input) => {
    const response = await fetch(input.url);
    return response.json();
  }
});
```

### Database Tool

```typescript
const dbTool = new Tool({
  name: 'db-tool',
  execute: async (input) => {
    const result = await pool.query(input.query);
    return result.rows;
  }
});
```

### File Tool

```typescript
const fileTool = new Tool({
  name: 'file-tool',
  execute: async (input) => {
    const content = await fs.readFile(input.path, 'utf-8');
    return content;
  }
});
```

## Configuration Options

| Option | Type | Required | Description |
|--------|------|----------|-------------|
| name | string | ✅ | Tool name |
| description | string | ⭕ | Tool description |
| schema | object | ⭕ | Input/output schema |
| execute | function | ✅ | Execution function |
| cache | Cache | ⭕ | Cache configuration |
| retry | RetryConfig | ⭕ | Retry configuration |

## Best Practices

- ใช้ schema validation สำหรับ input/output
- เพิ่ม error handling ใน execute function
- ใช้ caching สำหรับ expensive operations
- Test tools แยกจาก agents
- ทำให้ tools reusable ข้าม agents
