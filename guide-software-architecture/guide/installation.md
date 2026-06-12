# Installation

## Purpose

สรุป tools และ prerequisites สำหรับการออกแบบ software architecture

## Prerequisites

### Core Tools

| Tool | Purpose | Required |
|------|---------|----------|
| **IDE/Editor** | Code editing | Yes |
| **Version Control** | Git, GitHub/GitLab | Yes |
| **Diagramming** | Architecture diagrams | Recommended |
| **API Design** | OpenAPI/Swagger | Sometimes |
| **Testing Tools** | Unit/Integration testing | Yes |

### Diagramming Tools

| Tool | Description |
|------|-------------|
| **draw.io** | Free, online diagram tool |
| **Miro** | Collaborative whiteboard |
| **Lucidchart** | Professional diagrams |
| **PlantUML** | Code-based diagrams |
| **C4 Model** | Architecture visualization |

### API Design

| Tool | Description |
|------|-------------|
| **Swagger/OpenAPI** | API specification |
| **Postman** | API testing |
| **Insomnia** | API client |
| **Stoplight** | API design platform |

## Development Environment

### Recommended Stack

```yaml
# Development environment
languages:
  - TypeScript
  - Python
  - Go

frameworks:
  - React/Next.js
  - Express/NestJS
  - FastAPI

databases:
  - PostgreSQL
  - MongoDB
  - Redis

infrastructure:
  - Docker
  - Kubernetes
  - AWS/GCP/Azure

monitoring:
  - Prometheus
  - Grafana
  - Datadog
```

### Container Setup

```dockerfile
# Dockerfile example
FROM node:20-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

## Architecture Documentation

### Tools for ADRs

| Tool | Description |
|------|-------------|
| **ADR Tools** | Markdown-based ADR tracking |
| **GitHub Wiki** | Team documentation |
| **Confluence** | Enterprise wiki |
| **Notion** | Documentation platform |

### Documentation Template

```markdown
# ADR-XXX: Title

## Status
Proposed | Accepted | Deprecated

## Context
What is the issue?

## Decision
What is the change?

## Consequences
- Positive
- Negative
- Neutral
```

## Modeling Tools

### C4 Model Levels

| Level | Description | Audience |
|-------|-------------|----------|
| **Context** | System overview | Everyone |
| **Container** | Applications/deployments | DevOps, Developers |
| **Component** | Code organization | Developers |
| **Code** | Implementation details | Developers |

### UML Diagrams

| Diagram | Purpose |
|---------|----------|
| **Class** | Structure |
| **Sequence** | Behavior |
| **Activity** | Flow |
| **Component** | Organization |
| **Deployment** | Infrastructure |

## Learning Resources

| Resource | Description |
|----------|-------------|
| Fundamentals of Software Architecture | Book by Mark Richards |
| Building Microservices | Book by Sam Newman |
| Clean Architecture | Book by Robert Martin |
| C4 Model | c4model.com |

## Next Steps

| File | Description |
|------|-------------|
| [quick-start.md](quick-start.md) | Quick architecture guide |
| [key-concept.md](key-concept.md) | Architecture concepts |