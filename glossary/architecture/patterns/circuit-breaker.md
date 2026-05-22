# Circuit Breaker Pattern

## คำอธิบาย
Design pattern ที่ป้องกัน cascade failures ใน distributed systems

## ลักษณะเฉพาะ
- **Failure Detection**: ตรวจจับ failures อัตโนมัติ
- **Fallback Mechanism**: ใช้ alternative response เมื่อ service ล้มเหลว
- **Automatic Recovery**: กลับไปใช้ service ปกติเมื่อฟื้นตัว
- **State Management**: มี 3 states: CLOSED, OPEN, HALF_OPEN

## States
- **CLOSED**: Normal operation, requests pass through
- **OPEN**: All requests fail immediately, use fallback
- **HALF_OPEN**: Limited requests test if service recovered

## ข้อดี
- Prevents cascade failures
- Improves system resilience
- Graceful degradation
- Automatic recovery

## ข้อเสีย
- Added complexity
- Configuration challenges
- Potential false positives
- Monitoring overhead

## เหมาะกับ
- Microservices
- External API calls
- Database connections
- Network communications

---

**หมวดหมู่**: Architecture Patterns
