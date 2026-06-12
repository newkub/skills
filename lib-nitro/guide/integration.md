# Integration

## Purpose

อธิบายการ integrate Nitro กับ frameworks, tools และ services ต่างๆ

## Scope

- Vite Integration
- Frontend Frameworks
- Backend Frameworks
- Database Layer
- Development Tools

## Vite Integration

Nitro ทำงานเป็น Vite plugin เพื่อเพิ่ม server API routes ให้ Vite app

```typescript
// vite.config.ts
import { defineConfig } from "vite";
import { nitro } from "nitro/vite";

export default defineConfig({
  plugins: [nitro()],
});
```

### Configuration

| Option | Description |
|--------|-------------|
| `serverDir` | โฟลเดอร์ที่เก็บ server routes |
| `preset` | Deploy target preset |
| `routeRules` | Route-level configuration |

## Frontend Frameworks

| Framework | Integration | Description |
|-----------|-------------|-------------|
| React | `vite-ssr-react` | SSR with React |
| Vue | `vite-ssr-vue-router` | SSR with Vue Router |
| SolidJS | `vite-ssr-solid` | SSR with SolidJS |
| Preact | `vite-ssr-preact` | SSR with Preact |

### React SSR Example

```typescript
// server/entry.tsx
import { renderToString } from "react-dom/server";
import App from "../src/App";

export default defineHandler(() => {
  const html = renderToString(<App />);
  return new Response(html, {
    headers: { "content-type": "text/html" },
  });
});
```

## Backend Frameworks

Nitro สามารถ integrate กับ backend frameworks อื่นๆ ผ่าน server entry

| Framework | Method | Description |
|-----------|--------|-------------|
| Express | Server entry | ใช้ Express middleware |
| Fastify | Server entry | ใช้ Fastify routing |
| Hono | Server entry | ใช้ Hono handlers |
| Elysia | Server entry | ใช้ Elysia routes |
| tRPC | Vite plugin | End-to-end typesafe |

### Express Integration

```typescript
// server/entry.ts
import express from "express";
const app = express();

app.get("/api/express", (req, res) => {
  res.json({ message: "Hello from Express" });
});

export default fromWebHandler(app);
```

## Database Layer

### Built-in Database

```typescript
// nitro.config.ts
export default defineConfig({
  database: {
    default: {
      connector: "sqlite",
      options: { name: "./db.sqlite" },
    },
  },
});
```

### Database Connectors

| Connector | Package | Description |
|-----------|---------|-------------|
| SQLite | `db0:sqlite` | Lightweight file-based |
| PostgreSQL | `db0:pg` | Production-grade RDBMS |
| MySQL | `db0:mysql2` | Popular RDBMS |

### Usage

```typescript
import { useDatabase } from "nitro";

export default defineHandler(async () => {
  const db = useDatabase();
  const users = await db.sql`SELECT * FROM users`;
  return users;
});
```

## Development Tools

| Tool | Integration | Description |
|------|-------------|-------------|
| TypeScript | Built-in | Auto-generated types |
| ESLint | Config | Linting rules |
| Biome | Config | Fast linting + formatting |
| Drizzle | Plugin | Database ORM |

## Next Steps

- [Architecture](architecture.md)
- [Best Practices](best-practices.md)