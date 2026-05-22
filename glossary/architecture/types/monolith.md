# Monolith Architecture

## คำอธิบาย
สถาปัตยกรรมแบบเดียวที่รวบรวมฟังก์ชันทั้งหมดไว้ใน application เดียว

## ลักษณะเฉพาะ
- **Single Deployment Unit**:  Deploy ครั้งเดียวทั้งระบบ
- **Shared Database**:  ใช้ database ร่วมกัน
- **Tight Coupling**:  components ผูกพันกันแน่น
- **Single Codebase**:  โค้ดทั้งหมดอยู่ใน repository เดียว

## ข้อดี
- Development ง่าย (simple to develop)
- Deployment ง่าย (easy to deploy)
- Debug ง่าย (easy to debug)
- Performance ดี (good performance)

## ข้อเสีย
- Scaling ยาก (hard to scale)
- Technology lock-in
- Single point of failure
- Large codebase

## เหมาะกับ
- Small to medium applications
- Startups (MVP phase)
- Simple business logic
- Limited team size

---

**หมวดหมู่**: Architecture Types
