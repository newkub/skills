# Integration

## ภาพรวม

Bun สามารถเชื่อมต่อกับ tools และ frameworks ต่างๆ ได้อย่างราบรื่น

## Node.js Compatibility

### ใช้ Node.js Packages

Bun สามารถใช้ Node.js packages ส่วนใหญ่ได้โดยตรง:

```bash
bun add express
bun add lodash
bun add axios
```

### CommonJS Modules

Bun รองรับ CommonJS:

```javascript
// ใช้ require
const express = require('express');

// ใช้ import
import express from 'express';
```

### Node.js APIs

Bun รองรับ Node.js APIs ส่วนใหญ่:

```javascript
import fs from 'fs';
import path from 'path';
import http from 'http';
```

## Framework Integration

### Next.js

```bash
bun create next-app my-app
cd my-app
bun install
bun run dev
```

### React

```bash
bun create vite my-app --template react
cd my-app
bun install
bun run dev
```

### Vue

```bash
bun create vite my-app --template vue
cd my-app
bun install
bun run dev
```

### Svelte

```bash
bun create vite my-app --template svelte
cd my-app
bun install
bun run dev
```

## Tool Integration

### ESLint

```bash
bun add -d eslint
bunx eslint --init
```

### Prettier

```bash
bun add -d prettier
bunx prettier --write .
```

### TypeScript

```bash
bun add -d typescript
bunx tsc --init
```

### Vitest

```bash
bun add -d vitest
bunx vitest init
```

## Database Integration

### PostgreSQL

```bash
bun add pg
```

```typescript
import pg from 'pg';
const { Pool } = pg;

const pool = new Pool({
  host: 'localhost',
  port: 5432,
  database: 'mydb',
  user: 'user',
  password: 'password',
});
```

### MongoDB

```bash
bun add mongodb
```

```typescript
import { MongoClient } from 'mongodb';

const client = new MongoClient('mongodb://localhost:27017');
await client.connect();
```

### SQLite

```bash
bun add better-sqlite3
```

```typescript
import Database from 'better-sqlite3';
const db = new Database('mydb.sqlite');
```

## API Integration

### REST APIs

```typescript
import { serve } from 'bun';

serve({
  port: 3000,
  fetch(req) {
    return new Response('Hello World');
  },
});
```

### GraphQL

```bash
bun add @apollo/server
```

```typescript
import { ApolloServer } from '@apollo/server';

const server = new ApolloServer({
  typeDefs,
  resolvers,
});
```

## Cloud Integration

### Vercel

```bash
bun add -g vercel
vercel
```

### Netlify

```bash
bun add -g netlify-cli
netlify
```

### Cloudflare Workers

```bash
bun add wrangler
bunx wrangler init
```

## CI/CD Integration

### GitHub Actions

```yaml
name: Bun CI
on: [push]
jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: oven-sh/setup-bun@v1
      - run: bun install
      - run: bun test
```

### GitLab CI

```yaml
test:
  image: oven/bun
  script:
    - bun install
    - bun test
```

## Docker Integration

### Dockerfile

```dockerfile
FROM oven/bun:latest
WORKDIR /app
COPY package.json bun.lockb ./
RUN bun install
COPY . .
RUN bun run build
EXPOSE 3000
CMD ["bun", "run", "start"]
```

### docker-compose.yml

```yaml
version: '3.8'
services:
  app:
    build: .
    ports:
      - "3000:3000"
```

## Testing Integration

### Jest

```bash
bun add -d jest @types/jest
```

### Vitest

```bash
bun add -d vitest
```

### Bun Test

```bash
bun test
```

## Best Practices

1. **ใช้ bun add** แทน npm install
2. **ใช้ bunx** สำหรับ running CLI tools
3. **ตรวจสอบ compatibility** ก่อนใช้ Node.js packages
4. **ใช้ TypeScript** สำหรับ type safety
5. **ใช้ environment variables** สำหรับ configuration
