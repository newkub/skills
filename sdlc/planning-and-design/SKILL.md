---
title: Planning And Design
description: วางแผนและออกแบบ architecture ก่อนเริ่มพัฒนา
auto_execution_mode: 3
---

## Goal

วางแผนและออกแบบ architecture ที่เหมาะสมกับ project requirements

## Scope

ใช้สำหรับวางแผนและออกแบบ architecture ของ project ใหม่หรือ major refactor

## Execute

### 1. Define Project Goals

กำหนดเป้าหมาย project

- ระบุ business goals ชัดเจน
- กำหนด success metrics
- กำหนด KPIs ที่วัดได้
- บันทึกใน `docs/goals.md`

### 2. Design Architecture

ออกแบบ architecture

- สร้าง architecture diagram (Clean Architecture, Microservices, etc.)
- กำหนด layer boundaries
- กำหนด module boundaries
- กำหนด data flow

### 3. Design Database Schema

ออกแบบ database schema

- กำหนด tables/collections
- กำหนด relationships
- กำหนด indexes
- กำหนด migrations strategy

### 4. Design API Contracts

ออกแบบ API contracts

- กำหนด endpoints/routes
- กำหนด request/response schemas
- กำหนด error responses
- กำหนด versioning strategy

### 5. Define Error Handling Strategy

กำหนด error handling strategy

- กำหนด error types (DomainError, ValidationError, etc.)
- กำหนด error propagation
- กำหนด error logging
- กำหนด error recovery

### 6. Plan Module Structure

วางแผน module structure

- กำหนด module boundaries
- กำหนด module dependencies
- กำหนด module interfaces
- กำหนด module exports

### 7. Define Testing Strategy

กำหนด testing strategy

- กำหนด test types (unit, integration, E2E)
- กำหนด test coverage targets
- กำหนด test fixtures
- กำหนด test environments

### 8. Plan CI/CD Pipeline

วางแผน CI/CD pipeline

- กำหนด build steps
- กำหนด test steps
- กำหนด deployment steps
- กำหนด environment promotions

### 9. Define Monitoring Strategy

กำหนด monitoring strategy

- กำหนด metrics ที่ต้อง track
- กำหนด logging strategy
- กำหนด alerting rules
- กำหนด dashboards

### 10. Create Development Checklist

สร้าง development checklist

- สร้าง milestones
- กำหนด tasks แต่ละ milestone
- กำหนด dependencies ระหว่าง tasks
- กำหนด estimates

## Rules

### 1. Document Everything

ต้องบันทึกทุกอย่าง

- บันทึก architecture decisions
- บันทึก trade-offs
- บันทึก assumptions
- บันทึกใน `docs/design/`

### 2. Validate With Team

ต้อง validate กับ team

- Review architecture กับ team
- Review database schema กับ team
- Review API contracts กับ team

### 3. Use Standards

ใช้มาตรฐานที่มีอยู่

- ทำตาม `/follow-clean-architecture` สำหรับ architecture
- ทำตาม `/follow-drizzle` สำหรับ database
- ทำตาม `/follow-best-practice` สำหรับ design

## Expected Outcome

- Project goals กำหนดชัดเจน
- Architecture diagram สร้างเสร็จ
- Database schema ออกแบบเสร็จ
- API contracts กำหนดเสร็จ
- Error handling strategy กำหนดเสร็จ
- Module structure วางแผนเสร็จ
- Testing strategy กำหนดเสร็จ
- CI/CD pipeline วางแผนเสร็จ
- Monitoring strategy กำหนดเสร็จ
- Development checklist สร้างเสร็จ
