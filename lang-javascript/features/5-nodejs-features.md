---
name: javascript-nodejs-features
description: Node.js features สำหรับ server-side JavaScript development
goal: ให้นักพัฒนาใช้ Node.js modules สำหรับ server-side programming
outcome: สามารถใช้ File System, HTTP Server, Path และ Process modules ได้อย่างมีประสิทธิภาพ
---

# Node.js Features

## Concepts
Node.js เป็น JavaScript runtime สำหรับ server-side programming ที่มี built-in modules สำหรับ file system operations, HTTP server creation, path manipulation, และ process management

## Best Practices
- ใช้ fs module สำหรับ file operations แบบ async/await
- ใช้ http module สำหรับสร้าง web servers
- ใช้ path module สำหรับ cross-platform path handling
- ใช้ process object สำหรับ system information
- ใช้ async/await แทน callbacks สำหรับ readability
- จัดการ errors ใน asynchronous operations

## Examples

### File System (fs module)
```javascript
const fs = require('fs').promises;
const path = require('path');

// Read file
async function readFile(filePath) {
  try {
    const data = await fs.readFile(filePath, 'utf8');
    console.log('File content:', data);
    return data;
  } catch (error) {
    console.error('Error reading file:', error);
    throw error;
  }
}

// Write file
async function writeFile(filePath, content) {
  try {
    await fs.writeFile(filePath, content, 'utf8');
    console.log('File written successfully');
  } catch (error) {
    console.error('Error writing file:', error);
    throw error;
  }
}

// Append to file
async function appendFile(filePath, content) {
  try {
    await fs.appendFile(filePath, content, 'utf8');
    console.log('Content appended successfully');
  } catch (error) {
    console.error('Error appending to file:', error);
    throw error;
  }
}

// Check if file exists
async function fileExists(filePath) {
  try {
    await fs.access(filePath);
    return true;
  } catch {
    return false;
  }
}

// Get file stats
async function getFileStats(filePath) {
  try {
    const stats = await fs.stat(filePath);
    return {
      isFile: stats.isFile(),
      isDirectory: stats.isDirectory(),
      size: stats.size,
      created: stats.birthtime,
      modified: stats.mtime,
      accessed: stats.atime
    };
  } catch (error) {
    console.error('Error getting file stats:', error);
    throw error;
  }
}

// List directory contents
async function listDirectory(dirPath) {
  try {
    const files = await fs.readdir(dirPath);
    const fileStats = await Promise.all(
      files.map(async (file) => {
        const filePath = path.join(dirPath, file);
        const stats = await getFileStats(filePath);
        return { name: file, ...stats };
      })
    );
    return fileStats;
  } catch (error) {
    console.error('Error listing directory:', error);
    throw error;
  }
}

// Create directory
async function createDirectory(dirPath) {
  try {
    await fs.mkdir(dirPath, { recursive: true });
    console.log('Directory created successfully');
  } catch (error) {
    console.error('Error creating directory:', error);
    throw error;
  }
}

// Delete file
async function deleteFile(filePath) {
  try {
    await fs.unlink(filePath);
    console.log('File deleted successfully');
  } catch (error) {
    console.error('Error deleting file:', error);
    throw error;
  }
}

// Copy file
async function copyFile(sourcePath, destPath) {
  try {
    await fs.copyFile(sourcePath, destPath);
    console.log('File copied successfully');
  } catch (error) {
    console.error('Error copying file:', error);
    throw error;
  }
}

// Usage examples
(async () => {
  const filePath = 'example.txt';
  
  // Write file
  await writeFile(filePath, 'Hello, Node.js!');
  
  // Read file
  const content = await readFile(filePath);
  console.log('Content:', content);
  
  // Get file stats
  const stats = await getFileStats(filePath);
  console.log('File stats:', stats);
  
  // Check if exists
  const exists = await fileExists(filePath);
  console.log('File exists:', exists);
})();
```

### HTTP Server (http module)
```javascript
const http = require('http');
const url = require('url');

// Basic HTTP server
const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);
  const pathname = parsedUrl.pathname;
  
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  
  // Route handling
  if (pathname === '/') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello, World!');
  } else if (pathname === '/api/users') {
    if (req.method === 'GET') {
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify([
        { id: 1, name: 'John Doe', email: 'john@example.com' },
        { id: 2, name: 'Jane Smith', email: 'jane@example.com' }
      ]));
    } else if (req.method === 'POST') {
      let body = '';
      req.on('data', chunk => {
        body += chunk.toString();
      });
      req.on('end', () => {
        try {
          const userData = JSON.parse(body);
          res.writeHead(201, { 'Content-Type': 'application/json' });
          res.end(JSON.stringify({ 
            id: 3, 
            ...userData, 
            createdAt: new Date().toISOString() 
          }));
        } catch (error) {
          res.writeHead(400, { 'Content-Type': 'application/json' });
          res.end(JSON.stringify({ error: 'Invalid JSON' }));
        }
      });
    }
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not Found');
  }
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

// Advanced HTTP server with routing
class SimpleRouter {
  constructor() {
    this.routes = {};
  }
  
  get(path, handler) {
    this.routes[`GET:${path}`] = handler;
  }
  
  post(path, handler) {
    this.routes[`POST:${path}`] = handler;
  }
  
  put(path, handler) {
    this.routes[`PUT:${path}`] = handler;
  }
  
  delete(path, handler) {
    this.routes[`DELETE:${path}`] = handler;
  }
  
  handleRequest(req, res) {
    const method = req.method;
    const pathname = url.parse(req.url).pathname;
    const handler = this.routes[`${method}:${pathname}`];
    
    if (handler) {
      handler(req, res);
    } else {
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.end('Not Found');
    }
  }
}

const router = new SimpleRouter();

router.get('/', (req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.end(`
    <html>
      <head><title>Node.js Server</title></head>
      <body>
        <h1>Welcome to Node.js Server</h1>
        <p>Try these endpoints:</p>
        <ul>
          <li><a href="/api/users">GET /api/users</a></li>
          <li><a href="/api/time">GET /api/time</a></li>
        </ul>
      </body>
    </html>
  `);
});

router.get('/api/time', (req, res) => {
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify({
    timestamp: new Date().toISOString(),
    unix: Date.now(),
    timezone: Intl.DateTimeFormat().resolvedOptions().timeZone
  }));
});

router.post('/api/upload', (req, res) => {
  let body = '';
  req.on('data', chunk => {
    body += chunk.toString();
  });
  req.on('end', () => {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({
      message: 'Data received',
      data: body,
      size: body.length
    }));
  });
});

const advancedServer = http.createServer((req, res) => {
  router.handleRequest(req, res);
});

advancedServer.listen(3001, () => {
  console.log('Advanced server running on port 3001');
});
```

### Path Manipulation (path module)
```javascript
const path = require('path');

// Path joining
const fullPath = path.join('users', 'documents', 'file.txt');
console.log(fullPath); // 'users/documents/file.txt' (platform-specific)

// Path resolution
const resolvedPath = path.resolve('users', '../documents', 'file.txt');
console.log(resolvedPath); // Absolute path

// Path normalization
const normalizedPath = path.normalize('users//documents/../file.txt');
console.log(normalizedPath); // 'users/file.txt'

// Get directory name
const dirName = path.dirname('/users/documents/file.txt');
console.log(dirName); // '/users/documents'

// Get file name
const fileName = path.basename('/users/documents/file.txt');
console.log(fileName); // 'file.txt'

// Get file extension
const extName = path.extname('/users/documents/file.txt');
console.log(extName); // '.txt'

// Get file name without extension
const nameWithoutExt = path.basename('/users/documents/file.txt', '.txt');
console.log(nameWithoutExt); // 'file'

// Parse path
const parsedPath = path.parse('/users/documents/file.txt');
console.log(parsedPath);
// {
//   root: '/',
//   dir: '/users/documents',
//   base: 'file.txt',
//   ext: '.txt',
//   name: 'file'
// }

// Check if path is absolute
console.log(path.isAbsolute('/users/file.txt')); // true
console.log(path.isAbsolute('users/file.txt')); // false

// Get relative path between two paths
const relativePath = path.relative('/users/documents', '/users/pictures/image.jpg');
console.log(relativePath); // '../pictures/image.jpg'

// Working with file paths
const filePath = '/users/documents/report.pdf';
const fileDir = path.dirname(filePath);
const fileName = path.basename(filePath, path.extname(filePath));
const newFilePath = path.join(fileDir, `${fileName}_copy${path.extname(filePath)}`);

console.log('Original:', filePath);
console.log('Copy:', newFilePath);

// Cross-platform path handling
const configPath = path.join(process.env.HOME || process.env.USERPROFILE, '.config');
console.log('Config path:', configPath);
```

### Process Management (process object)
```javascript
// Get command line arguments
console.log('Command line arguments:', process.argv);
// process.argv[0] = node executable path
// process.argv[1] = script path
// process.argv[2...] = command line arguments

// Parse command line arguments
const args = process.argv.slice(2);
const options = {
  port: args.includes('--port') ? parseInt(args[args.indexOf('--port') + 1]) : 3000,
  debug: args.includes('--debug'),
  env: args.includes('--env') ? args[args.indexOf('--env') + 1] : 'development'
};

console.log('Options:', options);

// Environment variables
console.log('Node version:', process.version);
console.log('Platform:', process.platform);
console.log('Architecture:', process.arch);
console.log('PID:', process.pid);
console.log('Current working directory:', process.cwd());

// Custom environment variables
const dbHost = process.env.DB_HOST || 'localhost';
const dbPort = process.env.DB_PORT || 5432;
const dbUser = process.env.DB_USER || 'postgres';

console.log('Database config:', { dbHost, dbPort, dbUser });

// Process events
process.on('uncaughtException', (error) => {
  console.error('Uncaught Exception:', error);
  process.exit(1);
});

process.on('unhandledRejection', (reason, promise) => {
  console.error('Unhandled Rejection at:', promise, 'reason:', reason);
  process.exit(1);
});

process.on('SIGINT', () => {
  console.log('Received SIGINT. Press Ctrl+C to exit.');
  cleanup();
  process.exit(0);
});

process.on('SIGTERM', () => {
  console.log('Received SIGTERM');
  cleanup();
  process.exit(0);
});

// Graceful shutdown
function cleanup() {
  console.log('Cleaning up resources...');
  // Close database connections
  // Save state
  // Close file handles
}

// Exit process
process.exitCode = 0; // Set exit code
process.exit(); // Exit with current exit code

// Memory usage
function getMemoryUsage() {
  const usage = process.memoryUsage();
  return {
    rss: Math.round(usage.rss / 1024 / 1024 * 100) / 100, // MB
    heapTotal: Math.round(usage.heapTotal / 1024 / 1024 * 100) / 100, // MB
    heapUsed: Math.round(usage.heapUsed / 1024 / 1024 * 100) / 100, // MB
    external: Math.round(usage.external / 1024 / 1024 * 100) / 100 // MB
  };
}

// CPU usage
function getCpuUsage() {
  const usage = process.cpuUsage();
  return {
    user: usage.user,
    system: usage.system
  };
}

// Uptime
console.log('Process uptime:', process.uptime(), 'seconds');

// HR Time (high resolution time)
const start = process.hrtime.bigint();
// ... some operation
const end = process.hrtime.bigint();
const duration = Number(end - start) / 1000000; // Convert to milliseconds
console.log(`Operation took ${duration}ms`);

// Set process title
process.title = 'my-node-app';

// Working with streams
const { createReadStream, createWriteStream } = require('fs');

function copyFile(source, destination) {
  const readStream = createReadStream(source);
  const writeStream = createWriteStream(destination);
  
  readStream.pipe(writeStream);
  
  return new Promise((resolve, reject) => {
    writeStream.on('finish', resolve);
    writeStream.on('error', reject);
  });
}

// Usage example
(async () => {
  console.log('Node.js Process Information:');
  console.log('Version:', process.version);
  console.log('Platform:', process.platform);
  console.log('Memory:', getMemoryUsage());
  console.log('CPU:', getCpuUsage());
  console.log('Uptime:', process.uptime(), 'seconds');
})();
```

### Complete Example: File Server
```javascript
const http = require('http');
const fs = require('fs').promises;
const path = require('path');
const url = require('url');

class FileServer {
  constructor(rootDir = '.') {
    this.rootDir = path.resolve(rootDir);
  }
  
  async handleRequest(req, res) {
    const parsedUrl = url.parse(req.url, true);
    let pathname = parsedUrl.pathname;
    
    // Default to index.html
    if (pathname === '/') {
      pathname = '/index.html';
    }
    
    const filePath = path.join(this.rootDir, pathname);
    
    try {
      // Security check - prevent directory traversal
      if (!filePath.startsWith(this.rootDir)) {
        res.writeHead(403, { 'Content-Type': 'text/plain' });
        res.end('Forbidden');
        return;
      }
      
      const stats = await fs.stat(filePath);
      
      if (stats.isDirectory()) {
        // List directory contents
        const files = await fs.readdir(filePath);
        const fileList = files.map(file => {
          const fileStats = fs.stat(path.join(filePath, file));
          return {
            name: file,
            isDirectory: fileStats.isDirectory(),
            size: fileStats.size
          };
        });
        
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(fileList));
      } else {
        // Serve file
        const ext = path.extname(filePath);
        const contentType = this.getContentType(ext);
        
        res.writeHead(200, { 'Content-Type': contentType });
        const fileStream = fs.createReadStream(filePath);
        fileStream.pipe(res);
      }
    } catch (error) {
      if (error.code === 'ENOENT') {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('File not found');
      } else {
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end('Internal server error');
      }
    }
  }
  
  getContentType(ext) {
    const types = {
      '.html': 'text/html',
      '.css': 'text/css',
      '.js': 'application/javascript',
      '.json': 'application/json',
      '.png': 'image/png',
      '.jpg': 'image/jpeg',
      '.gif': 'image/gif',
      '.svg': 'image/svg+xml'
    };
    return types[ext] || 'text/plain';
  }
}

const fileServer = new FileServer('./public');

const server = http.createServer((req, res) => {
  fileServer.handleRequest(req, res);
});

server.listen(3002, () => {
  console.log('File server running on port 3002');
});
```

## Verification
1. ตรวจสอบว่า file operations ทำงานได้
2. ทดสอบ HTTP server ทำงานได้
3. ยืนยันว่า path manipulation ทำงานได้
4. ตรวจสอบ process management ทำงานได้
5. ทดสอบ error handling ใน async operations
6. ยืนยันว่า graceful shutdown ทำงานได้
