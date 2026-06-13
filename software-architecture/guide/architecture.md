# Architecture

## ภาพรวม

Software Architecture คือรากฐานของการออกแบบระบบซอฟต์แวร์ กำหนดโครงสร้างระดับสูง การสื่อสารระหว่างส่วนประกอบ และ principles ที่ใช้ในการออกแบบ

## ระดับ Architecture

| ระดับ | คำอธิบาย | ตัวอย่าง |
|--------|-------------|-----------|
| Enterprise Architecture | กลยุทธ์ระดับองค์กร | Technology stack, standards |
| System Architecture | โครงสร้างระบบโดยรวม | Microservices, Monolith |
| Application Architecture | โครงสร้างแอปพลิเคชัน | MVC, Layered, Clean |
| Component Architecture | ส่วนประกอบย่อย | Modules, libraries |

## Architectural Patterns

### Monolithic

```
┌─────────────────────────────────────┐
│         Monolithic App              │
├─────────────────────────────────────┤
│  UI  │  Business Logic  │  Data     │
└─────────────────────────────────────┘
```

**ข้อดี**
- ง่ายต่อการพัฒนาและทดสอบ
- ไม่มี overhead จาก network calls
- เหมาะสำหรับโปรเจกต์ขนาดเล็ก

**ข้อเสีย**
- ยากต่อการ scale
- coupling สูง
- deploy ทั้งระบบเสมอ

### Layered Architecture

```
┌─────────────────┐
│   Presentation  │  ← UI, API
├─────────────────┤
│   Business      │  ← Logic, Rules
├─────────────────┤
│   Data Access   │  ← Database, External
├─────────────────┤
│   Database      │  ← Storage
└─────────────────┘
```

**ข้อดี**
- แยก concerns ชัดเจน
- ง่ายต่อการทดสอบแต่ละ layer
- maintainability สูง

**ข้อเสีย**
- อาจมี overhead จากการส่งผ่าน layer
- อาจเกิด "layer explosion"

### Microservices

```
┌────────┐  ┌────────┐  ┌────────┐
│Service A│  │Service B│  │Service C│
└────┬────┘  └────┬────┘  └────┬────┘
     │            │            │
     └────────────┼────────────┘
                  │
            ┌─────┴─────┐
            │  API GW   │
            └─────┬─────┘
                  │
            ┌─────┴─────┐
            │  Client   │
            └───────────┘
```

**ข้อดี**
- Scale แต่ละ service ได้อิสระ
- Isolation สูง
- Technology heterogeneity

**ข้อเสีย**
- Complexity สูง
- Network overhead
- Distributed system challenges

### Event-Driven

```
┌────────┐      ┌────────┐
│Producer│ ────→│  Event │
└────────┘      │  Bus   │
                └───┬────┘
                    ↓
┌────────┐      ┌────────┐
│Consumer│ ←────│Consumer│
└────────┘      └────────┘
```

**ข้อดี**
- Loose coupling
- Scalability สูง
- Real-time responsiveness

**ข้อเสีย**
- Debugging ยาก
- Event schema management
- Eventual consistency

## Quality Attributes

| Attribute | คำอธิบาย | Measurement |
|-----------|-------------|-------------|
| Performance | ความเร็วในการทำงาน | Response time, throughput |
| Scalability | ความสามารถในการขยาย | Concurrent users, load |
| Availability | ความพร้อมใช้งาน | Uptime % |
| Maintainability | ความง่ายในการบำรุงรักษา | Code complexity, documentation |
| Security | ความปลอดภัย | Vulnerability count, compliance |
| Reliability | ความเชื่อถือได้ | MTBF, MTTR |

## Trade-offs

การออกแบบ architecture เสมอเกี่ยวข้องกับการทำ trade-off:

- **Performance vs. Maintainability** - โค้ดที่เร็วมักซับซ้อน
- **Scalability vs. Complexity** - distributed systems scale ดีแต่ซับซ้อน
- **Security vs. Usability** - security เข้มข้นอาจลด usability
- **Cost vs. Quality** - คุณภาพสูงมักต้องการ resource มาก

## Architectural Decision Records (ADR)

ADR คือการบันทึกการตัดสินใจทาง architecture:

```markdown
# ADR-001: Choose Microservices Architecture

## Status
Accepted

## Context
Monolithic architecture ไม่สามารถ scale ตามความต้องการได้

## Decision
ย้ายไปใช้ microservices architecture

## Consequences
- ข้อดี: Scale ได้อิสระ
- ข้อเสีย: เพิ่ม complexity ของ system
```

## Best Practices

1. **Start Simple** - เริ่มจาก monolithic แล้ว evolve
2. **Separate Concerns** - แยก responsibilities ชัดเจน
3. **Design for Failure** - เตรียมการสำหรับ failure scenarios
4. **Measure Everything** - มี metrics สำหรับ monitoring
5. **Document Decisions** - ใช้ ADR สำหรับ tracking decisions
6. **Iterate** - Architecture evolve ตาม requirements
