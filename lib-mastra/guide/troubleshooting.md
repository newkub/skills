# Troubleshooting

การแก้ไขปัญหาที่พบบ่อยใน Mastra applications

## ภาพรวว

Common issues:
- Installation issues
- Configuration errors
- Runtime errors
- Performance issues
- Integration issues

## Installation Issues

### Issue: Dependency Conflicts

**Symptom:**
```
Error: Cannot resolve dependency
```

**Solution:**
```bash
# Clear cache
bun pm cache rm

# Reinstall
bun install

# Use specific version
bun add @mastra/core@latest
```

### Issue: TypeScript Errors

**Symptom:**
```
Error: Cannot find module '@mastra/core'
```

**Solution:**
```bash
# Install types
bun add -D @types/node

# Check tsconfig.json
{
  "compilerOptions": {
    "moduleResolution": "bundler",
    "types": ["node"]
  }
}
```

## Configuration Errors

### Issue: Agent Configuration

**Symptom:**
```
Error: Invalid agent configuration
```

**Solution:**
```typescript
// Validate configuration
import { validateAgentConfig } from '@mastra/core';

const config = {
  name: 'my-agent',
  tools: {}
};

const validated = validateAgentConfig(config);
```

### Issue: Tool Schema Validation

**Symptom:**
```
Error: Invalid tool schema
```

**Solution:**
```typescript
// Use correct schema format
const tool = new Tool({
  name: 'my-tool',
  schema: {
    type: 'object',
    properties: {
      input: { type: 'string' }
    }
  }
});
```

## Runtime Errors

### Issue: Tool Execution Timeout

**Symptom:**
```
Error: Tool execution timeout
```

**Solution:**
```typescript
const tool = new Tool({
  name: 'my-tool',
  timeout: 30000, // 30 seconds
  execute: async (input) => {
    return await fetch(input.url);
  }
});
```

### Issue: Memory Retrieval Failure

**Symptom:**
```
Error: Memory retrieval failed
```

**Solution:**
```typescript
// Check connection
const memory = new Memory({
  store: new VectorStore({
    connectionString: process.env.VECTOR_DB_URL
  })
});

// Test connection
await memory.store.connect();
```

### Issue: Workflow Execution Failure

**Symptom:**
```
Error: Workflow execution failed
```

**Solution:**
```typescript
// Enable debug mode
const workflow = new Workflow({
  name: 'my-workflow',
  debug: true,
  steps: [...]
});

// Check step dependencies
workflow.validate();
```

## Performance Issues

### Issue: Slow Tool Execution

**Symptom:**
Tool execution takes too long

**Solution:**
```typescript
// Add caching
const tool = new Tool({
  name: 'my-tool',
  cache: new Cache({ ttl: 300 }),
  execute: async (input) => {
    return await fetch(input.url);
  }
});

// Use batching
const batchTool = new Tool({
  name: 'batch-tool',
  execute: async (inputs) => {
    const promises = inputs.map(input => fetch(input.url));
    return Promise.all(promises);
  }
});
```

### Issue: High Memory Usage

**Symptom:**
Application uses too much memory

**Solution:**
```typescript
// Implement retention policies
const memory = new Memory({
  store: new VectorStore(),
  retention: {
    shortTerm: '1h',
    longTerm: '7d'
  }
});

// Clean up old data
await memory.cleanup();
```

## Integration Issues

### Issue: API Connection Failure

**Symptom:**
```
Error: API connection failed
```

**Solution:**
```typescript
// Add retry logic
const tool = new Tool({
  name: 'api-tool',
  retry: { max: 3, backoff: 'exponential' },
  execute: async (input) => {
    return await fetch(input.url);
  }
});

// Check API status
const status = await checkApiStatus(input.url);
```

### Issue: Authentication Failure

**Symptom:**
```
Error: Authentication failed
```

**Solution:**
```typescript
// Verify credentials
const auth = new Auth({
  provider: 'api-key',
  validate: async (apiKey) => {
    const user = await validateApiKey(apiKey);
    if (!user) throw new Error('Invalid API key');
    return user;
  }
});
```

## Debugging

### Enable Debug Mode

```typescript
const agent = new Agent({
  name: 'my-agent',
  debug: true
});
```

### Use Logging

```typescript
import { Logger } from '@mastra/logger';

const logger = new Logger({ level: 'debug' });

const agent = new Agent({
  name: 'my-agent',
  logger
});
```

### Enable Profiling

```typescript
import { Profiler } from '@mastra/profiler';

const profiler = new Profiler();

profiler.profile('agent.execution', async () => {
  await agent.execute(input);
});
```

## Common Solutions

### 1. Restart Development Server

```bash
bun run dev
```

### 2. Clear Cache

```bash
bun pm cache rm
rm -rf node_modules
bun install
```

### 3. Check Environment Variables

```bash
# List environment variables
bun run env

# Verify required variables
echo $API_KEY
echo $DATABASE_URL
```

### 4. Update Dependencies

```bash
bun update
```

### 5. Check Logs

```bash
# View logs
bun run logs

# Filter errors
bun run logs | grep ERROR
```

## Getting Help

### Documentation

- [Official Docs](https://docs.mastra.ai)
- [API Reference](https://api.mastra.ai)
- [Examples](https://github.com/mastra-ai/examples)

### Community

- [Discord](https://discord.gg/mastra)
- [GitHub Issues](https://github.com/mastra-ai/mastra/issues)
- [Stack Overflow](https://stackoverflow.com/questions/tagged/mastra)

### Support

- Email: support@mastra.ai
- Twitter: @mastra_ai
