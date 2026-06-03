# CLI Reference

## Workers Commands

### `wrangler init`

Create a new Worker project.

```bash
wrangler init [<NAME>] [OPTIONS]
```

| Flag | Description |
|------|-------------|
| `--yes` | Skip prompts |
| `--from-dash <WORKER_NAME>` | Fetch from dashboard |

### `wrangler dev`

Start local development server.

```bash
wrangler dev [<SCRIPT>] [OPTIONS]
```

| Flag | Description |
|------|-------------|
| `--name` | Worker name |
| `--env` | Environment |
| `--port` | Port (default: 8787) |
| `--ip` | IP address |
| `--remote` | Use remote resources |
| `--tunnel` | Create tunnel |
| `--test-scheduled` | Test cron triggers |
| `--var` | Set variables |

### `wrangler deploy`

Deploy to Cloudflare.

```bash
wrangler deploy [<PATH>] [OPTIONS]
```

| Flag | Description |
|------|-------------|
| `--name` | Worker name |
| `--env` | Environment |
| `--dry-run` | Preview without deploying |
| `--assets` | Static assets folder |
| `--triggers` | Cron schedules |
| `--routes` | Custom routes |
| `--domain` | Custom domains |
| `--keep-vars` | Keep dashboard vars |
| `--secrets-file` | Secrets file |

### `wrangler delete`

Delete a Worker.

```bash
wrangler delete [<SCRIPT>] [OPTIONS]
```

| Flag | Description |
|------|-------------|
| `--name` | Worker name |
| `--env` | Environment |
| `--dry-run` | Preview without deleting |

## KV Commands

### Namespace Operations

```bash
# Create namespace
wrangler kv:namespace create <NAME>

# List namespaces
wrangler kv:namespace list

# Delete namespace
wrangler kv:namespace delete --namespace-id <ID>
```

### Key-Value Operations

```bash
# Put key
wrangler kv:key put <KEY> <VALUE> --namespace-id <ID>

# Get key
wrangler kv:key get <KEY> --namespace-id <ID>

# Delete key
wrangler kv:key delete <KEY> --namespace-id <ID>

# List keys
wrangler kv:key list --namespace-id <ID>

# Bulk operations
wrangler kv:bulk put <FILE> --namespace-id <ID>
```

## R2 Commands

```bash
# Create bucket
wrangler r2 bucket create <NAME>

# List buckets
wrangler r2 bucket list

# Delete bucket
wrangler r2 bucket delete <NAME>
```

## D1 Commands

```bash
# Create database
wrangler d1 create <NAME>

# Execute query
wrangler d1 execute <DB> --command "<SQL>"

# Export database
wrangler d1 export <DB>

# Import SQL
wrangler d1 import <DB> <FILE>
```

## Secret Commands

```bash
# Create secret
wrangler secret put <NAME>

# Delete secret
wrangler secret delete <NAME>

# Bulk upload
wrangler secret bulk <FILE>
```

## Other Commands

```bash
# Login
wrangler login

# Who am I
wrangler whoami

# View logs
wrangler tail [<NAME>]

# Generate types
wrangler types
```

## Global Flags

| Flag | Description |
|------|-------------|
| `--config` | Config file path |
| `--cwd` | Working directory |
| `--help` | Show help |