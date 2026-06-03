# Installation

## Requirements

| Requirement | รายละเอียด |
|-------------|------------|
| **Node.js** | v18.0.0 หรือสูงกว่า |
| **npm/pnpm/yarn** | Package manager |
| **Cloudflare Account** | สำหรับ deploy |

## Installation Methods

### Local Installation (Recommended)

```bash
# npm
npm install -D wrangler

# pnpm
pnpm add -D wrangler

# yarn
yarn add -D wrangler
```

### Global Installation

```bash
npm install -g wrangler
```

## Verify Installation

```bash
# Check version
wrangler --version

# Show help
wrangler --help
```

## Authentication

### Login with Browser

```bash
wrangler login
```

This opens a browser for you to authorize Wrangler.

### API Token (CI/CD)

```bash
# Set via environment variable
export CLOUDFLARE_API_TOKEN="your-api-token"

# Or in CI environment
CLOUDFLARE_API_TOKEN=xxx wrangler deploy
```

### Get API Token

1. Go to [Cloudflare Dashboard](https://dash.cloudflare.com)
2. My Profile → API Tokens
3. Create Custom Token with appropriate permissions

## Project Setup

### Create New Project

```bash
# Interactive mode
wrangler init my-worker

# Non-interactive mode
wrangler init my-worker --yes
```

### From Dashboard

```bash
# Download existing Worker
wrangler init --from-dash my-worker
```

## Quick Test

```bash
# Create project
wrangler init test-worker --yes

# Go to directory
cd test-worker

# Start development
wrangler dev

# Deploy
wrangler deploy
```

## CI/CD Installation

### GitHub Actions

```yaml
- name: Install Wrangler
  run: npm install -D wrangler

- name: Deploy Worker
  env:
    CLOUDFLARE_API_TOKEN: ${{ secrets.CLOUDFLARE_API_TOKEN }}
  run: wrangler deploy
```

### Environment Variables

| Variable | Description |
|----------|-------------|
| `CLOUDFLARE_ACCOUNT_ID` | Account ID |
| `CLOUDFLARE_API_TOKEN` | API token (preferred) |
| `CLOUDFLARE_API_KEY` | Global API key |
| `CLOUDFLARE_EMAIL` | Account email |