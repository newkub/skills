# Best Practices

Mastra development best practices

## Always Verify Documentation

Mastra APIs change frequently. Always check current docs:
1. Embedded docs in `node_modules/@mastra/*/dist/docs/`
2. Remote docs at `https://mastra.ai/llms.txt`

## Use TypeScript ES2022

Mastra requires ES modules. CommonJS will fail.

```json
{
  "compilerOptions": {
    "module": "ESNext",
    "moduleResolution": "Bundler"
  }
}
```

## Model Format

Always use `"provider/model-name"` format.

```typescript
// ✅ Correct
model: 'openai/gpt-4'

// ❌ Wrong
model: 'gpt-4'
```

## Tool Definition

```typescript
import { tool } from '@mastra/core';
import { z } from 'zod';

const myTool = tool({
  name: 'myTool',
  description: 'What it does',
  inputSchema: z.object({ 
    param: z.string() 
  }),
  execute: async ({ param }) => {
    return { result: param };
  },
});
```

## Error Handling

```typescript
try {
  const result = await agent.run(input);
} catch (error) {
  if (error instanceof MastraError) {
    console.error('Mastra error:', error.message);
  }
}
```

## Testing

```typescript
import { describe, it, expect } from 'vitest';

describe('Agent', () => {
  it('should respond', async () => {
    const agent = new Agent({ name: 'Test' });
    const response = await agent.run('Hello');
    expect(response.text).toBeDefined();
  });
});
```