# Single Responsibility

## Principle

Each agent should have a single, well-defined responsibility. Avoid creating monolithic agents that handle multiple unrelated concerns.

## Why It Matters

### Maintainability
Smaller, focused agents are easier to understand, test, and maintain. Changes to one concern don't affect others.

### Scalability
Focused agents can be scaled independently based on their specific needs.

### Reusability
Agents with a single responsibility are more likely to be reusable across different contexts.

## Implementation

### Good Example - Focused Agents
```typescript
// User agent - handles user-specific data
export class UserAgent extends Agent<Env, UserState> {
  initialState = { profile: null, preferences: {} };

  @callable()
  updateProfile(profile: any) {
    this.setState({ profile });
  }
}

// Session agent - handles session-specific data
export class SessionAgent extends Agent<Env, SessionState> {
  initialState = { messages: [], context: {} };

  @callable()
  addMessage(message: any) {
    this.setState({
      messages: [...this.state.messages, message]
    });
  }
}

// Config agent - handles application configuration
export class ConfigAgent extends Agent<Env, ConfigState> {
  initialState = { settings: {} };

  @callable()
  updateSettings(settings: any) {
    this.setState({ settings });
  }
}
```

### Bad Example - Monolithic Agent
```typescript
// Bad - handles too many concerns
export class EverythingAgent extends Agent<Env, EverythingState> {
  initialState = {
    user: {},
    session: {},
    config: {},
    cache: {},
    logs: []
  };

  @callable()
  updateUser(user: any) { }

  @callable()
  addMessage(message: any) { }

  @callable()
  updateConfig(config: any) { }

  @callable()
  cacheData(key: string, value: any) { }

  @callable()
  logEvent(event: any) { }
}
```

## Best Practices

### Identify Responsibilities
Clearly define what each agent is responsible for:

```typescript
// UserAgent - responsible for user data and preferences
// SessionAgent - responsible for session state and messages
// ConfigAgent - responsible for application configuration
// CacheAgent - responsible for caching
// LogAgent - responsible for logging
```

### Split Large Agents
When an agent grows too large, split it into smaller, focused agents:

```typescript
// Before - large agent
export class LargeAgent extends Agent<Env, LargeState> {
  initialState = { users: {}, sessions: {}, config: {} };
}

// After - split into focused agents
export class UserAgent extends Agent<Env, UserState> { }
export class SessionAgent extends Agent<Env, SessionState> { }
export class ConfigAgent extends Agent<Env, ConfigState> { }
```

### Use Composition
Compose agents to achieve complex functionality:

```typescript
// Client composes multiple agents
const user = useAgent({ agent: "UserAgent", name: userId });
const session = useAgent({ agent: "SessionAgent", name: sessionId });
const config = useAgent({ agent: "ConfigAgent", name: "config" });
```

## Common Patterns

### Per-User Agents
One agent instance per user:

```typescript
export class UserAgent extends Agent<Env, UserState> {
  initialState = { profile: null, preferences: {} };

  @callable()
  updateProfile(profile: any) {
    this.setState({ profile });
  }
}

// Client: useAgent({ agent: "UserAgent", name: userId })
```

### Per-Session Agents
One agent instance per session:

```typescript
export class SessionAgent extends Agent<Env, SessionState> {
  initialState = { messages: [], context: {} };

  @callable()
  addMessage(message: any) {
    this.setState({
      messages: [...this.state.messages, message]
    });
  }
}

// Client: useAgent({ agent: "SessionAgent", name: sessionId })
```

### Singleton Agents
One shared instance for configuration:

```typescript
export class ConfigAgent extends Agent<Env, ConfigState> {
  initialState = { settings: {} };

  @callable()
  updateSettings(settings: any) {
    this.setState({ settings });
  }
}

// Client: useAgent({ agent: "ConfigAgent", name: "config" })
```

## Agent Communication

### Direct Calls
Agents can call other agents:

```typescript
export class UserAgent extends Agent<Env, UserState> {
  @callable()
  async getProfile() {
    const configAgent = await this.env.ConfigAgent.get("config");
    const settings = await configAgent.call("getSettings");
    return { ...this.state.profile, settings };
  }
}
```

### Shared State
Use shared state when needed:

```typescript
export class CacheAgent extends Agent<Env, CacheState> {
  initialState = { cache: {} };

  @callable()
  get(key: string) {
    return this.state.cache[key];
  }

  @callable()
  set(key: string, value: any) {
    this.setState({
      cache: { ...this.state.cache, [key]: value }
    });
  }
}
```

## When to Split

### Signs an Agent is Too Large
- Too many callable methods (>10-15)
- State object is very large
- Multiple unrelated concerns
- Difficult to test
- Hard to understand

### Splitting Strategy
1. Identify distinct responsibilities
2. Create separate agents for each
3. Define communication patterns
4. Update client code to use multiple agents
5. Migrate state if needed

## Examples

### E-Commerce Example
```typescript
// User agent - user data
export class UserAgent extends Agent<Env, UserState> { }

// Cart agent - shopping cart
export class CartAgent extends Agent<Env, CartState> { }

// Product agent - product catalog
export class ProductAgent extends Agent<Env, ProductState> { }

// Order agent - order management
export class OrderAgent extends Agent<Env, OrderState> { }
```

### Chat Application Example
```typescript
// User agent - user profile
export class UserAgent extends Agent<Env, UserState> { }

// Room agent - chat room state
export class RoomAgent extends Agent<Env, RoomState> { }

// Message agent - message history
export class MessageAgent extends Agent<Env, MessageState> { }

// Notification agent - notifications
export class NotificationAgent extends Agent<Env, NotificationState> { }
```

## Benefits

### Testing
Smaller agents are easier to test:

```typescript
// Easy to test UserAgent in isolation
describe("UserAgent", () => {
  it("should update profile", async () => {
    const agent = new UserAgent();
    await agent.updateProfile({ name: "John" });
    expect(agent.state.profile.name).toBe("John");
  });
});
```

### Performance
Focused agents can be optimized for their specific use case:

```typescript
// CacheAgent can use different strategies than UserAgent
export class CacheAgent extends Agent<Env, CacheState> {
  // Optimized for fast reads
}
```

### Collaboration
Different team members can work on different agents without conflicts:
- Team A works on UserAgent
- Team B works on SessionAgent
- Team C works on ConfigAgent
