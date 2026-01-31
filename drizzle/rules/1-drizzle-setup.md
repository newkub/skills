# Drizzle Setup Guide

## Project Initialization

### Installation
```bash
# Core packages
npm install drizzle-orm
npm install -D drizzle-kit

# Database drivers (choose one)
npm install better-sqlite3    # SQLite
npm install pg               # PostgreSQL
npm install mysql2           # MySQL

# Type definitions
npm install -D @types/better-sqlite3
```

### Project Structure
```
src/
├── db/
│   ├── index.ts           # Database connection
│   ├── schema/
│   │   ├── users.ts       # User table schema
│   │   ├── posts.ts       # Post table schema
│   │   └── index.ts       # Schema exports
│   └── migrations/        # Migration files
```

### TypeScript Configuration
```json
// tsconfig.json
{
  "compilerOptions": {
    "target": "ES2022",
    "module": "ESNext",
    "moduleResolution": "Bundler",
    "strict": true,
    "esModuleInterop": true
  }
}
```

### Database Connection Setup

#### SQLite
```typescript
import { drizzle } from 'drizzle-orm/better-sqlite3';
import Database from 'better-sqlite3';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const sqlite = new Database(path.join(__dirname, '../../drizzle.db'));
export const db = drizzle(sqlite);
```

#### PostgreSQL
```typescript
import { drizzle } from 'drizzle-orm/node-postgres';
import { Pool } from 'pg';

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  max: 20,
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 2000,
});

export const db = drizzle(pool, { schema });
```

### Drizzle Config
```typescript
// drizzle.config.ts
import type { Config } from 'drizzle-kit';

export default {
  schema: './src/db/schema',
  out: './src/db/migrations',
  driver: 'pg', // 'pg' | 'mysql' | 'sqlite'
  dbCredentials: {
    url: process.env.DATABASE_URL!,
  },
} satisfies Config;
```

### Package.json Scripts
```json
{
  "scripts": {
    "db:push": "drizzle-kit push",
    "db:generate": "drizzle-kit generate",
    "db:migrate": "drizzle-kit migrate",
    "db:studio": "drizzle-kit studio",
    "db:pull": "drizzle-kit pull"
  }
}
```

## Environment Setup

### .env File
```env
DATABASE_URL=postgresql://user:password@localhost:5432/mydb
# or for SQLite
DATABASE_URL=file:./drizzle.db
```

## Development Workflow

1. **Define schema** in `src/db/schema/`
2. **Run migrations** with `npm run db:push` (dev) or `npm run db:generate` (prod)
3. **Use Drizzle Studio** with `npm run db:studio` for visual database browser
4. **Test queries** with type-safe database operations

## Common Issues

- **Module resolution errors**: Ensure `moduleResolution: "Bundler"` in tsconfig
- **Connection pool exhausted**: Adjust `max` in Pool config
- **Migration conflicts**: Use `drizzle-kit generate` for production, `push` for development
