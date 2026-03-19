---
description: Environment variables guide ใน Markdown
title: env-vars
tags: [markdown, environment, variables, config]
goals:
  - แสดงตัวอย่างการเขียน env vars documentation
  - สอนวิธีอธิบาย environment configuration
---

## Required Environment Variables

````markdown
# Environment Variables

## Required

| Variable | Description | Example |
|----------|-------------|---------|
| `DATABASE_URL` | Database connection string | `postgresql://user:pass@host:5432/db` |
| `API_KEY` | API authentication key | `sk_live_xxxxxxxxxx` |
| `JWT_SECRET` | Secret for JWT signing | `your-secret-key` |
````

## Optional Variables

````markdown
## Optional

| Variable | Default | Description |
|----------|---------|-------------|
| `PORT` | `3000` | Server port |
| `NODE_ENV` | `development` | Environment mode |
| `LOG_LEVEL` | `info` | Logging level |
| `CACHE_TTL` | `3600` | Cache time-to-live (seconds) |
| `RATE_LIMIT` | `100` | Requests per minute |
````

## .env File Example

````markdown
## .env File

Create a `.env` file:

```env
# Database
DATABASE_URL=postgresql://user:password@localhost:5432/mydb

# API Keys
API_KEY=your_api_key_here
JWT_SECRET=your_jwt_secret

# App Config
PORT=3000
NODE_ENV=production
LOG_LEVEL=debug

# Features
ENABLE_CACHE=true
CACHE_TTL=3600
```

> ⚠️ **Never commit `.env` to version control!** Add it to `.gitignore`.
````

## Loading Environment Variables

````markdown
## Loading

### Node.js

```javascript
require('dotenv').config();

const dbUrl = process.env.DATABASE_URL;
const port = process.env.PORT || 3000;
```

### Docker

```yaml
services:
  app:
    env_file:
      - .env
    environment:
      - NODE_ENV=production
```
````
