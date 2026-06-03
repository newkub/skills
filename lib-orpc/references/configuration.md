# configuration

## index.md

# Configuration Reference

## Server Config

```typescript
interface ServerConfig {
  router: Router;
  prefix?: string;
  errorHandler?: ErrorHandler;
  onRequest?: RequestHook;
  onResponse?: ResponseHook;
  debug?: boolean;
}
```

## Router Config

```typescript
interface RouterConfig {
  middlewares?: Middleware[];
  metadata?: RouteMetadata;
}
```

## Context Config

```typescript
interface Context {
  requestId: string;
  user?: User;
  startTime: number;
}
```

## Environment Variables

| Variable | Default | Description |
|----------|---------|-------------|
| ORPC_PORT | 3000 | Server port |
| ORPC_HOST | localhost | Server host |
| ORPC_PREFIX | / | API prefix |

---

