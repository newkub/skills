# CLI Reference

## Apollo CLI

```bash
# Install Apollo CLI
npm install -g apollo

# Login to Apollo
apollo login

# GraphQL schema operations
apollo schema:download
apollo schema:publish
apollo schema:check

# Client operations
apollo client:codegen
apollo client:download-schema
```

## GraphQL CLI Tools

### graphql-cli

```bash
npm install -g graphql-cli

# Initialize project
graphql init

# Query execution
graphql get-schema
graphql query
```

### Apollo Server Commands

```bash
# Development
node server.js

# Production
NODE_ENV=production node server.js
```

## Common Commands

| Command | Description |
|---------|-------------|
| `apollo service:push` | Push schema to registry |
| `apollo service:check` | Validate schema changes |
| `apollo client:generate` | Generate types |
| `graphql-codegen` | Generate TypeScript types |


---

