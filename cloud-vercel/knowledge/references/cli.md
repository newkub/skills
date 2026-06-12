# Vercel - CLI Reference

Commands และ options สำหรับ Vercel CLI

## Installation

```bash
npm install -g vercel
```

## Core Commands

### vercel

Deploy to preview environment.

```bash
vercel [path]
```

| Option | Description |
|--------|-------------|
| `--cwd` | Set working directory |
| `--token` | Set authentication token |
| `--scope` | Set team/workspace scope |

### vercel --prod

Deploy to production.

```bash
vercel --prod
```

| Option | Description |
|--------|-------------|
| `--yes` | Skip confirmation |
| `--token` | Set authentication token |

### vercel dev

Start local development server.

```bash
vercel dev
```

| Option | Description |
|--------|-------------|
| `--port` | Set port (default: 3000) |
| `--turbo` | Enable Turbopack |
| `--debug` | Enable debug mode |

## Authentication

### vercel login

Login to Vercel.

```bash
vercel login
```

### vercel logout

Logout from Vercel.

```bash
vercel logout
```

### vercel switch

Switch between accounts/teams.

```bash
vercel switch
```

### vercel whoami

Check current user.

```bash
vercel whoami
```

## Project Management

### vercel init

Initialize a new project.

```bash
vercel init [project-name]
```

### vercel link

Link local directory to Vercel project.

```bash
vercel link
```

| Option | Description |
|--------|-------------|
| `--yes` | Skip confirmation |

### vercel list

List all projects.

```bash
vercel list
```

| Option | Description |
|--------|-------------|
| `--limit` | Number of projects (default: 20) |

### vercel inspect

Inspect a deployment.

```bash
vercel inspect [deployment-url]
```

### vercel rm

Remove a deployment.

```bash
vercel rm [deployment-url]
```

| Option | Description |
|--------|-------------|
| `--yes` | Skip confirmation |

## Deployment

### vercel deploy

Deploy to preview.

```bash
vercel deploy
```

| Option | Description |
|--------|-------------|
| `--prod` | Deploy to production |
| `--prebuilt` | Skip build step |
| `--force` | Force redeployment |
| `--token` | Authentication token |

### Build Options

```bash
vercel --build-env KEY=value
vercel --env KEY=value
```

### Preview URL

```bash
vercel --token <token>
```

## Environment Variables

### vercel env add

Add environment variable.

```bash
vercel env add KEY [value]
```

| Option | Description |
|--------|-------------|
| `--production` | Production only |
| `--preview` | Preview only |
| `--development` | Development only |
| `--git` | Git branch specific |

### vercel env pull

Pull environment variables locally.

```bash
vercel env pull
```

| Option | Description |
|--------|-------------|
| `--environment` | Environment (production/preview/development) |
| `--git` | Current git branch |

### vercel env rm

Remove environment variable.

```bash
vercel env rm KEY
```

### vercel env ls

List environment variables.

```bash
vercel env ls
```

## Domains

### vercel domains add

Add a domain.

```bash
vercel domains add [domain]
```

| Option | Description |
|--------|-------------|
| `--redirect` | Redirect to another domain |

### vercel domains ls

List domains.

```bash
vercel domains ls
```

### vercel domains inspect

Inspect domain configuration.

```bash
vercel domains inspect [domain]
```

### vercel domains move

Move domain between projects.

```bash
vercel domains move [domain] [project]
```

### vercel domains rm

Remove domain.

```bash
vercel domains rm [domain]
```

### vercel domains verify

Verify domain ownership.

```bash
vercel domains verify [domain]
```

## Logs & Debugging

### vercel logs

View deployment logs.

```bash
vercel logs [deployment-url]
```

| Option | Description |
|--------|-------------|
| `--follow` | Follow log stream |
| `--since` | Start time |
| `--until` | End time |
| `--limit` | Number of logs |

### vercel inspect

Inspect deployment details.

```bash
vercel inspect [deployment-url]
```

## Teams

### vercel teams

Manage teams.

```bash
vercel teams [command]
```

| Command | Description |
|---------|-------------|
| `ls` | List teams |
| `create` | Create team |
| `invite` | Invite member |

### vercel teams add-member

Add team member.

```bash
vercel teams add-member [email] --role [role]
```

| Role | Description |
|------|-------------|
| `OWNER` | Full control |
| `MEMBER` | Can deploy |
| `DEVELOPER` | Can deploy |
| `VIEWER` | Read-only |

## Secrets

### vercel secrets add

Add a secret.

```bash
vercel secrets add [name] [value]
```

### vercel secrets ls

List secrets.

```bash
vercel secrets ls
```

### vercel secrets rm

Remove secret.

```bash
vercel secrets rm [name]
```

### vercel secrets rename

Rename secret.

```bash
vercel secrets rename [old] [new]
```

## Certificates

### vercel certs add

Add SSL certificate.

```bash
vercel certs add [certificate] [key]
```

### vercel certs ls

List certificates.

```bash
vercel certs ls
```

### vercel certs rm

Remove certificate.

```bash
vercel certs rm [id]
```

## Aliases

### vercel alias

Manage aliases.

```bash
vercel alias [deployment-url] [alias]
```

### vercel alias ls

List aliases.

```bash
vercel alias ls
```

### vercel alias rm

Remove alias.

```bash
vercel alias rm [alias]
```

## Configuration

### vercel.json

```json
{
  "version": 2,
  "builds": [
    { "src": "package.json", "use": "@vercel/node" }
  ],
  "routes": [
    { "src": "/(.*)", "dest": "/$1" }
  ],
  "env": {
    "NODE_ENV": "production"
  },
  "regions": ["iad1", "sfo1"]
}
```

### vercel.json Environment

```json
{
  "build": {
    "env": {
      "BUILD_TOKEN": "@build-token"
    }
  }
}
```

## Configuration Commands

### vercel project add

Add project setting.

```bash
vercel project add [setting] [value]
```

### vercel project rm

Remove project setting.

```bash
vercel project rm [setting]
```

## Global Options

| Option | Description |
|--------|-------------|
| `--token` | Set API token |
| `--scope` | Set team scope |
| `--debug` | Enable debug output |
| `--help` | Show help |
| `--version` | Show version |
| `--cwd` | Set working directory |

## Exit Codes

| Code | Description |
|------|-------------|
| 0 | Success |
| 1 | General error |
| 2 | Configuration error |
| 3 | Authentication error |

## Tips

### Speed Up Deployment

```bash
# Use prebuilt
vercel deploy --prebuilt

# Skip verification
vercel deploy --no-verify
```

### CI/CD

```bash
# Set token via environment
export VERCEL_TOKEN=xxx
vercel --prod
```

## สรุป

- `vercel` - Deploy to preview
- `vercel --prod` - Deploy to production
- `vercel dev` - Local development
- `vercel env` - Environment variables
- `vercel domains` - Domain management
- `vercel logs` - View logs
- `vercel teams` - Team management