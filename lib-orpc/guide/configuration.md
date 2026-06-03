# Configuration

## Basic Config

```typescript
import { createServer } from 'http';
import { ORPCServer } from 'orpc';

const server = new ORPCServer({
  router: app,
  prefix: '/api',
});
```

## Server Options

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| router | Router | - | Main router instance |
| prefix | string | '/' | URL prefix for all routes |
| errorHandler | function | default | Custom error handler |
| onRequest | function | - | Request hook |
| onResponse | function | - | Response hook |

## Middleware Config

```typescript
const server = new ORPCServer({
  router: app,
  middlewares: [cors(), bodyParser()],
});
```

## Context Configuration

```typescript
interface Context {
  requestId: string;
  user?: User;
  startTime: number;
}

const server = new ORPCServer<Context>({
  router: app,
  context: async ({ req }) => ({
    requestId: crypto.randomUUID(),
    startTime: Date.now(),
  }),
});
```

## Environment Variables

```bash
ORPC_PORT=3000
ORPC_HOST=localhost
ORPC_PREFIX=/api
```

## Runtime Config

```typescript
const config = {
  port: parseInt(process.env.PORT || '3000'),
  host: process.env.HOST || 'localhost',
};
```