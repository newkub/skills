# Installation

## Prerequisites

- Cloudflare account
- Custom domain (for Email Routing)
- Verified domain (for Email Sending)

## Enable Email Service

1. Go to Email > Email Routing in Cloudflare dashboard
2. Click "Get started"
3. Verify your domain

## Wrangler Configuration

Add email binding to `wrangler.jsonc`:

```jsonc
{
  "email": {
    "bindings": [{ "name": "EMAIL", "type": "send" }]
  }
}
```

For receiving emails:

```jsonc
{
  "email": {
    "bindings": [{ "name": "EMAIL", "type": "receive" }]
  }
}
```
