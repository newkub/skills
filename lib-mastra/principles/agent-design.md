# Agent Design

หลักการออกแบบ agents ใน Mastra

## คำนิยาม

หลักการออกแบบ agents ที่ดี คือการสร้าง agents ที่:
- มี single responsibility ที่ชัดเจน
- มี decision logic ที่เข้าใจง่าย
- มี error handling ที่ robust
- มี performance ที่ดี

## ความสำคัญ

การออกแบบ agents ที่ดีเป็นสิ่งสำคัญเพราะ:
- ทำให้ maintain และ debug ได้ง่าย
- ลดความซับซ้อนของ system
- เพิ่ม performance และ reliability
- ทำให้ scale ได้ง่าย

## การประยุกต์ใช้

### 1. Single Responsibility

แต่ละ agent ควรมี responsibility เดียว:

**✅ ดี:**
```typescript
const passwordResetAgent = new Agent({
  name: 'password-reset',
  description: 'Handles password reset requests only'
});
```

**❌ ไม่ดี:**
```typescript
const generalAgent = new Agent({
  name: 'general',
  description: 'Handles everything'
});
```

### 2. Clear Decision Logic

ใช้ clear และ testable decision logic:

**✅ ดี:**
```typescript
const agent = new Agent({
  name: 'support-agent',
  decisionLogic: async (input) => {
    if (input.includes('password')) return 'password-tool';
    if (input.includes('order')) return 'order-tool';
    return 'general-tool';
  }
});
```

**❌ ไม่ดี:**
```typescript
const agent = new Agent({
  name: 'support-agent',
  decisionLogic: async (input) => {
    // Complex nested logic
    if (condition1) {
      if (condition2) {
        if (condition3) {
          // ...
        }
      }
    }
  }
});
```

### 3. Robust Error Handling

ใช้ error handling ที่ comprehensive:

**✅ ดี:**
```typescript
const agent = new Agent({
  name: 'robust-agent',
  errorHandler: async (error) => {
    logger.error('Agent error', error);
    if (error.recoverable) {
      return await recover(error);
    }
    throw error;
  }
});
```

**❌ ไม่ดี:**
```typescript
const agent = new Agent({
  name: 'fragile-agent',
  errorHandler: async (error) => {
    throw error; // Just re-throw
  }
});
```

### 4. Performance Optimization

ใช้ caching และ optimization:

**✅ ดี:**
```typescript
const agent = new Agent({
  name: 'optimized-agent',
  cache: new Cache({ ttl: 300 }),
  tools: {
    cachedTool: new Tool({
      cache: true
    })
  }
});
```

**❌ ไม่ดี:**
```typescript
const agent = new Agent({
  name: 'slow-agent',
  // No caching, no optimization
});
```

## ตัวอย่าง

### Before: Anti-Pattern

```typescript
const badAgent = new Agent({
  name: 'bad-agent',
  description: 'Does everything',
  tools: {
    tool1, tool2, tool3, tool4, tool5 // Too many tools
  },
  decisionLogic: async (input) => {
    // Complex nested logic
    if (condition1) {
      if (condition2) {
        // ...
      }
    }
  }
});
```

### After: Good Pattern

```typescript
const goodAgent = new Agent({
  name: 'good-agent',
  description: 'Handles specific task',
  tools: {
    relevantTool // Only relevant tools
  },
  decisionLogic: async (input) => {
    // Clear, testable logic
    if (input.includes('keyword')) return 'relevantTool';
    return 'default';
  },
  cache: new Cache({ ttl: 300 })
});
```

## Anti-Patterns

### 1. God Agent

Agent ที่ทำทุกอย่าง:
- ยากที่จะ maintain
- ยากที่จะ debug
- ยากที่จะ test

### 2. Spaghetti Logic

Decision logic ที่ซับซ้อน:
- ยากที่จะเข้าใจ
- ยากที่จะ test
- ยากที่จะ modify

### 3. No Error Handling

ไม่มี error handling:
- System ไม่ stable
- ยากที่จะ debug
- User experience แย่

### 4. No Optimization

ไม่มี optimization:
- Performance แย่
- Cost สูง
- User experience แย่
