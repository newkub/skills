# Workers

Workers คือ serverless functions ที่ทำงานบน Cloudflare's edge network ทั่วโลก

## คุณสมบัติหลัก

- **Edge Execution** - ทำงานใกล้กับผู้ใช้มากที่สุด (300+ locations)
- **Zero Cold Starts** - เริ่มทำงานทันทีไม่มี cold start
- **Isolated Environment** - แต่ละ request ทำงานใน environment แยกกัน
- **V8 Isolates** - ใช้ V8 engine ที่ optimized สำหรับ edge

## ประเภท Workers

### HTTP Workers

รับและตอบสนอง HTTP requests

```typescript
export default {
  async fetch(request: Request, env: Env, ctx: ExecutionContext) {
    return new Response("Hello!");
  },
};
```

### Scheduled Workers

ทำงานตาม cron schedule

```typescript
export default {
  async scheduled(controller: ScheduledController, env: Env, ctx: ExecutionContext) {
    // ทำงานตาม schedule
  },
};
```

### Queue Consumers

รับและประมวลผล messages จาก queues

```typescript
export default {
  async queue(batch: MessageBatch, env: Env) {
    for (const msg of batch.messages) {
      // ประมวลผล message
    }
  },
};
```

## Use Cases

- **API Endpoints** - RESTful APIs
- **Edge Middleware** - Authentication, rate limiting
- **Content Transformation** - Image optimization, compression
- **Server-Side Rendering** - Dynamic content
- **Webhooks** - Event handling
