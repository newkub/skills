# Key Concept

Core concepts in Mastra framework

## Agent

An agent is an autonomous AI that can make decisions and use tools to complete tasks.

```typescript
import { Agent } from '@mastra/core';

const agent = new Agent({
  name: 'MyAgent',
  model: 'openai/gpt-4',
  instructions: 'You are a helpful assistant',
});
```

**When to use:**
- Open-ended tasks
- Multi-step reasoning
- Tool-using assistance

## Workflow

A workflow is a structured sequence of steps for defined processes.

```typescript
import { Workflow } from '@mastra/core';

const workflow = new Workflow({
  name: 'data-processing',
  trigger: {},
});
```

**When to use:**
- Multi-step pipelines
- Approval processes
- ETL workflows

## Tool

Tools extend agent capabilities through APIs, databases, and external services.

```typescript
import { tool } from '@mastra/core';

const searchTool = tool({
  name: 'search',
  description: 'Search the web',
  inputSchema: z.object({ query: z.string() }),
  outputSchema: z.object({ results: z.array(z.string()) }),
  execute: async ({ query }) => {
    return { results: [`Result for ${query}`] };
  },
});
```

## Memory

Memory maintains context through message history and semantic recall.

```typescript
import { Memory } from '@mastra/core';

const memory = new Memory({
  type: 'vector',
  embeddings: 'openai/text-embedding-3-small',
});
```

## Storage

Storage persists data with providers like Postgres, LibSQL, and MongoDB.

```typescript
import { Storage } from '@mastra/core';

const storage = new Storage({
  type: 'postgres',
  connectionString: process.env.DATABASE_URL,
});
```

## Choosing Between Agent and Workflow

| Use Agent when | Use Workflow when |
|----------------|-------------------|
| Open-ended tasks | Defined steps |
| Decision-making | Sequential processes |
| Tool usage | ETL pipelines |
| Dynamic routing | Approval flows |