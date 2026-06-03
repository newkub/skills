# Integration

## ภาพรวม

Node.js สามารถเชื่อมต่อกับ tools และ frameworks ต่างๆ ได้อย่างราบรื่น

## Framework Integration

### Express

```bash
npm install express
```

```javascript
import express from 'express';
const app = express();

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.listen(3000);
```

### Fastify

```bash
npm install fastify
```

```javascript
import Fastify from 'fastify';
const fastify = Fastify({ logger: true });

fastify.get('/', async (request, reply) => {
  return { hello: 'world' };
});

fastify.listen({ port: 3000 });
```

### Koa

```bash
npm install koa
```

```javascript
import Koa from 'koa';
const app = new Koa();

app.use(async ctx => {
  ctx.body = 'Hello World';
});

app.listen(3000);
```

### NestJS

```bash
npm install -g @nestjs/cli
nest new my-app
```

## Tool Integration

### ESLint

```bash
npm install -D eslint
npx eslint --init
```

### Prettier

```bash
npm install -D prettier
npx prettier --write .
```

### TypeScript

```bash
npm install -D typescript
npx tsc --init
```

### Jest

```bash
npm install -D jest
npx jest --init
```

## Database Integration

### PostgreSQL

```bash
npm install pg
```

```javascript
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
npm install mongodb
```

```javascript
import { MongoClient } from 'mongodb';

const client = new MongoClient('mongodb://localhost:27017');
await client.connect();
```

### MySQL

```bash
npm install mysql2
```

```javascript
import mysql from 'mysql2/promise';

const connection = await mysql.createConnection({
  host: 'localhost',
  user: 'user',
  password: 'password',
  database: 'mydb',
});
```

### SQLite

```bash
npm install better-sqlite3
```

```javascript
import Database from 'better-sqlite3';
const db = new Database('mydb.sqlite');
```

## API Integration

### REST APIs

```javascript
import express from 'express';
const app = express();

app.get('/api/users', (req, res) => {
  res.json({ users: [] });
});

app.listen(3000);
```

### GraphQL

```bash
npm install @apollo/server graphql
```

```javascript
import { ApolloServer } from '@apollo/server';

const server = new ApolloServer({
  typeDefs,
  resolvers,
});
```

### gRPC

```bash
npm install @grpc/grpc-js @grpc/proto-loader
```

## Cloud Integration

### Vercel

```bash
npm install -g vercel
vercel
```

### Netlify

```bash
npm install -g netlify-cli
netlify
```

### AWS Lambda

```bash
npm install -g serverless
serverless create
```

## CI/CD Integration

### GitHub Actions

```yaml
name: Node.js CI
on: [push]
jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
      - run: npm install
      - run: npm test
```

### GitLab CI

```yaml
test:
  image: node:18
  script:
    - npm install
    - npm test
```

## Docker Integration

### Dockerfile

```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
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
npm install -D jest
```

### Mocha

```bash
npm install -D mocha
```

### Vitest

```bash
npm install -D vitest
```

## Best Practices

1. **ใช้ npm** สำหรับ package management
2. **ใช้ npx** สำหรับ running CLI tools
3. **ใช้ TypeScript** สำหรับ type safety
4. **ใช้ environment variables** สำหรับ configuration
5. **ใช้ Docker** สำหรับ containerization
