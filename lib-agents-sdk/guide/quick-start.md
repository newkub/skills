# Quick Start

## Create Your First Agent

```typescript
import { Agent, routeAgentRequest, callable } from "agents";

type State = { count: number };

export class Counter extends Agent<Env, State> {
  initialState = { count: 0 };

  @callable()
  increment() {
    this.setState({ count: this.state.count + 1 });
    return this.state.count;
  }
}

export default {
  fetch: (req, env) => routeAgentRequest(req, env) ?? new Response("Not found", { status: 404 })
};
```

## Client Usage

```tsx
import { useAgent } from "agents/react";

function App() {
  const agent = useAgent({
    agent: "Counter",
    name: "my-instance",
  });

  return <button onClick={() => agent.increment()}>Increment</button>;
}
```

## Test It

1. Deploy to Cloudflare Workers
2. Access at `/agents/counter/my-instance`
3. Use the React client to interact
