---
description: Scalability Design - การออกแบบระบบให้รองรับการเติบโต

---

Scalability คือความสามารถของระบบในการรองรับ workload ที่เพิ่มขึ้นโดยยังคง performance และ user experience ที่ดี

เพิ่ม resources ให้กับ server เดิม (CPU, RAM, Storage)

`	ypescript  ypescript`	ypescript  ypescript`typescript
// ตัวอย่างการปรับแต่งให้รองรับ vertical scaling
class DatabaseConnectionPool {
  private connections: Connection[] = [];
  private maxConnections: number;
  
  constructor(maxConnections: number = 10) {
    this.maxConnections = maxConnections;
  }
  
  // ปรับจำนวน connections ตาม resources
  adjustPoolSize(availableMemory: number) {
    const optimalConnections = Math.floor(availableMemory / 50); // 50MB per connection
    this.maxConnections = Math.min(optimalConnections, 100);
  }
  
  async getConnection(): Promise<Connection> {
    if (this.connections.length < this.maxConnections) {
      const connection = await this.createConnection();
      this.connections.push(connection);
      return connection;
    }
    
    // Wait for available connection
    return await this.waitForConnection();
  }
}
`	ypescript  ypescript`	ypescript  ypescript`	ypescript  ypescript

เพิ่มจำนวน servers และกระจาย workload

`	ypescript  ypescript`	ypescript  ypescript`typescript
// Load Balancer สำหรับ horizontal scaling
class LoadBalancer {
  private servers: Server[] = [];
  private currentIndex = 0;
  
  addServer(server: Server) {
    this.servers.push(server);
  }
  
  // Round Robin Algorithm
  getNextServer(): Server {
    if (this.servers.length === 0) {
      throw new Error('No servers available');
    }
    
    const server = this.servers[this.currentIndex];
    this.currentIndex = (this.currentIndex + 1) % this.servers.length;
    
    return server;
  }
  
  // Health Check
  async healthCheck(): Promise<Server[]> {
    const healthyServers: Server[] = [];
    
    for (const server of this.servers) {
      try {
        const isHealthy = await server.checkHealth();
        if (isHealthy) {
          healthyServers.push(server);
        }
      } catch (error) {
        console.error(`Server ${server.id} health check failed:`	ypescript  ypescript, error);
      }
    }
    
    this.servers = healthyServers;
    return healthyServers;
  }
}
`	ypescript  ypescript`	ypescript  ypescript`	ypescript  ypescript

แยกการอ่านและเขียนข้อมูล

`	ypescript  ypescript`	ypescript  ypescript`typescript
class DatabaseRouter {
  private master: Database;
  private replicas: Database[];
  private readReplicaRatio = 0.8; // 80% read requests go to replicas
  
  constructor(master: Database, replicas: Database[]) {
    this.master = master;
    this.replicas = replicas;
  }
  
  async query(sql: string, params?: any[]): Promise<any> {
    const isWriteQuery = this.isWriteQuery(sql);
    
    if (isWriteQuery) {
      return await this.master.query(sql, params);
    }
    
    // Route read queries to replicas
    if (Math.random() < this.readReplicaRatio && this.replicas.length > 0) {
      const replica = this.getRandomReplica();
      try {
        return await replica.query(sql, params);
      } catch (error) {
        // Fallback to master if replica fails
        console.warn('Replica query failed, falling back to master:', error);
        return await this.master.query(sql, params);
      }
    }
    
    return await this.master.query(sql, params);
  }
  
  private isWriteQuery(sql: string): boolean {
    const writeKeywords = ['INSERT', 'UPDATE', 'DELETE', 'CREATE', 'ALTER', 'DROP'];
    const upperSql = sql.toUpperCase().trim();
    
    return writeKeywords.some(keyword => upperSql.startsWith(keyword));
  }
  
  private getRandomReplica(): Database {
    const index = Math.floor(Math.random() * this.replicas.length);
    return this.replicas[index];
  }
}
`	ypescript  ypescript`	ypescript  ypescript`	ypescript  ypescript

แบ่งข้อมูลข้าม databases

`	ypescript  ypescript`	ypescript  ypescript`typescript
class ShardingStrategy {
  // Hash-based Sharding
  static hashShard(key: string, shardCount: number): number {
    const hash = this.hashCode(key);
    return Math.abs(hash) % shardCount;
  }
  
  // Range-based Sharding
  static rangeShard(value: number, ranges: number[]): number {
    for (let i = 0; i < ranges.length; i++) {
      if (value <= ranges[i]) {
        return i;
      }
    }
    return ranges.length - 1;
  }
  
  // Directory-based Sharding
  static directoryShard(key: string, directory: Map<string, number>): number {
    return directory.get(key) || 0;
  }
  
  private static hashCode(str: string): number {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
      const char = str.charCodeAt(i);
      hash = ((hash << 5) - hash) + char;
      hash = hash & hash; // Convert to 32-bit integer
    }
    return hash;
  }
}

class ShardedDatabase {
  private shards: Map<number, Database> = new Map();
  private shardCount: number;
  
  constructor(shardConfigs: DatabaseConfig[]) {
    this.shardCount = shardConfigs.length;
    
    shardConfigs.forEach((config, index) => {
      this.shards.set(index, new Database(config));
    });
  }
  
  async getUser(userId: string): Promise<User> {
    const shardId = ShardingStrategy.hashShard(userId, this.shardCount);
    const shard = this.shards.get(shardId);
    
    if (!shard) {
      throw new Error(`Shard ${shardId} not found`	ypescript  ypescript);
    }
    
    return await shard.query('SELECT * FROM users WHERE id = ?', [userId]);
  }
  
  async createUser(user: CreateUserDTO): Promise<User> {
    const userId = generateId();
    const shardId = ShardingStrategy.hashShard(userId, this.shardCount);
    const shard = this.shards.get(shardId);
    
    if (!shard) {
      throw new Error(`Shard ${shardId} not found`	ypescript  ypescript);
    }
    
    return await shard.query(
      'INSERT INTO users (id, name, email) VALUES (?, ?, ?)',
      [userId, user.name, user.email]
    );
  }
  
  // Cross-shard query (complex operation)
  async getAllUsers(): Promise<User[]> {
    const promises = Array.from(this.shards.values()).map(shard =>
      shard.query('SELECT * FROM users')
    );
    
    const results = await Promise.all(promises);
    return results.flat();
  }
}
`	ypescript  ypescript`	ypescript  ypescript`	ypescript  ypescript

`	ypescript  ypescript`	ypescript  ypescript`typescript
class CacheManager {
  private l1Cache: Map<string, any> = new Map(); // Memory cache
  private l2Cache: RedisClient; // Redis cache
  private l3Cache: Database; // Database
  
  constructor(redisClient: RedisClient, database: Database) {
    this.l2Cache = redisClient;
    this.l3Cache = database;
  }
  
  async get<T>(key: string): Promise<T | null> {
    // L1 Cache (Memory)
    const l1Value = this.l1Cache.get(key);
    if (l1Value !== undefined) {
      return l1Value;
    }
    
    // L2 Cache (Redis)
    const l2Value = await this.l2Cache.get(key);
    if (l2Value) {
      const parsed = JSON.parse(l2Value);
      this.l1Cache.set(key, parsed); // Populate L1
      return parsed;
    }
    
    // L3 Cache (Database)
    const l3Value = await this.l3Cache.get(key);
    if (l3Value) {
      // Populate all cache levels
      this.l1Cache.set(key, l3Value);
      await this.l2Cache.set(key, JSON.stringify(l3Value), 3600); // 1 hour TTL
      return l3Value;
    }
    
    return null;
  }
  
  async set(key: string, value: any, ttl = 3600): Promise<void> {
    // Set all cache levels
    this.l1Cache.set(key, value);
    await this.l2Cache.set(key, JSON.stringify(value), ttl);
    await this.l3Cache.set(key, value);
  }
  
  async invalidate(key: string): Promise<void> {
    // Clear all cache levels
    this.l1Cache.delete(key);
    await this.l2Cache.del(key);
    await this.l3Cache.delete(key);
  }
  
  // Cache warming
  async warmCache(keys: string[]): Promise<void> {
    const promises = keys.map(async (key) => {
      const value = await this.l3Cache.get(key);
      if (value) {
        await this.set(key, value);
      }
    });
    
    await Promise.all(promises);
  }
}
`	ypescript  ypescript`	ypescript  ypescript`	ypescript  ypescript

`	ypescript  ypescript`	ypescript  ypescript`typescript
// Cache-Aside Pattern
class CacheAsideService {
  constructor(
    private cache: CacheManager,
    private database: Database
  ) {}
  
  async getProduct(productId: string): Promise<Product | null> {
    const cacheKey = `product:${productId}`	ypescript  ypescript;
    
    // Try cache first
    let product = await this.cache.get<Product>(cacheKey);
    
    if (!product) {
      // Cache miss - get from database
      product = await this.database.getProduct(productId);
      
      if (product) {
        // Populate cache
        await this.cache.set(cacheKey, product, 1800); // 30 minutes
      }
    }
    
    return product;
  }
  
  async updateProduct(productId: string, updates: Partial<Product>): Promise<Product> {
    // Update database first
    const product = await this.database.updateProduct(productId, updates);
    
    // Invalidate cache
    const cacheKey = `product:${productId}`	ypescript  ypescript;
    await this.cache.invalidate(cacheKey);
    
    return product;
  }
}

// Write-Through Pattern
class WriteThroughService {
  constructor(
    private cache: CacheManager,
    private database: Database
  ) {}
  
  async createProduct(productData: CreateProductDTO): Promise<Product> {
    // Write to database
    const product = await this.database.createProduct(productData);
    
    // Write to cache
    const cacheKey = `product:${product.id}`	ypescript  ypescript;
    await this.cache.set(cacheKey, product, 1800);
    
    return product;
  }
}

// Write-Behind Pattern
class WriteBehindService {
  private writeQueue: Array<{ key: string; value: any; operation: 'create' | 'update' | 'delete' }> = [];
  private batchSize = 100;
  private flushInterval = 5000; // 5 seconds
  
  constructor(
    private cache: CacheManager,
    private database: Database
  ) {
    this.startBatchProcessor();
  }
  
  async updateProduct(productId: string, updates: Partial<Product>): Promise<Product> {
    // Update cache immediately
    const cacheKey = `product:${productId}`	ypescript  ypescript;
    const existingProduct = await this.cache.get<Product>(cacheKey);
    
    const updatedProduct = { ...existingProduct, ...updates };
    await this.cache.set(cacheKey, updatedProduct, 1800);
    
    // Queue for database write
    this.writeQueue.push({
      key: cacheKey,
      value: updatedProduct,
      operation: 'update'
    });
    
    return updatedProduct;
  }
  
  private startBatchProcessor() {
    setInterval(async () => {
      if (this.writeQueue.length > 0) {
        await this.flushToDatabase();
      }
    }, this.flushInterval);
  }
  
  private async flushToDatabase() {
    const batch = this.writeQueue.splice(0, this.batchSize);
    
    const promises = batch.map(async ({ key, value, operation }) => {
      try {
        if (operation === 'update') {
          await this.database.updateProduct(key.replace('product:', ''), value);
        }
        // Handle other operations...
      } catch (error) {
        console.error('Failed to write to database:', error);
        // Re-add to queue for retry
        this.writeQueue.push({ key, value, operation });
      }
    });
    
    await Promise.all(promises);
  }
}
`	ypescript  ypescript`	ypescript  ypescript`	ypescript  ypescript

`	ypescript  ypescript`	ypescript  ypescript`typescript
class ConnectionPool<T> {
  private available: T[] = [];
  private inUse: Set<T> = new Set();
  private maxSize: number;
  private minSize: number;
  private factory: () => Promise<T>;
  private destroyer: (conn: T) => Promise<void>;
  
  constructor(options: ConnectionPoolOptions<T>) {
    this.maxSize = options.maxSize || 10;
    this.minSize = options.minSize || 2;
    this.factory = options.factory;
    this.destroyer = options.destroyer;
    
    this.initializePool();
  }
  
  private async initializePool() {
    for (let i = 0; i < this.minSize; i++) {
      const connection = await this.factory();
      this.available.push(connection);
    }
  }
  
  async acquire(): Promise<T> {
    // Try to get from available pool
    if (this.available.length > 0) {
      const connection = this.available.pop()!;
      this.inUse.add(connection);
      return connection;
    }
    
    // Create new connection if under max size
    if (this.inUse.size < this.maxSize) {
      const connection = await this.factory();
      this.inUse.add(connection);
      return connection;
    }
    
    // Wait for available connection
    return await this.waitForConnection();
  }
  
  async release(connection: T): Promise<void> {
    if (!this.inUse.has(connection)) {
      return; // Connection not from this pool
    }
    
    this.inUse.delete(connection);
    
    if (this.available.length < this.maxSize) {
      this.available.push(connection);
    } else {
      // Pool is full, destroy excess connection
      await this.destroyer(connection);
    }
  }
  
  private async waitForConnection(): Promise<T> {
    return new Promise((resolve, reject) => {
      const checkInterval = setInterval(() => {
        if (this.available.length > 0) {
          clearInterval(checkInterval);
          this.acquire().then(resolve).catch(reject);
        }
      }, 100);
      
      // Timeout after 30 seconds
      setTimeout(() => {
        clearInterval(checkInterval);
        reject(new Error('Connection timeout'));
      }, 30000);
    });
  }
}

// Usage
const dbPool = new ConnectionPool({
  maxSize: 20,
  minSize: 5,
  factory: async () => {
    return await createDatabaseConnection();
  },
  destroyer: async (conn) => {
    await conn.close();
  }
});

async function getUser(userId: string) {
  const connection = await dbPool.acquire();
  try {
    return await connection.query('SELECT * FROM users WHERE id = ?', [userId]);
  } finally {
    await dbPool.release(connection);
  }
}
`	ypescript  ypescript`	ypescript  ypescript`	ypescript  ypescript

`	ypescript  ypescript`	ypescript  ypescript`typescript
class TaskQueue {
  private queue: Array<{ task: Task; resolve: Function; reject: Function }> = [];
  private processing = false;
  private concurrency: number;
  private activeCount = 0;
  
  constructor(concurrency = 5) {
    this.concurrency = concurrency;
  }
  
  async enqueue<T>(task: Task<T>): Promise<T> {
    return new Promise((resolve, reject) => {
      this.queue.push({ task, resolve, reject });
      this.process();
    });
  }
  
  private async process() {
    if (this.processing || this.activeCount >= this.concurrency) {
      return;
    }
    
    this.processing = true;
    
    while (this.queue.length > 0 && this.activeCount < this.concurrency) {
      const { task, resolve, reject } = this.queue.shift()!;
      this.activeCount++;
      
      this.executeTask(task, resolve, reject)
        .finally(() => {
          this.activeCount--;
          if (this.queue.length > 0) {
            this.process();
          } else {
            this.processing = false;
          }
        });
    }
  }
  
  private async executeTask<T>(
    task: Task<T>,
    resolve: (value: T) => void,
    reject: (error: Error) => void
  ) {
    try {
      const result = await task();
      resolve(result);
    } catch (error) {
      reject(error as Error);
    }
  }
}

// Usage
const taskQueue = new TaskQueue(10);

async function processUserRegistration(userData: CreateUserDTO) {
  return await taskQueue.enqueue(async () => {
    // Process registration
    const user = await createUser(userData);
    
    // Send welcome email asynchronously
    await taskQueue.enqueue(async () => {
      await sendWelcomeEmail(user.email);
    });
    
    // Update analytics asynchronously
    await taskQueue.enqueue(async () => {
      await updateAnalytics('user_registered', { userId: user.id });
    });
    
    return user;
  });
}
`	ypescript  ypescript`	ypescript  ypescript`	ypescript  ypescript

`	ypescript  ypescript`	ypescript  ypescript`typescript
class MetricsCollector {
  private metrics: Map<string, Metric[]> = new Map();
  
  recordMetric(name: string, value: number, tags?: Record<string, string>) {
    const metric: Metric = {
      name,
      value,
      timestamp: Date.now(),
      tags: tags || {}
    };
    
    const metrics = this.metrics.get(name) || [];
    metrics.push(metric);
    
    // Keep only last 1000 metrics per type
    if (metrics.length > 1000) {
      metrics.shift();
    }
    
    this.metrics.set(name, metrics);
  }
  
  getAverageMetric(name: string, duration = 60000): number {
    const metrics = this.metrics.get(name) || [];
    const cutoff = Date.now() - duration;
    
    const recentMetrics = metrics.filter(m => m.timestamp > cutoff);
    
    if (recentMetrics.length === 0) {
      return 0;
    }
    
    const sum = recentMetrics.reduce((acc, m) => acc + m.value, 0);
    return sum / recentMetrics.length;
  }
  
  getMaxMetric(name: string, duration = 60000): number {
    const metrics = this.metrics.get(name) || [];
    const cutoff = Date.now() - duration;
    
    const recentMetrics = metrics.filter(m => m.timestamp > cutoff);
    
    return recentMetrics.length > 0 
      ? Math.max(...recentMetrics.map(m => m.value))
      : 0;
  }
}

// Auto Scaler
class AutoScaler {
  private metrics: MetricsCollector;
  private currentInstances = 1;
  private minInstances = 1;
  private maxInstances = 10;
  private scaleUpThreshold = 80; // CPU percentage
  private scaleDownThreshold = 20;
  private cooldownPeriod = 300000; // 5 minutes
  private lastScaleTime = 0;
  
  constructor(metrics: MetricsCollector) {
    this.metrics = metrics;
  }
  
  async checkAndScale(): Promise<void> {
    const now = Date.now();
    
    // Respect cooldown period
    if (now - this.lastScaleTime < this.cooldownPeriod) {
      return;
    }
    
    const avgCpu = this.metrics.getAverageMetric('cpu_utilization');
    const avgMemory = this.metrics.getAverageMetric('memory_utilization');
    const requestRate = this.metrics.getAverageMetric('request_rate');
    
    console.log(`Metrics - CPU: ${avgCpu}%, Memory: ${avgMemory}%, Requests: ${requestRate}/s`	ypescript  ypescript);
    
    // Scale up logic
    if (this.shouldScaleUp(avgCpu, avgMemory, requestRate)) {
      await this.scaleUp();
      this.lastScaleTime = now;
    }
    // Scale down logic
    else if (this.shouldScaleDown(avgCpu, avgMemory, requestRate)) {
      await this.scaleDown();
      this.lastScaleTime = now;
    }
  }
  
  private shouldScaleUp(cpu: number, memory: number, requestRate: number): boolean {
    return (
      cpu > this.scaleUpThreshold ||
      memory > this.scaleUpThreshold ||
      (requestRate > 100 && this.currentInstances < this.maxInstances)
    );
  }
  
  private shouldScaleDown(cpu: number, memory: number, requestRate: number): boolean {
    return (
      cpu < this.scaleDownThreshold &&
      memory < this.scaleDownThreshold &&
      requestRate < 50 &&
      this.currentInstances > this.minInstances
    );
  }
  
  private async scaleUp(): Promise<void> {
    if (this.currentInstances >= this.maxInstances) {
      console.log('Already at maximum instances');
      return;
    }
    
    this.currentInstances++;
    console.log(`Scaling up to ${this.currentInstances} instances`	ypescript  ypescript);
    
    // Launch new instance
    await this.launchInstance();
  }
  
  private async scaleDown(): Promise<void> {
    if (this.currentInstances <= this.minInstances) {
      console.log('Already at minimum instances');
      return;
    }
    
    console.log(`Scaling down to ${this.currentInstances - 1} instances`	ypescript  ypescript);
    
    // Terminate an instance
    await this.terminateInstance();
    this.currentInstances--;
  }
  
  private async launchInstance(): Promise<void> {
    // Implementation for launching new instance
    console.log('Launching new instance...');
  }
  
  private async terminateInstance(): Promise<void> {
    // Implementation for terminating instance
    console.log('Terminating instance...');
  }
}
`	ypescript  ypescript`	ypescript  ypescript`	ypescript  ypescript

`	ypescript  ypescript`	ypescript  ypescript`typescript
class LazyLoader<T> {
  private factory: () => Promise<T>;
  private instance: T | null = null;
  private loading = false;
  private loadPromise: Promise<T> | null = null;
  
  constructor(factory: () => Promise<T>) {
    this.factory = factory;
  }
  
  async get(): Promise<T> {
    if (this.instance) {
      return this.instance;
    }
    
    if (this.loading && this.loadPromise) {
      return await this.loadPromise;
    }
    
    this.loading = true;
    this.loadPromise = this.factory();
    
    try {
      this.instance = await this.loadPromise;
      return this.instance;
    } finally {
      this.loading = false;
      this.loadPromise = null;
    }
  }
  
  reset(): void {
    this.instance = null;
    this.loading = false;
    this.loadPromise = null;
  }
}

// Usage
const databaseLoader = new LazyLoader(async () => {
  console.log('Initializing database connection...');
  return await createDatabaseConnection();
});

// Database connection will only be created when first needed
async function getUser(userId: string) {
  const db = await databaseLoader.get();
  return await db.query('SELECT * FROM users WHERE id = ?', [userId]);
}
`	ypescript  ypescript`	ypescript  ypescript`	ypescript  ypescript

`	ypescript  ypescript`	ypescript  ypescript`typescript
class PaginationService {
  async getPaginatedResults<T>(
    query: string,
    page: number,
    pageSize: number,
    params?: any[]
  ): Promise<PaginatedResult<T>> {
    const offset = (page - 1) * pageSize;
    
    // Get total count
    const countQuery = `SELECT COUNT(*) as total FROM (${query}) as subquery`	ypescript  ypescript;
    const countResult = await this.database.query(countQuery, params);
    const total = countResult[0].total;
    
    // Get paginated data
    const dataQuery = `	ypescript  ypescript${query} LIMIT ? OFFSET ?`	ypescript  ypescript;
    const data = await this.database.query(dataQuery, [...(params || []), pageSize, offset]);
    
    return {
      data,
      pagination: {
        page,
        pageSize,
        total,
        totalPages: Math.ceil(total / pageSize),
        hasNext: page < Math.ceil(total / pageSize),
        hasPrev: page > 1
      }
    };
  }
  
  // Cursor-based pagination for better performance
  async getCursorPaginatedResults<T>(
    query: string,
    cursor?: string,
    limit: number = 20,
    params?: any[]
  ): Promise<CursorPaginatedResult<T>> {
    let finalQuery = query;
    const finalParams = [...(params || [])];
    
    if (cursor) {
      finalQuery += ' WHERE id > ?';
      finalParams.push(cursor);
    }
    
    finalQuery += ' ORDER BY id LIMIT ?';
    finalParams.push(limit + 1); // Get one extra to check if there's more
    
    const results = await this.database.query(finalQuery, finalParams);
    
    const hasMore = results.length > limit;
    const data = hasMore ? results.slice(0, -1) : results;
    
    const nextCursor = data.length > 0 ? data[data.length - 1].id : null;
    
    return {
      data,
      pagination: {
        nextCursor: hasMore ? nextCursor : null,
        hasMore
      }
    };
  }
}
`	ypescript  ypescript`	ypescript  ypescript`	ypescript  ypescript

`	ypescript  ypescript`	ypescript  ypescript`typescript
class PerformanceMonitor {
  private metrics: Map<string, number[]> = new Map();
  
  startTimer(name: string): () => void {
    const start = performance.now();
    
    return () => {
      const duration = performance.now() - start;
      this.recordMetric(name, duration);
    };
  }
  
  recordMetric(name: string, value: number) {
    const values = this.metrics.get(name) || [];
    values.push(value);
    
    // Keep only last 1000 values
    if (values.length > 1000) {
      values.shift();
    }
    
    this.metrics.set(name, values);
  }
  
  getPercentile(name: string, percentile: number): number {
    const values = this.metrics.get(name) || [];
    
    if (values.length === 0) {
      return 0;
    }
    
    const sorted = [...values].sort((a, b) => a - b);
    const index = Math.ceil((percentile / 100) * sorted.length) - 1;
    
    return sorted[index];
  }
  
  getAverage(name: string): number {
    const values = this.metrics.get(name) || [];
    
    if (values.length === 0) {
      return 0;
    }
    
    const sum = values.reduce((acc, val) => acc + val, 0);
    return sum / values.length;
  }
  
  // Performance decorator
  static monitor(name?: string) {
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
      const originalMethod = descriptor.value;
      const monitorName = name || `	ypescript  ypescript${target.constructor.name}.${propertyKey}`	ypescript  ypescript;
      
      descriptor.value = async function (...args: any[]) {
        const monitor = this.performanceMonitor || new PerformanceMonitor();
        const endTimer = monitor.startTimer(monitorName);
        
        try {
          const result = await originalMethod.apply(this, args);
          endTimer();
          return result;
        } catch (error) {
          endTimer();
          throw error;
        }
      };
      
      return descriptor;
    };
  }
}

// Usage
class UserService {
  private performanceMonitor = new PerformanceMonitor();
  
  @PerformanceMonitor.monitor('getUser')
  async getUser(userId: string): Promise<User> {
    // Method implementation
    return await this.database.getUser(userId);
  }
}
`	ypescript  ypescript`	ypescript  ypescript`	ypescript  ypescript

- **Stateless Design**: Components ควรเป็น stateless

- **Loose Coupling**: ลดการพึ่งพาระหว่าง components

- **Asynchronous Processing**: ใช้ async operations เมื่อเป็นไปได้

- **Caching**: Implement caching ในทุก levels

- **Connection Pooling**: ใช้ connection pools อย่างมีประสิทธิภาพ

- **Indexing**: สร้าง indexes ที่เหมาะสม

- **Query Optimization**: Optimize queries และใช้ prepared statements

- **Data Partitioning**: แบ่งข้อมูลเมื่อจำเป็น

- **Auto Scaling**: ตั้งค่า auto scaling policies

- **Load Testing**: ทดสอบภายใต้ load สูงสุด

- **Monitoring**: Monitor performance metrics อย่างต่อเนื่อง

- **Disaster Recovery**: วางแผนสำหรับความล้มเหลว

- **Right Sizing**: เลือก resources ที่เหมาะสม

- **Spot Instances**: ใช้ spot instances สำหรับ workloads ที่ไม่ critical

- **Scheduled Scaling**: Scale ตาม traffic patterns

- **Resource Cleanup**: ลบ resources ที่ไม่ใช้งาน



