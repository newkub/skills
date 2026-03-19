# Integration Structure

## โครงสร้างสำหรับ System Integration และ API Connections

### File Structure

```
integration/
├── apis/                       # API integrations
│   ├── rest/
│   │   ├── client.ts
│   │   ├── types.ts
│   │   └── endpoints/
│   │       ├── users.ts
│   │       ├── auth.ts
│   │       └── data.ts
│   ├── graphql/
│   │   ├── client.ts
│   │   ├── schema.ts
│   │   └── queries/
│   │       ├── users.graphql
│   │       └── posts.graphql
│   └── websocket/
│       ├── client.ts
│       ├── events.ts
│       └── handlers/
├── databases/                  # Database integrations
│   ├── sql/
│   │   ├── connection.ts
│   │   ├── migrations/
│   │   └── models/
│   ├── nosql/
│   │   ├── client.ts
│   │   ├── collections.ts
│   │   └── indexes/
│   └── cache/
│       ├── redis.ts
│       └── memory.ts
├── services/                   # External services
│   ├── auth/
│   │   ├── oauth.ts
│   │   ├── jwt.ts
│   │   └── providers/
│   ├── storage/
│   │   ├── s3.ts
│   │   ├── cloudflare.ts
│   │   └── local.ts
│   └── notification/
│       ├── email.ts
│       ├── sms.ts
│       └── push.ts
├── middleware/                 # Integration middleware
│   ├── auth.ts
│   ├── cors.ts
│   ├── rate-limit.ts
│   └── logging.ts
└── config/                     # Configuration
    ├── databases.json
    ├── apis.json
    └── services.json
```

### Integration Types Table

| Type | Protocol | Client | Use Case | Config |
|------|----------|--------|----------|--------|
| **REST API** | HTTP/HTTPS | Axios/Fetch | Standard APIs | endpoints.json |
| **GraphQL** | HTTP | Apollo Client | Complex queries | schema.graphql |
| **WebSocket** | WS/WSS | Native WS | Real-time | events.json |
| **SQL DB** | TCP | Prisma/TypeORM | Relational data | database.json |
| **NoSQL DB** | TCP | MongoDB Driver | Document storage | collections.json |
| **Cache** | TCP/Redis | Redis Client | Fast storage | cache.json |

### API Integration Patterns

#### REST Client Setup
```typescript
// apis/rest/client.ts
import axios from 'axios'

export class RestClient {
  private client: AxiosInstance
  
  constructor(baseURL: string, apiKey: string) {
    this.client = axios.create({
      baseURL,
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json'
      }
    })
  }
  
  async get<T>(endpoint: string): Promise<T> {
    const response = await this.client.get(endpoint)
    return response.data
  }
  
  async post<T>(endpoint: string, data: any): Promise<T> {
    const response = await this.client.post(endpoint, data)
    return response.data
  }
}
```

#### GraphQL Integration
```typescript
// apis/graphql/client.ts
import { ApolloClient, InMemoryCache } from '@apollo/client'

export class GraphQLClient {
  private client: ApolloClient<any>
  
  constructor(uri: string) {
    this.client = new ApolloClient({
      uri,
      cache: new InMemoryCache()
    })
  }
  
  async query<T>(query: string, variables?: any): Promise<T> {
    const result = await this.client.query({
      query: gql(query),
      variables
    })
    return result.data
  }
}
```

### Database Integration

#### SQL Database
```typescript
// databases/sql/connection.ts
import { PrismaClient } from '@prisma/client'

export class DatabaseConnection {
  private prisma: PrismaClient
  
  constructor() {
    this.prisma = new PrismaClient()
  }
  
  async connect(): Promise<void> {
    await this.prisma.$connect()
  }
  
  async disconnect(): Promise<void> {
    await this.prisma.$disconnect()
  }
  
  get client(): PrismaClient {
    return this.prisma
  }
}
```

#### Cache Integration
```typescript
// databases/cache/redis.ts
import Redis from 'ioredis'

export class CacheClient {
  private redis: Redis
  
  constructor(config: Redis.RedisOptions) {
    this.redis = new Redis(config)
  }
  
  async get(key: string): Promise<string | null> {
    return await this.redis.get(key)
  }
  
  async set(key: string, value: string, ttl?: number): Promise<void> {
    if (ttl) {
      await this.redis.setex(key, ttl, value)
    } else {
      await this.redis.set(key, value)
    }
  }
}
```

### Service Integration Table

| Service | Provider | SDK | Authentication | Use Cases |
|---------|----------|-----|----------------|-----------|
| **Auth** | Auth0 | auth0-js | OAuth 2.0 | User authentication |
| **Storage** | AWS S3 | aws-sdk | Access Keys | File storage |
| **Email** | SendGrid | @sendgrid/mail | API Key | Email sending |
| **SMS** | Twilio | twilio | Account SID | SMS sending |
| **Payment** | Stripe | stripe | Secret Key | Payment processing |

### Configuration Management

```json
{
  "apis": {
    "rest": {
      "baseURL": "https://api.example.com",
      "timeout": 5000,
      "retries": 3
    },
    "graphql": {
      "uri": "https://api.example.com/graphql",
      "cache": true
    }
  },
  "databases": {
    "sql": {
      "url": "postgresql://user:pass@localhost:5432/db"
    },
    "cache": {
      "host": "localhost",
      "port": 6379
    }
  },
  "services": {
    "auth": {
      "provider": "auth0",
      "domain": "example.auth0.com"
    }
  }
}
```

### Best Practices

1. **Connection Pooling** - ใช้ connection pools สำหรับ databases
2. **Error Handling** - จัดการ errors ใน integration layer
3. **Retry Logic** - ใช้ retry mechanisms สำหรับ external APIs
4. **Caching** - cache responses จาก external services
5. **Security** - เก็บ credentials อย่างปลอดภัย
6. **Monitoring** - ตรวจสอบ integration health
