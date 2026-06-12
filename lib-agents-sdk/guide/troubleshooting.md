# Troubleshooting

## Common Issues

### Agent Not Starting

#### Issue: Agent fails to initialize
**Symptoms:**
- Worker returns 500 error
- Agent connection fails
- Logs show initialization error

**Solutions:**
1. Check wrangler configuration:
```jsonc
{
  "compatibility_flags": ["nodejs_compat"],
  "durable_objects": {
    "bindings": [{ "name": "MyAgent", "class_name": "MyAgent" }]
  }
}
```

2. Verify migration tag exists:
```jsonc
"migrations": [{ "tag": "v1", "new_sqlite_classes": ["MyAgent"] }]
```

3. Check class name matches binding name exactly

4. Ensure agent class is exported:
```typescript
export class MyAgent extends Agent<Env, State> {
  // ...
}
```

### State Not Syncing

#### Issue: State changes not reflected on client
**Symptoms:**
- Client doesn't receive state updates
- State appears stale
- setState called but no update

**Solutions:**
1. Verify setState is called:
```typescript
@callable()
updateState(data: any) {
  this.setState(data); // Must call setState
}
```

2. Check state validation:
```typescript
validateStateChange(nextState: State, source: Connection | "server") {
  // Ensure this doesn't throw
}
```

3. Verify WebSocket connection is active:
```typescript
onConnect(connection: Connection) {
  console.log("Connected:", connection.id);
}
```

4. Check for state mutation (should be immutable):
```typescript
// Bad
this.state.count++;

// Good
this.setState({ count: this.state.count + 1 });
```

### Callable Methods Not Working

#### Issue: Callable method returns error or doesn't execute
**Symptoms:**
- Method call fails
- Returns 404 or 500
- Method not found

**Solutions:**
1. Ensure decorator is used:
```typescript
@callable()
myMethod() {
  // ...
}
```

2. Check method is public (not private)
3. Verify method name in call matches exactly
4. Check TypeScript configuration (no experimentalDecorators)

### Connection Issues

#### Issue: WebSocket connection fails
**Symptoms:**
- Connection drops immediately
- Connection timeout
- Authentication fails

**Solutions:**
1. Check authentication:
```typescript
async validateConnection(connection: Connection) {
  const token = connection.request.headers.get("Authorization");
  if (!token) throw new Error("No token");
  return await this.verifyToken(token);
}
```

2. Verify CORS configuration:
```typescript
async validateConnection(connection: Connection) {
  const origin = connection.request.headers.get("Origin");
  if (!allowedOrigins.includes(origin)) {
    throw new Error("Origin not allowed");
  }
}
```

3. Check connection limits:
- Verify no rate limiting
- Check connection pool size
- Monitor for connection leaks

### Migration Errors

#### Issue: Migration fails or causes errors
**Symptoms:**
- Deployment fails
- Migration conflict
- State not persisted

**Solutions:**
1. Never edit old migrations:
```jsonc
// Bad - editing old migration
"migrations": [
  { "tag": "v1", "new_sqlite_classes": ["MyAgent", "NewAgent"] }
]

// Good - add new migration
"migrations": [
  { "tag": "v1", "new_sqlite_classes": ["MyAgent"] },
  { "tag": "v2", "new_sqlite_classes": ["NewAgent"] }
]
```

2. Test migrations locally:
```bash
wrangler dev --local
```

3. Check for class name conflicts
4. Verify SQLite class names are unique

### Performance Issues

#### Issue: Agent responses are slow
**Symptoms:**
- High latency
- Slow state updates
- Timeout errors

**Solutions:**
1. Optimize state size:
```typescript
// Bad - large state
this.setState({ hugeData: largeArray });

// Good - minimal state
this.setState({ count: increment });
```

2. Use efficient data structures
3. Implement caching:
```typescript
@callable()
async getCachedData(key: string) {
  if (this.state.cache[key]) {
    return this.state.cache[key];
  }
  const data = await this.fetchData(key);
  this.setState({ cache: { ...this.state.cache, [key]: data } });
  return data;
}
```

4. Monitor with diagnostics:
```typescript
import { diagnostics_channel } from "agents";

diagnostics_channel.subscribe("agent.rpc.call", (data) => {
  console.log("RPC duration:", data.duration);
});
```

### Memory Issues

#### Issue: Agent consumes too much memory
**Symptoms:**
- DO eviction
- Out of memory errors
- Performance degradation

**Solutions:**
1. Clean up event listeners:
```typescript
onDisconnect(connection: Connection) {
  // Clean up connection-specific resources
}
```

2. Limit state size
3. Use object pooling
4. Implement garbage collection:
```typescript
@callable()
cleanupOldData() {
  const cutoff = Date.now() - 86400000; // 24 hours
  const recentData = this.state.data.filter(d => d.timestamp > cutoff);
  this.setState({ data: recentData });
}
```

### Retry Failures

#### Issue: Retries not working or causing issues
**Symptoms:**
- Operations fail permanently
- Infinite retry loops
- Retry count exceeded

**Solutions:**
1. Configure retry properly:
```typescript
@callable()
async withRetry() {
  return await this.retry(async () => {
    return await this.unreliableOperation();
  }, {
    maxRetries: 3,
    backoff: "exponential"
  });
}
```

2. Add jitter to avoid thundering herd:
```typescript
this.retry(fn, {
  backoff: "exponential",
  jitter: true
});
```

3. Set reasonable retry limits
4. Log retry attempts for debugging

### Durable Execution Issues

#### Issue: Fiber execution fails or doesn't resume
**Symptoms:**
- Task stops mid-execution
- State not checkpointed
- Resume fails

**Solutions:**
1. Use runFiber correctly:
```typescript
@callable()
async longRunningTask() {
  return await this.runFiber(async () => {
    // Checkpoint at strategic points
    await this.stash();

    // Continue execution
    const result = await this.processData();

    return result;
  });
}
```

2. Check for async/await usage
3. Verify stash points are appropriate
4. Monitor DO eviction events

### MCP Integration Issues

#### Issue: MCP connection or tool calling fails
**Symptoms:**
- MCP server unreachable
- Tool calls fail
- Authentication errors

**Solutions:**
1. Verify MCP server URL:
```typescript
const mcp = new McpClient({
  url: "https://mcp-server.example.com"
});
```

2. Check authentication:
```typescript
async validateConnection(connection: Connection) {
  const token = connection.request.headers.get("Authorization");
  if (!await this.verifyMcpToken(token)) {
    throw new Error("Invalid MCP token");
  }
}
```

3. Verify tool registration
4. Check transport configuration

### Chat Agent Issues

#### Issue: Chat agent not responding or errors
**Symptoms:**
- No response from chat
- Streaming fails
- Tool calling errors

**Solutions:**
1. Check AI binding:
```jsonc
{
  "ai": { "binding": "AI" }
}
```

2. Verify AI SDK version:
```bash
bun add ai@latest @cloudflare/ai-chat@latest
```

3. Check tool definitions:
```typescript
const tools = [{
  type: "function",
  function: {
    name: "search",
    description: "Search",
    parameters: { type: "object" }
  }
}];
```

4. Verify streaming configuration

## Debugging Tools

### Diagnostics Channel
```typescript
import { diagnostics_channel } from "agents";

// Monitor state changes
diagnostics_channel.subscribe("agent.state.update", (data) => {
  console.log("State update:", data);
});

// Monitor RPC calls
diagnostics_channel.subscribe("agent.rpc.call", (data) => {
  console.log("RPC call:", data);
});

// Monitor lifecycle
diagnostics_channel.subscribe("agent.lifecycle", (data) => {
  console.log("Lifecycle event:", data);
});
```

### Logging
```typescript
export class LoggingAgent extends Agent<Env, State> {
  @callable()
  myMethod() {
    console.log("Method called");
    console.log("Current state:", this.state);
    // ...
  }
}
```

### Wrangler Dev
```bash
# Run with local mode
wrangler dev --local

# Run with remote mode
wrangler dev

# Enable verbose logging
wrangler dev --log-level debug
```

## Getting Help

### Resources
- Cloudflare Agents SDK docs: https://developers.cloudflare.com/agents/
- GitHub issues: https://github.com/cloudflare/workers-sdk/issues
- Discord community: https://discord.gg/cloudflaredev

### Debugging Checklist
1. Check wrangler configuration
2. Verify migration tags
3. Check authentication/authorization
4. Monitor diagnostics channel
5. Review logs
6. Test locally first
7. Check for known issues
8. Verify dependency versions

### Reporting Issues
When reporting issues, include:
- Wrangler version
- Agents SDK version
- Full error message
- Minimal reproduction
- Configuration files
- Logs
