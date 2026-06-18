# Configuration

Mastra configuration options

## mastra.config.ts

```typescript
import { defineConfig } from '@mastra/core';

export default defineConfig({
  agents: {
    myAgent: {
      model: 'openai/gpt-4',
      instructions: 'You are helpful',
    },
  },
  tools: {
    weather: './src/tools/weather.ts',
  },
  memory: {
    type: 'vector',
    embeddings: 'openai/text-embedding-3-small',
  },
});
```

## Environment Variables

```env
# Model Provider
OPENAI_API_KEY=sk-...
ANTHROPIC_API_KEY=sk-ant-...

# Database
DATABASE_URL=postgresql://...

# Storage
STORAGE_PROVIDER=postgres
```

## Model Selection

Always use format: `provider/model-name`

```typescript
// Valid formats
model: 'openai/gpt-4'
model: 'anthropic/claude-3-sonnet'
model: 'google/gemini-pro'
```

## Provider Keys

| Provider | Env Variable |
|----------|-------------|
| OpenAI | OPENAI_API_KEY |
| Anthropic | ANTHROPIC_API_KEY |
| Google | GOOGLE_API_KEY |
| Azure | AZURE_OPENAI_KEY |

## Local Development

```bash
bun run dev    # Start with Studio
bun run build  # Build for production
```