---
description: Microservices Architecture - การออกแบบระบบแบบ microservices

---

Microservices Architecture คือการแบ่ง application ออกเป็น services ขนาดเล็กที่ทำงานอิสระกัน แต่ละ service มีความรับผิดชอบเฉพาะทางและสามารถ deploy แยกกันได้

`	ypescript  ypescript`	ypescript  ypescript`	ypescript  ypescript
┌─────────┐  ┌─────────┐  ┌─────────┐
│User API │  │Order API│  │Product │
│Service  │  │Service  │  │API      │
└─────────┘  └─────────┘  └─────────┘
     │            │            │
     └────────────┼────────────┘
                  │
        ┌─────────────┐
        │ API Gateway │
        └─────────────┘
                  │
        ┌─────────────┐
        │ Service Mesh │
        └─────────────┘
`	ypescript  ypescript`	ypescript  ypescript`	ypescript  ypescript

แต่ละ service ทำงานเพียงธุรกิจเดียว

`	ypescript  ypescript`	ypescript  ypescript`typescript
// User Service - จัดการเฉพาะ user operations
export class UserService {
  async createUser(userData: CreateUserDTO): Promise<User> {
    const user = new User(userData);
    return await this.userRepository.save(user);
  }
  
  async getUser(id: string): Promise<User> {
    return await this.userRepository.findById(id);
  }
}

// Order Service - จัดการเฉพาะ order operations
export class OrderService {
  async createOrder(orderData: CreateOrderDTO): Promise<Order> {
    // ตรวจสอบ user ผ่าน API call
    const user = await this.userServiceClient.getUser(orderData.userId);
    const order = new Order({ ...orderData, user });
    return await this.orderRepository.save(order);
  }
}
`	ypescript  ypescript`	ypescript  ypescript`	ypescript  ypescript

แต่ละ service สามารถ deploy แยกกันได้

`	ypescript  ypescript`	ypescript  ypescript`typescript
// Dockerfile สำหรับ User Service
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY dist ./dist
EXPOSE 3001
CMD ["node", "dist/index.js"]

// docker-compose.yml
version: '3.8'
services:
  user-service:
    build: ./user-service
    ports:
      - "3001:3001"
    environment:
      - DATABASE_URL=postgresql://localhost:5432/users
    depends_on:
      - user-db
  
  order-service:
    build: ./order-service
    ports:
      - "3002:3002"
    environment:
      - DATABASE_URL=postgresql://localhost:5432/orders
      - USER_SERVICE_URL=http://user-service:3001
    depends_on:
      - order-db
      - user-service
`	ypescript  ypescript`	ypescript  ypescript`	ypescript  ypescript

แต่ละ service มี database ของตัวเอง

`	ypescript  ypescript`	ypescript  ypescript`typescript
// User Service Database Schema
export class UserEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  
  @Column()
  name: string;
  
  @Column({ unique: true })
  email: string;
  
  @CreateDateColumn()
  createdAt: Date;
  
  @UpdateDateColumn()
  updatedAt: Date;
}

// Order Service Database Schema
export class OrderEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  
  @Column()
  userId: string; // Foreign key reference
  
  @Column()
  totalAmount: number;
  
  @Column()
  status: string;
  
  @CreateDateColumn()
  createdAt: Date;
}
`	ypescript  ypescript`	ypescript  ypescript`	ypescript  ypescript

การเรียกใช้งานแบบ synchronous ผ่าน HTTP/gRPC

`	ypescript  ypescript`	ypescript  ypescript`typescript
// HTTP Client สำหรับเรียก User Service
export class UserServiceClient {
  private baseUrl: string;
  
  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
  }
  
  async getUser(id: string): Promise<User> {
    const response = await fetch(`	ypescript  ypescript${this.baseUrl}/users/${id}`	ypescript  ypescript);
    if (!response.ok) {
      throw new Error(`Failed to fetch user: ${response.statusText}`	ypescript  ypescript);
    }
    return response.json();
  }
  
  async createUser(userData: CreateUserDTO): Promise<User> {
    const response = await fetch(`	ypescript  ypescript${this.baseUrl}/users`	ypescript  ypescript, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(userData)
    });
    if (!response.ok) {
      throw new Error(`Failed to create user: ${response.statusText}`	ypescript  ypescript);
    }
    return response.json();
  }
}

// gRPC Client (สำหรับ high-performance communication)
export class UserServiceGrpcClient {
  private client: UserServiceClient;
  
  constructor(address: string) {
    this.client = new UserServiceClient(address, grpc.credentials.createInsecure());
  }
  
  async getUser(id: string): Promise<User> {
    return new Promise((resolve, reject) => {
      this.client.getUser({ id }, (error, response) => {
        if (error) reject(error);
        else resolve(response);
      });
    });
  }
}
`	ypescript  ypescript`	ypescript  ypescript`	ypescript  ypescript

การสื่อสารแบบ asynchronous ผ่าน message queues

`	ypescript  ypescript`	ypescript  ypescript`typescript
// Event Bus สำหรับ asynchronous communication
export class EventBus {
  private rabbitmq: RabbitMQ;
  
  constructor(connection: RabbitMQ) {
    this.rabbitmq = connection;
  }
  
  async publish(event: DomainEvent) {
    const channel = await this.rabbitmq.createChannel();
    await channel.assertExchange('events', 'topic', { durable: true });
    
    await channel.publish('events', event.type, Buffer.from(JSON.stringify(event)));
    await channel.close();
  }
  
  async subscribe(eventType: string, handler: EventHandler) {
    const channel = await this.rabbitmq.createChannel();
    await channel.assertExchange('events', 'topic', { durable: true });
    
    const queue = await channel.assertQueue('', { exclusive: true });
    await channel.bindQueue(queue.queue, 'events', eventType);
    
    await channel.consume(queue.queue, async (msg) => {
      if (msg) {
        const event = JSON.parse(msg.content.toString());
        await handler(event);
        channel.ack(msg);
      }
    });
  }
}

// Domain Events
export class UserCreatedEvent implements DomainEvent {
  type = 'USER_CREATED';
  
  constructor(
    public userId: string,
    public email: string,
    public timestamp: Date
  ) {}
}

export class OrderPlacedEvent implements DomainEvent {
  type = 'ORDER_PLACED';
  
  constructor(
    public orderId: string,
    public userId: string,
    public amount: number,
    public timestamp: Date
  ) {}
}

// Event Handlers
export class NotificationService {
  constructor(private eventBus: EventBus) {
    this.setupEventHandlers();
  }
  
  private setupEventHandlers() {
    this.eventBus.subscribe('USER_CREATED', this.handleUserCreated);
    this.eventBus.subscribe('ORDER_PLACED', this.handleOrderPlaced);
  }
  
  private handleUserCreated = async (event: UserCreatedEvent) => {
    await this.sendWelcomeEmail(event.email);
  };
  
  private handleOrderPlaced = async (event: OrderPlacedEvent) => {
    await this.sendOrderConfirmation(event.userId, event.orderId);
  };
  
  private async sendWelcomeEmail(email: string) {
    // Send email logic
  }
  
  private async sendOrderConfirmation(userId: string, orderId: string) {
    // Send notification logic
  }
}
`	ypescript  ypescript`	ypescript  ypescript`	ypescript  ypescript

API Gateway ทำหน้าที่เป็น entry point เดียวสำหรับ client requests

`	ypescript  ypescript`	ypescript  ypescript`typescript
// API Gateway Implementation
export class APIGateway {
  private routes: Map<string, ServiceRoute> = new Map();
  private loadBalancer: LoadBalancer;
  private circuitBreaker: CircuitBreaker;
  
  constructor() {
    this.setupRoutes();
    this.loadBalancer = new LoadBalancer();
    this.circuitBreaker = new CircuitBreaker();
  }
  
  private setupRoutes() {
    this.routes.set('/api/users', {
      service: 'user-service',
      path: '/users',
      methods: ['GET', 'POST', 'PUT', 'DELETE']
    });
    
    this.routes.set('/api/orders', {
      service: 'order-service',
      path: '/orders',
      methods: ['GET', 'POST', 'PUT', 'DELETE']
    });
  }
  
  async handleRequest(req: Request): Promise<Response> {
    const route = this.findRoute(req.path);
    if (!route) {
      return new Response('Not Found', { status: 404 });
    }
    
    try {
      // Authentication & Authorization
      await this.authenticate(req);
      await this.authorize(req, route);
      
      // Rate Limiting
      await this.checkRateLimit(req);
      
      // Load Balancing
      const serviceUrl = this.loadBalancer.selectService(route.service);
      
      // Circuit Breaker
      const response = await this.circuitBreaker.execute(
        () => this.proxyRequest(serviceUrl + route.path, req)
      );
      
      return response;
    } catch (error) {
      return this.handleError(error);
    }
  }
  
  private async authenticate(req: Request) {
    const token = req.headers.get('Authorization');
    if (!token) {
      throw new UnauthorizedError('Missing token');
    }
    
    const user = await this.validateToken(token);
    req.user = user;
  }
  
  private async authorize(req: Request, route: ServiceRoute) {
    // Check user permissions for the route
  }
  
  private async checkRateLimit(req: Request) {
    // Implement rate limiting logic
  }
  
  private async proxyRequest(url: string, req: Request): Promise<Response> {
    const response = await fetch(url, {
      method: req.method,
      headers: req.headers,
      body: req.body
    });
    
    return response;
  }
  
  private handleError(error: Error): Response {
    if (error instanceof UnauthorizedError) {
      return new Response('Unauthorized', { status: 401 });
    }
    
    if (error instanceof RateLimitError) {
      return new Response('Too Many Requests', { status: 429 });
    }
    
    return new Response('Internal Server Error', { status: 500 });
  }
}
`	ypescript  ypescript`	ypescript  ypescript`	ypescript  ypescript

การค้นหาและลงทะเบียน services ในระบบ

`	ypescript  ypescript`	ypescript  ypescript`typescript
// Service Registry
export class ServiceRegistry {
  private services: Map<string, ServiceInstance[]> = new Map();
  private consul: Consul;
  
  constructor(consulUrl: string) {
    this.consul = new Consul({ url: consulUrl });
  }
  
  async register(service: ServiceRegistration) {
    const instance: ServiceInstance = {
      id: `	ypescript  ypescript${service.name}-${service.port}`	ypescript  ypescript,
      name: service.name,
      address: service.address,
      port: service.port,
      health: '/health',
      tags: service.tags || []
    };
    
    await this.consul.agent.service.register({
      id: instance.id,
      name: instance.name,
      address: instance.address,
      port: instance.port,
      check: {
        http: `http://${instance.address}:${instance.port}${instance.health}`	ypescript  ypescript,
        interval: '10s'
      }
    });
    
    const instances = this.services.get(service.name) || [];
    instances.push(instance);
    this.services.set(service.name, instances);
  }
  
  async deregister(serviceId: string) {
    await this.consul.agent.service.deregister(serviceId);
    
    for (const [serviceName, instances] of this.services.entries()) {
      const filtered = instances.filter(instance => instance.id !== serviceId);
      this.services.set(serviceName, filtered);
    }
  }
  
  async discover(serviceName: string): Promise<ServiceInstance[]> {
    const instances = await this.consul.health.service({
      service: serviceName,
      passing: true
    });
    
    return instances.map(instance => ({
      id: instance.Service.ID,
      name: instance.Service.Service,
      address: instance.Service.Address,
      port: instance.Service.Port,
      health: instance.Service.Service,
      tags: instance.Service.Tags || []
    }));
  }
  
  async getHealthyInstance(serviceName: string): Promise<ServiceInstance | null> {
    const instances = await this.discover(serviceName);
    if (instances.length === 0) {
      return null;
    }
    
    // Random selection for load balancing
    const randomIndex = Math.floor(Math.random() * instances.length);
    return instances[randomIndex];
  }
}

// Service Client with Discovery
export class ServiceClient {
  private registry: ServiceRegistry;
  private cache: Map<string, ServiceInstance> = new Map();
  
  constructor(registry: ServiceRegistry) {
    this.registry = registry;
  }
  
  async callService<T>(
    serviceName: string,
    path: string,
    options: RequestOptions = {}
  ): Promise<T> {
    const instance = await this.getServiceInstance(serviceName);
    if (!instance) {
      throw new Error(`No healthy instances found for ${serviceName}`	ypescript  ypescript);
    }
    
    const url = `http://${instance.address}:${instance.port}${path}`	ypescript  ypescript;
    
    const response = await fetch(url, {
      method: options.method || 'GET',
      headers: options.headers || {},
      body: options.body ? JSON.stringify(options.body) : undefined
    });
    
    if (!response.ok) {
      throw new Error(`Service call failed: ${response.statusText}`	ypescript  ypescript);
    }
    
    return response.json();
  }
  
  private async getServiceInstance(serviceName: string): Promise<ServiceInstance> {
    // Check cache first
    const cached = this.cache.get(serviceName);
    if (cached && await this.isHealthy(cached)) {
      return cached;
    }
    
    // Discover new instance
    const instance = await this.registry.getHealthyInstance(serviceName);
    if (instance) {
      this.cache.set(serviceName, instance);
    }
    
    return instance;
  }
  
  private async isHealthy(instance: ServiceInstance): Promise<boolean> {
    try {
      const response = await fetch(
        `http://${instance.address}:${instance.port}/health`	ypescript  ypescript,
        { timeout: 5000 }
      );
      return response.ok;
    } catch {
      return false;
    }
  }
}
`	ypescript  ypescript`	ypescript  ypescript`	ypescript  ypescript

การจัดการ configuration ข้าม services

`	ypescript  ypescript`	ypescript  ypescript`typescript
// Configuration Service
export class ConfigurationService {
  private vault: Vault;
  private consul: Consul;
  
  constructor(vaultUrl: string, consulUrl: string) {
    this.vault = new Vault({ url: vaultUrl });
    this.consul = new Consul({ url: consulUrl });
  }
  
  async getConfig(serviceName: string, environment: string): Promise<ServiceConfig> {
    const configKey = `config/${serviceName}/${environment}`	ypescript  ypescript;
    
    // Try to get from Consul KV store first
    let config = await this.consul.kv.get<{ value: string }>(configKey);
    
    if (!config) {
      // Fallback to default configuration
      config = await this.getDefaultConfig(serviceName);
      await this.consul.kv.set(configKey, JSON.stringify(config));
    }
    
    // Decrypt secrets from Vault
    const decryptedConfig = await this.decryptSecrets(config);
    
    return decryptedConfig;
  }
  
  async updateConfig(serviceName: string, environment: string, config: ServiceConfig) {
    const configKey = `config/${serviceName}/${environment}`	ypescript  ypescript;
    
    // Encrypt secrets before storing
    const encryptedConfig = await this.encryptSecrets(config);
    
    await this.consul.kv.set(configKey, JSON.stringify(encryptedConfig));
    
    // Notify services about configuration change
    await this.notifyConfigChange(serviceName, environment);
  }
  
  private async getDefaultConfig(serviceName: string): Promise<ServiceConfig> {
    // Load default configuration from files or database
    return {
      database: {
        host: 'localhost',
        port: 5432,
        name: `	ypescript  ypescript${serviceName}_db`	ypescript  ypescript
      },
      redis: {
        host: 'localhost',
        port: 6379
      },
      features: {}
    };
  }
  
  private async decryptSecrets(config: any): Promise<ServiceConfig> {
    const decrypted = { ...config };
    
    if (config.database?.password) {
      decrypted.database.password = await this.vault.read(config.database.password);
    }
    
    if (config.redis?.password) {
      decrypted.redis.password = await this.vault.read(config.redis.password);
    }
    
    return decrypted;
  }
  
  private async encryptSecrets(config: any): Promise<any> {
    const encrypted = { ...config };
    
    if (config.database?.password) {
      encrypted.database.password = await this.vault.write(config.database.password);
    }
    
    if (config.redis?.password) {
      encrypted.redis.password = await this.vault.write(config.redis.password);
    }
    
    return encrypted;
  }
  
  private async notifyConfigChange(serviceName: string, environment: string) {
    const event = new ConfigChangedEvent(serviceName, environment, new Date());
    await this.eventBus.publish(event);
  }
}
`	ypescript  ypescript`	ypescript  ypescript`	ypescript  ypescript

การติดตาม requests ข้าม services

`	ypescript  ypescript`	ypescript  ypescript`typescript
// Tracing Service
export class TracingService {
  private jaeger: JaegerTracer;
  
  constructor(serviceName: string) {
    this.jaeger = new JaegerTracer(serviceName);
  }
  
  async traceOperation<T>(
    operationName: string,
    fn: (span: Span) => Promise<T>,
    parentSpan?: Span
  ): Promise<T> {
    const span = this.jaeger.startSpan(operationName, {
      childOf: parentSpan?.context()
    });
    
    try {
      const result = await fn(span);
      span.setTag('success', true);
      return result;
    } catch (error) {
      span.setTag('error', true);
      span.log({ error: error.message });
      throw error;
    } finally {
      span.finish();
    }
  }
  
  injectTraceHeaders(headers: Record<string, string>, span: Span) {
    this.jaeger.inject(span, FORMAT_HTTP_HEADERS, headers);
  }
  
  extractTrace(headers: Record<string, string>): Span | null {
    return this.jaeger.extract(FORMAT_HTTP_HEADERS, headers);
  }
}

// Usage in service
export class UserService {
  constructor(
    private tracing: TracingService,
    private userClient: ServiceClient
  ) {}
  
  async createUser(userData: CreateUserDTO): Promise<User> {
    return await this.tracing.traceOperation('createUser', async (span) => {
      span.setTag('user.email', userData.email);
      
      const user = await this.userRepository.save(userData);
      
      // Call other service with trace context
      const headers = {};
      this.tracing.injectTraceHeaders(headers, span);
      
      await this.userClient.callService(
        'notification-service',
        '/notifications/welcome',
        { method: 'POST', body: { userId: user.id }, headers }
      );
      
      return user;
    });
  }
}
`	ypescript  ypescript`	ypescript  ypescript`	ypescript  ypescript

ป้องกัน cascading failures

`	ypescript  ypescript`	ypescript  ypescript`typescript
export class CircuitBreaker {
  private state: 'CLOSED' | 'OPEN' | 'HALF_OPEN' = 'CLOSED';
  private failureCount = 0;
  private lastFailureTime = 0;
  private successCount = 0;
  
  constructor(
    private threshold = 5,
    private timeout = 60000,
    private resetTimeout = 10000
  ) {}
  
  async execute<T>(fn: () => Promise<T>): Promise<T> {
    if (this.state === 'OPEN') {
      if (Date.now() - this.lastFailureTime > this.resetTimeout) {
        this.state = 'HALF_OPEN';
        this.successCount = 0;
      } else {
        throw new CircuitBreakerOpenError('Circuit breaker is OPEN');
      }
    }
    
    try {
      const result = await fn();
      this.onSuccess();
      return result;
    } catch (error) {
      this.onFailure();
      throw error;
    }
  }
  
  private onSuccess() {
    this.failureCount = 0;
    
    if (this.state === 'HALF_OPEN') {
      this.successCount++;
      if (this.successCount >= this.threshold) {
        this.state = 'CLOSED';
      }
    }
  }
  
  private onFailure() {
    this.failureCount++;
    this.lastFailureTime = Date.now();
    
    if (this.failureCount >= this.threshold) {
      this.state = 'OPEN';
    }
  }
  
  getState() {
    return {
      state: this.state,
      failureCount: this.failureCount,
      lastFailureTime: this.lastFailureTime
    };
  }
}
`	ypescript  ypescript`	ypescript  ypescript`	ypescript  ypescript

- กำหนด service boundaries ตาม business capabilities

- หลีกเหลี่ยง services ที่เล็กเกินไป (nanoservices)

- ใช้ Domain-Driven Design ในการกำหนด bounded contexts

- ใช้ Saga Pattern สำหรับ distributed transactions

- Implement eventual consistency

- ใช้ event sourcing สำหรับ critical operations

- Centralized logging ด้วย ELK stack

- Distributed tracing ด้วย Jaeger/Zipkin

- Metrics collection ด้วย Prometheus

- Implement OAuth 2.0/JWT authentication

- Use service mesh สำหรับ mTLS

- API rate limiting และ throttling

`	ypescript  ypescript`	ypescript  ypescript`typescript
// API Gateway ที่ค่อยๆ redirect traffic
class MigrationGateway extends APIGateway {
  private migrationConfig: Map<string, MigrationRule> = new Map();
  
  constructor() {
    super();
    this.setupMigrationRules();
  }
  
  private setupMigrationRules() {
    // 10% traffic ไป microservice
    this.migrationConfig.set('/api/users', {
      microserviceRatio: 0.1,
      monolithRatio: 0.9
    });
  }
  
  async handleRequest(req: Request): Promise<Response> {
    const route = this.findRoute(req.path);
    const migrationRule = this.migrationConfig.get(route.path);
    
    if (migrationRule) {
      const random = Math.random();
      
      if (random < migrationRule.microserviceRatio) {
        // Route to microservice
        return await this.proxyToMicroservice(route, req);
      } else {
        // Route to monolith
        return await this.proxyToMonolith(route, req);
      }
    }
    
    return await super.handleRequest(req);
  }
}
`	ypescript  ypescript`	ypescript  ypescript`	ypescript  ypescript

`	ypescript  ypescript`	ypescript  ypescript`	ypescript  ypescript
microservices/
├── api-gateway/
│   ├── src/
│   ├── Dockerfile
│   └── package.json
├── user-service/
│   ├── src/
│   ├── Dockerfile
│   └── package.json
├── order-service/
│   ├── src/
│   ├── Dockerfile
│   └── package.json
├── notification-service/
│   ├── src/
│   ├── Dockerfile
│   └── package.json
├── shared/
│   ├── events/
│   ├── types/
│   └── utils/
├── infrastructure/
│   ├── docker-compose.yml
│   ├── kubernetes/
│   └── monitoring/
└── scripts/
    ├── deploy.sh
    └── migrate.sh
`	ypescript  ypescript`	ypescript  ypescript`	ypescript  ypescript



