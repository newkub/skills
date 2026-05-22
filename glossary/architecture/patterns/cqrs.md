# CQRS (Command Query Responsibility Segregation)

## คำอธิบาย
Pattern ที่แยก model สำหรับการอ่าน (queries) และการเขียน (commands)

## ลักษณะเฉพาะ
- **Separate Models**: แยก command และ query models
- **Optimized Reads**: Query models  optimized สำหรับการอ่าน
- **Optimized Writes**: Command models  optimized สำหรับการเขียน
- **Event Sourcing**: มักใช้ร่วมกับ Event Sourcing

## Components
- **Commands**: สำหรับ write operations
- **Queries**: สำหรับ read operations
- **Command Handlers**: ประมวลผล commands
- **Query Handlers**: ประมวลผล queries

## ข้อดี
- Optimized performance
- Better scalability
- Clear separation of concerns
- Flexible data models

## ข้อเสีย
- Increased complexity
- Code duplication
- Learning curve
- Synchronization challenges

## เหมาะกับ
- Complex business logic
- High-performance systems
- Collaborative applications
- Read-heavy workloads

---

**หมวดหมู่**: Architecture Patterns
