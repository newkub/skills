# Microservices Architecture

## คำอธิบาย
สถาปัตยกรรมที่แบ่ง application เป็น services ขนาดเล็กที่ทำงานอิสระต่อกัน

## ลักษณะเฉพาะ
- **Service Independence**: แต่ละ service ทำงานได้เอง
- **Separate Databases**: แต่ละ service มี database ของตัวเอง
- **Loose Coupling**:  services ผูกพันกันน้อย
- **API Communication**: ติดต่อกันผ่าน API

## ข้อดี
- Independent scaling
- Technology diversity
- Fault isolation
- Team autonomy

## ข้อเสีย
- Network complexity
- Data consistency challenges
- Deployment complexity
- Monitoring overhead

## เหมาะกับ
- Large applications
- Complex business logic
- Multiple teams
- High scalability requirements

---

**หมวดหมู่**: Architecture Types
