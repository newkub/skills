# CLI Reference

## Wrangler

The Agents SDK uses Cloudflare Wrangler CLI for deployment and management.

### Installation
```bash
bun add -D wrangler
```

### Commands

#### dev
Start local development server.

```bash
wrangler dev
```

Options:
- `--local` - Use local mode
- `--port` - Specify port
- `--log-level` - Set log level (debug, info, warn, error)

#### deploy
Deploy to Cloudflare Workers.

```bash
wrangler deploy
```

Options:
- `--env` - Specify environment
- `--name` - Specify worker name

#### migrations
Manage Durable Object migrations.

```bash
wrangler migrations list
wrangler migrations create <tag>
```

#### secret
Manage secrets.

```bash
wrangler secret put <KEY>
wrangler secret list
wrangler secret delete <KEY>
```

#### tail
View real-time logs.

```bash
wrangler tail
```

Options:
- `--format` - Log format (pretty, json)

## Configuration

### wrangler.jsonc
Main configuration file.

```jsonc
{
  "name": "my-agent-project",
  "main": "src/worker.ts",
  "compatibility_date": "2024-01-01",
  "compatibility_flags": ["nodejs_compat"],
  "durable_objects": {
    "bindings": [
      { "name": "MyAgent", "class_name": "MyAgent" }
    ]
  },
  "migrations": [
    { "tag": "v1", "new_sqlite_classes": ["MyAgent"] }
  ]
}
```

### Environment Variables
Set environment variables in wrangler.jsonc.

```jsonc
{
  "vars": {
    "ENVIRONMENT": "production",
    "API_URL": "https://api.example.com"
  }
}
```

### Secrets
Store sensitive data as secrets.

```bash
wrangler secret put API_KEY
```

Access in code:
```typescript
const apiKey = env.API_KEY;
```

## Development Workflow

### Local Development
```bash
# Start local dev server
wrangler dev --local

# Test with remote mode
wrangler dev
```

### Testing
```bash
# Run tests
bun test

# Run tests with coverage
bun test --coverage
```

### Deployment
```bash
# Deploy to production
wrangler deploy

# Deploy to staging
wrangler deploy --env staging
```

## Common Commands

### Check Configuration
```bash
wrangler whoami
wrangler deployments list
```

### View Logs
```bash
# Tail logs
wrangler tail

# Tail logs for specific environment
wrangler tail --env production
```

### Manage Migrations
```bash
# List migrations
wrangler migrations list

# Create new migration
wrangler migrations create v2
```

## Troubleshooting

### Authentication Issues
```bash
# Login
wrangler login

# Check auth status
wrangler whoami
```

### Permission Errors
```bash
# Check permissions
wrangler whoami

# Re-authenticate
wrangler logout
wrangler login
```

### Migration Conflicts
```bash
# View migrations
wrangler migrations list

# Always add new migrations, never edit old ones
```

## Best Practices

### Version Control
- Commit wrangler.jsonc
- Don't commit secrets
- Use environment-specific configs

### Environments
```bash
# Development
wrangler deploy --env dev

# Staging
wrangler deploy --env staging

# Production
wrangler deploy --env production
```

### Local Testing
```bash
# Test locally first
wrangler dev --local

# Then test with remote
wrangler dev
```

## Integration with Build Tools

### npm scripts
```jsonc
{
  "scripts": {
    "dev": "wrangler dev",
    "deploy": "wrangler deploy",
    "deploy:staging": "wrangler deploy --env staging",
    "deploy:prod": "wrangler deploy --env production"
  }
}
```

### CI/CD
```yaml
# GitHub Actions example
- name: Deploy to Cloudflare
  run: wrangler deploy --env production
  env:
    CLOUDFLARE_API_TOKEN: ${{ secrets.CLOUDFLARE_API_TOKEN }}
```
