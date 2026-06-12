# Testing

## Unit Testing

### Testing Callable Methods
```typescript
import { describe, it, expect } from "vitest";
import { MyAgent } from "../src/agents/my-agent";

describe("MyAgent", () => {
  it("should increment count", async () => {
    const agent = new MyAgent();
    agent.initialState = { count: 0 };

    const result = await agent.increment();
    expect(result).toBe(1);
    expect(agent.state.count).toBe(1);
  });
});
```

### Testing State Validation
```typescript
describe("State Validation", () => {
  it("should reject negative count", () => {
    const agent = new MyAgent();
    agent.initialState = { count: 0 };

    expect(() => {
      agent.validateStateChange({ count: -1 }, "server");
    }).toThrow("Count cannot be negative");
  });
});
```

### Testing with Mock Environment
```typescript
describe("MyAgent with Env", () => {
  it("should use AI binding", async () => {
    const env = {
      AI: {
        run: async () => ({ response: "test" })
      }
    };

    const agent = new MyAgent();
    agent.env = env;

    const result = await agent.generateText("hello");
    expect(result).toBe("test");
  });
});
```

## Integration Testing

### Testing Agent Lifecycle
```typescript
import { setupWorker } from "cloudflare:test";

describe("Agent Lifecycle", () => {
  it("should connect and disconnect", async () => {
    const worker = setupWorker({
      main: "../src/worker.ts",
      bindings: {
        MyAgent: MyAgent
      }
    });

    const agent = await worker.env.MyAgent.get("test-instance");
    await agent.connect();
    await agent.disconnect();
  });
});
```

### Testing State Synchronization
```typescript
describe("State Sync", () => {
  it("should sync state to client", async () => {
    const agent = await worker.env.MyAgent.get("test-instance");

    await agent.connect();
    await agent.call("increment");

    const state = await agent.getState();
    expect(state.count).toBe(1);
  });
});
```

### Testing Routing
```typescript
describe("Routing", () => {
  it("should route to correct agent", async () => {
    const response = await worker.fetch(
      new Request("http://localhost/agents/MyAgent/test-instance", {
        method: "POST",
        body: JSON.stringify({ method: "increment" })
      })
    );

    expect(response.status).toBe(200);
  });
});
```

## Testing Workflows

### Testing Scheduled Tasks
```typescript
describe("Scheduled Tasks", () => {
  it("should execute scheduled task", async () => {
    const agent = await worker.env.MyAgent.get("test-instance");

    agent.schedule({
      date: new Date(Date.now() + 1000),
      task: async () => {
        await agent.call("increment");
      }
    });

    await new Promise(resolve => setTimeout(resolve, 2000));

    const state = await agent.getState();
    expect(state.count).toBe(1);
  });
});
```

### Testing Durable Execution
```typescript
describe("Durable Execution", () => {
  it("should survive DO eviction", async () => {
    const agent = await worker.env.MyAgent.get("test-instance");

    await agent.runFiber(async () => {
      await agent.stash();
      // Simulate eviction
      await agent.call("increment");
    });

    const state = await agent.getState();
    expect(state.count).toBe(1);
  });
});
```

## Testing Error Handling

### Testing Retry Logic
```typescript
describe("Retry Logic", () => {
  it("should retry on failure", async () => {
    const agent = new MyAgent();
    let attempts = 0;

    agent.retry = async (fn, options) => {
      attempts++;
      if (attempts < 3) {
        throw new Error("Temporary error");
      }
      return await fn();
    };

    await agent.call("unreliableOperation");
    expect(attempts).toBe(3);
  });
});
```

### Testing Timeout Handling
```typescript
describe("Timeouts", () => {
  it("should handle timeout", async () => {
    const agent = new MyAgent();

    await expect(
      agent.call("slowOperation", { timeout: 100 })
    ).rejects.toThrow("Timeout");
  });
});
```

## Testing Authentication

### Testing Token Validation
```typescript
describe("Authentication", () => {
  it("should reject invalid token", async () => {
    const agent = new MyAgent();

    await expect(
      agent.validateConnection({
        request: {
          headers: {
            get: () => "invalid-token"
          }
        }
      })
    ).rejects.toThrow("Invalid token");
  });
});
```

### Testing Authorization
```typescript
describe("Authorization", () => {
  it("should reject unauthorized access", async () => {
    const agent = new MyAgent();
    agent.connection = {
      permissions: ["read"]
    };

    await expect(
      agent.call("adminOperation")
    ).rejects.toThrow("Insufficient permissions");
  });
});
```

## Testing MCP Integration

### Testing MCP Client
```typescript
describe("MCP Client", () => {
  it("should call MCP tool", async () => {
    const agent = new McpClientAgent();
    agent.mcp = {
      callTool: async (name, args) => ({ result: "test" })
    };

    const result = await agent.call("useTool", "search", { query: "test" });
    expect(result.result).toBe("test");
  });
});
```

### Testing MCP Server
```typescript
describe("MCP Server", () => {
  it("should list tools", async () => {
    const agent = new MyMcpServer();

    const tools = await agent.listTools();
    expect(tools).toHaveLength(1);
    expect(tools[0].name).toBe("getWeather");
  });
});
```

## Testing Performance

### Benchmarking State Updates
```typescript
describe("Performance", () => {
  it("should handle rapid state updates", async () => {
    const agent = new MyAgent();
    const start = Date.now();

    for (let i = 0; i < 1000; i++) {
      await agent.call("increment");
    }

    const duration = Date.now() - start;
    expect(duration).toBeLessThan(1000);
  });
});
```

### Testing Memory Usage
```typescript
describe("Memory", () => {
  it("should not leak memory", async () => {
    const agent = new MyAgent();
    const initialMemory = process.memoryUsage().heapUsed;

    for (let i = 0; i < 1000; i++) {
      await agent.call("createObject", { data: "test" });
    }

    const finalMemory = process.memoryUsage().heapUsed;
    const increase = finalMemory - initialMemory;

    expect(increase).toBeLessThan(10 * 1024 * 1024); // 10MB
  });
});
```

## Testing with Cloudflare Test

### Setup
```typescript
// vitest.config.ts
import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    pool: "vitest-pool-workers",
    poolOptions: {
      workers: {
        singleWorker: true,
        minThreads: 1,
        maxThreads: 1
      }
    }
  }
});
```

### Worker Test
```typescript
import { describe, it, expect } from "vitest";
import { worker } from "./setup";

describe("Worker", () => {
  it("should handle agent requests", async () => {
    const response = await worker.fetch(
      new Request("http://localhost/agents/MyAgent/test", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ method: "increment" })
      })
    );

    expect(response.status).toBe(200);
    const data = await response.json();
    expect(data.count).toBe(1);
  });
});
```

## Testing Best Practices

### Test Organization
- Group related tests with `describe`
- Use descriptive test names
- One assertion per test when possible
- Use `beforeEach` and `afterEach` for setup/teardown
- Keep tests independent

### Mocking
- Mock external dependencies
- Use fake timers for time-based tests
- Mock network requests
- Mock database calls

### Test Coverage
- Aim for high coverage of critical paths
- Test error cases
- Test edge cases
- Test authentication and authorization
- Test state validation

### Continuous Testing
- Run tests on every commit
- Run tests in CI/CD pipeline
- Use test coverage reports
- Fix failing tests immediately

### Debugging Tests
- Use `console.log` for debugging
- Use Vitest's debug mode
- Check test isolation
- Verify mock setup
- Review error messages
