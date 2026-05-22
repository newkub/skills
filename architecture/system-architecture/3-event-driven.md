---
description: Event-Driven Architecture - การออกแบบระบบแบบ event-driven

---

Event-Driven Architecture คือรูปแบบสถาปัตยกรรมที่ components สื่อสารกันผ่าน events แบบ asynchronous ซึ่งช่วยให้ระบบมีความ flexible, scalable และ resilient

`	ypescript  ypescript`	ypescript  ypescript`	ypescript  ypescript
┌─────────┐   Event   ┌─────────┐   Event   ┌─────────┐
│Producer │ ────────► │Consumer │ ────────► │Consumer │
└─────────┘           └─────────┘           └─────────┘
       │                   │                   │
       ▼                   ▼                   ▼
┌─────────────┐   ┌─────────────┐   ┌─────────────┐
│ Event Store │   │ Event Bus   │   │ Message     │
│ (Database)  │   │ (In-Memory) │   │ Queue       │
└─────────────┘   └─────────────┘   └─────────────┘
`	ypescript  ypescript`	ypescript  ypescript`	ypescript  ypescript

ส่ง notifications เกี่ยวกับสิ่งที่เกิดขึ้น

`	ypescript  ypescript`	ypescript  ypescript`typescript
// Event Definition
interface UserRegisteredEvent {
  type: 'USER_REGISTERED';
  payload: {
    userId: string;
    email: string;
    timestamp: Date;
  };
}

interface OrderPlacedEvent {
  type: 'ORDER_PLACED';
  payload: {
    orderId: string;
    userId: string;
    amount: number;
    items: OrderItem[];
    timestamp: Date;
  };
}

// Producer
export class UserService {
  constructor(private eventBus: EventBus) {}
  
  async registerUser(userData: RegisterUserDTO): Promise<User> {
    const user = await this.createUser(userData);
    
    // Publish event
    const event: UserRegisteredEvent = {
      type: 'USER_REGISTERED',
      payload: {
        userId: user.id,
        email: user.email,
        timestamp: new Date()
      }
    };
    
    await this.eventBus.publish(event);
    return user;
  }
}

// Consumer
export class NotificationService {
  constructor(private eventBus: EventBus) {
    this.setupEventHandlers();
  }
  
  private setupEventHandlers() {
    this.eventBus.subscribe('USER_REGISTERED', this.handleUserRegistered);
  }
  
  private handleUserRegistered = async (event: UserRegisteredEvent) => {
    await this.sendWelcomeEmail(event.payload.email);
    await this.createUserProfile(event.payload.userId);
  };
  
  private async sendWelcomeEmail(email: string) {
    console.log(`Sending welcome email to ${email}`	ypescript  ypescript);
  }
  
  private async createUserProfile(userId: string) {
    console.log(`Creating user profile for ${userId}`	ypescript  ypescript);
  }
}
`	ypescript  ypescript`	ypescript  ypescript`	ypescript  ypescript

ส่งข้อมูล state ที่จำเป็นไปกับ events

`	ypescript  ypescript`	ypescript  ypescript`typescript
// Rich Event with State
interface ProductUpdatedEvent {
  type: 'PRODUCT_UPDATED';
  payload: {
    productId: string;
    name: string;
    price: number;
    description: string;
    category: string;
    inventory: number;
    timestamp: Date;
    version: number;
  };
}

// Producer
export class ProductService {
  async updateProduct(productId: string, updates: Partial<Product>): Promise<Product> {
    const product = await this.productRepository.update(productId, updates);
    
    const event: ProductUpdatedEvent = {
      type: 'PRODUCT_UPDATED',
      payload: {
        productId: product.id,
        name: product.name,
        price: product.price,
        description: product.description,
        category: product.category,
        inventory: product.inventory,
        timestamp: new Date(),
        version: product.version
      }
    };
    
    await this.eventBus.publish(event);
    return product;
  }
}

// Consumer ที่ใช้ข้อมูลจาก event
export class SearchService {
  private productIndex: Map<string, Product> = new Map();
  
  constructor(private eventBus: EventBus) {
    this.setupEventHandlers();
  }
  
  private setupEventHandlers() {
    this.eventBus.subscribe('PRODUCT_UPDATED', this.handleProductUpdated);
  }
  
  private handleProductUpdated = (event: ProductUpdatedEvent) => {
    // อัพเดท search index จากข้อมูลใน event
    this.productIndex.set(event.payload.productId, {
      id: event.payload.productId,
      name: event.payload.name,
      price: event.payload.price,
      description: event.payload.description,
      category: event.payload.category
    });
    
    console.log(`Updated search index for product ${event.payload.productId}`	ypescript  ypescript);
  };
}
`	ypescript  ypescript`	ypescript  ypescript`	ypescript  ypescript

เก็บทุก events ที่เกิดขึ้นเป็น source of truth

`	ypescript  ypescript`	ypescript  ypescript`typescript
// Event Store
export class EventStore {
  constructor(private database: Database) {}
  
  async saveEvents(aggregateId: string, events: DomainEvent[], expectedVersion: number) {
    await this.database.transaction(async (tx) => {
      // Check version conflict
      const currentVersion = await this.getCurrentVersion(aggregateId, tx);
      if (currentVersion !== expectedVersion) {
        throw new ConcurrencyError('Version conflict');
      }
      
      // Save events
      for (const event of events) {
        await tx.event.create({
          data: {
            aggregateId,
            eventType: event.type,
            eventData: JSON.stringify(event),
            version: currentVersion + 1,
            timestamp: new Date()
          }
        });
      }
    });
  }
  
  async getEvents(aggregateId: string): Promise<DomainEvent[]> {
    const eventRecords = await this.database.event.findMany({
      where: { aggregateId },
      orderBy: { version: 'asc' }
    });
    
    return eventRecords.map(record => ({
      type: record.eventType,
      payload: JSON.parse(record.eventData),
      timestamp: record.timestamp
    }));
  }
  
  private async getCurrentVersion(aggregateId: string, tx: any): Promise<number> {
    const latestEvent = await tx.event.findFirst({
      where: { aggregateId },
      orderBy: { version: 'desc' }
    });
    
    return latestEvent?.version || 0;
  }
}

// Aggregate Root
export class UserAggregate {
  private id: string;
  private name: string;
  private email: string;
  private version: number = 0;
  private uncommittedEvents: DomainEvent[] = [];
  
  static create(userData: CreateUserDTO): UserAggregate {
    const user = new UserAggregate();
    const event: UserCreatedEvent = {
      type: 'USER_CREATED',
      payload: {
        userId: generateId(),
        name: userData.name,
        email: userData.email,
        timestamp: new Date()
      }
    };
    
    user.apply(event);
    return user;
  }
  
  static fromHistory(events: DomainEvent[]): UserAggregate {
    const user = new UserAggregate();
    for (const event of events) {
      user.apply(event);
    }
    return user;
  }
  
  changeName(newName: string) {
    if (this.name === newName) {
      throw new Error('Name is the same');
    }
    
    const event: UserNameChangedEvent = {
      type: 'USER_NAME_CHANGED',
      payload: {
        userId: this.id,
        oldName: this.name,
        newName,
        timestamp: new Date()
      }
    };
    
    this.apply(event);
  }
  
  private apply(event: DomainEvent) {
    switch (event.type) {
      case 'USER_CREATED':
        this.id = event.payload.userId;
        this.name = event.payload.name;
        this.email = event.payload.email;
        break;
        
      case 'USER_NAME_CHANGED':
        this.name = event.payload.newName;
        break;
    }
    
    this.version++;
    this.uncommittedEvents.push(event);
  }
  
  getUncommittedEvents(): DomainEvent[] {
    return [...this.uncommittedEvents];
  }
  
  markEventsAsCommitted() {
    this.uncommittedEvents = [];
  }
  
  getId() { return this.id; }
  getName() { return this.name; }
  getEmail() { return this.email; }
  getVersion() { return this.version; }
}

// Application Service
export class UserApplicationService {
  constructor(
    private eventStore: EventStore,
    private eventBus: EventBus
  ) {}
  
  async createUser(userData: CreateUserDTO): Promise<string> {
    const user = UserAggregate.create(userData);
    
    await this.eventStore.saveEvents(user.getId(), user.getUncommittedEvents(), 0);
    
    // Publish events
    for (const event of user.getUncommittedEvents()) {
      await this.eventBus.publish(event);
    }
    
    user.markEventsAsCommitted();
    
    return user.getId();
  }
  
  async changeName(userId: string, newName: string): Promise<void> {
    const events = await this.eventStore.getEvents(userId);
    const user = UserAggregate.fromHistory(events);
    
    user.changeName(newName);
    
    await this.eventStore.saveEvents(
      userId,
      user.getUncommittedEvents(),
      user.getVersion() - 1
    );
    
    // Publish events
    for (const event of user.getUncommittedEvents()) {
      await this.eventBus.publish(event);
    }
    
    user.markEventsAsCommitted();
  }
}
`	ypescript  ypescript`	ypescript  ypescript`	ypescript  ypescript

`	ypescript  ypescript`	ypescript  ypescript`typescript
export class RabbitMQEventBus implements EventBus {
  private connection: Connection;
  private channel: Channel;
  
  constructor(url: string) {
    this.connection = new Connection(url);
  }
  
  async connect() {
    await this.connection.start();
    this.channel = await this.connection.createChannel();
    
    // Declare exchanges
    await this.channel.assertExchange('events', 'topic', { durable: true });
    await this.channel.assertExchange('commands', 'direct', { durable: true });
  }
  
  async publish(event: DomainEvent) {
    const routingKey = event.type.toLowerCase();
    const message = Buffer.from(JSON.stringify(event));
    
    await this.channel.publish('events', routingKey, message, {
      messageId: generateId(),
      timestamp: Date.now(),
      persistent: true
    });
  }
  
  async subscribe(eventType: string, handler: EventHandler) {
    const queue = await this.channel.assertQueue('', { exclusive: true });
    const routingKey = eventType.toLowerCase();
    
    await this.channel.bindQueue(queue.queue, 'events', routingKey);
    
    await this.channel.consume(queue.queue, async (msg) => {
      if (msg) {
        try {
          const event = JSON.parse(msg.content.toString());
          await handler(event);
          this.channel.ack(msg);
        } catch (error) {
          console.error('Error processing event:', error);
          this.channel.nack(msg, false, false); // Reject and don't requeue
        }
      }
    });
  }
  
  async disconnect() {
    await this.channel.close();
    await this.connection.close();
  }
}
`	ypescript  ypescript`	ypescript  ypescript`	ypescript  ypescript

`	ypescript  ypescript`	ypescript  ypescript`typescript
export class KafkaEventBus implements EventBus {
  private producer: Producer;
  private consumer: Consumer;
  private admin: Admin;
  
  constructor(config: KafkaConfig) {
    const kafka = new Kafka(config);
    this.producer = kafka.producer();
    this.consumer = kafka.consumer({ groupId: 'event-processor' });
    this.admin = kafka.admin();
  }
  
  async connect() {
    await this.producer.connect();
    await this.consumer.connect();
    await this.admin.connect();
    
    // Create topics if they don't exist
    await this.admin.createTopics({
      topics: [
        { topic: 'user-events', numPartitions: 3, replicationFactor: 1 },
        { topic: 'order-events', numPartitions: 3, replicationFactor: 1 }
      ],
      waitForLeaders: true
    });
  }
  
  async publish(event: DomainEvent) {
    const topic = this.getTopicForEvent(event.type);
    
    await this.producer.send({
      topic,
      messages: [{
        key: event.payload.id || generateId(),
        value: JSON.stringify(event),
        headers: {
          'event-type': event.type,
          'timestamp': new Date().toISOString()
        }
      }]
    });
  }
  
  async subscribe(eventType: string, handler: EventHandler) {
    const topic = this.getTopicForEvent(eventType);
    
    await this.consumer.subscribe({ topic, fromBeginning: false });
    
    await this.consumer.run({
      eachMessage: async ({ topic, partition, message }) => {
        if (message.value) {
          try {
            const event = JSON.parse(message.value.toString());
            await handler(event);
          } catch (error) {
            console.error('Error processing message:', error);
            // Implement dead letter queue handling
          }
        }
      }
    });
  }
  
  private getTopicForEvent(eventType: string): string {
    if (eventType.startsWith('USER_')) return 'user-events';
    if (eventType.startsWith('ORDER_')) return 'order-events';
    return 'default-events';
  }
  
  async disconnect() {
    await this.producer.disconnect();
    await this.consumer.disconnect();
    await this.admin.disconnect();
  }
}
`	ypescript  ypescript`	ypescript  ypescript`	ypescript  ypescript

Command Query Responsibility Segregation

`	ypescript  ypescript`	ypescript  ypescript`typescript
// Command Side (Write Model)
export class UserCommandService {
  constructor(
    private eventStore: EventStore,
    private eventBus: EventBus
  ) {}
  
  async handleCreateUser(command: CreateUserCommand): Promise<string> {
    const user = UserAggregate.create({
      name: command.name,
      email: command.email
    });
    
    await this.eventStore.saveEvents(user.getId(), user.getUncommittedEvents(), 0);
    
    for (const event of user.getUncommittedEvents()) {
      await this.eventBus.publish(event);
    }
    
    return user.getId();
  }
  
  async handleUpdateUser(command: UpdateUserCommand): Promise<void> {
    const events = await this.eventStore.getEvents(command.userId);
    const user = UserAggregate.fromHistory(events);
    
    if (command.name) {
      user.changeName(command.name);
    }
    
    await this.eventStore.saveEvents(
      command.userId,
      user.getUncommittedEvents(),
      user.getVersion() - 1
    );
    
    for (const event of user.getUncommittedEvents()) {
      await this.eventBus.publish(event);
    }
  }
}

// Query Side (Read Model)
export class UserReadModel {
  private users: Map<string, UserReadModel> = new Map();
  
  constructor(eventBus: EventBus) {
    this.setupEventHandlers();
  }
  
  private setupEventHandlers() {
    eventBus.subscribe('USER_CREATED', this.handleUserCreated);
    eventBus.subscribe('USER_NAME_CHANGED', this.handleUserNameChanged);
  }
  
  private handleUserCreated = (event: UserCreatedEvent) => {
    const user: UserReadModel = {
      id: event.payload.userId,
      name: event.payload.name,
      email: event.payload.email,
      version: 1,
      lastUpdated: event.payload.timestamp
    };
    
    this.users.set(event.payload.userId, user);
  };
  
  private handleUserNameChanged = (event: UserNameChangedEvent) => {
    const user = this.users.get(event.payload.userId);
    if (user) {
      user.name = event.payload.newName;
      user.version += 1;
      user.lastUpdated = event.payload.timestamp;
    }
  };
  
  async getUserById(id: string): Promise<UserReadModel | null> {
    return this.users.get(id) || null;
  }
  
  async searchUsers(query: string): Promise<UserReadModel[]> {
    const results = Array.from(this.users.values()).filter(user =>
      user.name.toLowerCase().includes(query.toLowerCase()) ||
      user.email.toLowerCase().includes(query.toLowerCase())
    );
    
    return results;
  }
}

// Query Service
export class UserQueryService {
  constructor(private readModel: UserReadModel) {}
  
  async getUser(id: string): Promise<UserDTO | null> {
    const user = await this.readModel.getUserById(id);
    if (!user) return null;
    
    return {
      id: user.id,
      name: user.name,
      email: user.email
    };
  }
  
  async searchUsers(query: string): Promise<UserDTO[]> {
    const users = await this.readModel.searchUsers(query);
    return users.map(user => ({
      id: user.id,
      name: user.name,
      email: user.email
    }));
  }
}
`	ypescript  ypescript`	ypescript  ypescript`	ypescript  ypescript

การจัดการ distributed transactions

`	ypescript  ypescript`	ypescript  ypescript`typescript
// Saga Manager
export class SagaManager {
  private sagas: Map<string, SagaInstance> = new Map();
  
  constructor(
    private eventBus: EventBus,
    private commandBus: CommandBus
  ) {}
  
  async startSaga(sagaType: string, sagaData: any) {
    const saga = new SagaInstance(sagaType, sagaData);
    this.sagas.set(saga.id, saga);
    
    await this.executeNextStep(saga);
  }
  
  private async executeNextStep(saga: SagaInstance) {
    if (saga.isCompleted()) {
      this.sagas.delete(saga.id);
      return;
    }
    
    const step = saga.getCurrentStep();
    
    try {
      if (step.type === 'command') {
        const command = await this.commandBus.send(step.command);
        saga.recordCommand(command);
      } else if (step.type === 'event') {
        await this.eventBus.publish(step.event);
        saga.recordEvent(step.event);
      }
      
      saga.moveToNextStep();
      await this.executeNextStep(saga);
    } catch (error) {
      await this.executeCompensation(saga);
    }
  }
  
  private async executeCompensation(saga: SagaInstance) {
    const completedSteps = saga.getCompletedSteps();
    
    for (const step of completedSteps.reverse()) {
      try {
        if (step.compensation) {
          await step.compensation();
        }
      } catch (compensationError) {
        console.error('Compensation failed:', compensationError);
        // Implement retry logic
      }
    }
    
    this.sagas.delete(saga.id);
  }
}

// Order Processing Saga
export class OrderProcessingSaga {
  static create(orderData: CreateOrderDTO): SagaDefinition {
    return {
      steps: [
        {
          type: 'command',
          command: new CreateOrderCommand(orderData),
          compensation: async (result) => {
            await this.commandBus.send(new CancelOrderCommand(result.orderId));
          }
        },
        {
          type: 'command',
          command: new ReserveInventoryCommand(orderData.items),
          compensation: async (result) => {
            await this.commandBus.send(new ReleaseInventoryCommand(result.reservationId));
          }
        },
        {
          type: 'command',
          command: new ProcessPaymentCommand(orderData.payment),
          compensation: async (result) => {
            await this.commandBus.send(new RefundPaymentCommand(result.paymentId));
          }
        },
        {
          type: 'event',
          event: new OrderCompletedEvent(orderData.orderId)
        }
      ]
    };
  }
}
`	ypescript  ypescript`	ypescript  ypescript`	ypescript  ypescript

`	ypescript  ypescript`	ypescript  ypescript`typescript
// Event Schema Registry
export class EventSchemaRegistry {
  private schemas: Map<string, EventSchema> = new Map();
  
  registerSchema(eventType: string, schema: EventSchema) {
    this.schemas.set(eventType, schema);
  }
  
  validateEvent(event: DomainEvent): ValidationResult {
    const schema = this.schemas.get(event.type);
    if (!schema) {
      return { valid: false, errors: [`Unknown event type: ${event.type}`	ypescript  ypescript] };
    }
    
    return schema.validate(event);
  }
  
  migrateEvent(event: DomainEvent, fromVersion: number, toVersion: number): DomainEvent {
    const schema = this.schemas.get(event.type);
    if (!schema) {
      throw new Error(`No schema found for event type: ${event.type}`	ypescript  ypescript);
    }
    
    return schema.migrate(event, fromVersion, toVersion);
  }
}

// Event Schema Example
export class UserRegisteredSchema implements EventSchema {
  getVersions(): number[] {
    return [1, 2];
  }
  
  validate(event: DomainEvent): ValidationResult {
    const errors: string[] = [];
    
    if (!event.payload.userId) errors.push('Missing userId');
    if (!event.payload.email) errors.push('Missing email');
    
    if (event.version === 2) {
      if (!event.payload.phoneNumber) errors.push('Missing phoneNumber (v2)');
    }
    
    return {
      valid: errors.length === 0,
      errors
    };
  }
  
  migrate(event: DomainEvent, fromVersion: number, toVersion: number): DomainEvent {
    if (fromVersion === 1 && toVersion === 2) {
      // Migrate from v1 to v2
      return {
        ...event,
        version: 2,
        payload: {
          ...event.payload,
          phoneNumber: null // New field
        }
      };
    }
    
    throw new Error(`Unsupported migration from v${fromVersion} to v${toVersion}`	ypescript  ypescript);
  }
}
`	ypescript  ypescript`	ypescript  ypescript`	ypescript  ypescript

- ใช้ immutable events

- กำหนด clear event schemas

- Include sufficient context in events

- Use event versioning for backward compatibility

- Implement dead letter queues

- Use circuit breakers for external services

- Implement retry policies with exponential backoff

- Monitor and alert on failed events

- Batch events when possible

- Use appropriate message retention policies

- Implement event compression for large payloads

- Monitor queue depths and processing times

- Test event handlers independently

- Use contract testing between services

- Implement integration tests with test containers

- Test failure scenarios and compensation

`	ypescript  ypescript`	ypescript  ypescript`typescript
// Event Metrics
export class EventMetrics {
  private prometheus: PrometheusRegistry;
  
  constructor() {
    this.prometheus = new PrometheusRegistry();
    this.setupMetrics();
  }
  
  private setupMetrics() {
    new Counter({
      name: 'events_published_total',
      help: 'Total number of events published',
      labelNames: ['event_type'],
      registers: [this.prometheus]
    });
    
    new Counter({
      name: 'events_processed_total',
      help: 'Total number of events processed',
      labelNames: ['event_type', 'status'],
      registers: [this.prometheus]
    });
    
    new Histogram({
      name: 'event_processing_duration_seconds',
      help: 'Event processing duration',
      labelNames: ['event_type'],
      buckets: [0.1, 0.5, 1, 2, 5],
      registers: [this.prometheus]
    });
  }
  
  recordEventPublished(eventType: string) {
    this.prometheus.getSingleMetric('events_published_total')
      .inc({ event_type: eventType });
  }
  
  recordEventProcessed(eventType: string, status: 'success' | 'error') {
    this.prometheus.getSingleMetric('events_processed_total')
      .inc({ event_type: eventType, status });
  }
  
  recordProcessingDuration(eventType: string, duration: number) {
    this.prometheus.getSingleMetric('event_processing_duration_seconds')
      .observe({ event_type: eventType }, duration);
  }
}
`	ypescript  ypescript`	ypescript  ypescript`	ypescript  ypescript



