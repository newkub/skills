# Service Design

## Description
กำหนดขอบเขตและการออกแบบแต่ละ service ให้มีความเป็นอิสระและรับผิดชอบเฉพาะ domain ของตนเอง

## Examples
✅ **Good:** User Service รับผิดชอบ authentication, user profile, และ authorization
✅ **Good:** Order Service จัดการ order creation, status tracking, และ payment processing

## Anti-patterns
❌ **Bad:** สร้าง service ที่ทำหน้าที่หลายอย่าง (user + order + inventory ใน service เดียว)
❌ **Bad:** สร้าง services ที่มีการพึ่งพากันแบบ tight coupling
❌ **Bad:** แบ่ง service ตาม technical layer แทน business domain

## Guidelines
1. ใช้ Domain-Driven Design (DDD) ในการกำหนด service boundaries
2. แต่ละ service ต้องมี single responsibility ที่ชัดเจน
3. หลีกเลี่ยงการแชร์ databases ระหว่าง services
4. ออกแบบให้ services สามารถ deploy และ scale แยกกันได้
5. ใช้ API versioning สำหรับ backward compatibility
