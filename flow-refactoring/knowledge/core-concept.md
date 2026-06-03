# Core Concepts

## Microservices Architecture

Microservices เป็น architectural style ที่แบ่งแอปพลิเคชันออกเป็น services ขนาดเล็กที่ทำงานอย่างอิสระ แต่ละ service มีความรับผิดชอบเฉพาะ business capability ที่ชัดเจน

## Key Characteristics

1. **Single Responsibility** - แต่ละ service ทำงานเฉพาะอย่างหนึ่ง
2. **Independently Deployable** - สามารถ deploy แยกกันได้
3. **Decentralized** - ไม่มี single point of failure
4. **Technology Agnostic** - ใช้ technology stack ที่แตกต่างกันได้
5. **Data Isolation** - แต่ละ service มี database ของตนเอง

## Service Communication

- **Synchronous** - REST API, gRPC, GraphQL
- **Asynchronous** - Message Queues, Event Streaming
- **Hybrid** - ผสมระหว่าง synchronous และ asynchronous

## Common Patterns

- API Gateway
- Service Discovery
- Circuit Breaker
- Saga Pattern
- Event Sourcing
- CQRS (Command Query Responsibility Segregation)

## Trade-offs

**Benefits:**

- Scalability ในระดับ service
- Technology flexibility
- Fault isolation
- Team autonomy

**Challenges:**

- Complexity ในการจัดการ
- Network latency
- Data consistency
- Monitoring และ debugging
