# Cloudflare Workers - CLI Reference

Commands และ options สำหรับ Wrangler CLI

## Installation

```bash
npm install -g wrangler
```

## Core Commands

### wrangler init

Create a new Worker project.

```bash
wrangler init [name]
```

| Option | Description |
|--------|-------------|
| `--yes` | Skip prompts |
| `--type` | Choose template type |
| `--compatibility-date` | Set compatibility date |

### wrangler dev

Start a local development server.

```bash
wrangler dev [script]
```

| Option | Description | Default |
|--------|-------------|---------|
| `--port` | Port number | 8787 |
| `--host` | Host to bind | localhost |
| `--local` | Use local storage | false |
| `--https` | Enable HTTPS | false |
| `--inspect` | Enable inspector | true |
| `--ip` | Bind to IP | 127.0.0.1 |

### wrangler deploy

Deploy to Cloudflare.

```bash
wrangler deploy [script]
```

| Option | Description |
|--------|-------------|
| `--env` | Environment name |
| `--prod` | Deploy to production |
| `--message` | Deployment message |
| `--dry-run` | Show output without deploying |

### wrangler tail

View real-time logs.

```bash
wrangler tail [worker]
```

| Option | Description |
|--------|-------------|
| `--format` | Output format (json, pretty) |
| `--status` | Filter by status |
| `--header` | Filter by header |
| `--method` | Filter by method |

### wrangler whoami

Check authentication status.

```bash
wrangler whoami
```

## Authentication

### wrangler login

Authenticate with Cloudflare.

```bash
wrangler login
```

Opens browser for OAuth flow.

### wrangler logout

Log out from Cloudflare.

```bash
wrangler logout
```

## Secrets Management

### wrangler secret put

Add a secret variable.

```bash
wrangler secret put NAME
```

Reads value from stdin.

### wrangler secret delete

Delete a secret.

```bash
wrangler secret delete NAME
```

### wrangler secret list

List all secrets.

```bash
wrangler secret list
```

## KV Commands

### wrangler kv:namespace create

Create a KV namespace.

```bash
wrangler kv:namespace create "NAME"
```

| Option | Description |
|--------|-------------|
| `--env` | Environment |
| `--preview` | Preview namespace |

### wrangler kv:namespace delete

Delete a KV namespace.

```bash
wrangler kv:namespace delete --namespace-id "ID"
```

### wrangler kv:key

Manage KV keys.

```bash
# Put value
wrangler kv:key put "KEY" "VALUE" --namespace-id "ID"

# Get value
wrangler kv:key get "KEY" --namespace-id "ID"

# Delete
wrangler kv:key delete "KEY" --namespace-id "ID"

# List
wrangler kv:key list --namespace-id "ID"
```

## D1 Commands

### wrangler d1 create

Create a D1 database.

```bash
wrangler d1 create "NAME"
```

### wrangler d1 execute

Execute SQL against a database.

```bash
wrangler d1 execute "NAME" --command "SELECT * FROM table"
```

| Option | Description |
|--------|-------------|
| `--file` | SQL file to execute |
| `--local` | Use local database |
| `--persist` | Persist local changes |

### wrangler d1 backup

Manage D1 backups.

```bash
# Create backup
wrangler d1 backup create "NAME"

# List backups
wrangler d1 backup list "NAME"

# Restore
wrangler d1 backup restore "NAME" --backup-id "ID"
```

## R2 Commands

### wrangler r2 bucket create

Create an R2 bucket.

```bash
wrangler r2 bucket create "NAME"
```

### wrangler r2 object

Manage R2 objects.

```bash
# Upload
wrangler r2 object put "KEY" --bucket "NAME" < file

# Download
wrangler r2 object get "KEY" --bucket "NAME" > file

# Delete
wrangler r2 object delete "KEY" --bucket "NAME"

# List
wrangler r2 object list --bucket "NAME"
```

## Pages Commands

### wrangler pages project

Manage Pages projects.

```bash
# Create
wrangler pages project create "NAME"

# List
wrangler pages project list
```

### wrangler pages deploy

Deploy to Pages.

```bash
wrangler pages deploy [directory]
```

| Option | Description |
|--------|-------------|
| `--project` | Project name |
| `--branch` | Git branch |
| `--title` | Deployment title |

## Configuration

### wrangler.toml

```toml
name = "my-worker"
main = "src/index.ts"
compatibility_date = "2024-01-01"

# KV Namespaces
[[kv_namespaces]]
binding = "MY_KV"
id = "xxxxxxxxxxxxxxxxxxxxx"

# D1 Databases
[[d1_databases]]
binding = "DB"
database_name = "my-db"
database_id = "xxxxxxxxxxxxxxxxxxxxx"

# R2 Buckets
[[r2_buckets]]
binding = "ASSETS"
bucket_name = "my-bucket"

# Environment Variables
[vars]
DEBUG = "false"
```

## Environment Variables

### wrangler env

```bash
# Pull
wrangler env pull

# Pull for specific env
wrangler env pull --env staging

# Verify
wrangler env verify
```

## Deployments

### wrangler deployments

```bash
# List
wrangler deployments list

# Activate
wrangler deployments activate --deployment-id "ID"

# Rollback
wrangler deployments rollback --deployment-id "ID"
```

## Miscellaneous

### wrangler pages secret

```bash
wrangler pages secret put "NAME"
```

### wrangler analytics

```bash
# View analytics
wrangler analytics view
```

### wrangler type

```bash
# Generate types
wrangler types
```

## Troubleshooting

### Common Issues

```bash
# Clear cache
wrangler dev --clear

# Verbose output
wrangler dev --verbose

# Check version
wrangler --version

# Update wrangler
npm update -g wrangler
```

## สรุป

- `wrangler init` - Create project
- `wrangler dev` - Local development
- `wrangler deploy` - Deploy to Cloudflare
- `wrangler tail` - View logs
- `wrangler secret` - Manage secrets
- `wrangler kv`, `wrangler d1`, `wrangler r2` - Data storage