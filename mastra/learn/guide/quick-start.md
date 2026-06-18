# Quick Start

Get started with Mastra in minutes

## Step 1: Create Project

```bash
bun create mastra@latest my-agent
cd my-agent
```

## Step 2: Configure Environment

```bash
# .env
OPENAI_API_KEY=sk-...
```

## Step 3: Create Your First Agent

```typescript
// src/index.ts
import { Agent } from '@mastra/core';

const agent = new Agent({
  name: 'MyAgent',
  model: 'openai/gpt-4',
  instructions: 'You are a helpful assistant',
});

const response = await agent.run('Hello, who are you?');
console.log(response.text);
```

## Step 4: Run

```bash
bun run dev
```

Mastra Studio opens at `http://localhost:4111`

## Create a Tool

```typescript
import { tool } from '@mastra/core';
import { z } from 'zod';

const weatherTool = tool({
  name: 'getWeather',
  description: 'Get weather for a city',
  inputSchema: z.object({ city: z.string() }),
  execute: async ({ city }) => {
    return { temp: 22, conditions: 'sunny' };
  },
});
```

## Create a Workflow

```typescript
import { Workflow } from '@mastra/core';

const workflow = new Workflow({
  name: 'data-pipeline',
  steps: [
    { id: 'fetch', action: 'fetchData' },
    { id: 'process', action: 'processData' },
    { id: 'save', action: 'saveData' },
  ],
});
```

## Next Steps

- Read [key-concept.md](key-concept.md) for core concepts
- Read [configuration.md](configuration.md) for setup options
- Check [best-practices.md](best-practices.md) for recommendations