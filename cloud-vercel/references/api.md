# Vercel - API Reference

API และ endpoints สำหรับ Vercel

## REST API

### Base URL

```text
https://api.vercel.com/v1
```

### Authentication

```bash
# Using Bearer token
curl -H "Authorization: Bearer <token>" https://api.vercel.com/v1/projects
```

## Projects API

### List Projects

```bash
GET /v6/projects
```

Response:
```json
{
  "projects": [
    {
      "id": "prj_xxxx",
      "name": "my-project",
      "framework": "nextjs",
      "createdAt": 1609459200000,
      "updatedAt": 1609459200000
    }
  ],
  "pagination": {
    "count": 20,
    "next": null
  }
}
```

### Create Project

```bash
POST /v6/projects
```

Body:
```json
{
  "name": "my-project",
  "framework": "nextjs",
  "gitRepository": {
    "type": "github",
    "repo": "user/repo"
  }
}
```

### Get Project

```bash
GET /v6/projects/:projectName
```

### Update Project

```bash
PATCH /v6/projects/:projectName
```

### Delete Project

```bash
DELETE /v6/projects/:projectName
```

## Deployments API

### List Deployments

```bash
GET /v13/deployments
```

### Create Deployment

```bash
POST /v13/deployments
```

Body:
```json
{
  "name": "my-project",
  "gitSource": {
    "type": "github",
    "repo": "user/repo",
    "ref": "main"
  }
}
```

### Get Deployment

```bash
GET /v13/deployments/:id
```

Response:
```json
{
  "id": "dpl_xxxx",
  "name": "my-project",
  "url": "my-project.vercel.app",
  "state": "READY",
  "createdAt": 1609459200000,
  "readyAt": 1609459200000,
  "meta": {
    "githubCommitMessage": "Update"
  }
}
```

### Cancel Deployment

```bash
POST /v13/deployments/:id/cancel
```

### Delete Deployment

```bash
DELETE /v13/deployments/:id
```

## Environment Variables

### List Variables

```bash
GET /v6/projects/:projectName/env
```

### Add Variable

```bash
POST /v6/projects/:projectName/env
```

Body:
```json
{
  "key": "DATABASE_URL",
  "value": "postgres://...",
  "target": ["production", "preview", "development"],
  "type": "encrypted"
}
```

### Update Variable

```bash
PATCH /v6/projects/:projectName/env/:id
```

### Delete Variable

```bash
DELETE /v6/projects/:projectName/env/:id
```

## Secrets

### Add Secret

```bash
POST /v6/secrets
```

Body:
```json
{
  "name": "my-secret",
  "value": "secret-value"
}
```

## Domains

### List Domains

```bash
GET /v6/domains
```

### Add Domain

```bash
POST /v6/domains
```

Body:
```json
{
  "name": "example.com",
  "gitBranch": "main"
}
```

### Verify Domain

```bash
POST /v6/domains/:domain/verify
```

### Delete Domain

```bash
DELETE /v6/domains/:domain
```

## Aliases (URLs)

### List Aliases

```bash
GET /v13/aliases
```

### Create Alias

```bash
POST /v13/aliases
```

Body:
```json
{
  "deploymentId": "dpl_xxxx",
  "domain": "example.com"
}
```

### Delete Alias

```bash
DELETE /v13/aliases/:id
```

## Build Logs

### Get Deployment Logs

```bash
GET /v2/deployments/:id/logs
```

Response:
```json
{
  "logs": [
    {
      "id": "log_xxxx",
      "timestamp": 1609459200000,
      "type": "stdout",
      "message": "Building..."
    }
  ]
}
```

## Teams

### List Teams

```bash
GET /v1/teams
```

### Get Team

```bash
GET /v1/teams/:team
```

### Invite Member

```bash
POST /v1/teams/:team/invites
```

## Webhooks

### List Webhooks

```bash
GET /v6/projects/:projectName/webhooks
```

### Add Webhook

```bash
POST /v6/projects/:projectName/webhooks
```

Body:
```json
{
  "name": "My Webhook",
  "url": "https://example.com/webhook",
  "gitSource": {
    "type": "github"
  },
  "events": ["deployment.created", "deployment.completed"]
}
```

## Screenshot API

### Get Screenshot

```bash
GET /v1/screenshot?url=https://example.com
```

Query Parameters:
- `url` - Target URL (required)
- `viewportWidth` - Width (default: 800)
- `viewportHeight` - Height (default: 600)

## Edge Config

### Get Config

```bash
GET /v1/edge-config/:id
```

### Update Config

```bash
PATCH /v1/edge-config/:id
```

Body:
```json
{
  "items": [
    { "operation": "upsert", "key": "feature-flag", "value": true }
  ]
}
```

## Rate Limits

| Endpoint | Limit |
|----------|-------|
| API (general) | 3000 requests/hour |
| Deployments | 60 requests/minute |
| Projects | 120 requests/minute |

## Error Responses

### Error Format

```json
{
  "error": {
    "code": "not_found",
    "message": "Project not found"
  }
}
```

### Common Error Codes

| Code | Description |
|------|-------------|
| `not_found` | Resource not found |
| `unauthorized` | Authentication failed |
| `forbidden` | Permission denied |
| `conflict` | Resource already exists |
| `validation_error` | Invalid request body |
| `rate_limited` | Rate limit exceeded |

## SDK Usage

### Node.js SDK

```typescript
import { createClient } from '@vercel/sdk';

const client = createClient({ token: 'xxx' });

// List projects
const projects = await client.projects.list();

// Deploy
const deployment = await client.deployments.create({
  name: 'my-project',
  gitSource: {
    type: 'github',
    repo: 'user/repo',
    ref: 'main'
  }
});
```

### Browser SDK

```typescript
import { createClient } from '@vercel/sdk/browser';

const client = createClient();
```

## CLI API Integration

### Via CLI

```bash
# Projects
vercel projects list
vercel projects add

# Deployments
vercel deploy
vercel deploy --prod

# Domains
vercel domains add example.com
vercel domains verify example.com

# Env vars
vercel env add KEY VALUE
vercel env pull
```

## สรุป

- Base URL: `https://api.vercel.com/v1`
- Authentication via Bearer token
- CRUD operations for projects, deployments, env vars
- Rate limits apply per endpoint type
- SDK available for Node.js and browser