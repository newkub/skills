# Structure

## Project Structure

### Basic Agent Project
```
my-agent-project/
├── src/
│   ├── agents/
│   │   ├── my-agent.ts
│   │   └── index.ts
│   ├── worker.ts
│   └── env.d.ts
├── wrangler.jsonc
├── package.json
└── tsconfig.json
```

### Multi-Agent Project
```
multi-agent-project/
├── src/
│   ├── agents/
│   │   ├── user-agent.ts
│   │   ├── session-agent.ts
│   │   ├── config-agent.ts
│   │   └── index.ts
│   ├── worker.ts
│   └── env.d.ts
├── wrangler.jsonc
├── package.json
└── tsconfig.json
```

## Agent File Structure

### Single Agent File
```typescript
// src/agents/my-agent.ts
import { Agent, callable } from "agents";

type State = { count: number };

export class MyAgent extends Agent<Env, State> {
  initialState = { count: 0 };

  @callable()
  increment() {
    this.setState({ count: this.state.count + 1 });
    return this.state.count;
  }
}
```

### Agent with Separated Types
```
src/agents/my-agent/
├── types.ts
├── agent.ts
└── index.ts
```

```typescript
// types.ts
export type State = {
  count: number;
  name: string;
};

export interface Env {
  AI: Ai;
  KV: KVNamespace;
}

// agent.ts
import { Agent, callable } from "agents";
import type { State, Env } from "./types";

export class MyAgent extends Agent<Env, State> {
  initialState = { count: 0, name: "" };

  @callable()
  increment() {
    this.setState({ count: this.state.count + 1 });
    return this.state.count;
  }
}

// index.ts
export { MyAgent } from "./agent";
export type { State, Env } from "./types";
```

## Worker Structure

### Simple Worker
```typescript
// src/worker.ts
import { routeAgentRequest } from "agents";
import { MyAgent } from "./agents/my-agent";

export default {
  fetch: (req: Request, env: Env) => {
    return routeAgentRequest(req, env) ?? new Response("Not found", { status: 404 });
  }
};
```

### Advanced Worker
```typescript
// src/worker.ts
import { routeAgentRequest } from "agents";
import { MyAgent } from "./agents/my-agent";

export default {
  async fetch(req: Request, env: Env, ctx: ExecutionContext) {
    // Route agent requests
    const agentResponse = routeAgentRequest(req, env);
    if (agentResponse) return agentResponse;

    // Handle other routes
    const url = new URL(req.url);

    if (url.pathname === "/health") {
      return new Response("OK");
    }

    if (url.pathname === "/api/status") {
      return Response.json({ status: "healthy" });
    }

    return new Response("Not found", { status: 404 });
  }
};
```

## Configuration Structure

### Wrangler Configuration
```jsonc
{
  "name": "my-agent-project",
  "main": "src/worker.ts",
  "compatibility_date": "2024-01-01",
  "compatibility_flags": ["nodejs_compat"],
  "durable_objects": {
    "bindings": [
      { "name": "MyAgent", "class_name": "MyAgent" }
    ]
  },
  "migrations": [
    { "tag": "v1", "new_sqlite_classes": ["MyAgent"] }
  ],
  "vars": {
    "ENVIRONMENT": "production"
  },
  "secrets": [
    "API_KEY"
  ]
}
```

### TypeScript Configuration
```jsonc
{
  "compilerOptions": {
    "target": "ES2022",
    "module": "ES2022",
    "moduleResolution": "bundler",
    "lib": ["ES2022"],
    "types": ["@cloudflare/workers-types"],
    "jsx": "react-jsx",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true,
    "resolveJsonModule": true,
    "allowSyntheticDefaultImports": true,
    "isolatedModules": true,
    "noEmit": true
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules"]
}
```

## Environment Types

### Environment Definition
```typescript
// src/env.d.ts
interface Env {
  // Durable Object bindings
  MyAgent: DurableObjectNamespace;
  UserAgent: DurableObjectNamespace;

  // Service bindings
  AI: Ai;
  KV: KVNamespace;
  R2: R2Bucket;

  // Variables
  ENVIRONMENT: string;
  API_URL: string;

  // Secrets (not typed, accessed via env)
}
```

## State Structure

### Simple State
```typescript
type State = {
  count: number;
};
```

### Complex State
```typescript
type State = {
  user: {
    id: string;
    name: string;
    email: string;
  };
  preferences: {
    theme: "light" | "dark";
    notifications: boolean;
  };
  history: Array<{
    action: string;
    timestamp: number;
  }>;
};
```

### Nested State with Helpers
```typescript
type State = {
  users: Record<string, User>;
  sessions: Record<string, Session>;
};

type User = {
  id: string;
  name: string;
  createdAt: number;
};

type Session = {
  id: string;
  userId: string;
  messages: Message[];
};

type Message = {
  role: "user" | "assistant";
  content: string;
  timestamp: number;
};
```

## Routing Structure

### Default Routing
```
/agents/{agent-name}/{instance-name}
```

### Custom Routing
```typescript
import { routeAgentRequest, getAgentByName } from "agents";

export default {
  fetch: (req: Request, env: Env) => {
    const url = new URL(req.url);

    // Custom route for specific agent
    if (url.pathname.startsWith("/custom/")) {
      const agent = getAgentByName(env, "MyAgent");
      const instanceName = url.pathname.split("/")[2];
      return agent.fetch(req, instanceName);
    }

    // Default routing
    return routeAgentRequest(req, env);
  }
};
```

## Testing Structure

### Test File Structure
```
tests/
├── agents/
│   ├── my-agent.test.ts
│   └── user-agent.test.ts
├── integration/
│   └── workflow.test.ts
└── setup.ts
```

### Test Setup
```typescript
// tests/setup.ts
import { setupWorker } from "cloudflare:test";
import { MyAgent } from "../src/agents/my-agent";

export const worker = setupWorker({
  main: "../src/worker.ts",
  bindings: {
    MyAgent: MyAgent
  }
});
```

## Package Structure

### Package.json
```jsonc
{
  "name": "my-agent-project",
  "version": "1.0.0",
  "type": "module",
  "scripts": {
    "dev": "wrangler dev",
    "deploy": "wrangler deploy",
    "test": "vitest",
    "type-check": "tsc --noEmit"
  },
  "dependencies": {
    "agents": "^0.0.1"
  },
  "devDependencies": {
    "@cloudflare/workers-types": "^4.0.0",
    "typescript": "^5.0.0",
    "wrangler": "^3.0.0",
    "vitest": "^1.0.0"
  }
}
```

## Best Practices

### File Organization
- One agent class per file
- Group related agents in folders
- Separate types from implementation
- Use index files for exports
- Keep file names descriptive

### Naming Conventions
- Agent classes: PascalCase (e.g., `MyAgent`)
- Instance names: kebab-case (e.g., `user-123`)
- State types: PascalCase (e.g., `State`)
- Callable methods: camelCase (e.g., `increment`)
- Files: kebab-case (e.g., `my-agent.ts`)

### Import Organization
```typescript
// 1. External dependencies
import { Agent, callable } from "agents";

// 2. Internal types
import type { State, Env } from "./types";

// 3. Internal utilities
import { helperFunction } from "./utils";
```

### Export Organization
```typescript
// Export main class
export { MyAgent } from "./my-agent";

// Export types
export type { State, Env } from "./types";

// Export utilities
export { helperFunction } from "./utils";
```
