# Installation

## Prerequisites

- Node.js 18+
- TypeScript 5.0+
- Bun หรือ npm/pnpm

## Installation

```bash
bun add orpc
```

## Project Setup

### 1. Initialize Project

```bash
mkdir my-project
cd my-project
bun init -y
```

### 2. Install Dependencies

```bash
bun add orpc
bun add -D typescript @types/node
```

### 3. Configure tsconfig

```json
{
  "compilerOptions": {
    "target": "ES2022",
    "module": "ESNext",
    "moduleResolution": "bundler",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "outDir": "dist"
  },
  "include": ["src/**/*"]
}
```

## Quick Verification

```typescript
// src/index.ts
import { orpc } from 'orpc';

const router = orpc.router();

export default router;
```

Run with:

```bash
bun run src/index.ts
```

## Next Steps

- [Quick Start Guide](quick-start.md)
- [Key Concepts](key-concept.md)
- [Configuration](configuration.md)