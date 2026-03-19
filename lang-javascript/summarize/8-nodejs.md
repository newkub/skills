---
name: javascript-nodejs-summary
description: สรุป best practices สำหรับ Node.js development ใน JavaScript
goal: ให้นักพัฒนาเขียน Node.js applications ได้อย่างมีประสิทธิภาพและปลอดภัย
outcome: สามารถใช้ Node.js modules, file system, HTTP server และ process management ได้อย่างถูกต้อง
---

# Node.js Best Practices

## Overview

Best practices สำหรับการพัฒนา Node.js applications รวมถึง file operations, HTTP servers, process management และ security

## Best Practices Summary

| Practice | Description | Priority | Example |
|----------|-------------|----------|---------|
| Use fs.promises for file operations | Modern async file handling | High | `await fs.readFile('file.txt')` |
| Use path.join for cross-platform paths | Platform-independent paths | High | `path.join('folder', 'file.txt')` |
| Handle process signals gracefully | Proper shutdown | Medium | `process.on('SIGINT', cleanup)` |
| Use environment variables for config | Secure configuration management | High | `process.env.DB_HOST` |
| Implement proper error handling | Handle async errors gracefully | High | `try { await operation() } catch (error) { ... }` |
| Use async/await over callbacks | Better code readability | High | `const data = await readFile()` |
| Use streams for large data | Memory-efficient processing | Medium | `fs.createReadStream()` |
| Implement logging | Monitor application health | Medium | `winston` or `pino` |
| Use clustering for CPU-intensive tasks | Utilize multiple cores | Medium | `cluster.fork()` |
| Validate input data | Prevent security issues | High | Input sanitization |

## Implementation Guidelines

### High Priority Practices

1. **Use fs.promises** - Modern async file handling
2. **Use path.join** - Cross-platform compatibility
3. **Use environment variables** - Secure configuration
4. **Implement proper error handling** - Handle async errors
5. **Use async/await** - Better than callbacks

### Medium Priority Practices

1. **Handle process signals** - Graceful shutdown
2. **Use streams** - Memory-efficient processing
3. **Implement logging** - Monitor application health
4. **Use clustering** - Multi-core utilization
5. **Validate input data** - Security

### Node.js Checklist

#### File Operations

- [ ] Use fs.promises instead of callbacks
- [ ] Use path.join for cross-platform paths
- [ ] Handle file errors properly
- [ ] Use streams for large files
- [ ] Implement proper cleanup

#### Server Development

- [ ] Handle HTTP errors properly
- [ ] Use proper middleware
- [ ] Implement security headers
- [ ] Handle graceful shutdown
- [ ] Use environment variables

#### Process Management

- [ ] Handle process signals
- [ ] Implement proper logging
- [ ] Monitor memory usage
- [ ] Handle uncaught exceptions
- [ ] Use clustering when needed

## Common Node.js Patterns

| Pattern | Use Case | Example |
|---------|----------|---------|
| Async file operations | File I/O | `fs.promises.readFile()` |
| HTTP server | Web applications | `http.createServer()` |
| Path manipulation | Cross-platform paths | `path.join()` |
| Process management | Application lifecycle | `process.on()` |
| Stream processing | Large data | `fs.createReadStream()` |

## Node.js Examples

### Modern File Operations

```javascript
// Good: Modern async file operations
const fs = require('fs').promises;
const path = require('path');

class FileManager {
  constructor(basePath) {
    this.basePath = path.resolve(basePath);
  }

  async readFile(filePath) {
    try {
      const fullPath = path.join(this.basePath, filePath);
      const data = await fs.readFile(fullPath, 'utf8');
      return data;
    } catch (error) {
      if (error.code === 'ENOENT') {
        throw new Error(`File not found: ${filePath}`);
      } else if (error.code === 'EACCES') {
        throw new Error(`Permission denied: ${filePath}`);
      } else {
        throw new Error(`Failed to read file: ${filePath} - ${error.message}`);
      }
    }
  }

  async writeFile(filePath, content) {
    try {
      const fullPath = path.join(this.basePath, filePath);

      // Ensure directory exists
      await fs.mkdir(path.dirname(fullPath), { recursive: true });

      await fs.writeFile(fullPath, content, 'utf8');
      return true;
    } catch (error) {
      throw new Error(`Failed to write file: ${filePath} - ${error.message}`);
    }
  }

  async appendFile(filePath, content) {
    try {
      const fullPath = path.join(this.basePath, filePath);
      await fs.appendFile(fullPath, content, 'utf8');
      return true;
    } catch (error) {
      throw new Error(`Failed to append to file: ${filePath} - ${error.message}`);
    }
  }

  async fileExists(filePath) {
    try {
      const fullPath = path.join(this.basePath, filePath);
      await fs.access(fullPath);
      return true;
    } catch {
      return false;
    }
  }

  async getFileStats(filePath) {
    try {
      const fullPath = path.join(this.basePath, filePath);
      const stats = await fs.stat(fullPath);
      return {
        isFile: stats.isFile(),
        isDirectory: stats.isDirectory(),
        size: stats.size,
        created: stats.birthtime,
        modified: stats.mtime,
        accessed: stats.atime
      };
    } catch (error) {
      throw new Error(`Failed to get file stats: ${filePath} - ${error.message}`);
    }
  }

  async listDirectory(dirPath) {
    try {
      const fullPath = path.join(this.basePath, dirPath);
      const items = await fs.readdir(fullPath);

      const itemStats = await Promise.all(
        items.map(async (item) => {
          const itemPath = path.join(fullPath, item);
          const stats = await this.getFileStats(path.relative(this.basePath, itemPath));
          return { name: item, ...stats };
        })
      );

      return itemStats;
    } catch (error) {
      throw new Error(`Failed to list directory: ${dirPath} - ${error.message}`);
    }
  }
}

// Usage
const fileManager = new FileManager('./data');

try {
  const content = await fileManager.readFile('config.json');
  console.log('Config:', content);

  await fileManager.writeFile('output.txt', 'Hello, Node.js!');
  console.log('File written successfully');

  const exists = await fileManager.fileExists('config.json');
  console.log('File exists:', exists);
} catch (error) {
  console.error('File operation failed:', error.message);
}
```

### HTTP Server Best Practices

```javascript
// Good: Modern HTTP server with proper error handling
const http = require('http');
const url = require('url');
const querystring = require('querystring');

class HTTPServer {
  constructor(port = 3000) {
    this.port = port;
    this.server = null;
    this.routes = new Map();
    this.middleware = [];
  }

  use(middleware) {
    this.middleware.push(middleware);
  }

  get(path, handler) {
    this.addRoute('GET', path, handler);
  }

  post(path, handler) {
    this.addRoute('POST', path, handler);
  }

  put(path, handler) {
    this.addRoute('PUT', path, handler);
  }

  delete(path, handler) {
    this.addRoute('DELETE', path, handler);
  }

  addRoute(method, path, handler) {
    const key = `${method}:${path}`;
    this.routes.set(key, handler);
  }

  async handleRequest(req, res) {
    try {
      // Parse URL
      const parsedUrl = url.parse(req.url, true);
      const pathname = parsedUrl.pathname;
      const method = req.method;

      // Set security headers
      res.setHeader('X-Content-Type-Options', 'nosniff');
      res.setHeader('X-Frame-Options', 'DENY');
      res.setHeader('X-XSS-Protection', '1; mode=block');

      // Find route handler
      const routeKey = `${method}:${pathname}`;
      const handler = this.routes.get(routeKey);

      if (handler) {
        // Execute middleware
        for (const middleware of this.middleware) {
          await middleware(req, res);
        }

        await handler(req, res);
      } else {
        res.writeHead(404, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: 'Not Found' }));
      }
    } catch (error) {
      console.error('Request handling error:', error);
      res.writeHead(500, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ error: 'Internal Server Error' }));
    }
  }

  parseBody(req) {
    return new Promise((resolve, reject) => {
      let body = '';

      req.on('data', chunk => {
        body += chunk.toString();
      });

      req.on('end', () => {
        try {
          const contentType = req.headers['content-type'];

          if (contentType && contentType.includes('application/json')) {
            resolve(JSON.parse(body));
          } else if (contentType && contentType.includes('application/x-www-form-urlencoded')) {
            resolve(querystring.parse(body));
          } else {
            resolve(body);
          }
        } catch (error) {
          reject(error);
        }
      });

      req.on('error', reject);
    });
  }

  start() {
    this.server = http.createServer((req, res) => {
      this.handleRequest(req, res);
    });

    this.server.listen(this.port, () => {
      console.log(`Server running on port ${this.port}`);
    });

    // Handle server errors
    this.server.on('error', (error) => {
      console.error('Server error:', error);
    });
  }

  stop() {
    return new Promise((resolve) => {
      if (this.server) {
        this.server.close(() => {
          console.log('Server stopped');
          resolve();
        });
      } else {
        resolve();
      }
    });
  }
}

// Usage
const server = new HTTPServer(3000);

// Middleware for logging
server.use((req, res) => {
  console.log(`${req.method} ${req.url}`);
});

// Middleware for CORS
server.use((req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
});

// Routes
server.get('/', (req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.end('<h1>Hello, Node.js!</h1>');
});

server.get('/api/users', async (req, res) => {
  try {
    const users = await getUsersFromDatabase();
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(users));
  } catch (error) {
    res.writeHead(500, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ error: 'Failed to fetch users' }));
  }
});

server.post('/api/users', async (req, res) => {
  try {
    const userData = await server.parseBody(req);
    const newUser = await createUserInDatabase(userData);

    res.writeHead(201, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(newUser));
  } catch (error) {
    res.writeHead(400, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ error: 'Invalid user data' }));
  }
});

// Start server
server.start();

// Graceful shutdown
process.on('SIGINT', async () => {
  console.log('Received SIGINT, shutting down gracefully...');
  await server.stop();
  process.exit(0);
});

process.on('SIGTERM', async () => {
  console.log('Received SIGTERM, shutting down gracefully...');
  await server.stop();
  process.exit(0);
});
```

### Process Management and Configuration

```javascript
// Good: Process management with environment variables
require('dotenv').config();

class AppConfig {
  constructor() {
    this.validateEnvironment();
    this.config = this.loadConfig();
  }

  validateEnvironment() {
    const required = ['NODE_ENV', 'PORT', 'DB_HOST', 'DB_PASSWORD'];
    const missing = required.filter(key => !process.env[key]);

    if (missing.length > 0) {
      throw new Error(`Missing required environment variables: ${missing.join(', ')}`);
    }
  }

  loadConfig() {
    return {
      env: process.env.NODE_ENV || 'development',
      port: parseInt(process.env.PORT) || 3000,
      database: {
        host: process.env.DB_HOST,
        port: parseInt(process.env.DB_PORT) || 5432,
        name: process.env.DB_NAME || 'app',
        username: process.env.DB_USER || 'postgres',
        password: process.env.DB_PASSWORD,
        ssl: process.env.DB_SSL === 'true'
      },
      redis: {
        host: process.env.REDIS_HOST || 'localhost',
        port: parseInt(process.env.REDIS_PORT) || 6379,
        password: process.env.REDIS_PASSWORD
      },
      jwt: {
        secret: process.env.JWT_SECRET,
        expiresIn: process.env.JWT_EXPIRES_IN || '24h'
      },
      logging: {
        level: process.env.LOG_LEVEL || 'info',
        file: process.env.LOG_FILE || 'app.log'
      }
    };
  }

  get(key) {
    return key.split('.').reduce((obj, k) => obj?.[k], this.config);
  }
}

class ProcessManager {
  constructor(config) {
    this.config = config;
    this.isShuttingDown = false;
    this.setupProcessHandlers();
  }

  setupProcessHandlers() {
    // Handle uncaught exceptions
    process.on('uncaughtException', (error) => {
      console.error('Uncaught Exception:', error);
      this.gracefulShutdown(1);
    });

    // Handle unhandled promise rejections
    process.on('unhandledRejection', (reason, promise) => {
      console.error('Unhandled Rejection at:', promise, 'reason:', reason);
      this.gracefulShutdown(1);
    });

    // Handle termination signals
    process.on('SIGTERM', () => {
      console.log('Received SIGTERM');
      this.gracefulShutdown(0);
    });

    process.on('SIGINT', () => {
      console.log('Received SIGINT');
      this.gracefulShutdown(0);
    });

    // Handle warnings
    process.on('warning', (warning) => {
      console.warn('Process Warning:', warning);
    });
  }

  async gracefulShutdown(exitCode = 0) {
    if (this.isShuttingDown) {
      console.log('Already shutting down...');
      return;
    }

    this.isShuttingDown = true;
    console.log('Starting graceful shutdown...');

    try {
      // Close database connections
      await this.closeDatabaseConnections();

      // Close Redis connections
      await this.closeRedisConnections();

      // Close HTTP server
      await this.closeHTTPServer();

      // Flush logs
      await this.flushLogs();

      console.log('Graceful shutdown completed');
      process.exit(exitCode);
    } catch (error) {
      console.error('Error during shutdown:', error);
      process.exit(1);
    }
  }

  async closeDatabaseConnections() {
    // Implementation depends on your database library
    console.log('Closing database connections...');
  }

  async closeRedisConnections() {
    // Implementation depends on your Redis library
    console.log('Closing Redis connections...');
  }

  async closeHTTPServer() {
    console.log('Closing HTTP server...');
  }

  async flushLogs() {
    console.log('Flushing logs...');
  }

  getMemoryUsage() {
    const usage = process.memoryUsage();
    return {
      rss: Math.round(usage.rss / 1024 / 1024 * 100) / 100,
      heapTotal: Math.round(usage.heapTotal / 1024 / 1024 * 100) / 100,
      heapUsed: Math.round(usage.heapUsed / 1024 / 1024 * 100) / 100,
      external: Math.round(usage.external / 1024 / 1024 * 100) / 100
    };
  }

  startHealthChecks() {
    setInterval(() => {
      const memory = this.getMemoryUsage();
      console.log('Memory usage:', memory);

      // Alert if memory usage is high
      if (memory.heapUsed > 500) { // 500MB
        console.warn('High memory usage detected:', memory.heapUsed);
      }
    }, 60000); // Check every minute
  }
}

// Usage
const config = new AppConfig();
const processManager = new ProcessManager(config);

console.log('Application config:', config.get('database'));
processManager.startHealthChecks();
```

### Stream Processing

```javascript
// Good: Stream processing for large files
const fs = require('fs');
const readline = require('readline');
const { Transform } = require('stream');

class StreamProcessor {
  constructor() {
    this.processors = [];
  }

  addProcessor(processor) {
    this.processors.push(processor);
    return this;
  }

  processFile(inputPath, outputPath) {
    return new Promise((resolve, reject) => {
      const readStream = fs.createReadStream(inputPath);
      const writeStream = fs.createWriteStream(outputPath);

      // Create transform stream
      const transformStream = new Transform({
        objectMode: false,
        transform(chunk, encoding, callback) {
          try {
            let processedData = chunk.toString();

            // Apply all processors
            for (const processor of this.processors) {
              processedData = processor(processedData);
            }

            callback(null, processedData);
          } catch (error) {
            callback(error);
          }
        }
      });

      // Handle stream events
      readStream.on('error', reject);
      writeStream.on('error', reject);
      transformStream.on('error', reject);

      writeStream.on('finish', () => {
        console.log(`File processed: ${inputPath} -> ${outputPath}`);
        resolve();
      });

      // Pipe streams
      readStream.pipe(transformStream).pipe(writeStream);
    });
  }

  processLargeFile(inputPath, processor) {
    return new Promise((resolve, reject) => {
      const readStream = fs.createReadStream(inputPath);
      const rl = readline.createInterface({
        input: readStream,
        crlfDelay: Infinity
      });

      let lineNumber = 0;

      rl.on('line', async (line) => {
        lineNumber++;

        try {
          await processor(line, lineNumber);
        } catch (error) {
          console.error(`Error processing line ${lineNumber}:`, error);
        }
      });

      rl.on('close', () => {
        console.log(`Processed ${lineNumber} lines`);
        resolve();
      });

      rl.on('error', reject);
    });
  }
}

// Usage
const processor = new StreamProcessor();

// Add processors
processor
  .addProcessor(data => data.toUpperCase())
  .addProcessor(data => data.replace(/\s+/g, ' '))
  .addProcessor(data => data.trim());

// Process file
processor.processFile('input.txt', 'output.txt')
  .then(() => console.log('Processing complete'))
  .catch(error => console.error('Processing failed:', error));

// Process large file line by line
processor.processLargeFile('large-file.txt', async (line, lineNumber) => {
  if (lineNumber % 1000 === 0) {
    console.log(`Processed ${lineNumber} lines`);
  }

  // Process each line
  if (line.includes('ERROR')) {
    console.log(`Found error on line ${lineNumber}:`, line);
  }
});
```

## Verification

1. ตรวจสอบว่าใช้ fs.promises แทน callbacks
2. ทดสอบว่าใช้ path.join สำหรับ cross-platform paths
3. ยืนยันว่ามี proper error handling
4. ตรวจสอบว่าใช้ environment variables สำหรับ configuration
5. ทดสอบว่ามี graceful shutdown
6. ยืนยันว่ามี process signal handling
7. ตรวจสอบว่าใช้ streams สำหรับ large data
8. ทดสอบว่ามี proper logging และ monitoring
