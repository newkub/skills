# Migration

## AI SDK v5 Migration

### Breaking Changes
- `@cloudflare/ai-chat` package structure changed
- Chat agent API updated
- Tool calling syntax changed
- Streaming response format updated

### Migration Steps

1. Update dependencies:
```bash
bun add agents@latest @cloudflare/ai-chat@latest ai@latest
```

2. Update chat agent imports:
```typescript
// Old
import { AIChatAgent } from "@cloudflare/ai-chat";

// New
import { AIChatAgent } from "agents/chat";
```

3. Update tool definitions:
```typescript
// Old
const tools = [{ name: "search", execute: async () => {} }];

// New
const tools = [{ type: "function", function: { name: "search", execute: async () => {} } }];
```

4. Update streaming handling:
```typescript
// Old
const stream = await agent.chat(message);
for await (const chunk of stream) {
  console.log(chunk);
}

// New
const result = await agent.chat(message);
const stream = result.toDataStreamResponse();
```

## AI SDK v6 Migration

### Breaking Changes
- AI SDK core package updated
- Model provider syntax changed
- Tool calling API updated
- Response format changed

### Migration Steps

1. Update dependencies:
```bash
bun add ai@latest @ai-sdk/react@latest
```

2. Update model imports:
```typescript
// Old
import { openai } from "@ai-sdk/openai";
const model = openai("gpt-4");

// New
import { createOpenAI } from "@ai-sdk/openai";
const openai = createOpenAI();
const model = openai("gpt-4");
```

3. Update tool calling:
```typescript
// Old
const result = await generateText({
  model,
  tools: { search: { description: "Search", parameters: {} } }
});

// New
const result = await generateText({
  model,
  tools: [{ type: "function", function: { name: "search", description: "Search", parameters: {} } }]
});
```

4. Update React hooks:
```typescript
// Old
import { useChat } from "@ai-sdk/react";

// New
import { useChat } from "@ai-sdk/react";
// Hook API remains the same
```

## Agent Class Migration

### State Management
- State validation API unchanged
- State sync API unchanged
- State persistence unchanged

### Callable Methods
- Decorator syntax unchanged
- Streaming support unchanged
- Error handling unchanged

### Lifecycle Hooks
- `onConnect` unchanged
- `onDisconnect` unchanged
- `onStateUpdate` unchanged

## Wrangler Configuration Migration

### Migration Tags
```jsonc
// Old format
"migrations": [
  { "tag": "v1", "new_classes": ["MyAgent"] }
]

// New format
"migrations": [
  { "tag": "v1", "new_sqlite_classes": ["MyAgent"] }
]
```

### Durable Objects
```jsonc
// Configuration remains the same
"durable_objects": {
  "bindings": [{ "name": "MyAgent", "class_name": "MyAgent" }]
}
```

### Compatibility Flags
```jsonc
// Required for all agents
"compatibility_flags": ["nodejs_compat"]
```

## Client SDK Migration

### React Hooks
- `useAgent` API unchanged
- `useAgentChat` API unchanged
- Connection management unchanged

### Client Tools
- Tool execution API unchanged
- Auto-continue behavior unchanged
- Error handling unchanged

## MCP Migration

### MCP Client
- Connection API unchanged
- Tool calling API unchanged
- Transport options unchanged

### MCP Server
- `McpAgent` API unchanged
- Tool registration unchanged
- Security options unchanged

## Testing Migration

### Unit Tests
- Agent instantiation unchanged
- Callable method testing unchanged
- State validation testing unchanged

### Integration Tests
- Routing testing unchanged
- WebSocket testing unchanged
- State sync testing unchanged

## Common Migration Issues

### Decorator Errors
- Ensure `experimentalDecorators` is NOT enabled
- Use TypeScript 5.0+
- Check tsconfig configuration

### Migration Conflicts
- Never edit old migration tags
- Always add new tags
- Test migrations locally

### State Loss
- Backup state before migration
- Test with non-production data
- Plan rollback strategy

### Connection Issues
- Update client SDK versions
- Check WebSocket configuration
- Verify routing setup

## Rollback Strategy

### Version Rollback
```bash
# Rollback to previous version
bun add agents@previous-version
```

### Migration Rollback
```jsonc
// Add rollback migration
"migrations": [
  { "tag": "v1", "new_sqlite_classes": ["MyAgent"] },
  { "tag": "v2", "new_sqlite_classes": ["MyAgent"] },
  { "tag": "rollback-v2", "rename_classes": { "MyAgent": "MyAgentOld" } }
]
```

### Data Recovery
- Use Durable Objects backup
- Restore from snapshot
- Rebuild state from events

## Best Practices

### Testing
- Test migration in staging first
- Run integration tests
- Verify state persistence
- Check client compatibility

### Deployment
- Deploy during low traffic
- Monitor for errors
- Have rollback ready
- Communicate changes

### Documentation
- Document breaking changes
- Update API references
- Provide examples
- Create migration guides
