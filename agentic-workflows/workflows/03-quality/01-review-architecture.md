---
title: Review Architecture
description: ตรวจสอบโครงสร้าง project, design patterns, และ architectural best practices
auto_execution_mode: 3
file-patterns:
  - "**/workflows/review-architecture.md"
---

## Prerequisites

- เข้าใจ architectural patterns (MVC, MVVM, Clean Architecture, Layered Architecture)
- รู้จัก SOLID principles และ design patterns ที่ใช้บ่อย
- เข้าใจ separation of concerns และ single responsibility principle
- มีประสบการณ์ review project structure และ module dependencies

## 3.1 Precondition

- มี access ไปยังทั้ง project codebase
- เข้าใจ business domain และ requirements ของ project
- มีสิทธิ์อ่าน/เขียนไฟล์ใน project directory

## 3.2 Prepare

- วาดหรือศึกษา project structure diagram
- ระบุ core modules และ dependencies ระหว่าง modules
- เตรียม checklist ตาม architectural principles ที่ต้องการตรวจสอบ
- ตรวจสอบว่ามี architecture documentation หรือ ADRs อยู่หรือไม่

## 3.3 Execute

1. ตรวจสอบ project structure
   - ดูว่า directory structure สอดคล้องกับ best practices หรือไม่
   - ตรวจสอบว่า files จัดกลุ่มตาม responsibility/feature หรือไม่
   - ระบุไฟล์ที่อยู่ผิดที่ หรือ modules ที่ coupling สูง

2. ตรวจสอบ module dependencies
   - ใช้ dependency analysis tool หรืออ่าน import statements
   - ระบุ circular dependencies
   - ตรวจสอบว่า dependencies flow ถูกทิศทางหรือไม่ (ไม่มีการอ้างอิงย้อนกลับ)
   - ดูว่ามี low cohesion modules หรือไม่

3. ตรวจสอบ design patterns
   - ยืนยันว่าใช้ patterns อย่างถูกต้องและเหมาะสม
   - ระบุ over-engineering หรือ anti-patterns
   - ตรวจสอบ consistency ในการใช้ patterns ทั้ง project

4. ตรวจสอบ SOLID principles
   - Single Responsibility: แต่ละ class/module ทำงานเดียว
   - Open/Closed: เปิดสำหรับ extension ปิดสำหรับ modification
   - Liskov Substitution: derived classes ใช้แทน base classes ได้
   - Interface Segregation: interfaces เล็กและเฉพาะเจาะจง
   - Dependency Inversion: อ้างอิง abstraction ไม่ใช่ concrete implementation

5. ตรวจสอบ separation of concerns
   - Business logic แยกจาก UI/presentation
   - Data access layer แยกจาก business logic
   - Infrastructure code แยกจาก domain code

6. บันทึกปัญหาทางสถาปัตยกรรม
   - จัดระดับ: Critical (ต้องรีบแก้), High (ควรแก้เร็ว), Medium (แก้เมื่อมีเวลา)
   - ระบุ root cause ของแต่ละปัญหา
   - เสนอ solutions และ refactoring approaches

## 3.4 Validate

- [ ] Project structure เป็นระเบียบและสอดคล้องกับ best practices
- [ ] ไม่มี circular dependencies ระหว่าง modules
- [ ] ใช้ design patterns อย่างเหมาะสมและ consistent
- [ ] SOLID principles ถูกปฏิบัติตาม
- [ ] Separation of concerns ชัดเจน
- [ ] Modules มี high cohesion และ low coupling
- [ ] Architecture documentation ครบถ้วน (ถ้ามี)

## 3.5 Verify

- [ ] ยืนยันว่า project build/compile ได้หลังจากการ review
- [ ] ตรวจสอบว่าไม่มี breaking changes จาก architectural changes
- [ ] ทดสอบว่า critical flows ยังทำงานได้ปกติ
