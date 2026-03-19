# Saga Pattern

## คำอธิบาย
Design pattern สำหรับจัดการ distributed transactions ใน microservices

## ลักษณะเฉพาะ
- **Local Transactions**: แต่ละ service ทำ transaction ของตัวเอง
- **Compensation Actions**: มี actions สำหรับ rollback
- **Orchestration/Choreography**: จัดการ sequence ของ transactions
- **Failure Handling**: จัดการ failures อัตโนมัติ

## ประเภทของ Saga
- **Orchestration**: Central coordinator จัดการ flow
- **Choreography**: Services ติดต่อกันเองผ่าน events

## ข้อดี
- No distributed locks needed
- Better performance
- Fault tolerance
- Scalability

## ข้อเสีย
- Complexity in implementation
- Difficult debugging
- Compensation logic complexity
- Eventual consistency

## เหมาะกับ
- Distributed transactions
- E-commerce systems
- Booking systems
- Financial applications

---

**หมวดหมู่**: Architecture Patterns
