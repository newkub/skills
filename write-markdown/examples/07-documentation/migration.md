---
description: Migration guide ใน Markdown
title: migration
tags: [markdown, migration, upgrade, guide]
goals:
  - แสดงตัวอย่างการเขียน migration guide
  - สอนวิธีอธิบาย breaking changes และ migration steps
---

## Version Migration

````markdown
# Migration Guide

## Migrating from v1.x to v2.x

### Breaking Changes

- **API Endpoints**: `/api/v1/*` → `/api/v2/*`
- **Authentication**: Token-based → JWT-based
- **Response Format**: Snake case → Camel case

### Migration Steps

1. Update dependencies
2. Update API calls
3. Update authentication logic
4. Test thoroughly
````

## Step by Step Migration

````markdown
## Step 1: Backup

Before migrating:

```bash
# Backup database
pg_dump mydb > backup.sql

# Backup config
cp config.yaml config.yaml.backup
```

## Step 2: Update Dependencies

```bash
npm install package@latest
```

## Step 3: Update Code

```javascript
// Before (v1)
const result = await api.get('/v1/users');

// After (v2)
const result = await api.get('/v2/users');
const users = result.data.users; // Note: response structure changed
```

## Step 4: Run Migration Script

```bash
npm run migrate
```
````

## Deprecation Warnings

````markdown
## Deprecation Notices

### Deprecated in v2.0

| Feature | Replacement | Removal |
|---------|-------------|---------|
| `oldMethod()` | `newMethod()` | v3.0 |
| `config.json` | `config.yaml` | v2.5 |
| `legacy-api` | `api/v2` | v2.3 |

### Migration Timeline

- **v2.0.0**: Deprecation warnings added
- **v2.5.0**: Legacy features marked deprecated
- **v3.0.0**: Legacy features removed
````
