# Testing

วิธี testing สำหรับ Mastra applications

## ภาพรวว

Testing strategies:
- Unit tests
- Integration tests
- E2E tests
- Tool testing
- Agent testing
- Workflow testing

## Setup

### Install Testing Dependencies

```bash
bun add -D vitest @mastra/test
```

### Configure Vitest

```typescript
// vitest.config.ts
import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    environment: 'node',
    globals: true
  }
});
```

## Unit Tests

### Tool Testing

```typescript
import { describe, it, expect } from 'vitest';
import { Tool } from '@mastra/core';

describe('API Tool', () => {
  it('should execute successfully', async () => {
    const tool = new Tool({
      name: 'api-tool',
      execute: async (input) => {
        return { success: true, data: input };
      }
    });

    const result = await tool.execute({ url: 'https://api.example.com' });
    expect(result.success).toBe(true);
  });

  it('should handle errors', async () => {
    const tool = new Tool({
      name: 'api-tool',
      execute: async () => {
        throw new Error('API Error');
      }
    });

    await expect(tool.execute({})).rejects.toThrow('API Error');
  });
});
```

### Agent Testing

```typescript
import { testAgent } from '@mastra/test';

describe('Customer Support Agent', () => {
  it('should respond to inquiries', async () => {
    const result = await testAgent(customerSupportAgent, 'How do I reset my password?');
    expect(result.message).toContain('password');
  });

  it('should use tools when needed', async () => {
    const result = await testAgent(customerSupportAgent, 'Check my order status');
    expect(result.toolsUsed).toContain('order-tool');
  });
});
```

### Memory Testing

```typescript
describe('Memory Store', () => {
  it('should store and retrieve data', async () => {
    const memory = new Memory({ store: new InMemoryStore() });
    
    await memory.store('key1', { data: 'value1' });
    const result = await memory.retrieve('key1');
    
    expect(result.data).toBe('value1');
  });

  it('should handle vector search', async () => {
    const memory = new Memory({ store: new VectorStore() });
    
    await memory.store('key1', { text: 'hello world' });
    const results = await memory.search('hello');
    
    expect(results.length).toBeGreaterThan(0);
  });
});
```

## Integration Tests

### Tool Integration

```typescript
describe('API Tool Integration', () => {
  it('should call real API', async () => {
    const tool = new Tool({
      name: 'api-tool',
      execute: async (input) => {
        const response = await fetch(input.url);
        return response.json();
      }
    });

    const result = await tool.execute({ url: 'https://api.example.com' });
    expect(result).toBeDefined();
  });
});
```

### Workflow Integration

```typescript
describe('Workflow Integration', () => {
  it('should execute complete workflow', async () => {
    const result = await supportWorkflow.execute({
      input: 'Customer inquiry'
    });

    expect(result.status).toBe('completed');
    expect(result.steps).toHaveLength(3);
  });
});
```

## E2E Tests

### Playwright Setup

```bash
bun add -D @playwright/test
```

```typescript
import { test, expect } from '@playwright/test';

test('agent interaction', async ({ page }) => {
  await page.goto('http://localhost:3000');
  
  await page.fill('input[name="message"]', 'Hello');
  await page.click('button[type="submit"]');
  
  const response = await page.waitForSelector('.response');
  expect(await response.textContent()).toContain('Hello');
});
```

## Mocking

### Mock Tools

```typescript
import { vi } from 'vitest';

const mockTool = new Tool({
  name: 'mock-tool',
  execute: vi.fn(async (input) => {
    return { success: true, data: input };
  })
});

const agent = new Agent({
  name: 'test-agent',
  tools: { mockTool }
});
```

### Mock Memory

```typescript
const mockMemory = {
  store: vi.fn(),
  retrieve: vi.fn(async (key) => ({ data: 'mock-data' })),
  search: vi.fn(async (query) => [])
};

const agent = new Agent({
  name: 'test-agent',
  memory: mockMemory
});
```

### Mock AI Provider

```typescript
const mockLLM = {
  generate: vi.fn(async (prompt) => {
    return 'Mock response';
  })
};

const agent = new Agent({
  name: 'test-agent',
  llm: mockLLM
});
```

## Test Data

### Fixtures

```typescript
// fixtures/agents.ts
export const testAgent = new Agent({
  name: 'test-agent',
  tools: {}
});

// fixtures/workflows.ts
export const testWorkflow = new Workflow({
  name: 'test-workflow',
  steps: []
});
```

### Test Scenarios

```typescript
const scenarios = [
  {
    name: 'simple inquiry',
    input: 'Hello',
    expected: { contains: 'hello' }
  },
  {
    name: 'complex inquiry',
    input: 'How do I reset my password?',
    expected: { contains: 'password' }
  }
];

scenarios.forEach(scenario => {
  it(`should handle ${scenario.name}`, async () => {
    const result = await testAgent(agent, scenario.input);
    expect(result.message).toContain(scenario.expected.contains);
  });
});
```

## Coverage

### Run Coverage

```bash
bun test --coverage
```

### Coverage Configuration

```typescript
// vitest.config.ts
export default defineConfig({
  test: {
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html'],
      exclude: ['node_modules/', 'tests/']
    }
  }
});
```

## Best Practices

### 1. Test Isolation

แต่ละ test ควร independent:

```typescript
beforeEach(() => {
  // Reset state
  mockTool.execute.mockClear();
});
```

### 2. Descriptive Tests

ใช้ชื่อ test ที่ชัดเจน:

```typescript
it('should return error when API fails', async () => {
  // ...
});
```

### 3. Test Edge Cases

ทดสอบ edge cases:

```typescript
it('should handle empty input', async () => {
  const result = await tool.execute({});
  expect(result.error).toBeDefined();
});

it('should handle invalid input', async () => {
  const result = await tool.execute({ invalid: true });
  expect(result.error).toBeDefined();
});
```

### 4. Use Assertions

ใช้ assertions ที่ชัดเจน:

```typescript
expect(result).toBeDefined();
expect(result.status).toBe('success');
expect(result.data).toHaveProperty('id');
```

## CI/CD Integration

### GitHub Actions

```yaml
# .github/workflows/test.yml
name: Test
on: [push, pull_request]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
      - run: bun install
      - run: bun test
```

### Vercel

```json
{
  "scripts": {
    "vercel-build": "bun test && bun build"
  }
}
```
