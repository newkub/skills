# configuration

## index.md

# Configuration

Mastra configuration options

## mastra.config.ts

```typescript
import { defineConfig } from '@mastra/core';

export default defineConfig({
  agents: {
    myAgent: {
      model: 'openai/gpt-4',
      instructions: 'You are a helpful assistant',
    },
  },
  tools: {},
  memory: {},
  storage: {},
});
```

## Agent Configuration

```typescript
interface AgentConfig {
  name: string;
  model: string;
  instructions?: string;
  tools?: Tool[];
  memory?: Memory;
}
```

## Model Format

Always use `provider/model-name`:

```typescript
// Valid
model: 'openai/gpt-4'
model: 'anthropic/claude-3-sonnet'
model: 'google/gemini-pro'

// Invalid
model: 'gpt-4'
```

## Environment Variables

```env
# Provider API Keys
OPENAI_API_KEY=sk-...
ANTHROPIC_API_KEY=sk-ant-...
GOOGLE_API_KEY=...

# Database
DATABASE_URL=postgresql://...

# Storage
STORAGE_PROVIDER=postgres
```

## TypeScript Configuration

```json
{
  "compilerOptions": {
    "target": "ES2022",
    "module": "ESNext",
    "moduleResolution": "Bundler",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true
  }
}
```

## Local Development

```bash
bun run dev    # Studio at localhost:4111
bun run build  # Production build
```

---

