---
title: Database
description: Built-in SQL database layer ของ Nitro ด้วย db0
---

## What is Database?

Nitro มี built-in SQL database layer ที่ lightweight โดยใช้ `db0` รองรับหลาย database types

## Enabling Database

ต้อง enable experimental feature flag ก่อน:

```typescript
import { defineConfig } from "nitro/config";

export default defineConfig({
  experimental: {
    database: true
  }
});
```

## Default Setup

- **Default**: SQLite
- **Development**: `.data/db.sqlite`
- **Production**: ใช้ connection ที่ configure ไว้

## Usage

### useDatabase Hook

```typescript
import { useDatabase } from "nitro/database";

const db = useDatabase();
```

### SQL Template Literals

```typescript
import { useDatabase } from "nitro/database";

export default defineHandler(async () => {
  const db = useDatabase();
  
  const result = await db.sql`
    SELECT * FROM users WHERE id = ${userId}
  `;
  
  return result;
});
```

### db.exec

Execute SQL โดยไม่ต้องการ return value:

```typescript
await db.exec`
  CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY,
    name TEXT
  )
`;
```

### db.prepare

Prepare statement สำหรับ reuse:

```typescript
const stmt = db.prepare("SELECT * FROM users WHERE id = ?");
const result = await stmt.all(userId);
```

## Configuration

### Development Database

```typescript
import { defineConfig } from "nitro/config";

export default defineConfig({
  experimental: {
    database: true
  },
  devDatabase: {
    sqlite: {
      path: "./.data/dev.db"
    }
  }
});
```

### Production Database

```typescript
import { defineConfig } from "nitro/config";

export default defineConfig({
  experimental: {
    database: true
  },
  database: {
    postgres: {
      connectionString: process.env.DATABASE_URL
    }
  }
});
```

## Supported Databases

- SQLite (default)
- PostgreSQL
- MySQL
- Cloudflare D1
- และอื่นๆ จาก db0 connectors

## ORM Integration

สามารถ integrate กับ ORMs ที่รองรับ:
- Drizzle ORM
- Prisma
- TypeORM
- และอื่นๆ

ดูรายละเอียดที่ [db0 integrations](https://db0.unjs.io/integrations)

## Best Practices

- ใช้ SQLite สำหรับ development
- ใช้ environment variables สำหรับ production credentials
- Use prepared statements สำหรับ prevent SQL injection
- Handle database errors gracefully
- Use migrations สำหรับ schema changes
