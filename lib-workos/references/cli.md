# CLI Commands

Command-line interface for WorkOS (via SDK)

## Installation

```bash
# Install SDK
npm install @workos-inc/node
```

## WorkOS CLI

WorkOS provides SDKs rather than a dedicated CLI. Use your framework's tools.

## Available Commands

No dedicated CLI. Use framework tools:

```bash
# Next.js
npm run dev

# Express
npm run dev

# Node.js
bunx ts-node src/index.ts
```

## Package.json Scripts

```json
{
  "scripts": {
    "dev": "ts-node src/index.ts",
    "build": "tsc",
    "test": "vitest"
  }
}
```

## Webhook Testing

Use ngrok or similar for local webhook testing:

```bash
ngrok http 3000
```

Then configure webhook URL in WorkOS dashboard.

## Type Checking

```bash
bunx tsc --noEmit
```

## See Also

- [Configuration](./configuration.md) - Config options
- [Programmatic API](./programmatic-api.md) - SDK usage