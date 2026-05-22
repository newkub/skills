---
name: Elysia App Template
description: Template สำหรับสร้าง Elysia app พื้นฐาน
---

# Elysia App Template

## Project Structure

```text
elysia-app/
├── src/
│   ├── routes/
│   │   ├── index.ts
│   │   ├── users.ts
│   │   └── posts.ts
│   ├── schemas/
│   │   ├── user.ts
│   │   └── post.ts
│   ├── plugins/
│   │   ├── database.ts
│   │   └── auth.ts
│   └── index.ts
├── package.json
└── tsconfig.json
```

## src/index.ts

```typescript
import { Elysia } from 'elysia'
import { openapi } from '@elysiajs/openapi'

const app = new Elysia()
  .use(openapi())
  .get('/', () => 'Hello Elysia')
  .listen(3000)

console.log(`🦊 Elysia is running at http://localhost:3000`)
```

## src/routes/index.ts

```typescript
import { Elysia } from 'elysia'
import { userRoutes } from './users'
import { postRoutes } from './posts'

export const routes = new Elysia()
  .use(userRoutes)
  .use(postRoutes)
```

## src/routes/users.ts

```typescript
import { Elysia, t } from 'elysia'

export const userRoutes = new Elysia({ prefix: '/users' })
  .get('/', () => {
    return {
      users: [
        { id: 1, name: 'John Doe' },
        { id: 2, name: 'Jane Smith' }
      ]
    }
  })
  .get('/:id', ({ params: { id } }) => {
    return {
      id: parseInt(id),
      name: 'John Doe'
    }
  }, {
    params: t.Object({
      id: t.Numeric()
    })
  })
  .post('/', ({ body }) => {
    return {
      success: true,
      data: body
    }
  }, {
    body: t.Object({
      name: t.String(),
      email: t.String()
    })
  })
```

## package.json

```json
{
  "name": "elysia-app",
  "version": "1.0.0",
  "scripts": {
    "dev": "bun run --watch src/index.ts",
    "build": "bun build src/index.ts --outdir ./dist",
    "start": "bun dist/index.js"
  },
  "dependencies": {
    "elysia": "^1.0.0",
    "@elysiajs/openapi": "^1.0.0"
  }
}
```

## tsconfig.json

```json
{
  "compilerOptions": {
    "target": "ESNext",
    "module": "ESNext",
    "moduleResolution": "bundler",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true
  }
}
```
