# Integration

## Framework Integration

### Next.js
```typescript
// app/api/agents/route.ts
import { routeAgentRequest } from "agents";
import { MyAgent } from "../../agents/my-agent";

export const runtime = "edge";

export async function GET(req: Request) {
  return routeAgentRequest(req, env);
}
```

### React
```typescript
// Use client SDK
import { useAgent } from "agents/client";

function MyComponent() {
  const agent = useAgent({ agent: "MyAgent", name: "user-123" });
  const { state, call } = agent;

  return <div>{state.count}</div>;
}
```

### Nuxt
```typescript
// server/api/agents.get.ts
import { routeAgentRequest } from "agents";

export default defineEventHandler((event) => {
  return routeAgentRequest(event.node.req, env);
});
```

## Database Integration

### Drizzle ORM
```typescript
import { drizzle } from "drizzle-orm/d1";
import * as schema from "./schema";

export class DatabaseAgent extends Agent<Env, State> {
  async queryData() {
    const db = drizzle(this.env.DB, { schema });
    const result = await db.select().from(schema.users);
    return result;
  }
}
```

### Prisma
```typescript
import { PrismaClient } from "@prisma/client";

export class PrismaAgent extends Agent<Env, State> {
  prisma = new PrismaClient({
    datasources: { db: { url: this.env.DATABASE_URL } }
  });
}
```

## AI Integration

### OpenAI
```typescript
import { openai } from "@ai-sdk/openai";
import { streamText } from "ai";

export class OpenAIAgent extends Agent<Env, State> {
  @callable()
  async chat(message: string) {
    const result = await streamText({
      model: openai("gpt-4"),
      prompt: message
    });
    return result.toDataStreamResponse();
  }
}
```

### Anthropic
```typescript
import { anthropic } from "@ai-sdk/anthropic";

export class AnthropicAgent extends Agent<Env, State> {
  @callable()
  async chat(message: string) {
    const result = await streamText({
      model: anthropic("claude-3-opus"),
      prompt: message
    });
    return result.toDataStreamResponse();
  }
}
```

## Storage Integration

### R2 Storage
```typescript
export class StorageAgent extends Agent<Env, State> {
  @callable()
  async uploadFile(key: string, data: ArrayBuffer) {
    await this.env.BUCKET.put(key, data);
    return { success: true, key };
  }

  @callable()
  async downloadFile(key: string) {
    const object = await this.env.BUCKET.get(key);
    return object?.arrayBuffer();
  }
}
```

### KV Storage
```typescript
export class KVAgent extends Agent<Env, State> {
  @callable()
  async cacheGet(key: string) {
    return await this.env.CACHE.get(key, "json");
  }

  @callable()
  async cacheSet(key: string, value: any, ttl?: number) {
    await this.env.CACHE.put(key, JSON.stringify(value), {
      expirationTtl: ttl
    });
  }
}
```

## Authentication Integration

### Clerk
```typescript
import { verifyToken } from "@clerk/nextjs/server";

export class ClerkAgent extends Agent<Env, State> {
  async validateConnection(connection: Connection) {
    const token = connection.request.headers.get("Authorization");
    const payload = await verifyToken(token);
    return payload.userId;
  }
}
```

### Auth0
```typescript
import { verify } from "jsonwebtoken";

export class Auth0Agent extends Agent<Env, State> {
  async validateConnection(connection: Connection) {
    const token = connection.request.headers.get("Authorization");
    const payload = verify(token, this.env.AUTH0_SECRET);
    return payload.sub;
  }
}
```

## Webhook Integration

### Stripe
```typescript
import Stripe from "stripe";

export class StripeAgent extends Agent<Env, State> {
  stripe = new Stripe(this.env.STRIPE_SECRET_KEY);

  @callable()
  async handleWebhook(payload: string, signature: string) {
    const event = this.stripe.webhooks.constructEvent(
      payload,
      signature,
      this.env.STRIPE_WEBHOOK_SECRET
    );
    // Process event
  }
}
```

### GitHub
```typescript
import { verify } from "@octokit/webhooks-methods";

export class GitHubAgent extends Agent<Env, State> {
  @callable()
  async handleWebhook(payload: string, signature: string) {
    const verified = await verify(
      signature,
      payload,
      this.env.GITHUB_WEBHOOK_SECRET
    );
    if (verified) {
      // Process event
    }
  }
}
```

## MCP Integration

### MCP Client
```typescript
import { McpClient } from "agents/mcp";

export class McpClientAgent extends Agent<Env, State> {
  mcp = new McpClient({
    url: "https://mcp-server.example.com"
  });

  @callable()
  async useTool(toolName: string, args: any) {
    return await this.mcp.callTool(toolName, args);
  }
}
```

### MCP Server
```typescript
import { McpAgent } from "agents/mcp";

export class MyMcpServer extends McpAgent<Env> {
  async listTools() {
    return [
      {
        name: "getWeather",
        description: "Get current weather",
        inputSchema: { type: "object", properties: { location: { type: "string" } } }
      }
    ];
  }

  async callTool(name: string, args: any) {
    if (name === "getWeather") {
      return { temperature: 72, condition: "sunny" };
    }
  }
}
```

## Queue Integration

### Cloudflare Queues
```typescript
export class QueueAgent extends Agent<Env, State> {
  @callable()
  async enqueueTask(task: any) {
    await this.env.QUEUE.send({
      body: JSON.stringify(task),
      agentId: this.id
    });
  }
}
```

### Custom Queue
```typescript
export class CustomQueueAgent extends Agent<Env, State> {
  @callable()
  async queueTask(task: any) {
    this.queue(async () => {
      await this.processTask(task);
    });
  }

  async processTask(task: any) {
    // Process task
  }
}
```

## Email Integration

### Cloudflare Email Routing
```typescript
export class EmailAgent extends Agent<Env, State> {
  @callable()
  async handleEmail(rawEmail: string) {
    const email = parseEmail(rawEmail);
    // Process email
    await this.replyToEmail(email.from, "Response");
  }
}
```

### SendGrid
```typescript
import sendgrid from "@sendgrid/mail";

export class SendGridAgent extends Agent<Env, State> {
  sendgrid = sendgrid.setApiKey(this.env.SENDGRID_API_KEY);

  @callable()
  async sendEmail(to: string, subject: string, content: string) {
    await this.sendgrid.send({
      to,
      from: this.env.FROM_EMAIL,
      subject,
      text: content
    });
  }
}
```
