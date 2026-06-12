# Tool Integration

หลักการ integration tools ใน Mastra

## คำนิยาม

หลักการ integration tools ที่ดี คือการ:
- ใช้ schema validation สำหรับ input/output
- มี error handling และ retries ที่ robust
- ใช้ caching เมื่อเหมาะสม
- ทำให้ tools สามารถ reuse ได้

## ความสำคัญ

การ integration tools ที่ดีเป็นสิ่งสำคัญเพราะ:
- ทำให้ external integrations stable
- เพิ่ม performance ด้วย caching
- ลด errors ด้วย validation
- ทำให้ reuse ได้ง่าย

## การประยุกต์ใช้

### 1. Schema Validation

ใช้ schema validation สำหรับ input/output:

**✅ ดี:**
```typescript
const tool = new Tool({
  name: 'validated-tool',
  schema: {
    type: 'object',
    properties: {
      url: { type: 'string', format: 'uri' },
      method: { type: 'string', enum: ['GET', 'POST'] }
    },
    required: ['url', 'method']
  },
  execute: async (input) => {
    // Input is validated
  }
});
```

**❌ ไม่ดี:**
```typescript
const tool = new Tool({
  name: 'unvalidated-tool',
  execute: async (input) => {
    // No validation
    const url = input.url; // Could be invalid
  }
});
```

### 2. Robust Error Handling

ใช้ error handling ที่ robust:

**✅ ดี:**
```typescript
const tool = new Tool({
  name: 'robust-tool',
  retry: { max: 3, backoff: 'exponential' },
  execute: async (input) => {
    try {
      const response = await fetch(input.url);
      if (!response.ok) throw new Error('Request failed');
      return response.json();
    } catch (error) {
      logger.error('Tool error', error);
      throw error;
    }
  }
});
```

**❌ ไม่ดี:**
```typescript
const tool = new Tool({
  name: 'fragile-tool',
  execute: async (input) => {
    const response = await fetch(input.url);
    return response.json(); // No error handling
  }
});
```

### 3. Appropriate Caching

ใช้ caching เมื่อเหมาะสม:

**✅ ดี:**
```typescript
const tool = new Tool({
  name: 'cached-tool',
  cache: new Cache({ ttl: 300 }),
  execute: async (input) => {
    return await fetch(input.url);
  }
});
```

**❌ ไม่ดี:**
```typescript
const tool = new Tool({
  name: 'uncached-tool',
  execute: async (input) => {
    return await fetch(input.url); // No caching
  }
});
```

### 4. Reusable Tools

ทำให้ tools สามารถ reuse ได้:

**✅ ดี:**
```typescript
const apiTool = new Tool({
  name: 'api-tool',
  execute: async (input) => {
    return await fetch(input.url);
  }
});

// Reuse across agents
const agent1 = new Agent({ tools: { apiTool } });
const agent2 = new Agent({ tools: { apiTool } });
```

**❌ ไม่ดี:**
```typescript
// Duplicate tool logic
const agent1 = new Agent({
  tools: {
    tool1: new Tool({ execute: async () => fetch() })
  }
});

const agent2 = new Agent({
  tools: {
    tool2: new Tool({ execute: async () => fetch() }) // Duplicate
  }
});
```

## ตัวอย่าง

### Before: Anti-Pattern

```typescript
const badTool = new Tool({
  name: 'bad-tool',
  execute: async (input) => {
    // No validation
    // No error handling
    // No caching
    // Not reusable
    const response = await fetch(input.url);
    return response.json();
  }
});
```

### After: Good Pattern

```typescript
const goodTool = new Tool({
  name: 'good-tool',
  schema: {
    type: 'object',
    properties: {
      url: { type: 'string', format: 'uri' }
    },
    required: ['url']
  },
  cache: new Cache({ ttl: 300 }),
  retry: { max: 3, backoff: 'exponential' },
  execute: async (input) => {
    try {
      const response = await fetch(input.url);
      if (!response.ok) throw new Error('Request failed');
      return response.json();
    } catch (error) {
      logger.error('Tool error', error);
      throw error;
    }
  }
});
```

## Anti-Patterns

### 1. No Validation

ไม่มี input validation:
- Errors จาก invalid input
- Security vulnerabilities
- Debugging ยาก

### 2. No Error Handling

ไม่มี error handling:
- System ไม่ stable
- ยากที่จะ recover
- User experience แย่

### 3. No Caching

ไม่มี caching:
- Performance แย่
- Cost สูง
- Rate limiting issues

### 4. Not Reusable

Tools ที่ไม่ reusable:
- Code duplication
- Maintenance burden
- Inconsistent behavior
