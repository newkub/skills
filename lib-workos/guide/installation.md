# Installation

Install WorkOS SDK

## Prerequisites

- Node.js 18+
- TypeScript 5+
- WorkOS account and API key

## Install SDK

```bash
npm install @workos-inc/node
```

## Environment Setup

```bash
# .env
WORKOS_API_KEY=sk_xxxxxxxxxxxxxxxxxxxxxxxx
WORKOS_CLIENT_ID=client_xxxxxxxxxxxxxxxxxxxxxxxx
WORKOS_REDIRECT_URI=http://localhost:3000/callback
WORKOS_WEBHOOK_SECRET=we_xxxxxxxxxxxxxxxxxxxxxxxx
```

## TypeScript Configuration

```json
{
  "compilerOptions": {
    "target": "ES2022",
    "module": "ESNext",
    "moduleResolution": "Bundler",
    "strict": true
  }
}
```

## Project Structure

```
src/
├── workos/
│   ├── sso.ts
│   ├── directory-sync.ts
│   └── audit-log.ts
├── middleware/
│   └── auth.ts
└── pages/
    ├── login.tsx
    └── callback.tsx
```