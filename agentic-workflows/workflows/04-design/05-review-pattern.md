---
title: Review Design Patterns
description: ตรวจสอบการใช้งาน design patterns, architectural patterns และ best practices ใน code
auto_execution_mode: 3
file-patterns:
  - "**/workflows/04-design/*-review-pattern.md"
---

## Prerequisites

- เข้าใจ GoF design patterns (Creational, Structural, Behavioral)
- รู้จัก architectural patterns (MVC, MVVM, Layered, Hexagonal)
- เข้าใจ SOLID principles
- รู้จัก anti-patterns และ code smells

## 3.1 Precondition

- มี codebase ที่ต้องการตรวจสอบ patterns
- มีสิทธิ์อ่าน/เขียนไฟล์ใน project directory
- เข้าใจ business domain และ requirements

## 3.2 Prepare

- ทำความเข้าใจโครงสร้าง project โดยรวม
- ระบุ critical components และ business logic
- เตรียม checklist ตาม design patterns best practices
- ทำความเข้าใจ technology stack ที่ใช้

## 3.3 Execute

1. ตรวจสอบ creational patterns
   - Singleton: ใช้งานถูกต้องหรือ overused?
   - Factory/Abstract Factory: แยก object creation ออกจาก business logic
   - Builder: สร้าง complex objects ได้อย่าง flexible
   - Dependency Injection: loose coupling ระหว่าง components

2. ตรวจสอบ structural patterns
   - Adapter: integrate กับ external systems หรือ legacy code
   - Decorator: add functionality โดยไม่แก้ไข original class
   - Facade: simplify complex subsystems
   - Composite: handle tree structures (UI components, file systems)

3. ตรวจสอบ behavioral patterns
   - Observer/Pub-Sub: loose coupling ระหว่าง event producers/consumers
   - Strategy: interchangeable algorithms
   - Command: encapsulate requests as objects
   - Chain of Responsibility: handle requests ผ่าน handler chain

4. ตรวจสอบ architectural patterns
   - Layered architecture: clear separation of concerns
   - Hexagonal/Clean Architecture: dependencies point inward
   - Microservices: service boundaries และ communication
   - Event-Driven: async processing และ eventual consistency

5. หา anti-patterns
   - God Object: class ที่ทำหน้าที่มากเกินไป
   - Spaghetti Code: tight coupling และ unclear flow
   - Golden Hammer: ใช้ tool/pattern เดิมซ้ำๆ ทุกปัญหา
   - Premature Optimization: optimize ก่อนจำเป็น

6. ตรวจสอบ SOLID principles
   - Single Responsibility: แต่ละ class/module มีหน้าที่เดียว
   - Open/Closed: open for extension, closed for modification
   - Liskov Substitution: subclasses ใช้แทน parent ได้
   - Interface Segregation: small, focused interfaces
   - Dependency Inversion: depend on abstractions

## 3.4 Validate

- [ ] Design patterns ใช้งานถูกต้องตาม context
- [ ] ไม่มี over-engineering หรือ premature abstraction
- [ ] SOLID principles ถูกปฏิบัติตาม
- [ ] Anti-patterns ถูกระบุและแก้ไข
- [ ] Code มี consistency ในการใช้ patterns
- [ ] Documentation อธิบาย patterns ที่ใช้

## 3.5 Verify

- [ ] ยืนยันว่า patterns ช่วย solve problems ไม่ใช่สร้าง complexity
- [ ] ทดสอบว่า abstractions ไม่ทำให้ performance ลดลง
- [ ] ตรวจสอบว่า new developers เข้าใจ patterns ที่ใช้
