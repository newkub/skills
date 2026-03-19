---
description: Debugging guide ใน Markdown
title: debugging
tags: [markdown, debugging, troubleshooting, guide]
goals:
  - แสดงตัวอย่างการเขียน debugging documentation
  - สอนวิธี document debugging steps
---

## Debugging Guide

````markdown
# Debugging Guide

This guide helps you debug common issues with [Project Name].

## Enable Debug Mode

```bash
# Set debug environment variable
export DEBUG=true

# Or with log level
export LOG_LEVEL=debug
```

## Common Issues

### Issue: Application won't start

**Symptoms:**

- Error on startup
- Port already in use

**Debugging steps:**

1. Check port availability:

   ```bash
   lsof -i :3000
   ```

2. Check logs:

   ```bash
   tail -f logs/app.log
   ```

3. Verify environment variables:

   ```bash
   env | grep APP_
   ```

### Issue: Database connection failed

**Symptoms:**

- Timeout errors
- Connection refused

**Debugging steps:**

1. Test connection:

   ```bash
   pg_isready -h localhost -p 5432
   ```

2. Check credentials:

   ```bash
   echo $DATABASE_URL
   ```

3. Verify database is running:

   ```bash
   docker ps | grep postgres
   ```
````

## Debug Tools

````markdown
## Available Debug Tools

### Logging

```javascript
// Enable verbose logging
const logger = require('debug')('app:server');
logger('Server starting on port %d', port);
```

### Performance Profiling

```bash
# Node.js profiling
node --prof app.js
node --prof-process isolate-*.log > profile.txt
```

### Memory Debugging

```bash
# Check memory usage
curl http://localhost:3000/debug/memory

# Heap snapshot
node --heapsnapshot-near-heap-limit=3 app.js
```
````

## Debug Checklist

````markdown
## Debugging Checklist

- [ ] Check application logs
- [ ] Verify environment variables
- [ ] Test network connectivity
- [ ] Check resource usage (CPU, memory, disk)
- [ ] Review recent changes
- [ ] Test in isolation
- [ ] Enable verbose logging
- [ ] Check for error patterns
````
