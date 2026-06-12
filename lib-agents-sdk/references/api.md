# API Reference

## Agent Class

### Constructor
```typescript
class Agent<Env, State> {
  constructor(env: Env, id: string)
}
```

### Properties

#### env
The environment bindings for the agent.

```typescript
env: Env
```

#### id
The unique identifier for this agent instance.

```typescript
id: string
```

#### state
The current state of the agent.

```typescript
state: State
```

#### connection
The current client connection (if called from a callable method).

```typescript
connection: Connection
```

### Methods

#### setState
Update the agent's state.

```typescript
setState(newState: Partial<State>): void
```

#### validateStateChange
Validate a state change before it's applied.

```typescript
validateStateChange(nextState: State, source: Connection | "server"): void
```

#### onStateUpdate
Called when the state is updated.

```typescript
onStateUpdate(state: State, source: Connection | "server"): void
```

#### onConnect
Called when a client connects.

```typescript
onConnect(connection: Connection): void | Promise<void>
```

#### onDisconnect
Called when a client disconnects.

```typescript
onDisconnect(connection: Connection): void | Promise<void>
```

#### shouldConnectionBeReadonly
Determine if a connection should be readonly.

```typescript
shouldConnectionBeReadonly(connection: Connection): boolean
```

#### runFiber
Execute a durable fiber.

```typescript
runFiber<T>(fn: () => Promise<T>): Promise<T>
```

#### stash
Checkpoint fiber execution.

```typescript
stash(): Promise<void>
```

#### schedule
Schedule a task.

```typescript
schedule(options: ScheduleOptions): void
```

#### scheduleEvery
Schedule a recurring task.

```typescript
scheduleEvery(cron: string, task: () => void): void
```

#### queue
Queue a task.

```typescript
queue(task: () => void): void
```

#### retry
Retry a function with backoff.

```typescript
retry<T>(fn: () => Promise<T>, options?: RetryOptions): Promise<T>
```

## Decorators

### @callable
Mark a method as callable from clients.

```typescript
@callable(options?: CallableOptions)
```

#### Options
- `timeout?: number` - Timeout in milliseconds

## Routing

### routeAgentRequest
Route a request to the appropriate agent.

```typescript
routeAgentRequest(req: Request, env: Env): Response | null
```

### getAgentByName
Get an agent by name.

```typescript
getAgentByName(env: Env, name: string): DurableObjectNamespace
```

## Connection

### Properties
- `id: string` - Connection ID
- `request: Request` - The request that created the connection
- `readonly: boolean` - Whether the connection is readonly
- `permissions: string[]` - Connection permissions

## State

### Type
State can be any JSON-serializable object.

```typescript
type State = {
  [key: string]: any
}
```

## Environment

### Bindings
- Durable Object namespaces
- KV namespaces
- R2 buckets
- AI bindings
- Custom bindings

## Diagnostics

### diagnostics_channel
Subscribe to diagnostic events.

```typescript
import { diagnostics_channel } from "agents";

diagnostics_channel.subscribe("agent.state.update", (data) => {
  console.log(data);
});
```

### Events
- `agent.state.update` - State updated
- `agent.rpc.call` - RPC call made
- `agent.lifecycle` - Lifecycle event
- `agent.schedule` - Scheduled task
- `agent.fiber.start` - Fiber started
- `agent.fiber.complete` - Fiber completed

## AI Chat Agent

### AIChatAgent
```typescript
class AIChatAgent<Env, State> extends Agent<Env, State>
```

### Methods
- `chat(message: string)` - Send a chat message
- `setTools(tools: Tool[])` - Set available tools
- `setSystemPrompt(prompt: string)` - Set system prompt

## MCP Agent

### McpAgent
```typescript
class McpAgent<Env> extends Agent<Env, McpState>
```

### Methods
- `listTools()` - List available tools
- `callTool(name: string, args: any)` - Call a tool

### McpClient
```typescript
class McpClient {
  constructor(options: McpClientOptions)
  callTool(name: string, args: any): Promise<any>
}
```

## Client SDK

### useAgent
React hook for agent connection.

```typescript
useAgent(options: AgentOptions): AgentClient
```

### useAgentChat
React hook for chat agents.

```typescript
useAgentChat(options: AgentChatOptions): AgentChatClient
```

## Types

### Env
Environment bindings type.

```typescript
interface Env {
  [key: string]: any
}
```

### State
Agent state type.

```typescript
type State = {
  [key: string]: any
}
```

### Connection
Connection type.

```typescript
interface Connection {
  id: string
  request: Request
  readonly?: boolean
  permissions?: string[]
}
```

### ScheduleOptions
Schedule options.

```typescript
interface ScheduleOptions {
  date: Date
  task: () => void
}
```

### RetryOptions
Retry options.

```typescript
interface RetryOptions {
  maxRetries?: number
  backoff?: "exponential" | "linear"
  jitter?: boolean
}
```

### CallableOptions
Callable method options.

```typescript
interface CallableOptions {
  timeout?: number
}
```
