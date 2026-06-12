# Integration

วิธี integration Mastra กับ tools และ services อื่นๆ

## ภาพรวม

Mastra รองรับ integration กับ:
- External APIs (REST, GraphQL)
- Databases (SQL, NoSQL, Vector Stores)
- AI Models (OpenAI, Anthropic, Local models)
- Messaging Platforms (Slack, Discord, Email)
- Cloud Services (AWS, GCP, Azure)

## Integration Patterns

### 1. Tool Integration

สร้าง custom tools สำหรับ external services:

```typescript
import { Tool } from '@mastra/core';

const apiTool = new Tool({
  name: 'api-tool',
  description: 'Call external API',
  schema: {
    type: 'object',
    properties: {
      endpoint: { type: 'string' },
      method: { type: 'string', enum: ['GET', 'POST'] }
    }
  },
  execute: async ({ endpoint, method }) => {
    const response = await fetch(endpoint, { method });
    return response.json();
  }
});
```

### 2. Database Integration

เชื่อมต่อกับ databases ผ่าน memory layer:

```typescript
import { Memory } from '@mastra/core';
import { PostgresStore } from '@mastra/postgres';

const memory = new Memory({
  store: new PostgresStore({
    connectionString: process.env.DATABASE_URL
  })
});
```

### 3. AI Model Integration

ใช้ AI models ต่างๆ ใน agents:

```typescript
import { Agent } from '@mastra/core';
import { OpenAIProvider } from '@mastra/openai';

const agent = new Agent({
  name: 'ai-agent',
  llm: new OpenAIProvider({
    apiKey: process.env.OPENAI_API_KEY,
    model: 'gpt-4'
  })
});
```

## Common Integrations

### REST APIs

```typescript
const restTool = new Tool({
  name: 'rest-api',
  execute: async (input) => {
    const response = await fetch(input.url, {
      method: input.method,
      headers: input.headers,
      body: JSON.stringify(input.body)
    });
    return response.json();
  }
});
```

### GraphQL APIs

```typescript
const graphqlTool = new Tool({
  name: 'graphql-api',
  execute: async (input) => {
    const response = await fetch(input.url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        query: input.query,
        variables: input.variables
      })
    });
    return response.json();
  }
});
```

### Vector Stores

```typescript
import { VectorStore } from '@mastra/vector';

const vectorStore = new VectorStore({
  provider: 'pinecone',
  apiKey: process.env.PINECONE_API_KEY,
  index: 'my-index'
});
```

### Message Platforms

#### Slack

```typescript
const slackTool = new Tool({
  name: 'slack-send',
  execute: async (input) => {
    await fetch('https://slack.com/api/chat.postMessage', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.SLACK_TOKEN}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        channel: input.channel,
        text: input.message
      })
    });
  }
});
```

#### Email

```typescript
const emailTool = new Tool({
  name: 'send-email',
  execute: async (input) => {
    // Use nodemailer or similar
    await transporter.sendMail({
      from: process.env.EMAIL_FROM,
      to: input.to,
      subject: input.subject,
      text: input.body
    });
  }
});
```

## Best Practices

### 1. Error Handling

```typescript
const tool = new Tool({
  name: 'api-tool',
  execute: async (input) => {
    try {
      const response = await fetch(input.url);
      if (!response.ok) {
        throw new Error(`HTTP ${response.status}`);
      }
      return response.json();
    } catch (error) {
      console.error('Tool execution failed:', error);
      throw error;
    }
  }
});
```

### 2. Rate Limiting

```typescript
import { RateLimiter } from '@mastra/rate-limiter';

const limiter = new RateLimiter({ max: 100, window: 60000 });

const tool = new Tool({
  name: 'api-tool',
  execute: async (input) => {
    await limiter.acquire();
    // Execute API call
  }
});
```

### 3. Caching

```typescript
import { Cache } from '@mastra/cache';

const cache = new Cache({ ttl: 300 });

const tool = new Tool({
  name: 'api-tool',
  execute: async (input) => {
    const cached = await cache.get(input.url);
    if (cached) return cached;
    
    const result = await fetch(input.url);
    await cache.set(input.url, result);
    return result;
  }
});
```

### 4. Authentication

```typescript
const authenticatedTool = new Tool({
  name: 'api-tool',
  execute: async (input) => {
    const response = await fetch(input.url, {
      headers: {
        'Authorization': `Bearer ${process.env.API_KEY}`
      }
    });
    return response.json();
  }
});
```

## Pitfalls

### 1. Blocking Operations

❌ ไม่ดี:
```typescript
const tool = new Tool({
  execute: async (input) => {
    const result = await slowOperation();
    return result;
  }
});
```

✅ ดี:
```typescript
const tool = new Tool({
  execute: async (input) => {
    const result = await slowOperation();
    return result;
  }
});
```

### 2. Missing Error Handling

❌ ไม่ดี:
```typescript
const tool = new Tool({
  execute: async (input) => {
    return await fetch(input.url);
  }
});
```

✅ ดี:
```typescript
const tool = new Tool({
  execute: async (input) => {
    try {
      const response = await fetch(input.url);
      if (!response.ok) throw new Error('Request failed');
      return response.json();
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
});
```

### 3. Hardcoded Secrets

❌ ไม่ดี:
```typescript
const tool = new Tool({
  execute: async (input) => {
    return await fetch(input.url, {
      headers: { 'Authorization': 'Bearer secret-key' }
    });
  }
});
```

✅ ดี:
```typescript
const tool = new Tool({
  execute: async (input) => {
    return await fetch(input.url, {
      headers: { 
        'Authorization': `Bearer ${process.env.API_KEY}` 
      }
    });
  }
});
```

## Testing Integrations

```typescript
describe('API Tool', () => {
  it('should call external API', async () => {
    const tool = new Tool({ /* ... */ });
    const result = await tool.execute({ url: 'https://api.example.com' });
    expect(result).toBeDefined();
  });
});
```
