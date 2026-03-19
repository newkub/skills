---
description: Monolithic Architecture - การออกแบบระบบแบบเดี่ยว

---

Monolithic Architecture คือการสร้าง application ทั้งหมดเป็นหนึ่งเดียว ทำงานใน process เดียว และ deploy เป็น unit เดียว

`	ypescript`	ypescript`text
┌─────────────────────────────────┐
│         Monolithic App          │
├─────────────────────────────────┤
│ ┌─────────┐ ┌─────────┐ ┌───────┐ │
│ │   UI    │ │Business │ │ Data  │ │
│ │ Layer   │ │ Logic   │ │Access │ │
│ └─────────┘ └─────────┘ └───────┘ │
├─────────────────────────────────┤
│         Database                │
└─────────────────────────────────┘
`	ypescript`	ypescript`	ypescript

แบ่งระบบออกเป็น modules ที่มี interfaces ชัดเจน

`	ypescript`	ypescript`typescript
// User Module
export class UserModule {
  constructor(private userRepo: UserRepository) {}
  
  async createUser(userData: CreateUserDTO) {
    return await this.userRepo.save(userData);
  }
  
  async getUser(id: string) {
    return await this.userRepo.findById(id);
  }
}

// Order Module
export class OrderModule {
  constructor(
    private orderRepo: OrderRepository,
    private userModule: UserModule
  ) {}
  
  async createOrder(orderData: CreateOrderDTO, userId: string) {
    const user = await this.userModule.getUser(userId);
    return await this.orderRepo.save({ ...orderData, user });
  }
}

// Application Entry Point
class Application {
  private userModule: UserModule;
  private orderModule: OrderModule;
  
  constructor() {
    this.userModule = new UserModule(new UserRepository());
    this.orderModule = new OrderModule(new OrderRepository(), this.userModule);
  }
}
`	ypescript  ypescript`	ypescript  ypescript`	ypescript  ypescript

แบ่งตาม functional layers แบบดั้งเดิม

`	ypescript  ypescript`	ypescript  ypescript`typescript
// Presentation Layer
@Controller('/api/users')
export class UserController {
  constructor(private userService: UserService) {}
  
  @Post()
  async createUser(@Body() userData: CreateUserDTO) {
    return await this.userService.createUser(userData);
  }
}

// Business Logic Layer
export class UserService {
  constructor(private userRepository: UserRepository) {}
  
  async createUser(userData: CreateUserDTO) {
    const user = new User(userData);
    await this.validateUser(user);
    return await this.userRepository.save(user);
  }
  
  private async validateUser(user: User) {
    // Business validation logic
  }
}

// Data Access Layer
export class UserRepository {
  async save(user: User) {
    return await Database.user.create({ data: user.toJSON() });
  }
  
  async findById(id: string) {
    return await Database.user.findUnique({ where: { id } });
  }
}
`	ypescript  ypescript`	ypescript  ypescript`	ypescript  ypescript

- **Easy to Understand** - โครงสร้างตรงไปตรงมา

- **Simple Deployment** - deploy เพียง artifact เดียว

- **Straightforward Debugging** - ง่ายต่อการ trace และ debug

- **Low Latency** - การเรียกใช้ภายใน process เดียวกัน

- **No Network Overhead** - ไม่มี network communication

- **Efficient Resource Usage** - ใช้ resources อย่างมีประสิทธิภาพ

- **Rapid Development** - ไม่ต้องจัดการ distributed systems

- **Simplified Testing** - ง่ายต่อการ integration testing

- **Consistent Tooling** - ใช้ tools เดียวกันทั่วทั้ง project

- **Single Deployment Unit** - จัดการเพียง service เดียว

- **Simplified Monitoring** - monitor จากจุดเดียว

- **Easier Backup/Recovery** - database เดียว

- **Limited Vertical Scaling** - จำกัดด้วย hardware เดี่ยว

- **No Horizontal Scaling** - ไม่สามารถ scale ส่วนที่ต้องการเท่านั้น

- **Resource Contention** - ทุก features แข่งขัน resources เดียวกัน

- **Single Technology Stack** - ติดอยู่กับ technology เดิม

- **Difficult Upgrades** - อัพเกรดทั้งระบบพร้อมกัน

- **Limited Innovation** - ยากต่อการทดลอง technologies ใหม่

- **Code Coupling** - ส่วนต่างๆ ผูกพันกันแน่น

- **Slow Builds** - build time เพิ่มขึ้นตามขนาด

- **Deployment Risk** - เปลี่ยนแปลงเล็กๆ กระทบทั้งระบบ

- **Single Point of Failure** - ความล้มเหลวของส่วนหนึ่งกระทบทั้งระบบ

- **Difficult Fault Isolation** - ยากต่อการแยกปัญหา

- **Rollback Complexity** - rollback ทั้งระบบ

`	ypescript  ypescript`	ypescript  ypescript`typescript
// Use dependency injection for loose coupling
interface UserRepository {
  save(user: User): Promise<User>;
  findById(id: string): Promise<User>;
}

class UserService {
  constructor(private userRepo: UserRepository) {}
  
  async createUser(userData: CreateUserDTO) {
    return await this.userRepo.save(new User(userData));
  }
}

// Clear module boundaries
export class UserModule {
  private userService: UserService;
  
  constructor(userRepo: UserRepository) {
    this.userService = new UserService(userRepo);
  }
  
  getServices() {
    return {
      userService: this.userService
    };
  }
}
`	ypescript  ypescript`	ypescript  ypescript`	ypescript  ypescript

`	ypescript  ypescript`	ypescript  ypescript`typescript
// Internal event bus for loose coupling
interface EventBus {
  emit(event: string, data: any): void;
  on(event: string, handler: Function): void;
}

class UserCreatedEvent {
  constructor(public user: User) {}
}

class OrderService {
  constructor(private eventBus: EventBus) {
    this.eventBus.on('user.created', this.handleUserCreated);
  }
  
  private handleUserCreated = (event: UserCreatedEvent) => {
    // Handle user creation side effects
  };
}
`	ypescript  ypescript`	ypescript  ypescript`	ypescript  ypescript

`	ypescript  ypescript`	ypescript  ypescript`typescript
// Environment-specific configuration
interface AppConfig {
  database: DatabaseConfig;
  redis: RedisConfig;
  features: FeatureFlags;
}

class ConfigManager {
  private config: AppConfig;
  
  constructor(environment: string) {
    this.config = this.loadConfig(environment);
  }
  
  private loadConfig(environment: string): AppConfig {
    return {
      database: this.loadDatabaseConfig(environment),
      redis: this.loadRedisConfig(environment),
      features: this.loadFeatureFlags(environment)
    };
  }
}
`	ypescript  ypescript`	ypescript  ypescript`	ypescript  ypescript

`	ypescript  ypescript`	ypescript  ypescript`typescript
// Unit tests for individual components
describe('UserService', () => {
  let userService: UserService;
  let mockUserRepo: jest.Mocked<UserRepository>;
  
  beforeEach(() => {
    mockUserRepo = {
      save: jest.fn(),
      findById: jest.fn()
    };
    userService = new UserService(mockUserRepo);
  });
  
  it('should create user successfully', async () => {
    const userData = { name: 'John', email: 'john@example.com' };
    const expectedUser = new User(userData);
    
    mockUserRepo.save.mockResolvedValue(expectedUser);
    
    const result = await userService.createUser(userData);
    
    expect(result).toBe(expectedUser);
    expect(mockUserRepo.save).toHaveBeenCalledWith(expect.any(User));
  });
});

// Integration tests
describe('User Integration', () => {
  let app: Application;
  
  beforeAll(async () => {
    app = new Application();
    await app.start();
  });
  
  afterAll(async () => {
    await app.stop();
  });
  
  it('should create user through API', async () => {
    const response = await request(app)
      .post('/api/users')
      .send({ name: 'John', email: 'john@example.com' })
      .expect(201);
    
    expect(response.body).toHaveProperty('id');
  });
});
`	ypescript  ypescript`	ypescript  ypescript`	ypescript  ypescript

`	ypescript  ypescript`	ypescript  ypescript`typescript
// Optimize database connections
class DatabaseManager {
  private pool: ConnectionPool;
  
  constructor(config: DatabaseConfig) {
    this.pool = new ConnectionPool({
      max: config.maxConnections,
      min: config.minConnections,
      idleTimeoutMillis: config.idleTimeout
    });
  }
  
  async getConnection() {
    return await this.pool.acquire();
  }
  
  async releaseConnection(connection: Connection) {
    await this.pool.release(connection);
  }
}

// Caching strategies
class CacheManager {
  private redis: Redis;
  
  constructor(redisConfig: RedisConfig) {
    this.redis = new Redis(redisConfig);
  }
  
  async get<T>(key: string): Promise<T | null> {
    const value = await this.redis.get(key);
    return value ? JSON.parse(value) : null;
  }
  
  async set(key: string, value: any, ttl = 3600) {
    await this.redis.setex(key, ttl, JSON.stringify(value));
  }
}
`	ypescript  ypescript`	ypescript  ypescript`	ypescript  ypescript

`	ypescript  ypescript`	ypescript  ypescript`typescript
// Session management for load balancing
class SessionManager {
  private redis: Redis;
  
  constructor(redis: Redis) {
    this.redis = redis;
  }
  
  async createSession(userId: string): Promise<string> {
    const sessionId = generateSessionId();
    await this.redis.setex(`session:${sessionId}`	ypescript  ypescript, 86400, userId);
    return sessionId;
  }
  
  async validateSession(sessionId: string): Promise<string | null> {
    return await this.redis.get(`session:${sessionId}`	ypescript  ypescript);
  }
}
`	ypescript  ypescript`	ypescript  ypescript`	ypescript  ypescript

`	ypescript  ypescript`	ypescript  ypescript`typescript
// Read replicas for scaling reads
class DatabaseRouter {
  private master: Database;
  private replicas: Database[];
  
  constructor(master: Database, replicas: Database[]) {
    this.master = master;
    this.replicas = replicas;
  }
  
  getReadConnection(): Database {
    const index = Math.floor(Math.random() * this.replicas.length);
    return this.replicas[index];
  }
  
  getWriteConnection(): Database {
    return this.master;
  }
}
`	ypescript  ypescript`	ypescript  ypescript`	ypescript  ypescript

`	ypescript  ypescript`	ypescript  ypescript`typescript
// Gradual migration using API gateway
class APIGateway {
  private routes: Map<string, Handler> = new Map();
  
  constructor() {
    this.setupRoutes();
  }
  
  private setupRoutes() {
    // Route to microservice
    this.routes.set('/api/users/new', this.routeToMicroservice);
    
    // Route to monolith
    this.routes.set('/api/users/legacy', this.routeToMonolith);
  }
  
  private routeToMicroservice = async (req: Request) => {
    // Forward to new microservice
    return await fetch('http://user-service/api/users', {
      method: req.method,
      headers: req.headers,
      body: req.body
    });
  };
  
  private routeToMonolith = async (req: Request) => {
    // Forward to legacy monolith
    return await fetch('http://monolith/api/users', {
      method: req.method,
      headers: req.headers,
      body: req.body
    });
  };
}
`	ypescript  ypescript`	ypescript  ypescript`	ypescript  ypescript

`	ypescript  ypescript`	ypescript  ypescript`typescript
// Shared database during transition
class DatabaseManager {
  private monolithDB: Database;
  private microserviceDB: Database;
  
  async getUser(id: string): Promise<User> {
    // Try microservice first
    let user = await this.microserviceDB.user.findUnique({ where: { id } });
    
    // Fallback to monolith
    if (!user) {
      user = await this.monolithDB.user.findUnique({ where: { id } });
      
      // Migrate data
      if (user) {
        await this.microserviceDB.user.create({ data: user });
      }
    }
    
    return user;
  }
}
`	ypescript  ypescript`	ypescript  ypescript`	ypescript  ypescript

`	ypescript  ypescript`	ypescript  ypescript`	ypescript  ypescript
src/
├── modules/
│   ├── user/
│   │   ├── controllers/
│   │   ├── services/
│   │   ├── repositories/
│   │   └── models/
│   ├── order/
│   │   ├── controllers/
│   │   ├── services/
│   │   ├── repositories/
│   │   └── models/
│   └── product/
│       ├── controllers/
│       ├── services/
│       ├── repositories/
│       └── models/
├── shared/
│   ├── database/
│   ├── cache/
│   ├── events/
│   └── utils/
├── config/
├── tests/
└── main.ts
`	ypescript  ypescript`	ypescript  ypescript`	ypescript  ypescript

- **Small to Medium Teams** - ทีมขนาดเล็กถึงกลาง

- **Simple Business Logic** - ธุรกิจไม่ซับซ้อน

- **Early Stage Startups** - ต้องการความเร็วในการพัฒนา

- **Limited Resources** - ทรัพยากรจำกัด

- **Single Domain** - ธุรกิจใน domain เดียว

- **Large Teams** - ทีมขนาดใหญ่

- **Complex Business** - ธุรกิจซับซ้อนหลาย domains

- **High Scalability Requirements** - ต้องการ scalability สูง

- **Multiple Technology Stacks** - ต้องการใช้หลาย technologies

- **Independent Deployments** - ต้องการ deploy ส่วนต่างๆ แยกกัน

`	ypescript  ypescript`	ypescript  ypescript`typescript
class MetricsCollector {
  private metrics: Map<string, number> = new Map();
  
  incrementCounter(name: string) {
    const current = this.metrics.get(name) || 0;
    this.metrics.set(name, current + 1);
  }
  
  recordTimer(name: string, duration: number) {
    this.metrics.set(`	ypescript  ypescript${name}_duration`	ypescript  ypescript, duration);
  }
  
  getMetrics() {
    return Object.fromEntries(this.metrics);
  }
}

// Usage in services
class UserService {
  constructor(private metrics: MetricsCollector) {}
  
  async createUser(userData: CreateUserDTO) {
    const start = Date.now();
    
    try {
      const user = await this.userRepository.save(userData);
      this.metrics.incrementCounter('user_created');
      return user;
    } finally {
      this.metrics.recordTimer('create_user_duration', Date.now() - start);
    }
  }
}
`	ypescript  ypescript`	ypescript  ypescript`	ypescript  ypescript

`	ypescript  ypescript`	ypescript  ypescript`typescript
class HealthChecker {
  private checks: Map<string, HealthCheck> = new Map();
  
  addCheck(name: string, check: HealthCheck) {
    this.checks.set(name, check);
  }
  
  async checkHealth(): Promise<HealthStatus> {
    const results = new Map<string, boolean>();
    
    for (const [name, check] of this.checks) {
      try {
        const isHealthy = await check.execute();
        results.set(name, isHealthy);
      } catch (error) {
        results.set(name, false);
      }
    }
    
    const allHealthy = Array.from(results.values()).every(Boolean);
    
    return {
      status: allHealthy ? 'healthy' : 'unhealthy',
      checks: Object.fromEntries(results)
    };
  }
}

// Database health check
class DatabaseHealthCheck implements HealthCheck {
  async execute(): Promise<boolean> {
    try {
      await Database.raw('SELECT 1');
      return true;
    } catch {
      return false;
    }
  }
}
`	ypescript  ypescript`	ypescript  ypescript`	ypescript  ypescript



