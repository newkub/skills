# Communication Patterns

## Description

เลือกและตั้งค่าวิธีการสื่อสารระหว่าง services ให้เหมาะสมกับความต้องการของระบบ

## Examples

✅ **Synchronous:** REST API สำหรับ request/response ที่ต้องการคำตอบทันที
✅ **Asynchronous:** Message Queue สำหรับ background processing และ event-driven architecture
✅ **Hybrid:** REST สำหรับ critical operations + Message Queue สำหรับ notifications

## Anti-patterns

❌ **Bad:** ใช้ synchronous calls สำหรับ operations ที่ใช้เวลานาน
❌ **Bad:** ไม่มี circuit breaker pattern สำหรับ fault tolerance
❌ **Bad:** ไม่มี retry mechanism สำหรับ network failures

## Configuration Options

1. **REST API** - สำหรับ real-time communication
2. **Message Queue** (RabbitMQ, Kafka) - สำหรับ async processing
3. **gRPC** - สำหรับ high-performance internal communication
4. **GraphQL** - สำหรับ flexible data fetching
5. **Event Sourcing** - สำหรับ audit trail และ replay capabilities

## Setup Requirements

- API Gateway สำหรับ routing และ load balancing
- Service Discovery (Consul, Eureka) สำหรับ dynamic service location
- Circuit Breaker (Hystrix, Resilience4j) สำหรับ fault tolerance
- Rate Limiting สำหรับ protecting services
