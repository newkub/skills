---
description: Serverless Architecture - การออกแบบระบบแบบ serverless

---

Serverless Architecture คือรูปแบบที่ developer ไม่ต้องจัดการ servers แต่ยังคงสามารถ deploy และ run code ได้ โดย cloud provider จะจัดการ infrastructure, scaling, และ maintenance ให้

`	ypescript  ypescript`	ypescript  ypescript`	ypescript  ypescript
┌─────────────┐  ┌─────────────┐  ┌─────────────┐
│   API GW    │  │   Function │  │   Function │
│ (HTTP/API)  │  │ (Compute)   │  │ (Compute)   │
└─────────────┘  └─────────────┘  └─────────────┘
        │                │                │
        └────────────────┼────────────────┘
                         │
        ┌────────────────┼────────────────┐
        │                │                │
┌─────────────┐  ┌─────────────┐  ┌─────────────┐
│   Database  │  │   Storage   │  │   Queue     │
│ (Managed)   │  │ (Object)    │  │ (Message)   │
└─────────────┘  └─────────────┘  └─────────────┘
`	ypescript  ypescript`	ypescript  ypescript`	ypescript  ypescript

รัน code ตาม demand โดยไม่ต้องจัดการ servers

`	ypescript  ypescript`	ypescript  ypescript`typescript
// AWS Lambda Function
import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';

export const handler = async (
  event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> => {
  try {
    const { name, email } = JSON.parse(event.body || '{}');
    
    // Validate input
    if (!name || !email) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: 'Name and email are required' })
      };
    }
    
    // Process business logic
    const user = await createUser({ name, email });
    
    return {
      statusCode: 201,
      body: JSON.stringify({ 
        id: user.id,
        name: user.name,
        email: user.email,
        createdAt: user.createdAt
      })
    };
  } catch (error) {
    console.error('Error creating user:', error);
    
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Internal server error' })
    };
  }
};

async function createUser(userData: CreateUserDTO): Promise<User> {
  // Connect to database
  const db = await connectToDatabase();
  
  // Save user
  const user = await db.user.create({
    data: {
      id: generateId(),
      name: userData.name,
      email: userData.email,
      createdAt: new Date()
    }
  });
  
  // Publish event
  await publishEvent('USER_CREATED', {
    userId: user.id,
    email: user.email
  });
  
  return user;
}

// Database connection utility
async function connectToDatabase() {
  if (process.env.DB_CONNECTION) {
    // Reuse existing connection
    return process.env.DB_CONNECTION;
  }
  
  const connection = await createConnection({
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT || '5432'),
    database: process.env.DB_NAME,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD
  });
  
  // Cache connection for reuse
  process.env.DB_CONNECTION = connection;
  
  return connection;
}
`	ypescript  ypescript`	ypescript  ypescript`	ypescript  ypescript

Managed backend services ที่ใช้งานได้ทันที

`	ypescript  ypescript`	ypescript  ypescript`typescript
// Firebase Functions example
import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';

admin.initializeApp();

export const createUser = functions.https.onCall(async (data, context) => {
  // Verify authentication
  if (!context.auth) {
    throw new functions.https.HttpsError(
      'unauthenticated',
      'User must be authenticated'
    );
  }
  
  const { name, email } = data;
  
  try {
    // Create user in Firebase Auth
    const userRecord = await admin.auth().createUser({
      email,
      displayName: name
    });
    
    // Create user document in Firestore
    await admin.firestore().collection('users').doc(userRecord.uid).set({
      id: userRecord.uid,
      name,
      email,
      createdAt: admin.firestore.FieldValue.serverTimestamp()
    });
    
    return { success: true, userId: userRecord.uid };
  } catch (error) {
    console.error('Error creating user:', error);
    throw new functions.https.HttpsError(
      'internal',
      'Failed to create user'
    );
  }
});

// Real-time database trigger
export const onUserCreated = functions.firestore
  .document('users/{userId}')
  .onCreate(async (snapshot, context) => {
    const user = snapshot.data();
    const userId = context.params.userId;
    
    // Send welcome email
    await sendWelcomeEmail(user.email);
    
    // Create user profile in external service
    await createProfileInExternalService(userId, user);
  });
`	ypescript  ypescript`	ypescript  ypescript`	ypescript  ypescript

ใช้ API Gateway เป็น entry point สำหรับ functions

`	ypescript  ypescript`	ypescript  ypescript`typescript
// Serverless Framework Configuration
serverless.yml

service: user-service

provider:
  name: aws
  runtime: nodejs18.x
  region: us-east-1
  environment:
    DB_HOST: ${ssm:/my-app/db-host}
    DB_PASSWORD: ${ssm:/my-app/db-password~true}

functions:
  createUser:
    handler: src/handlers/user.createUser
    events:
      - http:
          path: /users
          method: post
          cors: true
    environment:
      TABLE_NAME: ${self:custom.usersTable}

  getUser:
    handler: src/handlers/user.getUser
    events:
      - http:
          path: /users/{id}
          method: get
          cors: true

  updateUser:
    handler: src/handlers/user.updateUser
    events:
      - http:
          path: /users/{id}
          method: put
          cors: true

custom:
  usersTable: users-${self:provider.stage}
  
resources:
  Resources:
    UsersTable:
      Type: AWS::DynamoDB::Table
      Properties:
        TableName: ${self:custom.usersTable}
        AttributeDefinitions:
          - AttributeName: id
            AttributeType: S
        KeySchema:
          - AttributeName: id
            KeyType: HASH
        BillingMode: PAY_PER_REQUEST
`	ypescript  ypescript`	ypescript  ypescript`	ypescript  ypescript

ใช้ events ในการ trigger functions

`	ypescript  ypescript`	ypescript  ypescript`typescript
// S3 Event Handler
export const processImageUpload = async (event: S3Event) => {
  for (const record of event.Records) {
    const bucket = record.s3.bucket.name;
    const key = record.s3.object.key;
    
    try {
      // Download image from S3
      const imageBuffer = await downloadFromS3(bucket, key);
      
      // Process image (resize, compress, etc.)
      const processedImages = await processImage(imageBuffer);
      
      // Upload processed images to different folders
      await Promise.all([
        uploadToS3(bucket, `thumbnails/${key}`	ypescript  ypescript, processedImages.thumbnail),
        uploadToS3(bucket, `medium/${key}`	ypescript  ypescript, processedImages.medium),
        uploadToS3(bucket, `large/${key}`	ypescript  ypescript, processedImages.large)
      ]);
      
      // Update database
      await updateImageRecord(key, processedImages);
      
      // Publish completion event
      await publishEvent('IMAGE_PROCESSED', {
        originalKey: key,
        processedImages: Object.keys(processedImages)
      });
      
    } catch (error) {
      console.error(`Error processing image ${key}:`	ypescript  ypescript, error);
      
      // Move to error folder
      await moveToErrorFolder(bucket, key);
      
      // Publish error event
      await publishEvent('IMAGE_PROCESSING_FAILED', {
        key,
        error: error.message
      });
    }
  }
};

// SQS Message Handler
export const processEmailQueue = async (event: SQSEvent) => {
  for (const record of event.Records) {
    const message = JSON.parse(record.body);
    
    try {
      await sendEmail(message.to, message.subject, message.body);
      
      // Delete message from queue on success
      await deleteMessage(record.receiptHandle);
      
    } catch (error) {
      console.error('Error sending email:', error);
      
      // Let message return to queue for retry
      throw error;
    }
  }
};

// DynamoDB Stream Handler
export const onUserUpdated = async (event: DynamoDBStreamEvent) => {
  for (const record of event.Records) {
    if (record.eventName === 'MODIFY') {
      const oldImage = record.dynamodb?.OldImage;
      const newImage = record.dynamodb?.NewImage;
      
      // Check if email changed
      if (oldImage?.email.S !== newImage?.email.S) {
        await publishEvent('USER_EMAIL_CHANGED', {
          userId: newImage?.id.S,
          oldEmail: oldImage?.email.S,
          newEmail: newImage?.email.S
        });
      }
    }
  }
};
`	ypescript  ypescript`	ypescript  ypescript`	ypescript  ypescript

ใช้ Step Functions สำหรับ complex workflows

`	ypescript  ypescript`	ypescript  ypescript`typescript
// AWS Step Functions Definition
export const orderProcessingWorkflow = {
  Comment: 'Process customer order',
  StartAt: 'ValidateOrder',
  States: {
    ValidateOrder: {
      Type: 'Task',
      Resource: 'arn:aws:lambda:us-east-1:123456789012:function:validate-order',
      Next: 'ReserveInventory',
      Catch: [
        {
          ErrorEquals: ['States.ALL'],
          Next: 'OrderFailed',
          ResultPath: '$.error'
        }
      ]
    },
    
    ReserveInventory: {
      Type: 'Task',
      Resource: 'arn:aws:lambda:us-east-1:123456789012:function:reserve-inventory',
      Next: 'ProcessPayment',
      Catch: [
        {
          ErrorEquals: ['States.ALL'],
          Next: 'ReleaseInventory',
          ResultPath: '$.error'
        }
      ]
    },
    
    ProcessPayment: {
      Type: 'Task',
      Resource: 'arn:aws:lambda:us-east-1:123456789012:function:process-payment',
      Next: 'UpdateOrder',
      Catch: [
        {
          ErrorEquals: ['States.ALL'],
          Next: 'RefundPayment',
          ResultPath: '$.error'
        }
      ]
    },
    
    UpdateOrder: {
      Type: 'Task',
      Resource: 'arn:aws:lambda:us-east-1:123456789012:function:update-order',
      Next: 'SendConfirmation',
      Catch: [
        {
          ErrorEquals: ['States.ALL'],
          Next: 'OrderFailed',
          ResultPath: '$.error'
        }
      ]
    },
    
    SendConfirmation: {
      Type: 'Task',
      Resource: 'arn:aws:lambda:us-east-1:123456789012:function:send-confirmation',
      End: true
    },
    
    // Compensation states
    ReleaseInventory: {
      Type: 'Task',
      Resource: 'arn:aws:lambda:us-east-1:123456789012:function:release-inventory',
      Next: 'OrderFailed'
    },
    
    RefundPayment: {
      Type: 'Task',
      Resource: 'arn:aws:lambda:us-east-1:123456789012:function:refund-payment',
      Next: 'ReleaseInventory'
    },
    
    OrderFailed: {
      Type: 'Task',
      Resource: 'arn:aws:lambda:us-east-1:123456789012:function:notify-order-failed',
      End: true
    }
  }
};

// Lambda Functions for Step Functions
export const validateOrder = async (event: any) => {
  const { orderId, items, customerId } = event;
  
  // Validate order data
  if (!orderId || !items || !customerId) {
    throw new Error('Invalid order data');
  }
  
  // Check customer exists
  const customer = await getCustomer(customerId);
  if (!customer) {
    throw new Error('Customer not found');
  }
  
  // Validate items
  for (const item of items) {
    const product = await getProduct(item.productId);
    if (!product) {
      throw new Error(`Product ${item.productId} not found`	ypescript  ypescript);
    }
    
    if (product.stock < item.quantity) {
      throw new Error(`Insufficient stock for ${item.productId}`	ypescript  ypescript);
    }
  }
  
  return { valid: true, totalAmount: calculateTotal(items) };
};

export const reserveInventory = async (event: any) => {
  const { orderId, items } = event;
  
  const reservationId = generateId();
  
  // Reserve inventory for each item
  for (const item of items) {
    await reserveProduct(item.productId, item.quantity, reservationId);
  }
  
  return { reservationId };
};
`	ypescript  ypescript`	ypescript  ypescript`	ypescript  ypescript

`	ypescript  ypescript`	ypescript  ypescript`typescript
// DynamoDB Utility
import { DynamoDBClient } from '@aws-sdk/client-dynamodb';
import { 
  DynamoDBDocumentClient, 
  PutCommand, 
  GetCommand, 
  UpdateCommand,
  DeleteCommand,
  QueryCommand,
  ScanCommand
} from '@aws-sdk/lib-dynamodb';

const client = new DynamoDBClient({});
const docClient = DynamoDBDocumentClient.from(client);

export class UserRepository {
  private tableName: string;
  
  constructor(tableName: string) {
    this.tableName = tableName;
  }
  
  async create(user: CreateUserDTO): Promise<User> {
    const userWithId = {
      ...user,
      id: generateId(),
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };
    
    await docClient.send(new PutCommand({
      TableName: this.tableName,
      Item: userWithId,
      ConditionExpression: 'attribute_not_exists(id)'
    }));
    
    return userWithId;
  }
  
  async findById(id: string): Promise<User | null> {
    const result = await docClient.send(new GetCommand({
      TableName: this.tableName,
      Key: { id }
    }));
    
    return result.Item as User || null;
  }
  
  async update(id: string, updates: Partial<User>): Promise<User> {
    const updateExpression = [];
    const expressionAttributeNames: Record<string, string> = {};
    const expressionAttributeValues: Record<string, any> = {};
    
    Object.keys(updates).forEach((key, index) => {
      const attributeName = `	ypescript  ypescript#attr${index}`	ypescript  ypescript;
      const attributeValue = `	ypescript  ypescript:val${index}`	ypescript  ypescript;
      
      updateExpression.push(`	ypescript  ypescript${attributeName} = ${attributeValue}`	ypescript  ypescript);
      expressionAttributeNames[attributeName] = key;
      expressionAttributeValues[attributeValue] = updates[key];
    });
    
    // Always update updatedAt
    updateExpression.push('#updatedAt = :updatedAt');
    expressionAttributeNames['#updatedAt'] = 'updatedAt';
    expressionAttributeValues[':updatedAt'] = new Date().toISOString();
    
    const result = await docClient.send(new UpdateCommand({
      TableName: this.tableName,
      Key: { id },
      UpdateExpression: `SET ${updateExpression.join(', ')}`	ypescript  ypescript,
      ExpressionAttributeNames: expressionAttributeNames,
      ExpressionAttributeValues: expressionAttributeValues,
      ReturnValues: 'ALL_NEW'
    }));
    
    return result.Attributes as User;
  }
  
  async delete(id: string): Promise<void> {
    await docClient.send(new DeleteCommand({
      TableName: this.tableName,
      Key: { id }
    }));
  }
  
  async findByEmail(email: string): Promise<User | null> {
    const result = await docClient.send(new QueryCommand({
      TableName: this.tableName,
      IndexName: 'EmailIndex',
      KeyConditionExpression: 'email = :email',
      ExpressionAttributeValues: { ':email': email }
    }));
    
    return result.Items?.[0] as User || null;
  }
}
`	ypescript  ypescript`	ypescript  ypescript`	ypescript  ypescript

`	ypescript  ypescript`	ypescript  ypescript`typescript
// RDS Proxy Connection
import { RDSDataClient, ExecuteStatementCommand } from '@aws-sdk/client-rds-data';

const rdsClient = new RDSDataClient({});

export class DatabaseService {
  private clusterArn: string;
  private secretArn: string;
  private database: string;
  
  constructor() {
    this.clusterArn = process.env.RDS_CLUSTER_ARN!;
    this.secretArn = process.env.RDS_SECRET_ARN!;
    this.database = process.env.DB_NAME!;
  }
  
  async executeQuery(sql: string, parameters: any[] = []): Promise<any[]> {
    const command = new ExecuteStatementCommand({
      resourceArn: this.clusterArn,
      secretArn: this.secretArn,
      database: this.database,
      sql,
      parameters: parameters.map(param => ({
        name: param.name,
        value: { stringValue: param.value }
      }))
    });
    
    const result = await rdsClient.send(command);
    
    return result.records || [];
  }
  
  async executeTransaction(queries: string[]): Promise<void> {
    // Implement transaction logic
    for (const query of queries) {
      await this.executeQuery(query);
    }
  }
}

// Usage in Lambda
export const createUser = async (event: APIGatewayProxyEvent) => {
  const db = new DatabaseService();
  const { name, email } = JSON.parse(event.body || '{}');
  
  try {
    const result = await db.executeQuery(
      'INSERT INTO users (id, name, email, created_at) VALUES (:id, :name, :email, :createdAt)',
      [
        { name: 'id', value: generateId() },
        { name: 'name', value: name },
        { name: 'email', value: email },
        { name: 'createdAt', value: new Date().toISOString() }
      ]
    );
    
    return {
      statusCode: 201,
      body: JSON.stringify({ success: true })
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message })
    };
  }
};
`	ypescript  ypescript`	ypescript  ypescript`	ypescript  ypescript

`	ypescript  ypescript`	ypescript  ypescript`typescript
// Redis Cache with ElastiCache
import { createClient } from 'redis';

class CacheService {
  private client: any;
  
  constructor() {
    this.client = createClient({
      url: process.env.REDIS_URL
    });
    
    this.client.on('error', (err) => {
      console.error('Redis Client Error:', err);
    });
  }
  
  async connect() {
    await this.client.connect();
  }
  
  async get<T>(key: string): Promise<T | null> {
    try {
      const value = await this.client.get(key);
      return value ? JSON.parse(value) : null;
    } catch (error) {
      console.error('Cache get error:', error);
      return null;
    }
  }
  
  async set(key: string, value: any, ttl = 3600): Promise<void> {
    try {
      await this.client.setEx(key, ttl, JSON.stringify(value));
    } catch (error) {
      console.error('Cache set error:', error);
    }
  }
  
  async del(key: string): Promise<void> {
    try {
      await this.client.del(key);
    } catch (error) {
      console.error('Cache delete error:', error);
    }
  }
  
  async invalidatePattern(pattern: string): Promise<void> {
    try {
      const keys = await this.client.keys(pattern);
      if (keys.length > 0) {
        await this.client.del(keys);
      }
    } catch (error) {
      console.error('Cache invalidate pattern error:', error);
    }
  }
}

// Cached Repository
export class CachedUserRepository {
  constructor(
    private db: UserRepository,
    private cache: CacheService
  ) {}
  
  async findById(id: string): Promise<User | null> {
    // Try cache first
    const cacheKey = `user:${id}`	ypescript  ypescript;
    let user = await this.cache.get<User>(cacheKey);
    
    if (!user) {
      // Get from database
      user = await this.db.findById(id);
      
      if (user) {
        // Cache the result
        await this.cache.set(cacheKey, user, 300); // 5 minutes
      }
    }
    
    return user;
  }
  
  async create(userData: CreateUserDTO): Promise<User> {
    const user = await this.db.create(userData);
    
    // Cache the new user
    const cacheKey = `user:${user.id}`	ypescript  ypescript;
    await this.cache.set(cacheKey, user, 300);
    
    return user;
  }
  
  async update(id: string, updates: Partial<User>): Promise<User> {
    const user = await this.db.update(id, updates);
    
    // Update cache
    const cacheKey = `user:${id}`	ypescript  ypescript;
    await this.cache.set(cacheKey, user, 300);
    
    return user;
  }
  
  async delete(id: string): Promise<void> {
    await this.db.delete(id);
    
    // Remove from cache
    const cacheKey = `user:${id}`	ypescript  ypescript;
    await this.cache.del(cacheKey);
  }
}
`	ypescript  ypescript`	ypescript  ypescript`	ypescript  ypescript

`	ypescript  ypescript`	ypescript  ypescript`typescript
// Custom Metrics
import { CloudWatchClient, PutMetricDataCommand } from '@aws-sdk/client-cloudwatch';

const cloudWatch = new CloudWatchClient({});

export class MetricsService {
  async publishMetric(
    namespace: string,
    metricName: string,
    value: number,
    dimensions?: { Name: string; Value: string }[]
  ) {
    await cloudWatch.send(new PutMetricDataCommand({
      Namespace: namespace,
      MetricData: [{
        MetricName: metricName,
        Value: value,
        Dimensions: dimensions || [],
        Timestamp: new Date(),
        Unit: 'Count'
      }]
    }));
  }
  
  async trackInvocation(functionName: string, duration: number) {
    await this.publishMetric('Lambda', 'InvocationDuration', duration, [
      { Name: 'FunctionName', Value: functionName }
    ]);
  }
  
  async trackError(functionName: string, errorType: string) {
    await this.publishMetric('Lambda', 'Errors', 1, [
      { Name: 'FunctionName', Value: functionName },
      { Name: 'ErrorType', Value: errorType }
    ]);
  }
}

// Usage in Lambda
export const handler = async (event: any) => {
  const startTime = Date.now();
  const metrics = new MetricsService();
  
  try {
    // Business logic
    const result = await processEvent(event);
    
    // Track success
    await metrics.trackInvocation('my-function', Date.now() - startTime);
    
    return result;
  } catch (error) {
    // Track error
    await metrics.trackError('my-function', error.constructor.name);
    throw error;
  }
};
`	ypescript  ypescript`	ypescript  ypescript`	ypescript  ypescript

`	ypescript  ypescript`	ypescript  ypescript`typescript
// Structured Logger
export class Logger {
  private context: Record<string, any>;
  
  constructor(context: Record<string, any> = {}) {
    this.context = context;
  }
  
  private log(level: string, message: string, extra: Record<string, any> = {}) {
    const logEntry = {
      timestamp: new Date().toISOString(),
      level,
      message,
      ...this.context,
      ...extra
    };
    
    console.log(JSON.stringify(logEntry));
  }
  
  info(message: string, extra?: Record<string, any>) {
    this.log('INFO', message, extra);
  }
  
  warn(message: string, extra?: Record<string, any>) {
    this.log('WARN', message, extra);
  }
  
  error(message: string, error?: Error, extra?: Record<string, any>) {
    this.log('ERROR', message, {
      ...extra,
      error: error ? {
        name: error.name,
        message: error.message,
        stack: error.stack
      } : undefined
    });
  }
  
  withContext(context: Record<string, any>): Logger {
    return new Logger({ ...this.context, ...context });
  }
}

// Usage in Lambda
export const handler = async (event: any) => {
  const logger = new Logger({
    functionName: process.env.AWS_LAMBDA_FUNCTION_NAME,
    requestId: event.requestContext?.requestId
  });
  
  logger.info('Function started', { event });
  
  try {
    const result = await processEvent(event);
    logger.info('Function completed successfully', { result });
    return result;
  } catch (error) {
    logger.error('Function failed', error, { event });
    throw error;
  }
};
`	ypescript  ypescript`	ypescript  ypescript`	ypescript  ypescript

- **Single Responsibility**: แต่ละ function ทำงานเพียงอย่างเดียว

- **Stateless**: ไม่เก็บ state ระหว่าง invocations

- **Idempotent**: สามารถเรียกซ้ำได้โดยไม่เกิด side effects

- **Cold Start Optimization**: ลดเวลา cold start ด้วย initialization strategies

- **Connection Pooling**: Reuse database connections

- **Bundle Size**: ลดขนาด deployment packages

- **Memory Management**: ใช้ memory อย่างมีประสิทธิภาพ

- **Concurrent Executions**: จัดการ concurrent limits อย่างเหมาะสม

- **Least Privilege**: ใช้ IAM roles ที่จำกัดสิทธิ์

- **Environment Variables**: ไม่เก็บ secrets ใน code

- **Input Validation**: ตรวจสอบ inputs ทั้งหมด

- **VPC Configuration**: ใช้ VPC เมื่อต้องการความปลอดภัยสูง

- **Right Sizing**: เลือก memory และ timeout ที่เหมาะสม

- **Reserved Concurrency**: จำกัด concurrent executions

- **Lambda Layers**: Reuse code ข้าม functions

- **Event Source Filtering**: กรอง events ก่อนป้อนให้ Lambda

`	ypescript  ypescript`	ypescript  ypescript`typescript
// Unit test with mocked AWS services
import { handler } from '../src/lambda';
import { mockClient } from 'aws-sdk-client-mock';
import { DynamoDBDocumentClient } from '@aws-sdk/lib-dynamodb';

describe('User Lambda', () => {
  const ddbMock = mockClient(DynamoDBDocumentClient);
  
  beforeEach(() => {
    ddbMock.reset();
  });
  
  it('should create user successfully', async () => {
    const event = {
      body: JSON.stringify({
        name: 'John Doe',
        email: 'john@example.com'
      })
    };
    
    ddbMock.on(PutCommand).resolves({
      Attributes: {
        id: '123',
        name: 'John Doe',
        email: 'john@example.com',
        createdAt: '2023-01-01T00:00:00Z'
      }
    });
    
    const result = await handler(event);
    
    expect(result.statusCode).toBe(201);
    expect(JSON.parse(result.body)).toHaveProperty('id');
  });
});
`	ypescript  ypescript`	ypescript  ypescript`	ypescript  ypescript

`	ypescript  ypescript`	ypescript  ypescript`typescript
// Integration test with LocalStack
import { handler } from '../src/lambda';
import { DynamoDBClient } from '@aws-sdk/client-dynamodb';

describe('User Lambda Integration', () => {
  const ddbClient = new DynamoDBClient({
    endpoint: 'http://localhost:4566', // LocalStack
    region: 'us-east-1'
  });
  
  beforeAll(async () => {
    // Setup test table
    await setupTestTable(ddbClient);
  });
  
  afterAll(async () => {
    // Cleanup test table
    await cleanupTestTable(ddbClient);
  });
  
  it('should create and retrieve user', async () => {
    // Create user
    const createEvent = {
      body: JSON.stringify({
        name: 'John Doe',
        email: 'john@example.com'
      })
    };
    
    const createResult = await handler(createEvent);
    const user = JSON.parse(createResult.body);
    
    // Get user
    const getEvent = {
      pathParameters: { id: user.id }
    };
    
    const getResult = await handler(getEvent);
    const retrievedUser = JSON.parse(getResult.body);
    
    expect(retrievedUser.email).toBe('john@example.com');
  });
});
`	ypescript  ypescript`	ypescript  ypescript`	ypescript  ypescript



