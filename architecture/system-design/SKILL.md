---
name: microservices
description: แนวทางการพัฒนาระบบ Microservices ด้วย best practices
goal: สร้างระบบ microservices ที่มีความสามารถในการขยายตัว บำรุงรักษาง่าย และสื่อสารระหว่าง services ได้อย่างมีประสิทธิภาพ
outcome: สามารถออกแบบ พัฒนา และจัดการระบบ microservices ตามหลักการที่ดีที่สุด
---

## When to Use

ใช้เมื่อต้องการแบ่งแอปพลิเคชันขนาดใหญ่ออกเป็น services ขนาดเล็กที่ทำงานอย่างอิสระ หรือเมื่อต้องการขยายระบบในส่วนต่างๆ แยกกัน

## Quick Start

1. ออกแบบ service boundaries ตาม domain-driven design
2. เลือก communication pattern (synchronous/asynchronous)
3. ตั้งค่า API Gateway สำหรับ routing และ security
4. สร้าง service discovery mechanism
5. ติดตั้ง monitoring และ logging ระดับ service

## Rules

- [Service Design](rules/1-setup.md)
- [Communication Patterns](rules/2-configuration.md)
- [Deployment Strategies](rules/3-usage.md)

## Knowledge

- [Core Concepts](knowledge/core-concept.md)
- [All Features](knowledge/all-features.md)
- [Best Practices](knowledge/best-practices/)

## Verification

1. ตรวจสอบว่า services แยกกันอย่างสมบูรณ์
2. ทดสอบ communication ระหว่าง services
3. ตรวจสอบ scalability และ fault tolerance
