# Structure

## Project Structure

```
my-nitro-app/
├── server/
│   ├── api/
│   │   ├── index.get.ts
│   │   └── users.get.ts
│   ├── routes/
│   │   └── index.ts
│   └── middleware/
│       └── auth.ts
├── public/
│   └── index.html
├── nitro.config.ts
└── package.json
```

## Server Structure

- **api/** - API routes และ handlers
- **routes/** - Route definitions
- **middleware/** - Middleware functions
- **utils/** - Utility functions
- **types/** - TypeScript types

## File Organization

แยก files ตาม responsibility:
- API handlers ใน `api/`
- Route definitions ใน `routes/`
- Shared logic ใน `utils/`
- Types ใน `types/`
