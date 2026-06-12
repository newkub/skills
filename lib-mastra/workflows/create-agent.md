---
description: สร้าง AI agent ใหม่ด้วย Mastra
---

# Create Agent

สร้าง AI agent ใหม่ด้วย Mastra framework

## Steps

### 1. Install Dependencies

```bash
bun add @mastra/core
```

### 2. Create Agent File

สร้างไฟล์ใน `src/agents/`:

```typescript
// src/agents/my-agent.ts
import { Agent } from '@mastra/core';
import { OpenAIProvider } from '@mastra/provider-openai';

export const myAgent = new Agent({
  name: 'my-agent',
  description: 'My first Mastra agent',
  llm: new OpenAIProvider({
    apiKey: process.env.OPENAI_API_KEY,
    model: 'gpt-4'
  })
});
```

### 3. Add Tools (Optional)

```typescript
import { Tool } from '@mastra/core';

const myTool = new Tool({
  name: 'my-tool',
  execute: async (input) => {
    return { result: 'success' };
  }
});

export const myAgent = new Agent({
  name: 'my-agent',
  tools: { myTool }
});
```

### 4. Add Memory (Optional)

```typescript
import { Memory } from '@mastra/core';
import { VectorStore } from '@mastra/memory';

const memory = new Memory({
  store: new VectorStore()
});

export const myAgent = new Agent({
  name: 'my-agent',
  memory
});
```

### 5. Export Agent

```typescript
// src/agents/index.ts
export { myAgent } from './my-agent';
```

### 6. Use Agent

```typescript
import { myAgent } from './agents';

const result = await myAgent.execute('Hello, world!');
console.log(result.message);
```

## Configuration Options

| Option | Type | Required | Description |
|--------|------|----------|-------------|
| name | string | ✅ | Agent name |
| description | string | ⭕ | Agent description |
| tools | object | ⭕ | Tools available to agent |
| memory | Memory | ⭕ | Memory instance |
| workflow | Workflow | ⭕ | Workflow instance |
| llm | LLMProvider | ⭕ | LLM provider |
| debug | boolean | ⭕ | Enable debug mode |

## Best Practices

- ใช้ descriptive names สำหรับ agents
- เพิ่ม description ที่ชัดเจน
- ใช้ tools ที่ relevant เท่านั้น
- เปิด debug mode ใน development
- Test agents ก่อน deployment
