# TUI

## Overview

The Cloudflare Agents SDK does not include a Terminal User Interface (TUI). All interactions with agents are handled through:

- **WebSocket connections** from web clients
- **HTTP requests** via REST API
- **Wrangler CLI** for development and deployment

## CLI Tools

### Wrangler CLI
The primary command-line interface for the Agents SDK is Wrangler.

See [CLI Reference](./cli.md) for detailed documentation.

### Interactive Development
```bash
# Start interactive development server
wrangler dev

# View real-time logs
wrangler tail
```

## Debugging

### Console Logging
Use console.log for debugging:

```typescript
export class MyAgent extends Agent<Env, State> {
  @callable()
  myMethod() {
    console.log("Method called");
    console.log("State:", this.state);
  }
}
```

### Diagnostics Channel
Use diagnostics_channel for monitoring:

```typescript
import { diagnostics_channel } from "agents";

diagnostics_channel.subscribe("agent.state.update", (data) => {
  console.log("State update:", data);
});
```

## Monitoring

### Workers Dashboard
Monitor agents through the Cloudflare Workers dashboard:
- https://dash.cloudflare.com/

### Analytics
View analytics and metrics:
- Request counts
- Response times
- Error rates
- Durable Object metrics

## Alternative Interfaces

### Web Interface
Build custom web interfaces using the client SDK:

```typescript
import { useAgent } from "agents/client";

function MyComponent() {
  const agent = useAgent({ agent: "MyAgent", name: "user-123" });
  // Build UI
}
```

### API Interface
Build custom API clients:

```typescript
const response = await fetch("https://your-worker.workers.dev/agents/MyAgent/user-123", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ method: "increment" })
});
```

## Future TUI Support

As of the current version, there is no official TUI for the Agents SDK. If you need terminal-based interaction, consider:

1. **Building a custom CLI tool** that interacts with your agents via HTTP
2. **Using curl** to test agent endpoints
3. **Creating a terminal-based client** using WebSocket libraries

### Example: Terminal Client
```typescript
import WebSocket from "ws";

const ws = new WebSocket("ws://localhost/agents/MyAgent/user-123");

ws.on("open", () => {
  ws.send(JSON.stringify({
    method: "increment",
    params: []
  }));
});

ws.on("message", (data) => {
  console.log("Response:", data.toString());
});
```

## Related Documentation

- [CLI Reference](./cli.md) - Wrangler CLI commands
- [API Reference](./api.md) - Complete API documentation
- [Client SDK](./client-sdk.md) - Client-side SDK documentation
