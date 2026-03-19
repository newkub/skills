# Microservice Structure

## โครงสร้างสำหรับ Microservices Architecture

### File Structure

```
microservices/
├── services/                   # Individual services
│   ├── user-service/          # User management service
│   │   ├── src/
│   │   │   ├── controllers/
│   │   │   ├── services/
│   │   │   ├── models/
│   │   │   ├── middleware/
│   │   │   ├── routes/
│   │   │   ├── utils/
│   │   │   ├── config/
│   │   │   ├── types/
│   │   │   └── app.ts
│   │   ├── tests/
│   │   ├── Dockerfile
│   │   ├── package.json
│   │   └── README.md
│   ├── auth-service/          # Authentication service
│   │   ├── src/
│   │   ├── tests/
│   │   ├── Dockerfile
│   │   └── package.json
│   ├── product-service/      # Product management service
│   │   ├── src/
│   │   ├── tests/
│   │   ├── Dockerfile
│   │   └── package.json
│   ├── order-service/         # Order processing service
│   │   ├── src/
│   │   ├── tests/
│   │   ├── Dockerfile
│   │   └── package.json
│   ├── notification-service/ # Notification service
│   │   ├── src/
│   │   ├── tests/
│   │   ├── Dockerfile
│   │   └── package.json
│   └── payment-service/      # Payment processing service
│       ├── src/
│       ├── tests/
│       ├── Dockerfile
│       └── package.json
├── shared/                     # Shared code
│   ├── libs/                  # Shared libraries
│   │   ├── database/
│   │   │   ├── connection.ts
│   │   │   ├── migrations/
│   │   │   └── seeds/
│   │   ├── messaging/
│   │   │   ├── event-bus.ts
│   │   │   ├── rabbitmq.ts
│   │   │   └── kafka.ts
│   │   ├── logging/
│   │   │   ├── logger.ts
│   │   │   └── middleware.ts
│   │   ├── monitoring/
│   │   │   ├── metrics.ts
│   │   │   ├── health-check.ts
│   │   │   └── tracing.ts
│   │   └── security/
│   │       ├── jwt.ts
│   │       ├── encryption.ts
│   │       └── rate-limit.ts
│   ├── types/                 # Shared types
│   │   ├── user.ts
│   │   ├── auth.ts
│   │   ├── product.ts
│   │   ├── order.ts
│   │   └── common.ts
│   ├── events/                # Event schemas
│   │   ├── user-events.ts
│   │   ├── order-events.ts
│   │   └── payment-events.ts
│   └── contracts/             # API contracts
│       ├── user-api.openapi.ts
│       ├── auth-api.openapi.ts
│       └── product-api.openapi.ts
├── infrastructure/            # Infrastructure code
│   ├── docker/                # Docker configurations
│   │   ├── docker-compose.yml
│   │   ├── docker-compose.dev.yml
│   │   ├── docker-compose.prod.yml
│   │   └── docker-compose.test.yml
│   ├── kubernetes/            # K8s manifests
│   │   ├── namespaces/
│   │   ├── deployments/
│   │   ├── services/
│   │   ├── ingress/
│   │   └── configmaps/
│   ├── terraform/             # Infrastructure as code
│   │   ├── modules/
│   │   ├── environments/
│   │   └── main.tf
│   └── monitoring/            # Monitoring setup
│       ├── prometheus/
│       ├── grafana/
│       ├── jaeger/
│       └── elk-stack/
├── gateway/                    # API Gateway
│   ├── src/
│   │   ├── routes/
│   │   ├── middleware/
│   │   ├── plugins/
│   │   └── gateway.ts
│   ├── tests/
│   ├── Dockerfile
│   └── package.json
├── frontend/                   # Frontend applications
│   ├── web-app/
│   │   ├── src/
│   │   ├── public/
│   │   └── package.json
│   ├── admin-panel/
│   │   ├── src/
│   │   ├── public/
│   │   └── package.json
│   └── mobile-app/
│       ├── src/
│       ├── android/
│       ├── ios/
│       └── package.json
├── tools/                      # Development tools
│   ├── cli/                   # Custom CLI
│   ├── generators/            # Code generators
│   ├── scripts/               # Utility scripts
│   └── testing/               # Testing tools
├── docs/                       # Documentation
│   ├── architecture/
│   ├── services/
│   ├── deployment/
│   └── api/
└── README.md
```

### Service Categories Table

| Category | Services | Responsibility | Database |
|----------|----------|------------------|----------|
| **Core Services** | user-service, auth-service | User management & auth | PostgreSQL |
| **Business Services** | product-service, order-service | Business logic | PostgreSQL |
| **Support Services** | notification-service, payment-service | Supporting functions | MongoDB/Redis |
| **Infrastructure** | gateway, monitoring | System infrastructure | Various |

### Service Template

#### Service Structure
```
service-template/
├── src/
│   ├── controllers/        # HTTP controllers
│   ├── services/           # Business logic
│   ├── repositories/       # Data access
│   ├── models/             # Domain models
│   ├── events/             # Event handlers
│   ├── middleware/         # Express middleware
│   ├── routes/             # Route definitions
│   ├── config/             # Configuration
│   ├── utils/              # Utilities
│   ├── types/              # TypeScript types
│   └── app.ts              # Application entry
├── tests/
│   ├── unit/
│   ├── integration/
│   └── e2e/
├── Dockerfile
├── package.json
└── README.md
```

#### Service Example
```typescript
// services/user-service/src/app.ts
import express from 'express'
import { UserController } from './controllers'
import { UserService } from './services'
import { UserRepository } from './repositories'
import { middleware } from './middleware'
import { config } from './config'

const app = express()

// Middleware
app.use(express.json())
app.use(middleware.cors())
app.use(middleware.logging())
app.use(middleware.rateLimit())

// Dependencies
const userRepo = new UserRepository()
const userService = new UserService(userRepo)
const userController = new UserController(userService)

// Routes
app.use('/api/users', userController.routes)

// Health check
app.get('/health', (req, res) => {
  res.json({ status: 'healthy', service: 'user-service' })
})

export { app }
```

### Shared Libraries

#### Database Library
```typescript
// shared/libs/database/connection.ts
import { Pool } from 'pg'

export class DatabaseConnection {
  private static instance: Pool
  
  static getInstance(): Pool {
    if (!DatabaseConnection.instance) {
      DatabaseConnection.instance = new Pool({
        host: process.env.DB_HOST,
        port: parseInt(process.env.DB_PORT || '5432'),
        database: process.env.DB_NAME,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
      })
    }
    return DatabaseConnection.instance
  }
}
```

#### Event Bus Library
```typescript
// shared/libs/messaging/event-bus.ts
export interface Event {
  type: string
  data: any
  timestamp: Date
  correlationId?: string
}

export class EventBus {
  private handlers: Map<string, Function[]> = new Map()
  
  subscribe(eventType: string, handler: Function): void {
    if (!this.handlers.has(eventType)) {
      this.handlers.set(eventType, [])
    }
    this.handlers.get(eventType)!.push(handler)
  }
  
  publish(event: Event): void {
    const handlers = this.handlers.get(event.type) || []
    handlers.forEach(handler => handler(event))
  }
}
```

### API Gateway Configuration

#### Gateway Routes
```typescript
// gateway/src/routes/index.ts
import { Router } from 'express'
import { proxyMiddleware } from '../middleware/proxy'
import { authMiddleware } from '../middleware/auth'

const router = Router()

// User service routes
router.use('/api/users', authMiddleware, proxyMiddleware('user-service'))

// Auth service routes
router.use('/api/auth', proxyMiddleware('auth-service'))

// Product service routes
router.use('/api/products', authMiddleware, proxyMiddleware('product-service'))

export { router }
```

#### Proxy Middleware
```typescript
// gateway/src/middleware/proxy.ts
import { createProxyMiddleware } from 'http-proxy-middleware'

export const proxyMiddleware = (serviceName: string) => {
  return createProxyMiddleware({
    target: `http://${serviceName}:3000`,
    changeOrigin: true,
    pathRewrite: {
      [`^/api/${serviceName.replace('-service', '')}`]: '/api',
    },
  })
}
```

### Docker Configuration

#### Service Dockerfile
```dockerfile
# services/user-service/Dockerfile
FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm ci --only=production

COPY . .
RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]
```

#### Docker Compose
```yaml
# infrastructure/docker/docker-compose.yml
version: '3.8'

services:
  user-service:
    build: ../services/user-service
    ports:
      - "3001:3000"
    environment:
      - DB_HOST=postgres
      - DB_USER=postgres
      - DB_PASSWORD=password
    depends_on:
      - postgres
      - redis

  auth-service:
    build: ../services/auth-service
    ports:
      - "3002:3000"
    environment:
      - JWT_SECRET=secret
    depends_on:
      - redis

  postgres:
    image: postgres:15
    environment:
      - POSTGRES_DB=microservices
      - POSTGRES_USER=postgres
      - POSTGRES_PASSWORD=password
    volumes:
      - postgres_data:/var/lib/postgresql/data

  redis:
    image: redis:7-alpine
    ports:
      - "6379:6379"

  gateway:
    build: ../gateway
    ports:
      - "3000:3000"
    depends_on:
      - user-service
      - auth-service

volumes:
  postgres_data:
```

### Kubernetes Deployment

#### Service Deployment
```yaml
# infrastructure/kubernetes/deployments/user-service.yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: user-service
spec:
  replicas: 3
  selector:
    matchLabels:
      app: user-service
  template:
    metadata:
      labels:
        app: user-service
    spec:
      containers:
      - name: user-service
        image: user-service:latest
        ports:
        - containerPort: 3000
        env:
        - name: DB_HOST
          value: postgres
        - name: DB_USER
          value: postgres
        - name: DB_PASSWORD
          valueFrom:
            secretKeyRef:
              name: db-secret
              key: password
---
apiVersion: v1
kind: Service
metadata:
  name: user-service
spec:
  selector:
    app: user-service
  ports:
  - port: 3000
    targetPort: 3000
```

### Best Practices

1. **Service Boundaries** - แต่ละ service มีความรับผิดชอบที่ชัดเจน
2. **Data Ownership** - แต่ละ service มี database ของตัวเอง
3. **Communication** - ใช้ asynchronous communication ผ่าน events
4. **Configuration** - ใช้ environment variables สำหรับ configuration
5. **Monitoring** - มี health checks และ metrics สำหรับทุก service
6. **Testing** - มี unit, integration, และ e2e tests
7. **Documentation** - มี API docs และ service documentation
