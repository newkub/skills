---
name: lib-elysia
description: แนวทางการพัฒนา Elysia ตาม best practices สำหรับ ergonomic web framework สำหรับ Bun ที่มี type-safe, high performance และ plugin system
---

# lib-elysia

## Overview

แนวทางการพัฒนา Elysia ตาม best practices สำหรับ ergonomic web framework สำหรับ Bun ที่มี type-safe, high performance และ plugin system

## File Structure

```text
lib-elysia/
├── SKILL.md
├── guide/
│   ├── key-concept.md
│   ├── how-it-works.md
│   ├── features.md
│   ├── installation.md
│   ├── configuration.md
│   ├── quick-start.md
│   ├── best-practices.md
│   ├── integration.md
│   └── architecture.md
└── references/
    ├── cli.md
    ├── configuration.md
    └── website.md
```

## Guide Files

| File | Description |
|------|-------------|
| [key-concept.md](guide/key-concept.md) | Core concepts: Routing, Plugin, Lifecycle, Validation, Type Safety |
| [how-it-works.md](guide/how-it-works.md) | Request lifecycle, plugin composition, type inference |
| [features.md](guide/features.md) | All features: Routing, Validation, WebSocket, Eden Treaty |
| [installation.md](guide/installation.md) | Installation and setup for Bun and Elysia |
| [configuration.md](guide/configuration.md) | Server options, context extension, plugins |
| [quick-start.md](guide/quick-start.md) | Quick start guide from install to REST API |
| [best-practices.md](guide/best-practices.md) | Code organization, performance, security, error handling |
| [integration.md](guide/integration.md) | Database, auth, frontend, deployment integration |
| [architecture.md](guide/architecture.md) | Framework architecture and project structure |

## References Files

| File | Description |
|------|-------------|
| [cli.md](references/cli.md) | Bun CLI commands for Elysia |
| [configuration.md](references/configuration.md) | Full configuration reference |
| [website.md](references/website.md) | Official documentation links |

## Quick Reference

### Basic Server

```typescript
import { Elysia } from 'elysia'

new Elysia()
  .get('/', () => 'Hello')
  .listen(3000)
```

### With Validation

```typescript
import { Elysia, t } from 'elysia'

new Elysia()
  .post('/user', ({ body }) => body, {
    body: t.Object({
      name: t.String(),
      email: t.String(),
    })
  })
```

### With Plugin

```typescript
import { cors } from '@elysia/cors'

new Elysia()
  .use(cors())
  .get('/', () => 'Hello')
  .listen(3000)
```

## Key Concepts

| Concept | Description |
|---------|-------------|
| **Routing** | Method chaining: `.get()`, `.post()`, `.put()`, `.delete()` |
| **Handler** | Return string, JSON, file, stream, or Response |
| **Plugin** | Reusable Elysia instance via `.use()` |
| **Lifecycle** | 9 hooks: request, parse, transform, validate, before/after handle, error, after response |
| **Validation** | TypeBox schema for body, query, params, headers, response |
| **Type Safety** | End-to-end types with Eden Treaty type-safe client |