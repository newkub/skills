# Quick Start

## Purpose

แนวทางลัดสำหรับเลือก architectural approach ที่เหมาะสม

## Quick Selection Guide

### By Problem Type

| Problem | Architecture | Why |
|---------|-------------|-----|
| Simple web app | Monolithic | Fast to build, simple |
| High traffic API | Microservices + CDN | Scale independently |
| Real-time updates | Event-Driven + WebSocket | Async handling |
| Complex business rules | Hexagonal / Clean | Testable domain |
| Data analytics | CQRS + Event Sourcing | Separate read/write |
| Microservice ecosystem | API Gateway + Service Mesh | Centralized routing |

### By Requirements

| Requirement | Solution |
|-------------|----------|
| Scalability | Microservices, Event-Driven |
| High availability | Distributed architecture, redundancy |
| Fast development | Monolithic, Modular |
| Strong consistency | Layered, SQL database |
| Flexible schema | Document DB, CQRS |
| Real-time | WebSocket, Server-Sent Events |

## Decision Tree

```
Is the team small (< 5 people)?
├── Yes → Can you handle microservices complexity?
│         ├── Yes → Modular Monolith
│         └── No → Monolithic
└── No → Is the domain complex?
         ├── Yes → Hexagonal + Event-Driven
         └── No → Microservices

OR

Do you need real-time processing?
├── Yes → Event-Driven + Message Queue
└── No → REST APIs

OR

Do you have high read/write ratio?
├── Read heavy → CQRS
└── Write heavy → Standard patterns
```

## Common Architectures

### 1. Simple Web App

```
┌─────────────────────────────────────┐
│           Load Balancer             │
├─────────────────────────────────────┤
│                                     │
│   ┌─────────────────────────────┐   │
│   │        Web Server           │   │
│   │       (Express/Next)        │   │
│   └──────────────┬──────────────┘   │
│                  │                   │
│   ┌──────────────┼──────────────┐   │
│   │              ▼              │   │
│   │   ┌─────────────────────┐  │   │
│   │   │     Database        │  │   │
│   │   │   (PostgreSQL)      │  │   │
│   │   └─────────────────────┘  │   │
│   └────────────────────────────┘   │
└─────────────────────────────────────┘
```

### 2. Microservices

```
┌────────────────────────────────────────────────────────────────────┐
│                         API Gateway                                 │
├────────────────────────────────────────────────────────────────────┤
│                                                                     │
│   ┌──────────┐   ┌──────────┐   ┌──────────┐   ┌──────────┐       │
│   │  User    │   │  Order   │   │  Payment │   │ Inventory│       │
│   │ Service  │   │ Service  │   │  Service  │   │  Service │       │
│   └────┬─────┘   └────┬─────┘   └────┬─────┘   └────┬─────┘       │
│        │              │              │              │               │
│        ▼              ▼              ▼              ▼               │
│   ┌────────┐     ┌────────┐     ┌────────┐     ┌────────┐        │
│   │User DB │     │Order DB│     │Pay DB  │     │Inv DB  │        │
│   └────────┘     └────────┘     └────────┘     └────────┘        │
│                                                                     │
└────────────────────────────────────────────────────────────────────┘
```

### 3. Event-Driven

```
┌────────────────────────────────────────────────────────────────────┐
│                         Event Bus                                   │
├────────────────────────────────────────────────────────────────────┤
│                                                                     │
│   Producer ──────> Topic ──────> Consumer 1                       │
│                                   Topic ──────> Consumer 2           │
│                                   Topic ──────> Consumer 3           │
│                                                                     │
└────────────────────────────────────────────────────────────────────┘
```

## Minimal Viable Architecture

### MVP Pattern

| Layer | Technology | Reason |
|-------|------------|--------|
| Frontend | React/Next.js | Fast development |
| API | Express/NestJS | TypeScript, familiar |
| Database | PostgreSQL | Reliable, well-understood |
| Hosting | Vercel/AWS | Easy deployment |

### Quick Setup

```typescript
// Simple monolithic structure
src/
├── controllers/    // API endpoints
├── services/       // Business logic
├── models/         // Data models
├── middleware/     // Auth, logging
└── routes/         // API routes
```

## Architecture Comparison

| Style | Complexity | Speed | Scale | Team Size |
|-------|------------|-------|-------|-----------|
| Monolithic | Low | Fast | Limited | 1-5 |
| Modular Monolith | Medium | Medium | Medium | 5-15 |
| Microservices | High | Slow | High | 15+ |
| Event-Driven | High | Medium | Very High | 10+ |
| Serverless | Medium | Fast | High | Any |

## Anti-Patterns to Avoid

| Anti-Pattern | Problem | Solution |
|--------------|---------|----------|
| **Golden Path** | Over-constrained | Use what fits |
| **Premature Optimization** | Over-engineering | Start simple |
| **Big Bang Rewrite** | Too risky | Incremental |
| **Analysis Paralysis** | No decision | Start with MVP |

## Next Steps

| Resource | Description |
|----------|-------------|
| [key-concept.md](key-concept.md) | Architecture concepts |
| [features.md](features.md) | All patterns overview |
| [best-practices.md](best-practices.md) | Best practices |