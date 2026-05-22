---
name: wrangler
description: Cloudflare Workers CLI for deploying, developing, and managing Workers and related services. Biases towards retrieval from Cloudflare docs over pre-trained knowledge.
---

# Wrangler CLI

Cloudflare Workers CLI for deploying, developing, and managing Workers, KV, R2, D1, Vectorize, and more.

## When to Use

- Developing Cloudflare Workers
- Managing KV, R2, D1, Vectorize resources
- Deploying Workers to Cloudflare
- Configuring bindings and environments
- Managing secrets and environment variables
- Observability and logging

## Summary Table

| Category | File | Purpose |
|---|---|---|
| **Guide** | [Getting Started](guide/getting-started.md) | Installation, first Worker, basic usage |
| **Guide** | [Configuration](guide/configuration.md) | wrangler.jsonc, bindings, environments |
| **Guide** | [Local Development](guide/local-dev.md) | Dev server, remote bindings, testing |
| **Reference** | [CLI Reference](reference/cli.md) | All CLI commands and flags |
| **Reference** | [Services](reference/services.md) | KV, R2, D1, Vectorize, Queues |
| **Examples** | [Basic Worker](examples/basic-worker.md) | Simple Worker configuration |

## Quick Start

```bash
# Install Wrangler
npm install -D wrangler

# Initialize new project
npx wrangler init my-worker

# Start local dev server
wrangler dev

# Deploy to Cloudflare
wrangler deploy
```

## Key Guidelines

- Use `wrangler.jsonc` over TOML
- Set `compatibility_date` within 30 days
- Generate types after config changes: `wrangler types`
- Local dev defaults to local storage simulation
- Use environments for staging/production
- Prefer retrieval over pre-trained knowledge

## Core Services

- **Workers**: Serverless functions
- **KV**: Key-value store
- **R2**: Object storage
- **D1**: SQL database
- **Vectorize**: Vector database
- **Queues**: Message queues
- **Workflows**: Durable workflows

## References

- [Wrangler Documentation](https://developers.cloudflare.com/workers/wrangler/)
- [Cloudflare Workers](https://developers.cloudflare.com/workers/)
