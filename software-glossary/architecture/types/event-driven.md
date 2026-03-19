# Event-Driven Architecture

## คำอธิบาย
สถาปัตยกรรมที่ components ติดต่อกันผ่าน events และ asynchronous messaging

## ลักษณะเฉพาะ
- **Event Producers**: สร้างและส่ง events
- **Event Consumers**: รับและประมวลผล events
- **Event Bus**: สื่อสารระหว่าง components
- **Loose Coupling**:  components ไม่รู้จักกันโดยตรง

## ข้อดี
- High scalability
- Fault tolerance
- Flexibility
- Real-time processing

## ข้อเสีย
- Complexity in debugging
- Event ordering challenges
- Event schema management
- Monitoring complexity

## เหมาะกับ
- Real-time systems
- IoT applications
- Financial systems
- Microservices communication

---

**หมวดหมู่**: Architecture Types
