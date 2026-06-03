# Cloudflare Sandbox - Configuration Reference

Configuration options สำหรับ Cloudflare Sandbox และ Wrangler

## wrangler.toml Schema

### Basic Configuration

```toml
name = "my-worker"
main = "src/index.ts"
compatibility_date = "2024-01-01"

# Node.js compatibility
compatibility_flags = ["nodejs_compat"]
```

### Build Configuration

```toml
# Custom build command
build = "npm run build"

# Upload command
upload = "wrangler pages deploy dist"

# Assets directory
assets = "./public"
```

## Local Development

### Dev Server Configuration

```toml
[dev]
# Port (default: 8787)
port = 3000

# Host (default: localhost)
host = "0.0.0.0"

# Upstream URL for testing
upstream = "https://api.example.com"

# Enable HTTPS
https = true

# Local KV namespace ID
kv_namespaces = [
  { binding = "MY_KV", id = "xxxxxxxxxxxxxxxx" }
]

# Inspector port
inspector_port = 9229

# Live reload
live_reload = true
```

### Wrangler Dev Command

```bash
# Basic
wrangler dev

# With options
wrangler dev --port 3000 --host 0.0.0.0 --inspect

# With local KV
wrangler dev --kv_namespaces "MY_KV=xxxxxxxx"

# With verbose logging
wrangler dev --verbose

# Clear cache
wrangler dev --clear
```

## Environment Configuration

### Multiple Environments

```toml
# Base configuration
name = "my-worker"
main = "src/index.ts"

# Staging environment
[env.staging]
name = "my-worker-staging"
route = { pattern = "staging.example.com", zone_name = "example.com" }

# Production environment
[env.production]
name = "my-worker-prod"
route = { pattern = "example.com", zone_name = "example.com" }
```

### Environment Variables

```toml
# Public variables
[vars]
DEBUG = "false"
API_URL = "https://api.example.com"

# Environment-specific
[env.staging.vars]
DEBUG = "true"
API_URL = "https://staging-api.example.com"
```

## Secrets Management

### Adding Secrets

```bash
# Via CLI
wrangler secret put API_KEY

# For specific environment
wrangler secret put API_KEY --env production
```

### Secrets in Development

```bash
# Add to local .dev.vars file
API_KEY=your-api-key-here
```

## KV Configuration

### Local KV Namespaces

```toml
# Define KV namespace
[[kv_namespaces]]
binding = "MY_KV"
id = "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
preview_id = "yyyyyyyyyyyyyyyyyyyyyyyyyyyy"
```

### Local Development

```bash
# Create local KV for dev
wrangler kv:namespace create "MY_KV"

# Or with --local flag
wrangler dev --kv_namespaces "MY_KV=xxxxxxxx"
```

### KV Commands

```bash
# Create namespace
wrangler kv:namespace create "MY_KV"

# Create preview namespace
wrangler kv:namespace create "MY_KV" --preview

# List namespaces
wrangler kv:namespace list

# Delete namespace
wrangler kv:namespace delete --namespace-id "xxxx"
```

## D1 Configuration

### Database Definition

```toml
[[d1_databases]]
binding = "DB"
database_name = "my-db"
database_id = "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
```

### Local Development

```bash
# Create local database
wrangler d1 create my-db

# Apply migrations
wrangler d1 execute my-db --file=./migrations/001.sql --local

# Or with --persist for local persistence
wrangler d1 execute my-db --file=./migrations/001.sql --local --persist
```

### D1 Commands

```bash
# Create database
wrangler d1 create my-db

# List databases
wrangler d1 list

# Execute SQL
wrangler d1 execute my-db --command "SELECT * FROM users"

# Apply migrations
wrangler d1 execute my-db --file=./migrations/001.sql

# Create backup
wrangler d1 backup create my-db

# List backups
wrangler d1 backup list my-db

# Restore backup
wrangler d1 backup restore my-db --backup-id "xxxx"
```

## R2 Configuration

### Bucket Definition

```toml
[[r2_buckets]]
binding = "ASSETS"
bucket_name = "my-bucket"
```

### Local Development

```bash
# Create local bucket
wrangler r2 bucket create my-bucket
```

### R2 Commands

```bash
# Create bucket
wrangler r2 bucket create my-bucket

# List buckets
wrangler r2 bucket list

# Delete bucket
wrangler r2 bucket delete my-bucket

# Put object
wrangler r2 object put my-key --bucket my-bucket < file.txt

# Get object
wrangler r2 object get my-key --bucket my-bucket > file.txt

# List objects
wrangler r2 object list --bucket my-bucket

# Delete object
wrangler r2 object delete my-key --bucket my-bucket
```

## Durable Objects

### Class Definition

```toml
[[durable_objects.bindings]]
name = "COUNTER"
class_name = "Counter"
```

### Script Configuration

```toml
# Durable Object classes
[durable_objects]
classes = [
  { name = "Counter", script = "do-counter" }
]
```

## TypeScript Configuration

### tsconfig.json

```json
{
  "compilerOptions": {
    "target": "ES2022",
    "module": "ES2022",
    "moduleResolution": "bundler",
    "types": ["@cloudflare/workers-types"]
  }
}
```

### Install Types

```bash
npm install -D @cloudflare/workers-types
```

## Testing Configuration

### Vitest Setup

```javascript
// vitest.config.js
export default {
  test: {
    environment: 'miniflare',
    globals: true
  }
};
```

### Playwright Setup

```javascript
// playwright.config.js
export default {
  use: {
    baseURL: 'http://localhost:8787'
  }
};
```

### Test Commands

```bash
# Run with Wrangler
wrangler dev --test

# Run with Vitest
npx vitest

# Run with Playwright
npx playwright test
```

## Preview Deployment

### Deploy to Staging

```bash
# Deploy to staging environment
wrangler deploy --env staging

# Get preview URL
wrangler deploy
```

### Preview URL

```bash
# View recent deployments
wrangler deployments list

# Inspect deployment
wrangler inspect <url>
```

## Logging Configuration

### View Logs

```bash
# Tail real-time logs
wrangler tail

# Filter by status
wrangler tail --status error

# Filter by header
wrangler tail --header "X-Custom-Header:value"

# Filter by method
wrangler tail --method POST
```

### Debug Mode

```bash
# Enable verbose logging
wrangler dev --verbose

# Enable inspector
wrangler dev --inspect
```

## Miniflare Configuration

### .dev.vars

```text
# Environment variables for local development
API_KEY=your-api-key
DATABASE_URL=postgres://...
```

### miniflare.toml

```toml
# For complex local testing
[dev]
port = 8787

[[kv_namespaces]]
id = "xxxxxxxx"
name = "MY_KV"

[[d1_databases]]
id = "xxxxxxxx"
name = "DB"
```

## Environment-Specific Config

### Development

```toml
[env.development]
name = "my-worker-dev"

[env.development.vars]
DEBUG = "true"
```

### Staging

```toml
[env.staging]
name = "my-worker-staging"

[env.staging.vars]
DEBUG = "false"
```

### Production

```toml
[env.production]
name = "my-worker-prod"
route = { pattern = "example.com", zone_name = "example.com" }

[env.production.vars]
DEBUG = "false"
```

## Common Patterns

### Load Testing

```bash
# Run with increased memory
wrangler dev --mem 512
```

### API Mocking

```bash
# Use upstream
wrangler dev --upstream https://api.example.com
```

### Feature Flags

```toml
[vars]
FEATURE_NEW_UI = "false"
FEATURE_BETA = "true"
```

## สรุป

- wrangler.toml เป็น config file หลัก
- Local development มี options หลายอย่าง
- KV, D1, R2 มี local equivalents
- Testing รองรับ Vitest และ Playwright
- Environment-specific configurations มีได้