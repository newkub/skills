# Serverless Architecture

## คำอธิบาย
สถาปัตยกรรมที่ไม่ต้องจัดการ server โดยใช้ cloud provider's infrastructure

## ลักษณะเฉพาะ
- **Function as a Service**: รัน code เฉพาะตอนเรียกใช้
- **Event-Driven**: ทำงานตาม events
- **Auto-scaling**: ปรับขนาดอัตโนมัติ
- **Pay-per-use**: จ่ายตามการใช้งานจริง

## ข้อดี
- No server management
- Cost effective (pay-per-use)
- Auto-scaling
- High availability

## ข้อเสีย
- Cold start latency
- Vendor lock-in
- Limited execution time
- Debugging complexity

## เหมาะกับ
- Event-driven applications
- Sporadic workloads
- API endpoints
- Data processing pipelines

---

**หมวดหมู่**: Architecture Types
