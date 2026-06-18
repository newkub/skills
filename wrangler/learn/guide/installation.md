# Installation

## Prerequisites

- Node.js 16+ หรือ Bun
- Cloudflare account
- Cloudflare API token

## Install Wrangler

```bash
# Using Bun (recommended)
bun add -D wrangler

# Using bun
bun install -D wrangler

# Using bun
bun add -D wrangler

# Using yarn
yarn add -D wrangler
```

## Global Installation

```bash
# Using Bun
bun add -g wrangler

# Using bun
bun install -g wrangler
```

## Authentication

```bash
# Login to Cloudflare
wrangler login

# Check authentication
wrangler whoami
```

## Verify Installation

```bash
wrangler --version
```

## Environment Variables

Optional: Set environment variables for CI/CD

```bash
CLOUDFLARE_ACCOUNT_ID=your_account_id
CLOUDFLARE_API_TOKEN=your_api_token
```

## IDE Integration

- **VS Code** - Cloudflare Workers extension
- **TypeScript** - Auto-completion with `wrangler types`
- **ESLint** - Wrangler-specific rules
