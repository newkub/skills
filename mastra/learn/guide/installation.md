# Installation

Install Mastra framework

## Prerequisites

- Node.js 20+
- TypeScript 5+
- API key from supported provider (OpenAI, Anthropic, Google, etc.)

## Quick Install

```bash
bun create mastra@latest
```

## Manual Install

```bash
mkdir my-agent && cd my-agent
bun init -y
bun install @mastra/core@latest zod@^4
bun install -D typescript @types/node
```

## package.json Scripts

```json
{
  "scripts": {
    "dev": "mastra dev",
    "build": "mastra build"
  }
}
```

## TypeScript Config

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

## Project Structure

```
my-agent/
├── src/
│   ├── agents/
│   ├── workflows/
│   └── tools/
├── mastra.config.ts
└── package.json
```