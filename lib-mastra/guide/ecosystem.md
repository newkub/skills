# Ecosystem

Ecosystem และ tools ที่เกี่ยวข้องกับ Mastra

## ภาพรวม

Mastra ecosystem ประกอบด้วย:
- Core packages
- Tool integrations
- Memory backends
- AI providers
- Development tools

## Core Packages

### @mastra/core

Core framework สำหรับ building agents, workflows, tools, memory

```bash
bun add @mastra/core
```

### @mastra/tools

Collection ของ pre-built tools

```bash
bun add @mastra/tools
```

### @mastra/memory

Memory implementations และ backends

```bash
bun add @mastra/memory
```

## Tool Integrations

### API Tools

```bash
bun add @mastra/tool-rest
bun add @mastra/tool-graphql
bun add @mastra/tool-grpc
```

### Database Tools

```bash
bun add @mastra/tool-postgres
bun add @mastra-tool-mongodb
bun add @mastra/tool-redis
```

### Messaging Tools

```bash
bun add @mastra/tool-slack
bun add @mastra/tool-discord
bun add @mastra/tool-email
```

### Cloud Tools

```bash
bun add @mastra/tool-aws
bun add @mastra-tool-gcp
bun add @mastra-tool-azure
```

## Memory Backends

### In-Memory

```bash
bun add @mastra/memory-in-memory
```

### Vector Stores

```bash
bun add @mastra/memory-pinecone
bun add @mastra/memory-weaviate
bun add @mastra/memory-chroma
```

### Databases

```bash
bun add @mastra/memory-postgres
bun add @mastra/memory-mongodb
bun add @mastra/memory-redis
```

## AI Providers

### OpenAI

```bash
bun add @mastra/provider-openai
```

```typescript
import { OpenAIProvider } from '@mastra/provider-openai';

const provider = new OpenAIProvider({
  apiKey: process.env.OPENAI_API_KEY,
  model: 'gpt-4'
});
```

### Anthropic

```bash
bun add @mastra/provider-anthropic
```

```typescript
import { AnthropicProvider } from '@mastra/provider-anthropic';

const provider = new AnthropicProvider({
  apiKey: process.env.ANTHROPIC_API_KEY,
  model: 'claude-3-opus'
});
```

### Local Models

```bash
bun add @mastra/provider-ollama
bun add @mastra/provider-lm-studio
```

## Development Tools

### CLI

```bash
bun add -D @mastra/cli
```

```bash
mastra init
mastra dev
mastra build
mastra deploy
```

### Testing

```bash
bun add -D @mastra/test
```

```typescript
import { testAgent } from '@mastra/test';

test('agent should respond', async () => {
  const result = await testAgent(agent, 'Hello');
  expect(result).toBeDefined();
});
```

### Monitoring

```bash
bun add @mastra/monitor
```

```typescript
import { Monitor } from '@mastra/monitor';

const monitor = new Monitor();
monitor.track(agent);
```

## Community Tools

### Templates

```bash
bun create mastra-app my-app
```

### Plugins

```bash
bun add @mastra/plugin-langchain
bun add @mastra/plugin-vector-db
```

### Examples

```bash
git clone https://github.com/mastra-ai/examples
```

## Integrations

### Framework Integrations

#### Next.js

```bash
bun add @mastra/nextjs
```

#### Express

```bash
bun add @mastra/express
```

#### Fastify

```bash
bun add @mastra/fastify
```

### Platform Integrations

#### Vercel

```bash
bun add @mastra/vercel
```

#### Cloudflare Workers

```bash
bun add @mastra/cloudflare
```

#### AWS Lambda

```bash
bun add @mastra/aws-lambda
```

## Resources

### Documentation

- [Official Docs](https://docs.mastra.ai)
- [API Reference](https://api.mastra.ai)
- [Examples](https://github.com/mastra-ai/examples)

### Community

- [Discord](https://discord.gg/mastra)
- [Twitter](https://twitter.com/mastra_ai)
- [GitHub](https://github.com/mastra-ai)

### Learning

- [Tutorials](https://learn.mastra.ai)
- [Blog](https://blog.mastra.ai)
- [YouTube](https://youtube.com/@mastra_ai)

## Contributing

### Contributing Guidelines

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests
5. Submit a PR

### Code of Conduct

- Be respectful
- Be inclusive
- Be collaborative
- Be constructive

## Roadmap

### Upcoming Features

- [ ] Multi-modal support
- [ ] Real-time collaboration
- [ ] Advanced analytics
- [ ] Mobile SDK
- [ ] Edge deployment

### Planned Improvements

- [ ] Performance optimizations
- [ ] Security enhancements
- [ ] Documentation improvements
- [ ] Tool ecosystem expansion
